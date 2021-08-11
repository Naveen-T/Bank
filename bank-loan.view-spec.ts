import { HomeLoanPO } from "../../../home-loan.po";
import { GoTo Page } from "../../../generic-helpers";

let homeLoan : HomeLoanPO;

describe('ANZ Home Loan', () => {
  beforeAll(async () => {
      await GoToPage.navigateTo('hhtps://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/');
  });
  
  describe('Home Loan', () => {
    beforeAll(async () => {
        await homeLoan.applicationType.click();
        await homeLoan.dependancts.click();
        await homeLoan.propertyType.click();
        await homeLoan.income.click();
        await homeLoan.income.sendkeys('80000');
        await homeLoan.outherIncome.click();
        await homeLoan.outherIncome.sendkeys('10000');
        await homeLoan.livingExpense.click();
        await homeLoan.livingExpense.sendkeys('500');
        await homeLoan.otherLoan.click();
        await homeLoan.otherLoan.sendkeys('100');
        await homeLoan.creditCardLimit.click();
        await homeLoan.creditCardLimit.sendkeys('10000');
    });
  
    it('Validate borrow estimation for a person', async () => {
        await homeLoan.workOutButton.click();
        expect(await homeLoan.result.getText()).toEqual('$479,000');
    });
    
    it('Validate start over button to clear the form', async () => {
        await homeLoan.startOver.click();
        expect(await homeLoan.workOutButton.isDisplayed()).toEqual(true);
    });

    it('Validate error message when uesr enter the living expense as $1', async () => {
        await homeLoan.livingExpense.click();
        await homeLoan.livingExpense.sendkeys('1');
        expect(await homeLoan.result.getText()).toEqual("Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641.");
    });
  });
});
