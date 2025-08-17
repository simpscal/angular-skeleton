import { ModuleFederationConfig } from '@nx/module-federation';

import sharedConfig from '../../module-federation-base.config';

const config: ModuleFederationConfig = {
    ...sharedConfig,
    name: 'parent',
    exposes: {
        './Routes': 'apps/parent/src/app/app.routes.ts'
    }
};

export default config;
