import { toMatchImageSnapshot } from 'jest-image-snapshot';
import termImg from 'term-img';

function toMatchImageSnapshotDecorated(...args) {
  const result = Reflect.apply(toMatchImageSnapshot, this, args);

  if (!result.pass) {
    const message = result.message();

    // Get diff image path from error message
    const filepath = message.substr(message.lastIndexOf(':') + 1)
      .replace(/\u001b\[.*?m/g, '') // Remove ANSII chars
      .trim();

    // Try to render image to string for iTerm
    const diff = termImg.string(filepath, { fallback: () => '' });

    result.message = () => `${message}${diff ? `\n\n${diff}` : ''}`;
  }

  return result;
}

expect.extend({
  toMatchImageSnapshot: toMatchImageSnapshotDecorated
});
