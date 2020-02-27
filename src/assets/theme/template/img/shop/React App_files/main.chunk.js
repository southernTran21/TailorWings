(window["webpackJsonpviba-template"] = window["webpackJsonpviba-template"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #09d3ac;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _pages_GeneralStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/GeneralStatus */ "./src/pages/GeneralStatus.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Title */ "./src/components/Title.js");
/* harmony import */ var _pages_PowerControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/PowerControl */ "./src/pages/PowerControl.js");
/* harmony import */ var _pages_AutoProgram__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/AutoProgram */ "./src/pages/AutoProgram.js");
/* harmony import */ var _components_CardImages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/CardImages */ "./src/components/CardImages.js");


var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/App.js";















function TabPanel(props) {
  const children = props.children,
        value = props.value,
        index = props.index,
        other = Object(_Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "value", "index"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: "nav-tabpanel-".concat(index),
    "aria-labelledby": "nav-tab-".concat(index)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, children));
}

function a11yProps(index) {
  return {
    id: "nav-tab-".concat(index),
    'aria-controls': "nav-tabpanel-".concat(index)
  };
}

function LinkTab(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
    component: "a",
    onClick: event => {
      event.preventDefault();
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

function App() {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
        _React$useState2 = Object(_Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "fullWidth",
    value: value,
    onChange: handleChange,
    "aria-label": "nav tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkTab, Object.assign({
    label: "General Status",
    href: "/generalStatus"
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkTab, Object.assign({
    label: "Power Control",
    href: "/powerControl"
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkTab, Object.assign({
    label: "Auto Program",
    href: "/autoProgram"
  }, a11yProps(2), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPanel, {
    value: value,
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_GeneralStatus__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPanel, {
    value: value,
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_PowerControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPanel, {
    value: value,
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_AutoProgram__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/CardImages.js":
/*!**************************************!*\
  !*** ./src/components/CardImages.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardImages; });
/* harmony import */ var _Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/components/CardImages.js";

function CardImages() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
        _useState2 = Object(_Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "You clicked ", count, " times"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: () => setCount(count + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Click me"));
}

/***/ }),

/***/ "./src/components/SwitchOnOff/SwitchOnOff.js":
/*!***************************************************!*\
  !*** ./src/components/SwitchOnOff/SwitchOnOff.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchOnOff; });
/* harmony import */ var _Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");



var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/components/SwitchOnOff/SwitchOnOff.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  buttonGroup: {
    width: "93%",
    justifyContent: "center",
    padding: "15px",
    margin: "auto",
    border: "none",
    boxShadow: "none"
  }
}));
const IOSSwitch = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(theme => ({
  root: {
    width: 56,
    height: 37,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(19px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
        "div": {
          color: '#fff'
        }
      }
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width: 35,
    height: 35
  },
  track: {
    borderRadius: 37 / 2,
    //border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
  focusVisible: {}
}))((_ref) => {
  let classes = _ref.classes,
      props = Object(_Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["classes"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({
    focusVisibleClassName: classes.focusVisible,
    disableRipple: true,
    classes: {
      root: classes.root,
      switchBase: classes.switchBase,
      thumb: classes.thumb,
      track: classes.track,
      checked: classes.checked
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }));
});
function SwitchOnOff() {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  }),
        _React$useState2 = Object(_Users_nguyenlinh_Desktop_Code_ReactJS_viba_template_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

  const handleChange = name => event => {
    setState(_objectSpread({}, state, {
      [name]: event.target.checked
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.buttonGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "label",
    container: true,
    spacing: 1,
    style: {
      justifyContent: "center",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "T\u1EAET"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      margin: "0",
      height: "30px"
    },
    control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IOSSwitch, {
      checked: state.checkedA,
      onChange: handleChange('checkedA'),
      value: "checkedA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "B\u1EACT"))));
}

/***/ }),

/***/ "./src/components/Title.js":
/*!*********************************!*\
  !*** ./src/components/Title.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/components/Title.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  textTitle: {
    width: 280,
    textTransform: "uppercase",
    textAlign: "center",
    borderRadius: 7,
    color: "#3f51b5",
    borderBottom: "2px solid #3f51b5",
    // boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    boxShadow: "0px 3px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    margin: "30px 40px 0"
  }
});
function Title() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "row",
    justify: "left",
    alignItems: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    gutterBottom: true,
    className: classes.textTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "S\u1EA3n ph\u1EA9m ch\u1EA1y: G\u1EA1o"));
}

/***/ }),

/***/ "./src/components/contain\bGeneralStatus/SystemOff.js":
/*!***********************************************************!*\
  !*** ./src/components/containGeneralStatus/SystemOff.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlignContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/components/contain\bGeneralStatus/SystemOff.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  card: {
    boxShadow: "none",
    // backgroundColor: "#dce0f1",
    width: "100%"
  },
  mainFanOn: {
    height: 100,
    width: "99.5%",
    backgroundSize: "contain"
  },
  mainLineOn: {
    height: 70,
    width: "0%",
    margin: "auto"
  },
  conveyorBeltTop: {
    top: "411px",
    height: 70,
    width: "10%",
    margin: "0 0 0 100px",
    position: "absolute",
    backgroundSize: "contain",
    transition: "all 1s ease-in-out",
    animation: "$moveFor 1s linear 2s infinite  both"
  },
  conveyorBeltBottom: {
    top: "470px",
    height: 70,
    width: "10%",
    margin: "0 0 0 100px",
    position: "absolute",
    backgroundSize: "contain",
    transition: "all 1s ease-in-out",
    animation: "$moveBack 1s linear 2s infinite  both"
  },
  wheel: {
    zIndex: 1,
    // top: "58%",
    height: "90px",
    width: "10%",
    margin: "0 42px",
    position: "absolute",
    backgroundSize: "contain" // transition: "all 1s ease-in-out",
    // transform: "translateX(30px)",

  },
  // animation of conveyor
  '@keyframes moveFor': {
    from: {
      transform: "translateX(5px)"
    },
    to: {
      transform: "translateX(40px)"
    }
  },
  '@keyframes moveBack': {
    from: {
      transform: "translateX(40px)"
    },
    to: {
      transform: "translateX(-5px)"
    }
  },
  avatar: {
    margin: 10
  },
  gridContainer: {
    padding: "0px 200px",
    width: "100%"
  },
  grid: {
    zIndex: 1,
    width: "100%",
    height: 200,
    border: "2px solid black",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  valueTemp: {
    margin: 0,
    width: "100%",
    backgroundColor: "#3f51b5",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  valueInBox: {
    width: 50,
    margin: " 0 auto",
    padding: "30px 0",
    //backgroundColor: "#546e7a",
    color: "#fff",
    borderRadius: 5,
    textAlign: "center" //boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"

  },
  textTemp: {
    top: "58%",
    width: 150,
    margin: "0 45px",
    color: "#3f51b5",
    textAlign: "center"
  },
  button: {
    border: "none",
    margin: "40px 40px 10px",
    backgroundColor: "#C2F03E",
    color: "#000",
    '&:hover': {
      color: "#98B939",
      //border: "2px solid #C2F03E",
      background: "#F5F5F5"
    }
  }
});
function AlignContent() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.mainFanOn,
    image: __webpack_require__(/*! ../imgs/fan_on.png */ "./src/components/imgs/fan_on.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    p: 0,
    m: 0,
    bgcolor: "background.paper" //css={{ maxWidth: "100%", height: "200px" }}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Item 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    flexGrow: "6",
    bgcolor: "white",
    bcss: {
      maxWidth: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"] //css={{ maxWidth: "100%"}}
  , {
    className: classes.mainLineOn,
    image: __webpack_require__(/*! ../imgs/line_on.png */ "./src/components/imgs/line_on.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Item 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    p: 0,
    m: 0,
    bgcolor: "background.paper",
    css: {
      maxWidth: "100%",
      height: "200px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Item 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "grey.300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Item 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "grey.300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Item 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "grey.300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Item 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "grey.300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Item 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "grey.300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Item 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "grey.300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Item 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    p: 1,
    flexGrow: "1",
    bgcolor: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Item 1")));
}

/***/ }),

/***/ "./src/components/contain\bGeneralStatus/SystemOn.js":
/*!**********************************************************!*\
  !*** ./src/components/containGeneralStatus/SystemOn.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SystemOn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/components/contain\bGeneralStatus/SystemOn.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  card: {
    boxShadow: "none",
    // backgroundColor: "#dce0f1",
    width: "100%"
  },
  mainFanOn: {
    height: 100,
    width: "99.5%",
    backgroundSize: "contain"
  },
  mainLineOn: {
    height: 70,
    width: "90%",
    margin: "auto"
  },
  conveyorBeltTop: {
    top: "411px",
    height: 70,
    width: "10%",
    margin: "0 0 0 100px",
    position: "absolute",
    backgroundSize: "contain",
    transition: "all 1s ease-in-out",
    animation: "$moveFor 1s linear 2s infinite  both"
  },
  conveyorBeltBottom: {
    top: "470px",
    height: 70,
    width: "10%",
    margin: "0 0 0 100px",
    position: "absolute",
    backgroundSize: "contain",
    transition: "all 1s ease-in-out",
    animation: "$moveBack 1s linear 2s infinite  both"
  },
  wheel: {
    zIndex: 1,
    // top: "58%",
    height: "90px",
    width: "10%",
    margin: "0 42px",
    position: "absolute",
    backgroundSize: "contain" // transition: "all 1s ease-in-out",
    // transform: "translateX(30px)",

  },
  // animation of conveyor
  '@keyframes moveFor': {
    from: {
      transform: "translateX(5px)"
    },
    to: {
      transform: "translateX(40px)"
    }
  },
  '@keyframes moveBack': {
    from: {
      transform: "translateX(40px)"
    },
    to: {
      transform: "translateX(-5px)"
    }
  },
  avatar: {
    margin: 10
  },
  gridContainer: {
    padding: "0px 200px",
    width: "100%"
  },
  grid: {
    zIndex: 1,
    width: "100%",
    height: 200,
    border: "2px solid black",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  valueTemp: {
    margin: 0,
    width: "100%",
    backgroundColor: "#3f51b5",
    color: "#fff",
    textAlign: "center",
    borderBottom: "2px solid black",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  valueInBox: {
    width: 50,
    margin: " 0 auto",
    padding: "30px 0",
    //backgroundColor: "#546e7a",
    color: "#fff",
    borderRadius: 5,
    textAlign: "center" //boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"

  },
  textTemp: {
    top: "58%",
    width: 150,
    margin: "0 45px",
    color: "#3f51b5",
    textAlign: "center"
  },
  button: {
    border: "none",
    margin: "40px 40px 10px",
    backgroundColor: "#C2F03E",
    color: "#000",
    '&:hover': {
      color: "#98B939",
      //border: "2px solid #C2F03E",
      background: "#F5F5F5"
    }
  }
});
function SystemOn() {
  const classes = useStyles();

  const handleClick = () => {
    alert("You clicked");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.mainFanOn,
    image: __webpack_require__(/*! ../imgs/fan_on.png */ "./src/components/imgs/fan_on.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Temperature in 27\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.mainLineOn,
    image: __webpack_require__(/*! ../imgs/line_on.png */ "./src/components/imgs/line_on.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    justify: "center",
    alignItems: "center",
    style: {
      position: "absolute",
      top: "330px",
      right: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Temperature out 45\xB0C"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.conveyorBeltTop,
    image: __webpack_require__(/*! ../imgs/conveyorbelt.png */ "./src/components/imgs/conveyorbelt.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.wheel,
    image: __webpack_require__(/*! ../imgs/wheel.png */ "./src/components/imgs/wheel.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.conveyorBeltBottom,
    image: __webpack_require__(/*! ../imgs/conveyorbeltBot.png */ "./src/components/imgs/conveyorbeltBot.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    className: classes.grid,
    style: {
      borderRadius: "5px 0 0 5px",
      background: "#828bbd"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueTemp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "30\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueInBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "30%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    className: classes.grid,
    style: {
      borderLeft: "none",
      background: "#828bbd"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueTemp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "30\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueInBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "30%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    className: classes.grid,
    style: {
      borderLeft: "none",
      background: "#828bbd"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueTemp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "30\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueInBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "30%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    className: classes.grid,
    style: {
      borderLeft: "none",
      background: "#828bbd"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueTemp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "30\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueInBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "30%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    className: classes.grid,
    style: {
      borderLeft: "none",
      backgroundColor: "#ffd180"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueTemp,
    style: {
      backgroundColor: "#f57c00"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "40\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueInBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "80%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    className: classes.grid,
    style: {
      borderLeft: "none",
      borderRadius: " 0 5px 5px 0",
      backgroundColor: "#ffd180"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueTemp,
    style: {
      backgroundColor: "#f57c00"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "40\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.valueInBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, "70%"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      margin: "0 0 0 -40px"
    },
    className: classes.conveyorBeltTop,
    image: __webpack_require__(/*! ../imgs/conveyorbelt.png */ "./src/components/imgs/conveyorbelt.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.wheel,
    image: __webpack_require__(/*! ../imgs/wheel.png */ "./src/components/imgs/wheel.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      margin: "0 0 0 -40px"
    },
    className: classes.conveyorBeltBottom,
    image: __webpack_require__(/*! ../imgs/conveyorbeltBot.png */ "./src/components/imgs/conveyorbeltBot.png"),
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    className: classes.button,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, "Conveyor ON"));
}

/***/ }),

/***/ "./src/components/contain\bPowerControl/ContainConveyor.js":
/*!****************************************************************!*\
  !*** ./src/components/containPowerControl/ContainConveyor.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainConveyor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SwitchOnOff/SwitchOnOff */ "./src/components/SwitchOnOff/SwitchOnOff.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/components/contain\bPowerControl/ContainConveyor.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    boxShadow: "none"
  },
  card: {
    // minWidth: 275,
    maxWidth: "100%",
    margin: "15px"
  },
  titleText: {
    padding: "5px 0",
    color: "white",
    background: "#3f51b5",
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "7 0 7 0",
    justifyContent: "center",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  buttonGroup: {
    padding: "20px",
    margin: "auto",
    border: "none",
    boxShadow: "none"
  },
  buttonOn: {
    backgroundColor: "#C2F03E",
    color: "#000",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    '&:hover': {
      color: "#98B939",
      //border: "2px solid #C2F03E",
      background: "#F5F5F5"
    }
  },
  buttonOff: {
    backgroundColor: "#f50057",
    color: "#fff",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    '&:active': {
      color: "#f50057",
      //border: "2px solid #C2F03E",
      background: "#F5F5F5"
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}));
function ContainConveyor() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleText,
    title: "B\u0103ng T\u1EA3i",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.container,
    noValidate: true,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "speed",
    label: "Speed (m/phut)",
    type: "speed",
    className: classes.textField,
    margin: "normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })))))));
}

/***/ }),

/***/ "./src/components/contain\bPowerControl/ContainFan.js":
/*!***********************************************************!*\
  !*** ./src/components/containPowerControl/ContainFan.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainFan; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SwitchOnOff/SwitchOnOff */ "./src/components/SwitchOnOff/SwitchOnOff.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/components/contain\bPowerControl/ContainFan.js";











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    boxShadow: "none"
  },
  card: {
    // minWidth: 275,
    maxWidth: "100%",
    margin: "15px"
  },
  titleText: {
    padding: "5px 0",
    color: "white",
    background: "#3f51b5",
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "7 0 7 0",
    justifyContent: "center",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  buttonGroup: {
    padding: "20px",
    margin: "auto",
    border: "none",
    boxShadow: "none"
  },
  buttonOn: {
    backgroundColor: "#C2F03E",
    color: "#000",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    '&:hover': {
      color: "#98B939",
      //border: "2px solid #C2F03E",
      background: "#F5F5F5"
    }
  },
  buttonOff: {
    backgroundColor: "#f50057",
    color: "#fff",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    '&:hover': {
      color: "#f50057",
      //border: "2px solid #C2F03E",
      background: "#F5F5F5"
    }
  }
}));
function ContainFan() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleText,
    title: "Qu\u1EA1t H\xFAt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.container,
    noValidate: true,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "speed",
    label: "Speed (m/phut)",
    type: "speed",
    className: classes.textField,
    margin: "normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })))))));
}

/***/ }),

/***/ "./src/components/contain\bPowerControl/ContainPowerMagnetron.js":
/*!**********************************************************************!*\
  !*** ./src/components/containPowerControl/ContainPowerMagnetron.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainPowerMagnetron; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SwitchOnOff/SwitchOnOff */ "./src/components/SwitchOnOff/SwitchOnOff.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/components/contain\bPowerControl/ContainPowerMagnetron.js";












const marks = [{
  value: 0,
  label: '0%'
}, {
  value: 20,
  label: '20%'
}, {
  value: 30,
  label: '30%'
}, {
  value: 100,
  label: '100%'
}];

function valuetext(value) {
  return "".concat(value, "%");
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    boxShadow: "none"
  },
  card: {
    // minWidth: 275,
    maxWidth: "100%",
    margin: "15px"
  },
  cardMagnetron: {
    // minWidth: 275,
    width: "100%",
    margin: "15px"
  },
  cardMagnetronBox: {
    background: "#8c7eb01a"
  },
  titleText: {
    padding: "5px 0",
    color: "white",
    background: "#3f51b5",
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "7 0 7 0",
    justifyContent: "center",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  titleBox: {
    padding: "5px 0",
    color: "#3f51b5",
    // background: "#3f51b5",
    borderBottom: "2px solid #3f51b5",
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "7 0 7 0",
    justifyContent: "center" //boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",

  },
  buttonGroup: {
    width: "93%",
    justifyContent: "center",
    padding: "15px",
    margin: "auto",
    border: "none",
    boxShadow: "none"
  },
  buttonOn: {
    backgroundColor: "#C2F03E",
    color: "#000",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    '&:hover': {
      color: "#98B939",
      //border: "2px solid #C2F03E",
      background: "#F5F5F5"
    }
  },
  buttonOff: {
    backgroundColor: "#f50057",
    color: "#fff",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    '&:hover': {
      color: "#f50057",
      //border: "2px solid #C2F03E",
      background: "#F5F5F5"
    }
  }
}));
function ContainPowerMagnetron() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.cardMagnetron,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleText,
    title: "C\xF4ng Su\u1EA5t ViBa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    flexDirection: "colum",
    bgcolor: "background.paper",
    css: {
      maxWidth: "100%",
      height: "200px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    p: 1,
    m: 1,
    className: classes.cardMagnetronBox,
    flexGrow: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleBox,
    title: "Box 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      margin: "30px 30px 0",
      width: "84%"
    },
    defaultValue: 20,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-custom",
    step: 10,
    valueLabelDisplay: "on",
    marks: marks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    p: 1,
    m: 1,
    className: classes.cardMagnetronBox,
    flexGrow: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleBox,
    title: "Box 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      margin: "30px 30px 0 ",
      width: "84%"
    },
    defaultValue: 20,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-custom",
    step: 10,
    valueLabelDisplay: "on",
    marks: marks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    p: 1,
    m: 1,
    className: classes.cardMagnetronBox,
    flexGrow: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleBox,
    title: "Box 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      margin: "30px 30px 0",
      width: "84%"
    },
    defaultValue: 20,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-custom",
    step: 10,
    valueLabelDisplay: "on",
    marks: marks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    flexDirection: "colum",
    bgcolor: "background.paper",
    css: {
      maxWidth: "100%",
      height: "200px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    p: 1,
    m: 1,
    className: classes.cardMagnetronBox,
    flexGrow: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleBox,
    title: "Box 4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      margin: "30px 30px 0",
      width: "84%"
    },
    defaultValue: 20,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-custom",
    step: 10,
    valueLabelDisplay: "on",
    marks: marks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    p: 1,
    m: 1,
    className: classes.cardMagnetronBox,
    flexGrow: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleBox,
    title: "Box 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      margin: "30px 30px 0",
      width: "84%"
    },
    defaultValue: 20,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-custom",
    step: 10,
    valueLabelDisplay: "on",
    marks: marks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    p: 1,
    m: 1,
    className: classes.cardMagnetronBox,
    flexGrow: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.titleBox,
    title: "Box 6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchOnOff_SwitchOnOff__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      margin: "30px 30px 0 ",
      width: "84%"
    },
    defaultValue: 20,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-custom",
    step: 10,
    valueLabelDisplay: "on",
    marks: marks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./src/components/imgs/conveyorbelt.png":
/*!**********************************************!*\
  !*** ./src/components/imgs/conveyorbelt.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAJCAYAAAD+dPTmAAAAAXNSR0IArs4c6QAAAHNJREFUWAntltEKwCAIRXX//8+tSZADH2awp3uEwAIVj5fKzWzMhYkTuMT7p/1FACEghSCAEBBCEPCfOIxpZWr3KNmtS75F85BfOYt8yI2QaQj7CEF4+Ll1hJBpCPvdt/orqvqDsKO7dcm32T1el987utjdSi8aD56FcvQAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/imgs/conveyorbeltBot.png":
/*!*************************************************!*\
  !*** ./src/components/imgs/conveyorbeltBot.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAJCAYAAAD+dPTmAAAAAXNSR0IArs4c6QAAAHBJREFUWAntldEKwCAIRTP6/192bAtGIVyK9eTpLTXhHi9p5cxx0dZEfk7TbySyym98HdxaEPsl5B7PzmxPA/3esezyU0OtqoB8DgIYIcecpUqMIBHlKLgXdrzMc+hHZSfAj4AVHgIYASNgBDzwEbgAR3kVEtywHRMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/imgs/fan_on.png":
/*!****************************************!*\
  !*** ./src/components/imgs/fan_on.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/imgs/line_on.png":
/*!*****************************************!*\
  !*** ./src/components/imgs/line_on.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNgAAAB7CAYAAACmcT0vAAAAAXNSR0IArs4c6QAADQRJREFUeAHt21FOI0sMBdDJiAWwoiw+K2IHPObDHuspH1wPRN3h8FMOstPVp1USumouv/wQIECAAAECBAh8tcD7V3/hF3/f5Yu/z9cRIECAAAECBH60wO8fffdungABAgQIECBAgAABAgQIECBAgMA/CgjY/hHQOAECBAgQIECAAAECBAgQIECAwM8WePnZt+/uCRAgQIAAAQLfK3B7u37vBT757dfX2yc7tREgQIAAAQIECKQC3mBLxfQTIECAAAECBAgQIECAAAECBAgQGAICtoGhJECAAAECBAgQIECAAAECBAgQIJAKCNhSMf0ECBAgQIAAAQIECBAgQIAAAQIEhoCAbWAoCRAgQIAAAQIECBAgQIAAAQIECKQCArZUTD8BAgQIECBAgAABAgQIECBAgACBISBgGxhKAgQIECBAgAABAgQIECBAgAABAqmAgC0V00+AAAECBAgQIECAAAECBAgQIEBgCAjYBoaSAAECBAgQIECAAAECBAgQIECAQCogYEvF9BMgQIAAAQIECBAgQIAAAQIECBAYAgK2gaEkQIAAAQIECBAgQIAAAQIECBAgkAoI2FIx/QQIECBAgAABAgQIECBAgAABAgSGgIBtYCgJECBAgAABAgQIECBAgAABAgQIpAICtlRMPwECBAgQIECAAAECBAgQIECAAIEhIGAbGEoCBAgQIECAAAECBAgQIECAAAECqYCALRXTT4AAAQIECBAgQIAAAQIECBAgQGAICNgGhpIAAQIECBAgQIAAAQIECBAgQIBAKiBgS8X0EyBAgAABAgQIECBAgAABAgQIEBgCAraBoSRAgAABAgQIECBAgAABAgQIECCQCgjYUjH9BAgQIECAAAECBAgQIECAAAECBIaAgG1gKAkQIECAAAECBAgQIECAAAECBAikAgK2VEw/AQIECBAgQIAAAQIECBAgQIAAgSEgYBsYSgIECBAgQIAAAQIECBAgQIAAAQKpgIAtFdNPgAABAgQIECBAgAABAgQIECBAYAgI2AaGkgABAgQIECBAgAABAgQIECBAgEAqIGBLxfQTIECAAAECBAgQIECAAAECBAgQGAICtoGhJECAAAECBAgQIECAAAECBAgQIJAKCNhSMf0ECBAgQIAAAQIECBAgQIAAAQIEhoCAbWAoCRAgQIAAAQIECBAgQIAAAQIECKQCArZUTD8BAgQIECBAgAABAgQIECBAgACBISBgGxhKAgQIECBAgAABAgQIECBAgAABAqmAgC0V00+AAAECBAgQIECAAAECBAgQIEBgCAjYBoaSAAECBAgQIECAAAECBAgQIECAQCogYEvF9BMgQIAAAQIECBAgQIAAAQIECBAYAgK2gaEkQIAAAQIECBAgQIAAAQIECBAgkAoI2FIx/QQIECBAgAABAgQIECBAgAABAgSGgIBtYCgJECBAgAABAgQIECBAgAABAgQIpAICtlRMPwECBAgQIECAAAECBAgQIECAAIEhIGAbGEoCBAgQIECAAAECBAgQIECAAAECqYCALRXTT4AAAQIECBAgQIAAAQIECBAgQGAIvHzU7+OzkgABAgQIECBA4PkF/P33/M/YHRIgQIAAAQIPFPAG2wOxXYoAAQIECBAgQIAAAQIECBAgQOD5BARsz/dM3REBAgQIECBAgAABAgQIECBAgMADBS4f1+p/Ebi9XR94aZciQIAAAQIECBAgQIAAAQIECBAgcE6B6+utN+4NtqZQECBAgAABAgQIECBAgAABAgQIEMgFBGy5mQkCBAgQIECAAAECBAgQIECAAAECLSBgawoFAQIECBAgQIAAAQIECBAgQIAAgVxAwJabmSBAgAABAgQIECBAgAABAgQIECDQAgK2plAQIECAAAECBAgQIECAAAECBAgQyAUEbLmZCQIECBAgQIAAAQIECBAgQIAAAQItIGBrCgUBAgQIECBAgAABAgQIECBAgACBXEDAlpuZIECAAAECBAgQIECAAAECBAgQINACAramUBAgQIAAAQIECBAgQIAAAQIECBDIBQRsuZkJAgQIECBAgAABAgQIECBAgAABAi0gYGsKBQECBAgQIECAAAECBAgQIECAAIFcQMCWm5kgQIAAAQIECBAgQIAAAQIECBAg0AICtqZQECBAgAABAgQIECBAgAABAgQIEMgFBGy5mQkCBAgQIECAAAECBAgQIECAAAECLSBgawoFAQIECBAgQIAAAQIECBAgQIAAgVxAwJabmSBAgAABAgQIECBAgAABAgQIECDQAgK2plAQIECAAAECBAgQIECAAAECBAgQyAUEbLmZCQIECBAgQIAAAQIECBAgQIAAAQItIGBrCgUBAgQIECBAgAABAgQIECBAgACBXEDAlpuZIECAAAECBAgQIECAAAECBAgQINACAramUBAgQIAAAQIECBAgQIAAAQIECBDIBQRsuZkJAgQIECBAgAABAgQIECBAgAABAi0gYGsKBQECBAgQIECAAAECBAgQIECAAIFcQMCWm5kgQIAAAQIECBAgQIAAAQIECBAg0AICtqZQECBAgAABAgQIECBAgAABAgQIEMgFBGy5mQkCBAgQIECAAAECBAgQIECAAAECLSBgawoFAQIECBAgQIAAAQIECBAgQIAAgVxAwJabmSBAgAABAgQIECBAgAABAgQIECDQAgK2plAQIECAAAECBAgQIECAAAECBAgQyAUEbLmZCQIECBAgQIAAAQIECBAgQIAAAQItIGBrCgUBAgQIECBAgAABAgQIECBAgACBXEDAlpuZIECAAAECBAgQIECAAAECBAgQINACAramUBAgQIAAAQIECBAgQIAAAQIECBDIBV7yke+fuL7evv8irkDgyQRub9dD3JHze4jHYBMnE3B+T/bAbJfAEHB+B4aSwMkEnN+TPTDbJTAEjnJ+x5Z+eYNtaqgJECBAgAABAgQIECBAgAABAgQIhAICthBMOwECBAgQIECAAAECBAgQIECAAIEpcMh/EZ0b/Kgv//vsIwECfwXe/5aHrJzfQz4WmzqIgPN7kAdhGwQWAs7vAs0IgYMIOL8HeRC2QWAhcOjz6w22xRM1QoAAAQIECBAgQIAAAQIECBAgQKAEBGwlYSVAgAABAgQIECBAgAABAgQIECCwEBCwLdCMECBAgAABAgQIECBAgAABAgQIECgBAVtJWAkQIECAAAECBAgQIECAAAECBAgsBARsCzQjBAgQIECAAAECBAgQIECAAAECBEpAwFYSVgIECBAgQIAAAQIECBAgQIAAAQILAQHbAs0IAQIECBAgQIAAAQIECBAgQIAAgRIQsJWElQABAgQIECBAgAABAgQIECBAgMBCQMC2QDNCgAABAgQIECBAgAABAgQIECBAoAQEbCVhJUCAAAECBAgQIECAAAECBAgQILAQELAt0IwQIECAAAECBAgQIECAAAECBAgQKAEBW0lYCRAgQIAAAQIECBAgQIAAAQIECCwEBGwLNCMECBAgQIAAAQIECBAgQIAAAQIESkDAVhJWAgQIECBAgAABAgQIECBAgAABAgsBAdsCzQgBAgQIECBAgAABAgQIECBAgACBEhCwlYSVAAECBAgQIECAAAECBAgQIECAwEJAwLZAM0KAAAECBAgQIECAAAECBAgQIECgBARsJWElQIAAAQIECBAgQIAAAQIECBAgsBAQsC3QjBAgQIAAAQIECBAgQIAAAQIECBAoAQFbSVgJECBAgAABAgQIECBAgAABAgQILAQEbAs0IwQIECBAgAABAgQIECBAgAABAgRKQMBWElYCBAgQIECAAAECBAgQIECAAAECCwEB2wLNCAECBAgQIECAAAECBAgQIECAAIESELCVhJUAAQIECBAgQIAAAQIECBAgQIDAQkDAtkAzQoAAAQIECBAgQIAAAQIECBAgQKAEBGwlYSVAgAABAgQIECBAgAABAgQIECCwEBCwLdCMECBAgAABAgQIECBAgAABAgQIECgBAVtJWAkQIECAAAECBAgQIECAAAECBAgsBARsCzQjBAgQIECAAAECBAgQIECAAAECBEpAwFYSVgIECBAgQIAAAQIECBAgQIAAAQILAQHbAs0IAQIECBAgQIAAAQIECBAgQIAAgRIQsJWElQABAgQIECBAgAABAgQIECBAgMBCQMC2QDNCgAABAgQIECBAgAABAgQIECBAoAQEbCVhJUCAAAECBAgQIECAAAECBAgQILAQELAt0IwQIECAAAECBAgQIECAAAECBAgQKAEBW0lYCRAgQIAAAQIECBAgQIAAAQIECCwELh8z74u5R4782aMfAgTuCzi/9138lsAZBJzfMzwleyRwX8D5ve/itwTOIOD8nuEp2SOB+wKHPr/eYLv/0PyWAAECBAgQIECAAAECBAgQIECAwKcEBGyfYtJEgAABAgQIECBAgAABAgQIECBA4L7Af9TaJPgESf8XAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/imgs/wheel.png":
/*!***************************************!*\
  !*** ./src/components/imgs/wheel.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/AutoProgram.js":
/*!**********************************!*\
  !*** ./src/pages/AutoProgram.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoProgram; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/pages/AutoProgram.js";
// AutoProgram








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    boxShadow: "none"
  },
  card: {
    minWidth: 275,
    margin: "auto",
    width: "10%"
  },
  titleText: {
    padding: "5px 0",
    top: "300px",
    margin: "auto",
    width: "100%",
    color: "white",
    background: "#3f51b5",
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "7 0 7 0",
    justifyContent: "center",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  button: {
    // borderBottom: "1px solid #3f51b5",
    padding: "4px 80px",
    // boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    '&:hover': {
      color: "#000",
      //border: "2px solid #C2F03E",
      background: "#cfd8dc"
    }
  }
}));
function AutoProgram() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.titleText,
    title: "G\u1EA1o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 1,
    direction: "column",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "B\u1ED9t B\u1EAFp")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Ca Cao")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "B\xE3 M\xEDa"))))));
}

/***/ }),

/***/ "./src/pages/GeneralStatus.js":
/*!************************************!*\
  !*** ./src/pages/GeneralStatus.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeneralStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _components_contain_GeneralStatus_SystemOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/containGeneralStatus/SystemOn */ "./src/components/contain\bGeneralStatus/SystemOn.js");
/* harmony import */ var _components_contain_GeneralStatus_SystemOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/containGeneralStatus/SystemOff */ "./src/components/contain\bGeneralStatus/SystemOff.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/pages/GeneralStatus.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    boxShadow: "none"
  },
  text: {
    margin: "auto",
    width: "80%",
    color: "white",
    background: "#3f51b5",
    textAlign: "center",
    borderRadius: 7,
    justifyContent: "center"
  }
}));
function GeneralStatus() {
  const classes = useStyles(); // const anchorRef = React.useRef(null);
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contain_GeneralStatus_SystemOn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    style: {
      marginTop: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Cooling Tower Temperature In: 30\xB0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Cooling Tower Temperature Out: 30\xB0C"))));
}

/***/ }),

/***/ "./src/pages/PowerControl.js":
/*!***********************************!*\
  !*** ./src/pages/PowerControl.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PowerControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_contain_PowerControl_ContainConveyor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/containPowerControl/ContainConveyor */ "./src/components/contain\bPowerControl/ContainConveyor.js");
/* harmony import */ var _components_contain_PowerControl_ContainFan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/containPowerControl/ContainFan */ "./src/components/contain\bPowerControl/ContainFan.js");
/* harmony import */ var _components_contain_PowerControl_ContainPowerMagnetron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/containPowerControl/ContainPowerMagnetron */ "./src/components/contain\bPowerControl/ContainPowerMagnetron.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/pages/PowerControl.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    boxShadow: "none"
  },
  card: {
    // minWidth: 275,
    maxWidth: "100%",
    margin: "15px"
  },
  titleText: {
    padding: "5px 0",
    color: "white",
    background: "#3f51b5",
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "7 0 7 0",
    justifyContent: "center",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  buttonSave: {
    background: "#3f51b5",
    color: "#fff"
  }
}));
function PowerControl() {
  const classes = useStyles(); // const anchorRef = React.useRef(null);
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contain_PowerControl_ContainConveyor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contain_PowerControl_ContainFan__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contain_PowerControl_ContainPowerMagnetron__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    className: classes.buttonSave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    className: classes.buttonSave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Save")));
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/nguyenlinh/Desktop/Code/ReactJS/viba-template/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map