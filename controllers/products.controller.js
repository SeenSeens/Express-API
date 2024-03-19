const Product = require("../models/products.model")
const Category = require("../models/categories.model");
// Lấy tất cả sản phẩm
const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
// Lấy 1 sảm phẩm
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
// Thêm mới sản phẩm
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        // Kiểm tra nếu có category được gửi từ client
        if (req.body.category) {
            // Tìm danh mục sản phẩm
            const category = await Category.findById(req.body.category);
            if ( !category ) {
                // Nếu danh mục không tồn tại, trả về một thông báo lỗi
                return res.status(404).json({ message: "Category not found" });
            }
            await category.updateOne({ $push: { books: product._id } });
        }
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
// Cập nhật sản phẩm
const updateProduct = async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
// Xóa sản phẩm
const deleteProduct = async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}