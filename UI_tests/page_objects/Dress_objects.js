const { verify } = require("nightwatch");

module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',
    elements: {
        searchInput: '#search_query_top',
        searchButton: '#searchbox > button',
        productList: '#product_list',
        productItem: '.product-container'
    },
    commands: [{
        searchForItem(item) {
            this
                .setValue('@searchInput', item)
                .click('@searchButton')
                .waitForElementVisible('@productList', 3000);
            return this;
        },

        verifySearch(search) {
            const self = this;
            
        
            return new Promise((resolve, reject) => {
                this.api.elements('css selector', this.elements.productItem.selector, function(result) {
                    console.log('Result from elements command:', result);
                    const count = result.value.length;
                    console.log('Total products found:', count);
                    
                    if (count > 0) {
                        let matchingProducts = 0; 
                        let unmatchingProducts = 0;
                        const promises = []; 

                    
                        for (let i = 0; i < count; i++) {
                            const element = result.value[i];
                            const elementId = Object.keys(element)[0]; 
                            console.log('Element ID:', element[elementId]);
                            
                           
                            promises.push(new Promise((resolve) => {
                                self.api.elementIdText(element[elementId], function(textResult) {
                                    const text = textResult.value || ''; 
                                    console.log('Product text:', text);
                                    
                                   
                                    if (text.toLowerCase().includes(search.toLowerCase())) {
                                        matchingProducts++;
                                        self.assert.ok(true, `Product text contains "${search}": ${text}`);
                                    } else {
                                        unmatchingProducts++;
                                        console.log(`Product does not contain "${search}": ${text}`); 
                                    }
                                    resolve(); 
                                });
                            }));
                        }
                        
                     
                        Promise.all(promises).then(() => {
                            console.log(`Total matching products: ${matchingProducts}`);
                            console.log(`Total unmatching products: ${unmatchingProducts}`);
                            
                            
                            resolve();
                        });
                    } else {
                        console.log('No product items found.');
                        resolve(); 
                    }
                });
            });
        }
    }]
};
