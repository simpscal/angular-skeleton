import { UserViewModel } from '@shell/shared/models';

export class SetUserAction {
    static readonly type = '[User] Set User';

    constructor(readonly payload: UserViewModel) {}
}
