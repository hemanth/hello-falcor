# hello-faclor
> A simple [faclor.js](https://netflix.github.io/falcor/) example.

This example uses handlbars and some faclor magic to list JS books.

Do check the [demo](http://hello-falcor.herokuapp.com/)!

__Heart of the Server:__

```js
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
```

__Heart of the client:__

```js
var model = new falcor.Model({source: new falcor.HttpDataSource('/books.json') });

model.
  get("books").
  then(function(response) {
    var books = JSON.parse(response.json.books).books;
   });
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
