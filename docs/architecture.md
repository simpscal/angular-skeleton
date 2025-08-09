# Project Architecture Documentation

This document outlines the architectural structure of the Angular 19 application, which is inspired by **Feature Sliced Design (FSD)** principles. The architecture emphasizes clear separation of concerns, predictable dependencies, and maintainable code organization.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Layer Structure](#layer-structure)
- [Layer Responsibilities](#layer-responsibilities)
- [Dependency Rules](#dependency-rules)
- [Component Dependencies](#component-dependencies)
- [Directory Structure](#directory-structure)

## Architecture Overview

The project follows a **layered architecture** inspired by Feature Sliced Design, organizing code into distinct layers with clear responsibilities and dependency rules. Each layer serves a specific purpose and can only depend on layers below it in the hierarchy.

### FSD Principles Applied

1. **Explicit Architecture**: Clear layer boundaries and responsibilities
2. **Controlled Dependencies**: Strict dependency direction (top-down only)
3. **Business Logic Isolation**: Domain logic separated from framework concerns
4. **Scalability**: Easy to add new features without affecting existing code
5. **Testability**: Each layer can be tested independently

## Layer Structure

```text
┌─────────────────────────────────────────────────────────────┐
│                      LAYOUTS LAYER                          │
│                   (Layout Components)                       │
├─────────────────────────────────────────────────────────────┤
│                       PAGES LAYER                           │
│                   (Route Components)                        │
├─────────────────────────────────────────────────────────────┤
│                     FEATURES LAYER                          │
│                  (Business Features)                        │
├─────────────────────────────────────────────────────────────┤
│                       CORE LAYER                            │
│                  (Application Core)                         │
├─────────────────────────────────────────────────────────────┤
│                        UI LAYER                             │
│                  (Basic UI Components)                      │
├─────────────────────────────────────────────────────────────┤
│                      SHARED LAYER                           │
│              (Types, Utils, Constants)                      │
└─────────────────────────────────────────────────────────────┘
```

## Layer Responsibilities

### 1. Layouts Layer (`/src/app/layouts/`)

**Purpose**: Application layout components and structure

**Responsibilities**:

- Application shell components
- Layout templates and wrappers
- Navigation components
- Header, footer, and sidebar components
- Layout-specific routing and structure

**Contains**:

- `main-layout/` - Main application layout
- `auth-layout/` - Authentication pages layout
- `admin-layout/` - Administrative interface layout
- `error-layout/` - Error pages layout

**Dependencies**: Can import from Pages, Features, Core, UI, Shared layers

**Example Structure**:

```text
layouts/
├── main-layout/
│   ├── main-layout.component.ts
│   ├── main-layout.component.html
│   └── main-layout.component.scss
├── auth-layout/
│   ├── auth-layout.component.ts
│   ├── auth-layout.component.html
│   └── auth-layout.component.scss
└── admin-layout/
    ├── admin-layout.component.ts
    ├── admin-layout.component.html
    └── admin-layout.component.scss
```

### 2. Pages Layer (`/src/app/pages/`)

**Purpose**: Route-level components that represent application pages

**Responsibilities**:

- Route components (lazy-loaded modules)
- Page-specific layouts and orchestration
- Combining features into complete user flows
- Page-level state management

**Contains**:

- `auth/` - Authentication pages (login, register, etc.)
- `admin/` - Administrative pages and workflows
- `not-found/` - Error pages
- `maintenance/` - Maintenance and system pages

**Dependencies**: Can import from Features, Core, UI, Shared layers

**Example Structure**:

```
pages/
├── auth/
│   ├── auth.component.ts
│   ├── auth.routes.ts
│   └── pages/
│       ├── login/
│       └── register/
└── admin/
    ├── admin.component.ts
    ├── admin.routes.ts
    ├── models/
    ├── services/
    └── pages/
```

### 3. Features Layer (`/src/app/features/`)

**Purpose**: Business features and domain-specific functionality

**Responsibilities**:

- Business logic implementation
- Feature-specific components and services
- Domain models and interfaces
- Feature-specific state management

**Contains**:

- `user/` - User profile management feature
    - `components/` - Feature-specific components
    - `services/` - Business logic services
    - `models/` - Domain interfaces and types

**Dependencies**: Can import from Core, UI, Shared layers

**Example Structure**:

```
features/
└── user/
    ├── components/
    │   └── user-profile/
    │       ├── user-profile.component.ts
    │       ├── user-profile.component.html
    │       └── user-profile.component.scss
    ├── services/
    │   └── user-profile.service.ts
    ├── models/
    │   └── user.interface.ts
    └── index.ts
```

### 4. Core Layer (`/src/app/core/`)

**Purpose**: Application core functionality and infrastructure

**Responsibilities**:

- HTTP client and API communication
- Authentication and authorization
- Global services (singleton services)
- Application-wide interceptors
- Error handling

**Contains**:

- `services/` - Core application services
    - `api.service.ts` - HTTP client wrapper
    - `auth.service.ts` - Authentication logic
    - `token-storage.service.ts` - Token management
- `interceptors/` - HTTP interceptors
- `guards/` - Route guards
- `directives/` - Global directives

**Dependencies**: Can import from UI, Shared layers

### 5. UI Layer (`/src/app/ui/`)

**Purpose**: Basic, reusable UI components with no business logic

**Responsibilities**:

- Pure UI components
- Design system components
- Basic form controls
- Layout components

**Contains**:

- `svg-icon/` - Icon component
- Basic UI building blocks

**Dependencies**: Can import from Shared layer only

### 6. Shared Layer (`/src/app/shared/`)

**Purpose**: Pure TypeScript constructs with no Angular dependencies

**Responsibilities**:

- Type definitions and interfaces
- Enums and constants
- Utility functions (pure functions)
- Data models and DTOs
- Configuration objects

**Contains**:

- `enums/` - Application enums
- `constants/` - Application constants
- `types/` - TypeScript type definitions
- `models/` - Data models and interfaces
- `utils/` - Pure utility functions

**Dependencies**: No dependencies on other application layers (only external libraries like RxJS, date-fns, etc.)

## Dependency Rules

### Strict Dependency Direction

```text
Layouts → Pages → Features → Core → UI → Shared
```

**Rules**:

1. **Downward Dependencies Only**: Each layer can only import from layers below it
2. **No Circular Dependencies**: Layers cannot import from layers above them
3. **No Skip Dependencies**: Prefer importing from adjacent layers when possible
4. **External Libraries**: All layers can import external libraries (Angular, RxJS, etc.)

## Component Dependencies

### Within Each Layer

#### Layouts Layer Dependencies

- **Layout Components**: Application shell and structure components
- **Navigation Components**: Menu, breadcrumb, and navigation elements
- **Layout Services**: Layout state management and configuration
- **Layout Models**: Layout-specific interfaces and types

#### Pages Layer Dependencies

- **Route Components**: Orchestrate features and shared components
- **Page Services**: Handle page-specific logic and state
- **Models**: Define page-specific interfaces

#### Features Layer Dependencies

- **Components**: Feature-specific UI components
- **Services**: Business logic and data management
- **Models**: Domain-specific interfaces and types
- **State**: Feature-specific state management

#### Shared Layer Dependencies

- **Types**: TypeScript interfaces and type definitions
- **Enums**: Application-wide enumerations
- **Constants**: Application-wide constants
- **Models**: Data transfer objects and domain models
- **Utils**: Pure utility functions with no dependencies

**Internal Dependencies Within Shared Layer**:

```text
Utils → Models → Types → Enums → Constants
```

- **Utils** can import from Models, Types, Enums, Constants
- **Models** can import from Types, Enums, Constants
- **Types** can import from Enums, Constants
- **Enums** can import from Constants
- **Constants** have no internal dependencies

#### Core Layer Dependencies

- **Services**: Singleton services for app infrastructure
- **Interceptors**: HTTP request/response handling
- **Guards**: Route protection logic
- **Directives**: Global behavior directives

**Internal Dependencies Within Core Layer**:

```text
Guards → Services
Interceptors → Services
Directives → Services
```

- **Guards** can import from Services only
- **Interceptors** can import from Services only
- **Directives** can import from Services only
- **Services** can import from other Services (with careful dependency management)

## Directory Structure

```text
src/app/
├── app.component.ts                 # Application Root
├── app.routes.ts
├── app.providers.ts
├── layouts/                        # Layouts Layer
│   ├── main-layout/
│   │   ├── main-layout.component.ts
│   │   ├── main-layout.component.html
│   │   └── main-layout.component.scss
│   ├── auth-layout/
│   └── admin-layout/
├── pages/                          # Pages Layer
│   ├── auth/
│   │   ├── auth.component.ts
│   │   ├── auth.routes.ts
│   │   └── pages/
│   │       ├── login/
│   │       └── register/
│   ├── admin/
│   │   ├── admin.component.ts
│   │   ├── admin.routes.ts
│   │   ├── models/
│   │   ├── services/
│   │   └── pages/
│   └── not-found/
├── features/                       # Features Layer
│   └── user/
│       ├── components/
│       │   └── user-profile/
│       ├── services/
│       │   └── user-profile.service.ts
│       └── index.ts
├── shared/                         # Shared Layer (Lowest)
│   ├── enums/
│   ├── constants/
│   ├── types/
│   ├── models/
│   └── utils/
├── core/                          # Core Layer
│   ├── services/
│   │   ├── api.service.ts
│   │   ├── auth.service.ts
│   │   └── token-storage.service.ts
│   ├── interceptors/
│   ├── guards/
│   └── directives/
├── ui/                            # UI Layer
│   └── svg-icon/
├── layouts/                       # Layout Components
│   ├── main-layout/
│   └── auth-layout/
└── store/                         # State Management
    ├── auth/
    └── user/
```
