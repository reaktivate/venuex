import puppeteer from 'puppeteer';

const host = 'http://localhost:6006/iframe.html';

// TODO: Create viewport matrix
const viewports = [
  {
    width: 100,
    height: 100
  }
];

// TODO: Populate stories
const stories = {};

describe('Image Snapshots', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  function buildUrl(section, story) {
    const params = [
      `selectedKind=${encodeURIComponent(section)}`,
      `selectedStory=${encodeURIComponent(story)}`
    ];

    return `${host}?${params.join('&')}`;
  }

  function buildSnapshotIdentifier(viewport, section, story) {
    const id = [section, story, `${viewport.width}x${viewport.height}`];

    return id.join('-').replace(/\//g, '-');
  }

  function buildTest(viewport, section, story) {
    let options = {};

    if (Array.isArray(story)) {
      [story, { options = {} }] = story;
    }

    it(`Compare screenshots of "${section}" (${story})`, async () => {
      await page.setViewport(viewport);
      await page.goto(buildUrl(section, story), { waitUntil: 'load' });

      if (options.waitFor) {
        await page.waitFor(options.waitFor);
      }

      const screenshot = await page.screenshot({ fullPage: true });

      expect(screenshot).toMatchImageSnapshot({
        failureThreshold: 0.001,
        failureThresholdType: 'percent',
        customSnapshotIdentifier: buildSnapshotIdentifier(viewport, section, story)
      });
    });
  }

  viewports.forEach((viewport) => {
    Object.keys(stories).forEach((section) =>
      stories[section].forEach((story) => buildTest(viewport, section, story))
    );
  });
});
