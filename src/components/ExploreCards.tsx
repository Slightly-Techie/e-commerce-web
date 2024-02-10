import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

function ExploreCards() {
  return (
    <Carousel opts={{ align: "start" }} className='flex flex-col gap-4 p-4'>
      <div className='relative flex justify-between items-center'>
        <h2 className='text-2xl font-semibold'>Explore</h2>
        <div className='flex gap-4 h-10'>
          <CarouselPrevious className='relative left-0' />
          <CarouselNext className='relative right-0' />
        </div>
      </div>
      <CarouselContent className=''>
        {categories.map((category) => (
          <ExploreCard key={category.title} {...category} />
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default ExploreCards

function ExploreCard({ title, image }: Readonly<CategoryCard>) {
  return (
    <CarouselItem key={title} className='md:basis-1/3 lg:basis-1/6'>
      <figure className='shrink-0 relative group '>
        <div className='overflow-hidden rounded-2xl w-full h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-25 before:hover:opacity-50 before:rounded-2xl'>
          <img
            src={image}
            alt={title}
            className='aspect-video object-cover w-full h-44'
          />
        </div>
        <figcaption className='mt-2 text-lg font-semibold absolute bottom-5 left-5 text-white group-hover:text-xl group-hover:transition-all'>
          {title}
        </figcaption>
      </figure>
    </CarouselItem>
  )
}

interface CategoryCard {
  title: string
  image: string
}

const categories: CategoryCard[] = [
  {
    title: "Computers",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    title: "Online Courses",
    image:
      "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Mobile Phones",
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Games & Consoles",
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Headphones",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Cameras",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Smartwatches",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Printers",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Monitors",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]
