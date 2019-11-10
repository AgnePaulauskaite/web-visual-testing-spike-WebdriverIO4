/* eslint-disable */
const { Eyes, Target } = require('@applitools/eyes.webdriverio');

const eyes = new Eyes();

// set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

describe('Homepage Layout match test', () => {
  it('Layout match', async () => {

    browser.url('/?ecdesign=n');
    eyes.setMatchLevel('Layout');
    eyes.setForceFullPageScreenshot(true);

    try {
      const viewportSize = { width: 1280 , height: 1024 };
      await eyes.open(browser, 'Homepage grid check', 'Homepage layout', viewportSize);
      browser.click('#_evidon-accept-button');
      await eyes.check('Homepage', Target.window());
      await eyes.close();

    } finally {
      await eyes.abortIfNotClosed();
    }
  });
});