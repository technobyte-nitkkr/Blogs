import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { POSTS_CACHE_TAG } from "@/lib/api";

export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("secret");

  if (!process.env.REVALIDATE_SECRET || token !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: "Invalid token" }, { status: 401 });
  }

  revalidateTag(POSTS_CACHE_TAG);

  return NextResponse.json({
    revalidated: true,
    tag: POSTS_CACHE_TAG,
    now: new Date().toISOString(),
  });
}
