const mongoose= require("mongoose");
const CategorySchema = new mongoose.Schema({
    name: { // Tên chuyên mục
        type: String,
        required:true
    },
    image: {
        type: String,
        required: false,
    },
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;