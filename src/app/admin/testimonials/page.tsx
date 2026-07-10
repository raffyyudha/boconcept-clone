"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

export default function TestimonialsEditorPage() {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  const fetchItems = async () => {
    const supabase = getSupabase();
    const { data } = await supabase.from("testimonials").select("*").order("sort_order");
    setItems(data || []);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async (item: any) => {
    setSaving(true);
    const supabase = getSupabase();
    if (item.id) {
      await supabase.from("testimonials").update({ quote: item.quote, author: item.author, role: item.role, sort_order: item.sort_order, updated_at: new Date().toISOString() }).eq("id", item.id);
    } else {
      await supabase.from("testimonials").insert({ quote: item.quote, author: item.author, role: item.role, sort_order: items.length + 1 });
    }
    setSaving(false);
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this testimonial?")) return;
    const supabase = getSupabase();
    await supabase.from("testimonials").delete().eq("id", id);
    fetchItems();
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">💬 Testimonials</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} customer reviews</p>
        </div>
        <button onClick={() => setEditing({ quote: "", author: "", role: "", sort_order: items.length + 1 })} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors">
          ➕ Add Testimonial
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-all">
            <p className="text-sm text-gray-700 italic mb-3">&quot;{item.quote}&quot;</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm text-gray-900">{item.author}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditing({ ...item })} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100">✏️ Edit</button>
                <button onClick={() => handleDelete(item.id)} className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100">🗑️</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">{editing.id ? "Edit" : "Add"} Testimonial</h2>
              <button onClick={() => setEditing(null)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">✕</button>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Quote</label>
              <textarea value={editing.quote} onChange={(e) => setEditing({ ...editing, quote: e.target.value })} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Author</label>
                <input type="text" value={editing.author} onChange={(e) => setEditing({ ...editing, author: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                <input type="text" value={editing.role} onChange={(e) => setEditing({ ...editing, role: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" />
              </div>
            </div>
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
