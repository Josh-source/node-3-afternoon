module.exports = {
    create: (req,res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} =req.body;
        dbInstance.creat_product([name, description, price, image_url])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: `Better Luck Next Time!`})
        });
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.read_product(id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: `Better Luck Next Time!`})
        });
    },
    getAll: (req,res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: `Better Luck Next Time!`})
        });
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req
        dbInstance.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: `Better Luck Next Time!`})
        });
    },
    deleteOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.delete_product(id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: `Better Luck Next Time!`})
        });
    }
}