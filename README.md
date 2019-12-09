# Dynamic Student Assessment - Test Client

## What this project is about

The Dynamic-Student-Assessment is a project for Codaisseur. The aim is to accurately measure the level of Javascript of potential students who sign up for the coding bootcamp. Better assessments of students Javascript level before they start the course, should increase the Bootcamp completion rate.

The test should measure students current level and give recommendations based on the results. The questions should change in complexity based on the provided student answers and level.

- **[Test Client](https://github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Test-Client)**
  Focuses on the applicant UI and contains the login page and admissions test.

- **[Admin Client](https://github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Admin-Client)**
  Portal for the Codaisseur admissions team to manage applicants, scores and tests.

- **[Server](https://github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Server)**
  Contains the end points and database models.

## Table of contents:

- **[How to install](#how-to-install)**
- **[Features built so far and the routes](#features-built-so-far-and-the-routes)**
- **[Create React App docs](#create-react-app)**
- **[Contributors](#features-built-so-far-overview-with-pull-requests)**

## How to install

1. Clone the git repository

`git clone git@github.com:Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Test-Client.git`

2. cd into the folder Dynamic-Student-Assessment-Test-Client

3. Run npm install and Before launching the app( with npm start ), please make sure that the server side is up and running.

4. Run npm start. The app runs in the development mode on http://localhost:3000 in the browser.

5. Checkout the **[Server ReadMe](https://github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Server)** to install and run the server.

## Features built so far and the routes

#### 👇 Click links to view the individual pages (install the App first!)👇

- **[Login page](http://localhost:3000/login)**
- **[Instructions page](http://localhost:3000/instructions)**
- **[Admission test](http://localhost:3000/admission-test)**

The main structure and components for the test client have been made. Full implementation with the server and admin client is pending. For more detailed overview of what's completed and needs to be done checkout: **[Test Client Project Board](https://github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Test-Client/projects/1)**

## Create React App

This project was scaffolded using the create-react-app cli.

**[The standard create-react-app docs can be found in here](./create-react-app-docs.md)**

### What is working:

**Login**

- An interviewee can login with the code that is generated from the admin client (see the /students endpoint in that repo: here --> **[Admin Client](https://github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Admin-Client)**

**Instructions**

- After loging in, the interviewee get redirected to /instructions where a default instructions (should be replaced with the real instructions at one point). Here the interviewee can click the button "start test" to get to the test.

**Admission-test**

- At /admission-test, the interviewee get the questions, choosing one out of four options and then clicking next to get to the next question
- Question loaded (redux store)
  - If an interviewee answers the question correct --> the initialLevel (seen in the action payload OR in the state
    question: initalLevel) will go up a level (from 0-1-2).
- In the payload you can see the answers (an array at the bottom of the payload), here you see which one is correct/incorrect.
- After finishing the test (for now we only give 5 questions/test), the interviewee can navigate to results page to discuss the questions with the interviewer.

## To do:

**Admission-test**

- The results page could be styled with Material UI
- Change the instructions
- NOT to do: we don't recommend to have a back button in the test. An interviewee shouldn't be able to resubmit an answer, because it would mess up the dynamic leveling/scoring system of the test.

## Contributors

#### Special thanks to:

Class 30:

- **[Ivana H](https://github.com/future-ruins)**
- **[Gerson Lynch](https://github.com/gersly)**
- **[Zeger de Vos](https://github.com/zegenerative)**
- **[Esther Hayward](https://github.com/eawh02)**
- **[Lucas Pascholatti](https://github.com/LPascholatti)**
- **[Andrea Cogo](https://github.com/anderara)**

Class 31:

- **[KumKum Singh](https://github.com/kumkumsingh)**
- **[Yu Qi](https://github.com/qiyu1987)**
- **[Stijn Blokker](https://github.com/stijnblokker)**
- **[Evelina Wahlström](https://github.com/evelinawahlstrom)**
- **[Sushmita BS](https://github.com/sushmitha-b-s)**

Class 32:

- **[Melissa 't Hart](https://github.com/MelissaDTH)**
- **[Adel Tancsik](https://github.com/adeltancsik)**
- **[Mouaz Tabanja](https://github.com/mtabanja)**
- **[Veronica H. Stigen](https://github.com/vhs2708)**
