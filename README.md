## Technologies Used

|         Type         |          Name           |
| :------------------: | :---------------------: |
|     Css Library      |        Tailwind         |
|      UI Library      |    Devextreme v23.1     |
|   State Management   |        Ngxs v18         |
|        Tools         | Eslint, Husky, Prettier |
| Svg Icons Generation |        svg-to-ts        |
|     Mock Server      |       json-server       |

## Project Structure

### core

Angular-related things shared across modules:

- directives
- guards
- pipes
- interceptors
- services

### store

The global store management.

### ui

UI components used across modules.

> These components should handle non-business logic and should not depend on features.

- button
- popup
- chart

### layouts

Components used to conduct layouts:

- admin-layout
- main-layout
- mobile-layout
- account-settings-layout

### pages

Pages handling non-business logic:

- landing-page
- note-found-page

### shared

Typescript-related things shared across modules:

- constants
- models
- enums
- utilities

### features

Pages handling business logic:

- dashboard
- email-settings
- account-profile

### features/shared

Features shared across featured modules.

## Usage

### 1. Svg Icons

#### Add svg icons to the `icons` folder

```
src/
|- assets/
|  |- icons/
|     |- icon-chevron-down.svg
|     |- icons.constants.ts
```

#### Generate constants from svg icons

```bash
npm run generate-icons
```

> Svg icons from the `icons` folder will be collected by the `svg-to-ts` package. Constants will be
> generated and allocated inside the `icons.constants.ts` file in the `icons` folder.

#### Use icons in templates

```html
<app-svg-icon
    [data]="svgIconChevronDown.data"
    [width]="20">
</app-svg-icon>
```

### 2. Json-Server

#### Add mock data to the `data/db.json` file

```
data/db.json
src/
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
    ]
}
```

> The api `/users` is exposed at `http://localhost:3000`.

#### Add custom routes to the `routes.json` file (optional)

```
data/routes.json
src/
```

**Example**:

```json
{
    "/api/*": "/$1"
}
```

> /api/users → /users

#### Run server

```bash
npm run json-server
```
