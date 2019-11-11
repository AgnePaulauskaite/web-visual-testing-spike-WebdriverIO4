## Date: 7/11/2019

##Visual test tool/service requirements for the Economist site

- Fullscreen capture feature with the option to exclude dynamic content
- Dashboard to see executed tests their status
- Easy integration with cloud web and mobile testing platform (e.g BrowserStack, Saucelabs)
- Plugins for CircleCi and Jira
- Compatible with WebdriverIO framework


##The list of tools and services considered for visual testing 

WebdriveIO v4 was considered at the time of this investigation as this is the version we currently use for automated acceptance tests

- Applitools
- Wdio-visual-regression-service
- WebdriverCSS

#Aplitoots -  is a 3rd party commercial tool used for automated visual testing

Good:
- Easy integration (slack, jira, circleCI, webdriverIO)
- Layout comparison (Fullscreen capture + dynamic content excluded)
- Allow differences to be approved or dismissed
- Visual grid
- Cloud web and mobile testing platform

Bad: 
- Cost
- Test run time is slow with WebdriverIO4, over 60s for a simple test

#Wdio-visual-regression-service

Wdio-visual-regression-service - uses wdio-screenshot for capturing screenhots. 

Good: 
- Open source
- Easy integration (WebdirverIO, Spectre)
- Simple to write
- Allows to run different viewports in the same test
- Can be integrated with cloud web and mobile testing platform

Bad:
- Fullscreen capture is supported but to exclude content is not

#WebdriverCSS
 
Bad:
- No longer supported and outdated 

#Conlusion

Both Applitoos and wdio-visual-regression-service are good candidates for web visual testing. However, it became apparent that WebdriverIO4 should be first upgraded to v5 before we carry on further investigation. 

#Next steps

To consider integrating wdio-image-comparison-service for v5 which now blackouts custom regions and even automatically exclude a status and or tool bars (mobile only) during a comparison. Which suits our needs. Also integrate applitools with v5, which should improve test run time. 
