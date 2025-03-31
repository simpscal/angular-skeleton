export class LocalStorageUtility {
    static getSecretData(key: string) {
        try {
            return decodeURIComponent(atob(localStorage.getItem(key)));
        } catch {
            return '';
        }
    }

    static storeSecretData(key: string, data: any) {
        localStorage.setItem(key, btoa(encodeURIComponent(data)));
    }
}
