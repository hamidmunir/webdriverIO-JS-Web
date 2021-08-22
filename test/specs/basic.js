describe('webdriver.io page', () => {

    it('should have the right title', async() => {
        browser.url('https://www.ebay.com/')
        browser.maximizeWindow()
        const title = browser.getTitle()
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay')
        
    });

    it('should search a product on amazon', async() => {
      //using async execution
      const search= await $('#gh-ac') ;//search field
      
      const searchButton= await $('#gh-btn');//search button
      await search.click();
      //search.clearValue();
      await search.addValue('Mobile phone');
      await searchButton.click();
      await expect(search).toHaveValue('mobile phone');

    });
    it('should add product', async() => {
        //comment addedd
  
      });

});