import express from "express"
import Route from "./routes/index.js"
import { fileURLToPath } from 'url'
import path from "path"
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import { userAuth } from './middleware/userAuth.js'
import methodOverride from "method-override"
import session from "express-session";
import expressLayouts from "express-ejs-layouts"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// for form data
app.use(express.urlencoded({ extended: true })) 

app.use(session({
    secret: 'veryverysecret',
    resave: false,
    saveUninitialized: true
}));

app.set('views',path.join(__dirname,"views"))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,"public")))

app.use(expressLayouts);
app.set('layout', 'layouts/main');

//get cookie
app.use(cookieParser());

//authen middleware
app.use(userAuth)
app.use(methodOverride('_method'))

//route
app.use("/", Route)

//error page
app.use((req, res, next) => {
    res.status(404).redirect('/');
});

//bind 
app.listen(port, () => console.info(`App listening on http://localhost:${port}!!`))