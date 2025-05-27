import { XIcon } from "lucide-react";
import { Button } from "./button";

interface MediaPreviewProps {
  media: Array<{ url: string; type: 'image' | 'video' }>;
  onRemove: (index: number) => void;
}

export function MediaPreview({ media, onRemove }: MediaPreviewProps) {
  return (
    <div className="flex gap-2 p-4 overflow-x-auto">
      {media.map((item, index) => (
        <div key={index} className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
          {item.type === 'image' ? (
            <img src={item.url} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <video src={item.url} className="w-full h-full object-cover" />
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0.5 right-0.5 w-6 h-6 p-0.5 bg-black/20 hover:bg-black/40"
            onClick={() => onRemove(index)}
          >
            <XIcon className="w-4 h-4 text-white" />
          </Button>
        </div>
      ))}
    </div>
  );
}