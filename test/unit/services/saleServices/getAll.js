const { expect } = require('chai');

const sinon = require('sinon');

const saleService = require('../../../../services/saleServices');

const saleModel = require('../../../../models/saleModel');

const expected = [
    {
        sale_id: 1,
        product_id: 1,
        quantity: 5,
        date: "2022-04-25T04:36:38.000Z",
    },
    {
        sale_id: 1,
        product_id: 2,
        quantity: 10,
        date: "2022-04-25T04:36:38.000Z",
    },
    {
        sale_id: 2,
        product_id: 3,
        quantity: 15,
        date: "2022-04-25T04:36:38.000Z",
    },
];

describe('saleServices.getAll', () => {
    describe('Should pass when', () => {
        before(() => {
            sinon.stub(saleModel, 'getAll');
        })
        after(() => {
            saleModel.getAll.restore();
        })
        it('Correct URL is typed', () => {
            const result = await saleService.getAll();
            expect(result).to.be.eql(expected);
        });
    });
})