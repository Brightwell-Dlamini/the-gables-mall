import type { Metadata } from "next";
import Image from "next/image";
import { galleryPhotos, images } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of The Gables Shopping Centre — architecture, lifestyle and centre life in Ezulwini.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 pb-12 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            Visuals
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05] max-w-lg">
            The centre,
            <br />
            in frames.
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryPhotos.map((photo) => (
            <figure
              key={photo.title}
              className="break-inside-avoid rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-1 pt-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                {photo.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-6 sm:p-8">
            <h2 className="font-bold text-lg mb-5 text-slate-900 dark:text-white">Centre map</h2>
            <Image
              src={images.mapView}
              alt="Map view"
              width={700}
              height={500}
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 flex flex-col gap-5">
            <h2 className="font-bold text-lg text-slate-900 dark:text-white">Site plan</h2>
            <Image src={images.mapVector} alt="Site plan" width={400} height={200} className="w-full max-w-md h-auto" loading="lazy" />
            <Image src={images.mapVectorAlt} alt="Alternate plan" width={400} height={200} className="w-full max-w-md h-auto opacity-80" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
