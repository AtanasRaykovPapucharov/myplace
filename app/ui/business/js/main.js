$(() => {
    const SERVICE = {
        getBlogById: (params) => {
            data.getBlogById(params.id).then((blog) => {
                return view.singleObject('#content-block', blog);
            })
        },
        postBlog: () => {
            let formObj = {};
            $('#add-form-blog').serializeArray().forEach((el) => {
                formObj[el.name] = el.value;
            });

            let allTags = $('#all-tags').val();
            if (allTags) {
                formObj.tags = allTags.split(/[\s,;]+/);
                formObj.tags.forEach((tag) => {
                    tag = tag.toLowerCase();
                });
            }
            formObj.comments = [];
            formObj.date = new Date();

            data.postBlog(formObj)
                .then((resp) => {
                    notifier.success('Blog post success!');
                    let blog = 'http://' + window.location.host + '/blog';
                    $(location).attr('href', blog);
                    //document.location.assign(blog);
                })
                .catch((err) => {
                    console.log(err);
                    throw ('Server error: ' + err);
                })
        },
        addNew: () => {
            let href = document.location.href;
            let indexStart = document.location.origin.length + 1;
            let indexEnd = href.length - 8;
            return view.addnew('#title', { role: href.substring(indexStart, indexEnd) });
        }
    }

    const appRouter = new Navigo(null, true)
    appRouter
        .on({
            '/blog/:id': SERVICE.getBlogById,
            '/post/blog': SERVICE.postBlog,
            '/addnew': SERVICE.addNew,
            '/books': () => { return view.books('#title') },
            '/music': () => { return view.music('#title') },
            '/games': () => { return view.games('#title') },
            '/movies': () => { return view.movies('#title') },
            '/writing': () => { return view.writing('#content-block') },
            '/sports': () => { return view.sports('#content-block') },
            '/survivor': () => { return view.survivor('#title') },
            '*': () => { appRouter.navigate('/') }
        })
        .notFound(() => {
            alert('Error! Router not found!')
        })
        .resolve()
})