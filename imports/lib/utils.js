/**
 * Promised version of meteor call method
 * @param {string} method
 * @param  {...any} args
 */
export function meteorCall(method, ...args) {
  return new Promise((resolve, reject) => {
    Meteor.call(method, ...args, (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results && results.error) {
        return reject(results.error);
      }
      return resolve(results);
    });
  });
}
