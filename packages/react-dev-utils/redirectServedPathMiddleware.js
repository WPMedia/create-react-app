/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const path = require('path');

module.exports = function createRedirectServedPathMiddleware(servedPath) {
  return function redirectServedPathMiddleware(req, res, next) {
    if (req.url.startsWith(servedPath)) {
      next();
    } else {
      res.redirect(path.join(servedPath, req.path));
    }
  };
};
