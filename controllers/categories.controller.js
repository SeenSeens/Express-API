const Category= require("../models/categories.model");
// Lấy tất cả chuyên mục
const getCategories = async (req, res) => {
    try {
        const category = await Category.find({});
        res.status(200).json(category);
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
}
// Lấy 1 chuyên mục
const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate('product');
        res.status(200).json(category);
    }catch (e) {
        res.status(500).json({ message: e.message })
    }
}
// Thêm mới chuyên mục
const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(200).json(category);
    }catch (e) {
        res.status(500).json({ message: e.message });
    }
}
// Cập nhật chuyên mục
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndUpdate(id, req.body);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        const updatedCategory = await Category.findById(id);
        res.status(200).json(updatedCategory);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
// Xóa chuyên mục
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        // await Product.updateMany({ product: id }, { product: null })
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}