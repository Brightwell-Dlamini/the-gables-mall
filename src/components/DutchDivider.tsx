import Image from "next/image";
import { images } from "@/lib/assets";

/** Dutch.png — divider between page content and footer on every page */
export default function DutchDivider() {
  return (
    <div
      className="w-full flex justify-center items-center py-8 sm:py-10 bg-[var(--background)] border-t border-[var(--border)]"
      aria-hidden
    >
      <Image
        src={images.dutch}
        alt=""
        width={160}
        height={80}
        className="h-14 sm:h-16 w-auto opacity-90 dark:opacity-80"
        loading="lazy"
      />
    </div>
  );
}
