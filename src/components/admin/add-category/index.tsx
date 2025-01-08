"use client";
import Spinner from "@/components/global/spinner";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import getInitialFormValues from "@/actions/supabase/initial-form";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  callback: () => void;
};

const schema = z.object({
  category: z.string().nonempty("Category is required"),
  gender: z.string().nonempty("Gender is required"),
});

type FormValues = z.infer<typeof schema>;

const AddCategoryForm = ({ callback }: Props) => {
  const [genderPopup, setGenderPopup] = useState<boolean>(false);

  const { data: initialValues, isLoading } = useQuery({
    queryKey: ["intial-form-values"],
    queryFn: () => getInitialFormValues(),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      category: "",
      gender: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["add-category"],
    mutationFn: async (values: FormValues) => {
      console.log("Submitted values:", values);
    },
    onSuccess(data, variables, context) {
      callback();
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("onSubmit Values:", values);
    mutate(values);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!initialValues) return <div>No data available</div>;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <DialogHeader>Add new category</DialogHeader>

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="w-full">
              <Label>Gender</Label>
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
                          );
                        })}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit">{isPending ? <Spinner /> : "Add"}</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default AddCategoryForm;
