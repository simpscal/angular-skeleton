export class AuthViewModel {
    email: string;
    password: string;

    constructor(init?: Partial<AuthViewModel>) {
        Object.assign(this, init);
    }

    toRequest() {
        return {
            email: this.email,
            password: this.password
        };
    }
}

export class AuthRequestModel {
    email: string;
    password: string;
}
