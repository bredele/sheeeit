var play = require('./lib/play').Play();

/**
 * Expose `chiii()` as the module.
 */

module.exports = chiii;

/**
 * Create a chiiii assert with the given `name`.
 *
 * @param {Boolean} assignement truthy or falsy
 * @param {String} message
 * @return {Type}
 * @api public
 */

function chiii(assignement, message) {
  if(!assignement) {

    // play with a callback
    play.sound('../wavs/sheeeit.wav', function(){
      throw new Error(message);
    });
  } 
}
