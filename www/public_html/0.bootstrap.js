(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm.js":
/*!**********************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm.js ***!
  \**********************************************************/
/*! exports provided: Config, Engine, __wbindgen_json_parse, __wbg_getRandomValues_57e4008f45f0e105, __wbindgen_object_drop_ref, __wbg_randomFillSync_d90848a552cbd666, __wbg_self_f865985e662246aa, __wbg_static_accessor_MODULE_39947eb3fe77895f, __wbg_require_c59851dfa0dc7e78, __wbg_crypto_bfb05100db79193b, __wbg_msCrypto_f6dddc6ae048b7e2, __wbindgen_is_undefined, __wbg_buffer_bc64154385c04ac4, __wbg_length_e9f6f145de2fede5, __wbg_new_22a33711cf65b661, __wbg_set_b29de3f25280c6ec, __wbg_newwithlength_48451d71403bfede, __wbg_subarray_6b2dd31c84ee881f, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib_simulation_wasm_bg.wasm */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm\");\n/* harmony import */ var _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib_simulation_wasm_bg.js */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Config\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Config\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Engine\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_json_parse\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_57e4008f45f0e105\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_57e4008f45f0e105\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_d90848a552cbd666\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_d90848a552cbd666\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_f865985e662246aa\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_f865985e662246aa\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_static_accessor_MODULE_39947eb3fe77895f\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_static_accessor_MODULE_39947eb3fe77895f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_c59851dfa0dc7e78\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_require_c59851dfa0dc7e78\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_bfb05100db79193b\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_bfb05100db79193b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_f6dddc6ae048b7e2\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_msCrypto_f6dddc6ae048b7e2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_bc64154385c04ac4\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_bc64154385c04ac4\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_e9f6f145de2fede5\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_length_e9f6f145de2fede5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_22a33711cf65b661\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_22a33711cf65b661\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_b29de3f25280c6ec\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_b29de3f25280c6ec\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_48451d71403bfede\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithlength_48451d71403bfede\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_6b2dd31c84ee881f\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_subarray_6b2dd31c84ee881f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\n\n//# sourceURL=webpack:///../libs/simulation-wasm/pkg/lib_simulation_wasm.js?");

/***/ }),

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js":
/*!*************************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js ***!
  \*************************************************************/
/*! exports provided: Config, Engine, __wbindgen_json_parse, __wbg_getRandomValues_57e4008f45f0e105, __wbindgen_object_drop_ref, __wbg_randomFillSync_d90848a552cbd666, __wbg_self_f865985e662246aa, __wbg_static_accessor_MODULE_39947eb3fe77895f, __wbg_require_c59851dfa0dc7e78, __wbg_crypto_bfb05100db79193b, __wbg_msCrypto_f6dddc6ae048b7e2, __wbindgen_is_undefined, __wbg_buffer_bc64154385c04ac4, __wbg_length_e9f6f145de2fede5, __wbg_new_22a33711cf65b661, __wbg_set_b29de3f25280c6ec, __wbg_newwithlength_48451d71403bfede, __wbg_subarray_6b2dd31c84ee881f, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Config\", function() { return Config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return Engine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return __wbindgen_json_parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_57e4008f45f0e105\", function() { return __wbg_getRandomValues_57e4008f45f0e105; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_d90848a552cbd666\", function() { return __wbg_randomFillSync_d90848a552cbd666; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_f865985e662246aa\", function() { return __wbg_self_f865985e662246aa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_static_accessor_MODULE_39947eb3fe77895f\", function() { return __wbg_static_accessor_MODULE_39947eb3fe77895f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_c59851dfa0dc7e78\", function() { return __wbg_require_c59851dfa0dc7e78; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_bfb05100db79193b\", function() { return __wbg_crypto_bfb05100db79193b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_f6dddc6ae048b7e2\", function() { return __wbg_msCrypto_f6dddc6ae048b7e2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_bc64154385c04ac4\", function() { return __wbg_buffer_bc64154385c04ac4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_e9f6f145de2fede5\", function() { return __wbg_length_e9f6f145de2fede5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_22a33711cf65b661\", function() { return __wbg_new_22a33711cf65b661; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_b29de3f25280c6ec\", function() { return __wbg_set_b29de3f25280c6ec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_48451d71403bfede\", function() { return __wbg_newwithlength_48451d71403bfede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_6b2dd31c84ee881f\", function() { return __wbg_subarray_6b2dd31c84ee881f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony import */ var _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib_simulation_wasm_bg.wasm */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass Config {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Config.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_config_free\"](ptr);\n    }\n    /**\n    */\n    constructor() {\n        var ret = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_new\"]();\n        return Config.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get animals() {\n        var ret = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_animals\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} animals\n    */\n    set animals(animals) {\n        _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_set_animals\"](this.ptr, animals);\n    }\n    /**\n    * @returns {number}\n    */\n    get foods() {\n        var ret = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_foods\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} foods\n    */\n    set foods(foods) {\n        _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_set_foods\"](this.ptr, foods);\n    }\n    /**\n    * @returns {number}\n    */\n    get neurons() {\n        var ret = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_neurons\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} neurons\n    */\n    set neurons(neurons) {\n        _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_set_neurons\"](this.ptr, neurons);\n    }\n    /**\n    * @returns {number}\n    */\n    get photoreceptors() {\n        var ret = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_photoreceptors\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} photoreceptors\n    */\n    set photoreceptors(photoreceptors) {\n        _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"config_set_photoreceptors\"](this.ptr, photoreceptors);\n    }\n}\n/**\n*/\nclass Engine {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Engine.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_engine_free\"](ptr);\n    }\n    /**\n    * @param {Config} config\n    */\n    constructor(config) {\n        _assertClass(config, Config);\n        var ret = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"engine_new\"](config.ptr);\n        return Engine.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    step() {\n        try {\n            const retptr = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"engine_step\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    train() {\n        try {\n            const retptr = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"engine_train\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {any}\n    */\n    world() {\n        var ret = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"engine_world\"](this.ptr);\n        return takeObject(ret);\n    }\n}\n\nconst __wbindgen_json_parse = function(arg0, arg1) {\n    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbg_getRandomValues_57e4008f45f0e105 = handleError(function(arg0, arg1) {\n    getObject(arg0).getRandomValues(getObject(arg1));\n});\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_randomFillSync_d90848a552cbd666 = handleError(function(arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n});\n\nconst __wbg_self_f865985e662246aa = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_static_accessor_MODULE_39947eb3fe77895f = function() {\n    var ret = module;\n    return addHeapObject(ret);\n};\n\nconst __wbg_require_c59851dfa0dc7e78 = handleError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_crypto_bfb05100db79193b = function(arg0) {\n    var ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nconst __wbg_msCrypto_f6dddc6ae048b7e2 = function(arg0) {\n    var ret = getObject(arg0).msCrypto;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nconst __wbg_buffer_bc64154385c04ac4 = function(arg0) {\n    var ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nconst __wbg_length_e9f6f145de2fede5 = function(arg0) {\n    var ret = getObject(arg0).length;\n    return ret;\n};\n\nconst __wbg_new_22a33711cf65b661 = function(arg0) {\n    var ret = new Uint8Array(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nconst __wbg_set_b29de3f25280c6ec = function(arg0, arg1, arg2) {\n    getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n};\n\nconst __wbg_newwithlength_48451d71403bfede = function(arg0) {\n    var ret = new Uint8Array(arg0 >>> 0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_subarray_6b2dd31c84ee881f = function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_memory = function() {\n    var ret = _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"];\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js?");

/***/ }),

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm":
/*!***************************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm ***!
  \***************************************************************/
/*! exports provided: memory, __wbg_config_free, config_new, config_animals, config_set_animals, config_foods, config_set_foods, config_neurons, config_set_neurons, config_photoreceptors, config_set_photoreceptors, __wbg_engine_free, engine_new, engine_step, engine_train, engine_world, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./lib_simulation_wasm_bg.js */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-simulation-wasm */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm.js\");\n/* harmony import */ var _app_components_terminal_stdin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/terminal-stdin */ \"./app/components/terminal-stdin.js\");\n/* harmony import */ var _app_components_terminal_stdout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/terminal-stdout */ \"./app/components/terminal-stdout.js\");\n/* harmony import */ var _app_components_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/components/viewport */ \"./app/components/viewport.js\");\n\n\n\n\n\nconst stdout = new _app_components_terminal_stdout__WEBPACK_IMPORTED_MODULE_2__[\"TerminalStdoutComponent\"](document.getElementById(\"terminal-stdout\"));\nconst stdin = new _app_components_terminal_stdin__WEBPACK_IMPORTED_MODULE_1__[\"TerminalStdinComponent\"](document.getElementById(\"terminal-stdin\"));\nconst viewport = new _app_components_viewport__WEBPACK_IMPORTED_MODULE_3__[\"ViewportComponent\"](document.getElementById(\"viewport\"));\n\n/**\n * Current simulation's parameters.\n *\n * @type {Config}\n */\nlet config = new lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Config\"]();\n\n/**\n * Current simulation's engine.\n *\n * @type {Engine}\n */\nlet engine = new lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"](config);\n\n/**\n * Whether the simulation is working or not.\n * Can be modified by the `pause` command.\n *\n * @type {boolean}\n */\nlet active = true;\n\nstdout.println(\"  _____ _                    _            _    \");\nstdout.println(\" / ____| |                  | |          | |   \");\nstdout.println(\"| (___ | |__   ___  _ __ ___| | __ _ _ __| | __\");\nstdout.println(\" \\\\___ \\\\| '_ \\\\ / _ \\\\| '__/ _ \\\\ |/ _` | '__| |/ /\");\nstdout.println(\" ____) | | | | (_) | | |  __/ | (_| | |  |   < \");\nstdout.println(\"|_____/|_| |_|\\\\___/|_|  \\\\___|_|\\\\__,_|_|  |_|\\\\_\\\\\");\nstdout.println(\"\");\nstdout.println(\"Simulation of life & evolution - powered by neural networks, genetic algorithms, and high-school math.\");\nstdout.println(\"\");\nstdout.println(\"Blog post with details coming!\");\nstdout.println(\"\");\nstdout.println(\"# About\");\nstdout.println(\"\");\nstdout.println(\"Each white triangle represents a single bird with its eyesight; each bird has a brain that decides where and how fast the bird should move.\");\nstdout.println(\"\");\nstdout.println(\"Each hacker-green circle represents a single unit of food (pizza, so to say), which birds are meant to find and eat.\");\nstdout.println(\"\");\nstdout.println(\"After 2500 turns (around a minute without fast-forwarding), birds with the best fitness scores (i.e. the ones who ate the most) are reproduced and their offspring starts the simulation anew.\");\nstdout.println(\"\");\nstdout.println(\"Each generation, thanks to evolution, gets slightly better at locating the food - it's almost as if the birds programmed themselves!\");\nstdout.println(\"\");\nstdout.println(\"Note that this represents neither a swarm intelligence (as birds don't see each other), nor a boids simulation (as birds are not hard-coded to find the food) - just regular neural network & genetic algorithm magic.\");\nstdout.println(\"\");\nstdout.println(\"Apart from being a bare observer, you can also affect the simulation by entering commands in the input below (`reset` is of particular interest as it allows to alter simulation parameters).\");\nstdout.println(\"\");\nstdout.println(\"Source code (Rust & JS) is available at: https://github.com/Patryk27/shorelark\");\nstdout.println(\"\");\nstdout.println(\"Have fun!\");\nstdout.println(\"\");\nstdout.println(\"# Command cheatsheet\");\nstdout.println(\"\");\nstdout.println(\"## (p)ause\");\nstdout.println(\"Pauses (or resumes) the simulation\");\nstdout.println(\"\");\nstdout.println(`## (r)eset [animals=${config.animals}] [f=${config.foods}] [...]`);\nstdout.println(\"Restarts the entire simulation from scratch with given optional parameters:\");\nstdout.println(\"\");\nstdout.println(\"- (a)nimals: int\");\nstdout.println(\"  number of simulated animals on the board\");\nstdout.println(`  (default: ${config.animals})`);\nstdout.println(\"\");\nstdout.println(\"- (f)oods: int\");\nstdout.println(\"  number of simulated foods on the board\");\nstdout.println(`  (default: ${config.foods})`);\nstdout.println(\"\");\nstdout.println(\"- (n)eurons: int\");\nstdout.println(\"  number of brain neurons per each animal\");\nstdout.println(`  (default: ${config.neurons})`);\nstdout.println(\"\");\nstdout.println(\"- (p)hotoreceptors: int\");\nstdout.println(\"  number of eye cells per each animal\");\nstdout.println(`  (default: ${config.photoreceptors})`);\nstdout.println(\"\");\nstdout.println(\"## (t)rain\");\nstdout.println(\"Fast-forwards an entire generation, allowing to see the outcome faster.\");\nstdout.println(\"\");\nstdout.scrollToTop();\n\nstdin.onInput((cmd) => {\n    stdout.println(\"\");\n    stdout.println(\"$ \" + cmd);\n\n    try {\n        exec(cmd);\n    } catch (err) {\n        stdout.println(`  ^ err: ${err}`);\n    }\n});\n\nfunction exec(cmd) {\n    if (cmd === \"p\" || cmd === \"pause\") {\n        execPause();\n        return;\n    }\n\n    if (cmd === \"r\" || cmd === \"reset\" || cmd.startsWith(\"r \") || cmd.startsWith(\"reset \")) {\n        execReset(cmd);\n        return;\n    }\n\n    if (cmd === \"t\" || cmd === \"train\") {\n        execTrain();\n        return;\n    }\n\n    throw \"unknown command\";\n}\n\nfunction execPause() {\n    active = !active;\n}\n\nfunction execReset(cmd) {\n    let newConfig = new lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Config\"]();\n\n    const argsList = cmd.split(\" \");\n    argsList.shift();\n\n    for (const arg of argsList) {\n        const [argName, argValue] = arg.split(\"=\");\n\n        switch (argName) {\n            case \"a\":\n            case \"animals\":\n                newConfig.animals = parseInt(argValue);\n                break;\n\n            case \"f\":\n            case \"foods\":\n                newConfig.foods = parseInt(argValue);\n                break;\n\n            case \"n\":\n            case \"neurons\":\n                newConfig.neurons = parseInt(argValue);\n                break;\n\n            case \"p\":\n            case \"photoreceptors\":\n                newConfig.photoreceptors = parseInt(argValue);\n                break;\n\n            default:\n                throw `unknown parameter: ${argName}`;\n        }\n    }\n\n    config = newConfig;\n    engine = new lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"](config);\n    active = true;\n}\n\nfunction execTrain() {\n    const stats = engine.train();\n    stdout.println(stats);\n    active = true;\n}\n\nfunction loop() {\n    if (active) {\n        const stats = engine.step();\n        const world = engine.world();\n\n        if (stats.length > 0) {\n            stdout.println(stats);\n        }\n\n        viewport.render(world);\n    }\n\n    requestAnimationFrame(loop);\n}\n\nrequestAnimationFrame(loop);\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./app/components/terminal-stdin.js":
/*!******************************************!*\
  !*** ./app/components/terminal-stdin.js ***!
  \******************************************/
/*! exports provided: TerminalStdinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TerminalStdinComponent\", function() { return TerminalStdinComponent; });\nclass TerminalStdinComponent {\n    constructor(el) {\n        this.onInputHandler = (_line) => void 0;\n\n        this.el = el;\n        this.el.focus();\n\n        this.el.onkeyup = (event) => {\n            if (event.keyCode === 13) {\n                event.preventDefault();\n\n                const cmd = this.el.value.trim();\n\n                if (cmd.length > 0) {\n                    this.onInputHandler(cmd);\n                }\n\n                this.el.value = '';\n            }\n        };\n    }\n\n    onInput(fn) {\n        this.onInputHandler = fn;\n    }\n}\n\n\n//# sourceURL=webpack:///./app/components/terminal-stdin.js?");

/***/ }),

/***/ "./app/components/terminal-stdout.js":
/*!*******************************************!*\
  !*** ./app/components/terminal-stdout.js ***!
  \*******************************************/
/*! exports provided: TerminalStdoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TerminalStdoutComponent\", function() { return TerminalStdoutComponent; });\nclass TerminalStdoutComponent {\n    constructor(el) {\n        this.el = el;\n    }\n\n    println(msg) {\n        if (this.el.value) {\n            this.el.value += '\\n';\n        }\n\n        this.el.value += msg;\n        this.el.scrollTop = this.el.scrollHeight;\n    }\n\n    scrollToTop() {\n        this.el.scrollTop = 0;\n    }\n}\n\n\n//# sourceURL=webpack:///./app/components/terminal-stdout.js?");

/***/ }),

/***/ "./app/components/viewport.js":
/*!************************************!*\
  !*** ./app/components/viewport.js ***!
  \************************************/
/*! exports provided: ViewportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewportComponent\", function() { return ViewportComponent; });\nclass ViewportComponent {\n    constructor(el) {\n        this.el = el;\n    }\n\n    render({foods, animals}) {\n        const frame = this._prepareFrame();\n\n        for (const food of foods) {\n            this._renderFood(frame, food);\n        }\n\n        for (const animal of animals) {\n            this._renderAnimal(frame, animal);\n        }\n    }\n\n    _prepareFrame() {\n        const ctxt = this.el.getContext('2d');\n\n        const rect = {\n            width: window.innerWidth - 500, // TODO hardcoded\n            height: window.innerHeight - 50, // TODO hardcoded\n        };\n\n        const dpr = window.devicePixelRatio || 1;\n        const size = Math.min(rect.width, rect.height);\n\n        this.el.width = size * dpr;\n        this.el.height = size * dpr;\n        this.el.style.width = size + 'px';\n        this.el.style.height = size + 'px';\n\n        ctxt.scale(dpr, dpr);\n\n        return {ctxt, size};\n    }\n\n    _renderFood({ctxt, size}, {position}) {\n        const x = position.x * size;\n        const y = position.y * size;\n\n        ctxt.beginPath();\n        ctxt.arc(x, y, 3, 0, 2.0 * Math.PI);\n        ctxt.fillStyle = '#00ff66';\n        ctxt.fill();\n    }\n\n    _renderAnimal({ctxt, size}, {position, rotation, eyeCells}) {\n        const FOV = 1.25 * Math.PI; // TODO hardcoded\n\n        const x = position.x * size;\n        const y = position.y * size;\n        const r = Math.PI - rotation;\n\n        ctxt.beginPath();\n        ctxt.moveTo(x, y);\n        ctxt.lineTo(x + Math.sin(r - 0.4) * 12.0, y + Math.cos(r - 0.4) * 12.0);\n        ctxt.lineTo(x + Math.sin(r + 0.4) * 12.0, y + Math.cos(r + 0.4) * 12.0);\n        ctxt.lineTo(x, y);\n        ctxt.fillStyle = 'white';\n        ctxt.fill();\n\n        const fovPerCell = FOV / eyeCells.length;\n\n        for (let eyeCellId = 0; eyeCellId < eyeCells.length; eyeCellId += 1) {\n            const angleFrom = (rotation + eyeCellId * fovPerCell - fovPerCell / 2.0) % (2.0 * Math.PI);\n            const angleTo = (angleFrom + fovPerCell) % (2.0 * Math.PI);\n            const energy = eyeCells[eyeCellId];\n\n            ctxt.beginPath();\n            ctxt.arc(x, y, 15, angleFrom, angleTo);\n            ctxt.strokeStyle = `rgba(000, 255, 102, ${energy})`;\n            ctxt.stroke();\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./app/components/viewport.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);