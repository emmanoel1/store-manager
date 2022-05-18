const { expect } = require('chai');

const sinon = require('sinon');

const productServices = require('../../../../services/productServices');

const productsController = require('../../../../controllers/productsController');

const req = {};

const res = {};

describe('productsController.allProducts', () => {
    describe('Should fail when', () => {
        before(() => {
            sinon.stub(productServices, 'getAll').resolves();
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
        });

        after(() => productServices.getAll.restore());

        it('No product is returned', async () => {
            await productsController.allProducts(req, res);
            expect(res.status.calledWith(200)).to.be.true;
        });
    });

        describe('Should pass when', () => {
            before(() => {
                sinon.stub(productServices, 'getAll').throws();
                res.status = sinon.stub().returns(res);
                res.json = sinon.stub().returns();
            });

            after(() => productServices.getAll.restore());

            it('Product is found in the data base', async() => {
                await productsController.allProducts(req, res);
                expect(res.status.calledWith(500)).to.be.true;
            });
        });
});
