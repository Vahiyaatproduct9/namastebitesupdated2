import { Admin } from "@/logic/admin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const { username, password } = await req.json();

    const result = await Admin(username, password);

    return NextResponse.json({ result });

}