const { test, expect } = require("@playwright/test");
const userName = "jerko.zaneta+3@gmail.com";
const password = "Vinify123";

test("Log in with existing user", async ({ page }) => {
  await page.goto("https://funky.dev.vinify.app/events");
  await page.getByRole("button", { name: "Login" }).first().click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(userName);
  await page.getByPlaceholder("Email").press("Tab");
  await page.getByPlaceholder("Password").fill(password);
  await page.getByRole("button", { name: "Login", exact: true }).click();
  await expect(page).toHaveURL("https://funky.dev.vinify.app/events");
  console.log(
    `Logged in succesfully with the username: ${userName} and password: ${password}`
  );
});

test("Create new event", async ({ page }) => {
  await page.goto("https://funky.dev.vinify.app/events");
  await page.getByRole("button", { name: "Login" }).first().click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(userName);
  await page.getByPlaceholder("Email").press("Tab");
  await page.getByPlaceholder("Password").fill(password);
  await page.getByRole("button", { name: "Login", exact: true }).click();
  await expect(page).toHaveURL("https://funky.dev.vinify.app/events");
  console.log(
    `Logged in succesfully with the username: ${userName} and password: ${password}`
  );
  await page.getByRole("button", { name: "Create the event" }).click();
  await page.getByPlaceholder("Event name").click();
  await page.getByPlaceholder("Event name").fill("testEvent123");
  await page.getByLabel("Category of the Event?").click();
  await page.getByRole("option", { name: "Messe" }).click();
  await page.getByPlaceholder("Who’s organising this event? ").click();
  await page.getByPlaceholder("Who’s organising this event? ").fill("Test123");
  await page.getByPlaceholder("Describe your event in a").click();
  await page
    .getByPlaceholder("Describe your event in a")
    .fill("Test123 Description");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByLabel("Choose date").first().click();
  await page.getByRole("gridcell", { name: "17" }).click();
  await page.getByLabel("Choose date", { exact: true }).click();
  await page.getByRole("gridcell", { name: "18" }).first().click();
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByPlaceholder("Event’s website").click();
  await page.getByPlaceholder("Event’s website").fill("Test123");
  await page.getByPlaceholder("Tickets").click();
  await page.getByPlaceholder("Tickets").fill("Test123");
  await page.getByRole("button", { name: "Create the event" }).click();
  await page.waitForTimeout(4000);
});
