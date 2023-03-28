# Veritext Replacement Template

## Contents

- [Quickstart](#quickstart)
- [Prerequisites](#prerequisites)
- [Scripts](#scripts)
- [Environment variables](#environment-variables)
- [Developer tools](#developer-tools)
  - [Commit hooks](#commit-hooks)
  - [Dot index files](#dot-index-files)
  - [Subsection generator](#subsection-generator)
  - [Server status overlay](#server-status-overlay)
  - [API proxy (advanced)](#api-proxy-advanced)

## Quickstart
Before starting, please ensure you have the [prerequisites](#prerequisites) installed with correct versions.
```bash
$ git clone git@github.com:LaunchPadLab/veritext-replacement-template.git
$ cd veritext-replacement-template
$ load_secrets
$ yarn start
```

## Prerequisites

The following programs are required in order to run the client template:
+ Git:  `^2.27.0`
+ Node: `^18.12.1`
  + Download/upgrade using [nvm](https://github.com/nvm-sh/nvm)
+ Yarn: `^1.0.0`
  + Download via [homebrew](https://yarnpkg.com/en/docs/install)

## Scripts

These scripts are available to be executed via the command line:
+ `yarn analyze-bundle`: (advanced) creates a view for inspecting bundle sizes for performance optimizations.
+ `yarn build`: compiles the site in production mode to the `/build` folder.
+ `yarn format`: formats all .js, .jsx, and .json files in the `src` directory. Rules can be customized in `.prettierrc`.
+ `yarn lint`: lints the project code with [`eslint`](https://www.npmjs.com/package/eslint). This script will be run automatically on every commit.
+ `yarn server`: serves the contents of the `/build` folder using the production server (`server.js`).
+ `yarn start`: compiles the site in development mode at a localhost URL. The site will reload when any changes are made.
+ `yarn test`: runs unit tests with [Jest](https://facebook.github.io/jest/) and integration tests with [Cypress](https://www.cypress.io/). Tests can also be run individually using:
  + `yarn test:unit`
  + `yarn test:integration`

## Environment Variables

Environment variables will be pulled from `config/application.yml` via [figaro-js](https://github.com/LaunchPadLab/figaro-js) and injected into the code as `process.env`. This public `process.env` is available on the `window` and will reload on page refresh. To prevent secret keys from being exposed, only variables prefixed with `REACT_APP` (e.g. `REACT_APP_API_URL`) will be available in client-side code. You can also mark certain variables as required using the initializer file `config/figaro.js`.

_Note: `process.env.NODE_ENV` is automatically set via the webpack `mode` and cannot be overridden. In order to add environment-specific behavior that deviates from this default, you can create a custom variable (e.g. `REACT_APP_SENTRY_ENV`)._

## Pull Requests
This repo contains a template for Pull Request (PR) descriptions to help you to give easy and consistent instructions and context to a Code Reviewer and QA Reviewer.
More information on PR best practices for both Authors and Reviewers are included in the [LPL Pull Request Guidelines](https://github.com/LaunchPadLab/opex-public/blob/main/gists/pull-request-guidelines.md).

## Developer Tools

The following tools are bundled with this template to help speed the development process:

### Commit Hooks

A pre-commit hook will automatically lint and prevent a commit if there are linting errors found that were not fixable.

Pull requests will trigger [review apps](https://devcenter.heroku.com/articles/github-integration-review-apps) to be created in Heroku. See the [Project Setup Checklist](PROJECT_SETUP_CHECKLIST.md) for information on configuring review apps.

### Dot-index Files

This template includes [DotIndexWebpackPlugin](https://www.npmjs.com/package/dot-index-webpack-plugin), which will automatically create index files for directories in the code base. Index files will be generated whenever the app is run in development mode, and will be ignored by `git`.

_Note: When checking out a new branch or merging in changes, you may need to rebuild the dot index files before linting succeeds. You can accomplish this by running `yarn start`._

### Subsection Generator

For creating new subsections, it is recommended to use the [subsection generator](https://github.com/LaunchPadLab/lp-subsection-generator), which comes pre-installed as a dev dependency. You can run this generator using the following command:
```bash
$ yarn generate-subsection subsection-name [path]
```

### Server Status Overlay
This overlay is only shown in non-production environments. It pings the [api](./src/js/services/api.js) at the index route (`GET /`) to make sure that the api is up and running. This helps flag a common but subtle issue where data cannot be retrieved because the api is not available.


_Note: this requires the API to respond to a GET request at `/`._

### API Proxy (Advanced)

External API requests can be proxied by setting the `PROXIED_API_URL` and `PROXIED_API_TOKEN` (optional) env vars.
Once this is done, any requests made to `/proxy` will be passed along to the specified url.