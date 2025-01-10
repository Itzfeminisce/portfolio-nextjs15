import sendpulse from "../../../libs/sendpulse";

interface SendEmailPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}


export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json() as SendEmailPayload;

        const client = sendpulse({ email: 'rofesol.ng@gmail.com', name: "Rotimi Oluwafemi" })

        await client.sendEmail(
            subject,
            {
                template: {
                    id: "",
                    variables: {
                        subject: `Contact Form Submission: ${subject}`,
                        name,
                        email,
                        message
                    }
                }
            }
        )

        return Response.json({ msg: 'Success' }, {
            status: 201
        });
    } catch (error) {
        console.log(error);
        return Response.json({ msg: 'Failed' }, {
            status: 500
        });
    }
};
