"use client";

import { useEffect, useState, useRef } from "react";
import { getSupabase, uploadImage } from "@/lib/supabase";

const CATEGORIES = [
  "General",
  "Zip blind",
  "Night curtain",
  "Day curtain",
  "Day & night curtain",
  "Roller blind",
  "Roman blind",
  "Combi blind",
  "Timber blind",
  "Uni slat blind",
  "Invisible grill",
  "Wall covering",
  "Vinyl flooring",
];

export default function GalleryEditorPage() {
  const [images, setImages] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadCategory, setUploadCategory] = useState("General");
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
          subtitle: "",
          description: "",
          category: uploadCategory,
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

  const handleUpdateSubtitle = async (id: number, subtitle: string) => {
    const supabase = getSupabase();
    await supabase.from("gallery_images").update({ subtitle }).eq("id", id);
  };

  const handleUpdateDescription = async (id: number, description: string) => {
    const supabase = getSupabase();
    await supabase.from("gallery_images").update({ description }).eq("id", id);
  };

  const handleUpdateCategory = async (id: number, category: string) => {
    const supabase = getSupabase();
    await supabase.from("gallery_images").update({ category }).eq("id", id);
  };

  return (
    <div className="max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🎨 Gallery Manager</h1>
          <p className="text-gray-500 text-sm mt-1">{images.length} images in gallery</p>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex flex-col">
            <label className="block text-[10px] text-gray-500 font-semibold uppercase mb-1">Upload Category</label>
            <select
              value={uploadCategory}
              onChange={(e) => setUploadCategory(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 outline-none focus:border-blue-400 font-sans"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="px-5 py-2 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {uploading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                Uploading...
              </>
            ) : (
              <>📤 Upload to "{uploadCategory}"</>
            )}
          </button>
          <input ref={fileRef} type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
        </div>
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
                <label className="block text-[9px] text-gray-400 font-semibold uppercase mb-0.5">Subtitle</label>
                <input
                  type="text"
                  defaultValue={img.subtitle || ""}
                  onBlur={(e) => handleUpdateSubtitle(img.id, e.target.value)}
                  placeholder="Subtitle..."
                  className="w-full px-2 py-1 border border-gray-200 rounded-lg text-xs text-gray-700 focus:border-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-[9px] text-gray-400 font-semibold uppercase mb-0.5">Description</label>
                <textarea
                  defaultValue={img.description || ""}
                  onBlur={(e) => handleUpdateDescription(img.id, e.target.value)}
                  placeholder="Description..."
                  rows={2}
                  className="w-full px-2 py-1 border border-gray-200 rounded-lg text-xs text-gray-700 focus:border-blue-400 outline-none resize-none font-sans"
                />
              </div>
              <div>
                <label className="block text-[9px] text-gray-400 font-semibold uppercase mb-0.5">Category</label>
                <select
                  value={img.category || "General"}
                  onChange={(e) => {
                    const newCat = e.target.value;
                    setImages(prev => prev.map(item => item.id === img.id ? { ...item, category: newCat } : item));
                    handleUpdateCategory(img.id, newCat);
                  }}
                  className="w-full px-2 py-1 border border-gray-200 rounded-lg text-xs text-gray-700 bg-white focus:border-blue-400 outline-none cursor-pointer"
                >
                  {img.category && !CATEGORIES.includes(img.category) && (
                    <option value={img.category}>{img.category}</option>
                  )}
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
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
    </div>
  );
}
