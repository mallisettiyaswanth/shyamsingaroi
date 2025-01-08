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
  size: z.string().nonempty("Sizee is required"),
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

  const { mutate, isPending } = useMutation({
    mutationKey: ["add-size"],
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
        <DialogHeader>Add new size</DialogHeader>

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
