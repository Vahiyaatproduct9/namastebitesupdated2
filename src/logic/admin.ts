import { MongoClient } from "mongodb";
import 'dotenv/config'

if (
    !process.env.MONGOODB_ADMIN ||
    !process.env.NEXT_PUBLIC_ADMIN_USERNAME ||
    !process.env.NEXT_PUBLIC_ADMIN_PASSWORD
) {
    throw new Error("One or more required environment variables are missing.");
}
const uriFirst: string = process.env.MONGOODB_ADMIN
const uriuser = process.env.NEXT_PUBLIC_ADMIN_USERNAME
const uripass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD


export async function Admin(username: string, password: string) {

    const client = new MongoClient(uriFirst)



    if (username === uriuser && password === uripass) {
        try {
            await client.connect()
            const Orders = client.db('NamasteBites').collection('Orders');
            const TableBookings = client.db('NamasteBites').collection('TableBookings')
            const OrdersData = await Orders.find({}).toArray();
            const TableBookingsData = await TableBookings.find({}).toArray();
            return { OrdersData, TableBookingsData }
        }
        catch (error) {

            console.log(error)
        }
        finally {
            await client.close()
        }
    }
    else {
        return ["Incorrect Password", { username, password }]
    }
}