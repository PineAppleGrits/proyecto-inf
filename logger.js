const colors = require('colors');

const config = {
  new_line: '\n',
  cross: '\u2718',
  check: '\u2713',
  warn: '\u26a0',
};
/**
 * Log to console.
 *
 * Function that allows you to send a message to the NodeJS Console.
 *
 * @access     public
 *
 * @param {string}   message           The message to send.
 * @param {string}   level             Type of log (error, warning, success) .
 * @param {string}   prefix            Prefix to send (e.g: filename.js).
 * @param {boolean} important          Important will make the background brighter.
 * @return {void}                      Returns void.
 */
const log = (message, level, prefix, important) => {
  let prefixStr;

  prefix ? prefixStr += ': \n' : prefixStr = '';
  if (important) {
    if (level === 'error') {
      const logPrefix = `[${config.cross}] ${prefixStr}`;
      return console.error(colors.bgBrightRed(logPrefix, message));
    }
    if (level === 'success') {
      const logPrefix = `[${config.check}] ${prefixStr}`;
      return console.info(colors.bgGreen(logPrefix, message));
    }
    if (level === 'warn') {
      const logPrefix = `[${config.warn}] ${prefixStr}`;
      return console.warn(colors.bgBrightYellow(logPrefix, message));
    }

    const logPrefix = `[i] ${prefixStr}`;
    return console.info(colors.bgBrightWhite(logPrefix, message));
  }

  if (level === 'error') {
    const logPrefix = `[${config.cross}] ${prefixStr}`;
    return console.error(colors.brightRed(logPrefix, message));
  }
  if (level === 'success') {
    const logPrefix = `[${config.check}] ${prefixStr}`;
    return console.info(colors.brightGreen(logPrefix, message));
  }
  if (level === 'warn') {
    const logPrefix = `[${config.warn}] ${prefixStr}`;
    return console.warn(colors.brightYellow(logPrefix, message));
  }

  const logPrefix = `[i] ${prefixStr}`;
  return console.info(logPrefix, message);
};

module.exports = log;
