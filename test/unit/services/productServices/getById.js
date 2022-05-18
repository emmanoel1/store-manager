const { expect } = require('chai');

const sinon = require('sinon');

const productService = require('../../../../services/productServices');

const productModel = require('../../../../models/productModel');

const expectedSuccess = {
    "id": 3,
    "name": "Escudo do Capitão América",
    "quantity": 30,
};

describe('productService.getById', () => {
  describe('Should fail when', () => {
    before(() => {
        sinon.stub(productModel, 'getById').undefined;
    })

    after(() => {
        productModel.getById.restore();
    });

    it('No product is found', async ()=> {
        try {

        } catch (err) {
            expect(err.message).to.be.eql('Product not found');
        }
    });
  });

  describe('Should pass when', () => {
      before(() => {
          sinon.stub(productModel, 'getById').resolves(expectedSuccess)
      })
      after(() => {
          productModel.getById.restore();
      });

      it('A product is found', async () => {
        const result = await productService.getById(3);
        expect(result).to.be.eql(expectedSuccess);
      });
  });
});
