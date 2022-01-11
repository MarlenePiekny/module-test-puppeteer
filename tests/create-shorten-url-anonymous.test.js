const timeout = 50000;

// TEST TO LOG IN AS ADMIN
describe("Anonymous user create shorten url", () => {
    let page;

    // Check homepage loading
    test('create', async () => {
        // Load homepage
        await page.goto('http://polr.stationmyr.net/');
        // Click on SIGN IN in nav bar
        await page.evaluate(() => {
            Array
                .from(document.querySelectorAll('#navbar li a'))
                .filter(el => el.textContent === 'Sign In')[0].click();
        });

        // Select the first input form for login
        await page.waitForSelector('body > div.container form > input:nth-child(1)');
        // Click on it
        await page.$eval('body > div.container form > input:nth-child(1)', element => element.click());
        // Enter admin as login
        await page.type('body > div.container form > input:nth-child(1)', 'admin');
        // Select the second input form for password
        await page.waitForSelector('body > div.container form > input:nth-child(2)');
        // Click on it
        await page.$eval('body > div.container form > input:nth-child(2)', element => element.click());
        // Enter password as password
        await page.type('body > div.container form > input:nth-child(2)', 'password');

        // Select the login button
        await page.waitForSelector('body > div.container form > input:nth-child(4)');
        // Click on it
        await page.$eval('body > div.container form > input:nth-child(4)', element => element.click());

        // Wait for navigation to homepage as admin
        await page.waitForNavigation();

        // Click on ADMIN in nav bar
        await page.evaluate(() => {
            Array
                .from(document.querySelectorAll('#navbar li a'))
                .filter(el => el.textContent === 'admin ')[0].click();
        });

        // Click on LOG OUT in nav bar
        await page.evaluate(() => {
            Array
                .from(document.querySelectorAll('#navbar div li ul li a'))
                .filter(el => el.textContent === 'Logout')[0].click();
        });

        // Screenshot of the result
        await page.screenshot({path: './tests/img/log-out-admin.png'});

    }, timeout);

    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout);

});