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
import { Product } from "@/types";
import { SetStateAction, useState } from "react";

function ProductDetails({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  return (
    <div className="w-full relative flex flex-col justify-between p-6">
      <div className="min-h-[40svh] isolate flex flex-col justify-between select-none">
        <ProductDetailHeader />
        <ProductBackground image={currentImage} />
      </div>
      <div className="z-10">
        <ProductDetailFooter product={product} />
      </div>
    </div>
  );
}

const ProductBackground = ({ image }: { image: string }) => {
  return (
    <div
      className="h-[50svh] w-full absolute overflow-hidden isolate rounded-t-3xl top-0 left-0 -z-10"
      key={image}
      style={{
        maskImage: `linear-gradient(to bottom, black, black, black,black,black,black,black,black,black,black, transparent)`,
      }}
    >
      <img src={image} alt="product" className="h-full w-full object-contain" />
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

function ProductDetailFooter({ product }: { product: Product }) {
  return (
    <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
      {/* left */}
      <div className="flex flex-col pl-6 lg:col-span-2">
        <div className="flex rounded-3xl p-4">
          <ProductCarousel images={product.images} />
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="text-gray-500">{product.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Specifications</h2>
            <ul className="list-disc list-inside text-gray-500">
              <li>16" Screen</li>
              <li>GTX 4090ti</li>
              <li>16GB RAM</li>
              <li>1TB SSD</li>
            </ul>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col w-full">
        <ProductDetailCard
          detail={{
            name: product.name,
            price: product.price,
            inStock: product.inStock,
            ratings: product.ratings,
            reviews: product.reviews.length,
          }}
        />
      </div>
    </div>
  );
}

function ProductCarousel({ images }: { images: Readonly<string[]> }) {
  return (
    <Carousel className="w-full bg-white rounded-xl p-4 select-none">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/4">
            <div
              className="w-full h-full bg-slate-300 p-4 rounded-xl"
              onClick={() => {
                // TODO: Implement image change
                return console.log("clicked");
              }}
            >
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

interface ProductDetailCardProps {
  name: string;
  price: number;
  inStock: boolean;
  ratings: number;
  reviews: number;
}

function ProductDetailCard({ detail }: { detail: ProductDetailCardProps }) {
  return (
    <div className="flex flex-col gap-6">
      <Card className="flex flex-col gap-4 px-8 py-6">
        <CardTitle>
          <span className="font-bold">{detail.name}</span>
        </CardTitle>
        <div className="flex flex-row items-center p-0 gap-4">
          <Badge className="bg-warning50 h-7 text-warning700">
            {detail.inStock ? "In Stock" : "Asa"}
          </Badge>
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
              <span className="font-bold text-xl">GHC {detail.price}</span>
            </div>
            <div className="flex items-end h-full gap-2">
              <div className="flex items-center gap-1">
                <Star color="#FCD34D" fill="#FCD34D" size={16} />
                <span className="text-sm font-bold">{detail.ratings}</span>
              </div>
              <div className="flex">
                <span className="text-sm text-gray-500">
                  {detail.reviews} reviews
                </span>
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

const imageUrl =
  "https://i.ibb.co/BNSTzWT/XPS-13-9305-2-768x489-removebg-preview.png";

export const SampleProduct: Product = {
  id: "1",
  name: "Dell XPS 16",
  price: 12000,
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit obcaecati harum amet maxime. Minus quia libero ab obcaecati vero deserunt tempora quisquam blanditiis nam provident. Iste beatae officiis fuga culpa! lorem*100",
  images: Array(5).fill(imageUrl),
  ratings: 4.5,
  reviews: [],
  inStock: true,
  categories: "",
  discountPercentage: 0,
  isDiscounted: false,
  published: false,
  specification: "",
  viewsCount: 0,
};
