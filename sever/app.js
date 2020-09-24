var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resourceRouter = require('./routes/resource');
var questionRouter = require('./routes/questions');
var answerRouter = require('./routes/answers');
var testRouter = require('./routes/tests');
var testQuestionRouter = require('./routes/test_question');
var testResultRouter = require('./routes/test_result');

var app = express();


//connect DB
var url = 'mongodb://localhost:27017/mydb';
db = Mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD,OPTIONS,POST,PUT,GET,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resources', resourceRouter);
app.use('/questions', questionRouter);
app.use('/answers', answerRouter);
app.use('/tests', testRouter);
app.use('/test-questions', testQuestionRouter);
app.use('/test-results', testResultRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;