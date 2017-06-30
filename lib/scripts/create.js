'use strict';

var method = require('./../method');
var assign = require('lodash.assign');

/**
 * @memberof scripts
 * @method create
 * @description Creates a new startup script.  Optionally specify a machine to use this startup script.
 * Note: currently only Linux based machines support startup scripts.  Also, note: script data is limited to 16KB per script.
 * @param {string} scriptName - A unique name for the script
 * @param {string} scriptFile - File path to a file containing the script data
 * @param {string} [scriptDescription] - Description of the script
 * @param {boolean} [isEnabled] - Determines if the script is enabled or not.  Defaults to true.
 * @param {boolean} [runOnce] - Determines if the script is run on first boot or evey boot.  Defaults to false.
 * @param {string} [machineId] - Machine id of a machine that should execute this script at startup
 * @param {function} cb - Node-style error-first callback function
 * @example
 * paperspace.scripts.create({
 *   scriptName: 'My Script',
 *   scriptFile: './my_script_file.sh',
 *   scriptDescription: 'A startup script', // optional
 *   isEnabled: true, // optional
 *   runOnce: false, // optional
 *   machineId: 'ps123abc', // optional
 * }, function(err, resp) {
 *   // handle error or http response
 * });
 * @example
 * $ paperspace accounts create \
 *     --scriptName "My Script" \
 *     --scriptFile "./my_script_file.sh" \
 *     --scriptDescription "A startup script" \
 *     --isEnabled true \
 *     --runOnce false \
 *     --machineId "ps123abc"
 * @example
 * # HTTP request:
 * https://api.paperspace.io
 * POST /account/setStartupScript {"scriptName": "My Script", "scriptDescription": "A startup script", "isEnabled": true, "runOnce": false, "machineId": "ps123abc"}
 * x-api-key: 1ba4f98e7c0...
 * (file contents as file form data)
 * # Returns 204 on success
 */

function create(params, cb) {
	if (!params.scriptFile) return cb(new Error('Missing required parameter: scriptFile'));
	return method(create, params, cb);
}

assign(create, {
	auth: true,
	group: 'scripts',
	name: 'create',
	method: 'post',
	route: '/scripts/createScript',
	requires: {
		scriptName: 'string',
	},
	file: 'scriptFile',
	returns: {},
});

module.exports = create;