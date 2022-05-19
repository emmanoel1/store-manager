const connection = require('./connection');

const allProducts = async () => {
    const query = 'SELECT * FROM StoreManager.products;';
    const [data] = await connection.execute(query);
    return data;
};

const productsById = async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
    const [data] = await connection.execute(query, [id]);
    return data[0];
};

const createProduct = async (name, quantity) => {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);';
    const [data] = await connection.execute(query, [name, quantity]);
    return {
        id: data.insertId,
        name,
        quantity,
    };
};

const editProduct = async (id, name, quantity) => {
    const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;';
    await connection.execute(query, [name, quantity, id]);
    return {
        id,
        name,
        quantity,
    };
};

const deleteProduct = async (id) => {
    const query = 'DELETE FROM StoreManager.products WHERE id = ?;';
    await connection.execute(query, [id]);
};

module.exports = {
    allProducts,
    productsById,
    createProduct,
    editProduct,
    deleteProduct,
};