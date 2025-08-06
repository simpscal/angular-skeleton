import { jwtDecode } from 'jwt-decode';

export class JwtTokenUtil {
    static isTokenExpired(token: string) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            return decodedToken.exp < currentTime;
        } catch {
            return true;
        }
    }
}
