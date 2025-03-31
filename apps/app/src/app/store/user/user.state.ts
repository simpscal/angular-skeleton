import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { AppStateEnum } from '@store/app-state.enums';
import { UserViewModel } from '@app/shared/models';

import { SetUserAction } from './user.actions';

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
