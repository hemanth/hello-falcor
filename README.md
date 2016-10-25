# hello-faclor
> A simple [faclor.js](https://netflix.github.io/falcor/) example.

This example uses handlebars and some falcor magic to list JS books.

Do check the [demo](http://hello-falcor.herokuapp.com/)!

__Heart of the Server:__

```js
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
```

__Heart of the client:__

```js
var model = new falcor.Model({source: new falcor.HttpDataSource('/books.json') });

model.
  get("books").
  then(function(response) {
        var books = JSON.parse(response.json.books);
   });
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
