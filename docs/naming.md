# Naming Conventions for TypeScript and Angular 19

This document outlines the naming conventions for TypeScript and Angular 19. These conventions ensure consistency, readability, and maintainability across the codebase.

## Table of Contents

- [TypeScript Naming Conventions](#typescript-naming-conventions)
- [Angular Naming Conventions](#angular-naming-conventions)
- [File and Directory Naming](#file-and-directory-naming)

## TypeScript Naming Conventions

### Variables and Functions

- **camelCase** for variables, functions, and methods
- **PascalCase** for classes, interfaces, types, and enums
- **SCREAMING_SNAKE_CASE** for constants

```typescript
// Variables and Functions
function getUserData() {} // camelCase

// Classes, Interfaces, Types, Enums
class UserService {} // PascalCase
interface UserProfile {} // PascalCase
enum UserStatus {
    Active,
    Inactive
} // PascalCase values

// Constants
const API_BASE_URL = 'https://api.com'; // SCREAMING_SNAKE_CASE
```

### Classes

- **PascalCase** for class names
- **camelCase** for all members (properties and methods)
- **NO underscore prefix** for private members

```typescript
// ✅ Good - camelCase without underscore
class AuthService {
    private httpClient = inject(HttpClient); // Good: camelCase

    login(credentials: LoginCredentials) {
        return this.httpClient.post('/login', credentials);
    }
}
```

### Interfaces and Types

- **PascalCase** for interface and type names
- **camelCase** for properties
- Descriptive names over generic ones
- Use `I` prefix only when necessary for disambiguation

```typescript
// Interfaces
interface UserProfile {
    // PascalCase
    userId: string; // camelCase property
    firstName: string; // camelCase property
}

// Types
type UserRole = 'admin' | 'user' | 'guest'; // PascalCase
type ApiResponse<T> = {
    // PascalCase with generic
    data: T; // camelCase property
    statusCode: number; // camelCase property
};

// Generic type parameters
type Repository<TEntity, TKey> = {
    // T prefix for generics
    findById(id: TKey): Promise<TEntity>;
};
```

### Enums

- **PascalCase** for enum names
- **PascalCase** for enum values
- Use descriptive enum names

```typescript
enum UserStatus { // PascalCase enum name
    Active = 'active', // PascalCase values
    Inactive = 'inactive', // PascalCase values
    PendingVerification = 'pending' // PascalCase values
}

enum HttpStatusCode { // PascalCase enum name
    Ok = 200, // PascalCase values
    BadRequest = 400, // PascalCase values
    Unauthorized = 401 // PascalCase values
}
```

### Constants

- **SCREAMING_SNAKE_CASE** for module-level constants
- **camelCase** for local constants within functions
- Group related constants together

```typescript
// Module-level constants
export const API_BASE_URL = 'https://api.example.com'; // SCREAMING_SNAKE_CASE
export const DEFAULT_PAGE_SIZE = 20; // SCREAMING_SNAKE_CASE
export const ACCESS_TOKEN_KEY = 'access_token'; // SCREAMING_SNAKE_CASE

// Route constants
export const PAGE_ROUTES = {
    // SCREAMING_SNAKE_CASE object
    HOME: '/', // SCREAMING_SNAKE_CASE property
    AUTH_LOGIN: '/auth/login' // SCREAMING_SNAKE_CASE property
} as const;

// Local constants (within functions)
function processData() {
    const maxRetries = 3; // camelCase local constant
}
```

## Angular Naming Conventions

### Observables

- **camelCase** for observable variables
- **$** suffix for observable variables (recommended)
- Use descriptive names that indicate the data type or purpose

```typescript
// Observable variables with $ suffix
const userData$ = new BehaviorSubject<User>(null); // camelCase with $
const isLoading$ = new BehaviorSubject(false); // camelCase with $
const apiResponse$ = this.http.get<ApiResponse>('/api'); // camelCase with $

// Observable properties in services
export class UserService {
    private users$ = new BehaviorSubject<User[]>([]); // camelCase with $
    private selectedUser$ = new BehaviorSubject<User>(null); // camelCase with $

    getUsers() {
        return this.users$.asObservable();
    }
}
```

### Components

- **PascalCase** for component class names with `Component` suffix
- **kebab-case** for component selectors
- **camelCase** for component properties and methods

```typescript
// Class names
export class UserProfileComponent {} // PascalCase + Component suffix
export class LoginFormComponent {} // PascalCase + Component suffix

// Selectors
@Component({
    selector: 'app-user-profile', // kebab-case
    templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
    // PascalCase + Component
    userName = ''; // camelCase property
    isLoading = false; // camelCase property
    userData$ = new BehaviorSubject(null); // camelCase with $ for observables

    loadUserData() {} // camelCase method
    onSaveClick() {} // camelCase method
}
```

### Services

- **PascalCase** for service class names with `Service` suffix
- **camelCase** for service methods and properties
- Descriptive names indicating purpose

```typescript
// Service class names
export class AuthService {} // PascalCase + Service suffix
export class TokenStorageService {} // PascalCase + Service suffix
export class UserDataService {} // PascalCase + Service suffix

// Service methods
export class AuthService {
    login(credentials: LoginData) {} // camelCase method
    logout() {} // camelCase method
    refreshToken() {} // camelCase method
}
```

### Directives

- **PascalCase** for directive class names with `Directive` suffix
- **camelCase** for directive selectors (attribute directives)
- **kebab-case** for structural directive selectors

```typescript
// Directive class names
export class AutoFocusDirective { }         // PascalCase + Directive suffix
export class HighlightDirective { }         // PascalCase + Directive suffix

// Attribute directive selectors
@Directive({
    selector: '[appAutoFocus]'               // camelCase with app prefix
})

// Structural directive selectors
@Directive({
    selector: '[app-for-each]'               // kebab-case with app prefix
})
```

### Guards

- **PascalCase** for guard class names with `Guard` suffix
- **camelCase** for guard methods

```typescript
// Guard class names
export class AuthGuard {} // PascalCase + Guard suffix
export class AdminGuard {} // PascalCase + Guard suffix

// Guard methods
export class AuthGuard {
    canActivate() {} // camelCase method
    checkPermissions() {} // camelCase method
}
```

### Interceptors

- **camelCase** for functional interceptor names with `Interceptor` suffix
- **camelCase** for interceptor functions

```typescript
// Functional interceptor names
export const authInterceptor: HttpInterceptorFn = ...;           // camelCase + Interceptor suffix
export const errorHandlingInterceptor: HttpInterceptorFn = ...;  // camelCase + Interceptor suffix
```

### Pipes

- **PascalCase** for pipe class names with `Pipe` suffix
- **camelCase** for pipe names in templates

```typescript
// Pipe class names
export class CurrencyFormatPipe { }         // PascalCase + Pipe suffix
export class DateFormatPipe { }             // PascalCase + Pipe suffix

// Pipe names in templates
@Pipe({
    name: 'currencyFormat'                   // camelCase
})
```

### Angular 19 Modern Patterns

#### Signals and Computed Values

- **camelCase** for signal names
- **camelCase** for computed signal names
- **camelCase** for input/output signal names

```typescript
export class UserComponent {
    // Signals
    userName = signal<string>('');           // camelCase
    isLoggedIn = signal<boolean>(false);     // camelCase

    // Computed signals
    fullName = computed(() => ...);          // camelCase

    // Input signals
    userId = input<string>();                // camelCase
    showDetails = input<boolean>(false);     // camelCase

    // Output signals
    userSelected = output<User>();           // camelCase
    formSubmitted = output<FormData>();      // camelCase
}
```

#### Dependency Injection

- **camelCase** for injected dependencies
- NO underscore prefixes for private injected services

```typescript
export class LoginComponent {
    // Injected dependencies - camelCase, no underscore
    private router = inject(Router); // camelCase
    private authService = inject(AuthService); // camelCase
}
```

### Event Handlers

- **camelCase** with `on` prefix for event handler methods
- Use descriptive names that indicate the action or event
- Follow the pattern: `on` + `Action` + optional `Target`

```typescript
export class UserComponent {
    // Event handlers
    onClick() {} // camelCase with on prefix
    onSubmit() {} // camelCase with on prefix
    onUserSelect(user: User) {} // camelCase with on prefix + target
    onModalClose() {} // camelCase with on prefix + action
}
```

### Output Events

- **camelCase** for output event names
- Use descriptive names that indicate what happened (past tense) or what should happen
- Avoid `on` prefix for output events (use it for handlers)

```typescript
export class UserComponent {
    // Output events - past tense (what happened)
    userSelected = output<User>(); // camelCase, past tense
    formSubmitted = output<FormData>(); // camelCase, past tense
    modalClosed = output<void>(); // camelCase, past tense

    // Output events - action needed (what should happen)
    saveUser = output<User>(); // camelCase, action
    deleteItem = output<string>(); // camelCase, action
}

// Template usage
// <app-user (userSelected)="onUserSelect($event)" (saveUser)="onSaveUser($event)">
```

## File and Directory Naming

### File Names

- **kebab-case** for all file names
- Include descriptive type suffixes
- Use consistent file extensions

```text
// Angular Files
user-profile.component.ts               // kebab-case + .component.ts
login-form.component.html               // kebab-case + .component.html
data-table.component.scss               // kebab-case + .component.scss

auth.service.ts                         // kebab-case + .service.ts
token-storage.service.ts                // kebab-case + .service.ts

auto-focus.directive.ts                 // kebab-case + .directive.ts
auth.guard.ts                           // kebab-case + .guard.ts
auth.interceptor.ts                     // kebab-case + .interceptor.ts
currency-format.pipe.ts                 // kebab-case + .pipe.ts

// TypeScript Files
user-profile.interface.ts               // kebab-case + .interface.ts
api-response.type.ts                    // kebab-case + .type.ts
user-role.enum.ts                       // kebab-case + .enum.ts
api-constants.ts                        // kebab-case + .ts
date-utils.ts                           // kebab-case + .ts

// Configuration Files
app.config.ts                           // kebab-case + .config.ts
environment.prod.ts                     // kebab-case + .prod.ts
```

### Directory Names

- **kebab-case** for all directory names
- **Plural** forms for feature/collection directories
- **Singular** forms for utility/configuration directories

```text
// Project Structure
src/
├── app/
│   ├── core/                           // singular - core functionality
│   │   ├── services/                   // plural - collection of services
│   │   ├── guards/                     // plural - collection of guards
│   │   ├── interceptors/               // plural - collection of interceptors
│   │   └── directives/                 // plural - collection of directives
│   │
│   ├── features/                       // plural - collection of features
│   │   ├── auth/                       // singular - auth feature
│   │   │   ├── components/             // plural - collection of components
│   │   │   ├── pages/                  // plural - collection of pages
│   │   │   │   ├── login/              // singular - login page
│   │   │   │   └── register/           // singular - register page
│   │   │   └── services/               // plural - collection of services
│   │   │
│   │   ├── admin/                      // singular - admin feature
│   │   │   ├── pages/                  // plural - collection of pages
│   │   │   │   ├── users/              // plural - users management
│   │   │   │   ├── boats/              // plural - boats management
│   │   │   │   └── dashboard/          // singular - dashboard page
│   │   │   ├── components/             // plural - collection of components
│   │   │   └── services/               // plural - collection of services
│   │   │
│   │   └── user-profile/               // kebab-case feature name
│   │       ├── components/             // plural - collection of components
│   │       └── pages/                  // plural - collection of pages
│   │
│   ├── shared/                         // singular - shared utilities
│   │   ├── models/                     // plural - collection of models
│   │   ├── interfaces/                 // plural - collection of interfaces
│   │   ├── types/                      // plural - collection of types
│   │   ├── enums/                      // plural - collection of enums
│   │   ├── constants/                  // plural - collection of constants
│   │   ├── utils/                      // plural - collection of utilities
│   │   └── validators/                 // plural - collection of validators
│   │
│   ├── ui/                             // singular - UI components
│   │   ├── components/                 // plural - collection of components
│   │   │   ├── buttons/                // plural - button components
│   │   │   ├── forms/                  // plural - form components
│   │   │   ├── modals/                 // plural - modal components
│   │   │   └── navigation/             // singular - navigation components
│   │   └── pipes/                      // plural - collection of pipes
│   │
│   └── pages/                          // plural - collection of pages
│       ├── home/                       // singular - home page
│       ├── about/                      // singular - about page
│       └── not-found/                  // kebab-case page name
│
├── assets/                             // plural - collection of assets
│   ├── images/                         // plural - collection of images
│   ├── icons/                          // plural - collection of icons
│   ├── fonts/                          // plural - collection of fonts
│   └── styles/                         // plural - collection of styles
│
└── environments/                       // plural - collection of environments
```
