import { ModuleFederationConfig } from '@nx/module-federation';

import sharedConfig from '../../module-federation-base.config';

const config: ModuleFederationConfig = {
    ...sharedConfig,
    name: 'provider',
    exposes: {
        './Routes': 'apps/provider/src/app/app.routes.ts'
    }
};

export default config;
