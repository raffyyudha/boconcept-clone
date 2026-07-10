"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      const supabase = getSupabase();
      const tables = [
        "catalogue_products",
        "gallery_images",
        "testimonials",
        "services",
        "categories",
        "faqs",
        "projects",
      ];

      const results: Record<string, number> = {};
      for (const table of tables) {
        const { count } = await supabase.from(table).select("*", { count: "exact", head: true });
        results[table] = count || 0;
      }
      setCounts(results);
      setLoading(false);
    };

    fetchCounts();
  }, []);

  const cards = [
    { label: "Catalogue Products", count: counts.catalogue_products, icon: "📦", color: "bg-blue-50 text-blue-700", href: "/admin/catalogue" },
    { label: "Gallery Images", count: counts.gallery_images, icon: "🎨", color: "bg-purple-50 text-purple-700", href: "/admin/gallery" },
    { label: "Testimonials", count: counts.testimonials, icon: "💬", color: "bg-green-50 text-green-700", href: "/admin/testimonials" },
    { label: "Services", count: counts.services, icon: "🛠️", color: "bg-orange-50 text-orange-700", href: "/admin/services-page" },
    { label: "Categories", count: counts.categories, icon: "📂", color: "bg-teal-50 text-teal-700", href: "/admin/categories" },
    { label: "FAQs", count: counts.faqs, icon: "❓", color: "bg-pink-50 text-pink-700", href: "/admin/faqs" },
    { label: "Projects", count: counts.projects, icon: "🏗️", color: "bg-yellow-50 text-yellow-700", href: "/admin/gallery" },
  ];

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">👋 Welcome to Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">Manage all your website content from here. No coding needed!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all group"
          >
            <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center text-lg mb-3`}>
              {card.icon}
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {loading ? (
                <span className="inline-block w-8 h-6 bg-gray-100 rounded animate-pulse" />
              ) : (
                card.count ?? 0
              )}
            </p>
            <p className="text-xs text-gray-500 mt-1">{card.label}</p>
          </a>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">⚡ Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a href="/admin/hero" className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all">
            <span className="text-2xl">🖼️</span>
            <div>
              <p className="font-semibold text-sm text-gray-900">Edit Hero Banner</p>
              <p className="text-xs text-gray-500">Change headline, image</p>
            </div>
          </a>
          <a href="/admin/catalogue" className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-purple-50 hover:border-purple-200 transition-all">
            <span className="text-2xl">📦</span>
            <div>
              <p className="font-semibold text-sm text-gray-900">Manage Catalogue</p>
              <p className="text-xs text-gray-500">Add/edit products</p>
            </div>
          </a>
          <a href="/admin/gallery" className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-green-50 hover:border-green-200 transition-all">
            <span className="text-2xl">🎨</span>
            <div>
              <p className="font-semibold text-sm text-gray-900">Upload Gallery Photos</p>
              <p className="text-xs text-gray-500">Add new project images</p>
            </div>
          </a>
          <a href="/admin/settings" className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-all">
            <span className="text-2xl">⚙️</span>
            <div>
              <p className="font-semibold text-sm text-gray-900">Site Settings</p>
              <p className="text-xs text-gray-500">Logo, WhatsApp, company info</p>
            </div>
          </a>
          <a href="/admin/testimonials" className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-teal-50 hover:border-teal-200 transition-all">
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-semibold text-sm text-gray-900">Add Testimonial</p>
              <p className="text-xs text-gray-500">Customer reviews</p>
            </div>
          </a>
          <a href="/" target="_blank" className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
            <span className="text-2xl">👁️</span>
            <div>
              <p className="font-semibold text-sm text-gray-900">View Live Website</p>
              <p className="text-xs text-gray-500">Open in new tab</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
