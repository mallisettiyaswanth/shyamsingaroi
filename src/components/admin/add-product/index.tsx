"use client";

import getInitialFormValues from "@/actions/supabase/initial-form";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddCategoryForm from "../add-category";
import getTags from "@/actions/supabase/tags";
import AddTags from "../add-tags";
import AddSize from "../add-size";
import Spinner from "@/components/global/spinner";

type Props = {};

const AddProductForm = (props: Props) => {
  const [gender, setGender] = useState<string | null>(null);
  const [genderPopup, setGenderPopup] = useState<boolean>(false);
  const {
    data: initialValues,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["intial-form-values"],
    queryFn: () => getInitialFormValues(),
  });
  const { data: tagsData, isLoading: tagsLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: () => getTags(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {},
    mutationKey: ["add-product"],
  });

  console.log(initialValues);
  const form = useForm();

  const onSubmit = () => {};
  if (isLoading) return <div>Loading...</div>;
  if (!initialValues) return <div>No data available</div>;

  return (
    <div className="flex p-3 h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="product name" {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  add short name for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="barcode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Barcode</FormLabel>
                <FormControl>
                  <Input placeholder="barcode" {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  add barcode of your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex flex-col gap-2 py-2">
            <Label>Gender</Label>
            <Popover open={genderPopup} onOpenChange={setGenderPopup}>
              <PopoverTrigger className="w-full" asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                >
                  {gender ? gender : "Select gender"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command className="w-full">
                  <CommandInput
                    placeholder="Search framework..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {Object.keys(initialValues).map((genderValue) => {
                        return (
                          <CommandItem
                            key={genderValue}
                            value={genderValue}
                            onSelect={(currentValue) => {
                              setGender(currentValue);
                              setGenderPopup(false);
                            }}
                          >
                            {genderValue}
                            <Check
                              className={cn(
                                "ml-auto",
                                gender === genderValue
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        );
                      })}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Price" {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  add price for your product. (in INR)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="description" {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  add short description for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <div className="w-full flex justify-between">
                  <FormLabel>Category</FormLabel>
                  <Dialog>
                    <DialogTrigger>
                      <Button
                        variant="ghost"
                        className="p-0 h-fit hover:bg-transparent"
                      >
                        <Plus />
                        <span>Add Category</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <AddCategoryForm callback={() => refetch()} />
                    </DialogContent>
                  </Dialog>
                </div>
                <FormControl>
                  <MultiSelect
                    // @ts-ignore
                    options={initialValues[gender] ?? []}
                    onValueChange={() => {}}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  add category for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder="enter brand" />
                </FormControl>
                <FormDescription className="text-xs">
                  add brand for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="w-full">
                <div className="w-full flex justify-between">
                  <FormLabel>Tags</FormLabel>
                  <Dialog>
                    <DialogTrigger>
                      <Button
                        variant="ghost"
                        className="p-0 h-fit hover:bg-transparent"
                      >
                        <Plus />
                        <span>Add tags</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <AddTags callback={() => refetch()} />
                    </DialogContent>
                  </Dialog>
                </div>
                <FormControl>
                  <MultiSelect
                    options={tagsData?.data ?? []}
                    onValueChange={() => {}}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  add tags for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sizes"
            render={({ field }) => (
              <FormItem className="w-full">
                <div className="w-full flex justify-between">
                  <FormLabel>Sizes</FormLabel>
                  <Dialog>
                    <DialogTrigger>
                      <Button
                        variant="ghost"
                        className="p-0 h-fit hover:bg-transparent"
                      >
                        <Plus />
                        <span>Add size</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <AddSize callback={() => refetch()} />
                    </DialogContent>
                  </Dialog>
                </div>
                <FormControl>
                  <MultiSelect options={[]} onValueChange={() => {}} />
                </FormControl>
                <FormDescription className="text-xs">
                  add sizes for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sizes"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Sizes</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="choose your image" multiple />
                </FormControl>
                <FormDescription className="text-xs">
                  upload images for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <span></span>

          <div className="w-full h-full flex justify-center items-center">
            <Button type="submit" className="h-fit w-fit">
              {isLoading || isPending ? <Spinner /> : "Add Product"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
