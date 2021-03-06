"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lodash_flatten_1 = __importDefault(require("lodash.flatten"));
var lib_1 = require("@aizatto/lib");
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        var activeKey = props.defaultActiveKey;
        if (activeKey === null) {
            var children = props.children;
            if (Array.isArray(children) && children.length > 0) {
                activeKey = children[0].props.eventKey;
            }
        }
        _this.state = {
            activeKey: activeKey,
        };
        return _this;
    }
    Tabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, defaultActiveKey = _a.defaultActiveKey, onSelect = _a.onSelect, props = __rest(_a, ["defaultActiveKey", "onSelect"]);
        var activeKey = this.state.activeKey;
        var content = null;
        var currentUrl = window.location.toString();
        // @ts-ignore
        var children = lodash_flatten_1.default(this.props.children).map(function (child) {
            if (!child) {
                return null;
            }
            var _a = child.props, eventKey = _a.eventKey, hrefProp = _a.href, childRender = _a.render, className = _a.className, title = _a.title, childProps = __rest(_a, ["eventKey", "href", "render", "className", "title"]);
            var href = hrefProp;
            childProps.key = eventKey;
            var aClassName = '';
            if (href) {
                if (eventKey === activeKey ||
                    lib_1.compareURL(currentUrl, href)) {
                    aClassName = 'active';
                }
            }
            else {
                if (eventKey === activeKey) {
                    aClassName = 'active';
                    content = childRender
                        ? childRender()
                        : null;
                }
                if (childRender) {
                    href = "#" + eventKey;
                    var fn_1 = childProps.onClick;
                    childProps.onClick = function (e) {
                        _this.setState({
                            activeKey: eventKey,
                        }, function () {
                            if (fn_1) {
                                fn_1(e);
                            }
                            if (onSelect) {
                                onSelect(eventKey);
                            }
                        });
                    };
                }
                else {
                    aClassName += 'disabled';
                }
            }
            return (react_1.default.createElement("li", __assign({ role: "presentation", className: "nav-item " + className }, childProps),
                react_1.default.createElement("a", { className: "nav-link " + aClassName, href: href }, title)));
        });
        var className = "nav nav-tabs " + props.className;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("ul", __assign({}, props, { className: className }), children),
            content));
    };
    Tabs.defaultProps = {
        defaultActiveKey: null,
        onSelect: null,
        className: '',
    };
    return Tabs;
}(react_1.default.Component));
exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map