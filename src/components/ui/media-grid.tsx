import React from 'react';
import { cn } from "../../lib/utils";

interface MediaGridProps {
  media: { url: string; type: 'image' | 'video' }[];
  text?: string;
  className?: string;
}

export const MediaGrid: React.FC<MediaGridProps> = ({ media, text, className }) => {
  const isSingleMedia = media.length === 1;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {text && (
        <div className="text-[#5e6278] text-sm leading-[22px]">
          {text}
        </div>
      )}
      <div className={cn(
        "grid gap-1 w-full",
        isSingleMedia ? "" : "grid-cols-2",
      )}>
        {media.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative rounded-lg overflow-hidden",
              isSingleMedia ? "max-w-[280px]" : "aspect-square"
            )}
          >
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.url}
                controls
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};