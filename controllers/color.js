module.exports = app => {
    app.get('/api/color/item', async (req, res) => {
        try {
            let result = await app.model.color.get(req.query._id);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.get('/api/color/page', async (req, res) => {
        try {
            const pageNumber = parseInt(req.query.pageNumber),
                pageSize = parseInt(req.query.pageSize),
                condition = req.query.condition ? JSON.parse(req.query.condition) : null;
            let result = await app.model.color.getPage(pageNumber, pageSize, condition);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.get('/api/color/all', async (req, res) => {
        try {
            const condition = req.query.condition ? JSON.parse(req.query.condition) : null;
            const result = await app.model.color.getAll(condition);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.post('/api/color', async (req, res) => {
        try {
            let result = await app.model.color.create(req.body);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.put('/api/color', async (req, res) => {
        try {
            let result = await app.model.color.update(req.body._id, req.body.changes);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.delete('/api/color', async (req, res) => {
        try {
            await app.model.color.delete(req.query._id);
            res.send({ error: null });
        } catch (error) {
            res.send({ error: error.message });
        }
    });
}