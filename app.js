const express = require("express");
const app = express();



app.listen(3000);
app.set('view engine', 'ejs');
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));



const tabs = [{
    name: "Accueil",
    active: true,
    link: "/home"
}, {
    name: "Contact",
    active: true,
    link: "/contact"
}];



app.get(tabs[0].link, (req, res, next) => {

    res.set('Content-Type', 'text/html');
    res.render("index", {
        tabs: tabs
    });
    res.end();
});

app.get(tabs[1].link, (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('<a href="/home">' + tabs[0].name + '</a>');
})