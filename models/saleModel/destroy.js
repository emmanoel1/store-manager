const connection = require('../connection'); 

async function destroy(id) {
    const query = 'DELETE FROM storeManager.sales_products WHERE sale_id = ?';
    const [sales] = await connection.execute(query, [id]);

    return sales;
}

module.exports = destroy; 
