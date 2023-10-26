import { expect, test } from "@playwright/test";

// write a test skeleton

test("end to end test - user should be able to see the resoures and change to different topics", async ({
  page,
}) => {
  //  navigate to the frontend URL
  await page.goto("http://localhost:5500/front-end/bc15-w8-project-front-end-arrayof13spirits/");
    await expect(page).toHaveTitle("SoCHub App");
    // click the front-end button
    const backEndButton = page.getByAltText("nodejs logo");
    await page.waitForSelector(backEndButton)
    await page.click(backEndButton)
    // find links
    expect(page.getByText("API")).toBe("API")
    // expect links to be for back end
});
