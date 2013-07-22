var application_root = __dirname,
express = require("express"),
path = require("path"),
mongoose = require('mongoose');
var app = express();
// Database
mongoose.connect('mongodb://localhost/recruite');
// Config
app.configure(function () {
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(application_root, "public")));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var routes = require( './controllers/index.js' )(app);
//solution from http://stackoverflow.com/questions/13222252/how-to-use-angularjs-routes-with-express-node-js-when-a-new-page-is-requested
app.use(app.router);
app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/index.html');
});

// Launch server
app.listen(3000, 'localhost', function (){
  //console.log( 'Express server listening on port %d in %s mode', app.address().port, app.settings.env );
});
