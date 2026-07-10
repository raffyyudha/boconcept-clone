"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";
import ImageUploader from "../components/ImageUploader";

export default function ServicesEditorPage() {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  const fetchItems = async () => {
    const supabase = getSupabase();
    const { data } = await supabase.from("services").select("*").order("sort_order");
    setItems(data || []);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async (item: any) => {
    setSaving(true);
    const supabase = getSupabase();
    const features = Array.isArray(item.features) ? item.features : [];
    if (item.id) {
      await supabase.from("services").update({ title: item.title, category: item.category, image: item.image, description: item.description, features, sort_order: item.sort_order, updated_at: new Date().toISOString() }).eq("id", item.id);
    } else {
      await supabase.from("services").insert({ title: item.title, category: item.category, image: item.image, description: item.description, features, sort_order: items.length + 1 });
    }
    setSaving(false);
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this service?")) return;
    const supabase = getSupabase();
    await supabase.from("services").delete().eq("id", id);
    fetchItems();
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🛠️ Services</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} services listed</p>
        </div>
        <button onClick={() => setEditing({ title: "", category: "", image: "", description: "", features: [], sort_order: items.length + 1 })} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700">➕ Add Service</button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 hover:shadow-sm transition-all">
            {item.image && !item.image.includes('svg') && (
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-xl shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-blue-600 font-medium mb-1">{item.category}</p>
              <h3 className="font-semibold text-sm text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => setEditing({ ...item, features: Array.isArray(item.features) ? item.features : JSON.parse(item.features || '[]') })} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100">✏️ Edit</button>
              <button onClick={() => handleDelete(item.id)} className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100">🗑️</button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between"><h2 className="text-lg font-bold text-gray-900">{editing.id ? "Edit" : "Add"} Service</h2><button onClick={() => setEditing(null)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">✕</button></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Title</label><input type="text" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Category</label><input type="text" value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
            </div>
            <ImageUploader currentUrl={editing.image} onUpload={(url) => setEditing({ ...editing, image: url })} folder="services" label="Service Image" />
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Description</label><textarea value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Features (one per line)</label><textarea value={editing.features.join("\n")} onChange={(e) => setEditing({ ...editing, features: e.target.value.split("\n").filter((f: string) => f.trim()) })} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none font-mono" /></div>
            <div className="flex gap-3">
              <button onClick={() => handleSave(editing)} disabled={saving} className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 disabled:opacity-50">{saving ? "Saving..." : "💾 Save"}</button>
              <button onClick={() => setEditing(null)} className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl font-medium text-sm hover:bg-gray-50">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
