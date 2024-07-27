"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { OctagonAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCancel() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex h-fit w-full items-center space-x-2 rounded-md bg-amber-500 px-4 py-2 text-sm text-white shadow-yellow-400 drop-shadow-lg transition-colors hover:bg-amber-600 sm:w-auto sm:text-base">
          <span className="sm:text-sx text-base md:text-sm">Action</span>
          <OctagonAlertIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuItem>Report</DropdownMenuItem>
        <DropdownMenuItem>Cancel Order</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
