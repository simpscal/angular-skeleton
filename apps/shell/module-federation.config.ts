import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
    name: 'shell',
    /**
     * Remotes are defined here. They can be:
     * - Local remotes: ['remote-app'] (defined in the same workspace)
     * - External remotes: [['remote-name', 'http://localhost:4201']] (external URLs)
     *
     * Example remote configurations:
     * remotes: [
     *   'admin-app',  // Local remote
     *   ['external-app', 'http://localhost:4202'],  // External remote
     * ]
     */
    remotes: ['admin'],

    // Shared dependencies across all micro-frontends
    shared: (packageName, sharedConfig) => {
        if (packageName === '@angular/core' || packageName === '@angular/common' || packageName === '@angular/router') {
            return {
                ...sharedConfig,
                singleton: true,
                strictVersion: true
            };
        }
        if (packageName === 'rxjs') {
            return {
                ...sharedConfig,
                singleton: true
            };
        }
        return sharedConfig;
    }
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
