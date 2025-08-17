import { ModuleFederationConfig, SharedLibraryConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
    name: '',
    shared: (libraryName: string, sharedConfig: SharedLibraryConfig) => {
        return sharedConfig;
    },
    additionalShared: [
        {
            libraryName: '@angular/router',
            sharedConfig: {
                singleton: true,
                strictVersion: true,
                requiredVersion: 'auto',
                eager: false
            }
        },
        {
            libraryName: '@primeng/themes',
            sharedConfig: {
                singleton: true,
                strictVersion: true,
                requiredVersion: 'auto',
                eager: false
            }
        },
        // Add PrimeNG components to be shared below
        {
            libraryName: 'primeng/button',
            sharedConfig: {
                singleton: true,
                strictVersion: true,
                requiredVersion: 'auto',
                eager: false
            }
        }
        // Example:
        // {
        //     libraryName: 'primeng/inputtext',
        //     sharedConfig: {
        //         singleton: true,
        //         strictVersion: true,
        //         requiredVersion: 'auto',
        //         eager: false
        //     }
        // }
    ]
};

export default config;
