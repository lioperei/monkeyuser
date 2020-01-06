const TOP_LATEST_BUTTON = '(//div[@title="fresh out of the oven"])[1]';
const BOTTOM_LATEST_BUTTON = '(//div[@title="fresh out of the oven"])[2]';


describe('Latest comic test', () =>{
  // Test of the random comic button 
  describe('Home Page Tests', () => {
    // Tests the latest comic buttons on the homepage of the site
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('views a random comic from the top of the page', () => {
      cy.xpath(TOP_LATEST_BUTTON).click();
      cy.url().should('include', '?dir=last');
    });
  
    it('views a random comic from the bottom of the page', () => {
      cy.xpath(BOTTOM_LATEST_BUTTON).click();
      cy.url().should('include', '?dir=last');
    });  
  })

  describe('Comic Page Tests', () => {
    // Tests the latest comic buttons on an individual comic page
    beforeEach(() => {
      cy.visit('/2019/gut-feeling/');
    });
  
    it('views a random comic from the top of the page', () => {
      cy.xpath(TOP_LATEST_BUTTON).click();
      cy.url().should('include', '?dir=last');
    });
  
    it('views a random comic from the bottom of the page', () => {
      cy.xpath(BOTTOM_LATEST_BUTTON).click();
      cy.url().should('include', '?dir=last');
    });  
  })
})