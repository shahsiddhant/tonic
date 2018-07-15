export class Customer {
    public id: string;
    public name: string;
    public email: string;
    public exp: number;
    constructor(sourceOject) {
        this.name = sourceOject['name'];
        this.email = sourceOject['email'];
        this.id = sourceOject['id'];
        this.exp = sourceOject['exp'];
    }
}

export interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    email: string;
    password: string;
    name?: string;
}
