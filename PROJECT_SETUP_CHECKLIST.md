# Project Setup Checklist

Checklist for setting up the GitHub repository, Heroku, and other integrations when starting a new React project.

This checklist assumes that the new repo was created using `client-template`.

## GitHub

- [ ] Create a new repo in GitHub under the LaunchPad organization (do not initialize with a README)
- [ ] Add the repo as origin (following [GitHub's instructions](https://help.github.com/en/articles/adding-a-remote)) and push the initial commit from the template

### Settings

#### Options

- [ ] Only allow squash and merge behavior by **unchecking** both "allow merge commits" and also "allow rebase merging"
- [ ] Check "automatically delete head branches"

#### Collaborators and teams

- [ ] Grant the `LPL` team write access to the repository
  - [ ] Click the "Add teams"
  - [ ] Search for "LPL" and select "LaunchPadLab/lpl"
  - [ ] Provide "Write" access to LPL
- [ ] Grant administrative rights to any admin users by following the same process but providing "Admin" access.

#### Branches

- [ ] Create `dev` and `staging` branches from `main`
- [ ] Set default branch to `dev`
- [ ] Protect `main`, `staging`, and `dev` branches. For each branch:
  - [ ] Click "Add Rule" under the Branch Protection Rules section
  - [ ] Add the branch name in the "Branch name pattern" input
  - [ ] Select "require pull request reviews before merging"
  - [ ] Select "require status checks to pass before merging"

## Integrations

### Sentry

Sentry is a platform that provides error and performance monitoring. See the [Sentry configuration documentation](https://www.notion.so/launchpadlab/Adding-a-Project-to-Sentry-0750dbc7fd854e5d9ff49515f8c19f7e) to configure Sentry for your project.

### Travis

Travis CI is a continuous integration platform that supports development processes by automatically building and testing code changes.

- [ ] Confirm that repo has been added to [Travis CI](https://travis-ci.com/github/LaunchPadLab)
- [ ] Add any required env vars to Travis (as defined in your `application.yml` file):
  - [ ] Log in to Travis, typically using your GitHub credentials
  - [ ] In the left navigation menu, select the project repository
  - [ ] In the "Environment Variables" section add the necessary environment variables

## Heroku

### Create New Pipeline

- [ ] Select the team in Heroku that the pipeline will be added to
- [ ] Create the pipeline:
  - [ ] Select "New > Create new pipeline"
  - [ ] Enter the pipeline name. Typically, the pipeline has the same name as the associated GitHub repository.
  - [ ] Connect the pipeline to the associated GitHub repository. Note that the pipeline may have to be created first and then connected to the GitHub repository if errors occur when the initial connection is established.
- [ ] Add the staging app:
  - [ ] Click "Add app" on the staging phase (labeled "STAGING")
  - [ ] Click "Create new app" (assuming no existing staging app exists)
  - [ ] Enter the "App name" as: _`github-repo`_`-staging`
  - [ ] Click "Create app"
  - [ ] Open (click on the app name) the created staging app and, on the "Deploy" tab, in the "Automatic deploys" section:
    - [ ] Select the `staging` branch in the "Choose a branch to deploy" pulldown
    - [ ] Click "Enable Automatic Deploys"
- [ ] (Optional) Add the dev app:
  - [ ] On the `staging` phase click "Add app". Note that one cannot add a development app directly. An app is added to the staging phase and then moved to the development phase.
  - [ ] Click "Create new app" (assuming no existing development app exists)
  - [ ] Enter the "App name" as: _`github-repo`_`-dev`
  - [ ] Click "Create app"
  - [ ] On the newly created development app, select the context menu to the right of the "Open app" button and select "Move app to development"
  - [ ] Open (click on the app name) the created development app and, on the "Deploy" tab, in the "Automatic deploys" section:
    - [ ] Select the `dev` branch in the "Choose a branch to deploy" pulldown
    - [ ] Click "Enable Automatic Deploys"
- [ ] Enable review apps:
  - [ ] Click "Enable Review Apps" to enable review apps
  - [ ] Select "Create new review apps for new pull requests automatically"
  - [ ] Select "Destroy stale review apps automatically". The default 5 day time frame is typical and need not be modified.
  - [ ] Visit pipeline settings and [configure a predictable url pattern](https://devcenter.heroku.com/articles/github-integration-review-apps#selecting-the-url-pattern)
- [ ] Add the production app:
  - [ ] Click "Add app" on the production phase (labeled "PRODUCTION")
  - [ ] Click "Create new app" (assuming no existing production app exists)
  - [ ] Enter the "App name" as: _`github-repo`_`-production`
  - [ ] Click "Create app". Note that production apps are not typically automatically deployed as a safety measure.

### Configure Access

- [ ] Add admins and collaborators to Heroku pipeline as needed
  - [ ] On the pipeline page in the "Access" tab add any additional team members that need access to the project.

### Configure Resources

- [ ] For **each** app, configure any resources necessary for the application. Resources typically include:
  - New Relic (production app)
  - Papertrail (production app)

Resources for each Heroku app are configured on the app's "Resources" tab. Note that resources for review apps may be configured in the `app.json` file (`add-ons` section) included as part of this template.

### Configure Environment Variables

#### Environment Variables for Pipeline Applications

- [ ] Add config vars from `application.yml` to the respective pipeline app. `figaro-js` provides [built-in functionality](https://github.com/LaunchPadLab/figaro-js/blob/master/docs.md#cli) for this. Note that Figaro will overwrite any existing variable values and should be used with caution. Also note that Heroku also creates environment variables that need not be changed from their defaults nor added to the `application.yml` file.
- [ ] Optional: Add Heroku remotes for local branches (`git remote add dev <https:…>`). Heroku git URLs may be found in the "App information" section of each app's Settings tab.

#### Environment Variables for Review Apps

- [ ] The environment for Heroku review apps are configured in the `app.json` file, in an `"env"` section that must be added to the file. Here is an example of an `app.json` file with environment variables configured:

```json
{
  "name": "my-app",
  "description": "My Application",
  "env": {
    "REACT_APP_API_URL": "https://my-app-api-dev.herokuapp.com/v1/",
    "REACT_APP_GOOGLE_MAPS_API_KEY": "HTTGff65fDHTvUAuVVfC1a_5q3r1mT4hcMHKP0"
  },
  "formation": {},
  "addons": [],
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    }
  ]
}
```

Alternatively, the review app environment may also be configured within Heroku. Click the REVIEW APPS > Configure > More settings link, select the "Settings" tab and click "Reveal Config Vars".
