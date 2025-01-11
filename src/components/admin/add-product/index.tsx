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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
import { Check, Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddCategoryForm from "../add-category";
import getTags from "@/actions/supabase/tags";
import AddTags from "../add-tags";
import AddSize from "../add-size";
import Spinner from "@/components/global/spinner";
import getSizes from "@/actions/supabase/sizes";
import { z } from "zod";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  barcode: z.string().nonempty("Barcode is required"),
  price: z.number().nonnegative("Price is required"),
  description: z.string().nonempty("Description is required"),
  category: z.array(z.string()).nonempty("Category is required"),
  brand: z.string().nonempty("Brand is required"),
  tags: z.array(z.string()).nonempty("Tags are required"),
  sizes: z.array(z.string()).nonempty("Sizes are required"),
  gender: z.string().nonempty("Gender is required"),
  images: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size > 0, "File cannot be empty")
        .refine(
          (file) =>
            ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
          "Only JPEG and PNG formats are allowed"
        )
    )
    .nonempty("At least one image is required"),
});

type FormValues = z.infer<typeof schema>;

const AddProductForm = (props: Props) => {
  const [gender, setGender] = useState<string | null>(null);
  const [genderPopup, setGenderPopup] = useState<boolean>(false);
  const [newCategoryModal, setNewCategoryModal] = useState<boolean>(false);
  const [newTagModal, setNewTagModal] = useState<boolean>(false);
  const [newSizeModal, setNewSizeModal] = useState<boolean>(false);
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
  const { data: sizesData, isLoading: sizesLoading } = useQuery({
    queryKey: ["sizes"],
    queryFn: () => getSizes(),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {},
    mutationKey: ["add-product"],
  });

  console.log(initialValues);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  if (isLoading || tagsLoading || sizesLoading) return <div>Loading...</div>;
  if (!initialValues || !tagsData || !sizesData)
    return <div>No data available</div>;

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

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Gender</FormLabel>
                <Popover open={genderPopup} onOpenChange={setGenderPopup}>
                  <PopoverTrigger className="w-full" asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {field.value ? field.value : "Select gender"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command className="w-full">
                      <CommandInput
                        placeholder="Search gender..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No gender found.</CommandEmpty>
                        <CommandGroup>
                          {Object.keys(initialValues).map((genderValue) => (
                            <CommandItem
                              key={genderValue}
                              value={genderValue}
                              onSelect={(currentValue) => {
                                field.onChange(currentValue);
                                setGenderPopup(false);
                              }}
                            >
                              {genderValue}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  field.value === genderValue
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription className="text-xs">
                  add gender for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

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
                  <Dialog
                    open={newCategoryModal}
                    onOpenChange={setNewCategoryModal}
                  >
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
                      <AddCategoryForm
                        callback={() => {
                          refetch();
                          setNewCategoryModal(false);
                        }}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <FormControl>
                  <Controller
                    name="category"
                    control={form.control}
                    render={({ field: controllerField }) => {
                      const selectedGender = form.watch("gender");
                      const options =
                        selectedGender && initialValues[selectedGender]
                          ? initialValues[selectedGender]
                          : [];

                      return (
                        <MultiSelect
                          // @ts-ignore
                          options={options}
                          value={controllerField.value}
                          onValueChange={controllerField.onChange}
                        />
                      );
                    }}
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
                  <Input placeholder="enter brand" {...field} />
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
                  <Dialog open={newTagModal} onOpenChange={setNewTagModal}>
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
                      <AddTags
                        callback={() => {
                          refetch();
                          setNewTagModal(false);
                        }}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <FormControl>
                  <Controller
                    name="tags"
                    control={form.control}
                    render={({ field: controllerField }) => (
                      <MultiSelect
                        options={tagsData.data ?? []}
                        value={controllerField.value}
                        onValueChange={controllerField.onChange}
                      />
                    )}
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
                  <Dialog open={newSizeModal} onOpenChange={setNewSizeModal}>
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
                      <AddSize
                        callback={() => {
                          refetch();
                          setNewSizeModal(false);
                        }}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <FormControl>
                  <Controller
                    name="sizes"
                    control={form.control}
                    render={({ field: controllerField }) => {
                      const selectedGender = form.watch("gender");
                      const options =
                        // @ts-ignore
                        selectedGender && sizesData[selectedGender]
                          ? // @ts-ignore
                            sizesData[selectedGender]
                          : [];
                      return (
                        <MultiSelect
                          // @ts-ignore
                          options={sizesData[gender] ?? []}
                          value={controllerField.value}
                          onValueChange={controllerField.onChange}
                        />
                      );
                    }}
                  />
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
            name="images"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Upload Images</FormLabel>
                <FormControl>
                  <Controller
                    name="images"
                    control={form.control}
                    render={({ field: controllerField }) => (
                      <Input
                        type="file"
                        multiple
                        onChange={(event) => {
                          controllerField.onChange(event.target.files);
                        }}
                      />
                    )}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Upload images for your product.
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
