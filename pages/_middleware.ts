import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from "next/server";

export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  return NextResponse.next()
}
