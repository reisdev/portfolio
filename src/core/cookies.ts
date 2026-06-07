export default class Cookies {
    static get(name: string) {
        let cookies = document.cookie.split("; ")
                              .find((ck => ck.startsWith(`${name}=`)));

        return cookies ? cookies.split("=")[1] : null;
    }
    static update(name: string, value: any, expiration: Date | null = null) {
        let cookie = `${name}=${value}`;

        if (expiration) {
            cookie += `expiration=${expiration.toUTCString()}`;
        }

        document.cookie = cookie
    }
}

