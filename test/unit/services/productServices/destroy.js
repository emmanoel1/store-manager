const { expect } = require('chai');

const sinon = require('sinon');

const productService = require('../../../../services/productServices');

const productModel = require('../../../../models/productModel');

const expectedFail = {
    fieldCount: 0,
    affectedRows: 0,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
};

const expectedSuccess = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
};

const ID = 1;

describe('productServices.destroy', () => {
    describe('Should fail when', () => {
        before(() => {
            sinon.stub(productModel, 'destroy').resolves(expectedFail);
        });

        after(() => {
            productModel.destroy.restore();
        });

        it('Product is not found in the data base', () => {
            try {
                await productService.destroy(ID)
                expect.fail()
            } catch (err) {
                expect(err.message).to.eql('Product not found')
            }
        });
    });

    describe('Should pass when', () => {
        before(() => {
            sinon.stub(productModel, 'destroy').resolves(expectedSuccess);
        });

        after(() => {
            productModel.destroy.restore();
        });

        it('Product is found in the data base', async () => {
            const result = await productService.destroy(ID);
            expect(result.affectedRows).to.be.eql(1);
        });
    });
});
