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
3. Configure `fe/config/application.yml` with your own local postgres connection url like `postgresql://username@localhost:5432/veritext_replacement`
4. Due to the way prisma loads env variables in development, you will need to make sure your `pg` connection url is set to `DATABASE_URL` in your `.env` file located at `be/prisma/.env`
5. `yarn db:migrate:dev`
6. `yarn dev`

### Troubleshooting Prisma
- If you are having trouble getting your `DATABASE_URL` to work, try running `yarn db:generate` and then `yarn db:migrate:dev` again.

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
