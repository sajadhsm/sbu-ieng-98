# Homework 2

You can find problem description here: [https://github.com/sehsanm/sbu-ieng-98/tree/master/HW2](https://github.com/sehsanm/sbu-ieng-98/tree/master/HW2)

## Introduction

Live at: [https://formak.herokuapp.com](https://formak.herokuapp.com)

**Formak** is a minimal multi-language form service built on top of React and Express.

## Preparation
In order to start working, you need to install
[node](https://yarnpkg.com/en/docs/install),
[yarn](https://yarnpkg.com/en/docs/install) and
[git](https://git-scm.com/) locally.


## Setup

Clone the repository, install the dependencies and get started right away.

    $ cd formak-client
    $ yarn

    $ cd form-server
    $ npm install

In order to use *Google map API* you need to get your API key and store it as `REACT_APP_GOOGLE_MAP_API_KEY` environment variable.

Finally, start the application (for development).

    $ cd formak-server
    $ node index.js

    $ cd formak-client
    $ yarn start
