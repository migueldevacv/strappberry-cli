class Auth {
    static verify() {
        if (this.getToken()) {
            return true
        }
        return false

    }

    static getToken = () => localStorage.getItem('token') || null
}