let expect = require('chai').expect;

function isWithinMisMatchTolerance (results) {

 results.forEach((result, idx) => expect (result.isExactSameImage, ' Image ' + idx + ' is not the same').to.be.true); //loops through the results to see if it matches
}

describe ('homepage', function () {

    beforeEach(function(){
    browser.url('/?ecdesign=n'); //tests the homepage

    });

    it ('Masthead', function () {
       browser.waitForVisible('.ds-layout-masthead');
       let report = browser.checkElement('.ds-layout-masthead')
       isWithinMisMatchTolerance(report);
    });

    it ('Subsription proposition', function () {
        browser.waitForVisible('.subscription-proposition');
        let report = browser.checkElement('.subscription-proposition');
        isWithinMisMatchTolerance(report);
      });

      it ('Media Promo Editorial', function () {
        browser.waitForVisible('.ds-media-promo--editorial');
        let report = browser.checkElement('.ds-media-promo--editorial');
        isWithinMisMatchTolerance(report);
      });

      it ('Media Promo Podcast', function () {
        browser.waitForVisible('.ds-media-promo--podcasts');
        browser.scroll('.ds-media-promo--podcasts');
        let report = browser.checkElement('.ds-media-promo--podcasts');
        isWithinMisMatchTolerance(report);
      });

    it ('Footer', function () {
        browser.waitForVisible('#_evidon_banner');
        browser.waitForVisible('#_evidon-accept-button');
        browser.click('#_evidon-accept-button');
        browser.waitForVisible('.ds-footer');
        browser.scroll('.ds-footer');                
        let report = browser.checkElement('.ds-footer');
        isWithinMisMatchTolerance(report);
      });

});