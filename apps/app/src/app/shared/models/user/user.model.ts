import { EntityModel } from '..';

class UserBaseModel extends EntityModel {
    name: string;
    email: string;
    phone: string;

    constructor(init?: Partial<UserBaseModel>) {
        super();
        Object.assign(this, init);
    }
}

export class UserViewModel extends UserBaseModel {
    constructor(init?: Partial<UserViewModel>) {
        super(init);
        Object.assign(this, init);
    }
}
