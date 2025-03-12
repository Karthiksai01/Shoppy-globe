import productModel from "../model/products.model.js";

// ✅ Create Product
export function createProduct(req, res) {
    const { name, price, description, stock } = req.body;

    if (!name || !price || !description || !stock) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const newProduct = new productModel({ name, price, description, stock });

    newProduct.save()
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500).json({ message: err.message }));
}

// ✅ Get All Products
export function getAllProducts(req, res) {
    productModel.find()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ message: err.message }));
}

// ✅ Get Single Product by ID
export function getProductById(req, res) {
    productModel.findById(req.params.id)
        .then(product => {
            if (!product) return res.status(404).json({ message: "Product not found" });
            res.json(product);
        })
        .catch(err => res.status(500).json({ message: err.message }));
}

// ✅ Update Product by ID
export function updateProduct(req, res) {
    productModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(500).json({ message: err.message }));
}

// ✅ Delete Product by ID
export function deleteProduct(req, res) {
    productModel.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: "Product deleted successfully" }))
        .catch(err => res.status(500).json({ message: err.message }));
}
