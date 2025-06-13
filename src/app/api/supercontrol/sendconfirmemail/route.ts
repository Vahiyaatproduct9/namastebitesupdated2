import { NextResponse } from "next/server";
import { sendConfirmEmail } from "@/logic/sendConfirmEmail";

export async function POST(request: Request) {
    const { name, phone, email, date, time, isConfirmed } = await request.json();
    try {
        const confirmStatus = await sendConfirmEmail(name, email, date, time, isConfirmed);
        return NextResponse.json({ confirmStatus });
    } catch (error) {
        console.error("Error sending confirmation email:", error);
        return NextResponse.json({ error });
    }

}