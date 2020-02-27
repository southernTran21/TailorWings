webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.1d06c591de8459757b22.hot-update.js.map