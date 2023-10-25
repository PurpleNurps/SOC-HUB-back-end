import { pool } from "../index.js";
//Create a function that sedds the tables
export async function seedTables() {
  try {
    await pool.query(`
        INSERT INTO resources(topic, name, link)
        VALUES
        ('JAVASCRIPT','Fetch','https://javascript.info/fetch'),
        ('JAVASCRIPT','Loops','https://drive.google.com/file/d/1BdHvKwnJeFLm-LXnnaLdNC80yMgXGgCz/view'),
        ('JAVASCRIPT','Async','https://www.youtube.com/watch?v=rivBfgaEyWQ'),
        ('FRONT-END','Dom Manipulation and Events','https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events'),
        ('FRONT-END','How to use Figjam','https://www.youtube.com/watch?v=FxdoM1B7Wo8&t=367s'),
        ('FRONT-END','Getting started on CSS','https://www.youtube.com/watch?v=1PnVor36_40'),
        ('BACK-END','API','https://drive.google.com/file/d/1h_gXXOe-FK6nXWIuGBxZ-I6dson9Ju0E/view'),
        ('BACK-END','Express','https://expressjs.com/'),
        ('BACK-END','Rest APIs','https://www.youtube.com/watch?v=p2rQ88l0wvw'),
        ('TESTING','Getting started with Vitest','https://vitest.dev/guide/#getting-started'),
        ('TESTING','Writing tests','https://vitest.dev/guide/#writing-tests'),
        ('TESTING','Locators for Playwright','https://playwright.dev/docs/locators'),
        ('DATABASES','Joins','https://www.youtube.com/watch?v=9yeOJ0ZMUYw '),
        ('DATABASES','Morgan','https://www.npmjs.com/package/morgan'),
        ('DATABASES','What is SQL?','https://www.youtube.com/watch?v=27axs9dO7AE'),
        ('EXTERNAL-RESOURCES','Systematic Thinking','https://socnotes.notion.site/Systematic-Thinking-cece6b637bd148ddbe6c45fef0146708'),
        ('EXTERNAL-RESOURCES','Starting Python','https://www.youtube.com/watch?v=b093aqAZiPU'),
        ('EXTERNAL-RESOURCES','Mindset: Inner Critic','https://www.youtube.com/watch?v=d5aVvM4_zpQ');
        `);
  } catch (error) {
    console.error(
      "Error seeding tables. Error originated in seedTables.js",
      error
    );
  }
}
