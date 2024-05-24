import request from "@/utils";


async function request(url, method = 'GET', body = {}, customMessage = { enabled: false, error: {}, success: {} }) {
    const response = fetch(url, requestBody(method, body))
        .then(response => response.json())

    return response;
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
