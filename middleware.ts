import { NextResponse, NextRequest, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);

  if (device.type === "mobile") {
    return NextResponse.redirect(new URL("/mobile", request.url));
  } else {
    return NextResponse.redirect(new URL("/desktop", request.url));
  }
  // Redirect to login page if not authenticated
}

export const config = {
  matcher: "/dashboard/:path*",
};
