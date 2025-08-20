import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    imports: [RouterModule, ButtonModule, ToolbarModule, AvatarModule, Toast],
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {}
