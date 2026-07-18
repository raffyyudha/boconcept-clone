import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mqqbtxdvmsuzfhzxgojb.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcWJ0eGR2bXN1emZoenhnb2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2ODE0MjIsImV4cCI6MjA5OTI1NzQyMn0.wGBqYNFxe61XpWTSmw-dQ33k2DtVqq_KgbXV1oPyh7k";

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

// Helper: Compress and convert image to WebP client-side
async function compressToWebP(file: File): Promise<File> {
  if (typeof window === "undefined") return file;
  if (file.type === "image/svg+xml" || file.type === "image/webp") {
    return file;
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(file);
          return;
        }

        const MAX_WIDTH = 1920;
        const MAX_HEIGHT = 1080;
        let width = img.width;
        let height = img.height;

        if (width > MAX_WIDTH) {
          height = Math.round((height * MAX_WIDTH) / width);
          width = MAX_WIDTH;
        }
        if (height > MAX_HEIGHT) {
          width = Math.round((width * MAX_HEIGHT) / height);
          height = MAX_HEIGHT;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve(file);
              return;
            }
            const webpFile = new File(
              [blob],
              file.name.replace(/\.[^/.]+$/, "") + ".webp",
              { type: "image/webp" }
            );
            resolve(webpFile);
          },
          "image/webp",
          0.82 // 82% quality balance
        );
      };
      img.onerror = () => resolve(file);
      img.src = event.target?.result as string;
    };
    reader.onerror = () => resolve(file);
    reader.readAsDataURL(file);
  });
}

// Helper: Upload image to Supabase Storage
export async function uploadImage(file: File, path: string): Promise<string | null> {
  const supabase = getSupabase();

  let fileToUpload = file;
  if (file.type.startsWith("image/") && file.type !== "image/svg+xml") {
    try {
      fileToUpload = await compressToWebP(file);
    } catch (err) {
      console.error("WebP compression failed, uploading original:", err);
    }
  }

  const fileName = `${Date.now()}-${fileToUpload.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  const filePath = `${path}/${fileName}`;

  const { error } = await supabase.storage.from("images").upload(filePath, fileToUpload, {
    cacheControl: "31536000",
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
