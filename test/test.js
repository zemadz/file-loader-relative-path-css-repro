const assert = require('assert');
const fs = require('fs');
const style = require.resolve('../css/style.css')

describe("css output", () => {
  it('create expected output', () => {
    console.log('style', style);
    const content = fs.readFileSync(style, 'utf8');

    assert.equal(content, '.bg{background-image:url(../assets/image.png)}');
  });
});
