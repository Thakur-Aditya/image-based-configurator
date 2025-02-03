"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ImageSequenceViewer.tsx":
/*!************************************************!*\
  !*** ./src/components/ImageSequenceViewer.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ImageSequenceViewer = (param)=>{\n    let { images, width = 500, height = 500 } = param;\n    _s();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startXRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseDown = (e)=>{\n        if (containerRef.current) {\n            startXRef.current = e.clientX;\n        }\n    };\n    const handleMouseMove = (e)=>{\n        if (startXRef.current !== null && containerRef.current) {\n            const deltaX = e.clientX - startXRef.current;\n            // Calculate image index based on mouse movement with slower sensitivity\n            const pixelsPerImage = 10; // Number of pixels needed to move for one image change\n            const indexDelta = Math.floor(Math.abs(deltaX) / pixelsPerImage);\n            if (indexDelta > 0) {\n                // Calculate new index with proper wrapping\n                let newIndex = currentImageIndex + (deltaX > 0 ? 1 : -1);\n                // Ensure index stays within bounds\n                if (newIndex >= images.length) {\n                    newIndex = 0;\n                } else if (newIndex < 0) {\n                    newIndex = images.length - 1;\n                }\n                setCurrentImageIndex(newIndex);\n                startXRef.current = e.clientX; // Reset the start position\n            }\n        }\n    };\n    const handleMouseUp = ()=>{\n        startXRef.current = null;\n    };\n    // Preload images for smooth transitions\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ImageSequenceViewer.useEffect\": ()=>{\n            images.forEach({\n                \"ImageSequenceViewer.useEffect\": (imageUrl)=>{\n                    const img = new Image();\n                    img.src = \"http://localhost:3001\".concat(imageUrl);\n                }\n            }[\"ImageSequenceViewer.useEffect\"]);\n        }\n    }[\"ImageSequenceViewer.useEffect\"], [\n        images\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        onMouseDown: handleMouseDown,\n        onMouseMove: handleMouseMove,\n        onMouseUp: handleMouseUp,\n        onMouseLeave: handleMouseUp,\n        className: \"relative cursor-grab active:cursor-grabbing select-none\",\n        style: {\n            width,\n            height\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-full\",\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"http://localhost:3001\".concat(image),\n                        alt: \"Sequence image \".concat(index + 1),\n                        className: \"absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out\\n              \".concat(index === currentImageIndex ? \"opacity-100\" : \"opacity-0\"),\n                        draggable: false\n                    }, image, false, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded\",\n                children: [\n                    currentImageIndex + 1,\n                    \" / \",\n                    images.length\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageSequenceViewer, \"TMlttuRy6ZsA2gXIUqmLnG1ORfE=\");\n_c = ImageSequenceViewer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSequenceViewer);\nvar _c;\n$RefreshReg$(_c, \"ImageSequenceViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlU2VxdWVuY2VWaWV3ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUyRDtBQVEzRCxNQUFNSSxzQkFBMEQ7UUFBQyxFQUMvREMsTUFBTSxFQUNOQyxRQUFRLEdBQUcsRUFDWEMsU0FBUyxHQUFHLEVBQ2I7O0lBQ0MsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNUyxlQUFlUiw2Q0FBTUEsQ0FBaUI7SUFDNUMsTUFBTVMsWUFBWVQsNkNBQU1BLENBQWdCO0lBRXhDLE1BQU1VLGtCQUFrQixDQUFDQztRQUN2QixJQUFJSCxhQUFhSSxPQUFPLEVBQUU7WUFDeEJILFVBQVVHLE9BQU8sR0FBR0QsRUFBRUUsT0FBTztRQUMvQjtJQUNGO0lBRUEsTUFBTUMsa0JBQWtCLENBQUNIO1FBQ3ZCLElBQUlGLFVBQVVHLE9BQU8sS0FBSyxRQUFRSixhQUFhSSxPQUFPLEVBQUU7WUFDdEQsTUFBTUcsU0FBU0osRUFBRUUsT0FBTyxHQUFHSixVQUFVRyxPQUFPO1lBRTVDLHdFQUF3RTtZQUN4RSxNQUFNSSxpQkFBaUIsSUFBSSx1REFBdUQ7WUFDbEYsTUFBTUMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxHQUFHLENBQUNMLFVBQVVDO1lBRWpELElBQUlDLGFBQWEsR0FBRztnQkFDbEIsMkNBQTJDO2dCQUMzQyxJQUFJSSxXQUFXZixvQkFBcUJTLENBQUFBLFNBQVMsSUFBSSxJQUFJLENBQUM7Z0JBRXRELG1DQUFtQztnQkFDbkMsSUFBSU0sWUFBWWxCLE9BQU9tQixNQUFNLEVBQUU7b0JBQzdCRCxXQUFXO2dCQUNiLE9BQU8sSUFBSUEsV0FBVyxHQUFHO29CQUN2QkEsV0FBV2xCLE9BQU9tQixNQUFNLEdBQUc7Z0JBQzdCO2dCQUVBZixxQkFBcUJjO2dCQUNyQlosVUFBVUcsT0FBTyxHQUFHRCxFQUFFRSxPQUFPLEVBQUUsMkJBQTJCO1lBQzVEO1FBQ0Y7SUFDRjtJQUVBLE1BQU1VLGdCQUFnQjtRQUNwQmQsVUFBVUcsT0FBTyxHQUFHO0lBQ3RCO0lBRUEsd0NBQXdDO0lBQ3hDWCxnREFBU0E7eUNBQUM7WUFDUkUsT0FBT3FCLE9BQU87aURBQUMsQ0FBQ0M7b0JBQ2QsTUFBTUMsTUFBTSxJQUFJQztvQkFDaEJELElBQUlFLEdBQUcsR0FBRyx3QkFBaUMsT0FBVEg7Z0JBQ3BDOztRQUNGO3dDQUFHO1FBQUN0QjtLQUFPO0lBRVgscUJBQ0UsOERBQUMwQjtRQUNDQyxLQUFLdEI7UUFDTHVCLGFBQWFyQjtRQUNic0IsYUFBYWxCO1FBQ2JtQixXQUFXVjtRQUNYVyxjQUFjWDtRQUNkWSxXQUFVO1FBQ1ZDLE9BQU87WUFBRWhDO1lBQU9DO1FBQU87OzBCQUV2Qiw4REFBQ3dCO2dCQUFJTSxXQUFVOzBCQUNaaEMsT0FBT2tDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNiO3dCQUVDRSxLQUFLLHdCQUE4QixPQUFOVTt3QkFDN0JFLEtBQUssa0JBQTRCLE9BQVZELFFBQVE7d0JBQy9CSixXQUFXLGlIQUNtRCxPQUExREksVUFBVWpDLG9CQUFvQixnQkFBZ0I7d0JBQ2xEbUMsV0FBVzt1QkFMTkg7Ozs7Ozs7Ozs7MEJBU1gsOERBQUNUO2dCQUFJTSxXQUFVOztvQkFDWjdCLG9CQUFvQjtvQkFBRTtvQkFBSUgsT0FBT21CLE1BQU07Ozs7Ozs7Ozs7Ozs7QUFJaEQ7R0EvRU1wQjtLQUFBQTtBQWlGTixpRUFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvdGhha3VyYWRpdHlhL0Rlc2t0b3AvQ0cgVml6IHN0dWRpb3MvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvSW1hZ2VTZXF1ZW5jZVZpZXdlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEltYWdlU2VxdWVuY2VWaWV3ZXJQcm9wcyB7XG4gIGltYWdlczogc3RyaW5nW107IC8vIEFycmF5IG9mIGltYWdlIFVSTHNcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuY29uc3QgSW1hZ2VTZXF1ZW5jZVZpZXdlcjogUmVhY3QuRkM8SW1hZ2VTZXF1ZW5jZVZpZXdlclByb3BzPiA9ICh7XG4gIGltYWdlcyxcbiAgd2lkdGggPSA1MDAsXG4gIGhlaWdodCA9IDUwMCxcbn0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbWFnZUluZGV4LCBzZXRDdXJyZW50SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc3RhcnRYUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICBzdGFydFhSZWYuY3VycmVudCA9IGUuY2xpZW50WDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoc3RhcnRYUmVmLmN1cnJlbnQgIT09IG51bGwgJiYgY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGRlbHRhWCA9IGUuY2xpZW50WCAtIHN0YXJ0WFJlZi5jdXJyZW50O1xuXG4gICAgICAvLyBDYWxjdWxhdGUgaW1hZ2UgaW5kZXggYmFzZWQgb24gbW91c2UgbW92ZW1lbnQgd2l0aCBzbG93ZXIgc2Vuc2l0aXZpdHlcbiAgICAgIGNvbnN0IHBpeGVsc1BlckltYWdlID0gMTA7IC8vIE51bWJlciBvZiBwaXhlbHMgbmVlZGVkIHRvIG1vdmUgZm9yIG9uZSBpbWFnZSBjaGFuZ2VcbiAgICAgIGNvbnN0IGluZGV4RGVsdGEgPSBNYXRoLmZsb29yKE1hdGguYWJzKGRlbHRhWCkgLyBwaXhlbHNQZXJJbWFnZSk7XG5cbiAgICAgIGlmIChpbmRleERlbHRhID4gMCkge1xuICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IGluZGV4IHdpdGggcHJvcGVyIHdyYXBwaW5nXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGN1cnJlbnRJbWFnZUluZGV4ICsgKGRlbHRhWCA+IDAgPyAxIDogLTEpO1xuXG4gICAgICAgIC8vIEVuc3VyZSBpbmRleCBzdGF5cyB3aXRoaW4gYm91bmRzXG4gICAgICAgIGlmIChuZXdJbmRleCA+PSBpbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICAgIG5ld0luZGV4ID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleChuZXdJbmRleCk7XG4gICAgICAgIHN0YXJ0WFJlZi5jdXJyZW50ID0gZS5jbGllbnRYOyAvLyBSZXNldCB0aGUgc3RhcnQgcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICBzdGFydFhSZWYuY3VycmVudCA9IG51bGw7XG4gIH07XG5cbiAgLy8gUHJlbG9hZCBpbWFnZXMgZm9yIHNtb290aCB0cmFuc2l0aW9uc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZVVybCkgPT4ge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSR7aW1hZ2VVcmx9YDtcbiAgICB9KTtcbiAgfSwgW2ltYWdlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VVcH1cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1ncmFiIGFjdGl2ZTpjdXJzb3ItZ3JhYmJpbmcgc2VsZWN0LW5vbmVcIlxuICAgICAgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAga2V5PXtpbWFnZX1cbiAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSR7aW1hZ2V9YH1cbiAgICAgICAgICAgIGFsdD17YFNlcXVlbmNlIGltYWdlICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBvYmplY3QtY29udGFpbiB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XG4gICAgICAgICAgICAgICR7aW5kZXggPT09IGN1cnJlbnRJbWFnZUluZGV4ID8gXCJvcGFjaXR5LTEwMFwiIDogXCJvcGFjaXR5LTBcIn1gfVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMiByaWdodC0yIGJnLWJsYWNrLzUwIHRleHQtd2hpdGUgcHgtMiBweS0xIHJvdW5kZWRcIj5cbiAgICAgICAge2N1cnJlbnRJbWFnZUluZGV4ICsgMX0gLyB7aW1hZ2VzLmxlbmd0aH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTZXF1ZW5jZVZpZXdlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiSW1hZ2VTZXF1ZW5jZVZpZXdlciIsImltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsImNvbnRhaW5lclJlZiIsInN0YXJ0WFJlZiIsImhhbmRsZU1vdXNlRG93biIsImUiLCJjdXJyZW50IiwiY2xpZW50WCIsImhhbmRsZU1vdXNlTW92ZSIsImRlbHRhWCIsInBpeGVsc1BlckltYWdlIiwiaW5kZXhEZWx0YSIsIk1hdGgiLCJmbG9vciIsImFicyIsIm5ld0luZGV4IiwibGVuZ3RoIiwiaGFuZGxlTW91c2VVcCIsImZvckVhY2giLCJpbWFnZVVybCIsImltZyIsIkltYWdlIiwic3JjIiwiZGl2IiwicmVmIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uTW91c2VMZWF2ZSIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImFsdCIsImRyYWdnYWJsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageSequenceViewer.tsx\n"));

/***/ })

});