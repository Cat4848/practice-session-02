[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)  

# Practice Session 2

## Description

### Motivation

#### 1. Import Statements

##### The problem

The problem was that on import statements I needed to add the `js` extension otherwise the code will not work. The most annoying part was that it failed silently: no warning or error. When I manually added the `js` extension the problem was solved and the scripts are working.

While working on the [Scheduler App](https://github.com/Cat4848/scheduler) I encountered problems when it came to imports statement within a TypeScript project.

I researched the issue and I learned that this is a well-known issue. The reason behind it being that `node` requires the extensions to be present, but `TypeScript` transpiler does not do this.

This problem is solved by using a web bundler like Babel or Webpack. I will have a look at how Babel works and solved the extensions problem using Babel.

In this practice session I am aiming to learn how web bundeling works. 

I will start with a simple web page that is being served by a `js` file. Then I will use Babel to transpile the `js` file and see how this process works.

## Technologies Used

- HTML
- CSS
- JavaScript
- Babel
- TypeScript