import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ButtonType, FilterFormFields } from "@/types";
import PriceRangeSlider from "./PriceRangeSlider";
import SelectButton from "./formElements/SelectButtons";
import Button from "./Button";

export default function Filters() {
  const [loading, setloading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { register, handleSubmit, control } = useForm<FilterFormFields>();
  const categories = [
    "computing",
    "books",
    "courses",
    "Mobile phones & Tablets",
    "Games",
    "Accessories",
  ];
  const discounts = [
    "no discount",
    "10%-20%",
    "21%-40%",
    "41%-60%",
    "61%-80%",
    "*1% or more",
  ];

  const onSubmit: SubmitHandler<FilterFormFields> = (data) => {
    console.log(data);
  };
  return (
    <>
      {isCollapsed && (
        <Button
          btnType={ButtonType.secondary}
          onClick={() => setIsCollapsed(false)}
          className="flex space-x-4"
        >
          <img src="/assets/icons/filter-lines.svg" alt="" />
          <h2 className="">Filter Products</h2>
        </Button>
      )}
      <form
        data-collapsed={isCollapsed}
        className={`group data-[collapsed=true]:w-0 data-[collapsed=true]:p-0 data-[collapsed=true]:z-[-1]  fixed rounded-2xl h-[90vh] w-[19.5rem] border  md:py-6 md:px-4 bg-white  z-20 transition-all `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="group-[[data-collapsed=true]]:hidden flex flex-col justify-start">
          <div
            className="flex w-full mb-2"
            onClick={() => setIsCollapsed(true)}
          >
            <img src="/assets/icons/filter-lines.svg" alt="" />
            <h2 className="ml-4 text-lg font-bold">Filter Products</h2>
            <img
              src="/assets/icons/tabler-layout-sidebar-left-collapse.svg"
              alt=""
              className="ml-auto"
            />
          </div>
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["Categories", "Price (GH¢)", "Discount Percentage"]}
          >
            <FilterSection label="Categories">
              <div className="flex flex-wrap w-full gap-4 rounded-xl">
                {categories &&
                  categories.map((value: string) => (
                    <SelectButton
                      key={value}
                      {...register("categories")}
                      value={value}
                      id={value}
                      name="categories"
                    />
                  ))}
              </div>
            </FilterSection>
            <FilterSection label="Price (GH¢)">
              <Controller
                control={control}
                name="price"
                defaultValue={[0, 0]}
                render={({ field: { value, onChange } }) => (
                  <PriceRangeSlider
                    max={5000}
                    step={20}
                    defaultValue={[0, 0]}
                    value={value}
                    onValueChange={onChange}
                    onChangeInputValues={onChange}
                    minStepsBetweenThumbs={20}
                  />
                )}
              />
            </FilterSection>
            <FilterSection label="Discount Percentage">
              <div className="flex flex-wrap w-full gap-4 rounded-xl">
                {discounts &&
                  discounts.map((value: string) => (
                    <SelectButton
                      key={value}
                      {...register("discount_percentage")}
                      value={value}
                      id={value}
                      name="discount_percentage"
                    />
                  ))}
              </div>
            </FilterSection>
          </Accordion>
          <Button
            className="w-full mt-4"
            btnType={loading ? ButtonType.disabled : ButtonType.primary}
          >
            {loading ? "Filtering..." : "Filter"}
          </Button>
        </div>
      </form>
    </>
  );
}

const FilterSection = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <AccordionItem className="font-bold" value={label}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};
