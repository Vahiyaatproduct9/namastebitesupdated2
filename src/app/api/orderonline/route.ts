import { OrderOnlineFunction } from "@/logic/orderonline";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, phone, location, computedlocation, orders } = await req.json()
    const status = await OrderOnlineFunction(name, phone, location, computedlocation, orders)
    return NextResponse.json({ status })

}