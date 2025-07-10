import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware ejecutado para:", request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return new NextResponse("Auth required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Area"',
        },
      });
    }

    try {
      const base64Credentials = authHeader.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8').split(':');
      const [username, password] = credentials;

      const validUser = process.env.ADMIN_USER;
      const validPass = process.env.ADMIN_PASS;

      if (username !== validUser || password !== validPass) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
    } catch (error) {
      return new NextResponse("Invalid auth format", { status: 400 });
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};