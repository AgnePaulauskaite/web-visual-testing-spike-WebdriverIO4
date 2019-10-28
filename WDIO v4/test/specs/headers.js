let expect = require('chai').expect;

function comparisonOfScreenShoots (results) {

 results.forEach((result, idx) => expect (result.isExactSameImage, 'Image ' + idx + ' is not the same').to.be.true); //loops through the results to see if it matches
}

describe ('homepage', function () {

    beforeEach(function(){
    browser.url('/united-states/2019/10/19/the-other-african-americans/?ecdesign=n'); //just load homepage

    });

    it ('Related articles should look the same', function () {
       let report = browser.checkElement('.related-articles')
       

       comparisonOfScreenShoots(report);
    });
});
