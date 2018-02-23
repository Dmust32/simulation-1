module.exports = {
    getShelves: (req, res, next)=> {
        const dbInstance = req.app.get('db');
        dbInstance.getShelves()
        .then(shelves => res.send(shelves))
    },
    getOneShelf: (req, res, next)=> {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.getOneShelf([params.id])
        .then(shelf => res.send(shelf))
    }

}