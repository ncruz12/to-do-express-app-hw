// import express from our dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');


// initializing the app
const app = express();

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// where to look for view template
app.set('views', path.join(__dirname, 'views'));
// the type of template we're using and the engine to expect
app.set('view engine', 'ejs');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;
// tell the app to listen on that particular port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// // Our index route
// app.get('/', (req, res) => {
//   res.send('Welcome to the to-do list!');
// });

// new default route
app.get('/', (req, res) => {
  res.render('index', {
    logoName: 'TO DO APP' });
});

app.get('../tasks', (req, res) => {
  res.render('../tasks', {
    logoName: 'TO DO APP' });
});

// importing tasks routes and telling the app to use them
const taskRoutes = require('./routes/task-routes');
app.use('/tasks', taskRoutes);

// Error handler
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
})
