module.exports = app => {
    const schema = new app.db.Schema({
        name: {
            type: String,
            required: [true, 'Tên hàng không được để trống'],
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        active: {
            type: Boolean,
            default: true
        },
        variants: [
            {
                size: {
                    type: app.db.Schema.ObjectId,
                    ref: 'Size',
                },
                price: {
                    type: Number,
                    required: [true, 'Giá hàng không được để trống'],
                    default: 0
                },
                ammount: {
                    cs1: {
                        type: Number,
                        required: [true, 'Số lượng hàng cơ sở 1 không được để trống'],
                        default: 0
                    },
                    cs2: {
                        type: Number,
                        required: [true, 'Số lượng hàng cơ sở 2 không được để trống'],
                        default: 0
                    }
                },
                color: {
                    type: app.db.Schema.ObjectId,
                    ref: 'Color'
                },
                image: [
                    { type: String, trim: true }
                ],
                sexes: {
                    type: String,
                    enum: ['Nam', 'Nữ']
                },
                active: {
                    type: Boolean,
                    default: true
                }
            }
        ],
        size: [{ type: app.db.Schema.ObjectId, ref: 'Size', unique: true }],
        color: [{ type: app.db.Schema.ObjectId, ref: 'Color', unique: true }],
        sexes: [{ type: String, enum: ['Nam', 'Nữ'], unique: true }]
    }, { timestamps: true });

    const model = app.modelAreadyDeclared('Hanghoa') ? app.db.model('Hanghoa') : app.db.model('Hanghoa', schema);

    app.model.hanghoa = {
        create: async (data) => await model.create(data).catch(_ => { throw new Error('Không thể tạo hàng') }),

        getPage: async (pageNumber, pageSize, condition) => {
            let totalItem = await model.countDocuments(condition).exec().catch(_ => { throw new Error('Không thể đếm số hàng') });
            let result = { totalItem, pageSize, pageTotal: Math.ceil(totalItem / pageSize) };
            result.pageNumber = pageNumber === -1 ? result.pageTotal : Math.min(pageNumber, result.pageTotal);
            let skipNumber = (result.pageNumber > 0 ? result.pageNumber - 1 : 0) * result.pageSize;
            let items = await model.find(condition).sort({ createdAt: -1 }).skip(skipNumber).limit(result.pageSize).exec().catch(_ => { throw new Error('Không thể lấy danh sách hàng') });
            result.list = items || [];
            return result;
        },

        get: async (condition) => await (typeof condition == 'object' ? model.findOne(condition) : model.findById(condition)).exec().catch(_ => { throw new Error('Không thể lấy chi tiết hàng') }),

        getAll: async (condition) => await model.find(condition).sort({ createdAt: -1 }).exec().catch(_ => { throw new Error('Không thể lấy chi tiết hàng') }),

        update: async (_id, $set) => await model.findOneAndUpdate({ _id }, { $set }, { new: true }).exec().catch(_ => { throw new Error('Không thể cập nhật hàng') }),

        delete: async (_id) => await model.findOneAndDelete({ _id }).exec().catch(_ => { throw new Error('Không thể xoá hàng') }),

    }
}