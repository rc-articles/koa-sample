var http     = require('http')
  , koa      = require('koa')
  , logger   = require('koa-logger')
  , cors = require('koa-cors')
  , route = require('koa-router');
  ;

// Create koa app
var app = new koa();
var router = new route();

/**
 * Show publishedPost.
 */
router
  .get('/workflow/publishedEntries/:cat', (ctx, next) => {
    var result = [
      { title: 'post1',
        slug: 'shubh',
        data: {
          content: 'SGV5IEkgYW0geW91ciBOZXRsaWZ5Q01TIGZpcnN0IHBvc3Qu'
        }
      }
    ];
    ctx.body = result;
  })
  .get('/workflow/unpublishedEntries', (ctx, next) => {
    var result = [
      { title: 'post1',
        slug: 'shubh',
        data: {
          content: 'SGV5IEkgYW0geW91ciBOZXRsaWZ5Q01TIGZpcnN0IHBvc3Qu'
        }
      }
    ];
    ctx.body = result;
  })
  .get('/workflow/unpublishedEntry/:cat/:slug', (ctx, next) => {
    var result = [
      {
        slug: ctx.params.slug,
        data: {
          content: 'SGV5IEkgYW0geW91ciBOZXRsaWZ5Q01TIGZpcnN0IHBvc3Qu'
        }
      }
    ];
    ctx.body = result;
  })
  
// middleware
app.use(cors());
app.use(logger());

app
  .use(router.routes())
  .use(router.allowedMethods());


http.createServer(app.callback()).listen(3000);
console.log('Server listening on port 3000');

