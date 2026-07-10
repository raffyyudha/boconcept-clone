"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

export default function ContactInfoEditorPage() {
  const [outdoor, setOutdoor] = useState<any>(null);
  const [trends, setTrends] = useState<any>(null);
  const [interior, setInterior] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const supabase = getSupabase();
      const [o, t, i] = await Promise.all([
        supabase.from("outdoor_section").select("*").limit(1).single(),
        supabase.from("trends_section").select("*").limit(1).single(),
        supabase.from("interior_section").select("*").limit(1).single(),
      ]);
      setOutdoor(o.data);
      setTrends(t.data);
      setInterior(i.data);
    };
    fetch();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const supabase = getSupabase();
    if (outdoor) await supabase.from("outdoor_section").update({ ...outdoor, updated_at: new Date().toISOString() }).eq("id", outdoor.id);
    if (trends) await supabase.from("trends_section").update({ ...trends, updated_at: new Date().toISOString() }).eq("id", trends.id);
    if (interior) await supabase.from("interior_section").update({ ...interior, updated_at: new Date().toISOString() }).eq("id", interior.id);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!outdoor) return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📞 Section Content</h1>
          <p className="text-gray-500 text-sm mt-1">Edit homepage section titles and descriptions</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 disabled:opacity-50">{saving ? "Saving..." : saved ? "✅ Saved!" : "💾 Save All"}</button>
      </div>

      {/* Outdoor Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 space-y-4">
        <h2 className="font-bold text-gray-900">🏗️ Outdoor / Zip Blind Section</h2>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Subtitle</label><input type="text" value={outdoor.subtitle} onChange={(e) => setOutdoor({ ...outdoor, subtitle: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Title</label><input type="text" value={outdoor.title} onChange={(e) => setOutdoor({ ...outdoor, title: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Description</label><textarea value={outdoor.description} onChange={(e) => setOutdoor({ ...outdoor, description: e.target.value })} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">CTA Button Text</label><input type="text" value={outdoor.cta_text} onChange={(e) => setOutdoor({ ...outdoor, cta_text: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
      </div>

      {/* Trends Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 space-y-4">
        <h2 className="font-bold text-gray-900">📊 Modern Home Solutions Section</h2>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Title</label><input type="text" value={trends.title} onChange={(e) => setTrends({ ...trends, title: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Description</label><textarea value={trends.description} onChange={(e) => setTrends({ ...trends, description: e.target.value })} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">CTA Button Text</label><input type="text" value={trends.cta_text} onChange={(e) => setTrends({ ...trends, cta_text: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
      </div>

      {/* Interior Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
        <h2 className="font-bold text-gray-900">🏠 Interior Design Section</h2>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Title</label><input type="text" value={interior.title} onChange={(e) => setInterior({ ...interior, title: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Description</label><textarea value={interior.description} onChange={(e) => setInterior({ ...interior, description: e.target.value })} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">CTA Button Text</label><input type="text" value={interior.cta_text} onChange={(e) => setInterior({ ...interior, cta_text: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
        <div><label className="block text-sm font-semibold text-gray-700 mb-1">Subtitle</label><input type="text" value={interior.subtitle} onChange={(e) => setInterior({ ...interior, subtitle: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" /></div>
      </div>
    </div>
  );
}
