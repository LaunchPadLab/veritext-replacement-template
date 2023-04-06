# Veritext Replacement Template

## Structure

- `fe` - Frontend
  - `config` - Configuration files
    - `application.yml` - Application enviromental variables for both `fe` and `be` configuration
- `be` - Backend
  - `prisma` - Postgres ORM

## Requirements

- NodeJS ^18.12.1
- Yarn ^1.22.10
- Postgres ^14.2
- Prisma ^2.29.1

## Getting Started

1. Clone the repo
2. `yarn setup`
3. Configure `fe/config/application.yml` with your own values
4. `prisma migrate dev`
5. `yarn dev`

## Resources

- [Prisma](https://www.prisma.io/)
- [Backend-Bolierplate](https://github.com/ljlm0402/typescript-express-starter/blob/master/lib/prisma)
- [Frontend-Bolierplate](https://github.com/LaunchPadLab/client-template)

### Notion
- https://www.notion.so/launchpadlab/Dev-Resources-0dddfd58e59148608336bd393aca6a21
## TODO
- https://app.asana.com/0/1203247162912464/1204350186317579/f

## Heroku Production Hosted Link

https://veritext-replacement-template.herokuapp.com/home
