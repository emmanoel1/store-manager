const { expect } = require('chai');

const sinon = require('sinon');

const productService = require('../../../../services/productServices');

const productModel = require('../../../../models/productModel');

const expectedFail = {
    fieldCount: 0,
    affectedRows: 0,
    insertId: 0,
    info: 'Rows matched: 0 Changed: 0 Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
};

const expectedSuccess = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 0 Changed: 0 Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
};

const update = {
    "name": "Teste",
    "quantity": 155,
};

describe('productServices.update', () => {
    describe('Should fail when', () => {
        before(() => {
            sinon.stub(productModel, 'update').resolves(expectedFail);
        });

        after(() => {
            productModel.update.restore();
        });

        it('No product is found', async () => {
            try {
                await productService.update(update)
                expect.fail();
            } catch (err) {
                expect(err.message).to.be.eql("Product not found");
            }
        });
    });

    describe('Should pass when', () => {
        before(() => {
            sinon.stub(productModel, 'update').resolves(expectedSuccess);
        });

        after(() => {
            productModel.update.restore();
        });

        it('A product is found', async () => {
            const result = await productService.update(update);
            expect(result.affectedRows).to.be.eql(1);
        });
    });
});
