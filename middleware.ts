import { NextResponse, NextRequest, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  // detect user device
  const { device } = userAgent(request);

  if (device.type === "mobile") {
    // Redirect to mobile page
    return NextResponse.redirect(new URL("/mobile", request.url));
  } else {
    // Redirect to mobile page
    return NextResponse.redirect(new URL("/desktop", request.url));
  }
}

export const config = {
  matcher: "/",
};
