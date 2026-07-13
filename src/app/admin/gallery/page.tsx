"use client";

import { useEffect, useState, useRef } from "react";
import { getSupabase, uploadImage } from "@/lib/supabase";

export default function GalleryEditorPage() {
  const [images, setImages] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchImages = async () => {
    const supabase = getSupabase();
    const { data } = await supabase.from("gallery_images").select("*").order("sort_order");
    setImages(data || []);
  };

  useEffect(() => { fetchImages(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setUploading(true);

    for (let i = 0; i < files.length; i++) {
      const url = await uploadImage(files[i], "gallery");
      if (url) {
        const supabase = getSupabase();
        await supabase.from("gallery_images").insert({
          image_url: url,
          alt_text: files[i].name.replace(/\.[^/.]+$/, ""),
          category: "General",
          sort_order: images.length + i + 1,
        });
      }
    }

    setUploading(false);
    fetchImages();
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Remove this image?")) return;
    const supabase = getSupabase();
    await supabase.from("gallery_images").delete().eq("id", id);
    fetchImages();
  };

  const handleUpdateAlt = async (id: number, alt: string) => {
    const supabase = getSupabase();
    await supabase.from("gallery_images").update({ alt_text: alt }).eq("id", id);
  };

  const handleUpdateCategory = async (id: number, category: string) => {
    const supabase = getSupabase();
    await supabase.from("gallery_images").update({ category }).eq("id", id);
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🎨 Gallery Manager</h1>
          <p className="text-gray-500 text-sm mt-1">{images.length} images in gallery</p>
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {uploading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              Uploading...
            </>
          ) : (
            <>📤 Upload Images</>
          )}
        </button>
        <input ref={fileRef} type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-md transition-all flex flex-col justify-between">
            <div className="aspect-square relative">
              <img src={img.image_url} alt={img.alt_text} className="w-full h-full object-cover" />
              <button
                onClick={() => handleDelete(img.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-red-600"
              >
                ✕
              </button>
            </div>
            <div className="p-3 space-y-2">
              <div>
                <label className="block text-[9px] text-gray-400 font-semibold uppercase mb-0.5">Alt Text</label>
                <input
                  type="text"
                  defaultValue={img.alt_text}
                  onBlur={(e) => handleUpdateAlt(img.id, e.target.value)}
                  placeholder="Alt text..."
                  className="w-full px-2 py-1 border border-gray-200 rounded-lg text-xs text-gray-700 focus:border-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-[9px] text-gray-400 font-semibold uppercase mb-0.5">Category</label>
                <input
                  type="text"
                  defaultValue={img.category || "General"}
                  onBlur={(e) => handleUpdateCategory(img.id, e.target.value)}
                  placeholder="Category..."
                  className="w-full px-2 py-1 border border-gray-200 rounded-lg text-xs text-gray-700 focus:border-blue-400 outline-none"
                  list="category-suggestions"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Add placeholder */}
        <button
          onClick={() => fileRef.current?.click()}
          className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-pointer"
        >
          <span className="text-3xl">📷</span>
          <span className="text-xs text-gray-400 font-medium">Add Images</span>
        </button>
      </div>

      <datalist id="category-suggestions">
        <option value="Balcony Zip Blinds" />
        <option value="Curtains & Blinds" />
        <option value="Invisible Grills" />
        <option value="Mosquito Netting" />
        <option value="Custom Cushions & Upholstery" />
        <option value="Solar Film" />
        <option value="Repairs & Servicing" />
      </datalist>
    </div>
  );
}
