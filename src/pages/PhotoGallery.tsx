import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import all images from the gallery folder
import image1 from "@/assets/gallary/1.jpg";
import image2 from "@/assets/gallary/2.jpg";
import image3 from "@/assets/gallary/3.jpg";
import image4 from "@/assets/gallary/4.jpg";
import image5 from "@/assets/gallary/5.jpg";
import image6 from "@/assets/gallary/6.jpg";
import image7 from "@/assets/gallary/7.jpg";
import image8 from "@/assets/gallary/8.jpg";
import image9 from "@/assets/gallary/9.jpg";
import image10 from "@/assets/gallary/10.jpg";

const images = [
  { id: 1, src: image1, alt: "Gallery image 1" },
  { id: 2, src: image2, alt: "Gallery image 2" },
  { id: 3, src: image3, alt: "Gallery image 3" },
  { id: 4, src: image4, alt: "Gallery image 4" },
  { id: 5, src: image5, alt: "Gallery image 5" },
  { id: 6, src: image6, alt: "Gallery image 6" },
  { id: 7, src: image7, alt: "Gallery image 7" },
  { id: 8, src: image8, alt: "Gallery image 8" },
  { id: 9, src: image9, alt: "Gallery image 9" },
  { id: 10, src: image10, alt: "Gallery image 10" },
];

const PhotoGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Photo <span className="text-primary">Gallery</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer group"
              onClick={() => openCarousel(index)}
            >
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeCarousel}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Carousel
              opts={{
                startIndex: selectedImageIndex,
                loop: true,
              }}
              className="w-full max-w-6xl"
            >
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[90vh] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4" />
              <CarouselNext className="absolute right-4" />
            </Carousel>
            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
