import { cn } from "@/lib/utils"
import { useWindowWidth } from "@react-hook/window-size"
import { MoreVertical } from "lucide-react"
import { Link } from "react-router-dom"
import { Bag, ClockHistory, Heart, Search, Truck } from "../assets/icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { buttonVariants } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Nav } from "./ui/nav"

export default function SideNav() {
  const onlyWidth = useWindowWidth()
  const mobileWidth = onlyWidth < 768

  return (
    <div
      className={`fixed z-20 flex h-[90vh] w-[80px] min-w-[60px] flex-col  justify-between rounded-2xl  border bg-white transition-all md:w-[16.25rem] md:p-4`}
    >
      <Nav
        isCollapsed={mobileWidth}
        links={[
          {
            title: "All Products",
            to: "/",
            icon: <Bag />,
          },
          {
            title: "Explore",
            to: "#",
            icon: <Search />,
          },
          {
            title: "Favorites",
            to: "#",
            icon: <Heart />,
            badgeValue: 1,
          },
          {
            title: "Track Orders",
            to: "#",
            icon: <Truck />,
          },
          {
            title: "Order History",
            to: "#",
            icon: <ClockHistory />,
          },
        ]}
      />
      <Bio />
    </div>
  )
}

const Bio = () => {
  return (
    <div className="flex w-full items-center justify-between space-x-3 ">
      <div className="flex w-full items-center justify-start space-x-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm">Michael Mensah</p>
          <Badge className="bg-[#FDF0D5] text-[#6F4400]">ST Member</Badge>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "sm",
            }),

            "ml-auto items-center justify-center",
          )}
        >
          <MoreVertical className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          <Link to="#" className="full">
            <DropdownMenuItem>link 1</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
