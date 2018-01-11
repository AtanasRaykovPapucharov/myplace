module.exports = (mongo) => {
    let staticData = require("../ui/data/static.json");
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
                    res.render("blog", { blog: data, tags: staticData.tags.blog });
                });
        },
        collections: (req, res, next) => {
            collectionData.blogData.getAll()
                .then((data) => {
                    res.render("collections", { blog: data, tags: staticData.tags.collections });
                });
        },
        cv: (req, res, next) => {
            res.render("cv", staticData.cv);
        },
        tests: (req, res, next) => {
            res.render("tests", {});
        },
        freetime: (req, res, next) => {
            res.render("free-time", {});
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