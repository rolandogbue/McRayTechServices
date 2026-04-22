import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, Loader2, GripVertical, ImagePlus } from "lucide-react";

interface GalleryImage {
  id: string;
  image_url: string;
  caption: string;
  sort_order: number;
}

interface CaseStudyGalleryProps {
  caseStudyId: string | null;
  images: GalleryImage[];
  onChange: (images: GalleryImage[]) => void;
}

const CaseStudyGallery = ({
  caseStudyId,
  images,
  onChange,
}: CaseStudyGalleryProps) => {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({ title: "Please upload an image file", variant: "destructive" });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Image must be under 5MB", variant: "destructive" });
      return;
    }

    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;
    const filePath = `gallery/${fileName}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file);
    if (error) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("blog-images")
      .getPublicUrl(filePath);
    const newImage: GalleryImage = {
      id: `temp-${Date.now()}`,
      image_url: urlData.publicUrl,
      caption: "",
      sort_order: images.length,
    };

    onChange([...images, newImage]);
    setUploading(false);
    toast({ title: "Image added to gallery" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => uploadFile(file));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    files.forEach((file) => uploadFile(file));
  };

  const removeImage = (index: number) => {
    const updated = images
      .filter((_, i) => i !== index)
      .map((img, i) => ({ ...img, sort_order: i }));
    onChange(updated);
  };

  const updateCaption = (index: number, caption: string) => {
    const updated = images.map((img, i) =>
      i === index ? { ...img, caption } : img,
    );
    onChange(updated);
  };

  const moveImage = (from: number, to: number) => {
    if (to < 0 || to >= images.length) return;
    const updated = [...images];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    onChange(updated.map((img, i) => ({ ...img, sort_order: i })));
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground block">
        Project Gallery ({images.length} images)
      </label>

      {/* Upload area */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors border-border hover:border-primary/50 hover:bg-muted/30"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        {uploading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
            <p className="text-sm text-muted-foreground">Uploading...</p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <ImagePlus className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-primary">Click to add</span> or
              drag images
            </p>
          </div>
        )}
      </div>

      {/* Image grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div
              key={img.id || i}
              className="relative group rounded-lg border border-border overflow-hidden bg-muted"
            >
              <img
                src={img.image_url}
                alt={img.caption || `Gallery image ${i + 1}`}
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {i > 0 && (
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-6 w-6 p-0 text-xs"
                    onClick={() => moveImage(i, i - 1)}
                  >
                    ←
                  </Button>
                )}
                {i < images.length - 1 && (
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-6 w-6 p-0 text-xs"
                    onClick={() => moveImage(i, i + 1)}
                  >
                    →
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-6 w-6 p-0"
                  onClick={() => removeImage(i)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
              <div className="p-1.5">
                <Input
                  value={img.caption}
                  onChange={(e) => updateCaption(i, e.target.value)}
                  placeholder="Caption (optional)"
                  className="text-xs h-7"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudyGallery;
