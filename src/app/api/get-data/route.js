import query from "@/app/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
    const result = await query("SELECT * FROM schools");

    return NextResponse.json(result);
}