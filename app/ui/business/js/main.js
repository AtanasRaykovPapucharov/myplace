$(() => {
    const appRouter = new Navigo(null, true)
    appRouter
        .on({
            '/blog/:id': (params) => {
                data.getBlogById(params.id).then((blog) => {
                    return view.singleObject('#title', blog);
                })
            },
            '/books': () => {
                return view.books('#title');
            },
            '/music': () => {
                return view.music('#title');
            },
            '/games': () => {
                return view.games('#title');
            },
            '/movies': () => {
                return view.movies('#title');
            },
            '/writing': () => {
                return view.writing('#content-block');
            },
            '/sports': () => {
                return view.sports('#content-block');
            },
            '/survivor': () => {
                return view.survivor('#title');
            },
            '/addnew': () => {
                let href = document.location.href;
                let indexStart = document.location.origin.length + 1;
                let indexEnd = href.length - 8;
                return view.addnew('#title', { role: href.substring(indexStart, indexEnd) });
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