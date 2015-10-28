/**
 * Brainfock - community & issue management software
 * Copyright (c) 2015, Sergii Gamaiunov (“Webkadabra”)  All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @link http://www.brainfock.com/
 * @copyright Copyright (c) 2015 Sergii Gamaiunov <hello@webkadabra.com>
 */
module.exports = {
  path: 'users',

  getComponent(location, cb) {

    const Component = (process.env.IS_BROWSER)
      ? require('react-router-proxy?!./components/Users')
      : require('./components/Users');

    cb(null, Component);
  },

  getChildRoutes(location, cb) {

    // currently, this is working better than 'react-router-proxy-loader'
    if(process.env.IS_BROWSER)
      require.ensure([], (require) => {
        [
        cb(null, require('./modules/user'))
        ]
      })
    else cb(null, [
      require('./modules/user'),
    ])
  },

}