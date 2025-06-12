import { MongoClient } from "mongodb";
import 'dotenv/config'
import { error } from "console"
const uri: string | any = process.env.MONGOODB_ORDERS;
if (!uri) {
    throw new Error("MONGODB_DB environment variable is not set.");
}

export async function OrderOnlineFunction(
    name?: string,
    phone?: number,
    location?: string,
    computedlocation?: Array<string>,
    orders?: Array<Array<Object>>
) {
    let status = "initiate"
    const connection = new MongoClient(uri as string);
    try {
        const connectDB = connection.db('NamasteBites')
        const connectColl = connectDB.collection('Orders')
        const connected = await connection.connect()
        if (connected) {
            const OrderData = {
                name: name,
                phone: phone,
                location: location,
                computedlocation: computedlocation,
                orders: orders
            }
            const insertOrders = await connectColl.insertOne(OrderData)
            if (insertOrders.acknowledged) {
                status = "success"
            }
            else {
                status = "insertion_failure"
            }
        } else {
            status = "connection_failure"
        }
    }
    catch (error) {
        console.error('Error: ' + error);
        status = "catch connection_failure"
    }
    finally {
        await connection.close();
    }
    return status;
}