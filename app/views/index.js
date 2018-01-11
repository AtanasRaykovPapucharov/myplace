module.exports = (mongo) => {
    let data = require("../ui/data/static.json");
    let collectionData = require("../data")(mongo);

    return {
        home: (req, res, next) => {
            res.render("home", {});
        },
        daily: (req, res, next) => {
            res.render("daily", {});
        },
        blog: (req, res, next) => {
            collectionData.blogData.getAll()
                .then((data) => {
                    res.render("blog", { blog: data });
                });
        },
        collections: (req, res, next) => {
            res.render("collections", { blog: data.blog });
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
}