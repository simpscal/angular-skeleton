import { provideStore } from '@ngxs/store';

import { UserState } from './user/user.state';
import { environment } from '../../environments/environment';

const APP_STORE_PROVIDERS = [provideStore([UserState], { developmentMode: !environment.isProduction })];

export default APP_STORE_PROVIDERS;
