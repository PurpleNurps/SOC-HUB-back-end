import { expect, test } from "@playwright/test";

// write a test skeleton

test("end to end test - user should be able to see the resoures and change to different topics", async ({
  page,
}) => {
  //  navigate to the frontend URL
  await page.goto(
    "http://localhost:5500/front-end/bc15-w8-project-front-end-arrayof13spirits/"
  );
  // expect title to be sochub app
  await expect(page).toHaveTitle("SoCHub App");
  // find links
  // expect links to be for javascript
  const fetchLink = page.getByText("Fetch");
  await expect(fetchLink).toBeVisible();
  const loopsLink = page.getByText("Loops");
  await expect(loopsLink).toBeVisible();
  const asyncLink = page.getByText("Async");
  await expect(asyncLink).toBeVisible();
  // click the back-end button
  const backEndButton = page.getByText("Back-end");
  await backEndButton.click();
  // find links
  // expect links to be for back end
  const apiLink = page.getByText("API").first();
  await expect(apiLink).toBeVisible();
  const expressLink = page.getByText("Express");
  await expect(expressLink).toBeVisible();
  const restApiLink = page.getByText("Rest APIs");
  await expect(restApiLink).toBeVisible();
  // click the front-end button
  const frontEndButton = page.getByText("Front-end");
  await frontEndButton.click();
  // find links
  // expect links to be for back end
  const domLink = page.getByText("Dom Manipulation and Events");
  await expect(domLink).toBeVisible();
  const figjamLink = page.getByText("How to use Figjam");
  await expect(figjamLink).toBeVisible();
  const cssLink = page.getByText("Getting started on CSS");
  await expect(cssLink).toBeVisible();
  // click the testing button
  const testingButton = page.getByText("Testing");
  await testingButton.click();
  // find links
  // expect links to be for testing
  const vitestLink = page.getByText("Getting started with Vitest");
  await expect(vitestLink).toBeVisible();
  const testsLink = page.getByText("Writing tests");
  await expect(testsLink).toBeVisible();
  const pwLink = page.getByText("Locators for Playwright");
  await expect(pwLink).toBeVisible();
  // click the database button
  const dbButton = page.getByText("Database");
  await dbButton.click();
  // find links
  // expect links to be for database
  const joinsLink = page.getByText("Joins");
  await expect(joinsLink).toBeVisible();
  const morganLink = page.getByText("Morgan");
  await expect(morganLink).toBeVisible();
  const sqlLink = page.getByText("What is SQL?");
  await expect(sqlLink).toBeVisible();
  // click the external links button
  const etButton = page.getByText("External topics");
  await etButton.click();
  // find links
  // expect links to be for database
  const stLink = page.getByText("Systematic Thinking");
  await expect(stLink).toBeVisible();
  const spLink = page.getByText("Starting Python");
  await expect(spLink).toBeVisible();
  const mindsetLink = page.getByText("Mindset: Inner Critic");
  await expect(mindsetLink).toBeVisible();

  // click add a resource
  const addResource = page.getByText("Add a resource");
  await addResource.click();
  // find input title field
  const insertTitle = page.getByRole('textbox').first();
  // check check it is visible
  await expect(insertTitle).toBeVisible();
  // check it is empty
  await expect(insertTitle).toBeEmpty();
  // find input link field
  const insertLink = page.getByRole('textbox').nth(1)
  // check check it is visible
  await expect(insertLink).toBeVisible();
  // check it is empty
  await expect(insertLink).toBeEmpty();
  // find input topic field
  const insertTopic = page.getByRole('textbox').nth(2)
  // check check it is visible
  await expect(insertTopic).toBeVisible();
  // check it is empty
  await expect(insertTopic).toBeEmpty();
  // click back button
  await page.getByRole('link', { name: 'back button' }).click();
  // expect title to be sochub app
  await expect(page).toHaveTitle("SoCHub App");
});
