function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_movable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/movable */
    "./src/app/model/movable.ts");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/canvas.service */
    "./src/app/service/canvas.service.ts");
    /* harmony import */


    var src_app_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/canvas/canvas.component */
    "./src/app/components/canvas/canvas.component.ts");
    /* harmony import */


    var src_app_components_control_control_pannel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/control/control-pannel.component */
    "./src/app/components/control/control-pannel.component.ts");
    /* harmony import */


    var src_app_components_control_layer_layer_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/control/layer/layer-control.component */
    "./src/app/components/control/layer/layer-control.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(canvasService_) {
        _classCallCheck(this, AppComponent);

        this.canvasService_ = canvasService_;
        this.title = 'thumb-up';
        this.movable = new src_app_model_movable__WEBPACK_IMPORTED_MODULE_1__["Movable"]();
      }

      _createClass(AppComponent, [{
        key: "canvas",
        get: function get() {
          return this.canvasService_.canvas;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"],
        useClass: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["CanvasCommandService"]
      }])],
      decls: 4,
      vars: 1,
      consts: [[1, "container"], [3, "canvas"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas-component", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "control-pannel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "layer-control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("canvas", ctx.canvas);
        }
      },
      directives: [src_app_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__["CanvasComponent"], src_app_components_control_control_pannel_component__WEBPACK_IMPORTED_MODULE_5__["ControlPannelComponent"], src_app_components_control_layer_layer_control_component__WEBPACK_IMPORTED_MODULE_6__["LayerControlComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #303030;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]    > control-pannel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 0;\n  width: 340px;\n  bottom: 340px;\n}\n.container[_ngcontent-%COMP%]    > layer-control[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 0;\n  width: 340px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHNvdXJjZVxcdGh1bWItdXAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICA+IGNvbnRyb2wtcGFubmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgYm90dG9tOiAzNDBweDtcclxuICB9XHJcblxyXG4gID4gbGF5ZXItY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lciA+IGNvbnRyb2wtcGFubmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMzQwcHg7XG4gIGJvdHRvbTogMzQwcHg7XG59XG4uY29udGFpbmVyID4gbGF5ZXItY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDM0MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          providers: [{
            provide: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"],
            useClass: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["CanvasCommandService"]
          }]
        }]
      }], function () {
        return [{
          type: src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_app_components_movable_movable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/movable/movable.component */
    "./src/app/components/movable/movable.component.ts");
    /* harmony import */


    var src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/canvas.service */
    "./src/app/service/canvas.service.ts");
    /* harmony import */


    var src_app_components_image_drawing_image_drawing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/image-drawing/image-drawing.component */
    "./src/app/components/image-drawing/image-drawing.component.ts");
    /* harmony import */


    var src_app_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/canvas/canvas.component */
    "./src/app/components/canvas/canvas.component.ts");
    /* harmony import */


    var src_app_components_text_drawing_text_drawing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/text-drawing/text-drawing.component */
    "./src/app/components/text-drawing/text-drawing.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var src_app_components_control_control_pannel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/components/control/control-pannel.component */
    "./src/app/components/control/control-pannel.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/components/canvas/canvas.component.service */
    "./src/app/components/canvas/canvas.component.service.ts");
    /* harmony import */


    var src_app_components_control_movable_movable_control_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/components/control/movable/movable-control.component */
    "./src/app/components/control/movable/movable-control.component.ts");
    /* harmony import */


    var src_app_components_control_layer_layer_control_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/app/components/control/layer/layer-control.component */
    "./src/app/components/control/layer/layer-control.component.ts");
    /* harmony import */


    var src_app_components_control_layer_layer_control_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! src/app/components/control/layer/layer-control-item.component */
    "./src/app/components/control/layer/layer-control-item.component.ts");
    /* harmony import */


    var src_app_components_control_text_drawing_text_drawing_control_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! src/app/components/control/text-drawing/text-drawing-control.component */
    "./src/app/components/control/text-drawing/text-drawing-control.component.ts");
    /* harmony import */


    var src_app_components_control_drawing_drawing_control_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! src/app/components/control/drawing/drawing-control.component */
    "./src/app/components/control/drawing/drawing-control.component.ts");
    /* harmony import */


    var src_app_components_control_filter_color_filter_control__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! src/app/components/control/filter/color-filter-control */
    "./src/app/components/control/filter/color-filter-control.ts");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
    /* harmony import */


    var src_app_components_control_image_drawing_image_drawing_control_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! src/app/components/control/image-drawing/image-drawing-control.component */
    "./src/app/components/control/image-drawing/image-drawing-control.component.ts");
    /* harmony import */


    var src_app_service_keybinding_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! src/app/service/keybinding.service */
    "./src/app/service/keybinding.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [src_app_service_keybinding_service__WEBPACK_IMPORTED_MODULE_29__["KeybindingService"], src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__["CanvasService"], src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_20__["CanvasComponentService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__["ColorPickerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_components_control_control_pannel_component__WEBPACK_IMPORTED_MODULE_10__["ControlPannelComponent"], src_app_components_control_movable_movable_control_component__WEBPACK_IMPORTED_MODULE_21__["MovableControlComponent"], src_app_components_control_layer_layer_control_component__WEBPACK_IMPORTED_MODULE_22__["LayerControlComponent"], src_app_components_control_layer_layer_control_item_component__WEBPACK_IMPORTED_MODULE_23__["LayerControlItemComponent"], src_app_components_control_drawing_drawing_control_component__WEBPACK_IMPORTED_MODULE_25__["DrawingControlComponent"], src_app_components_control_filter_color_filter_control__WEBPACK_IMPORTED_MODULE_26__["ColorFilterControlComponent"], src_app_components_control_text_drawing_text_drawing_control_component__WEBPACK_IMPORTED_MODULE_24__["TextDrawingControlComponent"], src_app_components_control_image_drawing_image_drawing_control_component__WEBPACK_IMPORTED_MODULE_28__["ImageDrawingControlComponent"], src_app_components_movable_movable_component__WEBPACK_IMPORTED_MODULE_4__["MovableComponent"], src_app_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"], src_app_components_image_drawing_image_drawing_component__WEBPACK_IMPORTED_MODULE_6__["ImageDrawingComponent"], src_app_components_text_drawing_text_drawing_component__WEBPACK_IMPORTED_MODULE_8__["TextDrawingComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__["ColorPickerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_components_control_control_pannel_component__WEBPACK_IMPORTED_MODULE_10__["ControlPannelComponent"], src_app_components_control_movable_movable_control_component__WEBPACK_IMPORTED_MODULE_21__["MovableControlComponent"], src_app_components_control_layer_layer_control_component__WEBPACK_IMPORTED_MODULE_22__["LayerControlComponent"], src_app_components_control_layer_layer_control_item_component__WEBPACK_IMPORTED_MODULE_23__["LayerControlItemComponent"], src_app_components_control_drawing_drawing_control_component__WEBPACK_IMPORTED_MODULE_25__["DrawingControlComponent"], src_app_components_control_filter_color_filter_control__WEBPACK_IMPORTED_MODULE_26__["ColorFilterControlComponent"], src_app_components_control_text_drawing_text_drawing_control_component__WEBPACK_IMPORTED_MODULE_24__["TextDrawingControlComponent"], src_app_components_control_image_drawing_image_drawing_control_component__WEBPACK_IMPORTED_MODULE_28__["ImageDrawingControlComponent"], src_app_components_movable_movable_component__WEBPACK_IMPORTED_MODULE_4__["MovableComponent"], src_app_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"], src_app_components_image_drawing_image_drawing_component__WEBPACK_IMPORTED_MODULE_6__["ImageDrawingComponent"], src_app_components_text_drawing_text_drawing_component__WEBPACK_IMPORTED_MODULE_8__["TextDrawingComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__["ColorPickerModule"]],
          providers: [src_app_service_keybinding_service__WEBPACK_IMPORTED_MODULE_29__["KeybindingService"], src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__["CanvasService"], src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_20__["CanvasComponentService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](src_app_components_image_drawing_image_drawing_component__WEBPACK_IMPORTED_MODULE_6__["ImageDrawingComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgForm"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortalDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardAvatar"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatTextareaAutosize"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSlider"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatOptgroup"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxRequiredValidator"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__["ColorPickerDirective"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_components_control_control_pannel_component__WEBPACK_IMPORTED_MODULE_10__["ControlPannelComponent"], src_app_components_control_movable_movable_control_component__WEBPACK_IMPORTED_MODULE_21__["MovableControlComponent"], src_app_components_control_layer_layer_control_component__WEBPACK_IMPORTED_MODULE_22__["LayerControlComponent"], src_app_components_control_layer_layer_control_item_component__WEBPACK_IMPORTED_MODULE_23__["LayerControlItemComponent"], src_app_components_control_drawing_drawing_control_component__WEBPACK_IMPORTED_MODULE_25__["DrawingControlComponent"], src_app_components_control_filter_color_filter_control__WEBPACK_IMPORTED_MODULE_26__["ColorFilterControlComponent"], src_app_components_control_text_drawing_text_drawing_control_component__WEBPACK_IMPORTED_MODULE_24__["TextDrawingControlComponent"], src_app_components_control_image_drawing_image_drawing_control_component__WEBPACK_IMPORTED_MODULE_28__["ImageDrawingControlComponent"], src_app_components_movable_movable_component__WEBPACK_IMPORTED_MODULE_4__["MovableComponent"], src_app_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"], src_app_components_image_drawing_image_drawing_component__WEBPACK_IMPORTED_MODULE_6__["ImageDrawingComponent"], src_app_components_text_drawing_text_drawing_component__WEBPACK_IMPORTED_MODULE_8__["TextDrawingComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](src_app_components_text_drawing_text_drawing_component__WEBPACK_IMPORTED_MODULE_8__["TextDrawingComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgForm"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortalDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardAvatar"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatTextareaAutosize"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSlider"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatOptgroup"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxRequiredValidator"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__["ColorPickerDirective"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_components_control_control_pannel_component__WEBPACK_IMPORTED_MODULE_10__["ControlPannelComponent"], src_app_components_control_movable_movable_control_component__WEBPACK_IMPORTED_MODULE_21__["MovableControlComponent"], src_app_components_control_layer_layer_control_component__WEBPACK_IMPORTED_MODULE_22__["LayerControlComponent"], src_app_components_control_layer_layer_control_item_component__WEBPACK_IMPORTED_MODULE_23__["LayerControlItemComponent"], src_app_components_control_drawing_drawing_control_component__WEBPACK_IMPORTED_MODULE_25__["DrawingControlComponent"], src_app_components_control_filter_color_filter_control__WEBPACK_IMPORTED_MODULE_26__["ColorFilterControlComponent"], src_app_components_control_text_drawing_text_drawing_control_component__WEBPACK_IMPORTED_MODULE_24__["TextDrawingControlComponent"], src_app_components_control_image_drawing_image_drawing_control_component__WEBPACK_IMPORTED_MODULE_28__["ImageDrawingControlComponent"], src_app_components_movable_movable_component__WEBPACK_IMPORTED_MODULE_4__["MovableComponent"], src_app_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"], src_app_components_image_drawing_image_drawing_component__WEBPACK_IMPORTED_MODULE_6__["ImageDrawingComponent"], src_app_components_text_drawing_text_drawing_component__WEBPACK_IMPORTED_MODULE_8__["TextDrawingComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/components/canvas/canvas.component.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/canvas/canvas.component.service.ts ***!
    \***************************************************************/

  /*! exports provided: CanvasComponentService */

  /***/
  function srcAppComponentsCanvasCanvasComponentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasComponentService", function () {
      return CanvasComponentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanvasComponentService = function CanvasComponentService() {
      _classCallCheck(this, CanvasComponentService);
    };

    CanvasComponentService.ɵfac = function CanvasComponentService_Factory(t) {
      return new (t || CanvasComponentService)();
    };

    CanvasComponentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanvasComponentService,
      factory: CanvasComponentService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/canvas/canvas.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/canvas/canvas.component.ts ***!
    \*******************************************************/

  /*! exports provided: CanvasComponent */

  /***/
  function srcAppComponentsCanvasCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasComponent", function () {
      return CanvasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_model_image_drawing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/model/image-drawing */
    "./src/app/model/image-drawing.ts");
    /* harmony import */


    var src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/model/text-drawing */
    "./src/app/model/text-drawing.ts");
    /* harmony import */


    var src_app_components_text_drawing_text_drawing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/text-drawing/text-drawing.component */
    "./src/app/components/text-drawing/text-drawing.component.ts");
    /* harmony import */


    var src_app_components_image_drawing_image_drawing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/image-drawing/image-drawing.component */
    "./src/app/components/image-drawing/image-drawing.component.ts");
    /* harmony import */


    var src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/util/vec2 */
    "./src/app/util/vec2.ts");
    /* harmony import */


    var src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/components/canvas/canvas.component.service */
    "./src/app/components/canvas/canvas.component.service.ts");
    /* harmony import */


    var src_app_service_keybinding_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/service/keybinding.service */
    "./src/app/service/keybinding.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["drawingContainer"];
    var _c1 = ["container"];
    var _c2 = ["canvas"];

    function CanvasComponent_ng_template_15_Template(rf, ctx) {}

    var CanvasComponent =
    /*#__PURE__*/
    function () {
      function CanvasComponent(injector_, canvasComponentService_, keybindingService_, commandService_, componentFactoryResolver_) {
        var _this = this;

        _classCallCheck(this, CanvasComponent);

        this.injector_ = injector_;
        this.canvasComponentService_ = canvasComponentService_;
        this.commandService_ = commandService_;
        this.componentFactoryResolver_ = componentFactoryResolver_;
        this.subs_ = [];
        this.onDidChangeFocusedDrawing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDidChangeCamera = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keybindingDisposers_ = [];
        this.drawingComponents_ = [];
        this.drawingComponentRefs_ = [];
        this.focusedDrawing_ = null;
        this.cameraX_ = 0;
        this.cameraY_ = 0;
        this.cameraZoom_ = 1;
        this.canvasComponentService_.canvasComponent = this;
        this.moveCamera = this.moveCamera.bind(this);
        this.keybindingDisposers_.push(keybindingService_.bind({
          keychord: 'ctrl+z',
          mac: 'command+z'
        }, function () {
          _this.canvas.editStack.undo();
        }));
        this.keybindingDisposers_.push(keybindingService_.bind({
          keychord: 'ctrl+y',
          mac: 'command+y'
        }, function () {
          _this.canvas.editStack.redo();
        }));
        this.keybindingDisposers_.push(keybindingService_.bind({
          keychord: 'delete'
        }, function () {
          if (!_this.focusedDrawing) return;

          _this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_2__["CanvasRemoveDrawingCommand"](_this.canvas, _this.focusedDrawing.drawing));

          _this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_2__["CanvasAddStackElementCommand"]());
        }));
      }

      _createClass(CanvasComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs_.forEach(function (sub) {
            return sub.unsubscribe();
          });
          this.keybindingDisposers_.forEach(function (disposer) {
            return disposer();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.commandService_.canvas = this.canvas;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          for (var i = 0; i < this.canvas.drawings.length; i++) {
            var drawing = this.canvas.drawings[i];
            this.createDrawingComponent(drawing, i);
          }

          this.subs_.push(this.canvas.onDidAddDrawing.subscribe(function (e) {
            _this2.createDrawingComponent(e.drawing, e.index);
          }));
          this.subs_.push(this.canvas.onDidReorderDrawing.subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                i = _ref2[0],
                j = _ref2[1];

            var tmp1 = _this2.drawingComponentRefs_[i];
            _this2.drawingComponentRefs_[i] = _this2.drawingComponentRefs_[j];
            _this2.drawingComponentRefs_[j] = tmp1;
            var tmp2 = _this2.drawingComponents[i];
            _this2.drawingComponents_[i] = _this2.drawingComponents_[j];
            _this2.drawingComponents_[j] = tmp2;
          }));
          this.subs_.push(this.canvas.onWillRemoveDrawing.subscribe(function (e) {
            var _a;

            if (((_a = _this2.focusedDrawing_) === null || _a === void 0 ? void 0 : _a.drawing) == e.drawing) _this2.blurAll();

            _this2.drawingComponentRefs_.splice(e.index, 1)[0].destroy();

            _this2.drawingComponents_.splice(e.index, 1);
          }));
          this.containerRef_.nativeElement.addEventListener('mousewheel', function (e) {
            _this2.onMouseWheel(e);
          });
          this.containerRef_.nativeElement.addEventListener('DOMMouseScroll', function (e) {
            _this2.onMouseWheel(e);
          });
        }
      }, {
        key: "createDrawingComponent",
        value: function createDrawingComponent(drawing, index) {
          var factory;

          switch (drawing.type) {
            case src_app_model_image_drawing__WEBPACK_IMPORTED_MODULE_4__["ImageDrawing"].type:
              factory = this.componentFactoryResolver_.resolveComponentFactory(src_app_components_image_drawing_image_drawing_component__WEBPACK_IMPORTED_MODULE_7__["ImageDrawingComponent"]);
              break;

            case src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_5__["TextDrawing"].type:
              factory = this.componentFactoryResolver_.resolveComponentFactory(src_app_components_text_drawing_text_drawing_component__WEBPACK_IMPORTED_MODULE_6__["TextDrawingComponent"]);
              break;
          }

          var componentRef = this.drawingContainerRef_.createComponent(factory, index, this.injector_);
          componentRef.instance.drawing = drawing;
          this.drawingComponentRefs_.splice(index, 0, componentRef);
          this.drawingComponents_.splice(index, 0, componentRef.instance);
        }
      }, {
        key: "focusDrawingComponent",
        value: function focusDrawingComponent(drawingComponent) {
          this.blurAll();
          var movableComponent = drawingComponent.movableComponent;
          movableComponent.focus();
          this.focusedDrawing_ = drawingComponent;
          this.onDidChangeFocusedDrawing.emit(drawingComponent);
          this.guiPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](movableComponent.guiContent, movableComponent.viewContainerRef);
        }
      }, {
        key: "blurAll",
        value: function blurAll() {
          for (var i = 0; i < this.drawingComponents_.length; i++) {
            var drawing = this.drawingComponents_[i];
            drawing.movableComponent.blur();
          }

          this.guiPortal = null;
          this.focusedDrawing_ = null;
          this.onDidChangeFocusedDrawing.emit(null);
        }
      }, {
        key: "onMousedown",
        value: function onMousedown(e) {
          var _this3 = this;

          if (e.button == 0) {
            var element = e.target;
            var movableId = 0;

            while (element instanceof HTMLElement) {
              if (element.tagName.toLowerCase() == 'movable') {
                movableId = +element.getAttribute('movable-id');
                break;
              }

              element = element.parentElement;
            }

            if (!movableId) {
              this.blurAll();
              return;
            }

            var drawingComponent = this.getDrawingComponentByMovableId(movableId);
            this.focusDrawingComponent(drawingComponent);
          } else if (e.button == 2) {
            e.preventDefault();
            this.lastMousePosition_ = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__["default"]([e.screenX, e.screenY]);
            window.addEventListener('mousemove', this.moveCamera);

            var mouseup = function mouseup() {
              window.removeEventListener('mousemove', _this3.moveCamera);
              window.removeEventListener('mouseup', mouseup);
            };

            window.addEventListener('mouseup', mouseup);
          }
        }
      }, {
        key: "onMouseWheel",
        value: function onMouseWheel(e) {
          var pos = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__["default"]([e.pageX, e.pageY]);
          var dvec2 = this.fromPageToCanvas(pos);
          var delta = e.deltaY | e.detail;
          var lastZoom = this.cameraZoom;

          if (delta < 0) {
            this.cameraZoom = this.cameraZoom + 0.1;
          } else {
            this.cameraZoom = this.cameraZoom - 0.1;
          }

          var dz = this.cameraZoom - lastZoom;
          var dx = dvec2.scale(dz);
          this.cameraX = this.cameraX - dx.x;
          this.cameraY = this.cameraY - dx.y;
        }
      }, {
        key: "moveCamera",
        value: function moveCamera(e) {
          var position = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__["default"]([e.screenX, e.screenY]);
          position.subtract(this.lastMousePosition_);
          this.cameraX = this.cameraX + position.x;
          this.cameraY = this.cameraY + position.y;
          this.lastMousePosition_ = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__["default"]([e.screenX, e.screenY]);
          ;
        }
      }, {
        key: "fromPageToCanvas",
        value: function fromPageToCanvas(vec) {
          var center = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__["default"]([this.containerRef_.nativeElement.offsetWidth / 2, this.containerRef_.nativeElement.offsetHeight / 2]);
          var cs = vec.copy();
          cs.subtract(center);
          cs.subtract(new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__["default"]([this.cameraX, this.cameraY]));
          cs.scale(1 / this.cameraZoom);
          cs.x = Math.round(cs.x);
          cs.y = Math.round(cs.y);
          return cs;
        }
      }, {
        key: "fromPageToCanvasScreen",
        value: function fromPageToCanvasScreen(vec) {
          var center = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__["default"]([this.containerRef_.nativeElement.offsetWidth / 2, this.containerRef_.nativeElement.offsetHeight / 2]);
          var cs = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_8__["default"]([vec.x, vec.y]);
          cs.subtract(center);
          return cs;
        }
      }, {
        key: "getMovableComponentById",
        value: function getMovableComponentById(id) {
          for (var i = 0; i < this.drawingComponents_.length; i++) {
            var drawing = this.drawingComponents_[i];
            var movable = drawing.drawing.movable;
            if (movable.id == id) return drawing.movableComponent;
          }

          return null;
        }
      }, {
        key: "getDrawingComponentByMovableId",
        value: function getDrawingComponentByMovableId(id) {
          for (var i = 0; i < this.drawingComponents_.length; i++) {
            var drawing = this.drawingComponents_[i];
            var movable = drawing.drawing.movable;
            if (movable.id == id) return drawing;
          }

          return null;
        }
      }, {
        key: "getDrawingComponentByDrawing",
        value: function getDrawingComponentByDrawing(drawing) {
          for (var i = 0; i < this.drawingComponents_.length; i++) {
            var drawingComponent = this.drawingComponents_[i];
            if (drawingComponent.drawing === drawing) return drawingComponent;
          }

          return null;
        }
      }, {
        key: "getContentStyle",
        value: function getContentStyle() {
          return {
            width: "".concat(this.canvas.width, "px"),
            height: "".concat(this.canvas.height, "px")
          };
        }
      }, {
        key: "getCanvasStyle",
        value: function getCanvasStyle() {
          return {
            transform: "\n        translateX(".concat(this.cameraX_, "px)\n        translateY(").concat(this.cameraY_, "px)\n        scale(").concat(this.cameraZoom_, ")")
          };
        }
      }, {
        key: "render",
        value: function render() {
          var canvas = this.canvas;
          var cvs = document.createElement('canvas');
          var tmpCvs = document.createElement('canvas');
          var ctx = cvs.getContext('2d');
          var tmpCtx = tmpCvs.getContext('2d');
          cvs.width = this.canvas.width;
          cvs.height = this.canvas.height;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, cvs.width, cvs.height);

          for (var i = this.drawingComponents.length - 1; i >= 0; i--) {
            var drawingComponent = this.drawingComponents[i];
            var movable = drawingComponent.movableComponent.movable;
            tmpCvs.width = movable.w;
            tmpCvs.height = movable.h;
            drawingComponent.render(tmpCtx); // Blit

            ctx.save();
            ctx.translate(movable.x + canvas.width / 2, movable.y + canvas.height / 2);
            ctx.rotate(movable.rad);
            ctx.drawImage(tmpCvs, -movable.w / 2, -movable.h / 2);
            ctx.restore();
          }

          return cvs.toDataURL('image/png', 1.0);
        }
      }, {
        key: "drawingComponents",
        get: function get() {
          return this.drawingComponents_;
        }
      }, {
        key: "focusedDrawing",
        get: function get() {
          return this.focusedDrawing_;
        }
      }, {
        key: "cameraX",
        get: function get() {
          return this.cameraX_;
        },
        set: function set(v) {
          this.cameraX_ = v;
          this.onDidChangeCamera.emit();
        }
      }, {
        key: "cameraY",
        get: function get() {
          return this.cameraY_;
        },
        set: function set(v) {
          this.cameraY_ = v;
          this.onDidChangeCamera.emit();
        }
      }, {
        key: "cameraZoom",
        get: function get() {
          return this.cameraZoom_;
        },
        set: function set(v) {
          v = Math.min(3, Math.max(0.2, v));
          v *= 10;
          v = Math.round(v);
          v /= 10;
          this.cameraZoom_ = v;
          this.onDidChangeCamera.emit();
        }
      }]);

      return CanvasComponent;
    }();

    CanvasComponent.ɵfac = function CanvasComponent_Factory(t) {
      return new (t || CanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_9__["CanvasComponentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_keybinding_service__WEBPACK_IMPORTED_MODULE_10__["KeybindingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_3__["ICommandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CanvasComponent,
      selectors: [["canvas-component"]],
      viewQuery: function CanvasComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawingContainerRef_ = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerRef_ = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef_ = _t.first);
        }
      },
      inputs: {
        canvas: "canvas"
      },
      decls: 16,
      vars: 4,
      consts: [[1, "container", 3, "mousedown"], ["container", ""], [1, "canvas"], ["canvas", ""], [1, "canvas-camera", 3, "ngStyle"], [1, "canvas-cover"], [1, "canvas-background", 3, "ngStyle"], [1, "canvas-border", 3, "ngStyle"], [1, "cover", "t"], [1, "cover", "b"], [1, "cover", "l"], [1, "cover", "r"], [1, "drawings"], ["drawingContainer", ""], [3, "cdkPortalOutlet"]],
      template: function CanvasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function CanvasComponent_Template_div_mousedown_0_listener($event) {
            return ctx.onMousedown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](13, null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CanvasComponent_ng_template_15_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getCanvasStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getContentStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getContentStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx.guiPortal);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
      styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 300px;\n  bottom: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-cover[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-cover[_ngcontent-%COMP%]    > .cover[_ngcontent-%COMP%] {\n  background: white;\n  opacity: 0.4;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-background[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n  transform: translateX(-50%) translateY(-50%);\n  background: white;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-border[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  z-index: 9999;\n  transform: translateX(-50%) translateY(-50%);\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-border[_ngcontent-%COMP%]    > .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  background: white;\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-border[_ngcontent-%COMP%]    > .cover.t[_ngcontent-%COMP%] {\n  top: -50000px;\n  height: 50000px;\n  width: 50000px;\n  left: -25000px;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-border[_ngcontent-%COMP%]    > .cover.b[_ngcontent-%COMP%] {\n  bottom: -50000px;\n  height: 50000px;\n  width: 50000px;\n  left: -25000px;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-border[_ngcontent-%COMP%]    > .cover.l[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  width: 25000px;\n  left: -25000px;\n}\n.container[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .canvas-camera[_ngcontent-%COMP%]    > .canvas-border[_ngcontent-%COMP%]    > .cover.r[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  width: 25000px;\n  right: -25000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW52YXMvRDpcXHNvdXJjZVxcdGh1bWItdXAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbnZhc1xcY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0FGO0FERUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0FDQVI7QURFUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0FWO0FES007RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUNIUjtBRE1NO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtBQ0pSO0FETVE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0pWO0FETVU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSlo7QURNVTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSlo7QURNVTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNKWjtBRE1VO0VBQ0UsTUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAzMDBweDtcclxuICBib3R0b206IDA7XHJcblxyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgPiAuY2FudmFzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG5cclxuICAgID4gLmNhbnZhcy1jYW1lcmEge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgICA+IC5jYW52YXMtY292ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgPiAuY292ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgPiAuY2FudmFzLWJhY2tncm91bmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgPiAuY2FudmFzLWJvcmRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICAgID4gLmNvdmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG5cclxuICAgICAgICAgICYudCB7XHJcbiAgICAgICAgICAgIHRvcDogLTUwMDAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwMDAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0yNTAwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5iIHtcclxuICAgICAgICAgICAgYm90dG9tOiAtNTAwMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MDAwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAwMDBweDtcclxuICAgICAgICAgICAgbGVmdDogLTI1MDAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmwge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MDAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0yNTAwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5yIHtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTAwMHB4O1xyXG4gICAgICAgICAgICByaWdodDogLTI1MDAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDMwMHB4O1xuICBib3R0b206IDA7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmNvbnRhaW5lciA+IC5jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG59XG4uY29udGFpbmVyID4gLmNhbnZhcyA+IC5jYW52YXMtY2FtZXJhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhaW5lciA+IC5jYW52YXMgPiAuY2FudmFzLWNhbWVyYSA+IC5jYW52YXMtY292ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY29udGFpbmVyID4gLmNhbnZhcyA+IC5jYW52YXMtY2FtZXJhID4gLmNhbnZhcy1jb3ZlciA+IC5jb3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uY29udGFpbmVyID4gLmNhbnZhcyA+IC5jYW52YXMtY2FtZXJhID4gLmNhbnZhcy1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgPiAuY2FudmFzID4gLmNhbnZhcy1jYW1lcmEgPiAuY2FudmFzLWJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmNvbnRhaW5lciA+IC5jYW52YXMgPiAuY2FudmFzLWNhbWVyYSA+IC5jYW52YXMtYm9yZGVyID4gLmNvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLmNvbnRhaW5lciA+IC5jYW52YXMgPiAuY2FudmFzLWNhbWVyYSA+IC5jYW52YXMtYm9yZGVyID4gLmNvdmVyLnQge1xuICB0b3A6IC01MDAwMHB4O1xuICBoZWlnaHQ6IDUwMDAwcHg7XG4gIHdpZHRoOiA1MDAwMHB4O1xuICBsZWZ0OiAtMjUwMDBweDtcbn1cbi5jb250YWluZXIgPiAuY2FudmFzID4gLmNhbnZhcy1jYW1lcmEgPiAuY2FudmFzLWJvcmRlciA+IC5jb3Zlci5iIHtcbiAgYm90dG9tOiAtNTAwMDBweDtcbiAgaGVpZ2h0OiA1MDAwMHB4O1xuICB3aWR0aDogNTAwMDBweDtcbiAgbGVmdDogLTI1MDAwcHg7XG59XG4uY29udGFpbmVyID4gLmNhbnZhcyA+IC5jYW52YXMtY2FtZXJhID4gLmNhbnZhcy1ib3JkZXIgPiAuY292ZXIubCB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMjUwMDBweDtcbiAgbGVmdDogLTI1MDAwcHg7XG59XG4uY29udGFpbmVyID4gLmNhbnZhcyA+IC5jYW52YXMtY2FtZXJhID4gLmNhbnZhcy1ib3JkZXIgPiAuY292ZXIuciB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMjUwMDBweDtcbiAgcmlnaHQ6IC0yNTAwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'canvas-component',
          templateUrl: './canvas.component.html',
          styleUrls: ['./canvas.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_9__["CanvasComponentService"]
        }, {
          type: src_app_service_keybinding_service__WEBPACK_IMPORTED_MODULE_10__["KeybindingService"]
        }, {
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_3__["CanvasCommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_3__["ICommandService"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        drawingContainerRef_: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['drawingContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }],
        containerRef_: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container', {
            "static": true
          }]
        }],
        canvasRef_: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/control/control-pannel.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/control/control-pannel.component.ts ***!
    \****************************************************************/

  /*! exports provided: ControlPannelComponent */

  /***/
  function srcAppComponentsControlControlPannelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlPannelComponent", function () {
      return ControlPannelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/text-drawing */
    "./src/app/model/text-drawing.ts");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var src_app_model_image_drawing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/model/image-drawing */
    "./src/app/model/image-drawing.ts");
    /* harmony import */


    var src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/canvas.service */
    "./src/app/service/canvas.service.ts");
    /* harmony import */


    var src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/canvas/canvas.component.service */
    "./src/app/components/canvas/canvas.component.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_components_control_drawing_drawing_control_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/components/control/drawing/drawing-control.component */
    "./src/app/components/control/drawing/drawing-control.component.ts");
    /* harmony import */


    var src_app_components_control_movable_movable_control_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/components/control/movable/movable-control.component */
    "./src/app/components/control/movable/movable-control.component.ts");

    var _c0 = ["drawingControlContainer"];

    function ControlPannelComponent_movable_control_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "movable-control", 18);
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movable", ctx_r16.focusedDrawing.drawing.movable);
      }
    }

    var ControlPannelComponent =
    /*#__PURE__*/
    function () {
      function ControlPannelComponent(injector_, componentFactoryResolver_, canvasService_, canvasComponentService_, commandService_) {
        var _this4 = this;

        _classCallCheck(this, ControlPannelComponent);

        this.injector_ = injector_;
        this.componentFactoryResolver_ = componentFactoryResolver_;
        this.canvasService_ = canvasService_;
        this.canvasComponentService_ = canvasComponentService_;
        this.commandService_ = commandService_;
        this.subs_ = [];
        var canvas = canvasService_.canvas;
        var canvasComponent = canvasComponentService_.canvasComponent;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.subs_.push(canvas.onDidChangeSize.subscribe(function () {
          _this4.canvasWidth = canvas.width;
          _this4.canvasHeight = canvas.height;
        }));
        this.canvasZoom = canvasComponent.cameraZoom;
        this.subs_.push(canvasComponent.onDidChangeCamera.subscribe(function () {
          _this4.canvasZoom = canvasComponent.cameraZoom;
        }));
        this.focusedDrawing_ = canvasComponent.focusedDrawing;
        this.subs_.push(canvasComponent.onDidChangeFocusedDrawing.subscribe(function (drawingComponent) {
          _this4.updateFocusedDrawing(drawingComponent);
        }));
      }

      _createClass(ControlPannelComponent, [{
        key: "onChangeCanvasSize",
        value: function onChangeCanvasSize(w, h) {
          var canvas = this.canvasService_.canvas;
          var ww = w === undefined ? canvas.width : w;
          var hh = h === undefined ? canvas.height : h;
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasResizeCommand"](canvas, ww, hh));
        }
      }, {
        key: "onChangeCanvasZoom",
        value: function onChangeCanvasZoom(e) {
          this.canvasComponentService_.canvasComponent.cameraZoom = e.value;
        }
      }, {
        key: "updateFocusedDrawing",
        value: function updateFocusedDrawing(drawingComponent) {
          this.focusedDrawing_ = drawingComponent; // if (this.drawingControlComponent_) {
          //   this.drawingControlComponent_.destroy();
          //   this.drawingControlComponent_ = null;
          // }
          // if (!drawingComponent) return;
          // let factory: ComponentFactory<any>;
          // switch (drawingComponent.drawing.type) {
          //   case ImageDrawing.type:
          //     break;
          //   case TextDrawing.type:
          //     factory = this.componentFactoryResolver_.resolveComponentFactory(TextDrawingControlComponent);
          //     break;
          // }
          // if (!factory) return;
          // const componentRef = this.drawingControlContainer_.createComponent(
          //   factory, undefined, this.injector_);
          // componentRef.instance.drawing = drawingComponent.drawing;
          // this.drawingControlComponent_ = componentRef;
        }
      }, {
        key: "addTextDrawing",
        value: function addTextDrawing() {
          var drawing = new src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_2__["TextDrawing"]('Nanum Myeongjo', 30, 'Text');
          var canvas = this.canvasService_.canvas;
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddDrawingCommand"](canvas, drawing));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "addImageDrawing",
        value: function addImageDrawing(e) {
          var _this5 = this;

          var file = e.target.files[0];
          if (!file) return;
          var reader = new FileReader();
          reader.addEventListener('load', function () {
            var image = new Image();
            image.src = reader.result;

            image.onload = function () {
              var imageDrawing = new src_app_model_image_drawing__WEBPACK_IMPORTED_MODULE_4__["ImageDrawing"](image);

              _this5.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddDrawingCommand"](_this5.canvasService_.canvas, imageDrawing));

              _this5.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
            };
          });
          reader.readAsDataURL(file);
        }
      }, {
        key: "canvas",
        get: function get() {
          return this.canvasService_.canvas;
        }
      }, {
        key: "focusedDrawing",
        get: function get() {
          return this.focusedDrawing_;
        }
      }]);

      return ControlPannelComponent;
    }();

    ControlPannelComponent.ɵfac = function ControlPannelComponent_Factory(t) {
      return new (t || ControlPannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_6__["CanvasComponentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_1__["ICommandService"]));
    };

    ControlPannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ControlPannelComponent,
      selectors: [["control-pannel"]],
      viewQuery: function ControlPannelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawingControlContainer_ = _t.first);
        }
      },
      decls: 32,
      vars: 6,
      consts: [[1, "control-pannel"], [1, "tools"], [1, "item"], ["mat-icon-button", "", 3, "click"], [1, "material-icons"], [1, "item", "file-input"], ["accept", "image/*", "mat-icon-button", ""], ["type", "file", "id", "file", 3, "change"], ["for", "file"], [1, "canvas"], [1, "size", "eq"], ["matInput", "", "placeholder", "Canvas width", 3, "ngModel", "ngModelChange", "keyup"], ["matSuffix", ""], ["matInput", "", "placeholder", "Canvas height", 3, "ngModel", "ngModelChange", "keyup"], [1, "zoom"], ["min", "0.2", "max", "3", "step", "0.1", 3, "value", "valueChange", "input"], [3, "movable", 4, "ngIf"], [3, "drawing"], [3, "movable"]],
      template: function ControlPannelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlPannelComponent_Template_button_click_3_listener() {
            return ctx.addTextDrawing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ControlPannelComponent_Template_input_change_8_listener($event) {
            return ctx.addImageDrawing($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "insert_photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ControlPannelComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.canvasWidth = $event;
          })("keyup", function ControlPannelComponent_Template_input_keyup_16_listener($event) {
            return ctx.onChangeCanvasSize($event.target.value - 0, undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ControlPannelComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.canvasHeight = $event;
          })("keyup", function ControlPannelComponent_Template_input_keyup_20_listener($event) {
            return ctx.onChangeCanvasSize(undefined, $event.target.value - 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Zoom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-slider", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ControlPannelComponent_Template_mat_slider_valueChange_28_listener($event) {
            return ctx.canvasZoom = $event;
          })("input", function ControlPannelComponent_Template_mat_slider_input_28_listener($event) {
            return ctx.onChangeCanvasZoom($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ControlPannelComponent_movable_control_30_Template, 1, 1, "movable-control", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "drawing-control", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.canvasWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.canvasHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.canvasZoom, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.canvasZoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.focusedDrawing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("drawing", ctx.focusedDrawing == null ? null : ctx.focusedDrawing.drawing);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], src_app_components_control_drawing_drawing_control_component__WEBPACK_IMPORTED_MODULE_15__["DrawingControlComponent"], src_app_components_control_movable_movable_control_component__WEBPACK_IMPORTED_MODULE_16__["MovableControlComponent"]],
      styles: [".control-pannel[_ngcontent-%COMP%] {\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n.control-pannel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n}\n.control-pannel[_ngcontent-%COMP%]    > .tools[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 10px;\n}\n.control-pannel[_ngcontent-%COMP%]    > .tools[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.control-pannel[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.control-pannel[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .zoom[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n}\n.control-pannel[_ngcontent-%COMP%]    > .canvas[_ngcontent-%COMP%]    > .zoom[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.control-pannel[_ngcontent-%COMP%]   .eq[_ngcontent-%COMP%] {\n  display: flex;\n}\n.control-pannel[_ngcontent-%COMP%]   .eq[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.file-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.file-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL0Q6XFxzb3VyY2VcXHRodW1iLXVwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250cm9sXFxjb250cm9sLXBhbm5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2NvbnRyb2wtcGFubmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtBQ0NKO0FERUU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUNBSjtBREVJO0VBQ0Usa0JBQUE7QUNBTjtBRElFO0VBQ0UsaUJBQUE7QUNGSjtBRElJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRk47QURLTTtFQUNFLE9BQUE7QUNIUjtBRFFFO0VBQ0UsYUFBQTtBQ05KO0FEUUk7RUFDRSxPQUFBO0FDTk47QURhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FEWUU7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2NvbnRyb2wtcGFubmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2wtcGFubmVsIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gID4gLnRvb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICA+IC5pdGVtIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgPiAuY2FudmFzIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxuICAgID4gLnpvb20ge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgPiAqIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICA+ICoge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5maWxlLWlucHV0IHtcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XHJcbiAgfVxyXG59IiwiLmNvbnRyb2wtcGFubmVsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29udHJvbC1wYW5uZWwgLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRyb2wtcGFubmVsID4gLnRvb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udHJvbC1wYW5uZWwgPiAudG9vbHMgPiAuaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250cm9sLXBhbm5lbCA+IC5jYW52YXMge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250cm9sLXBhbm5lbCA+IC5jYW52YXMgPiAuem9vbSB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250cm9sLXBhbm5lbCA+IC5jYW52YXMgPiAuem9vbSA+ICoge1xuICBmbGV4OiAxO1xufVxuLmNvbnRyb2wtcGFubmVsIC5lcSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udHJvbC1wYW5uZWwgLmVxID4gKiB7XG4gIGZsZXg6IDE7XG59XG5cbi5maWxlLWlucHV0IGxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWxlLWlucHV0IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlPannelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'control-pannel',
          templateUrl: './control-pannel.component.html',
          styleUrls: ['./control-pannel.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: src_app_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__["CanvasService"]
        }, {
          type: src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_6__["CanvasComponentService"]
        }, {
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_1__["ICommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_1__["ICommandService"]]
          }]
        }];
      }, {
        drawingControlContainer_: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['drawingControlContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/control/drawing/drawing-control-factory.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/control/drawing/drawing-control-factory.ts ***!
    \***********************************************************************/

  /*! exports provided: DrawingControlFactory */

  /***/
  function srcAppComponentsControlDrawingDrawingControlFactoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawingControlFactory", function () {
      return DrawingControlFactory;
    });
    /* harmony import */


    var src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/model/text-drawing */
    "./src/app/model/text-drawing.ts");
    /* harmony import */


    var src_app_components_control_text_drawing_text_drawing_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/control/text-drawing/text-drawing-control.component */
    "./src/app/components/control/text-drawing/text-drawing-control.component.ts");
    /* harmony import */


    var src_app_model_image_drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/image-drawing */
    "./src/app/model/image-drawing.ts");
    /* harmony import */


    var src_app_components_control_image_drawing_image_drawing_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/control/image-drawing/image-drawing-control.component */
    "./src/app/components/control/image-drawing/image-drawing-control.component.ts");

    var DrawingControlFactory =
    /*#__PURE__*/
    function () {
      function DrawingControlFactory(resolver) {
        _classCallCheck(this, DrawingControlFactory);

        this.resolver = resolver;
      }

      _createClass(DrawingControlFactory, [{
        key: "create",
        value: function create(container, drawing, injector) {
          if (!drawing) return null;
          var component;

          switch (drawing.type) {
            case src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_0__["TextDrawing"].type:
              component = src_app_components_control_text_drawing_text_drawing_control_component__WEBPACK_IMPORTED_MODULE_1__["TextDrawingControlComponent"];
              break;

            case src_app_model_image_drawing__WEBPACK_IMPORTED_MODULE_2__["ImageDrawing"].type:
              component = src_app_components_control_image_drawing_image_drawing_control_component__WEBPACK_IMPORTED_MODULE_3__["ImageDrawingControlComponent"];
              break;
          }

          if (!component) return null;
          var factory = this.resolver.resolveComponentFactory(component);
          var componentRef = container.createComponent(factory, undefined, injector);
          componentRef.instance.drawing = drawing;
          return componentRef;
        }
      }]);

      return DrawingControlFactory;
    }();
    /***/

  },

  /***/
  "./src/app/components/control/drawing/drawing-control.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/control/drawing/drawing-control.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DrawingControlComponent */

  /***/
  function srcAppComponentsControlDrawingDrawingControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawingControlComponent", function () {
      return DrawingControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/drawing */
    "./src/app/model/drawing.ts");
    /* harmony import */


    var src_app_components_control_filter_filter_control_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/control/filter/filter-control-factory */
    "./src/app/components/control/filter/filter-control-factory.ts");
    /* harmony import */


    var src_app_components_control_drawing_drawing_control_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/control/drawing/drawing-control-factory */
    "./src/app/components/control/drawing/drawing-control-factory.ts");
    /* harmony import */


    var src_app_model_drawing_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/model/drawing-filter */
    "./src/app/model/drawing-filter.ts");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["drawingControlContainer"];
    var _c1 = ["filterControlContainer"];

    function DrawingControlComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DrawingControlComponent_ng_container_2_Template_mat_select_selectionChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.onFilterChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Grayscale");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blur");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Color");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r23.filterType);
      }
    }

    var DrawingControlComponent =
    /*#__PURE__*/
    function () {
      function DrawingControlComponent(injector_, componentFactoryResolver_, commandService_) {
        _classCallCheck(this, DrawingControlComponent);

        this.injector_ = injector_;
        this.componentFactoryResolver_ = componentFactoryResolver_;
        this.commandService_ = commandService_;
        this.subs_ = [];
      }

      _createClass(DrawingControlComponent, [{
        key: "onFilterChange",
        value: function onFilterChange(e) {
          var value = e.value;
          var filter;

          switch (value) {
            case 'grayscale':
              filter = new src_app_model_drawing_filter__WEBPACK_IMPORTED_MODULE_4__["GrayscaleDrawingFilter"]();
              break;

            case 'blur':
              filter = new src_app_model_drawing_filter__WEBPACK_IMPORTED_MODULE_4__["BlurDrawingFilter"]();
              break;

            case 'color':
              filter = new src_app_model_drawing_filter__WEBPACK_IMPORTED_MODULE_4__["ColorDrawingFilter"]();
              break;
          }

          this.commandService_.dispatch(new src_app_model_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawingChangeFilterCommand"](this.drawing, filter));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_6__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs_.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this6 = this;

          if (changes.drawing) {
            this.subs_.forEach(function (sub) {
              return sub.unsubscribe();
            });
            this.subs_.length = 0;
            this.createDrawingControl();
            this.createFilterControl();
            if (!this.drawing) return;
            this.subs_.push(this.drawing.onDidChangeFilter.subscribe(function () {
              _this6.createFilterControl();
            }));
          }
        }
      }, {
        key: "createDrawingControl",
        value: function createDrawingControl() {
          if (this.drawingControl_) this.drawingControl_.destroy();
          var factory = new src_app_components_control_drawing_drawing_control_factory__WEBPACK_IMPORTED_MODULE_3__["DrawingControlFactory"](this.componentFactoryResolver_);
          var comp = factory.create(this.drawingControlContainer_, this.drawing, this.injector_);
          this.drawingControl_ = comp;
        }
      }, {
        key: "createFilterControl",
        value: function createFilterControl() {
          if (this.filterControl_) this.filterControl_.destroy();
          if (!this.drawing) return;
          var factory = new src_app_components_control_filter_filter_control_factory__WEBPACK_IMPORTED_MODULE_2__["FilterControlFactory"](this.componentFactoryResolver_);
          var comp = factory.create(this.filterControlContainer_, this.drawing.filter, this.injector_);
          this.filterControl_ = comp;
        }
      }, {
        key: "filterType",
        get: function get() {
          var _a, _b;

          return (_b = (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b.type.toLowerCase();
        }
      }]);

      return DrawingControlComponent;
    }();

    DrawingControlComponent.ɵfac = function DrawingControlComponent_Factory(t) {
      return new (t || DrawingControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_5__["ICommandService"]));
    };

    DrawingControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DrawingControlComponent,
      selectors: [["drawing-control"]],
      viewQuery: function DrawingControlComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawingControlContainer_ = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterControlContainer_ = _t.first);
        }
      },
      inputs: {
        drawing: "drawing"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 1,
      consts: [["drawingControlContainer", ""], [4, "ngIf"], ["filterControlContainer", ""], [1, "filter"], [3, "value", "selectionChange"], ["value", "grayscale"], ["value", "blur"], ["value", "color"]],
      template: function DrawingControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DrawingControlComponent_ng_container_2_Template, 14, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, null, 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.drawing);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      styles: [".filter[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2RyYXdpbmcvRDpcXHNvdXJjZVxcdGh1bWItdXAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRyb2xcXGRyYXdpbmdcXGRyYXdpbmctY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2RyYXdpbmcvZHJhd2luZy1jb250cm9sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2RyYXdpbmcvZHJhd2luZy1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlciB7XHJcbiAgPiBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iLCIuZmlsdGVyID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'drawing-control',
          templateUrl: './drawing-control.component.html',
          styleUrls: ['./drawing-control.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_5__["ICommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_5__["ICommandService"]]
          }]
        }];
      }, {
        drawing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        drawingControlContainer_: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['drawingControlContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }],
        filterControlContainer_: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['filterControlContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/control/filter/color-filter-control.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/control/filter/color-filter-control.ts ***!
    \*******************************************************************/

  /*! exports provided: ColorFilterControlComponent */

  /***/
  function srcAppComponentsControlFilterColorFilterControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorFilterControlComponent", function () {
      return ColorFilterControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_drawing_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/drawing-filter */
    "./src/app/model/drawing-filter.ts");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");

    var ColorFilterControlComponent =
    /*#__PURE__*/
    function () {
      function ColorFilterControlComponent(commandService_) {
        _classCallCheck(this, ColorFilterControlComponent);

        this.commandService_ = commandService_;
      }

      _createClass(ColorFilterControlComponent, [{
        key: "onInput",
        value: function onInput(r, g, b, o) {
          r = r === undefined ? this.filter.r : r;
          g = g === undefined ? this.filter.g : g;
          b = b === undefined ? this.filter.b : b;
          o = o === undefined ? this.filter.o : o;
          this.commandService_.dispatch(new src_app_model_drawing_filter__WEBPACK_IMPORTED_MODULE_1__["ColorDawingFilterChangeCommand"](this.filter, r, g, b, o));
        }
      }, {
        key: "onChange",
        value: function onChange() {
          console.log('change');
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.r = this.filter.r;
          this.g = this.filter.g;
          this.b = this.filter.b;
          this.o = this.filter.o;
          this.sub_ = this.filter.onUpdate.subscribe(function () {
            _this7.r = _this7.filter.r;
            _this7.g = _this7.filter.g;
            _this7.b = _this7.filter.b;
            _this7.o = _this7.filter.o;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub_.unsubscribe();
        }
      }]);

      return ColorFilterControlComponent;
    }();

    ColorFilterControlComponent.ɵfac = function ColorFilterControlComponent_Factory(t) {
      return new (t || ColorFilterControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"]));
    };

    ColorFilterControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorFilterControlComponent,
      selectors: [["color-filter-control"]],
      inputs: {
        filter: "filter"
      },
      decls: 20,
      vars: 4,
      consts: [[1, "col"], ["min", "0", "max", "255", "step", "1", 3, "value", "valueChange", "input", "change"], ["min", "0", "max", "1", "step", "0.05", 3, "value", "valueChange", "input", "change"]],
      template: function ColorFilterControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-slider", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ColorFilterControlComponent_Template_mat_slider_valueChange_4_listener($event) {
            return ctx.r = $event;
          })("input", function ColorFilterControlComponent_Template_mat_slider_input_4_listener($event) {
            return ctx.onInput($event.value, undefined, undefined, undefined);
          })("change", function ColorFilterControlComponent_Template_mat_slider_change_4_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-slider", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ColorFilterControlComponent_Template_mat_slider_valueChange_9_listener($event) {
            return ctx.g = $event;
          })("input", function ColorFilterControlComponent_Template_mat_slider_input_9_listener($event) {
            return ctx.onInput(undefined, $event.value, undefined, undefined);
          })("change", function ColorFilterControlComponent_Template_mat_slider_change_9_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-slider", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ColorFilterControlComponent_Template_mat_slider_valueChange_14_listener($event) {
            return ctx.b = $event;
          })("input", function ColorFilterControlComponent_Template_mat_slider_input_14_listener($event) {
            return ctx.onInput(undefined, undefined, $event.value, undefined);
          })("change", function ColorFilterControlComponent_Template_mat_slider_change_14_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-slider", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ColorFilterControlComponent_Template_mat_slider_valueChange_19_listener($event) {
            return ctx.o = $event;
          })("input", function ColorFilterControlComponent_Template_mat_slider_input_19_listener($event) {
            return ctx.onInput(undefined, undefined, undefined, $event.value);
          })("change", function ColorFilterControlComponent_Template_mat_slider_change_19_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.r);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.b);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.o);
        }
      },
      directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSlider"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]    > .col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2ZpbHRlci9EOlxcc291cmNlXFx0aHVtYi11cC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udHJvbFxcZmlsdGVyXFxjb2xvci1maWx0ZXItY29udHJvbC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wvZmlsdGVyL2NvbG9yLWZpbHRlci1jb250cm9sLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURDRTtFQUNFLE9BQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC9maWx0ZXIvY29sb3ItZmlsdGVyLWNvbnRyb2wuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICA+IC5jb2wge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCA+IC5jb2wge1xuICBmbGV4OiAxO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorFilterControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'color-filter-control',
          templateUrl: './color-filter-control.html',
          styleUrls: ['./color-filter-control.scss']
        }]
      }], function () {
        return [{
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"]]
          }]
        }];
      }, {
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/control/filter/filter-control-factory.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/control/filter/filter-control-factory.ts ***!
    \*********************************************************************/

  /*! exports provided: FilterControlFactory */

  /***/
  function srcAppComponentsControlFilterFilterControlFactoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterControlFactory", function () {
      return FilterControlFactory;
    });
    /* harmony import */


    var src_app_model_drawing_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/model/drawing-filter */
    "./src/app/model/drawing-filter.ts");
    /* harmony import */


    var src_app_components_control_filter_color_filter_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/control/filter/color-filter-control */
    "./src/app/components/control/filter/color-filter-control.ts");

    var FilterControlFactory =
    /*#__PURE__*/
    function () {
      function FilterControlFactory(resolver) {
        _classCallCheck(this, FilterControlFactory);

        this.resolver = resolver;
      }

      _createClass(FilterControlFactory, [{
        key: "create",
        value: function create(container, filter, injector) {
          if (!filter) return null;
          var component;

          switch (filter.type) {
            case src_app_model_drawing_filter__WEBPACK_IMPORTED_MODULE_0__["ColorDrawingFilter"].type:
              component = src_app_components_control_filter_color_filter_control__WEBPACK_IMPORTED_MODULE_1__["ColorFilterControlComponent"];
              break;
          }

          if (!component) return null;
          var factory = this.resolver.resolveComponentFactory(component);
          var componentRef = container.createComponent(factory, undefined, injector);
          componentRef.instance.filter = filter;
          return componentRef;
        }
      }]);

      return FilterControlFactory;
    }();
    /***/

  },

  /***/
  "./src/app/components/control/image-drawing/image-drawing-control.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/control/image-drawing/image-drawing-control.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ImageDrawingControlComponent */

  /***/
  function srcAppComponentsControlImageDrawingImageDrawingControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDrawingControlComponent", function () {
      return ImageDrawingControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_image_drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/image-drawing */
    "./src/app/model/image-drawing.ts");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ImageDrawingControlComponent =
    /*#__PURE__*/
    function () {
      function ImageDrawingControlComponent(commandService_) {
        _classCallCheck(this, ImageDrawingControlComponent);

        this.commandService_ = commandService_;
        this.subs_ = [];
      }

      _createClass(ImageDrawingControlComponent, [{
        key: "onChangeInvert",
        value: function onChangeInvert(x, y) {
          x = x === undefined ? this.drawing.invertX : x;
          y = y === undefined ? this.drawing.invertY : y;
          this.commandService_.dispatch(new src_app_model_image_drawing__WEBPACK_IMPORTED_MODULE_1__["ImageDrawingChangeInvertCommand"](this.drawing, x, y));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.invertX = this.drawing.invertX;
          this.invertY = this.drawing.invertY;
          this.subs_.push(this.drawing.onDidDirty.subscribe(function () {
            _this8.invertX = _this8.drawing.invertX;
            _this8.invertY = _this8.drawing.invertY;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs_.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }]);

      return ImageDrawingControlComponent;
    }();

    ImageDrawingControlComponent.ɵfac = function ImageDrawingControlComponent_Factory(t) {
      return new (t || ImageDrawingControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"]));
    };

    ImageDrawingControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageDrawingControlComponent,
      selectors: [["image-drawing-control"]],
      inputs: {
        drawing: "drawing"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "control"], [1, "row"], [2, "margin-right", "10px", 3, "ngModel", "change"], [3, "ngModel", "change"]],
      template: function ImageDrawingControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageDrawingControlComponent_Template_mat_checkbox_change_2_listener($event) {
            return ctx.onChangeInvert($event.checked, undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invert X ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageDrawingControlComponent_Template_mat_checkbox_change_4_listener($event) {
            return ctx.onChangeInvert(undefined, $event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Invert Y ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invertX);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invertY);
        }
      },
      directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageDrawingControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'image-drawing-control',
          templateUrl: './image-drawing-control.component.html'
        }]
      }], function () {
        return [{
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"]]
          }]
        }];
      }, {
        drawing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/control/layer/layer-control-item.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/control/layer/layer-control-item.component.ts ***!
    \**************************************************************************/

  /*! exports provided: LayerControlItemComponent */

  /***/
  function srcAppComponentsControlLayerLayerControlItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerControlItemComponent", function () {
      return LayerControlItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LayerControlItemComponent = function LayerControlItemComponent() {
      _classCallCheck(this, LayerControlItemComponent);

      this.active = false;
    };

    LayerControlItemComponent.ɵfac = function LayerControlItemComponent_Factory(t) {
      return new (t || LayerControlItemComponent)();
    };

    LayerControlItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayerControlItemComponent,
      selectors: [["layer-control-item"]],
      hostVars: 2,
      hostBindings: function LayerControlItemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
        }
      },
      inputs: {
        drawing: "drawing",
        active: "active"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "item"], [1, "name"]],
      template: function LayerControlItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.drawing.name);
        }
      },
      styles: [".active[_nghost-%COMP%]    > .item[_ngcontent-%COMP%] {\n  background: #dcdcdc;\n  color: #3e3e3e;\n}\n[_nghost-%COMP%]    > .item[_ngcontent-%COMP%] {\n  color: #c5c5c5;\n  padding: 0 10px;\n  line-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2xheWVyL0Q6XFxzb3VyY2VcXHRodW1iLXVwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250cm9sXFxsYXllclxcbGF5ZXItY29udHJvbC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wvbGF5ZXIvbGF5ZXItY29udHJvbC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDRk47QURNRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC9sYXllci9sYXllci1jb250cm9sLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgID4gLml0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xyXG4gICAgICBjb2xvcjogIzNlM2UzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gLml0ZW0ge1xyXG4gICAgY29sb3I6ICNjNWM1YzU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG59IiwiOmhvc3QuYWN0aXZlID4gLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xuICBjb2xvcjogIzNlM2UzZTtcbn1cbjpob3N0ID4gLml0ZW0ge1xuICBjb2xvcjogI2M1YzVjNTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayerControlItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'layer-control-item',
          templateUrl: './layer-control-item.component.html',
          styleUrls: ['./layer-control-item.component.scss']
        }]
      }], null, {
        drawing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/control/layer/layer-control.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/control/layer/layer-control.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LayerControlComponent */

  /***/
  function srcAppComponentsControlLayerLayerControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerControlComponent", function () {
      return LayerControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/canvas/canvas.component.service */
    "./src/app/components/canvas/canvas.component.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var src_app_components_control_layer_layer_control_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/control/layer/layer-control-item.component */
    "./src/app/components/control/layer/layer-control-item.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    function LayerControlComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "layer-control-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayerControlComponent_ng_container_2_Template_layer_control_item_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var drawingComponent_r18 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onItemClick(drawingComponent_r18);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var drawingComponent_r18 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("drawing", drawingComponent_r18.drawing)("active", drawingComponent_r18.drawing === ctx_r17.focusedDrawing);
      }
    }

    var LayerControlComponent =
    /*#__PURE__*/
    function () {
      function LayerControlComponent(canvasComponentService_, commandService_) {
        _classCallCheck(this, LayerControlComponent);

        this.canvasComponentService_ = canvasComponentService_;
        this.commandService_ = commandService_;
      }

      _createClass(LayerControlComponent, [{
        key: "onItemClick",
        value: function onItemClick(drawingComponent) {
          this.canvas.focusDrawingComponent(drawingComponent);
        }
      }, {
        key: "trackFunc",
        value: function trackFunc(index, comp) {
          return comp.drawing.id;
        }
      }, {
        key: "onMoveUpClick",
        value: function onMoveUpClick() {
          if (!this.focusedDrawing) return;
          var index = this.canvas.canvas.getDrawingIndex(this.focusedDrawing);
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__["CanvasReorderCommand"](this.canvas.canvas, index, index - 1));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "onMoveDownClick",
        value: function onMoveDownClick() {
          if (!this.focusedDrawing) return;
          var index = this.canvas.canvas.getDrawingIndex(this.focusedDrawing);
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__["CanvasReorderCommand"](this.canvas.canvas, index, index + 1));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "onRemoveClick",
        value: function onRemoveClick() {
          if (!this.focusedDrawing) return;
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__["CanvasRemoveDrawingCommand"](this.canvas.canvas, this.focusedDrawing));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "onSaveClick",
        value: function onSaveClick() {
          var image = this.canvasComponentService_.canvasComponent.render();
          image = image.replace('image/png', 'image/octet-stream');
          var link = document.getElementById('link');
          link.setAttribute('download', 'thumbnail.png');
          link.setAttribute('href', image);
          link.click();
        }
      }, {
        key: "canvas",
        get: function get() {
          return this.canvasComponentService_.canvasComponent;
        }
      }, {
        key: "focusedDrawing",
        get: function get() {
          var _a;

          return (_a = this.canvas.focusedDrawing) === null || _a === void 0 ? void 0 : _a.drawing;
        }
      }, {
        key: "drawingComponents",
        get: function get() {
          return this.canvas.drawingComponents;
        }
      }]);

      return LayerControlComponent;
    }();

    LayerControlComponent.ɵfac = function LayerControlComponent_Factory(t) {
      return new (t || LayerControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_3__["CanvasComponentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"]));
    };

    LayerControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayerControlComponent,
      selectors: [["layer-control"]],
      decls: 16,
      vars: 2,
      consts: [[1, "layer-control"], [1, "list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "buttons"], ["mat-icon-button", "", 3, "click"], [1, "material-icons"], ["mat-icon-button", "", 2, "float", "right", 3, "click"], [3, "drawing", "active", "click"]],
      template: function LayerControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayerControlComponent_ng_container_2_Template, 3, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayerControlComponent_Template_button_click_4_listener() {
            return ctx.onMoveUpClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayerControlComponent_Template_button_click_7_listener() {
            return ctx.onMoveDownClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayerControlComponent_Template_button_click_10_listener() {
            return ctx.onRemoveClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayerControlComponent_Template_button_click_13_listener() {
            return ctx.onSaveClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "save_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drawingComponents)("ngForTrackBy", ctx.trackFunc);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], src_app_components_control_layer_layer_control_item_component__WEBPACK_IMPORTED_MODULE_7__["LayerControlItemComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"]],
      styles: [".layer-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 0px;\n  box-sizing: border-box;\n}\n.layer-control[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  background: #383838;\n  border-radius: 5px;\n  box-sizing: border-box;\n  overflow: auto;\n}\n.layer-control[_ngcontent-%COMP%]    > .buttons[_ngcontent-%COMP%] {\n  flex-basis: 40px;\n  padding: 5px 0;\n  align-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2xheWVyL0Q6XFxzb3VyY2VcXHRodW1iLXVwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250cm9sXFxsYXllclxcbGF5ZXItY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2xheWVyL2xheWVyLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUU7RUFFRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL2xheWVyL2xheWVyLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5ZXItY29udHJvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gID4gLmxpc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQ6ICMzODM4Mzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICA+IC5idXR0b25zIHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWJhc2lzOiA0MHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG59IiwiLmxheWVyLWNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxheWVyLWNvbnRyb2wgPiAubGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogIzM4MzgzODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5sYXllci1jb250cm9sID4gLmJ1dHRvbnMge1xuICBmbGV4LWJhc2lzOiA0MHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayerControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'layer-control',
          templateUrl: './layer-control.component.html',
          styleUrls: ['./layer-control.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_3__["CanvasComponentService"]
        }, {
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/control/movable/movable-control.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/control/movable/movable-control.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MovableControlComponent */

  /***/
  function srcAppComponentsControlMovableMovableControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovableControlComponent", function () {
      return MovableControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_model_movable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/movable */
    "./src/app/model/movable.ts");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MovableControlComponent =
    /*#__PURE__*/
    function () {
      function MovableControlComponent(commandService_) {
        _classCallCheck(this, MovableControlComponent);

        this.commandService_ = commandService_;
        this.subs_ = [];
      }

      _createClass(MovableControlComponent, [{
        key: "onChangePosition",
        value: function onChangePosition(x, y) {
          var movable = this.movable;
          var ww = x === undefined ? movable.x : x;
          var hh = y === undefined ? movable.y : y;
          this.commandService_.dispatch(new src_app_model_movable__WEBPACK_IMPORTED_MODULE_2__["MovableTranslateCommand"](movable, ww, hh));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "onChangeSize",
        value: function onChangeSize(w, h) {
          var movable = this.movable;
          var ww = w === undefined ? movable.w : w;
          var hh = h === undefined ? movable.h : h;
          this.commandService_.dispatch(new src_app_model_movable__WEBPACK_IMPORTED_MODULE_2__["MovableResizeCommand"](movable, ww, hh));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "onDidChangeRotation",
        value: function onDidChangeRotation(r) {// const movable = this.movable;
          // const rr = (r === undefined ? movable.r : r); 
          // this.commandService_.dispatch(
          //   new MovableResizeCommand(movable, ww, hh));
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this9 = this;

          if (changes.movable) {
            this.subs_.forEach(function (sub) {
              return sub.unsubscribe();
            });
            this.subs_ = [];
            var movable = this.movable;
            this.x = movable.x;
            this.y = movable.y;
            this.w = movable.w;
            this.h = movable.h;
            this.r = movable.r;
            this.subs_.push(movable.onDidChange.subscribe(function () {
              _this9.x = movable.x;
              _this9.y = movable.y;
              _this9.w = movable.w;
              _this9.h = movable.h;
              _this9.r = movable.r;
            }));
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs_.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }]);

      return MovableControlComponent;
    }();

    MovableControlComponent.ɵfac = function MovableControlComponent_Factory(t) {
      return new (t || MovableControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_1__["ICommandService"]));
    };

    MovableControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovableControlComponent,
      selectors: [["movable-control"]],
      inputs: {
        movable: "movable"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 19,
      vars: 4,
      consts: [[1, "control"], [1, "row"], ["matInput", "", "placeholder", "Position X", 3, "ngModel", "ngModelChange", "keyup"], ["matSuffix", ""], ["matInput", "", "placeholder", "Position Y", 3, "ngModel", "ngModelChange", "keyup"], ["matInput", "", "placeholder", "Width", 3, "ngModel", "ngModelChange", "keyup"], ["matInput", "", "placeholder", "Height", 3, "ngModel", "ngModelChange", "keyup"]],
      template: function MovableControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MovableControlComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.x = $event;
          })("keyup", function MovableControlComponent_Template_input_keyup_3_listener($event) {
            return ctx.onChangePosition($event.target.value - 0, undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MovableControlComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.y = $event;
          })("keyup", function MovableControlComponent_Template_input_keyup_7_listener($event) {
            return ctx.onChangePosition(undefined, $event.target.value - 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MovableControlComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.w = $event;
          })("keyup", function MovableControlComponent_Template_input_keyup_12_listener($event) {
            return ctx.onChangeSize($event.target.value - 0, undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MovableControlComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.h = $event;
          })("keyup", function MovableControlComponent_Template_input_keyup_16_listener($event) {
            return ctx.onChangeSize(undefined, $event.target.value - 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.x);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.y);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.w);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.h);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"]],
      styles: [".control[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.control[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL21vdmFibGUvRDpcXHNvdXJjZVxcdGh1bWItdXAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRyb2xcXG1vdmFibGVcXG1vdmFibGUtY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL21vdmFibGUvbW92YWJsZS1jb250cm9sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL21vdmFibGUvbW92YWJsZS1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2wge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgPiAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxufSIsIi5jb250cm9sIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udHJvbCA+IC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovableControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'movable-control',
          templateUrl: './movable-control.component.html',
          styleUrls: ['./movable-control.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_1__["ICommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_1__["ICommandService"]]
          }]
        }];
      }, {
        movable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/control/text-drawing/text-drawing-control.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/control/text-drawing/text-drawing-control.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: TextDrawingControlComponent */

  /***/
  function srcAppComponentsControlTextDrawingTextDrawingControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDrawingControlComponent", function () {
      return TextDrawingControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/text-drawing */
    "./src/app/model/text-drawing.ts");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");

    var TextDrawingControlComponent =
    /*#__PURE__*/
    function () {
      function TextDrawingControlComponent(commandService_) {
        _classCallCheck(this, TextDrawingControlComponent);

        this.commandService_ = commandService_;
        this.subs_ = [];
      }

      _createClass(TextDrawingControlComponent, [{
        key: "onChangeText",
        value: function onChangeText(text) {
          var drawing = this.drawing;
          this.commandService_.dispatch(new src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_1__["TextDrawingChangeTextCommand"](drawing, text));
        }
      }, {
        key: "onChangeSize",
        value: function onChangeSize(size) {
          var drawing = this.drawing;
          this.commandService_.dispatch(new src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_1__["TextDrawingChangeSizeCommand"](drawing, size));
        }
      }, {
        key: "onColorChange",
        value: function onColorChange() {
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "onChangeFont",
        value: function onChangeFont(font) {
          var drawing = this.drawing;
          this.commandService_.dispatch(new src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_1__["TextDrawingChangeFontCommand"](drawing, font));
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.text = this.drawing.text;
          this.size = this.drawing.size;
          this.font = this.drawing.font;
          this.color_ = this.drawing.color;
          this.subs_.push(this.drawing.onDidChangeText.subscribe(function () {
            _this10.text = _this10.drawing.text;
            _this10.size = _this10.drawing.size;
            _this10.color_ = _this10.drawing.color;
            _this10.font = _this10.drawing.font;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs_.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasAddStackElementCommand"]());
        }
      }, {
        key: "color",
        get: function get() {
          return this.color_;
        },
        set: function set(v) {
          this.commandService_.dispatch(new src_app_model_text_drawing__WEBPACK_IMPORTED_MODULE_1__["TextDrawingChangeColorCommand"](this.drawing, v));
        }
      }]);

      return TextDrawingControlComponent;
    }();

    TextDrawingControlComponent.ɵfac = function TextDrawingControlComponent_Factory(t) {
      return new (t || TextDrawingControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"]));
    };

    TextDrawingControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextDrawingControlComponent,
      selectors: [["text-drawing-control"]],
      inputs: {
        drawing: "drawing"
      },
      decls: 22,
      vars: 7,
      consts: [[1, "control"], [1, "row"], [2, "width", "100%"], ["matInput", "", "placeholder", "Text", 3, "ngModel", "ngModelChange", "keyup", "blur"], [3, "value", "selectionChange"], ["value", "Nanum Gothic"], ["value", "Nanum Myeongjo"], ["value", "Nanum Brush Script"], ["value", "Nanum Pen Script"], ["matInput", "", "placeholder", "Size", 3, "ngModel", "ngModelChange", "keyup", "blur"], [1, "color"], [1, "color", 3, "colorPicker", "cpPosition", "colorPickerChange", "colorPickerSelect"]],
      template: function TextDrawingControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextDrawingControlComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.text = $event;
          })("keyup", function TextDrawingControlComponent_Template_input_keyup_3_listener($event) {
            return ctx.onChangeText($event.target.value);
          })("blur", function TextDrawingControlComponent_Template_input_blur_3_listener() {
            return ctx.onBlur();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Font");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TextDrawingControlComponent_Template_mat_select_selectionChange_8_listener($event) {
            return ctx.onChangeFont($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nanum Gothic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nanum Myeongjo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nanum Brush Script");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nanum Pen Script");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextDrawingControlComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.size = $event;
          })("keyup", function TextDrawingControlComponent_Template_input_keyup_19_listener($event) {
            return ctx.onChangeSize($event.target.value - 0);
          })("blur", function TextDrawingControlComponent_Template_input_blur_19_listener() {
            return ctx.onBlur();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function TextDrawingControlComponent_Template_input_colorPickerChange_21_listener($event) {
            return ctx.color = $event;
          })("colorPickerSelect", function TextDrawingControlComponent_Template_input_colorPickerSelect_21_listener() {
            return ctx.onColorChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.font);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.size);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx.color)("cpPosition", "left");
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerDirective"]],
      styles: [".control[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.control[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.control[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .color[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 20px 0 20px 20px;\n}\n.control[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .color[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL3RleHQtZHJhd2luZy9EOlxcc291cmNlXFx0aHVtYi11cC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udHJvbFxcdGV4dC1kcmF3aW5nXFx0ZXh0LWRyYXdpbmctY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL3RleHQtZHJhd2luZy90ZXh0LWRyYXdpbmctY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7QUNESjtBREdJO0VBQ0UsT0FBQTtBQ0ROO0FESUk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNGUjtBRElRO0VBQ0UsU0FBQTtBQ0ZWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sL3RleHQtZHJhd2luZy90ZXh0LWRyYXdpbmctY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sIHtcclxuXHJcbiAgPiAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgPiAqIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICA+IC5jb2xvciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAyMHB4O1xyXG5cclxuICAgICAgICA+IGlucHV0IHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSIsIi5jb250cm9sID4gLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udHJvbCA+IC5yb3cgPiAqIHtcbiAgZmxleDogMTtcbn1cbi5jb250cm9sID4gLnJvdyA+IC5jb2xvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XG59XG4uY29udHJvbCA+IC5yb3cgPiAuY29sb3IgPiBpbnB1dCB7XG4gIGJvcmRlcjogMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextDrawingControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'text-drawing-control',
          templateUrl: './text-drawing-control.component.html',
          styleUrls: ['./text-drawing-control.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_2__["ICommandService"]]
          }]
        }];
      }, {
        drawing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/image-drawing/image-drawing.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/image-drawing/image-drawing.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ImageDrawingComponent */

  /***/
  function srcAppComponentsImageDrawingImageDrawingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDrawingComponent", function () {
      return ImageDrawingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _c0 = ["canvas"];
    var _c1 = ["movable"];

    var ImageDrawingComponent =
    /*#__PURE__*/
    function () {
      function ImageDrawingComponent() {
        _classCallCheck(this, ImageDrawingComponent);

        this.subs_ = [];
      }

      _createClass(ImageDrawingComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this11 = this;

          this.cvs_ = this.canvasRef_.nativeElement;
          this.ctx_ = this.canvasRef_.nativeElement.getContext('2d');
          this.subs_.push(this.movableComponent.onDidUpdate.subscribe(function () {
            _this11.localRender();
          }));
          this.subs_.push(this.drawing.onDidDirty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(16, undefined, {
            trailing: true
          })).subscribe(function () {
            _this11.localRender();
          }));
          this.localRender();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs_.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "localRender",
        value: function localRender() {
          var movable = this.drawing.movable;
          this.cvs_.width = Math.abs(movable.w);
          this.cvs_.height = Math.abs(movable.h);
          this.render(this.ctx_);
        }
      }, {
        key: "render",
        value: function render(ctx) {
          var movable = this.drawing.movable;
          var x = 0,
              y = 0;
          ctx.save();

          if (this.drawing.invertX) {
            x = -movable.w;
            ctx.scale(-1, 1);
          }

          if (this.drawing.invertY) {
            y = -movable.h;
            ctx.scale(1, -1);
          }

          ctx.drawImage(this.drawing.img, 0, 0, this.drawing.img.width, this.drawing.img.height, x, y, movable.w, movable.h);
          var filter = this.drawing.filter;
          filter && filter.apply(ctx);
          ctx.restore();
        }
      }]);

      return ImageDrawingComponent;
    }();

    ImageDrawingComponent.ɵfac = function ImageDrawingComponent_Factory(t) {
      return new (t || ImageDrawingComponent)();
    };

    ImageDrawingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageDrawingComponent,
      selectors: [["image-drawing"]],
      viewQuery: function ImageDrawingComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef_ = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.movableComponent = _t.first);
        }
      },
      inputs: {
        drawing: "drawing"
      },
      decls: 4,
      vars: 1,
      consts: [[3, "movable"], ["movable", ""], ["canvas", ""]],
      template: function ImageDrawingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "movable", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movable", ctx.drawing.movable);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageDrawingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'image-drawing',
          templateUrl: './image-drawing.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        canvasRef_: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas']
        }],
        movableComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['movable']
        }],
        drawing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/movable/movable.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/movable/movable.component.ts ***!
    \*********************************************************/

  /*! exports provided: MovableComponent */

  /***/
  function srcAppComponentsMovableMovableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovableComponent", function () {
      return MovableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/util/vec2 */
    "./src/app/util/vec2.ts");
    /* harmony import */


    var src_app_util_mat2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/util/mat2 */
    "./src/app/util/mat2.ts");
    /* harmony import */


    var src_app_model_movable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/movable */
    "./src/app/model/movable.ts");
    /* harmony import */


    var src_app_util_vec4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/util/vec4 */
    "./src/app/util/vec4.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_service_command_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/command.service */
    "./src/app/service/command.service.ts");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");
    /* harmony import */


    var src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/canvas/canvas.component.service */
    "./src/app/components/canvas/canvas.component.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["gui"];

    function MovableComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MovableComponent_ng_template_1_Template_div_mousedown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.startResize($event, ctx_r10.updateResizeUL);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MovableComponent_ng_template_1_Template_div_mousedown_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.startResize($event, ctx_r12.updateResizeUR);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MovableComponent_ng_template_1_Template_div_mousedown_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.startResize($event, ctx_r13.updateResizeBL);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MovableComponent_ng_template_1_Template_div_mousedown_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.startResize($event, ctx_r14.updateResizeBR);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MovableComponent_ng_template_1_Template_div_mousedown_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.startRotate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getThumbCenterStyle());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getThumbStyle(ctx_r9.thumbTL));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getThumbStyle(ctx_r9.thumbTR));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getThumbStyle(ctx_r9.thumbBL));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getThumbStyle(ctx_r9.thumbBR));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getLineStyle(ctx_r9.thumbTL, ctx_r9.thumbTR));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getLineStyle(ctx_r9.thumbTR, ctx_r9.thumbBR));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getLineStyle(ctx_r9.thumbBR, ctx_r9.thumbBL));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getLineStyle(ctx_r9.thumbBL, ctx_r9.thumbTL));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.getLineStyle(ctx_r9.thumbBC, ctx_r9.thumbCR));
      }
    }

    var _c1 = ["*"];

    var MovableComponent =
    /*#__PURE__*/
    function () {
      function MovableComponent(viewContainerRef, changeRef, canvasComponentService_, commandService_) {
        _classCallCheck(this, MovableComponent);

        this.viewContainerRef = viewContainerRef;
        this.changeRef = changeRef;
        this.canvasComponentService_ = canvasComponentService_;
        this.commandService_ = commandService_;
        this.onDidUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focused = false;
        this.subs_ = [];
        this.centerVec = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.sizeVec = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.thumbTL = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.thumbTR = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.thumbBL = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.thumbBR = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.thumbBC = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.thumbCR = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.updateResizeUL = this.updateResize.bind(this, [1, 1, 0, 0]);
        this.updateResizeUR = this.updateResize.bind(this, [0, 1, 1, 0]);
        this.updateResizeBL = this.updateResize.bind(this, [1, 0, 0, 1]);
        this.updateResizeBR = this.updateResize.bind(this, [0, 0, 1, 1]);
        this.updateTranslate = this.updateTranslate.bind(this);
        this.updateRotate = this.updateRotate.bind(this);
      }

      _createClass(MovableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.update();
          this.subs_.push(this.movable.onDidChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["throttleTime"])(16, undefined, {
            trailing: true
          })).subscribe(function () {
            _this12.update();
          }));
          this.subs_.push(this.canvasComponentService_.canvasComponent.onDidChangeCamera.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["throttleTime"])(16, undefined, {
            trailing: true
          })).subscribe(function () {
            _this12.update();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs_.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "saveSrcRotation",
        value: function saveSrcRotation() {
          this.srcRotationMat_ = src_app_util_mat2__WEBPACK_IMPORTED_MODULE_2__["default"].rotation(this.movable.rad);
          this.srcRrotationMat_ = src_app_util_mat2__WEBPACK_IMPORTED_MODULE_2__["default"].rotation(-1 * this.movable.rad);
        }
      }, {
        key: "update",
        value: function update() {
          if (!this.focused) {
            this.onDidUpdate.emit();
            this.changeRef.markForCheck();
            return;
          }

          var canvas = this.canvasComponentService_.canvasComponent;
          var zoom = canvas.cameraZoom;
          var _ref3 = [this.movable.w, this.movable.h],
              w = _ref3[0],
              h = _ref3[1];
          var center = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([this.movable.x, this.movable.y]);
          var zoomVec = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([zoom, zoom]);
          var translate = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([canvas.cameraX, canvas.cameraY]);
          center.multiply(zoomVec);
          this.centerVec.xy = [center.x, center.y];
          this.centerVec.add(translate);
          this.sizeVec = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([this.movable.w, this.movable.h]);
          this.sizeVec.multiply(zoomVec); // translate.multiply(new vec2([zoom, zoom]));

          [[this.thumbTL, new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([-w / 2, -h / 2])], [this.thumbTR, new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([w / 2, -h / 2])], [this.thumbBL, new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([-w / 2, h / 2])], [this.thumbBR, new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([w / 2, h / 2])], [this.thumbBC, new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([0, h / 2])], [this.thumbCR, new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([0, h / 2 + 30])]].forEach(function (thumb) {
            var ct = thumb[1];
            ct.multiply(new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([zoom, zoom])); // ct.add(center);
            // ct.add(translate);
            // const rot_ct = ct.multiplyMat2(rot);

            thumb[0].xy = ct.xy;
          });
          this.onDidUpdate.emit();
          this.changeRef.markForCheck();
        }
      }, {
        key: "startTranslate",
        value: function startTranslate(e) {
          var _this13 = this;

          var stopProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (e.button != 0) return;
          if (stopProp) e.stopPropagation();
          var movable = this.movable;
          this.srcMousePosition_ = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([e.screenX, e.screenY]);
          this.srcMovableState_ = new src_app_util_vec4__WEBPACK_IMPORTED_MODULE_4__["default"]([movable.x, movable.y, movable.w, movable.h]);
          window.addEventListener('mousemove', this.updateTranslate);

          var mouseup = function mouseup() {
            _this13.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_7__["CanvasAddStackElementCommand"]());

            window.removeEventListener('mousemove', _this13.updateTranslate);
            window.removeEventListener('mouseup', mouseup);
          };

          window.addEventListener('mouseup', mouseup);
        }
      }, {
        key: "updateTranslate",
        value: function updateTranslate(e) {
          var movable = this.movable;
          var currentMosuePosition = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([e.screenX, e.screenY]);
          var dp = currentMosuePosition.subtract(this.srcMousePosition_);
          var zoom = 1 / this.canvasComponentService_.canvasComponent.cameraZoom;
          dp.multiply(new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([zoom, zoom]));
          var nx = this.srcMovableState_.x + dp.x;
          var ny = this.srcMovableState_.y + dp.y;
          var command = new src_app_model_movable__WEBPACK_IMPORTED_MODULE_3__["MovableTranslateCommand"](movable, nx, ny);
          this.commandService_.dispatch(command);
        }
      }, {
        key: "startResize",
        value: function startResize(e, resizeFunc) {
          var _this14 = this;

          if (e.button != 0) return;
          e.stopPropagation();
          var movable = this.movable;
          this.srcMousePosition_ = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([e.screenX, e.screenY]);
          this.srcMovableState_ = new src_app_util_vec4__WEBPACK_IMPORTED_MODULE_4__["default"]([movable.x, movable.y, movable.w, movable.h]);
          this.srcMovableRotate_ = movable.r;
          this.saveSrcRotation();
          window.addEventListener('mousemove', resizeFunc);

          var mouseup = function mouseup() {
            _this14.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_7__["CanvasAddStackElementCommand"]());

            window.removeEventListener('mousemove', resizeFunc);
            window.removeEventListener('mouseup', mouseup);
          };

          window.addEventListener('mouseup', mouseup);
        }
      }, {
        key: "updateResize",
        value: function updateResize(multiplier, e) {
          e.stopPropagation();
          var movable = this.movable;
          var src = this.srcMovableState_;
          var currentMosuePosition = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([e.screenX, e.screenY]);
          var dp = currentMosuePosition.subtract(this.srcMousePosition_);
          var local_dp = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([dp.x, dp.y]);
          local_dp.multiplyMat2(this.srcRrotationMat_);
          var zoom = 1 / this.canvasComponentService_.canvasComponent.cameraZoom;
          local_dp.multiply(new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([zoom, zoom]));

          if (movable.aspect) {
            var projection = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([-src.z * multiplier[0] + src.z * multiplier[2], -src.w * multiplier[1] + src.w * multiplier[3]]).normalize();
            projection.scale(src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"].dot(projection, local_dp), local_dp);
          }

          var newLocalUL = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([-src.z / 2 + local_dp.x * multiplier[0], -src.w / 2 + local_dp.y * multiplier[1]]);
          var newLocalBR = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([src.z / 2 + local_dp.x * multiplier[2], src.w / 2 + local_dp.y * multiplier[3]]);
          var newLocalCenter = newLocalUL.copy();
          newLocalCenter.add(newLocalBR).multiply(new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([0.5, 0.5]));
          var newCenter = newLocalCenter.copy();
          newCenter.multiplyMat2(this.srcRotationMat_);
          newCenter.add(new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([src.x, src.y]));
          var newUL = newLocalUL.copy();
          var newBR = newLocalBR.copy();
          newUL.multiplyMat2(this.srcRotationMat_).add(newCenter);
          newBR.multiplyMat2(this.srcRotationMat_).add(newCenter);
          var newSize = newLocalBR.subtract(newLocalUL);
          var nx = newCenter.x;
          var ny = newCenter.y;
          var nw = Math.abs(newSize.x);
          var nh = Math.abs(newSize.y);
          var nr = newSize.x >= 0 && newSize.y >= 0 ? this.srcMovableRotate_ : (this.srcMovableRotate_ + 180 + 360) % 360;
          this.commandService_.dispatch(new src_app_model_movable__WEBPACK_IMPORTED_MODULE_3__["MovableTranslateCommand"](movable, nx, ny));
          this.commandService_.dispatch(new src_app_model_movable__WEBPACK_IMPORTED_MODULE_3__["MovableResizeCommand"](movable, nw, nh));
          this.commandService_.dispatch(new src_app_model_movable__WEBPACK_IMPORTED_MODULE_3__["MovableRotateCommand"](movable, nr));
        }
      }, {
        key: "startRotate",
        value: function startRotate(e) {
          var _this15 = this;

          if (e.button != 0) return;
          e.stopPropagation();
          var movable = this.movable;
          this.srcMousePosition_ = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([e.pageX, e.pageY]);
          this.srcMovableState_ = new src_app_util_vec4__WEBPACK_IMPORTED_MODULE_4__["default"]([movable.x, movable.y, movable.w, movable.h]);
          this.srcMovableRotate_ = movable.r;
          this.saveSrcRotation();
          window.addEventListener('mousemove', this.updateRotate);

          var mouseup = function mouseup() {
            _this15.commandService_.dispatch(new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_7__["CanvasAddStackElementCommand"]());

            window.removeEventListener('mousemove', _this15.updateRotate);
            window.removeEventListener('mouseup', mouseup);
          };

          window.addEventListener('mouseup', mouseup);
        }
      }, {
        key: "updateRotate",
        value: function updateRotate(e) {
          e.stopPropagation();
          var movable = this.movable;
          var currentMosuePosition = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([e.pageX, e.pageY]);
          var dp = this.canvasComponentService_.canvasComponent.fromPageToCanvasScreen(currentMosuePosition);
          dp.subtract(this.centerVec);
          var rad = Math.atan2(dp.y, dp.x);
          var deg = (rad / Math.PI * 180 - 90 + 360) % 360;
          this.commandService_.dispatch(new src_app_model_movable__WEBPACK_IMPORTED_MODULE_3__["MovableRotateCommand"](movable, deg));
        }
      }, {
        key: "focus",
        value: function focus() {
          this.focused = true;
          this.update();
          this.changeRef.markForCheck();
        }
      }, {
        key: "blur",
        value: function blur() {
          this.focused = false;
          this.update();
          this.changeRef.markForCheck();
        }
      }, {
        key: "getCenterStyle",
        value: function getCenterStyle() {
          return {
            'z-index': this.movable.z,
            transform: "\n        translateX(".concat(this.movable.x, "px)\n        translateY(").concat(this.movable.y, "px)")
          };
        }
      }, {
        key: "getThumbCenterStyle",
        value: function getThumbCenterStyle() {
          return {
            transform: "\n        translateX(".concat(this.centerVec.x, "px)\n        translateY(").concat(this.centerVec.y, "px)\n        rotate(").concat(this.movable.r, "deg)")
          };
        }
      }, {
        key: "getThumbContentStyle",
        value: function getThumbContentStyle() {
          return {
            width: "".concat(this.sizeVec.x, "px"),
            height: "".concat(this.sizeVec.y, "px"),
            transform: "\n        translateX(".concat(-this.sizeVec.x / 2, "px)\n        translateY(").concat(-this.sizeVec.y / 2, "px)")
          };
        }
      }, {
        key: "getBoxStyle",
        value: function getBoxStyle() {
          return {
            width: "".concat(Math.abs(this.movable.w), "px"),
            height: "".concat(Math.abs(this.movable.h), "px"),
            transform: "\n        translateX(".concat(-Math.abs(this.movable.w) / 2, "px)\n        translateY(").concat(-Math.abs(this.movable.h) / 2, "px)\n        rotate(").concat(this.movable.r, "deg)")
          };
        }
      }, {
        key: "getGUIStyle",
        value: function getGUIStyle() {
          return {
            transform: "\n        translateX(".concat(this.movable.x, "px)\n        translateY(").concat(this.movable.y, "px)")
          };
        }
      }, {
        key: "getThumbStyle",
        value: function getThumbStyle(thumb) {
          return {
            transform: "translateX(".concat(thumb.x, "px) translateY(").concat(thumb.y, "px)")
          };
        }
      }, {
        key: "getLineStyle",
        value: function getLineStyle(from, to) {
          var sub = new src_app_util_vec2__WEBPACK_IMPORTED_MODULE_1__["default"]([to.x, to.y]);
          sub.subtract(from);
          var angle = Math.atan2(sub.y, sub.x) / Math.PI * 180;
          return {
            width: "".concat(sub.length(), "px"),
            transform: "translateX(".concat(from.x + 0.5, "px) translateY(").concat(from.y, "px) rotate(").concat(angle, "deg)")
          };
        }
      }, {
        key: "id",
        get: function get() {
          return this.movable.id;
        }
      }]);

      return MovableComponent;
    }();

    MovableComponent.ɵfac = function MovableComponent_Factory(t) {
      return new (t || MovableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_8__["CanvasComponentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_command_service__WEBPACK_IMPORTED_MODULE_6__["ICommandService"]));
    };

    MovableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovableComponent,
      selectors: [["movable"]],
      viewQuery: function MovableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.guiContent = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function MovableComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("movable-id", ctx.id);
        }
      },
      inputs: {
        movable: "movable",
        focused: "focused"
      },
      ngContentSelectors: _c1,
      decls: 5,
      vars: 2,
      consts: [[1, "movable", 3, "ngStyle"], ["gui", ""], [1, "content", 3, "ngStyle", "mousedown"], [1, "thumbs", 3, "ngStyle"], [1, "thumb", "tl", 3, "ngStyle", "mousedown"], [1, "thumb", "tr", 3, "ngStyle", "mousedown"], [1, "thumb", "bl", 3, "ngStyle", "mousedown"], [1, "thumb", "br", 3, "ngStyle", "mousedown"], [1, "line", "top", 3, "ngStyle"], [1, "line", "right", 3, "ngStyle"], [1, "line", "bottom", 3, "ngStyle"], [1, "line", "left", 3, "ngStyle"], [1, "line", "rotate", 3, "ngStyle"], [1, "thumb", 3, "mousedown"]],
      template: function MovableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovableComponent_ng_template_1_Template, 11, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MovableComponent_Template_div_mousedown_3_listener($event) {
            return ctx.startTranslate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getCenterStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getBoxStyle());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]],
      styles: [".movable[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.movable[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  transform-origin: center center;\n  top: 0;\n  left: 0;\n}\n.thumbs[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10000;\n}\n.thumbs[_ngcontent-%COMP%]    > .thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 14px;\n  height: 14px;\n  top: -7px;\n  left: -7px;\n}\n.thumbs[_ngcontent-%COMP%]    > .thumb.tl[_ngcontent-%COMP%], .thumbs[_ngcontent-%COMP%]    > .thumb.br[_ngcontent-%COMP%] {\n  cursor: nw-resize;\n}\n.thumbs[_ngcontent-%COMP%]    > .thumb.tr[_ngcontent-%COMP%], .thumbs[_ngcontent-%COMP%]    > .thumb.bl[_ngcontent-%COMP%] {\n  cursor: ne-resize;\n}\n.thumbs[_ngcontent-%COMP%]    > .line[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  border-bottom: 2px dashed #ec5555;\n  transform-origin: left center;\n}\n.thumbs[_ngcontent-%COMP%]    > .line.top[_ngcontent-%COMP%] {\n  margin-top: -2px;\n}\n.thumbs[_ngcontent-%COMP%]    > .line.rotate[_ngcontent-%COMP%]    > .thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: url(\"/assets/rotate_right-24px.svg\") 12 12, auto;\n  right: 0;\n  top: 0;\n  width: 14px;\n  height: 14px;\n  background: #ec5555;\n  border-radius: 100%;\n  margin-top: -7px;\n  margin-right: -7px;\n}\n.thumbs[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZhYmxlL0Q6XFxzb3VyY2VcXHRodW1iLXVwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb3ZhYmxlXFxtb3ZhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmFibGUvbW92YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0FKO0FES0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNGRjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FESUk7RUFDRSxpQkFBQTtBQ0ZOO0FESUk7RUFDRSxpQkFBQTtBQ0ZOO0FEaUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQy9CSjtBRGlDSTtFQUNFLGdCQUFBO0FDL0JOO0FEbUNNO0VBQ0Usa0JBQUE7RUFDQSx3REFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2pDUjtBRHNDRTtFQUNFLGtCQUFBO0FDcENKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZhYmxlL21vdmFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92YWJsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuXHJcbiAgPiAuY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRodW1icyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG5cclxuICA+IC50aHVtYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICB0b3A6IC03cHg7XHJcbiAgICBsZWZ0OiAtN3B4O1xyXG5cclxuICAgICYudGwsICYuYnIge1xyXG4gICAgICBjdXJzb3I6IG53LXJlc2l6ZTtcclxuICAgIH1cclxuICAgICYudHIsICYuYmwge1xyXG4gICAgICBjdXJzb3I6IG5lLXJlc2l6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gJjo6YWZ0ZXIge1xyXG4gICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgIHdpZHRoOiA1MCU7XHJcbiAgICAvLyAgIGhlaWdodDogNTAlO1xyXG4gICAgLy8gICBjb250ZW50OiAnJztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAmLnRsIHtcclxuICAgIC8vICAgY3Vyc29yOiBudy1yZXNpemU7XHJcbiAgICAvLyAgICY6OmFmdGVyIHtcclxuICAgIC8vICAgICB0b3A6IDUwJTtcclxuICAgIC8vICAgICBsZWZ0OiA1MCU7XHJcbiAgICAvLyAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgLy8gICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAmLnRyIHtcclxuICAgIC8vICAgY3Vyc29yOiBudy1yZXNpemU7XHJcbiAgICAvLyAgICY6OmFmdGVyIHtcclxuICAgIC8vICAgICBib3R0b206IDA7XHJcbiAgICAvLyAgICAgbGVmdDogMDtcclxuICAgIC8vICAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICAvLyAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgd2hpdGU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gID4gLmxpbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI2VjNTU1NTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG5cclxuICAgICYudG9wIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIH1cclxuXHJcbiAgICAmLnJvdGF0ZSB7XHJcbiAgICAgID4gLnRodW1iIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY3Vyc29yOiB1cmwoXCIvYXNzZXRzL3JvdGF0ZV9yaWdodC0yNHB4LnN2Z1wiKSAxMiAxMiwgYXV0bztcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYzU1NTU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTdweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgPiAuY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxufSIsIi5tb3ZhYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ubW92YWJsZSA+IC5jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi50aHVtYnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuLnRodW1icyA+IC50aHVtYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiAtN3B4O1xufVxuLnRodW1icyA+IC50aHVtYi50bCwgLnRodW1icyA+IC50aHVtYi5iciB7XG4gIGN1cnNvcjogbnctcmVzaXplO1xufVxuLnRodW1icyA+IC50aHVtYi50ciwgLnRodW1icyA+IC50aHVtYi5ibCB7XG4gIGN1cnNvcjogbmUtcmVzaXplO1xufVxuLnRodW1icyA+IC5saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICNlYzU1NTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xufVxuLnRodW1icyA+IC5saW5lLnRvcCB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4udGh1bWJzID4gLmxpbmUucm90YXRlID4gLnRodW1iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHVybChcIi9hc3NldHMvcm90YXRlX3JpZ2h0LTI0cHguc3ZnXCIpIDEyIDEyLCBhdXRvO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZWM1NTU1O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtN3B4O1xuICBtYXJnaW4tcmlnaHQ6IC03cHg7XG59XG4udGh1bWJzID4gLmNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'movable',
          templateUrl: './movable.component.html',
          styleUrls: ['movable.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: src_app_components_canvas_canvas_component_service__WEBPACK_IMPORTED_MODULE_8__["CanvasComponentService"]
        }, {
          type: src_app_service_command_service__WEBPACK_IMPORTED_MODULE_6__["ICommandService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_service_command_service__WEBPACK_IMPORTED_MODULE_6__["ICommandService"]]
          }]
        }];
      }, {
        movable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        guiContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gui']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.movable-id']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/text-drawing/text-drawing.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/text-drawing/text-drawing.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TextDrawingComponent */

  /***/
  function srcAppComponentsTextDrawingTextDrawingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDrawingComponent", function () {
      return TextDrawingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _c0 = ["canvas"];
    var _c1 = ["movable"];

    var TextDrawingComponent =
    /*#__PURE__*/
    function () {
      function TextDrawingComponent() {
        _classCallCheck(this, TextDrawingComponent);

        this.subs_ = [];
      }

      _createClass(TextDrawingComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this16 = this;

          this.cvs_ = this.canvasRef_.nativeElement;
          this.ctx_ = this.canvasRef_.nativeElement.getContext('2d');
          this.subs_.push(this.movableComponent.onDidUpdate.subscribe(function () {
            _this16.localRender();
          }));
          this.subs_.push(this.drawing.onDidDirty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(16, undefined, {
            trailing: true
          })).subscribe(function () {
            _this16.localRender();
          }));
          this.subs_.push(this.drawing.onDidChangeText.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(16, undefined, {
            trailing: true
          })).subscribe(function () {
            _this16.localRender();
          }));
          this.localRender();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs_.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "localRender",
        value: function localRender() {
          var movable = this.drawing.movable;
          this.cvs_.width = Math.abs(movable.w);
          this.cvs_.height = Math.abs(movable.h);
          this.render(this.ctx_);
        }
      }, {
        key: "render",
        value: function render(ctx) {
          var drawing = this.drawing;
          var movable = this.drawing.movable;
          ctx.font = "".concat(Math.abs(drawing.size), "px ").concat(drawing.font);
          ctx.fillStyle = this.drawing.color;
          ctx.textBaseline = 'middle';
          ctx.fillText(drawing.text, 0, movable.h / 2);
          var filter = this.drawing.filter;
          filter && filter.apply(ctx);
        }
      }]);

      return TextDrawingComponent;
    }();

    TextDrawingComponent.ɵfac = function TextDrawingComponent_Factory(t) {
      return new (t || TextDrawingComponent)();
    };

    TextDrawingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextDrawingComponent,
      selectors: [["text-drawing"]],
      viewQuery: function TextDrawingComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef_ = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.movableComponent = _t.first);
        }
      },
      inputs: {
        drawing: "drawing"
      },
      decls: 4,
      vars: 1,
      consts: [[3, "movable"], ["movable", ""], ["canvas", ""]],
      template: function TextDrawingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "movable", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movable", ctx.drawing.movable);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextDrawingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'text-drawing',
          template: "\n    <movable #movable [movable]=\"drawing.movable\">\n      <canvas #canvas></canvas>\n    </movable>",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        canvasRef_: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas']
        }],
        movableComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['movable']
        }],
        drawing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/model/canvas.ts":
  /*!*********************************!*\
    !*** ./src/app/model/canvas.ts ***!
    \*********************************/

  /*! exports provided: CanvasCommand, CanvasAddStackElementCommand, CanvasAddDrawingCommand, CanvasResizeCommand, CanvasRemoveDrawingCommand, CanvasReorderCommand, Canvas */

  /***/
  function srcAppModelCanvasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasCommand", function () {
      return CanvasCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasAddStackElementCommand", function () {
      return CanvasAddStackElementCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasAddDrawingCommand", function () {
      return CanvasAddDrawingCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasResizeCommand", function () {
      return CanvasResizeCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasRemoveDrawingCommand", function () {
      return CanvasRemoveDrawingCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasReorderCommand", function () {
      return CanvasReorderCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Canvas", function () {
      return Canvas;
    });
    /* harmony import */


    var src_app_model_edit_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/model/edit-stack */
    "./src/app/model/edit-stack.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanvasCommand = function CanvasCommand() {
      _classCallCheck(this, CanvasCommand);
    };

    var CanvasAddStackElementCommand =
    /*#__PURE__*/
    function (_CanvasCommand) {
      _inherits(CanvasAddStackElementCommand, _CanvasCommand);

      var _super = _createSuper(CanvasAddStackElementCommand);

      function CanvasAddStackElementCommand() {
        _classCallCheck(this, CanvasAddStackElementCommand);

        return _super.apply(this, arguments);
      }

      _createClass(CanvasAddStackElementCommand, [{
        key: "execute",
        value: function execute() {
          this.canvas.editStack.pushStackElement();
          return null;
        }
      }]);

      return CanvasAddStackElementCommand;
    }(CanvasCommand);

    var CanvasAddDrawingCommand =
    /*#__PURE__*/
    function () {
      function CanvasAddDrawingCommand(canvas, drawing, index) {
        _classCallCheck(this, CanvasAddDrawingCommand);

        this.canvas = canvas;
        this.drawing = drawing;
        this.index = index;
      }

      _createClass(CanvasAddDrawingCommand, [{
        key: "execute",
        value: function execute() {
          this.canvas.addDrawing(this.drawing);
          return new CanvasRemoveDrawingCommand(this.canvas, this.drawing);
        }
      }]);

      return CanvasAddDrawingCommand;
    }();

    var CanvasResizeCommand =
    /*#__PURE__*/
    function () {
      function CanvasResizeCommand(canvas, w, h) {
        _classCallCheck(this, CanvasResizeCommand);

        this.canvas = canvas;
        this.w = w;
        this.h = h;
      }

      _createClass(CanvasResizeCommand, [{
        key: "execute",
        value: function execute() {
          var canvas = this.canvas;
          var inverse = new CanvasResizeCommand(canvas, canvas.width, canvas.height);
          canvas.width = this.w;
          canvas.height = this.h;
          return inverse;
        }
      }]);

      return CanvasResizeCommand;
    }();

    var CanvasRemoveDrawingCommand =
    /*#__PURE__*/
    function () {
      function CanvasRemoveDrawingCommand(canvas, drawing) {
        _classCallCheck(this, CanvasRemoveDrawingCommand);

        this.canvas = canvas;
        this.drawing = drawing;
      }

      _createClass(CanvasRemoveDrawingCommand, [{
        key: "execute",
        value: function execute() {
          if (!this.canvas.hasDrawing(this.drawing)) return;
          var index = this.canvas.getDrawingIndex(this.drawing);
          var inverse = new CanvasAddDrawingCommand(this.canvas, this.drawing, index);
          this.canvas.removeDrawing(this.drawing);
          return inverse;
        }
      }]);

      return CanvasRemoveDrawingCommand;
    }();

    var CanvasReorderCommand =
    /*#__PURE__*/
    function () {
      function CanvasReorderCommand(canvas, i, j) {
        _classCallCheck(this, CanvasReorderCommand);

        this.canvas = canvas;
        this.i = i;
        this.j = j;
      }

      _createClass(CanvasReorderCommand, [{
        key: "execute",
        value: function execute() {
          var canvas = this.canvas;
          var ii = canvas.drawings[this.i];
          var jj = canvas.drawings[this.j];
          if (!ii || !jj) return;
          var inverse = new CanvasReorderCommand(canvas, this.i, this.j);
          canvas.swapDrawing(this.i, this.j);
          return inverse;
        }
      }]);

      return CanvasReorderCommand;
    }();

    var Canvas =
    /*#__PURE__*/
    function () {
      function Canvas() {
        _classCallCheck(this, Canvas);

        this.onDidAddDrawing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onWillRemoveDrawing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDidChangeSize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDidReorderDrawing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editStack_ = new src_app_model_edit_stack__WEBPACK_IMPORTED_MODULE_0__["EditStack"]();
        this.drawings_ = [];
        this.width_ = 500;
        this.height_ = 500;
      }

      _createClass(Canvas, [{
        key: "getDrawingIndex",
        value: function getDrawingIndex(drawing) {
          return this.drawings_.indexOf(drawing);
        }
      }, {
        key: "swapDrawing",
        value: function swapDrawing(i, j) {
          var tmp = this.drawings_[i];
          this.drawings_[i] = this.drawings_[j];
          this.drawings_[j] = tmp;
          this.reorder();
          this.onDidReorderDrawing.emit([i, j]);
        }
      }, {
        key: "hasDrawing",
        value: function hasDrawing(drawing) {
          return this.drawings.indexOf(drawing) != -1;
        }
      }, {
        key: "addDrawing",
        value: function addDrawing(drawing, index) {
          index = index || 0;
          this.drawings_.splice(index || 0, 0, drawing);
          this.reorder();
          this.onDidAddDrawing.emit({
            drawing: drawing,
            index: index
          });
        }
      }, {
        key: "removeDrawing",
        value: function removeDrawing(drawing) {
          this.onWillRemoveDrawing.emit({
            drawing: drawing,
            index: this.getDrawingIndex(drawing)
          });
          this.reorder();
          this.drawings_.splice(this.drawings_.indexOf(drawing), 1);
        }
      }, {
        key: "pushCommand",
        value: function pushCommand(command) {
          this.editStack_.pushEditCommand(command);
        }
      }, {
        key: "reorder",
        value: function reorder() {
          var z = this.drawings_.length - 1;

          for (var i = 0; i < this.drawings_.length; i++) {
            var drawing = this.drawings_[i];
            drawing.movable.z = z--;
          }
        }
      }, {
        key: "editStack",
        get: function get() {
          return this.editStack_;
        }
      }, {
        key: "drawings",
        get: function get() {
          return this.drawings_;
        }
      }, {
        key: "width",
        get: function get() {
          return this.width_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangeSize.emit();
            return;
          }

          this.width_ = v;
          this.onDidChangeSize.emit();
        }
      }, {
        key: "height",
        get: function get() {
          return this.height_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangeSize.emit();
            return;
          }

          this.height_ = v;
          this.onDidChangeSize.emit();
        }
      }]);

      return Canvas;
    }();
    /***/

  },

  /***/
  "./src/app/model/drawing-filter.ts":
  /*!*****************************************!*\
    !*** ./src/app/model/drawing-filter.ts ***!
    \*****************************************/

  /*! exports provided: AbstractDrawingFilter, BlurDrawingFilter, ColorDrawingFilter, ColorDawingFilterChangeCommand, GrayscaleDrawingFilter, FilterFactory */

  /***/
  function srcAppModelDrawingFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractDrawingFilter", function () {
      return AbstractDrawingFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlurDrawingFilter", function () {
      return BlurDrawingFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorDrawingFilter", function () {
      return ColorDrawingFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorDawingFilterChangeCommand", function () {
      return ColorDawingFilterChangeCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrayscaleDrawingFilter", function () {
      return GrayscaleDrawingFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterFactory", function () {
      return FilterFactory;
    });
    /* harmony import */


    var src_app_util_image_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/util/image-filter */
    "./src/app/util/image-filter.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AbstractDrawingFilter = function AbstractDrawingFilter() {
      _classCallCheck(this, AbstractDrawingFilter);

      this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    var BlurDrawingFilter =
    /*#__PURE__*/
    function (_AbstractDrawingFilte) {
      _inherits(BlurDrawingFilter, _AbstractDrawingFilte);

      var _super2 = _createSuper(BlurDrawingFilter);

      function BlurDrawingFilter() {
        var _this17;

        _classCallCheck(this, BlurDrawingFilter);

        _this17 = _super2.apply(this, arguments);
        _this17.type = BlurDrawingFilter.type;
        return _this17;
      }

      _createClass(BlurDrawingFilter, [{
        key: "apply",
        value: function apply(ctx) {
          var g = 1 / 9;
          src_app_util_image_filter__WEBPACK_IMPORTED_MODULE_0__["ImageFilter"].boxFilter(ctx, [g, g, g, g, g, g, g, g, g]);
        }
      }]);

      return BlurDrawingFilter;
    }(AbstractDrawingFilter);

    BlurDrawingFilter.type = "Blur";

    var ColorDrawingFilter =
    /*#__PURE__*/
    function (_AbstractDrawingFilte2) {
      _inherits(ColorDrawingFilter, _AbstractDrawingFilte2);

      var _super3 = _createSuper(ColorDrawingFilter);

      function ColorDrawingFilter() {
        var _this18;

        _classCallCheck(this, ColorDrawingFilter);

        _this18 = _super3.apply(this, arguments);
        _this18.type = ColorDrawingFilter.type;
        _this18.r_ = 100;
        _this18.g_ = 70;
        _this18.b_ = 30;
        _this18.o_ = 0.3;
        return _this18;
      }

      _createClass(ColorDrawingFilter, [{
        key: "apply",
        value: function apply(ctx) {
          src_app_util_image_filter__WEBPACK_IMPORTED_MODULE_0__["ImageFilter"].mixWithColor(ctx, this.r, this.g, this.b, this.o);
        }
      }, {
        key: "r",
        get: function get() {
          return this.r_;
        },
        set: function set(v) {
          this.r_ = v;
          this.onUpdate.emit();
        }
      }, {
        key: "g",
        get: function get() {
          return this.g_;
        },
        set: function set(v) {
          this.g_ = v;
          this.onUpdate.emit();
        }
      }, {
        key: "b",
        get: function get() {
          return this.b_;
        },
        set: function set(v) {
          this.b_ = v;
          this.onUpdate.emit();
        }
      }, {
        key: "o",
        get: function get() {
          return this.o_;
        },
        set: function set(v) {
          this.o_ = v;
          this.onUpdate.emit();
        }
      }]);

      return ColorDrawingFilter;
    }(AbstractDrawingFilter);

    ColorDrawingFilter.type = "Color";

    var ColorDawingFilterChangeCommand =
    /*#__PURE__*/
    function () {
      function ColorDawingFilterChangeCommand(filter, r, g, b, o) {
        _classCallCheck(this, ColorDawingFilterChangeCommand);

        this.filter = filter;
        this.r = r;
        this.g = g;
        this.b = b;
        this.o = o;
      }

      _createClass(ColorDawingFilterChangeCommand, [{
        key: "execute",
        value: function execute() {
          var inverse = new ColorDawingFilterChangeCommand(this.filter, this.filter.r, this.filter.g, this.filter.b, this.filter.o);
          this.filter.r = this.r;
          this.filter.g = this.g;
          this.filter.b = this.b;
          this.filter.o = this.o;
          return inverse;
        }
      }]);

      return ColorDawingFilterChangeCommand;
    }();

    var GrayscaleDrawingFilter =
    /*#__PURE__*/
    function (_AbstractDrawingFilte3) {
      _inherits(GrayscaleDrawingFilter, _AbstractDrawingFilte3);

      var _super4 = _createSuper(GrayscaleDrawingFilter);

      function GrayscaleDrawingFilter() {
        var _this19;

        _classCallCheck(this, GrayscaleDrawingFilter);

        _this19 = _super4.apply(this, arguments);
        _this19.type = GrayscaleDrawingFilter.type;
        return _this19;
      }

      _createClass(GrayscaleDrawingFilter, [{
        key: "apply",
        value: function apply(ctx) {
          src_app_util_image_filter__WEBPACK_IMPORTED_MODULE_0__["ImageFilter"].grayScale(ctx);
        }
      }]);

      return GrayscaleDrawingFilter;
    }(AbstractDrawingFilter);

    GrayscaleDrawingFilter.type = "Grayscale";

    var _FilterFactory =
    /*#__PURE__*/
    function () {
      function _FilterFactory() {
        _classCallCheck(this, _FilterFactory);
      }

      _createClass(_FilterFactory, [{
        key: "create",
        value: function create(type) {
          switch (type) {
            case BlurDrawingFilter.type:
              return new BlurDrawingFilter();

            case ColorDrawingFilter.type:
              return new ColorDrawingFilter();

            case GrayscaleDrawingFilter.type:
              return new GrayscaleDrawingFilter();
          }

          return null;
        }
      }]);

      return _FilterFactory;
    }();

    var FilterFactory = new _FilterFactory();
    /***/
  },

  /***/
  "./src/app/model/drawing.ts":
  /*!**********************************!*\
    !*** ./src/app/model/drawing.ts ***!
    \**********************************/

  /*! exports provided: DrawingChangeFilterCommand, Drawing */

  /***/
  function srcAppModelDrawingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawingChangeFilterCommand", function () {
      return DrawingChangeFilterCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Drawing", function () {
      return Drawing;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __next_id = 0;

    var DrawingChangeFilterCommand =
    /*#__PURE__*/
    function () {
      function DrawingChangeFilterCommand(drawing, filter) {
        _classCallCheck(this, DrawingChangeFilterCommand);

        this.drawing = drawing;
        this.filter = filter;
      }

      _createClass(DrawingChangeFilterCommand, [{
        key: "execute",
        value: function execute() {
          var prev = this.drawing.filter;
          var inverse = new DrawingChangeFilterCommand(this.drawing, prev);
          this.drawing.filter = this.filter;
          return inverse;
        }
      }]);

      return DrawingChangeFilterCommand;
    }();

    var Drawing =
    /*#__PURE__*/
    function () {
      function Drawing(type, name) {
        _classCallCheck(this, Drawing);

        this.type = type;
        this.name = name;
        this.onDidDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDidChangeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = ++__next_id;
      }

      _createClass(Drawing, [{
        key: "dispose",
        value: function dispose() {
          this.filterSub_ && this.filterSub_.unsubscribe();
        }
      }, {
        key: "filter",
        get: function get() {
          return this.filter_;
        },
        set: function set(filter) {
          var _this20 = this;

          this.filterSub_ && this.filterSub_.unsubscribe();
          this.filter_ = filter;

          if (filter) {
            this.filterSub_ = this.filter_.onUpdate.subscribe(function () {
              _this20.onDidDirty.emit();
            });
          }

          this.onDidChangeFilter.emit();
          this.onDidDirty.emit();
        }
      }]);

      return Drawing;
    }();
    /***/

  },

  /***/
  "./src/app/model/edit-stack.ts":
  /*!*************************************!*\
    !*** ./src/app/model/edit-stack.ts ***!
    \*************************************/

  /*! exports provided: EditStack */

  /***/
  function srcAppModelEditStackTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditStack", function () {
      return EditStack;
    });

    var StackElement =
    /*#__PURE__*/
    function () {
      function StackElement() {
        _classCallCheck(this, StackElement);

        this.commands = [];
      }

      _createClass(StackElement, [{
        key: "push",
        value: function push(command) {
          this.commands.push(command);
        }
      }]);

      return StackElement;
    }();

    var EditStack =
    /*#__PURE__*/
    function () {
      function EditStack() {
        _classCallCheck(this, EditStack);

        this.past_ = [];
        this.future_ = [];
        this.currentStackElement_ = null;
      }

      _createClass(EditStack, [{
        key: "pushEditCommand",
        value: function pushEditCommand(command) {
          var inverse = command.execute();
          if (!inverse) return;

          if (!this.currentStackElement_) {
            this.currentStackElement_ = new StackElement();
          }

          this.currentStackElement_.push(inverse);
          this.future_ = [];
        }
      }, {
        key: "pushStackElement",
        value: function pushStackElement() {
          if (this.currentStackElement_ !== null) {
            this.past_.push(this.currentStackElement_);
            this.currentStackElement_ = null;
          }
        }
      }, {
        key: "undo",
        value: function undo() {
          this.pushStackElement();
          var pastStackElement = this.past_.pop();
          if (!pastStackElement) return;
          var futureStackElemnet = new StackElement();

          for (var i = pastStackElement.commands.length - 1; i >= 0; i--) {
            var command = pastStackElement.commands[i];
            var inverse = command.execute();
            if (!inverse) continue;
            futureStackElemnet.push(inverse);
          }

          this.future_.push(futureStackElemnet);
        }
      }, {
        key: "redo",
        value: function redo() {
          var futureStackElement = this.future_.pop();
          if (!futureStackElement) return;
          var pastStackElemnet = new StackElement();

          for (var i = futureStackElement.commands.length - 1; i >= 0; i--) {
            var command = futureStackElement.commands[i];
            var inverse = command.execute();
            if (!inverse) continue;
            pastStackElemnet.push(inverse);
          }

          this.past_.push(pastStackElemnet);
        }
      }, {
        key: "canUndo",
        get: function get() {
          return this.past_.length > 0 || this.currentStackElement_ != null;
        }
      }, {
        key: "canRedo",
        get: function get() {
          return this.future_.length > 0;
        }
      }]);

      return EditStack;
    }();
    /***/

  },

  /***/
  "./src/app/model/image-drawing.ts":
  /*!****************************************!*\
    !*** ./src/app/model/image-drawing.ts ***!
    \****************************************/

  /*! exports provided: ImageDrawingChangeInvertCommand, ImageDrawing */

  /***/
  function srcAppModelImageDrawingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDrawingChangeInvertCommand", function () {
      return ImageDrawingChangeInvertCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDrawing", function () {
      return ImageDrawing;
    });
    /* harmony import */


    var src_app_model_movable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/model/movable */
    "./src/app/model/movable.ts");
    /* harmony import */


    var src_app_model_drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/drawing */
    "./src/app/model/drawing.ts");

    var ImageDrawingChangeInvertCommand =
    /*#__PURE__*/
    function () {
      function ImageDrawingChangeInvertCommand(drawing, invertX, invertY) {
        _classCallCheck(this, ImageDrawingChangeInvertCommand);

        this.drawing = drawing;
        this.invertX = invertX;
        this.invertY = invertY;
      }

      _createClass(ImageDrawingChangeInvertCommand, [{
        key: "execute",
        value: function execute() {
          var inverse = new ImageDrawingChangeInvertCommand(this.drawing, this.invertX, this.invertY);
          var invertX = this.invertX || this.invertX;
          var invertY = this.invertY || this.invertY;
          this.drawing.invertX = invertX;
          this.drawing.invertY = invertY;
          return inverse;
        }
      }]);

      return ImageDrawingChangeInvertCommand;
    }();

    var ImageDrawing =
    /*#__PURE__*/
    function (_src_app_model_drawin) {
      _inherits(ImageDrawing, _src_app_model_drawin);

      var _super5 = _createSuper(ImageDrawing);

      function ImageDrawing(img) {
        var _this21;

        _classCallCheck(this, ImageDrawing);

        _this21 = _super5.call(this, ImageDrawing.type, "Image");
        _this21.img = img;
        _this21.movable = new src_app_model_movable__WEBPACK_IMPORTED_MODULE_0__["Movable"]();
        _this21.invertX_ = false;
        _this21.invertY_ = false;
        _this21.name = "Image ".concat(_this21.id);
        _this21.movable.w = img.width;
        _this21.movable.h = img.height;

        _this21.movable.onDidChangeSize.subscribe(function () {
          return _this21.onDidDirty.emit();
        });

        return _this21;
      }

      _createClass(ImageDrawing, [{
        key: "invertX",
        get: function get() {
          return this.invertX_;
        },
        set: function set(v) {
          this.invertX_ = !!v;
          this.onDidDirty.emit();
        }
      }, {
        key: "invertY",
        get: function get() {
          return this.invertY_;
        },
        set: function set(v) {
          this.invertY_ = !!v;
          this.onDidDirty.emit();
        }
      }]);

      return ImageDrawing;
    }(src_app_model_drawing__WEBPACK_IMPORTED_MODULE_1__["Drawing"]);

    ImageDrawing.type = 'ImageDrawing';
    /***/
  },

  /***/
  "./src/app/model/movable.ts":
  /*!**********************************!*\
    !*** ./src/app/model/movable.ts ***!
    \**********************************/

  /*! exports provided: MovableResizeCommand, MovableTranslateCommand, MovableRotateCommand, Movable */

  /***/
  function srcAppModelMovableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovableResizeCommand", function () {
      return MovableResizeCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovableTranslateCommand", function () {
      return MovableTranslateCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovableRotateCommand", function () {
      return MovableRotateCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Movable", function () {
      return Movable;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MovableResizeCommand =
    /*#__PURE__*/
    function () {
      function MovableResizeCommand(movable, w, h) {
        _classCallCheck(this, MovableResizeCommand);

        this.movable = movable;
        this.w = w;
        this.h = h;
      }

      _createClass(MovableResizeCommand, [{
        key: "execute",
        value: function execute() {
          var movable = this.movable;
          var inverse = new MovableResizeCommand(movable, movable.w, movable.h);
          movable.w = this.w;
          movable.h = this.h;
          return inverse;
        }
      }]);

      return MovableResizeCommand;
    }();

    var MovableTranslateCommand =
    /*#__PURE__*/
    function () {
      function MovableTranslateCommand(movable, x, y) {
        _classCallCheck(this, MovableTranslateCommand);

        this.movable = movable;
        this.x = x;
        this.y = y;
      }

      _createClass(MovableTranslateCommand, [{
        key: "execute",
        value: function execute() {
          var movable = this.movable;
          var inverse = new MovableTranslateCommand(movable, movable.x, movable.y);
          movable.x = this.x;
          movable.y = this.y;
          return inverse;
        }
      }]);

      return MovableTranslateCommand;
    }();

    var MovableRotateCommand =
    /*#__PURE__*/
    function () {
      function MovableRotateCommand(movable, r) {
        _classCallCheck(this, MovableRotateCommand);

        this.movable = movable;
        this.r = r;
      }

      _createClass(MovableRotateCommand, [{
        key: "execute",
        value: function execute() {
          var movable = this.movable;
          var inverse = new MovableRotateCommand(movable, movable.r);
          movable.r = this.r;
          return inverse;
        }
      }]);

      return MovableRotateCommand;
    }();

    var __next_movable_id = 0;

    var Movable =
    /*#__PURE__*/
    function () {
      function Movable() {
        _classCallCheck(this, Movable);

        this.id = ++__next_movable_id;
        this.onDidChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDidChangePosition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDidChangeSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDidChangeRotation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.x_ = 0;
        this.y_ = 0;
        this.z_ = 0;
        this.w_ = 100;
        this.h_ = 50;
        this.r_ = 0;
        this.rad_ = 0;
        this.aspect_ = true;
        this.aspectRatio_ = 1;
      }

      _createClass(Movable, [{
        key: "aspect",
        get: function get() {
          return this.aspect_;
        },
        set: function set(v) {
          this.aspect_ = v;
          this.onDidChange.emit();
        }
      }, {
        key: "x",
        get: function get() {
          return this.x_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangePosition.emit();
            this.onDidChange.emit();
            return;
          }

          v = Math.round(v);
          this.x_ = v;
          this.onDidChangePosition.emit();
          this.onDidChange.emit();
        }
      }, {
        key: "z",
        get: function get() {
          return this.z_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangePosition.emit();
            this.onDidChange.emit();
            return;
          }

          this.z_ = v;
          this.onDidChangePosition.emit();
          this.onDidChange.emit();
        }
      }, {
        key: "y",
        get: function get() {
          return this.y_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangePosition.emit();
            this.onDidChange.emit();
            return;
          }

          v = Math.round(v);
          this.y_ = v;
          this.onDidChangePosition.emit();
          this.onDidChange.emit();
        }
      }, {
        key: "w",
        get: function get() {
          return this.w_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangeSize.emit();
            this.onDidChange.emit();
            return;
          }

          v = Math.round(v);
          this.w_ = v;
          this.onDidChangeSize.emit();
          this.onDidChange.emit();
        }
      }, {
        key: "h",
        get: function get() {
          return this.h_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangeSize.emit();
            this.onDidChange.emit();
            return;
          }

          v = Math.round(v);
          this.h_ = v;
          this.onDidChangeSize.emit();
          this.onDidChange.emit();
        }
      }, {
        key: "r",
        get: function get() {
          return this.r_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangeRotation.emit();
            this.onDidChange.emit();
            return;
          }

          v = Math.round(v);
          this.r_ = v;
          this.rad_ = v / 180 * Math.PI;
          this.onDidChangeRotation.emit();
          this.onDidChange.emit();
        }
      }, {
        key: "rad",
        get: function get() {
          return this.rad_;
        }
      }]);

      return Movable;
    }();
    /***/

  },

  /***/
  "./src/app/model/text-drawing.ts":
  /*!***************************************!*\
    !*** ./src/app/model/text-drawing.ts ***!
    \***************************************/

  /*! exports provided: TextDrawingChangeTextCommand, TextDrawingChangeSizeCommand, TextDrawingChangeColorCommand, TextDrawingChangeFontCommand, TextDrawing */

  /***/
  function srcAppModelTextDrawingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDrawingChangeTextCommand", function () {
      return TextDrawingChangeTextCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDrawingChangeSizeCommand", function () {
      return TextDrawingChangeSizeCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDrawingChangeColorCommand", function () {
      return TextDrawingChangeColorCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDrawingChangeFontCommand", function () {
      return TextDrawingChangeFontCommand;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDrawing", function () {
      return TextDrawing;
    });
    /* harmony import */


    var src_app_model_drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/model/drawing */
    "./src/app/model/drawing.ts");
    /* harmony import */


    var src_app_model_movable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/movable */
    "./src/app/model/movable.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TextDrawingChangeTextCommand =
    /*#__PURE__*/
    function () {
      function TextDrawingChangeTextCommand(drawing, text) {
        _classCallCheck(this, TextDrawingChangeTextCommand);

        this.drawing = drawing;
        this.text = text;
      }

      _createClass(TextDrawingChangeTextCommand, [{
        key: "execute",
        value: function execute() {
          if (this.text === this.drawing.text) return;
          var inverse = new TextDrawingChangeTextCommand(this.drawing, this.drawing.text);
          this.drawing.text = this.text;
          return inverse;
        }
      }]);

      return TextDrawingChangeTextCommand;
    }();

    var TextDrawingChangeSizeCommand =
    /*#__PURE__*/
    function () {
      function TextDrawingChangeSizeCommand(drawing, size) {
        _classCallCheck(this, TextDrawingChangeSizeCommand);

        this.drawing = drawing;
        this.size = size;
      }

      _createClass(TextDrawingChangeSizeCommand, [{
        key: "execute",
        value: function execute() {
          if (this.size === this.drawing.size) return;
          var inverse = new TextDrawingChangeSizeCommand(this.drawing, this.drawing.size);
          this.drawing.size = this.size;
          return inverse;
        }
      }]);

      return TextDrawingChangeSizeCommand;
    }();

    var TextDrawingChangeColorCommand =
    /*#__PURE__*/
    function () {
      function TextDrawingChangeColorCommand(drawing, color) {
        _classCallCheck(this, TextDrawingChangeColorCommand);

        this.drawing = drawing;
        this.color = color;
      }

      _createClass(TextDrawingChangeColorCommand, [{
        key: "execute",
        value: function execute() {
          if (this.color === this.drawing.color) return;
          var inverse = new TextDrawingChangeColorCommand(this.drawing, this.drawing.color);
          this.drawing.color = this.color;
          return inverse;
        }
      }]);

      return TextDrawingChangeColorCommand;
    }();

    var TextDrawingChangeFontCommand =
    /*#__PURE__*/
    function () {
      function TextDrawingChangeFontCommand(drawing, font) {
        _classCallCheck(this, TextDrawingChangeFontCommand);

        this.drawing = drawing;
        this.font = font;
      }

      _createClass(TextDrawingChangeFontCommand, [{
        key: "execute",
        value: function execute() {
          if (this.font === this.drawing.font) return;
          var inverse = new TextDrawingChangeFontCommand(this.drawing, this.drawing.font);
          this.drawing.font = this.font;
          return inverse;
        }
      }]);

      return TextDrawingChangeFontCommand;
    }();

    var TextMeasure =
    /*#__PURE__*/
    function () {
      function TextMeasure() {
        _classCallCheck(this, TextMeasure);

        this.cvs_ = document.createElement('canvas');
        this.ctx_ = this.cvs_.getContext('2d');
      }

      _createClass(TextMeasure, [{
        key: "measure",
        value: function measure(font, size, text) {
          this.ctx_.font = "".concat(size, "px ").concat(font);
          return this.ctx_.measureText(text);
        }
      }]);

      return TextMeasure;
    }();

    var Measure = new TextMeasure();

    var TextDrawing =
    /*#__PURE__*/
    function (_src_app_model_drawin2) {
      _inherits(TextDrawing, _src_app_model_drawin2);

      var _super6 = _createSuper(TextDrawing);

      function TextDrawing(font, size, text) {
        var _this22;

        _classCallCheck(this, TextDrawing);

        _this22 = _super6.call(this, TextDrawing.type, 'Text');
        _this22.onDidChangeText = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this22.movable = new src_app_model_movable__WEBPACK_IMPORTED_MODULE_1__["Movable"]();
        _this22.subs_ = [];
        _this22.disableDetectMovableChange_ = false;
        _this22.font_ = 'Nanum Gothic';
        _this22.color_ = "#000000";
        _this22.scaleX_ = 1;
        _this22.scaleY_ = 1;
        _this22.name = "Text ".concat(_this22.id);
        _this22.font_ = font;
        _this22.size_ = size;
        _this22.text = text;

        _this22.subs_.push(_this22.movable.onDidChangeSize.subscribe(function () {
          _this22.fitFontSizeToMovable();
        }));

        return _this22;
      }

      _createClass(TextDrawing, [{
        key: "fitFontSizeToMovable",
        value: function fitFontSizeToMovable() {
          if (this.disableDetectMovableChange_) return;
          this.size_ = Math.round(this.movable.h / 1.5);
          this.onDidChangeText.emit();
        }
      }, {
        key: "font",
        get: function get() {
          return this.font_;
        },
        set: function set(v) {
          this.font_ = v;
          this.disableDetectMovableChange_ = true;
          var metrics = Measure.measure(this.font, this.size, this.text);
          this.movable.w = metrics.width * this.scaleX;
          this.movable.h = this.size * this.scaleY * 1.5;
          this.disableDetectMovableChange_ = false;
          this.onDidChangeText.emit();
        }
      }, {
        key: "size",
        get: function get() {
          return this.size_;
        },
        set: function set(v) {
          if (isNaN(v)) {
            this.onDidChangeText.emit();
            return;
          }

          this.size_ = v;
          this.disableDetectMovableChange_ = true;
          var metrics = Measure.measure(this.font, this.size, this.text);
          this.movable.w = metrics.width * this.scaleX;
          this.movable.h = this.size * this.scaleY * 1.5;
          this.disableDetectMovableChange_ = false;
          this.onDidChangeText.emit();
        }
      }, {
        key: "text",
        get: function get() {
          return this.text_;
        },
        set: function set(v) {
          this.text_ = v;
          var metrics = Measure.measure(this.font, this.size, this.text);
          this.movable.w = metrics.width * this.scaleX;
          this.movable.h = this.size * this.scaleY * 1.5;
          this.onDidChangeText.emit();
        }
      }, {
        key: "color",
        get: function get() {
          return this.color_;
        },
        set: function set(v) {
          this.color_ = v;
          this.onDidChangeText.emit();
        }
      }, {
        key: "scaleX",
        get: function get() {
          return this.scaleX_;
        }
      }, {
        key: "scaleY",
        get: function get() {
          return this.scaleY_;
        }
      }]);

      return TextDrawing;
    }(src_app_model_drawing__WEBPACK_IMPORTED_MODULE_0__["Drawing"]);

    TextDrawing.type = 'TextDrawing';
    /***/
  },

  /***/
  "./src/app/service/canvas.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/canvas.service.ts ***!
    \*******************************************/

  /*! exports provided: CanvasService */

  /***/
  function srcAppServiceCanvasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasService", function () {
      return CanvasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/canvas */
    "./src/app/model/canvas.ts");

    var CanvasService =
    /*#__PURE__*/
    function () {
      function CanvasService() {
        _classCallCheck(this, CanvasService);

        this.subs_ = [];
        this.canvas = new src_app_model_canvas__WEBPACK_IMPORTED_MODULE_1__["Canvas"]();
      }

      _createClass(CanvasService, [{
        key: "focusedDrawing",
        value: function focusedDrawing() {
          return this.focusedDrawing_;
        }
      }]);

      return CanvasService;
    }();

    CanvasService.ɵfac = function CanvasService_Factory(t) {
      return new (t || CanvasService)();
    };

    CanvasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanvasService,
      factory: CanvasService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/command.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/command.service.ts ***!
    \********************************************/

  /*! exports provided: CanvasCommandService, ICommandService */

  /***/
  function srcAppServiceCommandServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasCommandService", function () {
      return CanvasCommandService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ICommandService", function () {
      return ICommandService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanvasCommandService =
    /*#__PURE__*/
    function () {
      function CanvasCommandService() {
        _classCallCheck(this, CanvasCommandService);
      }

      _createClass(CanvasCommandService, [{
        key: "dispatch",
        value: function dispatch(command) {
          command.canvas = this.canvas;
          this.canvas.pushCommand(command);
        }
      }]);

      return CanvasCommandService;
    }();

    CanvasCommandService.ɵfac = function CanvasCommandService_Factory(t) {
      return new (t || CanvasCommandService)();
    };

    CanvasCommandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanvasCommandService,
      factory: CanvasCommandService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasCommandService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var ICommandService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CommandService');
    /***/
  },

  /***/
  "./src/app/service/keybinding.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/service/keybinding.service.ts ***!
    \***********************************************/

  /*! exports provided: KeybindingService */

  /***/
  function srcAppServiceKeybindingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeybindingService", function () {
      return KeybindingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hotkeys-js */
    "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
    /* harmony import */


    var src_app_util_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/util/platform */
    "./src/app/util/platform.ts");

    var KeybindingService =
    /*#__PURE__*/
    function () {
      function KeybindingService() {
        _classCallCheck(this, KeybindingService);
      }

      _createClass(KeybindingService, [{
        key: "bind",
        value: function bind(binding, func) {
          var keychord = binding.keychord;

          if (src_app_util_platform__WEBPACK_IMPORTED_MODULE_2__["isMacintosh"]) {
            keychord = binding.mac || keychord;
          }

          var disposer = function disposer() {
            hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(keychord, func);
          };

          Object(hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(keychord, func);
          return disposer;
        }
      }]);

      return KeybindingService;
    }();

    KeybindingService.ɵfac = function KeybindingService_Factory(t) {
      return new (t || KeybindingService)();
    };

    KeybindingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KeybindingService,
      factory: KeybindingService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeybindingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/util/constants.ts":
  /*!***********************************!*\
    !*** ./src/app/util/constants.ts ***!
    \***********************************/

  /*! exports provided: epsilon */

  /***/
  function srcAppUtilConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "epsilon", function () {
      return epsilon;
    });

    var epsilon = 0.00001;
    /***/
  },

  /***/
  "./src/app/util/image-filter.ts":
  /*!**************************************!*\
    !*** ./src/app/util/image-filter.ts ***!
    \**************************************/

  /*! exports provided: ImageFilter */

  /***/
  function srcAppUtilImageFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageFilter", function () {
      return ImageFilter;
    });

    var ImageFilter =
    /*#__PURE__*/
    function () {
      function ImageFilter() {
        _classCallCheck(this, ImageFilter);
      }

      _createClass(ImageFilter, null, [{
        key: "init",
        value: function init() {
          if (!("WebAssembly" in window)) {
            ImageFilter.enabled = false;
            alert('Your browser does not support Webassembly!\nImage filter will not work.');
          } else {
            ImageFilter.enabled = true;
          }
        }
      }, {
        key: "grayScale",
        value: function grayScale(ctx) {
          if (!ImageFilter.enabled) return;
          var cvs = ctx.canvas;
          var pixels = ctx.getImageData(0, 0, cvs.width, cvs.height).data;
          var length = pixels.length;

          var memory = _malloc(length);

          HEAPU8.set(pixels, memory);

          _grayScale(memory, cvs.width, cvs.height);

          var result = HEAPU8.subarray(memory, memory + length);
          ctx.putImageData(new ImageData(new Uint8ClampedArray(result), cvs.width, cvs.height), 0, 0);

          _free(memory);
        }
      }, {
        key: "boxFilter",
        value: function boxFilter(ctx, filter) {
          if (!ImageFilter.enabled) return;
          var cvs = ctx.canvas;
          var pixels = ctx.getImageData(0, 0, cvs.width, cvs.height).data;
          var length = pixels.length;

          var memory = _malloc(length);

          HEAPU8.set(pixels, memory);

          _boxFilter.apply(void 0, [memory, cvs.width, cvs.height].concat(_toConsumableArray(filter)));

          var result = HEAPU8.subarray(memory, memory + length);
          ctx.putImageData(new ImageData(new Uint8ClampedArray(result), cvs.width, cvs.height), 0, 0);

          _free(memory);
        }
      }, {
        key: "mixWithColor",
        value: function mixWithColor(ctx, r, g, b, opacity) {
          if (!ImageFilter.enabled) return;
          var cvs = ctx.canvas;
          var pixels = ctx.getImageData(0, 0, cvs.width, cvs.height).data;
          var length = pixels.length;

          var memory = _malloc(length);

          HEAPU8.set(pixels, memory);

          _mixWithColor(memory, cvs.width, cvs.height, r, g, b, opacity);

          var result = HEAPU8.subarray(memory, memory + length);
          ctx.putImageData(new ImageData(new Uint8ClampedArray(result), cvs.width, cvs.height), 0, 0);

          _free(memory);
        }
      }]);

      return ImageFilter;
    }();

    ImageFilter.enabled = false;
    /***/
  },

  /***/
  "./src/app/util/mat2.ts":
  /*!******************************!*\
    !*** ./src/app/util/mat2.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilMat2Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return mat2;
    });
    /* harmony import */


    var _vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vec2 */
    "./src/app/util/vec2.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants */
    "./src/app/util/constants.ts");

    var mat2 =
    /*#__PURE__*/
    function () {
      function mat2(values) {
        _classCallCheck(this, mat2);

        this.values = new Float32Array(4);

        if (values !== undefined) {
          this.init(values);
        }
      }

      _createClass(mat2, [{
        key: "at",
        value: function at(index) {
          return this.values[index];
        }
      }, {
        key: "init",
        value: function init(values) {
          for (var i = 0; i < 4; i++) {
            this.values[i] = values[i];
          }

          return this;
        }
      }, {
        key: "reset",
        value: function reset() {
          for (var i = 0; i < 4; i++) {
            this.values[i] = 0;
          }
        }
      }, {
        key: "copy",
        value: function copy(dest) {
          if (!dest) {
            dest = new mat2();
          }

          for (var i = 0; i < 4; i++) {
            dest.values[i] = this.values[i];
          }

          return dest;
        }
      }, {
        key: "all",
        value: function all() {
          var data = [];

          for (var i = 0; i < 4; i++) {
            data[i] = this.values[i];
          }

          return data;
        }
      }, {
        key: "row",
        value: function row(index) {
          return [this.values[index * 2 + 0], this.values[index * 2 + 1]];
        }
      }, {
        key: "col",
        value: function col(index) {
          return [this.values[index], this.values[index + 2]];
        }
      }, {
        key: "equals",
        value: function equals(matrix) {
          var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_1__["epsilon"];

          for (var i = 0; i < 4; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "determinant",
        value: function determinant() {
          return this.values[0] * this.values[3] - this.values[2] * this.values[1];
        }
      }, {
        key: "setIdentity",
        value: function setIdentity() {
          this.values[0] = 1;
          this.values[1] = 0;
          this.values[2] = 0;
          this.values[3] = 1;
          return this;
        }
      }, {
        key: "transpose",
        value: function transpose() {
          var temp = this.values[1];
          this.values[1] = this.values[2];
          this.values[2] = temp;
          return this;
        }
      }, {
        key: "inverse",
        value: function inverse() {
          var det = this.determinant();

          if (!det) {
            return null;
          }

          det = 1.0 / det;
          var a11 = this.values[0];
          this.values[0] = det * this.values[3];
          this.values[1] = det * -this.values[1];
          this.values[2] = det * -this.values[2];
          this.values[3] = det * a11;
          return this;
        }
      }, {
        key: "multiply",
        value: function multiply(matrix) {
          var a11 = this.values[0];
          var a12 = this.values[1];
          var a21 = this.values[2];
          var a22 = this.values[3];
          this.values[0] = a11 * matrix.at(0) + a12 * matrix.at(2);
          this.values[1] = a11 * matrix.at(1) + a12 * matrix.at(3);
          this.values[2] = a21 * matrix.at(0) + a22 * matrix.at(2);
          this.values[3] = a21 * matrix.at(1) + a22 * matrix.at(3);
          return this;
        }
      }, {
        key: "multiplyVec2",
        value: function multiplyVec2(vector, result) {
          var x = vector.x;
          var y = vector.y;

          if (result) {
            result.xy = [x * this.values[0] + y * this.values[1], x * this.values[2] + y * this.values[3]];
            return result;
          } else {
            return new _vec2__WEBPACK_IMPORTED_MODULE_0__["default"]([x * this.values[0] + y * this.values[1], x * this.values[2] + y * this.values[3]]);
          }
        }
      }, {
        key: "scale",
        value: function scale(vector) {
          var a11 = this.values[0];
          var a12 = this.values[1];
          var a21 = this.values[2];
          var a22 = this.values[3];
          var x = vector.x;
          var y = vector.y;
          this.values[0] = a11 * x;
          this.values[1] = a12 * y;
          this.values[2] = a21 * x;
          this.values[3] = a22 * y;
          return this;
        }
      }], [{
        key: "rotation",
        value: function rotation(angle) {
          var cos = Math.cos(angle);
          var sin = Math.sin(angle);
          return new mat2([cos, -sin, sin, cos]);
        }
      }, {
        key: "product",
        value: function product(m1, m2, result) {
          var a11 = m1.at(0);
          var a12 = m1.at(1);
          var a21 = m1.at(2);
          var a22 = m1.at(3);

          if (result) {
            result.init([a11 * m2.at(0) + a12 * m2.at(2), a11 * m2.at(1) + a12 * m2.at(3), a21 * m2.at(0) + a22 * m2.at(2), a21 * m2.at(1) + a22 * m2.at(3)]);
            return result;
          } else {
            return new mat2([a11 * m2.at(0) + a12 * m2.at(2), a11 * m2.at(1) + a12 * m2.at(3), a21 * m2.at(0) + a22 * m2.at(2), a21 * m2.at(1) + a22 * m2.at(3)]);
          }
        }
      }]);

      return mat2;
    }();

    mat2.identity = new mat2().setIdentity();
    /***/
  },

  /***/
  "./src/app/util/mat3.ts":
  /*!******************************!*\
    !*** ./src/app/util/mat3.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilMat3Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return mat3;
    });
    /* harmony import */


    var _mat4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mat4 */
    "./src/app/util/mat4.ts");
    /* harmony import */


    var _quat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./quat */
    "./src/app/util/quat.ts");
    /* harmony import */


    var _vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vec2 */
    "./src/app/util/vec2.ts");
    /* harmony import */


    var _vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vec3 */
    "./src/app/util/vec3.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./constants */
    "./src/app/util/constants.ts");

    var mat3 =
    /*#__PURE__*/
    function () {
      function mat3(values) {
        _classCallCheck(this, mat3);

        this.values = new Float32Array(9);

        if (values !== undefined) {
          this.init(values);
        }
      }

      _createClass(mat3, [{
        key: "at",
        value: function at(index) {
          return this.values[index];
        }
      }, {
        key: "init",
        value: function init(values) {
          for (var i = 0; i < 9; i++) {
            this.values[i] = values[i];
          }

          return this;
        }
      }, {
        key: "reset",
        value: function reset() {
          for (var i = 0; i < 9; i++) {
            this.values[i] = 0;
          }
        }
      }, {
        key: "copy",
        value: function copy(dest) {
          if (!dest) {
            dest = new mat3();
          }

          for (var i = 0; i < 9; i++) {
            dest.values[i] = this.values[i];
          }

          return dest;
        }
      }, {
        key: "all",
        value: function all() {
          var data = [];

          for (var i = 0; i < 9; i++) {
            data[i] = this.values[i];
          }

          return data;
        }
      }, {
        key: "row",
        value: function row(index) {
          return [this.values[index * 3 + 0], this.values[index * 3 + 1], this.values[index * 3 + 2]];
        }
      }, {
        key: "col",
        value: function col(index) {
          return [this.values[index], this.values[index + 3], this.values[index + 6]];
        }
      }, {
        key: "equals",
        value: function equals(matrix) {
          var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_4__["epsilon"];

          for (var i = 0; i < 9; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "determinant",
        value: function determinant() {
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a10 = this.values[3];
          var a11 = this.values[4];
          var a12 = this.values[5];
          var a20 = this.values[6];
          var a21 = this.values[7];
          var a22 = this.values[8];
          var det01 = a22 * a11 - a12 * a21;
          var det11 = -a22 * a10 + a12 * a20;
          var det21 = a21 * a10 - a11 * a20;
          return a00 * det01 + a01 * det11 + a02 * det21;
        }
      }, {
        key: "setIdentity",
        value: function setIdentity() {
          this.values[0] = 1;
          this.values[1] = 0;
          this.values[2] = 0;
          this.values[3] = 0;
          this.values[4] = 1;
          this.values[5] = 0;
          this.values[6] = 0;
          this.values[7] = 0;
          this.values[8] = 1;
          return this;
        }
      }, {
        key: "transpose",
        value: function transpose() {
          var temp01 = this.values[1];
          var temp02 = this.values[2];
          var temp12 = this.values[5];
          this.values[1] = this.values[3];
          this.values[2] = this.values[6];
          this.values[3] = temp01;
          this.values[5] = this.values[7];
          this.values[6] = temp02;
          this.values[7] = temp12;
          return this;
        }
      }, {
        key: "inverse",
        value: function inverse() {
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a10 = this.values[3];
          var a11 = this.values[4];
          var a12 = this.values[5];
          var a20 = this.values[6];
          var a21 = this.values[7];
          var a22 = this.values[8];
          var det01 = a22 * a11 - a12 * a21;
          var det11 = -a22 * a10 + a12 * a20;
          var det21 = a21 * a10 - a11 * a20;
          var det = a00 * det01 + a01 * det11 + a02 * det21;

          if (!det) {
            return null;
          }

          det = 1.0 / det;
          this.values[0] = det01 * det;
          this.values[1] = (-a22 * a01 + a02 * a21) * det;
          this.values[2] = (a12 * a01 - a02 * a11) * det;
          this.values[3] = det11 * det;
          this.values[4] = (a22 * a00 - a02 * a20) * det;
          this.values[5] = (-a12 * a00 + a02 * a10) * det;
          this.values[6] = det21 * det;
          this.values[7] = (-a21 * a00 + a01 * a20) * det;
          this.values[8] = (a11 * a00 - a01 * a10) * det;
          return this;
        }
      }, {
        key: "multiply",
        value: function multiply(matrix) {
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a10 = this.values[3];
          var a11 = this.values[4];
          var a12 = this.values[5];
          var a20 = this.values[6];
          var a21 = this.values[7];
          var a22 = this.values[8];
          var b00 = matrix.at(0);
          var b01 = matrix.at(1);
          var b02 = matrix.at(2);
          var b10 = matrix.at(3);
          var b11 = matrix.at(4);
          var b12 = matrix.at(5);
          var b20 = matrix.at(6);
          var b21 = matrix.at(7);
          var b22 = matrix.at(8);
          this.values[0] = b00 * a00 + b01 * a10 + b02 * a20;
          this.values[1] = b00 * a01 + b01 * a11 + b02 * a21;
          this.values[2] = b00 * a02 + b01 * a12 + b02 * a22;
          this.values[3] = b10 * a00 + b11 * a10 + b12 * a20;
          this.values[4] = b10 * a01 + b11 * a11 + b12 * a21;
          this.values[5] = b10 * a02 + b11 * a12 + b12 * a22;
          this.values[6] = b20 * a00 + b21 * a10 + b22 * a20;
          this.values[7] = b20 * a01 + b21 * a11 + b22 * a21;
          this.values[8] = b20 * a02 + b21 * a12 + b22 * a22;
          return this;
        }
      }, {
        key: "multiplyVec2",
        value: function multiplyVec2(vector, result) {
          var x = vector.x;
          var y = vector.y;

          if (result) {
            result.xy = [x * this.values[0] + y * this.values[3] + this.values[6], x * this.values[1] + y * this.values[4] + this.values[7]];
            return result;
          } else {
            return new _vec2__WEBPACK_IMPORTED_MODULE_2__["default"]([x * this.values[0] + y * this.values[3] + this.values[6], x * this.values[1] + y * this.values[4] + this.values[7]]);
          }
        }
      }, {
        key: "multiplyVec3",
        value: function multiplyVec3(vector, result) {
          var x = vector.x;
          var y = vector.y;
          var z = vector.z;

          if (result) {
            result.xyz = [x * this.values[0] + y * this.values[3] + z * this.values[6], x * this.values[1] + y * this.values[4] + z * this.values[7], x * this.values[2] + y * this.values[5] + z * this.values[8]];
            return result;
          } else {
            return new _vec3__WEBPACK_IMPORTED_MODULE_3__["default"]([x * this.values[0] + y * this.values[3] + z * this.values[6], x * this.values[1] + y * this.values[4] + z * this.values[7], x * this.values[2] + y * this.values[5] + z * this.values[8]]);
          }
        }
      }, {
        key: "toMat4",
        value: function toMat4(result) {
          if (result) {
            result.init([this.values[0], this.values[1], this.values[2], 0, this.values[3], this.values[4], this.values[5], 0, this.values[6], this.values[7], this.values[8], 0, 0, 0, 0, 1]);
            return result;
          } else {
            return new _mat4__WEBPACK_IMPORTED_MODULE_0__["default"]([this.values[0], this.values[1], this.values[2], 0, this.values[3], this.values[4], this.values[5], 0, this.values[6], this.values[7], this.values[8], 0, 0, 0, 0, 1]);
          }
        }
      }, {
        key: "toQuat",
        value: function toQuat() {
          var m00 = this.values[0];
          var m01 = this.values[1];
          var m02 = this.values[2];
          var m10 = this.values[3];
          var m11 = this.values[4];
          var m12 = this.values[5];
          var m20 = this.values[6];
          var m21 = this.values[7];
          var m22 = this.values[8];
          var fourXSquaredMinus1 = m00 - m11 - m22;
          var fourYSquaredMinus1 = m11 - m00 - m22;
          var fourZSquaredMinus1 = m22 - m00 - m11;
          var fourWSquaredMinus1 = m00 + m11 + m22;
          var biggestIndex = 0;
          var fourBiggestSquaredMinus1 = fourWSquaredMinus1;

          if (fourXSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourXSquaredMinus1;
            biggestIndex = 1;
          }

          if (fourYSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourYSquaredMinus1;
            biggestIndex = 2;
          }

          if (fourZSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourZSquaredMinus1;
            biggestIndex = 3;
          }

          var biggestVal = Math.sqrt(fourBiggestSquaredMinus1 + 1) * 0.5;
          var mult = 0.25 / biggestVal;
          var result = new _quat__WEBPACK_IMPORTED_MODULE_1__["default"]();

          switch (biggestIndex) {
            case 0:
              result.w = biggestVal;
              result.x = (m12 - m21) * mult;
              result.y = (m20 - m02) * mult;
              result.z = (m01 - m10) * mult;
              break;

            case 1:
              result.w = (m12 - m21) * mult;
              result.x = biggestVal;
              result.y = (m01 + m10) * mult;
              result.z = (m20 + m02) * mult;
              break;

            case 2:
              result.w = (m20 - m02) * mult;
              result.x = (m01 + m10) * mult;
              result.y = biggestVal;
              result.z = (m12 + m21) * mult;
              break;

            case 3:
              result.w = (m01 - m10) * mult;
              result.x = (m20 + m02) * mult;
              result.y = (m12 + m21) * mult;
              result.z = biggestVal;
              break;
          }

          return result;
        }
      }, {
        key: "rotate",
        value: function rotate(angle, axis) {
          var x = axis.x;
          var y = axis.y;
          var z = axis.z;
          var length = Math.sqrt(x * x + y * y + z * z);

          if (!length) {
            return null;
          }

          if (length !== 1) {
            length = 1 / length;
            x *= length;
            y *= length;
            z *= length;
          }

          var s = Math.sin(angle);
          var c = Math.cos(angle);
          var t = 1.0 - c;
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a10 = this.values[4];
          var a11 = this.values[5];
          var a12 = this.values[6];
          var a20 = this.values[8];
          var a21 = this.values[9];
          var a22 = this.values[10];
          var b00 = x * x * t + c;
          var b01 = y * x * t + z * s;
          var b02 = z * x * t - y * s;
          var b10 = x * y * t - z * s;
          var b11 = y * y * t + c;
          var b12 = z * y * t + x * s;
          var b20 = x * z * t + y * s;
          var b21 = y * z * t - x * s;
          var b22 = z * z * t + c;
          this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
          this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
          this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
          this.values[3] = a00 * b10 + a10 * b11 + a20 * b12;
          this.values[4] = a01 * b10 + a11 * b11 + a21 * b12;
          this.values[5] = a02 * b10 + a12 * b11 + a22 * b12;
          this.values[6] = a00 * b20 + a10 * b21 + a20 * b22;
          this.values[7] = a01 * b20 + a11 * b21 + a21 * b22;
          this.values[8] = a02 * b20 + a12 * b21 + a22 * b22;
          return this;
        }
      }], [{
        key: "product",
        value: function product(m1, m2, result) {
          var a00 = m1.at(0);
          var a01 = m1.at(1);
          var a02 = m1.at(2);
          var a10 = m1.at(3);
          var a11 = m1.at(4);
          var a12 = m1.at(5);
          var a20 = m1.at(6);
          var a21 = m1.at(7);
          var a22 = m1.at(8);
          var b00 = m2.at(0);
          var b01 = m2.at(1);
          var b02 = m2.at(2);
          var b10 = m2.at(3);
          var b11 = m2.at(4);
          var b12 = m2.at(5);
          var b20 = m2.at(6);
          var b21 = m2.at(7);
          var b22 = m2.at(8);

          if (result) {
            result.init([b00 * a00 + b01 * a10 + b02 * a20, b00 * a01 + b01 * a11 + b02 * a21, b00 * a02 + b01 * a12 + b02 * a22, b10 * a00 + b11 * a10 + b12 * a20, b10 * a01 + b11 * a11 + b12 * a21, b10 * a02 + b11 * a12 + b12 * a22, b20 * a00 + b21 * a10 + b22 * a20, b20 * a01 + b21 * a11 + b22 * a21, b20 * a02 + b21 * a12 + b22 * a22]);
            return result;
          } else {
            return new mat3([b00 * a00 + b01 * a10 + b02 * a20, b00 * a01 + b01 * a11 + b02 * a21, b00 * a02 + b01 * a12 + b02 * a22, b10 * a00 + b11 * a10 + b12 * a20, b10 * a01 + b11 * a11 + b12 * a21, b10 * a02 + b11 * a12 + b12 * a22, b20 * a00 + b21 * a10 + b22 * a20, b20 * a01 + b21 * a11 + b22 * a21, b20 * a02 + b21 * a12 + b22 * a22]);
          }
        }
      }]);

      return mat3;
    }();

    mat3.identity = new mat3().setIdentity();
    /***/
  },

  /***/
  "./src/app/util/mat4.ts":
  /*!******************************!*\
    !*** ./src/app/util/mat4.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilMat4Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return mat4;
    });
    /* harmony import */


    var _mat3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mat3 */
    "./src/app/util/mat3.ts");
    /* harmony import */


    var _vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vec3 */
    "./src/app/util/vec3.ts");
    /* harmony import */


    var _vec4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vec4 */
    "./src/app/util/vec4.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./constants */
    "./src/app/util/constants.ts");

    var mat4 =
    /*#__PURE__*/
    function () {
      function mat4(values) {
        _classCallCheck(this, mat4);

        this.values = new Float32Array(16);

        if (values !== undefined) {
          this.init(values);
        }
      }

      _createClass(mat4, [{
        key: "at",
        value: function at(index) {
          return this.values[index];
        }
      }, {
        key: "init",
        value: function init(values) {
          for (var i = 0; i < 16; i++) {
            this.values[i] = values[i];
          }

          return this;
        }
      }, {
        key: "reset",
        value: function reset() {
          for (var i = 0; i < 16; i++) {
            this.values[i] = 0;
          }
        }
      }, {
        key: "copy",
        value: function copy(dest) {
          if (!dest) {
            dest = new mat4();
          }

          for (var i = 0; i < 16; i++) {
            dest.values[i] = this.values[i];
          }

          return dest;
        }
      }, {
        key: "all",
        value: function all() {
          var data = [];

          for (var i = 0; i < 16; i++) {
            data[i] = this.values[i];
          }

          return data;
        }
      }, {
        key: "row",
        value: function row(index) {
          return [this.values[index * 4 + 0], this.values[index * 4 + 1], this.values[index * 4 + 2], this.values[index * 4 + 3]];
        }
      }, {
        key: "col",
        value: function col(index) {
          return [this.values[index], this.values[index + 4], this.values[index + 8], this.values[index + 12]];
        }
      }, {
        key: "equals",
        value: function equals(matrix) {
          var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_3__["epsilon"];

          for (var i = 0; i < 16; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "determinant",
        value: function determinant() {
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a03 = this.values[3];
          var a10 = this.values[4];
          var a11 = this.values[5];
          var a12 = this.values[6];
          var a13 = this.values[7];
          var a20 = this.values[8];
          var a21 = this.values[9];
          var a22 = this.values[10];
          var a23 = this.values[11];
          var a30 = this.values[12];
          var a31 = this.values[13];
          var a32 = this.values[14];
          var a33 = this.values[15];
          var det00 = a00 * a11 - a01 * a10;
          var det01 = a00 * a12 - a02 * a10;
          var det02 = a00 * a13 - a03 * a10;
          var det03 = a01 * a12 - a02 * a11;
          var det04 = a01 * a13 - a03 * a11;
          var det05 = a02 * a13 - a03 * a12;
          var det06 = a20 * a31 - a21 * a30;
          var det07 = a20 * a32 - a22 * a30;
          var det08 = a20 * a33 - a23 * a30;
          var det09 = a21 * a32 - a22 * a31;
          var det10 = a21 * a33 - a23 * a31;
          var det11 = a22 * a33 - a23 * a32;
          return det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06;
        }
      }, {
        key: "setIdentity",
        value: function setIdentity() {
          this.values[0] = 1;
          this.values[1] = 0;
          this.values[2] = 0;
          this.values[3] = 0;
          this.values[4] = 0;
          this.values[5] = 1;
          this.values[6] = 0;
          this.values[7] = 0;
          this.values[8] = 0;
          this.values[9] = 0;
          this.values[10] = 1;
          this.values[11] = 0;
          this.values[12] = 0;
          this.values[13] = 0;
          this.values[14] = 0;
          this.values[15] = 1;
          return this;
        }
      }, {
        key: "transpose",
        value: function transpose() {
          var temp01 = this.values[1];
          var temp02 = this.values[2];
          var temp03 = this.values[3];
          var temp12 = this.values[6];
          var temp13 = this.values[7];
          var temp23 = this.values[11];
          this.values[1] = this.values[4];
          this.values[2] = this.values[8];
          this.values[3] = this.values[12];
          this.values[4] = temp01;
          this.values[6] = this.values[9];
          this.values[7] = this.values[13];
          this.values[8] = temp02;
          this.values[9] = temp12;
          this.values[11] = this.values[14];
          this.values[12] = temp03;
          this.values[13] = temp13;
          this.values[14] = temp23;
          return this;
        }
      }, {
        key: "inverse",
        value: function inverse() {
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a03 = this.values[3];
          var a10 = this.values[4];
          var a11 = this.values[5];
          var a12 = this.values[6];
          var a13 = this.values[7];
          var a20 = this.values[8];
          var a21 = this.values[9];
          var a22 = this.values[10];
          var a23 = this.values[11];
          var a30 = this.values[12];
          var a31 = this.values[13];
          var a32 = this.values[14];
          var a33 = this.values[15];
          var det00 = a00 * a11 - a01 * a10;
          var det01 = a00 * a12 - a02 * a10;
          var det02 = a00 * a13 - a03 * a10;
          var det03 = a01 * a12 - a02 * a11;
          var det04 = a01 * a13 - a03 * a11;
          var det05 = a02 * a13 - a03 * a12;
          var det06 = a20 * a31 - a21 * a30;
          var det07 = a20 * a32 - a22 * a30;
          var det08 = a20 * a33 - a23 * a30;
          var det09 = a21 * a32 - a22 * a31;
          var det10 = a21 * a33 - a23 * a31;
          var det11 = a22 * a33 - a23 * a32;
          var det = det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06;

          if (!det) {
            return null;
          }

          det = 1.0 / det;
          this.values[0] = (a11 * det11 - a12 * det10 + a13 * det09) * det;
          this.values[1] = (-a01 * det11 + a02 * det10 - a03 * det09) * det;
          this.values[2] = (a31 * det05 - a32 * det04 + a33 * det03) * det;
          this.values[3] = (-a21 * det05 + a22 * det04 - a23 * det03) * det;
          this.values[4] = (-a10 * det11 + a12 * det08 - a13 * det07) * det;
          this.values[5] = (a00 * det11 - a02 * det08 + a03 * det07) * det;
          this.values[6] = (-a30 * det05 + a32 * det02 - a33 * det01) * det;
          this.values[7] = (a20 * det05 - a22 * det02 + a23 * det01) * det;
          this.values[8] = (a10 * det10 - a11 * det08 + a13 * det06) * det;
          this.values[9] = (-a00 * det10 + a01 * det08 - a03 * det06) * det;
          this.values[10] = (a30 * det04 - a31 * det02 + a33 * det00) * det;
          this.values[11] = (-a20 * det04 + a21 * det02 - a23 * det00) * det;
          this.values[12] = (-a10 * det09 + a11 * det07 - a12 * det06) * det;
          this.values[13] = (a00 * det09 - a01 * det07 + a02 * det06) * det;
          this.values[14] = (-a30 * det03 + a31 * det01 - a32 * det00) * det;
          this.values[15] = (a20 * det03 - a21 * det01 + a22 * det00) * det;
          return this;
        }
      }, {
        key: "multiply",
        value: function multiply(matrix) {
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a03 = this.values[3];
          var a10 = this.values[4];
          var a11 = this.values[5];
          var a12 = this.values[6];
          var a13 = this.values[7];
          var a20 = this.values[8];
          var a21 = this.values[9];
          var a22 = this.values[10];
          var a23 = this.values[11];
          var a30 = this.values[12];
          var a31 = this.values[13];
          var a32 = this.values[14];
          var a33 = this.values[15];
          var b0 = matrix.at(0);
          var b1 = matrix.at(1);
          var b2 = matrix.at(2);
          var b3 = matrix.at(3);
          this.values[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          this.values[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          this.values[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          this.values[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = matrix.at(4);
          b1 = matrix.at(5);
          b2 = matrix.at(6);
          b3 = matrix.at(7);
          this.values[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          this.values[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          this.values[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          this.values[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = matrix.at(8);
          b1 = matrix.at(9);
          b2 = matrix.at(10);
          b3 = matrix.at(11);
          this.values[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          this.values[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          this.values[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          this.values[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = matrix.at(12);
          b1 = matrix.at(13);
          b2 = matrix.at(14);
          b3 = matrix.at(15);
          this.values[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          this.values[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          this.values[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          this.values[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          return this;
        }
      }, {
        key: "multiplyVec3",
        value: function multiplyVec3(vector) {
          var x = vector.x;
          var y = vector.y;
          var z = vector.z;
          return new _vec3__WEBPACK_IMPORTED_MODULE_1__["default"]([this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12], this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13], this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14]]);
        }
      }, {
        key: "multiplyVec4",
        value: function multiplyVec4(vector, dest) {
          if (!dest) {
            dest = new _vec4__WEBPACK_IMPORTED_MODULE_2__["default"]();
          }

          var x = vector.x;
          var y = vector.y;
          var z = vector.z;
          var w = vector.w;
          dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12] * w;
          dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13] * w;
          dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14] * w;
          dest.w = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15] * w;
          return dest;
        }
      }, {
        key: "toMat3",
        value: function toMat3() {
          return new _mat3__WEBPACK_IMPORTED_MODULE_0__["default"]([this.values[0], this.values[1], this.values[2], this.values[4], this.values[5], this.values[6], this.values[8], this.values[9], this.values[10]]);
        }
      }, {
        key: "toInverseMat3",
        value: function toInverseMat3() {
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a10 = this.values[4];
          var a11 = this.values[5];
          var a12 = this.values[6];
          var a20 = this.values[8];
          var a21 = this.values[9];
          var a22 = this.values[10];
          var det01 = a22 * a11 - a12 * a21;
          var det11 = -a22 * a10 + a12 * a20;
          var det21 = a21 * a10 - a11 * a20;
          var det = a00 * det01 + a01 * det11 + a02 * det21;

          if (!det) {
            return null;
          }

          det = 1.0 / det;
          return new _mat3__WEBPACK_IMPORTED_MODULE_0__["default"]([det01 * det, (-a22 * a01 + a02 * a21) * det, (a12 * a01 - a02 * a11) * det, det11 * det, (a22 * a00 - a02 * a20) * det, (-a12 * a00 + a02 * a10) * det, det21 * det, (-a21 * a00 + a01 * a20) * det, (a11 * a00 - a01 * a10) * det]);
        }
      }, {
        key: "translate",
        value: function translate(vector) {
          var x = vector.x;
          var y = vector.y;
          var z = vector.z;
          this.values[12] += this.values[0] * x + this.values[4] * y + this.values[8] * z;
          this.values[13] += this.values[1] * x + this.values[5] * y + this.values[9] * z;
          this.values[14] += this.values[2] * x + this.values[6] * y + this.values[10] * z;
          this.values[15] += this.values[3] * x + this.values[7] * y + this.values[11] * z;
          return this;
        }
      }, {
        key: "scale",
        value: function scale(vector) {
          var x = vector.x;
          var y = vector.y;
          var z = vector.z;
          this.values[0] *= x;
          this.values[1] *= x;
          this.values[2] *= x;
          this.values[3] *= x;
          this.values[4] *= y;
          this.values[5] *= y;
          this.values[6] *= y;
          this.values[7] *= y;
          this.values[8] *= z;
          this.values[9] *= z;
          this.values[10] *= z;
          this.values[11] *= z;
          return this;
        }
      }, {
        key: "rotate",
        value: function rotate(angle, axis) {
          var x = axis.x;
          var y = axis.y;
          var z = axis.z;
          var length = Math.sqrt(x * x + y * y + z * z);

          if (!length) {
            return null;
          }

          if (length !== 1) {
            length = 1 / length;
            x *= length;
            y *= length;
            z *= length;
          }

          var s = Math.sin(angle);
          var c = Math.cos(angle);
          var t = 1.0 - c;
          var a00 = this.values[0];
          var a01 = this.values[1];
          var a02 = this.values[2];
          var a03 = this.values[3];
          var a10 = this.values[4];
          var a11 = this.values[5];
          var a12 = this.values[6];
          var a13 = this.values[7];
          var a20 = this.values[8];
          var a21 = this.values[9];
          var a22 = this.values[10];
          var a23 = this.values[11];
          var b00 = x * x * t + c;
          var b01 = y * x * t + z * s;
          var b02 = z * x * t - y * s;
          var b10 = x * y * t - z * s;
          var b11 = y * y * t + c;
          var b12 = z * y * t + x * s;
          var b20 = x * z * t + y * s;
          var b21 = y * z * t - x * s;
          var b22 = z * z * t + c;
          this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
          this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
          this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
          this.values[3] = a03 * b00 + a13 * b01 + a23 * b02;
          this.values[4] = a00 * b10 + a10 * b11 + a20 * b12;
          this.values[5] = a01 * b10 + a11 * b11 + a21 * b12;
          this.values[6] = a02 * b10 + a12 * b11 + a22 * b12;
          this.values[7] = a03 * b10 + a13 * b11 + a23 * b12;
          this.values[8] = a00 * b20 + a10 * b21 + a20 * b22;
          this.values[9] = a01 * b20 + a11 * b21 + a21 * b22;
          this.values[10] = a02 * b20 + a12 * b21 + a22 * b22;
          this.values[11] = a03 * b20 + a13 * b21 + a23 * b22;
          return this;
        }
      }], [{
        key: "frustum",
        value: function frustum(left, right, bottom, top, near, far) {
          var rl = right - left;
          var tb = top - bottom;
          var fn = far - near;
          return new mat4([near * 2 / rl, 0, 0, 0, 0, near * 2 / tb, 0, 0, (right + left) / rl, (top + bottom) / tb, -(far + near) / fn, -1, 0, 0, -(far * near * 2) / fn, 0]);
        }
      }, {
        key: "perspective",
        value: function perspective(fov, aspect, near, far) {
          var top = near * Math.tan(fov * Math.PI / 360.0);
          var right = top * aspect;
          return mat4.frustum(-right, right, -top, top, near, far);
        }
      }, {
        key: "orthographic",
        value: function orthographic(left, right, bottom, top, near, far) {
          var rl = right - left;
          var tb = top - bottom;
          var fn = far - near;
          return new mat4([2 / rl, 0, 0, 0, 0, 2 / tb, 0, 0, 0, 0, -2 / fn, 0, -(left + right) / rl, -(top + bottom) / tb, -(far + near) / fn, 1]);
        }
      }, {
        key: "lookAt",
        value: function lookAt(position, target) {
          var up = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vec3__WEBPACK_IMPORTED_MODULE_1__["default"].up;

          if (position.equals(target)) {
            return this.identity;
          }

          var z = _vec3__WEBPACK_IMPORTED_MODULE_1__["default"].difference(position, target).normalize();

          var x = _vec3__WEBPACK_IMPORTED_MODULE_1__["default"].cross(up, z).normalize();

          var y = _vec3__WEBPACK_IMPORTED_MODULE_1__["default"].cross(z, x).normalize();

          return new mat4([x.x, y.x, z.x, 0, x.y, y.y, z.y, 0, x.z, y.z, z.z, 0, -_vec3__WEBPACK_IMPORTED_MODULE_1__["default"].dot(x, position), -_vec3__WEBPACK_IMPORTED_MODULE_1__["default"].dot(y, position), -_vec3__WEBPACK_IMPORTED_MODULE_1__["default"].dot(z, position), 1]);
        }
      }, {
        key: "product",
        value: function product(m1, m2, result) {
          var a00 = m1.at(0);
          var a01 = m1.at(1);
          var a02 = m1.at(2);
          var a03 = m1.at(3);
          var a10 = m1.at(4);
          var a11 = m1.at(5);
          var a12 = m1.at(6);
          var a13 = m1.at(7);
          var a20 = m1.at(8);
          var a21 = m1.at(9);
          var a22 = m1.at(10);
          var a23 = m1.at(11);
          var a30 = m1.at(12);
          var a31 = m1.at(13);
          var a32 = m1.at(14);
          var a33 = m1.at(15);
          var b00 = m2.at(0);
          var b01 = m2.at(1);
          var b02 = m2.at(2);
          var b03 = m2.at(3);
          var b10 = m2.at(4);
          var b11 = m2.at(5);
          var b12 = m2.at(6);
          var b13 = m2.at(7);
          var b20 = m2.at(8);
          var b21 = m2.at(9);
          var b22 = m2.at(10);
          var b23 = m2.at(11);
          var b30 = m2.at(12);
          var b31 = m2.at(13);
          var b32 = m2.at(14);
          var b33 = m2.at(15);

          if (result) {
            result.init([b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33]);
            return result;
          } else {
            return new mat4([b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33]);
          }
        }
      }]);

      return mat4;
    }();

    mat4.identity = new mat4().setIdentity();
    /***/
  },

  /***/
  "./src/app/util/platform.ts":
  /*!**********************************!*\
    !*** ./src/app/util/platform.ts ***!
    \**********************************/

  /*! exports provided: PlatformToString, isWindows, isMacintosh, isLinux, isNative, isWeb, isIOS, platform, userAgent, isRootUser, language, Language, locale, translationsConfigFile, globals, setImmediate, OS */

  /***/
  function srcAppUtilPlatformTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformToString", function () {
      return PlatformToString;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isWindows", function () {
      return isWindows;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isMacintosh", function () {
      return isMacintosh;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLinux", function () {
      return isLinux;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNative", function () {
      return isNative;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isWeb", function () {
      return isWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isIOS", function () {
      return isIOS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "platform", function () {
      return platform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userAgent", function () {
      return userAgent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isRootUser", function () {
      return isRootUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "language", function () {
      return language;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Language", function () {
      return Language;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "locale", function () {
      return locale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translationsConfigFile", function () {
      return translationsConfigFile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "globals", function () {
      return globals;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setImmediate", function () {
      return setImmediate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OS", function () {
      return OS;
    });
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/


    var LANGUAGE_DEFAULT = 'en';
    var _isWindows = false;
    var _isMacintosh = false;
    var _isLinux = false;
    var _isNative = false;
    var _isWeb = false;
    var _isIOS = false;
    var _locale = undefined;
    var _language = LANGUAGE_DEFAULT;
    var _translationsConfigFile = undefined;
    var _userAgent = undefined;
    var isElectronRenderer = typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer'; // OS detection

    if (typeof navigator === 'object' && !isElectronRenderer) {
      _userAgent = navigator.userAgent;
      _isWindows = _userAgent.indexOf('Windows') >= 0;
      _isMacintosh = _userAgent.indexOf('Macintosh') >= 0;
      _isIOS = _userAgent.indexOf('Macintosh') >= 0 && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
      _isLinux = _userAgent.indexOf('Linux') >= 0;
      _isWeb = true;
      _locale = navigator.language;
      _language = _locale;
    } else if (typeof process === 'object') {
      _isWindows = process.platform === 'win32';
      _isMacintosh = process.platform === 'darwin';
      _isLinux = process.platform === 'linux';
      _locale = LANGUAGE_DEFAULT;
      _language = LANGUAGE_DEFAULT;
      var rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];

      if (rawNlsConfig) {
        try {
          var nlsConfig = JSON.parse(rawNlsConfig);
          var resolved = nlsConfig.availableLanguages['*'];
          _locale = nlsConfig.locale; // VSCode's default language is 'en'

          _language = resolved ? resolved : LANGUAGE_DEFAULT;
          _translationsConfigFile = nlsConfig._translationsConfigFile;
        } catch (e) {}
      }

      _isNative = true;
    }

    function PlatformToString(platform) {
      switch (platform) {
        case 0
        /* Web */
        :
          return 'Web';

        case 1
        /* Mac */
        :
          return 'Mac';

        case 2
        /* Linux */
        :
          return 'Linux';

        case 3
        /* Windows */
        :
          return 'Windows';
      }
    }

    var _platform = 0
    /* Web */
    ;

    if (_isMacintosh) {
      _platform = 1
      /* Mac */
      ;
    } else if (_isWindows) {
      _platform = 3
      /* Windows */
      ;
    } else if (_isLinux) {
      _platform = 2
      /* Linux */
      ;
    }

    var isWindows = _isWindows;
    var isMacintosh = _isMacintosh;
    var isLinux = _isLinux;
    var isNative = _isNative;
    var isWeb = _isWeb;
    var isIOS = _isIOS;
    var platform = _platform;
    var userAgent = _userAgent;

    function isRootUser() {
      return _isNative && !_isWindows && process.getuid() === 0;
    }
    /**
     * The language used for the user interface. The format of
     * the string is all lower case (e.g. zh-tw for Traditional
     * Chinese)
     */


    var language = _language;
    var Language;

    (function (Language) {
      function value() {
        return language;
      }

      Language.value = value;

      function isDefaultVariant() {
        if (language.length === 2) {
          return language === 'en';
        } else if (language.length >= 3) {
          return language[0] === 'e' && language[1] === 'n' && language[2] === '-';
        } else {
          return false;
        }
      }

      Language.isDefaultVariant = isDefaultVariant;

      function isDefault() {
        return language === 'en';
      }

      Language.isDefault = isDefault;
    })(Language || (Language = {}));
    /**
     * The OS locale or the locale specified by --locale. The format of
     * the string is all lower case (e.g. zh-tw for Traditional
     * Chinese). The UI is not necessarily shown in the provided locale.
     */


    var locale = _locale;
    /**
     * The translatios that are available through language packs.
     */

    var translationsConfigFile = _translationsConfigFile;

    var _globals = typeof self === 'object' ? self : typeof global === 'object' ? global : {};

    var globals = _globals;

    var setImmediate = function defineSetImmediate() {
      if (globals.setImmediate) {
        return globals.setImmediate.bind(globals);
      }

      if (typeof globals.postMessage === 'function' && !globals.importScripts) {
        var pending = [];
        globals.addEventListener('message', function (e) {
          if (e.data && e.data.vscodeSetImmediateId) {
            for (var i = 0, len = pending.length; i < len; i++) {
              var candidate = pending[i];

              if (candidate.id === e.data.vscodeSetImmediateId) {
                pending.splice(i, 1);
                candidate.callback();
                return;
              }
            }
          }
        });
        var lastId = 0;
        return function (callback) {
          var myId = ++lastId;
          pending.push({
            id: myId,
            callback: callback
          });
          globals.postMessage({
            vscodeSetImmediateId: myId
          }, '*');
        };
      }

      if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
        return process.nextTick.bind(process);
      }

      var _promise = Promise.resolve();

      return function (callback) {
        return _promise.then(callback);
      };
    }();

    var OS = _isMacintosh ? 2
    /* Macintosh */
    : _isWindows ? 1
    /* Windows */
    : 3
    /* Linux */
    ;
    /***/
  },

  /***/
  "./src/app/util/quat.ts":
  /*!******************************!*\
    !*** ./src/app/util/quat.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilQuatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return quat;
    });
    /* harmony import */


    var _mat3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mat3 */
    "./src/app/util/mat3.ts");
    /* harmony import */


    var _mat4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mat4 */
    "./src/app/util/mat4.ts");
    /* harmony import */


    var _vec3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vec3 */
    "./src/app/util/vec3.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./constants */
    "./src/app/util/constants.ts");

    var quat =
    /*#__PURE__*/
    function () {
      function quat(values) {
        _classCallCheck(this, quat);

        this.values = new Float32Array(4);

        if (values !== undefined) {
          this.xyzw = values;
        }
      }

      _createClass(quat, [{
        key: "at",
        value: function at(index) {
          return this.values[index];
        }
      }, {
        key: "reset",
        value: function reset() {
          for (var i = 0; i < 4; i++) {
            this.values[i] = 0;
          }
        }
      }, {
        key: "copy",
        value: function copy(dest) {
          if (!dest) {
            dest = new quat();
          }

          for (var i = 0; i < 4; i++) {
            dest.values[i] = this.values[i];
          }

          return dest;
        }
      }, {
        key: "roll",
        value: function roll() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          return Math.atan2(2.0 * (x * y + w * z), w * w + x * x - y * y - z * z);
        }
      }, {
        key: "pitch",
        value: function pitch() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          return Math.atan2(2.0 * (y * z + w * x), w * w - x * x - y * y + z * z);
        }
      }, {
        key: "yaw",
        value: function yaw() {
          return Math.asin(2.0 * (this.x * this.z - this.w * this.y));
        }
      }, {
        key: "equals",
        value: function equals(vector) {
          var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_3__["epsilon"];

          for (var i = 0; i < 4; i++) {
            if (Math.abs(this.values[i] - vector.at(i)) > threshold) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "setIdentity",
        value: function setIdentity() {
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.w = 1;
          return this;
        }
      }, {
        key: "calculateW",
        value: function calculateW() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          this.w = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
          return this;
        }
      }, {
        key: "inverse",
        value: function inverse() {
          var dot = quat.dot(this, this);

          if (!dot) {
            this.xyzw = [0, 0, 0, 0];
            return this;
          }

          var invDot = dot ? 1.0 / dot : 0;
          this.x *= -invDot;
          this.y *= -invDot;
          this.z *= -invDot;
          this.w *= invDot;
          return this;
        }
      }, {
        key: "conjugate",
        value: function conjugate() {
          this.values[0] *= -1;
          this.values[1] *= -1;
          this.values[2] *= -1;
          return this;
        }
      }, {
        key: "length",
        value: function length() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          return Math.sqrt(x * x + y * y + z * z + w * w);
        }
      }, {
        key: "normalize",
        value: function normalize(dest) {
          if (!dest) {
            dest = this;
          }

          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          var length = Math.sqrt(x * x + y * y + z * z + w * w);

          if (!length) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            dest.w = 0;
            return dest;
          }

          length = 1 / length;
          dest.x = x * length;
          dest.y = y * length;
          dest.z = z * length;
          dest.w = w * length;
          return dest;
        }
      }, {
        key: "add",
        value: function add(other) {
          for (var i = 0; i < 4; i++) {
            this.values[i] += other.at(i);
          }

          return this;
        }
      }, {
        key: "multiply",
        value: function multiply(other) {
          var q1x = this.values[0];
          var q1y = this.values[1];
          var q1z = this.values[2];
          var q1w = this.values[3];
          var q2x = other.x;
          var q2y = other.y;
          var q2z = other.z;
          var q2w = other.w;
          this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
          this.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
          this.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
          this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
          return this;
        }
      }, {
        key: "multiplyVec3",
        value: function multiplyVec3(vector, dest) {
          if (!dest) {
            dest = new _vec3__WEBPACK_IMPORTED_MODULE_2__["default"]();
          }

          var x = vector.x;
          var y = vector.y;
          var z = vector.z;
          var qx = this.x;
          var qy = this.y;
          var qz = this.z;
          var qw = this.w;
          var ix = qw * x + qy * z - qz * y;
          var iy = qw * y + qz * x - qx * z;
          var iz = qw * z + qx * y - qy * x;
          var iw = -qx * x - qy * y - qz * z;
          dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
          dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
          dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
          return dest;
        }
      }, {
        key: "toMat3",
        value: function toMat3(dest) {
          if (!dest) {
            dest = new _mat3__WEBPACK_IMPORTED_MODULE_0__["default"]();
          }

          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          dest.init([1 - (yy + zz), xy + wz, xz - wy, xy - wz, 1 - (xx + zz), yz + wx, xz + wy, yz - wx, 1 - (xx + yy)]);
          return dest;
        }
      }, {
        key: "toMat4",
        value: function toMat4(dest) {
          if (!dest) {
            dest = new _mat4__WEBPACK_IMPORTED_MODULE_1__["default"]();
          }

          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          dest.init([1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, 0, 0, 0, 1]);
          return dest;
        }
      }, {
        key: "x",
        get: function get() {
          return this.values[0];
        },
        set: function set(value) {
          this.values[0] = value;
        }
      }, {
        key: "y",
        get: function get() {
          return this.values[1];
        },
        set: function set(value) {
          this.values[1] = value;
        }
      }, {
        key: "z",
        get: function get() {
          return this.values[2];
        },
        set: function set(value) {
          this.values[2] = value;
        }
      }, {
        key: "w",
        get: function get() {
          return this.values[3];
        },
        set: function set(value) {
          this.values[3] = value;
        }
      }, {
        key: "xy",
        get: function get() {
          return [this.values[0], this.values[1]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
        }
      }, {
        key: "xyz",
        get: function get() {
          return [this.values[0], this.values[1], this.values[2]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
          this.values[2] = values[2];
        }
      }, {
        key: "xyzw",
        get: function get() {
          return [this.values[0], this.values[1], this.values[2], this.values[3]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
          this.values[2] = values[2];
          this.values[3] = values[3];
        }
      }], [{
        key: "dot",
        value: function dot(q1, q2) {
          return q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
        }
      }, {
        key: "sum",
        value: function sum(q1, q2, dest) {
          if (!dest) {
            dest = new quat();
          }

          dest.x = q1.x + q2.x;
          dest.y = q1.y + q2.y;
          dest.z = q1.z + q2.z;
          dest.w = q1.w + q2.w;
          return dest;
        }
      }, {
        key: "product",
        value: function product(q1, q2, dest) {
          if (!dest) {
            dest = new quat();
          }

          var q1x = q1.x;
          var q1y = q1.y;
          var q1z = q1.z;
          var q1w = q1.w;
          var q2x = q2.x;
          var q2y = q2.y;
          var q2z = q2.z;
          var q2w = q2.w;
          dest.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
          dest.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
          dest.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
          dest.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
          return dest;
        }
      }, {
        key: "cross",
        value: function cross(q1, q2, dest) {
          if (!dest) {
            dest = new quat();
          }

          var q1x = q1.x;
          var q1y = q1.y;
          var q1z = q1.z;
          var q1w = q1.w;
          var q2x = q2.x;
          var q2y = q2.y;
          var q2z = q2.z;
          var q2w = q2.w;
          dest.x = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
          dest.y = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
          dest.z = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
          dest.w = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
          return dest;
        }
      }, {
        key: "shortMix",
        value: function shortMix(q1, q2, time, dest) {
          if (!dest) {
            dest = new quat();
          }

          if (time <= 0.0) {
            dest.xyzw = q1.xyzw;
            return dest;
          } else if (time >= 1.0) {
            dest.xyzw = q2.xyzw;
            return dest;
          }

          var cos = quat.dot(q1, q2);
          var q2a = q2.copy();

          if (cos < 0.0) {
            q2a.inverse();
            cos = -cos;
          }

          var k0;
          var k1;

          if (cos > 0.9999) {
            k0 = 1 - time;
            k1 = 0 + time;
          } else {
            var sin = Math.sqrt(1 - cos * cos);
            var angle = Math.atan2(sin, cos);
            var oneOverSin = 1 / sin;
            k0 = Math.sin((1 - time) * angle) * oneOverSin;
            k1 = Math.sin((0 + time) * angle) * oneOverSin;
          }

          dest.x = k0 * q1.x + k1 * q2a.x;
          dest.y = k0 * q1.y + k1 * q2a.y;
          dest.z = k0 * q1.z + k1 * q2a.z;
          dest.w = k0 * q1.w + k1 * q2a.w;
          return dest;
        }
      }, {
        key: "mix",
        value: function mix(q1, q2, time, dest) {
          if (!dest) {
            dest = new quat();
          }

          var cosHalfTheta = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;

          if (Math.abs(cosHalfTheta) >= 1.0) {
            dest.xyzw = q1.xyzw;
            return dest;
          }

          var halfTheta = Math.acos(cosHalfTheta);
          var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

          if (Math.abs(sinHalfTheta) < 0.001) {
            dest.x = q1.x * 0.5 + q2.x * 0.5;
            dest.y = q1.y * 0.5 + q2.y * 0.5;
            dest.z = q1.z * 0.5 + q2.z * 0.5;
            dest.w = q1.w * 0.5 + q2.w * 0.5;
            return dest;
          }

          var ratioA = Math.sin((1 - time) * halfTheta) / sinHalfTheta;
          var ratioB = Math.sin(time * halfTheta) / sinHalfTheta;
          dest.x = q1.x * ratioA + q2.x * ratioB;
          dest.y = q1.y * ratioA + q2.y * ratioB;
          dest.z = q1.z * ratioA + q2.z * ratioB;
          dest.w = q1.w * ratioA + q2.w * ratioB;
          return dest;
        }
      }, {
        key: "fromAxisAngle",
        value: function fromAxisAngle(axis, angle, dest) {
          if (!dest) {
            dest = new quat();
          }

          angle *= 0.5;
          var sin = Math.sin(angle);
          dest.x = axis.x * sin;
          dest.y = axis.y * sin;
          dest.z = axis.z * sin;
          dest.w = Math.cos(angle);
          return dest;
        }
      }]);

      return quat;
    }();

    quat.identity = new quat().setIdentity();
    /***/
  },

  /***/
  "./src/app/util/vec2.ts":
  /*!******************************!*\
    !*** ./src/app/util/vec2.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilVec2Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return vec2;
    });
    /* harmony import */


    var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vec3 */
    "./src/app/util/vec3.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants */
    "./src/app/util/constants.ts");

    var vec2 =
    /*#__PURE__*/
    function () {
      function vec2(values) {
        _classCallCheck(this, vec2);

        this.values = new Float32Array(2);

        if (values !== undefined) {
          this.xy = values;
        }
      }

      _createClass(vec2, [{
        key: "at",
        value: function at(index) {
          return this.values[index];
        }
      }, {
        key: "reset",
        value: function reset() {
          this.x = 0;
          this.y = 0;
        }
      }, {
        key: "copy",
        value: function copy(dest) {
          if (!dest) {
            dest = new vec2();
          }

          dest.x = this.x;
          dest.y = this.y;
          return dest;
        }
      }, {
        key: "negate",
        value: function negate(dest) {
          if (!dest) {
            dest = this;
          }

          dest.x = -this.x;
          dest.y = -this.y;
          return dest;
        }
      }, {
        key: "equals",
        value: function equals(vector) {
          var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_1__["epsilon"];

          if (Math.abs(this.x - vector.x) > threshold) {
            return false;
          }

          if (Math.abs(this.y - vector.y) > threshold) {
            return false;
          }

          return true;
        }
      }, {
        key: "length",
        value: function length() {
          return Math.sqrt(this.squaredLength());
        }
      }, {
        key: "squaredLength",
        value: function squaredLength() {
          var x = this.x;
          var y = this.y;
          return x * x + y * y;
        }
      }, {
        key: "add",
        value: function add(vector) {
          this.x += vector.x;
          this.y += vector.y;
          return this;
        }
      }, {
        key: "subtract",
        value: function subtract(vector) {
          this.x -= vector.x;
          this.y -= vector.y;
          return this;
        }
      }, {
        key: "multiply",
        value: function multiply(vector) {
          this.x *= vector.x;
          this.y *= vector.y;
          return this;
        }
      }, {
        key: "divide",
        value: function divide(vector) {
          this.x /= vector.x;
          this.y /= vector.y;
          return this;
        }
      }, {
        key: "scale",
        value: function scale(value, dest) {
          if (!dest) {
            dest = this;
          }

          dest.x = this.x * value;
          dest.y = this.y * value;
          return dest;
        }
      }, {
        key: "normalize",
        value: function normalize(dest) {
          if (!dest) {
            dest = this;
          }

          var length = this.length();

          if (length === 1) {
            return this;
          }

          if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            return dest;
          }

          length = 1.0 / length;
          dest.x *= length;
          dest.y *= length;
          return dest;
        }
      }, {
        key: "multiplyMat2",
        value: function multiplyMat2(matrix, dest) {
          if (!dest) {
            dest = this;
          }

          return matrix.multiplyVec2(this, dest);
        }
      }, {
        key: "multiplyMat3",
        value: function multiplyMat3(matrix, dest) {
          if (!dest) {
            dest = this;
          }

          return matrix.multiplyVec2(this, dest);
        }
      }, {
        key: "x",
        get: function get() {
          return this.values[0];
        },
        set: function set(value) {
          this.values[0] = value;
        }
      }, {
        key: "y",
        get: function get() {
          return this.values[1];
        },
        set: function set(value) {
          this.values[1] = value;
        }
      }, {
        key: "xy",
        get: function get() {
          return [this.values[0], this.values[1]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
        }
      }], [{
        key: "cross",
        value: function cross(vector, vector2, dest) {
          if (!dest) {
            dest = new _vec3__WEBPACK_IMPORTED_MODULE_0__["default"]();
          }

          var x = vector.x;
          var y = vector.y;
          var x2 = vector2.x;
          var y2 = vector2.y;
          var z = x * y2 - y * x2;
          dest.x = 0;
          dest.y = 0;
          dest.z = z;
          return dest;
        }
      }, {
        key: "dot",
        value: function dot(vector, vector2) {
          return vector.x * vector2.x + vector.y * vector2.y;
        }
      }, {
        key: "distance",
        value: function distance(vector, vector2) {
          return Math.sqrt(this.squaredDistance(vector, vector2));
        }
      }, {
        key: "squaredDistance",
        value: function squaredDistance(vector, vector2) {
          var x = vector2.x - vector.x;
          var y = vector2.y - vector.y;
          return x * x + y * y;
        }
      }, {
        key: "direction",
        value: function direction(vector, vector2, dest) {
          if (!dest) {
            dest = new vec2();
          }

          var x = vector.x - vector2.x;
          var y = vector.y - vector2.y;
          var length = Math.sqrt(x * x + y * y);

          if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            return dest;
          }

          length = 1 / length;
          dest.x = x * length;
          dest.y = y * length;
          return dest;
        }
      }, {
        key: "mix",
        value: function mix(vector, vector2, time, dest) {
          if (!dest) {
            dest = new vec2();
          }

          var x = vector.x;
          var y = vector.y;
          var x2 = vector2.x;
          var y2 = vector2.y;
          dest.x = x + time * (x2 - x);
          dest.y = y + time * (y2 - y);
          return dest;
        }
      }, {
        key: "sum",
        value: function sum(vector, vector2, dest) {
          if (!dest) {
            dest = new vec2();
          }

          dest.x = vector.x + vector2.x;
          dest.y = vector.y + vector2.y;
          return dest;
        }
      }, {
        key: "difference",
        value: function difference(vector, vector2, dest) {
          if (!dest) {
            dest = new vec2();
          }

          dest.x = vector.x - vector2.x;
          dest.y = vector.y - vector2.y;
          return dest;
        }
      }, {
        key: "product",
        value: function product(vector, vector2, dest) {
          if (!dest) {
            dest = new vec2();
          }

          dest.x = vector.x * vector2.x;
          dest.y = vector.y * vector2.y;
          return dest;
        }
      }, {
        key: "quotient",
        value: function quotient(vector, vector2, dest) {
          if (!dest) {
            dest = new vec2();
          }

          dest.x = vector.x / vector2.x;
          dest.y = vector.y / vector2.y;
          return dest;
        }
      }]);

      return vec2;
    }();

    vec2.zero = new vec2([0, 0]);
    vec2.one = new vec2([1, 1]);
    /***/
  },

  /***/
  "./src/app/util/vec3.ts":
  /*!******************************!*\
    !*** ./src/app/util/vec3.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilVec3Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return vec3;
    });
    /* harmony import */


    var _quat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./quat */
    "./src/app/util/quat.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants */
    "./src/app/util/constants.ts");

    var vec3 =
    /*#__PURE__*/
    function () {
      function vec3(values) {
        _classCallCheck(this, vec3);

        this.values = new Float32Array(3);

        if (values !== undefined) {
          this.xyz = values;
        }
      }

      _createClass(vec3, [{
        key: "at",
        value: function at(index) {
          return this.values[index];
        }
      }, {
        key: "reset",
        value: function reset() {
          this.x = 0;
          this.y = 0;
          this.z = 0;
        }
      }, {
        key: "copy",
        value: function copy(dest) {
          if (!dest) {
            dest = new vec3();
          }

          dest.x = this.x;
          dest.y = this.y;
          dest.z = this.z;
          return dest;
        }
      }, {
        key: "negate",
        value: function negate(dest) {
          if (!dest) {
            dest = this;
          }

          dest.x = -this.x;
          dest.y = -this.y;
          dest.z = -this.z;
          return dest;
        }
      }, {
        key: "equals",
        value: function equals(vector) {
          var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_1__["epsilon"];

          if (Math.abs(this.x - vector.x) > threshold) {
            return false;
          }

          if (Math.abs(this.y - vector.y) > threshold) {
            return false;
          }

          if (Math.abs(this.z - vector.z) > threshold) {
            return false;
          }

          return true;
        }
      }, {
        key: "length",
        value: function length() {
          return Math.sqrt(this.squaredLength());
        }
      }, {
        key: "squaredLength",
        value: function squaredLength() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          return x * x + y * y + z * z;
        }
      }, {
        key: "add",
        value: function add(vector) {
          this.x += vector.x;
          this.y += vector.y;
          this.z += vector.z;
          return this;
        }
      }, {
        key: "subtract",
        value: function subtract(vector) {
          this.x -= vector.x;
          this.y -= vector.y;
          this.z -= vector.z;
          return this;
        }
      }, {
        key: "multiply",
        value: function multiply(vector) {
          this.x *= vector.x;
          this.y *= vector.y;
          this.z *= vector.z;
          return this;
        }
      }, {
        key: "divide",
        value: function divide(vector) {
          this.x /= vector.x;
          this.y /= vector.y;
          this.z /= vector.z;
          return this;
        }
      }, {
        key: "scale",
        value: function scale(value, dest) {
          if (!dest) {
            dest = this;
          }

          dest.x *= value;
          dest.y *= value;
          dest.z *= value;
          return dest;
        }
      }, {
        key: "normalize",
        value: function normalize(dest) {
          if (!dest) {
            dest = this;
          }

          var length = this.length();

          if (length === 1) {
            return this;
          }

          if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            return dest;
          }

          length = 1.0 / length;
          dest.x *= length;
          dest.y *= length;
          dest.z *= length;
          return dest;
        }
      }, {
        key: "multiplyByMat3",
        value: function multiplyByMat3(matrix, dest) {
          if (!dest) {
            dest = this;
          }

          return matrix.multiplyVec3(this, dest);
        }
      }, {
        key: "multiplyByQuat",
        value: function multiplyByQuat(quaternion, dest) {
          if (!dest) {
            dest = this;
          }

          return quaternion.multiplyVec3(this, dest);
        }
      }, {
        key: "toQuat",
        value: function toQuat(dest) {
          if (!dest) {
            dest = new _quat__WEBPACK_IMPORTED_MODULE_0__["default"]();
          }

          var c = new vec3();
          var s = new vec3();
          c.x = Math.cos(this.x * 0.5);
          s.x = Math.sin(this.x * 0.5);
          c.y = Math.cos(this.y * 0.5);
          s.y = Math.sin(this.y * 0.5);
          c.z = Math.cos(this.z * 0.5);
          s.z = Math.sin(this.z * 0.5);
          dest.x = s.x * c.y * c.z - c.x * s.y * s.z;
          dest.y = c.x * s.y * c.z + s.x * c.y * s.z;
          dest.z = c.x * c.y * s.z - s.x * s.y * c.z;
          dest.w = c.x * c.y * c.z + s.x * s.y * s.z;
          return dest;
        }
      }, {
        key: "x",
        get: function get() {
          return this.values[0];
        },
        set: function set(value) {
          this.values[0] = value;
        }
      }, {
        key: "y",
        get: function get() {
          return this.values[1];
        },
        set: function set(value) {
          this.values[1] = value;
        }
      }, {
        key: "z",
        get: function get() {
          return this.values[2];
        },
        set: function set(value) {
          this.values[2] = value;
        }
      }, {
        key: "xy",
        get: function get() {
          return [this.values[0], this.values[1]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
        }
      }, {
        key: "xyz",
        get: function get() {
          return [this.values[0], this.values[1], this.values[2]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
          this.values[2] = values[2];
        }
      }], [{
        key: "cross",
        value: function cross(vector, vector2, dest) {
          if (!dest) {
            dest = new vec3();
          }

          var x = vector.x;
          var y = vector.y;
          var z = vector.z;
          var x2 = vector2.x;
          var y2 = vector2.y;
          var z2 = vector2.z;
          dest.x = y * z2 - z * y2;
          dest.y = z * x2 - x * z2;
          dest.z = x * y2 - y * x2;
          return dest;
        }
      }, {
        key: "dot",
        value: function dot(vector, vector2) {
          var x = vector.x;
          var y = vector.y;
          var z = vector.z;
          var x2 = vector2.x;
          var y2 = vector2.y;
          var z2 = vector2.z;
          return x * x2 + y * y2 + z * z2;
        }
      }, {
        key: "distance",
        value: function distance(vector, vector2) {
          var x = vector2.x - vector.x;
          var y = vector2.y - vector.y;
          var z = vector2.z - vector.z;
          return Math.sqrt(this.squaredDistance(vector, vector2));
        }
      }, {
        key: "squaredDistance",
        value: function squaredDistance(vector, vector2) {
          var x = vector2.x - vector.x;
          var y = vector2.y - vector.y;
          var z = vector2.z - vector.z;
          return x * x + y * y + z * z;
        }
      }, {
        key: "direction",
        value: function direction(vector, vector2, dest) {
          if (!dest) {
            dest = new vec3();
          }

          var x = vector.x - vector2.x;
          var y = vector.y - vector2.y;
          var z = vector.z - vector2.z;
          var length = Math.sqrt(x * x + y * y + z * z);

          if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            return dest;
          }

          length = 1 / length;
          dest.x = x * length;
          dest.y = y * length;
          dest.z = z * length;
          return dest;
        }
      }, {
        key: "mix",
        value: function mix(vector, vector2, time, dest) {
          if (!dest) {
            dest = new vec3();
          }

          dest.x = vector.x + time * (vector2.x - vector.x);
          dest.y = vector.y + time * (vector2.y - vector.y);
          dest.z = vector.z + time * (vector2.z - vector.z);
          return dest;
        }
      }, {
        key: "sum",
        value: function sum(vector, vector2, dest) {
          if (!dest) {
            dest = new vec3();
          }

          dest.x = vector.x + vector2.x;
          dest.y = vector.y + vector2.y;
          dest.z = vector.z + vector2.z;
          return dest;
        }
      }, {
        key: "difference",
        value: function difference(vector, vector2, dest) {
          if (!dest) {
            dest = new vec3();
          }

          dest.x = vector.x - vector2.x;
          dest.y = vector.y - vector2.y;
          dest.z = vector.z - vector2.z;
          return dest;
        }
      }, {
        key: "product",
        value: function product(vector, vector2, dest) {
          if (!dest) {
            dest = new vec3();
          }

          dest.x = vector.x * vector2.x;
          dest.y = vector.y * vector2.y;
          dest.z = vector.z * vector2.z;
          return dest;
        }
      }, {
        key: "quotient",
        value: function quotient(vector, vector2, dest) {
          if (!dest) {
            dest = new vec3();
          }

          dest.x = vector.x / vector2.x;
          dest.y = vector.y / vector2.y;
          dest.z = vector.z / vector2.z;
          return dest;
        }
      }]);

      return vec3;
    }();

    vec3.zero = new vec3([0, 0, 0]);
    vec3.one = new vec3([1, 1, 1]);
    vec3.up = new vec3([0, 1, 0]);
    vec3.right = new vec3([1, 0, 0]);
    vec3.forward = new vec3([0, 0, 1]);
    /***/
  },

  /***/
  "./src/app/util/vec4.ts":
  /*!******************************!*\
    !*** ./src/app/util/vec4.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilVec4Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return vec4;
    });
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants */
    "./src/app/util/constants.ts");

    var vec4 =
    /*#__PURE__*/
    function () {
      function vec4(values) {
        _classCallCheck(this, vec4);

        this.values = new Float32Array(4);

        if (values !== undefined) {
          this.xyzw = values;
        }
      }

      _createClass(vec4, [{
        key: "at",
        value: function at(index) {
          return this.values[index];
        }
      }, {
        key: "reset",
        value: function reset() {
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.w = 0;
        }
      }, {
        key: "copy",
        value: function copy(dest) {
          if (!dest) {
            dest = new vec4();
          }

          dest.x = this.x;
          dest.y = this.y;
          dest.z = this.z;
          dest.w = this.w;
          return dest;
        }
      }, {
        key: "negate",
        value: function negate(dest) {
          if (!dest) {
            dest = this;
          }

          dest.x = -this.x;
          dest.y = -this.y;
          dest.z = -this.z;
          dest.w = -this.w;
          return dest;
        }
      }, {
        key: "equals",
        value: function equals(vector) {
          var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_0__["epsilon"];

          if (Math.abs(this.x - vector.x) > threshold) {
            return false;
          }

          if (Math.abs(this.y - vector.y) > threshold) {
            return false;
          }

          if (Math.abs(this.z - vector.z) > threshold) {
            return false;
          }

          if (Math.abs(this.w - vector.w) > threshold) {
            return false;
          }

          return true;
        }
      }, {
        key: "length",
        value: function length() {
          return Math.sqrt(this.squaredLength());
        }
      }, {
        key: "squaredLength",
        value: function squaredLength() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          return x * x + y * y + z * z + w * w;
        }
      }, {
        key: "add",
        value: function add(vector) {
          this.x += vector.x;
          this.y += vector.y;
          this.z += vector.z;
          this.w += vector.w;
          return this;
        }
      }, {
        key: "subtract",
        value: function subtract(vector) {
          this.x -= vector.x;
          this.y -= vector.y;
          this.z -= vector.z;
          this.w -= vector.w;
          return this;
        }
      }, {
        key: "multiply",
        value: function multiply(vector) {
          this.x *= vector.x;
          this.y *= vector.y;
          this.z *= vector.z;
          this.w *= vector.w;
          return this;
        }
      }, {
        key: "divide",
        value: function divide(vector) {
          this.x /= vector.x;
          this.y /= vector.y;
          this.z /= vector.z;
          this.w /= vector.w;
          return this;
        }
      }, {
        key: "scale",
        value: function scale(value, dest) {
          if (!dest) {
            dest = this;
          }

          dest.x *= value;
          dest.y *= value;
          dest.z *= value;
          dest.w *= value;
          return dest;
        }
      }, {
        key: "normalize",
        value: function normalize(dest) {
          if (!dest) {
            dest = this;
          }

          var length = this.length();

          if (length === 1) {
            return this;
          }

          if (length === 0) {
            dest.x *= 0;
            dest.y *= 0;
            dest.z *= 0;
            dest.w *= 0;
            return dest;
          }

          length = 1.0 / length;
          dest.x *= length;
          dest.y *= length;
          dest.z *= length;
          dest.w *= length;
          return dest;
        }
      }, {
        key: "multiplyMat4",
        value: function multiplyMat4(matrix, dest) {
          if (!dest) {
            dest = this;
          }

          return matrix.multiplyVec4(this, dest);
        }
      }, {
        key: "x",
        get: function get() {
          return this.values[0];
        },
        set: function set(value) {
          this.values[0] = value;
        }
      }, {
        key: "y",
        get: function get() {
          return this.values[1];
        },
        set: function set(value) {
          this.values[1] = value;
        }
      }, {
        key: "z",
        get: function get() {
          return this.values[2];
        },
        set: function set(value) {
          this.values[2] = value;
        }
      }, {
        key: "w",
        get: function get() {
          return this.values[3];
        },
        set: function set(value) {
          this.values[3] = value;
        }
      }, {
        key: "xy",
        get: function get() {
          return [this.values[0], this.values[1]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
        }
      }, {
        key: "xyz",
        get: function get() {
          return [this.values[0], this.values[1], this.values[2]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
          this.values[2] = values[2];
        }
      }, {
        key: "xyzw",
        get: function get() {
          return [this.values[0], this.values[1], this.values[2], this.values[3]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
          this.values[2] = values[2];
          this.values[3] = values[3];
        }
      }, {
        key: "r",
        get: function get() {
          return this.values[0];
        },
        set: function set(value) {
          this.values[0] = value;
        }
      }, {
        key: "g",
        get: function get() {
          return this.values[1];
        },
        set: function set(value) {
          this.values[1] = value;
        }
      }, {
        key: "b",
        get: function get() {
          return this.values[2];
        },
        set: function set(value) {
          this.values[2] = value;
        }
      }, {
        key: "a",
        get: function get() {
          return this.values[3];
        },
        set: function set(value) {
          this.values[3] = value;
        }
      }, {
        key: "rg",
        get: function get() {
          return [this.values[0], this.values[1]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
        }
      }, {
        key: "rgb",
        get: function get() {
          return [this.values[0], this.values[1], this.values[2]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
          this.values[2] = values[2];
        }
      }, {
        key: "rgba",
        get: function get() {
          return [this.values[0], this.values[1], this.values[2], this.values[3]];
        },
        set: function set(values) {
          this.values[0] = values[0];
          this.values[1] = values[1];
          this.values[2] = values[2];
          this.values[3] = values[3];
        }
      }], [{
        key: "mix",
        value: function mix(vector, vector2, time, dest) {
          if (!dest) {
            dest = new vec4();
          }

          dest.x = vector.x + time * (vector2.x - vector.x);
          dest.y = vector.y + time * (vector2.y - vector.y);
          dest.z = vector.z + time * (vector2.z - vector.z);
          dest.w = vector.w + time * (vector2.w - vector.w);
          return dest;
        }
      }, {
        key: "sum",
        value: function sum(vector, vector2, dest) {
          if (!dest) {
            dest = new vec4();
          }

          dest.x = vector.x + vector2.x;
          dest.y = vector.y + vector2.y;
          dest.z = vector.z + vector2.z;
          dest.w = vector.w + vector2.w;
          return dest;
        }
      }, {
        key: "difference",
        value: function difference(vector, vector2, dest) {
          if (!dest) {
            dest = new vec4();
          }

          dest.x = vector.x - vector2.x;
          dest.y = vector.y - vector2.y;
          dest.z = vector.z - vector2.z;
          dest.w = vector.w - vector2.w;
          return dest;
        }
      }, {
        key: "product",
        value: function product(vector, vector2, dest) {
          if (!dest) {
            dest = new vec4();
          }

          dest.x = vector.x * vector2.x;
          dest.y = vector.y * vector2.y;
          dest.z = vector.z * vector2.z;
          dest.w = vector.w * vector2.w;
          return dest;
        }
      }, {
        key: "quotient",
        value: function quotient(vector, vector2, dest) {
          if (!dest) {
            dest = new vec4();
          }

          dest.x = vector.x / vector2.x;
          dest.y = vector.y / vector2.y;
          dest.z = vector.z / vector2.z;
          dest.w = vector.w / vector2.w;
          return dest;
        }
      }]);

      return vec4;
    }();

    vec4.zero = new vec4([0, 0, 0, 1]);
    vec4.one = new vec4([1, 1, 1, 1]);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_util_image_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/util/image-filter */
    "./src/app/util/image-filter.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    src_app_util_image_filter__WEBPACK_IMPORTED_MODULE_2__["ImageFilter"].init();
    window.addEventListener('contextmenu', function (e) {
      return e.preventDefault();
    });

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\source\thumb-up\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map