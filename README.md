# React-Redux Todo

Todo app built with Reactjs, Redux, Webpack, Node.js(Express.js), Sequelize.js, PostgreSQL and Passport.js

If you have not already installed, you need the following to run app locally...

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

**Session Config**

Create `config/session.json` in `/server` directory and add the following to create a user session cookie...

```
{
  "secret": "mysecretkey",
}
```

#### Run Application

1. Run `npm install` to install depenencies.
2. Create local DB `react_redux_todo`.
3. Run `npm start` to start application.
4. Navigate to `http://localhost:3001` to see running application.

---

### Things To Complete

* Conditionally display header links if user is authenticated.
* Error handling/message to user when login or registration input invalid.
* Redirect authenticated user to `/` if trying to access `/login` or `/register` routes.
* Fix error on refresh `/login` and `/register` routes.
* Add `Jest` front-end unit tests and `Supertest` back-end API endpoint tests.

