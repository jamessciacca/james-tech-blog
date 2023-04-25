//pulling in all needed modules and files 
const express = require('express');
    //session allows us to use authentication and create accounts
    const session = require('express-session');
    //hbs allows us to use templates and separate html files
    const expressHbs = require('express-handlebars');
const path = require('path');
//pulling in our routes folder

//storing session data for individual user
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//creating port variable 
const PORT = process.env.PORT || 3001;

//creating an instsance of express
const app = express();

//setting up hbs.js engine for helpers
const helpers = require('./utils/helpers')
const hbs = expressHbs.create({ helpers });

//creating a session const to hold needed values
const activeSession = {
    //encryption secret
    secret: 'secret',
    cookie: {},
    //save session only if changes were made
    resave: false,
    saveUnintialized: true,
    //storing session to our database
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(activeSession));

//setting up hbs engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//setting up middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

//synchronizing all models to the database
sequelize.sync();

//creating the server
app.listen(PORT, () => {
    console.log('Server is listening on port %S!', PORT);
})
