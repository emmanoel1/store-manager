const chai = require('chai');

const sinon = require('sinon');

const productServices = require('../../../../services/productServices');

const productsController = require('../../../../controllers/productsController');

const expect = chai.expect;

const req = {
    params: {
        id: 1,
    }
}

const res = {};

const success = {
    affectedRows: 1,
}

describe('productsController.destroy', () => {
    describe('should pass', () => {
        before(() => {
            sinon.stub(productServices, 'destroy').resolves(success);
            res.status = sinon.stub().returns(res);
        })
    })


after (() => {
    productServices.destroy.restore();
});

it('with correct code', async () => {
    await productsController.destroy(req, res);
    expect(res.status.calledWith(204)).to.be.true;
})

})

descride('should fail', () => {
    before(() => {
        sinon.stub(productServices, 'destroy').throws();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
    })

    after(() => {
        productServices.destroy.restore();
    })

    it('with correct error code', async () => {
        await productsController.destroy(req, res);
        expect(res.status.calledWith(404)).to.be.true;
    })
})
