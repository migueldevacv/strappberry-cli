export class Auth {
    static verify() {
        const token = this.getToken()
        const role = this.getRole()
        if (token && role) {
            const host = window.location.host
            if (role == 1) return window.location.replace(`http://${host}/admin/catalogs/products`)
            else return window.location.replace(`http://${host}/page/products`)
        }
        return this.logout()
    }

    static isLogged() {
        const token = this.getToken()
        const role = this.getRole()
        if (token && role)
            return { status: true, role: role }
        return { status: false }
    }

    static logout = () => {
        localStorage.clear()
        window.location.replace(`http://${window.location.host}/auth/login`)
    }

    static setToken = (token) => localStorage.setItem('token', token)

    static setRole = (role) => localStorage.setItem('role', role)

    static getToken = () => localStorage.getItem('token') || null

    static getRole = () => localStorage.getItem('role') || null
}