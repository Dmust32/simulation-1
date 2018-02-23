module.exports = {
    getShelves: (res, req, next)=> {
        const dbInstance = req.app.get('db');
        dbInstance.getShelves()
        .then(shelves => res.send(shelves))
    },
    getOneShelf: (res, req, next)=> {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.getOneShelf([params.id])
        .then(shelf => res.send(shelf))
    }

}