import deleteTable from "@/logic/deletetable";
import "dotenv/config"
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    try {
        const { username, password, id } = await request.json();


        if (username !== process.env.NEXT_PUBLIC_ADMIN_USERNAME || password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Validate ID
        if (!id) {
            return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
        }

        // Call the deleteOrder logic
        const result = await deleteTable(id);
        return NextResponse.json({ result });

    } catch (error) {
        console.error("Error in delete route:", error);
        return NextResponse.json({ error: "Failed to delete order" });
    }
}