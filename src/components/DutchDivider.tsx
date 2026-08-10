import Image from "next/image";
import { images } from "@/lib/assets";

export default function DutchDivider() {
  return (
    <div
      className="w-full flex justify-center items-center py-8 bg-slate-950 border-t border-white/5"
      aria-hidden
    >
      <Image
        src={images.dutch}
        alt=""
        width={100}
        height={50}
        className="h-9 w-auto opacity-40 brightness-0 invert"
        loading="lazy"
      />
    </div>
  );
}
