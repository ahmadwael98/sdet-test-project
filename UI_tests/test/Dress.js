module.exports = {
    'Search for Dress on My Store': function (browser) {
      const homePage = browser.page.Dress_objects();
      var Search = "dress"

      homePage
        .navigate()
        .searchForItem(Search)
        .verifySearch(Search)

      browser.end();
    }
  };
  