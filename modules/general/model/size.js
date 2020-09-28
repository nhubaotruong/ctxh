module.exports = (app) => {
    const schema = new app.db.Schema({
        name: {
            type: String,
            required: [true, 'Tên size không được để trống'],
            trim: true
        },
    }, { timestamps: true });

    const model = app.modelAreadyDeclared('Size') ? app.db.model('Size') : app.db.model('Size', schema);

    app.model.size = {
        create: async (data) => await model.create(data).catch((_) => { throw new Error('Không thể tạo size') }),

        getPage: async (pageNumber, pageSize, condition) => {
            let totalItem = await model.countDocuments(condition).exec().catch((_) => { throw new Error('Không thể đếm số size') });
            let result = { totalItem, pageSize, pageTotal: Math.ceil(totalItem / pageSize) };
            result.pageNumber = pageNumber === -1 ? result.pageTotal : Math.min(pageNumber, result.pageTotal);
            let skipNumber = (result.pageNumber > 0 ? result.pageNumber - 1 : 0) * result.pageSize;
            let items = await model.find(condition).sort({ createdAt: -1 }).skip(skipNumber).limit(result.pageSize).exec().catch((_) => { throw new Error('Không thể lấy danh sách size') });
            result.list = items || [];
            return result;
        },

        get: async (condition) => await (typeof condition == 'object' ? model.findOne(condition) : model.findById(condition)).exec().catch((_) => { throw new Error('Không thể lấy chi tiết size') }),

        getAll: async (condition) => await model.find(condition).sort({ createdAt: -1 }).exec().catch((_) => { throw new Error('Không thể lấy chi tiết size') }),

        update: async (_id, $set) => await model.findOneAndUpdate({ _id }, { $set }, { new: true }).exec().catch(_ => { throw new Error('Không thể cập nhật size') }),

        delete: async (_id) => await model.findOneAndDelete({ _id }).exec().catch((_) => { throw new Error('Không thể xoá size') }),
    }
}