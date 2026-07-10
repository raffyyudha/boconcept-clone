import { createServerClient } from "./supabase";

// ============ Server-side data fetching functions ============
// These run on the server during SSR for zero-delay rendering

const supabase = createServerClient();

export async function getSiteSettings() {
  const { data } = await supabase.from("site_settings").select("*");
  if (!data) return {};
  const settings: Record<string, { value: string; image_url: string }> = {};
  for (const row of data) {
    settings[row.key] = { value: row.value, image_url: row.image_url };
  }
  return settings;
}

export async function getHeroSection() {
  const { data } = await supabase.from("hero_section").select("*").limit(1).single();
  return data;
}

export async function getCategories() {
  const { data } = await supabase.from("categories").select("*").order("sort_order");
  return data || [];
}

export async function getOutdoorSection() {
  const { data } = await supabase.from("outdoor_section").select("*").limit(1).single();
  return data;
}

export async function getTrendsSection() {
  const { data } = await supabase.from("trends_section").select("*").limit(1).single();
  return data;
}

export async function getTrendsItems() {
  const { data } = await supabase.from("trends_items").select("*").order("sort_order");
  return data || [];
}

export async function getCatalogueSection() {
  const { data } = await supabase.from("catalogue_section").select("*").limit(1).single();
  return data;
}

export async function getCatalogueProducts() {
  const { data } = await supabase.from("catalogue_products").select("*").order("sort_order");
  return data || [];
}

export async function getInteriorSection() {
  const { data } = await supabase.from("interior_section").select("*").limit(1).single();
  return data;
}

export async function getProjects() {
  const { data } = await supabase.from("projects").select("*").order("sort_order");
  return data || [];
}

export async function getHistorySection() {
  const { data } = await supabase.from("history_section").select("*").limit(1).single();
  return data;
}

export async function getInspirationSection() {
  const { data } = await supabase.from("inspiration_section").select("*").limit(1).single();
  return data;
}

export async function getGalleryImages() {
  const { data } = await supabase.from("gallery_images").select("*").order("sort_order");
  return data || [];
}

export async function getTestimonials() {
  const { data } = await supabase.from("testimonials").select("*").order("sort_order");
  return data || [];
}

export async function getServices() {
  const { data } = await supabase.from("services").select("*").order("sort_order");
  return data || [];
}

export async function getProcessSteps() {
  const { data } = await supabase.from("process_steps").select("*").order("sort_order");
  return data || [];
}

export async function getFaqs() {
  const { data } = await supabase.from("faqs").select("*").order("sort_order");
  return data || [];
}

export async function getAboutPage() {
  const { data } = await supabase.from("about_page").select("*");
  if (!data) return {};
  const sections: Record<string, any> = {};
  for (const row of data) {
    sections[row.section] = row;
  }
  return sections;
}

export async function getMilestones() {
  const { data } = await supabase.from("milestones").select("*").order("sort_order");
  return data || [];
}

export async function getCoreValues() {
  const { data } = await supabase.from("core_values").select("*").order("sort_order");
  return data || [];
}
