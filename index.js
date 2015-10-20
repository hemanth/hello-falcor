var falcorExpress = require('falcor-express');
var Router = require('falcor-router');
var express = require('express');
var books = require('./db.json');
var app = express();

app.use('/books.json', falcorExpress.dataSourceRoute(function (req, res) {
  return new Router([
    {
      route: "books",
      get: function() {
        return {path:["books"], value: JSON.stringify(books) };
      }
    }
  ]);
}));

app.use(express.static(__dirname + '/'));

var server = app.listen(process.env.PORT || 1337);
