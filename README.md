# React-Redux Todo

Todo app built with Reactjs, Redux, Webpack, Node.js(Express.js), Sequelize.js, PostgreSQL and Passport.js

If you have not already, you need to install the following to run app locally...

  * [Node.js(v6.10.3)](https://nodejs.org/en/)
  * [PostgreSQL](https://www.postgresql.org/) / [MySQL](https://www.mysql.com/) / [SQLite](https://www.sqlite.org/)
  * [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/en/)

## Setup and Run Application

**Sequelize Config**

Create `config/config.json` in `/server` directory. Add the following to connect to local development database.

```
{
  "development": {
    "username": <db-username>,
    "password": null,
    "database": "react_redux_todo",
    "host": "127.0.0.1",
    "dialect": <local-db>
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

#### Run Application

1. Run `npm install` to install depenencies.
2. Create local DB `react_redux_todo`.
3. Run `npm start` to start application.
4. Navigate to `http://localhost:3001` to see running application.

---

### Things To Complete / Inconsistencies

* Error handling/messages to user when login or registration fails.
* Error handling/message to user when navigating `/`.
* Restrict access to `/login` and `/register` pages if user is already logged in.
* Fix error on refresh `/login` and `/register` routes.
* Add `Jest` front-end unit tests and `Supertest` back-end API endpoint tests.

