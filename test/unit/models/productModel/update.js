const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const productModel = require('../../../../models/productModel');

const expectedUpdate = {
    name: 'Traje de encolhimento',
    quantity: 12,
    id: 2,
};

const expectedReturn = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1 Changed: 0 Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
};

const unnexpectedUpdate = {
    name: 'Traje de encolhimento',
    quantity: 12,
    id: 1,
}

const unnexpectedReturn = {
    fieldCount: 0,
    affectedRows: 0,
    insertId: 0,
    info: 'Rows matched: 0 Changed: 0 Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
}

describe('productModel.update', () => {
  describe('Should pass when', () => {
      before(() => {
          sinon.stub(connection, 'execute').resolves([expectedReturn]);
      });

      after(() => {
          connection.execute.restore();
      });

      it('Correct data is provided', async () => {
          const result = await productModel.update(expectedUpdate);
          expect(result).to.be.equal(expectedReturn);
      });
  });

  describe('Should fail when', () => {
      before(() => {
          sinon.stub(connection, 'execute').resolves([unnexpectedReturn]);
      })

      after(() => {
          connection.execute.restore();
      });

      it('Incorrect data is provided', async () => {
          const result = await productModel.update(unnexpectedUpdate);
          expect(result).to.be.equal(unnexpectedUpdate);
      });
  });
});
