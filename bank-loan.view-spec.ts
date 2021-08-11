import { HomeLoanPO } from "../../../home-loan.po";

describe('ANZ Home Loan', () => {
  beforeAll(async () => {
      WebDriver driver = new FirefoxDriver();
      driver.manage().window().maximise();
      driver.get('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/');
  });
  
  describe('Home Loan', () => {
    beforeAll(async () => {
        await driver.applicationType.click();
        await driver.dependancts.click();
        await driver.propertyType.click();
        await driver.income.click();
        await driver.income.sendkeys('80000');
        await driver.outherIncome.click();
        await driver.outherIncome.sendkeys('10000');
        await driver.livingExpense.click();
        await driver.livingExpense.sendkeys('500');
        await driver.otherLoan.click();
        await driver.otherLoan.sendkeys('100');
        await driver.creditCardLimit.click();
        await driver.creditCardLimit.sendkeys('10000');
    });
  
    it('Validate borrow estimation for a person', async () => {
        await driver.workOutButton.click();
        expect(await driver.result.getText()).toEqual('479,000');
    });
    
    it('Validate start over button to clear the form', async () => {
        await driver.startOver.click();
        expect(await driver.income.getText()).toEqual('0');
    });

    it('Validate error message when uesr enter the living expense as $1', async () => {
        await driver.livingExpense.click();
        await driver.livingExpense.sendkeys('1');
        expect(await driver.result.getText()).toEqual("Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641.");
    });
  });
});
