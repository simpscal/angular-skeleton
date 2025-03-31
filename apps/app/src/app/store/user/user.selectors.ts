import { Selector } from '@ngxs/store';

import { UserState, UserStateModel } from './user.state';

export class UserSelectors {
    @Selector([UserState])
    static selectUser(state: UserStateModel) {
        return state.user;
    }
}
