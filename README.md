# Face Match App Project
The face match app is a responsive web app that uses the clarifai API to locate and recognise a human face in a picture provided by the User through the URL of the picture. It was built with Node.js, Express.js, React.js as well as a postgreSQL which is in charge of the user sign-in/registration as well as keeping track of the number of entries for each user. The front-end(client-side), back-end(server-side) and database were all deployed on Heroku. It is the final project required of the zero to mastery Udemy course.

The ‘Celebrity’ model which is incorporated herein the app analyzes images and returns probability scores on the likelihood that the media contains the face(s) of over 10,000 recognized celebrities. This model is great for anyone building an app that relies on celebrity comparisons.

Please note that this model is currently in BETA testing and may update periodically.

## Available Scripts

- NPM/yarn, Node.js.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Installation
Clone the repository or download the zip file, enter the project directory and use Yarn to install the dependencies.

Using Git bash or your command line
- git clone https://github.com/abubakar-yinka/face-match-app.git
- cd into face-match-app
- yarn/npm install

##### Usage
The project can be run with
- npm start or
- yarn start
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).






