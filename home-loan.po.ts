import org.openqa.selenium.By;

export class HomeLoanPO {
  get appicationType() {
      return this.findElement(by.id('application_type_single'));
  }

  get dependancts() {
      return this.findElement(by.css('.borrow__question__answer--select'));
  }

  get propertyType() {
      return this.findElement(by.id('borrow_type_home'));
  }

  get income() {
     return this.findElement(by.css('[aria-describedby="q2q1i1 q2q1i2"]'));
  } 

   get otherIncome() {
     return this.findElement(by.css('[aria-describedby="q2q2i1 q2q2i2"]'));
  } 

  get livingExpense() {
     return this.findElement(by.css('[aria-describedby="q3q1i1 q3q1i2"]'));
  } 

  get homeLoan() {
     return this.findElement(by.css('[aria-describedby="q3q2i1 q3q2i2"]'));
  } 

  get otherLoan() {
     return this.findElement(by.css('[aria-describedby="q3q3i1 q3q3i2"]'));
  } 
  
  get otherLCommitments() {
     return this.findElement(by.css('[aria-describedby="q3q4i1 q3q4i2"]'));
  } 
  
  get creditCardLimit() {
     return this.findElement(by.css('[aria-describedby="q3q5i1"]'));
  } 
  
   get workOutButton() {
      return this.findElement(by.id('btnBorrowCalculater'));
  }
  
   get startOver() {
     return this.findElement(by.css('.borrow__result button[aria-label="Start over"]'));
  } 
  
  get result() {
    return this.findElement(by.css('.borrow__result'));
  }
  
  get errorText() {
    return this.findElement(by.css('.borrow__error__text'));
  }
}
