"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { invalidateCache } from "@/actions/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UserAdd() {
  const [username, setUsername] = useState("");

  const addUser = () => {
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username }),
    }).then(() => invalidateCache("/admin/users"));
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={addUser}>
        <Plus />
        Ajouter un utilisateur
      </Button>
    </div>
  );
}
