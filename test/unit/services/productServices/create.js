const { expect } = require('chai');

const sinon = require('sinon');

const productService = require('../../../../services/productServices');

const productModel = require('../../../../models/productModel');

const createProduct = {
    "name": "Any product",
    "quantity": 30,
};

const expected = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
};

const product = ['existant product'];

const noProduct = [];

describe('productServices.create', () => {
    describe('Should fail when', () => {
        before(() => {
            sinon.stub(productModel, 'getByName').resolves(product)
            sinon.stub(productModel, 'create').resolves(expected)
        });

        after(() => {
            productModel.getByName.restore();
            productModel.create.restore();
        });

        it('Product already exists', async () => {
            try {
                await productService.create(createProduct);
                expect.fail()
            } catch (err) {
                expect(err.message).to.be.eql('Product already exists');
            }
        });
    });

    describe('Should pass when', () => {
        before(() => {
            sinon.stub(productModel, 'getByName').resolves(noProduct);
            sinon.stub(productModel, 'create').resolves(expected);
        });

        after(() => {
            productModel.getByName.restore();
            productModel.create.restore();
        });

        it('No previous product exists', async () => {
            const result = await productService.create(createProduct);
            expect(result.affectedRows).to.be.eql(1);
        });
    });
});
