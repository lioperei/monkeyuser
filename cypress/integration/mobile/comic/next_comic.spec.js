const TOP_NEXT = '(//div[@title="next"])[1]';
const BOTTOM_NEXT = '(//div[@title="next"])[2]';
const SECOND_COMIC = 'https://www.monkeyuser.com/2016/do-not-disturb-privacy/?sc=true&dir=next';


describe('Next comic test', () =>{
  beforeEach(() => {
    cy.viewport('iphone-6');
  })

  // Test of the next comic button 
  describe('Home Page Tests', () => {
    // Tests that the next button does not appear on the homepage of the site
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('next button should not appear on the homepage', () => {
      cy.xpath(TOP_NEXT).should('not.exist');
      cy.xpath(BOTTOM_NEXT).should('not.exist');
    });
  
  })

  describe('Latest Comic Tests', () => {
    // Tests that the next comic button does not appear on the latest comic page
    const TOP_LATEST_BUTTON = '(//div[@title="fresh out of the oven"])[1]';

    beforeEach(() => {
      cy.visit('/');
      cy.xpath(TOP_LATEST_BUTTON).click()
    });
  
    it('next button should not appear on the homepage', () => {
      cy.xpath(TOP_NEXT).should('not.exist');
      cy.xpath(BOTTOM_NEXT).should('not.exist');
    });  
  });

  describe('First Comic Tests', () => {
    // Tests the latest comic buttons on an individual comic page
    const TOP_FIRST_COMIC_BUTTON = '(//div[@title="how it all began"])[1]';

    beforeEach(() => {
      cy.visit('/');
      cy.xpath(TOP_FIRST_COMIC_BUTTON).click()
    });
  
    it('top next button should appear on the homepage', () => {
      cy.xpath(TOP_NEXT).click();
      cy.url().should('equal', SECOND_COMIC)
    });  

    it('bottom next button should appear on the homepage', () => {
      cy.xpath(BOTTOM_NEXT).click();
      cy.url().should('equal', SECOND_COMIC)
    });  
  })
})