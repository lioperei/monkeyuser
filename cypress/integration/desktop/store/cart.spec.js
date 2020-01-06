const FIRST_ITEM = '(//div[@class="grid-view-item product-card"])[1]/a'
const ADD_TO_CART = '//button[@name="add"]';



describe('Shopping cart tests', () =>{

  beforeEach(() => {
    cy.visit('https://store.monkeyuser.com');
  })

  it('adds the first product to the cart', () => {
    cy.xpath(FIRST_ITEM).click();
    cy.xpath(ADD_TO_CART).click();
  });
})