"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

export default function FooterEditorPage() {
  const [history, setHistory] = useState<any>(null);
  const [catalogue, setCatalogue] = useState<any>(null);
  const [inspiration, setInspiration] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const supabase = getSupabase();
      const [h, c, i] = await Promise.all([
        supabase.from("history_section").select("*").limit(1).single(),
        supabase.from("catalogue_section").select("*").limit(1).single(),
        supabase.from("inspiration_section").select("*").limit(1).single(),
      ]);
      setHistory(h.data);
      setCatalogue(c.data);
      setInspiration(i.data);
    };
    fetch();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const supabase = getSupabase();
    if (history) await supabase.from("history_section").update({ title: history.title, description: history.description, cta_text: history.cta_text, updated_at: new Date().toISOString() }).eq("id", history.id);
    if (catalogue) await supabase.from("catalogue_section").update({ subtitle: catalogue.subtitle, title: catalogue.title, description: catalogue.description, cta_text: catalogue.cta_text, showroom_title: catalogue.showroom_title, showroom_description: catalogue.showroom_description, updated_at: new Date().toISOString() }).eq("id", catalogue.id);
    if (inspiration) await supabase.from("inspiration_section").update({ subtitle: inspiration.subtitle, title: inspiration.title, updated_at: new Date().toISOString() }).eq("id", inspiration.id);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!history) return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📋 More Sections</h1>
          <p className="text-gray-500 text-sm mt-1">Edit history, catalogue header, and gallery header</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 disabled:opacity-50">{saving ? "Saving..." : saved ? "✅ Saved!" : "💾 Save All"}</button>
      </div>

      {/* History Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 space-y-4">
        <h2 className="font-bold text-gray-900">📖 About / History Section</h2>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Title</label><input type="text" value={history.title} onChange={(e) => setHistory({ ...history, title: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Description</label><textarea value={history.description} onChange={(e) => setHistory({ ...history, description: e.target.value })} rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">CTA Button Text</label><input type="text" value={history.cta_text} onChange={(e) => setHistory({ ...history, cta_text: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
      </div>

      {/* Catalogue Section Header */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 space-y-4">
        <h2 className="font-bold text-gray-900">📦 Catalogue Section Header</h2>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Subtitle</label><input type="text" value={catalogue.subtitle} onChange={(e) => setCatalogue({ ...catalogue, subtitle: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Title</label><input type="text" value={catalogue.title} onChange={(e) => setCatalogue({ ...catalogue, title: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Description</label><textarea value={catalogue.description} onChange={(e) => setCatalogue({ ...catalogue, description: e.target.value })} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Showroom Title</label><input type="text" value={catalogue.showroom_title} onChange={(e) => setCatalogue({ ...catalogue, showroom_title: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Showroom Description</label><textarea value={catalogue.showroom_description} onChange={(e) => setCatalogue({ ...catalogue, showroom_description: e.target.value })} rows={2} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none" /></div>
      </div>

      {/* Inspiration Section Header */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
        <h2 className="font-bold text-gray-900">🎨 Gallery / Inspiration Header</h2>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Subtitle</label><input type="text" value={inspiration.subtitle} onChange={(e) => setInspiration({ ...inspiration, subtitle: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Title</label><input type="text" value={inspiration.title} onChange={(e) => setInspiration({ ...inspiration, title: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
      </div>
    </div>
  );
}
