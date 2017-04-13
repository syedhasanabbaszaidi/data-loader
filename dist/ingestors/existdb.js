'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("../utils/request");
const log = require("../utils/log");
function get(options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            log.info('Retrieving document list --> GET http://' + options.hostname + options.endpoint);
            return yield request.httpExec({
                hostname: options.hostname,
                port: options.port,
                method: 'GET',
                path: options.endpoint,
                headers: options.headers
            });
        }
        catch (err) {
            log.error(err);
            throw new Error(err);
        }
    });
}
exports.get = get;
function process(dataItem) {
}
exports.process = process;
//# sourceMappingURL=existdb.js.map