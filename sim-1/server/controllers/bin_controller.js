module.exports = {
    getBin: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        dbInstance.getBin([params.id])
        .then(bin => res.send(bin))
    },

    editBin: (req, res, next) =>{
        const dbInstance = req.app.get('db');
        const {params} = req;
        const {item_name, item_price} = req.body;
        dbInstance.editBin([params.id, item_name, item_price])
        .then(bin => res.send(bin))
    },

    deleteBin: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        dbInstance.deleteBin([params.id])
        .then(() => res.send())
    },

    // createBin: (req, res, next) => {
    //     const dbInstance = req.app.get('db');
    //     const { }
    // }
}