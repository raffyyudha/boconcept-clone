"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

const iconOptions = ["Shield", "Layers", "Sofa", "Paintbrush", "Lock", "Cpu", "LayoutGrid"];

export default function CategoriesEditorPage() {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  const fetchItems = async () => {
    const supabase = getSupabase();
    const { data } = await supabase.from("categories").select("*").order("sort_order");
    setItems(data || []);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async (item: any) => {
    setSaving(true);
    const supabase = getSupabase();
    if (item.id) {
      await supabase.from("categories").update({ name: item.name, icon_name: item.icon_name, sort_order: item.sort_order, updated_at: new Date().toISOString() }).eq("id", item.id);
    } else {
      await supabase.from("categories").insert({ name: item.name, icon_name: item.icon_name, sort_order: items.length + 1 });
    }
    setSaving(false);
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this category?")) return;
    const supabase = getSupabase();
    await supabase.from("categories").delete().eq("id", id);
    fetchItems();
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📂 Categories</h1>
          <p className="text-gray-500 text-sm mt-1">Core solutions shown on homepage ({items.length} items)</p>
        </div>
        <button onClick={() => setEditing({ name: "", icon_name: "Shield", sort_order: items.length + 1 })} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors">➕ Add</button>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between hover:shadow-sm transition-all">
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-sm font-bold text-blue-600">{idx + 1}</span>
              <div>
                <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-400">Icon: {item.icon_name}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing({ ...item })} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100">✏️</button>
              <button onClick={() => handleDelete(item.id)} className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100">🗑️</button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between"><h2 className="text-lg font-bold text-gray-900">{editing.id ? "Edit" : "Add"} Category</h2><button onClick={() => setEditing(null)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">✕</button></div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name</label>
              <input type="text" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Icon</label>
              <div className="flex flex-wrap gap-2">
                {iconOptions.map(icon => (
                  <button key={icon} type="button" onClick={() => setEditing({ ...editing, icon_name: icon })} className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${editing.icon_name === icon ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{icon}</button>
                ))}
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
