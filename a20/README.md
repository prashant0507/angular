# A20

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Topic that we need to cover
```bash
Guard (CanActivate, CanDeactivate, Resolver)=> Done
Interceptor => Done
Reactive Form => Done
Signal => Done
Standalone Component => Done
Routing => Done
Navigate to User Detail
Navigate to User Edit Detail
Store

```
# Guard (CanActivate, CanDeactivate, Resolver)=> Done
# Interceptor => Done
# Reactive Form => Done
# Signal => Done
# Standalone Component => Done
# Routing => Done
# Navigate to User Detail
# Navigate to User Edit Detail

## Store
```bash
ng add @ngrx/store
```

## Structure
src/
├── app/
│   ├── core/                           # Singleton services, guards, interceptors
│   │   ├── services/
│   │   │   ├── http.interceptor.ts
│   │   │   ├── error.interceptor.ts
│   │   │   ├── auth.service.ts
│   │   │   └── storage.service.ts
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   │   └── permission.guard.ts
│   │   └── core.config.ts               # Core providers
│   │
│   ├── features/                        # Feature modules
│   │   ├── dashboard/
│   │   │   ├── pages/
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── components/
│   │   │   │   ├── stats-card/
│   │   │   │   └── chart/
│   │   │   ├── services/
│   │   │   │   └── dashboard.service.ts
│   │   │   ├── dashboard.routes.ts
│   │   │   └── dashboard.config.ts
│   │   │
│   │   ├── users/
│   │   │   ├── pages/
│   │   │   │   ├── user-list/
│   │   │   │   └── user-detail/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── users.routes.ts
│   │   │   └── users.config.ts
│   │   │
│   │   └── settings/
│   │       └── ... (similar structure)
│   │
│   ├── shared/                          # Shared components & utilities
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── sidebar/
│   │   │   ├── loading-spinner/
│   │   │   └── modal/
│   │   ├── directives/
│   │   │   ├── highlight.directive.ts
│   │   │   └── has-permission.directive.ts
│   │   ├── pipes/
│   │   │   ├── currency-format.pipe.ts
│   │   │   └── truncate.pipe.ts
│   │   ├── models/
│   │   │   └── common.model.ts
│   │   ├── utils/
│   │   │   ├── helpers.ts
│   │   │   ├── validators.ts
│   │   │   └── constants.ts
│   │   └── shared.config.ts             # Shared providers
│   │
│   ├── app.config.ts                    # App-level config
│   ├── app.routes.ts                    # Main routes
│   ├── app.ts                           # Root component
│   └── app.scss                         # Global styles
│
├── assets/                              # Static assets
├── environments/                        # Environment configs
│   ├── environment.ts
│   ├── environment.prod.ts
│   └── environment.dev.ts
├── main.ts
├── styles.scss                          # Global styles
└── index.html
