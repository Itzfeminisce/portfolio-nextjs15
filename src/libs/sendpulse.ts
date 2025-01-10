import axios from "axios"



const { APP_URL, SENDPULSE_CLIENT_ID, SENDPULSE_CLIENT_SECRET } = process.env;


enum SendPulseEndpoint {
    EMAIL = "/smtp/emails",
    SMS = "/sms/create",
    TEMPLATE = "/template/:template_slug",
    TEMPLATES = "/templates/?owner=me"
}

interface SendPulseApi {
    [SendPulseEndpoint.EMAIL]: { email: Email };
    "/": "{}",
    [SendPulseEndpoint.SMS]: { phone: number, message: string },
    "/template/:template_slug": { template_slug: string },
    "/templates/?owner=me": never
}



/**
 * Sends email using sendPulse API
 * @param recipients Array<{email: string, name: string}>
 * @returns 
 */
export default function sendpulse(...recipients: To) {
    const send = async function () {
        await Request("/", "{}" as any)
    }
   
    send.sendEmail = async (subject: string, payload: Omit<SendPulseApi["/smtp/emails"]["email"], "to" | "from" | "subject">) => {
        try {
            await Request(SendPulseEndpoint.EMAIL, {
                email: {
                    subject,
                    auto_plain_text: true,
                    from: {
                        email: "dev@notjustevent.com",
                        name: "NotJustEvent"
                    },
                    to: Array.from(recipients),
                    ...(payload.template ? {
                        template: {
                            id: payload.template.id,
                            variables: {
                                app_url: APP_URL,
                                app_name: "NotJustEvent",
                                support_email: "support@notjustevent.com",
                                current_year: new Date().getFullYear(),
                                ec_es_email_sender_company: "NotJustEvent",
                                ec_es_email_sender_address: "Newcastle, Delaware",
                                ...(payload?.template.variables || {})
                            }
                        }
                    } : { template: undefined }),
                    ...(payload.html ? {
                        html: payload.html,
                    } : { html: undefined }),
                    ...(payload.text ? {
                        text: payload.text,
                    } : { text: undefined }),
                }
            })
        } catch (error) {
            console.log("🚀 ~ send.sendEmail= ~ error:", error)
            throw error;
        }
    }

    return send;
}


const axiosClient = axios.create({
    baseURL: "https://api.sendpulse.com"
})


axiosClient.interceptors.request.use(async (config) => {
    const response = await axios.post("https://api.sendpulse.com/oauth/access_token", {
        client_id: SENDPULSE_CLIENT_ID,
        client_secret: SENDPULSE_CLIENT_SECRET,
        grant_type: "client_credentials"
    })

    const credential = response.data as SendPulseAuthenticationResponse
    config.headers.Authorization = `${credential.token_type} ${credential.access_token}`
    return config;
}, error => Promise.reject(error))


async function Request<IResponse, Url extends keyof SendPulseApi, Payload = SendPulseApi[Url]>(url: Url | string, payload: Payload | undefined, method: "POST" | "GET" | "PUT" | "OPTIONS" | "DELETE" = "POST") {
    const response = await axiosClient.request<IResponse>({
        url,
        data: payload,
        method,
    })
    // console.log("SendPulse [Response]", response.data)
    return response.data
}


export interface Email {
    subject: string;
    from: From;
    to: To;

    html?: string;
    text?: string;

    template?: Template;
    // attachments?: Attachement
}


export interface SendPulseResponse {
    email: Email;
}

export interface From {
    name: string;
    email: string;
}

export type To = From[]

export interface Template {
    id: number | string;
    variables: Variables;
}

export type Variables = Record<string, string>

export interface Attachement {
    [key: string]: string;
}



interface SendPulseAuthenticationRequest {
    "grant_type": "client_credentials",
    "client_id": string,
    "client_secret": string
}

interface SendPulseAuthenticationResponse {
    "access_token": string,
    "token_type": `Bearer`,
    "expires_in": number
}

export interface IEmailTemplate {
    id: string;
    real_id: number;
    lang: string;
    name: string;
    name_slug: string;
    created: Date;
    full_description: string;
    category: string;
    category_info: CategoryInfo;
    tags: Tags;
    owner: string;
    preview: string;
}

export interface CategoryInfo {
    id: number;
    name: string;
    meta_description: string;
    full_description: string;
    code: string;
    sort: number;
}

export interface Tags {
    valentine: string;
}



