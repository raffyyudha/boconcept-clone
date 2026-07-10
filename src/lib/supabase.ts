import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mqqbtxdvmsuzfhzxgojb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcWJ0eGR2bXN1emZoenhnb2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2ODE0MjIsImV4cCI6MjA5OTI1NzQyMn0.wGBqYNFxe61XpWTSmw-dQ33k2DtVqq_KgbXV1oPyh7k";

// Server-side client (for SSR data fetching)
export function createServerClient(): any {
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Client-side client (for admin dashboard)
export function createBrowserClient(): any {
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Singleton browser client
let browserClient: any = null;
export function getSupabase(): any {
  if (!browserClient) {
    browserClient = createBrowserClient();
  }
  return browserClient!;
}

// Helper: Upload image to Supabase Storage
export async function uploadImage(file: File, path: string): Promise<string | null> {
  const supabase = getSupabase();
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  const filePath = `${path}/${fileName}`;

  const { error } = await supabase.storage.from("images").upload(filePath, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    console.error("Upload error:", error);
    return null;
  }

  const { data } = supabase.storage.from("images").getPublicUrl(filePath);
  return data.publicUrl;
}

// Helper: Delete image from Supabase Storage
export async function deleteImage(url: string): Promise<boolean> {
  const supabase = getSupabase();
  // Extract path from URL
  const match = url.match(/\/storage\/v1\/object\/public\/images\/(.*)/);
  if (!match) return false;

  const { error } = await supabase.storage.from("images").remove([match[1]]);
  return !error;
}

export { supabaseUrl, supabaseAnonKey };
