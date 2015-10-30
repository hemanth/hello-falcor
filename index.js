var falcorExpress = require('falcor-express');
var Router = require('falcor-router');
var express = require('express');
var Library = require('./db.json');
var app = express();

app.use('/library.json', falcorExpress.dataSourceRoute(function (req, res) {
  return new Router([
    {
      route: "books.list",
      get: function() {
        return {path:["books"], value: JSON.stringify(Library) };
      }
    },
    {
      route: "books.names",
      get: function() {
        return {path:["books","names"], value: Library.map( book => book.name )};
      }
    }
  ]);
}));

app.use(express.static(__dirname + '/'));

var server = app.listen(process.env.PORT || 1337);
