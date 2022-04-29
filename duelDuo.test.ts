import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
  await driver.sleep(2000);
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("Draw button displays div with id of 'choices'", async () => {
  await driver.findElement(By.id("draw")).click();
  await driver.sleep(2000);
  const choices = await driver.findElement(By.id("choices"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});

test("Add to Duo button displays div with id of 'player-duo'", async () => {
  await driver.findElement(By.id("draw")).click();
  await driver.sleep(2000);
  await driver.findElement(By.className("bot-btn")).click();
  await driver.sleep(3000);
  const choices = await driver.findElement(By.id("player-duo"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});
