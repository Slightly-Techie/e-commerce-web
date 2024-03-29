import { cn } from "@/lib/utils"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: React.ReactElement
    dropdownLinks?: { title: string; label?: string; to: string }[]
    to: string
    badgeValue?: number
  }[]
}

const buttonStyleInActive = "bg-background text-secondary "

const buttonStyleActive = "bg-gray100 border border-gray200 text-foreground"

const buttonStyle =
  "rounded-md p-3 flex w-full hover:bg-gray100 hover:text-foreground text-product-sans group *:hover:bg-background"

const Badge = ({ value }: { value: number }) => (
  <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-error600 text-xs font-bold text-foreground text-white">
    <p>{value}</p>
  </div>
)
export function Nav({ links, isCollapsed }: NavProps) {
  const { pathname } = useLocation()

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex w-[225px] flex-col gap-4 py-2 data-[collapsed=true]:py-2 "
      >
        <nav className="grid gap-3 px-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-1 md:px-2 md:group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={link.to}
                    className={cn(
                      "h-9 w-9 ",
                      buttonStyle,
                      link.to === pathname
                        ? buttonStyleActive
                        : buttonStyleInActive,
                    )}
                  >
                    {link.icon &&
                      React.cloneElement(link.icon, {
                        className: "w-4 h-4  ",
                      })}
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-sm text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                to={link.to}
                className={cn(
                  buttonStyle,
                  "justify-start",
                  link.to === pathname
                    ? buttonStyleActive
                    : buttonStyleInActive,
                  link.badgeValue ? "group" : "",
                )}
              >
                {link.icon}
                <p className="ml-3 text-base"> {link.title}</p>
                {link.label && (
                  <span className={cn("ml-auto text-sm")}>{link.label}</span>
                )}
                {link.badgeValue ? <Badge value={link.badgeValue} /> : null}
              </Link>
            ),
          )}
        </nav>
      </div>
    </TooltipProvider>
  )
}
