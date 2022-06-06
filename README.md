# NasaPictureOfTheDayComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Display
Here is how the web component is displayed:

![plot](./assets/demo.gif)

## Installation
    npm i nasa-picture-of-the-day

## Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Testing out how our web component will render below:</h1>
    <nasa-picture-of-the-day-component></nasa-picture-of-the-day-component>
    <script src="node_modules/nasa-picture-of-the-day-component/build/nasa-picture-of-the-day-component.js"></script>
</body>
</html>
```

## Angular setup
### AppModule Setup
In the `app.module.ts` file, you must declare your *schema* to be custom:

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //this line here
})
```  

### angular.json Setup
In the build section, add the `nasa-picture-of-the-day-component.js`:

```jsonc
"architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/test-angular",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": [
                "node_modules/nasa-picture-of-the-day-component/build/nasa-picture-of-the-day-component.js"] // <- this line here
          }
```
### HTML Example
Here's an example of it being used in the `app.component.html`:
```html
<h1>This is my test angular application</h1>
<nasa-picture-of-the-day-component></nasa-picture-of-the-day-component>
```
## React setup

### Wire up App.js
```js
import logo from './logo.svg';
import './App.css';
import 'nasa-picture-of-the-day-component/build/nasa-picture-of-the-day-component'; // this line here

// <nasa-picture-of-the-day-component> defined in HTML below
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nasa-picture-of-the-day-component></nasa-picture-of-the-day-component>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

## What does it do?

It uses a public API to get the image of the day provided by [NASA](https://api.nasa.gov/).


## NGXS for state management

This project uses [NGXS](https://github.com/ngxs/store) for state management.

