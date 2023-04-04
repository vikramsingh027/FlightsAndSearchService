# Welcome to Flights Service

### Project Setup

- clone the project on your local.

- Execute `npm install` on the same path as of your root directory of downloaded project.

- Create a `.env` file in the root directory and add the following environment variable :

  - PORT=3000

- Inside the root directory create a file `config/config.json` and then add the following piece of json :

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```

- Once you've added your db config as listed above, go to source folder from your terminal and execute `npx sequelize db:create`
