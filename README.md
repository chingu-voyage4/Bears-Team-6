# We Are Your Team

Contribution guidelines

## Set Up

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
