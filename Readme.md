# Recruitment Task 
Recruitment task for the Brainhub Company.

## About the App
The application is created using React, Redux(redux-toolkit), react-hook-from, MUI, Express, MariaDb, Typeorm, Typescript.
The main goal of this app is to allow a user to add an event to the database, with the
following fields:
- First name (required)
- Last name (required)
- Email (required, valid email address)
- Event date (required, simple date picker)

## Prerequisites
To run the app properly, it needs the following: 
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## Usage
Node is not required because there is a image of it in the docker container, to run application you should:

```bash
cd ./myproject
# You have to be in the root directory where the docker-compose.yml is located.
```
```bash
docker-compose build
```
```bash
docker-compose up
```

## Screenshots
[First add a event](./images/ex.1.png)
[Next add a user](./images/ex.2.png)