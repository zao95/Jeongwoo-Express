module.exports = (mongoose) =>
    mongoose.model(
        'user',
        mongoose.Schema(
            {
                username: { type: String },
                password: { type: String },
                name: { type: String },
                telephone: { type: String },
            },
            { timestamps: true }
        )
    )
