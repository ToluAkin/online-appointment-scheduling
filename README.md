## For the Javascript Deep Dive class, only the backend has been done and is ready for submission.
Tasks done include:
- A user should be able to share his/her calendar
- Another party should be able to browse through a user's calendar to book an appointment for a period.
- The owner of the calendar should be able to view all the scheduled dates for when it is free and when it is booked.

Not done:
- A user should be able to specify what days of the week/month of the year are free

# A simple online appointment scheduling app

This project is composed of both frontend and backend. <br>
The project is a simple app that caters for users to register on the app, have access to their calendar and the user can
share their calendar as well. <br>
There is another party of user, meaning there are 2 user types for this application , that wants to schedule an 
appointment with the owner of the calendar. <br>
It has been implemented such that the other user does not have to login to use the app, it has direct access to 
calendar owners and appointments with them.

The frontend is in **React** and the backend is in **Node** and **Express JS** and **mongodb** as the database

### Setup for client(Frontend)
You need to have `node` and `npm` installed on your machine. Install with nvm, node package manager from here https://github.com/nvm-sh/nvm

###### You can run the following command on the client folder of the project
- Run `npm  install`
- Once all the dependencies are installed, you can run `npm start` to start the project

### Setup for api(Backend)

###### You can run the following command on the api folder of the project

- Run `npm install`
- Once all the dependencies are installed, create a `.env` in the api folder and copy the contents of `.env.sample` into `.env`
- Run `npm run dev` to start the project
- In the folder **`requests`** in the api folder, you can access all the available endpoints on the project.