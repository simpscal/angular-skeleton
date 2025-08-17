import { ModuleFederationConfig } from '@nx/module-federation';

import sharedConfig from '../../module-federation-base.config';

const config: ModuleFederationConfig = {
    ...sharedConfig,
    name: 'admin',
    exposes: {
        './Routes': 'apps/admin/src/app/app.routes.ts'
    }
};

export default config;
