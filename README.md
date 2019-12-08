# P5js: vertical infinity game

This is a boilerplate/template to create a vertical infinity game.
This is used in a
Master degree on Game Design course of [UBI](https://www.ubi.pt/)

The project structure used here was based in [generator-p5-webpack](https://github.com/janizde/p5-webpack-yeoman-generator) generated with [Yeoman](https://yeoman.io/)


### Prerequisites

- Install [Node](https://nodejs.org). You can use [NVM](https://github.com/nvm-sh/nvm) directly from command line (Linux) or using [Chocolatey](https://chocolatey.org) (Windows)

- Install [VSCode](https://code.visualstudio.com/) to edit the code (Optional)

## Built With

This project uses:

#### Build and package manager

* [Webpack](https://webpack.js.org) - For start a webserver and generated a minified versio for production
* [Babel](https://babeljs.io) - To compile from `Javascript` **ES6** to **ES2015**, if you wish.
* [Node](https://nodejs.org) - To use [NPM](https://github.com/npm/cli)
* [npm](https://github.com/npm/cli) - A `package.json` file that describes the dependencies and automated scripts (`start`, `build`...)
* [generator-p5-webpack](https://github.com/janizde/p5-webpack-yeoman-generator) - A [Yeoman](https://yeoman.io/) generator used for this structure

## Getting Started

To run/develop this project, follow the steps below:

1. Clone this repo:

    ```bash
    git clone https://github.com/mfdeveloper/p5-vertical-game.git
    ```

2. Enter the cloned directory, install all depedencies and starts the local web server:

    ```bash
    cd p5-vertical-game
    npm install
    # Starts the local web server, and open your default browser
    npm start
    ```

## Deployment

To generate a **production** version, folow the steps below:

```bash
cd p5-vertical-game

# Generated a "dist" folder
npm run build

# Optionally, you can get start a web server too
npm run start:prod

```

## Authors

* **Felipe Ferreira** - *Initial work* - [Felipe](https://github.com/mfdeveloper)

See also the list of [contributors](https://github.com/mfdeveloper/p5-vertical-game/contributors) who participated in this project.
