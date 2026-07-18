"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";
import ImageUploader from "../components/ImageUploader";

export default function CatalogueEditorPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const fetchProducts = async () => {
    const supabase = getSupabase();
    const { data } = await supabase.from("catalogue_products").select("*").order("sort_order");
    setProducts(data || []);
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleFixImagePaths = async () => {
    if (!confirm("This will migrate all catalogue product image URLs in the database to remove spaces so they load correctly on Cloudflare/CDN. Proceed?")) return;
    
    const fixes = [
      { old: '/catalogue/2, 3 & 4 inches gap Invisible grill.avif', new: '/catalogue/2-3-4-inches-gap-invisible-grill.avif' },
      { old: '/catalogue/Combi or Zebra Korean blind.avif', new: '/catalogue/combi-or-zebra-korean-blind.avif' },
      { old: '/catalogue/Commerical Roller blinds.avif', new: '/catalogue/commercial-roller-blinds.avif' },
      { old: '/catalogue/Day & Night blackout Honeycomb slidling blind.avif', new: '/catalogue/day-night-blackout-honeycomb-sliding-blind.avif' },
      { old: '/catalogue/Day & Night curtain..avif', new: '/catalogue/day-night-curtain.avif' },
      { old: '/catalogue/Monocord  One cord 50mm Venetian blinds.avif', new: '/catalogue/monocord-one-cord-50mm-venetian-blinds.avif' },
      { old: '/catalogue/Mosquito cat mesh netting.avif', new: '/catalogue/mosquito-cat-mesh-netting.avif' },
      { old: '/catalogue/Motorised Manual Zip blinds..avif', new: '/catalogue/motorised-manual-zip-blinds.avif' },
      { old: '/catalogue/Motorized laundry system.avif', new: '/catalogue/motorized-laundry-system.avif' },
      { old: '/catalogue/Night Curtain.avif', new: '/catalogue/night-curtain.avif' },
      { old: '/catalogue/Roof with zip blind.avif', new: '/catalogue/roof-with-zip-blind.avif' },
      { old: '/catalogue/Single layer night curtain.avif', new: '/catalogue/single-layer-night-curtain.avif' },
      { old: '/catalogue/Slidling Honeycomb blinds.avif', new: '/catalogue/sliding-honeycomb-blinds.avif' },
      { old: '/catalogue/Uni slat Smart curtain blind.avif', new: '/catalogue/uni-slat-smart-curtain-blind.avif' },
      { old: '/catalogue/light & Heavy Water depensar.avif', new: '/catalogue/light-heavy-water-dispenser.avif' }
    ];

    const supabase = getSupabase();
    let updatedCount = 0;

    for (const fix of fixes) {
      const { data, error } = await supabase
        .from("catalogue_products")
        .update({ image: fix.new })
        .eq("image", fix.old)
        .select();

      if (error) {
        console.error(`Failed to update ${fix.old}:`, error.message);
      } else if (data && data.length > 0) {
        updatedCount += data.length;
      }
    }

    alert(`Successfully fixed ${updatedCount} image paths in database!`);
    fetchProducts();
  };

  const handleSave = async (product: any) => {
    setSaving(true);
    const supabase = getSupabase();
    const features = Array.isArray(product.features) ? product.features : [];
    if (product.id) {
      await supabase.from("catalogue_products").update({
        name: product.name,
        image: product.image,
        description: product.description,
        features,
        sort_order: product.sort_order,
        updated_at: new Date().toISOString(),
      }).eq("id", product.id);
    } else {
      await supabase.from("catalogue_products").insert({
        name: product.name,
        image: product.image,
        description: product.description,
        features,
        sort_order: products.length + 1,
      });
    }
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setEditingProduct(null);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this product?")) return;
    const supabase = getSupabase();
    await supabase.from("catalogue_products").delete().eq("id", id);
    fetchProducts();
  };

  const newProduct = () => {
    setEditingProduct({ name: "", image: "", description: "", features: [], sort_order: products.length + 1 });
  };

  return (
    <div className="max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📦 Catalogue Products</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your product catalogue ({products.length} items)</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleFixImagePaths}
            className="px-4 py-2.5 bg-amber-600 text-white rounded-xl font-medium text-sm hover:bg-amber-700 transition-colors flex items-center gap-2"
          >
            ⚡ Fix Spaces in Image Paths
          </button>
          <button onClick={newProduct} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors">
            ➕ Add Product
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all">
            {p.image && (
              <img src={p.image} alt={p.name} className="w-full h-36 object-cover" />
            )}
            <div className="p-4">
              <h3 className="font-semibold text-sm text-gray-900 mb-1">{p.name}</h3>
              <p className="text-xs text-gray-500 line-clamp-2 mb-3">{p.description}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingProduct({ ...p, features: Array.isArray(p.features) ? p.features : JSON.parse(p.features || '[]') })}
                  className="flex-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">{editingProduct.id ? "Edit Product" : "New Product"}</h2>
              <button onClick={() => setEditingProduct(null)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">✕</button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none"
                />
              </div>

              <ImageUploader
                currentUrl={editingProduct.image}
                onUpload={(url) => setEditingProduct({ ...editingProduct, image: url })}
                folder="catalogue"
                label="Product Image"
              />

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Features (one per line)
                </label>
                <textarea
                  value={editingProduct.features.join("\n")}
                  onChange={(e) => setEditingProduct({ ...editingProduct, features: e.target.value.split("\n").filter((f: string) => f.trim()) })}
                  rows={4}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none font-mono"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => handleSave(editingProduct)}
                  disabled={saving}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {saving ? "Saving..." : saved ? "✅ Saved!" : "💾 Save Product"}
                </button>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
