let data = require("../ui/data/static.json");

module.exports = {
    home: (req, res, next) => {
        res.render("home", {});
    },
    daily: (req, res, next) => {
        res.render("daily", {});
    },
    blog: (req, res, next) => {
        res.render("blog", { blog: data.blog });
    },
    collections: (req, res, next) => {
        res.render("collections", {});
    },
    freetime: (req, res, next) => {
        res.render("free-time", {});
    },
    cv: (req, res, next) => {
        res.render("cv", data.cv);
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