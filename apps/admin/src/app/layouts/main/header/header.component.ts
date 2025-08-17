import { ChangeDetectionStrategy, Component } from '@angular/core';
import { svgIconMenu } from 'icons/icons.constants';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SvgIconComponent } from 'ui/svg-icon';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [ToolbarModule, ButtonModule, AvatarModule, SvgIconComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    MENU_ICON = svgIconMenu.data;
}
