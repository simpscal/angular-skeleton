import { UserViewModel } from '@app/shared/models';

export class SetUserAction {
    static readonly type = '[User] Set User';

    constructor(readonly payload: UserViewModel) {}
}
