import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
  { file: "506.webp", count: 506 },
  { file: "291.jpg", count: 291 },
  { file: "225.webp", count: 225 },
  { file: "203.jpg", count: 203 },
  { file: "195.jpg", count: 195 },
  { file: "154.webp", count: 154 },
  { file: "154 (2).webp", count: 154 },
  { file: "138.webp", count: 138 },
  { file: "119.jpg", count: 119 },
  { file: "114.jpg", count: 114 },
  { file: "106.webp", count: 106 },
  { file: "106 (2).webp", count: 106 },
  { file: "96 (2).webp", count: 96 },
  { file: "96 (1).webp", count: 96 },
  { file: "95.jpg", count: 95 },
];

export function MostPopularStickers() {
  return (
    <Carousel className="bg-transparent shadow-none border-0 w-full max-w-md ml-10">
      <CarouselPrevious />
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent shadow-none border-0">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <img src={`img/${image.file}`} alt="Sticker" className="h-full w-full object-contain" />
                  <p className="mt-3 text-center text-white text-3xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{image.count} стикеров</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
