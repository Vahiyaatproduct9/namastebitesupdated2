import { NextResponse } from "next/server";
import { insertData } from "@/logic/bookaseat";


export async function POST(req: Request) {
    const { name, phone, email, date, time } = await req.json();

    const result = await insertData(name, phone, email, date, time);

    return NextResponse.json({ result });
}
