"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Dashboard", href: "/admin", icon: "🏠" },
  { label: "Hero Section", href: "/admin/hero", icon: "🖼️" },
  { label: "Categories", href: "/admin/categories", icon: "📂" },
  { label: "Catalogue", href: "/admin/catalogue", icon: "📦" },
  { label: "Gallery", href: "/admin/gallery", icon: "🎨" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "💬" },
  { label: "Services", href: "/admin/services-page", icon: "🛠️" },
  { label: "FAQs", href: "/admin/faqs", icon: "❓" },
  { label: "Contact Info", href: "/admin/contact-info", icon: "📞" },
  { label: "Footer", href: "/admin/footer", icon: "📋" },
  { label: "Settings", href: "/admin/settings", icon: "⚙️" },
];

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-sm">Oscar Admin</h2>
            <p className="text-[10px] text-gray-400">Content Manager</p>
          </div>
        </div>

        {/* Close button - mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden p-1 rounded-lg hover:bg-gray-100"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-700 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
