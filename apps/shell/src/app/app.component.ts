import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    imports: [RouterModule, ButtonModule, ToolbarModule, AvatarModule],
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
