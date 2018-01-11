$(() => {
    const templateLoader = (() => {
        class TemplateLoader {
            _compile(templateUrl) {
                return new Promise((resolve, reject) => {
                    $.get(templateUrl, (htmlTemplate) => {
                        let compiledTemplate = Handlebars.compile(htmlTemplate)
                        resolve(compiledTemplate)
                    })
                })
            }
    
            load(selector, templateUrl, data) {
                let selectedItem = $(selector)
                data = data || Object
    
                return this._compile(templateUrl).then((compiledTemplate) => {
                    selectedItem.html(compiledTemplate(data))
                })
            }
        }
    
        const tempLoader = new TemplateLoader()
        return tempLoader
    })()
    
    const view = {
        books: (selectorId, data) => {
            return templateLoader.load(selectorId, './templates/books.html', data)
        },
        games: (selectorId, data) => {
            return templateLoader.load(selectorId, './templates/games.html', data)
        },
        sports: (selectorId, data) => {
            return templateLoader.load(selectorId, './templates/sports.html', data)
        },
        movies: (selectorId, data) => {
            return templateLoader.load(selectorId, './templates/movies.html', data)
        },
        music: (selectorId, data) => {
            return templateLoader.load(selectorId, './templates/music.html', data)
        },
        writing: (selectorId, data) => {
            return templateLoader.load(selectorId, './templates/writing.html', data)
        },
        survivor: (selectorId, data) => {
            return templateLoader.load(selectorId, './templates/survivor.html', data)
        }
    }
    const appRouter = new Navigo(null, true)
    appRouter
        .on({
            '/books': () => {
                return view.books('#content-block');
            },
            '/music': () => {
                return view.music('#content-block');
            },
            '/games': () => {
                return view.games('#content-block');
            },
            '/movies': () => {
                return view.movies('#content-block');
            },
            '/writing': () => {
                return view.writing('#content-block');
            },
            '/sports': () => {
                return view.sports('#content-block');
            },
            '/survivor': () => {
                return view.survivor('#content-block');
            },
            '*': () => {
                appRouter.navigate('/')
            }
        })
        .notFound(() => {
            alert('Error! Router not found!')
        })
        .resolve()
})

// DOM

// daily marker
$(() => {
    let today = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Tursday", "Friday", "Saturday"];
    let color = "lightgrey";

    switch (days[today.getDay()]) {
        case "Sunday":
            $(".wrapper-daily .day.sunday").css("background", color);
            break;
        case "Monday":
            $(".wrapper-daily .day.monday").css("background", color);
            break;
        case "Tuesday":
            $(".wrapper-daily .day.sunday").css("background", color);
            break;
        case "Wednesday":
            $(".wrapper-daily .day.wednesday").css("background", color);
            break;
        case "Tursday":
            $(".wrapper-daily .day.tursday").css("background", color);
            break;
        case "Friday":
            $(".wrapper-daily .day.friday").css("background", color);
            break;
        case "Saturday":
            $(".wrapper-daily .day.saturday").css("background", color);
            break;

    }
})

// language button
$(() => {
    let isBG = false;
    $('#language').on('click', () => {
        isBG = !isBG;
        if (isBG) {
            $('#language').attr('src', './assets/images/gb.jpg');
        } else {
            $('#language').attr('src', './assets/images/bg.jpg');
        }
    });
})

// drop-down menu
$(() => {
    let isToggle = false;
    let $navbar = $('ul.menu-bar');
    $('.menu-bar-btn').on('click', function () {
        $(this).toggleClass("open");
        if (!isToggle) {
            $navbar.css('display', 'inherit');
        } else {
            $navbar.css('display', 'none');
        }

        isToggle = !isToggle;
    });

    let isToggleFoot = false;
    let $navbarfoot = $('ul.menu-bar-foot');
    $('.menu-bar-btn-foot').on('click', () => {
        if (!isToggleFoot) {
            $navbarfoot.css('display', 'inherit');
        } else {
            $navbarfoot.css('display', 'none');
        }

        isToggleFoot = !isToggleFoot;
    });

    $('.menu-bar li a').on('click', () => {
        $navbar.css('display', 'none');
        $('#overlay').hide();
        $('.lines-button').removeClass('close');
        isToggle = !isToggle;
    });


});

// clock
setInterval(() => {
    let d = new Date();
    $('.clock').html(d.toLocaleTimeString() + '<br>' + d.toDateString());
}, 1000);


