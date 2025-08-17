import { ModuleFederationConfig, SharedLibraryConfig } from '@nx/module-federation';

const SHARED_LIBRARIES = ['@angular', 'shared', 'ui', 'core', 'environments'];
const SHARED_CONFIGS = {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
    eager: false
};

const config: ModuleFederationConfig = {
    name: '',
    shared: (libraryName: string, sharedConfig: SharedLibraryConfig) => {
        if (SHARED_LIBRARIES.includes(libraryName)) {
            return SHARED_CONFIGS;
        }

        return sharedConfig;
    },
    additionalShared: [
        {
            libraryName: '@angular/router',
            sharedConfig: SHARED_CONFIGS
        },
        {
            libraryName: '@primeng/themes',
            sharedConfig: SHARED_CONFIGS
        },
        // Add PrimeNG components to be shared below
        {
            libraryName: 'primeng/button',
            sharedConfig: SHARED_CONFIGS
        },
        {
            libraryName: 'primeng/avatar',
            sharedConfig: SHARED_CONFIGS
        },
        {
            libraryName: 'primeng/toolbar',
            sharedConfig: SHARED_CONFIGS
        }
    ]
};

export default config;
