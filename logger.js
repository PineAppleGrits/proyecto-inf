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
 * @return {void}                      Returns a console message.
 */
const log = (message, level, prefix, important) => {
  let prefixStr;
  prefix ? prefixStr += ' : \n' : prefixStr = '';
  const logPrefix = {
    error: `[${config.cross}]${prefixStr}`,
    success: `[${config.check}]${prefixStr}`,
    warn: `[${config.warn}]${prefixStr}`,
    default: `[i] ${prefixStr}`,
  };
  if (important) {
    switch (level) {
      case 'error':
        return console.error(colors.bgBrightRed(logPrefix.error, message));
      case 'success':
        return console.info(colors.bgGreen(logPrefix.success, message));
      case 'warn':
        return console.warn(colors.bgBrightYellow(logPrefix.warn, message));
      default:
        return console.info(colors.bgBrightWhite(logPrefix.default, message));
    }
  } else {
    switch (level) {
      case 'error':
        return console.error(colors.brightRed(logPrefix.error, message));
      case 'success':
        return console.info(colors.brightGreen(logPrefix.success, message));
      case 'warn':
        return console.warn(colors.brightYellow(logPrefix.warn, message));
      default:
        return console.info(colors.bgBrightWhite(logPrefix.default, message));
    }
  }
};
module.exports = log;
