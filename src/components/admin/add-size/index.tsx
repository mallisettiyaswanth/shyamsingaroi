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
import getInitialFormValues from "@/actions/supabase/initial-form";
import addSize from "@/actions/supabase/add-size";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  callback: () => void;
};

const schema = z.object({
  size: z.string().nonempty("Sizee is required"),
  gender: z.string().nonempty("Gender is required"),
});

type FormValues = z.infer<typeof schema>;

const AddSize = ({ callback }: Props) => {
  const [genderPopup, setGenderPopup] = useState<boolean>(false);

  const { data: initialValues, isLoading } = useQuery({
    queryKey: ["intial-form-values"],
    queryFn: () => getInitialFormValues(),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["add-size"],
    mutationFn: async (values: FormValues) =>
      addSize(values.gender, values.size),
    onSuccess(data, variables, context) {
      callback();
    },
  });

  const onSubmit = (values: FormValues) => {
    toast.promise(mutateAsync(values), {
      loading: "Adding size...",
      success: "Size added successfully",
      error: "Failed to add size",
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (!initialValues) return <div>No data available</div>;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <DialogHeader>Add new size</DialogHeader>

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
                      <CommandEmpty>No Gender found.</CommandEmpty>
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
          name="size"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Size</FormLabel>
              <FormControl>
                <Input placeholder="size" {...field} />
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

export default AddSize;
