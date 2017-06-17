'use strict';

var method = require('./../method');
var assign = require('lodash.assign');

/**
 * @memberof networks
 * @method list
 * @description List information about all networks available to either the current
 * authenticated user or the team, if the user belongs to a team.
 * @param {function} cb - Node-style error-first callback function
 * @returns {array} [ network, ... ] - JSON array of network objects
 * @example
 * paperspace.networks.list(function(err, resp) {
 *   // handle error or http response
 * });
 * @example
 * $ paperspace networks list
 * @example
 * # HTTP request:
 * GET /networks/getNetworks
 * # Returns 200 on success
 * @example
 * //Example return value:
 * [
 *   {
 *     "id": "n123abc",
 *     "name": "Example Network",
 *     "dtCreated": "2016-12-22T16:36:42.613Z",
 *     "network": "10.64.21.0",
 *     "netmask": "255.255.255.0",
 *     "teamId": "te456def"
 *   }
 * ]
 */

function list(params, cb) {
	return method(list, params, cb);
}

assign(list, {
	auth: true,
	group: 'networks',
	name: 'list',
	method: 'get',
	route: '/networks/getNetworks',
	requires: {},
	returns: {},
});

module.exports = list;