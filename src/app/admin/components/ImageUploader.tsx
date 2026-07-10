"use client";

import { useState, useRef } from "react";
import { uploadImage } from "@/lib/supabase";

interface ImageUploaderProps {
  currentUrl: string;
  onUpload: (url: string) => void;
  folder?: string;
  label?: string;
}

export default function ImageUploader({ currentUrl, onUpload, folder = "uploads", label = "Image" }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentUrl);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview immediately
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    setUploading(true);
    const url = await uploadImage(file, folder);
    setUploading(false);

    if (url) {
      setPreview(url);
      onUpload(url);
    } else {
      setPreview(currentUrl);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors bg-gray-50">
        {/* Preview */}
        {preview && (
          <div className="mb-3 relative rounded-lg overflow-hidden bg-white border border-gray-100">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-40 object-cover"
              onError={() => setPreview("")}
            />
          </div>
        )}

        {/* Upload Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {uploading ? (
              <>
                <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Uploading...
              </>
            ) : (
              <>📤 Upload Image</>
            )}
          </button>

          {/* URL input */}
          <input
            type="text"
            value={preview}
            onChange={(e) => {
              setPreview(e.target.value);
              onUpload(e.target.value);
            }}
            placeholder="or paste image URL"
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 outline-none"
          />
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
