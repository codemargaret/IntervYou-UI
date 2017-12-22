# _IntervYou Angular User Interface_

#### _A website that allows a user to practice technical interview questions, 12.21.2017_

#### By _**Margaret Berry**_

## Project Goals
_My goal was to create an Angular interface that would communicate with a separate Rails API._

## User Stories
_In order to prepare for this project, I held three user focus groups to determine what users might want in an application like this. My notes from these sessions can be found [here](https://trello.com/b/uZ1OTM7K/intervyou-focus-groups)._

_As a user, I want to..._
* _See questions without logging in._
* _See answers without logging in._
* _Register for an account._
* _Login to my account and see my profile._
* _Write questions._
* _Write answers to questions._

## Future Features
_As a user, I want to..._
* _Have a profile with my name and questions and answers I've posted._
* _Search questions by language._
* _Upvote questions I like._
* _Upvote answers I like._
* _Search questions by difficulty._
* _Choose whether or not my answers to questions are public._
* _Search questions by topic tags._
* _Create my own tags for questions._
* _View whiteboard questions with attachments._
* _Answer whiteboard questions with attachments._
* _Save questions I'm interested in to my account._
* _Earn points for my contributions._

## Setup/Installation Requirements
_Complete the setup steps for the API outlined in [this repository](https://github.com/codemargaret/IntervYou.git)._
_Run the following commands in Terminal:_

1. `$ git clone` [this repository](https://github.com/codemargaret/IntervYou-UI.git)
2. `$ cd IntervYou-UI`
3. `$ npm install`
4. _Run `ng serve` for a dev server._
5. _Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files._
6. _You can login with the following test user: email: user@user.com, password: password._

## Known Bugs
* _User authentication is not required to post questions._
* _A user can't navigate to an individual question page by clicking on the question, although the pages can be accessed by entering the address /questions/:id in the browser._
* _Refresh is required to see new questions and answered that are posted._

# Angular Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Acknowledgements
_I'm indebted to A. Vatsaev for his fabulous [tutorial](https://medium.com/@avatsaev/angular-2-and-ruby-on-rails-user-authentication-fde230ddaed8) on implementing an Angular interface with a Rails API._

## Support and contact details
_If you have any updates, questions, or suggestions please contact [Margaret] or make a contribution._

[Margaret]: mailto:codeberry1@gmail.com

## Technologies Used
* _Angular 2_

### License
*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Margaret Berry_**
