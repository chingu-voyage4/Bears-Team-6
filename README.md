# We Are Your Team
Contribution guidelines

* [Frontend repo](https://github.com/chingu-voyage4/Bears-Team-6)
* [Backend repo](https://github.com/theomegablack/chingu-voyage4-Bears-Team-6-backend)
* [Heroku dev](http://dev-weareyourteam.herokuapp.com/)
* [Heroku master](http://weareyourteam.herokuapp.com/)

## Dev settings

### NPM scripts

* `npm start` - dev mode
* `npm run build` - prod
* `npm test` single-time runner for all tests.
* `npm run testwatch` interactive test runner with watching.
* See code coverage report at [`coverage/lcov-report/index.html`](./coverage/lcov-report/index.html) (in browser) to see uncovered lines of code.

### VS Code

* Extensions
  * `Flow Language Support`
  * `ESLint`
  * `snapshot tools` (for reviewing changes in snapshots)

* Settings
  * `"editor.rulers": [100]`
  * `"flow.useNPMPackagedFlow": true,`
  * `"javascript.validate.enable": false,`

## How to run this App on localhost

### Install

* Install mongo
* Install backend
* set up `.env` file on backend

### Run

* run mongo
* run backend wit `npm start`
* run frontend with `npm start`
* use app at `http://localhost:8080`