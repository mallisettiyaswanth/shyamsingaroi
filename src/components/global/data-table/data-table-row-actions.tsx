"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import InspectProduct from "@/components/admin/inspect";
import AddProductForm from "@/components/admin/add-product";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
        <DialogContent className="w-full h-full max-w-full">
          <InspectProduct
            id={
              // @ts-ignore
              row.original.id
            }
            actions={false}
          />
        </DialogContent>
      </Dialog>
      <Dialog
        open={editDialogOpen}
        onOpenChange={() => setEditDialogOpen(!editDialogOpen)}
      >
        <DialogContent className="w-full h-full max-w-full">
          <AddProductForm
            id={
              // @ts-ignore
              row.original.id
            }
          />
        </DialogContent>
      </Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px] p-0">
          <div className="flex p-2 flex-col">
            <DropdownMenuItem onClick={() => setDialogOpen(true)}>
              Inspect
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setEditDialogOpen(true)}>
              Edit
            </DropdownMenuItem>
          </div>
          <DropdownMenuItem className="p-0">
            <Badge
              className="w-full rounded-none p-2 font-normal text-center flex items-center justify-center"
              variant="destructive"
            >
              Delete
            </Badge>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
