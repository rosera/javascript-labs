const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const pathPublicDirectory = path.join(__dirname, './public'); 
const pathViews = path.join(__dirname, '/views');
const pathPartials = path.join(__dirname, '/partials');

// Set as environment variables

// Game Specific Detail
const lab = {
  title:"Google Solutions", 
  subtitle:"Welcome to Hands-on Labs!", 
  url: "https://google.qwiklabs.com/games/XXX", 
  urlhelp: "https://support.google.com/qwiklabs#topic=9114857",
  code: "XXXX-XXXX"
};

// Set hbs as the template engine
app.set('view engine', 'hbs');
app.set('views', pathViews);
hbs.registerPartials(pathPartials);

// Set the location of the html templates
app.use(express.static(pathPublicDirectory));     

// Initialise the port
const port = process.env.PORT || 8080;

// Render the web page with parameters
app.get('', (req, res) => {
  res.render('cloudhero', {title:lab.title, subtitle:lab.subtitle, url:lab.url, code:lab.code, urlhelp:lab.urlhelp});
})

// Listen on a network port
app.listen(port, () => console.log(`Listening on:${port}`))
