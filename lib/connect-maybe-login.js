'use strict';

/**
 * Correctly sets session returnTo value for pages that can have optionally
 * logged in users. This way if a user logs in from that page, they are
 * correctly returned to it.
 *
 * Inspired by @jaredhanson's connect-ensure-login
 *
 * Examples:
 *
 *     app.get('/profile',
 *       maybeLoggedIn(),
 *       function(req, res) { ... });
 *
 * @return {Function}
 * @api public
 */
module.exports = function maybeLoggedIn() {

    return function(req, res, next) {
        
        if (!req.isAuthenticated || !req.isAuthenticated()) {
            if (req.session) {
                req.session.returnTo = req.originalUrl || req.url;
            }
        }

        next();
    };
};
