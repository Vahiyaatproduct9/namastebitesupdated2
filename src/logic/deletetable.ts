import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config";
const uri = process.env.MONGOODB_ADMIN || ""

export default async function deleteTable(id: string) {
    let status = "initiate"
    if (!id) {
        throw new Error("Order ID is required");
    }

    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("NamasteBites");
        const ordersCollection = database.collection("TableBookings");
        // Validate ID format
        const result = await ordersCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 1) {
            status = "success";
        }
    } catch (error) {
        status = "error" + error;
    } finally {
        await client.close();
        return status;
    }
}