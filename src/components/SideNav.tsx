import { Nav } from "./ui/nav";
import { useWindowWidth } from "@react-hook/window-size";
import { Bag, ClockHistory, Heart, Search, Truck } from "../assets/icons";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideNav() {
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  return (
    <div
      className={`fixed rounded-2xl h-[90vh] min-w-[60px] w-[80px] md:w-[16.25rem] border  md:p-4 bg-white  z-20 transition-all flex flex-col justify-between`}
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
            title: "Saved Products",
            to: "#",
            icon: <Heart />,
            badgeValue: 16,
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
  );
}

const Bio = () => {
  return (
    <div className="flex items-center justify-between w-full space-x-3 ">
      <div className="flex items-center justify-start w-full space-x-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm">Michael Mensah</p>
          <Badge>ST Member</Badge>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "sm",
            }),

            "justify-center items-center ml-auto"
          )}
        >
          <MoreVertical className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          <Link to="#" className="full">
            <DropdownMenuItem>link 1</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
