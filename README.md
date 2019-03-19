[![Build Status](https://travis-ci.com/deer-inc/ng-attendance.svg?branch=master)](https://travis-ci.com/deer-inc/ng-attendance)
[![Coverage Status](https://coveralls.io/repos/github/deer-inc/ng-attendance/badge.svg?branch=master)](https://coveralls.io/github/deer-inc/ng-attendance?branch=master)
[![npm](https://img.shields.io/npm/v/@deer-inc/ng-attendance.svg)](https://www.npmjs.com/package/@deer-inc/ng-lp)
![GitHub](https://img.shields.io/github/license/deer-inc/ng-attendance.svg)

# NgAttendance

NgAttendance is an operation management table library by Angular Material.

## Demo

[Demo](https://deer-inc.github.io/ng-attendance/)

## Getting started

Please introduce Angular Material to the project in advance.

```bash
yarn add @deer-inc/ng-attendance
```

app.module.ts
```ts
import { NgAttendance } from '@deer-inc/ng-attendance';

...

imports: [
  NgAttendance
]
```

app.component.html
```html
<ng-attendance></ng-attendance>
```

## Build

Run `ng build @deer-inc/ng-attendance` to build the project.

## Publishing

After building your library with `ng build @deer-inc/ng-attendance`, go to the dist folder `cd dist/deer-inc/ng-attendance` and run `npm publish --access=public`.

## Running unit tests

Run `ng test @deer-inc/ng-attendance` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
