## Technologies Used

|         Type         |            Name             |
| :------------------: | :-------------------------: |
|       Angular        |             v17             |
|     Angular APIs     | Signal, Standalone, Esbuild |
|     Css Library      |          Tailwind           |
|      UI Library      |      Devextreme v23.1       |
|   Store Management   |          Ngxs v18           |
|     Conventions      |   Eslint, Husky, Prettier   |
| Svg Icons Generation |          svg-to-ts          |
|     Mock Server      |         json-server         |

## Project Structure

### 1. core

This folder includes Angular-related things shared across modules:

-   directives
-   guards
-   pipes
-   interceptors
-   services

### 2. store

This folder includes the global store management.

### 3. widgets

This folder includes shared components used across modules.

> These components should handle non-business logic and should not depend on features.

-   button
-   popup
-   chart

### 4. layouts

This folder includes components used to conduct layouts:

-   admin-layout
-   main-layout
-   mobile-layout
-   account-settings-layout

### 5. pages

This folder includes modules handling non-business logic:

-   landing-page
-   note-found-page

### 6. shared

This folder includes Typescript-related things shared across modules:

-   constants
-   models
-   enums
-   utilities

### 7. features

This folder includes modules handling business logic. Each module should represent a specific feature.

-   dashboard
-   email-settings
-   account-profile

### 7.1. features/shared

This folder includes modules handling business logic are shared across featured modules. Ideally,
features should not depend on each other, but if dependencies occur, we should eliminate bidirectional communication between them.

## Usage

### 1. Svg Icons

1. Add svg icons to the `icons` folder

```
src/
|- assets/
|  |- icons/
|     |- icon-chevron-down.svg
|     |- icons.constants.ts
```

2. Generate constants from svg icons

```bash
npm run generate-icons
```

> Svg icons from the `icons` folder will be collected by the `svg-to-ts` package. Constants will be
> generated and located inside the `icons.constants.ts` file in the `icons` folder.

3. Use icons in templates

```html
<app-svg-icon
    [data]="svgIconChevronDown.data"
    [width]="20">
</app-svg-icon>
```

### 2. Json-Server

1. Add mock data to the `db.json` file

```
src/
db.json
```

**Example**:

```json
{
    "users": [
        {
            "id": "1",
            "name": "Bob"
        },
        {
            "id": "2",
            "name": "Alice"
        }
    ],
    "profile": {
        "name": "typicode"
    }
}
```

> Server will expose the api `/users` at `http://localhost:3000`.

2. Run server

```bash
npx json-server db.json
```

### 3. Signals

Synchronize changes from components to templates without using `detectChanges()`.

❌ **Don't**

```ts
import { ChangeDetectorRef } from '@angular/core';

isLoading = false;

loadData();
{
    this.isLoading = true;
    this._dashboardService.loadData().subscribe(() => {
        this.isLoading = false;
        this._changeDetectorRef.detectChanges();
    });
}
```

✅ **Do**

```ts
import { signal } from '@angular/core';

isLoading = signal(false);

loadData();
{
    this.isLoading.set(true);
    this._dashboardService.loadData().subscribe(() => {
        this.isLoading.set(false);
    });
}
```

## Rules

### 1. Commits

Before committing file changes, ensure that the following are qualified:

-   No `Eslint` warnings and errors
-   No unformatted files
