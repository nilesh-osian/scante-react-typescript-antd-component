'use strict';

var React = require('react');
var antd = require('antd');

var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b, onClick = _a.onClick, children = _a.children;
    return (React.createElement(antd.Button, { type: type, onClick: onClick }, children));
};

exports.Button = Button;
//# sourceMappingURL=index.cjs.js.map
