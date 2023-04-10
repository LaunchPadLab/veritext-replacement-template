# Veritext Replacement Template

## Structure

- `fe` - Frontend
  - `config` - Configuration files
    - `application.yml` - Application enviromental variables for both `fe` and `be` configuration
- `be` - Backend
  - `prisma` - Postgres ORM
## Getting Started

1. Clone the repo
2. `yarn setup`
3. Configure `fe/config/application.yml` with your own local postgres connection url like `postgresql://username@localhost:5432/veritext_box`
4. Due to the way prisma loads env variables in development, you will need to make sure your `pg` connection url is set to `DATABASE_URL` in your `.env` file located at `be/prisma/.env`
5. `yarn db:migrate:dev`
6. `yarn db:seed` (optional)
7. `yarn dev`

### Troubleshooting Prisma
- If you are having trouble getting your `DATABASE_URL` to work, try running `yarn db:generate` and then `yarn db:migrate:dev` again.

## Setting Up Postgres Locally

If you don't have postgres installed locally, you can use the following commands to get it set up.
```bash
brew install postgresql
brew services start postgresql
```

There are several guides to creating a database using the homebrew cli tool, but the following is a quick guide to get you started with pgAdmin4.

1. Install pgAdmin4
```bash
https://www.pgadmin.org/download/pgadmin-4-macos/
```

2. Open pgAdmin4
3. After opening pgAdmin4, you will be prompted to create a "master password". This is the password you will use to login to pgAdmin4. You can just click enter to skip this password step or you can create a password.
4. Click `Add New Server`
5. Under the `General` tab, give your database a name in the input field labeled `Name`
6. Click the `Connection` tab 
7. Under `Host name/address`, enter `localhost`
8. Under `Port`, enter `5432`
9. Keep username as `postgres`
10. Keep password empty
11. Click `Save`

Now you should be taken to the dashboard of your database. If you followed the steps above, your connection string should be `postgresql://postgres@localhost:5432/database_name`. You can use this connection string to connect to your database using the `DATABASE_URL` variable in your `.env` file.

## Resources

- [Prisma](https://www.prisma.io/)
- [Prisma Migrations](prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production)
- [Backend-Bolierplate](https://github.com/ljlm0402/typescript-express-starter/blob/master/lib/prisma)
- [Frontend-Bolierplate](https://github.com/LaunchPadLab/client-template)

### Notion
- https://www.notion.so/launchpadlab/Dev-Resources-0dddfd58e59148608336bd393aca6a21
## TODO
- https://app.asana.com/0/1203247162912464/1204350186317579/f

## Heroku Production Hosted Link

https://veritext-replacement-template.herokuapp.com/home
