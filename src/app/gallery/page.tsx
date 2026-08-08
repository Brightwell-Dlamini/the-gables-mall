import type { Metadata } from "next";
import Image from "next/image";
import { galleryPhotos, images } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of The Gables Shopping Centre — architecture, lifestyle and centre life in Ezulwini.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[280px] flex items-end">
        <Image
          src={images.banner03}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-2">
            Visuals
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mb-12">
          Architecture, atmosphere and everyday life at The Gables — every image from our official collection.
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryPhotos.map((photo) => (
            <figure
              key={photo.title}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] group"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                {photo.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h2 className="font-semibold text-lg mb-4">Centre map</h2>
            <Image
              src={images.mapView}
              alt="Map view"
              width={700}
              height={500}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col items-center justify-center gap-6">
            <h2 className="font-semibold text-lg self-start">Site plan</h2>
            <Image
              src={images.mapVector}
              alt="Map vector"
              width={400}
              height={200}
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
            <Image
              src={images.mapVectorAlt}
              alt="Map vector alternate"
              width={400}
              height={200}
              className="w-full max-w-md h-auto opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
