import { applicationConfig, Preview } from '@storybook/angular';
import PRIMENG_PROVIDERS from '../src/app/@primeng/primeng.providers';

const preview: Preview = {
    decorators: [
        applicationConfig({
            providers: [...PRIMENG_PROVIDERS]
        })
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    tags: ['autodocs']
};
export default preview;
