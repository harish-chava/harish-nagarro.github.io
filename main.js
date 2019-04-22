(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _students_board_students_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students-board/students-board.component */ "./src/app/students-board/students-board.component.ts");
/* harmony import */ var _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onboarding-details/onboarding-details.component */ "./src/app/onboarding-details/onboarding-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        children: [
            { path: '', redirectTo: 'onboard', pathMatch: 'full' },
            { path: 'onboard', component: _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_4__["OnboardingDetailsComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
            { path: 'students', component: _students_board_students_board_component__WEBPACK_IMPORTED_MODULE_3__["StudentsBoardComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] }
        ]
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-onboarding-details></app-onboarding-details>-->\n<!--<app-students-board></app-students-board>-->\n<!--<p>Home</p>-->\n<!--<app-home></app-home>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'students-onboarding';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-details/onboarding-details.component */ "./src/app/onboarding-details/onboarding-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-data.service */ "./src/app/user-data.service.ts");
/* harmony import */ var _students_board_students_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./students-board/students-board.component */ "./src/app/students-board/students-board.component.ts");
/* harmony import */ var _student_card_student_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-card/student-card.component */ "./src/app/student-card/student-card.component.ts");
/* harmony import */ var _user_search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-search.pipe */ "./src/app/user-search.pipe.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_5__["OnboardingDetailsComponent"],
                _students_board_students_board_component__WEBPACK_IMPORTED_MODULE_8__["StudentsBoardComponent"],
                _student_card_student_card_component__WEBPACK_IMPORTED_MODULE_9__["StudentCardComponent"],
                _user_search_pipe__WEBPACK_IMPORTED_MODULE_10__["UserSearchPipe"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                _user_data_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-auth.service */ "./src/app/user-auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, userAuth) {
        this.router = router;
        this.userAuth = userAuth;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.userAuth.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/document-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/document-service.service.ts ***!
  \*********************************************/
/*! exports provided: DocumentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentServiceService", function() { return DocumentServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentServiceService = /** @class */ (function () {
    function DocumentServiceService() {
    }
    DocumentServiceService.prototype.neededDocumentsForDomestic = function () {
        return [{
                name: 'Domicile certificate',
                isMandatory: true
            }, {
                name: 'Birth certificate',
                isMandatory: true
            }, {
                name: 'Previous marksheets',
                isMandatory: true
            }, {
                name: 'Police clearance',
                isMandatory: false
            }, {
                name: 'Passport',
                isMandatory: false
            }, {
                name: 'Signed declaration',
                isMandatory: true
            }
        ];
    };
    DocumentServiceService.prototype.neededDocumentsForInternational = function () {
        return [{
                name: 'Domicile certificate',
                isMandatory: true
            }, {
                name: 'Birth certificate',
                isMandatory: true
            }, {
                name: 'Previous marksheets',
                isMandatory: true
            }, {
                name: 'Police clearance',
                isMandatory: true
            }, {
                name: 'Passport',
                isMandatory: true
            }, {
                name: 'Signed declaration',
                isMandatory: true
            }
        ];
    };
    DocumentServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentServiceService);
    return DocumentServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <span class=\"navbar-brand mb-0 h1\">On Boarding App</span>\n  <form class=\"form-inline my-2 my-lg-0\">\n    <span class=\"navbar-brand mb-0 h1\">Admin</span>\n  </form>\n</nav>\n\n\n<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [class.active]=\"router.url === '/onboard'\" (click)=\"curActive='onboard'\"\n       [routerLink]=\"['/onboard']\">Onboarding Form</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [class.active]=\"router.url === '/students'\" (click)=\"curActive='student'\"\n       [routerLink]=\"['/students']\">List Students</a>\n  </li>\n</ul>\n\n<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.curActive = 'onboard';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">-->\n<!--username: <input formControlName=\"userName\" type=\"text\">-->\n<!--password: <input formControlName=\"password\" type=\"password\">-->\n\n<!--<button type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>-->\n<!--</form>-->\n\n\n<body>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Login School Admin</h5>\n          <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-label-group\">\n              <input type=\"text\" formControlName=\"userName\" id=\"inputUser\" class=\"form-control\" placeholder=\"username\" required autofocus>\n              <label for=\"inputUser\">User Name</label>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"password\" formControlName=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n              <label for=\"inputPassword\">Password</label>\n            </div>\n            <div class=\"row\">\n              <div class=\"col\">\n            <button class=\"btn btn-sm btn-primary text-uppercase\" [disabled]=\"!loginForm.valid\" type=\"submit\">Login</button>\n              </div>\n              <div class=\"col \">\n                <button class=\"btn btn-sm btn-secondary\" (click)=\"resetFormValues()\"  text-uppercase>Reset</button>\n              </div>\n              </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div align=\"center\">\n    <p>username: <strong> admin</strong></p>\n    <p>password: <strong> password</strong></p>\n  </div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-auth.service */ "./src/app/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, userAuth, router) {
        this.fb = fb;
        this.userAuth = userAuth;
        this.router = router;
        this.loginForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.userAuth.isLoggedIn()) {
            this.router.navigateByUrl('/onboard');
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var userInfo = this.loginForm.value;
        if (this.userAuth.isAuthorizedUser(userInfo)) {
            // console.log('log succesful');
            this.router.navigateByUrl('/onboard');
        }
        else {
        }
    };
    LoginComponent.prototype.resetFormValues = function () {
        this.loginForm.reset();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/onboarding-details/onboarding-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/onboarding-details/onboarding-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".set-display{\r\n  display: inline-flex;\r\n  width: 400px;\r\n}\r\n\r\n.chk-box{\r\n  width: 200px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.document-name{\r\n  width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZy1kZXRhaWxzL29uYm9hcmRpbmctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkaW5nLWRldGFpbHMvb25ib2FyZGluZy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0LWRpc3BsYXl7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uY2hrLWJveHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmRvY3VtZW50LW5hbWV7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/onboarding-details/onboarding-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/onboarding-details/onboarding-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container panel panel-default\">\r\n  <form [formGroup]=\"onboardForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group col-sm-3\">\r\n      <label for=\"studentName\" style=\"font-weight:bold\">Student Name</label>\r\n      <input type=\"text\" class=\"form-control\" [readonly]=\"!editable\" name=\"studentName\" id=\"studentName\"  formControlName=\"studentName\"><br>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-3\">\r\n      <label for=\"category\" style=\"font-weight:bold\">Category</label>\r\n      <select class=\"form-control\"  (click)=\"editable\" name=\"category\" id=\"category\" formControlName=\"category\"\r\n              [contentEditable]=\"editable\" required>\r\n        <option value=\"\" selected disabled hidden>Choose here</option>\r\n        <option [disabled]=\"!editable\" *ngFor = \"let category of categories\">\r\n          {{ category }}\r\n        </option>\r\n      </select> <br>\r\n    </div>\r\n\r\n    <div>\r\n      <div *ngIf=\"onboardForm.get('category').value.toString()!==''\">\r\n        <label for=\"documents\" style=\"font-weight:bold\">Documents</label>\r\n\r\n        <div  class=\"container\" formArrayName=\"documents\" id=\"documents\">\r\n          <div class=\"form-group row\" *ngFor=\"let document of documents.controls; let i=index\">\r\n            <div class=\"set-display\">\r\n              <div class=\"document-name\">\r\n                <label for=\"i\">{{curDocuments[i].name}}</label>\r\n                <span bold *ngIf=\"curDocuments[i].isMandatory\">*</span>\r\n              </div>\r\n              <div class=\"chk-box\">\r\n                <input type=\"checkbox\" class=\"form-control\" (click)=\"editable\" id=\"i\" [formControlName]=\"i\"\r\n                       [required]=\"curDocuments[i].isMandatory\" >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-3\">\r\n      <label for=\"dob\" style=\"font-weight:bold\">DOB</label>\r\n      <input class=\"form-control\" [readonly]=\"!editable\" type=\"date\" name=\"dob\" id=\"dob\"  formControlName=\"dob\"><br>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-3\">\r\n      <label for=\"fatherName\" style=\"font-weight:bold\">Father's Name</label>\r\n      <input class=\"form-control\" [readonly]=\"!editable\" type=\"text\" name=\"fatherName\" id=\"fatherName\" formControlName=\"fatherName\"><br>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-3\">\r\n      <label for=\"motherName\" style=\"font-weight:bold\">Mother's Name</label>\r\n      <input class=\"form-control\" [readonly]=\"!editable\" type=\"text\" name=\"motherName\" id=\"motherName\" formControlName=\"motherName\"><br>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-3\">\r\n      <label for=\"lastClassScore\" style=\"font-weight:bold\">Last Class Score</label>\r\n      <input class=\"form-control\" [readonly]=\"!editable\" type=\"number\" name=\"lastClassScore\" id=\"lastClassScore\"  formControlName=\"lastClassScore\"><br>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-secondary mb-2 col-sm-3\" [disabled]=\"!onboardForm.valid || !editable\">Onboard</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/onboarding-details/onboarding-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/onboarding-details/onboarding-details.component.ts ***!
  \********************************************************************/
/*! exports provided: OnboardingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingDetailsComponent", function() { return OnboardingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-data.service */ "./src/app/user-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _document_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../document-service.service */ "./src/app/document-service.service.ts");







var OnboardingDetailsComponent = /** @class */ (function () {
    function OnboardingDetailsComponent(fb, userService, activatedRoute, router, ds) {
        this.fb = fb;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ds = ds;
        this.curID = null;
        this.curCategory = '';
        this.editable = true;
        this.curDocuments = [];
        this.onboardForm = this.fb.group({
            studentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [''],
            documents: this.fb.array([]),
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fatherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            motherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastClassScore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.categories = ['Domestic', 'International'];
    }
    OnboardingDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onChanges();
        this.state$ = this.activatedRoute.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return window.history.state; }));
        this.state$.subscribe(function (value) { _this.setFormState(value); });
    };
    OnboardingDetailsComponent.prototype.setFormState = function (value) {
        // console.log('In set ofrm state ' + JSON.stringify(value));
        if ('student' in value) {
            var formState = value.student;
            var navSource = value.source;
            this.curID = formState.id;
            // console.log('In set ofrm state ' + );
            this.onboardForm.patchValue(formState);
            if (navSource === 'view') {
                this.editable = false;
            }
        }
    };
    OnboardingDetailsComponent.prototype.onSubmit = function () {
        this.userService.saveUserData(this.onboardForm.value, this.curID);
        this.router.navigateByUrl('/students');
    };
    OnboardingDetailsComponent.prototype.onChanges = function () {
        var _this = this;
        this.onboardForm.get('category').valueChanges.subscribe(function (val) {
            _this.curCategory = "" + val;
            _this.clearDocuments();
            if (_this.curCategory === 'Domestic') {
                _this.curDocuments = _this.ds.neededDocumentsForDomestic();
                for (var _i = 0, _a = _this.curDocuments; _i < _a.length; _i++) {
                    var document_1 = _a[_i];
                    _this.addDocuments(document_1.isMandatory);
                }
            }
            if (_this.curCategory === 'International') {
                _this.curDocuments = _this.ds.neededDocumentsForInternational();
                for (var _b = 0, _c = _this.curDocuments; _b < _c.length; _b++) {
                    var document_2 = _c[_b];
                    _this.addDocuments(document_2.isMandatory);
                }
            }
        });
    };
    Object.defineProperty(OnboardingDetailsComponent.prototype, "documents", {
        get: function () {
            return this.onboardForm.get('documents');
        },
        enumerable: true,
        configurable: true
    });
    OnboardingDetailsComponent.prototype.addDocuments = function (isMandatory) {
        // console.log('inside add documents' + isMandatory);
        if (isMandatory) {
            // console.log('in mandatory');
            this.documents.push(this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        }
        else {
            this.documents.push(this.fb.control(false));
        }
    };
    OnboardingDetailsComponent.prototype.clearDocuments = function () {
        while (0 !== this.documents.length) {
            this.documents.removeAt(0);
        }
    };
    OnboardingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding-details',
            template: __webpack_require__(/*! ./onboarding-details.component.html */ "./src/app/onboarding-details/onboarding-details.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-details.component.css */ "./src/app/onboarding-details/onboarding-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _document_service_service__WEBPACK_IMPORTED_MODULE_6__["DocumentServiceService"]])
    ], OnboardingDetailsComponent);
    return OnboardingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/student-card/student-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-card/student-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtY2FyZC9zdHVkZW50LWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/student-card/student-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-card/student-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card rounded\" style=\"width: 18rem; margin-top: 4px;\">\n  <div class=\"card-body\" [class.bg-warning]=\"curStudent.category==='Domestic'\"\n       [class.bg-info]=\"curStudent.category==='International'\">\n    <h5 class=\"card-title\">{{curStudent.studentName}}</h5>\n    <h3> {{curStudent.category}}</h3>\n    <a routerLink=\"/onboard\" style='margin-right:10px' [state]=\"{student: curStudent, source: 'edit'}\"\n       class=\"btn btn-success\">Edit</a>\n    <a routerLink=\"/onboard\" style='margin-right:10px' [state]=\"{student: curStudent, source: 'view'}\"\n       class=\"btn btn-secondary\">View</a>\n    <a (click)=\"deleteUser()\" class=\"btn btn-danger\">Delete</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/student-card/student-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-card/student-card.component.ts ***!
  \********************************************************/
/*! exports provided: StudentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCardComponent", function() { return StudentCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentCardComponent = /** @class */ (function () {
    function StudentCardComponent() {
        this.studentToBeDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.warnMessage = 'Are you sure you want to delete?';
        this.options = {
            confirmBtnClass: 'btn btn-success',
            confirmBtnText: 'Confirm',
            cancelBtnClass: 'btn btn-danger',
            cancelBtnText: 'Cancel',
            modalSize: 'lg',
            modalClass: '' //DEFAULT VALUE;
        };
    }
    StudentCardComponent.prototype.ngOnInit = function () {
    };
    StudentCardComponent.prototype.deleteUser = function () {
        this.studentToBeDeleted.emit(this.curStudent);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentCardComponent.prototype, "curStudent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentCardComponent.prototype, "studentToBeDeleted", void 0);
    StudentCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-card',
            template: __webpack_require__(/*! ./student-card.component.html */ "./src/app/student-card/student-card.component.html"),
            styles: [__webpack_require__(/*! ./student-card.component.css */ "./src/app/student-card/student-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentCardComponent);
    return StudentCardComponent;
}());



/***/ }),

/***/ "./src/app/students-board/students-board.component.css":
/*!*************************************************************!*\
  !*** ./src/app/students-board/students-board.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzLWJvYXJkL3N0dWRlbnRzLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/students-board/students-board.component.html":
/*!**************************************************************!*\
  !*** ./src/app/students-board/students-board.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 8px;\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <select class=\"form-control\" [(ngModel)]= \"categorySearch\">\n          <option>All</option>\n          <option>Domestic</option>\n          <option>International</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <input  class=\"form-control\" [(ngModel)]=\"searchStudent\" type=\"text\" placeholder=\"Search Student\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor=\"let student of (studentsDisplayed | userSearch: searchStudent: categorySearch)\">\n      <div class=\"col-sm-6\">\n        <app-student-card [curStudent]=\"student\" (studentToBeDeleted)=deleteUser($event) ></app-student-card>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/students-board/students-board.component.ts":
/*!************************************************************!*\
  !*** ./src/app/students-board/students-board.component.ts ***!
  \************************************************************/
/*! exports provided: StudentsBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsBoardComponent", function() { return StudentsBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-data.service */ "./src/app/user-data.service.ts");



var StudentsBoardComponent = /** @class */ (function () {
    function StudentsBoardComponent(userService) {
        this.userService = userService;
        this.searchStudent = '';
        this.categorySearch = 'All';
        this.studentsDisplayed = [];
    }
    StudentsBoardComponent.prototype.ngOnInit = function () {
        this.studentsDisplayed = this.userService.getAllUsers();
    };
    StudentsBoardComponent.prototype.deleteUser = function (deleteUser) {
        // console.log('in delete');
        var studentID = deleteUser.id;
        this.userService.deleteUser(studentID);
        this.studentsDisplayed = this.studentsDisplayed.filter(function (item) { return item.id !== studentID; });
    };
    StudentsBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students-board',
            template: __webpack_require__(/*! ./students-board.component.html */ "./src/app/students-board/students-board.component.html"),
            styles: [__webpack_require__(/*! ./students-board.component.css */ "./src/app/students-board/students-board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"]])
    ], StudentsBoardComponent);
    return StudentsBoardComponent;
}());



/***/ }),

/***/ "./src/app/user-auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user-auth.service.ts ***!
  \**************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserAuthService = /** @class */ (function () {
    function UserAuthService() {
        this.loggedIn = 'loggedIn';
        this.authorizedUsers = [{
                userName: 'admin',
                password: 'password'
            }];
        this.lclStorage = window.localStorage;
    }
    UserAuthService.prototype.isLoggedIn = function () {
        if (this.lclStorage.getItem(this.loggedIn) === 'true') {
            return true;
        }
        else {
            return false;
        }
    };
    UserAuthService.prototype.isAuthorizedUser = function (userInfo) {
        // console.log(userInfo);
        if (userInfo === null || !(userInfo.hasOwnProperty('userName')) || !(userInfo.hasOwnProperty('password'))) {
            return false;
        }
        else {
            for (var _i = 0, _a = this.authorizedUsers; _i < _a.length; _i++) {
                var user = _a[_i];
                // console.log('user' + user);
                if (user.userName === userInfo.userName && user.password === userInfo.password) {
                    this.lclStorage.setItem(this.loggedIn, JSON.stringify(true));
                    return true;
                }
            }
            return false;
        }
    };
    UserAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserAuthService);
    return UserAuthService;
}());



/***/ }),

/***/ "./src/app/user-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/user-data.service.ts ***!
  \**************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDataService = /** @class */ (function () {
    function UserDataService() {
        this.allUsers = 'allUsers';
        this.lclStorage = window.localStorage;
    }
    UserDataService.prototype.uniqueId = function () {
        return 'id-' + Math.random().toString(36).substr(2, 16);
    };
    UserDataService.prototype.saveUserData = function (userData, id) {
        var existingUsers;
        userData.id = id;
        if (id === null) {
            userData.id = this.uniqueId();
        }
        if (this.lclStorage.getItem(this.allUsers) === null) {
            this.lclStorage.setItem(this.allUsers, JSON.stringify([userData]));
        }
        else {
            existingUsers = JSON.parse(this.lclStorage.getItem(this.allUsers));
            existingUsers = existingUsers.filter(function (user) { return user.id !== id; });
            existingUsers.push(userData);
            this.lclStorage.setItem(this.allUsers, JSON.stringify(existingUsers));
        }
        // console.log(this.lclStorage.getItem(this.allUsers) === null);
    };
    UserDataService.prototype.getAllUsers = function () {
        if (this.lclStorage.getItem(this.allUsers) === null) {
            return [];
        }
        else {
            return JSON.parse(this.lclStorage.getItem(this.allUsers));
        }
    };
    UserDataService.prototype.deleteUser = function (id) {
        if (!(this.lclStorage.getItem(this.allUsers) === null)) {
            // console.log(this.lclStorage.getItem(this.allUsers));
            var existingUsers = void 0;
            existingUsers = JSON.parse(this.lclStorage.getItem(this.allUsers));
            var indToBeDeleted = -1;
            for (var ind = 0; ind < existingUsers.length; ind++) {
                if (existingUsers[ind].id === id) {
                    indToBeDeleted = ind;
                    break;
                }
            }
            if (indToBeDeleted !== -1) {
                existingUsers.splice(indToBeDeleted, 1);
                this.lclStorage.setItem(this.allUsers, JSON.stringify(existingUsers));
            }
        }
    };
    UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDataService);
    return UserDataService;
}());



/***/ }),

/***/ "./src/app/user-search.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/user-search.pipe.ts ***!
  \*************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserSearchPipe = /** @class */ (function () {
    function UserSearchPipe() {
    }
    UserSearchPipe.prototype.transform = function (allStudents, searchName, categorySearch) {
        if (categorySearch !== 'All') {
            return allStudents.filter(function (student) { return student.studentName.includes(searchName) && student.category === categorySearch; });
        }
        else {
            return allStudents.filter(function (student) { return student.studentName.includes(searchName); });
        }
    };
    UserSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'userSearch'
        })
    ], UserSearchPipe);
    return UserSearchPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\nagp\angular_assignment\OnBoardingApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map