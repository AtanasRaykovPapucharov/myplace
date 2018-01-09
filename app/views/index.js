module.exports = {
    home: (req, res, next) => {
        res.render("home", {});
    },
    daily: (req, res, next) => {
        res.render("daily", {});
    },
    blog: (req, res, next) => {
        res.render("blog", {});
    },
    collections: (req, res, next) => {
        res.render("collections", {});
    },
    music: (req, res, next) => {
        res.render("music", {});
    },
    cinema: (req, res, next) => {
        res.render("cinema", {});
    },
    games: (req, res, next) => {
        res.render("games", {});
    },
    books: (req, res, next) => {
        res.render("books", {});
    },
    writing: (req, res, next) => {
        res.render("writing", {});
    },
    cv: (req, res, next) => {
        let data = require("../data/cvs.json");
        res.render("cv", data);
    },
    tests: (req, res, next) => {
        res.render("tests", {});
    },
    about: (req, res, next) => {
        res.render("about", {});
    },
    changePassword: (req, res, next) => {
        res.render("change-password", {});
    },
    forgotPassword: (req, res, next) => {
        res.render("forgot-password", {});
    },
    signIn: (req, res, next) => {
        res.render("sign-in", {});
    },
    signUp: (req, res, next) => {
        res.render("sign-up", {});
    }
}