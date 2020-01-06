const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const hbs = require("hbs");
const exphbs = require("express-handlebars");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

// Establish main hbs layout
app.engine('hbs', exphbs({ defaultLayout: 'main'}));

app.set('views', (__dirname + '/views'));
app.set('view engine', 'hbs');


const mainRouter = require("./routes/mainRouter");

app.use("/", mainRouter);

app.set('port', process.env.PORT);
app.set('port', 3000);

app.listen(app.get('port'), () => {
        console.log('Server is running on port 3000');
    });

module.exports = app;
