import { expect, test } from "@playwright/test";

// write a test skeleton

test("end to end test - user should be able to see the resoures and change to different topics", async ({
  page,
}) => {
  //  navigate to the frontend URL
  await page.goto(
    "http://localhost:5500/front-end/bc15-w8-project-front-end-arrayof13spirits/"
  );
  await expect(page).toHaveTitle("SoCHub App");
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
  // expect links to be for back end
    const vitestLink = page.getByText("Getting started with Vitest");
    await expect(vitestLink).toBeVisible();
    const testsLink = page.getByText("Writing tests");
    await expect(testsLink).toBeVisible();
    const pwLink = page.getByText("Locators for Playwright");
    await expect(pwLink).toBeVisible();
});
