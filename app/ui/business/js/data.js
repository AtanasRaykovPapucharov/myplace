function getData(url) {
    $.get(url, (data) => {
        return data
    });
}

const filesPath = './js/data/'
const data = {
    getBlogs: getData(filesPath + 'blogs.json'),
    getCollections: getData(filesPath + 'collections.json'),
    getCvs: getData(filesPath + 'cvs.json'),
    getDom: getData(filesPath + 'dom.json')
}