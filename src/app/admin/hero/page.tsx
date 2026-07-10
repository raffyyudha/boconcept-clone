"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";
import ImageUploader from "../components/ImageUploader";

export default function HeroEditorPage() {
  const [data, setData] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const supabase = getSupabase();
      const { data } = await supabase.from("hero_section").select("*").limit(1).single();
      setData(data);
    };
    fetch();
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    const supabase = getSupabase();
    await supabase.from("hero_section").update({
      subtitle: data.subtitle,
      title: data.title,
      background_image: data.background_image,
      whatsapp_text: data.whatsapp_text,
      cta_link_text: data.cta_link_text,
      updated_at: new Date().toISOString(),
    }).eq("id", data.id);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!data) return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🖼️ Hero Section</h1>
          <p className="text-gray-500 text-sm mt-1">Edit the main banner that appears at the top of your homepage</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {saving ? "Saving..." : saved ? "✅ Saved!" : "💾 Save Changes"}
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Subtitle (small text above title)</label>
          <input
            type="text"
            value={data.subtitle}
            onChange={(e) => setData({ ...data, subtitle: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Main Title (big headline)</label>
          <textarea
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none resize-none"
          />
        </div>

        <ImageUploader
          currentUrl={data.background_image}
          onUpload={(url) => setData({ ...data, background_image: url })}
          folder="hero"
          label="Background Image"
        />

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Button Text</label>
          <input
            type="text"
            value={data.whatsapp_text}
            onChange={(e) => setData({ ...data, whatsapp_text: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">CTA Link Text (below WhatsApp button)</label>
          <input
            type="text"
            value={data.cta_link_text}
            onChange={(e) => setData({ ...data, cta_link_text: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
