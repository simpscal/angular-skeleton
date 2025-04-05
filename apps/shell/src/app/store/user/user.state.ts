import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { SetUserAction } from './user.actions';
import { UserViewModel } from '@shell/shared/models';
import { AppStateEnum } from '@shell/store/app-state.enums';

export interface UserStateModel {
    user: UserViewModel;
}

@State<UserStateModel>({
    name: AppStateEnum.User,
    defaults: {
        user: null
    }
})
@Injectable()
export class UserState {
    @Action(SetUserAction)
    setUser(ctx: StateContext<UserStateModel>, { payload }: SetUserAction) {
        ctx.patchState({ user: payload });
    }
}
