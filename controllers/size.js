module.exports = app => {
    app.get('/api/size/item', async (req, res) => {
        try {
            let result = await app.model.size.get(req.query._id);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.get('/api/size/page', async (req, res) => {
        try {
            const pageNumber = parseInt(req.query.pageNumber),
                pageSize = parseInt(req.query.pageSize),
                condition = req.query.condition ? JSON.parse(req.query.condition) : null;
            let result = await app.model.size.getPage(pageNumber, pageSize, condition);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.get('/api/size/all', async (req, res) => {
        try {
            const condition = req.query.condition ? JSON.parse(req.query.condition) : null;
            const result = await app.model.size.getAll(condition);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.post('/api/size', async (req, res) => {
        try {
            let result = await app.model.size.create(req.body);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.put('/api/size', async (req, res) => {
        try {
            let result = await app.model.size.update(req.body._id, req.body.changes);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.delete('/api/size', async (req, res) => {
        try {
            await app.model.size.delete(req.query._id);
            res.send({ error: null });
        } catch (error) {
            res.send({ error: error.message });
        }
    });
}