"use client";

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
import { MultiSelect } from "@/components/ui/multi-select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const AddProductForm = (props: Props) => {
  const form = useForm();
  const onSubmit = () => {};
  return (
    <div className="flex p-3 h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full p-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-fit h-fit">
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
              <FormItem className="w-fit h-fit">
                <FormLabel>Barcode</FormLabel>
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
            name="gender"
            render={({ field }) => (
              <FormItem className="w-fit h-fit">
                <FormLabel>Gender</FormLabel>
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
            name="price"
            render={({ field }) => (
              <FormItem className="w-fit h-fit">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Price" {...field} />
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
            name="description"
            render={({ field }) => (
              <FormItem className="w-fit h-fit">
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
              <FormItem className="w-fit h-fit">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <MultiSelect options={[]} onValueChange={() => {}} />
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
            name="brand"
            render={({ field }) => (
              <FormItem className="w-fit h-fit">
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <MultiSelect options={[]} onValueChange={() => {}} />
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
            name="tags"
            render={({ field }) => (
              <FormItem className="w-fit h-fit">
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <MultiSelect options={[]} onValueChange={() => {}} />
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
            name="sizes"
            render={({ field }) => (
              <FormItem className="w-fit h-fit">
                <FormLabel>Sizes</FormLabel>
                <FormControl>
                  <MultiSelect options={[]} onValueChange={() => {}} />
                </FormControl>
                <FormDescription className="text-xs">
                  add short description for your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
