## Introduction
video-game-library is an Angular web app built with TypScript, HTML, SCSS and Angular.
## Usage
Display information of some video games by calling rawg-api(https://rawg.io/apidocs). <br/>
Search a video game and check out its details.
## Installation
Use npm to install all the dependencies.
```
npm i
```
Get a free api key from the rawg-api(https://rawg.io/login?forward=developer) <br/>
Create an 'environment.prod.ts' file and set the api key
```typescript
export const environment = {
    production: true,
    apiUrl: 'https://api.rawg.io/api',
    key: 'your api key from rawg-api'
};
```
Use Angular CLI to run the app
```
ng serve
```