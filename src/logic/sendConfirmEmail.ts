const nodemailer = require("nodemailer");


export async function sendConfirmEmail(name: string, email: string, date: string, time: string, isConfirmed: boolean) {
    let confirmStatus = 'initiate';
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "kishordebnath123123@gmail.com",
            pass: "vdidywtegdgsqzva",
        },
    });

    try {
        if (isConfirmed) {
            await transporter.sendMail({
                from: '"Namaste Bites" <kishordebnath123123@gmail.com>',
                to: email,
                subject: "Table Confirmed! | Namaste Bites",
                text: "Your Table is Confirmed! | Namaste Bites",
                html: `<h2 style='color: skyblue;'>CONFIRMED</h2>
                <p>
                Hello ${name},
            <br>
            Your table is confirmed for <b>${date}</b> at <b>${time}</b>. We look forward to serving you at Namaste Bites!
            </p>`,
            });

            confirmStatus = 'confirmation_sent';
        }
        else if (!isConfirmed) {
            await transporter.sendMail({
                from: '"Namaste Bites" <kishordebnath123123@gmail.com>',
                to: email,
                subject: "Booking Failed | Namaste Bites",
                text: "Table Declined | Namaste Bites",
                html: `<h2 style='color: red;'>DECLINED</h2>
                <p>
                Hello ${name},
            <br>
            It is with great regret that your table for <b>${date}</b> at <b>${time}</b> has been declined due to some reason from the manager's side.<br>
            Please contact us for more information.
            <br>
            <a href='tel:+918167353739'>+91 8167353739</a>
            </p>`,
            });
            confirmStatus = 'rejection_sent';
        }
    }
    catch (error) {
        confirmStatus = 'error' + error;
    }
    finally {
        return confirmStatus;
    }
}
