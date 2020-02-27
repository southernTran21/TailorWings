class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo')) || {};
        if ( accountInfo != null ) {
            return accountInfo.isAuthen;
        }else {
            return this.authenticated;
        }
    }
}

export default new Auth();
