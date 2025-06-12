import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config";
const uri = process.env.MONGOODB_ADMIN || ""

export default async function deleteOrder(id: string) {
    let status = "initiate"
    if (!id) {
        throw new Error("Order ID is required");
    }

    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("NamasteBites");
        const ordersCollection = database.collection("Orders");
        // Validate ID format
        const result = await ordersCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 1) {
            status = "success";
        }
    } catch (error) {
        console.error("Error deleting order:", error);
        status = "error";
    } finally {
        await client.close();
        return status;
    }
}