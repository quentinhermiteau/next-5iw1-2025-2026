"use client";

import { redirect } from "next/navigation";

import { deleteCookie } from "@/actions/cookies";
import { SidebarFooter as UISidebarFooter } from "@/components/ui/sidebar";
import { Button } from "../ui/button";

export default function SidebarFooter() {
  return (
    <UISidebarFooter>
      <Button
        variant="destructive"
        onClick={() => {
          deleteCookie("isAuthed");
          redirect("/login");
        }}
      >
        Logout
      </Button>
    </UISidebarFooter>
  );
}
