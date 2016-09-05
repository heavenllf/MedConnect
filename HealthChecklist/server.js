/*var express = require('./node_modules/express');
var app = express();
var routes = require('./routes');
var api = require('./routes/api');
var server = require('http').createServer(app);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.locals.pretty = true;
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'secret!' }));
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.use('/components', express.static(__dirname + '/components'));
app.use(app.router);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', routes.index); // main page
app.get('/p/:name', routes.p); //redirect routes

app.get('/api/contact', api.contacts); //look at all
app.get('/api/contact/:id', api.contact); //look at one
app.post('/api/contact', api.add); //add contact
app.put('/api/contact/:id', api.edit); //edit&update contact
app.delete('/api/contact/:id', api.delete); //delete contact

server.listen(app.get('port'), app.get('ipaddr'), function(){
  console.log("Express server up and running for the API on port " + app.get('port') + " on IP " + app.get('ipaddr'));
});*/

var filePath = process.argv[1] == 'server.js' ? process.cwd() : process.argv[1]
var location = filePath.indexOf('nodejs');
var dir = filePath.substring(0, location);
console.log("Working Directoring: " + dir);
//process.chdir(dir);

var express = require('./node_modules/express');
var app = express();
var fs = require('fs');
var http = require('http');
var https = require('https');
var bodyParser = require('./node_modules/body-Parser');
var querystring = require('querystring');
var Setting = require('./server/setting.js');
var Logger = require('./server/Logger');


Logger.initLogConfig(Setting.LOG_HOME, Setting.LOG_LEVEL);
var Log = Logger.getLogger();

(function() {
    var listen = function () {
        var port = Setting.PORT;
        //app.use(express.cookieParser("vital"));//sessionID secret code
        //app.use(express.session());
        app.use(function (req, res, next) {
            for (var i in req.headers) {
                req.headers[i] = querystring.unescape(req.headers[i]);
                req.headers[i] = req.headers[i].replace(/\+/g, "");
            }
            /*
            console.log("req"+req.originalUrl);
            var url = req.originalUrl;  //login check
            if(url != "/login" && !req.session.user){
               return res.redirect("/login");
            } */
            next();
        });
        app.use(bodyParser());
		app.use(express.static('public'));
        //Dispatch HTTP request
        require('./server/Router.js')(app);
        var server = http.createServer(app);
        server.on('listening', function () {
            console.log("listen at "+"http://localhost:" + port);
        });
        server.on('request', function (request, response) {

        });
        server.listen(port);

        var privateKey = fs.readFileSync('test.pem');
        var certificate = fs.readFileSync('test-cert.pem');
        var credentials = {key: privateKey, cert: certificate};
        var httpsServer = https.createServer(credentials,app);

        httpsServer.listen(8443);
    };
    listen();
}())
