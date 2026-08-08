import Image from "next/image";
import { images } from "@/lib/assets";

/** Dutch.png — divider between page content and footer on every page */
export default function DutchDivider() {
  return (
    <div
      className="w-full flex justify-center items-center py-10 sm:py-12 bg-[var(--background)] border-t border-[var(--border)]/60"
      aria-hidden
    >
      <Image
        src={images.dutch}
        alt=""
        width={140}
        height={70}
        className="h-12 sm:h-14 w-auto opacity-70 dark:opacity-60 transition-opacity"
        loading="lazy"
      />
    </div>
  );
}
