import { Button } from "./ui/button"
import { ChevronLeft, Heart, Share2, Star, Truck } from "lucide-react"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Link } from "react-router-dom"
import Flag from "../assets/svgs/flag.svg?react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

function ProductDetails() {
  return (
    <div className='h-[50svh] w-full relative p-6 flex flex-col justify-between'>
      {/* TODO: arrange components */}
    </div>
  )
}

const ProductBackground = (image: string) => {
  return (
    <div
      className='h-4/5 w-full bg-cover bg-center bg-no-repeat absolute overflow-hidden isolate rounded-t-3xl top-0 left-0 -z-10'
      key={image}
      style={{
        backgroundImage: `url('${image}')`,
        maskImage: `linear-gradient(to bottom, black, black, black, transparent)`,
      }}
    ></div>
  )
}

export default ProductDetails

function ProductDetailHeader() {
  return (
    <div className='flex justify-between'>
      <Button variant={"secondary"} className='flex gap-2'>
        <span>
          <ChevronLeft size={16} />
        </span>
        <span>Back</span>
      </Button>
      <div className='flex gap-4'>
        <Button variant={"secondary"} className='rounded-3xl py-1 flex gap-2'>
          <span>
            <Share2 size={16} />
          </span>
          <span>Share</span>
        </Button>
        <Button variant={"secondary"} className='rounded-3xl py-1 flex gap-2'>
          <span>
            <Heart size={16} />
          </span>
          <span>Save</span>
        </Button>
      </div>
    </div>
  )
}

function ProductDetailFooter() {
  return (
    <div className='flex justify-between gap-10'>
      {/* left */}
      <div className='flex flex-col w-full basis-3/4 px-8'>
        <div className='flex w-full bg-white rounded-3xl p-4'>
          {ProductCarousel([
            "https://images.pexels.com/photos/7858743/pexels-photo-7858743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/7858743/pexels-photo-7858743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/7858743/pexels-photo-7858743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/7858743/pexels-photo-7858743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          ])}
        </div>
        <div>
          <p className='text-2xl font-bold mb-4'>Description</p>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            consectetur magnam harum, quam delectus cum reprehenderit laudantium
            officiis aut similique id eius sunt temporibus facere, architecto
            expedita natus tenetur? Temporibus. Eveniet vel est ea aliquid
            assumenda eum. Assumenda quos praesentium tempora minima fugiat
            omnis provident illo aspernatur? Obcaecati aliquid sunt
            necessitatibus eaque corporis. Suscipit iure incidunt esse
            perferendis nisi neque.
          </span>
        </div>
      </div>
      {/* right */}
      <div className='flex flex-col gap-6'>
        <Card className='flex flex-col gap-4 px-8 py-6'>
          <CardTitle>
            <h2 className='font-bold'>Dell XPS 16" - GTX 4090ti</h2>
          </CardTitle>
          <div className='flex flex-row items-center p-0 gap-4'>
            <Badge className='bg-warning50 h-7 text-warning700'>In Stock</Badge>
            <div className='flex items-center gap-1 font-semibold'>
              <Truck size={16} className='h-min p-0 m-0' />
              <span className='text-sm'>Delivery to Accra</span>
            </div>
          </div>
          <hr />
          <CardContent className='p-0'>
            <span className='text-gray-500'>Price</span>
            <div className='flex justify-between items-end '>
              <div className='flex h-full items-center'>
                <span className='font-bold text-xl'>GHC 12,000</span>
              </div>
              <div className='flex items-end h-full gap-2'>
                <div className='flex items-center gap-1'>
                  <Star color='#FCD34D' fill='#FCD34D' size={16} />
                  <span className='text-sm font-bold'>4.5</span>
                </div>
                <div className='flex'>
                  <span className='text-sm text-gray-500'>24 reviews</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className='p-0 mt-3'>
            <Button className='w-full'>Add to Cart</Button>
          </CardFooter>
        </Card>

        {/* Questions */}
        <div className='flex items-center gap-1'>
          <Flag fill='#DC2626' color='#DC2626' />
          <Link
            to='/questions'
            className='text-primary500 underline underline-offset-4'
          >
            Question about this Product?
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProductCarousel(images: Readonly<string[]>) {
  return (
    <Carousel className='w-full'>
      <CarouselContent className='-ml-1'>
        {images.map((image, index) => (
          <CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <figure className='w-56 h-full'>
              <img
                src={image}
                alt={`${image}`}
                className='h-full w-full object-cover'
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='' />
      <CarouselNext />
    </Carousel>
  )
}
