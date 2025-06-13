import { MongoClient } from "mongodb";
import 'dotenv/config'
import { error } from "console";

const uri: string | undefined = process.env.MONGOODB_SEATS;
if (!uri) {
    throw new Error("MONGOODB_DB environment variable is not defined");
}

export async function insertData(
    name: string,
    phone: string,
    email: string,
    date: Date,
    time: string
): Promise<string> {

    let status = "initiate"

    const connection = new MongoClient(uri as string);

    const DB = connection.db('NamasteBites')
    const coll = DB.collection('TableBookings')
    const connected = await connection.connect()

    if (connected) {
        try {
            const data = {
                name: name.trim(),
                phone: phone.trim(),
                email: email.trim(),
                date: date,
                time: time
            }
            const result = await coll.insertOne(data)
            if (result.acknowledged) {
                status = "success"
            }
            else {
                status = "failure"
            }
        } catch (error) {
            console.error(error)
            status = "insertion_failure"
        } finally {
            await connection.close()
        }
    }
    else {
        status = "connection_failure"
    }
    return status;

}