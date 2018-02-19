'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    -webkit-font-smoothing: antialiased;\n    position: relative;\n    width: 100%;\n    z-index: 500;\n    border: 1px solid #ccc;\n    padding: 0 8px;\n    border-radius: 6px;\n    color:#333;\n      \n    input.main-input {\n        height: 30px;\n        width: 100%;\n        font-size: 18px;\n        border: none;\n        overflow: hidden;\n        background: transparent;\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        z-index: 2;\n        letter-spacing: 0px;\n        word-spacing: 0px;\n        position: relative;\n        font-family: Arial, sans-serif;\n        direction: ltr;\n    }\n    \n    .background-container {\n        color: transparent;\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        z-index: 1;\n        outline: rgb(85, 84, 89) none 0px;\n        font-size: 18px;\n        font-family: Arial, sans-serif;\n        letter-spacing: 0px;\n        word-spacing: 0px;\n        margin: 3px 8px 0 8px;\n        white-space: pre;\n        overflow: hidden;\n        display: flex;\n        .hint-value {\n        color: #ccc;\n        }\n    }\n    \n    .hint-menu-container {\n        position: relative;\n        left: -6px;\n        .arrow {\n        &::after {\n            content: \'\';\n            display: block;\n            width: 11px;\n            height: 11px;\n            background-clip: padding-box;\n            background-color: #fff;\n            transform: rotate(45deg);\n        }\n        position: absolute;\n        top: 7px;\n        left: 20px;\n        z-index: 40;\n        }\n    \n        .arrow-border {\n        &::after {\n            content: \'\';\n            display: block;\n            width: 12px;\n            height: 11px;\n            background-clip: padding-box;\n            background-color: #ccc;\n            transform: rotate(45deg);\n        }\n        position: absolute;\n        top: 6px;\n        left: 20px;\n        }\n    \n        .hint-menu {\n        position: absolute;\n        background-color: white;\n        top: 11px;\n        left: 0px;\n        min-width: 300px;\n        padding: 10px 14px;\n        box-shadow: 0 0 5px 0px #eee;\n        border: 1px solid #ccc;\n        border-radius: 6px;\n        &.with-help {\n            width: 360px;\n            .help-title {\n            font-weight: 600;\n            margin: 3px 0 6px 0;\n            }\n            .help-text {\n    \n            }\n        }\n        .section-header {\n            position: relative;\n            margin: 2px 0;\n            hr {\n                width: 100%;\n                top: 11px;\n                margin: 0 !important;\n                position: absolute;\n                border: none;\n                border-bottom: thin solid #ccc;\n            }\n            .header-label {\n            text-transform: capitalize;\n            color: #999;\n            background: white;\n            z-index: 20;\n            position: relative;\n            padding: 0 10px 0 7px;\n            font-size: 13px;\n            color: #aaa;\n            }\n        }\n        }\n    }\n    \n    .background-container, .hint-menu.with-help {\n        .modifier {\n        position: relative;\n        z-index: 10;\n        &.incomplete:before {\n            right: 0;\n            border-color: #FFDCB1;\n            background: #ffebaa;\n            background: -webkit-gradient(linear,left bottom,left top,color-stop(0,#ffebaa),color-stop(1,#fff9dc));\n            border-right: none;\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        &:before {\n            content: \' \';\n            position: absolute;\n            top: -1px;\n            left: 0;\n            z-index: -1;\n            right: -1px;\n            bottom: 0;\n            display: block;\n            box-sizing: border-box;\n            border-radius: 5px;\n            border-width: 1px;\n            border-style: solid;\n            border-color: #8CD5B7;\n            background: #E5F4EE;\n            background: -webkit-gradient(linear,left bottom,left top,color-stop(0,#ccecdf),color-stop(1,#e9f6f1));\n        }\n        }\n    }\n    \n    .hint-menu.with-help .modifier {\n        cursor: pointer;\n        border-radius: 3px;\n    }\n    \n    ul.slack-search-input-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        overflow-y: auto;\n        position: relative;\n        max-height: 220px;\n        li {\n        margin: 0;\n        padding: 2px 8px;\n        border-radius: 3px;\n        .modifier-value {\n            color: #aaa;\n        }\n        &:hover {\n            background-color: #F7F7F7;\n        }\n        &.current {\n            .modifier-value {\n            color: #ddd;\n            }\n            background-color: #399EFF;\n            color: white;\n        }\n        }\n    }    \n'], ['\n    -webkit-font-smoothing: antialiased;\n    position: relative;\n    width: 100%;\n    z-index: 500;\n    border: 1px solid #ccc;\n    padding: 0 8px;\n    border-radius: 6px;\n    color:#333;\n      \n    input.main-input {\n        height: 30px;\n        width: 100%;\n        font-size: 18px;\n        border: none;\n        overflow: hidden;\n        background: transparent;\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        z-index: 2;\n        letter-spacing: 0px;\n        word-spacing: 0px;\n        position: relative;\n        font-family: Arial, sans-serif;\n        direction: ltr;\n    }\n    \n    .background-container {\n        color: transparent;\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        z-index: 1;\n        outline: rgb(85, 84, 89) none 0px;\n        font-size: 18px;\n        font-family: Arial, sans-serif;\n        letter-spacing: 0px;\n        word-spacing: 0px;\n        margin: 3px 8px 0 8px;\n        white-space: pre;\n        overflow: hidden;\n        display: flex;\n        .hint-value {\n        color: #ccc;\n        }\n    }\n    \n    .hint-menu-container {\n        position: relative;\n        left: -6px;\n        .arrow {\n        &::after {\n            content: \'\';\n            display: block;\n            width: 11px;\n            height: 11px;\n            background-clip: padding-box;\n            background-color: #fff;\n            transform: rotate(45deg);\n        }\n        position: absolute;\n        top: 7px;\n        left: 20px;\n        z-index: 40;\n        }\n    \n        .arrow-border {\n        &::after {\n            content: \'\';\n            display: block;\n            width: 12px;\n            height: 11px;\n            background-clip: padding-box;\n            background-color: #ccc;\n            transform: rotate(45deg);\n        }\n        position: absolute;\n        top: 6px;\n        left: 20px;\n        }\n    \n        .hint-menu {\n        position: absolute;\n        background-color: white;\n        top: 11px;\n        left: 0px;\n        min-width: 300px;\n        padding: 10px 14px;\n        box-shadow: 0 0 5px 0px #eee;\n        border: 1px solid #ccc;\n        border-radius: 6px;\n        &.with-help {\n            width: 360px;\n            .help-title {\n            font-weight: 600;\n            margin: 3px 0 6px 0;\n            }\n            .help-text {\n    \n            }\n        }\n        .section-header {\n            position: relative;\n            margin: 2px 0;\n            hr {\n                width: 100%;\n                top: 11px;\n                margin: 0 !important;\n                position: absolute;\n                border: none;\n                border-bottom: thin solid #ccc;\n            }\n            .header-label {\n            text-transform: capitalize;\n            color: #999;\n            background: white;\n            z-index: 20;\n            position: relative;\n            padding: 0 10px 0 7px;\n            font-size: 13px;\n            color: #aaa;\n            }\n        }\n        }\n    }\n    \n    .background-container, .hint-menu.with-help {\n        .modifier {\n        position: relative;\n        z-index: 10;\n        &.incomplete:before {\n            right: 0;\n            border-color: #FFDCB1;\n            background: #ffebaa;\n            background: -webkit-gradient(linear,left bottom,left top,color-stop(0,#ffebaa),color-stop(1,#fff9dc));\n            border-right: none;\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        &:before {\n            content: \' \';\n            position: absolute;\n            top: -1px;\n            left: 0;\n            z-index: -1;\n            right: -1px;\n            bottom: 0;\n            display: block;\n            box-sizing: border-box;\n            border-radius: 5px;\n            border-width: 1px;\n            border-style: solid;\n            border-color: #8CD5B7;\n            background: #E5F4EE;\n            background: -webkit-gradient(linear,left bottom,left top,color-stop(0,#ccecdf),color-stop(1,#e9f6f1));\n        }\n        }\n    }\n    \n    .hint-menu.with-help .modifier {\n        cursor: pointer;\n        border-radius: 3px;\n    }\n    \n    ul.slack-search-input-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        overflow-y: auto;\n        position: relative;\n        max-height: 220px;\n        li {\n        margin: 0;\n        padding: 2px 8px;\n        border-radius: 3px;\n        .modifier-value {\n            color: #aaa;\n        }\n        &:hover {\n            background-color: #F7F7F7;\n        }\n        &.current {\n            .modifier-value {\n            color: #ddd;\n            }\n            background-color: #399EFF;\n            color: white;\n        }\n        }\n    }    \n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../../styles/colors');

var colors = _interopRequireWildcard(_colors);

var _sizes = require('../../../styles/sizes');

var sizes = _interopRequireWildcard(_sizes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSmartSearch = _styledComponents2.default.div(_templateObject);

exports.default = StyledSmartSearch;