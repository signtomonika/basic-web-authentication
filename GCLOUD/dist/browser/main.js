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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_microsoft_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/microsoft.service */ "./src/app/auth/microsoft.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(microsoft) {
        this.microsoft = microsoft;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Initializing Auth Applications - Microsoft for Windows and Firebase for other Social Applications
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            apiKey: "AIzaSyC75sUhp7rb4IwAFZ3iwxfh5RxiMZWZYnc",
            authDomain: "projauthentication.firebaseapp.com",
        });
        this.microsoft.initAuth();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_microsoft_service__WEBPACK_IMPORTED_MODULE_2__["MicrosoftService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_social_social_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/social/social.component */ "./src/app/auth/social/social.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _routes_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/auth-guard.service */ "./src/app/routes/auth-guard.service.ts");
/* harmony import */ var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/app-routing.module */ "./src/app/routes/app-routing.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_social_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/social.service */ "./src/app/auth/social.service.ts");
/* harmony import */ var _auth_microsoft_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/microsoft.service */ "./src/app/auth/microsoft.service.ts");
/* harmony import */ var _shared_ms_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/ms-user.service */ "./src/app/shared/ms-user.service.ts");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var _shared_ms_user_detail_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/ms-user-detail.service */ "./src/app/shared/ms-user-detail.service.ts");
/* harmony import */ var _auth_http_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/http.service */ "./src/app/auth/http.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
//SYSTEM MODULES
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// COMPONENT MODULES






// ROUTES


//SERVICES








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _auth_social_social_component__WEBPACK_IMPORTED_MODULE_9__["SocialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'my-login-app' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _routes_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                _shared_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _auth_social_service__WEBPACK_IMPORTED_MODULE_14__["SocialService"],
                _auth_microsoft_service__WEBPACK_IMPORTED_MODULE_15__["MicrosoftService"],
                _shared_ms_user_service__WEBPACK_IMPORTED_MODULE_16__["MSuserService"],
                _shared_image_service__WEBPACK_IMPORTED_MODULE_17__["ImageService"],
                _shared_ms_user_detail_service__WEBPACK_IMPORTED_MODULE_18__["MsUserDetailService"],
                _auth_http_service__WEBPACK_IMPORTED_MODULE_19__["HttpService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hellojs/dist/hello.all.js */ "./node_modules/hellojs/dist/hello.all.js");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.errorMessage = '';
        this.authenticated = false;
        this.isFirebaseUsed = false;
        this.isMicrosoftUsed = false;
    }
    AuthService.prototype.setFirebaseUse = function () {
        // console.log('setFirebaseUse');
        this.isFirebaseUsed = true;
        this.isMicrosoftUsed = false;
    };
    AuthService.prototype.setMSuse = function () {
        //console.log('setMSuse');
        this.isFirebaseUsed = false;
        this.isMicrosoftUsed = true;
    };
    AuthService.prototype.getFirebaseUse = function () {
        //console.log('FB Used? ', this.isFirebaseUsed)
        return this.isFirebaseUsed;
    };
    AuthService.prototype.getMSuse = function () {
        //console.log('MS USed? ', this.isMicrosoftUsed) ;
        return this.isMicrosoftUsed;
    };
    AuthService.prototype.signInUser = function (email, password) {
        var _this = this;
        this.setFirebaseUse();
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.setAuthentication();
        })
            .catch(function (error) {
            _this.errorMessage = error.message;
        });
    };
    AuthService.prototype.signUpUser = function (email, password, name, photoUrl) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.setUserProfile(name, photoUrl);
        })
            .catch(function (error) {
            _this.setError(error.message);
        });
    };
    AuthService.prototype.setUserProfile = function (name, picUrl) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser
            .updateProfile({
            displayName: name,
            photoURL: picUrl
        }).then(function () {
            _this.logOut();
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setError = function (message) {
        this.errorMessage = message;
    };
    AuthService.prototype.getError = function () {
        return this.errorMessage;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    AuthService.prototype.setAuthentication = function () {
        this.authenticated = true;
        this.router.navigate(['/home']);
    };
    AuthService.prototype.logOut = function () {
        if (this.isFirebaseUsed) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        }
        else {
            //Logout from Microsoft
            hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_3__('msft').logout();
        }
        this.isFirebaseUsed = false;
        this.isMicrosoftUsed = false;
        this.authenticated = false;
        this.router.navigate(['/']);
        //console.log('LOGOUT');
    };
    AuthService.prototype.deleteUser = function () {
        if (this.isFirebaseUsed) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.delete();
        }
        this.logOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/http.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hellojs/dist/hello.all.js */ "./node_modules/hellojs/dist/hello.all.js");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService.prototype.getAccessToken = function () {
        var msft = hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_1__('msft').getAuthResponse();
        var accessToken = msft.access_token;
        return accessToken;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:30px\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n\r\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n\r\n        <div class=\"form-group\">\r\n\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" ngModel required #email=\"ngModel\">\r\n          <span class=\"help-block text-warning\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email!</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\r\n          <span class=\"help-block text-warning\" *ngIf=\"!password.valid && password.touched\"> Password should be atleast 6 characters long </span>\r\n\r\n        </div>\r\n\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\r\n\r\n        <br>\r\n        <br>\r\n\r\n        <div style=\"color: red\">\r\n          {{ error }}\r\n        </div>\r\n\r\n\r\n\r\n      </form>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"col-xs-5 col-sm-3\">\r\n\r\n\r\n      <app-social></app-social>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.errorMessage = '';
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.email = form.value.email;
        this.password = form.value.password;
        //  console.log('email', this.email );
        // console.log('password', this.password );
        this.authService.signInUser(this.email, this.password);
        setTimeout(function () {
            _this.error = _this.authService.getError();
        }, 500);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/microsoft.service.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/microsoft.service.ts ***!
  \*******************************************/
/*! exports provided: MicrosoftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicrosoftService", function() { return MicrosoftService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hellojs/dist/hello.all.js */ "./node_modules/hellojs/dist/hello.all.js");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/app.config */ "./src/app/shared/app.config.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_ms_user_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ms-user-detail.service */ "./src/app/shared/ms-user-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// HANDLES LOGIN 
var MicrosoftService = /** @class */ (function () {
    function MicrosoftService(zone, router, authService, userDetailMs) {
        this.zone = zone;
        this.router = router;
        this.authService = authService;
        this.userDetailMs = userDetailMs;
    }
    //Initializing Microsoft Developer App to use for Authentication
    MicrosoftService.prototype.initAuth = function () {
        hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_2__["init"]({
            msft: {
                id: _shared_app_config__WEBPACK_IMPORTED_MODULE_3__["config"].appId,
                oauth: {
                    version: 2,
                    auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
                },
                scope_delim: ' ',
                form: false
            },
        }
        // ,
        // { redirect_uri:  ''  //window.location.href 
        // }
        );
        // console.log('Microsoft Initialized')
    };
    //Login
    MicrosoftService.prototype.login = function () {
        //console.log('set MSUSE');
        var _this = this;
        this.authService.setMSuse();
        hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_2__('msft').login({ scope: _shared_app_config__WEBPACK_IMPORTED_MODULE_3__["config"].scope }).then(function () {
            _this.zone.run(function () {
                _this.userDetailMs.getMeMs();
                _this.authService.setAuthentication();
            });
        }, function (e) { return console.error(e.error.message); });
    };
    MicrosoftService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _shared_ms_user_detail_service__WEBPACK_IMPORTED_MODULE_5__["MsUserDetailService"]])
    ], MicrosoftService);
    return MicrosoftService;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:30px\">\n\n  <div class=\"row\">\n\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\n        <h3>Profile Information</h3>\n\n        <div class=\"form-group\">\n\n          <label for=\"name\">Name</label>\n          <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ngModel required #name=\"ngModel\">\n          <span class=\"help-block text-warning\" *ngIf=\"!name.valid && name.touched\">Please enter a valid User Name!</span>\n\n        </div>\n\n        <div class=\"form-group\">\n\n          <label for=\"photo\">Photo Url</label>\n          <input type=\"text\" name=\"photo\" id=\"photo\" class=\"form-control\" ngModel required #photo=\"ngModel\">\n          <span class=\"help-block text-warning\" *ngIf=\"!photo.valid && photo.touched\">Please enter a valid Url!</span>\n\n        </div>\n\n        <h3>Login Credentials</h3>\n\n        <div class=\"form-group\">\n\n          <label for=\"email\">Email</label>\n          <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" ngModel required #email=\"ngModel\">\n          <span class=\"help-block text-warning\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email!</span>\n\n        </div>\n\n        <div class=\"form-group\">\n\n          <label for=\"password\">Password</label>\n          <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n          <span class=\"help-block text-warning\" *ngIf=\"!password.valid && password.touched\"> Password should be atleast 6 characters long </span>\n\n        </div>\n\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">SignUp</button>\n\n        <br>\n        <br>\n\n        <div style=\"color: red\">\n          {{ error }}\n        </div>\n\n\n\n      </form>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.error = '';
    };
    SignupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.email = form.value.email;
        this.password = form.value.password;
        this.name = form.value.name;
        this.photoUrl = form.value.photo;
        // console.log('email', this.email );
        // console.log('password', this.password );
        this.authService.signUpUser(this.email, this.password, this.name, this.photoUrl);
        setTimeout(function () {
            _this.error = _this.authService.getError();
        }, 500);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/social.service.ts":
/*!****************************************!*\
  !*** ./src/app/auth/social.service.ts ***!
  \****************************************/
/*! exports provided: SocialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialService", function() { return SocialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialService = /** @class */ (function () {
    function SocialService(authService, zone) {
        this.authService = authService;
        this.zone = zone;
        this.error = '';
    }
    SocialService.prototype.setProvider = function (provider) {
        this.authService.setFirebaseUse();
        this.provider = null;
        // console.log(provider);
        switch (provider) {
            case 'google':
                this.provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
                break;
            case 'twitter':
                this.provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider();
                break;
            case 'facebook':
                this.provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
                break;
            case 'github':
                this.provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].GithubAuthProvider();
                break;
        }
        this.socialSignIn();
    };
    SocialService.prototype.socialSignIn = function () {
        //console.log('Provider ', this.provider);
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithPopup(this.provider).
            then(function (result) {
            //console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            //var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //console.log('User ', user);
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken().then(function (response) {
                _this.zone.run(function () {
                    _this.authService.setAuthentication();
                });
            });
            // ...
        })
            .catch(function (error) {
            console.log('Error ', error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            _this.error = errorMessage;
            _this.authService.setError(errorMessage);
        });
    };
    SocialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SocialService);
    return SocialService;
}());



/***/ }),

/***/ "./src/app/auth/social/social.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/social/social.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/social/social.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/social/social.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h5> Or Login using Social Media</h5>\n\n  <a class=\"btn btn-block btn-social btn-google\" style=\"color: white\" (click)=\"socialSign('google')\">\n    <span class=\"fa fa-google\"></span> Sign in with Google\n  </a>\n\n  <a class=\"btn btn-block btn-social btn-facebook\" style=\"color: white\" (click)=\"socialSign('facebook')\">\n    <span class=\"fa fa-facebook\"></span> Sign in with Facebook\n  </a>\n\n  <a class=\"btn btn-block btn-social btn-twitter\" style=\"color: white\" (click)=\"socialSign('twitter')\">\n    <span class=\"fa fa-twitter\"></span> Sign in with Twitter\n  </a>\n\n  <a class=\"btn btn-block btn-social btn-github\" style=\"color: white\" (click)=\"socialSign('github')\">\n      <span class=\"fa fa-github\"></span> Sign in with Github\n    </a>\n\n     <a class=\"btn btn-block btn-social btn-microsoft\" style=\"color: white\" (click)=\"windowsSign()\">\n        <span class=\"fa fa-windows\"></span> Sign in with Microsoft\n      </a> \n\n</div>"

/***/ }),

/***/ "./src/app/auth/social/social.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/social/social.component.ts ***!
  \*************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _social_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social.service */ "./src/app/auth/social.service.ts");
/* harmony import */ var _microsoft_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../microsoft.service */ "./src/app/auth/microsoft.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialComponent = /** @class */ (function () {
    function SocialComponent(socialService, microsoft) {
        this.socialService = socialService;
        this.microsoft = microsoft;
        this.state = 'final';
        this.start = false;
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent.prototype.socialSign = function (provider) {
        this.socialService.setProvider(provider);
    };
    SocialComponent.prototype.windowsSign = function () {
        //console.log('Microsoft Logged In');
        this.microsoft.login();
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/auth/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/auth/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [_social_service__WEBPACK_IMPORTED_MODULE_1__["SocialService"], _microsoft_service__WEBPACK_IMPORTED_MODULE_2__["MicrosoftService"]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n\n    <div class=\"container-fluid\">\n\n        <div class=\"navbar-header\">\n\n            <a class=\"nav navbar-brand\" style=\"color: white\">Basic Login Application</a>\n\n        </div>\n\n        <div class=\"align-content-end\">\n\n            <div class=\"container\">\n\n                <ul class=\"nav nav-tabs\" *ngIf=\"!isAuthenticated()\">\n\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/signin\">Login</a>\n                    </li>\n\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/signup\">Register</a>\n                    </li>\n\n                </ul>\n\n                <ul class=\"nav nav-tabs\" *ngIf=\"isAuthenticated() \">\n\n                    <li class=\"nav-item\">\n                        <a style=\"cursor: pointer;  color: lightskyblue;\" class=\"nav-link\" href=\"https://github.com/MonikaRavi/Basic-Web-Authentication.git\" target=\"_blank\">\n                            <img src=\"../../assets/GitHub-Mark-32px.png\" alt=\"GitHub Repository\">\n                        </a>\n                    </li>\n\n                    <li class=\"nav-item\">\n                        <a style=\"cursor: pointer; color: lightskyblue ;\" class=\"nav-link\" (click)=\"onLogOut()\">Logout</a>\n                    </li>\n\n                    <li class=\"nav-item\">\n                        <a style=\"cursor: pointer; color: lightskyblue ;\" class=\"nav-link\" (click)=\"onDeleteUser()\">Delete User</a>\n                    </li>\n\n                </ul>\n\n\n\n            </div>\n        </div>\n\n    </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isAuthenticated = function () {
        //console.log(this.authService.isAuthenticated());
        return this.authService.isAuthenticated();
    };
    HeaderComponent.prototype.onLogOut = function () {
        this.authService.logOut();
    };
    HeaderComponent.prototype.onDeleteUser = function () {
        this.authService.deleteUser();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:30px\">\n    <h4>Logged In As..</h4>\n    <div class=\"row\">\n        <div class=\"col-xs-5 col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    {{ getName() }}\n                </div>\n                <div class=\"card-body\">\n                     <img [src]=\"getPhoto()\" [alt]=\"getName()\" class=\"img-responsive\" style=\"max-height:300px; max-width: 300px;\">\n                    <!-- <img [src]=\"base64\" [alt]=\"getName()\" class=\"img-responsive\" style=\"max-height:300px;\"> -->\n                </div>\n                <div class=\"card-footer\">\n                    {{ getEmail() }}\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getName = function () {
        return this.userService.getUserName();
    };
    HomeComponent.prototype.getEmail = function () {
        return this.userService.getUserEmail();
    };
    HomeComponent.prototype.getPhoto = function () {
        return this.userService.getUserPhoto();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.userService.isMicrosoftUsed()) {
            this.userService.unsubMsUser();
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/routes/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'home' //, canActivate:[AuthGuard] 
        ,
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/app.config.ts":
/*!**************************************!*\
  !*** ./src/app/shared/app.config.ts ***!
  \**************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    // Microsoft Connect Starts
    appId: '4c7b56aa-34e7-4aa0-804f-d63e07b1dd67',
    scope: 'User.Read Mail.Send'
};


/***/ }),

/***/ "./src/app/shared/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/image.service.ts ***!
  \*****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ms_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ms-user.service */ "./src/app/shared/ms-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = /** @class */ (function () {
    function ImageService(httpClient, msUserService) {
        this.httpClient = httpClient;
        this.msUserService = msUserService;
    }
    ImageService.prototype.getImage = function (imageUrl) {
        //  console.log('response defined before get ', this.httpClient.get<Blob>(imageUrl)) ;
        //  console.log( 'response type inside get ' ,this.httpClient.get(imageUrl, {responseType : 'blob' })) ;
        return this.httpClient.get(imageUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.msUserService.getToken()),
            responseType: 'blob'
        });
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ms_user_service__WEBPACK_IMPORTED_MODULE_2__["MSuserService"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/shared/ms-user-detail.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/ms-user-detail.service.ts ***!
  \**************************************************/
/*! exports provided: MsUserDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsUserDetailService", function() { return MsUserDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ms_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ms-user.service */ "./src/app/shared/ms-user.service.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.service */ "./src/app/shared/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MsUserDetailService = /** @class */ (function () {
    function MsUserDetailService(msUserService, imageService) {
        this.msUserService = msUserService;
        this.imageService = imageService;
        this.isImageLoading = false;
        this.graphUri = "https://graph.microsoft.com/v1.0/me/photo/$value";
    }
    MsUserDetailService.prototype.getMeMs = function () {
        var _this = this;
        this.subsGetMe = this.msUserService.getMe().subscribe(function (me) { return _this.me = me; });
    };
    MsUserDetailService.prototype.unsubMe = function () {
        this.subsGetMe.unsubscribe();
    };
    MsUserDetailService.prototype.getEmail = function () {
        return this.me.userPrincipalName;
    };
    MsUserDetailService.prototype.getUserName = function () {
        return this.me.displayName;
    };
    // Microsoft graph API returns a blob data which is converted into image
    MsUserDetailService.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            //console.log(reader.result);
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    MsUserDetailService.prototype.getImageFromService = function () {
        var _this = this;
        this.isImageLoading = true;
        this.imageService.getImage(this.graphUri).subscribe(function (data) {
            //console.log(data);
            _this.createImageFromBlob(data);
            _this.isImageLoading = false;
        }, function (error) {
            _this.isImageLoading = false;
            console.log(error);
        });
        return this.imageToShow;
    };
    MsUserDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ms_user_service__WEBPACK_IMPORTED_MODULE_1__["MSuserService"], _image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], MsUserDetailService);
    return MsUserDetailService;
}());



/***/ }),

/***/ "./src/app/shared/ms-user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/ms-user.service.ts ***!
  \*******************************************/
/*! exports provided: MSuserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSuserService", function() { return MSuserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/microsoft-graph-client */ "./node_modules/@microsoft/microsoft-graph-client/lib/src/index.js");
/* harmony import */ var _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/http.service */ "./src/app/auth/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MSuserService = /** @class */ (function () {
    function MSuserService(httpService) {
        this.httpService = httpService;
    }
    MSuserService.prototype.getClient = function () {
        var _this = this;
        var client = _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1__["Client"].init({
            authProvider: function (done) {
                done(null, _this.httpService.getAccessToken()); //first parameter takes an error if you can't get an access token
            }
        });
        return client;
    };
    MSuserService.prototype.getMe = function () {
        var client = this.getClient();
        // console.log( 'Client ',client);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client
            .api('me')
            .select("displayName, userPrincipalName, id, mail")
            .get()
            .then((function (res) {
            // console.log(res);
            return res;
        })));
    };
    MSuserService.prototype.getToken = function () {
        return this.httpService.getAccessToken();
    };
    MSuserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], MSuserService);
    return MSuserService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_user_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ms-user-detail.service */ "./src/app/shared/ms-user-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(authService, userDetailMs) {
        this.authService = authService;
        this.userDetailMs = userDetailMs;
    }
    UserService.prototype.isMicrosoftUsed = function () {
        return this.authService.getMSuse();
    };
    UserService.prototype.getMicrosoftUser = function () {
        if (this.authService.getMSuse()) {
            this.userDetailMs.getMeMs();
        }
    };
    UserService.prototype.unsubMsUser = function () {
        this.userDetailMs.unsubMe();
    };
    UserService.prototype.getUserName = function () {
        if (this.authService.getFirebaseUse()) {
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.displayName;
        }
        else {
            return this.userDetailMs.getUserName();
        }
    };
    UserService.prototype.getUserEmail = function () {
        if (this.authService.getFirebaseUse()) {
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
        }
        else {
            return this.userDetailMs.getEmail();
        }
    };
    UserService.prototype.getUserPhoto = function () {
        if (this.authService.getFirebaseUse()) {
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.photoURL;
        }
        else {
            return this.userDetailMs.getImageFromService();
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _ms_user_detail_service__WEBPACK_IMPORTED_MODULE_3__["MsUserDetailService"]])
    ], UserService);
    return UserService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\monikar\Desktop\Angular Projects\Authenticate\Aunthentication\web-authentication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map