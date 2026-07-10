"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";
import ImageUploader from "../components/ImageUploader";

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const supabase = getSupabase();
      const { data } = await supabase.from("site_settings").select("*");
      if (data) {
        const s: Record<string, any> = {};
        for (const row of data) s[row.key] = row;
        setSettings(s);
      }
    };
    fetch();
  }, []);

  const updateSetting = (key: string, field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: { ...prev[key], [field]: value }
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    const supabase = getSupabase();
    for (const [key, row] of Object.entries(settings)) {
      await supabase.from("site_settings").update({
        value: (row as any).value,
        image_url: (row as any).image_url,
        updated_at: new Date().toISOString(),
      }).eq("key", key);
    }
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const textSettings = [
    { key: "company_name", label: "Company Name", emoji: "🏢" },
    { key: "whatsapp_number", label: "WhatsApp Number (without +)", emoji: "📱" },
    { key: "whatsapp_name", label: "WhatsApp Contact Name", emoji: "👤" },
    { key: "email", label: "Email Address", emoji: "📧" },
    { key: "facebook_url", label: "Facebook Page URL", emoji: "📘" },
    { key: "registration_number", label: "Registration Number (UEN)", emoji: "📋" },
    { key: "address_line1", label: "Address Line 1", emoji: "📍" },
    { key: "address_line2", label: "Address Line 2", emoji: "📍" },
    { key: "google_maps_url", label: "Google Maps URL", emoji: "🗺️" },
    { key: "website_url", label: "Website URL", emoji: "🌐" },
    { key: "meta_title", label: "SEO Title", emoji: "🔍" },
    { key: "meta_description", label: "SEO Description", emoji: "📝" },
    { key: "get_quote_text", label: "Get Quote Button Text", emoji: "💬" },
  ];

  if (Object.keys(settings).length === 0) {
    return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>;
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">⚙️ Site Settings</h1>
          <p className="text-gray-500 text-sm mt-1">Global settings for your website</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {saving ? "Saving..." : saved ? "✅ Saved!" : "💾 Save All"}
        </button>
      </div>

      {/* Logo Upload */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <ImageUploader
          currentUrl={settings.logo?.image_url || "/logonya.png"}
          onUpload={(url) => updateSetting("logo", "image_url", url)}
          folder="branding"
          label="🏷️ Website Logo"
        />
      </div>

      {/* QR Code Upload */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <ImageUploader
          currentUrl={settings.website_qr?.image_url || "/website_qr.png"}
          onUpload={(url) => updateSetting("website_qr", "image_url", url)}
          folder="branding"
          label="📱 Website QR Code"
        />
      </div>

      {/* Text Settings */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
        {textSettings.map(({ key, label, emoji }) => (
          <div key={key}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{emoji} {label}</label>
            {key === "meta_description" ? (
              <textarea
                value={settings[key]?.value || ""}
                onChange={(e) => updateSetting(key, "value", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none resize-none"
              />
            ) : (
              <input
                type="text"
                value={settings[key]?.value || ""}
                onChange={(e) => updateSetting(key, "value", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:border-blue-400 outline-none"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
