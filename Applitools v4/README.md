The homepage test has been set up to check the layout which should ignore dynamic parts of the page.

***What does it do?***

- Sets viewport to { width: 1280 , height: 1024 };
- Takes a screenshot of the homepage
- Compares with the baseline
- Highlights the differences in Applitool dashboard

***Setting up Applitools and API***

1 - To see tests in task manager you need to register with applitools. https://applitools.com/

2 - Obtain your API key (Click on the main menu icon at the top right of the window and choose the "My API Key" option)

3 -  Store in your bash profile. 

- `sudo vim ~/.bash_profile`
-  add this `export APPLITOOLS_API_KEY=replace_with_your_api_key`
- `source ~/.bash_profile` 

***How to use Applitools Dashbord?***

1 - The first time you run, it saves the screenshot as the baseline

2 - The second time you run, it checks against the baseline

3 - Please note that most of the time tests will identify differences due to interactive ads, as
different size ads can be loaded. but we can simply inspect the difference and accept it as our new baseline

5 - Log into Applitools and check the last run test in dashboard

Note, this specific example it uses Mocha test framework
