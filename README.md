## Dragonboat Code Challenge - Please Fork this repo

The main purpose of this challenge is to evaluate the ability to add functionality to an existing codebase following the pre-existent stack and design patterns.

On the backend you will find a node.js 3-layer architecture (you may want to read more about it at https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf - read 3 layer architecture section and ignore the rest). The database layer was mocked with a model that reads and writes from/to a local object as it is not the main purpose of this challenge (you are free to replace by a Sequelize, Mongoose or any other tool). You can extend the existing API as you need in order to fit your needs.

On the frontend you will find a React/Redux project using:

- Reselect as selector library (https://github.com/reduxjs/reselect)
- Styled-Components as CSS-in-JS tool (https://styled-components.com)

Please avoid using patterns/libraries that overlap the purpose of the existing ones.

## Challenge Tasks

- The user must be able to view a list of projects. Each project must have an `id`, `title`, `author`, `start_date`, `end_date`

- The user must be able to delete a project

- The user must be able to add and edit a project

## How to run

The package.json was written to run on a UNIX environment. If you are working on a Windows environment please rewrite both package.json files properly.

Install the dependencies using `npm i` and run `npm start` in both `backend` and `front` directories two start the api and the frontend.
