const chai = require('chai');

const sinon = require('sinon');

const saleServices = require('../../../../services/saleServices');

const salesController = require('../../../../controllers/salesController');

const expect = chai.expect;

const req = {};

const res = {};

describe('salesController.getAll', () => {
    describe('should pass', () => {
        before(() => {
            sinon.stub(saleServices, 'getAll').resolves();
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns()
        });

        after(() => {
            saleServices.getAll.restore();
        });

        it('with correct code', async () => {
            await salesController.getAll(req, res);
            expect(res.status.calledWith(200)).to.be.true;
        });
    });
    
    describe('should fail', () => {
        before(() => {
            sinon.stub(saleServices, 'getAll').throws();
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
        })
        
        after(() => {
            saleServices.getAll.restore();
        })

        it('with correct error code', async () => {
            await salesController.getAll(req, res);
            expect(res.status.calledWith(500)).to.be.true;
        });
    });
});
