"use server";

import { revalidatePath } from "next/cache";

export async function invalidateCache(path: string) {
  revalidatePath(path, "page");
}
