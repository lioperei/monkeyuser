const DATES = [
  {'xpath': '//div[@class="et"]/strong[text()="December  4, 2018"]/following-sibling::div', 'toc_date': 'December  4, 2018', 'post_date': '04 Dec 2018', 'url':  'https://www.monkeyuser.com/2018/trial-and/'},
  {'xpath': '(//div[@class="et"]/strong[text()="June 19, 2018"])[1]/following-sibling::div', 'toc_date': 'June 19, 2018', 'post_date': '19 Jun 2018', 'url': 'https://www.monkeyuser.com/2018/tbd/'},
  {'xpath': '(//div[@class="et"]/strong[text()="June 19, 2018"])[2]/following-sibling::div', 'toc_date': 'June 19, 2018', 'post_date': '19 Jun 2018', 'url': 'https://www.monkeyuser.com/2018/happy-flow/'},
  {'xpath': '//div[@class="et"]/strong[text()="May 30, 2017"]/following-sibling::div', 'toc_date': 'December  4, 2018', 'post_date': '30 May 2017', 'url':  'https://www.monkeyuser.com/2017/angular-vs-react/'},
];

const POST_DATE = '//div[@class="post"]/span[@class="post-date"]/time';


describe('Dated comic tests', () =>{
  
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/toc');
  });

  describe('first date', () => {

    it('selects the comic by image', () => {
      const date = DATES[0]
      cy.xpath(`${date.xpath}/a[@class="image-title"]`)
        .click();
      cy.xpath(POST_DATE).should('have.text', date.post_date);
      cy.url().should('equal', date.url);
    })

    it('selects the comic by text', () => {
      const date = DATES[0]
      cy.xpath(`${date.xpath}/a[@class="lazyload small-image"]`).click();
      cy.xpath(POST_DATE).should('have.text', date.post_date);
      cy.url().should('equal', date.url);
    })
  });
  
  describe('second date', () => {

    it('selects the comic by image', () => {
      const date = DATES[1]
      cy.xpath(`${date.xpath}/a[@class="image-title"]`).click();
      cy.xpath(POST_DATE).should('have.text', date.post_date);
      cy.url().should('equal', date.url);
    })

    it('selects the comic by text', () => {
      const date = DATES[1]
      cy.xpath(`${date.xpath}/a[@class="lazyload small-image"]`).click();
      cy.xpath(POST_DATE).should('have.text', date.post_date);
      cy.url().should('equal', date.url);
    })
  });

  describe('third date', () => {

    it('selects the comic by image', () => {
      const date = DATES[2]
      cy.xpath(`${date.xpath}/a[@class="image-title"]`).click();
      cy.xpath(POST_DATE).should('have.text', date.post_date);
      cy.url().should('equal', date.url);
    })

    it('selects the comic by text', () => {
      const date = DATES[2]
      cy.xpath(`${date.xpath}/a[@class="lazyload small-image"]`).click();
      cy.xpath(POST_DATE).should('have.text', date.post_date);
      cy.url().should('equal', date.url);
    })
  });

  describe('fourth date', () => {

    it('selects the comic by image', () => {
      const date = DATES[3]
      cy.xpath(`${date.xpath}/a[@class="image-title"]`).click();
      cy.xpath(POST_DATE).should('have.text', date.post_date);
      cy.url().should('equal', date.url);
    })

    it('selects the comic by text', () => {
      const date = DATES[3]
      cy.xpath(`${date.xpath}/a[@class="lazyload small-image"]`).click();
      cy.xpath(POST_DATE).should('have.text', date.post_date);
      cy.url().should('equal', date.url);
    })
  });
})