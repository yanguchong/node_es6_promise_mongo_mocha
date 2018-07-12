'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = HelloWorld;

function HelloWorld() {
    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');

    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, dbName, client, db;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        // Connection URL
                        url = 'mongodb://localhost:27017/myproject';
                        // Database Name

                        dbName = 'myproject';
                        client = void 0;
                        _context.prev = 3;
                        _context.next = 6;
                        return MongoClient.connect(url);

                    case 6:
                        client = _context.sent;
                        db = client.db(dbName);
                        _context.next = 13;
                        break;

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context['catch'](3);

                        console.log(_context.t0.stack);

                    case 13:

                        if (client) {
                            client.close();
                        }

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 10]]);
    }))();
}
//# sourceMappingURL=index.js.map