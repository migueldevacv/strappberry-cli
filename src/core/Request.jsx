import { Auth } from ".";


async function request(url, method = 'GET', body = {}, customMessage = { enabled: false, error: {}, success: {} }) {
    const response = fetch(url, requestBody(method, body))
        .then(response => response.json())

    return response;
}

export function requestBody(method = 'GET', body = {}) {
    const reqBody = {
        method: method,
        headers: { "Content-Type": "application/json" }
    }

    if (Auth.getToken())
        reqBody.headers["Authenticate"] = `Bearer ${Auth.getToken()}`

    if (method !== 'GET' && method !== 'DELETE') {
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
        return await request(url, 'GET', {}, { enabled: true, ...message })
    }
}
