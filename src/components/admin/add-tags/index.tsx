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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import getInitialFormValues from "@/actions/supabase/initial-form";

type Props = {
  callback: () => void;
};

const schema = z.object({
  tag: z.string().nonempty("Tag is required"),
});

type FormValues = z.infer<typeof schema>;

const AddTags = ({ callback }: Props) => {
  const { data: initialValues, isLoading } = useQuery({
    queryKey: ["intial-form-values"],
    queryFn: () => getInitialFormValues(),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["add-tag"],
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
        <DialogHeader>Add new tag</DialogHeader>

        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Tag</FormLabel>
              <FormControl>
                <Input placeholder="tag" {...field} />
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

export default AddTags;
