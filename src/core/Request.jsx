import { Auth } from ".";


async function request(url, method = 'GET', body = {}, customMessage = { enabled: false, error: {}, success: {} }) {
    const response = await fetch(url, requestBody(method, body))
        .then(response => {
            if (response.status != 403)
                return response.json()
            else
                Auth.logout()
        })

    if (!response.status)
        window.alert(response.errors[0]);
    return response;
}

export function requestBody(method = 'GET', body = {}) {
    const reqBody = {
        method: method,
        headers: { "Content-Type": "application/json" }
    }

    if (Auth.getToken())
        reqBody.headers["Authorization"] = `Bearer ${Auth.getToken()}`

    if (method !== 'GET' && method !== 'DELETE') {
        console.log(1, body);
        reqBody.body = JSON.stringify(body)
    }
    return reqBody;
}

export class Request {
    static async _post(url = '', body = {}, message = {}) {
        return await request(url, 'POST', body, { enabled: true, ...message })
    }

    static async _get(url = '', message = {}) {
        return await request(url, 'GET', {}, { enabled: true, ...message })
    }

    static async _put(url = '', body = {}, message = {}) {
        return await request(url, 'PUT', body, { enabled: true, ...message })
    }

    static async _delete(url = '', message = {}) {
        return await request(url, 'DELETE', {}, { enabled: true, ...message })
    }
}
