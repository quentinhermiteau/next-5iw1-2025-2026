"use client";

import { Plus } from "lucide-react";

import { invalidateCache } from "@/actions/cache";
import { Button } from "@/components/ui/button";

export default function UserAdd() {
  const addUser = () => {
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username: "toto" }),
    }).then(() => invalidateCache("/admin/users"));
  };

  return (
    <Button onClick={addUser}>
      <Plus />
      Ajouter un utilisateur
    </Button>
  );
}
