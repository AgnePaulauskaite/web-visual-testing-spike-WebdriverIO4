The homepage test has been set up to screenshot the entire homepage and checks specific elements on the page which is currently commented out.

***What does it do?***

- Sets viewport  defined in wdio.conf.js;
- Takes a screenshot of the homepage
- Compares with the baseline
- Highlights the differences in diff


***How to check screenshots?***

1 - The first time you run, it saves the screenshot as the baseline in (/WDIO v4/screenshots/reference)

2 - The second time you run it saves in (/WDIO v4/screenshots/screen) and checks against the baseline 

3 - Please note, that tests will fail because it only scans the page without excluding dynamic content 

5 - Saves diffrences in (/home/agne/agnepaula.github.io/WDIO v4/screenshots/diff)

6 - Inspect highlighted areas of diff screenshot

7 - If you want to change the baseline, simply deleted the baseline image and run test again

8 - ErrorShots will be saved in (/home/agne/agnepaula.github.io/WDIO v4/screenshots) it can be moved to .gitignore