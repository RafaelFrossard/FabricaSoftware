import useEmblaCarousel from "embla-carousel-react"

export default function Carousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[20px]" ref={emblaRef}>
        <div className="flex">
          {images.map((img) => (
            <div key={img} className="flex-shrink-0 w-full">
              <img src={img} className="w-full aspect-[16/9] object-cover" />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10"
      >
        ‹
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10"
      >
        ›
      </button>
    </div>
  )
}