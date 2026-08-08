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
      <section className="relative h-[42vh] min-h-[300px] flex items-end overflow-hidden" aria-label="Gallery hero">
        <Image
          src={images.banner03}
          alt="Interior atmosphere at The Gables Shopping Centre"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 w-full">
          <p className="text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-3">
            Visuals
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em]">Gallery</h1>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mb-14 font-light leading-relaxed">
          Architecture, atmosphere and everyday life at The Gables — every image from our official collection.
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryPhotos.map((photo) => (
            <figure
              key={photo.title}
              className="break-inside-avoid rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 group shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-slate-600 dark:text-slate-300 tracking-tight">
                {photo.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-7">
            <h2 className="font-semibold text-lg mb-5 text-slate-900 dark:text-white tracking-tight">Centre map</h2>
            <Image
              src={images.mapView}
              alt="Map view of The Gables Shopping Centre"
              width={700}
              height={500}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-7 flex flex-col items-center justify-center gap-6">
            <h2 className="font-semibold text-lg self-start text-slate-900 dark:text-white tracking-tight">Site plan</h2>
            <Image
              src={images.mapVector}
              alt="Site plan vector"
              width={400}
              height={200}
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
            <Image
              src={images.mapVectorAlt}
              alt="Alternate site plan"
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
