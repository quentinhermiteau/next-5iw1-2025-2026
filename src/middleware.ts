import createMiddleware from "next-intl/middleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "./i18n/routing";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);
  response.headers.set("x-current-path", request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const cookieStore = await cookies();
    const { value } = cookieStore.get("isAuthed") || { value: "false" };

    if (value !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
