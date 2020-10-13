module.exports = app => {
    app.get('/api/hanghoa/item', async (req, res) => {
        try {
            let result = await app.model.hanghoa.get(req.query._id);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.get('/api/hanghoa/page', async (req, res) => {
        try {
            const pageNumber = parseInt(req.query.pageNumber),
                pageSize = parseInt(req.query.pageSize),
                condition = req.query.condition ? JSON.parse(req.query.condition) : null;
            let result = await app.model.hanghoa.getPage(pageNumber, pageSize, condition);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.get('/api/hanghoa/all', async (req, res) => {
        try {
            const condition = req.query.condition ? JSON.parse(req.query.condition) : null;
            const result = await app.model.hanghoa.getAll(condition);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.post('/api/hanghoa', async (req, res) => {
        try {
            let result = await app.model.hanghoa.create(req.body);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.put('/api/hanghoa', async (req, res) => {
        try {
            let result = await app.model.hanghoa.update(req.body._id, req.body.changes);
            res.send({ error: null, result });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.delete('/api/hanghoa', async (req, res) => {
        try {
            await app.model.hanghoa.delete(req.query._id);
            res.send({ error: null });
        } catch (error) {
            res.send({ error: error.message });
        }
    });
}