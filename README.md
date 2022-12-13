# Web Applications Homework 3 

Group 6

Authors:
- Aksel Õim
- Erik Viper
- Kaarel-Richard Kaarelson

## Project setup

1. Backend

## Create a database 

Open pgAdmin and log in with your DBA account.

Create a new database with name `testWad`, everything else leave as default values and click `Save`.

## Navigate to the backend project directory
```
cd <project name>/Backend
```

## Set up database credentials

Open `database.js` with your favorite text editor and fill in the password of your database DBA account.

```javascript
const pool = new Pool({
    user: "postgres",
    password: "", // <-- Enter your password here
    database: "testWad",
    host: "localhost",
    port: "5432"
});

```

## Install dependencies in backend project directory

```
npm install 
```

## Run the backend server
```
npm start
```

2. Frontend

## Navigate to the frontend project directory
```
cd <project name>/Frontend
```

## Install dependencies in frontend project directory

```
npm install 
```

### Start frontend client server 

```
npm run serve
```

### Open browser an navigate to
```
http://localhost:8080/
```