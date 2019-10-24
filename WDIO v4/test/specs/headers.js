describe ('homepage', function () {

    beforeEach(function(){
    browser.url('/?ecdesign=n'); //just load homepage

    });

    it ('should look good', function () {
       browser.checkElement('.subscription-proposition');
        


    });


});