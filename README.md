# Angular 19 Skeleton Project

## 🚀 Features

- **Angular 19**: Latest Angular framework with standalone components
- **Modern Authentication**: JWT-based auth with token refresh and concurrent request handling
- **Feature Sliced Design**: Clean, scalable architecture inspired by FSD principles
- **User Management**: Complete user profile management with PrimeNG components
- **Responsive UI**: Modern interface built with Tailwind CSS and PrimeNG
- **Type Safety**: Comprehensive TypeScript implementation with strict typing
- **Code Quality**: ESLint, Prettier, and Husky for consistent code standards
- **State Management**: NGXS for predictable state management
- **Testing Ready**: Configured for unit and integration testing

## 🛠 Technologies Used

| Category             | Technology              | Purpose                        |
| -------------------- | ----------------------- | ------------------------------ |
| **Framework**        | Angular 19              | Core application framework     |
| **Styling**          | Tailwind CSS            | Utility-first CSS framework    |
| **UI Library**       | PrimeNG                 | Rich UI component library      |
| **State Management** | NGXS                    | Reactive state management      |
| **Language**         | TypeScript              | Type-safe JavaScript           |
| **Code Quality**     | ESLint, Prettier, Husky | Linting, formatting, git hooks |
| **Icons**            | svg-to-ts               | SVG icon generation            |
| **Mock Server**      | json-server             | API mocking for development    |
| **Build System**     | Nx                      | Monorepo build system          |
| **Build Tool**       | Angular CLI             | Development and build tooling  |

## 🚀 Available Scripts

- `npm start` - Start all applications in development mode
- `npm run start:admin` - Start shell with admin remote
- `npm run start:parent` - Start shell with parent remote
- `npm run start:provider` - Start shell with provider remote
- `npm run build:dev` - Build all applications for development
- `npm run build:prod` - Build all applications for production
- `npm run build:admin:dev` - Build admin app for development
- `npm run build:parent:dev` - Build parent app for development
- `npm run build:provider:dev` - Build provider app for development
- `npm run build:admin:prod` - Build admin app for production
- `npm run build:parent:prod` - Build parent app for production
- `npm run build:provider:prod` - Build provider app for production
- `npm test` - Run tests
- `npm run lint` - Lint the codebase
- `npm run json-server` - Start the mock JSON server

## 🚦 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd angular-skeleton
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm start
    ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Available Scripts

```bash
# Development
npm start              # Start development server
npm run build          # Build for production
npm run build:dev      # Build for development
npm run watch          # Build and watch for changes

# Code Quality
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint issues
npm run format         # Format code with Prettier

# Testing
npm test               # Run unit tests
npm run test:watch     # Run tests in watch mode
npm run e2e            # Run end-to-end tests

# Utilities
npm run generate-icons # Generate icon constants from SVG files
npm run json-server    # Start mock API server
```

## 🔐 Authentication System

The project includes a robust authentication system with:

- **JWT Token Management**: Secure token storage and refresh
- **Concurrent Request Handling**: Queue-based token refresh for multiple simultaneous requests
- **Route Guards**: Protection for authenticated routes
- **Automatic Logout**: Session management and automatic redirects

### Authentication Flow

1. User logs in with credentials
2. JWT tokens (access + refresh) are stored securely
3. API requests automatically include authentication headers
4. Token refresh happens transparently when needed
5. Concurrent requests are queued during token refresh

## 🎨 UI Components

### SVG Icons

1. **Add SVG icons** to `src/assets/icons/`
2. **Generate constants**:

    ```bash
    npm run generate-icons
    ```

3. **Use in templates**:

    ```html
    <app-svg-icon
        [data]="iconName.data"
        [width]="24">
    </app-svg-icon>
    ```

### PrimeNG Integration

The project uses PrimeNG components with:

- Custom theme configuration
- Tailwind CSS integration
- Responsive design patterns
- Accessibility features

## 🧪 Development Tools

### Mock API Server

1. **Configure mock data** in `data/db.json`:

    ```json
    {
        "users": [{ "id": 1, "name": "John Doe", "email": "john@example.com" }]
    }
    ```

2. **Start mock server**:

    ```bash
    npm run json-server
    ```

3. **API available at**: `http://localhost:3000`

### Code Quality

- **ESLint**: Configured with Angular and TypeScript rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality checks
- **Naming Conventions**: Documented standards for consistency

## 📚 Documentation

- **Architecture Guide**: `docs/architecture.md` - Detailed layer responsibilities and dependencies
- **Naming Conventions**: `docs/naming.md` - TypeScript and Angular naming standards
