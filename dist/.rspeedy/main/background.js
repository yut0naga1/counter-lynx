(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("background.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
fetch = fetch || lynx.fetch;
requestAnimationFrame = requestAnimationFrame || lynx.requestAnimationFrame;
cancelAnimationFrame = cancelAnimationFrame || lynx.cancelAnimationFrame;

// This needs to be wrapped in an IIFE because it needs to be isolated against Lynx injected variables.
(() => {
// lynx chunks entries
if (!lynx.__chunk_entries__) {
  // Initialize once
  lynx.__chunk_entries__ = {};
}
if (!lynx.__chunk_entries__["main"]) {
  lynx.__chunk_entries__["main"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main"];
}

"use strict";
var __webpack_modules__ = ({
"(react:background)/./src/styles.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1756753441039
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),
"(react:background)/./src/App.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (App)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/styles.css");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");



const __snapshot_c0e9e_cb25b_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_c0e9e_cb25b_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "screen");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Lynx Counter");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "card");
    __AppendElement(el, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "label");
    __AppendElement(el3, el4);
    const el5 = __CreateRawText("Count");
    __AppendElement(el4, el5);
    const el6 = __CreateText(pageId);
    __SetClasses(el6, "value");
    __AppendElement(el3, el6);
    const el7 = __CreateView(pageId);
    __SetClasses(el7, "row");
    __AppendElement(el3, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "btn");
    __AppendElement(el7, el8);
    const el9 = __CreateText(pageId);
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("+1 / \u9577\u62BC\u3057+10");
    __AppendElement(el9, el10);
    const el11 = __CreateView(pageId);
    __SetClasses(el11, "btn");
    __AppendElement(el7, el11);
    const el12 = __CreateText(pageId);
    __AppendElement(el11, el12);
    const el13 = __CreateRawText("-1 / \u30C0\u30D6\u30EB\u30BF\u30C3\u30D7-10");
    __AppendElement(el12, el13);
    const el14 = __CreateView(pageId);
    __SetClasses(el14, "btn secondary");
    __AppendElement(el7, el14);
    const el15 = __CreateText(pageId);
    __AppendElement(el14, el15);
    const el16 = __CreateRawText("Reset");
    __AppendElement(el15, el16);
    const el17 = __CreateText(pageId);
    __SetClasses(el17, "hint");
    __AppendElement(el, el17);
    const el18 = __CreateText(pageId);
    __SetClasses(el18, "code");
    __AppendElement(el17, el18);
    const el19 = __CreateRawText("bindtap");
    __AppendElement(el18, el19);
    const el20 = __CreateRawText(" \u306F\u30BF\u30C3\u30D7\u3001");
    __AppendElement(el17, el20);
    const el21 = __CreateText(pageId);
    __SetClasses(el21, "code");
    __AppendElement(el17, el21);
    const el22 = __CreateRawText("bindlongpress");
    __AppendElement(el21, el22);
    const el23 = __CreateRawText(" \u306F\u9577\u62BC\u3057\u306B\u4F7F\u3048\u308B\u307F\u305F\u3044\u3067\u3059\u306D\u3002");
    __AppendElement(el17, el23);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20,
        el21,
        el22,
        el23
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 8, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 8, "bindEvent", "longpress", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 11, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 14, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        6
    ]
], undefined, globDynamicComponentEntry, null);
function App() {
    const [count, setCount] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // ダブルタップ判定
    const lastTapTimeStampRef = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const singleTapTimeoutIdRef = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const DOUBLE_TAP_GAP = 250;
    // -1 ボタンのtapハンドラ
    const handleMinusTap = ()=>{
        const now = Date.now();
        const gap = now - lastTapTimeStampRef.current;
        if (gap < DOUBLE_TAP_GAP) {
            // ダブルタップと判定する
            if (singleTapTimeoutIdRef.current) {
                // ダブルタップが成立したらシングルタップ予約をキャンセル
                clearTimeout(singleTapTimeoutIdRef.current);
                singleTapTimeoutIdRef.current = null;
            }
            lastTapTimeStampRef.current = 0;
            setCount((c)=>c - 10);
            return;
        }
        // シングルタップかもしれない場合は、少し待って確定する。
        lastTapTimeStampRef.current = now;
        singleTapTimeoutIdRef.current = setTimeout(()=>{
            setCount((c)=>c - 1);
            lastTapTimeStampRef.current = 0;
            singleTapTimeoutIdRef.current = null;
        }, DOUBLE_TAP_GAP);
    };
    // + ボタン: タップで +1
    const handlePlusTap = ()=>{
        setCount((c)=>c + 1);
    };
    // + ボタン: 長押しで +10
    const handlePlusLongPress = ()=>{
        setCount((c)=>c + 10);
    };
    // Reset ボタン
    const handleResetTap = ()=>{
        setCount(0);
    };
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_c0e9e_cb25b_1, {
        values: [
            handlePlusTap,
            handlePlusLongPress,
            handleMinusTap,
            handleResetTap
        ],
        children: count
    }, void 0, false, {
        fileName: "/Users/yuto/counter-lynx/src/App.jsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/index.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_preact_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/react-lynx/index.js");
/* ESM import */var _lynx_js_preact_devtools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lynx_js_preact_devtools__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _lynx_js_react_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/debug/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _App_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./src/App.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");





_lynx_js_react__WEBPACK_IMPORTED_MODULE_3__.root.render(/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: "/Users/yuto/counter-lynx/src/index.jsx",
    lineNumber: 7,
    columnNumber: 13
}, undefined));
if (true) module.hot.accept();


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs": (function (module, __unused_webpack_exports, __webpack_require__) {
/**
 * @param {Function} fn
 * @param {number} time
 * @returns {function(): void}
 */ function debounce(fn, time) {
    let timeout = 0;
    return function debounced(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn.apply(this, args), time);
    };
}
function updateStyle(cssId = 0) {
    const cssHotUpdateList = __webpack_require__.cssHotUpdateList;
    if (!cssHotUpdateList) throw new Error('cssHotUpdateList is not found');
    for (const [chunkName, cssHotUpdatePath] of cssHotUpdateList)lynx.requireModuleAsync(// the LynxGroup level cache here.
    // Temporarily using `Date.now` to avoid being cached.
    __webpack_require__.p + cssHotUpdatePath, (err, ret)=>{
        if (err) throw new Error(`Failed to load CSS update file: ${cssHotUpdatePath}`);
        if (ret.content) lynx.getCoreContext().dispatchEvent({
            type: 'lynx.hmr.css',
            data: {
                cssId,
                content: ret.content,
                deps: ret.deps,
                entry: lynx.__chunk_entries__[chunkName]
            }
        });
    });
}
/**
 * @param {string | number} moduleId
 * @param {unknown} options
 * @param {number=} cssId
 * @returns {() => void}
 */ module.exports = function update(moduleId, options, cssId) {
    // TODO: should not pass cssId === ''
    if (!cssId) cssId = 0;
    function update() {
        updateStyle(cssId);
    }
    return debounce(update, 50);
};


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/bindings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bindingsV10: () => (bindingsV10),
  createSuspenseState: () => (createSuspenseState),
  findRoot: () => (findRoot),
  getActualChildren: () => (getActualChildren),
  getComponent: () => (getComponent),
  getComponentHooks: () => (getComponentHooks),
  getDisplayName: () => (getDisplayName),
  getDom: () => (getDom),
  getHookState: () => (getHookState),
  getInstance: () => (getInstance),
  getNextState: () => (getNextState),
  getPendingHookValue: () => (getPendingHookValue),
  getStatefulHookValue: () => (getStatefulHookValue),
  getStatefulHooks: () => (getStatefulHooks),
  getSuspendedState: () => (getSuspendedState),
  getVNodeParent: () => (getVNodeParent),
  hasDom: () => (hasDom),
  isComponent: () => (isComponent),
  isElement: () => (isElement),
  isPortal: () => (isPortal),
  isRoot: () => (isRoot),
  isSuspenseVNode: () => (isSuspenseVNode),
  isTextVNode: () => (isTextVNode),
  isUseReducerOrState: () => (isUseReducerOrState),
  isVNode: () => (isVNode),
  setNextState: () => (setNextState),
  setPendingHookValue: () => (setPendingHookValue)
});
/* ESM import */var _shared_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/hooks.js");
/* ESM import */var _renderReason__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/renderReason.js");


// Mangle accessors
/**
 * Get the direct parent of a `vnode`
 */ function getVNodeParent(vnode) {
    return vnode._parent || vnode.__ || // Older Preact X versions used `__p`
    vnode.__p || null;
}
/**
 * Check if a `vnode` is the root of a tree
 */ function isRoot(vnode, config) {
    return getVNodeParent(vnode) == null && vnode.type === config.Fragment;
}
/**
 * Return the component instance of a `vnode` or `hookState`
 */ function getComponent(node) {
    return node._component || node.__c || null;
}
/**
 * Get a `vnode`'s _dom reference.
 */ function getDom(vnode) {
    return vnode._dom || vnode.__e || null;
}
function hasDom(x) {
    return x != null && ("_dom" in x || "__e" in x);
}
/**
 * Check if a `vnode` represents a `Suspense` component
 */ function isSuspenseVNode(vnode) {
    const c = getComponent(vnode);
    // FYI: Mangling of `_childDidSuspend` is not stable in Preact < 10.3.0
    return c != null && !!(c._childDidSuspend || c.__c);
}
/**
 * Get the internal hooks state of a component
 */ function getComponentHooks(vnode) {
    const c = getComponent(vnode);
    if (!c) return null;
    return c.__hooks || c.__H || null;
}
function getStatefulHooks(vnode) {
    const hooks = getComponentHooks(vnode);
    return hooks !== null ? hooks._list || hooks.__ || hooks.i || // Preact 10.1.0
    null : null;
}
function isUseReducerOrState(hookState) {
    return !!hookState._component || !!hookState.__c;
}
function getStatefulHookValue(hookState) {
    if (hookState !== null) {
        const value = hookState._value || hookState.__ || null;
        if (value !== null && Array.isArray(value)) return value[0];
    }
    return null;
}
function getPendingHookValue(state) {
    // Preact >= 10.8.1
    if (state.__pendingValue !== undefined) return state.__pendingValue;
    else if (state.__V !== undefined) return state.__V;
    else if (state.o !== undefined) return state.o;
    return undefined;
}
function setPendingHookValue(state, value) {
    // Preact >= 10.8.1
    if ("__pendingValue" in state) state.__pendingValue = value;
    else if ("__V" in state) state.__V = value;
    else if ("o" in state) state.o = value;
}
function getHookState(vnode, index, type) {
    const c = getComponent(vnode);
    if (c === null) return null;
    const list = getStatefulHooks(vnode);
    if (list && list[index]) {
        // useContext
        if (type === _shared_hooks__WEBPACK_IMPORTED_MODULE_0__.HookType.useContext) {
            const context = list[index]._context || list[index].__c || list[index].c;
            const provider = c.context[context._id] || c.context[context.__c];
            return provider ? provider.props.value : context._defaultValue || context.__;
        }
        let value;
        const state = list[index];
        // Prefer current value before pending
        if ("_value" in state) value = state._value;
        else if ("__" in state) value = state.__;
        else value = getPendingHookValue(list[index]);
        if (type === _shared_hooks__WEBPACK_IMPORTED_MODULE_0__.HookType.useRef) return value.current;
        else if (type === _shared_hooks__WEBPACK_IMPORTED_MODULE_0__.HookType.useErrorBoundary && !value) return "__preact_empty__";
        return value;
    }
    return [];
}
/**
 * Get the diffed children of a `vnode`
 */ function getActualChildren(vnode) {
    return vnode._children || vnode.__k || [];
}
// End Mangle accessors
/**
 * Get the root of a `vnode`
 */ function findRoot(vnode, config) {
    let next = vnode;
    while((next = getVNodeParent(next)) != null){
        if (isRoot(next, config)) return next;
    }
    return vnode;
}
/**
 * Get human readable name of the component/dom element
 */ function getDisplayName(vnode, config) {
    const { type } = vnode;
    if (type === config.Fragment) return "Fragment";
    else if (typeof type === "function") {
        // Context is a special case :((
        // See: https://reactjs.org/docs/context.html#contextdisplayname
        const c = getComponent(vnode);
        if (c !== null) {
            // Consumer
            if (c.constructor) {
                const ct = c.constructor.contextType;
                if (ct && ct.Consumer === type) {
                    const name = ct.displayName ? ct.displayName + "." : "";
                    return `${name}Consumer`;
                }
            }
            // Provider
            if (c.sub) {
                const ctx = type._contextRef || ("__l" in type ? type.__l : type.__);
                if (ctx) {
                    const name = ctx.displayName ? ctx.displayName + "." : "";
                    return `${name}Provider`;
                }
            }
            if (isSuspenseVNode(vnode)) return "Suspense";
            // Preact 10.4.1 uses a raw Component as a child for Suspense
            // by doing `createElement(Component, ...);`
            if (type === config.Component) return "Component";
        }
        return type.displayName || type.name || "Anonymous";
    } else if (typeof type === "string") return type;
    return "#text";
}
function getNextState(c) {
    return c._nextState || c.__s || null;
}
function setNextState(c, value) {
    return c._nextState = c.__s = value;
}
function getSuspenseStateKey(c) {
    if ("_suspended" in c.state) return "_suspended";
    else if ("__e" in c.state) return "__e";
    // This is a bit whacky, but property name mangling is unsafe in
    // Preact <10.4.9
    const keys = Object.keys(c.state);
    if (keys.length > 0) return keys[0];
    return null;
}
function getSuspendedState(vnode) {
    const c = getComponent(vnode);
    if (c) {
        const key = getSuspenseStateKey(c);
        if (key) return !!c._nextState[key];
    }
    return null;
}
function isTextVNode(vnode) {
    return vnode !== null && vnode.type === null;
}
function createSuspenseState(vnode, suspended) {
    const c = getComponent(vnode);
    const key = getSuspenseStateKey(c);
    if (c && key) return {
        [key]: suspended
    };
    return {};
}
function getInstance(vnode) {
    // For components we use the instance to check refs, otherwise
    // we'll use a dom node
    if (typeof vnode.type === "function") return getComponent(vnode);
    return getDom(vnode);
}
function isComponent(vnode) {
    return vnode !== null && typeof vnode.type === "function";
}
function isVNode(x) {
    return x != null && x.type !== undefined && hasDom(x);
}
function isElement(vnode) {
    return typeof vnode.type === "string";
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isPortal(vnode) {
    // TODO: Find a way to detect portals
    return false;
}
const bindingsV10 = {
    isRoot,
    getDisplayName,
    getPropsVNodeDisplayName: getDisplayName,
    getActualChildren,
    getDom,
    isTextVNode,
    getInstance,
    createSuspenseState,
    getComponent,
    getComponentHooks,
    getHookState,
    getPendingHookValue,
    setPendingHookValue,
    getVNodeParent,
    isComponent,
    isElement,
    isSuspenseVNode,
    getSuspendedState,
    isVNode,
    setNextState,
    isPortal,
    getStatefulHookValue,
    getStatefulHooks,
    isUseReducerOrState,
    getRenderReasonPost: _renderReason__WEBPACK_IMPORTED_MODULE_1__.getRenderReasonPost
};


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/log.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  logVNode: () => (logVNode)
});
/* ESM import */var _bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/bindings.js");
/* ESM import */var _shared_idMapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/idMapper.js");


/**
 * Pretty print a `VNode` to the browser console. This can be triggered
 * by clicking a button in the devtools ui.
 */ function logVNode(ids, config, id, children) {
    const vnode = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_1__.getVNodeById)(ids, id);
    if (vnode == null) {
        // eslint-disable-next-line no-console
        console.warn(`Could not find vnode with id ${id}`);
        return;
    }
    const display = (0,_bindings__WEBPACK_IMPORTED_MODULE_0__.getDisplayName)(vnode, config);
    const name = display === "#text" ? display : `<${display || "Component"} />`;
    /* eslint-disable no-console */ console.group(`LOG %c${name}`, "color: #ea88fd; font-weight: normal");
    console.log("props:", vnode.props);
    const c = (0,_bindings__WEBPACK_IMPORTED_MODULE_0__.getComponent)(vnode);
    if (c != null) console.log("state:", c.state);
    console.log("vnode:", vnode);
    console.log("devtools id:", id);
    console.log("devtools children:", children);
    console.groupEnd();
/* eslint-enable no-console */ }


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/options.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupOptionsV10: () => (setupOptionsV10)
});
/* ESM import */var _marks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/marks.js");
/* ESM import */var _bindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/bindings.js");
/* ESM import */var _shared_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/hooks.js");
/* ESM import */var _shared_timings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/timings.js");




/**
 * Inject tracking into setState
 */ function trackPrevState(Ctor) {
    const setState = Ctor.prototype.setState;
    Ctor.prototype.setState = function(update, callback) {
        // Duplicated in setState() but doesn't matter due to the guard.
        const nextState = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getNextState)(this);
        const s = nextState !== this.state && nextState || (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.setNextState)(this, Object.assign({}, this.state));
        // Needed in order to check if state has changed after the tree has been committed:
        this._prevState = Object.assign({}, s);
        return setState.call(this, update, callback);
    };
}
function setupOptionsV10(options, renderer, roots, config) {
    // Track component state. Only supported in Preact > 10.4.0
    if (config.Component) trackPrevState(config.Component);
    let timings = (0,_shared_timings__WEBPACK_IMPORTED_MODULE_3__.createVNodeTimings)();
    const owners = new Map();
    let ownerStack = [];
    const o = options;
    // Store (possible) previous hooks so that we don't overwrite them
    const prevVNodeHook = options.vnode;
    const prevCommitRoot = o._commit || o.__c;
    const prevRoot = o._root || o.__;
    const prevBeforeUnmount = options.unmount;
    const prevBeforeDiff = o._diff || o.__b;
    const prevRender = o._render || o.__r;
    const prevAfterDiff = options.diffed;
    let prevHook = o._hook || o.__h;
    let prevUseDebugValue = options.useDebugValue;
    // @ts-ignore
    let prevHookName = options.useDebugName;
    const skipEffects = o._skipEffects || o.__s;
    // Make sure that we are always the first `option._hook` to be called.
    // This is necessary to ensure that our callstack remains consistent.
    // Otherwise we'll end up with an unknown number of frames in-between
    // the called hook and `options._hook`. This will lead to wrongly
    // parsed hooks.
    setTimeout(()=>{
        prevHook = o._hook || o.__h;
        prevUseDebugValue = options.useDebugValue;
        // @ts-ignore
        prevHookName = options._addHookName || options.__a;
        o._hook = o.__h = (c, index, type)=>{
            if (type) (0,_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.addHookStack)(type);
            // Don't continue the chain while the devtools is inspecting hooks.
            // Otherwise the next hook will very likely throw as we're only
            // faking a render and not doing a proper one. #278
            if (!options._skipEffects && !options.__s) {
                if (prevHook) prevHook(c, index, type);
            }
        };
        options.useDebugValue = (value)=>{
            (0,_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.addHookStack)(_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.HookType.useDebugValue);
            (0,_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.addDebugValue)(value);
            if (prevUseDebugValue) prevUseDebugValue(value);
        };
        // @ts-ignore
        options._addHookName = options.__a = (name)=>{
            (0,_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.addHookName)(name);
            if (prevHookName) prevHookName(name);
        };
    }, 100);
    options.vnode = (vnode)=>{
        if (ownerStack.length > 0 && typeof vnode.type === "function" && vnode.type !== config.Fragment) owners.set(vnode, ownerStack[ownerStack.length - 1]);
        if (prevVNodeHook) prevVNodeHook(vnode);
    };
    o._diff = o.__b = (vnode)=>{
        if (typeof vnode.type === "function") {
            const name = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(vnode, config);
            (0,_marks__WEBPACK_IMPORTED_MODULE_0__.recordMark)(`${name}_diff`);
            const c = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getComponent)(vnode);
            const s = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getStatefulHooks)(vnode);
            if (s !== null && c !== null) {
                if (!c._oldHookValues) c._oldHookValues = new Array(s.length).fill(undefined);
                for(let i = 0; i < s.length; i++){
                    const value = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getStatefulHookValue)(s[i]);
                    c._oldHookValues[i] = value;
                }
            }
        }
        if (vnode.type !== null) timings.start.set(vnode, preactDevtoolsCtx.performance.now());
        if (prevBeforeDiff != null) prevBeforeDiff(vnode);
    };
    o._render = o.__r = (vnode, parent)=>{
        if (!skipEffects && typeof vnode.type === "function" && vnode.type !== config.Fragment) ownerStack.push(vnode);
        if (prevRender != null) prevRender(vnode, parent);
    };
    options.diffed = (vnode)=>{
        if (typeof vnode.type === "function") {
            if (vnode.type !== config.Fragment) ownerStack.pop();
            (0,_marks__WEBPACK_IMPORTED_MODULE_0__.endMark)((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(vnode, config));
        }
        if (vnode.type !== null) timings.end.set(vnode, preactDevtoolsCtx.performance.now());
        if (prevAfterDiff) prevAfterDiff(vnode);
    };
    const userRootToContainer = new Map();
    o._commit = o.__c = (vnode, queue)=>{
        if (prevCommitRoot) prevCommitRoot(vnode, queue);
        // These cases are already handled by `unmount`
        if (vnode == null) return;
        if ((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.isRoot)(vnode, config)) {
            const children = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getActualChildren)(vnode);
            if (children.length > 0) {
                const dom = userRootToContainer.get(children[0]);
                if (dom) roots.set(vnode, dom);
            }
        }
        const tmpTimings = timings;
        ownerStack = [];
        timings = (0,_shared_timings__WEBPACK_IMPORTED_MODULE_3__.createVNodeTimings)();
        renderer.onCommit(vnode, owners, tmpTimings, null);
    };
    o._root = o.__ = (vnode, parent)=>{
        if (parent === null) userRootToContainer.delete(vnode);
        else {
            // Some islands based frameworks use a virtual container node
            // instead of an actual DOM node.
            const treeParent = "Node" in globalThis && parent instanceof preactDevtoolsCtx.Node ? parent : parent.parentNode;
            userRootToContainer.set(vnode, treeParent);
        }
        if (prevRoot) prevRoot(vnode, parent);
    };
    options.unmount = (vnode)=>{
        if (prevBeforeUnmount) prevBeforeUnmount(vnode);
        if (vnode.type !== null) {
            timings.start.delete(vnode);
            timings.end.delete(vnode);
        }
        owners.delete(vnode);
        renderer.onUnmount(vnode);
    };
    // Teardown devtools options. Mainly used for testing
    return ()=>{
        options.unmount = prevBeforeUnmount;
        o._commit = o.__c = prevCommitRoot;
        options.diffed = prevAfterDiff;
        o._diff = o.__b = prevBeforeDiff;
        options.vnode = prevVNodeHook;
        o._hook = o.__h = prevHook;
        options.useDebugValue = prevUseDebugValue;
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/renderReason.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRenderReasonPost: () => (getRenderReasonPost)
});
/* ESM import */var _shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderReasons.js");

/**
 * Detect why a VNode updated.
 */ function getRenderReasonPost(ids, bindings, timings, old, next) {
    if (old === null) return next !== null ? (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(1 /* RenderReason.MOUNT */ , null) : null;
    else if (next === null) return null;
    else if (typeof old.type === "function" && old.type === next.type) {
        const c = bindings.getComponent(next);
        if (c !== null) {
            // Check hooks
            const hooks = bindings.getStatefulHooks(next);
            if (hooks !== null && Array.isArray(c._oldHookValues)) {
                const hooksChanged = [];
                for(let i = 0; i < hooks.length; i++)if (bindings.isUseReducerOrState(hooks[i]) && c._oldHookValues[i] !== bindings.getStatefulHookValue(hooks[i])) hooksChanged.push(String(i));
                if (hooksChanged.length > 0) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(5 /* RenderReason.HOOKS_CHANGED */ , hooksChanged);
            }
            // Check state
            const prevState = c._prevState;
            if (prevState != null && prevState !== c.state) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(4 /* RenderReason.STATE_CHANGED */ , (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.getChangedKeys)(prevState, c.state));
            else if (prevState === undefined && c.state !== undefined && Object.keys(c.state).length > 0) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(4 /* RenderReason.STATE_CHANGED */ , null);
        }
    }
    // Check props
    if (old.props !== next.props) {
        const propsChanged = (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.getChangedKeys)(old.props, next.props);
        if (propsChanged.length > 0) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(3 /* RenderReason.PROPS_CHANGED */ , propsChanged);
    }
    const parent = bindings.getVNodeParent(next);
    if (parent != null && (timings.start.get(next) || 0) >= (timings.start.get(parent) || 0) && (timings.end.get(next) || 0) <= (timings.end.get(parent) || 0)) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(2 /* RenderReason.PARENT_UPDATE */ , null);
    return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(6 /* RenderReason.FORCE_UPDATE */ , null);
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/11/bindings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TYPE_CLASS: () => (TYPE_CLASS),
  TYPE_COMPONENT: () => (TYPE_COMPONENT),
  TYPE_DOM: () => (TYPE_DOM),
  TYPE_ELEMENT: () => (TYPE_ELEMENT),
  TYPE_FUNCTION: () => (TYPE_FUNCTION),
  TYPE_ROOT: () => (TYPE_ROOT),
  TYPE_TEXT: () => (TYPE_TEXT),
  bindingsV11: () => (bindingsV11),
  createSuspenseState: () => (createSuspenseState),
  getActualChildren: () => (getActualChildren),
  getComponent: () => (getComponent),
  getComponentHooks: () => (getComponentHooks),
  getDisplayName: () => (getDisplayName),
  getDom: () => (getDom),
  getHookState: () => (getHookState),
  getNextState: () => (getNextState),
  getPendingHookValue: () => (getPendingHookValue),
  getPropsVNodeDisplayName: () => (getPropsVNodeDisplayName),
  getStatefulHookValue: () => (getStatefulHookValue),
  getStatefulHooks: () => (getStatefulHooks),
  getSuspendedState: () => (getSuspendedState),
  getSuspenseStateKey: () => (getSuspenseStateKey),
  getVNodeId: () => (getVNodeId),
  getVNodeParent: () => (getVNodeParent),
  isComponent: () => (isComponent),
  isElement: () => (isElement),
  isInternal: () => (isInternal),
  isPortal: () => (isPortal),
  isRoot: () => (isRoot),
  isSuspenseVNode: () => (isSuspenseVNode),
  isTextInternal: () => (isTextInternal),
  isUseReducerOrState: () => (isUseReducerOrState),
  setNextState: () => (setNextState),
  setPendingHookValue: () => (setPendingHookValue)
});
/* ESM import */var _shared_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/hooks.js");

// Internal.flags bitfield constants
const TYPE_TEXT = 1;
const TYPE_ELEMENT = 2;
const TYPE_CLASS = 4;
const TYPE_FUNCTION = 8;
/** Signals this internal has a _parentDom prop that should change the parent
 * DOM node of it's children */ const TYPE_ROOT = 16;
/** Any type of internal representing DOM */ const TYPE_DOM = TYPE_TEXT | TYPE_ELEMENT;
/** Any type of component */ const TYPE_COMPONENT = TYPE_CLASS | TYPE_FUNCTION | TYPE_ROOT;
function isComponent(internal) {
    return (internal.flags & TYPE_COMPONENT) > 0;
}
function isInternal(x) {
    return x !== null && typeof x === "object" && (typeof x.__v === "number" || typeof x._vnodeId === "number");
}
function isTextInternal(internal) {
    return (internal.flags & TYPE_TEXT) > 0;
}
function getComponentHooks(internal) {
    const data = internal.data;
    if (data == null) return null;
    return data.__hooks || data.__H || null;
}
function isSuspenseVNode(internal) {
    const c = getComponent(internal);
    // FYI: Mangling of `_childDidSuspend` is not stable in Preact < 10.3.0
    return c != null && !!(c._childDidSuspend || c.__c);
}
function getSuspenseStateKey(c) {
    if ("_suspended" in c.state) return "_suspended";
    else if ("__e" in c.state) return "__e";
    // This is a bit whacky, but property name mangling is unsafe in
    // Preact <10.4.9
    const keys = Object.keys(c.state);
    if (keys.length > 0) return keys[0];
    return null;
}
// Mangle accessors
// When serializing props we're dealing with vnodes instead of
// internal objects
function getPropsVNodeDisplayName(vnode, config) {
    const { type } = vnode;
    if (typeof type === "function") {
        if (type === config.Fragment) return "Fragment";
        // Context is a special case :((
        // See: https://reactjs.org/docs/context.html#contextdisplayname
        // Consumer
        const ct = type.contextType;
        if (ct && ct.Consumer === type && ct.displayName) return `${ct.displayName}.Consumer`;
        // Provider
        const ctx = type._contextRef || type.__;
        if (ctx && ctx.displayName) return `${ctx.displayName}.Provider`;
        if (type.prototype && (typeof type.prototype.__c === "function" || typeof type.prototype._childDidSuspend === "function")) return "Suspense";
        else if ("__P" in vnode.props || "_parentDom" in vnode.props) return "Portal";
        return type.displayName || type.name || "Anonymous";
    } else if (typeof type === "string") return vnode.type;
    return "#text";
}
function getDisplayName(internal, config) {
    const { flags, type } = internal;
    if (flags & TYPE_COMPONENT) {
        if (type === config.Fragment) return "Fragment";
        // Context is a special case :((
        // See: https://reactjs.org/docs/context.html#contextdisplayname
        // Consumer
        const ct = type.contextType;
        if (ct && ct.Consumer === type && ct.displayName) return `${ct.displayName}.Consumer`;
        // Provider
        const ctx = type._contextRef || type.__;
        if (ctx && ctx.displayName) return `${ctx.displayName}.Provider`;
        if (isSuspenseVNode(internal)) return "Suspense";
        else if (isPortal(internal)) return "Portal";
        return type.displayName || type.name || "Anonymous";
    } else if (flags & TYPE_ELEMENT) return internal.type;
    return "#text";
}
function getActualChildren(internal) {
    return internal._children || internal.__k || [];
}
function getComponent(node) {
    return node._component || node.__c || null;
}
function isElement(node) {
    return (node.flags & TYPE_ELEMENT) > 0;
}
function getNextState(c) {
    return c._nextState || c.__s || null;
}
function setNextState(c, value) {
    return c._nextState = c.__s = value;
}
function getDom(internal) {
    return internal._dom || internal.__e || null;
}
/**
 * Get the direct parent of a `vnode`
 */ function getVNodeParent(internal) {
    return internal._parent || internal.__ || null;
}
/**
 * Check if a `vnode` is the root of a tree
 */ function isRoot(internal, config) {
    return getVNodeParent(internal) == null && internal.type === config.Fragment;
}
function getStatefulHooks(internal) {
    const hooks = getComponentHooks(internal);
    return hooks !== null ? hooks._list || hooks.__ || null : null;
}
function isUseReducerOrState(hookState) {
    return !!hookState._internal || !!hookState.__i;
}
function getStatefulHookValue(hookState) {
    if (hookState !== null) {
        const value = hookState._value || hookState.__ || null;
        if (value !== null && Array.isArray(value)) return value[0];
    }
    return null;
}
function getHookState(internal, index, type) {
    const c = getComponent(internal);
    if (c === null) return [];
    const list = getStatefulHooks(internal);
    if (list && list[index]) {
        // useContext
        if (type === _shared_hooks__WEBPACK_IMPORTED_MODULE_0__.HookType.useContext) {
            const context = list[index]._context || list[index].__c || list[index].c;
            const provider = c.context[context._id] || c.context[context.__c];
            return provider ? provider.props.value : context._defaultValue || context.__;
        }
        const value = getPendingHookValue(list[index]);
        if (type === _shared_hooks__WEBPACK_IMPORTED_MODULE_0__.HookType.useRef) return value[0].current;
        else if (type === _shared_hooks__WEBPACK_IMPORTED_MODULE_0__.HookType.useErrorBoundary && !value) return "__preact_empty__";
        return value;
    }
    return [];
}
function getPendingHookValue(state) {
    return state._value !== undefined ? state._value : state.__;
}
function setPendingHookValue(state, value) {
    if ("_value" in state) state._value = value;
    else state.__ = value;
}
function createSuspenseState(vnode, suspended) {
    const c = getComponent(vnode);
    const key = getSuspenseStateKey(c);
    if (c && key) return {
        [key]: suspended
    };
    return {};
}
function getSuspendedState(internal) {
    const c = getComponent(internal);
    if (c) {
        const key = getSuspenseStateKey(c);
        if (key) return !!c._nextState[key];
    }
    return null;
}
const getInstance = (x)=>x;
function isPortal(internal) {
    return "__P" in internal.props || "_parentDom" in internal.props;
}
function getVNodeId(vnode) {
    return vnode._vnodeId || vnode.__v || 0;
}
const bindingsV11 = {
    isRoot,
    getDisplayName,
    getPropsVNodeDisplayName,
    getActualChildren,
    getDom,
    isTextVNode: isTextInternal,
    getInstance,
    createSuspenseState,
    getComponent,
    getComponentHooks,
    getHookState,
    getPendingHookValue,
    setPendingHookValue,
    getVNodeParent,
    isComponent,
    isElement,
    isSuspenseVNode,
    isVNode: isInternal,
    getSuspendedState,
    setNextState,
    isPortal,
    getStatefulHookValue,
    getStatefulHooks,
    isUseReducerOrState,
    getRenderReasonPost () {
        return null;
    }
};


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/11/options.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupOptionsV11: () => (setupOptionsV11)
});
/* ESM import */var _marks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/marks.js");
/* ESM import */var _bindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/11/bindings.js");
/* ESM import */var _shared_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/hooks.js");
/* ESM import */var _shared_timings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/timings.js");
/* ESM import */var _shared_renderReasons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderReasons.js");
/* ESM import */var _renderReason__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/11/renderReason.js");






/**
 * Inject tracking into setState
 */ function trackPrevState(Ctor) {
    const setState = Ctor.prototype.setState;
    Ctor.prototype.setState = function(update, callback) {
        // Duplicated in setState() but doesn't matter due to the guard.
        const nextState = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getNextState)(this);
        const s = nextState !== this.state && nextState || (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.setNextState)(this, Object.assign({}, this.state));
        // Needed in order to check if state has changed after the tree has been committed:
        this._prevState = Object.assign({}, s);
        return setState.call(this, update, callback);
    };
}
function getParentDom(internal) {
    var _internal_props, _internal_props1;
    return ((_internal_props = internal.props) === null || _internal_props === void 0 ? void 0 : _internal_props._parentDom) || ((_internal_props1 = internal.props) === null || _internal_props1 === void 0 ? void 0 : _internal_props1.__P) || null;
}
function setupOptionsV11(options, renderer, roots, config, profiler) {
    // Track component state. Only supported in Preact > 10.4.0
    if (config.Component) trackPrevState(config.Component);
    const timings = (0,_shared_timings__WEBPACK_IMPORTED_MODULE_3__.createVNodeTimings)();
    let renderReasons = new Map();
    let reasonTmpData = new Map();
    const vnodeIdToOwner = new Map();
    const owners = new Map();
    let ownerStack = [];
    const o = options;
    // Store (possible) previous hooks so that we don't overwrite them
    const prevVNodeHook = options.vnode;
    const prevInternalHook = options._internal || o.__i;
    const prevCommitRoot = o._commit || o.__c;
    const prevBeforeUnmount = options.unmount;
    const prevBeforeDiff = o._diff || o.__b;
    const prevRender = o._render || o.__r;
    const prevAfterDiff = options.diffed;
    let prevHook = o._hook || o.__h;
    let prevUseDebugValue = options.useDebugValue;
    // @ts-ignore
    let prevHookName = options.useDebugName;
    const skipEffects = o._skipEffects || o.__s;
    // Make sure that we are always the first `option._hook` to be called.
    // This is necessary to ensure that our callstack remains consistent.
    // Otherwise we'll end up with an unknown number of frames in-between
    // the called hook and `options._hook`. This will lead to wrongly
    // parsed hooks.
    setTimeout(()=>{
        prevHook = o._hook || o.__h;
        prevUseDebugValue = options.useDebugValue;
        // @ts-ignore
        prevHookName = options._addHookName || options.__a;
        o._hook = o.__h = (internal, index, type)=>{
            if (type) (0,_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.addHookStack)(type);
            // Don't continue the chain while the devtools is inspecting hooks.
            // Otherwise the next hook will very likely throw as we're only
            // faking a render and not doing a proper one. #278
            if (!options._skipEffects && !options.__s) {
                if (prevHook) prevHook(internal, index, type);
            }
        };
        options.useDebugValue = (value)=>{
            (0,_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.addHookStack)(_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.HookType.useDebugValue);
            (0,_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.addDebugValue)(value);
            if (prevUseDebugValue) prevUseDebugValue(value);
        };
        // @ts-ignore
        options._addHookName = options.__a = (name)=>{
            (0,_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.addHookName)(name);
            if (prevHookName) prevHookName(name);
        };
    }, 100);
    options.vnode = (vnode)=>{
        if (ownerStack.length > 0 && typeof vnode.type === "function" && vnode.type !== config.Fragment) vnodeIdToOwner.set((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getVNodeId)(vnode), ownerStack[ownerStack.length - 1]);
        if (prevVNodeHook) prevVNodeHook(vnode);
    };
    options._internal = options.__i = (internal, vnode)=>{
        const owner = vnodeIdToOwner.get((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getVNodeId)(internal));
        if (owner) owners.set(internal, owner);
        if (prevInternalHook) prevInternalHook(internal, vnode);
    };
    o._diff = o.__b = (internal, vnode)=>{
        if (internal.flags & _bindings__WEBPACK_IMPORTED_MODULE_1__.TYPE_COMPONENT) {
            timings.start.set(internal, performance.now());
            const name = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(internal, config);
            (0,_marks__WEBPACK_IMPORTED_MODULE_0__.recordMark)(`${name}_diff`);
            if (vnode != null) {
                const internalId = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getVNodeId)(internal);
                const vnodeId = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getVNodeId)(vnode);
                if (internalId !== vnodeId) {
                    const owner = vnodeIdToOwner.get(internalId);
                    if (owner) vnodeIdToOwner.set(vnodeId, owner);
                    vnodeIdToOwner.delete(internalId);
                }
            }
            if (profiler.captureRenderReasons) {
                if (internal === null) {
                    if (vnode != null) renderReasons.set(internal, (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_4__.createReason)(1 /* RenderReason.MOUNT */ , null));
                } else if (vnode != null) reasonTmpData.set(internal, {
                    type: vnode.type,
                    props: internal.props
                });
            }
        }
        if (prevBeforeDiff != null) prevBeforeDiff(internal);
    };
    o._render = o.__r = (internal)=>{
        if (!skipEffects && internal.flags & _bindings__WEBPACK_IMPORTED_MODULE_1__.TYPE_COMPONENT && internal.type !== config.Fragment) ownerStack.push(internal);
        if (prevRender != null) prevRender(internal);
    };
    options.diffed = (internal)=>{
        if (internal.flags & _bindings__WEBPACK_IMPORTED_MODULE_1__.TYPE_COMPONENT) {
            if (internal.type !== config.Fragment) ownerStack.pop();
            timings.end.set(internal, performance.now());
            (0,_marks__WEBPACK_IMPORTED_MODULE_0__.endMark)((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(internal, config));
            if (profiler.captureRenderReasons) {
                const old = reasonTmpData.get(internal);
                if (old != null) {
                    const reason = (0,_renderReason__WEBPACK_IMPORTED_MODULE_5__.getRenderReasonPre)(timings, internal, old);
                    if (reason !== null) renderReasons.set(internal, reason);
                }
                const s = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getStatefulHooks)(internal);
                if (s && Array.isArray(s) && s.length > 0) {
                    const internal = s[0]._internal || s[0].__i;
                    if (internal !== undefined && (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getComponent)(internal)) s[0]._oldValue = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getStatefulHookValue)(s[0]);
                }
            }
        }
        if (prevAfterDiff) prevAfterDiff(internal);
    };
    o._commit = o.__c = (internal, queue)=>{
        if (prevCommitRoot) prevCommitRoot(internal, queue);
        // These cases are already handled by `unmount`
        if (internal == null) return;
        if ((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.isRoot)(internal, config)) {
            const dom = getParentDom(internal);
            if (dom) roots.set(internal, dom);
        }
        ownerStack = [];
        renderer.onCommit(internal, owners, timings, renderReasons);
        if (profiler.captureRenderReasons) {
            renderReasons = new Map();
            reasonTmpData = new Map();
        }
    };
    options.unmount = (internal)=>{
        if (prevBeforeUnmount) prevBeforeUnmount(internal);
        vnodeIdToOwner.delete((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getVNodeId)(internal));
        owners.delete(internal);
        timings.start.delete(internal);
        timings.end.delete(internal);
        renderer.onUnmount(internal);
    };
    // Teardown devtools options. Mainly used for testing
    return ()=>{
        options.unmount = prevBeforeUnmount;
        o._commit = o.__c = prevCommitRoot;
        o._diff = o.__b = prevBeforeDiff;
        o._render = o.__r = prevRender;
        options.diffed = prevAfterDiff;
        options._internal = prevVNodeHook;
        o._hook = o.__h = prevHook;
        o.vnode = prevVNodeHook;
        o._internal = o.__i = prevInternalHook;
        options.useDebugValue = prevUseDebugValue;
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/11/renderReason.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRenderReasonPre: () => (getRenderReasonPre)
});
/* ESM import */var _shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderReasons.js");
/* ESM import */var _bindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/11/bindings.js");


/**
 * Detect why a VNode updated.
 */ function getRenderReasonPre(timings, internal, oldData) {
    // Components
    if ((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.isComponent)(internal) && internal.type === oldData.type) {
        const c = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getComponent)(internal);
        if (c !== null) {
            // Check hooks
            const hooks = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getStatefulHooks)(internal);
            if (hooks !== null) for(let i = 0; i < hooks.length; i++){
                if ((0,_bindings__WEBPACK_IMPORTED_MODULE_1__.isUseReducerOrState)(hooks[i]) && hooks[i]._oldValue !== (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getStatefulHookValue)(hooks[i])) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(5 /* RenderReason.HOOKS_CHANGED */ , null);
            }
            // Check state
            const prevState = c._prevState;
            if (prevState != null && prevState !== c.state) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(4 /* RenderReason.STATE_CHANGED */ , (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.getChangedKeys)(prevState, c.state));
            else if (prevState === undefined && c.state !== undefined && Object.keys(c.state).length > 0) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(4 /* RenderReason.STATE_CHANGED */ , null);
        }
    }
    // Check props
    if (internal.props !== oldData.props) {
        const propsChanged = (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.getChangedKeys)(internal.props, oldData.props);
        if (propsChanged.length > 0) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(3 /* RenderReason.PROPS_CHANGED */ , propsChanged);
    }
    const parent = (0,_bindings__WEBPACK_IMPORTED_MODULE_1__.getVNodeParent)(internal);
    if (parent != null) {
        if (parent != null && (timings.start.get(internal) || 0) >= (timings.start.get(parent) || 0) && (timings.end.get(internal) || 0) <= (timings.end.get(parent) || 0)) return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(2 /* RenderReason.PARENT_UPDATE */ , null);
    }
    return (0,_shared_renderReasons__WEBPACK_IMPORTED_MODULE_0__.createReason)(6 /* RenderReason.FORCE_UPDATE */ , null);
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/adapter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createAdapter: () => (createAdapter)
});
/* ESM import */var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/renderer.js");
/* ESM import */var _shells_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/shells/shared/utils.js");
/* ESM import */var _highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/highlight.js");
/* ESM import */var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/filter.js");
/* ESM import */var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/constants.js");
/* ESM import */var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/utils.js");






function createAdapter(port, profiler, renderers) {
    const window = preactDevtoolsCtx;
    const { listen, send, listenToPage } = port;
    const forAll = (fn)=>{
        for (const r of renderers.values())fn(r);
    };
    const highlight = (0,_highlight__WEBPACK_IMPORTED_MODULE_2__.createHightlighter)(renderers, port, (id)=>(0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, id));
    const inspect = (id)=>{
        var _getRendererByVNodeId;
        const data = (_getRendererByVNodeId = (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, id)) === null || _getRendererByVNodeId === void 0 ? void 0 : _getRendererByVNodeId.inspect(id);
        if (data) send("inspect-result", data);
    };
    // const picker = createPicker(
    // 	window,
    // 	renderers,
    // 	id => {
    // 		highlight.highlight(id);
    // 		if (id > -1) {
    // 			inspect(id);
    // 			send("select-node", id);
    // 		}
    // 	},
    // 	() => {
    // 		send("stop-picker", null);
    // 		highlight.destroy();
    // 	},
    // );
    // listen("start-picker", () => picker.start());
    // listen("stop-picker", () => picker.stop());
    listen("copy", (value)=>{
        try {
            const data = JSON.stringify(value, null, 2);
            (0,_shells_shared_utils__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)(data);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    });
    listen("inspect", (id)=>{
        var _getRendererByVNodeId;
        if (id === null) return;
        const res = (_getRendererByVNodeId = (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, id)) === null || _getRendererByVNodeId === void 0 ? void 0 : _getRendererByVNodeId.findDomForVNode(id);
        if (res && res.length > 0) globalThis.__PREACT_DEVTOOLS__.$0 = res[0];
        inspect(id);
    });
    listen("log", (e)=>{
        var _getRendererByVNodeId;
        (_getRendererByVNodeId = (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, e.id)) === null || _getRendererByVNodeId === void 0 ? void 0 : _getRendererByVNodeId.log(e.id, e.children);
    });
    listen("highlight", (id)=>{
        if (id == null) highlight.destroy();
        else highlight.highlight(id);
    });
    listen("element-picked", ({ uniqueId })=>{
        if (uniqueId == null) return;
        const rendererList = [
            ...renderers.values()
        ];
        // Unlike Chrome extension, we only have one renderer here
        const id = rendererList[0].getIdByUniqueId(uniqueId);
        if (id != null) port.send("element-picked-vnode-id", {
            id
        });
    });
    listen("disconnect", ()=>{
        // The devtools disconnected, clear any stateful
        // ui elements we may be displaying.
        highlight.destroy();
    });
    const update = (data)=>{
        var _getRendererByVNodeId;
        const { id, type, path, value } = data;
        (_getRendererByVNodeId = (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, id)) === null || _getRendererByVNodeId === void 0 ? void 0 : _getRendererByVNodeId.update(id, type, path.split(".").slice(1), value);
        // Notify all frontends that something changed
        inspect(id);
    };
    listenToPage("root-order-page", ()=>{
        let roots = [];
        renderers.forEach((r)=>{
            const m = r.getRootMappings();
            roots = roots.concat(m);
        });
        const sorted = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_5__.sortRoots)(document.body, roots);
        send("root-order", sorted);
    });
    listen("update-prop", (data)=>update({
            ...data,
            type: "props"
        }));
    listen("update-state", (data)=>update({
            ...data,
            type: "state"
        }));
    listen("update-context", (data)=>update({
            ...data,
            type: "context"
        }));
    listen("update-signal", (data)=>{
        var _getRendererByVNodeId_updateSignal, _getRendererByVNodeId;
        (_getRendererByVNodeId = (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, data.id)) === null || _getRendererByVNodeId === void 0 ? void 0 : (_getRendererByVNodeId_updateSignal = _getRendererByVNodeId.updateSignal) === null || _getRendererByVNodeId_updateSignal === void 0 ? void 0 : _getRendererByVNodeId_updateSignal.call(_getRendererByVNodeId, data.id, +data.path.replace("root.", "").replace(".value", ""), data.value);
    });
    listen("update-hook", (data)=>{
        var _getRendererByVNodeId_updateHook, _getRendererByVNodeId;
        if (!data.meta) return;
        (_getRendererByVNodeId = (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, data.id)) === null || _getRendererByVNodeId === void 0 ? void 0 : (_getRendererByVNodeId_updateHook = _getRendererByVNodeId.updateHook) === null || _getRendererByVNodeId_updateHook === void 0 ? void 0 : _getRendererByVNodeId_updateHook.call(_getRendererByVNodeId, data.id, data.meta.index, data.value);
    });
    listen("update-filter", (data)=>{
        const filters = (0,_filter__WEBPACK_IMPORTED_MODULE_3__.parseFilters)(data);
        forAll((r)=>r.applyFilters(filters));
    });
    listen("refresh", ()=>forAll((r)=>{
            var _r_refresh;
            return (_r_refresh = r.refresh) === null || _r_refresh === void 0 ? void 0 : _r_refresh.call(r);
        }));
    // Profiler
    listen("start-profiling", (options)=>{
        profiler.isProfiling = true;
        profiler.captureRenderReasons = !!options && !!options.captureRenderReasons;
    });
    listen("stop-profiling", ()=>{
        profiler.isProfiling = false;
    });
    listen("reload-and-profile", (options)=>{
        window.localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.PROFILE_RELOAD, JSON.stringify(options));
        try {
            lynx.reload({}, ()=>{});
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error("Preact Devtools was not able to reload the current page.");
            // eslint-disable-next-line no-console
            console.log(err);
        }
    });
    // Stats
    listen("start-stats-recording", ()=>{
        profiler.recordStats = true;
    });
    listen("stop-stats-recording", ()=>{
        profiler.recordStats = false;
    });
    listen("reload-and-record-stats", ()=>{
        window.localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.STATS_RELOAD, "true");
        try {
            lynx.reload({}, ()=>{});
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error("Preact Devtools was not able to reload the current page.");
            // eslint-disable-next-line no-console
            console.log(err);
        }
    });
    listen("start-highlight-updates", ()=>{
        profiler.highlightUpdates = true;
    });
    listen("stop-highlight-updates", ()=>{
        profiler.highlightUpdates = false;
        profiler.updateRects.clear();
        profiler.pendingHighlightUpdates.clear();
    });
    listen("load-host-selection", ()=>{
        const hook = window.__PREACT_DEVTOOLS__;
        const selected = hook.$0;
        if (selected) forAll((r)=>{
            const id = r.findVNodeIdForDom(selected);
            if (id > -1) send("select-node", id);
        });
    });
    listen("view-source", (id)=>{
        var _getRendererByVNodeId;
        const vnode = (_getRendererByVNodeId = (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, id)) === null || _getRendererByVNodeId === void 0 ? void 0 : _getRendererByVNodeId.getVNodeById(id);
        const hook = window.__PREACT_DEVTOOLS__;
        if (vnode && typeof vnode.type === "function") {
            const { type } = vnode;
            hook.$type = type && type.prototype && type.prototype.render ? type.prototype.render : type;
        } else hook.$type = null;
    });
    listen("suspend", (data)=>{
        var _getRendererByVNodeId_suspend, _getRendererByVNodeId;
        (_getRendererByVNodeId = (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getRendererByVNodeId)(renderers, data.id)) === null || _getRendererByVNodeId === void 0 ? void 0 : (_getRendererByVNodeId_suspend = _getRendererByVNodeId.suspend) === null || _getRendererByVNodeId_suspend === void 0 ? void 0 : _getRendererByVNodeId_suspend.call(_getRendererByVNodeId, data.id, data.active);
    });
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/filter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_FIlTERS: () => (DEFAULT_FIlTERS),
  parseFilters: () => (parseFilters)
});
const DEFAULT_FIlTERS = {
    regex: [],
    type: new Set([
        "dom",
        "fragment",
        "root",
        "hoc",
        "textSignal"
    ])
};
function parseFilters(raw) {
    const type = new Set();
    if (raw.type.fragment) type.add("fragment");
    if (raw.type.dom) type.add("dom");
    if (raw.type.hoc) type.add("hoc");
    if (raw.type.root) type.add("root");
    if (raw.type.textSignal) type.add("textSignal");
    return {
        regex: raw.regex.filter((x)=>x.enabled).map((x)=>new RegExp(x.value, "gi")),
        type
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/highlight.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createHightlighter: () => (createHightlighter)
});
/**
 * This module is responsible for displaying the transparent element overlay
 * inside the user's web page.
 */ function createHightlighter(renderers, port, getRendererByVnodeId) {
    /**
     * Reference to the DOM element that we'll render the selection highlighter
     * into. We'll cache it so that we don't unnecessarily re-create it when the
     * hover state changes. We only destroy this element once the user stops
     * hovering a node in the tree.
     */ let highlightRef = null;
    function destroyHighlight() {
        if (highlightRef) document.body.removeChild(highlightRef);
        highlightRef = null;
    }
    function highlight(id) {
        const renderer = getRendererByVnodeId(id);
        if (!renderer) return destroyHighlight();
        const vnode = renderer.getVNodeById(id);
        if (!vnode) return destroyHighlight();
        const dom = renderer.findDomForVNode(id);
        if (dom != null) {
            // if (highlightRef == null) {
            // 	highlightRef = document.createElement("div");
            // 	highlightRef.id = "preact-devtools-highlighter";
            // 	highlightRef.className = style.outerContainer;
            // 	document.body.appendChild(highlightRef);
            // }
            // eslint-disable-next-line prefer-const, @typescript-eslint/no-unused-vars
            let [first, _last] = dom;
            if (first === null) return;
            // @ts-expect-error This is ReactLynx BackgroundSnapshotInstance
            const snapshotId = first.__id;
            const rendererList = [
                ...renderers.values()
            ];
            // Unlike Chrome extension, we only have one renderer here
            const id = rendererList[0].getUniqueListIdBySnapshotId(snapshotId);
            if ((id === null || id === void 0 ? void 0 : id[0]) == null) // since lynx uses a virtual list, so it is not rendered in to main-thread
            // but the vdom exists in the background thread
            // TODO: can we recognize this case and only warn on non-virtual list situations
            // console.warn("Failed to get unique id for snapshot", snapshotId);
            return;
            port.send("preact-devtools-highlight", {
                snapshotId,
                uniqueId: id[0]
            });
        // const nodeEnd = last ? getNearestElement(last) : null;
        // if (node != null) {
        // 	let label = renderer.getDisplayName(vnode);
        // 	// Account for HOCs
        // 	const lastOpenIdx = label.lastIndexOf("(");
        // 	const firstCloseIdx = label.indexOf(")");
        // 	if (lastOpenIdx > -1 && lastOpenIdx < firstCloseIdx) {
        // 		label = label.slice(lastOpenIdx + 1, firstCloseIdx) || "Anonymous";
        // 	}
        // 	let size = measureNode(node);
        // 	if (nodeEnd !== null) {
        // 		const sizeLast = measureNode(nodeEnd);
        // 		size = mergeMeasure(size, sizeLast);
        // 	}
        // 	// If the current DOM is inside an iframe, the position data
        // 	// is relative to the content inside the iframe. We need to
        // 	// add the position of the iframe in the parent document to
        // 	// display the highlight overlay at the correct place.
        // 	if (document !== first?.ownerDocument) {
        // 		let iframe;
        // 		const iframes = Array.from(document.querySelectorAll("iframe"));
        // 		for (let i = 0; i < iframes.length; i++) {
        // 			const w = iframes[i].contentWindow;
        // 			if (w && w.document === first?.ownerDocument) {
        // 				iframe = iframes[i];
        // 				break;
        // 			}
        // 		}
        // 		if (iframe) {
        // 			const sizeIframe = measureNode(iframe);
        // 			size.top += sizeIframe.top;
        // 			size.left += sizeIframe.left;
        // 		}
        // 	}
        // 	let height = size.height;
        // 	let width = size.width;
        // 	if (size.boxSizing === "border-box") {
        // 		height += size.marginTop + size.marginBottom;
        // 		width += size.marginLeft + size.marginRight;
        // 	}
        // 	render(
        // 		h(Highlighter, {
        // 			label,
        // 			...size,
        // 			top: size.top - size.marginTop,
        // 			left: size.left - size.marginLeft,
        // 			height,
        // 			width,
        // 		}),
        // 		highlightRef,
        // 	);
        // }
        }
    }
    return {
        highlight,
        destroy: destroyHighlight
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/port.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createPortForHook: () => (createPortForHook),
  listenToDevtools: () => (listenToDevtools),
  listenToPageHook: () => (listenToPageHook),
  sendToDevtools: () => (sendToDevtools)
});
/* ESM import */var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/constants.js");

function listenToDevtools(ctx, type, callback) {
    ctx.addEventListener("message", (e)=>{
        if (e.source === ctx && e.data.source === _constants__WEBPACK_IMPORTED_MODULE_0__.DevtoolsToClient) {
            const data = e.data;
            if (data.type === type) callback(data.data);
        }
    });
}
function listenToPageHook(ctx, type, callback) {
    ctx.addEventListener("message", (e)=>{
        if (e.source === ctx && e.data.source === _constants__WEBPACK_IMPORTED_MODULE_0__.PageHookName) {
            const data = e.data;
            if (data.type === type) callback(data.data);
        }
    });
}
function sendToDevtools(ctx, type, data) {
    ctx.postMessage({
        source: _constants__WEBPACK_IMPORTED_MODULE_0__.PageHookName,
        type,
        data
    }, "*");
}
function createPortForHook(ctx) {
    return {
        send: (type, message)=>sendToDevtools(ctx, type, message),
        listen: (type, callback)=>listenToDevtools(ctx, type, callback),
        listenToPage: (type, callback)=>listenToPageHook(ctx, type, callback)
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/profiler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  newProfiler: () => (newProfiler)
});
function newProfiler() {
    return {
        highlightUpdates: false,
        updateRects: new Map(),
        pendingHighlightUpdates: new Set(),
        captureRenderReasons: false,
        isProfiling: false,
        recordStats: false,
        filterCommitsUnder: false
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/hook.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createHook: () => (createHook)
});
/* ESM import */var _adapter_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/adapter.js");
/* ESM import */var _adapter_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/filter.js");
/* ESM import */var _shared_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderer.js");
/* ESM import */var _10_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/options.js");
/* ESM import */var _parse_semverish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/parse-semverish.js");
/* ESM import */var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/constants.js");
/* ESM import */var _11_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/11/options.js");
/* ESM import */var _adapter_profiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/profiler.js");
/* ESM import */var _shared_idMapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/idMapper.js");
/* ESM import */var _10_bindings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/bindings.js");
/* ESM import */var _11_bindings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/11/bindings.js");











/**
 * Create hook to which Preact will subscribe and listen to. The hook
 * is the entrypoint where everything begins.
 */ function createHook(port) {
    const window = preactDevtoolsCtx;
    const { listen, send } = port;
    const renderers = new Map();
    let uid = 0;
    let status = "disconnected";
    const profiler = (0,_adapter_profiler__WEBPACK_IMPORTED_MODULE_7__.newProfiler)();
    const filters = _adapter_filter__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_FIlTERS;
    // Lazily init the adapter when a renderer is attached
    const init = ()=>{
        (0,_adapter_adapter__WEBPACK_IMPORTED_MODULE_0__.createAdapter)(port, profiler, renderers);
        status = "pending";
        listen("init", ()=>{
            status = "connected";
        });
        send("init", null);
    };
    const attachRenderer = (renderer, supports)=>{
        if (status === "disconnected") init();
        renderers.set(++uid, renderer);
        // Content Script is likely not ready at this point, so don't
        // flush any events here and politely request it to initialize
        send("attach", {
            id: uid,
            supportsProfiling: !!supports.profiling,
            supportsRenderReasons: !!supports.renderReasons,
            supportsHooks: !!supports.hooks
        });
        // Feature: Profile and reload
        // Check if we should immediately start profiling on create
        const profilerOptions = window.localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__.PROFILE_RELOAD);
        if (profilerOptions !== null) {
            window.localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_5__.PROFILE_RELOAD);
            const options = JSON.parse(profilerOptions);
            profiler.isProfiling = true;
            profiler.captureRenderReasons = !!(options === null || options === void 0 ? void 0 : options.captureRenderReasons);
        }
        const statsOptions = window.localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__.STATS_RELOAD);
        if (statsOptions !== null) {
            window.localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_5__.STATS_RELOAD);
            profiler.recordStats = true;
        }
        return uid;
    };
    // Delete all roots when the current frame is closed
    // @ts-ignore
    const tt = lynxCoreInject.tt;
    if (tt.callDestroyLifetimeFun) {
        const oldCallDestroyLifetimeFun = tt.callDestroyLifetimeFun;
        tt.callDestroyLifetimeFun = ()=>{
            oldCallDestroyLifetimeFun();
            renderers.forEach((r)=>{
                if (r.clear) r.clear();
            });
        };
    }
    // TODO: This should be added to codesandbox itself. I'm not too
    // happy with having site specific code in the extension, but
    // codesandbox is very popular among the Preact/React community
    // so this will get us started
    window.addEventListener("message", (e)=>{
        if (renderers.size > 0 && e.data && e.data.codesandbox && e.data.type === "compile") renderers.forEach((r)=>{
            if (r.clear) r.clear();
        });
    });
    return {
        $0: null,
        $type: null,
        renderers,
        get connected () {
            return status === "connected";
        },
        set connected (_){
            // eslint-disable-next-line no-console
            console.warn("Mutating __PREACT_DEVTOOLS__.connected is deprecated.");
        },
        emit: port.send,
        listen: ()=>{
            // eslint-disable-next-line no-console
            console.error("__PREACT_DEVTOOLS__.listen() is deprecated.");
        },
        attachPreact: (version, options, config)=>{
            if (status === "disconnected") init();
            // attach the correct renderer/options hooks based on the preact version
            const preactVersionMatch = (0,_parse_semverish__WEBPACK_IMPORTED_MODULE_4__["default"])(version);
            if (!preactVersionMatch) {
                // eslint-disable-next-line no-console
                console.error(`[PREACT DEVTOOLS] Could not parse preact version ${version}`);
                return -1;
            }
            // Create an integer-based namespace to avoid clashing ids caused by
            // multiple connected renderers
            const namespace = Math.floor(Math.random() * 2 ** 32);
            const roots = new Map();
            // currently we only support preact >= 10, later we can add another branch for major === 8
            if (preactVersionMatch.major == 10) {
                const supports = {
                    renderReasons: !!config.Component,
                    hooks: preactVersionMatch.minor === 4 && preactVersionMatch.patch >= 1 || preactVersionMatch.minor > 4,
                    profiling: true
                };
                const idMapper = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_8__.createIdMappingState)(namespace, _10_bindings__WEBPACK_IMPORTED_MODULE_9__.bindingsV10.getInstance);
                lynx.getJSModule("GlobalEventEmitter").removeAllListeners("onBackgroundSnapshotInstanceUpdateId");
                lynx.getJSModule("GlobalEventEmitter").addListener("onBackgroundSnapshotInstanceUpdateId", ({ oldId, newId })=>{
                    idMapper.updateSnapshotId(oldId, newId);
                });
                const renderer = (0,_shared_renderer__WEBPACK_IMPORTED_MODULE_2__.createRenderer)(port, config, options, supports, profiler, filters, idMapper, _10_bindings__WEBPACK_IMPORTED_MODULE_9__.bindingsV10, roots, version);
                (0,_10_options__WEBPACK_IMPORTED_MODULE_3__.setupOptionsV10)(options, renderer, roots, config);
                return attachRenderer(renderer, supports);
            } else if (preactVersionMatch.major === 11) {
                const idMapper = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_8__.createIdMappingState)(namespace, _11_bindings__WEBPACK_IMPORTED_MODULE_10__.bindingsV11.getInstance);
                const renderer = (0,_shared_renderer__WEBPACK_IMPORTED_MODULE_2__.createRenderer)(port, config, options, {
                    hooks: true,
                    renderReasons: true
                }, profiler, filters, idMapper, _11_bindings__WEBPACK_IMPORTED_MODULE_10__.bindingsV11, roots, version);
                (0,_11_options__WEBPACK_IMPORTED_MODULE_6__.setupOptionsV11)(options, renderer, roots, config, profiler);
                return attachRenderer(renderer, {
                    hooks: true,
                    renderReasons: true,
                    profiling: true
                });
            }
            // eslint-disable-next-line no-console
            console.error(`[PREACT DEVTOOLS] No devtools adapter exists for preact version "${version}". This is likely a bug in devtools.`);
            return -1;
        },
        attach: (renderer)=>attachRenderer(renderer, {
                renderReasons: false
            }),
        detach: (id)=>renderers.delete(id)
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/marks.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  endMark: () => (endMark),
  recordMark: () => (recordMark)
});
// Here we use the "User Timing API" to collect samples for the
// native profiling tools of browsers. These timings will show
// up in the "Timing" category.
const markName = (s)=>`\u{269B} ${s}`;
const supportsPerformance = globalThis.performance && typeof globalThis.performance.getEntriesByName === "function";
function recordMark(s) {
    if (supportsPerformance) performance.mark(markName(s));
}
function endMark(nodeName) {
    if (supportsPerformance) {
        const name = markName(nodeName);
        const start = `${name}_diff`;
        const end = `${name}_diffed`;
        try {
            performance.mark(end);
            performance.measure(name, start, end);
            performance.clearMarks(start);
            performance.clearMarks(end);
        } catch (e) {
        // Do nothing
        }
    }
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/parse-semverish.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (parseSemverish)
});
const MAJOR = 1;
const MINOR = 2;
const PATCH = 3;
const PRERELEASE = 5;
const PRERELEASE_TAG = 5;
const PRERELEASE_VERSION = 6;
const REGEXP_SEMVERISH = /^(\d+)\.(\d+)\.(\d+)(-([\w_-]+)(?:\.(\d+))?)?$/i;
/**
 * semver-ish parsing based on https://github.com/npm/node-semver/blob/master/semver.js
 *
 * @param version Version to parse
 * @param allowPreRelease Flag to indicate whether pre-releases should be allowed & parsed (e.g. -rc.1)
 */ function parseSemverish(version) {
    const match = version.match(REGEXP_SEMVERISH);
    if (match) {
        let preRelease = undefined;
        if (match[PRERELEASE]) preRelease = {
            tag: match[PRERELEASE_TAG],
            version: match[PRERELEASE_VERSION] !== undefined ? +match[PRERELEASE_VERSION] : -1
        };
        return {
            major: +match[MAJOR],
            minor: +match[MINOR],
            patch: +match[PATCH],
            preRelease
        };
    }
    return null;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/events-react-lynx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  flush: () => (flush)
});
/* ESM import */var _events_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/events-types.js");
/* ESM import */var _string_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/string-table.js");
/* ESM import */var _shared_stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/stats.js");
// This is extracted to avoid signals to be bundled with react-lynx



/**
 * Collect all relevant data from a commit and convert it to a message
 * the detools can understand
 */ function flush(commit) {
    const { rootId, unmountIds, operations, strings, stats } = commit;
    if (unmountIds.length === 0 && operations.length === 0) return;
    const msg = [
        rootId,
        ...(0,_string_table__WEBPACK_IMPORTED_MODULE_1__.flushTable)(strings)
    ];
    if (unmountIds.length > 0) msg.push(_events_types__WEBPACK_IMPORTED_MODULE_0__.MsgTypes.REMOVE_VNODE, unmountIds.length, ...unmountIds);
    for(let i = 0; i < operations.length; i++)msg.push(operations[i]);
    if (stats !== null) (0,_shared_stats__WEBPACK_IMPORTED_MODULE_2__.stats2ops)(stats, msg);
    return {
        type: "operation_v2",
        data: msg
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/events-types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MsgTypes: () => (MsgTypes)
});
// This is extracted to avoid signals to be bundled with react-lynx
var MsgTypes;
(function(MsgTypes) {
    MsgTypes[MsgTypes["ADD_ROOT"] = 1] = "ADD_ROOT";
    MsgTypes[MsgTypes["ADD_VNODE"] = 2] = "ADD_VNODE";
    MsgTypes[MsgTypes["REMOVE_VNODE"] = 3] = "REMOVE_VNODE";
    MsgTypes[MsgTypes["UPDATE_VNODE_TIMINGS"] = 4] = "UPDATE_VNODE_TIMINGS";
    MsgTypes[MsgTypes["REORDER_CHILDREN"] = 5] = "REORDER_CHILDREN";
    MsgTypes[MsgTypes["RENDER_REASON"] = 6] = "RENDER_REASON";
    MsgTypes[MsgTypes["COMMIT_STATS"] = 7] = "COMMIT_STATS";
    MsgTypes[MsgTypes["HOC_NODES"] = 8] = "HOC_NODES";
})(MsgTypes || (MsgTypes = {}));


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/string-table.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  encode: () => (encode),
  flushTable: () => (flushTable),
  getStringId: () => (getStringId),
  parseTable: () => (parseTable)
});
/**
 * The string table holds a mapping of strings to ids. This saves a lot of space
 * in messaging because we can only need to declare a string once and can later
 * refer to its id. This is especially true for component or element names which
 * expectedoccur multiple times.
 */ /**
 * Convert a string to an id. Works similar to a gzip dictionary.
 */ function getStringId(table, input) {
    if (input === null) return 0;
    if (!table.has(input)) table.set("" + input, table.size + 1);
    return table.get(input);
}
// TODO: Use a proper LRU cache?
const encoded = new Map();
const toCodePoint = (s)=>s.codePointAt(0) || 124; // "|"" symbol;
/**
 * Convert a string to an array of codepoints
 */ function encode(input) {
    if (!encoded.has(input)) encoded.set(input, input.split("").map(toCodePoint));
    return encoded.get(input);
}
/**
 * Convert string table to something the extension understands
 * @param {import('./devtools').AdapterState["stringTable"]} table
 * @returns {number[]}
 */ function flushTable(table) {
    const ops = [
        0
    ];
    table.forEach((_, k)=>{
        ops[0] += k.length + 1;
        ops.push(k.length, ...encode(k));
    });
    return ops;
}
/**
 * Parse message to strings
 */ function parseTable(data) {
    const len = data[0];
    const strings = [];
    if (len > 0) for(let i = 1; i < len; i++){
        const strLen = data[i];
        let start = i + 1;
        const end = i + strLen + 1;
        let str = "";
        for(; start < end; start++)str += String.fromCodePoint(data[start]);
        strings.push(str);
        i += strLen;
    }
    return strings;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/renderer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRendererByVNodeId: () => (getRendererByVNodeId)
});
function getRendererByVNodeId(renderers, id) {
    for (const r of renderers.values()){
        if (r.getVNodeById(id) !== null) return r;
    }
    return null;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/hooks.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HookType: () => (HookType),
  addDebugValue: () => (addDebugValue),
  addHookName: () => (addHookName),
  addHookStack: () => (addHookStack),
  inspectHooks: () => (inspectHooks),
  parseHookData: () => (parseHookData)
});
/* ESM import */var errorstacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/errorstacks/dist/esm/index.mjs");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _view_components_sidebar_inspect_parseProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/components/sidebar/inspect/parseProps.js");
/* ESM import */var _serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/serialize.js");
/* ESM import */var _view_components_tree_windowing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/components/tree/windowing.js");





var HookType;
(function(HookType) {
    HookType[HookType["useState"] = 1] = "useState";
    HookType[HookType["useReducer"] = 2] = "useReducer";
    HookType[HookType["useEffect"] = 3] = "useEffect";
    HookType[HookType["useLayoutEffect"] = 4] = "useLayoutEffect";
    HookType[HookType["useRef"] = 5] = "useRef";
    HookType[HookType["useImperativeHandle"] = 6] = "useImperativeHandle";
    HookType[HookType["useMemo"] = 7] = "useMemo";
    HookType[HookType["useCallback"] = 8] = "useCallback";
    HookType[HookType["useContext"] = 9] = "useContext";
    HookType[HookType["useErrorBoundary"] = 10] = "useErrorBoundary";
    HookType[HookType["useDebugValue"] = 11] = "useDebugValue";
    HookType[HookType["custom"] = 99] = "custom";
    HookType[HookType["devtoolsParent"] = 9999] = "devtoolsParent";
})(HookType || (HookType = {}));
let hookLog = [];
let inspectingHooks = false;
let ancestorName = "unknown";
const debugValues = new Map();
let debugNames = [];
function addHookName(name) {
    if (!inspectingHooks) return;
    debugNames.push(String(name));
}
function addDebugValue(value) {
    if (!inspectingHooks) return;
    const last = hookLog.pop();
    const location = last.stack.reverse().slice(0, -1).map((x)=>x.name === "root" ? x.name : `${x.location}.${x.name}`).join(".");
    debugValues.set(location, value);
}
let ignoreNext = false;
function addHookStack(type) {
    if (!inspectingHooks || ignoreNext) {
        ignoreNext = false;
        return;
    }
    // Ignore next useState call coming from useErrorBoundary
    if (type === HookType.useErrorBoundary) ignoreNext = true;
    // By default browser limit stack trace length to 10 entries
    const oldLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 1000;
    const err = new Error();
    let stack = err.stack ? (0,errorstacks__WEBPACK_IMPORTED_MODULE_0__.parseStackTrace)(err.stack) : [];
    const ancestorIdx = stack.findIndex((x)=>x.name === ancestorName);
    if (ancestorIdx > -1 && stack.length > 0) {
        // Remove `addHookStack` + `options._hook` + `getHookState` from stack
        let trim = type === HookType.useDebugValue ? 2 : 3;
        // These hooks are implemented with other hooks
        if (type === HookType.useState || type === HookType.useImperativeHandle || type === HookType.useCallback || type === HookType.useRef) trim += 1;
        // Lynx has one more `call at call (native)` stack, we need `- 1` here
        stack = stack.slice(trim, ancestorIdx - 1);
    }
    const normalized = [];
    // To easy mappings we'll rotate all positional data.
    for(let i = 0; i < stack.length; i++){
        if (i === stack.length - 1) {
            normalized.push({
                name: "root",
                location: "root"
            });
            continue;
        }
        const frame = stack[i];
        const next = stack[i + 1];
        normalized.push({
            name: frame.name,
            // file://view2/.rspeedy/main/background.ed172d51.js -> /.rspeedy/main/background.ed172d51.js
            location: `${next.fileName.replace(/^file:\/\/[^/]*/, "")}:${next.line}:${next.column}`
        });
    }
    hookLog.push({
        type,
        stack: normalized
    });
    // Restore original stack trace limit
    Error.stackTraceLimit = oldLimit;
}
function parseHookData(config, data, vnode, userHookNames, bindings) {
    const tree = new Map();
    const root = {
        children: [],
        depth: 0,
        name: "root",
        editable: false,
        id: "root",
        type: "object",
        value: null,
        meta: null
    };
    tree.set("root", root);
    const out = [
        root
    ];
    data.forEach((hook, hookIdx)=>{
        const type = HookType[hook.type];
        let parentId = "root";
        for(let i = hook.stack.length - 2; i >= 0; i--){
            const frame = hook.stack[i];
            const isNative = i === 0;
            const id = `${parentId}.${frame.location}.${frame.name}`;
            if (!tree.has(id)) {
                let value = "__preact_empty__";
                let editable = false;
                let children = [];
                let nodeType = "undefined";
                const depth = hook.stack.length - i - 1;
                let name = isNative ? type : frame.name;
                if (isNative && userHookNames.length > 0 && (hook.type === HookType.useState || hook.type === HookType.useRef || hook.type === HookType.useMemo || hook.type === HookType.useReducer)) name = `${name} ${userHookNames.pop()}`;
                if (debugValues.has(id)) value = (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(config, bindings, debugValues.get(id));
                const hookValueTree = [];
                if (isNative) {
                    const s = bindings.getHookState(vnode, hookIdx, hook.type);
                    const rawValue = Array.isArray(s) ? s[0] : s;
                    value = (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(config, bindings, rawValue);
                    // The user should be able to click through the value
                    // properties if the value is an object. We parse it
                    // separately and append it as children to our hook node
                    if (typeof rawValue === "object" && !(rawValue instanceof preactDevtoolsCtx.Node)) {
                        const valueTree = (0,_view_components_sidebar_inspect_parseProps__WEBPACK_IMPORTED_MODULE_2__.parseProps)(value, id, 8, 1, name);
                        children = valueTree.get(id).children;
                        const flat = (0,_view_components_tree_windowing__WEBPACK_IMPORTED_MODULE_4__.flattenChildren)(valueTree, id, ()=>false).slice(1);
                        for(let j = 0; j < flat.length; j++){
                            const data = valueTree.get(flat[j]);
                            hookValueTree.push(data);
                        }
                        if (hookValueTree.length > 1) nodeType = hookValueTree[0].type;
                    }
                    editable = (hook.type === HookType.useState || hook.type === HookType.useReducer) && (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.isEditable)(rawValue);
                }
                const item = {
                    children,
                    depth,
                    editable,
                    id,
                    name,
                    type: nodeType,
                    meta: isNative ? {
                        index: hookIdx,
                        type
                    } : frame.name,
                    value,
                    index: hookIdx
                };
                tree.set(id, item);
                out.push(item);
                if (tree.has(parentId)) tree.get(parentId).children.push(id);
                if (hookValueTree.length) hookValueTree.forEach((v)=>{
                    tree.set(v.id, v);
                    out.push(v);
                });
            }
            parentId = id;
        }
    });
    return out;
}
function inspectHooks(config, options, vnode, helpers) {
    inspectingHooks = true;
    hookLog = [];
    debugValues.clear();
    debugNames = [];
    ancestorName = (0,errorstacks__WEBPACK_IMPORTED_MODULE_0__.parseStackTrace)(new Error().stack)[0].name;
    const c = helpers.getComponent(vnode);
    const isClass = vnode.type.prototype && vnode.type.prototype.render;
    // Disable hook effects
    options._skipEffects = options.__s = true;
    const prevConsole = {};
    // Temporarily disable all console methods to not confuse users
    // It sucks that we need to do this :/
    for(const method in console)try {
        prevConsole[method] = console[method];
        console[method] = ()=>undefined;
    } catch (error) {
    // Ignore errors here
    }
    let pendingValues = null;
    let statefulHooks = null;
    try {
        // Call render on a dummy component, so that any possible
        // state changes or effect are not written to our original
        // component.
        const hooks = helpers.getComponentHooks(vnode);
        if (hooks === null) return [];
        statefulHooks = helpers.getStatefulHooks(vnode);
        if (statefulHooks !== null) pendingValues = statefulHooks.map((s)=>helpers.getPendingHookValue(s));
        const dummy = {
            props: c.props,
            context: c.context,
            state: {},
            __hooks: hooks,
            __H: hooks,
            __v: null
        };
        // Force preact to reset internal hooks index
        const renderHook = options.__r || options._render;
        if (renderHook) {
            const dummyVNode = (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", null);
            // Note: A "div" normally won't have the _component property set,
            // but we can get away with that for the devtools
            // This is only needed for Preact 10.x
            dummyVNode._component = dummy;
            dummyVNode.__c = dummy;
            dummy.__v = dummyVNode;
            // Preact V11 for hook names
            dummyVNode.data = {
                __hooks: hooks,
                __H: hooks
            };
            renderHook(dummyVNode, null);
        }
        if (isClass) c.render.call(dummy, dummy.props, dummy.state);
        else if (c.constructor === Object) vnode.type.call(dummy, dummy.props, dummy.context);
        else c.constructor.call(dummy, dummy.props, dummy.context);
        // Signals need this, otherwise they end up in an incosnistent state
        const diffedHook = options.diffed;
        if (diffedHook) diffedHook(vnode);
    } catch (error) {
    // We don't care about any errors here. We only need
    // the hook call sites
    } finally{
        // Restore hook state
        if (pendingValues !== null && statefulHooks !== null) pendingValues.forEach((original, i)=>{
            if (original !== undefined) helpers.setPendingHookValue(statefulHooks[i], original);
        });
        // Restore original console
        for(const method in prevConsole)try {
            console[method] = prevConsole[method];
        } catch (error) {
        // Ignore errors
        }
        options._skipEffects = options.__s = false;
    }
    const parsed = hookLog.length ? parseHookData(config, hookLog, vnode, [
        ...debugNames
    ].reverse(), helpers) : null;
    debugNames = [];
    inspectingHooks = false;
    ancestorName = "unknown";
    hookLog = [];
    return parsed;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/idMapper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createIdMappingState: () => (createIdMappingState),
  createVNodeId: () => (createVNodeId),
  getIdByUniqueId: () => (getIdByUniqueId),
  getOrCreateVNodeId: () => (getOrCreateVNodeId),
  getUniqueListIdById: () => (getUniqueListIdById),
  getUniqueListIdBySnapshotId: () => (getUniqueListIdBySnapshotId),
  getVNodeById: () => (getVNodeById),
  getVNodeId: () => (getVNodeId),
  hasVNodeId: () => (hasVNodeId),
  removeVNodeId: () => (removeVNodeId),
  updateVNodeId: () => (updateVNodeId)
});
function createIdMappingState(initial, getInstance) {
    return {
        instToId: new Map(),
        idToVNode: new Map(),
        idToInst: new Map(),
        nextId: initial,
        getInstance,
        snapshotIdToId: new Map(),
        idToUniqueIdList: new Map(),
        uniqueIdToId: new Map(),
        updateSnapshotId: function(oldId, newId) {
            if (this.snapshotIdToId.has(oldId)) {
                const id = this.snapshotIdToId.get(oldId);
                this.snapshotIdToId.delete(oldId);
                this.snapshotIdToId.set(newId, id);
                this.updateIdToUniqueIdRelation(newId, id);
            }
        },
        updateIdToUniqueIdRelation: function(snapshotId, id) {
            lynx // @ts-expect-error type error
            .getNativeApp().callLepusMethod("getUniqueIdListBySnapshotId", {
                snapshotId
            }, (ret)=>{
                if ((ret === null || ret === void 0 ? void 0 : ret.uniqueIdList) == null) return;
                const { uniqueIdList } = ret;
                this.idToUniqueIdList.set(id, uniqueIdList);
                if (uniqueIdList != null) for (const uniqueId of uniqueIdList)this.uniqueIdToId.set(uniqueId, id);
            });
        }
    };
}
function getVNodeById(state, id) {
    return state.idToVNode.get(id) || null;
}
function getUniqueListIdById(state, id) {
    return state.idToUniqueIdList.get(id) || null;
}
function getUniqueListIdBySnapshotId(state, snapshotId) {
    const id = state.snapshotIdToId.get(snapshotId);
    if (!id) return null;
    return state.idToUniqueIdList.get(id) || null;
}
function getIdByUniqueId(state, uniqueId) {
    return state.uniqueIdToId.get(uniqueId) || null;
}
function hasVNodeId(state, vnode) {
    return vnode != null && state.instToId.has(state.getInstance(vnode));
}
function getVNodeId(state, vnode) {
    if (vnode == null) return -1;
    const inst = state.getInstance(vnode);
    return state.instToId.get(inst) || -1;
}
function getOrCreateVNodeId(state, vnode) {
    const id = getVNodeId(state, vnode);
    if (id !== -1) return id;
    return createVNodeId(state, vnode);
}
function updateVNodeId(state, id, vnode) {
    const inst = state.getInstance(vnode);
    state.idToInst.set(id, inst);
    state.idToVNode.set(id, vnode);
    let snapshotId;
    try {
        // @ts-ignore
        snapshotId = vnode.__e.__id;
    } catch (e) {
        // It is as expected when destroying
        // console.log('updateVNodeId vnode', vnode)
        return;
    }
    state.snapshotIdToId.set(snapshotId, id);
    state.updateIdToUniqueIdRelation(snapshotId, id);
}
function removeVNodeId(state, vnode) {
    if (hasVNodeId(state, vnode)) {
        const id = getVNodeId(state, vnode);
        state.idToInst.delete(id);
        state.idToVNode.delete(id);
        let snapshotId;
        try {
            // @ts-ignore
            snapshotId = vnode.__e.__id;
        } catch (e) {
            // It is as expected when destroying
            // console.log('updateVNodeId vnode', vnode)
            return;
        }
        state.snapshotIdToId.delete(snapshotId);
        const uniqueIdList = state.idToUniqueIdList.get(id);
        state.idToUniqueIdList.delete(id);
        if (uniqueIdList != null) for (const uniqueId of uniqueIdList)state.uniqueIdToId.delete(uniqueId);
    }
    const inst = state.getInstance(vnode);
    state.instToId.delete(inst);
}
function createVNodeId(state, vnode) {
    const id = state.nextId++;
    const inst = state.getInstance(vnode);
    state.instToId.set(inst, id);
    state.idToInst.set(id, inst);
    state.idToVNode.set(id, vnode);
    let snapshotId;
    try {
        // @ts-ignore
        snapshotId = vnode.__e.__id;
    } catch (e) {
        // It is as expected when destroying
        // console.log('createVNodeId vnode', vnode)
        return;
    }
    state.snapshotIdToId.set(snapshotId, id);
    state.updateIdToUniqueIdRelation(snapshotId, id);
    return id;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/inspectVNode.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  inspectVNode: () => (inspectVNode)
});
/* ESM import */var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderer.js");
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/hooks.js");
/* ESM import */var _idMapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/idMapper.js");
/* ESM import */var _serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/serialize.js");
/* ESM import */var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/utils.js");





/**
 * Serialize all properties/attributes of a `VNode` like `props`, `context`,
 * `hooks`, and other data. This data will be requested when the user selects a
 * `VNode` in the devtools. It returning information will be displayed in the
 * sidebar.
 */ function inspectVNode(ids, config, bindings, options, id, supportsHooks, version) {
    const vnode = (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeById)(ids, id);
    if (!vnode) return null;
    const c = bindings.getComponent(vnode);
    const hasState = bindings.isComponent(vnode) && c != null && typeof c.state === "object" && c.state != null && Object.keys(c.state).length > 0;
    const isSignalTextNode = typeof vnode.type === "function" && vnode.type.displayName === "_st";
    const hasHooks = c != null && !isSignalTextNode && bindings.getComponentHooks(vnode) != null;
    const hooks = supportsHooks && hasHooks ? (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.inspectHooks)(config, options, vnode, bindings) : null;
    const context = c != null ? (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(config, bindings, (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.cleanContext)(c.context)) : null;
    const props = vnode.type !== null ? (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(config, bindings, (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.cleanProps)(vnode.props)) : null;
    const state = hasState ? (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(config, bindings, c.state) : null;
    const signals = c != null && "__$u" in c ? inspectSignalSubscriptions(config, bindings, c.__$u.s) : null;
    let suspended = false;
    let canSuspend = false;
    let item = vnode;
    while(item){
        if (bindings.isSuspenseVNode(item)) {
            canSuspend = true;
            const res = bindings.getSuspendedState(item);
            if (res !== null) suspended = res;
            break;
        }
        item = bindings.getVNodeParent(item);
    }
    return {
        context,
        canSuspend,
        key: vnode.key || null,
        hooks: supportsHooks ? hooks : !supportsHooks && hasHooks ? [] : null,
        id,
        name: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSignalTextName)(bindings.getDisplayName(vnode, config)),
        props,
        state,
        signals,
        // TODO: We're not using this information anywhere yet
        type: (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.getDevtoolsType)(vnode, bindings),
        suspended,
        version,
        // @ts-ignore
        __source: vnode.__source || null
    };
}
function inspectSignalSubscriptions(config, bindings, node) {
    const out = {};
    let i = 0;
    const seen = new Set();
    while(node !== null && node !== undefined && !seen.has(node)){
        seen.add(node);
        out[i] = (0,_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(config, bindings, node.S);
        node = node.n;
        i++;
    }
    return i > 0 ? out : null;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderReasons.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createReason: () => (createReason),
  getChangedKeys: () => (getChangedKeys),
  renderReasonToStr: () => (renderReasonToStr)
});
function renderReasonToStr(reason) {
    switch(reason){
        case 1 /* RenderReason.MOUNT */ :
            return "mount";
        case 2 /* RenderReason.PARENT_UPDATE */ :
            return "parent update";
        case 3 /* RenderReason.PROPS_CHANGED */ :
            return "props changed";
        case 4 /* RenderReason.STATE_CHANGED */ :
            return "state changed";
        case 5 /* RenderReason.HOOKS_CHANGED */ :
            return "hooks changed";
        case 6 /* RenderReason.FORCE_UPDATE */ :
            return "force update";
    }
}
function createReason(type, items) {
    return {
        type,
        items
    };
}
/**
 * Get all keys that have different values in two objects. Does a
 * shallow comparison.
 */ function getChangedKeys(a, b) {
    const changed = [];
    let key;
    for(key in a)if (!(key in b) || a[key] !== b[key]) changed.push(key);
    for(key in b)if (!(key in a)) changed.push(key);
    return changed;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createRenderer: () => (createRenderer),
  getDevtoolsType: () => (getDevtoolsType)
});
/* ESM import */var _protocol_events_react_lynx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/events-react-lynx.js");
/* ESM import */var _view_store_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/store/types.js");
/* ESM import */var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/utils.js");
/* ESM import */var _shared_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/serialize.js");
/* ESM import */var _shared_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/stats.js");
/* ESM import */var _shared_idMapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/idMapper.js");
/* ESM import */var _shared_traverse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/traverse.js");
/* ESM import */var _inspectVNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/inspectVNode.js");
/* ESM import */var _10_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/10/log.js");
/* ESM import */var _view_components_sidebar_inspect_serializeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/components/sidebar/inspect/serializeProps.js");



// import { startDrawing } from "../adapter/highlightUpdates";







const memoReg = /^Memo\(/;
const forwardRefReg = /^ForwardRef\(/;
/**
 * Get the type of a vnode. The devtools uses these constants to differentiate
 * between the various forms of components.
 */ function getDevtoolsType(vnode, bindings) {
    if (bindings.isComponent(vnode)) {
        // TODO: Use getDisplayName here?
        const name = vnode.type.displayName || "";
        if (memoReg.test(name)) return _view_store_types__WEBPACK_IMPORTED_MODULE_1__.DevNodeType.Memo;
        if (forwardRefReg.test(name)) return _view_store_types__WEBPACK_IMPORTED_MODULE_1__.DevNodeType.ForwardRef;
        if (bindings.isSuspenseVNode(vnode)) return _view_store_types__WEBPACK_IMPORTED_MODULE_1__.DevNodeType.Suspense;
        if (bindings.isPortal(vnode)) return _view_store_types__WEBPACK_IMPORTED_MODULE_1__.DevNodeType.Portal;
        // TODO: Provider and Consumer
        return vnode.type.prototype && vnode.type.prototype.render ? _view_store_types__WEBPACK_IMPORTED_MODULE_1__.DevNodeType.ClassComponent : _view_store_types__WEBPACK_IMPORTED_MODULE_1__.DevNodeType.FunctionComponent;
    }
    return _view_store_types__WEBPACK_IMPORTED_MODULE_1__.DevNodeType.Element;
}
function createRenderer(port, config, options, supports, profiler, filters, ids, bindings, roots, version) {
    let currentUnmounts = [];
    let prevOwners = new Map();
    /** Use this to check if we added a root */ let rootSize = roots.size;
    const domToVNode = new WeakMap();
    let unmountStats = {
        components: 0,
        elements: 0,
        text: 0
    };
    function onUnmount(vnode) {
        if (profiler.recordStats) {
            if (bindings.isComponent(vnode)) unmountStats.components++;
            else if (bindings.isElement(vnode)) unmountStats.elements++;
            else unmountStats.text++;
        }
        if (!(0,_shared_traverse__WEBPACK_IMPORTED_MODULE_6__.shouldFilter)(vnode, filters, config, bindings)) {
            if ((0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.hasVNodeId)(ids, vnode)) currentUnmounts.push((0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeId)(ids, vnode));
        }
        if (!bindings.isComponent(vnode)) {
            const dom = bindings.getDom(vnode);
            if (dom != null) domToVNode.delete(dom);
        }
        (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.removeVNodeId)(ids, vnode);
    }
    const inspect = (id)=>{
        return (0,_inspectVNode__WEBPACK_IMPORTED_MODULE_7__.inspectVNode)(ids, config, bindings, options, id, supports.hooks, version);
    };
    return {
        clear () {
            roots.forEach((dom, vnode)=>{
                onUnmount(vnode);
            });
        },
        getRootMappings () {
            return Array.from(roots.entries()).map((entry)=>{
                return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.newRootData)((0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeId)(ids, entry[0]), entry[1]);
            });
        },
        getVNodeById: (id)=>(0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeById)(ids, id),
        getUniqueListIdById: (id)=>(0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getUniqueListIdById)(ids, id),
        getUniqueListIdBySnapshotId: (snapshotId)=>(0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getUniqueListIdBySnapshotId)(ids, snapshotId),
        getIdByUniqueId: (uniqueId)=>(0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getIdByUniqueId)(ids, uniqueId),
        getDisplayName (vnode) {
            return bindings.getDisplayName(vnode, config);
        },
        log: (id, children)=>(0,_10_log__WEBPACK_IMPORTED_MODULE_8__.logVNode)(ids, config, id, children),
        inspect,
        findDomForVNode (id) {
            const vnode = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeById)(ids, id);
            if (!vnode) return null;
            let first = null;
            let last = null;
            // Traverse tree until we find the first DOM node
            let stack = [
                vnode
            ];
            let item;
            while((item = stack.shift()) !== undefined){
                if (item === null) continue;
                if (!bindings.isComponent(item)) {
                    first = bindings.getDom(item);
                    break;
                }
                stack.push(...bindings.getActualChildren(item));
            }
            // If we traversed through every child, then there is
            // no last child present.
            if (first !== null) {
                stack = [
                    vnode
                ];
                while((item = stack.pop()) !== undefined){
                    if (item === null) continue;
                    if (!bindings.isComponent(item)) {
                        last = bindings.getDom(item);
                        break;
                    }
                    stack.push(...bindings.getActualChildren(item));
                }
            }
            // Only set last if node is different. If both are the same
            // we assume that we cannot show correct padding, margin and
            // border visualizations and skip that.
            return [
                first,
                first === last ? null : last
            ];
        },
        findVNodeIdForDom (node) {
            const vnode = domToVNode.get(node);
            if (vnode) {
                if ((0,_shared_traverse__WEBPACK_IMPORTED_MODULE_6__.shouldFilter)(vnode, filters, config, bindings)) {
                    let p = vnode;
                    let found = null;
                    while((p = bindings.getVNodeParent(p)) != null)if (!(0,_shared_traverse__WEBPACK_IMPORTED_MODULE_6__.shouldFilter)(p, filters, config, bindings)) {
                        found = p;
                        break;
                    }
                    if (found != null) return (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeId)(ids, found);
                } else return (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeId)(ids, vnode);
            }
            return -1;
        },
        refresh () {
            this.applyFilters(filters);
        },
        applyFilters (nextFilters) {
            /** Queue events and flush in one go */ const queue = [];
            roots.forEach((dom, root)=>{
                const rootId = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeId)(ids, root);
                unmountStats = {
                    components: 0,
                    elements: 0,
                    text: 0
                };
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.traverse)(root, (vnode)=>this.onUnmount(vnode), bindings);
                const commit = {
                    operations: [],
                    rootId,
                    strings: new Map(),
                    unmountIds: currentUnmounts,
                    stats: profiler.recordStats ? (0,_shared_stats__WEBPACK_IMPORTED_MODULE_4__.createStats)() : null
                };
                if (commit.stats !== null) commit.stats.unmounts = unmountStats;
                const unmounts = (0,_protocol_events_react_lynx__WEBPACK_IMPORTED_MODULE_0__.flush)(commit);
                if (unmounts) {
                    currentUnmounts = [];
                    queue.push(unmounts);
                }
            });
            filters.regex = nextFilters.regex;
            filters.type = nextFilters.type;
            roots.forEach((dom, root)=>{
                const commit = (0,_shared_traverse__WEBPACK_IMPORTED_MODULE_6__.createCommit)(ids, roots, prevOwners, root, filters, domToVNode, config, profiler, bindings, {
                    start: new Map(),
                    end: new Map()
                }, null);
                const ev = (0,_protocol_events_react_lynx__WEBPACK_IMPORTED_MODULE_0__.flush)(commit);
                if (!ev) return;
                queue.push(ev);
            });
            queue.forEach((ev)=>port.send(ev.type, ev.data));
            port.send("root-order-page", null);
        },
        onCommit (vnode, owners, timingsByVNode, renderReasonPre) {
            const commit = (0,_shared_traverse__WEBPACK_IMPORTED_MODULE_6__.createCommit)(ids, roots, owners, vnode, filters, domToVNode, config, profiler, bindings, timingsByVNode, renderReasonPre);
            prevOwners = owners;
            timingsByVNode.start.clear();
            timingsByVNode.end.clear();
            if (commit.stats !== null) {
                commit.stats.unmounts = unmountStats;
                unmountStats = {
                    components: 0,
                    elements: 0,
                    text: 0
                };
            }
            commit.unmountIds.push(...currentUnmounts);
            currentUnmounts = [];
            const ev = (0,_protocol_events_react_lynx__WEBPACK_IMPORTED_MODULE_0__.flush)(commit);
            if (!ev) return;
            if (profiler.updateRects.size > 0) // startDrawing(profiler.updateRects);
            profiler.pendingHighlightUpdates.clear();
            port.send(ev.type, ev.data);
            if (rootSize !== roots.size) {
                rootSize = roots.size;
                port.send("root-order-page", null);
            }
        },
        onUnmount,
        update (id, type, path, value) {
            if ((0,_view_components_sidebar_inspect_serializeProps__WEBPACK_IMPORTED_MODULE_9__.isSerializedBigint)(value)) value = BigInt(value.value);
            const vnode = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeById)(ids, id);
            if (vnode !== null) {
                if (bindings.isComponent(vnode)) {
                    const c = bindings.getComponent(vnode);
                    if (c) {
                        if (type === "props") vnode.props = (0,_shared_serialize__WEBPACK_IMPORTED_MODULE_3__.setInCopy)(vnode.props || {}, path.slice(), value);
                        else if (type === "state") {
                            const res = (0,_shared_serialize__WEBPACK_IMPORTED_MODULE_3__.setInCopy)(c.state || {}, path.slice(), value);
                            bindings.setNextState(c, res);
                        } else if (type === "context") // from devtools and make it readonly.
                        (0,_shared_serialize__WEBPACK_IMPORTED_MODULE_3__.setIn)(c.context || {}, path.slice(), value);
                        c.forceUpdate();
                    }
                }
            }
        },
        updateHook (id, index, value) {
            if ((0,_view_components_sidebar_inspect_serializeProps__WEBPACK_IMPORTED_MODULE_9__.isSerializedBigint)(value)) value = BigInt(value.value);
            const vnode = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeById)(ids, id);
            if (vnode !== null && bindings.isComponent(vnode)) {
                const c = bindings.getComponent(vnode);
                if (c) {
                    const s = bindings.getHookState(vnode, index);
                    // Only useState and useReducer hooks marked as editable so state can
                    // cast to more specific ReducerHookState value.
                    s[0] = value;
                    c.forceUpdate();
                }
            }
        },
        updateSignal (id, index, value) {
            if ((0,_view_components_sidebar_inspect_serializeProps__WEBPACK_IMPORTED_MODULE_9__.isSerializedBigint)(value)) value = BigInt(value.value);
            const vnode = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeById)(ids, id);
            if (vnode !== null && bindings.isComponent(vnode)) {
                const c = bindings.getComponent(vnode);
                if (c !== null && "__$u" in c) {
                    let node = c.__$u.s;
                    let i = 0;
                    const seen = new Set();
                    while(node !== null && node !== undefined && !seen.has(node)){
                        if (i === index) {
                            node.S.value = value;
                            return;
                        }
                        seen.add(node);
                        node = node.n;
                        i++;
                    }
                }
            }
        },
        suspend (id, active) {
            let vnode = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeById)(ids, id);
            while(vnode !== null){
                if (bindings.isSuspenseVNode(vnode)) {
                    const c = bindings.getComponent(vnode);
                    if (c) c.setState(bindings.createSuspenseState(vnode, active));
                    // Get nearest non-filtered vnode
                    let nearest = vnode;
                    while(nearest && (0,_shared_traverse__WEBPACK_IMPORTED_MODULE_6__.shouldFilter)(nearest, filters, config, bindings))nearest = bindings.getVNodeParent(nearest);
                    if (nearest && (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.hasVNodeId)(ids, nearest)) {
                        const nearestId = (0,_shared_idMapper__WEBPACK_IMPORTED_MODULE_5__.getVNodeId)(ids, nearest);
                        if (id !== nearestId) {
                            const inspectData = inspect(nearestId);
                            if (inspectData) {
                                inspectData.suspended = active;
                                port.send("inspect-result", inspectData);
                            }
                        }
                    }
                    break;
                }
                vnode = bindings.getVNodeParent(vnode);
            }
        }
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/serialize.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cleanContext: () => (cleanContext),
  cleanProps: () => (cleanProps),
  hasIn: () => (hasIn),
  isEditable: () => (isEditable),
  isReadOnlySignal: () => (isReadOnlySignal),
  isSignal: () => (isSignal),
  jsonify: () => (jsonify),
  maybeSetSignal: () => (maybeSetSignal),
  serialize: () => (serialize),
  serializeVNode: () => (serializeVNode),
  setIn: () => (setIn),
  setInCopy: () => (setInCopy)
});
function serializeVNode(x, config, bindings) {
    if (bindings.isVNode(x)) return {
        type: "vnode",
        name: bindings.getPropsVNodeDisplayName(x, config)
    };
    return null;
}
function isSignal(x) {
    return x !== null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function isReadOnlySignal(signal) {
    return signal._r === true || // Signals >=1.2.0
    "g" in signal && typeof signal.x === "function";
}
function sortStrings(a, b) {
    return a.localeCompare(b);
}
function jsonify(data, getVNode, seen) {
    // Break out of circular references
    if (seen.has(data)) return "[[Circular]]";
    if (data !== null && typeof data === "object") seen.add(data);
    if (typeof Element !== "undefined" && data instanceof Element) return {
        type: "html",
        name: `<${data.localName} />`
    };
    const vnode = getVNode(data);
    if (vnode != null) return vnode;
    if (isSignal(data)) return {
        type: "signal",
        name: isReadOnlySignal(data) ? "computed Signal" : "Signal",
        value: jsonify(data.peek(), getVNode, seen)
    };
    if (Array.isArray(data)) return data.map((x)=>jsonify(x, getVNode, seen));
    switch(typeof data){
        case "string":
            return data.length > 300 ? data.slice(300) : data;
        case "bigint":
            return {
                type: "bigint",
                value: data.toString(10)
            };
        case "function":
            return {
                type: "function",
                name: data.displayName || data.name || "anonymous"
            };
        case "symbol":
            return {
                type: "symbol",
                name: data.toString()
            };
        case "object":
            {
                if (data === null) return null;
                else if (data instanceof preactDevtoolsCtx.Blob) return {
                    type: "blob",
                    name: "Blob"
                };
                else if (data instanceof Set) return {
                    type: "set",
                    name: "Set",
                    entries: Array.from(data.values()).map((item)=>jsonify(item, getVNode, seen))
                };
                else if (data instanceof Map) return {
                    type: "map",
                    name: "Map",
                    entries: Array.from(data.entries()).map((entry)=>{
                        return [
                            jsonify(entry[0], getVNode, seen),
                            jsonify(entry[1], getVNode, seen)
                        ];
                    })
                };
                const out = {};
                Object.keys(data).sort(sortStrings).forEach((key)=>{
                    out[key] = jsonify(data[key], getVNode, seen);
                });
                return out;
            }
        default:
            return data;
    }
}
function isEditable(x) {
    switch(typeof x){
        case "string":
        case "number":
        case "boolean":
        case "bigint":
            return true;
        default:
            return false;
    }
}
function clone(value) {
    if (Array.isArray(value)) return value.slice();
    if (value !== null && typeof value === "object") {
        if (value instanceof Set) return new Set(value);
        if (value instanceof Map) return new Map(value);
        return {
            ...value
        };
    }
    return value;
}
/**
 * Deeply set a property and clone all parent objects/arrays
 */ function setInCopy(obj, path, value, idx = 0) {
    if (idx >= path.length) return value;
    // Signals bypass everything
    if (path[path.length - 1] === "value" && maybeSetSignal(obj, path, value)) return obj;
    const updated = clone(obj);
    if (obj instanceof Set) {
        const oldValue = Array.from(obj)[+path[idx]];
        updated.delete(oldValue);
        updated.add(setInCopy(oldValue, path, value, idx + 1));
    } else if (obj instanceof Map) {
        const oldEntry = Array.from(obj)[+path[idx]];
        const isKey = +path[idx + 1] === 0;
        if (isKey) {
            updated.delete(oldEntry[0]);
            updated.set(setInCopy(oldEntry[0], path, value, idx + 2), oldEntry[1]);
        } else {
            updated.delete(oldEntry[0]);
            updated.set(oldEntry[0], setInCopy(oldEntry[1], path, value, idx + 2));
        }
    } else {
        const key = path[idx];
        updated[key] = setInCopy(obj[key], path, value, idx + 1);
    }
    return updated;
}
function serialize(config, bindings, data) {
    return jsonify(data, (node)=>serializeVNode(node, config, bindings), new Set());
}
/**
 * Deeply mutate a property by walking down an array of property keys
 */ function setIn(obj, path, value) {
    const last = path.pop();
    const parent = path.reduce((acc, attr)=>acc ? acc[attr] : null, obj);
    if (parent && last) parent[last] = value;
}
function maybeSetSignal(obj, path, value) {
    let current = obj;
    for(let i = 0; i < path.length; i++){
        if (isSignal(current)) {
            current.value = value;
            return true;
        }
        current = current[path[i]];
    }
    return false;
}
function hasIn(obj, path) {
    let item = obj;
    for(let i = 0; i < path.length; i++){
        const key = path[i];
        if (item && key in item) {
            const next = item[key];
            if (next !== null && typeof next === "object") item = next;
        } else return false;
    }
    return true;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function cleanProps(props) {
    if (typeof props === "string" || !props) return null;
    const out = {};
    for(const key in props){
        if (key === "__source" || key === "__self") continue;
        out[key] = props[key];
    }
    if (!Object.keys(out).length) return null;
    return out;
}
const reg = /__cC\d+/;
function cleanContext(context) {
    const res = {};
    for(const key in context){
        if (reg.test(key)) continue;
        res[key] = context[key];
    }
    if (Object.keys(res).length == 0) return null;
    return res;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/stats.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DiffType: () => (DiffType),
  createStats: () => (createStats),
  getDiffType: () => (getDiffType),
  parseChildrenStats: () => (parseChildrenStats),
  parseStats: () => (parseStats),
  parseTypeStats: () => (parseTypeStats),
  recordComponentStats: () => (recordComponentStats),
  stats2ops: () => (stats2ops),
  updateDiffStats: () => (updateDiffStats),
  updateOpStats: () => (updateOpStats)
});
/* ESM import */var _view_store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/store/types.js");
/* ESM import */var _protocol_events_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/events-types.js");
/* ESM import */var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderer.js");



var DiffType;
(function(DiffType) {
    DiffType[DiffType["UNKNOWN"] = 0] = "UNKNOWN";
    DiffType[DiffType["KEYED"] = 1] = "KEYED";
    DiffType[DiffType["UNKEYED"] = 2] = "UNKEYED";
    DiffType[DiffType["MIXED"] = 3] = "MIXED";
})(DiffType || (DiffType = {}));
function getChildCountIdx(count) {
    return count > 4 ? 4 : count;
}
function updateDiffStats(stats, diff, childCount) {
    const idx = getChildCountIdx(childCount);
    if (diff === DiffType.KEYED) stats.keyed[idx]++;
    else if (diff === DiffType.UNKEYED) stats.unkeyed[idx]++;
    else if (diff === DiffType.MIXED) stats.mixed[idx]++;
}
function updateOpStats(stats, kind, vnode, bindings) {
    if (bindings.isComponent(vnode)) stats[kind].components++;
    else if (bindings.isElement(vnode)) stats[kind].elements++;
    else stats[kind].text++;
}
// TODO: store update depth
function createStats() {
    return {
        roots: [
            0,
            0,
            0,
            0,
            0
        ],
        classComponents: [
            0,
            0,
            0,
            0,
            0
        ],
        functionComponents: [
            0,
            0,
            0,
            0,
            0
        ],
        fragments: [
            0,
            0,
            0,
            0,
            0
        ],
        forwardRef: [
            0,
            0,
            0,
            0,
            0
        ],
        memo: [
            0,
            0,
            0,
            0,
            0
        ],
        suspense: [
            0,
            0,
            0,
            0,
            0
        ],
        elements: [
            0,
            0,
            0,
            0,
            0
        ],
        text: 0,
        keyed: [
            0,
            0,
            0,
            0,
            0
        ],
        unkeyed: [
            0,
            0,
            0,
            0,
            0
        ],
        mixed: [
            0,
            0,
            0,
            0,
            0
        ],
        mounts: {
            components: 0,
            elements: 0,
            text: 0
        },
        unmounts: {
            components: 0,
            elements: 0,
            text: 0
        },
        updates: {
            components: 0,
            elements: 0,
            text: 0
        },
        singleChildType: {
            roots: 0,
            classComponents: 0,
            functionComponents: 0,
            fragments: 0,
            forwardRef: 0,
            memo: 0,
            suspense: 0,
            elements: 0,
            text: 0
        }
    };
}
function stats2ops(stats, out) {
    out.push(_protocol_events_types__WEBPACK_IMPORTED_MODULE_1__.MsgTypes.COMMIT_STATS);
    pushStatsChildren(out, stats.roots);
    pushStatsChildren(out, stats.classComponents);
    pushStatsChildren(out, stats.functionComponents);
    pushStatsChildren(out, stats.fragments);
    pushStatsChildren(out, stats.forwardRef);
    pushStatsChildren(out, stats.memo);
    pushStatsChildren(out, stats.suspense);
    pushStatsChildren(out, stats.elements);
    out.push(stats.text);
    pushStatsChildren(out, stats.keyed);
    pushStatsChildren(out, stats.unkeyed);
    pushStatsChildren(out, stats.mixed);
    out.push(stats.mounts.components);
    out.push(stats.mounts.elements);
    out.push(stats.mounts.text);
    out.push(stats.updates.components);
    out.push(stats.updates.elements);
    out.push(stats.updates.text);
    out.push(stats.unmounts.components);
    out.push(stats.unmounts.elements);
    out.push(stats.unmounts.text);
    // Single child types
    out.push(stats.singleChildType.roots);
    out.push(stats.singleChildType.classComponents);
    out.push(stats.singleChildType.functionComponents);
    out.push(stats.singleChildType.fragments);
    out.push(stats.singleChildType.forwardRef);
    out.push(stats.singleChildType.memo);
    out.push(stats.singleChildType.suspense);
    out.push(stats.singleChildType.elements);
    out.push(stats.singleChildType.text);
}
function pushStatsChildren(out, stats) {
    out.push(stats[0]);
    out.push(stats[1]);
    out.push(stats[2]);
    out.push(stats[3]);
    out.push(stats[4]);
}
function getDiffType(child, prev) {
    if (prev !== DiffType.MIXED) {
        if (child.key != null) return prev === DiffType.UNKNOWN || prev === DiffType.KEYED ? DiffType.KEYED : DiffType.MIXED;
        else return prev === DiffType.UNKNOWN || prev === DiffType.UNKEYED ? DiffType.UNKEYED : DiffType.MIXED;
    }
    return prev;
}
function recordComponentStats(config, bindings, stats, vnode, children) {
    const childrenLen = children.length;
    const idx = getChildCountIdx(childrenLen);
    if (bindings.isComponent(vnode)) {
        if (vnode.type === config.Fragment) stats.fragments[idx]++;
        else if (vnode.type.prototype && vnode.type.prototype.render) stats.classComponents[idx]++;
        else stats.functionComponents[idx]++;
    } else if (bindings.isElement(vnode)) stats.elements[idx]++;
    else stats.text++;
    const devType = (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.getDevtoolsType)(vnode, bindings);
    switch(devType){
        case _view_store_types__WEBPACK_IMPORTED_MODULE_0__.DevNodeType.ForwardRef:
            stats.forwardRef[idx]++;
            break;
        case _view_store_types__WEBPACK_IMPORTED_MODULE_0__.DevNodeType.Memo:
            stats.memo[idx]++;
            break;
        case _view_store_types__WEBPACK_IMPORTED_MODULE_0__.DevNodeType.Suspense:
            stats.suspense[idx]++;
            break;
    }
    if (childrenLen === 1) {
        const child = children[0];
        if (child != null) {
            if (typeof child.type === "function") {
                if (child.type.prototype && child.type.prototype.render) stats.singleChildType.classComponents++;
                else {
                    if (child.type === config.Fragment) stats.singleChildType.fragments++;
                    else {
                        const childType = (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.getDevtoolsType)(child, bindings);
                        switch(childType){
                            case _view_store_types__WEBPACK_IMPORTED_MODULE_0__.DevNodeType.ForwardRef:
                                stats.singleChildType.forwardRef++;
                                break;
                            case _view_store_types__WEBPACK_IMPORTED_MODULE_0__.DevNodeType.Memo:
                                stats.singleChildType.memo++;
                                break;
                            case _view_store_types__WEBPACK_IMPORTED_MODULE_0__.DevNodeType.Suspense:
                                stats.singleChildType.suspense++;
                                break;
                        }
                    }
                    stats.singleChildType.functionComponents++;
                }
            } else if (child.type !== null) stats.singleChildType.elements++;
            else stats.singleChildType.text++;
        }
    }
}
function parseChildrenStats(i, ops) {
    const data = [
        ops[i++],
        ops[i++],
        ops[i++],
        ops[i++],
        ops[i++]
    ];
    return {
        i,
        data
    };
}
function parseTypeStats(i, ops) {
    const data = {
        components: ops[i++],
        elements: ops[i++],
        text: ops[i++]
    };
    return {
        i,
        data
    };
}
function parseStats(i, ops) {
    const roots = parseChildrenStats(i, ops);
    const klass = parseChildrenStats(roots.i, ops);
    const fnComps = parseChildrenStats(klass.i, ops);
    const fragments = parseChildrenStats(fnComps.i, ops);
    const forwardRef = parseChildrenStats(fragments.i, ops);
    const memo = parseChildrenStats(forwardRef.i, ops);
    const suspense = parseChildrenStats(memo.i, ops);
    const elements = parseChildrenStats(suspense.i, ops);
    i = elements.i;
    const text = ops[i++];
    const keyed = parseChildrenStats(i, ops);
    const unkeyed = parseChildrenStats(keyed.i, ops);
    const mixed = parseChildrenStats(unkeyed.i, ops);
    i = mixed.i;
    const mounts = parseTypeStats(i, ops);
    const updates = parseTypeStats(mounts.i, ops);
    const unmounts = parseTypeStats(updates.i, ops);
    i = unmounts.i;
    const singleRoots = ops[i++];
    const singleClassComponents = ops[i++];
    const singleFunctionComponents = ops[i++];
    const singleFragments = ops[i++];
    const singleForwardRef = ops[i++];
    const singleMemo = ops[i++];
    const singleSuspense = ops[i++];
    const singleElements = ops[i++];
    const singleText = ops[i++];
    const stats = {
        roots: roots.data,
        classComponents: klass.data,
        functionComponents: fnComps.data,
        fragments: fragments.data,
        forwardRef: forwardRef.data,
        memo: memo.data,
        suspense: suspense.data,
        elements: elements.data,
        text,
        keyed: keyed.data,
        unkeyed: unkeyed.data,
        mixed: mixed.data,
        mounts: mounts.data,
        updates: updates.data,
        unmounts: unmounts.data,
        singleChildType: {
            roots: singleRoots,
            classComponents: singleClassComponents,
            functionComponents: singleFunctionComponents,
            fragments: singleFragments,
            forwardRef: singleForwardRef,
            memo: singleMemo,
            suspense: singleSuspense,
            elements: singleElements,
            text: singleText
        }
    };
    return {
        i,
        stats
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/timings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createVNodeTimings: () => (createVNodeTimings),
  getTime: () => (getTime),
  removeTime: () => (removeTime),
  storeTime: () => (storeTime)
});
function storeTime(timings, id, time) {
    timings.set(id, time);
}
function getTime(timings, id) {
    return timings.get(id) || 0;
}
function removeTime(timings, id) {
    timings.start.delete(id);
    timings.end.delete(id);
}
function createVNodeTimings() {
    return {
        start: new Map(),
        end: new Map()
    };
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/traverse.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCommit: () => (createCommit),
  getFilteredChildren: () => (getFilteredChildren),
  shouldFilter: () => (shouldFilter)
});
/* ESM import */var _protocol_events_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/events-types.js");
/* ESM import */var _protocol_string_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/protocol/string-table.js");
/* ESM import */var _idMapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/idMapper.js");
/* ESM import */var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/renderer.js");
/* ESM import */var _stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/stats.js");
/* ESM import */var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/utils.js");





// import { NodeType } from "../../constants";


function getHocName(name) {
    const idx = name.indexOf("(");
    if (idx === -1) return null;
    const wrapper = name.slice(0, idx);
    return wrapper ? wrapper : null;
}
function addHocs(commit, id, hocs) {
    if (hocs.length > 0) {
        commit.operations.push(_protocol_events_types__WEBPACK_IMPORTED_MODULE_0__.MsgTypes.HOC_NODES, id, hocs.length);
        for(let i = 0; i < hocs.length; i++){
            const stringId = (0,_protocol_string_table__WEBPACK_IMPORTED_MODULE_1__.getStringId)(commit.strings, hocs[i]);
            commit.operations.push(stringId);
        }
    }
}
function detectHocs(commit, name, id, hocs) {
    const hocName = getHocName(name);
    if (name.startsWith("ForwardRef")) {
        const idx = name.indexOf("(");
        name = name.slice(idx + 1, -1) || "Anonymous";
        addHocs(commit, id, hocs);
        hocs = [];
    } else if (hocName) hocs = [
        ...hocs,
        hocName
    ];
    else {
        addHocs(commit, id, hocs);
        hocs = [];
    }
    return {
        name,
        hocs
    };
}
// function isTextNode(dom: HTMLElement | Text | null): dom is Text {
// 	return dom != null && dom.nodeType === NodeType.Text;
// }
// function updateHighlight<T extends SharedVNode>(
// 	profiler: ProfilerState,
// 	vnode: T,
// 	bindings: PreactBindings<T>,
// ) {
// 	if (profiler.highlightUpdates && bindings.isComponent(vnode)) {
// 		const stack: Array<T | null | undefined> = [vnode];
// 		let item;
// 		let dom;
// 		while ((item = stack.shift()) !== undefined) {
// 			// Account for placholders/holes
// 			if (item === null) continue;
// 			if (!bindings.isComponent(item)) {
// 				dom = bindings.getDom(item);
// 				break;
// 			}
// 			stack.push(...bindings.getActualChildren(item));
// 		}
// 		if (dom === null || dom === undefined) return;
// 		if (isTextNode(dom)) {
// 			dom = dom.parentNode as HTMLElement;
// 		}
// 		if (dom && !profiler.pendingHighlightUpdates.has(dom)) {
// 			profiler.pendingHighlightUpdates.add(dom);
// 			measureUpdate(profiler.updateRects, dom);
// 		}
// 	}
// }
function getFilteredChildren(vnode, filters, config, helpers) {
    const children = helpers.getActualChildren(vnode);
    const stack = children.slice();
    const out = [];
    let child;
    while(stack.length){
        child = stack.pop();
        if (child != null) {
            if (!shouldFilter(child, filters, config, helpers)) out.push(child);
            else {
                const nextChildren = helpers.getActualChildren(child);
                if (nextChildren.length > 0) stack.push(...nextChildren.slice());
            }
        }
    }
    return out.reverse();
}
function shouldFilter(vnode, filters, config, bindings) {
    // Filter text nodes by default. They are too tricky to match
    // with the previous one...
    if (bindings.isTextVNode(vnode)) return true;
    // TODO: Add a virtual root node to be able to filter the actual
    // ones. Currently we have a workaround on the extension side
    // that filters it there, but we should really do it here to be
    // consistent with all other filters.
    if (vnode.type === config.Fragment && filters.type.has("fragment")) {
        const parent = bindings.getVNodeParent(vnode);
        // Only filter non-root nodes
        if (parent != null) return true;
        return false;
    } else if (bindings.isElement(vnode) && filters.type.has("dom")) return true;
    if (filters.type.has("hoc")) {
        const name = bindings.getDisplayName(vnode, config);
        if (name.indexOf("(") > -1 && !name.startsWith("ForwardRef")) return true;
    }
    if (filters.type.has("textSignal")) {
        const name = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getSignalTextName)(bindings.getDisplayName(vnode, config));
        if (name === "__TextSignal") return true;
    }
    if (filters.regex.length > 0) {
        const name = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getSignalTextName)(bindings.getDisplayName(vnode, config));
        return filters.regex.some((r)=>{
            // Regexes with a global flag are stateful in JS :((
            r.lastIndex = 0;
            return r.test(name);
        });
    }
    // In Preact V11 we use a Portal component to render Suspense
    // children. Because that is only an implementation detail
    // we'll hide this component to avoid confusing users.
    const parent = bindings.getVNodeParent(vnode);
    if (parent !== null && bindings.isSuspenseVNode(parent) && bindings.isPortal(vnode)) return true;
    return false;
}
function mount(ids, commit, owners, vnode, ownerId, ancestorId, filters, domCache, config, profiler, hocs, bindings, timingsByVNode, renderReasonPre) {
    if (commit.stats !== null) (0,_stats__WEBPACK_IMPORTED_MODULE_4__.updateOpStats)(commit.stats, "mounts", vnode, bindings);
    const root = bindings.isRoot(vnode, config);
    const skip = shouldFilter(vnode, filters, config, bindings);
    let name = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getSignalTextName)(bindings.getDisplayName(vnode, config));
    if (filters.type.has("hoc")) {
        const hocName = getHocName(name);
        if (hocName) {
            hocs = [
                ...hocs,
                hocName
            ];
            if (name.startsWith("ForwardRef")) {
                const idx = name.indexOf("(");
                name = name.slice(idx + 1, -1) || "Anonymous";
            }
        }
    }
    if (root || !skip) {
        const id = (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getOrCreateVNodeId)(ids, vnode);
        if (!id) return;
        if (root) commit.operations.push(_protocol_events_types__WEBPACK_IMPORTED_MODULE_0__.MsgTypes.ADD_ROOT, id);
        if (!root) {
            const maybeOwner = owners.get(vnode);
            if (maybeOwner !== undefined && !bindings.isRoot(maybeOwner, config)) {
                const maybeOwnerId = (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeId)(ids, maybeOwner);
                ownerId = maybeOwnerId !== -1 ? maybeOwnerId : ownerId;
            }
        }
        commit.operations.push(_protocol_events_types__WEBPACK_IMPORTED_MODULE_0__.MsgTypes.ADD_VNODE, id, (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.getDevtoolsType)(vnode, bindings), ancestorId, ownerId, (0,_protocol_string_table__WEBPACK_IMPORTED_MODULE_1__.getStringId)(commit.strings, name), vnode.key ? (0,_protocol_string_table__WEBPACK_IMPORTED_MODULE_1__.getStringId)(commit.strings, vnode.key) : 0, // and would otherwise cut off floats
        (timingsByVNode.start.get(vnode) || 0) * 1000, (timingsByVNode.end.get(vnode) || 0) * 1000);
        if (ownerId === -1 && !root) ownerId = id;
        if (hocs.length > 0) {
            addHocs(commit, id, hocs);
            hocs = [];
            ownerId = id;
        }
        // Capture render reason (mount here)
        if (profiler.isProfiling && profiler.captureRenderReasons) commit.operations.push(_protocol_events_types__WEBPACK_IMPORTED_MODULE_0__.MsgTypes.RENDER_REASON, id, 1 /* RenderReason.MOUNT */ , 0);
        // updateHighlight(profiler, vnode, bindings);
        ancestorId = id;
    }
    if (skip && !bindings.isComponent(vnode)) {
        const dom = bindings.getDom(vnode);
        if (dom) domCache.set(dom, vnode);
    }
    let diff = _stats__WEBPACK_IMPORTED_MODULE_4__.DiffType.UNKNOWN;
    let childCount = 0;
    const children = bindings.getActualChildren(vnode);
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (child != null) {
            if (commit.stats !== null) {
                diff = (0,_stats__WEBPACK_IMPORTED_MODULE_4__.getDiffType)(child, diff);
                childCount++;
            }
            mount(ids, commit, owners, child, ownerId, ancestorId, filters, domCache, config, profiler, hocs, bindings, timingsByVNode, renderReasonPre);
        }
    }
    if (commit.stats !== null) {
        (0,_stats__WEBPACK_IMPORTED_MODULE_4__.updateDiffStats)(commit.stats, diff, childCount);
        (0,_stats__WEBPACK_IMPORTED_MODULE_4__.recordComponentStats)(config, bindings, commit.stats, vnode, children);
    }
}
function resetChildren(commit, ids, id, vnode, filters, config, helpers) {
    const children = helpers.getActualChildren(vnode);
    if (!children.length) return;
    const next = getFilteredChildren(vnode, filters, config, helpers);
    // Suspense internals mutate child outside of the standard render cycle.
    // This leads to stale children on the devtools ends. To work around that
    // We'll always reset the children of a Suspense vnode.
    let forceReorder = false;
    if (helpers.isSuspenseVNode(vnode)) forceReorder = true;
    if (!forceReorder && next.length < 2) return;
    commit.operations.push(_protocol_events_types__WEBPACK_IMPORTED_MODULE_0__.MsgTypes.REORDER_CHILDREN, id, next.length, ...next.map((x)=>(0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeId)(ids, x)));
}
function update(ids, commit, owners, vnode, ownerId, ancestorId, filters, domCache, config, profiler, hocs, bindings, timingsByVNode, renderReasonPre) {
    if (commit.stats !== null) (0,_stats__WEBPACK_IMPORTED_MODULE_4__.updateOpStats)(commit.stats, "updates", vnode, bindings);
    let diff = _stats__WEBPACK_IMPORTED_MODULE_4__.DiffType.UNKNOWN;
    const skip = shouldFilter(vnode, filters, config, bindings);
    if (skip) {
        const id = (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeId)(ids, vnode);
        if (filters.type.has("hoc")) {
            const name = bindings.getDisplayName(vnode, config);
            const res = detectHocs(commit, name, id, hocs);
            hocs = res.hocs;
        }
        let childCount = 0;
        const children = bindings.getActualChildren(vnode);
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (child != null) {
                if (commit.stats !== null) {
                    diff = (0,_stats__WEBPACK_IMPORTED_MODULE_4__.getDiffType)(child, diff);
                    childCount++;
                }
                update(ids, commit, owners, child, ownerId, ancestorId, filters, domCache, config, profiler, hocs, bindings, timingsByVNode, renderReasonPre);
            }
        }
        if (commit.stats !== null) {
            (0,_stats__WEBPACK_IMPORTED_MODULE_4__.updateDiffStats)(commit.stats, diff, childCount);
            (0,_stats__WEBPACK_IMPORTED_MODULE_4__.recordComponentStats)(config, bindings, commit.stats, vnode, children);
        }
        return;
    }
    if (!(0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.hasVNodeId)(ids, vnode)) {
        mount(ids, commit, owners, vnode, ownerId, ancestorId, filters, domCache, config, profiler, hocs, bindings, timingsByVNode, renderReasonPre);
        return;
    }
    const id = (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeId)(ids, vnode);
    const oldVNode = (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeById)(ids, id);
    (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.updateVNodeId)(ids, id, vnode);
    const didRender = timingsByVNode.end.has(vnode);
    if (!didRender) return;
    const name = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getSignalTextName)(bindings.getDisplayName(vnode, config));
    if (filters.type.has("hoc")) {
        const res = detectHocs(commit, name, id, hocs);
        hocs = res.hocs;
    }
    commit.operations.push(_protocol_events_types__WEBPACK_IMPORTED_MODULE_0__.MsgTypes.UPDATE_VNODE_TIMINGS, id, (timingsByVNode.start.get(vnode) || 0) * 1000, (timingsByVNode.end.get(vnode) || 0) * 1000);
    if (profiler.isProfiling && profiler.captureRenderReasons) {
        const reason = renderReasonPre !== null ? renderReasonPre.get(vnode) || null : bindings.getRenderReasonPost(ids, bindings, timingsByVNode, oldVNode, vnode);
        if (reason !== null) {
            const count = reason.items ? reason.items.length : 0;
            commit.operations.push(_protocol_events_types__WEBPACK_IMPORTED_MODULE_0__.MsgTypes.RENDER_REASON, id, reason.type, count);
            if (reason.items && count > 0) commit.operations.push(...reason.items.map((str)=>(0,_protocol_string_table__WEBPACK_IMPORTED_MODULE_1__.getStringId)(commit.strings, str)));
        }
    }
    // updateHighlight(profiler, vnode, bindings);
    const oldChildren = oldVNode ? bindings.getActualChildren(oldVNode).map((v)=>v && (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeId)(ids, v)) : [];
    let shouldReorder = false;
    let childCount = 0;
    const children = bindings.getActualChildren(vnode);
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (child == null) {
            const oldChildId = oldChildren[i];
            if (oldChildId != null) commit.unmountIds.push(oldChildId);
        } else if ((0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.hasVNodeId)(ids, child) || shouldFilter(child, filters, config, bindings)) {
            if (commit.stats !== null) {
                diff = (0,_stats__WEBPACK_IMPORTED_MODULE_4__.getDiffType)(child, diff);
                childCount++;
            }
            update(ids, commit, owners, child, ownerId, id, filters, domCache, config, profiler, hocs, bindings, timingsByVNode, renderReasonPre);
            // TODO: This is only sometimes necessary
            shouldReorder = true;
        } else {
            if (commit.stats !== null) {
                diff = (0,_stats__WEBPACK_IMPORTED_MODULE_4__.getDiffType)(child, diff);
                childCount++;
            }
            mount(ids, commit, owners, child, ownerId, id, filters, domCache, config, profiler, hocs, bindings, timingsByVNode, renderReasonPre);
            shouldReorder = true;
        }
    }
    if (commit.stats !== null) {
        (0,_stats__WEBPACK_IMPORTED_MODULE_4__.updateDiffStats)(commit.stats, diff, childCount);
        (0,_stats__WEBPACK_IMPORTED_MODULE_4__.recordComponentStats)(config, bindings, commit.stats, vnode, children);
    }
    if (shouldReorder) resetChildren(commit, ids, id, vnode, filters, config, bindings);
}
/**
 * Crawl upwards through potentially filtered vnodes until
 * we find a non-filtered node or reach the top of the tree
 */ function findClosestNonFilteredParent(ids, helpers, vnode) {
    let parentId = -1;
    let parent = helpers.getVNodeParent(vnode);
    while(parent !== null){
        parentId = (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeId)(ids, parent);
        if (parentId !== -1) break;
        parent = helpers.getVNodeParent(parent);
    }
    return parentId;
}
function createCommit(ids, roots, owners, vnode, filters, domCache, config, profiler, helpers, timingsByVNode, renderReasonPre) {
    const commit = {
        operations: [],
        rootId: -1,
        strings: new Map(),
        unmountIds: [],
        renderReasons: new Map(),
        stats: profiler.recordStats ? (0,_stats__WEBPACK_IMPORTED_MODULE_4__.createStats)() : null
    };
    let parentId = -1;
    // Roots have no known ownerId
    let ownerId = -1;
    const isNew = !(0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.hasVNodeId)(ids, vnode);
    if (helpers.isRoot(vnode, config)) {
        const children = helpers.getActualChildren(vnode);
        if (commit.stats !== null) {
            const childrenLen = children.length;
            commit.stats.roots[childrenLen > 4 ? 4 : childrenLen]++;
        }
        parentId = -1;
        if (children.length > 0 && helpers.isVNode(children[0])) {
            const child = children[0];
            if (roots.has(child)) {
                const dom = roots.get(child);
                roots.delete(child);
                roots.set(vnode, dom);
            }
        }
    } else {
        parentId = findClosestNonFilteredParent(ids, helpers, vnode);
        if (!isNew) ownerId = shouldFilter(vnode, filters, config, helpers) ? parentId : (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeId)(ids, vnode);
    }
    if (isNew) mount(ids, commit, owners, vnode, ownerId, parentId, filters, domCache, config, profiler, [], helpers, timingsByVNode, renderReasonPre);
    else update(ids, commit, owners, vnode, ownerId, parentId, filters, domCache, config, profiler, [], helpers, timingsByVNode, renderReasonPre);
    let rootId = (0,_idMapper__WEBPACK_IMPORTED_MODULE_2__.getVNodeId)(ids, vnode);
    if (rootId === -1) rootId = findClosestNonFilteredParent(ids, helpers, vnode);
    commit.rootId = rootId;
    return commit;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/shared/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  deepClone: () => (deepClone),
  getSignalTextName: () => (getSignalTextName),
  newRootData: () => (newRootData),
  sortRoots: () => (sortRoots),
  traverse: () => (traverse)
});
function getSignalTextName(name) {
    return name === "_st" ? "__TextSignal" : name;
}
function traverse(vnode, fn, bindings) {
    fn(vnode);
    const children = bindings.getActualChildren(vnode);
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (child != null) {
            traverse(child, fn, bindings);
            fn(child);
        }
    }
}
// eslint-disable-next-line @typescript-eslint/ban-types
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function newRootData(id, node) {
    return {
        id,
        node
    };
}
function sortRoots(searchRoot, roots) {
    const map = new Map();
    const walking = new Set();
    walking.add(searchRoot);
    for(let i = 0; i < roots.length; i++){
        let node = roots[i].node;
        // Update root map. Note that multiple roots can point
        // to the same container node
        if (!map.has(node)) map.set(node, []);
        map.get(node).push(roots[i].id);
        while(node !== null && node !== searchRoot){
            if (walking.has(node)) break;
            walking.add(node);
            node = node.parentNode;
        }
    }
    const stack = [
        searchRoot
    ];
    let out = [];
    let item;
    while((item = stack.pop()) !== undefined){
        if (!walking.has(item)) continue;
        if (item.nodeName !== "IFRAME") {
            const len = item.childNodes.length;
            for(let i = 0; i < len; i++)stack.push(item.childNodes[len - i - 1]);
        }
        const found = map.get(item);
        if (found !== undefined) out = out.concat(found);
    }
    return out;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/constants.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ClientToDevtools: () => (ClientToDevtools),
  ContentScriptName: () => (ContentScriptName),
  DevtoolsPanelInlineName: () => (DevtoolsPanelInlineName),
  DevtoolsPanelName: () => (DevtoolsPanelName),
  DevtoolsToClient: () => (DevtoolsToClient),
  NodeType: () => (NodeType),
  PROFILE_RELOAD: () => (PROFILE_RELOAD),
  PageHookName: () => (PageHookName),
  STATS_RELOAD: () => (STATS_RELOAD)
});
const ClientToDevtools = "preact-client-to-devtools";
const DevtoolsToClient = "preact-devtools-to-client";
const ContentScriptName = "preact-content-script";
const DevtoolsPanelName = "preact-devtools-panel";
const DevtoolsPanelInlineName = "preact-devtools-panel/inline";
const PageHookName = "preact-page-hook";
const PROFILE_RELOAD = "preact-devtools_profile-and-reload";
const STATS_RELOAD = "preact-devtools_stats-and-reload";
var NodeType;
(function(NodeType) {
    NodeType[NodeType["Element"] = 1] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CData"] = 4] = "CData";
    NodeType[NodeType["XMLProcessingInstruction"] = 7] = "XMLProcessingInstruction";
    NodeType[NodeType["Comment"] = 8] = "Comment";
    NodeType[NodeType["Document"] = 9] = "Document";
    NodeType[NodeType["DocumentType"] = 10] = "DocumentType";
    NodeType[NodeType["DocumentFragment"] = 11] = "DocumentFragment";
})(NodeType || (NodeType = {}));


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/react-lynx/index.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// Skip setup in test environment because `require` does not work
// in vitest esm env, and `lynx.getDevtool` is not mocked yet
if (true) // dynamic import will generate a new lazy bundle
// which is not what we needed
(__webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/react-lynx/setup.js")/* .setupReactLynx */.setupReactLynx)();


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/react-lynx/setup.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupReactLynx: () => (setupReactLynx)
});
/* ESM import */var _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js");

function setupReactLynx() {
    try {
        // @ts-ignore
        if (typeof lynx.getDevtool !== "function") throw new Error("`lynx.getDevtool` is not a function. Please upgrade your LynxSDK to the latest version.");
        // @ts-ignore
        globalThis.preactDevtoolsCtx || (globalThis.preactDevtoolsCtx = {});
        const __DEBUG__ = globalThis.preactDevtoolsCtx.__DEBUG__;
        if (__DEBUG__) console.log("[PREACT DEVTOOLS] debug mode is enabled");
        if (__DEBUG__) Object.assign(preactDevtoolsCtx, {
            lynx,
            __page: _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.__page,
            __root: _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.__root,
            // @ts-ignore
            lynxCoreInject
        });
        const listeners = {};
        preactDevtoolsCtx.addEventListener = (type, callback)=>{
            if (!listeners[type]) listeners[type] = [];
            listeners[type].push(callback);
        };
        preactDevtoolsCtx.postMessage = ({ source, type, data }, _targetOrigin)=>{
            var _listeners_message, _listeners_message_i, _listeners_message1;
            var _listeners_message_length;
            for(let i = 0; i < ((_listeners_message_length = (_listeners_message = listeners["message"]) === null || _listeners_message === void 0 ? void 0 : _listeners_message.length) !== null && _listeners_message_length !== void 0 ? _listeners_message_length : 0); i++)(_listeners_message1 = listeners["message"]) === null || _listeners_message1 === void 0 ? void 0 : (_listeners_message_i = _listeners_message1[i]) === null || _listeners_message_i === void 0 ? void 0 : _listeners_message_i.call(_listeners_message1, {
                // in-App to-self message
                source: preactDevtoolsCtx,
                data: {
                    source,
                    type,
                    data
                }
            });
            if (__DEBUG__) console.log("lynx.getDevtool().dispatchEvent", {
                source,
                type,
                data
            });
            // @ts-ignore
            lynx.getDevtool().dispatchEvent({
                type: "PreactDevtools",
                data: JSON.stringify({
                    source,
                    type,
                    data
                })
            });
        };
        // @ts-ignore
        lynx.getDevtool().addEventListener("PreactDevtools", (e)=>{
            var _listeners_message, _listeners_message_i, _listeners_message1;
            const dataObj = JSON.parse(e.data);
            if (__DEBUG__) console.log("hdt -> frontend message received", dataObj);
            const { source, type, data } = dataObj;
            var _listeners_message_length;
            for(let i = 0; i < ((_listeners_message_length = (_listeners_message = listeners["message"]) === null || _listeners_message === void 0 ? void 0 : _listeners_message.length) !== null && _listeners_message_length !== void 0 ? _listeners_message_length : 0); i++)(_listeners_message1 = listeners["message"]) === null || _listeners_message1 === void 0 ? void 0 : (_listeners_message_i = _listeners_message1[i]) === null || _listeners_message_i === void 0 ? void 0 : _listeners_message_i.call(_listeners_message1, {
                source: preactDevtoolsCtx,
                data: {
                    source,
                    type,
                    data
                }
            });
        });
        if (typeof preactDevtoolsCtx.localStorage === "undefined" || preactDevtoolsCtx.localStorage === null) {
            const storage = {};
            preactDevtoolsCtx.localStorage = {
                getItem: function(key) {
                    if (__DEBUG__) console.log(`getItem called with key: ${key}`);
                    var _storage_key;
                    return Object.prototype.hasOwnProperty.call(storage, key) ? (_storage_key = storage[key]) !== null && _storage_key !== void 0 ? _storage_key : null : null;
                },
                setItem: function(key, value) {
                    if (__DEBUG__) console.log(`setItem called with key: ${key}, value: ${value}`);
                    storage[key] = value.toString();
                },
                removeItem: function(key) {
                    if (__DEBUG__) console.log(`removeItem called with key: ${key}`);
                    delete storage[key];
                },
                clear: function() {
                    if (__DEBUG__) console.log("clear called");
                    for(const key in storage)if (Object.prototype.hasOwnProperty.call(storage, key)) delete storage[key];
                },
                key: function(index) {
                    if (__DEBUG__) console.log(`key called with index: ${index}`);
                    const keys = Object.keys(storage);
                    return keys[index] || null;
                },
                get length () {
                    if (__DEBUG__) console.log("length property accessed");
                    return Object.keys(storage).length;
                }
            };
        }
        if (typeof preactDevtoolsCtx.performance === "undefined" || preactDevtoolsCtx.performance === null) {
            if (__DEBUG__) console.log("Mocking performance API...");
            const marks = [];
            const measures = [];
            const startTime = Date.now();
            preactDevtoolsCtx.performance = {
                now: function() {
                    // 返回自浏览器上下文被完全加载并设立以来经过的毫秒数
                    return Date.now() - startTime;
                },
                // @ts-ignore
                mark: function(markName) {
                    if (__DEBUG__) console.log(`performance.mark called with markName: ${markName}`);
                    marks.push({
                        name: markName,
                        entryType: "mark",
                        startTime: this.now(),
                        duration: 0
                    });
                },
                // @ts-ignore
                measure: function(measureName, startMark, endMark) {
                    if (__DEBUG__) console.log(`performance.measure called with measureName: ${measureName}, startMark: ${startMark}, endMark: ${endMark}`);
                    const start = marks.find((mark)=>mark.name === startMark);
                    const end = marks.find((mark)=>mark.name === endMark);
                    if (start && end) measures.push({
                        name: measureName,
                        entryType: "measure",
                        startTime: start.startTime,
                        duration: end.startTime - start.startTime
                    });
                    else if (__DEBUG__) console.warn("Invalid marks for performance.measure");
                },
                getEntriesByType: function(type) {
                    if (__DEBUG__) console.log(`performance.getEntriesByType called with type: ${type}`);
                    if (type === "mark") return [
                        ...marks
                    ];
                    else if (type === "measure") return [
                        ...measures
                    ];
                    return [];
                },
                clearMarks: function(markName) {
                    if (__DEBUG__) console.log(`performance.clearMarks called with markName: ${markName}`);
                    if (markName) {
                        for(let i = marks.length - 1; i >= 0; i--)if (marks[i].name === markName) marks.splice(i, 1);
                    } else marks.length = 0; // Clear all marks
                },
                clearMeasures: function(measureName) {
                    if (__DEBUG__) console.log(`performance.clearMeasures called with measureName: ${measureName}`);
                    if (measureName) {
                        for(let i = measures.length - 1; i >= 0; i--)if (measures[i].name === measureName) measures.splice(i, 1);
                    } else measures.length = 0; // Clear all measures
                }
            };
        }
        // Shims for:
        // const treeParent = ...
        if (typeof preactDevtoolsCtx.Node === "undefined" || preactDevtoolsCtx.Node === null) preactDevtoolsCtx.Node = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.__root.__proto__.constructor;
        // }
        // Shims for:
        // const sorted = sortRoots(document.body, roots);
        if (typeof preactDevtoolsCtx.document === "undefined" || preactDevtoolsCtx.document === null) preactDevtoolsCtx.document = {
            // @ts-ignore
            body: _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.__root
        };
        // Shims for:
        // else if (data instanceof window.Blob) {
        if (typeof preactDevtoolsCtx.Blob === "undefined" || preactDevtoolsCtx.Blob === null) preactDevtoolsCtx.Blob = class Blob {
            constructor(parts, options){
                if (__DEBUG__) console.log("Blob constructor", parts, options);
            }
        };
        __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/shells/shared/installHook.js");
        __webpack_require__("(react:background)/./node_modules/preact/devtools/dist/devtools.mjs");
        console.log("[PREACT DEVTOOLS] Devtools initialized successfully");
    } catch (e) {
        console.warn("[PREACT DEVTOOLS] Devtools failed to initialize:");
        console.warn(e);
    }
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/shells/shared/installHook.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _adapter_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/hook.js");
/* ESM import */var _adapter_adapter_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/preact-devtools/lib/adapter/adapter/port.js");
// Note: This file will be inlined into `content-script.ts`
// when building the extension.


globalThis.__PREACT_DEVTOOLS__ = (0,_adapter_hook__WEBPACK_IMPORTED_MODULE_0__.createHook)((0,_adapter_adapter_port__WEBPACK_IMPORTED_MODULE_1__.createPortForHook)(preactDevtoolsCtx));


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/shells/shared/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  copyToClipboard: () => (copyToClipboard),
  debounce: () => (debounce),
  inject: () => (inject),
  injectStyles: () => (injectStyles),
  isFirefox: () => (isFirefox),
  throttle: () => (throttle)
});
function inject(codeOrSrc, mode = "code") {
    const s = document.createElement("script");
    // This runs before `<head>` is available
    const target = document.head || document.documentElement;
    if (mode === "code") s.textContent = codeOrSrc;
    else s.src = codeOrSrc;
    target.appendChild(s);
    s.remove();
}
function injectStyles(href) {
    const s = document.createElement("link");
    s.rel = "stylesheet";
    s.href = href;
    const target = document.head || document.documentElement;
    target.appendChild(s);
}
function debounce(callback, wait) {
    let timeout = null;
    return (...args)=>{
        const next = ()=>callback(...args);
        clearTimeout(timeout);
        timeout = setTimeout(next, wait);
    };
}
function throttle(callback, wait) {
    let running = false;
    return (...args)=>{
        if (!running) {
            callback(...args);
            running = true;
            setTimeout(()=>{
                running = false;
                callback(...args);
            }, wait);
        }
    };
}
function copyToClipboard(text) {
    const dom = document.createElement("textarea");
    dom.textContent = text;
    document.body.appendChild(dom);
    dom.select();
    document.execCommand("copy");
    dom.blur();
    document.body.removeChild(dom);
}
function isFirefox() {
    return navigator.userAgent.indexOf("Firefox") >= 0;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/components/sidebar/inspect/parseProps.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseProps: () => (parseProps)
});
function parseProps(data, path, limit, depth = 0, name = path, out = new Map(), forceReadonly = false) {
    if (depth >= limit) {
        out.set(path, {
            depth,
            name,
            id: path,
            type: "string",
            editable: false,
            value: "\u2026",
            children: [],
            meta: null
        });
        return out;
    }
    if (Array.isArray(data)) {
        const children = [];
        out.set(path, {
            depth,
            name,
            id: path,
            type: "array",
            editable: false,
            value: data,
            children,
            meta: null
        });
        data.forEach((item, i)=>{
            const childPath = `${path}.${i}`;
            children.push(childPath);
            parseProps(item, childPath, limit, depth + 1, "" + i, out, forceReadonly);
        });
    } else if (typeof data === "object") {
        if (data === null) out.set(path, {
            depth,
            name,
            id: path,
            type: "null",
            editable: false,
            value: data,
            children: [],
            meta: null
        });
        else {
            const keys = Object.keys(data);
            const maybeCustom = keys.length === 2;
            const maybeCollection = keys.length === 3;
            // Functions are encoded as objects
            if (maybeCustom && typeof data.name === "string" && data.type === "function") out.set(path, {
                depth,
                name,
                id: path,
                type: "function",
                editable: false,
                value: data,
                children: [],
                meta: null
            });
            else if (maybeCustom && typeof data.value === "string" && data.type === "bigint") out.set(path, {
                depth,
                name,
                id: path,
                type: "bigint",
                editable: !forceReadonly,
                value: data,
                children: [],
                meta: null
            });
            else if (maybeCustom && typeof data.name === "string" && data.type === "vnode") out.set(path, {
                depth,
                name,
                id: path,
                type: "vnode",
                editable: false,
                value: data,
                children: [],
                meta: null
            });
            else if (maybeCollection && typeof data.name === "string" && data.type === "set") {
                const children = [];
                const node = {
                    depth,
                    name,
                    id: path,
                    type: "set",
                    editable: false,
                    value: data,
                    children,
                    meta: null
                };
                data.entries.forEach((item, i)=>{
                    const childPath = `${path}.${i}`;
                    children.push(childPath);
                    parseProps(item, childPath, limit, depth + 1, "" + i, out, forceReadonly);
                });
                out.set(path, node);
            } else if (maybeCollection && typeof data.name === "string" && data.type === "map") {
                const children = [];
                const node = {
                    depth,
                    name,
                    id: path,
                    type: "map",
                    editable: false,
                    value: data,
                    children,
                    meta: null
                };
                data.entries.forEach((item, i)=>{
                    const childPath = `${path}.${i}`;
                    children.push(childPath);
                    parseProps(item, childPath, limit, depth + 1, "" + i, out, forceReadonly);
                });
                out.set(path, node);
            } else if (maybeCustom && typeof data.name === "string" && data.type === "blob") out.set(path, {
                depth,
                name,
                id: path,
                type: "blob",
                editable: false,
                value: data,
                children: [],
                meta: null
            });
            else if (maybeCustom && typeof data.name === "string" && data.type === "symbol") out.set(path, {
                depth,
                name,
                id: path,
                type: "symbol",
                editable: false,
                value: data,
                children: [],
                meta: null
            });
            else if (maybeCustom && typeof data.name === "string" && data.type === "html") out.set(path, {
                depth,
                name,
                id: path,
                type: "html",
                editable: false,
                value: data,
                children: [],
                meta: null
            });
            else if (maybeCollection && typeof data.name === "string" && data.type === "signal") {
                const children = [];
                const isEditable = data.name === "Signal";
                const node = {
                    depth,
                    name,
                    id: path,
                    type: "signal",
                    editable: isEditable,
                    value: data,
                    children,
                    meta: null
                };
                const childPath = `${path}.value`;
                children.push(childPath);
                out.set(path, node);
                parseProps(data.value, childPath, limit, depth + 1, "value", out, !isEditable);
            } else {
                const node = {
                    depth,
                    name,
                    id: path,
                    type: "object",
                    editable: false,
                    value: data,
                    children: [],
                    meta: null
                };
                out.set(path, node);
                Object.keys(data).forEach((key)=>{
                    const nextPath = `${path}.${key}`;
                    node.children.push(nextPath);
                    parseProps(data[key], nextPath, limit, depth + 1, key, out, forceReadonly);
                });
                out.set(path, node);
            }
        }
    } else {
        const type = typeof data;
        out.set(path, {
            depth,
            name,
            id: path,
            type: type,
            editable: type !== "undefined" && data !== "[[Circular]]" && !forceReadonly,
            value: data,
            children: [],
            meta: null
        });
    }
    return out;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/components/sidebar/inspect/serializeProps.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isSerializedBigint: () => (isSerializedBigint),
  serializeProps: () => (serializeProps)
});
function serializeProps(value) {
    if (Array.isArray(value)) return value.map(serializeProps);
    else if (value !== null && typeof value === "object" && Object.keys(value).length === 2 && "type" in value && typeof value.type === "string") {
        if ("name" in value && typeof value.name === "string") {
            if (value.type === "function") return value.name + "()";
            else if (value.type === "vnode") return `<${value.name} />`;
        } else if ("value" in value && typeof value.value === "string" && value.type === "bigint") return `${value.value}n`;
    }
    return value;
}
function isSerializedBigint(value) {
    return typeof value === "object" && value !== null && Object.keys(value).length === 2 && "type" in value && // @ts-ignore can remove after TypeScript 4.9.x: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#unlisted-property-narrowing-with-the-in-operator
    value.type === "bigint" && "value" in value && // @ts-ignore can remove after TypeScript 4.9.x: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#unlisted-property-narrowing-with-the-in-operator
    typeof value.value === "string";
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/components/tree/windowing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clamp: () => (clamp),
  flattenChildren: () => (flattenChildren),
  getLastChild: () => (getLastChild)
});
function flattenChildren(tree, id, isCollapsed) {
    const out = [];
    const visited = new Set();
    const stack = [
        id
    ];
    while(stack.length > 0){
        const item = stack.pop();
        if (item == null) continue;
        const node = tree.get(item);
        if (!node) continue;
        if (!visited.has(node.id)) {
            out.push(node.id);
            visited.add(node.id);
            if (!isCollapsed(node.id)) for(let i = node.children.length; i--;)stack.push(node.children[i]);
        }
    }
    return out;
}
function clamp(n, max) {
    return Math.max(0, Math.min(n, max));
}
function getLastChild(nodes, id) {
    const stack = [
        id
    ];
    let item;
    let last = id;
    while((item = stack.pop()) != null){
        last = item;
        const node = nodes.get(item);
        if (node && node.children.length > 0) stack.push(node.children[node.children.length - 1]);
    }
    return last;
}


}),
"(react:background)/./node_modules/@lynx-js/preact-devtools/lib/view/store/types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DevNodeType: () => (DevNodeType),
  Panel: () => (Panel)
});
var DevNodeType;
(function(DevNodeType) {
    /**
     * Groups are virtual nodes inserted by the devtools
     * to make certain operations easier. They are not
     * created by Preact.
     */ DevNodeType[DevNodeType["Group"] = 0] = "Group";
    DevNodeType[DevNodeType["Element"] = 1] = "Element";
    DevNodeType[DevNodeType["ClassComponent"] = 2] = "ClassComponent";
    DevNodeType[DevNodeType["FunctionComponent"] = 3] = "FunctionComponent";
    DevNodeType[DevNodeType["ForwardRef"] = 4] = "ForwardRef";
    DevNodeType[DevNodeType["Memo"] = 5] = "Memo";
    DevNodeType[DevNodeType["Suspense"] = 6] = "Suspense";
    DevNodeType[DevNodeType["Context"] = 7] = "Context";
    DevNodeType[DevNodeType["Consumer"] = 8] = "Consumer";
    DevNodeType[DevNodeType["Portal"] = 9] = "Portal";
})(DevNodeType || (DevNodeType = {}));
var Panel;
(function(Panel) {
    Panel["ELEMENTS"] = "ELEMENTS";
    Panel["PROFILER"] = "PROFILER";
    Panel["SETTINGS"] = "SETTINGS";
    Panel["STATISTICS"] = "STATISTICS";
})(Panel || (Panel = {}));


}),
"(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs": (function (module, __unused_webpack_exports, __webpack_require__) {
const { isComponent, flush } = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js");
// eslint-disable-next-line
const getExports = (m)=>m.exports || m.__proto__.exports;
function isSafeExport(key) {
    return key === '__esModule' || key === '__N_SSG' || key === '__N_SSP' || key === 'config';
}
function registerExports(moduleExports, moduleId) {
    globalThis['__PREFRESH__'].register(moduleExports, moduleId + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') return;
    for(const key in moduleExports){
        if (isSafeExport(key)) continue;
        const exportValue = moduleExports[key];
        const typeID = moduleId + ' %exports% ' + key;
        globalThis['__PREFRESH__'].register(exportValue, typeID);
    }
}
const shouldBind = (m)=>{
    let isCitizen = false;
    const moduleExports = getExports(m);
    if (isComponent(moduleExports)) isCitizen = true;
    if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') isCitizen = isCitizen || false;
    else for(const key in moduleExports){
        if (key === '__esModule') continue;
        const exportValue = moduleExports[key];
        if (isComponent(exportValue)) isCitizen = isCitizen || true;
    }
    return isCitizen;
};
module.exports = Object.freeze({
    getExports,
    shouldBind,
    flush,
    registerExports
});


}),
"(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  flush: () => (flush),
  isComponent: () => (isComponent)
});
/* ESM import */var _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js");

const VNODE_COMPONENT = '__c';
const NAMESPACE = '__PREFRESH__';
const COMPONENT_HOOKS = '__H';
const HOOKS_LIST = '__';
const EFFECTS_LIST = '__h';
const RERENDER_COUNT = '__r';
const CATCH_ERROR_OPTION = '__e';
const COMPONENT_DIRTY = '__d';
const COMPONENT_BITS = '__g';
const HOOK_VALUE = '__';
const HOOK_ARGS = '__H';
const HOOK_CLEANUP = '__c';
const COMPONENT_DIRTY_BIT = 8;
const isDirty = (vnode)=>{
    if (vnode[VNODE_COMPONENT] && vnode[VNODE_COMPONENT][COMPONENT_DIRTY]) return true;
    if (vnode[VNODE_COMPONENT] && vnode[VNODE_COMPONENT][COMPONENT_BITS] & COMPONENT_DIRTY_BIT) return true;
};
const unsetDirty = (vnode)=>{
    if (vnode[VNODE_COMPONENT]) {
        if (vnode[VNODE_COMPONENT][COMPONENT_DIRTY]) vnode[VNODE_COMPONENT][COMPONENT_DIRTY] = false;
        if (vnode[VNODE_COMPONENT][COMPONENT_BITS]) vnode[VNODE_COMPONENT][COMPONENT_BITS] &= ~COMPONENT_DIRTY_BIT;
    }
};
const oldCatchError = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options[CATCH_ERROR_OPTION];
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options[CATCH_ERROR_OPTION] = (error, vnode, oldVNode, info)=>{
    if (isDirty(vnode)) unsetDirty(vnode);
    if (oldCatchError) oldCatchError(error, vnode, oldVNode, info);
};
const defer = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = (process)=>{
    defer(()=>{
        try {
            process();
        } catch (e) {
            process[RERENDER_COUNT] = 0;
            throw e;
        }
    });
};
const vnodesForComponent = new WeakMap();
const mappedVNodes = new WeakMap();
const lastSeen = new Map();
const getMappedVnode = (type)=>{
    if (mappedVNodes.has(type)) return getMappedVnode(mappedVNodes.get(type));
    return type;
};
const BUILT_IN_COMPONENTS = [
    'Fragment',
    'Suspense',
    'SuspenseList'
];
const isBuiltIn = (type)=>BUILT_IN_COMPONENTS.includes(type.name);
const oldVnode = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.vnode = (vnode)=>{
    if (vnode && 'function' == typeof vnode.type && !isBuiltIn(vnode.type)) {
        const vnodes = vnodesForComponent.get(vnode.type);
        if (vnodes) vnodes.push(vnode);
        else vnodesForComponent.set(vnode.type, [
            vnode
        ]);
        const foundType = getMappedVnode(vnode.type);
        if (foundType !== vnode.type) {
            const vnodes = vnodesForComponent.get(foundType);
            if (vnodes) vnodes.push(vnode);
            else vnodesForComponent.set(foundType, [
                vnode
            ]);
        }
        vnode.type = foundType;
        if (vnode[VNODE_COMPONENT] && 'prototype' in vnode.type && vnode.type.prototype.render) vnode[VNODE_COMPONENT].constructor = vnode.type;
    }
    if (oldVnode) oldVnode(vnode);
};
const oldDiffed = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.diffed;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.diffed = (vnode)=>{
    if (vnode && 'function' == typeof vnode.type) {
        const vnodes = vnodesForComponent.get(vnode.type);
        lastSeen.set(vnode.__v, vnode);
        if (vnodes) {
            const matchingDom = vnodes.filter((p)=>p.__c === vnode.__c);
            if (matchingDom.length > 1) {
                const i = vnodes.findIndex((p)=>p === matchingDom[0]);
                vnodes.splice(i, 1);
            }
        }
    }
    if (oldDiffed) oldDiffed(vnode);
};
const oldUnmount = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.unmount = (vnode)=>{
    const type = (vnode || {}).type;
    if ('function' == typeof type && vnodesForComponent.has(type)) {
        const vnodes = vnodesForComponent.get(type);
        if (vnodes) {
            const index = vnodes.indexOf(vnode);
            if (-1 !== index) vnodes.splice(index, 1);
        }
    }
    if (oldUnmount) oldUnmount(vnode);
};
const signaturesForType = new WeakMap();
const computeKey = (signature)=>{
    let fullKey = signature.key;
    let hooks;
    try {
        hooks = signature.getCustomHooks();
    } catch (err) {
        signature.forceReset = true;
        return fullKey;
    }
    for(let i = 0; i < hooks.length; i++){
        const hook = hooks[i];
        if ('function' != typeof hook) {
            signature.forceReset = true;
            break;
        }
        const nestedHookSignature = signaturesForType.get(hook);
        if (void 0 === nestedHookSignature) continue;
        const nestedHookKey = computeKey(nestedHookSignature);
        if (nestedHookSignature.forceReset) signature.forceReset = true;
        fullKey += '\n---\n' + nestedHookKey;
    }
    return fullKey;
};
let typesById = new Map();
let pendingUpdates = [];
function sign(type, key, forceReset, getCustomHooks, status) {
    if (type) {
        let signature = signaturesForType.get(type);
        if ('begin' === status) {
            signaturesForType.set(type, {
                type,
                key,
                forceReset,
                getCustomHooks: getCustomHooks || (()=>[])
            });
            return 'needsHooks';
        }
        if ('needsHooks' === status) signature.fullKey = computeKey(signature);
    }
}
function replaceComponent(OldType, NewType, resetHookState) {
    const vnodes = vnodesForComponent.get(OldType);
    if (!vnodes) return;
    vnodesForComponent["delete"](OldType);
    vnodesForComponent.set(NewType, vnodes);
    mappedVNodes.set(OldType, NewType);
    pendingUpdates = pendingUpdates.filter((p)=>p[0] !== OldType);
    vnodes.forEach((node)=>{
        let vnode = node;
        if (vnode && vnode.__v && !vnode.__c) {
            vnode = lastSeen.get(vnode.__v, vnode);
            lastSeen["delete"](vnode.__v);
        }
        if (!vnode || !vnode.__c || !vnode.__c.__P) return;
        vnode.type = NewType;
        if (vnode[VNODE_COMPONENT]) {
            vnode[VNODE_COMPONENT].constructor = vnode.type;
            try {
                if (vnode[VNODE_COMPONENT] instanceof OldType) {
                    const oldInst = vnode[VNODE_COMPONENT];
                    const newInst = new NewType(vnode[VNODE_COMPONENT].props, vnode[VNODE_COMPONENT].context);
                    vnode[VNODE_COMPONENT] = newInst;
                    for(let i in oldInst){
                        const type = typeof oldInst[i];
                        if (i in newInst) {
                            if ('function' !== type && typeof newInst[i] === type) {
                                if ('object' === type && null != newInst[i] && newInst[i].constructor === oldInst[i].constructor) Object.assign(newInst[i], oldInst[i]);
                                else newInst[i] = oldInst[i];
                            }
                        } else newInst[i] = oldInst[i];
                    }
                }
            } catch (e) {
                vnode[VNODE_COMPONENT].constructor = NewType;
            }
            if (resetHookState) {
                if (vnode[VNODE_COMPONENT][COMPONENT_HOOKS] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].length) vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((possibleEffect)=>{
                    if (possibleEffect[HOOK_CLEANUP] && 'function' == typeof possibleEffect[HOOK_CLEANUP]) {
                        possibleEffect[HOOK_CLEANUP]();
                        possibleEffect[HOOK_CLEANUP] = void 0;
                    } else if (possibleEffect[HOOK_ARGS] && possibleEffect[HOOK_VALUE] && 3 === Object.keys(possibleEffect).length) {
                        const cleanupKey = Object.keys(possibleEffect).find((key)=>key !== HOOK_ARGS && key !== HOOK_VALUE);
                        if (cleanupKey && 'function' == typeof possibleEffect[cleanupKey]) {
                            possibleEffect[cleanupKey]();
                            possibleEffect[cleanupKey] = void 0;
                        }
                    }
                });
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS] = {
                    [HOOKS_LIST]: [],
                    [EFFECTS_LIST]: []
                };
            } else if (vnode[VNODE_COMPONENT][COMPONENT_HOOKS] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].length) {
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((possibleEffect)=>{
                    if (possibleEffect[HOOK_CLEANUP] && 'function' == typeof possibleEffect[HOOK_CLEANUP]) {
                        possibleEffect[HOOK_CLEANUP]();
                        possibleEffect[HOOK_CLEANUP] = void 0;
                    } else if (possibleEffect[HOOK_ARGS] && possibleEffect[HOOK_VALUE] && 3 === Object.keys(possibleEffect).length) {
                        const cleanupKey = Object.keys(possibleEffect).find((key)=>key !== HOOK_ARGS && key !== HOOK_VALUE);
                        if (cleanupKey && 'function' == typeof possibleEffect[cleanupKey]) possibleEffect[cleanupKey]();
                        possibleEffect[cleanupKey] = void 0;
                    }
                });
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((hook)=>{
                    if (hook.__H && Array.isArray(hook.__H)) hook.__H = void 0;
                });
            }
            _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate.call(vnode[VNODE_COMPONENT]);
        }
    });
}
globalThis[NAMESPACE] = {
    getSignature: (type)=>signaturesForType.get(type),
    register: (type, id)=>{
        if ('function' != typeof type) return;
        if (typesById.has(id)) {
            const existing = typesById.get(id);
            if (existing !== type) {
                pendingUpdates.push([
                    existing,
                    type
                ]);
                typesById.set(id, type);
            }
        } else typesById.set(id, type);
        if (!signaturesForType.has(type)) signaturesForType.set(type, {
            getCustomHooks: ()=>[],
            type
        });
    },
    getPendingUpdates: ()=>pendingUpdates,
    flush: ()=>{
        pendingUpdates = [];
    },
    replaceComponent,
    sign,
    computeKey: computeKey
};
const compareSignatures = (prev, next)=>{
    const prevSignature = globalThis.__PREFRESH__.getSignature(prev) || {};
    const nextSignature = globalThis.__PREFRESH__.getSignature(next) || {};
    if (prevSignature.key !== nextSignature.key || globalThis.__PREFRESH__.computeKey(prevSignature) !== globalThis.__PREFRESH__.computeKey(nextSignature) || nextSignature.forceReset) globalThis.__PREFRESH__.replaceComponent(prev, next, true);
    else globalThis.__PREFRESH__.replaceComponent(prev, next, false);
};
const flush = ()=>{
    const pending = [
        ...globalThis.__PREFRESH__.getPendingUpdates()
    ];
    globalThis.__PREFRESH__.flush();
    if (pending.length > 0) pending.forEach(([prev, next])=>{
        compareSignatures(prev, next);
    });
};
const isComponent = (exportValue)=>{
    if ('function' == typeof exportValue) {
        if (null != exportValue.prototype && exportValue.prototype.isReactComponent) return true;
        const name = exportValue.name || exportValue.displayName;
        return 'string' == typeof name && name[0] && name[0] == name[0].toUpperCase();
    }
    return false;
};



}),
"(react:background)/./node_modules/@lynx-js/react/runtime/debug/index.cjs": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
if (true) __webpack_require__("(react:background)/./node_modules/preact/debug/dist/debug.mjs");


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/debug/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _index_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/debug/index.cjs");
/* ESM import */var _index_cjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_cjs__WEBPACK_IMPORTED_MODULE_0__);
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



}),
"(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  jsx: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx),
  jsxDEV: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV),
  jsxs: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)
});
/* ESM import */var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/alog/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initAlog: () => (initAlog)
});
/* ESM import */var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/alog/render.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function initAlog() {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.initRenderAlog)();
} //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/alog/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initRenderAlog: () => (initRenderAlog)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function initRenderAlog() {
    const oldAfterDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = function(vnode) {
        // Only log on component vnode
        if (typeof vnode.type === 'function') {
            const threadName = 'BackgroundThread';
            const displayName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDisplayName)(vnode.type);
            {
                var _console_alog, _console;
                const dom = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DOM];
                (_console_alog = (_console = console).alog) === null || _console_alog === void 0 ? void 0 : _console_alog.call(_console, `[${threadName} Component Render] name: ${displayName}, uniqID: ${dom === null || dom === void 0 ? void 0 : dom.type}, __id: ${dom === null || dom === void 0 ? void 0 : dom.__id}`);
            }
        }
        oldAfterDiff === null || oldAfterDiff === void 0 ? void 0 : oldAfterDiff(vnode);
    };
} //# sourceMappingURL=render.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackgroundSnapshotInstance: () => (BackgroundSnapshotInstance),
  hydrate: () => (hydrate)
});
/* ESM import */var _gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGestureBagkround.js");
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshotInstanceHydrationMap_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshotInstanceHydrationMap.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_ctx_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.












class BackgroundSnapshotInstance {
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    // This will be called in `lazy`/`Suspense`.
    appendChild(child) {
        return this.insertBefore(child);
    }
    insertBefore(node, beforeNode) {
        if (node.__removed_from_tree) {
            node.__removed_from_tree = false;
            // This is only called by `lazy`/`Suspense` through `appendChild` so beforeNode is always undefined.
            /* v8 ignore next */ reconstructInstanceTree([
                node
            ], this.__id, beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.__id);
        } else _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.InsertBefore, this.__id, node.__id, beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.__id);
        // If the node already has a parent, remove it from its current parent
        const p = node.__parent;
        if (p) {
            if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
            else p.__firstChild = node.__nextSibling;
            if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
            else p.__lastChild = node.__previousSibling;
        }
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    removeChild(node) {
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.RemoveChild, this.__id, node.__id);
        node.__removed_from_tree = true;
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
        (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.queueRefAttrUpdate)(()=>{
            (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_8__.traverseSnapshotInstance)(node, (v)=>{
                var _v___snapshot_def_refAndSpreadIndexes;
                if (v.__values) (_v___snapshot_def_refAndSpreadIndexes = v.__snapshot_def.refAndSpreadIndexes) === null || _v___snapshot_def_refAndSpreadIndexes === void 0 ? void 0 : _v___snapshot_def_refAndSpreadIndexes.forEach((i)=>{
                    const value = v.__values[i];
                    if (value && (typeof value === 'object' || typeof value === 'function')) {
                        if ('__spread' in value && 'ref' in value) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.applyRef)(value.ref, null);
                        else if ('__ref' in value) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.applyRef)(value, null);
                    }
                });
            });
        }, null, 0, 0);
        _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalBackgroundSnapshotInstancesToRemove.push(node.__id);
    }
    tearDown() {
        (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_8__.traverseSnapshotInstance)(this, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
            _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.backgroundSnapshotInstanceManager.values["delete"](v.__id);
        });
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            if (node === this.__lastChild) break;
            node = node.__nextSibling;
        }
        return nodes;
    }
    setAttribute(key, value) {
        if (true) console.profile('setAttribute');
        if (key === 'values') {
            var _this___snapshot_def_refAndSpreadIndexes;
            if (_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch) {
                const oldValues = this.__values;
                if (oldValues) for(let index = 0; index < value.length; index++){
                    const { needUpdate, valueToCommit } = this.setAttributeImpl(value[index], oldValues[index], index);
                    if (needUpdate) _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttribute, this.__id, index, valueToCommit);
                }
                else {
                    const patch = [];
                    const length = value.length;
                    for(let index = 0; index < length; ++index){
                        const { valueToCommit } = this.setAttributeImpl(value[index], null, index);
                        patch[index] = valueToCommit;
                    }
                    _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttributes, this.__id, patch);
                }
            } else (_this___snapshot_def_refAndSpreadIndexes = this.__snapshot_def.refAndSpreadIndexes) === null || _this___snapshot_def_refAndSpreadIndexes === void 0 ? void 0 : _this___snapshot_def_refAndSpreadIndexes.forEach((index)=>{
                const v = value[index];
                if (v && (typeof v === 'object' || typeof v === 'function')) {
                    if ('__spread' in v && 'ref' in v) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.queueRefAttrUpdate)(null, v.ref, this.__id, index);
                    else if ('__ref' in v) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.queueRefAttrUpdate)(null, v, this.__id, index);
                }
            });
            this.__values = value;
            if (true) console.profileEnd();
            return;
        }
        var _this___extraProps, _this___values;
        if (typeof key === 'string') ((_this___extraProps = this.__extraProps) !== null && _this___extraProps !== void 0 ? _this___extraProps : this.__extraProps = {})[key] = value;
        else // is reserved as slow path
        ((_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [])[key] = value;
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttribute, this.__id, key, value);
        if (true) console.profileEnd();
    }
    setAttributeImpl(newValue, oldValue, index) {
        if (!newValue) {
            // `oldValue` can't be a spread.
            if (oldValue && typeof oldValue === 'object' && '__ref' in oldValue) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.queueRefAttrUpdate)(oldValue, null, this.__id, index);
            return {
                needUpdate: oldValue !== newValue,
                valueToCommit: newValue
            };
        }
        const newType = typeof newValue;
        if (newType === 'object') {
            const newValueObj = newValue;
            if ('__spread' in newValueObj) {
                const oldSpread = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__spread;
                const newSpread = (0,_snapshot_spread_js__WEBPACK_IMPORTED_MODULE_7__.transformSpread)(this, index, newValueObj);
                const needUpdate = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isDirectOrDeepEqual)(oldSpread, newSpread);
                // use __spread to cache the transform result for next diff
                newValueObj['__spread'] = newSpread;
                (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.queueRefAttrUpdate)(oldSpread && oldValue.ref, newValueObj['ref'], this.__id, index);
                if (needUpdate) for(const key in newSpread){
                    const newSpreadValue = newSpread[key];
                    if (!newSpreadValue) continue;
                    if (newSpreadValue._wkltId) newSpread[key] = (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_11__.onPostWorkletCtx)(newSpreadValue);
                    else if (newSpreadValue.__isGesture) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__.processGestureBackground)(newSpreadValue);
                    else if (key == '__lynx_timing_flag' && (oldSpread === null || oldSpread === void 0 ? void 0 : oldSpread[key]) != newSpreadValue && _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.globalPipelineOptions) _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.globalPipelineOptions.needTimestamps = true;
                }
                return {
                    needUpdate,
                    valueToCommit: newSpread
                };
            }
            if ('__ref' in newValueObj) {
                (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.queueRefAttrUpdate)(oldValue, newValueObj, this.__id, index);
                return {
                    needUpdate: false,
                    valueToCommit: 1
                };
            }
            if ('_wkltId' in newValueObj) return {
                needUpdate: true,
                valueToCommit: (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_11__.onPostWorkletCtx)(newValueObj)
            };
            if ('__isGesture' in newValueObj) {
                (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__.processGestureBackground)(newValueObj);
                return {
                    needUpdate: true,
                    valueToCommit: newValue
                };
            }
            if ('__ltf' in newValueObj) {
                // __lynx_timing_flag
                if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.globalPipelineOptions && (oldValue === null || oldValue === void 0 ? void 0 : oldValue.__ltf) != newValueObj['__ltf']) {
                    _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.globalPipelineOptions.needTimestamps = true;
                    return {
                        needUpdate: true,
                        valueToCommit: newValue
                    };
                }
                return {
                    needUpdate: false,
                    valueToCommit: newValue
                };
            }
            return {
                needUpdate: !(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isDirectOrDeepEqual)(oldValue, newValue),
                valueToCommit: newValue
            };
        }
        if (newType === 'function') {
            if (newValue.__ref) {
                (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.queueRefAttrUpdate)(oldValue, newValue, this.__id, index);
                return {
                    needUpdate: false,
                    valueToCommit: 1
                };
            }
            /* event */ return {
                needUpdate: !oldValue,
                valueToCommit: 1
            };
        }
        return {
            needUpdate: oldValue !== newValue,
            valueToCommit: newValue
        };
    }
    constructor(type){
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        this.__snapshot_def = _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.snapshotManager.values.get(type);
        const id = this.__id = _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.backgroundSnapshotInstanceManager.nextId += 1;
        _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.backgroundSnapshotInstanceManager.values.set(id, this);
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.CreateElement, type, id);
    }
}
function hydrate(before, after) {
    (0,_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.initGlobalSnapshotPatch)();
    const helper = (before, after)=>{
        var _after___values;
        _snapshotInstanceHydrationMap_js__WEBPACK_IMPORTED_MODULE_9__.hydrationMap.set(after.__id, before.id);
        _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.backgroundSnapshotInstanceManager.updateId(after.__id, before.id);
        (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
            const old = before.values[index];
            if (value) {
                if (typeof value === 'object') {
                    if ('__spread' in value) {
                        // `value.__spread` my contain event ids using snapshot ids before hydration. Remove it.
                        delete value.__spread;
                        const __spread = (0,_snapshot_spread_js__WEBPACK_IMPORTED_MODULE_7__.transformSpread)(after, index, value);
                        for(const key in __spread){
                            const v = __spread[key];
                            if (v && typeof v === 'object') {
                                if ('_wkltId' in v) (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_11__.onPostWorkletCtx)(v);
                                else if ('__isGesture' in v) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__.processGestureBackground)(v);
                            }
                        }
                        after.__values[index]['__spread'] = __spread;
                        value = __spread;
                    } else if ('__ref' in value) value = old;
                    else if ('_wkltId' in value) (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_11__.onPostWorkletCtx)(value);
                    else if ('__isGesture' in value) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__.processGestureBackground)(value);
                } else if (typeof value === 'function') {
                    if ('__ref' in value) value = old;
                    else value = `${after.__id}:${index}:`;
                }
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isDirectOrDeepEqual)(value, old)) {
                if (value === undefined && old === null) ;
                else _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttribute, after.__id, index, value);
            }
        });
        if (after.__extraProps) for(const key in after.__extraProps){
            var _before_extraProps;
            const value = after.__extraProps[key];
            const old = (_before_extraProps = before.extraProps) === null || _before_extraProps === void 0 ? void 0 : _before_extraProps[key];
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isDirectOrDeepEqual)(value, old)) _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttribute, after.__id, key, value);
        }
        const { slot } = after.__snapshot_def;
        var _before_children;
        const beforeChildNodes = (_before_children = before.children) !== null && _before_children !== void 0 ? _before_children : [];
        const afterChildNodes = after.childNodes;
        if (!slot) return;
        slot.forEach(([type], index)=>{
            switch(type){
                case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_5__.DynamicPartType.Slot:
                case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_5__.DynamicPartType.MultiChildren:
                    {
                        // TODO: the following null assertions are not 100% safe
                        const v1 = beforeChildNodes[index];
                        const v2 = afterChildNodes[index];
                        helper(v1, v2);
                        break;
                    }
                case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_5__.DynamicPartType.Children:
                case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_5__.DynamicPartType.ListChildren:
                    {
                        const diffResult = (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.diffArrayLepus)(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                            helper(a, b);
                        });
                        (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.diffArrayAction)(beforeChildNodes, diffResult, (node, target)=>{
                            reconstructInstanceTree([
                                node
                            ], before.id, target === null || target === void 0 ? void 0 : target.id);
                            return undefined;
                        }, (node)=>{
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.RemoveChild, before.id, node.id);
                        }, (node, target)=>{
                            // changedList.push([SnapshotOperation.RemoveChild, before.id, node.id]);
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.InsertBefore, before.id, node.id, target === null || target === void 0 ? void 0 : target.id);
                        });
                        break;
                    }
            }
        });
    };
    helper(before, after);
    // Hydration should not trigger ref updates. They were incorrectly triggered when using `setAttribute` to add values to the patch list.
    (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.clearQueuedRefs)();
    return (0,_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.takeGlobalSnapshotPatch)();
}
function reconstructInstanceTree(afters, parentId, targetId) {
    for (const child of afters){
        const id = child.__id;
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.CreateElement, child.type, id);
        const values = child.__values;
        if (values) {
            child.__values = undefined;
            child.setAttribute('values', values);
        }
        const extraProps = child.__extraProps;
        for(const key in extraProps)child.setAttribute(key, extraProps[key]);
        reconstructInstanceTree(child.childNodes, id);
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.InsertBefore, parentId, id, targetId);
    }
} //# sourceMappingURL=backgroundSnapshot.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// for better reuse if runtime is changed
function factory({ createElement, useMemo, Suspense, lazy }, loadLazyBundle) {
    /**
     * @internal a polyfill for <component is=? />
     */ const __ComponentIsPolyfill = ({ is, ...props })=>{
        if (typeof is !== 'string') {
            lynx.reportError(new Error('You must provide a string to props `is` when using syntax `<component is=? />`.'));
            return null;
        }
        // @ts-ignore
        const D = useMemo(()=>lazy(()=>loadLazyBundle(is)), [
            is
        ]);
        return createElement(Suspense, {
            key: is
        }, createElement(D, props));
    };
    return __ComponentIsPolyfill;
} //# sourceMappingURL=componentIs.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory),
  withInitDataInState: () => (withInitDataInState)
});
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");

// for better reuse if runtime is changed
function factory({ createContext, useState, createElement, useLynxGlobalEventListener: useListener }, prop, eventName) {
    const Context = createContext({});
    const Provider = ({ children })=>{
        const [__, set] = useState(lynx[prop]);
        const handleChange = ()=>{
            if (prop === '__initData') _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.globalFlushOptions.triggerDataUpdated = true;
            set(lynx[prop]);
        };
        useChanged(handleChange);
        return createElement(Context.Provider, {
            value: __
        }, children);
    };
    const Consumer = Context.Consumer;
    const use = ()=>{
        const [__, set] = useState(lynx[prop]);
        useChanged(()=>{
            if (prop === '__initData') _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.globalFlushOptions.triggerDataUpdated = true;
            set(lynx[prop]);
        });
        return __;
    };
    const useChanged = (callback)=>{
        useListener(eventName, callback);
    };
    return {
        /* v8 ignore next */ Context: ()=>Context,
        Provider: ()=>Provider,
        Consumer: ()=>Consumer,
        use: ()=>use,
        useChanged: ()=>useChanged
    };
}
/**
 * Higher-Order Component (HOC) that injects `initData` into the state of the given class component.
 *
 * This HOC checks if the provided component is a class component. If it is, it wraps the component
 * and injects the `initData` into its state. It also adds a listener
 * to update the state when data changes, and removes the listener when the component unmounts.
 *
 * @typeParam P - The type of the props of the wrapped component.
 * @typeParam S - The type of the state of the wrapped component.
 *
 * @param App - The class component to be wrapped by the HOC.
 *
 * @returns The original component if it is not a class component, otherwise a new class component
 *          with `initData` injection and state update functionality.
 *
 * @example
 * ```typescript
 * class App extends React.Component<MyProps, MyState> {
 *   // component implementation
 * }
 *
 * export default withInitDataInState(App);
 * ```
 * @public
 */ function withInitDataInState(App) {
    const isClassComponent = 'prototype' in App && 'render' in App.prototype;
    /* v8 ignore next 4 */ if (!isClassComponent) return App;
    class C extends App {
        componentWillUnmount() {
            var _super_componentWillUnmount;
            (_super_componentWillUnmount = super.componentWillUnmount) === null || _super_componentWillUnmount === void 0 ? void 0 : _super_componentWillUnmount.call(this);
            lynx.getJSModule('GlobalEventEmitter').removeListener('onDataChanged', this.h);
        }
        constructor(props){
            super(props);
            this.state = {
                ...this.state,
                ...lynx.__initData
            };
            lynx.getJSModule('GlobalEventEmitter').addListener('onDataChanged', this.h = (...args)=>{
                const [newData] = args;
                _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.globalFlushOptions.triggerDataUpdated = true;
                this.setState(newData);
            });
        }
    }
    return C;
} //# sourceMappingURL=initData.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComponentFromReactRuntime: () => (ComponentFromReactRuntime),
  wrapWithLynxComponent: () => (wrapWithLynxComponent)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function wrapWithLynxComponent(jsxSnapshot, jsxComponent) {
    const C = jsxComponent.type;
    if (typeof C === 'function' && (C === ComponentFromReactRuntime || C.prototype instanceof ComponentFromReactRuntime)) {
        if (jsxSnapshot.length === 1) return jsxSnapshot(jsxComponent);
        else {
            // spread
            if (!jsxComponent.props.removeComponentElement) return jsxSnapshot(jsxComponent, takeComponentAttributes(jsxComponent));
        }
    }
    return jsxComponent;
}
// @ts-expect-error
class ComponentFromReactRuntime extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
}
const __COMPONENT_ATTRIBUTES__ = /* @__PURE__ */ new Set([
    'name',
    'style',
    'class',
    'flatten',
    'clip-radius',
    'overlap',
    'user-interaction-enabled',
    'native-interaction-enabled',
    'block-native-event',
    'enableLayoutOnly',
    'cssAlignWithLegacyW3C',
    'intersection-observers',
    'trigger-global-event',
    'exposure-scene',
    'exposure-id',
    'exposure-screen-margin-top',
    'exposure-screen-margin-bottom',
    'exposure-screen-margin-left',
    'exposure-screen-margin-right',
    'focusable',
    'focus-index',
    'accessibility-label',
    'accessibility-element',
    'accessibility-traits',
    'enable-new-animator'
]);
function takeComponentAttributes(jsxComponent) {
    const attributes = {};
    Object.keys(jsxComponent.props).forEach((k)=>{
        // let re1 = Regex::new(r"^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$").unwrap();
        // let re2 = Regex::new(r"^data-([A-Za-z]+)$").unwrap();
        if (__COMPONENT_ATTRIBUTES__.has(k) || k === 'id' || k === 'className' || k === 'dataSet' || k === 'data-set' || k === 'removeComponentElement' || /^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$/.exec(k) || /^data-([A-Za-z]+)$/.exec(k)) {
            attributes[k] = jsxComponent.props[k];
            delete jsxComponent.props[k];
        }
    });
    return attributes;
} //# sourceMappingURL=lynxComponent.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/component-stack.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCurrentVNode: () => (getCurrentVNode),
  getDisplayName: () => (getDisplayName),
  getOwnerStack: () => (getOwnerStack),
  setupComponentStack: () => (setupComponentStack)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * @license
The MIT License (MIT)

Copyright (c) 2015-present Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */ 

/**
 * Get human readable name of the component/dom node
 */ function getDisplayName(vnode) {
    var _vnode_type_displayName;
    if (vnode.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment) return 'Fragment';
    else if (typeof vnode.type == 'function') return (_vnode_type_displayName = vnode.type.displayName) !== null && _vnode_type_displayName !== void 0 ? _vnode_type_displayName : vnode.type.name;
    else if (typeof vnode.type == 'string') return vnode.type;
    return '#text';
}
/**
 * Used to keep track of the currently rendered `vnode` and print it
 * in debug messages.
 */ const renderStack = [];
/**
 * Keep track of the current owners. An owner describes a component
 * which was responsible to render a specific `vnode`. This exclude
 * children that are passed via `props.children`, because they belong
 * to the parent owner.
 *
 * ```jsx
 * const Foo = props => <div>{props.children}</div> // div's owner is Foo
 * const Bar = props => {
 *   return (
 *     <Foo><span /></Foo> // Foo's owner is Bar, span's owner is Bar
 *   )
 * }
 * ```
 *
 * Note: A `vnode` may be hoisted to the root scope due to compiler
 * optimization. In these cases the `_owner` will be different.
 */ let ownerStack = [];
/**
 * Get the currently rendered `vnode`
 */ function getCurrentVNode() {
    return renderStack.length > 0 ? renderStack[renderStack.length - 1] : null;
}
/**
 * Check if a `vnode` is a possible owner.
 */ function isPossibleOwner(vnode) {
    return typeof vnode.type == 'function' && vnode.type != preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
/**
 * Return the component stack that was captured up to this point.
 */ function getOwnerStack(vnode) {
    const stack = [
        vnode
    ];
    let next = vnode;
    while(next._owner != null){
        stack.push(next._owner);
        next = next._owner;
    }
    return stack.reduce((acc, owner)=>{
        acc += `  in ${getDisplayName(owner)}`;
        const source = owner.__source;
        if (source) acc += ` (at ${source.fileName}:${source.lineNumber})`;
        return acc += '\n';
    }, '');
}
/**
 * Setup code to capture the component trace while rendering. Note that
 * we cannot simply traverse `vnode._parent` upwards, because we have some
 * debug messages for `this.setState` where the `vnode` is `undefined`.
 */ function setupComponentStack() {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    const oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    const oldRoot = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.ROOT];
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const oldVNode = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
    const oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = (vnode)=>{
        if (isPossibleOwner(vnode)) ownerStack.pop();
        renderStack.pop();
        if (oldDiffed) oldDiffed(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode)=>{
        if (isPossibleOwner(vnode)) renderStack.push(vnode);
        if (oldDiff) oldDiff(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.ROOT] = (vnode, parent)=>{
        ownerStack = [];
        if (oldRoot) oldRoot(vnode, parent);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = (vnode)=>{
        vnode._owner = ownerStack.length > 0 ? ownerStack[ownerStack.length - 1] : null;
        if (oldVNode) oldVNode(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER] = (vnode)=>{
        if (isPossibleOwner(vnode)) ownerStack.push(vnode);
        if (oldRender) oldRender(vnode);
    };
} //# sourceMappingURL=component-stack.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initProfileHook: () => (initProfileHook)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





function initProfileHook() {
    // early-exit if required profiling APIs are unavailable
    let p;
    /* v8 ignore start */ if (!(p = lynx.performance) || typeof p.profileStart !== 'function' || typeof p.profileEnd !== 'function' || typeof p.profileMark !== 'function' || typeof p.profileFlowId !== 'function') return;
    /* v8 ignore stop */ const profileStart = p.profileStart.bind(p);
    const profileEnd = p.profileEnd.bind(p);
    const profileMark = p.profileMark.bind(p);
    const profileFlowId = p.profileFlowId.bind(p);
    // for each setState call, we will add a profiling trace and
    // attach a flowId to the component instance.
    // This allows us to trace the flow of its diffing, committing and patching.
    {
        const sFlowID = Symbol('FLOW_ID');
        {
            function buildSetStateProfileMarkArgs(currentState, nextState) {
                const EMPTY_OBJ = {};
                currentState !== null && currentState !== void 0 ? currentState : currentState = EMPTY_OBJ;
                nextState !== null && nextState !== void 0 ? nextState : nextState = EMPTY_OBJ;
                return {
                    'current state keys': JSON.stringify(Object.keys(currentState)),
                    'next state keys': JSON.stringify(Object.keys(nextState)),
                    'changed (shallow diff) state keys': JSON.stringify(Object.keys(nextState).filter((key)=>currentState[key] !== nextState[key]))
                };
            }
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype, 'setState', function(old, state, callback) {
                var _sFlowID;
                old === null || old === void 0 ? void 0 : old.call(this, state, callback);
                var _this_;
                if (this[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.DIRTY]) profileMark('ReactLynx::setState', {
                    flowId: (_this_ = this[_sFlowID = sFlowID]) !== null && _this_ !== void 0 ? _this_ : this[_sFlowID] = profileFlowId(),
                    args: buildSetStateProfileMarkArgs(this.state, this[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_STATE])
                });
            });
        }
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.DIFF2, (old, vnode, oldVNode)=>{
            // We only add profiling trace for Component
            if (typeof vnode.type === 'function') {
                const profileOptions = {};
                {
                    const c = oldVNode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMPONENT];
                    if (c) {
                        const flowId = c[sFlowID];
                        delete c[sFlowID];
                        if (flowId) {
                            var _globalPatchOptions;
                            var _flowIds;
                            (_flowIds = (_globalPatchOptions = _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_1__.globalPatchOptions).flowIds) !== null && _flowIds !== void 0 ? _flowIds : _globalPatchOptions.flowIds = [];
                            _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_1__.globalPatchOptions.flowIds.push(flowId);
                            profileOptions.flowId = flowId;
                        }
                    }
                }
                profileStart(`ReactLynx::diff::${(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getDisplayName)(vnode.type)}`, profileOptions);
            }
            old === null || old === void 0 ? void 0 : old(vnode, oldVNode);
        });
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.DIFFED, (old, vnode)=>{
            if (typeof vnode.type === 'function') profileEnd(); // for options[DIFF]
            old === null || old === void 0 ? void 0 : old(vnode);
        });
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMMIT, (old, vnode, commitQueue)=>{
            profileStart('ReactLynx::commit', {
                ..._lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_1__.globalPatchOptions.flowIds ? {
                    flowId: _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_1__.globalPatchOptions.flowIds["0"],
                    flowIds: _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_1__.globalPatchOptions.flowIds
                } : {}
            });
            old === null || old === void 0 ? void 0 : old(vnode, commitQueue);
            profileEnd();
        });
    }
    // Profile the user-provided `render`.
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.RENDER, (old, vnode)=>{
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalRender = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMPONENT].render;
        vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMPONENT].render = function render(props, state, context) {
            profileStart(`ReactLynx::render::${(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getDisplayName)(vnode.type)}`);
            try {
                return originalRender.call(this, props, state, context);
            } finally{
                profileEnd();
                vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMPONENT].render = originalRender;
            }
        };
        old === null || old === void 0 ? void 0 : old(vnode);
    });
    {
        const sPatchLength = Symbol('PATCH_LENGTH');
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.DIFF, (old, vnode)=>{
            if (typeof vnode.type === 'function' && _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.__globalSnapshotPatch) vnode[sPatchLength] = _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.__globalSnapshotPatch.length;
            old === null || old === void 0 ? void 0 : old(vnode);
        });
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.DIFFED, (old, vnode)=>{
            if (typeof vnode.type === 'function' && _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.__globalSnapshotPatch) {
                if (vnode[sPatchLength] === _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.__globalSnapshotPatch.length) profileMark('ReactLynx::diffFinishNoPatch', {
                    args: {
                        componentName: /* #__INLINE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getDisplayName)(vnode.type)
                    }
                });
                delete vnode[sPatchLength];
            }
            old === null || old === void 0 ? void 0 : old(vnode);
        });
    }
} //# sourceMappingURL=profile.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/document.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  document: () => (document),
  setupBackgroundDocument: () => (setupBackgroundDocument),
  setupDocument: () => (setupDocument)
});
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const document = {};
/**
 * Sets up the document interface for the background thread.
 * All DOM operations are intercepted to create {@link BackgroundSnapshotInstance}.
 */ function setupBackgroundDocument() {
    document.createElement = function(type) {
        return new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(type);
    };
    document.createElementNS = function(_ns, type) {
        return new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(type);
    };
    document.createTextNode = function(text) {
        const i = new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
/**
 * Sets up the document interface for the main thread.
 * All DOM operations are intercepted to create {@link SnapshotInstance}.
 */ function setupDocument() {
    document.createElement = function(type) {
        return new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(type);
    };
    document.createElementNS = function(_ns, type) {
        return new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(type);
    };
    document.createTextNode = function(text) {
        const i = new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
// if (__JS__) {
//   setupBackgroundDocument();
// } else if (__LEPUS__) {
//   setupDocument();
// }
 //# sourceMappingURL=document.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGesture: () => (processGesture)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function isSerializedGesture(gesture) {
    var _gesture___isSerialized;
    return (_gesture___isSerialized = gesture.__isSerialized) !== null && _gesture___isSerialized !== void 0 ? _gesture___isSerialized : false;
}
function getGestureInfo(gesture, oldGesture, isFirstScreen, dom) {
    var _baseGesture_waitFor, _baseGesture_simultaneousWith, _baseGesture_continueWith;
    const config = {
        callbacks: []
    };
    const baseGesture = gesture;
    if (baseGesture.config) config.config = baseGesture.config;
    for (const key of Object.keys(baseGesture.callbacks)){
        const callback = baseGesture.callbacks[key];
        const oldCallback = oldGesture === null || oldGesture === void 0 ? void 0 : oldGesture.callbacks[key];
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(callback, oldCallback, isFirstScreen, dom);
        config.callbacks.push({
            name: key,
            callback: callback
        });
    }
    var _baseGesture_waitFor_map, _baseGesture_simultaneousWith_map, _baseGesture_continueWith_map;
    const relationMap = {
        waitFor: (_baseGesture_waitFor_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_waitFor = baseGesture.waitFor) === null || _baseGesture_waitFor === void 0 ? void 0 : _baseGesture_waitFor.map((subGesture)=>subGesture.id)) !== null && _baseGesture_waitFor_map !== void 0 ? _baseGesture_waitFor_map : [],
        simultaneous: (_baseGesture_simultaneousWith_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_simultaneousWith = baseGesture.simultaneousWith) === null || _baseGesture_simultaneousWith === void 0 ? void 0 : _baseGesture_simultaneousWith.map((subGesture)=>subGesture.id)) !== null && _baseGesture_simultaneousWith_map !== void 0 ? _baseGesture_simultaneousWith_map : [],
        continueWith: (_baseGesture_continueWith_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_continueWith = baseGesture.continueWith) === null || _baseGesture_continueWith === void 0 ? void 0 : _baseGesture_continueWith.map((subGesture)=>subGesture.id)) !== null && _baseGesture_continueWith_map !== void 0 ? _baseGesture_continueWith_map : []
    };
    return {
        config,
        relationMap
    };
}
function processGesture(dom, gesture, oldGesture, isFirstScreen, gestureOptions) {
    if (!gesture || !isSerializedGesture(gesture)) return;
    if (!(gestureOptions && gestureOptions.domSet)) {
        __SetAttribute(dom, 'has-react-gesture', true);
        __SetAttribute(dom, 'flatten', false);
    }
    if (gesture.type === _types_js__WEBPACK_IMPORTED_MODULE_1__.GestureTypeInner.COMPOSED) for (const [index, subGesture] of gesture.gestures.entries())processGesture(dom, subGesture, oldGesture === null || oldGesture === void 0 ? void 0 : oldGesture.gestures[index], isFirstScreen, {
        domSet: true
    });
    else {
        const baseGesture = gesture;
        const oldBaseGesture = oldGesture;
        const { config, relationMap } = getGestureInfo(baseGesture, oldBaseGesture, isFirstScreen, dom);
        __SetGestureDetector(dom, baseGesture.id, baseGesture.type, config, relationMap);
    }
} //# sourceMappingURL=processGesture.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGestureBagkround.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGestureBackground: () => (processGestureBackground)
});
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js");
/* ESM import */var _worklet_ctx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function processGestureBackground(gesture) {
    if (gesture.type === _types_js__WEBPACK_IMPORTED_MODULE_0__.GestureTypeInner.COMPOSED) for (const subGesture of gesture.gestures)processGestureBackground(subGesture);
    else {
        const baseGesture = gesture;
        for (const [name, value] of Object.entries(baseGesture.callbacks))baseGesture.callbacks[name] = (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_1__.onPostWorkletCtx)(value);
    }
} //# sourceMappingURL=processGestureBagkround.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GestureTypeInner: () => (GestureTypeInner)
});
var GestureTypeInner;
(function(GestureTypeInner) {
    GestureTypeInner[GestureTypeInner["COMPOSED"] = -1] = "COMPOSED";
    GestureTypeInner[GestureTypeInner["PAN"] = 0] = "PAN";
    GestureTypeInner[GestureTypeInner["FLING"] = 1] = "FLING";
    GestureTypeInner[GestureTypeInner["DEFAULT"] = 2] = "DEFAULT";
    GestureTypeInner[GestureTypeInner["TAP"] = 3] = "TAP";
    GestureTypeInner[GestureTypeInner["LONGPRESS"] = 4] = "LONGPRESS";
    GestureTypeInner[GestureTypeInner["ROTATION"] = 5] = "ROTATION";
    GestureTypeInner[GestureTypeInner["PINCH"] = 6] = "PINCH";
    GestureTypeInner[GestureTypeInner["NATIVE"] = 7] = "NATIVE";
})(GestureTypeInner || (GestureTypeInner = {})); //# sourceMappingURL=types.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
  useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)
});
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * `useLayoutEffect` is now an alias of `useEffect`. Use `useEffect` instead.
 *
 * Accepts a function that contains imperative, possibly effectful code. The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 *
 * @deprecated `useLayoutEffect` in the background thread cannot offer the precise timing for reading layout information and synchronously re-render, which is different from React.
 */ function useLayoutEffect(effect, deps) {
    return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, deps);
}
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 */ function useEffect(effect, deps) {
    return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, deps);
}
 //# sourceMappingURL=react.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useLynxGlobalEventListener: () => (useLynxGlobalEventListener)
});
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * `useLynxGlobalEventListener` help you `addListener` as early as possible.
 *
 * @example
 *
 * Use this hooks to listen to event 'exposure' and event 'disexposure'
 *
 * ```jsx
 * function App() {
 *   useLynxGlobalEventListener('exposure', (e) => {
 *     console.log("exposure", e)
 *   })
 *   useLynxGlobalEventListener('disexposure', (e) => {
 *     console.log("disexposure", e)
 *   })
 *   return (
 *     <view
 *       style='width: 100px; height: 100px; background-color: red;'
 *       exposure-id='a'
 *     />
 *   )
 * }
 * ```
 *
 * @param eventName - Event name to listen
 * @param listener - Event handler
 * @public
 */ function useLynxGlobalEventListener(eventName, listener) {
    'background only';
    const previousArgsRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (previousArgsRef.current) {
            const [eventName, listener] = previousArgsRef.current;
            lynx.getJSModule('GlobalEventEmitter').removeListener(eventName, listener);
        }
        lynx.getJSModule('GlobalEventEmitter').addListener(eventName, listener);
        previousArgsRef.current = [
            eventName,
            listener
        ];
    }, [
        eventName,
        listener
    ]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            if (previousArgsRef.current) {
                const [eventName, listener] = previousArgsRef.current;
                lynx.getJSModule('GlobalEventEmitter').removeListener(eventName, listener);
            }
        };
    }, []);
} //# sourceMappingURL=useLynxGlobalEventListener.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  diffArrayAction: () => (diffArrayAction),
  diffArrayLepus: () => (diffArrayLepus),
  hydrate: () => (hydrate),
  isEmptyDiffResult: () => (isEmptyDiffResult)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





function isEmptyDiffResult(diffResult) {
    const hasChanged = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isEmptyObject)(diffResult.i) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isEmptyObject)(diffResult.m) || diffResult.r.length > 0;
    return !hasChanged;
}
function diffArrayLepus(before, after, isSameType, onDiffChildren) {
    let lastPlacedIndex = 0;
    const result = {
        $$diff: true,
        i: {},
        r: [],
        m: {}
    };
    const beforeMap = {};
    for(let i = 0; i < before.length; i++){
        var _beforeMap, _node_type;
        const node = before[i];
        var _;
        ((_ = (_beforeMap = beforeMap)[_node_type = node.type]) !== null && _ !== void 0 ? _ : _beforeMap[_node_type] = new Set()).add([
            node,
            i
        ]);
    }
    for(let i = 0; i < after.length; i++){
        const afterNode = after[i];
        const beforeNodes = beforeMap[afterNode.type];
        let beforeNode;
        if (beforeNodes && beforeNodes.size > 0 && ([beforeNode] = beforeNodes, beforeNode) && isSameType(beforeNode[0], afterNode)) {
            // Reuse old node
            beforeNodes.delete(beforeNode);
            const oldIndex = beforeNode[1];
            onDiffChildren(beforeNode[0], afterNode, oldIndex, i);
            if (oldIndex < lastPlacedIndex) {
                result.m[oldIndex] = i;
                continue;
            } else lastPlacedIndex = oldIndex;
        } else result.i[i] = afterNode;
    }
    // Delete
    for(const k in beforeMap)for (const [, i] of beforeMap[k])result.r.push(i);
    return result;
}
// export function diffIterableLepus<A extends Typed, B extends Typed>(
//   before: A[],
//   after: Iterable<B>,
//   isSameType: (a: A, b: B) => boolean,
//   onDiffChildren: (a: A, b: B) => void
// ): DiffResult<B> {
//   let returnResult = EMPTY_DIFF_RESULT as DiffResult<B>;
//   let lastPlacedIndex = 0;
//   const result: DiffResult<B> = {
//     $$diff: true,
//     i: {},
//     r: [],
//     m: {},
//   };
//   const beforeMap: Record<string, Set<[A, number]>> = {};
//   for (let i = 0; i < before.length; i++) {
//     let node = before[i];
//     (beforeMap[node.type] ??= new Set()).add([node, i]);
//   }
//   let i = 0;
//   for (const afterNode of after) {
//     const beforeNodes = beforeMap[afterNode.type];
//     let beforeNode: [A, number];
//     if (beforeNodes && (([beforeNode] = beforeNodes), beforeNode) && isSameType(beforeNode[0], afterNode)) {
//       // Reuse old node
//       beforeNodes.delete(beforeNode);
//       const oldIndex = beforeNode[1];
//       onDiffChildren(beforeNode[0], afterNode);
//       if (oldIndex < lastPlacedIndex) {
//         result.m[oldIndex] = i;
//         returnResult = result;
//         i++;
//         continue;
//       } else {
//         lastPlacedIndex = oldIndex;
//       }
//     } else {
//       // Create new node
//       result.i[i] = afterNode;
//       returnResult = result;
//     }
//     i++;
//   }
//   // delete
//   for (const k in beforeMap) {
//     for (const [, i] of beforeMap[k]) {
//       result.r.push(i);
//       returnResult = result;
//     }
//   }
//   return result;
// }
function diffArrayAction(before, diffResult, onInsert, onRemove, onMove) {
    if (isEmptyDiffResult(diffResult)) return before;
    const deleteSet = new Set(diffResult.r);
    const { i: insertMap, m: placementMap } = diffResult;
    const moveTempMap = new Map();
    let old;
    let k = 0;
    old = before[k];
    // let current: T | null | undefined = null;
    const result = [];
    let i = 0; // index of the old list
    let j = 0; // index of the new list
    let remain = Object.keys(insertMap).length;
    while(old || remain > 0){
        let keep = false;
        if (old && deleteSet.has(j)) onRemove(old);
        else if (old && placementMap[j] !== undefined) {
            // save node to re-use
            moveTempMap.set(placementMap[j], old);
            remain++;
        } else {
            // insert node
            let newNode = old;
            if (moveTempMap.has(i)) {
                // insert re-used node
                newNode = moveTempMap.get(i);
                keep = true;
                onMove(newNode, old);
                remain--;
            } else if (insertMap[i] !== undefined) {
                // insert new node
                newNode = onInsert(insertMap[i], old);
                keep = true;
                remain--;
            }
            result.push(newNode);
            i++;
        }
        if (old && !keep) {
            old = before[++k];
            j++;
        }
    }
    return result;
}
function hydrate(before, after, options) {
    after.__elements = before.__elements;
    after.__element_root = before.__element_root;
    if (!(options === null || options === void 0 ? void 0 : options.skipUnRef)) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_3__.unref)(before, false);
    let swap;
    if (swap = options === null || options === void 0 ? void 0 : options.swap) swap[before.__id] = after.__id;
    _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.runWithoutUpdates(()=>{
        var _after___values;
        (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
            const old = before.__values[index];
            if (value !== old) {
                after.__values[index] = old;
                after.setAttribute(index, value);
            }
        });
    });
    const { slot } = after.__snapshot_def;
    if (!slot) return;
    const beforeChildNodes = before.childNodes;
    const afterChildNodes = after.childNodes;
    slot.forEach(([type, elementIndex], index)=>{
        switch(type){
            case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Slot:
            case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.MultiChildren:
                {
                    // TODO: the following null assertions are not 100% safe
                    const v1 = beforeChildNodes[index];
                    const v2 = afterChildNodes[index];
                    hydrate(v1, v2, options);
                    break;
                }
            case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Children:
                {
                    const diffResult = diffArrayLepus(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                        hydrate(a, b, options);
                    });
                    diffArrayAction(beforeChildNodes, diffResult, (node, target)=>{
                        node.ensureElements();
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                        return node;
                    }, (node)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                    }, (node, target)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                    });
                    break;
                }
            case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.ListChildren:
                {
                    const removals = [];
                    const insertions = [];
                    const updateAction = [];
                    const listID = __GetElementUniqueID(before.__elements[elementIndex]);
                    const signMap = _list_js__WEBPACK_IMPORTED_MODULE_0__.gSignMap[listID];
                    const recycleMap = _list_js__WEBPACK_IMPORTED_MODULE_0__.gRecycleMap[listID];
                    const diffResult = diffArrayLepus(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b, _oldIndex, newIndex)=>{
                        if (JSON.stringify(a.__listItemPlatformInfo) !== JSON.stringify(b.__listItemPlatformInfo)) updateAction.push({
                            ...b.__listItemPlatformInfo,
                            from: newIndex,
                            to: newIndex,
                            // no flush
                            flush: false,
                            type: b.type
                        });
                        if (a.__elements) {
                            // transfer a's elements to b
                            hydrate(a, b, options);
                            // if a list-item has `elements`, it may be:
                            //   - `enqueueComponent` already called on it: so we need to update the `signMap` and the `recycleMap`
                            //   - `enqueueComponent` not called on it: update the `signMap`
                            const listItemID = __GetElementUniqueID(a.__element_root);
                            if (signMap.has(listItemID)) signMap.set(listItemID, b);
                            if (recycleMap.has(a.type)) {
                                const recycleSignMap = recycleMap.get(a.type);
                                recycleSignMap.set(listItemID, b);
                            }
                        }
                    });
                    for (const i of diffResult.r)removals.push(i);
                    for(const i in diffResult.i)insertions.push(Number(i));
                    for(const i in diffResult.m){
                        removals.push(Number(i));
                        insertions.push(diffResult.m[i]);
                    }
                    insertions.sort((a, b)=>a - b);
                    removals.sort((a, b)=>a - b);
                    const info = {
                        insertAction: insertions.map((it)=>({
                                position: it,
                                type: afterChildNodes[it].type,
                                ...afterChildNodes[it].__listItemPlatformInfo
                            })),
                        removeAction: removals,
                        updateAction
                    };
                    const listElement = before.__elements[elementIndex];
                    __SetAttribute(listElement, 'update-list-info', info);
                    const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.componentAtIndexFactory)(afterChildNodes, hydrate);
                    __UpdateListCallbacks(listElement, componentAtIndex, (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.enqueueComponentFactory)(), componentAtIndexes);
                    // The `before` & `after` target to the same list element, so we need to
                    // avoid the newly created list's (behind snapshot instance `after`) "update-list-info" being recorded.
                    if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values) delete _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values[after.__id];
                }
        }
    });
} //# sourceMappingURL=hydrate.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_6__.Component),
  Fragment: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment),
  InitDataConsumer: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.InitDataConsumer),
  InitDataProvider: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.MainThreadRef),
  PureComponent: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent),
  Suspense: () => (/* reexport safe */ _lynx_suspense_js__WEBPACK_IMPORTED_MODULE_5__.Suspense),
  cloneElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.cloneElement),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_6__.createContext),
  createElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement),
  createRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  forwardRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef),
  isValidElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement),
  lazy: () => (lazy),
  memo: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo),
  root: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.root),
  runOnBackground: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.runOnMainThread),
  useCallback: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback),
  useContext: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext),
  useDebugValue: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue),
  useEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useErrorBoundary),
  useId: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useId),
  useImperativeHandle: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle),
  useInitData: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.useInitData),
  useInitDataChanged: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.useInitDataChanged),
  useLayoutEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect),
  useLynxGlobalEventListener: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.useMainThreadRef),
  useMemo: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo),
  useReducer: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer),
  useRef: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef),
  useState: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState),
  useSyncExternalStore: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore),
  withInitDataInState: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__.withInitDataInState)
});
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _lynx_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js");
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var _lynx_suspense_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/suspense.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.









const lazy = /*#__PURE__*/ (()=>{
    lynx.loadLazyBundle = _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__.loadLazyBundle;
    return preact_compat__WEBPACK_IMPORTED_MODULE_2__.lazy;
})();
/**
 * @internal
 */ /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // hooks
    useState: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState,
    useReducer: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer,
    useEffect: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect,
    useLayoutEffect: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect,
    useRef: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef,
    useImperativeHandle: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle,
    useMemo: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo,
    useCallback: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback,
    useContext: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext,
    useDebugValue: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue,
    useSyncExternalStore: preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore,
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createContext,
    createRef: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef,
    Fragment: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment,
    isValidElement: preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement,
    Children: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children,
    Component: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Component,
    PureComponent: preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent,
    memo: preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo,
    forwardRef: preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef,
    Suspense: _lynx_suspense_js__WEBPACK_IMPORTED_MODULE_5__.Suspense,
    lazy,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement
});

 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_16__.Component),
  SnapshotInstance: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.SnapshotInstance),
  __ComponentIsPolyfill: () => (__ComponentIsPolyfill),
  __DynamicPartChildren: () => (__DynamicPartChildren),
  __DynamicPartChildren_0: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.__DynamicPartChildren_0),
  __DynamicPartListChildren: () => (__DynamicPartListChildren),
  __DynamicPartMultiChildren: () => (__DynamicPartMultiChildren),
  __DynamicPartSlot: () => (__DynamicPartSlot),
  __dynamicImport: () => (/* reexport safe */ _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_17__.__dynamicImport),
  __page: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.__page),
  __pageId: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.__pageId),
  __root: () => (/* reexport safe */ _root_js__WEBPACK_IMPORTED_MODULE_5__.__root),
  createSnapshot: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.createSnapshot),
  loadDynamicJS: () => (/* reexport safe */ _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_17__.loadDynamicJS),
  loadLazyBundle: () => (/* reexport safe */ _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__.loadLazyBundle),
  loadWorkletRuntime: () => (/* reexport safe */ _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_22__.loadWorkletRuntime),
  options: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_16__.options),
  registerWorkletOnBackground: () => (/* reexport safe */ _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_21__.registerWorkletOnBackground),
  snapshotCreateList: () => (/* reexport safe */ _snapshot_list_js__WEBPACK_IMPORTED_MODULE_7__.snapshotCreateList),
  snapshotManager: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.snapshotManager),
  transformRef: () => (/* reexport safe */ _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_11__.transformRef),
  transformToWorklet: () => (/* reexport safe */ _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_20__.transformToWorklet),
  updateEvent: () => (/* reexport safe */ _snapshot_event_js__WEBPACK_IMPORTED_MODULE_10__.updateEvent),
  updateGesture: () => (/* reexport safe */ _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_14__.updateGesture),
  updateListItemPlatformInfo: () => (/* reexport safe */ _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_15__.updateListItemPlatformInfo),
  updateRef: () => (/* reexport safe */ _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_11__.updateRef),
  updateSpread: () => (/* reexport safe */ _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_9__.updateSpread),
  updateWorkletEvent: () => (/* reexport safe */ _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_12__.updateWorkletEvent),
  updateWorkletRef: () => (/* reexport safe */ _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_13__.updateWorkletRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_18__.withInitDataInState),
  wrapWithLynxComponent: () => (/* reexport safe */ _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_19__.wrapWithLynxComponent)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js");
/* ESM import */var _snapshot_list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js");
/* ESM import */var _snapshot_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js");
/* ESM import */var _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js");
/* ESM import */var _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js");
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.











const __DynamicPartSlot = _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.Slot;
const __DynamicPartMultiChildren = _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.MultiChildren;
const __DynamicPartChildren = _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.Children;
const __DynamicPartListChildren = _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.ListChildren;












/**
 * @internal a polyfill for <component is=? />
 */ const __ComponentIsPolyfill = /* @__PURE__ */ (0,_compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__.factory)({
    Suspense: preact_compat__WEBPACK_IMPORTED_MODULE_0__.Suspense,
    lazy: preact_compat__WEBPACK_IMPORTED_MODULE_0__.lazy,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement,
    useMemo: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo
}, _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__.loadLazyBundle);



 //# sourceMappingURL=internal.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyBackground: () => (destroyBackground)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayEvents.js");
/* ESM import */var _event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayLifecycleEvents.js");
/* ESM import */var _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





function destroyBackground() {
    if (true) console.profile('destroyBackground');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, _root_js__WEBPACK_IMPORTED_MODULE_1__.__root);
    _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__.globalCommitTaskMap.forEach((task)=>{
        task();
    });
    _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__.globalCommitTaskMap.clear();
    // Clear delayed events which should not be executed after destroyed.
    // This is important when the page is performing a reload.
    _event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_3__.delayedLifecycleEvents.length = 0;
    if (_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__.delayedEvents) _event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__.delayedEvents.length = 0;
    if (true) console.profileEnd();
}
 //# sourceMappingURL=destroy.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayedEvents: () => (delayedEvents),
  delayedPublishEvent: () => (delayedPublishEvent)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let delayedEvents;
function delayedPublishEvent(handlerName, data) {
    delayedEvents !== null && delayedEvents !== void 0 ? delayedEvents : delayedEvents = [];
    delayedEvents.push([
        handlerName,
        data
    ]);
}
 //# sourceMappingURL=delayEvents.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayLifecycleEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayLifecycleEvent: () => (delayLifecycleEvent),
  delayedLifecycleEvents: () => (delayedLifecycleEvents)
});
const delayedLifecycleEvents = [];
function delayLifecycleEvent(type, data) {
    delayedLifecycleEvents.push([
        type,
        data
    ]);
}
/**
 * @internal
 */  //# sourceMappingURL=delayLifecycleEvents.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/jsReady.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearJSReadyEventIdSwap: () => (clearJSReadyEventIdSwap),
  isJSReady: () => (isJSReady),
  jsReady: () => (jsReady),
  jsReadyEventIdSwap: () => (jsReadyEventIdSwap),
  resetJSReady: () => (resetJSReady)
});
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


let isJSReady;
let jsReadyEventIdSwap;
function jsReady() {
    isJSReady = true;
    __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__WEBPACK_IMPORTED_MODULE_1__.__root),
            jsReadyEventIdSwap
        }
    ]);
    jsReadyEventIdSwap = {};
}
function clearJSReadyEventIdSwap() {
    jsReadyEventIdSwap = {};
}
function resetJSReady() {
    isJSReady = false;
    jsReadyEventIdSwap = {};
}
/**
 * @internal
 */  //# sourceMappingURL=jsReady.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getReloadVersion: () => (getReloadVersion),
  increaseReloadVersion: () => (increaseReloadVersion)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let reloadVersion = 0;
function getReloadVersion() {
    return reloadVersion;
}
function increaseReloadVersion() {
    return ++reloadVersion;
}
 //# sourceMappingURL=pass.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearCommitTaskId: () => (clearCommitTaskId),
  commitPatchUpdate: () => (commitPatchUpdate),
  genCommitTaskId: () => (genCommitTaskId),
  globalBackgroundSnapshotInstancesToRemove: () => (globalBackgroundSnapshotInstancesToRemove),
  globalCommitTaskMap: () => (globalCommitTaskMap),
  globalFlushOptions: () => (globalFlushOptions),
  globalPatchOptions: () => (globalPatchOptions),
  replaceCommitHook: () => (replaceCommitHook)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_workletRefPool_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
/* ESM import */var _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the commit phase of the rendering lifecycle.
 * This module patches Preact's commit phase to integrate with the snapshot system,
 * handling the collection and transmission of patches between threads.
 *
 * The commit phase is responsible for:
 * - Collecting patches from the snapshot system
 * - Managing commit tasks and their execution
 * - Coordinating with the native layer for updates
 * - Handling performance timing and pipeline options
 */ /**
 * This module patches Preact's commit phase by hacking into the internal of
 * its [options](https://preactjs.com/guide/v10/options/) API
 */ 









let globalFlushOptions = {};
function takeGlobalFlushOptions() {
    const res = globalFlushOptions;
    globalFlushOptions = {};
    return res;
}
const globalCommitTaskMap = /*@__PURE__*/ new Map();
let nextCommitTaskId = 1;
let globalBackgroundSnapshotInstancesToRemove = [];
let globalPatchOptions = {};
function takeGlobalPatchOptions() {
    const res = globalPatchOptions;
    globalPatchOptions = {};
    return res;
}
/**
 * Replaces Preact's default commit hook with our custom implementation
 */ function replaceCommitHook() {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMMIT, (originalPreactCommit, vnode, commitQueue)=>{
        // Mark the end of virtual DOM diffing phase for performance tracking
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTimingLegacy)('updateDiffVdomEnd');
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)('diffVdomEnd');
        const backgroundSnapshotInstancesToRemove = globalBackgroundSnapshotInstancesToRemove;
        globalBackgroundSnapshotInstancesToRemove = [];
        const commitTaskId = genCommitTaskId();
        // Register the commit task
        globalCommitTaskMap.set(commitTaskId, ()=>{
            if (backgroundSnapshotInstancesToRemove.length) setTimeout(()=>{
                backgroundSnapshotInstancesToRemove.forEach((id)=>{
                    var _backgroundSnapshotInstanceManager_values_get;
                    (_backgroundSnapshotInstanceManager_values_get = _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.backgroundSnapshotInstanceManager.values.get(id)) === null || _backgroundSnapshotInstanceManager_values_get === void 0 ? void 0 : _backgroundSnapshotInstanceManager_values_get.tearDown();
                });
            }, 10000);
        });
        // Collect patches for this update
        const snapshotPatch = (0,_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_9__.takeGlobalSnapshotPatch)();
        const flushOptions = takeGlobalFlushOptions();
        const patchOptions = takeGlobalPatchOptions();
        const workletRefInitValuePatch = (0,_worklet_workletRefPool_js__WEBPACK_IMPORTED_MODULE_7__.takeWorkletRefInitValuePatch)();
        if (!snapshotPatch && workletRefInitValuePatch.length === 0) {
            // before hydration, skip patch
            (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_4__.applyQueuedRefs)();
            originalPreactCommit === null || originalPreactCommit === void 0 ? void 0 : originalPreactCommit(vnode, commitQueue);
            return;
        }
        const patch = {
            id: commitTaskId
        };
        // TODO: check all fields in `flushOptions` from runtime3
        if (snapshotPatch === null || snapshotPatch === void 0 ? void 0 : snapshotPatch.length) patch.snapshotPatch = snapshotPatch;
        if (workletRefInitValuePatch.length) patch.workletRefInitValuePatch = workletRefInitValuePatch;
        const patchList = {
            patchList: [
                patch
            ]
        };
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isEmptyObject)(flushOptions)) patchList.flushOptions = flushOptions;
        const obj = commitPatchUpdate(patchList, patchOptions);
        // Send the update to the native layer
        lynx.getNativeApp().callLepusMethod(_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.patchUpdate, obj, ()=>{
            const commitTask = globalCommitTaskMap.get(commitTaskId);
            if (commitTask) {
                commitTask();
                globalCommitTaskMap.delete(commitTaskId);
            }
        });
        (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_4__.applyQueuedRefs)();
        originalPreactCommit === null || originalPreactCommit === void 0 ? void 0 : originalPreactCommit(vnode, commitQueue);
    });
}
/**
 * Prepares the patch update for transmission to the native layer
 */ function commitPatchUpdate(patchList, patchOptions) {
    // console.debug('********** JS update:');
    // printSnapshotInstance(
    //   (backgroundSnapshotInstanceManager.values.get(1) ?? backgroundSnapshotInstanceManager.values.get(-1))!,
    // );
    // console.debug('commitPatchUpdate:', prettyFormatSnapshotPatch(patchList.patchList[0]?.snapshotPatch));
    if (true) console.profile('commitChanges');
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)('packChangesStart');
    const obj = {
        data: JSON.stringify(patchList),
        patchOptions: {
            ...patchOptions,
            reloadVersion: (0,_pass_js__WEBPACK_IMPORTED_MODULE_8__.getReloadVersion)()
        }
    };
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)('packChangesEnd');
    if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.globalPipelineOptions) {
        obj.patchOptions.pipelineOptions = _lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.globalPipelineOptions;
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.setPipeline)(undefined);
    }
    if (true) console.profileEnd();
    return obj;
}
/**
 * Generates a unique ID for commit tasks
 */ function genCommitTaskId() {
    return nextCommitTaskId++;
}
/**
 * Resets the commit task ID counter
 */ function clearCommitTaskId() {
    nextCommitTaskId = 1;
}
/**
 * @internal
 */  //# sourceMappingURL=commit.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/error.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addCtxNotFoundEventListener: () => (addCtxNotFoundEventListener),
  ctxNotFoundType: () => (ctxNotFoundType),
  removeCtxNotFoundEventListener: () => (removeCtxNotFoundEventListener),
  reportCtxNotFound: () => (reportCtxNotFound),
  sendCtxNotFoundEventToBackground: () => (sendCtxNotFoundEventToBackground)
});
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const ctxNotFoundType = 'Lynx.Error.CtxNotFound';
const errorMsg = 'snapshotPatchApply failed: ctx not found';
let ctxNotFoundEventListener = null;
function sendCtxNotFoundEventToBackground(id) {
    /* v8 ignore next 3 */ if (!lynx.getJSContext) throw new Error(errorMsg);
    lynx.getJSContext().dispatchEvent({
        type: ctxNotFoundType,
        data: {
            id
        }
    });
}
function reportCtxNotFound(data) {
    const id = data.id;
    const instance = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.backgroundSnapshotInstanceManager.values.get(id);
    let snapshotType = 'null';
    if (instance && instance.__snapshot_def) {
        for (const [snapshotId, snapshot] of _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotManager.values.entries())if (snapshot === instance.__snapshot_def) {
            snapshotType = snapshotId;
            break;
        }
    }
    lynx.reportError(new Error(`${errorMsg}, snapshot type: '${snapshotType}'`));
}
function addCtxNotFoundEventListener() {
    var _lynx_getCoreContext, _lynx;
    ctxNotFoundEventListener = (e)=>{
        reportCtxNotFound(e.data);
    };
    (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).addEventListener(ctxNotFoundType, ctxNotFoundEventListener);
}
function removeCtxNotFoundEventListener() {
    var _lynx_getCoreContext, _lynx;
    const coreContext = (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx);
    if (coreContext && ctxNotFoundEventListener) {
        coreContext.removeEventListener(ctxNotFoundType, ctxNotFoundEventListener);
        ctxNotFoundEventListener = null;
    }
} //# sourceMappingURL=error.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isMainThreadHydrating: () => (isMainThreadHydrating),
  setMainThreadHydrating: () => (setMainThreadHydrating)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let isMainThreadHydrating = false;
function setMainThreadHydrating(isHydrating) {
    if (!isHydrating && isMainThreadHydrating) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onHydrationFinished)();
    isMainThreadHydrating = isHydrating;
} //# sourceMappingURL=isMainThreadHydrating.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotOperation: () => (SnapshotOperation),
  SnapshotOperationParams: () => (SnapshotOperationParams),
  __globalSnapshotPatch: () => (__globalSnapshotPatch),
  deinitGlobalSnapshotPatch: () => (deinitGlobalSnapshotPatch),
  initGlobalSnapshotPatch: () => (initGlobalSnapshotPatch),
  takeGlobalSnapshotPatch: () => (takeGlobalSnapshotPatch)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Defines the core patch operations for the snapshot system.
 * The patch operations are designed to be serializable and minimal, allowing
 * efficient transmission between threads and application to element tree.
 */ const SnapshotOperation = {
    CreateElement: 0,
    InsertBefore: 1,
    RemoveChild: 2,
    SetAttribute: 3,
    SetAttributes: 4,
    DEV_ONLY_AddSnapshot: 100,
    DEV_ONLY_RegisterWorklet: 101
};
const SnapshotOperationParams = /* @__PURE__ */ {
    [SnapshotOperation.CreateElement]: {
        name: 'CreateElement',
        params: [
            'type',
            /* string */ 'id' /* number */ 
        ]
    },
    [SnapshotOperation.InsertBefore]: {
        name: 'InsertBefore',
        params: [
            'parentId',
            /* number */ 'childId',
            /* number */ 'beforeId' /* number | undefined */ 
        ]
    },
    [SnapshotOperation.RemoveChild]: {
        name: 'RemoveChild',
        params: [
            'parentId',
            /* number */ 'childId' /* number */ 
        ]
    },
    [SnapshotOperation.SetAttribute]: {
        name: 'SetAttribute',
        params: [
            'id',
            /* number */ 'dynamicPartIndex',
            /* number */ 'value' /* any */ 
        ]
    },
    [SnapshotOperation.SetAttributes]: {
        name: 'SetAttributes',
        params: [
            'id',
            /* number */ 'values' /* any */ 
        ]
    },
    [SnapshotOperation.DEV_ONLY_AddSnapshot]: {
        name: 'DEV_ONLY_AddSnapshot',
        params: [
            'uniqID',
            /* string */ 'create',
            /* string */ 'update',
            /* string[] */ 'slot',
            /* [DynamicPartType, number][] */ 'cssId',
            /* number | undefined */ 'entryName'
        ]
    },
    [SnapshotOperation.DEV_ONLY_RegisterWorklet]: {
        name: 'DEV_ONLY_RegisterWorklet',
        params: [
            'hash',
            /* string */ 'fnStr' /* string */ 
        ]
    }
};
let __globalSnapshotPatch;
function takeGlobalSnapshotPatch() {
    if (__globalSnapshotPatch) {
        const list = __globalSnapshotPatch;
        __globalSnapshotPatch = [];
        return list;
    } else return undefined;
}
function initGlobalSnapshotPatch() {
    __globalSnapshotPatch = [];
}
function deinitGlobalSnapshotPatch() {
    __globalSnapshotPatch = undefined;
} //# sourceMappingURL=snapshotPatch.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/ref/delay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RefProxy: () => (RefProxy),
  runDelayedUiOps: () => (runDelayedUiOps),
  shouldDelayUiOps: () => (shouldDelayUiOps)
});
/* ESM import */var _snapshotInstanceHydrationMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshotInstanceHydrationMap.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * A flag to indicate whether UI operations should be delayed.
 * When set to true, UI operations will be queued in the `delayedUiOps` array
 * and executed later when `runDelayedUiOps` is called.
 * This is used before hydration to ensure UI operations are batched
 * and executed at the appropriate time.
 */ const shouldDelayUiOps = {
    value: true
};
/**
 * An array of functions that will be executed later when `runDelayedUiOps` is called.
 * These functions contain UI operations that need to be delayed.
 */ const delayedUiOps = [];
/**
 * Runs a task either immediately or delays it based on the `shouldDelayUiOps` flag.
 * @param task - The function to execute.
 */ function runOrDelay(task) {
    if (shouldDelayUiOps.value) delayedUiOps.push(task);
    else task();
}
/**
 * Executes all delayed UI operations.
 */ function runDelayedUiOps() {
    for (const task of delayedUiOps)task();
    shouldDelayUiOps.value = false;
    delayedUiOps.length = 0;
}
/**
 * A proxy class designed for managing and executing reference-based tasks.
 * It delays the execution of tasks until hydration is complete.
 */ class RefProxy {
    setTask(method, args) {
        this.task = (nodesRef)=>{
            return nodesRef[method](...args);
        };
        return this;
    }
    invoke(...args) {
        return new RefProxy(this.refAttr).setTask('invoke', args);
    }
    path(...args) {
        return new RefProxy(this.refAttr).setTask('path', args);
    }
    fields(...args) {
        return new RefProxy(this.refAttr).setTask('fields', args);
    }
    setNativeProps(...args) {
        return new RefProxy(this.refAttr).setTask('setNativeProps', args);
    }
    exec() {
        runOrDelay(()=>{
            var _hydrationMap_get;
            const realRefId = (_hydrationMap_get = _snapshotInstanceHydrationMap_js__WEBPACK_IMPORTED_MODULE_0__.hydrationMap.get(this.refAttr[0])) !== null && _hydrationMap_get !== void 0 ? _hydrationMap_get : this.refAttr[0];
            const refSelector = `[react-ref-${realRefId}-${this.refAttr[1]}]`;
            this.task(lynx.createSelectorQuery().select(refSelector)).exec();
        });
    }
    constructor(refAttr){
        this.refAttr = refAttr;
    }
}
/**
 * @internal
 */  //# sourceMappingURL=delay.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reloadBackground: () => (reloadBackground),
  reloadMainThread: () => (reloadMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_destroy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/jsReady.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
/* ESM import */var _patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _ref_delay_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/ref/delay.js");
/* ESM import */var _render_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the reload (thinking of "refresh" in browser) for both main thread
 * and background thread.
 */ 














function reloadMainThread(data, options) {
    if (true) console.profile('reloadTemplate');
    (0,_pass_js__WEBPACK_IMPORTED_MODULE_11__.increaseReloadVersion)();
    if (typeof data == 'object' && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.isEmptyObject)(data)) Object.assign(lynx.__initData, data);
    (0,_worklet_destroy_js__WEBPACK_IMPORTED_MODULE_9__.destroyWorklet)();
    _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.snapshotInstanceManager.clear();
    _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.clear();
    (0,_event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__.clearJSReadyEventIdSwap)();
    const oldRoot = _root_js__WEBPACK_IMPORTED_MODULE_4__.__root;
    (0,_root_js__WEBPACK_IMPORTED_MODULE_4__.setRoot)(new _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.SnapshotInstance('root'));
    _root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx = oldRoot.__jsx;
    (0,_render_js__WEBPACK_IMPORTED_MODULE_14__.renderMainThread)();
    (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.hydrate)(oldRoot, _root_js__WEBPACK_IMPORTED_MODULE_4__.__root, {
        skipUnRef: true
    });
    // always call this before `__FlushElementTree`
    _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.flush();
    (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_6__.applyRefQueue)();
    if (_event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__.isJSReady) __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__WEBPACK_IMPORTED_MODULE_4__.__root)
        }
    ]);
    __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_7__.__page, options);
    if (true) console.profileEnd();
    return;
}
function reloadBackground(updateData) {
    if (true) console.profile('reload');
    (0,_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_12__.deinitGlobalSnapshotPatch)();
    (0,_destroy_js__WEBPACK_IMPORTED_MODULE_5__.destroyBackground)();
    (0,_pass_js__WEBPACK_IMPORTED_MODULE_11__.increaseReloadVersion)();
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    lynx.__initData = Object.assign({}, lynx.__initData, updateData);
    _ref_delay_js__WEBPACK_IMPORTED_MODULE_13__.shouldDelayUiOps.value = true;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(_root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx, _root_js__WEBPACK_IMPORTED_MODULE_4__.__root);
    if (true) console.profileEnd();
}
 //# sourceMappingURL=reload.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderMainThread: () => (renderMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _opcodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js");
/* ESM import */var _renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the IFR (Instant First-Frame Rendering) on main thread.
 */ 




function renderMainThread() {
    let opcodes;
    try {
        if (true) console.profile('renderToString');
        opcodes = (0,_renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__.render)(_root_js__WEBPACK_IMPORTED_MODULE_3__.__root.__jsx, undefined);
    } catch (e) {
        lynx.reportError(e);
        opcodes = [];
    } finally{
        if (true) console.profileEnd();
    }
    if (false) {}
    if (true) console.profile('renderOpcodesInto');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (0,_opcodes_js__WEBPACK_IMPORTED_MODULE_1__.renderOpcodesInto)(opcodes, _root_js__WEBPACK_IMPORTED_MODULE_3__.__root);
    if (false) {}
    if (true) console.profileEnd();
}
 //# sourceMappingURL=render.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LifecycleConstant: () => (LifecycleConstant),
  NativeUpdateDataType: () => (NativeUpdateDataType)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var LifecycleConstant;
(function(LifecycleConstant) {
    LifecycleConstant["firstScreen"] = "rLynxFirstScreen";
    LifecycleConstant["updateFromRoot"] = "updateFromRoot";
    LifecycleConstant["globalEventFromLepus"] = "globalEventFromLepus";
    LifecycleConstant["jsReady"] = "rLynxJSReady";
    LifecycleConstant["patchUpdate"] = "rLynxChange";
    LifecycleConstant["publishEvent"] = "rLynxPublishEvent";
})(LifecycleConstant || (LifecycleConstant = {}));
var NativeUpdateDataType;
(function(NativeUpdateDataType) {
    NativeUpdateDataType[NativeUpdateDataType["UPDATE"] = 0] = "UPDATE";
    NativeUpdateDataType[NativeUpdateDataType["RESET"] = 1] = "RESET";
})(NativeUpdateDataType || (NativeUpdateDataType = {})); //# sourceMappingURL=lifecycleConstant.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearListGlobal: () => (clearListGlobal),
  componentAtIndexFactory: () => (componentAtIndexFactory),
  enqueueComponentFactory: () => (enqueueComponentFactory),
  gRecycleMap: () => (gRecycleMap),
  gSignMap: () => (gSignMap)
});
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const gSignMap = {};
const gRecycleMap = {};
const gParentWeakMap = new WeakMap();
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
function clearListGlobal() {
    for(const key in gSignMap)delete gSignMap[key];
    for(const key in gRecycleMap)delete gRecycleMap[key];
}
function componentAtIndexFactory(ctx, hydrateFunction) {
    // A hack workaround to ensure childCtx has no direct reference through `__parent` to list,
    // to avoid memory leak.
    // TODO(hzy): make `__parent` a WeakRef or `#__parent` in the future.
    ctx.forEach((childCtx)=>{
        if (gParentWeakMap.has(childCtx)) ;
        else {
            gParentWeakMap.set(childCtx, childCtx.parentNode);
            Object.defineProperty(childCtx, '__parent', {
                get: ()=>gParentWeakMap.get(childCtx),
                set: (value)=>{
                    gParentWeakMap.set(childCtx, value);
                }
            });
        }
    });
    const componentAtChildCtx = (list, listID, childCtx, operationID, enableReuseNotification, enableBatchRender = false, asyncFlush = false)=>{
        var _childCtx___extraProps, _childCtx___extraProps1;
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('componentAtIndex called on removed list');
        var _childCtx___listItemPlatformInfo;
        const platformInfo = (_childCtx___listItemPlatformInfo = childCtx.__listItemPlatformInfo) !== null && _childCtx___listItemPlatformInfo !== void 0 ? _childCtx___listItemPlatformInfo : {};
        // The lifecycle of this `__extraProps.isReady`:
        //   0 -> Promise<number> -> 1
        // 0: The initial state, the list-item is not ready yet, we will send a event to background
        //    when `componentAtIndex` is called on it
        // Promise<number>: A promise that will be resolved when the list-item is ready
        // 1: The list-item is ready, we can use it to render the list
        if (((_childCtx___extraProps = childCtx.__extraProps) === null || _childCtx___extraProps === void 0 ? void 0 : _childCtx___extraProps['isReady']) === 0) {
            if (typeof __GetAttributeByName === 'function' && __GetAttributeByName(list, 'custom-list-name') === 'list-container') ;
            else throw new Error('Unsupported: `<list-item/>` with `defer={true}` must be used with `<list custom-list-name="list-container"/>`');
            __OnLifecycleEvent([
                _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__.LifecycleConstant.publishEvent,
                {
                    handlerName: `${childCtx.__id}:__extraProps:onComponentAtIndex`,
                    data: {}
                }
            ]);
            let p;
            return p = new Promise((resolve)=>{
                Object.defineProperty(childCtx.__extraProps, 'isReady', {
                    set (isReady) {
                        if (isReady === 1) {
                            delete childCtx.__extraProps['isReady'];
                            childCtx.__extraProps['isReady'] = 1;
                            resolvedPromise.then(()=>{
                                // the cellIndex may be changed already, but the `childCtx` is the same
                                resolve(componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification));
                            });
                        }
                    },
                    get () {
                        return p;
                    }
                });
            });
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.maybePromise)((_childCtx___extraProps1 = childCtx.__extraProps) === null || _childCtx___extraProps1 === void 0 ? void 0 : _childCtx___extraProps1['isReady'])) throw new Error('componentAtIndex was called on a pending deferred list item');
        var _platformInfo_reuseidentifier;
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        const recycleSignMap = recycleMap.get(uniqID);
        if (childCtx.__elements) {
            /**
             * If this situation is encountered, there might be two cases:
             * 1. Reusing with itself
             *    In this case, enqueueComponent will be triggered first, followed by componentAtIndex.
             * 2. Moving
             *    In this case, the trigger order is uncertain; componentAtIndex might be triggered first, or enqueueComponent might be triggered first.
             *
             * When enqueueComponent is triggered first, there must be an item in the reuse pool with the same sign as here, which can be returned directly.
             * When componentAtIndex is triggered first, a clone needs to be made first, then follow the logic for adding or reusing. The cloned item will enter the reuse pool in the subsequent enqueueComponent.
             */ const root = childCtx.__elements[0];
            const sign = __GetElementUniqueID(root);
            if (recycleSignMap === null || recycleSignMap === void 0 ? void 0 : recycleSignMap.has(sign)) {
                signMap.set(sign, childCtx);
                recycleSignMap.delete(sign);
                if (!enableBatchRender) __FlushElementTree(root, {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                });
                else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
                    asyncFlush: true
                });
                // enableBatchRender == true && asyncFlush == false
                // in this case, no need to invoke __FlushElementTree because in the end of componentAtIndexes(), the list will invoke __FlushElementTree.
                return sign;
            } else {
                const newCtx = childCtx.takeElements();
                signMap.set(sign, newCtx);
            }
        }
        if (recycleSignMap && recycleSignMap.size > 0) {
            var _oldCtx___extraProps;
            const [first] = recycleSignMap;
            const [sign, oldCtx] = first;
            recycleSignMap.delete(sign);
            hydrateFunction(oldCtx, childCtx);
            oldCtx.unRenderElements();
            if (!oldCtx.__id) oldCtx.tearDown();
            else if (((_oldCtx___extraProps = oldCtx.__extraProps) === null || _oldCtx___extraProps === void 0 ? void 0 : _oldCtx___extraProps['isReady']) === 1) __OnLifecycleEvent([
                _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__.LifecycleConstant.publishEvent,
                {
                    handlerName: `${oldCtx.__id}:__extraProps:onRecycleComponent`,
                    data: {}
                }
            ]);
            const root = childCtx.__element_root;
            (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_1__.applyRefQueue)();
            if (!enableBatchRender) {
                const flushOptions = {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root, flushOptions);
            } else if (enableBatchRender && asyncFlush) {
                const flushOptions = {
                    asyncFlush: true
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root, flushOptions);
            }
            signMap.set(sign, childCtx);
            return sign;
        }
        childCtx.ensureElements();
        const root = childCtx.__element_root;
        __AppendElement(list, root);
        const sign = __GetElementUniqueID(root);
        (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_1__.applyRefQueue)();
        if (!enableBatchRender) __FlushElementTree(root, {
            triggerLayout: true,
            operationID,
            elementID: sign,
            listID
        });
        else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
            asyncFlush: true
        });
        signMap.set(sign, childCtx);
        return sign;
    };
    function componentAtIndex(list, listID, cellIndex, operationID, enableReuseNotification) {
        const childCtx = ctx[cellIndex];
        if (!childCtx) throw new Error('childCtx not found');
        const r = componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification);
        /* v8 ignore start */ if (false) {}
        else return typeof r === 'number' ? r : undefined;
    /* v8 ignore end */ }
    function componentAtIndexes(list, listID, cellIndexes, operationIDs, enableReuseNotification, asyncFlush) {
        let hasUnready = false;
        const p = [];
        cellIndexes.forEach((cellIndex, index)=>{
            const operationID = operationIDs[index];
            const childCtx = ctx[cellIndex];
            if (!childCtx) throw new Error('childCtx not found');
            const u = componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification, true, asyncFlush);
            if (typeof u === 'number') ;
            else hasUnready = true;
            p.push(u);
        });
        // We need __FlushElementTree twice:
        // 1. The first time is sync, we flush the items that are ready, with unready items' uiSign as -1.
        // 2. The second time is async, with all the uiSigns.
        // NOTE: The `operationIDs` passed to __FlushElementTree must be the one passed in,
        // not the one generated by any code here, to workaround a bug of Lynx Engine.
        // So we CANNOT split the `operationIDs` into two parts: one for ready items, one for unready items.
        if (hasUnready) Promise.all(p).then((uiSigns)=>{
            __FlushElementTree(list, {
                triggerLayout: true,
                operationIDs,
                elementIDs: uiSigns,
                listID
            });
        });
        __FlushElementTree(list, {
            triggerLayout: true,
            operationIDs,
            elementIDs: cellIndexes.map((_, index)=>typeof p[index] === 'number' ? p[index] : -1),
            listID
        });
    }
    return [
        componentAtIndex,
        componentAtIndexes
    ];
}
function enqueueComponentFactory() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const enqueueComponent = (_, listID, sign)=>{
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('enqueueComponent called on removed list');
        const childCtx = signMap.get(sign);
        if (!childCtx) return;
        var _childCtx___listItemPlatformInfo;
        const platformInfo = (_childCtx___listItemPlatformInfo = childCtx.__listItemPlatformInfo) !== null && _childCtx___listItemPlatformInfo !== void 0 ? _childCtx___listItemPlatformInfo : {};
        var _platformInfo_reuseidentifier;
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        if (!recycleMap.has(uniqID)) recycleMap.set(uniqID, new Map());
        recycleMap.get(uniqID).set(sign, childCtx);
    };
    return enqueueComponent;
} //# sourceMappingURL=list.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/listUpdateInfo.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListUpdateInfoRecording: () => (ListUpdateInfoRecording)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


class ListUpdateInfoRecording {
    // private __commitAndReset() {
    //   (this.__pendingAttributes ??= []).push(this.__toAttribute());
    //   this.oldChildNodes = this.list.childNodes;
    //   this.oldChildNodesSet = new Set(this.oldChildNodes);
    //   this.removeChild1.clear();
    //   this.removeChild2.clear();
    //   this.insertBefore.clear();
    //   this.appendChild.length = 0;
    //   this.platformInfoUpdate.clear();
    // }
    flush() {
        const elementIndex = this.list.__snapshot_def.slot[0][1];
        const listElement = this.list.__elements[elementIndex];
        // this.__pendingAttributes?.forEach(pendingAttribute => {
        //   __SetAttribute(listElement, "update-list-info", pendingAttribute);
        //   __FlushElementTree(listElement);
        // });
        __SetAttribute(listElement, 'update-list-info', this.__toAttribute());
        const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.componentAtIndexFactory)(this.list.childNodes, _hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate);
        __UpdateListCallbacks(listElement, componentAtIndex, (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.enqueueComponentFactory)(), componentAtIndexes);
    }
    onInsertBefore(newNode, existingNode) {
        if (newNode.parentNode) //   this.__commitAndReset();
        // }
        this.removeChild.add(newNode);
        if (existingNode) {
            var _this_insertBefore_get;
            // if (!this.oldChildNodesSet.has(existingNode)) {
            //   this.__commitAndReset();
            // }
            const newChildren = (_this_insertBefore_get = this.insertBefore.get(existingNode)) !== null && _this_insertBefore_get !== void 0 ? _this_insertBefore_get : [];
            newChildren.push(newNode);
            this.insertBefore.set(existingNode, newChildren);
        } else this.appendChild.push(newNode);
    }
    onRemoveChild(child) {
        // if (!this.oldChildNodesSet.has(child)) {
        //   this.__commitAndReset();
        // }
        this.removeChild.add(child);
    }
    onSetAttribute(child, attr, _oldAttr) {
        this.platformInfoUpdate.set(child, attr);
    }
    __toAttribute() {
        const { removeChild, insertBefore, appendChild, platformInfoUpdate } = this;
        const removals = [];
        const insertions = [];
        const updates = [];
        let j = 0;
        for(let i = 0; i < this.oldChildNodes.length; i++, j++){
            const child = this.oldChildNodes[i];
            if (platformInfoUpdate.has(child)) updates.push({
                ...platformInfoUpdate.get(child),
                from: +j,
                to: +j,
                // no flush
                flush: false,
                type: child.type
            });
            if (insertBefore.has(child)) {
                const children = insertBefore.get(child);
                children.forEach((c)=>{
                    insertions.push({
                        position: j,
                        type: c.type,
                        ...c.__listItemPlatformInfo
                    });
                    j++;
                });
            }
            if (removeChild.has(child)) {
                removals.push(i);
                removeChild.delete(child);
                j--;
            }
        }
        for(let i = 0; i < appendChild.length; i++){
            const child = appendChild[i];
            insertions.push({
                position: j + i,
                type: child.type,
                ...child.__listItemPlatformInfo
            });
        }
        insertions.sort((a, b)=>a.position - b.position);
        removals.sort((a, b)=>a - b);
        if (SystemInfo.lynxSdkVersion === '2.14' || SystemInfo.lynxSdkVersion === '2.15' || SystemInfo.lynxSdkVersion === '2.16' || SystemInfo.lynxSdkVersion === '2.17' || SystemInfo.lynxSdkVersion === '2.18') {
            const elementIndex = this.list.__snapshot_def.slot[0][1];
            const listElement = this.list.__elements[elementIndex];
            // `__GetAttributeByName` is available since Lynx 2.14
            if (__GetAttributeByName(listElement, 'custom-list-name') === 'list-container') {
                // `updateAction` must be full (not incremental) when Lynx version <= 2.18 and
                // when `custom-list-name` is `list-container` (available when Lynx version >= 2.14) is true,
                updates.length = 0;
                this.list.childNodes.forEach((child, index)=>{
                    updates.push({
                        ...child.__listItemPlatformInfo,
                        from: index,
                        to: index,
                        // no flush
                        flush: false,
                        type: child.type
                    });
                });
            }
        }
        return {
            insertAction: insertions,
            removeAction: removals,
            updateAction: updates
        };
    }
    toJSON() {
        // if (this.__pendingAttributes) {
        //   return [...this.__pendingAttributes, this.__toAttribute()];
        // } else {
        //   return [this.__toAttribute()];
        // }
        return [
            this.__toAttribute()
        ];
    }
    constructor(list){
        // private oldChildNodesSet: Set<SnapshotInstance>;
        this.removeChild = new Set();
        this.insertBefore = new Map();
        this.appendChild = [];
        this.platformInfoUpdate = new Map();
        this.list = list;
        this.oldChildNodes = list.childNodes;
    // this.oldChildNodesSet = new Set(this.oldChildNodes);
    }
} //# sourceMappingURL=listUpdateInfo.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InitDataConsumer: () => (InitDataConsumer),
  InitDataProvider: () => (InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__.MainThreadRef),
  root: () => (root),
  runOnBackground: () => (/* reexport safe */ _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_8__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_9__.runOnMainThread),
  useInitData: () => (useInitData),
  useInitDataChanged: () => (useInitDataChanged),
  useLynxGlobalEventListener: () => (/* reexport safe */ _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__.useMainThreadRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_3__.withInitDataInState)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _lynx_tt_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js");
/* ESM import */var _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js");
/* ESM import */var _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.








/**
 * The default and only root of ReactLynx for you to render JSX
 * @example
 * ```ts
 * import { root } from "@lynx-js/react"
 * ```
 *
 * @public
 */ const root = {
    render: (jsx)=>{
        {
            _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.__jsx = jsx;
            let preactProcess = undefined;
            // eslint-disable-next-line @typescript-eslint/unbound-method
            const oldDebounceRendering = preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering;
            preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = (cb)=>{
                preactProcess = cb;
            };
            try {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(jsx, _root_js__WEBPACK_IMPORTED_MODULE_7__.__root);
                preactProcess === null || preactProcess === void 0 ? void 0 : preactProcess();
            } finally{
                preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = oldDebounceRendering;
            }
            if (true) // `firstScreen` message might have been reached.
            (0,_lynx_tt_js__WEBPACK_IMPORTED_MODULE_6__.flushDelayedLifecycleEvents)();
            else {}
        }
    },
    /* v8 ignore next 3 */ registerDataProcessors: (dataProcessorDefinition)=>{
        lynx.registerDataProcessors(dataProcessorDefinition);
    }
};
const _InitData = /* @__PURE__ */ (0,_compat_initData_js__WEBPACK_IMPORTED_MODULE_3__.factory)({
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createContext,
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createElement,
    useLynxGlobalEventListener: _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__.useLynxGlobalEventListener
}, '__initData', 'onDataChanged');
/**
 * The {@link https://react.dev/reference/react/createContext#provider | Provider} Component that provide `initData`,
 * you must wrap your JSX inside it
 * @group Components
 *
 * @example
 *
 * ```ts
 * import { root } from "@lynx-js/react"
 *
 * function App() {
 *   return (
 *     <InitDataConsumer children={(initData) => <view>...</view>}/>
 *   )
 * }
 *
 * root.render(
 *   <InitDataProvider>
 *      <App/>
 *   </InitDataProvider>
 * );
 *
 * ```
 *
 * @public
 */ // @ts-expect-error make preact and react types work
const InitDataProvider = /* @__PURE__ */ _InitData.Provider();
/**
 * The {@link https://react.dev/reference/react/createContext#consumer | Consumer} Component that provide `initData`.
 * This should be used with {@link InitDataProvider}
 * @group Components
 * @public
 */ // @ts-expect-error make preact and react types work
const InitDataConsumer = /* @__PURE__ */ _InitData.Consumer();
/**
 * A React Hooks for you to get `initData`.
 * If `initData` is changed, a re-render will be triggered automatically.
 *
 * @example
 *
 * ```ts
 * function App() {
 *   const initData = useInitData();
 *
 *   initData.someProperty // use it
 * }
 * ```
 *
 * @public
 */ const useInitData = /* @__PURE__ */ _InitData.use();
/**
 * A React Hooks for you to get notified when `initData` changed.
 *
 * @example
 * ```ts
 * function App() {
 *   useInitDataChanged((data) => {
 *     data.someProperty // can use it
 *   })
 * }
 * ```
 * @public
 */ const useInitDataChanged = /* @__PURE__ */ _InitData.useChanged();




 //# sourceMappingURL=lynx-api.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (/* reexport safe */ _lynx_runWithForce_js__WEBPACK_IMPORTED_MODULE_11__.runWithForce)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _alog_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/alog/index.js");
/* ESM import */var _debug_component_stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/component-stack.js");
/* ESM import */var _debug_profile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js");
/* ESM import */var _document_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/document.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lifecycle_patch_error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/error.js");
/* ESM import */var _lynx_env_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _lynx_tt_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js");
/* ESM import */var _lynx_runWithForce_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/runWithForce.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// to make sure preact's hooks to register earlier than ours











if (true) (0,_debug_component_stack_js__WEBPACK_IMPORTED_MODULE_3__.setupComponentStack)();
if (false) {}
// Trick Preact and TypeScript to accept our custom document adapter.
preact__WEBPACK_IMPORTED_MODULE_0__.options.document = _document_js__WEBPACK_IMPORTED_MODULE_5__.document;
if (lynx.queueMicrotask) preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame = (callback)=>lynx.queueMicrotask(callback);
else if (globalThis.Promise) {
    const realResolvedPromise = globalThis.Promise.resolve();
    preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame = (callback)=>void realResolvedPromise.then(callback);
}
(0,_document_js__WEBPACK_IMPORTED_MODULE_5__.setupBackgroundDocument)();
(0,_lynx_tt_js__WEBPACK_IMPORTED_MODULE_10__.injectTt)();
(0,_lifecycle_patch_error_js__WEBPACK_IMPORTED_MODULE_7__.addCtxNotFoundEventListener)();
if (false) {}
else {
    var _lynx_performance_isProfileRecording, _lynx_performance;
    (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_6__.replaceCommitHook)();
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_9__.initTimingAPI)();
    if ((_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance_isProfileRecording = _lynx_performance.isProfileRecording) === null || _lynx_performance_isProfileRecording === void 0 ? void 0 : _lynx_performance_isProfileRecording.call(_lynx_performance)) (0,_debug_profile_js__WEBPACK_IMPORTED_MODULE_4__.initProfileHook)();
}
(0,_lynx_env_js__WEBPACK_IMPORTED_MODULE_8__.setupLynxEnv)(); //# sourceMappingURL=lynx.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _performance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/* eslint-disable */ 



{
    function reportRefDeprecationError(fnName, newFnName) {
        if (true) lynx.reportError(new Error(`${fnName} is deprecated and has different behavior in ReactLynx 3.0, please use ref or ${newFnName} instead.`));
    }
    const __Component = preact__WEBPACK_IMPORTED_MODULE_0__.Component;
    __Component.prototype._reactAppInstance = lynxCoreInject.tt;
    __Component.prototype.getNodeRef = function(a, b) {
        reportRefDeprecationError('getNodeRef', 'lynx.createSelectorQuery');
        // @ts-expect-error hack lynx-kernel
        return lynxCoreInject.tt._reactLynx.ReactComponent.prototype.getNodeRef.call({
            _type: '',
            // @ts-expect-error hack lynx-kernel
            _nativeApp: lynxCoreInject.tt._nativeApp,
            // @ts-expect-error hack lynx-kernel
            _uiModule: lynxCoreInject.tt._nativeApp.nativeModuleProxy.LynxUIMethodModule,
            _reactAppInstance: lynxCoreInject.tt
        }, a, b);
    };
    __Component.prototype.getNodeRefFromRoot = function(a) {
        reportRefDeprecationError('getNodeRefFromRoot', 'lynx.createSelectorQuery');
        // @ts-expect-error hack lynx-kernel
        return lynxCoreInject.tt._reactLynx.ReactComponent.prototype.getNodeRefFromRoot.call({
            _type: '',
            // @ts-expect-error hack lynx-kernel
            _nativeApp: lynxCoreInject.tt._nativeApp,
            // @ts-expect-error hack lynx-kernel
            _uiModule: lynxCoreInject.tt._nativeApp.nativeModuleProxy.LynxUIMethodModule,
            _reactAppInstance: lynxCoreInject.tt
        }, a);
    };
    __Component.prototype.registerModule = function(name, module) {
        this._reactAppInstance.registerModule(name, module);
    };
    __Component.prototype.getJSModule = function(name) {
        return this._reactAppInstance.getJSModule(name);
    };
    __Component.prototype.addGlobalEventListener = function(eventName, callback, context) {
        return this._reactAppInstance.getJSModule('GlobalEventEmitter').addListener(eventName, callback, context);
    };
    __Component.prototype.getElementById = function(id) {
        reportRefDeprecationError('getElementById', 'lynx.getElementById');
        return lynx.getElementById(id);
    };
    __Component.prototype.GlobalEventEmitter = lynxCoreInject.tt.GlobalEventEmitter;
    __Component.prototype.createSelectorQuery = function() {
        reportRefDeprecationError('createSelectorQuery on component instance', 'lynx.createSelectorQuery');
        return lynx.createSelectorQuery();
    };
    const oldSetState = __Component.prototype.setState;
    __Component.prototype.setState = function(state, callback) {
        oldSetState.call(this, state, callback);
        // @ts-ignore
        const timingFlag = this[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_STATE][_performance_js__WEBPACK_IMPORTED_MODULE_1__.PerfSpecificKey];
        if (timingFlag) {
            _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalFlushOptions.__lynx_timing_flag = timingFlag;
            (0,_performance_js__WEBPACK_IMPORTED_MODULE_1__.markTimingLegacy)('updateSetStateTrigger', timingFlag);
            this[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_STATE][_performance_js__WEBPACK_IMPORTED_MODULE_1__.PerfSpecificKey] = '';
        }
    };
} //# sourceMappingURL=component.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __dynamicImport: () => (__dynamicImport),
  loadDynamicJS: () => (loadDynamicJS)
});
/* ESM import */var _lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function loadDynamicJS(url) {
    return new Promise((resolve, reject)=>{
        lynx.requireModuleAsync(url, (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        });
    });
}
function __dynamicImport(url, options) {
    var _options_with;
    const t = options === null || options === void 0 ? void 0 : (_options_with = options.with) === null || _options_with === void 0 ? void 0 : _options_with.type;
    if (t === 'component' || t === 'tsx' || t === 'jsx') return (0,_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__.loadLazyBundle)(url);
    else return loadDynamicJS(url);
} //# sourceMappingURL=dynamic-js.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupLynxEnv: () => (setupLynxEnv)
});
function setupLynxEnv() {
    {
        const { initData, updateData } = lynxCoreInject.tt._params;
        lynx.__initData = {
            ...initData,
            ...updateData
        };
        lynx.registerDataProcessors = function() {};
    }
} //# sourceMappingURL=env.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadLazyBundle: () => (loadLazyBundle),
  makeSyncThen: () => (makeSyncThen)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * To make code below works
 * const App1 = lazy(() => import("./x").then(({App1}) => ({default: App1})))
 * const App2 = lazy(() => import("./x").then(({App2}) => ({default: App2})))
 * @internal
 */ const makeSyncThen = function(result) {
    return function(onF, _onR) {
        if (onF) {
            let ret;
            try {
                ret = onF(result);
            } catch (e) {
                // if (onR) {
                //   return Promise.resolve(onR(e));
                // }
                return Promise.reject(e);
            }
            if (ret && typeof ret.then === 'function' /* `thenable` object */ ) //   import("./x").then(() => new Promise(...))
            // )
            // Calling `then` and passing a callback is standard behavior
            // but in Lepus runtime the callback will never be called
            // So can be simplified to code below
            return ret;
            const p = Promise.resolve(ret);
            const then = makeSyncThen(ret);
            p.then = then;
            return p;
        }
        return this;
    };
};
/**
 * Load dynamic component from source. Designed to be used with `lazy`.
 * @param source - where dynamic component template.js locates
 * @returns
 * @public
 */ const loadLazyBundle = /*#__PURE__*/ (()=>{
    lynx.loadLazyBundle = loadLazyBundle;
    function loadLazyBundle(source) {
        {
            const resolver = withSyncResolvers();
            const callback = (result)=>{
                const { code, detail } = result;
                if (code === 0) {
                    const { schema } = detail;
                    const exports = lynxCoreInject.tt.getDynamicComponentExports(schema);
                    // `code === 0` means that the lazy bundle has been successfully parsed. However,
                    // its javascript files may still fail to run, which would prevent the retrieval of the exports object.
                    if (exports) {
                        resolver.resolve(exports);
                        return;
                    }
                }
                resolver.reject(new Error('Lazy bundle load failed: ' + JSON.stringify(result)));
            };
            if (typeof lynx.QueryComponent === 'function') lynx.QueryComponent(source, callback);
            else lynx.getNativeLynx().QueryComponent(source, callback);
            if (resolver.result !== null) {
                const p = Promise.resolve(resolver.result);
                p.then = makeSyncThen(resolver.result);
                return p;
            } else if (resolver.error === null) return new Promise((_resolve, _reject)=>{
                resolver.resolve = _resolve;
                resolver.reject = _reject;
            });
            else return Promise.reject(resolver.error);
        }
        throw new Error('unreachable');
    }
    return loadLazyBundle;
})();
function withSyncResolvers() {
    'background-only';
    const resolver = {
        resolve: (result)=>{
            resolver.result = result;
        },
        reject: (error)=>{
            resolver.error = error;
        },
        result: null,
        error: null
    };
    return resolver;
} //# sourceMappingURL=lazy-bundle.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PerfSpecificKey: () => (PerfSpecificKey),
  PerformanceTimingFlags: () => (PerformanceTimingFlags),
  PipelineOrigins: () => (PipelineOrigins),
  beginPipeline: () => (beginPipeline),
  globalPipelineOptions: () => (globalPipelineOptions),
  initTimingAPI: () => (initTimingAPI),
  markTiming: () => (markTiming),
  markTimingLegacy: () => (markTimingLegacy),
  setPipeline: () => (setPipeline)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




const PerformanceTimingFlags = {
    reactLynxHydrate: 'react_lynx_hydrate'
};
const PipelineOrigins = {
    reactLynxHydrate: 'reactLynxHydrate',
    updateTriggeredByBts: 'updateTriggeredByBts'
};
/**
 * @deprecated used by old timing api(setState timing flag)
 */ const PerfSpecificKey = '__lynx_timing_flag';
let timingFlag;
let shouldMarkDiffVdomStart = false;
let shouldMarkDiffVdomEnd = false;
let globalPipelineOptions;
/**
 * @deprecated used by old timing api(setState timing flag)
 */ function markTimingLegacy(key, timingFlag_) {
    var _lynx_getNativeApp_markTiming, _lynx_getNativeApp;
    switch(key){
        case 'updateSetStateTrigger':
            shouldMarkDiffVdomStart = true;
            shouldMarkDiffVdomEnd = true;
            timingFlag = timingFlag_;
            break;
        case 'updateDiffVdomStart':
            /* v8 ignore start */ if (!shouldMarkDiffVdomStart) return;
            /* v8 ignore stop */ shouldMarkDiffVdomStart = false;
            break;
        case 'updateDiffVdomEnd':
            if (!shouldMarkDiffVdomEnd) return;
            shouldMarkDiffVdomEnd = false;
            break;
    }
    (_lynx_getNativeApp_markTiming = (_lynx_getNativeApp = lynx.getNativeApp()).markTiming) === null || _lynx_getNativeApp_markTiming === void 0 ? void 0 : _lynx_getNativeApp_markTiming.call(_lynx_getNativeApp, timingFlag, key);
}
function beginPipeline(needTimestamps, pipelineOrigin, timingFlag) {
    var _lynx_performance__generatePipelineOptions, _lynx_performance;
    globalPipelineOptions = (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__generatePipelineOptions = _lynx_performance._generatePipelineOptions) === null || _lynx_performance__generatePipelineOptions === void 0 ? void 0 : _lynx_performance__generatePipelineOptions.call(_lynx_performance);
    if (globalPipelineOptions) {
        var _lynx_performance__onPipelineStart, _lynx_performance1, _lynx_performance__onPipelineStart1, _lynx_performance2, _lynx_performance__bindPipelineIdWithTimingFlag, _lynx_performance3;
        globalPipelineOptions.needTimestamps = needTimestamps;
        globalPipelineOptions.pipelineOrigin = pipelineOrigin;
        globalPipelineOptions.dsl = 'reactLynx';
        switch(pipelineOrigin){
            case PipelineOrigins.reactLynxHydrate:
                globalPipelineOptions.stage = 'hydrate';
                break;
            case PipelineOrigins.updateTriggeredByBts:
                globalPipelineOptions.stage = 'update';
                break;
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isSdkVersionGt)(3, 0)) (_lynx_performance1 = lynx.performance) === null || _lynx_performance1 === void 0 ? void 0 : (_lynx_performance__onPipelineStart = _lynx_performance1._onPipelineStart) === null || _lynx_performance__onPipelineStart === void 0 ? void 0 : _lynx_performance__onPipelineStart.call(_lynx_performance1, globalPipelineOptions.pipelineID, globalPipelineOptions);
        else (_lynx_performance2 = lynx.performance) === null || _lynx_performance2 === void 0 ? void 0 : (_lynx_performance__onPipelineStart1 = _lynx_performance2._onPipelineStart) === null || _lynx_performance__onPipelineStart1 === void 0 ? void 0 : _lynx_performance__onPipelineStart1.call(_lynx_performance2, globalPipelineOptions.pipelineID);
        if (timingFlag) (_lynx_performance3 = lynx.performance) === null || _lynx_performance3 === void 0 ? void 0 : (_lynx_performance__bindPipelineIdWithTimingFlag = _lynx_performance3._bindPipelineIdWithTimingFlag) === null || _lynx_performance__bindPipelineIdWithTimingFlag === void 0 ? void 0 : _lynx_performance__bindPipelineIdWithTimingFlag.call(_lynx_performance3, globalPipelineOptions.pipelineID, timingFlag);
    }
}
function setPipeline(pipeline) {
    globalPipelineOptions = pipeline;
}
function markTiming(timestampKey, force) {
    var _lynx_performance__markTiming, _lynx_performance;
    if (globalPipelineOptions && (force || globalPipelineOptions.needTimestamps)) (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__markTiming = _lynx_performance._markTiming) === null || _lynx_performance__markTiming === void 0 ? void 0 : _lynx_performance__markTiming.call(_lynx_performance, globalPipelineOptions.pipelineID, timestampKey);
}
function initTimingAPI() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const helper = ()=>{
        // check `__globalSnapshotPatch` to make sure this only runs after hydrate
        if (_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.__globalSnapshotPatch) {
            if (!globalPipelineOptions) {
                beginPipeline(false, PipelineOrigins.updateTriggeredByBts);
                markTiming('diffVdomStart', true);
            }
            if (shouldMarkDiffVdomStart) markTimingLegacy('updateDiffVdomStart');
        }
    };
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__.RENDER_COMPONENT, (old, vnode, c)=>{
        helper();
        /* v8 ignore start */ if (old) old(vnode, c);
    /* v8 ignore stop */ });
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hook)(preact__WEBPACK_IMPORTED_MODULE_0__.options, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__.ROOT, (old, vnode, parentDom)=>{
        helper();
        /* v8 ignore start */ if (old) old(vnode, parentDom);
    /* v8 ignore stop */ });
}
/**
 * @internal
 */  //# sourceMappingURL=performance.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/runWithForce.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (runWithForce)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function runWithForce(cb) {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF2];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF2] = (vnode, oldVNode)=>{
        /* v8 ignore start */ if (oldDiff) oldDiff(vnode, oldVNode);
        /* v8 ignore stop */ const c = oldVNode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
        if (c) c[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.FORCE] = true;
    };
    try {
        cb();
    } finally{
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF2] = oldDiff;
    }
} //# sourceMappingURL=runWithForce.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/suspense.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Suspense: () => (Suspense)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const Suspense = ({ children, fallback })=>{
    const __createElement = preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement;
    const childrenRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    // @ts-expect-error wrapper is a valid element type
    const newChildren = __createElement('wrapper', {
        ref: (bsi)=>{
            if (bsi) childrenRef.current = bsi;
        }
    }, children);
    // @ts-expect-error wrapper is a valid element type
    const newFallback = __createElement('wrapper', {
        ref: (bsi)=>{
            if (bsi && childrenRef.current) {
                const i = _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalBackgroundSnapshotInstancesToRemove.indexOf(childrenRef.current.__id);
                if (i !== -1) _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalBackgroundSnapshotInstancesToRemove.splice(i, 1);
                childrenRef.current = undefined;
            }
        }
    }, fallback);
    return __createElement(preact_compat__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: newFallback
    }, newChildren);
}; //# sourceMappingURL=suspense.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  flushDelayedLifecycleEvents: () => (flushDelayedLifecycleEvents),
  injectTt: () => (injectTt),
  runWithForce: () => (/* reexport safe */ _runWithForce_js__WEBPACK_IMPORTED_MODULE_4__.runWithForce)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _performance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
/* ESM import */var _runWithForce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/runWithForce.js");
/* ESM import */var _lifecycle_destroy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js");
/* ESM import */var _lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayEvents.js");
/* ESM import */var _lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayLifecycleEvents.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lifecycle_patch_error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/error.js");
/* ESM import */var _lifecycle_ref_delay_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/ref/delay.js");
/* ESM import */var _lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _worklet_destroy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

















function injectTt() {
    const tt = lynxCoreInject.tt;
    tt.OnLifecycleEvent = onLifecycleEvent;
    tt.publishEvent = _lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedPublishEvent;
    tt.publicComponentEvent = delayedPublicComponentEvent;
    tt.callDestroyLifetimeFun = ()=>{
        (0,_lifecycle_patch_error_js__WEBPACK_IMPORTED_MODULE_9__.removeCtxNotFoundEventListener)();
        (0,_worklet_destroy_js__WEBPACK_IMPORTED_MODULE_15__.destroyWorklet)();
        (0,_lifecycle_destroy_js__WEBPACK_IMPORTED_MODULE_5__.destroyBackground)();
    };
    tt.updateGlobalProps = updateGlobalProps;
    tt.updateCardData = updateCardData;
    tt.onAppReload = _lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_11__.reloadBackground;
    tt.processCardConfig = ()=>{
    // used to updateTheme, no longer rely on this function
    };
}
function onLifecycleEvent([type, data]) {
    const hasRootRendered = _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_12__.CHILDREN in _root_js__WEBPACK_IMPORTED_MODULE_13__.__root;
    // never called `render(<App/>, __root)`
    // happens if user call `root.render()` async
    if (!hasRootRendered) {
        (0,_lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__.delayLifecycleEvent)(type, data);
        return;
    }
    if (true) console.profile(`OnLifecycleEvent::${type}`);
    try {
        onLifecycleEventImpl(type, data);
    } catch (e) {
        lynx.reportError(e);
    }
    if (true) console.profileEnd();
}
function onLifecycleEventImpl(type, data) {
    switch(type){
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.firstScreen:
            {
                const { root: lepusSide, jsReadyEventIdSwap } = data;
                if (true) console.profile('hydrate');
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.beginPipeline)(true, _performance_js__WEBPACK_IMPORTED_MODULE_2__.PipelineOrigins.reactLynxHydrate, _performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingFlags.reactLynxHydrate);
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)('hydrateParseSnapshotStart');
                const before = JSON.parse(lepusSide);
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)('hydrateParseSnapshotEnd');
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)('diffVdomStart');
                const snapshotPatch = (0,_backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_3__.hydrate)(before, _root_js__WEBPACK_IMPORTED_MODULE_13__.__root);
                if (true) console.profileEnd();
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)('diffVdomEnd');
                // TODO: It seems `delayedEvents` and `delayedLifecycleEvents` should be merged into one array to ensure the proper order of events.
                flushDelayedLifecycleEvents();
                if (_lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedEvents) {
                    _lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedEvents.forEach((args)=>{
                        var _jsReadyEventIdSwap_idStr;
                        const [handlerName, data] = args;
                        // eslint-disable-next-line prefer-const
                        let [idStr, ...rest] = handlerName.split(':');
                        while(jsReadyEventIdSwap[idStr])idStr = (_jsReadyEventIdSwap_idStr = jsReadyEventIdSwap[idStr]) === null || _jsReadyEventIdSwap_idStr === void 0 ? void 0 : _jsReadyEventIdSwap_idStr.toString();
                        try {
                            publishEvent([
                                idStr,
                                ...rest
                            ].join(':'), data);
                        } catch (e) {
                            lynx.reportError(e);
                        }
                    });
                    _lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedEvents.length = 0;
                }
                lynxCoreInject.tt.publishEvent = publishEvent;
                lynxCoreInject.tt.publicComponentEvent = publicComponentEvent;
                // console.debug("********** After hydration:");
                // printSnapshotInstance(__root as BackgroundSnapshotInstance);
                if (true) console.profile('commitChanges');
                const commitTaskId = (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__.genCommitTaskId)();
                const patchList = {
                    patchList: [
                        {
                            snapshotPatch,
                            id: commitTaskId
                        }
                    ]
                };
                const obj = (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__.commitPatchUpdate)(patchList, {
                    isHydration: true
                });
                lynx.getNativeApp().callLepusMethod(_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.patchUpdate, obj, ()=>{
                    _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__.globalCommitTaskMap.forEach((commitTask, id)=>{
                        if (id > commitTaskId) return;
                        commitTask();
                        _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__.globalCommitTaskMap["delete"](id);
                    });
                });
                (0,_lifecycle_ref_delay_js__WEBPACK_IMPORTED_MODULE_10__.runDelayedUiOps)();
                break;
            }
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.globalEventFromLepus:
            {
                const [eventName, params] = data;
                lynx.getJSModule('GlobalEventEmitter').trigger(eventName, params);
                break;
            }
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.publishEvent:
            {
                const { handlerName, data: d } = data;
                lynxCoreInject.tt.publishEvent(handlerName, d);
                break;
            }
    }
}
let flushingDelayedLifecycleEvents = false;
function flushDelayedLifecycleEvents() {
    // avoid stackoverflow
    if (flushingDelayedLifecycleEvents) return;
    flushingDelayedLifecycleEvents = true;
    if (_lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__.delayedLifecycleEvents) {
        _lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__.delayedLifecycleEvents.forEach((e)=>{
            onLifecycleEvent(e);
        });
        _lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__.delayedLifecycleEvents.length = 0;
    }
    flushingDelayedLifecycleEvents = false;
}
function publishEvent(handlerName, data) {
    var _lynxCoreInject_tt_callBeforePublishEvent, _lynxCoreInject_tt;
    (_lynxCoreInject_tt_callBeforePublishEvent = (_lynxCoreInject_tt = lynxCoreInject.tt).callBeforePublishEvent) === null || _lynxCoreInject_tt_callBeforePublishEvent === void 0 ? void 0 : _lynxCoreInject_tt_callBeforePublishEvent.call(_lynxCoreInject_tt, data);
    const eventHandler = _snapshot_js__WEBPACK_IMPORTED_MODULE_14__.backgroundSnapshotInstanceManager.getValueBySign(handlerName);
    if (eventHandler) try {
        eventHandler(data);
    } catch (e) {
        lynx.reportError(e);
    }
}
function publicComponentEvent(_componentId, handlerName, data) {
    publishEvent(handlerName, data);
}
function delayedPublicComponentEvent(_componentId, handlerName, data) {
    (0,_lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedPublishEvent)(handlerName, data);
}
function updateGlobalProps(newData) {
    Object.assign(lynx.__globalProps, newData);
    // Our purpose is to make sure SYNC setState inside `emit`'s listeners
    // can be batched with updateFromRoot
    // This is already done because updateFromRoot will consume all dirty flags marked by
    // the setState, and setState's flush will be a noop. No extra diffs will be needed.
    Promise.resolve().then(()=>{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        (0,_runWithForce_js__WEBPACK_IMPORTED_MODULE_4__.runWithForce)(()=>(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(_root_js__WEBPACK_IMPORTED_MODULE_13__.__root.__jsx, _root_js__WEBPACK_IMPORTED_MODULE_13__.__root));
    });
    lynxCoreInject.tt.GlobalEventEmitter.emit('onGlobalPropsChanged', undefined);
}
function updateCardData(newData, options) {
    const { ['__lynx_timing_flag']: performanceTimingFlag, ...restNewData } = newData;
    if (performanceTimingFlag) lynx.reportError(new Error(`Received unsupported updateData with \`__lynx_timing_flag\` (value "${performanceTimingFlag}"), the timing flag is ignored`));
    const { type = _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.NativeUpdateDataType.UPDATE } = options !== null && options !== void 0 ? options : {};
    if (type == _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.NativeUpdateDataType.RESET) lynx.__initData = {};
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    lynx.__initData = Object.assign({}, lynx.__initData, restNewData);
    lynxCoreInject.tt.GlobalEventEmitter.emit('onDataChanged', [
        restNewData
    ]);
}
 //# sourceMappingURL=tt.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderOpcodesInto: () => (renderOpcodesInto),
  ssrHydrateByOpcodes: () => (ssrHydrateByOpcodes)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




var Opcode;
(function(Opcode) {
    Opcode[Opcode["Begin"] = 0] = "Begin";
    Opcode[Opcode["End"] = 1] = "End";
    Opcode[Opcode["Attr"] = 2] = "Attr";
    Opcode[Opcode["Text"] = 3] = "Text";
})(Opcode || (Opcode = {}));
function ssrHydrateByOpcodes(opcodes, into, refMap) {
    let top = into;
    const stack = [
        into
    ];
    for(let i = 0; i < opcodes.length;){
        const opcode = opcodes[i];
        switch(opcode){
            case Opcode.Begin:
                {
                    const p = top;
                    const [type, __id, elements] = opcodes[i + 1];
                    top = new _snapshot_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotInstance(type, __id);
                    top.__pendingElements = elements;
                    p.insertBefore(top);
                    stack.push(top);
                    i += 2;
                    break;
                }
            case Opcode.End:
                {
                    // @ts-ignore
                    top[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__.CHILDREN] = undefined;
                    top.__elements = top.__pendingElements.map(({ ssrID })=>refMap[ssrID]);
                    top.__element_root = top.__elements[0];
                    delete top.__pendingElements;
                    if (top.__snapshot_def.isListHolder) {
                        const listElement = top.__element_root;
                        const listElementUniqueID = __GetElementUniqueID(listElement);
                        const signMap = _list_js__WEBPACK_IMPORTED_MODULE_1__.gSignMap[listElementUniqueID] = new Map();
                        _list_js__WEBPACK_IMPORTED_MODULE_1__.gRecycleMap[listElementUniqueID] = new Map();
                        const enqueueFunc = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.enqueueComponentFactory)();
                        const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.componentAtIndexFactory)(top.childNodes, _hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate);
                        for (const child of top.childNodes)if (child.__element_root) {
                            const childElementUniqueID = __GetElementUniqueID(child.__element_root);
                            signMap.set(childElementUniqueID, child);
                            enqueueFunc(listElement, listElementUniqueID, childElementUniqueID);
                        }
                        __UpdateListCallbacks(listElement, componentAtIndex, enqueueFunc, componentAtIndexes);
                    }
                    stack.pop();
                    const p = stack[stack.length - 1];
                    top = p;
                    i += 1;
                    break;
                }
            case Opcode.Attr:
                {
                    const key = opcodes[i + 1];
                    const value = opcodes[i + 2];
                    top.setAttribute(key, value);
                    i += 3;
                    break;
                }
            case Opcode.Text:
                {
                    const [[type, __id, elements], text] = opcodes[i + 1];
                    const s = new _snapshot_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotInstance(type, __id);
                    s.setAttribute(0, text);
                    top.insertBefore(s);
                    s.__elements = elements.map(({ ssrID })=>refMap[ssrID]);
                    s.__element_root = s.__elements[0];
                    i += 2;
                    break;
                }
        }
    }
}
function renderOpcodesInto(opcodes, into) {
    let top = into;
    const stack = [
        into
    ];
    for(let i = 0; i < opcodes.length;){
        const opcode = opcodes[i];
        switch(opcode){
            case Opcode.Begin:
                {
                    const p = top;
                    top = opcodes[i + 1];
                    // @ts-ignore
                    if (top.__parent) {
                        // already inserted
                        top = new _snapshot_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotInstance(top.type);
                        opcodes[i + 1] = top;
                    }
                    p.insertBefore(top);
                    stack.push(top);
                    i += 2;
                    break;
                }
            case Opcode.End:
                {
                    // @ts-ignore
                    top[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__.CHILDREN] = undefined;
                    stack.pop();
                    const p = stack[stack.length - 1];
                    top = p;
                    i += 1;
                    break;
                }
            case Opcode.Attr:
                {
                    const key = opcodes[i + 1];
                    const value = opcodes[i + 2];
                    top.setAttribute(key, value);
                    i += 3;
                    break;
                }
            case Opcode.Text:
                {
                    const text = opcodes[i + 1];
                    const s = new _snapshot_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotInstance(null);
                    if (false) {}
                    s.setAttribute(0, text);
                    top.insertBefore(s);
                    i += 2;
                    break;
                }
        }
    }
} //# sourceMappingURL=opcodes.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __pendingListUpdates: () => (__pendingListUpdates)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const __pendingListUpdates = {
    values: {},
    clear () {
        this.values = {};
    },
    flush () {
        if (this.values) {
            Object.values(this.values).forEach((update)=>{
                update.flush();
            });
            this.clear();
        }
    },
    runWithoutUpdates (cb) {
        const old = this.values;
        this.values = null;
        try {
            cb();
        } finally{
            this.values = old;
        }
    }
}; //# sourceMappingURL=pendingListUpdates.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CATCH_ERROR: () => (CATCH_ERROR),
  CHILDREN: () => (CHILDREN),
  CHILD_DID_SUSPEND: () => (CHILD_DID_SUSPEND),
  COMMIT: () => (COMMIT),
  COMPONENT: () => (COMPONENT),
  DIFF: () => (DIFF),
  DIFF2: () => (DIFF2),
  DIFFED: () => (DIFFED),
  DIRTY: () => (DIRTY),
  DOM: () => (DOM),
  FORCE: () => (FORCE),
  HOOK: () => (HOOK),
  MASK: () => (MASK),
  NEXT_STATE: () => (NEXT_STATE),
  PARENT: () => (PARENT),
  RENDER: () => (RENDER),
  RENDER_CALLBACKS: () => (RENDER_CALLBACKS),
  RENDER_COMPONENT: () => (RENDER_COMPONENT),
  ROOT: () => (ROOT),
  SKIP_EFFECTS: () => (SKIP_EFFECTS),
  VNODE: () => (VNODE)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const DIFF = '__b';
const DIFF2 = '_diff2';
const RENDER = '__r';
const DIFFED = 'diffed';
const COMMIT = '__c';
const SKIP_EFFECTS = '__s';
const CATCH_ERROR = '__e';
const ROOT = '__';
const RENDER_COMPONENT = 'renderComponent';
// VNode properties
const COMPONENT = '__c';
const CHILDREN = '__k';
const PARENT = '__';
const MASK = '__m';
const DOM = '__e';
// Component properties
const VNODE = '__v';
const DIRTY = '__d';
const FORCE = '__e';
const NEXT_STATE = '__s';
const CHILD_DID_SUSPEND = '__c';
const RENDER_CALLBACKS = '__h';
const HOOK = '__h'; //# sourceMappingURL=constants.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __OpAttr: () => (__OpAttr),
  __OpBegin: () => (__OpBegin),
  __OpEnd: () => (__OpEnd),
  __OpText: () => (__OpText),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  render: () => (render),
  renderToStaticMarkup: () => (renderToStaticMarkup),
  renderToString: () => (renderToString)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements rendering to opcodes.
 * This module is modified from preact-render-to-string@6.0.3 to generate
 * opcodes instead of HTML strings for Lynx.
 */ // @ts-nocheck


/** @typedef {import('preact').VNode} VNode */ const EMPTY_ARR = [];
const isArray = /* @__PURE__ */ Array.isArray;
const assign = /* @__PURE__ */ Object.assign;
// Global state for the current render pass
let beforeDiff, beforeDiff2, afterDiff, renderHook, ummountHook;
/**
 * Render Preact JSX + Components to an HTML string.
 * @param {VNode} vnode	JSX Element / VNode to render
 * @param {object} [context] Initial root context object
 */ function renderToString(vnode, context) {
    // Performance optimization: `renderToString` is synchronous and we
    // therefore don't execute any effects. To do that we pass an empty
    // array to `options._commit` (`__c`). But we can go one step further
    // and avoid a lot of dirty checks and allocations by setting
    // `options._skipEffects` (`__s`) too.
    const previousSkipEffects = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS] = true;
    // store options hooks once before each synchronous render call
    beforeDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    beforeDiff2 = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF2];
    afterDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    renderHook = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    ummountHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
    const parent = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    parent[_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = [
        vnode
    ];
    const opcodes = [];
    try {
        _renderToString(vnode, context || EMPTY_OBJ, false, undefined, parent, opcodes, 0);
    } finally{
        // options._commit, we don't schedule any effects in this library right now,
        // so we can pass an empty queue to this hook.
        if (preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMIT]) preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMIT](vnode, EMPTY_ARR);
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS] = previousSkipEffects;
        EMPTY_ARR.length = 0;
    }
    return opcodes;
}
// Installed as setState/forceUpdate for function components
function markAsDirty() {
    this.__d = true;
}
const EMPTY_OBJ = {};
const __OpBegin = 0;
const __OpEnd = 1;
const __OpAttr = 2;
const __OpText = 3;
/**
 * @param {VNode} vnode
 * @param {Record<string, unknown>} context
 */ function renderClassComponent(vnode, context) {
    const type = /** @type {import("preact").ComponentClass<typeof vnode.props>} */ vnode.type;
    let c;
    if (vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT]) {
        c = vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
        c.state = c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE];
    } else c = new type(vnode.props, context);
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = c;
    c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE] = vnode;
    c.props = vnode.props;
    c.context = context;
    // turn off stateful re-rendering:
    c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = true;
    if (c.state == null) c.state = EMPTY_OBJ;
    if (c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE] == null) c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE] = c.state;
    if (type.getDerivedStateFromProps) c.state = assign({}, c.state, type.getDerivedStateFromProps(c.props, c.state));
    if (renderHook) renderHook(vnode);
    return c.render(c.props, c.state, context);
}
/**
 * Recursively render VNodes to HTML.
 * @param {VNode|any} vnode
 * @param {any} context
 * @param {boolean} isSvgMode
 * @param {any} selectValue
 * @param {VNode} parent
 * @param opcodes
 */ function _renderToString(vnode, context, isSvgMode, selectValue, parent, opcodes, opcodesLength) {
    // Ignore non-rendered VNodes/values
    if (vnode == null || vnode === true || vnode === false || vnode === '') return;
    // Text VNodes: escape as HTML
    if (typeof vnode !== 'object') {
        if (typeof vnode === 'function') return;
        opcodes.push(__OpText, vnode + '');
        return;
    }
    // Recurse into children / Arrays
    if (isArray(vnode)) {
        parent[_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = vnode;
        for(let i = 0; i < vnode.length; i++){
            const child = vnode[i];
            if (child == null || typeof child === 'boolean') continue;
            _renderToString(child, context, isSvgMode, selectValue, parent, opcodes, opcodes.length);
        }
        return;
    }
    // VNodes have {constructor:undefined} to prevent JSON injection:
    // if (vnode.constructor !== undefined) return;
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = parent;
    if (beforeDiff) beforeDiff(vnode);
    if (beforeDiff2) beforeDiff2(vnode, EMPTY_OBJ);
    let type = vnode.type, props = vnode.props, cctx = context, contextType, rendered, component;
    // Invoke rendering on Components
    if (typeof type === 'function') {
        if (type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment) rendered = props.children;
        else {
            contextType = type.contextType;
            if (contextType != null) {
                const provider = context[contextType.__c];
                cctx = provider ? provider.props.value : contextType.__;
            }
            if (type.prototype && typeof type.prototype.render === 'function') {
                rendered = /**#__NOINLINE__**/ renderClassComponent(vnode, cctx);
                component = vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
            } else {
                component = {
                    __v: vnode,
                    props,
                    context: cctx,
                    // silently drop state updates
                    setState: markAsDirty,
                    forceUpdate: markAsDirty,
                    __d: true,
                    // hooks
                    __h: []
                };
                vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = component;
                component.constructor = type;
                component.render = doRender;
                // If a hook invokes setState() to invalidate the component during rendering,
                // re-render it up to 25 times to allow "settling" of memoized states.
                // Note:
                //   This will need to be updated for Preact 11 to use internal.flags rather than component._dirty:
                //   https://github.com/preactjs/preact/blob/d4ca6fdb19bc715e49fd144e69f7296b2f4daa40/src/diff/component.js#L35-L44
                let count = 0;
                while(component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] && count++ < 25){
                    component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = false;
                    if (renderHook) renderHook(vnode);
                    rendered = component.render(props, component.state, cctx);
                }
                component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = true;
            }
            if (component.getChildContext != null) context = assign({}, context, component.getChildContext());
        }
        // When a component returns a Fragment node we flatten it in core, so we
        // need to mirror that logic here too
        const isTopLevelFragment = rendered != null && rendered.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment && rendered.key == null;
        rendered = isTopLevelFragment ? rendered.props.children : rendered;
        // Recurse into children before invoking the after-diff hook
        try {
            _renderToString(rendered, context, isSvgMode, selectValue, vnode, opcodes, opcodes.length);
        } catch (e) {
            if (e && typeof e === 'object' && e.then && component && /* _childDidSuspend */ component.__c) {
                component.setState({
                    __a: true
                });
                if (component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY]) {
                    rendered = renderClassComponent(vnode, context);
                    component = vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
                    opcodes.length = opcodesLength;
                    _renderToString(rendered, context, isSvgMode, selectValue, vnode, opcodes, opcodes.length);
                }
            } else throw e;
        } finally{
            if (afterDiff) afterDiff(vnode);
            vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = undefined;
            if (ummountHook) ummountHook(vnode);
        }
        return;
    }
    let children;
    opcodes.push(__OpBegin, vnode);
    for(const name in props){
        const v = props[name];
        switch(name){
            case 'children':
                children = v;
                continue;
            // VDOM-specific props
            /* c8 ignore next 5 */ case 'key':
            case 'ref':
            case '__self':
            case '__source':
                continue;
            default:
        }
        // write this attribute to the buffer
        if (v != null && v !== false && typeof v !== 'function') opcodes.push(__OpAttr, name, v);
    }
    if (typeof children === 'string' || typeof children === 'number') opcodes.push(__OpText, children);
    else if (children != null && children !== false && children !== true) _renderToString(children, context, false, selectValue, vnode, opcodes, opcodes.length);
    if (afterDiff) afterDiff(vnode);
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = undefined;
    if (ummountHook) ummountHook(vnode);
    opcodes.push(__OpEnd);
    return;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderToString);
const render = renderToString;
const renderToStaticMarkup = renderToString; //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __root: () => (__root),
  setRoot: () => (setRoot)
});
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * The internal ReactLynx's root.
 * {@link @lynx-js/react!Root | root}.
 */ let __root;
function setRoot(root) {
    __root = root;
    // A fake ELEMENT_NODE to make preact/debug happy.
    if ( true && __root) __root.nodeType = 1;
}
setRoot(new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance('root'));
 //# sourceMappingURL=root.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotInstance: () => (SnapshotInstance),
  __DynamicPartChildren_0: () => (__DynamicPartChildren_0),
  __page: () => (__page),
  __pageId: () => (__pageId),
  backgroundSnapshotInstanceManager: () => (backgroundSnapshotInstanceManager),
  clearPage: () => (clearPage),
  createSnapshot: () => (createSnapshot),
  entryUniqID: () => (entryUniqID),
  setupPage: () => (setupPage),
  snapshotInstanceManager: () => (snapshotInstanceManager),
  snapshotManager: () => (snapshotManager),
  traverseSnapshotInstance: () => (traverseSnapshotInstance)
});
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/listUpdateInfo.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js");
/* ESM import */var _snapshot_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.







let __page;
let __pageId = 0;
function setupPage(page) {
    __page = page;
    __pageId = __GetElementUniqueID(page);
}
function clearPage() {
    __page = undefined;
    __pageId = 0;
}
const __DynamicPartChildren_0 = [
    [
        _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__.DynamicPartType.Children,
        0
    ]
];
const snapshotManager = {
    values: /* @__PURE__ */ new Map([
        [
            'root',
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __page
                    ];
                },
                update: [],
                slot: __DynamicPartChildren_0,
                isListHolder: false,
                cssId: 0
            }
        ],
        [
            'wrapper',
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __CreateWrapperElement(__pageId)
                    ];
                },
                update: [],
                slot: __DynamicPartChildren_0,
                isListHolder: false
            }
        ],
        [
            null,
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __CreateRawText('')
                    ];
                },
                update: [
                    (ctx)=>{
                        /* v8 ignore start */ if (false) {}
                        /* v8 ignore stop */ if (ctx.__elements) __SetAttribute(ctx.__elements[0], 'text', ctx.__values[0]);
                    }
                ],
                slot: [],
                isListHolder: false
            }
        ]
    ])
};
const snapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
    }
};
const backgroundSnapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
    },
    updateId (id, newId) {
        const values = this.values;
        const si = values.get(id);
        // For PreactDevtools, on first hydration,
        // PreactDevtools can get the real snapshot instance id in main-thread
        if (true) lynx.getJSModule('GlobalEventEmitter').emit('onBackgroundSnapshotInstanceUpdateId', [
            {
                backgroundSnapshotInstance: si,
                oldId: id,
                newId
            }
        ]);
        values.delete(id);
        values.set(newId, si);
        si.__id = newId;
    },
    getValueBySign (str) {
        const res = str === null || str === void 0 ? void 0 : str.split(':');
        if (!res || res.length != 2 && res.length != 3) throw new Error('Invalid ctx format: ' + str);
        const id = Number(res[0]);
        const expIndex = Number(res[1]);
        const ctx = this.values.get(id);
        if (!ctx) return null;
        const spreadKey = res[2];
        if (res[1] === '__extraProps') {
            if (spreadKey) return ctx.__extraProps[spreadKey];
            throw new Error('unreachable');
        } else {
            if (spreadKey) return ctx.__values[expIndex][spreadKey];
            else return ctx.__values[expIndex];
        }
    }
};
function entryUniqID(uniqID, entryName) {
    return entryName ? `${entryName}:${uniqID}` : uniqID;
}
function createSnapshot(uniqID, create, update, slot, cssId, entryName, refAndSpreadIndexes) {
    var _update_map;
    if ( true && _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.__globalSnapshotPatch && !snapshotManager.values.has(entryUniqID(uniqID, entryName)) && create !== null) // This means that `uniqID` is considered the "hash" of the snapshot.
    // When HMR (Hot Module Replacement) or fast refresh updates occur, `createSnapshot` will be re-executed with the new snapshot definition.
    _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.DEV_ONLY_AddSnapshot, uniqID, // This allows the updates to be applied to Lepus.
    // As a result, both the static part (`create`) and the dynamic parts (`update` and `slot`) can be updated.
    create.toString(), (_update_map = update === null || update === void 0 ? void 0 : update.map((f)=>f.toString())) !== null && _update_map !== void 0 ? _update_map : [], slot, cssId, entryName);
    uniqID = entryUniqID(uniqID, entryName);
    const s = {
        create,
        update,
        slot,
        cssId,
        entryName,
        refAndSpreadIndexes
    };
    snapshotManager.values.set(uniqID, s);
    if (slot && slot[0] && slot[0][0] === _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__.DynamicPartType.ListChildren) s.isListHolder = true;
    return uniqID;
}
function traverseSnapshotInstance(si, callback) {
    const c = si.childNodes;
    callback(si);
    for (const vv of c)traverseSnapshotInstance(vv, callback);
}
const DEFAULT_ENTRY_NAME = '__Card__';
const DEFAULT_CSS_ID = 0;
/**
 * The runtime instance of a {@link Snapshot} on the main thread that manages
 * the actual elements and handles updates to dynamic parts.
 *
 * This class is designed to be compatible with Preact's {@link ContainerNode}
 * interface for Preact's renderer to operate upon.
 */ class SnapshotInstance {
    ensureElements() {
        const { create, slot, isListHolder, cssId, entryName } = this.__snapshot_def;
        const elements = create(this);
        this.__elements = elements;
        this.__element_root = elements[0];
        if (cssId === undefined) {
            if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, DEFAULT_CSS_ID, entryName);
        } else if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, cssId, entryName);
        else __SetCSSId(this.__elements, cssId);
        _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_2__.__pendingListUpdates.runWithoutUpdates(()=>{
            const values = this.__values;
            if (values) {
                this.__values = undefined;
                this.setAttribute('values', values);
            }
        });
        if (isListHolder) ;
        else {
            let index = 0;
            let child = this.__firstChild;
            while(child){
                child.ensureElements();
                const [type, elementIndex] = slot[index];
                switch(type){
                    case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__.DynamicPartType.Slot:
                        __ReplaceElement(child.__element_root, elements[elementIndex]);
                        elements[elementIndex] = child.__element_root;
                        index++;
                        break;
                    /* v8 ignore start */ case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__.DynamicPartType.MultiChildren:
                        if (__GetTag(elements[elementIndex]) === 'wrapper') __ReplaceElement(child.__element_root, elements[elementIndex]);
                        else __AppendElement(elements[elementIndex], child.__element_root);
                        index++;
                        break;
                    /* v8 ignore end */ case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__.DynamicPartType.Children:
                    case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__.DynamicPartType.ListChildren:
                        __AppendElement(elements[elementIndex], child.__element_root);
                        break;
                }
                child = child.__nextSibling;
            }
        }
    }
    unRenderElements() {
        const { isListHolder } = this.__snapshot_def;
        this.__elements = undefined;
        this.__element_root = undefined;
        if (isListHolder) ;
        else {
            let child = this.__firstChild;
            while(child){
                child.unRenderElements();
                child = child.__nextSibling;
            }
        }
    }
    takeElements() {
        const a = Object.create(SnapshotInstance.prototype);
        a.__id = this.__id;
        a.__snapshot_def = this.__snapshot_def;
        a.__values = this.__values;
        // all clear
        a.__parent = null;
        a.__firstChild = null;
        a.__lastChild = null;
        a.__nextSibling = null;
        a.__previousSibling = null;
        this.childNodes.map((c)=>c.takeElements()).forEach((node)=>a.__insertBefore(node));
        a.__elements = this.__elements;
        a.__element_root = this.__element_root;
        this.__elements = undefined;
        this.__element_root = undefined;
        return a;
    }
    tearDown() {
        traverseSnapshotInstance(this, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
        });
    }
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            node = node.__nextSibling;
        }
        return nodes;
    }
    __insertBefore(node, beforeNode) {
        // If the node already has a parent, remove it from its current parent
        if (node.__parent) node.__parent.__removeChild(node);
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    __removeChild(node) {
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
    }
    insertBefore(newNode, existingNode) {
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id;
            var _;
            if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_2__.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_2__.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_1__.ListUpdateInfoRecording(this)).onInsertBefore(newNode, existingNode);
            this.__insertBefore(newNode, existingNode);
            return;
        }
        const shouldRemove = newNode.__parent === this;
        this.__insertBefore(newNode, existingNode);
        const __elements = this.__elements;
        if (__elements) {
            if (!newNode.__elements) newNode.ensureElements();
        } else return;
        const count = __snapshot_def.slot.length;
        if (count === 1) {
            const [, elementIndex] = __snapshot_def.slot[0];
            const parent = __elements[elementIndex];
            if (shouldRemove) __RemoveElement(parent, newNode.__element_root);
            if (existingNode) __InsertElementBefore(parent, newNode.__element_root, existingNode.__element_root);
            else __AppendElement(parent, newNode.__element_root);
        } else if (count > 1) {
            const index = this.__current_slot_index++;
            const [s, elementIndex] = __snapshot_def.slot[index];
            if (s === _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__.DynamicPartType.Slot) {
                __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                __elements[elementIndex] = newNode.__element_root;
            /* v8 ignore start */ } else if (s === _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_3__.DynamicPartType.MultiChildren) {
                if (__GetTag(__elements[elementIndex]) === 'wrapper') __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                else __AppendElement(__elements[elementIndex], newNode.__element_root);
            }
        /* v8 ignore end */ }
    }
    removeChild(child) {
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id;
            var _;
            if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_2__.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_2__.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_1__.ListUpdateInfoRecording(this)).onRemoveChild(child);
            this.__removeChild(child);
            traverseSnapshotInstance(child, (v)=>{
                snapshotInstanceManager.values.delete(v.__id);
            });
            // mark this child as deleted
            child.__id = 0;
            return;
        }
        (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__.unref)(child, true);
        if (this.__elements) {
            const [, elementIndex] = __snapshot_def.slot[0];
            __RemoveElement(this.__elements[elementIndex], child.__element_root);
        }
        if (child.__snapshot_def.isListHolder) (0,_snapshot_list_js__WEBPACK_IMPORTED_MODULE_4__.snapshotDestroyList)(child);
        this.__removeChild(child);
        traverseSnapshotInstance(child, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
            delete v.__elements;
            delete v.__element_root;
            snapshotInstanceManager.values.delete(v.__id);
        });
    }
    setAttribute(key, value) {
        if (key === 'values') {
            const oldValues = this.__values;
            const values = value;
            this.__values = values;
            if (oldValues) for(let index = 0; index < values.length; index++)this.callUpdateIfNotDirectOrDeepEqual(index, oldValues[index], values[index]);
            else for(let index = 0; index < values.length; index++)this.callUpdateIfNotDirectOrDeepEqual(index, undefined, values[index]);
            return;
        }
        if (typeof key === 'string') {
            var _this___extraProps;
            // for more flexible usage, we allow setting non-indexed attributes
            ((_this___extraProps = this.__extraProps) !== null && _this___extraProps !== void 0 ? _this___extraProps : this.__extraProps = {})[key] = value;
            return;
        }
        var _this___values;
        (_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [];
        this.callUpdateIfNotDirectOrDeepEqual(key, this.__values[key], this.__values[key] = value);
    }
    toJSON() {
        return {
            id: this.__id,
            type: this.type,
            values: this.__values,
            extraProps: this.__extraProps,
            children: this.__firstChild ? this.childNodes : undefined
        };
    }
    callUpdateIfNotDirectOrDeepEqual(index, oldValue, newValue) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isDirectOrDeepEqual)(oldValue, newValue)) ;
        else this.__snapshot_def.update[index](this, index, oldValue);
    }
    constructor(type, id){
        this.__current_slot_index = 0;
        // onCreate?: () => void;
        // onAttach?: () => void;
        // onDetach?: () => void;
        // onRef?: () => void;
        // onUnref?: () => void;
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        this.__snapshot_def = snapshotManager.values.get(type);
        // Suspense uses 'div'
        if (!this.__snapshot_def && type !== 'div') throw new Error('Snapshot not found: ' + type);
        id !== null && id !== void 0 ? id : id = snapshotInstanceManager.nextId -= 1;
        this.__id = id;
        snapshotInstanceManager.values.set(id, this);
    }
} //# sourceMappingURL=snapshot.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DynamicPartType: () => (DynamicPartType)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Types of dynamic parts that can be updated in a snapshot
 * These are determined at compile time through static analysis
 */ var DynamicPartType;
(function(DynamicPartType) {
    DynamicPartType[DynamicPartType["Attr"] = 0] = "Attr";
    DynamicPartType[DynamicPartType["Spread"] = 1] = "Spread";
    DynamicPartType[DynamicPartType["Slot"] = 2] = "Slot";
    DynamicPartType[DynamicPartType["Children"] = 3] = "Children";
    DynamicPartType[DynamicPartType["ListChildren"] = 4] = "ListChildren";
    DynamicPartType[DynamicPartType["MultiChildren"] = 5] = "MultiChildren";
})(DynamicPartType || (DynamicPartType = {})); //# sourceMappingURL=dynamicPartType.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateEvent: () => (updateEvent)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function updateEvent(snapshot, expIndex, _oldValue, elementIndex, eventType, eventName, spreadKey) {
    const value = snapshot.__values[expIndex];
    let event;
    if (!value) event = undefined;
    else if (typeof value === 'string') event = value;
    else event = `${snapshot.__id}:${expIndex}:${spreadKey}`;
    // todo: reuseId?
    snapshot.__values[expIndex] = event;
    if (snapshot.__elements) __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
}
 //# sourceMappingURL=event.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateGesture: () => (updateGesture)
});
/* ESM import */var _gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js");
/* ESM import */var _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function updateGesture(snapshot, expIndex, oldValue, elementIndex, workletType) {
    if (!snapshot.__elements) return;
    if (true) console.profile('updateGesture');
    const value = snapshot.__values[expIndex];
    if (workletType === 'main-thread') (0,_gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__.processGesture)(snapshot.__elements[elementIndex], value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__.isMainThreadHydrating);
    if (true) console.profileEnd();
} //# sourceMappingURL=gesture.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotCreateList: () => (snapshotCreateList),
  snapshotDestroyList: () => (snapshotDestroyList)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function snapshotCreateList(pageId, _ctx, _expIndex) {
    const signMap = new Map();
    const recycleMap = new Map();
    const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.componentAtIndexFactory)([], _hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate);
    const list = __CreateList(pageId, componentAtIndex, (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.enqueueComponentFactory)(), {}, componentAtIndexes);
    const listID = __GetElementUniqueID(list);
    _list_js__WEBPACK_IMPORTED_MODULE_1__.gSignMap[listID] = signMap;
    _list_js__WEBPACK_IMPORTED_MODULE_1__.gRecycleMap[listID] = recycleMap;
    return list;
}
function snapshotDestroyList(si) {
    const [, elementIndex] = si.__snapshot_def.slot[0];
    const list = si.__elements[elementIndex];
    const listID = __GetElementUniqueID(list);
    delete _list_js__WEBPACK_IMPORTED_MODULE_1__.gSignMap[listID];
    delete _list_js__WEBPACK_IMPORTED_MODULE_1__.gRecycleMap[listID];
} //# sourceMappingURL=list.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  platformInfoAttributes: () => (platformInfoAttributes),
  updateListItemPlatformInfo: () => (updateListItemPlatformInfo)
});
/* ESM import */var _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/listUpdateInfo.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const platformInfoVirtualAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier',
    'recyclable'
]);
const platformInfoAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier',
    'full-span',
    'item-key',
    'sticky-top',
    'sticky-bottom',
    'estimated-height',
    'estimated-height-px',
    'estimated-main-axis-size-px',
    'recyclable'
]);
function updateListItemPlatformInfo(ctx, index, oldValue, elementIndex) {
    const newValue = ctx.__listItemPlatformInfo = ctx.__values[index];
    if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values) {
        var __pendingListUpdates_values, _list___id;
        const list = ctx.parentNode;
        var _;
        if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) ((_ = (__pendingListUpdates_values = _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(list)).onSetAttribute(ctx, newValue, oldValue);
    }
    // In this updater, unlike `updateSpread`, the shape of the value is guaranteed to be an fixed object.
    // No adding / removing keys.
    if (ctx.__elements) {
        const e = ctx.__elements[elementIndex];
        const value = ctx.__values[index];
        for(const k in value){
            if (platformInfoVirtualAttributes.has(k)) continue;
            __SetAttribute(e, k, value[k]);
        }
    }
}
 //# sourceMappingURL=platformInfo.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyQueuedRefs: () => (applyQueuedRefs),
  applyRef: () => (applyRef),
  clearQueuedRefs: () => (clearQueuedRefs),
  queueRefAttrUpdate: () => (queueRefAttrUpdate),
  transformRef: () => (transformRef),
  unref: () => (unref),
  updateRef: () => (updateRef)
});
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _lifecycle_ref_delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/ref/delay.js");


const refsToClear = [];
const refsToApply = [];
function unref(snapshot, recursive) {
    var _snapshot___worklet_ref_set, _snapshot___worklet_ref_set1;
    (_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.forEach((v)=>{
        if (v) (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_0__.workletUnRef)(v);
    });
    (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.clear();
    if (recursive) snapshot.childNodes.forEach((it)=>{
        unref(it, recursive);
    });
}
// This function is modified from preact source code.
function applyRef(ref, value) {
    const newRef = value && new _lifecycle_ref_delay_js__WEBPACK_IMPORTED_MODULE_1__.RefProxy(value);
    try {
        if (typeof ref == 'function') {
            const hasRefUnmount = typeof ref._unmount == 'function';
            if (hasRefUnmount) ref._unmount();
            if (!hasRefUnmount || newRef != null) // instance object itself to avoid shape
            // transitioning vnode
            ref._unmount = ref(newRef);
        } else ref.current = newRef;
    /* v8 ignore start */ } catch (e) {
        lynx.reportError(e);
    }
/* v8 ignore stop */ }
function updateRef(snapshot, expIndex, oldValue, elementIndex) {
    const value = snapshot.__values[expIndex];
    let ref;
    if (typeof value === 'string') ref = value;
    else ref = `react-ref-${snapshot.__id}-${expIndex}`;
    snapshot.__values[expIndex] = ref;
    if (snapshot.__elements && oldValue !== ref) {
        if (oldValue) __SetAttribute(snapshot.__elements[elementIndex], oldValue, undefined);
        if (ref) __SetAttribute(snapshot.__elements[elementIndex], ref, 1);
    }
}
function transformRef(ref) {
    if (ref === undefined || ref === null) return ref;
    if (typeof ref === 'function' || typeof ref === 'object' && 'current' in ref) {
        if ('__ref' in ref) return ref;
        return Object.defineProperty(ref, '__ref', {
            value: 1
        });
    }
    throw new Error(`Elements' "ref" property should be a function, or an object created ` + `by createRef(), but got [${typeof ref}] instead`);
}
function applyQueuedRefs() {
    try {
        for (const ref of refsToClear)applyRef(ref, null);
        for(let i = 0; i < refsToApply.length; i += 2){
            const ref = refsToApply[i];
            const value = refsToApply[i + 1];
            applyRef(ref, value);
        }
    } finally{
        clearQueuedRefs();
    }
}
function queueRefAttrUpdate(oldRef, newRef, snapshotInstanceId, expIndex) {
    if (oldRef === newRef) return;
    if (oldRef) refsToClear.push(oldRef);
    if (newRef) refsToApply.push(newRef, [
        snapshotInstanceId,
        expIndex
    ]);
}
function clearQueuedRefs() {
    refsToClear.length = 0;
    refsToApply.length = 0;
}
/**
 * @internal
 */  //# sourceMappingURL=ref.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformSpread: () => (transformSpread),
  updateSpread: () => (updateSpread)
});
/* ESM import */var _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/listUpdateInfo.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _gesture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var _ref_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _workletEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.









// eslint-disable-next-line regexp/no-unused-capturing-group
const eventRegExp = /^(([A-Za-z-]*):)?(bind|catch|capture-bind|capture-catch|global-bind)([A-Za-z]+)$/;
const eventTypeMap = {
    bind: 'bindEvent',
    catch: 'catchEvent',
    'capture-bind': 'capture-bind',
    'capture-catch': 'capture-catch',
    'global-bind': 'global-bindEvent'
};
const noFlattenAttributes = /* @__PURE__ */ new Set([
    'name',
    'clip-radius',
    'overlap',
    'exposure-scene',
    'exposure-id'
]);
function updateSpread(snapshot, index, oldValue, elementIndex) {
    oldValue !== null && oldValue !== void 0 ? oldValue : oldValue = {};
    let newValue = snapshot.__values[index]; // compiler guarantee this must be an object;
    const list = snapshot.parentNode;
    if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) {
        const oldPlatformInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.pick)(oldValue, _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes);
        const platformInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.pick)(newValue, _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes);
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isDirectOrDeepEqual)(oldPlatformInfo, platformInfo)) {
            var __pendingListUpdates_values, _list___id;
            var _;
            if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(list)).onSetAttribute(snapshot, platformInfo, oldPlatformInfo);
            snapshot.__listItemPlatformInfo = platformInfo;
            // The fakeSnapshot is missing `__parent`, so no `ListUpdateInfoRecording#onSetAttribute` will be called
            const fakeSnapshot = {
                __values: {
                    get [index] () {
                        return platformInfo;
                    }
                },
                __id: snapshot.__id,
                __elements: snapshot.__elements
            };
            (0,_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.updateListItemPlatformInfo)(fakeSnapshot, index, oldPlatformInfo, elementIndex);
        }
    }
    if (!snapshot.__elements) return;
    if ('__spread' in newValue) {
        // first screen
        newValue = transformSpread(snapshot, index, newValue);
        snapshot.__values[index] = newValue;
    }
    const dataset = {};
    let match = null;
    for(const key in newValue){
        const v = newValue[key];
        if (v !== oldValue[key]) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], v);
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], v);
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], v);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_ref_js__WEBPACK_IMPORTED_MODULE_6__.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex);
            } else if (key.endsWith(':ref')) {
                var _snapshot;
                var ___worklet_ref_set;
                (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_8__.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__WEBPACK_IMPORTED_MODULE_4__.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the event value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__WEBPACK_IMPORTED_MODULE_7__.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__WEBPACK_IMPORTED_MODULE_3__.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, v);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) dataset[key.slice(5)] = v;
    }
    let hasOldDataset = false;
    for(const key in oldValue){
        if (!(key in newValue)) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], '');
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], '');
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], null);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_ref_js__WEBPACK_IMPORTED_MODULE_6__.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex);
            } else if (key.endsWith(':ref')) {
                var _snapshot1;
                var ___worklet_ref_set1;
                (___worklet_ref_set1 = (_snapshot1 = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set1 !== void 0 ? ___worklet_ref_set1 : _snapshot1.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_8__.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__WEBPACK_IMPORTED_MODULE_4__.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__WEBPACK_IMPORTED_MODULE_7__.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__WEBPACK_IMPORTED_MODULE_3__.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, null);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) hasOldDataset = true;
    }
    // TODO: compare dataset before commit it to native?
    if (hasOldDataset || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isEmptyObject)(dataset)) __SetDataset(snapshot.__elements[elementIndex], dataset);
}
function transformSpread(snapshot, index, spread) {
    const result = {};
    let hasNoFlattenAttributes = false;
    for(const key in spread){
        var _transformRef;
        let value1 = spread[key];
        if (key === '__spread') ;
        else if (key === 'class' || key === 'className') {
            value1 !== null && value1 !== void 0 ? value1 : value1 = '';
            result['className'] = value1;
        } else if (key === 'ref') result[key] = (_transformRef = (0,_ref_js__WEBPACK_IMPORTED_MODULE_6__.transformRef)(value1)) === null || _transformRef === void 0 ? void 0 : _transformRef.__ref;
        else if (typeof value1 === 'function') result[key] = `${snapshot.__id}:${index}:${key}`;
        else if (key === '__self' || key === '__source') ;
        else {
            if (!hasNoFlattenAttributes && noFlattenAttributes.has(key)) hasNoFlattenAttributes = true;
            result[key] = value1;
        }
    }
    if (hasNoFlattenAttributes) result['flatten'] = false;
    return result;
}
 //# sourceMappingURL=spread.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletEvent: () => (updateWorkletEvent)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function updateWorkletEvent(snapshot, expIndex, oldValue, elementIndex, workletType, eventType, eventName) {
    if (!snapshot.__elements) return;
    var _ref;
    const value = (_ref = snapshot.__values[expIndex] || undefined) !== null && _ref !== void 0 ? _ref : {};
    value._workletType = workletType;
    if (workletType === 'main-thread') {
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__.isMainThreadHydrating, snapshot.__elements[elementIndex]);
        const event = {
            type: 'worklet',
            value
        };
        __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
    }
}
 //# sourceMappingURL=workletEvent.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyRefQueue: () => (applyRefQueue),
  updateWorkletRef: () => (updateWorkletRef),
  workletUnRef: () => (workletUnRef)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


let mtRefQueue = [];
function applyRefQueue() {
    const queue = mtRefQueue;
    mtRefQueue = [];
    for(let i = 0; i < queue.length; i += 2){
        const worklet = queue[i];
        const element = queue[i + 1];
        if ('_wvid' in worklet) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRef)(worklet, element);
        else if ('_wkltId' in worklet) worklet._unmount = (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.runWorkletCtx)(worklet, [
            {
                elementRefptr: element
            }
        ]);
    }
}
function addToRefQueue(worklet, element) {
    mtRefQueue.push(worklet, element);
}
function workletUnRef(value) {
    if ('_wvid' in value) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRef)(value, null);
    else if ('_wkltId' in value) {
        if (typeof value._unmount == 'function') value._unmount();
        else (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.runWorkletCtx)(value, [
            null
        ]);
    }
}
function updateWorkletRef(snapshot, expIndex, oldValue, elementIndex, _workletType) {
    var _snapshot___worklet_ref_set;
    if (!snapshot.__elements) return;
    if (oldValue && ((_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.has(oldValue))) {
        var _snapshot___worklet_ref_set1;
        workletUnRef(oldValue);
        (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.delete(oldValue);
    }
    const value = snapshot.__values[expIndex];
    if (value === null || value === undefined) ;
    else if (value._wvid) {
        const element = snapshot.__elements[elementIndex];
        addToRefQueue(value, element);
    } else if (value._wkltId) {
        const element = snapshot.__elements[elementIndex];
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__.isMainThreadHydrating, element);
        addToRefQueue(value, element);
    /* v8 ignore next 3 */ } else if (value._type === '__LEPUS__' || value._lepusWorkletHash) ;
    else throw new Error('MainThreadRef: main-thread:ref must be of type MainThreadRef or main-thread function.');
    if (value) {
        var _snapshot;
        var ___worklet_ref_set;
        (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
        snapshot.__worklet_ref_set.add(value);
    }
    // Add an arbitrary attribute to avoid this element being layout-only
    __SetAttribute(snapshot.__elements[elementIndex], 'has-react-ref', true);
} //# sourceMappingURL=workletRef.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshotInstanceHydrationMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  hydrationMap: () => (hydrationMap)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * A map to store hydration states between snapshot instances.
 * K->V: main thread snapshotInstance IDs -> background snapshotInstance IDs.
 *
 * The map is used by the ref system to translate between snapshot instance IDs when
 * operations need to cross the thread boundary during the commit phase.
 */ const hydrationMap = new Map();
/**
 * @internal
 */  //# sourceMappingURL=snapshotInstanceHydrationMap.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDisplayName: () => (getDisplayName),
  hook: () => (hook),
  isDirectOrDeepEqual: () => (isDirectOrDeepEqual),
  isEmptyObject: () => (isEmptyObject),
  isSdkVersionGt: () => (isSdkVersionGt),
  maybePromise: () => (maybePromise),
  pick: () => (pick)
});
/* ESM import */var _debug_component_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/component-stack.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function isDirectOrDeepEqual(a, b) {
    if (a === b) return true;
    try {
        if (typeof a == 'object' && a !== null && typeof b == 'object' && b !== null && JSON.stringify(a) === JSON.stringify(b)) return true;
    } catch (error) {
        if ( true && /circular|cyclic/i.test(error.message)) {
            // JavaScript engines give this different errors name and messages:
            // PrimJS: "circular reference"
            // JavaScriptCore: "JSON.stringify cannot serialize cyclic structures"
            // V8: "Converting circular structure to JSON"
            const vnode = (0,_debug_component_stack_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentVNode)();
            if (vnode) {
                const stack = (0,_debug_component_stack_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerStack)(vnode);
                error.message += `\n\n${stack}`;
            }
        }
        throw error;
    }
    return false;
}
function isEmptyObject(obj) {
    for(const _ in obj)return false;
    return true;
}
function isSdkVersionGt(major, minor) {
    const lynxSdkVersion = SystemInfo.lynxSdkVersion || '1.0';
    const version = lynxSdkVersion.split('.');
    return Number(version[0]) > major || Number(version[0]) == major && Number(version[1]) > minor;
}
function pick(obj, keys) {
    const result = {};
    for (const key of keys)if (key in obj) result[key] = obj[key];
    return result;
}
function maybePromise(value) {
    return typeof value === 'object' && value !== null && typeof value.then === 'function';
}
function getDisplayName(type) {
    var _type_displayName;
    return (_type_displayName = type.displayName) !== null && _type_displayName !== void 0 ? _type_displayName : type.name;
}
function hook(object, key, fn) {
    const oldFn = object[key];
    object[key] = function(...args) {
        return fn.call(this, oldFn, ...args);
    };
} //# sourceMappingURL=utils.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onPostWorkletCtx: () => (onPostWorkletCtx)
});
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
/* ESM import */var _runOnBackground_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js");


/**
 * @internal
 */ function onPostWorkletCtx(afterValue) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isMtsEnabled)() && afterValue) {
        lynx.reportError(new Error('Main thread script requires Lynx sdk version 2.14'));
        return null;
    }
    if (!afterValue || !(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isRunOnBackgroundEnabled)()) return afterValue;
    (0,_runOnBackground_js__WEBPACK_IMPORTED_MODULE_1__.registerWorkletCtx)(afterValue);
    return afterValue;
} //# sourceMappingURL=ctx.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyTasks: () => (destroyTasks),
  destroyWorklet: () => (destroyWorklet)
});
/* ESM import */var _workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const destroyTasks = [];
function destroyWorklet() {
    (0,_workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__.takeWorkletRefInitValuePatch)();
    for (const task of destroyTasks)task();
    destroyTasks.length = 0;
} //# sourceMappingURL=destroy.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/execMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletExecIdMap: () => (WorkletExecIdMap)
});
/* ESM import */var _indexMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js");

/**
 * `WorkletExecIdMap` ensures the worklet object is not released in js context when the main thread is still holding the
 * worklet object (or any of its jsFnHandles). The worklet object holds the js functions which might be called by `runOnBackground()`.
 * If the worklet object is incorrectly released earlier, the `runOnBackground()` would result in failure.
 *
 * Every time a worklet object is sent to the main thread, an `execId` is distributed and will be sent to element
 * context with the worklet object. This relationship is recorded in this class. When all the references to the
 * worklet object are released in the main thread, a message will be sent back to remove the record here.
 *
 * @internal
 */ class WorkletExecIdMap extends _indexMap_js__WEBPACK_IMPORTED_MODULE_0__.IndexMap {
    add(worklet) {
        const execId = super.add(worklet);
        worklet._execId = execId;
        return execId;
    }
    findJsFnHandle(execId, fnId) {
        const worklet = this.get(execId);
        if (!worklet) return undefined;
        const f = (value)=>{
            if (value === null || typeof value !== 'object') return undefined;
            const obj = value;
            if ('_jsFnId' in obj && obj['_jsFnId'] === fnId) return obj;
            for(const i in obj){
                const result = f(obj[i]);
                if (result) return result;
            }
            return undefined;
        };
        return f(worklet);
    }
} //# sourceMappingURL=execMap.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onFunctionCall: () => (onFunctionCall)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _indexMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



let resolveMap;
function initReturnValueListener() {
    const context = lynx.getCoreContext();
    resolveMap = new _indexMap_js__WEBPACK_IMPORTED_MODULE_2__.IndexMap();
    context.addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet, onFunctionCallRet);
    _destroy_js__WEBPACK_IMPORTED_MODULE_1__.destroyTasks.push(()=>{
        context.removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet, onFunctionCallRet);
        resolveMap = undefined;
    });
}
/**
 * @internal
 */ function onFunctionCall(resolve) {
    if (!resolveMap) initReturnValueListener();
    return resolveMap.add(resolve);
}
function onFunctionCallRet(event) {
    const data = JSON.parse(event.data);
    const resolve = resolveMap.get(data.resolveId);
    resolveMap.remove(data.resolveId);
    resolve(data.returnValue);
}
 //# sourceMappingURL=functionCall.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearConfigCacheForTesting: () => (clearConfigCacheForTesting),
  isMtsEnabled: () => (isMtsEnabled),
  isRunOnBackgroundEnabled: () => (isRunOnBackgroundEnabled)
});
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let mtsEnabled;
let runOnBackgroundEnabled;
/**
 * @internal
 */ function isMtsEnabled() {
    return mtsEnabled !== null && mtsEnabled !== void 0 ? mtsEnabled : mtsEnabled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSdkVersionGt)(2, 13);
}
/**
 * @internal
 */ function isRunOnBackgroundEnabled() {
    return runOnBackgroundEnabled !== null && runOnBackgroundEnabled !== void 0 ? runOnBackgroundEnabled : runOnBackgroundEnabled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSdkVersionGt)(2, 15);
}
function clearConfigCacheForTesting() {
    mtsEnabled = undefined;
    runOnBackgroundEnabled = undefined;
}
 //# sourceMappingURL=functionality.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletOnBackground: () => (registerWorkletOnBackground)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// import { __globalSnapshotPatch } from '../lifecycle/patch/snapshotPatch.js';
// const workletHashSet: Set<string> = /* @__PURE__ */ new Set();
/* v8 ignore start */ /**
 * @internal
 */ // disable hmr until bugs are fixed
// TODO: re-enable hmr or change a way to impl it; also need to fix the test case DEV_ONLY_RegisterWorklet
function registerWorkletOnBackground(_type, _hash, _fn) {
// if (workletHashSet.has(hash)) {
//   return;
// }
// workletHashSet.add(hash);
// if (__globalSnapshotPatch) {
//   __globalSnapshotPatch.push(
//     SnapshotOperation.DEV_ONLY_RegisterWorklet,
//     hash,
//     // We use `Function.prototype.toString` to serialize the function for Lepus.
//     fn.toString(),
//   );
// }
}
/* v8 ignore stop */  //# sourceMappingURL=hmr.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IndexMap: () => (IndexMap)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
class IndexMap {
    add(value) {
        const index = ++this.lastIndex;
        this.indexMap.set(index, value);
        return index;
    }
    get(index) {
        return this.indexMap.get(index);
    }
    remove(index) {
        this.indexMap.delete(index);
    }
    constructor(){
        this.lastIndex = 0;
        this.indexMap = new Map();
    }
}
 //# sourceMappingURL=indexMap.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletCtx: () => (registerWorkletCtx),
  runJSFunction: () => (runJSFunction),
  runOnBackground: () => (runOnBackground)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _execMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/execMap.js");
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




let execIdMap;
function init() {
    'background only';
    if (execIdMap) return;
    execIdMap = new _execMap_js__WEBPACK_IMPORTED_MODULE_2__.WorkletExecIdMap();
    lynx.getCoreContext().addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runOnBackground, runJSFunction);
    lynx.getCoreContext().addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundWorkletCtx);
    _destroy_js__WEBPACK_IMPORTED_MODULE_1__.destroyTasks.push(()=>{
        lynx.getCoreContext().removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runOnBackground, runJSFunction);
        lynx.getCoreContext().removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundWorkletCtx);
        execIdMap = undefined;
    });
}
/**
 * @internal
 */ function runJSFunction(event) {
    'background only';
    const data = JSON.parse(event.data);
    const obj = execIdMap.findJsFnHandle(data.obj._execId, data.obj._jsFnId);
    const f = obj === null || obj === void 0 ? void 0 : obj._fn;
    if (!f) throw new Error('runOnBackground: JS function not found: ' + JSON.stringify(data.obj));
    const returnValue = f(...data.params);
    lynx.getCoreContext().dispatchEvent({
        type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet,
        data: JSON.stringify({
            resolveId: data.resolveId,
            returnValue
        })
    });
}
function releaseBackgroundWorkletCtx(event) {
    'background only';
    for (const id of event.data)execIdMap.remove(id);
}
/**
 * @internal
 */ function registerWorkletCtx(ctx) {
    'background only';
    init();
    execIdMap.add(ctx);
}
/**
 * `runOnBackground` allows triggering js functions on the background thread asynchronously.
 * @param f - The js function to be called.
 * @returns A function. Calling which with the arguments to be passed to the js function to trigger it on the background thread. This function returns a promise that resolves to the return value of the js function.
 * @example
 * ```ts
 * import { runOnBackground } from '@lynx-js/react';
 *
 * async function someMainthreadFunction() {
 *   'main thread';
 *   const fn = runOnBackground(() => {
 *     return 'hello';
 *   });
 *   const result = await fn();
}
 * ```
 * @public
 */ function runOnBackground(f) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_3__.isRunOnBackgroundEnabled)()) throw new Error('runOnBackground requires Lynx sdk version 2.16.');
    throw new Error('runOnBackground can only be used on the main thread.');
}
 //# sourceMappingURL=runOnBackground.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runOnMainThread: () => (runOnMainThread)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _ctx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
/* ESM import */var _functionCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js");




/**
 * `runOnMainThread` allows triggering main thread functions on the main thread asynchronously.
 * @param fn - The main thread functions to be called.
 * @returns A function. Calling which with the arguments to be passed to the main thread function to trigger it on the main thread. This function returns a promise that resolves to the return value of the main thread function.
 * @example
 * ```ts
 * import { runOnMainThread } from '@lynx-js/react';
 *
 * async function someFunction() {
 *   const fn = runOnMainThread(() => {
 *     'main thread';
 *     return 'hello';
 *   });
 *   const result = await fn();
 * }
 * ```
 * @public
 */ function runOnMainThread(fn) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_2__.isMtsEnabled)()) throw new Error('runOnMainThread requires Lynx sdk version 2.14.');
    return async (...params)=>{
        return new Promise((resolve)=>{
            (0,_ctx_js__WEBPACK_IMPORTED_MODULE_1__.onPostWorkletCtx)(fn);
            const resolveId = (0,_functionCall_js__WEBPACK_IMPORTED_MODULE_3__.onFunctionCall)(resolve);
            lynx.getCoreContext().dispatchEvent({
                type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runWorkletCtx,
                data: JSON.stringify({
                    worklet: fn,
                    params,
                    resolveId
                })
            });
        });
    };
} //# sourceMappingURL=runOnMainThread.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformToWorklet: () => (transformToWorklet)
});
let lastId = 0;
/**
 * transform args of `runOnBackground()`.
 *
 * @internal
 */ function transformToWorklet(obj) {
    var _obj;
    const id = ++lastId;
    if (typeof obj !== 'function') return {
        _jsFnId: id,
        _error: `Argument of runOnBackground should be a function, but got [${typeof obj}] instead`
    };
    var _toJSON;
    (_toJSON = (_obj = obj).toJSON) !== null && _toJSON !== void 0 ? _toJSON : _obj.toJSON = ()=>'[BackgroundFunction]';
    return {
        _jsFnId: id,
        _fn: obj
    };
} //# sourceMappingURL=transformToWorklet.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainThreadRef: () => (MainThreadRef),
  clearWorkletRefLastIdForTesting: () => (clearWorkletRefLastIdForTesting),
  useMainThreadRef: () => (useMainThreadRef)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _workletRefPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");



// Split into two variables for testing purposes
let lastIdBG = 0;
function clearWorkletRefLastIdForTesting() {
    lastIdBG = 0;
}
class WorkletRef {
    get current() {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed in the background thread.');
        return undefined;
    }
    set current(_) {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed in the background thread.');
    }
    /**
     * @internal
     */ toJSON() {
        return {
            _wvid: this._wvid
        };
    }
    /**
     * @internal
     */ constructor(initValue, type){
        this._initValue = initValue;
        this._type = type;
        this._wvid = ++lastIdBG;
        (0,_workletRefPool_js__WEBPACK_IMPORTED_MODULE_1__.addWorkletRefInitValue)(this._wvid, initValue);
    }
}
/**
 * A `MainThreadRef` is a ref that can only be accessed on the main thread. It is used to preserve
 * states between main thread function calls.
 * The data saved in `current` property of the `MainThreadRef` can be read and written in
 * multiple main thread functions.
 * @public
 */ class MainThreadRef extends WorkletRef {
    constructor(initValue){
        super(initValue, 'main-thread');
        {
            var _lynx_getNativeApp_createJSObjectDestructionObserver, _lynx_getNativeApp;
            const id = this._wvid;
            this._lifecycleObserver = (_lynx_getNativeApp_createJSObjectDestructionObserver = (_lynx_getNativeApp = lynx.getNativeApp()).createJSObjectDestructionObserver) === null || _lynx_getNativeApp_createJSObjectDestructionObserver === void 0 ? void 0 : _lynx_getNativeApp_createJSObjectDestructionObserver.call(_lynx_getNativeApp, ()=>{
                var _lynx_getCoreContext, _lynx;
                (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).dispatchEvent({
                    type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseWorkletRef,
                    data: {
                        id
                    }
                });
            });
        }
    }
}
function useMainThreadRef(initValue) {
    return (0,_hooks_react_js__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return new MainThreadRef(initValue);
    }, []);
} //# sourceMappingURL=workletRef.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addWorkletRefInitValue: () => (addWorkletRefInitValue),
  takeWorkletRefInitValuePatch: () => (takeWorkletRefInitValuePatch)
});
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let initValuePatch = [];
const initValueIdSet = /*#__PURE__*/ new Set();
/**
 * @internal
 */ function addWorkletRefInitValue(id, value) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isMtsEnabled)()) return;
    initValueIdSet.add(id);
    initValuePatch.push([
        id,
        value
    ]);
}
/**
 * @internal
 */ function takeWorkletRefInitValuePatch() {
    const res = initValuePatch;
    initValuePatch = [];
    return res;
} //# sourceMappingURL=workletRefPool.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayRunOnBackground: () => (delayRunOnBackground),
  registerWorklet: () => (registerWorklet),
  runWorkletCtx: () => (runWorkletCtx),
  setEomShouldFlushElementTree: () => (setEomShouldFlushElementTree),
  updateWorkletRef: () => (updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (updateWorkletRefInitValueChanges)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Executes the worklet ctx.
 * @param worklet - The Worklet ctx to run.
 * @param params - An array as parameters of the worklet run.
 */ function runWorkletCtx(worklet, params) {
    var _globalThis_runWorklet, _globalThis;
    return (_globalThis_runWorklet = (_globalThis = globalThis).runWorklet) === null || _globalThis_runWorklet === void 0 ? void 0 : _globalThis_runWorklet.call(_globalThis, worklet, params);
}
/**
 * Save an element to a `WorkletRef`.
 *
 * @param workletRef - The `WorkletRef` to be updated.
 * @param element - The element.
 * @internal
 */ function updateWorkletRef(workletRef, element) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRef(workletRef, element);
}
/**
 * Update the initial value of the `WorkletRef`.
 *
 * @param patch - An array containing the index and new value of the worklet value.
 */ function updateWorkletRefInitValueChanges(patch) {
    var _globalThis_lynxWorkletImpl;
    if (patch) (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRefInitValueChanges(patch);
}
/**
 * Register a worklet.
 *
 * @internal
 */ function registerWorklet(type, id, worklet) {
    globalThis.registerWorklet(type, id, worklet);
}
/**
 * Delay a runOnBackground after hydration.
 *
 * @internal
 */ function delayRunOnBackground(fnObj, fn) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runOnBackgroundDelayImpl.delayRunOnBackground(fnObj, fn);
}
/**
 * Set whether EOM operations should flush the element tree.
 *
 * @internal
 */ function setEomShouldFlushElementTree(value) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._eomImpl.setShouldFlush(value);
}
 //# sourceMappingURL=bindings.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (WorkletEvents)
});
var WorkletEvents;
(function(WorkletEvents) {
    WorkletEvents["runWorkletCtx"] = "Lynx.Worklet.runWorkletCtx";
    WorkletEvents["runOnBackground"] = "Lynx.Worklet.runOnBackground";
    WorkletEvents["FunctionCallRet"] = "Lynx.Worklet.FunctionCallRet";
    WorkletEvents["releaseBackgroundWorkletCtx"] = "Lynx.Worklet.releaseBackgroundWorkletCtx";
    WorkletEvents["releaseWorkletRef"] = "Lynx.Worklet.releaseWorkletRef";
})(WorkletEvents || (WorkletEvents = {}));
 //# sourceMappingURL=events.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (/* reexport safe */ _events_js__WEBPACK_IMPORTED_MODULE_3__.WorkletEvents),
  delayRunOnBackground: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.delayRunOnBackground),
  loadWorkletRuntime: () => (/* reexport safe */ _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__.loadWorkletRuntime),
  onHydrationFinished: () => (/* reexport safe */ _observers_js__WEBPACK_IMPORTED_MODULE_2__.onHydrationFinished),
  onWorkletCtxUpdate: () => (/* reexport safe */ _observers_js__WEBPACK_IMPORTED_MODULE_2__.onWorkletCtxUpdate),
  registerWorklet: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.registerWorklet),
  runWorkletCtx: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.runWorkletCtx),
  setEomShouldFlushElementTree: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.setEomShouldFlushElementTree),
  updateWorkletRef: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.updateWorkletRefInitValueChanges)
});
/* ESM import */var _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js");
/* ESM import */var _bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js");
/* ESM import */var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/observers.js");
/* ESM import */var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadWorkletRuntime: () => (loadWorkletRuntime)
});
/* ESM import */var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * Loads and initializes the Lepus chunk in the main thread.
 * @param __schema - The dynamic component entry for loading the Lepus chunk.
 * @returns A boolean indicating whether the Lepus chunk was loaded and initialized successfully.
 */ function loadWorkletRuntime(__schema) {
    if (typeof __LoadLepusChunk === 'undefined') return false;
    if (globalThis.lynxWorkletImpl) return true;
    return __LoadLepusChunk('worklet-runtime', {
        dynamicComponentEntry: __schema,
        chunkType: 0
    });
}
 //# sourceMappingURL=loadRuntime.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/observers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onHydrationFinished: () => (onHydrationFinished),
  onWorkletCtxUpdate: () => (onWorkletCtxUpdate)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * This function must be called when a worklet context is updated.
 *
 * @param worklet - The worklet to be updated
 * @param oldWorklet - The old worklet context
 * @param isFirstScreen - Whether it is before the hydration is finished
 * @param element - The element
 */ function onWorkletCtxUpdate(worklet, oldWorklet, isFirstScreen, element) {
    var _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager, _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1, _globalThis_lynxWorkletImpl2;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : (_globalThis_lynxWorkletImpl__jsFunctionLifecycleManager = _globalThis_lynxWorkletImpl._jsFunctionLifecycleManager) === null || _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager === void 0 ? void 0 : _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager.addRef(worklet._execId, worklet);
    if (isFirstScreen && oldWorklet) (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._hydrateCtx(worklet, oldWorklet);
    // For old version dynamic component compatibility.
    if (isFirstScreen) (_globalThis_lynxWorkletImpl2 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl2 === void 0 ? void 0 : _globalThis_lynxWorkletImpl2._eventDelayImpl.runDelayedWorklet(worklet, element);
}
/**
 * This must be called when the hydration is finished.
 */ function onHydrationFinished() {
    var _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1, // For old version dynamic component compatibility.
    _globalThis_lynxWorkletImpl2;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runOnBackgroundDelayImpl.runDelayedBackgroundFunctions();
    (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._refImpl.clearFirstScreenWorkletRefMap();
    (_globalThis_lynxWorkletImpl2 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl2 === void 0 ? void 0 : _globalThis_lynxWorkletImpl2._eventDelayImpl.clearDelayedWorklets();
} //# sourceMappingURL=observers.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
 //# sourceMappingURL=global.js.map


}),
"(react:background)/./node_modules/@lynx-js/rspeedy/client/hmr/WebSocketClient.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (WebSocketClient)
});
/* provided dependency */ var WebSocket = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/index.js")["default"];
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * @license MIT
Copyright JS Foundation and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ class WebSocketClient {
    /**
   * @param {(...args: any[]) => void} f - The callback for onOpen.
   */ onOpen(f) {
        this.client.onopen = f;
    }
    /**
   * @param {(...args: any[]) => void} f - The callback for onClose.
   */ onClose(f) {
        this.client.onclose = f;
    }
    // call f with the message string as the first argument
    /**
   * @param {(...args: any[]) => void} f - The callback for onMessage.
   */ onMessage(f) {
        this.client.onmessage = (e)=>{
            f(e.data);
        };
    }
    /**
   * @param {string} url - The WebSocket URL.
   */ constructor(url){
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        this.client = new WebSocket(url);
        this.client.onerror = (error)=>{
            // TODO: use the real webpack logger
            console.error('[webpack-dev-server]', error);
        };
    }
}



}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/createSocketURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createSocketURL: () => (createSocketURL)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function format(objURL) {
    var _objURL_protocol;
    let protocol = (_objURL_protocol = objURL.protocol) !== null && _objURL_protocol !== void 0 ? _objURL_protocol : '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    var _objURL_auth;
    let auth = (_objURL_auth = objURL.auth) !== null && _objURL_auth !== void 0 ? _objURL_auth : '';
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3a/i, ':');
        auth += '@';
    }
    let host = '';
    if (objURL.hostname) {
        host = auth + (objURL.hostname.includes(':') ? `[${objURL.hostname}]` : objURL.hostname);
        if (objURL.port) host += `:${objURL.port}`;
    }
    var _objURL_pathname;
    let pathname = (_objURL_pathname = objURL.pathname) !== null && _objURL_pathname !== void 0 ? _objURL_pathname : '';
    if (objURL.slashes) {
        host = `//${host || ''}`;
        if (pathname && !pathname.startsWith('/')) pathname = `/${pathname}`;
    } else if (!host) host = '';
    var _objURL_search;
    let search = (_objURL_search = objURL.search) !== null && _objURL_search !== void 0 ? _objURL_search : '';
    if (search && !search.startsWith('?')) search = `?${search}`;
    var _objURL_hash;
    let hash = (_objURL_hash = objURL.hash) !== null && _objURL_hash !== void 0 ? _objURL_hash : '';
    if (hash && !hash.startsWith('#')) hash = `#${hash}`;
    pathname = pathname.replace(/[#?]/g, /**
     * @param {string} match
     * @returns {string}
     */ (match)=>encodeURIComponent(match));
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
function createSocketURL(parsedURL, token) {
    const { hostname } = parsedURL;
    let socketURLProtocol = parsedURL.protocol;
    socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, 'ws');
    let socketURLAuth = '';
    // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
    // Parse authentication credentials in case we need them
    if (parsedURL.username) {
        socketURLAuth = parsedURL.username;
        // Since HTTP basic authentication does not allow empty username,
        // we only include password if the username is not empty.
        if (parsedURL.password) socketURLAuth = socketURLAuth.concat(':', parsedURL.password);
    }
    // In case the host is a raw IPv6 address, it can be enclosed in
    // the brackets as the brackets are needed in the final URL string.
    // Need to remove those as url.format blindly adds its own set of brackets
    // if the host string contains colons. That would lead to non-working
    // double brackets (e.g. [[::]]) host
    //
    // All of these web socket url params are optionally passed in through resourceQuery,
    // so we need to fall back to the default if they are not provided
    const socketURLHostname = hostname.replace(/^\[(.*)\]$/, '$1');
    const socketURLPort = parsedURL.port;
    // If path is provided it'll be passed in via the resourceQuery as a
    // query param so it has to be parsed out of the querystring in order for the
    // client to open the socket to the correct location.
    let socketURLPathname = '/ws';
    if (parsedURL.pathname) socketURLPathname = parsedURL.pathname;
    return format({
        protocol: socketURLProtocol,
        auth: socketURLAuth,
        hostname: socketURLHostname,
        port: socketURLPort,
        pathname: socketURLPathname,
        slashes: true,
        search: token ? `?token=${token}` : ''
    });
} //# sourceMappingURL=createSocketURL.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/index.js?hostname=192.168.11.20&port=3000&pathname=%2Frsbuild-hmr&hot=true&live-reload=true&protocol=ws&token=216bd38ef393ccdb": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
var __resourceQuery = "?hostname=192.168.11.20&port=3000&pathname=%2Frsbuild-hmr&hot=true&live-reload=true&protocol=ws&token=216bd38ef393ccdb";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _createSocketURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/createSocketURL.js");
/* ESM import */var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js");
/* ESM import */var _parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/parseURL.js");
/* ESM import */var _reloadApp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/reloadApp.js");
/* ESM import */var _socket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/socket.js");
/* ESM import */var _transport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






const status = {
    isReconnecting: false,
    currentHash: __webpack_require__.h()
};
const enabledFeatures = {
    'Hot Module Replacement': false,
    'Live Reloading': false,
    Progress: false,
    Overlay: false
};
const options = {
    hot: false,
    liveReload: false,
    progress: false
};
const parsedResourceQuery = (0,_parseURL_js__WEBPACK_IMPORTED_MODULE_2__.parseURL)(__resourceQuery);
const token = parsedResourceQuery['token'];
if (parsedResourceQuery['hot'] === 'true') {
    options.hot = true;
    enabledFeatures['Hot Module Replacement'] = true;
}
if (parsedResourceQuery['live-reload'] === 'true') {
    options.liveReload = true;
    enabledFeatures['Live Reloading'] = true;
}
if (parsedResourceQuery['progress'] === 'true') {
    options.progress = true;
    enabledFeatures.Progress = true;
}
(0,_log_js__WEBPACK_IMPORTED_MODULE_1__.logEnabledFeatures)(enabledFeatures);
const onSocketMessage = {
    hot () {
        if (parsedResourceQuery['hot'] === 'false') return;
        options.hot = true;
    },
    liveReload () {
        if (parsedResourceQuery['live-reload'] === 'false') return;
        options.liveReload = true;
    },
    invalid () {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('App updated. Recompiling...');
    },
    hash (hash) {
        if (status.isReconnecting) {
            // We only need this once when reconnecting
            status.isReconnecting = false;
            // Here, we not only override the currentHash, but also override the
            // previousHash and the hash in webpack runtime.
            // In this way, we reset all the hash-related runtime status to match
            // the cold start.
            status.currentHash = status.previousHash = hash;
            // @ts-expect-error webpack runtime hack
            /* webpack/runtime/getFullHash */ __webpack_require__.h = function() {
                return hash;
            };
            return;
        }
        status.previousHash = status.currentHash;
        status.currentHash = hash;
    },
    reconnect (value) {
        if (parsedResourceQuery['reconnect'] === 'false') return;
        options.reconnect = value;
    },
    progress (value) {
        options.progress = value;
    },
    'still-ok': function stillOk() {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('Nothing changed.');
    },
    ok () {
        (0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options, status);
    },
    warnings (_warnings, params) {
        // TODO: format warnings
        if (params === null || params === void 0 ? void 0 : params.preventReloading) return;
        (0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options, status);
    },
    'static-changed': function staticChanged(file) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(`${file ? `"${file}"` : 'Content'} from static directory was changed. Reloading...`);
        ;(0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
            liveReload: true,
            hot: false,
            progress: false
        }, status);
    },
    errors (_errors) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.error('Errors while compiling. Reload prevented.');
    // TODO: format errors
    },
    error (error) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.error(error.toString());
    },
    close () {
        // When the dev-server disconnected, we set `isReconnecting` to allow
        // override the webpack hash when dev-server restart and connect to client.
        status.isReconnecting = true;
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('Disconnected!');
    }
};
const socketURL = (0,_createSocketURL_js__WEBPACK_IMPORTED_MODULE_0__.createSocketURL)(parsedResourceQuery, token);
// @ts-expect-error I don't know TypeScript. I can't make it work :(
(0,_socket_js__WEBPACK_IMPORTED_MODULE_4__["default"])(socketURL, onSocketMessage, options.reconnect);
// Export the transport client so that it can be used in the `devServer.client.webSocketTransport`
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_transport_js__WEBPACK_IMPORTED_MODULE_5__.LynxTransportClient); //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  log: () => (log),
  logEnabledFeatures: () => (logEnabledFeatures)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const PREFIX = '[rspeedy-dev-server]';
const log = {
    error: console.error.bind(console, PREFIX),
    warn: console.warn.bind(console, PREFIX),
    info: console.info.bind(console, PREFIX),
    log: console.log.bind(console, PREFIX),
    debug: console.debug.bind(console, PREFIX)
};
const logEnabledFeatures = (features)=>{
    if (!features || Object.keys(features).length === 0) return;
    let logString = 'Server started:';
    // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
    for (const [key, enable] of Object.entries(features))logString += ` ${key} ${enable ? 'enabled' : 'disabled'},`;
    // replace last comma with a period
    logString = logString.slice(0, -1).concat('.');
    log.info(logString);
};
 //# sourceMappingURL=log.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/parseURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseURL: () => (parseURL)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function parseURL(resourceQuery) {
    const options = {};
    if (!(resourceQuery === null || resourceQuery === void 0 ? void 0 : resourceQuery.startsWith('?'))) return options;
    const searchParams = resourceQuery.slice(1).split('&');
    for (const keyValuePair of searchParams){
        const [key, value] = keyValuePair.split('=');
        options[key] = value === undefined ? true : decodeURIComponent(value);
    }
    return options;
} //# sourceMappingURL=parseURL.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/reloadApp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/emitter.js");
/* ESM import */var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function reloadApp({ hot, liveReload }, status) {
    const { currentHash, previousHash } = status;
    const isInitial = currentHash.includes(previousHash);
    if (isInitial) return;
    if (hot) webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit('webpackHotUpdate', status.currentHash);
    else if (liveReload) {
        const intervalId = +setInterval(()=>{
            // reload immediately
            applyReload(intervalId);
        }, 10);
    }
}
function applyReload(intervalId) {
    var _NativeModules_LynxDevToolSetModule, _NativeModules_LynxDevtoolSetModule, _NativeModules_LynxDevToolSetModule_invokeCdp, _NativeModules_LynxDevToolSetModule1, _NativeModules_LynxDevtoolSetModule_invokeCdp, _NativeModules_LynxDevtoolSetModule1;
    clearInterval(intervalId);
    if (typeof ((_NativeModules_LynxDevToolSetModule = NativeModules.LynxDevToolSetModule) === null || _NativeModules_LynxDevToolSetModule === void 0 ? void 0 : _NativeModules_LynxDevToolSetModule.invokeCdp) !== 'function' && typeof ((_NativeModules_LynxDevtoolSetModule = NativeModules.LynxDevtoolSetModule) === null || _NativeModules_LynxDevtoolSetModule === void 0 ? void 0 : _NativeModules_LynxDevtoolSetModule.invokeCdp) !== 'function') {
        console.error('[HMR] live-reload failed: cannot invoke cdp from DevTool.');
        console.error('[HMR] Please reload the page manually.');
        return;
    }
    var _NativeModules_LynxDevToolSetModule_invokeCdp_bind;
    const invokeCdp = (_NativeModules_LynxDevToolSetModule_invokeCdp_bind = (_NativeModules_LynxDevToolSetModule1 = NativeModules.LynxDevToolSetModule) === null || _NativeModules_LynxDevToolSetModule1 === void 0 ? void 0 : (_NativeModules_LynxDevToolSetModule_invokeCdp = _NativeModules_LynxDevToolSetModule1.invokeCdp) === null || _NativeModules_LynxDevToolSetModule_invokeCdp === void 0 ? void 0 : _NativeModules_LynxDevToolSetModule_invokeCdp.bind(NativeModules.LynxDevToolSetModule)) !== null && _NativeModules_LynxDevToolSetModule_invokeCdp_bind !== void 0 ? _NativeModules_LynxDevToolSetModule_invokeCdp_bind : (_NativeModules_LynxDevtoolSetModule1 = NativeModules.LynxDevtoolSetModule) === null || _NativeModules_LynxDevtoolSetModule1 === void 0 ? void 0 : (_NativeModules_LynxDevtoolSetModule_invokeCdp = _NativeModules_LynxDevtoolSetModule1.invokeCdp) === null || _NativeModules_LynxDevtoolSetModule_invokeCdp === void 0 ? void 0 : _NativeModules_LynxDevtoolSetModule_invokeCdp.bind(NativeModules.LynxDevtoolSetModule, 'Page.reload');
    invokeCdp === null || invokeCdp === void 0 ? void 0 : invokeCdp(JSON.stringify({
        method: 'Page.reload',
        params: {
            ignoreCache: true
        }
    }), (data)=>{
        if (!data) return;
        try {
            const { error } = JSON.parse(data);
            if (error) console.error('[HMR] live-reload failed:', error.message);
        } catch  {
        // explicitly ignore error
        }
    });
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp); //# sourceMappingURL=reloadApp.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/socket.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  client: () => (client),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js");
/* ESM import */var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/rspeedy/client/hmr/WebSocketClient.js")["default"];
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// this LynxTransportClient is here as a default fallback, in case the client is not injected
const C = typeof __webpack_dev_server_client__ === 'undefined' ? _transport_js__WEBPACK_IMPORTED_MODULE_1__.LynxTransportClient : 'default' in __webpack_dev_server_client__ ? __webpack_dev_server_client__.default : __webpack_dev_server_client__;
let retries = 0;
let maxRetries = 10;
// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
let client = null;
const socket = function initSocket(url, handlers, reconnect) {
    client = new C(url);
    client.onOpen(()=>{
        retries = 0;
        if (reconnect !== undefined) maxRetries = reconnect;
    });
    client.onClose(()=>{
        var _handlers_close;
        if (retries === 0) (_handlers_close = handlers['close']) === null || _handlers_close === void 0 ? void 0 : _handlers_close.call(handlers, void 0, void 0);
        // Try to reconnect.
        client = null;
        // After 10 retries stop trying, to prevent log spam.
        if (retries < maxRetries) {
            // Exponentially increase timeout to reconnect.
            // Respectfully copied from the package `got`.
            const retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
            retries += 1;
            _log_js__WEBPACK_IMPORTED_MODULE_0__.log.info('Trying to reconnect...');
            setTimeout(()=>{
                socket(url, handlers, reconnect);
            }, retryInMs);
        } else _log_js__WEBPACK_IMPORTED_MODULE_0__.log.error('Unable to establish a connection after exceeding the maximum retry attempts.');
    });
    client.onMessage((data)=>{
        var _handlers_message_type;
        const message = JSON.parse(data);
        (_handlers_message_type = handlers[message.type]) === null || _handlers_message_type === void 0 ? void 0 : _handlers_message_type.call(handlers, message.data, message.params);
    });
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket); //# sourceMappingURL=socket.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LynxTransportClient: () => (LynxTransportClient)
});
/**
 * LynxTransportClient is the client transport implementation for webpack-dev-server.
 * It can be used in the
 * {@link https://webpack.js.org/configuration/dev-server/#websockettransport | `devServer.client.webSocketTransport`}
 * configuration of webpack.
 * It should be used with `LynxTransportServer`.
 *
 * @example
 * ```js
 * // webpack.config.js
 * import { createRequire } from 'node:module'
 * import { LynxTransportServer } from '@lynx-js/webpack-dev-transport'
 *
 * const require = createRequire(import.meta.url)
 * export default {
 *   devServer: {
 *     client: {
 *       webSocketTransport: require.resolve('@lynx-js/webpack-dev-transport/client')
 *     },
 *     allowedHosts: 'all',
 *     webSocketServer: LynxTransportServer
 *   }
 * }
 * ```
 *
 * @public
 */ class LynxTransportClient {
    /** {@inheritdoc Client.onOpen} */ onOpen(callback) {
        callback();
    }
    /** {@inheritdoc Client.onClose} */ onClose(_callback) {
    // webpack-dev-server will retry in the `callback`
    // but `onOpen` in Lynx will never fail.
    }
    /** {@inheritdoc Client.onMessage} */ onMessage(callback) {
        lynx.getDevtool().addEventListener(LynxTransportClient.EventType, (event)=>{
            const CDP = JSON.parse(event.data.message);
            if (CDP.method === LynxTransportClient.EventType) callback(CDP.params.data);
        });
    }
} //# sourceMappingURL=transport.js.map
/** @internal */ LynxTransportClient.EventType = 'message';


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocket.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WebSocket: () => (WebSocket)
});
/* ESM import */var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* ESM import */var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* ESM import */var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* ESM import */var _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




var _impl = /*#__PURE__*/ new WeakMap();
/**
 * The implementation of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket | WebSocket}
 * for Lynx.
 *
 * @remarks
 *
 * This only works in environment that has `NativeModules.LynxWebSocketModule`.
 *
 * @public
 */ class WebSocket {
    /**
     * The `addEventListener()` method of the `EventTarget` interface sets up a function that will be called whenever the specified event is delivered to the target.
     * @param type - A case-sensitive string representing the event type to listen for.
     * @param callback - The function that receives a notification. See {@link @lynx-js/websocket#EventMap} for details of events.
     */ addEventListener(type, callback) {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).addEventListener(type, callback);
    }
    /**
     * The `removeEventListener()` method of the `EventTarget` interface removes an event listener from the WebSocket.
     * @param type - The type of event to stop listening for.
     * @param callback - The function to remove as an event listener.
     */ removeEventListener(type, callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).removeEventListener(type, callback);
    }
    /**
     * onmessage is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onmessage = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onmessage() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onmessage;
    }
    set onmessage(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onmessage = callback;
    }
    /**
     * onopen is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onopen = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onopen() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onopen;
    }
    set onopen(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onopen = callback;
    }
    /**
     * onclose is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onclose = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onclose() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onclose;
    }
    set onclose(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onclose = callback;
    }
    /**
     * onerror is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onerror = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onerror() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onerror;
    }
    set onerror(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onerror = callback;
    }
    /**
     * The `url` read-only property returns the URL of the {@link WebSocket} passed by the constructor.
     */ get url() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).url;
    }
    /**
     * The `readyState` read-only property returns the current state of the {@link WebSocket} connection.
     */ get readyState() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).readyState;
    }
    /**
     * The WebSocket.protocol read-only property returns the name of the sub-protocol the server selected.
     *
     * @remarks
     * This will be one of the strings specified in the protocols parameter when creating the WebSocket object,
     * or the empty string if no connection is established.
     */ get protocol() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).protocol;
    }
    /**
     * The `send` method send the specified data to be transmitted to the server over the {@link WebSocket} connection.
     *
     * @remarks
     * It will throw an exception if you call `send()` when the connection is in the {@link WebSocket.CONNECTING | CONNECTING } state. If you call `send()` when the connection is in the {@link WebSocket.CLOSING | CLOSING } or {@link WebSocket.CLOSED | CLOSED } states, it will silently discard the data.
     * @param data - The specified data to be transmitted.
     */ send(data) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).send(data);
    }
    /**
     * The `ping` method send an empty message to the server over the {@link WebSocket} connection.
     * @remarks
     * It will throw an exception if you call `ping()` when the connection is in the {@link WebSocket.CONNECTING | CONNECTING } state. If you call `ping()` when the connection is in the {@link WebSocket.CLOSING | CLOSING } or {@link WebSocket.CLOSED | CLOSED } states, it will silently discard the data.
     */ ping() {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).ping();
    }
    /**
     * The `close()` method closes the {@link WebSocket} connection or connection attempt, if any.
     *
     * @remarks
     * If the connection is already {@link WebSocket.CLOSED | CLOSED }, this method does nothing.
     */ close(code, reason) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).close(code, reason);
    }
    /**
     * @param url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
     * @param protocols - Either a single protocol string or an array of protocol strings. If it is omitted, an empty array is used by default, i.e. `[]`.
     * @param options - Extra options for Lynx only.
     */ constructor(url, protocols, options = {}){
        (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_2__._)(this, _impl, {
            writable: true,
            value: void 0
        });
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _impl, new _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.WebSocketImpl(NativeModules.LynxWebSocketModule, url, protocols, options));
    }
} //# sourceMappingURL=WebSocket.js.map
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CONNECTING}
     */ WebSocket.CONNECTING = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CONNECTING;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.OPEN}
     */ WebSocket.OPEN = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.OPEN;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CLOSING}
     */ WebSocket.CLOSING = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CLOSING;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CLOSED}
     */ WebSocket.CLOSED = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CLOSED;


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CloseCode: () => (CloseCode),
  GlobalEventEmitter: () => (GlobalEventEmitter),
  ReadyState: () => (ReadyState),
  WebSocketImpl: () => (WebSocketImpl)
});
/* ESM import */var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* ESM import */var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* ESM import */var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* ESM import */var _swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_get.js");
/* ESM import */var _swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_init.js");
/* ESM import */var _swc_helpers_class_static_private_field_update__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_static_private_field_update.js");
/* ESM import */var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/eventemitter3/index.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






var _a;

/**
 * The `ReadyState` describe the state of a `WebSocket` connection.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
 * @public
 */ var ReadyState;
(function(ReadyState) {
    /** Socket has been created. The connection is not yet open. */ ReadyState[ReadyState["CONNECTING"] = 0] = "CONNECTING";
    /** The connection is open and ready to communicate. */ ReadyState[ReadyState["OPEN"] = 1] = "OPEN";
    /** The connection is in the process of closing. */ ReadyState[ReadyState["CLOSING"] = 2] = "CLOSING";
    /** The connection is closed or couldn't be opened. */ ReadyState[ReadyState["CLOSED"] = 3] = "CLOSED";
})(ReadyState || (ReadyState = {}));
const GlobalEventEmitter = lynx.getJSModule('GlobalEventEmitter');
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
 */ var CloseCode;
(function(CloseCode) {
    CloseCode[CloseCode["NORMAL"] = 1000] = "NORMAL";
    CloseCode[CloseCode["ABNORMAL"] = 1006] = "ABNORMAL";
})(CloseCode || (CloseCode = {}));
var _socketID = /*#__PURE__*/ new WeakMap(), _close = /*#__PURE__*/ new WeakSet(), _registerEvents = /*#__PURE__*/ new WeakSet(), _unregisterEvents = /*#__PURE__*/ new WeakSet(), _previousOnMessage = /*#__PURE__*/ new WeakMap(), _onMessage = /*#__PURE__*/ new WeakSet(), _previousOnOpen = /*#__PURE__*/ new WeakMap(), _onOpen = /*#__PURE__*/ new WeakSet(), _previousOnClose = /*#__PURE__*/ new WeakMap(), _onClosed = /*#__PURE__*/ new WeakSet(), _previousOnError = /*#__PURE__*/ new WeakMap(), _onFailed = /*#__PURE__*/ new WeakSet(), _createWebSocketEvent = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ class WebSocketImpl extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    addEventListener(type, callback) {
        if (!callback) return;
        this.addListener(type, callback);
        return;
    }
    removeEventListener(type, callback) {
        return this.removeListener(type, callback);
    }
    dispatchEvent(event) {
        return this.emit(event.type, event);
    }
    send(data) {
        if (this.readyState === ReadyState.CONNECTING) throw new Error('INVALID_STATE_ERR');
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        if (typeof data === 'string') {
            var _this_websocketModule;
            (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.send(data, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
            return;
        }
        // TODO: support binary data
        throw new Error('Unsupported data type');
    }
    ping() {
        var _this_websocketModule;
        if (this.readyState === ReadyState.CONNECTING) throw new Error('INVALID_STATE_ERR');
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.ping((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
    }
    close(code, reason) {
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        this.readyState = ReadyState.CLOSING;
        (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _close, close).call(this, code, reason);
    }
    get onmessage() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage);
    }
    set onmessage(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage)) this.removeEventListener('message', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage));
        this.addEventListener('message', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnMessage, callback);
    }
    get onopen() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen);
    }
    set onopen(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen)) this.removeEventListener('open', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen));
        this.addEventListener('open', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnOpen, callback);
    }
    get onclose() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose);
    }
    set onclose(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose)) this.removeEventListener('close', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose));
        this.addEventListener('close', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnClose, callback);
    }
    get onerror() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError);
    }
    set onerror(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError)) this.removeEventListener('error', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError));
        this.addEventListener('error', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnError, callback);
    }
    constructor(websocketModule, url, protocols, options = {}){
        var _this_websocketModule;
        super(), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _close), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _registerEvents), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _unregisterEvents), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onMessage), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onOpen), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onClosed), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onFailed), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _createWebSocketEvent), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _socketID, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnMessage, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnOpen, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnClose, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnError, {
            writable: true,
            value: void 0
        }), this.readyState = ReadyState.CONNECTING, (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _socketID, (0,_swc_helpers_class_static_private_field_update__WEBPACK_IMPORTED_MODULE_6__._)(_a, WebSocketImpl, _nextWebSocketId).value++), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnMessage, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnOpen, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnClose, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnError, null);
        this.websocketModule = websocketModule;
        this.url = url;
        if (!websocketModule) {
            lynx.reportError(new Error(`WebSocket is not found. Please use Lynx >= 2.16 or consider using a polyfill.`), {
                level: 'warning'
            });
            return;
        }
        if (typeof protocols === 'string') protocols = [
            protocols
        ];
        if (!Array.isArray(protocols)) protocols = [];
        (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _registerEvents, registerEvents).call(this);
        (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.connect(url, protocols, options, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
    }
}
var _nextWebSocketId = {
    writable: true,
    value: 1
};
function close(code, reason) {
    var _this_websocketModule;
    // See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
    const statusCode = typeof code === 'number' ? code : CloseCode.NORMAL;
    const closeReason = typeof reason === 'string' ? reason : '';
    (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.close(statusCode, closeReason, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
}
function registerEvents() {
    /* eslint-disable @typescript-eslint/unbound-method */ GlobalEventEmitter.addListener('websocketMessage', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onMessage, onMessage), this);
    GlobalEventEmitter.addListener('websocketOpen', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onOpen, onOpen), this);
    GlobalEventEmitter.addListener('websocketClosed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onClosed, onClosed), this);
    GlobalEventEmitter.addListener('websocketFailed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onFailed, onFailed), this);
/* eslint-enable @typescript-eslint/unbound-method */ }
function unregisterEvents() {
    /* eslint-disable @typescript-eslint/unbound-method */ GlobalEventEmitter.removeListener('websocketMessage', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onMessage, onMessage));
    GlobalEventEmitter.removeListener('websocketOpen', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onOpen, onOpen));
    GlobalEventEmitter.removeListener('websocketClosed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onClosed, onClosed));
    GlobalEventEmitter.removeListener('websocketFailed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onFailed, onFailed));
/* eslint-enable @typescript-eslint/unbound-method */ }
function onMessage(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    const data = event.data;
    event.type;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'message', {
        data
    }));
}
function onOpen(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.OPEN;
    this.protocol = event.protocol;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'open'));
}
function onClosed(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.CLOSED;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'close', {
        code: event.code,
        reason: event.reason
    }));
    (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _unregisterEvents, unregisterEvents).call(this);
}
function onFailed(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.CLOSED;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'error', {
        message: event.message
    }));
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'close', {
        code: CloseCode.ABNORMAL,
        reason: event.message
    }));
    (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _unregisterEvents, unregisterEvents).call(this);
}
function createWebSocketEvent(type, data) {
    return Object.assign({
        type,
        target: this
    }, data);
}
_a = WebSocketImpl; //# sourceMappingURL=WebSocketImpl.js.map


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReadyState: () => (/* reexport safe */ _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_1__.ReadyState),
  WebSocket: () => (/* reexport safe */ _WebSocket_js__WEBPACK_IMPORTED_MODULE_0__.WebSocket),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _WebSocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocket.js");
/* ESM import */var _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_WebSocket_js__WEBPACK_IMPORTED_MODULE_0__.WebSocket);
 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/dev-server.js": (function (module, __unused_webpack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ /* globals __webpack_hash__ */ if (true) {
    /** @type {undefined|string} */ var lastHash;
    var upToDate = function upToDate() {
        return /** @type {string} */ lastHash.indexOf(__webpack_require__.h()) >= 0;
    };
    var log = __webpack_require__("(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/log.js");
    var check = function check() {
        module.hot.check(true).then(function(updatedModules) {
            if (!updatedModules) {
                log("warning", "[HMR] Cannot find update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
                log("warning", "[HMR] (Probably because of restarting the webpack-dev-server)");
                if (typeof window !== "undefined") window.location.reload();
                return;
            }
            if (!upToDate()) check();
            __webpack_require__("(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/log-apply-result.js")(updatedModules, updatedModules);
            if (upToDate()) log("info", "[HMR] App is up to date.");
        }).catch(function(err) {
            var status = module.hot.status();
            if ([
                "abort",
                "fail"
            ].indexOf(status) >= 0) {
                log("warning", "[HMR] Cannot apply update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
                log("warning", "[HMR] " + log.formatError(err));
                if (typeof window !== "undefined") window.location.reload();
            } else log("warning", "[HMR] Update failed: " + log.formatError(err));
        });
    };
    var hotEmitter = __webpack_require__("(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/emitter.js");
    hotEmitter.on("webpackHotUpdate", function(currentHash) {
        lastHash = currentHash;
        if (!upToDate() && module.hot.status() === "idle") {
            log("info", "[HMR] Checking for updates on the server...");
            check();
        }
    });
    log("info", "[HMR] Waiting for update signal from WDS...");
} else {}


}),
"(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/emitter.js": (function (module) {
function EventEmitter() {
    this.events = {};
}
EventEmitter.prototype.on = function(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
};
EventEmitter.prototype.emit = function(eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (this.events[eventName]) this.events[eventName].forEach(function(callback) {
        callback.apply(null, args);
    });
};
module.exports = new EventEmitter();


}),
"(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/log-apply-result.js": (function (module, __unused_webpack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ /**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */ module.exports = function(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
        return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });
    var log = __webpack_require__("(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/log.js");
    if (unacceptedModules.length > 0) {
        log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
        unacceptedModules.forEach(function(moduleId) {
            log("warning", "[HMR]  - " + moduleId);
        });
    }
    if (!renewedModules || renewedModules.length === 0) log("info", "[HMR] Nothing hot updated.");
    else {
        log("info", "[HMR] Updated modules:");
        renewedModules.forEach(function(moduleId) {
            if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
                var parts = moduleId.split("!");
                log.groupCollapsed("info", "[HMR]  - " + parts.pop());
                log("info", "[HMR]  - " + moduleId);
                log.groupEnd("info");
            } else log("info", "[HMR]  - " + moduleId);
        });
        var numberIds = renewedModules.every(function(moduleId) {
            return typeof moduleId === "number";
        });
        if (numberIds) log("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
    }
};


}),
"(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/log.js": (function (module) {
/** @typedef {"info" | "warning" | "error"} LogLevel */ /** @type {LogLevel} */ var logLevel = "info";
function dummy() {}
/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */ function shouldLog(level) {
    var shouldLog = logLevel === "info" && level === "info" || [
        "info",
        "warning"
    ].indexOf(logLevel) >= 0 && level === "warning" || [
        "info",
        "warning",
        "error"
    ].indexOf(logLevel) >= 0 && level === "error";
    return shouldLog;
}
/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */ function logGroup(logFn) {
    return function(level, msg) {
        if (shouldLog(level)) logFn(msg);
    };
}
/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */ module.exports = function(level, msg) {
    if (shouldLog(level)) {
        if (level === "info") console.log(msg);
        else if (level === "warning") console.warn(msg);
        else if (level === "error") console.error(msg);
    }
};
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);
/**
 * @param {LogLevel} level log level
 */ module.exports.setLogLevel = function(level) {
    logLevel = level;
};
/**
 * @param {Error} err error
 * @returns {string} formatted error
 */ module.exports.formatError = function(err) {
    var message = err.message;
    var stack = err.stack;
    if (!stack) return message;
    else if (stack.indexOf(message) < 0) return message + "\n" + stack;
    else return stack;
};


}),
"(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_check_private_redeclaration)
});
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_get)
});
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_set)
});
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_update)
});
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");
        if (!("__destrWrapper" in descriptor)) descriptor.__destrWrapper = {
            set value (v){
                descriptor.set.call(receiver, v);
            },
            get value () {
                return descriptor.get.call(receiver);
            }
        };
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        return descriptor;
    }
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_access.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_check_private_static_access)
});
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_check_private_static_field_descriptor)
});
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) throw new TypeError("attempted to " + action + " private static field before its declaration");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_extract_field_descriptor)
});
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_get)
});
/* ESM import */var _class_apply_descriptor_get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js");
/* ESM import */var _class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js");


function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0,_class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, privateMap, "get");
    return (0,_class_apply_descriptor_get_js__WEBPACK_IMPORTED_MODULE_1__._)(receiver, descriptor);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_init)
});
/* ESM import */var _check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js");

function _class_private_field_init(obj, privateMap, value) {
    (0,_check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__._)(obj, privateMap);
    privateMap.set(obj, value);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_set)
});
/* ESM import */var _class_apply_descriptor_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js");
/* ESM import */var _class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js");


function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0,_class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, privateMap, "set");
    (0,_class_apply_descriptor_set_js__WEBPACK_IMPORTED_MODULE_1__._)(receiver, descriptor, value);
    return value;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_method_get)
});
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_init.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_method_init)
});
/* ESM import */var _check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js");

function _class_private_method_init(obj, privateSet) {
    (0,_check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__._)(obj, privateSet);
    privateSet.add(obj);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_static_private_field_update.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_static_private_field_update)
});
/* ESM import */var _class_apply_descriptor_update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js");
/* ESM import */var _class_check_private_static_access_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_access.js");
/* ESM import */var _class_check_private_static_field_descriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js");



function _class_static_private_field_update(receiver, classConstructor, descriptor) {
    (0,_class_check_private_static_access_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, classConstructor);
    (0,_class_check_private_static_field_descriptor_js__WEBPACK_IMPORTED_MODULE_1__._)(descriptor, "update");
    return (0,_class_apply_descriptor_update_js__WEBPACK_IMPORTED_MODULE_2__._)(receiver, descriptor);
}



}),
"(react:background)/./node_modules/errorstacks/dist/esm/index.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseStackTrace: () => (parseStackTrace)
});
function createRawFrame(raw) {
    return {
        column: -1,
        fileName: "",
        line: -1,
        name: "",
        raw: raw,
        sourceColumn: -1,
        sourceFileName: "",
        sourceLine: -1,
        type: ""
    };
}
var FIREFOX_WEBKIT = /([^@]+|^)@(.*):(\d+):(\d+)/;
var WEBKIT_ADDRESS_UNNAMED = /^(http(s)?:\/\/.*):(\d+):(\d+)$/;
var WEBKIT_NATIVE_UNNAMED = "[native code]";
function parsWebkit(str) {
    if (str.includes(WEBKIT_NATIVE_UNNAMED)) return {
        line: -1,
        column: -1,
        type: "native",
        fileName: "",
        name: "",
        raw: str,
        sourceColumn: -1,
        sourceFileName: "",
        sourceLine: -1
    };
    var match = str.match(WEBKIT_ADDRESS_UNNAMED);
    if (match) {
        var line = match[3] ? +match[3] : -1;
        var column = match[4] ? +match[4] : -1;
        var fileName = match[1] ? match[1] : "";
        return {
            line: line,
            column: column,
            type: "",
            fileName: fileName,
            name: "",
            raw: str,
            sourceColumn: -1,
            sourceFileName: "",
            sourceLine: -1
        };
    }
    return createRawFrame(str);
}
function parseFirefoxWebkit(lines) {
    return lines.map(function(str) {
        var match = str.match(FIREFOX_WEBKIT);
        if (!match) return parsWebkit(str);
        var line = match[3] ? +match[3] : -1;
        var column = match[4] ? +match[4] : -1;
        var fileName = match[2] ? match[2] : "";
        return {
            line: line,
            column: column,
            type: match[0] ? "" : "native",
            fileName: fileName,
            name: (match[1] || "").trim(),
            raw: str,
            sourceColumn: -1,
            sourceFileName: "",
            sourceLine: -1
        };
    });
}
// foo.bar.js:123:39
// foo.bar.js:123:39 <- original.js:123:34
var CHROME_MAPPED = /(.*?):(\d+):(\d+)(\s<-\s(.+):(\d+):(\d+))?/;
function parseMapped(frame, maybeMapped) {
    var match = maybeMapped.match(CHROME_MAPPED);
    if (match) {
        frame.fileName = match[1];
        frame.line = +match[2];
        frame.column = +match[3];
        if (match[5]) frame.sourceFileName = match[5];
        if (match[6]) frame.sourceLine = +match[6];
        if (match[7]) frame.sourceColumn = +match[7];
    }
}
// at <SomeFramework>
var CHROME_IE_NATIVE_NO_LINE = /^at\s(<.*>)$/;
// at <SomeFramework>:123:39
var CHROME_IE_NATIVE = /^\s*at\s(<.*>):(\d+):(\d+)$/;
// at foo.bar(bob) (foo.bar.js:123:39)
// at foo.bar(bob) (foo.bar.js:123:39 <- original.js:123:34)
var CHROME_IE_FUNCTION = /^at\s(.*)\s\((.*)\)$/;
// >= Chrome 88
// spy() at Component.Foo [as constructor] (original.js:123:34)
// spy() at Component.Foo [as constructor] (foo.bar.js:123:39 <- original.js:123:34)
var CHROME_IE_FUNCTION_WITH_CALL = /^([\w\W]*)\s\((.*)\)/;
var CHROME_IE_DETECTOR = /\s*at\s.+/;
// at about:blank:1:7
// >= Chrome 99
// at /projects/foo.test.js:689:1 <- /projects/foo.test.js:10:1
var CHROME_BLANK = /\s*at\s(.*):(\d+):(\d+)$/;
function parseChromeIe(lines) {
    // Many frameworks mess with error.stack. So we use this check
    // to find the first line of the actual stack
    var start = lines.findIndex(function(line) {
        return CHROME_IE_DETECTOR.test(line);
    });
    if (start === -1) return [];
    var frames = [];
    for(var i = start; i < lines.length; i++){
        var str = lines[i].replace(/^\s+|\s+$/g, "");
        var frame = createRawFrame(lines[i]);
        var nativeNoLine = str.match(CHROME_IE_NATIVE_NO_LINE);
        if (nativeNoLine) {
            frame.fileName = nativeNoLine[1];
            frame.type = "native";
            frames.push(frame);
            continue;
        }
        var native = str.match(CHROME_IE_NATIVE);
        if (native) {
            frame.fileName = native[1];
            frame.type = "native";
            if (native[2]) frame.line = +native[2];
            if (native[3]) frame.column = +native[3];
            frames.push(frame);
            continue;
        }
        var withFn = str.match(CHROME_IE_FUNCTION);
        if (withFn) {
            frame.name = withFn[1];
            parseMapped(frame, withFn[2]);
            frames.push(frame);
            continue;
        }
        var blank = str.match(CHROME_BLANK);
        if (blank) {
            frame.fileName = blank[1];
            frame.line = +blank[2];
            frame.column = +blank[3];
            parseMapped(frame, blank[1] + ":" + blank[2] + ":" + blank[3]);
            frames.push(frame);
            continue;
        }
        var withFnCall = str.match(CHROME_IE_FUNCTION_WITH_CALL);
        if (withFnCall) {
            frame.name = withFnCall[1];
            parseMapped(frame, withFnCall[2]);
            frames.push(frame);
            continue;
        }
        frames.push(frame);
    }
    return frames;
}
function parseStackTrace(stack) {
    if (!stack) return [];
    var lines = stack.split("\n").filter(Boolean);
    // Libraries like node's "assert" module mess with the stack trace by
    // prepending custom data. So we need to do a precheck, to determine
    // which browser the trace is coming from.
    if (lines.some(function(line) {
        return CHROME_IE_DETECTOR.test(line);
    })) return parseChromeIe(lines);
    return parseFirefoxWebkit(lines);
} //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/eventemitter3/index.js": (function (module) {

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if (true) module.exports = EventEmitter;


}),
"(react:background)/./node_modules/eventemitter3/index.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventEmitter: () => (/* reexport default from dynamic */ _index_js__WEBPACK_IMPORTED_MODULE_0___default.a),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/eventemitter3/index.js");
/* ESM import */var _index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_0__);


/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_index_js__WEBPACK_IMPORTED_MODULE_0___default()));


}),
"(react:background)/./node_modules/preact/compat/dist/compat.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  PureComponent: () => (PureComponent),
  StrictMode: () => (StrictMode),
  Suspense: () => (Suspense),
  SuspenseList: () => (SuspenseList),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
  cloneElement: () => (cloneElement),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
  createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
  createFactory: () => (createFactory),
  createPortal: () => (createPortal),
  createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
  "default": () => (index),
  findDOMNode: () => (findDOMNode),
  flushSync: () => (flushSync),
  forwardRef: () => (forwardRef),
  hydrate: () => (hydrate),
  isElement: () => (isElement),
  isFragment: () => (isFragment),
  isMemo: () => (isMemo),
  isValidElement: () => (isValidElement),
  lazy: () => (lazy),
  memo: () => (memo),
  render: () => (render),
  startTransition: () => (startTransition),
  unmountComponentAtNode: () => (unmountComponentAtNode),
  unstable_batchedUpdates: () => (unstable_batchedUpdates),
  useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
  useDeferredValue: () => (useDeferredValue),
  useEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
  useInsertionEffect: () => (useInsertionEffect),
  useLayoutEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
  useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
  useSyncExternalStore: () => (useSyncExternalStore),
  useTransition: () => (useTransition),
  version: () => (version)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");




/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Check if two objects have a different shape
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */ function shallowDiffers(a, b) {
    for(var i in a)if (i !== '__source' && !(i in b)) return true;
    for(var _i in b)if (_i !== '__source' && a[_i] !== b[_i]) return true;
    return false;
}
/**
 * Check if two values are the same value
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */ function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */ function PureComponent(p, c) {
    this.props = p;
    this.context = c;
}
PureComponent.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
// Some third-party libraries check if this property is present
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
    return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};
/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 * @param {import('./internal').FunctionComponent} c functional component
 * @param {(prev: object, next: object) => boolean} [comparer] Custom equality function
 * @returns {import('./internal').FunctionComponent}
 */ function memo(c, comparer) {
    function shouldUpdate(nextProps) {
        var ref = this.props.ref;
        var updateRef = ref == nextProps.ref;
        if (!updateRef && ref) ref.call ? ref(null) : ref.current = null;
        if (!comparer) return shallowDiffers(this.props, nextProps);
        return !comparer(this.props, nextProps) || !updateRef;
    }
    function Memoed(props) {
        this.shouldComponentUpdate = shouldUpdate;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(c, props);
    }
    Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
    Memoed.prototype.isReactComponent = true;
    Memoed.__f = true;
    Memoed.type = c;
    return Memoed;
}
var oldDiffHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function(vnode) {
    if (vnode.type && vnode.type.__f && vnode.ref) {
        vnode.props.ref = vnode.ref;
        vnode.ref = null;
    }
    if (oldDiffHook) oldDiffHook(vnode);
};
var REACT_FORWARD_SYMBOL = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.forward_ref') || 0xf47;
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 * @param {import('./index').ForwardFn} fn
 * @returns {import('./internal').FunctionComponent}
 */ function forwardRef(fn) {
    function Forwarded(props) {
        var clone = assign({}, props);
        delete clone.ref;
        return fn(clone, props.ref || null);
    }
    // mobx-react checks for this being present
    Forwarded.$$typeof = REACT_FORWARD_SYMBOL;
    // mobx-react heavily relies on implementation details.
    // It expects an object here with a `render` property,
    // and prototype.render will fail. Without this
    // mobx-react throws.
    Forwarded.render = Forwarded;
    Forwarded.prototype.isReactComponent = Forwarded.__f = true;
    Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';
    return Forwarded;
}
var mapFn = function mapFn(children, fn) {
    if (children == null) return null;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children).map(fn));
};
// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
    map: mapFn,
    forEach: mapFn,
    count: function count(children) {
        return children ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children).length : 0;
    },
    only: function only(children) {
        var normalized = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children);
        if (normalized.length !== 1) throw 'Children.only';
        return normalized[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray
};
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
var oldCatchError = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function(error, newVNode, oldVNode, errorInfo) {
    if (error.then) {
        /** @type {import('./internal').Component} */ var component;
        var vnode = newVNode;
        for(; vnode = vnode.__;)if ((component = vnode.__c) && component.__c) {
            if (newVNode.__e == null) {
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
            }
            // Don't call oldCatchError if we found a Suspense
            return component.__c(error, newVNode);
        }
    }
    oldCatchError(error, newVNode, oldVNode, errorInfo);
};
var oldUnmount = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__c;
    if (component && component.__R) component.__R();
    // if the component is still hydrating
    // most likely it is because the component is suspended
    // we set the vnode.type as `null` so that it is not a typeof function
    // so the unmount will remove the vnode._dom
    if (component && vnode.__u & MODE_HYDRATE) vnode.type = null;
    if (oldUnmount) oldUnmount(vnode);
};
function detachedClone(vnode, detachedParent, parentDom) {
    if (vnode) {
        if (vnode.__c && vnode.__c.__H) {
            vnode.__c.__H.__.forEach(function(effect) {
                if (typeof effect.__c == 'function') effect.__c();
            });
            vnode.__c.__H = null;
        }
        vnode = assign({}, vnode);
        if (vnode.__c != null) {
            if (vnode.__c.__P === parentDom) vnode.__c.__P = detachedParent;
            vnode.__c = null;
        }
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return detachedClone(child, detachedParent, parentDom);
        });
    }
    return vnode;
}
function removeOriginal(vnode, detachedParent, originalParent) {
    if (vnode && originalParent) {
        vnode.__v = null;
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return removeOriginal(child, detachedParent, originalParent);
        });
        if (vnode.__c) {
            if (vnode.__c.__P === detachedParent) {
                if (vnode.__e) originalParent.appendChild(vnode.__e);
                vnode.__c.__e = true;
                vnode.__c.__P = originalParent;
            }
        }
    }
    return vnode;
}
// having custom inheritance instead of a class here saves a lot of bytes
function Suspense() {
    // we do not call super here to golf some bytes...
    this.__u = 0;
    this._suspenders = null;
    this.__b = null;
}
// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
Suspense.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
/**
 * @this {import('./internal').SuspenseComponent}
 * @param {Promise} promise The thrown promise
 * @param {import('./internal').VNode<any, any>} suspendingVNode The suspending component
 */ Suspense.prototype.__c = function(promise, suspendingVNode) {
    var suspendingComponent = suspendingVNode.__c;
    /** @type {import('./internal').SuspenseComponent} */ var c = this;
    if (c._suspenders == null) c._suspenders = [];
    c._suspenders.push(suspendingComponent);
    var resolve = suspended(c.__v);
    var resolved = false;
    var onResolved = function onResolved() {
        if (resolved) return;
        resolved = true;
        suspendingComponent.__R = null;
        if (resolve) resolve(onSuspensionComplete);
        else onSuspensionComplete();
    };
    suspendingComponent.__R = onResolved;
    var onSuspensionComplete = function onSuspensionComplete() {
        if (!--c.__u) {
            // If the suspension was during hydration we don't need to restore the
            // suspended children into the _children array
            if (c.state.__a) {
                var suspendedVNode = c.state.__a;
                c.__v.__k[0] = removeOriginal(suspendedVNode, suspendedVNode.__c.__P, suspendedVNode.__c.__O);
            }
            c.setState({
                __a: c.__b = null
            });
            var _suspended;
            while(_suspended = c._suspenders.pop())_suspended.forceUpdate();
        }
    };
    /**
   * We do not set `suspended: true` during hydration because we want the actual markup
   * to remain on screen and hydrate it when the suspense actually gets resolved.
   * While in non-hydration cases the usual fallback -> component flow would occour.
   */ if (!c.__u++ && !(suspendingVNode.__u & MODE_HYDRATE)) c.setState({
        __a: c.__b = c.__v.__k[0]
    });
    promise.then(onResolved, onResolved);
};
Suspense.prototype.componentWillUnmount = function() {
    this._suspenders = [];
};
/**
 * @this {import('./internal').SuspenseComponent}
 * @param {import('./internal').SuspenseComponent["props"]} props
 * @param {import('./internal').SuspenseState} state
 */ Suspense.prototype.render = function(props, state) {
    if (this.__b) {
        // When the Suspense's _vnode was created by a call to createVNode
        // (i.e. due to a setState further up in the tree)
        // it's _children prop is null, in this case we "forget" about the parked vnodes to detach
        if (this.__v.__k) {
            var detachedParent = preact__WEBPACK_IMPORTED_MODULE_0__.options.document.createElement('div');
            var detachedComponent = this.__v.__k[0].__c;
            this.__v.__k[0] = detachedClone(this.__b, detachedParent, detachedComponent.__O = detachedComponent.__P);
        }
        this.__b = null;
    }
    // Wrap fallback tree in a VNode that prevents itself from being marked as aborting mid-hydration:
    /** @type {import('./internal').VNode} */ var fallback = state.__a && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.fallback);
    if (fallback) fallback.__u &= ~MODE_HYDRATE;
    return [
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.__a ? null : props.children),
        fallback
    ];
};
/**
 * Checks and calls the parent component's _suspended method, passing in the
 * suspended vnode. This is a way for a parent (e.g. SuspenseList) to get notified
 * that one of its children/descendants suspended.
 *
 * The parent MAY return a callback. The callback will get called when the
 * suspension resolves, notifying the parent of the fact.
 * Moreover, the callback gets function `unsuspend` as a parameter. The resolved
 * child descendant will not actually get unsuspended until `unsuspend` gets called.
 * This is a way for the parent to delay unsuspending.
 *
 * If the parent does not return a callback then the resolved vnode
 * gets unsuspended immediately when it resolves.
 *
 * @param {import('./internal').VNode} vnode
 * @returns {((unsuspend: () => void) => void)?}
 */ function suspended(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__.__c;
    return component && component.__a && component.__a(vnode);
}
function lazy(loader) {
    var prom;
    var component;
    var error;
    function Lazy(props) {
        if (!prom) {
            prom = loader();
            prom.then(function(exports) {
                component = exports.default || exports;
            }, function(e) {
                error = e;
            });
        }
        if (error) throw error;
        if (!component) throw prom;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props);
    }
    Lazy.displayName = 'Lazy';
    Lazy.__f = true;
    return Lazy;
}
// Indexes to linked list nodes (nodes are stored as arrays to save bytes).
var SUSPENDED_COUNT = 0;
var RESOLVED_COUNT = 1;
var NEXT_NODE = 2;
// Having custom inheritance instead of a class here saves a lot of bytes.
function SuspenseList() {
    this._next = null;
    this._map = null;
}
// Mark one of child's earlier suspensions as resolved.
// Some pending callbacks may become callable due to this
// (e.g. the last suspended descendant gets resolved when
// revealOrder === 'together'). Process those callbacks as well.
var resolve = function resolve(list, child, node) {
    if (++node[RESOLVED_COUNT] === node[SUSPENDED_COUNT]) // matches the number of times it's been resolved. Therefore we
    // mark the child as completely resolved by deleting it from ._map.
    // This is used to figure out when *all* children have been completely
    // resolved when revealOrder is 'together'.
    list._map.delete(child);
    // If revealOrder is falsy then we can do an early exit, as the
    // callbacks won't get queued in the node anyway.
    // If revealOrder is 'together' then also do an early exit
    // if all suspended descendants have not yet been resolved.
    if (!list.props.revealOrder || list.props.revealOrder[0] === 't' && list._map.size) return;
    // Walk the currently suspended children in order, calling their
    // stored callbacks on the way. Stop if we encounter a child that
    // has not been completely resolved yet.
    node = list._next;
    while(node){
        while(node.length > 3)node.pop()();
        if (node[RESOLVED_COUNT] < node[SUSPENDED_COUNT]) break;
        list._next = node = node[NEXT_NODE];
    }
};
// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
SuspenseList.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
SuspenseList.prototype.__a = function(child) {
    var list = this;
    var delegated = suspended(list.__v);
    var node = list._map.get(child);
    node[SUSPENDED_COUNT]++;
    return function(unsuspend) {
        var wrappedUnsuspend = function wrappedUnsuspend() {
            if (!list.props.revealOrder) // is no need to coordinate a specific order or unsuspends.
            unsuspend();
            else {
                node.push(unsuspend);
                resolve(list, child, node);
            }
        };
        if (delegated) delegated(wrappedUnsuspend);
        else wrappedUnsuspend();
    };
};
SuspenseList.prototype.render = function(props) {
    this._next = null;
    this._map = new Map();
    var children = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(props.children);
    if (props.revealOrder && props.revealOrder[0] === 'b') // then flip the child list around so that the last child will be
    // the first in the linked list.
    children.reverse();
    // Build the linked list. Iterate through the children in reverse order
    // so that `_next` points to the first linked list node to be resolved.
    for(var i = children.length; i--;)// 	[suspended_count, resolved_count, next_node]
    // where suspended_count and resolved_count are numeric counters for
    // keeping track how many times a node has been suspended and resolved.
    //
    // Note that suspended_count starts from 1 instead of 0, so we can block
    // processing callbacks until componentDidMount has been called. In a sense
    // node is suspended at least until componentDidMount gets called!
    //
    // Pending callbacks are added to the end of the node:
    // 	[suspended_count, resolved_count, next_node, callback_0, callback_1, ...]
    this._map.set(children[i], this._next = [
        1,
        0,
        this._next
    ]);
    return props.children;
};
SuspenseList.prototype.componentDidUpdate = SuspenseList.prototype.componentDidMount = function() {
    var _this = this;
    // Iterate through all children after mounting for two reasons:
    // 1. As each node[SUSPENDED_COUNT] starts from 1, this iteration increases
    //    each node[RELEASED_COUNT] by 1, therefore balancing the counters.
    //    The nodes can now be completely consumed from the linked list.
    // 2. Handle nodes that might have gotten resolved between render and
    //    componentDidMount.
    this._map.forEach(function(node, child) {
        resolve(_this, child, node);
    });
};
/**
 * @param {import('../../src/index').RenderableProps<{ context: any }>} props
 */ function ContextProvider(props) {
    this.getChildContext = function() {
        return props.context;
    };
    return props.children;
}
/**
 * Portal component
 * @this {import('./internal').Component}
 * @param {object | null | undefined} props
 *
 * TODO: use createRoot() instead of fake root
 */ function Portal(props) {
    var _this = this;
    var container = props._container;
    _this.componentWillUnmount = function() {
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, _this._temp);
        _this._temp = null;
        _this._container = null;
    };
    // When we change container we should clear our old container and
    // indicate a new mount.
    if (_this._container && _this._container !== container) _this.componentWillUnmount();
    if (!_this._temp) {
        _this._container = container;
        // Create a fake DOM parent node that manages a subset of `container`'s children:
        _this._temp = {
            nodeType: 1,
            parentNode: container,
            childNodes: [],
            contains: function contains() {
                return true;
            },
            appendChild: function appendChild(child) {
                this.childNodes.push(child);
                _this._container.appendChild(child);
            },
            insertBefore: function insertBefore(child, before) {
                this.childNodes.push(child);
                _this._container.appendChild(child);
            },
            removeChild: function removeChild(child) {
                this.childNodes.splice(this.childNodes.indexOf(child) >>> 1, 1);
                _this._container.removeChild(child);
            }
        };
    }
    // Render our wrapping element into temp.
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContextProvider, {
        context: _this.context
    }, props.__v), _this._temp);
}
/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node
 * @param {import('./internal').VNode} vnode The vnode to render
 * @param {import('./internal').PreactElement} container The DOM node to continue rendering in to.
 */ function createPortal(vnode, container) {
    var el = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Portal, {
        __v: vnode,
        _container: container
    });
    el.containerInfo = container;
    return el;
}
var REACT_ELEMENT_TYPE = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;
// Some libraries like `react-virtualized` explicitly check for this.
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent = {};
// `UNSAFE_*` lifecycle hooks
// Preact only ever invokes the unprefixed methods.
// Here we provide a base "fallback" implementation that calls any defined UNSAFE_ prefixed method.
// - If a component defines its own `componentDidMount()` (including via defineProperty), use that.
// - If a component defines `UNSAFE_componentDidMount()`, `componentDidMount` is the alias getter/setter.
// - If anything assigns to an `UNSAFE_*` property, the assignment is forwarded to the unprefixed property.
// See https://github.com/preactjs/preact/issues/1941
[
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate'
].forEach(function(key) {
    Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype, key, {
        configurable: true,
        get: function get() {
            return this['UNSAFE_' + key];
        },
        set: function set(v) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value: v
            });
        }
    });
});
/**
 * Proxy render() since React returns a Component reference.
 * @param {import('./internal').VNode} vnode VNode tree to render
 * @param {import('./internal').PreactElement} parent DOM node to render vnode tree into
 * @param {() => void} [callback] Optional callback that will be called after rendering
 * @returns {import('./internal').Component | null} The root component reference or null
 */ function render(vnode, parent, callback) {
    // React destroys any existing DOM nodes, see #1727
    // ...but only on the first render, see #1828
    if (parent.__k == null) parent.textContent = '';
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
function hydrate(vnode, parent, callback) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
var oldEventHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.event;
preact__WEBPACK_IMPORTED_MODULE_0__.options.event = function(e) {
    if (oldEventHook) e = oldEventHook(e);
    e.persist = empty;
    e.isPropagationStopped = isPropagationStopped;
    e.isDefaultPrevented = isDefaultPrevented;
    return e.nativeEvent = e;
};
function empty() {}
function isPropagationStopped() {
    return this.cancelBubble;
}
function isDefaultPrevented() {
    return this.defaultPrevented;
}
var oldVNodeHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function(vnode) {
    vnode.$$typeof = REACT_ELEMENT_TYPE;
    if (oldVNodeHook) oldVNodeHook(vnode);
};
// This is a very very private internal function for React it
// is used to sort-of do runtime dependency injection.
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
    ReactCurrentDispatcher: {
        current: {
            useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
            useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
            useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
            useDeferredValue: useDeferredValue,
            useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
            useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
            useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
            useInsertionEffect: useInsertionEffect,
            useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
            useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
            // useMutableSource, // experimental-only and replaced by uSES, likely not worth supporting
            useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
            useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
            useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
            useSyncExternalStore: useSyncExternalStore,
            useTransition: useTransition
        }
    }
};
var version = '18.3.1'; // trick libraries to think we are react
/**
 * Legacy version of createElement.
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor
 */ function createFactory(type) {
    return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null, type);
}
/**
 * Check if the passed element is a valid (p)react node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isValidElement(element) {
    return !!element && element.$$typeof === REACT_ELEMENT_TYPE;
}
/**
 * Check if the passed element is a Fragment node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isFragment(element) {
    return isValidElement(element) && element.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
/**
 * Check if the passed element is a Memo node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isMemo(element) {
    return !!element && !!element.displayName && (typeof element.displayName === 'string' || element.displayName instanceof String) && element.displayName.startsWith('Memo(');
}
/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 * @param {import('./internal').VNode} element The vnode to clone
 * @param {object} props Props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Optional component children
 */ function cloneElement(element) {
    if (!isValidElement(element)) return element;
    return preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null, arguments);
}
/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */ function unmountComponentAtNode(container) {
    if (container.__k) {
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, container);
        return true;
    }
    return false;
}
/**
 * Get the matching DOM node for a component
 * @param {import('./internal').Component} component
 * @returns {import('./internal').PreactElement | null}
 */ function findDOMNode(component) {
    return component && (component.base || component.nodeType === 1 && component) || null;
}
/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 * @template Arg
 * @param {(arg: Arg) => void} callback function that triggers the updated
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 */ // eslint-disable-next-line camelcase
var unstable_batchedUpdates = function unstable_batchedUpdates(callback, arg) {
    return callback(arg);
};
/**
 * In React, `flushSync` flushes the entire tree and forces a rerender. It's
 * implmented here as a no-op.
 * @template Arg
 * @template Result
 * @param {(arg: Arg) => Result} callback function that runs before the flush
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 * @returns
 */ var flushSync = function flushSync(callback, arg) {
    return callback(arg);
};
/**
 * Strict Mode is not implemented in Preact, so we provide a stand-in for it
 * that just renders its children without imposing any restrictions.
 */ var StrictMode = preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function startTransition(cb) {
    cb();
}
function useDeferredValue(val) {
    return val;
}
function useTransition() {
    return [
        false,
        startTransition
    ];
}
// TODO: in theory this should be done after a VNode is diffed as we want to insert
// styles/... before it attaches
var useInsertionEffect = preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;
// compat to react-is
var isElement = isValidElement;
/**
 * This is taken from https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js#L84
 * on a high level this cuts out the warnings, ... and attempts a smaller implementation
 * @typedef {{ _value: any; _getSnapshot: () => any }} Store
 */ function useSyncExternalStore(subscribe, getSnapshot) {
    var value = getSnapshot();
    /**
   * @typedef {{ _instance: Store }} StoreRef
   * @type {[StoreRef, (store: StoreRef) => void]}
   */ var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
        _instance: {
            __: value,
            _getSnapshot: getSnapshot
        }
    }), _instance = _useState[0]._instance, forceUpdate = _useState[1];
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function() {
        _instance.__ = value;
        _instance._getSnapshot = getSnapshot;
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
        return subscribe(function() {
            if (didSnapshotChange(_instance)) forceUpdate({
                _instance: _instance
            });
        });
    }, [
        subscribe
    ]);
    return value;
}
/** @type {(inst: Store) => boolean} */ function didSnapshotChange(inst) {
    var latestGetSnapshot = inst._getSnapshot;
    var prevValue = inst.__;
    try {
        var nextValue = latestGetSnapshot();
        return !is(prevValue, nextValue);
    } catch (error) {
        return true;
    }
}
// React copies the named exports to the default one.
var index = {
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
    useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
    useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
    useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
    useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
    useInsertionEffect: useInsertionEffect,
    useTransition: useTransition,
    useDeferredValue: useDeferredValue,
    useSyncExternalStore: useSyncExternalStore,
    startTransition: startTransition,
    useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
    useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
    useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
    useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
    useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
    useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
    version: version,
    Children: Children,
    render: render,
    hydrate: hydrate,
    unmountComponentAtNode: unmountComponentAtNode,
    createPortal: createPortal,
    createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
    createContext: preact__WEBPACK_IMPORTED_MODULE_0__.createContext,
    createFactory: createFactory,
    cloneElement: cloneElement,
    createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
    Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    isValidElement: isValidElement,
    isElement: isElement,
    isFragment: isFragment,
    isMemo: isMemo,
    findDOMNode: findDOMNode,
    Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
    PureComponent: PureComponent,
    memo: memo,
    forwardRef: forwardRef,
    flushSync: flushSync,
    unstable_batchedUpdates: unstable_batchedUpdates,
    StrictMode: StrictMode,
    Suspense: Suspense,
    SuspenseList: SuspenseList,
    lazy: lazy,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
};
 //# sourceMappingURL=compat.module.js.map


}),
"(react:background)/./node_modules/preact/debug/dist/debug.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  resetPropWarnings: () => (resetPropWarnings)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/devtools/dist/devtools.mjs");


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var loggedTypeFailures = {};
/**
 * Reset the history of which prop type warnings have been logged.
 */ function resetPropWarnings() {
    loggedTypeFailures = {};
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * Adapted from https://github.com/facebook/prop-types/blob/master/checkPropTypes.js
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    Object.keys(typeSpecs).forEach(function(typeSpecName) {
        var error;
        try {
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (e) {
            error = e;
        }
        if (error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            console.error("Failed " + location + " type: " + error.message + (getStack && "\n" + getStack() || ''));
        }
    });
}
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
/**
 * Get human readable name of the component/dom node
 * @param {import('./internal').VNode} vnode
 * @param {import('./internal').VNode} vnode
 * @returns {string}
 */ function getDisplayName(vnode) {
    if (vnode.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment) return 'Fragment';
    else if (typeof vnode.type == 'function') return vnode.type.displayName || vnode.type.name;
    else if (typeof vnode.type == 'string') return vnode.type;
    return '#text';
}
/**
 * Used to keep track of the currently rendered `vnode` and print it
 * in debug messages.
 */ var renderStack = [];
/**
 * Keep track of the current owners. An owner describes a component
 * which was responsible to render a specific `vnode`. This exclude
 * children that are passed via `props.children`, because they belong
 * to the parent owner.
 *
 * ```jsx
 * const Foo = props => <div>{props.children}</div> // div's owner is Foo
 * const Bar = props => {
 *   return (
 *     <Foo><span /></Foo> // Foo's owner is Bar, span's owner is Bar
 *   )
 * }
 * ```
 *
 * Note: A `vnode` may be hoisted to the root scope due to compiler
 * optimiztions. In these cases the `_owner` will be different.
 */ var ownerStack = [];
/**
 * Get the currently rendered `vnode`
 * @returns {import('./internal').VNode | null}
 */ function getCurrentVNode() {
    return renderStack.length > 0 ? renderStack[renderStack.length - 1] : null;
}
/**
 * If the user doesn't have `@babel/plugin-transform-react-jsx-source`
 * somewhere in his tool chain we can't print the filename and source
 * location of a component. In that case we just omit that, but we'll
 * print a helpful message to the console, notifying the user of it.
 */ var showJsxSourcePluginWarning = true;
/**
 * Check if a `vnode` is a possible owner.
 * @param {import('./internal').VNode} vnode
 */ function isPossibleOwner(vnode) {
    return typeof vnode.type == 'function' && vnode.type != preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
/**
 * Return the component stack that was captured up to this point.
 * @param {import('./internal').VNode} vnode
 * @returns {string}
 */ function getOwnerStack(vnode) {
    var stack = [
        vnode
    ];
    var next = vnode;
    while(next.__o != null){
        stack.push(next.__o);
        next = next.__o;
    }
    return stack.reduce(function(acc, owner) {
        acc += "  in " + getDisplayName(owner);
        var source = owner.__source;
        if (source) acc += " (at " + source.fileName + ":" + source.lineNumber + ")";
        else if (showJsxSourcePluginWarning) console.warn('Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.');
        showJsxSourcePluginWarning = false;
        return acc += '\n';
    }, '');
}
/**
 * Setup code to capture the component trace while rendering. Note that
 * we cannot simply traverse `vnode._parent` upwards, because we have some
 * debug messages for `this.setState` where the `vnode` is `undefined`.
 */ function setupComponentStack() {
    var oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
    var oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;
    var oldRoot = preact__WEBPACK_IMPORTED_MODULE_0__.options.__;
    var oldVNode = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
    var oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;
    preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function(vnode) {
        if (isPossibleOwner(vnode)) ownerStack.pop();
        renderStack.pop();
        if (oldDiffed) oldDiffed(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function(vnode) {
        if (isPossibleOwner(vnode)) renderStack.push(vnode);
        if (oldDiff) oldDiff(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__ = function(vnode, parent) {
        ownerStack = [];
        if (oldRoot) oldRoot(vnode, parent);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function(vnode) {
        vnode.__o = ownerStack.length > 0 ? ownerStack[ownerStack.length - 1] : null;
        if (oldVNode) oldVNode(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function(vnode) {
        if (isPossibleOwner(vnode)) ownerStack.push(vnode);
        if (oldRender) oldRender(vnode);
    };
}
/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
function isNaN(value) {
    return value !== value;
}
var isWeakMapSupported = typeof WeakMap == 'function';
/**
 * @param {import('./internal').VNode} vnode
 * @returns {Array<string>}
 */ function getDomChildren(vnode) {
    var domChildren = [];
    if (!vnode.__k) return domChildren;
    vnode.__k.forEach(function(child) {
        if (child && typeof child.type === 'function') domChildren.push.apply(domChildren, getDomChildren(child));
        else if (child && typeof child.type === 'string') domChildren.push(child.type);
    });
    return domChildren;
}
/**
 * @param {import('./internal').VNode} parent
 * @returns {string}
 */ function getClosestDomNodeParentName(parent) {
    if (!parent) return '';
    if (typeof parent.type == 'function') {
        if (parent.__ == null) {
            if (parent.__e != null && parent.__e.parentNode != null) return parent.__e.parentNode.localName;
            return '';
        }
        return getClosestDomNodeParentName(parent.__);
    }
    return /** @type {string} */ parent.type;
}
function initDebug() {
    setupComponentStack();
    var hooksAllowed = false;
    /* eslint-disable no-console */ var oldBeforeDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
    var oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;
    var oldVnode = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
    var oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;
    var oldCatchError = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;
    var oldRoot = preact__WEBPACK_IMPORTED_MODULE_0__.options.__;
    var oldHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.__h;
    var warnedComponents = !isWeakMapSupported ? null : {
        useEffect: new WeakMap(),
        useLayoutEffect: new WeakMap(),
        lazyPropTypes: new WeakMap()
    };
    var deprecations = [];
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function(error, vnode, oldVNode, errorInfo) {
        var component = vnode && vnode.__c;
        if (component && typeof error.then == 'function') {
            var promise = error;
            error = new Error("Missing Suspense. The throwing component was: " + getDisplayName(vnode));
            var parent = vnode;
            for(; parent; parent = parent.__)if (parent.__c && parent.__c.__c) {
                error = promise;
                break;
            }
            // We haven't recovered and we know at this point that there is no
            // Suspense component higher up in the tree
            if (error instanceof Error) throw error;
        }
        try {
            errorInfo = errorInfo || {};
            errorInfo.componentStack = getOwnerStack(vnode);
            oldCatchError(error, vnode, oldVNode, errorInfo);
            // when an error was handled by an ErrorBoundary we will nonetheless emit an error
            // event on the window object. This is to make up for react compatibility in dev mode
            // and thus make the Next.js dev overlay work.
            if (typeof error.then != 'function') setTimeout(function() {
                throw error;
            });
        } catch (e) {
            throw e;
        }
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__ = function(vnode, parentNode) {
        if (!parentNode) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
        var isValid;
        switch(parentNode.nodeType){
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
            case DOCUMENT_NODE:
                isValid = true;
                break;
            default:
                isValid = false;
        }
        if (!isValid) {
            var componentName = getDisplayName(vnode);
            throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + parentNode + " instead: render(<" + componentName + " />, " + parentNode + ");");
        }
        if (oldRoot) oldRoot(vnode, parentNode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function(vnode) {
        var type = vnode.type;
        hooksAllowed = true;
        if (type === undefined) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
        else if (type != null && typeof type == 'object') {
            if (type.__k !== undefined && type.__e !== undefined) throw new Error("Invalid type passed to createElement(): " + type + "\n\n" + 'Did you accidentally pass a JSX literal as JSX twice?\n\n' + ("  let My" + getDisplayName(vnode) + " = " + serializeVNode(type) + ";\n") + ("  let vnode = <My" + getDisplayName(vnode) + " />;\n\n") + 'This usually happens when you export a JSX literal and not the component.' + ("\n\n" + getOwnerStack(vnode)));
            throw new Error('Invalid type passed to createElement(): ' + (Array.isArray(type) ? 'array' : type));
        }
        if (vnode.ref !== undefined && typeof vnode.ref != 'function' && typeof vnode.ref != 'object' && !('$$typeof' in vnode // allow string refs when preact-compat is installed
        )) throw new Error("Component's \"ref\" property should be a function, or an object created " + ("by createRef(), but got [" + typeof vnode.ref + "] instead\n") + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
        if (typeof vnode.type == 'string') for(var key in vnode.props){
            if (key[0] === 'o' && key[1] === 'n' && typeof vnode.props[key] != 'function' && vnode.props[key] != null) throw new Error("Component's \"" + key + "\" property should be a function, " + ("but got [" + typeof vnode.props[key] + "] instead\n") + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
        }
        // Check prop-types if available
        if (typeof vnode.type == 'function' && vnode.type.propTypes) {
            if (vnode.type.displayName === 'Lazy' && warnedComponents && !warnedComponents.lazyPropTypes.has(vnode.type)) {
                var m = 'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
                try {
                    var lazyVNode = vnode.type();
                    warnedComponents.lazyPropTypes.set(vnode.type, true);
                    console.warn(m + ("Component wrapped in lazy() is " + getDisplayName(lazyVNode)));
                } catch (promise) {
                    console.warn(m + "We will log the wrapped component's name once it is loaded.");
                }
            }
            var values = vnode.props;
            if (vnode.type.__f) {
                values = assign({}, values);
                delete values.ref;
            }
            checkPropTypes(vnode.type.propTypes, values, 'prop', getDisplayName(vnode), function() {
                return getOwnerStack(vnode);
            });
        }
        if (oldBeforeDiff) oldBeforeDiff(vnode);
    };
    var renderCount = 0;
    var currentComponent;
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function(vnode) {
        if (oldRender) oldRender(vnode);
        hooksAllowed = true;
        var nextComponent = vnode.__c;
        if (nextComponent === currentComponent) renderCount++;
        else renderCount = 1;
        if (renderCount >= 25) throw new Error("Too many re-renders. This is limited to prevent an infinite loop " + ("which may lock up your browser. The component causing this is: " + getDisplayName(vnode)));
        currentComponent = nextComponent;
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__h = function(comp, index, type) {
        if (!comp || !hooksAllowed) throw new Error('Hook can only be invoked from render methods.');
        if (oldHook) oldHook(comp, index, type);
    };
    // Ideally we'd want to print a warning once per component, but we
    // don't have access to the vnode that triggered it here. As a
    // compromise and to avoid flooding the console with warnings we
    // print each deprecation warning only once.
    var warn = function warn(property, message) {
        return {
            get: function get() {
                var key = 'get' + property + message;
                if (deprecations && deprecations.indexOf(key) < 0) {
                    deprecations.push(key);
                    console.warn("getting vnode." + property + " is deprecated, " + message);
                }
            },
            set: function set() {
                var key = 'set' + property + message;
                if (deprecations && deprecations.indexOf(key) < 0) {
                    deprecations.push(key);
                    console.warn("setting vnode." + property + " is not allowed, " + message);
                }
            }
        };
    };
    var deprecatedAttributes = {
        nodeName: warn('nodeName', 'use vnode.type'),
        attributes: warn('attributes', 'use vnode.props'),
        children: warn('children', 'use vnode.props.children')
    };
    var deprecatedProto = Object.create({}, deprecatedAttributes);
    preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function(vnode) {
        var props = vnode.props;
        if (vnode.type !== null && props != null && ('__source' in props || '__self' in props)) {
            var newProps = vnode.props = {};
            for(var i in props){
                var v = props[i];
                if (i === '__source') vnode.__source = v;
                else if (i === '__self') vnode.__self = v;
                else newProps[i] = v;
            }
        }
        // eslint-disable-next-line
        vnode.__proto__ = deprecatedProto;
        if (oldVnode) oldVnode(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function(vnode) {
        var type = vnode.type, parent = vnode.__;
        // Check if the user passed plain objects as children. Note that we cannot
        // move this check into `options.vnode` because components can receive
        // children in any shape they want (e.g.
        // `<MyJSONFormatter>{{ foo: 123, bar: "abc" }}</MyJSONFormatter>`).
        // Putting this check in `options.diffed` ensures that
        // `vnode._children` is set and that we only validate the children
        // that were actually rendered.
        if (vnode.__k) vnode.__k.forEach(function(child) {
            if (typeof child === 'object' && child && child.type === undefined) {
                var keys = Object.keys(child).join(',');
                throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + keys + "}." + ("\n\n" + getOwnerStack(vnode)));
            }
        });
        if (vnode.__c === currentComponent) renderCount = 0;
        if (typeof type === 'string' && (isTableElement(type) || type === 'p' || type === 'a' || type === 'button')) {
            // Avoid false positives when Preact only partially rendered the
            // HTML tree. Whilst we attempt to include the outer DOM in our
            // validation, this wouldn't work on the server for
            // `preact-render-to-string`. There we'd otherwise flood the terminal
            // with false positives, which we'd like to avoid.
            var domParentName = getClosestDomNodeParentName(parent);
            if (domParentName !== '' && isTableElement(type)) {
                if (type === 'table' && // Tables can be nested inside each other if it's inside a cell.
                // See https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#nesting_tables
                domParentName !== 'td' && isTableElement(domParentName)) {
                    console.log(domParentName, parent.__e);
                    console.error('Improper nesting of table. Your <table> should not have a table-node parent.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                } else if ((type === 'thead' || type === 'tfoot' || type === 'tbody') && domParentName !== 'table') console.error('Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                else if (type === 'tr' && domParentName !== 'thead' && domParentName !== 'tfoot' && domParentName !== 'tbody') console.error('Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                else if (type === 'td' && domParentName !== 'tr') console.error('Improper nesting of table. Your <td> should have a <tr> parent.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                else if (type === 'th' && domParentName !== 'tr') console.error('Improper nesting of table. Your <th> should have a <tr>.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
            } else if (type === 'p') {
                var illegalDomChildrenTypes = getDomChildren(vnode).filter(function(childType) {
                    return ILLEGAL_PARAGRAPH_CHILD_ELEMENTS.test(childType);
                });
                if (illegalDomChildrenTypes.length) console.error('Improper nesting of paragraph. Your <p> should not have ' + illegalDomChildrenTypes.join(', ') + 'as child-elements.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
            } else if (type === 'a' || type === 'button') {
                if (getDomChildren(vnode).indexOf(type) !== -1) console.error("Improper nesting of interactive content. Your <" + type + ">" + (" should not have other " + (type === 'a' ? 'anchor' : 'button')) + ' tags as child-elements.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
            }
        }
        hooksAllowed = false;
        if (oldDiffed) oldDiffed(vnode);
        if (vnode.__k != null) {
            var keys = [];
            for(var i = 0; i < vnode.__k.length; i++){
                var child = vnode.__k[i];
                if (!child || child.key == null) continue;
                var key = child.key;
                if (keys.indexOf(key) !== -1) {
                    console.error('Following component has two or more children with the ' + ("same key attribute: \"" + key + "\". This may cause glitches and misbehavior ") + 'in rendering process. Component: \n\n' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                    break;
                }
                keys.push(key);
            }
        }
        if (vnode.__c != null && vnode.__c.__H != null) {
            // Validate that none of the hooks in this component contain arguments that are NaN.
            // This is a common mistake that can be hard to debug, so we want to catch it early.
            var hooks = vnode.__c.__H.__;
            if (hooks) for(var _i = 0; _i < hooks.length; _i += 1){
                var hook = hooks[_i];
                if (hook.__H) for(var j = 0; j < hook.__H.length; j++){
                    var arg = hook.__H[j];
                    if (isNaN(arg)) {
                        var componentName = getDisplayName(vnode);
                        throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + _i + " in component " + componentName + " was called with NaN.");
                    }
                }
            }
        }
    };
}
var setState = preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.setState;
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.setState = function(update, callback) {
    if (this.__v == null) {
        if (this.state == null) console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set ' + ("\"this.state = {}\" directly.\n\n" + getOwnerStack(getCurrentVNode())));
    }
    return setState.call(this, update, callback);
};
function isTableElement(type) {
    return type === 'table' || type === 'tfoot' || type === 'tbody' || type === 'thead' || type === 'td' || type === 'tr' || type === 'th';
}
var ILLEGAL_PARAGRAPH_CHILD_ELEMENTS = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/;
var forceUpdate = preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate;
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate = function(callback) {
    if (this.__v == null) console.warn("Calling \"this.forceUpdate\" inside the constructor of a component is a " + ("no-op and might be a bug in your application.\n\n" + getOwnerStack(getCurrentVNode())));
    else if (this.__P == null) console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.' + ("\n\n" + getOwnerStack(this.__v)));
    return forceUpdate.call(this, callback);
};
/**
 * Serialize a vnode tree to a string
 * @param {import('./internal').VNode} vnode
 * @returns {string}
 */ function serializeVNode(vnode) {
    var props = vnode.props;
    var name = getDisplayName(vnode);
    var attrs = '';
    for(var prop in props)if (props.hasOwnProperty(prop) && prop !== 'children') {
        var value = props[prop];
        // If it is an object but doesn't have toString(), use Object.toString
        if (typeof value == 'function') value = "function " + (value.displayName || value.name) + "() {}";
        value = Object(value) === value && !value.toString ? Object.prototype.toString.call(value) : value + '';
        attrs += " " + prop + "=" + JSON.stringify(value);
    }
    var children = props.children;
    return "<" + name + attrs + (children && children.length ? '>..</' + name + '>' : ' />');
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.__m = function(newVNode, excessDomChildren) {
    var type = newVNode.type;
    var availableTypes = excessDomChildren.map(function(child) {
        return child.localName;
    });
    console.error("Expected a DOM node of type " + type + " but found " + availableTypes.join(', ') + "as available DOM-node(s), this is caused by the SSR'd HTML containing different DOM-nodes compared to the hydrated one.\n\n" + getOwnerStack(newVNode));
};
initDebug();
 //# sourceMappingURL=debug.module.js.map


}),
"(react:background)/./node_modules/preact/devtools/dist/devtools.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addHookName: () => (addHookName)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");

function initDevTools() {
    var globalVar = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : undefined;
    if (globalVar !== null && globalVar !== undefined && globalVar.__PREACT_DEVTOOLS__) globalVar.__PREACT_DEVTOOLS__.attachPreact('10.24.0', preact__WEBPACK_IMPORTED_MODULE_0__.options, {
        Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component
    });
}
initDevTools();
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, name: string) => T}
 */ function addHookName(value, name) {
    if (preact__WEBPACK_IMPORTED_MODULE_0__.options.__a) preact__WEBPACK_IMPORTED_MODULE_0__.options.__a(name);
    return value;
}
 //# sourceMappingURL=devtools.module.js.map


}),
"(react:background)/./node_modules/preact/dist/preact.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (BaseComponent),
  Fragment: () => (Fragment),
  cloneElement: () => (cloneElement),
  createContext: () => (createContext),
  createElement: () => (createElement),
  createRef: () => (createRef),
  h: () => (createElement),
  hydrate: () => (hydrate),
  isValidElement: () => (isValidElement),
  options: () => (options),
  process: () => (process),
  render: () => (render),
  toChildArray: () => (toChildArray)
});
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
/** Signifies this VNode suspended on the previous render */ var MODE_SUSPENDED = 128;
/** Indicates that this node needs to be inserted while patching children */ var INSERT_VNODE = 65536;
/** Indicates a VNode has been matched with another VNode in the diff */ var MATCHED = 131072;
/** Reset all mode flags */ var RESET_MODE = ~(MODE_HYDRATE | MODE_SUSPENDED);
var EMPTY_OBJ = /** @type {any} */ {};
var EMPTY_ARR = [];
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var isArray = Array.isArray;
/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    // @ts-expect-error We change the type of `obj` to be `O & P`
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {preact.ContainerNode} node The node to remove
 */ function removeNode(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
}
var slice = EMPTY_ARR.slice;
/**
 * Find the closest error boundary to a thrown error and call it
 * @param {object} error The thrown value
 * @param {VNode} vnode The vnode that threw the error that was caught (except
 * for unmounting when this parameter is the highest parent that was being
 * unmounted)
 * @param {VNode} [oldVNode]
 * @param {ErrorInfo} [errorInfo]
 */ function _catchError(error, vnode, oldVNode, errorInfo) {
    /** @type {Component} */ var component, /** @type {ComponentType} */ ctor, /** @type {boolean} */ handled;
    for(; vnode = vnode.__;){
        if ((component = vnode.__c) && !component.__) try {
            ctor = component.constructor;
            if (ctor && ctor.getDerivedStateFromError != null) {
                component.setState(ctor.getDerivedStateFromError(error));
                handled = component.__d;
            }
            if (component.componentDidCatch != null) {
                component.componentDidCatch(error, errorInfo || {});
                handled = component.__d;
            }
            // This is an error boundary. Mark it as having bailed out, and whether it was mid-hydration.
            if (handled) return component.__E = component;
        } catch (e) {
            error = e;
        }
    }
    throw error;
}
/**
 * The `option` object can potentially contain callback functions
 * that are called during various stages of our renderer. This is the
 * foundation on which all our addons like `preact/debug`, `preact/compat`,
 * and `preact/hooks` are based on. See the `Options` type in `internal.d.ts`
 * for a full list of available option hooks (most editors/IDEs allow you to
 * ctrl+click or cmd+click on mac the type definition below).
 * @type {Options}
 */ var options = {
    __e: _catchError
};
var vnodeId = 0;
/**
 * Create an virtual node (used for JSX)
 * @param {VNode["type"]} type The node name or Component constructor for this
 * virtual node
 * @param {object | null | undefined} [props] The properties of the virtual node
 * @param {Array<import('.').ComponentChildren>} [children] The children of the
 * virtual node
 * @returns {VNode}
 */ function createElement(type, props, children) {
    var normalizedProps = {}, key, ref, i;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    // If a Component VNode, check for and apply defaultProps
    // Note: type may be undefined in development, must never error here.
    if (typeof type == 'function' && type.defaultProps != null) {
        for(i in type.defaultProps)if (normalizedProps[i] === undefined) normalizedProps[i] = type.defaultProps[i];
    }
    return createVNode(type, normalizedProps, key, ref, null);
}
/**
 * Create a VNode (used internally by Preact)
 * @param {VNode["type"]} type The node name or Component
 * Constructor for this virtual node
 * @param {object | string | number | null} props The properties of this virtual node.
 * If this virtual node represents a text node, this is the text of the node (string or number).
 * @param {string | number | null} key The key for this virtual node, used when
 * diffing it against its children
 * @param {VNode["ref"]} ref The ref property that will
 * receive a reference to its created child
 * @returns {VNode}
 */ function createVNode(type, props, key, ref, original) {
    // V8 seems to be better at detecting type shapes if the object is allocated from the same call site
    // Do not inline into createElement and coerceToVNode!
    /** @type {VNode} */ var vnode = {
        type: type,
        props: props,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        // _nextDom must be initialized to undefined b/c it will eventually
        // be set to dom.nextSibling which can return `null` and it is important
        // to be able to distinguish between an uninitialized _nextDom and
        // a _nextDom that has been set to `null`
        __d: undefined,
        __c: null,
        constructor: undefined,
        __v: original == null ? ++vnodeId : original,
        __i: -1,
        __u: 0
    };
    // Only invoke the vnode hook if this was *not* a direct copy:
    if (original == null && options.vnode != null) options.vnode(vnode);
    return vnode;
}
function createRef() {
    return {
        current: null
    };
}
function Fragment(props) {
    return props.children;
}
/**
 * Check if a the argument is a valid Preact VNode.
 * @param {*} vnode
 * @returns {vnode is VNode}
 */ var isValidElement = function isValidElement(vnode) {
    return vnode != null && vnode.constructor == undefined;
};
/**
 * Base Component class. Provides `setState()` and `forceUpdate()`, which
 * trigger rendering
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components'
 * getChildContext
 */ function BaseComponent(props, context) {
    this.props = props;
    this.context = context;
}
/**
 * Update component state and schedule a re-render.
 * @this {Component}
 * @param {object | ((s: object, p: object) => object)} update A hash of state
 * properties to update with new values or a function that given the current
 * state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is
 * updated
 */ BaseComponent.prototype.setState = function(update, callback) {
    // only clone state when copying to nextState the first time.
    var s;
    if (this.__s != null && this.__s !== this.state) s = this.__s;
    else s = this.__s = assign({}, this.state);
    if (typeof update == 'function') // preventing us from mutating it, so we need to clone it. See #2716
    update = update(assign({}, s), this.props);
    if (update) assign(s, update);
    // Skip update if updater function returned null
    if (update == null) return;
    if (this.__v) {
        if (callback) this._sb.push(callback);
        enqueueRender(this);
    }
};
/**
 * Immediately perform a synchronous re-render of the component
 * @this {Component}
 * @param {() => void} [callback] A function to be called after component is
 * re-rendered
 */ BaseComponent.prototype.forceUpdate = function(callback) {
    if (this.__v) {
        // Set render mode so that we can differentiate where the render request
        // is coming from. We need this because forceUpdate should never call
        // shouldComponentUpdate
        this.__e = true;
        if (callback) this.__h.push(callback);
        enqueueRender(this);
    }
};
/**
 * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
 * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
 * @param {object} props Props (eg: JSX attributes) received from parent
 * element/component
 * @param {object} state The component's current state
 * @param {object} context Context object, as returned by the nearest
 * ancestor's `getChildContext()`
 * @returns {ComponentChildren | void}
 */ BaseComponent.prototype.render = Fragment;
/**
 * @param {VNode} vnode
 * @param {number | null} [childIndex]
 */ function getDomSibling(vnode, childIndex) {
    if (childIndex == null) return vnode.__ ? getDomSibling(vnode.__, vnode.__i + 1) : null;
    var sibling;
    for(; childIndex < vnode.__k.length; childIndex++){
        sibling = vnode.__k[childIndex];
        if (sibling != null && sibling.__e != null) // we can rely on _dom to tell us if this subtree contains a
        // rendered DOM node, and what the first rendered DOM node is
        return sibling.__e;
    }
    // If we get here, we have not found a DOM node in this vnode's children.
    // We must resume from this vnode's sibling (in it's parent _children array)
    // Only climb up and search the parent if we aren't searching through a DOM
    // VNode (meaning we reached the DOM parent of the original vnode that began
    // the search)
    return typeof vnode.type == 'function' ? getDomSibling(vnode) : null;
}
/**
 * Trigger in-place re-rendering of a component.
 * @param {Component} component The component to rerender
 */ function renderComponent(component) {
    var oldVNode = component.__v, oldDom = oldVNode.__e, commitQueue = [], refQueue = [];
    if (component.__P) {
        var newVNode = assign({}, oldVNode);
        newVNode.__v = oldVNode.__v + 1;
        if (options.vnode) options.vnode(newVNode);
        if (options.renderComponent) options.renderComponent(newVNode, component);
        diff(component.__P, newVNode, oldVNode, component.__n, component.__P.namespaceURI, oldVNode.__u & MODE_HYDRATE ? [
            oldDom
        ] : null, commitQueue, oldDom == null ? getDomSibling(oldVNode) : oldDom, !!(oldVNode.__u & MODE_HYDRATE), refQueue);
        newVNode.__v = oldVNode.__v;
        newVNode.__.__k[newVNode.__i] = newVNode;
        commitRoot(commitQueue, newVNode, refQueue);
        if (newVNode.__e != oldDom) updateParentDomPointers(newVNode);
    }
}
/**
 * @param {VNode} vnode
 */ function updateParentDomPointers(vnode) {
    if ((vnode = vnode.__) != null && vnode.__c != null) {
        vnode.__e = vnode.__c.base = null;
        for(var i = 0; i < vnode.__k.length; i++){
            var child = vnode.__k[i];
            if (child != null && child.__e != null) {
                vnode.__e = vnode.__c.base = child.__e;
                break;
            }
        }
        return updateParentDomPointers(vnode);
    }
}
/**
 * The render queue
 * @type {Array<Component>}
 */ var rerenderQueue = [];
/*
 * The value of `Component.debounce` must asynchronously invoke the passed in callback. It is
 * important that contributors to Preact can consistently reason about what calls to `setState`, etc.
 * do, and when their effects will be applied. See the links below for some further reading on designing
 * asynchronous APIs.
 * * [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony)
 * * [Callbacks synchronous and asynchronous](https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)
 */ var prevDebounce;
var defer = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
/**
 * Enqueue a rerender of a component
 * @param {Component} c The component to rerender
 */ function enqueueRender(c) {
    if (!c.__d && (c.__d = true) && rerenderQueue.push(c) && !process.__r++ || prevDebounce !== options.debounceRendering) {
        prevDebounce = options.debounceRendering;
        (prevDebounce || defer)(process);
    }
}
/**
 * @param {Component} a
 * @param {Component} b
 */ var depthSort = function depthSort(a, b) {
    return a.__v.__b - b.__v.__b;
};
/** Flush the render queue by rerendering all queued components */ function process() {
    var c;
    rerenderQueue.sort(depthSort);
    // Don't update `renderCount` yet. Keep its value non-zero to prevent unnecessary
    // process() calls from getting scheduled while `queue` is still being consumed.
    while(c = rerenderQueue.shift())if (c.__d) {
        var renderQueueLength = rerenderQueue.length;
        renderComponent(c);
        if (rerenderQueue.length > renderQueueLength) // keep the order from top to bottom with those new items so we can handle them in a
        // single pass
        rerenderQueue.sort(depthSort);
    }
    process.__r = 0;
}
process.__r = 0;
/**
 * Diff the children of a virtual node
 * @param {PreactElement} parentDom The DOM element whose children are being
 * diffed
 * @param {ComponentChildren[]} renderResult
 * @param {VNode} newParentVNode The new virtual node whose children should be
 * diff'ed against oldParentVNode
 * @param {VNode} oldParentVNode The old virtual node whose children should be
 * diff'ed against newParentVNode
 * @param {object} globalContext The current context object - modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    var i, /** @type {VNode} */ oldVNode, /** @type {VNode} */ childVNode, /** @type {PreactElement} */ newDom, /** @type {PreactElement} */ firstChildDom;
    // This is a compression of oldParentVNode!=null && oldParentVNode != EMPTY_OBJ && oldParentVNode._children || EMPTY_ARR
    // as EMPTY_OBJ._children should be `undefined`.
    /** @type {VNode[]} */ var oldChildren = oldParentVNode && oldParentVNode.__k || EMPTY_ARR;
    var newChildrenLength = renderResult.length;
    newParentVNode.__d = oldDom;
    constructNewChildrenArray(newParentVNode, renderResult, oldChildren);
    oldDom = newParentVNode.__d;
    for(i = 0; i < newChildrenLength; i++){
        childVNode = newParentVNode.__k[i];
        if (childVNode == null) continue;
        // At this point, constructNewChildrenArray has assigned _index to be the
        // matchingIndex for this VNode's oldVNode (or -1 if there is no oldVNode).
        if (childVNode.__i === -1) oldVNode = EMPTY_OBJ;
        else oldVNode = oldChildren[childVNode.__i] || EMPTY_OBJ;
        // Update childVNode._index to its final index
        childVNode.__i = i;
        // Morph the old element into the new one, but don't append it to the dom yet
        diff(parentDom, childVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        // Adjust DOM nodes
        newDom = childVNode.__e;
        if (childVNode.ref && oldVNode.ref != childVNode.ref) {
            if (oldVNode.ref) applyRef(oldVNode.ref, null, childVNode);
            refQueue.push(childVNode.ref, childVNode.__c || newDom, childVNode);
        }
        if (firstChildDom == null && newDom != null) firstChildDom = newDom;
        if (childVNode.__u & INSERT_VNODE || oldVNode.__k === childVNode.__k) oldDom = insert(childVNode, oldDom, parentDom);
        else if (typeof childVNode.type == 'function' && childVNode.__d !== undefined) // contain multiple DOM nodes as the same level, continue the diff from
        // the sibling of last DOM child of this child VNode
        oldDom = childVNode.__d;
        else if (newDom) oldDom = newDom.nextSibling;
        // Eagerly cleanup _nextDom. We don't need to persist the value because it
        // is only used by `diffChildren` to determine where to resume the diff
        // after diffing Components and Fragments. Once we store it the nextDOM
        // local var, we can clean up the property. Also prevents us hanging on to
        // DOM nodes that may have been unmounted.
        childVNode.__d = undefined;
        // Unset diffing flags
        childVNode.__u &= ~(INSERT_VNODE | MATCHED);
    }
    // TODO: With new child diffing algo, consider alt ways to diff Fragments.
    // Such as dropping oldDom and moving fragments in place
    //
    // Because the newParentVNode is Fragment-like, we need to set it's
    // _nextDom property to the nextSibling of its last child DOM node.
    //
    // `oldDom` contains the correct value here because if the last child
    // is a Fragment-like, then oldDom has already been set to that child's _nextDom.
    // If the last child is a DOM VNode, then oldDom will be set to that DOM
    // node's nextSibling.
    newParentVNode.__d = oldDom;
    newParentVNode.__e = firstChildDom;
}
/**
 * @param {VNode} newParentVNode
 * @param {ComponentChildren[]} renderResult
 * @param {VNode[]} oldChildren
 */ function constructNewChildrenArray(newParentVNode, renderResult, oldChildren) {
    /** @type {number} */ var i;
    /** @type {VNode} */ var childVNode;
    /** @type {VNode} */ var oldVNode;
    var newChildrenLength = renderResult.length;
    var oldChildrenLength = oldChildren.length, remainingOldChildren = oldChildrenLength;
    var skew = 0;
    newParentVNode.__k = [];
    for(i = 0; i < newChildrenLength; i++){
        // @ts-expect-error We are reusing the childVNode variable to hold both the
        // pre and post normalized childVNode
        childVNode = renderResult[i];
        if (childVNode == null || typeof childVNode == 'boolean' || typeof childVNode == 'function') {
            childVNode = newParentVNode.__k[i] = null;
            continue;
        } else if (typeof childVNode == 'string' || typeof childVNode == 'number' || // eslint-disable-next-line valid-typeof
        typeof childVNode == 'bigint' || childVNode.constructor == String) childVNode = newParentVNode.__k[i] = createVNode(null, childVNode, null, null, null);
        else if (isArray(childVNode)) childVNode = newParentVNode.__k[i] = createVNode(Fragment, {
            children: childVNode
        }, null, null, null);
        else if (childVNode.constructor === undefined && childVNode.__b > 0) // scenario:
        //   const reuse = <div />
        //   <div>{reuse}<span />{reuse}</div>
        childVNode = newParentVNode.__k[i] = createVNode(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : null, childVNode.__v);
        else childVNode = newParentVNode.__k[i] = childVNode;
        var skewedIndex = i + skew;
        childVNode.__ = newParentVNode;
        childVNode.__b = newParentVNode.__b + 1;
        // Temporarily store the matchingIndex on the _index property so we can pull
        // out the oldVNode in diffChildren. We'll override this to the VNode's
        // final index after using this property to get the oldVNode
        var matchingIndex = childVNode.__i = findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren);
        oldVNode = null;
        if (matchingIndex !== -1) {
            oldVNode = oldChildren[matchingIndex];
            remainingOldChildren--;
            if (oldVNode) oldVNode.__u |= MATCHED;
        }
        // Here, we define isMounting for the purposes of the skew diffing
        // algorithm. Nodes that are unsuspending are considered mounting and we detect
        // this by checking if oldVNode._original === null
        var isMounting = oldVNode == null || oldVNode.__v === null;
        if (isMounting) {
            if (matchingIndex == -1) skew--;
            // If we are mounting a DOM VNode, mark it for insertion
            if (typeof childVNode.type != 'function') childVNode.__u |= INSERT_VNODE;
        } else if (matchingIndex !== skewedIndex) {
            // When we move elements around i.e. [0, 1, 2] --> [1, 0, 2]
            // --> we diff 1, we find it at position 1 while our skewed index is 0 and our skew is 0
            //     we set the skew to 1 as we found an offset.
            // --> we diff 0, we find it at position 0 while our skewed index is at 2 and our skew is 1
            //     this makes us increase the skew again.
            // --> we diff 2, we find it at position 2 while our skewed index is at 4 and our skew is 2
            //
            // this becomes an optimization question where currently we see a 1 element offset as an insertion
            // or deletion i.e. we optimize for [0, 1, 2] --> [9, 0, 1, 2]
            // while a more than 1 offset we see as a swap.
            // We could probably build heuristics for having an optimized course of action here as well, but
            // might go at the cost of some bytes.
            //
            // If we wanted to optimize for i.e. only swaps we'd just do the last two code-branches and have
            // only the first item be a re-scouting and all the others fall in their skewed counter-part.
            // We could also further optimize for swaps
            if (matchingIndex == skewedIndex - 1) skew--;
            else if (matchingIndex == skewedIndex + 1) skew++;
            else {
                if (matchingIndex > skewedIndex) skew--;
                else skew++;
                // Move this VNode's DOM if the original index (matchingIndex) doesn't
                // match the new skew index (i + new skew)
                // In the former two branches we know that it matches after skewing
                childVNode.__u |= INSERT_VNODE;
            }
        }
    }
    // Remove remaining oldChildren if there are any. Loop forwards so that as we
    // unmount DOM from the beginning of the oldChildren, we can adjust oldDom to
    // point to the next child, which needs to be the first DOM node that won't be
    // unmounted.
    if (remainingOldChildren) for(i = 0; i < oldChildrenLength; i++){
        oldVNode = oldChildren[i];
        if (oldVNode != null && (oldVNode.__u & MATCHED) === 0) {
            if (oldVNode.__e == newParentVNode.__d) newParentVNode.__d = getDomSibling(oldVNode);
            unmount(oldVNode, oldVNode);
        }
    }
}
/**
 * @param {VNode} parentVNode
 * @param {PreactElement} oldDom
 * @param {PreactElement} parentDom
 * @returns {PreactElement}
 */ function insert(parentVNode, oldDom, parentDom) {
    // Note: VNodes in nested suspended trees may be missing _children.
    if (typeof parentVNode.type == 'function') {
        var children = parentVNode.__k;
        for(var i = 0; children && i < children.length; i++)if (children[i]) {
            // If we enter this code path on sCU bailout, where we copy
            // oldVNode._children to newVNode._children, we need to update the old
            // children's _parent pointer to point to the newVNode (parentVNode
            // here).
            children[i].__ = parentVNode;
            oldDom = insert(children[i], oldDom, parentDom);
        }
        return oldDom;
    } else if (parentVNode.__e != oldDom) {
        if (oldDom && parentVNode.type && !parentDom.contains(oldDom)) oldDom = getDomSibling(parentVNode);
        parentDom.insertBefore(parentVNode.__e, oldDom || null);
        oldDom = parentVNode.__e;
    }
    do oldDom = oldDom && oldDom.nextSibling;
    while (oldDom != null && oldDom.nodeType === 8)
    return oldDom;
}
/**
 * Flatten and loop through the children of a virtual node
 * @param {ComponentChildren} children The unflattened children of a virtual
 * node
 * @returns {VNode[]}
 */ function toChildArray(children, out) {
    out = out || [];
    if (children == null || typeof children == 'boolean') ;
    else if (isArray(children)) children.some(function(child) {
        toChildArray(child, out);
    });
    else out.push(children);
    return out;
}
/**
 * @param {VNode} childVNode
 * @param {VNode[]} oldChildren
 * @param {number} skewedIndex
 * @param {number} remainingOldChildren
 * @returns {number}
 */ function findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren) {
    var key = childVNode.key;
    var type = childVNode.type;
    var x = skewedIndex - 1;
    var y = skewedIndex + 1;
    var oldVNode = oldChildren[skewedIndex];
    // We only need to perform a search if there are more children
    // (remainingOldChildren) to search. However, if the oldVNode we just looked
    // at skewedIndex was not already used in this diff, then there must be at
    // least 1 other (so greater than 1) remainingOldChildren to attempt to match
    // against. So the following condition checks that ensuring
    // remainingOldChildren > 1 if the oldVNode is not already used/matched. Else
    // if the oldVNode was null or matched, then there could needs to be at least
    // 1 (aka `remainingOldChildren > 0`) children to find and compare against.
    var shouldSearch = remainingOldChildren > (oldVNode != null && (oldVNode.__u & MATCHED) === 0 ? 1 : 0);
    if (oldVNode === null || oldVNode && key == oldVNode.key && type === oldVNode.type && (oldVNode.__u & MATCHED) === 0) return skewedIndex;
    else if (shouldSearch) while(x >= 0 || y < oldChildren.length){
        if (x >= 0) {
            oldVNode = oldChildren[x];
            if (oldVNode && (oldVNode.__u & MATCHED) === 0 && key == oldVNode.key && type === oldVNode.type) return x;
            x--;
        }
        if (y < oldChildren.length) {
            oldVNode = oldChildren[y];
            if (oldVNode && (oldVNode.__u & MATCHED) === 0 && key == oldVNode.key && type === oldVNode.type) return y;
            y++;
        }
    }
    return -1;
}
function setStyle(style, key, value) {
    if (key[0] === '-') style.setProperty(key, value == null ? '' : value);
    else if (value == null) style[key] = '';
    else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) style[key] = value;
    else style[key] = value + 'px';
}
// A logical clock to solve issues like https://github.com/preactjs/preact/issues/3927.
// When the DOM performs an event it leaves micro-ticks in between bubbling up which means that
// an event can trigger on a newly reated DOM-node while the event bubbles up.
//
// Originally inspired by Vue
// (https://github.com/vuejs/core/blob/caeb8a68811a1b0f79/packages/runtime-dom/src/modules/events.ts#L90-L101),
// but modified to use a logical clock instead of Date.now() in case event handlers get attached
// and events get dispatched during the same millisecond.
//
// The clock is incremented after each new event dispatch. This allows 1 000 000 new events
// per second for over 280 years before the value reaches Number.MAX_SAFE_INTEGER (2**53 - 1).
var eventClock = 0;
/**
 * Set a property value on a DOM node
 * @param {PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {string} namespace Whether or not this DOM node is an SVG node or not
 */ function setProperty(dom, name, value, oldValue, namespace) {
    var useCapture;
    o: if (name === 'style') {
        if (typeof value == 'string') dom.style.cssText = value;
        else {
            if (typeof oldValue == 'string') dom.style.cssText = oldValue = '';
            if (oldValue) {
                for(name in oldValue)if (!(value && name in value)) setStyle(dom.style, name, '');
            }
            if (value) {
                for(name in value)if (!oldValue || value[name] !== oldValue[name]) setStyle(dom.style, name, value[name]);
            }
        }
    } else if (name[0] === 'o' && name[1] === 'n') {
        useCapture = name !== (name = name.replace(/(PointerCapture)$|Capture$/i, '$1'));
        // Infer correct casing for DOM built-in events:
        if (name.toLowerCase() in dom || name === 'onFocusOut' || name === 'onFocusIn') name = name.toLowerCase().slice(2);
        else name = name.slice(2);
        if (!dom.l) dom.l = {};
        dom.l[name + useCapture] = value;
        if (value) {
            if (!oldValue) {
                value._attached = eventClock;
                dom.addEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
            } else value._attached = oldValue._attached;
        } else dom.removeEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
    } else {
        if (namespace == 'http://www.w3.org/2000/svg') // - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
        // - className --> class
        name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        else if (name != 'width' && name != 'height' && name != 'href' && name != 'list' && name != 'form' && // Default value in browsers is `-1` and an empty string is
        // cast to `0` instead
        name != 'tabIndex' && name != 'download' && name != 'rowSpan' && name != 'colSpan' && name != 'role' && name != 'popover' && name in dom) try {
            dom[name] = value == null ? '' : value;
            break o;
        } catch (e) {}
        // aria- and data- attributes have no boolean representation.
        // A `false` value is different from the attribute not being
        // present, so we can't remove it. For non-boolean aria
        // attributes we could treat false as a removal, but the
        // amount of exceptions would cost too many bytes. On top of
        // that other frameworks generally stringify `false`.
        if (typeof value == 'function') ;
        else if (value != null && (value !== false || name[4] === '-')) dom.setAttribute(name, name == 'popover' && value == true ? '' : value);
        else dom.removeAttribute(name);
    }
}
/**
 * Create an event proxy function.
 * @param {boolean} useCapture Is the event handler for the capture phase.
 * @private
 */ function createEventProxy(useCapture) {
    /**
   * Proxy an event to hooked event handlers
   * @param {PreactEvent} e The event object from the browser
   * @private
   */ return function(e) {
        if (this.l) {
            var eventHandler = this.l[e.type + useCapture];
            if (e._dispatched == null) e._dispatched = eventClock++;
            else if (e._dispatched < eventHandler._attached) return;
            return eventHandler(options.event ? options.event(e) : e);
        }
    };
}
var eventProxy = createEventProxy(false);
var eventProxyCapture = createEventProxy(true);
/**
 * Diff two virtual nodes and apply proper changes to the DOM
 * @param {PreactElement} parentDom The parent of the DOM element
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object. Modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diff(parentDom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    /** @type {any} */ var tmp, newType = newVNode.type;
    // When passing through createElement it assigns the object
    // constructor as undefined. This to prevent JSON-injection.
    if (newVNode.constructor !== undefined) return null;
    // If the previous diff bailed out, resume creating/hydrating.
    if (oldVNode.__u & MODE_SUSPENDED) {
        isHydrating = !!(oldVNode.__u & MODE_HYDRATE);
        oldDom = newVNode.__e = oldVNode.__e;
        excessDomChildren = [
            oldDom
        ];
    }
    if (tmp = options.__b) tmp(newVNode);
    if (tmp = options._diff2) tmp(newVNode, oldVNode);
    outer: if (typeof newType == 'function') try {
        var c, isNew, oldProps, oldState, snapshot, clearProcessingException;
        var newProps = newVNode.props;
        var isClassComponent = 'prototype' in newType && newType.prototype.render;
        // Necessary for createContext api. Setting this property will pass
        // the context value as `this.context` just for this component.
        tmp = newType.contextType;
        var provider = tmp && globalContext[tmp.__c];
        var componentContext = tmp ? provider ? provider.props.value : tmp.__ : globalContext;
        // Get component and set it to `c`
        if (oldVNode.__c) {
            c = newVNode.__c = oldVNode.__c;
            clearProcessingException = c.__ = c.__E;
        } else {
            // Instantiate the new component
            if (isClassComponent) newVNode.__c = c = new newType(newProps, componentContext); // eslint-disable-line new-cap
            else {
                // @ts-expect-error Trust me, Component implements the interface we want
                newVNode.__c = c = new BaseComponent(newProps, componentContext);
                c.constructor = newType;
                c.render = doRender;
            }
            if (provider) provider.sub(c);
            c.props = newProps;
            if (!c.state) c.state = {};
            c.context = componentContext;
            c.__n = globalContext;
            isNew = c.__d = true;
            c.__h = [];
            c._sb = [];
        }
        // Invoke getDerivedStateFromProps
        if (isClassComponent && c.__s == null) c.__s = c.state;
        if (isClassComponent && newType.getDerivedStateFromProps != null) {
            if (c.__s == c.state) c.__s = assign({}, c.__s);
            assign(c.__s, newType.getDerivedStateFromProps(newProps, c.__s));
        }
        oldProps = c.props;
        oldState = c.state;
        c.__v = newVNode;
        // Invoke pre-render lifecycle methods
        if (isNew) {
            if (isClassComponent && newType.getDerivedStateFromProps == null && c.componentWillMount != null) c.componentWillMount();
            if (isClassComponent && c.componentDidMount != null) c.__h.push(c.componentDidMount);
        } else {
            if (isClassComponent && newType.getDerivedStateFromProps == null && newProps !== oldProps && c.componentWillReceiveProps != null) c.componentWillReceiveProps(newProps, componentContext);
            if (!c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(newProps, c.__s, componentContext) === false || newVNode.__v === oldVNode.__v)) {
                // More info about this here: https://gist.github.com/JoviDeCroock/bec5f2ce93544d2e6070ef8e0036e4e8
                if (newVNode.__v !== oldVNode.__v) {
                    // When we are dealing with a bail because of sCU we have to update
                    // the props, state and dirty-state.
                    // when we are dealing with strict-equality we don't as the child could still
                    // be dirtied see #3883
                    c.props = newProps;
                    c.state = c.__s;
                    c.__d = false;
                }
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
                newVNode.__k.some(function(vnode) {
                    if (vnode) vnode.__ = newVNode;
                });
                for(var i = 0; i < c._sb.length; i++)c.__h.push(c._sb[i]);
                c._sb = [];
                if (c.__h.length) commitQueue.push(c);
                break outer;
            }
            if (c.componentWillUpdate != null) c.componentWillUpdate(newProps, c.__s, componentContext);
            if (isClassComponent && c.componentDidUpdate != null) c.__h.push(function() {
                c.componentDidUpdate(oldProps, oldState, snapshot);
            });
        }
        c.context = componentContext;
        c.props = newProps;
        c.__P = parentDom;
        c.__e = false;
        var renderHook = options.__r, count = 0;
        if (isClassComponent) {
            c.state = c.__s;
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            for(var _i = 0; _i < c._sb.length; _i++)c.__h.push(c._sb[_i]);
            c._sb = [];
        } else do {
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            // Handle setState called in render, see #2553
            c.state = c.__s;
        }while (c.__d && ++count < 25)
        // Handle setState called in render, see #2553
        c.state = c.__s;
        if (c.getChildContext != null) globalContext = assign(assign({}, globalContext), c.getChildContext());
        if (isClassComponent && !isNew && c.getSnapshotBeforeUpdate != null) snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
        var isTopLevelFragment = tmp != null && tmp.type === Fragment && tmp.key == null;
        var renderResult = isTopLevelFragment ? tmp.props.children : tmp;
        diffChildren(parentDom, isArray(renderResult) ? renderResult : [
            renderResult
        ], newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        c.base = newVNode.__e;
        // We successfully rendered this VNode, unset any stored hydration/bailout state:
        newVNode.__u &= RESET_MODE;
        if (c.__h.length) commitQueue.push(c);
        if (clearProcessingException) c.__E = c.__ = null;
    } catch (e) {
        newVNode.__v = null;
        // if hydrating or creating initial tree, bailout preserves DOM:
        if (isHydrating || excessDomChildren != null) {
            newVNode.__u |= isHydrating ? MODE_HYDRATE | MODE_SUSPENDED : MODE_HYDRATE;
            while(oldDom && oldDom.nodeType === 8 && oldDom.nextSibling)oldDom = oldDom.nextSibling;
            excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
            newVNode.__e = oldDom;
        } else {
            newVNode.__e = oldVNode.__e;
            newVNode.__k = oldVNode.__k;
        }
        options.__e(e, newVNode, oldVNode);
    }
    else if (excessDomChildren == null && newVNode.__v === oldVNode.__v) {
        newVNode.__k = oldVNode.__k;
        newVNode.__e = oldVNode.__e;
    } else newVNode.__e = diffElementNodes(oldVNode.__e, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue);
    if (tmp = options.diffed) tmp(newVNode);
}
/**
 * @param {Array<Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {VNode} root
 */ function commitRoot(commitQueue, root, refQueue) {
    root.__d = undefined;
    for(var i = 0; i < refQueue.length; i++)applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
    if (options.__c) options.__c(root, commitQueue);
    commitQueue.some(function(c) {
        try {
            // @ts-expect-error Reuse the commitQueue variable here so the type changes
            commitQueue = c.__h;
            c.__h = [];
            commitQueue.some(function(cb) {
                // @ts-expect-error See above comment on commitQueue
                cb.call(c);
            });
        } catch (e) {
            options.__e(e, c.__v);
        }
    });
}
/**
 * Diff two virtual nodes representing DOM element
 * @param {PreactElement} dom The DOM element representing the virtual nodes
 * being diffed
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 * @returns {PreactElement}
 */ function diffElementNodes(dom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue) {
    var oldProps = oldVNode.props;
    var newProps = newVNode.props;
    var nodeType = /** @type {string} */ newVNode.type;
    /** @type {any} */ var i;
    /** @type {{ __html?: string }} */ var newHtml;
    /** @type {{ __html?: string }} */ var oldHtml;
    /** @type {ComponentChildren} */ var newChildren;
    var value;
    var inputValue;
    var checked;
    // Tracks entering and exiting namespaces when descending through the tree.
    if (nodeType === 'svg') namespace = 'http://www.w3.org/2000/svg';
    else if (nodeType === 'math') namespace = 'http://www.w3.org/1998/Math/MathML';
    else if (!namespace) namespace = 'http://www.w3.org/1999/xhtml';
    if (excessDomChildren != null) for(i = 0; i < excessDomChildren.length; i++){
        value = excessDomChildren[i];
        // if newVNode matches an element in excessDomChildren or the `dom`
        // argument matches an element in excessDomChildren, remove it from
        // excessDomChildren so it isn't later removed in diffChildren
        if (value && 'setAttribute' in value === !!nodeType && (nodeType ? value.localName === nodeType : value.nodeType === 3)) {
            dom = value;
            excessDomChildren[i] = null;
            break;
        }
    }
    if (dom == null) {
        if (nodeType === null) return options.document.createTextNode(newProps);
        dom = options.document.createElementNS(namespace, nodeType, newProps.is && newProps);
        // we are creating a new node, so we can assume this is a new subtree (in
        // case we are hydrating), this deopts the hydrate
        if (isHydrating) {
            if (options.__m) options.__m(newVNode, excessDomChildren);
            isHydrating = false;
        }
        // we created a new parent, so none of the previously attached children can be reused:
        excessDomChildren = null;
    }
    if (nodeType === null) {
        if (oldProps !== newProps && (!isHydrating || dom.data !== newProps)) dom.data = newProps;
    } else {
        // If excessDomChildren was not null, repopulate it with the current element's children:
        excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
        oldProps = oldVNode.props || EMPTY_OBJ;
        // If we are in a situation where we are not hydrating but are using
        // existing DOM (e.g. replaceNode) we should read the existing DOM
        // attributes to diff them
        if (!isHydrating && excessDomChildren != null) {
            oldProps = {};
            for(i = 0; i < dom.attributes.length; i++){
                value = dom.attributes[i];
                oldProps[value.name] = value.value;
            }
        }
        for(i in oldProps){
            value = oldProps[i];
            if (i == 'children') ;
            else if (i == 'dangerouslySetInnerHTML') oldHtml = value;
            else if (!(i in newProps)) {
                if (i == 'value' && 'defaultValue' in newProps || i == 'checked' && 'defaultChecked' in newProps) continue;
                setProperty(dom, i, null, value, namespace);
            }
        }
        // During hydration, props are not diffed at all (including dangerouslySetInnerHTML)
        // @TODO we should warn in debug mode when props don't match here.
        for(i in newProps){
            value = newProps[i];
            if (i == 'children') newChildren = value;
            else if (i == 'dangerouslySetInnerHTML') newHtml = value;
            else if (i == 'value') inputValue = value;
            else if (i == 'checked') checked = value;
            else if ((!isHydrating || typeof value == 'function') && oldProps[i] !== value) setProperty(dom, i, value, oldProps[i], namespace);
        }
        // If the new vnode didn't have dangerouslySetInnerHTML, diff its children
        if (newHtml) {
            // Avoid re-applying the same '__html' if it did not changed between re-render
            if (!isHydrating && (!oldHtml || newHtml.__html !== oldHtml.__html && newHtml.__html !== dom.innerHTML)) dom.innerHTML = newHtml.__html;
            newVNode.__k = [];
        } else {
            if (oldHtml) dom.innerHTML = '';
            diffChildren(dom, isArray(newChildren) ? newChildren : [
                newChildren
            ], newVNode, oldVNode, globalContext, nodeType === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : namespace, excessDomChildren, commitQueue, excessDomChildren ? excessDomChildren[0] : oldVNode.__k && getDomSibling(oldVNode, 0), isHydrating, refQueue);
            // Remove children that are not part of any vnode.
            if (excessDomChildren != null) for(i = excessDomChildren.length; i--;)removeNode(excessDomChildren[i]);
        }
        // As above, don't diff props during hydration
        if (!isHydrating) {
            i = 'value';
            if (nodeType === 'progress' && inputValue == null) dom.removeAttribute('value');
            else if (inputValue !== undefined && // despite the attribute not being present. When the attribute
            // is missing the progress bar is treated as indeterminate.
            // To fix that we'll always update it when it is 0 for progress elements
            (inputValue !== dom[i] || nodeType === 'progress' && !inputValue || // This is only for IE 11 to fix <select> value not being updated.
            // To avoid a stale select value we need to set the option.value
            // again, which triggers IE11 to re-evaluate the select value
            nodeType === 'option' && inputValue !== oldProps[i])) setProperty(dom, i, inputValue, oldProps[i], namespace);
            i = 'checked';
            if (checked !== undefined && checked !== dom[i]) setProperty(dom, i, checked, oldProps[i], namespace);
        }
    }
    return dom;
}
/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param {Ref<any> & { _unmount?: unknown }} ref
 * @param {any} value
 * @param {VNode} vnode
 */ function applyRef(ref, value, vnode) {
    try {
        if (typeof ref == 'function') {
            var hasRefUnmount = typeof ref.__u == 'function';
            if (hasRefUnmount) ref.__u();
            if (!hasRefUnmount || value != null) // instance object itself to avoid shape
            // transitioning vnode
            ref.__u = ref(value);
        } else ref.current = value;
    } catch (e) {
        options.__e(e, vnode);
    }
}
/**
 * Unmount a virtual node from the tree and apply DOM changes
 * @param {VNode} vnode The virtual node to unmount
 * @param {VNode} parentVNode The parent of the VNode that initiated the unmount
 * @param {boolean} [skipRemove] Flag that indicates that a parent node of the
 * current element is already detached from the DOM.
 */ function unmount(vnode, parentVNode, skipRemove) {
    var r;
    if (options.unmount) options.unmount(vnode);
    if (r = vnode.ref) {
        if (!r.current || r.current === vnode.__e) applyRef(r, null, parentVNode);
    }
    if ((r = vnode.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (e) {
            options.__e(e, parentVNode);
        }
        r.base = r.__P = null;
    }
    if (r = vnode.__k) {
        for(var i = 0; i < r.length; i++)if (r[i]) unmount(r[i], parentVNode, skipRemove || typeof vnode.type != 'function');
    }
    if (!skipRemove) removeNode(vnode.__e);
    // Must be set to `undefined` to properly clean up `_nextDom`
    // for which `null` is a valid value. See comment in `create-element.js`
    vnode.__c = vnode.__ = vnode.__e = vnode.__d = undefined;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/**
 * Render a Preact virtual node into a DOM element
 * @param {ComponentChild} vnode The virtual node to render
 * @param {PreactElement} parentDom The DOM element to render into
 * @param {PreactElement | object} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */ function render(vnode, parentDom, replaceNode) {
    if (options.__) options.__(vnode, parentDom);
    // We abuse the `replaceNode` parameter in `hydrate()` to signal if we are in
    // hydration mode or not by passing the `hydrate` function instead of a DOM
    // element..
    var isHydrating = typeof replaceNode == 'function';
    // To be able to support calling `render()` multiple times on the same
    // DOM node, we need to obtain a reference to the previous tree. We do
    // this by assigning a new `_children` property to DOM nodes which points
    // to the last rendered tree. By default this property is not present, which
    // means that we are mounting a new tree for the first time.
    var oldVNode = isHydrating ? null : replaceNode && replaceNode.__k || parentDom.__k;
    vnode = (!isHydrating && replaceNode || parentDom).__k = createElement(Fragment, null, [
        vnode
    ]);
    // List of effects that need to be called after diffing.
    var commitQueue = [], refQueue = [];
    diff(parentDom, // our custom `_children` property.
    vnode, oldVNode || EMPTY_OBJ, EMPTY_OBJ, parentDom.namespaceURI, !isHydrating && replaceNode ? [
        replaceNode
    ] : oldVNode ? null : parentDom.firstChild ? slice.call(parentDom.childNodes) : null, commitQueue, !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode.__e : parentDom.firstChild, isHydrating, refQueue);
    // Flush all queued effects
    commitRoot(commitQueue, vnode, refQueue);
}
/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {ComponentChild} vnode The virtual node to render
 * @param {PreactElement} parentDom The DOM element to update
 */ function hydrate(vnode, parentDom) {
    render(vnode, parentDom, hydrate);
}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {VNode} vnode The virtual DOM element to clone
 * @param {object} props Attributes/props to add when cloning
 * @param {Array<ComponentChildren>} rest Any additional arguments will be used
 * as replacement children.
 * @returns {VNode}
 */ function cloneElement(vnode, props, children) {
    var normalizedProps = assign({}, vnode.props), key, ref, i;
    var defaultProps;
    if (vnode.type && vnode.type.defaultProps) defaultProps = vnode.type.defaultProps;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else if (props[i] === undefined && defaultProps !== undefined) normalizedProps[i] = defaultProps[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    return createVNode(vnode.type, normalizedProps, key || vnode.key, ref || vnode.ref, null);
}
var i = 0;
function createContext(defaultValue, contextId) {
    contextId = '__cC' + i++;
    var context = {
        __c: contextId,
        __: defaultValue,
        /** @type {FunctionComponent} */ Consumer: function Consumer(props, contextValue) {
            // return props.children(
            // 	context[contextId] ? context[contextId].props.value : defaultValue
            // );
            return props.children(contextValue);
        },
        /** @type {FunctionComponent} */ Provider: function Provider(props) {
            if (!this.getChildContext) {
                /** @type {Component[] | null} */ var subs = [];
                var ctx = {};
                ctx[contextId] = this;
                this.getChildContext = function() {
                    return ctx;
                };
                this.componentWillUnmount = function() {
                    subs = null;
                };
                this.shouldComponentUpdate = function(_props) {
                    if (this.props.value !== _props.value) subs.some(function(c) {
                        c.__e = true;
                        enqueueRender(c);
                    });
                };
                this.sub = function(c) {
                    subs.push(c);
                    var old = c.componentWillUnmount;
                    c.componentWillUnmount = function() {
                        if (subs) subs.splice(subs.indexOf(c), 1);
                        if (old) old.call(c);
                    };
                };
            }
            return props.children;
        }
    };
    // Devtools needs access to the context object when it
    // encounters a Provider. This is necessary to support
    // setting `displayName` on the context object instead
    // of on the component itself. See:
    // https://reactjs.org/docs/context.html#contextdisplayname
    return context.Provider.__ = context.Consumer.contextType = context;
}
 //# sourceMappingURL=preact.module.js.map


}),
"(react:background)/./node_modules/preact/hooks/dist/hooks.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (useCallback),
  useContext: () => (useContext),
  useDebugValue: () => (useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (useErrorBoundary),
  useId: () => (useId),
  useImperativeHandle: () => (useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (useMemo),
  useReducer: () => (useReducer),
  useRef: () => (useRef),
  useState: () => (useState)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");

/** @type {number} */ var currentIndex;
/** @type {import('./internal').Component} */ var currentComponent;
/** @type {import('./internal').Component} */ var previousComponent;
/** @type {number} */ var currentHook = 0;
/** @type {Array<import('./internal').Component>} */ var afterPaintEffects = [];
// Cast to use internal Options type
var options = /** @type {import('./internal').Options} */ preact__WEBPACK_IMPORTED_MODULE_0__.options;
var oldBeforeDiff = options.__b;
var oldBeforeRender = options.__r;
var oldAfterDiff = options.diffed;
var oldCommit = options.__c;
var oldBeforeUnmount = options.unmount;
var oldRoot = options.__;
var RAF_TIMEOUT = 100;
var prevRaf;
/** @type {(vnode: import('./internal').VNode) => void} */ options.__b = function(vnode) {
    currentComponent = null;
    if (oldBeforeDiff) oldBeforeDiff(vnode);
};
options.__ = function(vnode, parentDom) {
    if (vnode && parentDom.__k && parentDom.__k.__m) vnode.__m = parentDom.__k.__m;
    if (oldRoot) oldRoot(vnode, parentDom);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.__r = function(vnode) {
    if (oldBeforeRender) oldBeforeRender(vnode);
    currentComponent = vnode.__c;
    currentIndex = 0;
    var hooks = currentComponent.__H;
    if (hooks) {
        if (previousComponent === currentComponent) {
            hooks.__h = [];
            currentComponent.__h = [];
            hooks.__.forEach(function(hookItem) {
                if (hookItem.__N) hookItem.__ = hookItem.__N;
                hookItem._pendingArgs = hookItem.__N = undefined;
            });
        } else {
            hooks.__h.forEach(invokeCleanup);
            hooks.__h.forEach(invokeEffect);
            hooks.__h = [];
            currentIndex = 0;
        }
    }
    previousComponent = currentComponent;
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.diffed = function(vnode) {
    if (oldAfterDiff) oldAfterDiff(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        if (c.__H.__h.length) afterPaint(afterPaintEffects.push(c));
        c.__H.__.forEach(function(hookItem) {
            if (hookItem._pendingArgs) hookItem.__H = hookItem._pendingArgs;
            hookItem._pendingArgs = undefined;
        });
    }
    previousComponent = currentComponent = null;
};
// TODO: Improve typing of commitQueue parameter
/** @type {(vnode: import('./internal').VNode, commitQueue: any) => void} */ options.__c = function(vnode, commitQueue) {
    commitQueue.some(function(component) {
        try {
            component.__h.forEach(invokeCleanup);
            component.__h = component.__h.filter(function(cb) {
                return cb.__ ? invokeEffect(cb) : true;
            });
        } catch (e) {
            commitQueue.some(function(c) {
                if (c.__h) c.__h = [];
            });
            commitQueue = [];
            options.__e(e, component.__v);
        }
    });
    if (oldCommit) oldCommit(vnode, commitQueue);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.unmount = function(vnode) {
    if (oldBeforeUnmount) oldBeforeUnmount(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        var hasErrored;
        c.__H.__.forEach(function(s) {
            try {
                invokeCleanup(s);
            } catch (e) {
                hasErrored = e;
            }
        });
        c.__H = undefined;
        if (hasErrored) options.__e(hasErrored, c.__v);
    }
};
/**
 * Get a hook's state from the currentComponent
 * @param {number} index The index of the hook to get
 * @param {number} type The index of the hook to get
 * @returns {any}
 */ function getHookState(index, type) {
    if (options.__h) options.__h(currentComponent, index, currentHook || type);
    currentHook = 0;
    // Largely inspired by:
    // * https://github.com/michael-klein/funcy.js/blob/f6be73468e6ec46b0ff5aa3cc4c9baf72a29025a/src/hooks/core_hooks.mjs
    // * https://github.com/michael-klein/funcy.js/blob/650beaa58c43c33a74820a3c98b3c7079cf2e333/src/renderer.mjs
    // Other implementations to look at:
    // * https://codesandbox.io/s/mnox05qp8
    var hooks = currentComponent.__H || (currentComponent.__H = {
        __: [],
        __h: []
    });
    if (index >= hooks.__.length) hooks.__.push({});
    return hooks.__[index];
}
/**
 * @template {unknown} S
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} [initialState]
 * @returns {[S, (state: S) => void]}
 */ function useState(initialState) {
    currentHook = 1;
    return useReducer(invokeOrReturn, initialState);
}
/**
 * @template {unknown} S
 * @template {unknown} A
 * @param {import('./index').Reducer<S, A>} reducer
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} initialState
 * @param {(initialState: any) => void} [init]
 * @returns {[ S, (state: S) => void ]}
 */ function useReducer(reducer, initialState, init) {
    /** @type {import('./internal').ReducerHookState} */ var hookState = getHookState(currentIndex++, 2);
    hookState._reducer = reducer;
    if (!hookState.__c) {
        hookState.__ = [
            !init ? invokeOrReturn(undefined, initialState) : init(initialState),
            function(action) {
                var currentValue = hookState.__N ? hookState.__N[0] : hookState.__[0];
                var nextValue = hookState._reducer(currentValue, action);
                if (currentValue !== nextValue) {
                    hookState.__N = [
                        nextValue,
                        hookState.__[1]
                    ];
                    hookState.__c.setState({});
                }
            }
        ];
        hookState.__c = currentComponent;
        if (!currentComponent._hasScuFromHooks) {
            // This SCU has the purpose of bailing out after repeated updates
            // to stateful hooks.
            // we store the next value in _nextValue[0] and keep doing that for all
            // state setters, if we have next states and
            // all next states within a component end up being equal to their original state
            // we are safe to bail out for this specific component.
            /**
       *
       * @type {import('./internal').Component["shouldComponentUpdate"]}
       */ // @ts-ignore - We don't use TS to downtranspile
            // eslint-disable-next-line no-inner-declarations
            var updateHookState = function updateHookState(p, s, c) {
                if (!hookState.__c.__H) return true;
                /** @type {(x: import('./internal').HookState) => x is import('./internal').ReducerHookState} */ var isStateHook = function isStateHook(x) {
                    return !!x.__c;
                };
                var stateHooks = hookState.__c.__H.__.filter(isStateHook);
                var allHooksEmpty = stateHooks.every(function(x) {
                    return !x.__N;
                });
                // When we have no updated hooks in the component we invoke the previous SCU or
                // traverse the VDOM tree further.
                if (allHooksEmpty) return prevScu ? prevScu.call(this, p, s, c) : true;
                // We check whether we have components with a nextValue set that
                // have values that aren't equal to one another this pushes
                // us to update further down the tree
                var shouldUpdate = false;
                stateHooks.forEach(function(hookItem) {
                    if (hookItem.__N) {
                        var currentValue = hookItem.__[0];
                        hookItem.__ = hookItem.__N;
                        hookItem.__N = undefined;
                        if (currentValue !== hookItem.__[0]) shouldUpdate = true;
                    }
                });
                return shouldUpdate || hookState.__c.props !== p ? prevScu ? prevScu.call(this, p, s, c) : true : false;
            };
            currentComponent._hasScuFromHooks = true;
            var prevScu = currentComponent.shouldComponentUpdate;
            var prevCWU = currentComponent.componentWillUpdate;
            // If we're dealing with a forced update `shouldComponentUpdate` will
            // not be called. But we use that to update the hook values, so we
            // need to call it.
            currentComponent.componentWillUpdate = function(p, s, c) {
                if (this.__e) {
                    var tmp = prevScu;
                    // Clear to avoid other sCU hooks from being called
                    prevScu = undefined;
                    updateHookState(p, s, c);
                    prevScu = tmp;
                }
                if (prevCWU) prevCWU.call(this, p, s, c);
            };
            currentComponent.shouldComponentUpdate = updateHookState;
        }
    }
    return hookState.__N || hookState.__;
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 3);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__H.__h.push(state);
    }
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useLayoutEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 4);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__h.push(state);
    }
}
/** @type {(initialValue: unknown) => unknown} */ function useRef(initialValue) {
    currentHook = 5;
    return useMemo(function() {
        return {
            current: initialValue
        };
    }, []);
}
/**
 * @param {object} ref
 * @param {() => object} createHandle
 * @param {unknown[]} args
 * @returns {void}
 */ function useImperativeHandle(ref, createHandle, args) {
    currentHook = 6;
    useLayoutEffect(function() {
        if (typeof ref == 'function') {
            ref(createHandle());
            return function() {
                return ref(null);
            };
        } else if (ref) {
            ref.current = createHandle();
            return function() {
                return ref.current = null;
            };
        }
    }, args == null ? args : args.concat(ref));
}
/**
 * @template {unknown} T
 * @param {() => T} factory
 * @param {unknown[]} args
 * @returns {T}
 */ function useMemo(factory, args) {
    /** @type {import('./internal').MemoHookState<T>} */ var state = getHookState(currentIndex++, 7);
    if (argsChanged(state.__H, args)) {
        state.__ = factory();
        state.__H = args;
        state.__h = factory;
    }
    return state.__;
}
/**
 * @param {() => void} callback
 * @param {unknown[]} args
 * @returns {() => void}
 */ function useCallback(callback, args) {
    currentHook = 8;
    return useMemo(function() {
        return callback;
    }, args);
}
/**
 * @param {import('./internal').PreactContext} context
 */ function useContext(context) {
    var provider = currentComponent.context[context.__c];
    // We could skip this call here, but than we'd not call
    // `options._hook`. We need to do that in order to make
    // the devtools aware of this hook.
    /** @type {import('./internal').ContextHookState} */ var state = getHookState(currentIndex++, 9);
    // The devtools needs access to the context object to
    // be able to pull of the default value when no provider
    // is present in the tree.
    state.c = context;
    if (!provider) return context.__;
    // This is probably not safe to convert to "!"
    if (state.__ == null) {
        state.__ = true;
        provider.sub(currentComponent);
    }
    return provider.props.value;
}
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, cb?: (value: T) => string | number) => void}
 */ function useDebugValue(value, formatter) {
    if (options.useDebugValue) options.useDebugValue(formatter ? formatter(value) : /** @type {any}*/ value);
}
/**
 * @param {(error: unknown, errorInfo: import('preact').ErrorInfo) => void} cb
 * @returns {[unknown, () => void]}
 */ function useErrorBoundary(cb) {
    /** @type {import('./internal').ErrorBoundaryHookState} */ var state = getHookState(currentIndex++, 10);
    var errState = useState();
    state.__ = cb;
    if (!currentComponent.componentDidCatch) currentComponent.componentDidCatch = function(err, errorInfo) {
        if (state.__) state.__(err, errorInfo);
        errState[1](err);
    };
    return [
        errState[0],
        function() {
            errState[1](undefined);
        }
    ];
}
/** @type {() => string} */ function useId() {
    /** @type {import('./internal').IdHookState} */ var state = getHookState(currentIndex++, 11);
    if (!state.__) {
        // Grab either the root node or the nearest async boundary node.
        /** @type {import('./internal.d').VNode} */ var root = currentComponent.__v;
        while(root !== null && !root.__m && root.__ !== null)root = root.__;
        var mask = root.__m || (root.__m = [
            0,
            0
        ]);
        state.__ = 'P' + mask[0] + '-' + mask[1]++;
    }
    return state.__;
}
/**
 * After paint effects consumer.
 */ function flushAfterPaintEffects() {
    var component;
    while(component = afterPaintEffects.shift()){
        if (!component.__P || !component.__H) continue;
        try {
            component.__H.__h.forEach(invokeCleanup);
            component.__H.__h.forEach(invokeEffect);
            component.__H.__h = [];
        } catch (e) {
            component.__H.__h = [];
            options.__e(e, component.__v);
        }
    }
}
var HAS_RAF = typeof requestAnimationFrame == 'function';
/**
 * Schedule a callback to be invoked after the browser has a chance to paint a new frame.
 * Do this by combining requestAnimationFrame (rAF) + setTimeout to invoke a callback after
 * the next browser frame.
 *
 * Also, schedule a timeout in parallel to the the rAF to ensure the callback is invoked
 * even if RAF doesn't fire (for example if the browser tab is not visible)
 *
 * @param {() => void} callback
 */ function afterNextFrame(callback) {
    var done = function done() {
        clearTimeout(timeout);
        if (HAS_RAF) cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    var timeout = setTimeout(done, RAF_TIMEOUT);
    var raf;
    if (HAS_RAF) raf = requestAnimationFrame(done);
}
// Note: if someone used options.debounceRendering = requestAnimationFrame,
// then effects will ALWAYS run on the NEXT frame instead of the current one, incurring a ~16ms delay.
// Perhaps this is not such a big deal.
/**
 * Schedule afterPaintEffects flush after the browser paints
 * @param {number} newQueueLength
 * @returns {void}
 */ function afterPaint(newQueueLength) {
    if (newQueueLength === 1 || prevRaf !== options.requestAnimationFrame) {
        prevRaf = options.requestAnimationFrame;
        (prevRaf || afterNextFrame)(flushAfterPaintEffects);
    }
}
/**
 * @param {import('./internal').HookState} hook
 * @returns {void}
 */ function invokeCleanup(hook) {
    // A hook cleanup can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    var cleanup = hook.__c;
    if (typeof cleanup == 'function') {
        hook.__c = undefined;
        cleanup();
    }
    currentComponent = comp;
}
/**
 * Invoke a Hook's effect
 * @param {import('./internal').EffectHookState} hook
 * @returns {void}
 */ function invokeEffect(hook) {
    // A hook call can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    hook.__c = hook.__();
    currentComponent = comp;
}
/**
 * @param {unknown[]} oldArgs
 * @param {unknown[]} newArgs
 * @returns {boolean}
 */ function argsChanged(oldArgs, newArgs) {
    return !oldArgs || oldArgs.length !== newArgs.length || newArgs.some(function(arg, index) {
        return arg !== oldArgs[index];
    });
}
/**
 * @template Arg
 * @param {Arg} arg
 * @param {(arg: Arg) => any} f
 * @returns {any}
 */ function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
 //# sourceMappingURL=hooks.module.js.map


}),
"(react:background)/./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  jsx: () => (createVNode),
  jsxAttr: () => (jsxAttr),
  jsxDEV: () => (createVNode),
  jsxEscape: () => (jsxEscape),
  jsxTemplate: () => (jsxTemplate),
  jsxs: () => (createVNode)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");


var ENCODED_ENTITIES = /["&<]/;
/** @param {string} str */ function encodeEntities(str) {
    // Skip all work for strings with no entities needing encoding:
    if (str.length === 0 || ENCODED_ENTITIES.test(str) === false) return str;
    var last = 0, i = 0, out = '', ch = '';
    // Seek forward in str until the next entity char:
    for(; i < str.length; i++){
        switch(str.charCodeAt(i)){
            case 34:
                ch = '&quot;';
                break;
            case 38:
                ch = '&amp;';
                break;
            case 60:
                ch = '&lt;';
                break;
            default:
                continue;
        }
        // Append skipped/buffered characters and the encoded entity:
        if (i !== last) out += str.slice(last, i);
        out += ch;
        // Start the next seek/buffer after the entity's offset:
        last = i + 1;
    }
    if (i !== last) out += str.slice(last, i);
    return out;
}
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var vnodeId = 0;
var isArray = Array.isArray;
/**
 * @fileoverview
 * This file exports various methods that implement Babel's "automatic" JSX runtime API:
 * - jsx(type, props, key)
 * - jsxs(type, props, key)
 * - jsxDEV(type, props, key, __source, __self)
 *
 * The implementation of createVNode here is optimized for performance.
 * Benchmarks: https://esbench.com/bench/5f6b54a0b4632100a7dcd2b3
 */ /**
 * JSX.Element factory used by Babel's {runtime:"automatic"} JSX transform
 * @param {VNode['type']} type
 * @param {VNode['props']} props
 * @param {VNode['key']} [key]
 * @param {unknown} [isStaticChildren]
 * @param {unknown} [__source]
 * @param {unknown} [__self]
 */ function createVNode(type, props, key, isStaticChildren, __source, __self) {
    if (!props) props = {};
    // We'll want to preserve `ref` in props to get rid of the need for
    // forwardRef components in the future, but that should happen via
    // a separate PR.
    var normalizedProps = props, ref, i;
    if ('ref' in normalizedProps) {
        normalizedProps = {};
        for(i in props)if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    /** @type {VNode & { __source: any; __self: any }} */ var vnode = {
        type: type,
        props: normalizedProps,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: undefined,
        __c: null,
        constructor: undefined,
        __v: --vnodeId,
        __i: -1,
        __u: 0,
        __source: __source,
        __self: __self
    };
    // If a Component VNode, check for and apply defaultProps.
    // Note: `type` is often a String, and can be `undefined` in development.
    if (typeof type === 'function' && (ref = type.defaultProps)) {
        for(i in ref)if (typeof normalizedProps[i] === 'undefined') normalizedProps[i] = ref[i];
    }
    if (preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode) preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(vnode);
    return vnode;
}
/**
 * Create a template vnode. This function is not expected to be
 * used directly, but rather through a precompile JSX transform
 * @param {string[]} templates
 * @param  {Array<string | null | VNode>} exprs
 * @returns {VNode}
 */ function jsxTemplate(templates) {
    var vnode = createVNode(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        tpl: templates,
        exprs: [].slice.call(arguments, 1)
    });
    // Bypass render to string top level Fragment optimization
    vnode.key = vnode.__v;
    return vnode;
}
var JS_TO_CSS = {};
var CSS_REGEX = /[A-Z]/g;
/**
 * Serialize an HTML attribute to a string. This function is not
 * expected to be used directly, but rather through a precompile
 * JSX transform
 * @param {string} name The attribute name
 * @param {*} value The attribute value
 * @returns {string}
 */ function jsxAttr(name, value) {
    if (preact__WEBPACK_IMPORTED_MODULE_0__.options.attr) {
        var result = preact__WEBPACK_IMPORTED_MODULE_0__.options.attr(name, value);
        if (typeof result === 'string') return result;
    }
    if (name === 'ref' || name === 'key') return '';
    if (name === 'style' && typeof value === 'object') {
        var str = '';
        for(var prop in value){
            var val = value[prop];
            if (val != null && val !== '') {
                var _name = prop[0] == '-' ? prop : JS_TO_CSS[prop] || (JS_TO_CSS[prop] = prop.replace(CSS_REGEX, '-$&').toLowerCase());
                var suffix = ';';
                if (typeof val === 'number' && // Exclude custom-attributes
                !_name.startsWith('--') && !IS_NON_DIMENSIONAL.test(_name)) suffix = 'px;';
                str = str + _name + ':' + val + suffix;
            }
        }
        return name + '="' + str + '"';
    }
    if (value == null || value === false || typeof value === 'function' || typeof value === 'object') return '';
    else if (value === true) return name;
    return name + '="' + encodeEntities(value) + '"';
}
/**
 * Escape a dynamic child passed to `jsxTemplate`. This function
 * is not expected to be used directly, but rather through a
 * precompile JSX transform
 * @param {*} value
 * @returns {string | null | VNode | Array<string | null | VNode>}
 */ function jsxEscape(value) {
    if (value == null || typeof value === 'boolean' || typeof value === 'function') return null;
    if (typeof value === 'object') {
        // Check for VNode
        if (value.constructor === undefined) return value;
        if (isArray(value)) {
            for(var i = 0; i < value.length; i++)value[i] = jsxEscape(value[i]);
            return value;
        }
    }
    return encodeEntities('' + value);
}
 //# sourceMappingURL=jsxRuntime.module.js.map


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
try {

var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
module = execOptions.module;
if (!execOptions.factory) {
  console.error("undefined factory", moduleId)
}
execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

} catch (e) {
module.error = e;
throw e;
}
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = (module) => {
  module = Object.create(module);
  if (!module.children) module.children = [];
  Object.defineProperty(module, 'exports', {
      enumerable: true,
      set: () => {
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      }
  });
  return module;
};
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("7c39925dcabe22b1")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "main." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus; 
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	} 
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}
// @ts-nocheck
__webpack_require__.i.push(function(options) {
  if (
    // This means this is in main-thread
    !globalThis.__PREFRESH__
    // Loading a module of background layer in main-thread, we replace the layer with the main-thread.
    && options.id.includes('(react:background)')
  ) {
    // We may serialize the snapshot from background to main-thread.
    // The `(react:background)` layer in the module id cannot be found in the main-thread.
    // Thus we replace it here to make HMR work.
    //
    // Maybe it is better to run chunk loading on main thread.
    options.id = options.id.replace(
      `(react:background)`, // This is replaced by ReactRefreshWebpackPlugin
      '(react:main-thread)', // This is replaced by ReactRefreshWebpackPlugin
    );
    const factory = __webpack_modules__[options.id];
    if (factory) {
      options.factory = factory;
    }
    return;
  }
  var originalFactory = options.factory;
  options.factory = function(moduleObject, moduleExports, webpackRequire) {
    var prevRefreshReg = globalThis.$RefreshReg$;
    var prevRefreshSig = globalThis.$RefreshSig$;
    globalThis.$RefreshSig$ = function() {
      var status = 'begin';
      var savedType;

      return function(type, key, forceReset, getCustomHooks) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        // TODO(wangqingyu): Replace globalThis.__PREFRESH__ with lynx.__PREFRESH__
        if (!globalThis.__PREFRESH__) {
          return type;
        }
        if (!savedType) savedType = type;

        status = globalThis.__PREFRESH__.sign(
          type || savedType,
          key,
          forceReset,
          getCustomHooks,
          status,
        );
        return type;
      };
    };
    var reg = function(currentModuleId) {
      globalThis.$RefreshReg$ = function(type, id) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        if (globalThis.__PREFRESH__) {
          globalThis.__PREFRESH__.register(type, currentModuleId + ' ' + id);
        }
      };
    };
    reg();
    try {
      originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
    } finally {
      globalThis.$RefreshReg$ = prevRefreshReg;
      globalThis.$RefreshSig$ = prevRefreshSig;
    }
  };
});

// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
  globalThis.$RefreshReg$ = function () {};
  globalThis.$RefreshSig$ = function () {
    return function(type) {
      return type;
    };
  };
}
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.css.hot-update.json"]];

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "http://192.168.11.20:3000/";
})();
// webpack/runtime/Lynx async chunks
(() => {
// lynx async chunks ids
__webpack_require__.lynx_aci = {}
})();
// webpack/runtime/Lynx chunk loading
(() => {
// object to store loaded chunks
// "1" means "loaded", otherwise not loaded yet
var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
	"main": 1
};
// no on chunks loaded
// no chunk install function needed
// no chunk loading

    function loadUpdateChunk(chunkId, updatedModulesList) {
        return new Promise((resolve, reject) => {
            lynx.requireModuleAsync(__webpack_require__.p
                + __webpack_require__.hu(chunkId), (err, update) => {
                if (err) {
                    reject(err);
                    return;
                }
                var updatedModules = update.modules;
                var runtime = update.runtime;
                for (var moduleId in updatedModules) {
                    if (__webpack_require__.o(updatedModules, moduleId)) {
                        currentUpdate[moduleId] = updatedModules[moduleId];
                        if (updatedModulesList)
                            updatedModulesList.push(moduleId);
                    }
                }
                if (runtime)
                    currentUpdateRuntime.push(runtime);
                resolve();
            });
        });
    }

    var currentUpdateChunks;
    var currentUpdate;
    var currentUpdateRemovedChunks;
    var currentUpdateRuntime;
    function applyHandler(options) {
        if (__webpack_require__.f) {
            delete __webpack_require__.f.requireHmr;
        }
        currentUpdateChunks = undefined;
        function getAffectedModuleEffects(updateModuleId) {
            var outdatedModules = [updateModuleId];
            var outdatedDependencies = {};
            var queue = outdatedModules.map(function (id) {
                return {
                    chain: [id],
                    id: id,
                };
            });
            while (queue.length > 0) {
                var queueItem = queue.pop();
                var moduleId = queueItem.id;
                var chain = queueItem.chain;
                var module = __webpack_require__.c[moduleId];
                if (!module
                    || (module.hot._selfAccepted && !module.hot._selfInvalidated)) {
                    continue;
                }
                if (module.hot._selfDeclined) {
                    return {
                        type: 'self-declined',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                if (module.hot._main) {
                    return {
                        type: 'unaccepted',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                for (var i = 0; i < module.parents.length; i++) {
                    var parentId = module.parents[i];
                    var parent = __webpack_require__.c[parentId];
                    if (!parent)
                        continue;
                    if (parent.hot._declinedDependencies[moduleId]) {
                        return {
                            type: 'declined',
                            chain: chain.concat([parentId]),
                            moduleId: moduleId,
                            parentId: parentId,
                        };
                    }
                    if (outdatedModules.indexOf(parentId) !== -1)
                        continue;
                    if (parent.hot._acceptedDependencies[moduleId]) {
                        if (!outdatedDependencies[parentId]) {
                            outdatedDependencies[parentId] = [];
                        }
                        addAllToSet(outdatedDependencies[parentId], [moduleId]);
                        continue;
                    }
                    delete outdatedDependencies[parentId];
                    outdatedModules.push(parentId);
                    queue.push({
                        chain: chain.concat([parentId]),
                        id: parentId,
                    });
                }
            }
            return {
                type: 'accepted',
                moduleId: updateModuleId,
                outdatedModules: outdatedModules,
                outdatedDependencies: outdatedDependencies,
            };
        }
        function addAllToSet(a, b) {
            for (var i = 0; i < b.length; i++) {
                var item = b[i];
                if (a.indexOf(item) === -1)
                    a.push(item);
            }
        }
        // at begin all updates modules are outdated
        // the "outdated" status can propagate to parents if they don't accept the children
        var outdatedDependencies = {};
        var outdatedModules = [];
        var appliedUpdate = {};
        var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
            console.warn('[HMR] unexpected require(' + module.id + ') to disposed module');
        };
        for (var moduleId in currentUpdate) {
            if (__webpack_require__.o(currentUpdate, moduleId)) {
                var newModuleFactory = currentUpdate[moduleId];
                /** @type {TODO} */
                var result;
                if (newModuleFactory) {
                    result = getAffectedModuleEffects(moduleId);
                }
                else {
                    result = {
                        type: 'disposed',
                        moduleId: moduleId,
                    };
                }
                /** @type {Error|false} */
                var abortError = false;
                var doApply = false;
                var doDispose = false;
                var chainInfo = '';
                if (result.chain) {
                    chainInfo = '\nUpdate propagation: ' + result.chain.join(' -> ');
                }
                switch (result.type) {
                    case 'self-declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of self decline: '
                                + result.moduleId
                                + chainInfo);
                        }
                        break;
                    case 'declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of declined dependency: '
                                + result.moduleId
                                + ' in '
                                + result.parentId
                                + chainInfo);
                        }
                        break;
                    case 'unaccepted':
                        if (options.onUnaccepted)
                            options.onUnaccepted(result);
                        if (!options.ignoreUnaccepted) {
                            abortError = new Error('Aborted because ' + moduleId + ' is not accepted' + chainInfo);
                        }
                        break;
                    case 'accepted':
                        if (options.onAccepted)
                            options.onAccepted(result);
                        doApply = true;
                        break;
                    case 'disposed':
                        if (options.onDisposed)
                            options.onDisposed(result);
                        doDispose = true;
                        break;
                    default:
                        throw new Error('Un-exception type ' + result.type);
                }
                if (abortError) {
                    return {
                        error: abortError,
                    };
                }
                if (doApply) {
                    appliedUpdate[moduleId] = newModuleFactory;
                    addAllToSet(outdatedModules, result.outdatedModules);
                    for (moduleId in result.outdatedDependencies) {
                        if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
                            if (!outdatedDependencies[moduleId]) {
                                outdatedDependencies[moduleId] = [];
                            }
                            addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
                        }
                    }
                }
                if (doDispose) {
                    addAllToSet(outdatedModules, [result.moduleId]);
                    appliedUpdate[moduleId] = warnUnexpectedRequire;
                }
            }
        }
        currentUpdate = undefined;
        // Store self accepted outdated modules to require them later by the module system
        var outdatedSelfAcceptedModules = [];
        for (var j = 0; j < outdatedModules.length; j++) {
            var outdatedModuleId = outdatedModules[j];
            var module = __webpack_require__.c[outdatedModuleId];
            if (module
                && (module.hot._selfAccepted || module.hot._main)
                // removed self-accepted modules should not be required
                && appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire
                // when called invalidate self-accepting is not possible
                && !module.hot._selfInvalidated) {
                outdatedSelfAcceptedModules.push({
                    module: outdatedModuleId,
                    require: module.hot._requireSelf,
                    errorHandler: module.hot._selfAccepted,
                });
            }
        }
        var moduleOutdatedDependencies;
        return {
            dispose: function () {
                currentUpdateRemovedChunks.forEach(function (chunkId) {
                    delete installedChunks[chunkId];
                });
                currentUpdateRemovedChunks = undefined;
                var idx;
                var queue = outdatedModules.slice();
                while (queue.length > 0) {
                    var moduleId = queue.pop();
                    var module = __webpack_require__.c[moduleId];
                    if (!module)
                        continue;
                    var data = {};
                    // Call dispose handlers
                    var disposeHandlers = module.hot._disposeHandlers;
                    for (j = 0; j < disposeHandlers.length; j++) {
                        disposeHandlers[j].call(null, data);
                    }
                    __webpack_require__.hmrD[moduleId] = data;
                    // disable module (this disables requires from this module)
                    module.hot.active = false;
                    // remove module from cache
                    delete __webpack_require__.c[moduleId];
                    // when disposing there is no need to call dispose handler
                    delete outdatedDependencies[moduleId];
                    // remove "parents" references from all children
                    for (j = 0; j < module.children.length; j++) {
                        var child = __webpack_require__.c[module.children[j]];
                        if (!child)
                            continue;
                        idx = child.parents.indexOf(moduleId);
                        if (idx >= 0) {
                            child.parents.splice(idx, 1);
                        }
                    }
                }
                // remove outdated dependency from module children
                var dependency;
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            for (j = 0; j < moduleOutdatedDependencies.length; j++) {
                                dependency = moduleOutdatedDependencies[j];
                                idx = module.children.indexOf(dependency);
                                if (idx >= 0)
                                    module.children.splice(idx, 1);
                            }
                        }
                    }
                }
            },
            apply: function (reportError) {
                // insert new code
                for (var updateModuleId in appliedUpdate) {
                    if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
                        __webpack_require__.m[updateModuleId] =
                            appliedUpdate[updateModuleId];
                    }
                }
                // run new runtime modules
                for (var i = 0; i < currentUpdateRuntime.length; i++) {
                    currentUpdateRuntime[i](__webpack_require__);
                }
                // call accept handlers
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        var module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            var callbacks = [];
                            var errorHandlers = [];
                            var dependenciesForCallbacks = [];
                            for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
                                var dependency = moduleOutdatedDependencies[j];
                                var acceptCallback = module.hot._acceptedDependencies[dependency];
                                var errorHandler = module.hot._acceptedErrorHandlers[dependency];
                                if (acceptCallback) {
                                    if (callbacks.indexOf(acceptCallback) !== -1)
                                        continue;
                                    callbacks.push(acceptCallback);
                                    errorHandlers.push(errorHandler);
                                    dependenciesForCallbacks.push(dependency);
                                }
                            }
                            for (var k = 0; k < callbacks.length; k++) {
                                try {
                                    callbacks[k].call(null, moduleOutdatedDependencies);
                                }
                                catch (err) {
                                    if (typeof errorHandlers[k] === 'function') {
                                        try {
                                            errorHandlers[k](err, {
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                            });
                                        }
                                        catch (err2) {
                                            if (options.onErrored) {
                                                options.onErrored({
                                                    type: 'accept-error-handler-errored',
                                                    moduleId: outdatedModuleId,
                                                    dependencyId: dependenciesForCallbacks[k],
                                                    error: err2,
                                                    originalError: err,
                                                });
                                            }
                                            if (!options.ignoreErrored) {
                                                reportError(err2);
                                                reportError(err);
                                            }
                                        }
                                    }
                                    else {
                                        if (options.onErrored) {
                                            options.onErrored({
                                                type: 'accept-errored',
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                                error: err,
                                            });
                                        }
                                        if (!options.ignoreErrored) {
                                            reportError(err);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // Load self accepted modules
                for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
                    var item = outdatedSelfAcceptedModules[o];
                    var moduleId = item.module;
                    try {
                        item.require(moduleId);
                    }
                    catch (err) {
                        if (typeof item.errorHandler === 'function') {
                            try {
                                item.errorHandler(err, {
                                    moduleId: moduleId,
                                    module: __webpack_require__.c[moduleId],
                                });
                            }
                            catch (err2) {
                                if (options.onErrored) {
                                    options.onErrored({
                                        type: 'self-accept-error-handler-errored',
                                        moduleId: moduleId,
                                        error: err2,
                                        originalError: err,
                                    });
                                }
                                if (!options.ignoreErrored) {
                                    reportError(err2);
                                    reportError(err);
                                }
                            }
                        }
                        else {
                            if (options.onErrored) {
                                options.onErrored({
                                    type: 'self-accept-errored',
                                    moduleId: moduleId,
                                    error: err,
                                });
                            }
                            if (!options.ignoreErrored) {
                                reportError(err);
                            }
                        }
                    }
                }
                return outdatedModules;
            },
        };
    }
    __webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
        if (!currentUpdate) {
            currentUpdate = {};
            currentUpdateRuntime = [];
            currentUpdateRemovedChunks = [];
            applyHandlers.push(applyHandler);
        }
        if (!__webpack_require__.o(currentUpdate, moduleId)) {
            currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        }
    };
    __webpack_require__.hmrC.require = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
        applyHandlers.push(applyHandler);
        currentUpdateChunks = {};
        currentUpdateRemovedChunks = removedChunks;
        currentUpdate = removedModules.reduce(function (obj, key) {
            obj[key] = false;
            return obj;
        }, {});
        currentUpdateRuntime = [];
        chunkIds.forEach(function (chunkId) {
            if (__webpack_require__.o(installedChunks, chunkId)
                && installedChunks[chunkId] !== undefined) {
                promises.push(loadUpdateChunk(chunkId, updatedModulesList));
                currentUpdateChunks[chunkId] = true;
            }
            else {
                currentUpdateChunks[chunkId] = false;
            }
        });
        if (__webpack_require__.f) {
            __webpack_require__.f.requireHmr = function (chunkId, promises) {
                if (currentUpdateChunks
                    && __webpack_require__.o(currentUpdateChunks, chunkId)
                    && !currentUpdateChunks[chunkId]) {
                    promises.push(loadUpdateChunk(chunkId));
                    currentUpdateChunks[chunkId] = true;
                }
            };
        }
    };

    __webpack_require__.hmrM = function () {
        return new Promise((resolve, reject) => lynx.requireModuleAsync(__webpack_require__.p
            + __webpack_require__.hmrF(), (err, ret) => {
            if (err)
                return reject(err);
            resolve(ret);
        }))['catch'](function (err) {
            if (err.code !== 'MODULE_NOT_FOUND')
                throw err;
        });
    };
})();
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__("(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js");
__webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/index.js?hostname=192.168.11.20&port=3000&pathname=%2Frsbuild-hmr&hot=true&live-reload=true&protocol=ws&token=216bd38ef393ccdb");
__webpack_require__("(react:background)/./node_modules/@rsbuild/core/node_modules/@rspack/core/hot/dev-server.js");
var __webpack_exports__ = __webpack_require__("(react:background)/./src/index.jsx");


})();
    });
    return tt.require("background.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://192.168.11.20:3000/.rspeedy/main/background.js.map