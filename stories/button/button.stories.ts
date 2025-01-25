import { DxButtonModule } from 'devextreme-angular';
import { argsToTemplate, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '@widgets';

const meta: Meta<ButtonComponent> = {
    title: 'System Design/Button',
    component: ButtonComponent,
    render: ({ ...args }) => ({
        props: args,
        template: `<app-button ${argsToTemplate(args)}></app-button>`
    }),
    decorators: [
        moduleMetadata({
            imports: [DxButtonModule]
        })
    ],
    argTypes: {
        type: { control: 'select', options: ['primary', 'secondary', 'danger', 'success', 'info', 'warning'] }
    },
    args: {
        width: 'auto',
        disabled: false,
        text: 'Click'
    }
};

export default meta;

export const Primary = {
    args: {
        type: 'primary'
    }
};

export const Secondary = {
    args: {
        type: 'secondary'
    }
};
