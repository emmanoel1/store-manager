const chai = require('chai');

const sinon = require('sinon');

const saleServices = require('../../../../services/saleServices');

const salesController = require('../../../../controllers/salesController');

const expect = chai.expect;

const saleReturnMock = [
    {
        "productId": 1,
        "quantity": 5,
        "date": "2022-04-25T04:36:38.000Z"
    },
    {
        "productId": 2,
        "quantity": 10,
        "date": "2022-04-25T04:36:38.000Z"
    }
];

const req = {
    params: {
        id: 1,
    }
}

const res = {}

describe('salesController.getById', () => {
    describe('should pass', () => {
        before(() => {
            sinon.stub(saleServices, 'getById').resolves(saleReturnMock);
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
        })
        
        after(() => {
            saleServices.getById.restore();
        })
        
        it('with correct code', async () => {
            await salesController.getById(req, res)
            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith(saleReturnMock)).to.be.true;
        })
    })

    describe('should fail', () => {
        before(() => {
            sinon.stub(saleServices, 'getById').throws()
            res.status = sinon.stub().returns(res)
            res.json = sinon.stub().returns();
        })
        after(() => {
            saleServices.getById.restore();
        })
        it('with correct error code', async() => {
            await salesController.getById(req, res);
            expect(res.status.calledWith(404)).to.be.true;
        })
    })
})
