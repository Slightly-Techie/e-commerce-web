import { Button } from "./ui/button";
import { ChevronLeft, Heart, Share2, Star, Truck } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import Flag from "../assets/svgs/flag.svg?react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function ProductDetails() {
  return (
    <div className="w-full relative flex flex-col justify-between">
      <div className="h-[80svh] p-6 isolate flex flex-col justify-between">
        <ProductDetailHeader />
        <ProductBackground image={imageUrl} />
        <ProductDetailFooter />
      </div>
    </div>
  );
}

const ProductBackground = ({ image }: { image: string }) => {
  return (
    <div
      className="h-[50svh] w-full bg-cover bg-center bg-no-repeat absolute overflow-hidden isolate rounded-t-3xl top-0 left-0 -z-10"
      key={image}
      style={{
        maskImage: `linear-gradient(to bottom, black, black, black,black,black,black,black,black,black,black, transparent)`,
      }}
    >
      <img src={image} alt="product" className="h-full w-full object-cover" />
    </div>
  );
};

export default ProductDetails;

function ProductDetailHeader() {
  return (
    <div className="flex justify-between">
      <Button variant={"secondary"} className="flex gap-2">
        <span>
          <ChevronLeft size={16} />
        </span>
        <span>Back</span>
      </Button>
      <div className="flex gap-4">
        <Button variant={"secondary"} className="rounded-3xl py-1 flex gap-2">
          <span>
            <Share2 size={16} />
          </span>
          <span>Share</span>
        </Button>
        <Button variant={"secondary"} className="rounded-3xl py-1 flex gap-2">
          <span>
            <Heart size={16} />
          </span>
          <span>Save</span>
        </Button>
      </div>
    </div>
  );
}

function ProductDetailFooter() {
  return (
    <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
      {/* left */}
      <div className="flex flex-col pl-6 col-span-2">
        <div className="flex rounded-3xl p-4">
          {ProductCarousel(Array(5).fill(imageUrl))}
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col w-full ">
        <ProductDetailCard />
      </div>
    </div>
  );
}

function ProductCarousel(images: Readonly<string[]>) {
  return (
    <Carousel className="w-full bg-white rounded-xl p-4">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/4">
            <div className="w-full h-full bg-slate-300 p-4 rounded-xl">
              <img
                src={image}
                alt={`${image}`}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function ProductDetailCard() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="flex flex-col gap-4 px-8 py-6">
        <CardTitle>
          <h2 className="font-bold">Dell XPS 16" - GTX 4090ti</h2>
        </CardTitle>
        <div className="flex flex-row items-center p-0 gap-4">
          <Badge className="bg-warning50 h-7 text-warning700">In Stock</Badge>
          <div className="flex items-center gap-1 font-semibold">
            <Truck size={16} className="h-min p-0 m-0" />
            <span className="text-sm">Delivery to Accra</span>
          </div>
        </div>
        <hr />
        <CardContent className="p-0">
          <span className="text-gray-500">Price</span>
          <div className="flex justify-between items-end ">
            <div className="flex h-full items-center">
              <span className="font-bold text-xl">GHC 12,000</span>
            </div>
            <div className="flex items-end h-full gap-2">
              <div className="flex items-center gap-1">
                <Star color="#FCD34D" fill="#FCD34D" size={16} />
                <span className="text-sm font-bold">4.5</span>
              </div>
              <div className="flex">
                <span className="text-sm text-gray-500">24 reviews</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-0 mt-3">
          <Button className="w-full">Add to Cart</Button>
        </CardFooter>
      </Card>

      {/* Questions */}
      <div className="flex items-center gap-1">
        <Flag fill="#DC2626" color="#DC2626" />
        <Link
          to="/questions"
          className="text-primary500 underline underline-offset-4"
        >
          Question about this Product?
        </Link>
      </div>
    </div>
  );
}

const imageUrl = "https://i.ibb.co/mSVRrYM/Removebg-Preview.png";
