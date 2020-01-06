const TOP_RANDOM_BUTTON = '(//div[@title="random"])[1]';
const BOTTOM_RANDOM_BUTTON = '(//div[@title="random"])[2]';


describe('Random comic test', () =>{
  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  // Test of the random comic button 
  describe('Home Page Tests', () => {
    // Tests the random comic buttons on the homepage of the site
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('views a random comic from the top of the page', () => {
      cy.xpath(TOP_RANDOM_BUTTON).click();
      cy.url().should('include', '&dir=random');
    });
  
    it('views a random comic from the bottom of the page', () => {
      cy.xpath(BOTTOM_RANDOM_BUTTON).click();
      cy.url().should('include', '&dir=random');
    });  
  })

  describe('Comic Page Tests', () => {
    // Tests the random comic buttons on an individual comic page
    beforeEach(() => {
      cy.visit('/2019/gut-feeling/');
    });
  
    it('views a random comic from the top of the page', () => {
      cy.xpath(TOP_RANDOM_BUTTON).click();
      cy.url().should('include', '&dir=random');
    });
  
    it('views a random comic from the bottom of the page', () => {
      cy.xpath(BOTTOM_RANDOM_BUTTON).click();
      cy.url().should('include', '&dir=random');
    });  
  })
})