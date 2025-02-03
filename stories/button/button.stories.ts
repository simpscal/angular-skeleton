import { argsToTemplate, Meta, moduleMetadata } from '@storybook/angular';
import { Button, ButtonModule } from 'primeng/button';

const meta: Meta<Button> = {
    component: Button,
    render: ({ ...args }) => ({
        props: args,
        template: `<p-button ${argsToTemplate(args)}></p-button>`
    }),
    decorators: [
        moduleMetadata({
            imports: [ButtonModule]
        })
    ],
    argTypes: {
        severity: {
            control: 'select',
            options: ['primary', 'secondary', 'danger', 'success', 'info', 'warning']
        }
    },
    args: {
        disabled: false,
        label: 'Click'
    }
};

export default meta;

export const Primary = {
    args: {
        severity: 'primary'
    }
};

export const Secondary = {
    args: {
        severity: 'secondary'
    }
};
