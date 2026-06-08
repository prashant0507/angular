# A20

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Topic that we need to cover
```bash
Guard (CanActivate, CanDeactivate, Resolver)=> Done
Resolver With Service (Without Store) => Done
Resolver with Store => Pending
Interceptor => Done
Reactive Form => Done
Signal => Done
Standalone Component => Done
Routing => Done
Navigate to User List => Done
Navigate to User Detail => Pending
Navigate to User Edit Detail => Pending
Store => Done
```

## Store
```bash
ng add @ngrx/store --save
(Note : will add provideStore() in app.config.ts) 

ng add @ngrx/effects --save
(Note : will add provideEffects() in app.config.ts)

ng add @ngrx/store-devtools --save
(Note : will add provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }) in app.config.ts)
(Note : maxAge: 25, // Retains last 25 states)
(Note : logOnly: !isDevMode(), // Restrict extension to log-only mode)

ng add @ngrx/schematics --save
(Note: Configure the Schematics so that NgRx commands are available in Angular CLI by default, so you can create actions, reducers etc by command)
(Example 
    ng generate action ACTION_NAME || ng g action ACTION_NAME
    ng generate reducer REDUCER_NAME || ng g reducer REDUCER_NAME 
    ng generate selector SELECTOR_NAME || ng g selector SELECTOR_NAME
    ng generate effect EFFECT_NAME || ng g effect EFFECT_NAME
)
(Note: It will update code in angular.json)
"cli": {
    "schematicCollections": [
      "@ngrx/schematics"
    ]
}
```

## Structure
```bash
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
│   │   ├── interceptors/
│   │   │   └── loading-interceptor.ts
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
│   ├── layout/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── sidebar/
│   │
│   ├── store/
│   │   ├── actions/
│   │   ├── effects/
│   │   ├── reducers/
│   │   ├── selectors/
│   │
│   ├── shared/                          # Shared components & utilities
│   │   ├── components/
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
```

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
