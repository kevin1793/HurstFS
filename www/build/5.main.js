webpackJsonp([5],{

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ids__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdsPageModule", function() { return IdsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IdsPageModule = (function () {
    function IdsPageModule() {
        this.isValid = true;
        this.age = 12;
    }
    IdsPageModule.prototype.changeValue = function (valid) {
        this.isValid = valid;
    };
    return IdsPageModule;
}());
IdsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ids__["a" /* IdsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ids__["a" /* IdsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ids__["a" /* IdsPage */]
        ]
    })
], IdsPageModule);

//# sourceMappingURL=ids.module.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map