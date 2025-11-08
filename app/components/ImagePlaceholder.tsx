import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  showIcon?: boolean;
}

export function ImagePlaceholder({
  src,
  alt,
  className = "",
  aspectRatio = "video",
  showIcon = true
}: ImagePlaceholderProps) {
  const aspectRatios = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]"
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const placeholder = target.nextElementSibling as HTMLElement;
          if (placeholder) {
            placeholder.classList.remove('hidden');
          }
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-full ${aspectRatios[aspectRatio]} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}
    >
      {showIcon && (
        <div className="text-center text-gray-400">
          <svg
            className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-xs md:text-sm font-medium">Image Placeholder</p>
        </div>
      )}
    </motion.div>
  );
}
