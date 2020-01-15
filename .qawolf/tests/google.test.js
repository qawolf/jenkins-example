const { launch } = require("qawolf");
const selectors = require("../selectors/google");

describe('google', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "https://google.com/" });
  });

  afterAll(() => browser.close());

  it('can type into "q" input', async () => {
    await browser.type(selectors[0], "jenkins node tutorial");
  });

  it('can Enter', async () => {
    await browser.type(selectors[1], "↓Enter↑Enter");
  });
});