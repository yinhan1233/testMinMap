!function(A, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (A = "undefined" != typeof globalThis ? globalThis : A || self).PreviewThingJSUI = e()
}(this, (function() {
    "use strict";
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __awaiter$1(A, e, t, n) {
        return new (t || (t = Promise))((function(s, i) {
            function r(A) {
                try {
                    a(n.next(A))
                } catch (A) {
                    i(A)
                }
            }
            function o(A) {
                try {
                    a(n.throw(A))
                } catch (A) {
                    i(A)
                }
            }
            function a(A) {
                console.log('aaaaaa',A);
                console.log('ssss',s);
                var e;
                A.done ? s(A.value) : (e = A.value,
                e instanceof t ? e : new t((function(A) {
                    A(e)
                }
                ))).then(r, o)
            }
            a((n = n.apply(A, e || [])).next())
        }
        ))
    }
    Math.random().toString(36).substr(-8);
    let address = "https://charts.thingjs.com";
    const setAddress = A=>{
        A && (address = A)
    }
    ;
    function loadScript$1(A, e=address) {
        return new Promise((t=>{
            const n = document.createElement("script");
            n.src = (e || address) + A,
            document.head.appendChild(n),
            n.onload = ()=>{
                t(n)
            }
        }
        ))
    }
    const isType$2 = (A,e)=>Object.prototype.toString.call(A).includes(e)
      , axios = (A,e)=>fetch(A, {
        method: e
    }).then((A=>A.text())).then(JSON.parse);
    function requests(A, e="GET", t) {
        const n = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            method: e = e.toUpperCase()
        };
        if (t.header && (n.headers = Object.assign(Object.assign({}, n.headers), JSON.parse(JSON.stringify(t.header)))),
        "GET" === e) {
            if ("object" == typeof t && t.body) {
                const e = JSON.parse(JSON.stringify(t.body))
                  , n = Object.keys(e).map((A=>`${encodeURIComponent(A)}=${encodeURIComponent(e[A])}`)).join("&");
                n && (A += `?${n}`)
            }
        } else
            isType$2(t, "Object") ? t.body && (n.body = JSON.parse(JSON.stringify(t.body))) : n.body = "string" == typeof t ? t : JSON.stringify(t);
        return A = /(http|https):\/\/([\w.]+\/?)\S*/.test(A) ? A : `${address}/${A}`,
        fetch(A, n).then((A=>A.json()))
    }
    const baseType = Math.random().toString(36).substr(-8);
    let baseId = Math.round(100 * Math.random());
    function getUID(A="ui") {
        return A = A + "-" + (baseType + baseId),
        baseId++,
        A
    }
    function getElement(A) {
        return !!A && (A instanceof HTMLElement ? A : document.querySelector(A))
    }
    function createElement(A="div") {
        return document.createElement(A)
    }
    function createElementWithAttr(A="div", e={}, t={}) {
        const n = document.createElement(A);
        A = Object.keys(e);
        var s, i, r = Object.keys(t);
        for (s of A)
            n.style[s] = e[s];
        for (i of r)
            n.dataset[i] = t[i];
        return n
    }
    function mount(A, e, t) {
        var n = "before" === t || "after" === t ? e.el : e.contentEl;
        unmount(A),
        mountElement(A.el, n || e.el, t),
        A._isMounted = !0
    }
    function mountElement(A, e, t) {
        "before" === t ? e.parentNode.insertBefore(A, e) : "after" === t ? (t = e.nextSibling) ? mountElement(A, t, "before") : mountElement(A, e.parentNode) : e.appendChild(A)
    }
    function unmount(A) {
        A.el && A.el.parentNode && A.el.parentNode.removeChild(A.el),
        A._isMounted = !1
    }
    function updateStyle(A) {
        const e = A.style.getDirtyStyleList();
        return e.forEach((e=>{
            A.el.style[e.name] = e.value
        }
        )),
        e
    }
    const LAYOUT_MAP = {
        UI: "UI",
        CANVAS: "Canvas",
        LAYER: "Layer",
        GROUP: "Group",
        CONTAINER: "Container",
        DEFAULTLAYER: "DefaultContainer"
    }
      , defaultConfig = {
        [LAYOUT_MAP.UI]: {
            type: LAYOUT_MAP.UI,
            theme: {
                ui: {
                    background: "#fff"
                },
                mask: {
                    background: "transparent",
                    opacity: 1,
                    defaultContainer: {}
                },
                ruler: {
                    border: "1px solid #000000",
                    color: "#565656",
                    width: 21,
                    lineStyle: {
                        color: "#EAB2B3",
                        activeColor: "#ED9692",
                        width: 1
                    },
                    tick: {
                        textFont: "9px sans-serif",
                        textColor: "#fff",
                        lineWidth: 1,
                        lineColor: "#fff",
                        lineLong: 16,
                        lineShort: 4
                    },
                    iconColor: "#c1c1c1",
                    icon: {
                        color: "#c1c1c1",
                        borderStyle: "solid",
                        borderWidth: "0px 0px 1px 0px",
                        borderColor: "#000000"
                    }
                },
                alignmentLines: {
                    color: "#ff3366",
                    width: 1,
                    distanceStyle: {
                        color: "#CCFF99",
                        width: 1
                    }
                },
                bound: {
                    rectColor: "#007AFF",
                    rectStyle: "solid",
                    handleColor: "#007AFF",
                    labelColor: "#FFFFFF",
                    labelBackground: "#007AFF",
                    container: {},
                    group: {},
                    layer: {},
                    multSelect: {}
                }
            }
        },
        [LAYOUT_MAP.CANVAS]: {
            type: LAYOUT_MAP.CANVAS,
            inStack: !0,
            isLock: !0
        },
        [LAYOUT_MAP.LAYER]: {
            type: LAYOUT_MAP.LAYER,
            inStack: !0,
            isLock: !0
        },
        [LAYOUT_MAP.GROUP]: {
            type: LAYOUT_MAP.GROUP,
            inStack: !0,
            isLock: !1
        },
        [LAYOUT_MAP.CONTAINER]: {
            type: LAYOUT_MAP.CONTAINER,
            inStack: !0,
            isLock: !1
        }
    }
      , defaultOption = {
        [LAYOUT_MAP.CANVAS]: {
            baseOption: {
                style: {
                    position: "relative",
                    width: 1920,
                    height: 1080,
                    backgroundColor: "black",
                    transformOrigin: "0 0"
                }
            }
        },
        [LAYOUT_MAP.LAYER]: {
            baseOption: {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 1e3,
                    height: 1e3
                }
            }
        },
        [LAYOUT_MAP.GROUP]: {
            baseOption: {}
        },
        [LAYOUT_MAP.CONTAINER]: {
            baseOption: {
                penetrateOnplay: !1,
                style: {
                    position: "absolute",
                    top: 30,
                    left: 30,
                    width: 200,
                    height: 200
                }
            }
        }
    }
      , COMMAND_TYPE = {
        MOVE: "Move",
        STYLE: "Style",
        ATTRIBUTE: "Attribute",
        CREATEGROUP: "CreateGroup",
        UNGROUP: "UnGroup",
        UNGRAPHOBJECT: "UnGraphObject",
        CREATEGRAPHOBJECT: "CreateGraphObject",
        UNGRAPGOBJECT: "UnGraphObject",
        DRAG: "Drag",
        ALIGN: "Align",
        ROTATE: "Rotate"
    }
      , CANVAS_SCALE_MODE = {
        SCROLL: 0,
        SCALEALL: 1,
        SCALEWIDTH: 2,
        SCALEHEIGHT: 3
    }
      , CANVAS_MODE = {
        PLAY: 0,
        EDIT: 1
    }
      , MASK_STYLE = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }
      , CURSOR_STYLE = ["ns-resize", "ns-resize", "ew-resize", "ew-resize", "nwse-resize", "nesw-resize", "nesw-resize", "nwse-resize"];
    function confirmArr(A) {
        return Array.isArray(A) && 0 < A.length
    }
    function isType$1(A, e) {
        return Object.prototype.toString.call(A).includes(e)
    }
    function isDef(A) {
        return null != A
    }
    function isUnDef(A) {
        return null == A
    }
    function isNumber(A) {
        return "number" == typeof A && !isNaN(A)
    }
    function hasOwn(A, e) {
        return Reflect.has(A, e)
    }
    function isPlainObject(A) {
        return isType$1(A, "Object")
    }
    function merge(...A) {
        let e = A.shift();
        isPlainObject(e) || (e = {});
        for (const t of A)
            if (isPlainObject(t))
                for (const A in t)
                    t.hasOwnProperty(A) && (e[A] = mergeCore(e[A], clone(t[A])));
        return e
    }
    function mergeCore(A, e) {
        if (!isPlainObject(A) || !isPlainObject(e))
            return e;
        for (const t in e)
            e.hasOwnProperty(t) && (A[t] = mergeCore(A[t], e[t]));
        return A
    }
    function findIndex(A, e) {
        return A.findIndex((A=>A.data === e))
    }
    function find(A, e) {
        for (const t of A)
            if (t.source === e)
                return t;
        return null
    }
    function clone(A, e) {
        if (!isPlainObject(A))
            return A;
        e = e || [];
        const t = Array.isArray(A) ? [] : {};
        var n = find(e, A);
        if (n)
            return n.target;
        e.push({
            source: A,
            target: t
        });
        for (const n in A)
            Object.prototype.hasOwnProperty.call(A, n) && (isPlainObject(A[n]) ? t[n] = clone(A[n], e) : t[n] = A[n]);
        return t
    }
    function getSvg(A, e, t) {
        return isDef(e) && isDef(t) ? `url(data:image/svg+xml;base64,${btoa(decodeURIComponent(encodeURIComponent(A)))}\n    ) ${e} ${t},default` : `url(data:image/svg+xml;base64,${btoa(decodeURIComponent(encodeURIComponent(A)))}\n    )`
    }
    const dateStyle = {
        info: "background:#606060;color:#fff;",
        warn: "background:#E9A400;color:#fff;",
        error: "background:#EC3941;color:#fff;"
    };
    function logStyle(A) {
        return [dateStyle[A], "background:#1375B2;color:#fff;"]
    }
    function date() {
        const A = new Date;
        return A.toLocaleDateString() + " " + A.toLocaleTimeString()
    }
    class Log$1 {
        info(...A) {
            this._recordLog("info", ...A)
        }
        warn(...A) {
            this._recordLog("warn", ...A)
        }
        error(...A) {
            this._recordLog("error", ...A)
        }
        _recordLog(A, ...e) {
            window.console[A](`%c [THING.UI ${A}] %c ${date()} `, ...logStyle(A), ...e)
        }
        memory() {
            var A, e, t, n = performance.memory;
            n && (A = A=>A / 1024 / 1024 + "M",
            ({jsHeapSizeLimit: n, totalJSHeapSize: e, usedJSHeapSize: t} = n),
            console.table({
                max: A(n),
                has: A(e),
                used: A(t)
            }))
        }
    }
    var log = new Log$1;
    const _DISPLAYNAMES = ["ui", "canvass", "layers", "groups", "containers"]
      , displayables = {};
    _DISPLAYNAMES.forEach((A=>{
        displayables[A] = new Set
    }
    ));
    class Data {
        constructor() {
            this.nameMapping = new Map
        }
        add(A) {
            var e = this._getType(A.type);
            displayables[e].add(A),
            this.setName(A)
        }
        _getType(A) {
            return "ui" === (A = A.toLowerCase()) ? A : A + "s"
        }
        remove(A) {
            var e = this._getType(A.type);
            const t = displayables[e];
            if (t.size && (t.has(A) && t.delete(A),
            A.name)) {
                const e = this.getByName(A.name);
                e.splice(e.indexOf(A), 1)
            }
        }
        setName(A) {
            var e = A.name;
            if (e) {
                this.nameMapping.has(e) || this.nameMapping.set(e, []);
                const t = this.nameMapping.get(A.name);
                t.find((e=>e.id === A.id)) || t.push(A)
            }
        }
        clear() {
            this.nameMapping.clear(),
            _DISPLAYNAMES.forEach((A=>{
                displayables[A].clear()
            }
            ))
        }
        getByName(A) {
            return this.nameMapping.get(A)
        }
        getByType(A) {
            return displayables[A]
        }
    }
    class Node$1 {
        constructor(A) {
            this.data = A,
            this.parent = null,
            this.children = []
        }
    }
    const idMapping = new Map;
    class Tree {
        constructor() {
            return this._root = null,
            this.idMapping = idMapping,
            Tree.instance || (Tree.instance = this),
            Tree.instance
        }
        add(A, e) {
            const t = new Node$1(A);
            if (idMapping.set(A.id, t),
            null === this._root)
                this._root = t;
            else {
                const A = this.getNodeById(e.id);
                (t.parent = A).children.push(t)
            }
        }
        remove(A) {
            const e = this.getNodeById(A.parent.id);
            var t = findIndex(e.children, A);
            if (t < 0)
                throw new Error("要删除节点不存在");
            return e.children.splice(t, 1),
            idMapping.delete(A.id),
            !0
        }
        edit(A, e) {
            var t = this.getNodeById(e.parent.id)
              , n = findIndex(t.children, e);
            switch (A) {
            case "prev":
                return n <= 0 ? null : t.children[n - 1];
            case "next":
                return n < 0 || t.children.length === n + 1 ? null : t.children[n + 1];
            default:
                throw new Error("此操作无效")
            }
        }
        move(A, e, t) {
            const n = this.getNodeById(e.parent.id);
            let s = null;
            const i = this.getNodeById(A.parent.id);
            var r = findIndex(i.children, A);
            const o = this.getNodeById(A.id);
            switch (t) {
            case "before":
                i.children.splice(r, 1),
                o.data.parent = n.data,
                o.parent = n,
                s = findIndex(n.children, e),
                n.children.splice(s, 0, o);
                break;
            case "after":
                i.children.splice(r, 1),
                o.data.parent = n.data,
                o.parent = n,
                s = findIndex(n.children, e),
                n.children.splice(s + 1, 0, o);
                break;
            default:
                const A = this.getNodeById(e.id);
                i.children.splice(r, 1),
                o.data.parent = A.data,
                (o.parent = A).children.push(o)
            }
        }
        clear() {
            this._root = null,
            idMapping.clear()
        }
        hasNodeById(A) {
            return idMapping.has(A)
        }
        getNodeById(A) {
            return idMapping.get(A)
        }
    }
    class DB {
        constructor() {
            this.data = new Data,
            this.tree = new Tree,
            this.selects = new Set
        }
    }
    var db = new DB;
    const stacks = new WeakMap;
    class Stack {
        constructor() {
            return stacks.set(this, []),
            Stack.instance || (Stack.instance = this),
            Stack.instance
        }
        push(A) {
            this.get().push(A)
        }
        pop() {
            return this.get().pop()
        }
        shift() {
            this.get().shift()
        }
        peek() {
            var A = this.get();
            return A[A.length - 1]
        }
        size() {
            return this.get().length || 0
        }
        isEmpty() {
            return !this.size()
        }
        clear() {
            stacks.set(this, [])
        }
        print() {
            return Array.from(this.get().values())
        }
        get() {
            return stacks.get(this)
        }
        set(A) {
            stacks.set(this, A)
        }
    }
    const printStackLog$5 = localStorage.getItem("printStackLog")
      , Attribute = A=>{
        const e = A[0];
        let t = A[1];
        return {
            type: "Attribute",
            redo(A, n) {
                t = attr("Redo", t, e),
                A && A.apply(n, [t])
            },
            undo(A, n) {
                t = attr("Undo", t, e),
                A && A.apply(n, [t])
            }
        }
    }
    ;
    function attr(A, e, t) {
        return printStackLog$5 && log.info(`[${A} Attribute]: ${t.id}撤销` + ("show" === e ? "“隐藏”" : "“显示”")),
        "show" === e ? (t.visible = !1,
        t._setVisible(!1),
        selector.clear(),
        "hidden") : (t.visible = !0,
        t._setVisible(!0),
        selector.select(t),
        "show")
    }
    const printStackLog$4 = localStorage.getItem("printStackLog")
      , Drag = A=>{
        const e = selector.getContainers()
          , t = selector.getSelectElements()
          , n = e.map((A=>A.bound.record))
          , s = [];
        return {
            type: "Drag",
            redo(A) {
                printStackLog$4 && log.info(`[Redo Drag]: ${e.map((A=>A.id))}恢复“拖拽”`),
                selector.select(t),
                e.forEach(((A,e)=>{
                    A.setBound(s[e])
                }
                )),
                selector.select(t),
                A && A(this.type, t, e)
            },
            undo(A) {
                printStackLog$4 && log.info(`[Undo Drag]: ${e.map((A=>A.id))}撤销“拖拽”`),
                selector.select(t),
                e.forEach(((A,e)=>{
                    s[e] = clone(A.bound),
                    A.setBound(n[e])
                }
                )),
                selector.select(t),
                A && A(this.type, t, e)
            }
        }
    }
      , printStackLog$3 = localStorage.getItem("printStackLog")
      , Align$1 = A=>{
        const e = A[0].map((A=>"Group" === A.type ? A.containers : A)).flat(1 / 0)
          , t = e.map((A=>A.bound.record))
          , n = [];
        return {
            type: "Align",
            redo(A) {
                printStackLog$3 && log.info(`[Redo Align]: ${e.map((A=>A.id))}恢复“对齐”`),
                e.forEach(((A,e)=>{
                    A.setBound(n[e])
                }
                )),
                A && A(this.type, e)
            },
            undo(A) {
                printStackLog$3 && log.info(`[Undo Align]: ${e.map((A=>A.id))}撤销“对齐”`),
                e.forEach(((A,e)=>{
                    n[e] = clone(A.bound),
                    A.setBound(t[e])
                }
                )),
                A && A(this.type, e)
            }
        }
    }
      , printStackLog$2 = localStorage.getItem("printStackLog")
      , Rotate$1 = A=>{
        const e = A[0].map((A=>"Group" === A.type ? A.containers : A)).flat(1 / 0)
          , t = e.map((A=>A.bound.record))
          , n = [];
        return {
            type: "Rotate",
            redo(A) {
                printStackLog$2 && log.info(`[Redo Rotate]: ${e.map((A=>A.id))}恢复“旋转”`),
                e.forEach(((A,e)=>{
                    A.setBound(n[e])
                }
                )),
                selector.select(e),
                A && A(this.type, e)
            },
            undo(A) {
                printStackLog$2 && log.info(`[Undo Rotate]: ${e.map((A=>A.id))}撤销“旋转”`),
                e.forEach(((A,e)=>{
                    n[e] = clone(A.bound),
                    A.setBound(t[e])
                }
                )),
                selector.select(e),
                A && A(this.type, e)
            }
        }
    }
      , printStackLog$1 = localStorage.getItem("printStackLog")
      , cache = {
        [COMMAND_TYPE.CREATEGRAPHOBJECT]: "",
        [COMMAND_TYPE.UNGRAPHOBJECT]: "",
        [COMMAND_TYPE.MOVE]: "",
        [COMMAND_TYPE.STYLE]: "",
        [COMMAND_TYPE.ATTRIBUTE]: Attribute,
        [COMMAND_TYPE.CREATEGROUP]: "",
        [COMMAND_TYPE.UNGROUP]: "",
        [COMMAND_TYPE.DRAG]: Drag,
        [COMMAND_TYPE.ALIGN]: Align$1,
        [COMMAND_TYPE.ROTATE]: Rotate$1
    };
    class GenerateExecution {
        constructor() {
            this.commands = null,
            this.cache = cache,
            this.init()
        }
        init() {
            this.commands = this.initCommands()
        }
        initCommands() {
            const A = {};
            return Object.values(COMMAND_TYPE).forEach((e=>{
                A[e] = commandFn(e)
            }
            )),
            A
        }
        addCommandType(A) {
            if (!A || !isType$1(A, "String"))
                return !1;
            var e = A.toUpperCase();
            return !!isUnDef(COMMAND_TYPE[e]) && (COMMAND_TYPE[e] = A,
            this.cache[A] = "",
            this.commands[A] = commandFn(A),
            !0)
        }
    }
    function commandFn(A) {
        return e=>{
            if (isUnDef(cache[A]))
                throw Error(`[Error UndoRedo]: ${A}操作类型未定义`);
            if ("" !== cache[A])
                return cache[A](e);
            {
                e[0] = e[0] || {};
                const {undo: t, redo: n, param: s} = e[0];
                return {
                    type: A,
                    redo(e, t) {
                        printStackLog$1 && log.info(`[Redo ${A}]`),
                        n && n(...s),
                        e && e.apply(t, [A, ...s])
                    },
                    undo(e, n) {
                        printStackLog$1 && log.info(`[Undo ${A}]`),
                        t && t(...s),
                        e && e.apply(n, [A, ...s])
                    },
                    destroy() {
                        s && s[0] && s[0]._destroyTruthy && s[0]._destroyTruthy()
                    }
                }
            }
        }
    }
    var generateExecution = new GenerateExecution;
    const printStackLog = localStorage.getItem("printStackLog");
    class Command {
        constructor() {
            this.stack = new Stack,
            this.position = -1,
            this.maximum = 100,
            this.commands = generateExecution.commands
        }
        setMaximum(A) {
            return !(!isType$1(A, "Number") || A === this.maximum || (this.maximum = A,
            0))
        }
        execute(A, ...e) {
            if (!this.commands[A])
                return !1;
            const t = this.commands[A](e);
            if (!t)
                return !1;
            if (-1 <= this.position && this.position < this.stack.size() - 1 && this._clearRedo(),
            this.stack.size() >= this.maximum) {
                const A = this.stack.get()[0];
                "UnGraphObject" !== A.type && "UnGroup" !== A.type || A.destroy(),
                this.stack.shift(),
                this.position--
            }
            return t.store = this.store,
            this.stack.push(t),
            this.position++,
            printStackLog && log.info(`[execute ${A}]`, -1 < A.indexOf("Create") ? e[0].id || e[0].param[0].id : e),
            !0
        }
        undo(A, e) {
            return 0 <= this.position && (this.get().undo(A, e),
            this.position--,
            !0)
        }
        redo(A, e) {
            return this.position < this.stack.size() - 1 && (this.position++,
            this.get().redo(A, e),
            !0)
        }
        canRedo() {
            return this.position < this.stack.size() - 1
        }
        canUndo() {
            return 0 <= this.position
        }
        clear() {
            this.stack.clear(),
            this.position = -1
        }
        get() {
            return this.stack.get()[this.position]
        }
        _clearRedo() {
            var A = this.stack.get().slice(0, this.position + 1);
            for (const A of this.stack.get().slice(this.position - this.stack.size() + 1).reverse())
                "CreateGraphObject" !== A.type && "CreateGroup" !== A.type || A.destroy();
            this.stack.set(A)
        }
    }
    var command = new Command;
    function mergeOption(A, e={}, t={}) {
        return merge({}, defaultOption[A], {
            config: defaultConfig[A]
        }, {
            baseOption: e,
            config: t
        })
    }
    function _applyMixin(A, e) {
        e = e.prototype || e,
        Object.getOwnPropertyNames(e).forEach((t=>{
            "constructor" !== t && (A.prototype[t] = e[t])
        }
        ))
    }
    function applyMixins(A, e) {
        Array.isArray(e) ? e.forEach((e=>{
            _applyMixin(A, e)
        }
        )) : _applyMixin(A, e)
    }
    class LayoutManager {
        constructor() {
            this.layoutMap = new Map
        }
        register(A, e) {
            return 2 !== arguments.length ? console.warn("注册需要的参数不对") : this.layoutMap.has(A) ? console.warn(A + " 已经存在，无法注册") : (this.layoutMap.set(A, e),
            !0)
        }
        mixin(A, e) {
            this.layoutMap.forEach(((t,n)=>{
                n.toUpperCase() === A.toUpperCase() && applyMixins(t, e)
            }
            ))
        }
        createLayout(A, e, t, n={}) {
            if (this.layoutMap.has(e))
                return e === LAYOUT_MAP.GROUP && (n.isAlone = !0),
                this.layoutMap.get(e).factoryConfig(A, t, n);
            throw new Error(e + " 还未注册，需要先注册后才能使用")
        }
        parseLayout(A, e, t) {
            const n = this.createLayout(A, e.type, e.option, t);
            return e.children && e.children.forEach((A=>{
                this.parseLayout(n, A, {
                    inStack: !1
                })
            }
            )),
            n
        }
        checkLayoutType(A, e) {
            return isType$1(e, "Array") ? e.some((e=>A instanceof this.layoutMap.get(e))) : A instanceof this.layoutMap.get(e)
        }
    }
    var layoutManager = new LayoutManager;
    class Hook {
        constructor(A, e) {
            this.instance = A,
            this.hooks = e;
            for (const A of this.hooks)
                this[A + "List"] = []
        }
        tap(A, e) {
            return !!this.getIncludes(A) && ("function" == typeof e && (this[A + "List"] || (this[A + "List"] = []),
            this[A + "List"].push(e.bind(this.instance, {
                instance: this.instance
            }))),
            !0)
        }
        call(A, e) {
            if (!this.getIncludes(A))
                return log.warn(A + " hook has not been registered"),
                !1;
            for (const t of this[A + "List"])
                try {
                    t(e)
                } catch (e) {
                    log.error(`Error in ${A} hook:`, e)
                }
            return !0
        }
        register(A, e) {
            if ("object" == typeof A && null !== A)
                for (const e in A)
                    this.register(e, A[e]);
            this.getIncludes(A) ? log.warn(A + " hook has been registered") : this.hooks.push(A),
            this.tap(A, e)
        }
        unregister(A) {
            var e = this.getIndexOf(A);
            if (-1 === e)
                throw new Error("this hook has been registered");
            delete this[A + "List"],
            this.hook.splice(e, 1)
        }
        destroy() {
            this.hooks.forEach((A=>delete this[A + "List"])),
            this.hooks = []
        }
        getIncludes(A) {
            return !!this.hooks.includes(A)
        }
        getIndexOf(A) {
            return this.hooks.indexOf(A)
        }
    }
    const allowTypes = ["ui", "canvas", "layer", "group", "container"];
    class Module {
        constructor(A) {
            this.instance = A,
            this.cache = {},
            Object.entries(A).forEach((([A,e])=>{
                allowTypes.includes(A) && (this.cache[A] || (this.cache[A] = {}),
                Object.entries(e).forEach((([e,t])=>{
                    if ("function" == typeof t) {
                        let n = this.cache[A][e];
                        n || (this.cache[A][e] = n = new Set),
                        n.add(t)
                    }
                }
                )))
            }
            ))
        }
        inject(A, e) {
            const t = this.cache[e.toLowerCase()];
            t && Object.keys(t).forEach((e=>{
                t[e].forEach((t=>{
                    A.tap(e, t)
                }
                ))
            }
            ))
        }
    }
    class ModuleManager {
        constructor() {
            this.modules = new Map
        }
        mixin(A) {
            Object.entries(A).forEach((([A,e])=>{
                allowTypes.includes(A) && layoutManager.mixin(A, e)
            }
            ))
        }
        register(A) {
            if (!this.modules.has(A)) {
                let e = A;
                "function" == typeof (e = "function" == typeof A ? A(UI) : e).setup && (e.setup(UI),
                delete e.setup),
                this.modules.set(A, new Module(e))
            }
        }
        remove(A) {
            this.modules.delete(A)
        }
        inject(A, e) {
            this.modules.forEach((t=>t.inject(A, e)))
        }
    }
    var mm = new ModuleManager;
    const hooks = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeToJSON", "beforeDestroy", "destroyed", "beforeParseJSON"];
    function createLifeCycle(A) {
        var e = new Hook(A,hooks);
        return mm.inject(e, A.type || A.constructor.name),
        e
    }
    class Displayable {
        constructor(A, e) {
            if (!A)
                throw new Error("parent 参数不能为空");
            this.parent = A,
            this.config = e.config,
            this.options = e.baseOption,
            this.type = this.config.type,
            this.id = null,
            this._name = null,
            this.root = store$1.getUI(),
            this.visible = null,
            this.isLock = null,
            this.lifeCycle = null,
            this.selectLock = null
        }
        init() {
            var A = this.options;
            if (A.id) {
                if (store$1.getElementById(A.id))
                    throw new Error(A.id + " 编号已经被使用");
                this.id = A.id
            } else
                this.id = getId(this.type.toLowerCase() || "ui");
            this.name = A.name || "",
            this.visible = !hasOwn(A, "visible") || A.visible,
            this.isLock = (hasOwn(A, "isLock") ? A : this.config).isLock,
            this.lifeCycle = createLifeCycle(this),
            this.selectLock = !1
        }
        _initEvent() {}
        _destroyEvent() {}
        update() {}
        prev() {
            return store$1.prev(this)
        }
        next() {
            return store$1.next(this)
        }
        select() {
            return !this.selectLock && !this.isSelected && this.root.selector.select(this)
        }
        unselect() {
            return !(this.selectLock || !this.isSelected) && this.root.selector.unselect(this)
        }
        zIndexUp() {
            this.style.zIndex = 1
        }
        zIndexDown() {
            this.style.zIndex = ""
        }
        get isSelected() {
            return store$1.getSelectElements().includes(this)
        }
        get children() {
            return store$1.getChildren(this)
        }
        toJSON() {
            var A = this.type;
            const e = {
                id: this.id,
                name: this.name,
                isLock: this.isLock,
                visible: this.visible
            };
            isDef(this.penetrateOnplay) && (e.penetrateOnplay = this.penetrateOnplay);
            var t = this.children.map((A=>A.toJSON()));
            this.style && (e.style = this.style.getValue(),
            delete e.style.display,
            delete e.style.zIndex),
            this.adapter && isType$1(this.adapter.toJSON, "Function") && (e.adapter = this.adapter.toJSON()),
            this.animation && (e.animation = this.animation);
            const n = {
                type: A,
                option: e
            };
            return t && (n.children = t),
            this.lifeCycle.call("beforeToJSON", n),
            n
        }
        destroy() {
            this.unselect()
        }
        _destroyTruthy() {
            this.lifeCycle.call("beforeDestroy");
            for (const A of this.children)
                A._destroyTruthy();
            return this.unselect(),
            this._destroyEvent(),
            store$1.getElementById(this.id) === this && store$1._remove(this),
            this._clearCache(this),
            !0
        }
        _clearCache(A) {
            unmount(A),
            A.el && (A.el = null),
            A.parent = null,
            A.style && A.style.destroy(),
            this.lifeCycle.call("destroyed"),
            A.lifeCycle.destroy()
        }
        get lock() {
            return !!this.isLock
        }
        set lock(A) {
            A !== this.isLock && (this.isLock = A)
        }
        get name() {
            return this._name
        }
        set name(A) {
            this._name = "" + A,
            store$1.setName(this)
        }
    }
    function getId(A) {
        var e = getUID(A);
        return store$1.getElementById(e) ? getId(A) : e
    }
    function checkLayoutType(A, e) {
        return layoutManager.checkLayoutType(A, e)
    }
    function recordBound(A=[]) {
        A.forEach((A=>{
            checkLayoutType(A, LAYOUT_MAP.GROUP) ? recordBound(A.children) : A.bound.record = A.bound.plain()
        }
        ))
    }
    function getParentLayer(A) {
        return A instanceof Displayable ? checkLayoutType(A, LAYOUT_MAP.LAYER) ? A : getParentLayer(A.parent) : null
    }
    function getElementParent(A) {
        return checkLayoutType(A, LAYOUT_MAP.GROUP) ? getElementParent(A.parent) : A
    }
    function getParentGroupOptionList(A, e) {
        let t = [];
        return checkLayoutType(A, LAYOUT_MAP.GROUP) && t.push(A[e]),
        checkLayoutType(A.parent, LAYOUT_MAP.GROUP) ? t.concat(getParentGroupOptionList(A.parent, e)) : t
    }
    function setContainerDisplay(A) {
        return A.visible && getParentGroupOptionList(A.parent, "visible").every((A=>!!A))
    }
    function sortLayerChildren(A) {
        if (A.length < 2)
            return A;
        const e = getLayerFlatChildren(getParentLayer(A[0]));
        return A.sort(((A,t)=>e.indexOf(A) - e.indexOf(t)))
    }
    function getLayerFlatChildren(A) {
        const e = [];
        return function A(t) {
            t.children && t.children.forEach((t=>{
                e.push(t),
                A(t)
            }
            ))
        }(A),
        e
    }
    function moveToTarget(A, e, t) {
        if (t && "before" !== t && "after" !== t)
            return log.warn("type 参数异常");
        if (!(e instanceof Displayable))
            throw Error(`目标类型错误: ${e}不是一个可视化元素的实例`);
        let n = A
          , s = e
          , i = t;
        var r;
        checkLayoutType(e, LAYOUT_MAP.GROUP) && (r = findInsertPosition(e, t),
        s = r[0],
        i = r[1]),
        n = isType$1(n = checkLayoutType(A, LAYOUT_MAP.GROUP) ? "after" === i ? A.containers.slice(0).reverse() : A.containers : n, "Array") ? n : [n],
        (A = isType$1(A, "Array") ? A : [A]).forEach((A=>{
            store$1._move(A, e, t)
        }
        )),
        n.forEach((A=>{
            A._setVisible(A.visible),
            A.id !== s.id && (mount(A, {
                el: !i && checkLayoutType(s, LAYOUT_MAP.LAYER) ? s.contentEl : s.el
            }, i),
            checkLayoutType(A, LAYOUT_MAP.CONTAINER) && A.updateLocation())
        }
        ))
    }
    function findInsertPosition(A, e) {
        const t = A.containers;
        var n = A.next();
        let s, i;
        if (t.length)
            switch (i = e) {
            case "before":
                s = t.slice(0)[0];
                break;
            case "after":
                s = t.slice(-1)[0];
                break;
            default:
                s = t.slice(-1)[0],
                i = "after"
            }
        else if (n) {
            if (checkLayoutType(n, LAYOUT_MAP.GROUP))
                return findInsertPosition(n, "before");
            s = n,
            i = "before"
        } else
            s = A.getParentLayer(),
            i = "";
        return [s, i]
    }
    function rotateIcon() {
        return getSvg('<svg width="16px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>toolbar_xz</title>\n    <defs>\n        <filter id="filter-1">\n            <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.043137 0 0 0 0 0.443137 0 0 0 0 0.901961 0 0 0 1.000000 0"></feColorMatrix>\n        </filter>\n    </defs>\n    <g id="editor" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="title-close" transform="translate(-1303.000000, -410.000000)">\n            <g transform="translate(1302.998014, 409.998014)" id="toolbar_xz">\n                <rect id="rect" x="0.0148202467" y="0.00198554907" width="16" height="16"></rect>\n                <path d="M15.7293922,5.93143319 C16.285859,8.00819582 15.983898,10.1769077 14.9301888,12.0019855 C14.6684184,12.455385 14.363472,12.8814174 14.0201308,13.2740063 L15.7086046,12.8194026 L16.0585571,14.1254431 L12.7934557,15.0003244 C12.4688679,15.0872975 12.1361367,14.9226324 12.0023882,14.6259135 L11.9654592,14.5222804 L11.0905779,11.257179 L12.3966185,10.9072265 L12.840996,12.561793 C13.19294,12.187523 13.5012471,11.7727599 13.7592249,11.3259292 C14.6354102,9.80833161 14.8860513,8.00820448 14.4233516,6.2813857 C13.4730905,2.73496316 9.82780824,0.630358437 6.2813857,1.58061949 C2.73496316,2.53088055 0.630358435,6.17616286 1.58061949,9.7225854 C1.80974321,10.5776868 2.19919885,11.3636877 2.72612438,12.0498464 C3.25774419,12.7421177 3.9219886,13.3227173 4.67804189,13.7592248 C5.33958849,14.1411689 6.06152982,14.407079 6.81138501,14.5441342 L7.13436583,14.5949458 L6.95736646,15.9354232 C5.91550503,15.7978537 4.91108799,15.4550593 4.00198558,14.9301887 C3.09288309,14.4053182 2.29380597,13.7068647 1.65373654,12.873371 C1.01902772,12.0468578 0.549907173,11.1000769 0.274578937,10.0725379 C-0.868955554,5.80480909 1.66370439,1.41811342 5.93143319,0.274578939 C10.199162,-0.868955553 14.5858577,1.66370437 15.7293922,5.93143319 Z" id="shapes-combine" fill="#007aff" fill-rule="nonzero"></path>\n            </g>\n        </g>\n    </g>\n</svg>')
    }
    class Storage {
        init(A) {
            db.tree.add(A, A.parent),
            db.data.add(A)
        }
        execute(A, ...e) {
            command.execute(A, ...e)
        }
        _get(A) {
            let e;
            switch (A) {
            case "tree":
                e = db.tree;
                break;
            case "stack":
                e = command.stack.get()
            }
            return e
        }
        _removeData(A) {
            (Array.isArray(A) ? A : [A]).forEach((A=>db.data.remove(A)))
        }
        _remove(A) {
            (Array.isArray(A) ? A : [A]).forEach((A=>{
                A.sublingNode = A.sublingNode || [],
                A.sublingNode.push(A.next()),
                db.tree.remove(A),
                db.data.remove(A)
            }
            ))
        }
        _removeback(A) {
            db.tree.add(A, A.parent),
            db.data.add(A);
            var e = A.sublingNode && A.sublingNode.pop();
            e && db.tree.move(A, e, "before")
        }
        _move(A, e, t) {
            (A = isType$1(A, "Array") ? A : [A]).forEach((A=>{
                this.moveBack || (A.sublingNode = A.sublingNode || [],
                A.fromNode = A.fromNode || [],
                A.sublingNode.push(A.next()),
                A.fromNode.push(A.parent)),
                db.tree.move(A, e, t)
            }
            ))
        }
        _moveBack(A) {
            (A = isType$1(A, "Array") ? A : [A]).slice(0).reverse().forEach((A=>{
                var e = A.sublingNode.pop()
                  , t = A.fromNode.pop();
                this.moveBack = !0,
                A.sublingNode && e ? moveToTarget(A, e, "before") : moveToTarget(A, t),
                this.moveBack = !1
            }
            ))
        }
        prev(A) {
            return db.tree.edit("prev", A) ? db.tree.edit("prev", A).data : null
        }
        next(A) {
            return db.tree.edit("next", A) ? db.tree.edit("next", A).data : null
        }
        getUI() {
            return Array.from(db.data.getByType("ui"))[0]
        }
        getCanvas() {
            return Array.from(db.data.getByType("canvass"))
        }
        getLayers() {
            return Array.from(db.data.getByType("layers"))
        }
        getGroups() {
            return Array.from(db.data.getByType("groups"))
        }
        getContainers() {
            return Array.from(db.data.getByType("containers"))
        }
        getElementById(A) {
            return this.hasElementById(A) ? db.tree.getNodeById(A).data : null
        }
        hasElementById(A) {
            return db.tree.hasNodeById(A)
        }
        getElementsByName(A) {
            return db.data.getByName(A)
        }
        getAllElements() {
            return [...this.getLayers(), ...this.getGroups(), ...this.getContainers()]
        }
        getChildren(A) {
            return this.hasElementById(A.id) ? db.tree.getNodeById(A.id).children.map((A=>A.data)) : []
        }
        deepListByType(A, e, t=[]) {
            return A.forEach((A=>{
                e && A.type !== LAYOUT_MAP[e] || t.push(A),
                (A = this.getChildren(A)) && A.length && this.deepListByType(A, e, t)
            }
            )),
            t
        }
        getContainersByEl(A) {
            return this.deepListByType(this.getChildren(A), "CONTAINER")
        }
        getGroupsByEL(A) {
            return this.deepListByType(this.getChildren(A), "GROUP")
        }
        getAllElementsByEL(A) {
            return this.deepListByType(this.getChildren(A))
        }
        select(A) {
            this.isSelect(A) || db.selects.add(A)
        }
        unSelect(A) {
            this.isSelect(A) && db.selects.delete(A)
        }
        getSelectElements() {
            return Array.from(db.selects)
        }
        isSelect(A) {
            return db.selects.has(A)
        }
        setName(A) {
            db.data.setName(A)
        }
        destroy() {
            db.tree.clear(),
            db.data.clear(),
            this.clearStack(),
            this.clearSelect()
        }
        clearStack() {
            command.stack.clear(),
            command.position = -1
        }
        clearSelect() {
            db.selects.clear()
        }
    }
    const store$1 = new Storage;
    command.store = store$1;
    class BoundingRect {
        constructor(A, e, t=0, n=0, s={
            left: 0,
            top: 0
        }, i=0) {
            this.top = isNumber(e) ? e : 0,
            this.left = isNumber(A) ? A : 0,
            this.width = t,
            this.height = n,
            this.offset = s,
            this.angle = i,
            this.record = this.plain()
        }
        static create(A, e, t) {
            return new BoundingRect(A.left,A.top,A.width,A.height,e,t)
        }
        clone() {
            return new BoundingRect(this.left,this.top,this.width,this.height,this.offset,this.angle)
        }
        setData(A) {
            Object.keys(A).forEach((e=>{
                var t = A[e];
                this.hasOwnProperty(e) && isNumber(t) && (this[e] = Math.round(t))
            }
            ))
        }
        union(A, e) {
            var t, n, s, i;
            A instanceof BoundingRect && (({top: t, left: n, right: s, bottom: i} = e ? this.plainReal() : this.plain()),
            e = e ? A.plainReal() : A.plain(),
            0 === t && 0 === n && 0 === s && 0 === i ? this.setData(e) : (this.top = Math.min(e.top, t),
            this.left = Math.min(e.left, n),
            this.width = Math.max(e.right, s) - this.left,
            this.height = Math.max(e.bottom, i) - this.top))
        }
        setOffset(A, e) {
            isNumber(A) || (A = 0),
            isNumber(e) || (e = 0),
            this.offset = {
                left: A,
                top: e
            }
        }
        plain() {
            return {
                top: this.top,
                left: this.left,
                right: this.left + this.width,
                bottom: this.top + this.height,
                width: this.width,
                height: this.height,
                angle: this.angle
            }
        }
        plainReal() {
            var A, e = isNumber((A = this.offset).top) ? this.top + A.top : 0;
            return {
                top: e,
                left: A = isNumber(A.left) ? this.left + A.left : 0,
                right: A + this.width,
                bottom: e + this.height,
                width: this.width,
                height: this.height,
                angle: this.angle
            }
        }
    }
    const commandAPI = {
        create(A, e, t=!1) {
            commandAPI._create(A, e),
            t && store$1.execute(COMMAND_TYPE.CREATEGROUP, {
                undo: commandAPI._unCreate,
                redo: commandAPI._create,
                param: [A, e]
            })
        },
        destroy(A) {
            var e = store$1.getAllElementsByEL(A);
            commandAPI._destroy(A, e),
            store$1.execute(COMMAND_TYPE.UNGROUP, {
                undo: commandAPI._undestroy,
                redo: commandAPI._destroy,
                param: [A, e]
            })
        },
        dismiss(A) {
            var e = A.children;
            commandAPI._dismiss(A, e),
            store$1.execute(COMMAND_TYPE.UNGROUP, {
                undo: commandAPI._undismiss,
                redo: commandAPI._dismiss,
                param: [A, e]
            })
        },
        graph(A, e=!1) {
            e && store$1.execute(COMMAND_TYPE.CREATEGRAPHOBJECT, {
                undo: commandAPI._unGraph,
                redo: commandAPI._graph,
                param: [A]
            }),
            commandAPI._graph(A)
        },
        unGraph(A) {
            var e = store$1.getAllElementsByEL(A);
            commandAPI._unGraph(A, e),
            store$1.execute(COMMAND_TYPE.UNGRAPHOBJECT, {
                undo: commandAPI._graph,
                redo: commandAPI._unGraph,
                param: [A, e]
            })
        },
        move(A, e, t) {
            commandAPI._move(A, e, t),
            store$1.execute(COMMAND_TYPE.MOVE, {
                undo: commandAPI._moveBack,
                redo: commandAPI._move,
                param: [A, e, t]
            })
        },
        drag(A) {
            store$1.execute(COMMAND_TYPE.DRAG, A)
        },
        align(A) {
            store$1.execute(COMMAND_TYPE.ALIGN, A)
        },
        rotate(A) {
            store$1.execute(COMMAND_TYPE.ROTATE, A)
        },
        attribute(A, e) {
            store$1.execute(COMMAND_TYPE.ATTRIBUTE, A, e)
        },
        _create(A, e) {
            store$1.init(A),
            store$1._move(A, e[0], "before"),
            e.forEach((e=>moveToTarget(e, A)))
        },
        _unCreate(A, e) {
            store$1._moveBack(e),
            store$1._remove(A),
            selector.clear(A)
        },
        _graph(A, e) {
            store$1.init(A),
            e && e.forEach((A=>store$1.init(A))),
            A.mount()
        },
        _unGraph(A, e) {
            A.unmount(),
            store$1._remove(A),
            e && store$1._removeData(e)
        },
        _destroy(A, e) {
            selector.clear(A),
            A.unmount(),
            store$1._remove(A),
            e && store$1._removeData(e)
        },
        _undestroy(A, e) {
            store$1._removeback(A),
            e.forEach((A=>store$1.init(A))),
            A.mount(),
            selector.select(A)
        },
        _dismiss(A, e) {
            store$1._move(e, A, "before"),
            store$1._remove(A),
            e.forEach((A=>A._setVisible(A.visible))),
            selector.clear(A)
        },
        _undismiss(A, e) {
            store$1._removeback(A),
            store$1._moveBack(e),
            selector.select(A)
        },
        _move(A, e, t) {
            moveToTarget(A, e, t)
        },
        _moveBack(A) {
            store$1._moveBack(A)
        }
    };
    function unionBound(A, e) {
        const t = new BoundingRect;
        return t.setOffset(e.x, e.y),
        A.length && A.forEach((A=>t.union(A.bound))),
        t
    }
    class Group extends Displayable {
        constructor(A, e, t={}) {
            if (t.isAlone) {
                if (!A || !checkLayoutType(A, [LAYOUT_MAP.LAYER, LAYOUT_MAP.GROUP]))
                    throw new Error("编组创建的参数必须是图层或者编组");
                super(A, mergeOption(LAYOUT_MAP.GROUP, e, t)),
                super.init(),
                store$1.init(this)
            } else {
                if (!(A = isType$1(A, "Array") ? A : A ? [A] : []).length)
                    throw new Error("编组创建的参数必须有值");
                let n = null
                  , s = null;
                for (const e of A = Array.from(new Set(A))) {
                    if (!checkLayoutType(e, [LAYOUT_MAP.GROUP, LAYOUT_MAP.CONTAINER]))
                        throw new Error("编组对象必须是编组或者容器");
                    if (null === n)
                        n = e.parent.id,
                        s = e.id;
                    else if (e.parent.id !== n)
                        throw new Error(`不允许元素跨层级编组：${e.id}和${s}不在同一级`)
                }
                super((A = sortLayerChildren(A))[0].parent, mergeOption(LAYOUT_MAP.GROUP, e, t)),
                super.init(),
                commandAPI.create(this, A, this.config.inStack)
            }
        }
        static factory(A, e) {
            return new Group(A,e)
        }
        static factoryConfig(A, e, t) {
            return new Group(A,e,t)
        }
        mount() {
            if (this.parent) {
                let e = this.parent
                  , t = null;
                var A;
                checkLayoutType(e, LAYOUT_MAP.GROUP) && ((A = this.next()) ? (e = A,
                t = "before") : e = getElementParent(e)),
                this.lifeCycle.call("beforeMount"),
                this._isMounted = !0,
                this.groups.forEach((A=>A._isMounted = !0)),
                this.containers.forEach((A=>{
                    A.isMounted && mount(A, e, t)
                }
                )),
                this.lifeCycle.call("mounted")
            }
        }
        unmount() {
            this._isMounted = !1,
            this.groups.forEach((A=>A._isMounted = !1)),
            this.containers.forEach((A=>{
                unmount(A)
            }
            ))
        }
        add(A) {
            if (!(A = isType$1(A, "Array") ? A : A ? [A] : []).length)
                return !1;
            for (const e of A = Array.from(new Set(A)))
                if (!checkLayoutType(e, [LAYOUT_MAP.GROUP, LAYOUT_MAP.CONTAINER]) || e.parent === this || e === this)
                    throw new Error("target 参数必须是同一个图层的其他编组或者容器，并且父节点不能是自己");
            return commandAPI.move(A, this),
            !0
        }
        moveToTarget(A, e) {
            return e || checkLayoutType(A, [LAYOUT_MAP.LAYER, LAYOUT_MAP.GROUP]) || A === this ? e && !checkLayoutType(A, [LAYOUT_MAP.CONTAINER, LAYOUT_MAP.GROUP]) && A !== this ? log.warn("编组只能移动到容器或者其他编组旁边") : (commandAPI.move(this, A, e),
            this.root.operation.repaint(),
            !0) : log.warn("编组只能移动到图层或者其他编组里面")
        }
        zIndexUp() {
            this.containers.forEach((A=>{
                A.style.zIndex = 1
            }
            ))
        }
        zIndexDown() {
            this.containers.forEach((A=>{
                A.style.zIndex = ""
            }
            ))
        }
        show() {
            return !this.visible && (this.visible = !0,
            this._setVisible(),
            commandAPI.attribute(this, "show"),
            !0)
        }
        hidden() {
            return !!this.visible && (this.unselect(),
            this.visible = !1,
            this._setVisible(),
            commandAPI.attribute(this, "hidden"),
            !0)
        }
        _setVisible() {
            this.containers.forEach((A=>A._setVisible()))
        }
        move(A, e) {
            this.containers.forEach((t=>t.move(A, e)))
        }
        get bound() {
            var {left: A, top: e} = this.getParentLayer().bound;
            return unionBound(this.children, {
                x: A,
                y: e
            })
        }
        get groups() {
            return store$1.getGroupsByEL(this)
        }
        get containers() {
            return store$1.getContainersByEl(this)
        }
        getParentLayer() {
            return getParentLayer(this.parent)
        }
        destroy() {
            commandAPI.destroy(this)
        }
        dismiss() {
            commandAPI.dismiss(this)
        }
    }
    class Selector {
        constructor() {
            this.isMultSelect = !1,
            this.selectLayerId = ""
        }
        get root() {
            return store$1.getUI()
        }
        select(A) {
            if (!this.root || !A)
                return !1;
            A = isType$1(A, "Array") ? A : [A];
            let e, t, n = "";
            if (A.forEach((A=>{
                t = A.root.config.notSelectLayer,
                A.type === LAYOUT_MAP.LAYER ? (n = LAYOUT_MAP.LAYER,
                e = A.id) : A.type !== LAYOUT_MAP.CONTAINER && A.type !== LAYOUT_MAP.GROUP || (e = getParentLayer(A).id)
            }
            )),
            this.selectLayerId && e !== this.selectLayerId) {
                const A = db.tree.getNodeById(this.selectLayerId);
                !A || t && !n || A.data.zIndexDown()
            }
            this.selectLayerId = e,
            this.isMultSelect || this.clear();
            var s = A.filter((A=>{
                if (A.type !== LAYOUT_MAP.LAYER || !t)
                    return store$1.select(A),
                    A.zDown || A.zIndexUp(),
                    !0;
                A.zDown || A.zIndexUp()
            }
            ));
            return A.length && this.root.emit("select", s),
            !0
        }
        unselect(A) {
            return !!this.root && ((A = isType$1(A, "Array") ? A : [A]).forEach((A=>{
                store$1.unSelect(A)
            }
            )),
            this.zIndexDown(A),
            this.root.emit("unselect", A),
            !0)
        }
        zIndexDown(A) {
            A.forEach((A=>{
                A.type === LAYOUT_MAP.LAYER && this.selectLayerId === A.id || A.zIndexDown()
            }
            ))
        }
        clear() {
            const A = this.getSelectElements();
            A.forEach((A=>A.zIndexDown())),
            store$1.clearSelect(),
            this.root.emit("unselect", A)
        }
        delete(A) {
            (A = switchElements.call(this, A)) && (A.forEach((A=>{
                store$1.unSelect(A),
                A.destroy()
            }
            )),
            this.root.emit("delete"))
        }
        getSelectElements() {
            return store$1.getSelectElements()
        }
        get last() {
            var A = this.getSelectElements()
              , e = A.length;
            return A.length ? A[e - 1] : null
        }
        getContainers() {
            return unrepeatContainers(this.getSelectElements())
        }
        getGroups() {
            return unrepeatGroups(this.getSelectElements())
        }
        getLayers() {
            return this.getSelectElements().filter((A=>checkLayoutType(A, LAYOUT_MAP.LAYER)))
        }
        enableMultSelect() {
            this.isMultSelect = !0
        }
        disableMultSelect() {
            this.isMultSelect = !1
        }
        move(A, e) {
            this.getContainers().forEach((t=>t.move(A, e)))
        }
        createGroup(A) {
            return (A = switchElements.call(this, A)) ? new Group(A) : null
        }
        cancelGroup(A) {
            (A = switchElements.call(this, A)) && A.forEach((A=>{
                checkLayoutType(A, LAYOUT_MAP.GROUP) && A.dismiss()
            }
            ))
        }
    }
    function unrepeatContainers(A=[], e=[]) {
        return A.forEach((A=>{
            checkLayoutType(A, LAYOUT_MAP.CONTAINER) && !e.includes(A) && e.push(A),
            checkLayoutType(A, LAYOUT_MAP.GROUP) && unrepeatContainers(store$1.getContainersByEl(A), e)
        }
        )),
        e
    }
    function unrepeatGroups(A=[], e=[]) {
        return A.forEach((A=>{
            checkLayoutType(A, LAYOUT_MAP.GROUP) && (e.includes(A) || e.push(A),
            unrepeatGroups(store$1.getGroupsByEL(A), e))
        }
        )),
        e
    }
    function switchElements(A) {
        let e;
        return isDef(A) ? isType$1(A, "Array") || (e = [A]) : e = (A = this.getSelectElements()).length ? A : null,
        e
    }
    var selector = new Selector;
    class NextTick {
        constructor() {
            this.microCaches = [],
            this.pending = !1
        }
        _flushMicroQueue() {
            for (this.pending = !1; this.microCaches.length; )
                this.microCaches.shift()()
        }
        call(A, e) {
            let t;
            return this.microCaches.push((()=>{
                try {
                    A ? A.call(e) : t(e)
                } catch (A) {
                    log.warn(A)
                }
            }
            )),
            this.pending || (this.pending = !0,
            Promise.resolve().then(this._flushMicroQueue.bind(this))),
            A ? t : new Promise((A=>{
                t = A
            }
            ))
        }
    }
    var nextTick = new NextTick;
    class EventEmitter {
        constructor() {
            this.eventTypes = {},
            this.eventFns = {}
        }
        on(A, e, t=this) {
            return this.hasType(A) || (this.eventTypes[A] = A,
            this.eventFns[A] = []),
            this.eventFns[A].push([e, t]),
            this
        }
        once(A, e, t) {
            const n = (...s)=>{
                this.off(A, n),
                e.apply(t, s)
            }
            ;
            return n.fn = e,
            this.on(A, n),
            this
        }
        off(A, e, t) {
            if (!A && !e)
                return this.destroy(),
                this;
            if (!this.hasType(A))
                return this;
            if (!e)
                return this.eventFns[A] = [],
                this;
            const n = this.eventFns[A];
            let s = n.length;
            for (; -1 < s; ) {
                var i, r;
                n[s] ? ([i,r] = n[s],
                i !== e && i.fn !== e || t && r !== t || n.splice(s, 1),
                s--) : s--
            }
            return this
        }
        emit(A, ...e) {
            if (!this.hasType(A))
                return this;
            if ((A = this.eventFns[A]) && A.length)
                for (const t of [...A]) {
                    const [A,n] = t;
                    A.apply(n, e)
                }
            return this
        }
        destroy() {
            this.eventTypes = {},
            this.eventFns = {}
        }
        hasType(A) {
            return this.eventTypes[A] === A
        }
    }
    class Move {
        constructor(A, e) {
            this.instance = A,
            this.mouseMoveInfo = e
        }
        elementMove() {
            var {left: A, top: e} = this.instance.bound.record;
            this.instance.setBound({
                left: A + this.mouseMoveInfo.x,
                top: e + this.mouseMoveInfo.y
            })
        }
    }
    const handlerFnArr = [[0], [1], [2], [3], [0, 2], [0, 3], [1, 2], [1, 3]];
    class Scale {
        constructor(A, e, t, n) {
            this.instance = A,
            this.mouseMoveInfo = t,
            this.pointAxis = n,
            this.fnMaps = this._fnMaps(),
            this.index = e
        }
        moveHandler() {
            const A = this.mouseMoveInfo
              , e = this.fnMaps;
            var t = this.handleIndex();
            handlerFnArr[t].forEach((t=>{
                if (checkLayoutType(this.instance, LAYOUT_MAP.CONTAINER) && e.get(t)(this.instance, A),
                checkLayoutType(this.instance, LAYOUT_MAP.LAYER)) {
                    e.get(t)(this.instance, A);
                    this.instance.getContainers().forEach((n=>{
                        e.get(t)(n, A)
                    }
                    ))
                }
            }
            ))
        }
        handleIndex() {
            if (0 === this.instance.bound.angle || "Group" === this.instance.parent.type)
                return this.index;
            var {x: A, y: e} = this.pointAxis[this.instance.id].find((A=>A.index === this.index));
            return 0 === A && e < 0 ? 1 : 0 === A && 0 <= e ? 0 : 0 === e && A <= 0 ? 2 : 0 === e && 0 < A ? 3 : A < 0 && e < 0 ? 6 : 0 < A && e < 0 ? 7 : A < 0 && 0 < e ? 4 : 0 < A && 0 < e ? 5 : void 0
        }
        _fnMaps() {
            const A = new Map;
            return A.set(0, (function(A, e) {
                var t = A.bound.record
                  , n = Math.floor(t.height - e.y);
                !A.isLock && -1 < n && A.setBound({
                    top: Math.floor(t.top + e.y),
                    height: n
                })
            }
            )),
            A.set(1, (function(A, e) {
                var t = A.bound.record;
                t = Math.floor(t.height + e.y);
                !A.isLock && -1 < t && A.setBound({
                    height: t
                })
            }
            )),
            A.set(2, (function(A, e) {
                var t = A.bound.record
                  , n = Math.floor(t.width - e.x);
                !A.isLock && -1 < n && A.setBound({
                    left: Math.floor(t.left + e.x),
                    width: n
                })
            }
            )),
            A.set(3, (function(A, e) {
                var t = A.bound.record;
                t = Math.floor(t.width + e.x);
                !A.isLock && -1 < t && A.setBound({
                    width: t
                })
            }
            )),
            A
        }
    }
    class MoveManager {
        constructor() {
            this.list = [],
            this.moveItem = null,
            this.mouseDownHandle = this.mouseDownEvent.bind(this),
            this.mouseMoveHandle = this.mouseMoveEvent.bind(this),
            this.mouseUpHandle = this.mouseUpEvent.bind(this),
            this.initEvent()
        }
        initEvent() {
            document.addEventListener("mousemove", this.mouseMoveHandle),
            document.addEventListener("mouseup", this.mouseUpHandle)
        }
        add(A, e={}) {
            this.addEvent(A),
            this.list.push({
                dom: A,
                handle: e
            })
        }
        addEvent(A) {
            A.addEventListener("mousedown", this.mouseDownHandle)
        }
        mouseDownEvent(A) {
            this.moveItem = this.list.filter((e=>e.dom === A.currentTarget))[0],
            this._call(A, "down")
        }
        mouseMoveEvent(A) {
            this._call(A, "move")
        }
        mouseUpEvent(A) {
            this._call(A, "up"),
            this.moveItem = null
        }
        _call(A, e) {
            var t = this.moveItem;
            if (t && t.handle) {
                const n = t.handle[e];
                if (n && isType$1(n, "Function"))
                    try {
                        n(A)
                    } catch (A) {
                        log.error(A)
                    }
            }
        }
        remove(A) {
            var e = this.list.findIndex((e=>e.dom === A));
            -1 !== e && ([e] = this.list.splice(e, 1),
            e && this.destroyEvent(e))
        }
        destroyEvent({dom: A}) {
            A && A.removeEventListener("mousedown", this.mouseDownHandle)
        }
        destroy() {
            this.list.forEach((A=>{
                this.destroyEvent(A)
            }
            )),
            document.removeEventListener("mousemove", this.mouseMoveHandle),
            document.removeEventListener("mouseup", this.mouseUpHandle),
            this.list = null,
            this.moveItem = null
        }
    }
    var moveManager = new MoveManager;
    class Rotate {
        constructor(A, e) {
            this.instance = A,
            this.mouseRoate = e
        }
        elementRotate() {
            var A;
            180 < (A = (A = this.instance.bound.record.angle) + this.mouseRoate) && (A -= 360),
            this.instance.setBound({
                angle: A = A < -180 ? 360 + A : A
            })
        }
    }
    class RotateEvent {
        constructor(A) {
            this.pointA = null,
            this.pointB = {
                x: 0,
                y: 0
            },
            this.pointC = {
                x: 0,
                y: 0
            },
            this.allAngle = 0,
            this.pointAxis = {},
            this.graphEvent = A,
            this.init()
        }
        init() {
            this.rotateModule = new Rotate
        }
        initRotateEvent(A) {
            A.el.firstElementChild && moveManager.add(A.el.firstElementChild, {
                down: e=>{
                    e.stopPropagation(),
                    this.graphEvent.tag = "rotate",
                    this.initDownRotate(e),
                    this.graphEvent.handler = A,
                    recordBound(selector.getSelectElements())
                }
                ,
                move: A=>{
                    this.rotateEvent(A)
                }
                ,
                up: A=>{
                    this.graphEvent.upEvent(A)
                }
            })
        }
        initDownRotate(A) {
            const e = selector.getContainers();
            this.pointA = e.map((A=>{
                var {width: e, height: t, left: n, top: s} = A.bound.plainReal();
                return {
                    id: A.id,
                    x: n + e / 2,
                    y: s + t / 2
                }
            }
            ));
            var t = this.graphEvent.instance.canvas.getZoom()
              , {top: n, left: s} = this.graphEvent.instance.canvas.el.getBoundingClientRect();
            this.pointB.x = (A.clientX - s) / t,
            this.pointB.y = (A.clientY - n) / t
        }
        rotateEvent(A) {
            var e, t, n, s = this.graphEvent.checkBeforeMove();
            null === s ? this.reset() : A && (A.preventDefault(),
            A.stopPropagation(),
            e = this.graphEvent.instance.canvas.getZoom(),
            ({top: t, left: n} = this.graphEvent.instance.canvas.el.getBoundingClientRect()),
            this.pointC.x = (A.clientX - n) / e,
            this.pointC.y = (A.clientY - t) / e,
            this.graphEvent.mouserotateTag = !0,
            this.rotate(s),
            this.graphEvent.instance.emit("graphRotating"))
        }
        rotate(A) {
            A.forEach((A=>this._rotate(A)))
        }
        _rotate(A) {
            const e = {}
              , t = {};
            var n, s, i, r = this.pointA.find((e=>e.id === A.id));
            r && (e.X = this.pointB.x - r.x,
            e.Y = this.pointB.y - r.y,
            t.X = this.pointC.x - r.x,
            t.Y = this.pointC.y - r.y,
            n = e.X * t.Y - e.Y * t.X,
            i = Math.sqrt(Math.pow(r.x - this.pointB.x, 2) + Math.pow(r.y - this.pointB.y, 2)),
            r = Math.sqrt(Math.pow(r.x - this.pointC.x, 2) + Math.pow(r.y - this.pointC.y, 2)),
            s = Math.sqrt(Math.pow(this.pointB.x - this.pointC.x, 2) + Math.pow(this.pointB.y - this.pointC.y, 2)),
            s = (Math.pow(i, 2) + Math.pow(r, 2) - Math.pow(s, 2)) / (2 * i * r),
            i = Math.round(180 * Math.acos(s) / Math.PI),
            this.allAngle = n < 0 ? -i : i,
            this.pointAxis[A.id] = this.handleRotateAxis(A),
            this.rotateModule.instance = A,
            this.rotateModule.mouseRoate = this.allAngle,
            this.rotateModule.elementRotate())
        }
        handleRotateAxis(A) {
            var {width: e, height: t} = A.bound;
            A = A.bound.record.angle,
            A = this.allAngle + A;
            return this._handleRotateAxis([{
                index: 7,
                x: e / 2,
                y: -t / 2
            }, {
                index: 6,
                x: -e / 2,
                y: -t / 2
            }, {
                index: 5,
                x: e / 2,
                y: t / 2
            }, {
                index: 4,
                x: -e / 2,
                y: t / 2
            }, {
                index: 3,
                x: e / 2,
                y: 0
            }, {
                index: 2,
                x: -e / 2,
                y: 0
            }, {
                index: 1,
                x: 0,
                y: -t / 2
            }, {
                index: 0,
                x: 0,
                y: t / 2
            }], A)
        }
        _handleRotateAxis(A, e) {
            return A.map((A=>{
                const t = {
                    index: A.index
                };
                return t.x = A.x * Math.cos(-e * Math.PI / 180) - A.y * Math.sin(-e * Math.PI / 180),
                t.y = A.x * Math.sin(-e * Math.PI / 180) + A.y * Math.cos(-e * Math.PI / 180),
                t
            }
            ))
        }
    }
    class GraphEvent {
        constructor() {
            this.instance = null,
            this.tag = null,
            this.mousemoveTag = !1,
            this.mouserotateTag = !1,
            this.x = 0,
            this.y = 0,
            this.mouseMoveInfo = {
                x: 0,
                y: 0
            },
            this._mouseMoveInfo = {
                x: 0,
                y: 0
            },
            this.handler = null,
            this.target = null,
            this.timeout = null,
            this.canMoveX = !0,
            this.canMoveY = !0,
            this.rotateEvent = new RotateEvent(this)
        }
        init(A) {
            this.instance = A,
            this.moveModule = new Move,
            this.scaleModule = new Scale
        }
        initResizeEvent(A) {
            moveManager.add(A.el, {
                down: e=>{
                    e.stopPropagation(),
                    this.tag = "resize",
                    this.x = e.clientX,
                    this.y = e.clientY,
                    this.handler = A,
                    recordBound(selector.getSelectElements())
                }
                ,
                move: e=>{
                    document.body.style.cursor = CURSOR_STYLE[A.index],
                    A.el.firstElementChild && (A.el.firstElementChild.style.cursor = CURSOR_STYLE[A.index]),
                    this.moveEvent(e)
                }
                ,
                up: e=>{
                    A.el.firstElementChild && (A.el.firstElementChild.style.cursor = "pointer"),
                    this.upEvent(e)
                }
            })
        }
        initRotateEvent(A) {
            this.rotateEvent.initRotateEvent(A)
        }
        initMoveEvent(A) {
            moveManager.add(A.el, {
                down: e=>{
                    if (e.stopPropagation(),
                    this.timeout)
                        return clearTimeout(this.timeout),
                        void (this.timeout = null);
                    A.eventActive && 0 === e.button && (this.target = A,
                    this.timeout = setTimeout((()=>{
                        this.selectDown(e),
                        this.timeout = null
                    }
                    ), 200))
                }
                ,
                move: A=>{
                    this.moveEvent(A)
                }
                ,
                up: A=>{
                    this.upEvent(A)
                }
            })
        }
        destroyMoveEvent(A) {
            moveManager.remove(A.el)
        }
        _destroyMoveEvent(A) {
            moveManager.remove(A.el.firstElementChild)
        }
        getRealSelect(A) {
            return !A.isSelected && checkLayoutType(A.parent, LAYOUT_MAP.GROUP) ? this.getRealSelect(A.parent) : A
        }
        getDBSelect(A) {
            const e = A.parent;
            return A.isSelected || !checkLayoutType(e, LAYOUT_MAP.GROUP) || e.isSelected ? (e.isSelected && e.unselect(),
            A) : this.getDBSelect(e)
        }
        select(A, e) {
            const t = "dblclick" === e.type ? this.getDBSelect(A) : this.getRealSelect(A);
            t.isSelected ? selector.isMultSelect && t.unselect() : t.select()
        }
        _move(A) {
            this.moveModule.instance = A,
            this.moveModule.mouseMoveInfo = this.mouseMoveInfo,
            this.moveModule.elementMove()
        }
        _scale(A, e) {
            this.scaleModule.instance = A,
            this.scaleModule.index = e,
            this.scaleModule.mouseMoveInfo = this.mouseMoveInfo,
            this.scaleModule.pointAxis = this.rotateEvent.pointAxis,
            this.scaleModule.moveHandler()
        }
        move(A) {
            A.forEach((A=>this._move(A)))
        }
        resize(A) {
            const e = this.handler.index;
            A.forEach((A=>this._scale(A, e)))
        }
        checkBeforeMove() {
            return this.tag ? !(A = (A = selector.getLayers()).length ? A : selector.getContainers()).length || checkLock(A) ? null : A : null;
            var A
        }
        selectDown(A) {
            this.select(this.target, A),
            this.tag = "move",
            this.x = A.clientX,
            this.y = A.clientY,
            recordBound(selector.getSelectElements()),
            this.target = null
        }
        dblclickEvent(A, e) {
            this.timeout && (clearTimeout(this.timeout),
            this.timeout = null),
            this.select(e, A)
        }
        moveEvent(A) {
            this.timeout && (clearTimeout(this.timeout),
            this.timeout = null,
            this.target && this.selectDown(A));
            var e, t = this.checkBeforeMove();
            null === t ? this.reset() : (A && (A.preventDefault(),
            A.stopPropagation(),
            e = this.instance.canvas.getZoom(),
            this._mouseMoveInfo.y += (A.clientY - this.y) / e,
            this._mouseMoveInfo.x += (A.clientX - this.x) / e,
            this.canMoveX && (this.mouseMoveInfo.x = this._mouseMoveInfo.x),
            this.canMoveY && (this.mouseMoveInfo.y = this._mouseMoveInfo.y),
            this.x = A.clientX,
            this.y = A.clientY),
            this.mousemoveTag = !0,
            "move" === this.tag && (this.move(t),
            this.instance.emit("graphMoving", {
                event: A,
                elements: t
            })),
            "resize" === this.tag && (this.resize(t),
            this.instance.emit("graphResizing", {
                event: A,
                handler: this.handler
            })))
        }
        moveKeyEvent(A, e, t) {
            this.tag || (recordBound(selector.getSelectElements()),
            this.tag = "move"),
            this.mousemoveTag || (this.mousemoveTag = !0);
            var n = this.checkBeforeMove();
            null === n ? this.reset() : (this.mouseMoveInfo.x += e,
            this.mouseMoveInfo.y += t,
            this.move(n),
            this.instance.emit("graphMoving", {
                event: A
            }))
        }
        upEvent() {
            if (this.mousemoveTag || this.mouserotateTag) {
                switch (this.tag) {
                case "move":
                    this.instance.emit("graphMoveEnd", selector.getSelectElements());
                    break;
                case "resize":
                    this.instance.emit("graphResizeEnd"),
                    document.body.style.cursor = "";
                    break;
                case "rotate":
                    this.instance.emit("graphRotateEnd", selector.getSelectElements())
                }
                this.reset()
            } else
                this.reset()
        }
        reset() {
            this.tag = null,
            this.mousemoveTag = null,
            this.mouserotateTag = null,
            this.handler = null,
            this.x = 0,
            this.y = 0,
            this.mouseMoveInfo.x = 0,
            this.mouseMoveInfo.y = 0,
            this._mouseMoveInfo.x = 0,
            this._mouseMoveInfo.y = 0,
            this.rotateEvent.pointA = null,
            this.rotateEvent.pointB.x = 0,
            this.rotateEvent.pointB.y = 0,
            this.rotateEvent.pointC.x = 0,
            this.rotateEvent.pointC.y = 0,
            this.rotateEvent.allAngle = 0
        }
        mouseOverEvent(A) {
            const e = getRootGroup(A);
            e.isSelected || this.instance.emit("graphMouseover", e.bound.plainReal(), e)
        }
        mouseOutEvent() {
            this.instance.emit("graphMouseout")
        }
    }
    function checkLock(A=[]) {
        return A.every((A=>A.isLock))
    }
    function getRootGroup(A) {
        return checkLayoutType(A.parent, LAYOUT_MAP.GROUP) ? getRootGroup(A.parent) : A
    }
    var graphEvent = new GraphEvent;
    class Sequence {
        constructor() {
            this.totalTick = [],
            this.callbacks = [],
            this.ticks = []
        }
        addTicks(A, e) {
            confirmArr(A) && (this.totalTick.push(A),
            this.callbacks.push(e))
        }
        isFinish() {
            return this.totalTick.length < 1 && this.ticks.length < 1
        }
        getCurrentTicks() {
            return 0 < this.ticks.length || this.totalTick.length && (this.ticks = this.totalTick.shift()),
            this.ticks
        }
    }
    const defaultList = {
        fromTop: ({t: A, c: e, r: t})=>isType$1(t, "Array") ? {
            translate: [0, (A.bottom - e.top) / t[1]]
        } : {
            translate: [0, (A.bottom - e.top) / t]
        },
        fromLeft: ({t: A, c: e, r: t})=>isType$1(t, "Array") ? {
            translate: [(A.right - e.left) / t[0], 0]
        } : {
            translate: [(A.right - e.left) / t, 0]
        },
        fromRight: ({t: A, c: e, r: t})=>isType$1(t, "Array") ? {
            translate: [(-e.right + A.left) / t[0], 0]
        } : {
            translate: [(-e.right + A.left) / t, 0]
        },
        fromBottom: ({t: A, c: e, r: t})=>isType$1(t, "Array") ? {
            translate: [0, (-e.bottom + A.top) / t[1]]
        } : {
            translate: [0, (-e.bottom + A.top) / t]
        },
        toTop: ({t: A, c: e, r: t})=>isType$1(t, "Array") ? {
            translate: [0, (-A.bottom + e.top) / t[1]]
        } : {
            translate: [0, (-A.bottom + e.top) / t]
        },
        toLeft: ({t: A, c: e, r: t})=>isType$1(t, "Array") ? {
            translate: [(-A.right + e.left) / t[0], 0]
        } : {
            translate: [(-A.right + e.left) / t, 0]
        },
        toRight: ({t: A, c: e, r: t})=>isType$1(t, "Array") ? {
            translate: [(e.right - A.left) / t[0], 0]
        } : {
            translate: [(e.right - A.left) / t, 0]
        },
        toBottom: ({t: A, c: e, r: t})=>isType$1(t, "Array") ? {
            translate: [0, (e.bottom - A.top) / t[1]]
        } : {
            translate: [0, (e.bottom - A.top) / t]
        }
    }
      , animateList = {
        ...defaultList,
        fadeOut: A=>({
            opacity: 0
        }),
        fadeIn: A=>({
            opacity: A.style.opacity || 1
        })
    };
    class SceneTransition {
        constructor() {
            this.param = {},
            this.typeCache = null,
            this.defaultTypes = Object.keys(defaultList)
        }
        _getTranslate(A, e) {
            var t = A.el.getBoundingClientRect()
              , n = A.root.canvas.el.getBoundingClientRect();
            A = A.root.canvas.getZoom("animation");
            return animateList[e]({
                t: t,
                c: n,
                r: A
            })
        }
        _dealAnimation(A) {
            const {target: e, animation: t} = A;
            if (isType$1(t, "Array"))
                return t.map((e=>{
                    this._dealAnimation({
                        ...A,
                        animation: e
                    })
                }
                )),
                !0;
            if (isType$1(t, "Object") && (this.param = {
                ...this.param,
                ...t
            }),
            this._isDefaultType(t))
                return this.param = {
                    ...this.param,
                    ...this._getTranslate(e, t)
                },
                this.typeCache = t,
                !0;
            if (Object.keys(animateList).includes(t)) {
                try {
                    isType$1(animateList[t](e), "Object") && (this.param = {
                        ...this.param,
                        ...animateList[t](e)
                    })
                } catch (e) {
                    log.error(e)
                }
                return !0
            }
            return isType$1(t, "String") && !Object.keys(animateList).includes(t) && log.warn(`Warn Animation: '${t}' type has not been registered`),
            {}
        }
        animator(A) {
            return this._dealAnimation(A),
            {
                ...A,
                animation: this.param,
                typeCache: this.typeCache
            }
        }
        registAnimation({name: A, animation: e}) {
            return this._isDefaultType(A) || ["fadeIn", "fadeOut"].includes(A) ? (log.warn(`Warn Animation: custom type '${A}' can not be one of ${this.defaultTypes},fadeIn,fadeOut`),
            !1) : (isType$1(A, "String") && isType$1(e, "Function") && (animateList[A] = e),
            !0)
        }
        _isDefaultType(A) {
            return this.defaultTypes.includes(A)
        }
    }
    class Tick {
        constructor(A) {
            this.typeCache = A.typeCache,
            this.type = A.type,
            this.value = A.endValue,
            this.target = A.target,
            this.callback = A.callback,
            this.duration = A.duration || 0,
            this.delay = A.delay || 0,
            this.easingType = A.easing || "linear",
            this.animation = A.animation,
            this.startTime = 0,
            this.endTime = 0,
            this.doneTime = 0,
            this.doingTime = 0,
            this.startValue = null,
            this.currentValue = null,
            this.endValue = null,
            this.isResume = !1,
            this.stopped = !1,
            this.ended = !1,
            this.easing = {
                linear: (A,e,t,n)=>t * (A / n) + e,
                easeOut: (A,e,t,n)=>-t * (Math.pow(A / n - 1, 4) - 1) + e
            },
            this.defaultValue = {
                translate: [0, 0],
                scale: [1, 1],
                skew: [0, 0],
                opacity: 1,
                rotate: 0
            }
        }
        init() {
            if (this.stopped)
                return !1;
            this.startTime = this.startTime || this._getNow();
            var A = this._getNow();
            return A === this.startTime && this._before(),
            this._getNow() - this.startTime < this.delay || ((this.endTime || this.startTime + this.duration + this.delay) < A ? (this.ended = !0,
            this._after(),
            this.callback && "function" == typeof this.callback && this.callback(this.target),
            !1) : (this._run(),
            !0))
        }
        pause() {
            this.stopped = !0,
            this.doneTime = this._getNow() - this.startTime - this.delay
        }
        resume() {
            return !(!this.stopped || (this.isResume = !0,
            this.delay = 0,
            this.startTime = this._getNow(),
            this.endTime = this.duration - this.doneTime + this._getNow(),
            this.stopped = !1))
        }
        _before() {
            var A;
            this.target.show(),
            this.typeCache && new RegExp("^from.*$").test(this.typeCache) && (A = this._getValue(this.type),
            "translate" === this.type && (this.target.style.translate = [-this.value[0] + A[0], -this.value[1] + A[1]]),
            "opacity" === this.type && (this.target.style.opacity = 0))
        }
        _after() {
            this.target.style[this.type] = this.endValue,
            this.typeCache && new RegExp("^to.*$").test(this.typeCache) && (this.target.hidden(),
            "translate" === this.type && (this.target.style.translate = this.startValue),
            "opacity" === this.type && (this.target.style.opacity = this.startValue))
        }
        _run() {
            if (!this.target)
                return !1;
            this.startValue = this.startValue || this._getValue(this.type),
            this.endValue = this.endValue || this._getEndValue(this.value);
            var A = this._getNow();
            return this.isResume ? this.doingTime = A - this.startTime + this.doneTime : this.doingTime = A - this.startTime - this.delay,
            this.currentValue = isType$1(this.endValue, "Array") ? this.endValue.map(((A,e)=>this.easing[this.easingType](this.doingTime, this.startValue[e], A - this.startValue[e], this.duration))) : this.easing[this.easingType](this.doingTime, this.startValue, this.endValue - this.startValue, this.duration),
            this.target.style[this.type] = this.currentValue,
            !0
        }
        _getValue(A) {
            var e = this.target.style[this.type];
            return void 0 !== e ? e : this.defaultValue[A]
        }
        _getEndValue(A) {
            var e = {
                "[object Array]": A,
                "[object String]": [Number(A), Number(A)],
                "[object Number]": [A, A]
            };
            let t = A;
            return ["translate", "scale", "skew"].includes(this.type) && (t = e[Object.prototype.toString.call(A)]),
            "translate" === this.type ? t.map(((A,e)=>A + this.startValue[e])) : t
        }
        _getNow() {
            return Date.now()
        }
    }
    class Animator {
        constructor(A) {
            this.opts = A,
            this.tweens = [],
            this.init()
        }
        init() {
            isType$1(this.opts, "Array") ? this.opts.forEach((A=>{
                this._dealTarget(A)
            }
            )) : this._dealTarget(this.opts)
        }
        _dealTarget(A) {
            const e = A.target;
            confirmArr(e) ? e.forEach((e=>{
                this._dealGroup(e, A)
            }
            )) : this._dealGroup(e, A)
        }
        _dealGroup(A, e) {
            checkLayoutType(A, "Group") ? A.containers.forEach((A=>{
                this._dealAnimation({
                    ...e,
                    target: A
                })
            }
            )) : this._dealAnimation({
                ...e,
                target: A
            })
        }
        _dealAnimation(A) {
            isType$1(A.animation, "Object") ? this._createTick(A) : this._createTick((new SceneTransition).animator(A))
        }
        _createTick(A) {
            const e = Object.keys(A.animation);
            e.forEach(((t,n)=>{
                this.tweens = [...this.tweens, new Tick({
                    ...A,
                    type: t,
                    endValue: A.animation[t],
                    callback: n === e.length - 1 ? A.callback : null
                })]
            }
            ))
        }
    }
    class AnimatorManager {
        constructor() {
            this._running = !1,
            this.sequence = new Sequence
        }
        run(A, e) {
            return this.sequence.addTicks(new Animator(A).tweens, e),
            this._startLoop(),
            this
        }
        _startLoop() {
            if (this._running)
                return !1;
            const A = this;
            return A._running = !0,
            window.requestAnimationFrame((function e() {
                A._running && (window.requestAnimationFrame(e),
                A._flush())
            }
            )),
            !0
        }
        _flush() {
            this.ticks = this.sequence.getCurrentTicks(),
            this.ticks.forEach(((A,e)=>{
                A.init() || this.ticks.splice(e, 1)
            }
            )),
            this.callbacks = this.sequence.callbacks,
            this.ticks.length < 1 && this.callbacks.length && (isType$1("function" === this.callbacks[0]) && this.callbacks[0](),
            this.callbacks.shift()),
            this.sequence.isFinish() && (this._running = !1)
        }
        pause() {
            this._running = !1,
            this.ticks.forEach((A=>A.pause()))
        }
        resume() {
            this.ticks.forEach((A=>A.resume())),
            this._startLoop()
        }
        getCallback() {
            return this.callbacks
        }
        register({name: A, animation: e}) {
            (new SceneTransition).registAnimation({
                name: A,
                animation: e
            })
        }
    }
    var version = "0.1.52";
    class Align {
        constructor() {}
        top(A) {
            A = this._getEls(A);
            var e = this._getBoundaryVal("top", A);
            isType$1(e, "Null") || this._render("top", A, e)
        }
        bottom(A) {
            A = this._getEls(A);
            var e = this._getBoundaryVal("bottom", A);
            isType$1(e, "Null") || this._render("bottom", A, e)
        }
        left(A) {
            A = this._getEls(A);
            var e = this._getBoundaryVal("left", A);
            isType$1(e, "Null") || this._render("left", A, e)
        }
        right(A) {
            A = this._getEls(A);
            var e = this._getBoundaryVal("right", A);
            isType$1(e, "Null") || this._render("right", A, e)
        }
        horizal(A) {
            A = this._getEls(A);
            var e = this._getBoundaryVal("horizal", A);
            isType$1(e, "Null") || this._render("horizal", A, e)
        }
        vertical(A) {
            A = this._getEls(A);
            var e = this._getBoundaryVal("vertical", A);
            isType$1(e, "Null") || this._render("vertical", A, e)
        }
        _render(A, e, t) {
            e.forEach((e=>{
                var n, s = e.bound.plainReal()[A];
                if (!s || s - t)
                    switch (A) {
                    case "top":
                    case "bottom":
                        e.move(0, t - s);
                        break;
                    case "left":
                    case "right":
                        e.move(t - s, 0);
                        break;
                    case "vertical":
                        checkLayoutType(e, [LAYOUT_MAP.GROUP]) ? (n = this._getBoundaryVal("vertical", [e]),
                        e.move(0, t - n)) : e.move(0, t - e.height / 2 - e.bound.plainReal().top);
                        break;
                    case "horizal":
                        checkLayoutType(e, [LAYOUT_MAP.GROUP]) ? (n = this._getBoundaryVal("horizal", [e]),
                        e.move(t - n, 0)) : e.move(t - e.width / 2 - e.bound.plainReal().left, 0)
                    }
            }
            ))
        }
        _getBoundaryVal(A, e) {
            var t = e.reduce(((e,t)=>{
                var n = t.bound.plainReal();
                switch (A) {
                case "vertical":
                    e[0].push(n.top),
                    e[1].push(n.bottom);
                    break;
                case "horizal":
                    e[0].push(n.left),
                    e[1].push(n.right);
                    break;
                default:
                    e.push(n[A])
                }
                return e
            }
            ), "vertical" === A || "horizal" === A ? [[], []] : []);
            if ("vertical" === A || "horizal" === A) {
                if (!t[0].length || !t[1].length)
                    return null
            } else if (!t.length)
                return null;
            switch (A) {
            case "top":
            case "left":
                return Math.min(...t);
            case "bottom":
            case "right":
                return Math.max(...t);
            case "vertical":
            case "horizal":
                return (Math.min(...t[0]) + Math.max(...t[1])) / 2;
            default:
                return null
            }
        }
        _getEls(A) {
            return A || selector.getSelectElements()
        }
    }
    var align = new Align;
    class UI extends EventEmitter {
        constructor(A, e={}, t={}) {
            if (!(A = getElement(A)))
                throw new Error("无效dom");
            super(),
            this.id = getUID("ui"),
            this.type = LAYOUT_MAP.UI,
            this.rootEl = A,
            this.parentEl = null,
            this.el = null,
            this.options = clone(e),
            this.config = merge(defaultConfig[LAYOUT_MAP.UI], t),
            this.bound = null,
            this.nextTick = null,
            this.canvasMode = null,
            this.CANVASMODE = null,
            this.canvas = null,
            this.selector = null,
            this.animation = null,
            this.align = null,
            this.insidePreview = null,
            this.store = store$1,
            this._moveCanvasEnd = !0,
            this.init()
        }
        init() {
            this.lifeCycle = createLifeCycle(this),
            this.lifeCycle.call("beforeCreate"),
            this.id = getUID("ui"),
            this.parentEl = createElement(),
            this.parentEl.style.cssText = "position: relative; width: 100%; height: 100%;",
            this.el = createElement(),
            this.el.dataset.id = this.id,
            this.el.style.cssText = "position: absolute; width: 100%; height: 100%; overflow: hidden; background: " + this.config.theme.ui.background,
            this.lifeCycle.call("beforeMount"),
            this.parentEl.appendChild(this.el),
            this.rootEl.appendChild(this.parentEl),
            this.lifeCycle.call("mounted"),
            this.bound = BoundingRect.create(this.el.getBoundingClientRect()),
            store$1.init(this),
            this.nextTick = nextTick.call.bind(nextTick),
            this.canvasMode = CANVAS_MODE.EDIT,
            this.CANVASMODE = CANVAS_MODE,
            this.canvas = layoutManager.createLayout(this, LAYOUT_MAP.CANVAS, this.options),
            this.selector = selector,
            graphEvent.init(this),
            this.animation = new AnimatorManager,
            this.lifeCycle.call("created"),
            this.on("graphMoveEnd", (A=>{
                commandAPI.drag(A)
            }
            )).on("graphResizeEnd", (A=>{
                commandAPI.drag(A)
            }
            )).on("graphRotateEnd", (A=>{
                commandAPI.rotate(A)
            }
            )),
            this._clickEvent = clickEvent.bind(this),
            this._resizeEvent = this.resize.bind(this),
            this._keydownListener = this.keydownEvent.bind(this),
            this._keyupListener = this.keyupEvent.bind(this),
            this._mouseupListener = this.mouseupEvent.bind(this),
            this._scrollEvent = this.updateSite.bind(this),
            this.el.addEventListener("click", this._clickEvent),
            window.addEventListener("resize", this._resizeEvent),
            window.addEventListener("scroll", this._scrollEvent),
            document.addEventListener("keydown", this._keydownListener),
            document.addEventListener("keyup", this._keyupListener)
        }
        initCanvasMove() {
            document.body.style.cursor = "pointer",
            document.addEventListener("mouseup", this._mouseupListener),
            moveManager.add(this.el, {
                move: A=>{
                    A.target !== this.canvas.contentEl && (this.moveCanvasEnd && (this.moveCanvasEnd = !1),
                    this.canvas.move(A.movementX, A.movementY),
                    this.nextTick((()=>{
                        this.emit("moveCanvas", this)
                    }
                    )))
                }
            })
        }
        removeCanvasMove() {
            document.body.style.cursor = "",
            this.moveCanvasEnd && document.removeEventListener("mouseup", this._mouseupListener),
            moveManager.remove(this.el)
        }
        get operation() {
            return this.canvas ? this.canvas.operation : null
        }
        get moveCanvasEnd() {
            return this._moveCanvasEnd
        }
        set moveCanvasEnd(A) {
            A && document.removeEventListener("mouseup", this._mouseupListener),
            this._moveCanvasEnd = A
        }
        query(A) {
            let e = this._query(A);
            return Array.isArray(e) ? e.filter((A=>!0 === A._isMounted)) : e && (!0 === e._isMounted || "Group" === e.type && !1 !== e._isMounted) ? e : null
        }
        _query(A) {
            if (!A)
                return store$1.getAllElements();
            if (A instanceof RegExp)
                return store$1.getAllElements().filter((e=>A.test(e.name)));
            var e = A.substring(0, 1);
            if ("#" === e)
                return store$1.getElementById(A.substring(1));
            if ("." !== e)
                return store$1.getElementsByName(A);
            switch (A.substring(1)) {
            case LAYOUT_MAP.CANVAS:
                return store$1.getCanvas()[0];
            case LAYOUT_MAP.LAYER:
                return store$1.getLayers();
            case LAYOUT_MAP.GROUP:
                return store$1.getGroups();
            case LAYOUT_MAP.CONTAINER:
                return store$1.getContainers();
            default:
                return null
            }
        }
        toJSON() {
            if (!this.canvas)
                return "";
            const A = {}
              , e = this.canvas.toJSON();
            var t = (n = this.ruler ? this.ruler._getRulerLines("to") : null) ? n.lines : null
              , n = n ? n.hideAllLine : null;
            t && t.length && (e.lines = t,
            e.hideAllLine = n),
            t = {
                version: 1,
                scene: e,
                userData: A
            };
            return function e(t) {
                var n = t.option.adapter;
                n && (A[t.option.id] = n,
                t.option.adapter = n.type || "ConchAdapter"),
                t.children && t.children.forEach((A=>{
                    e(A)
                }
                ))
            }(e),
            JSON.stringify(t)
        }
        handleComponentComplete(A) {
            if (isUnDef(A.userData))
                return !0;
            const e = Object.keys(A.userData).length;
            return !e || (this.adapterCount = 0,
            this.on("collectCompComplete", (()=>{
                this.adapterCount++,
                this.adapterCount === e && (this.off("collectCompComplete"),
                "function" == typeof this._resolve && this._resolve(!0))
            }
            )),
            !1)
        }
        parseJSON(A) {
            return new Promise((e=>{
                this._resolve = e,
                this._parseJSON(A)
            }
            ))
        }
        _parseJSON(A) {
            if (this.canvasMode === CANVAS_MODE.PLAY)
                return log.warn("预览模式下，无法使用");
            if (!A)
                return log.warn("参数不能为空");
            if (isType$1(A, "String"))
                try {
                    A = window.JSON.parse(A)
                } catch (e) {
                    return log.warn(A + " 数据不符合要求")
                }
            if (!isType$1(A, "Object"))
                return log.warn(A + " 数据不符合要求");
            this.lifeCycle.call("beforeParseJSON", A),
            A = clone(A);
            var e = this.handleComponentComplete(A);
            A.scene && function e(t) {
                t.option.adapter && (t.option.adapter = A.userData[t.option.id]),
                t.children && t.children.forEach((A=>{
                    e(A)
                }
                ))
            }(A.scene);
            const t = {};
            return this.canvas.layers.forEach((A=>A.isDefaultLayer && (t[A.id] = A.dom))),
            this.canvas.destroy(),
            this.canvas = layoutManager.parseLayout(this, A.scene, {
                inStack: !1
            }),
            this.ruler && A.scene.lines && this.ruler._parseRulerLines(A),
            this.canvas.layers.forEach((A=>{
                var e = t[A.id];
                A.isDefaultLayer && e && (A.dom.parentNode.insertBefore(e, A.dom.parentNode.childNodes[1]),
                A.dom.parentNode.removeChild(A.dom),
                A.dom = e)
            }
            )),
            e && "function" == typeof this._resolve && this._resolve(!0),
            !0
        }
        play() {
            return this.canvas ? this.canvasMode === CANVAS_MODE.PLAY ? (log.warn("已经进入预览模式"),
            !0) : (this.canvasMode = CANVAS_MODE.PLAY,
            this.selector.clear(),
            this.canvas.updateMode()) : (log.warn("进入预览模式需要画布"),
            !1)
        }
        edit() {
            return this.canvas ? this.canvasMode === CANVAS_MODE.EDIT ? (log.warn("已经进入编辑模式"),
            !0) : (this.canvasMode = CANVAS_MODE.EDIT,
            this.canvas.updateMode()) : (log.warn("进入编辑模式需要画布"),
            !1)
        }
        enterInsidePreview(A) {
            return !(this.canvasMode === this.CANVASMODE.PLAY || this.insidePreview || !A || !hasOwn(A, "_enterPreview") || (A.zDown && A.zIndexUp(),
            !A._enterPreview() || (this.insidePreview = A,
            this.emit("enterInsidePreview", this.insidePreview),
            0)))
        }
        exitInsidePreview(A) {
            return !(!this.insidePreview || A && A !== this.insidePreview || !this.insidePreview._exitPreview() || (this.insidePreview = null,
            this.emit("exitInsidePreview"),
            0))
        }
        getInsidePreview() {
            return this.insidePreview
        }
        getScaleMode() {
            return this.canvas && this.canvas.scaleMode
        }
        setScaleMode(A) {
            if (this.canvasMode === CANVAS_MODE.PLAY)
                return log.warn("预览模式下，无法设置画布缩放模式");
            if (!this.canvas || A === this.canvas.scaleMode)
                return !0;
            var e = Object.entries(CANVAS_SCALE_MODE).find((e=>e[1] === A));
            return e && (this.canvas.scaleMode = CANVAS_SCALE_MODE[e[0]]),
            !0
        }
        resize() {
            this.bound = BoundingRect.create(this.el.getBoundingClientRect()),
            this.canvasMode === CANVAS_MODE.EDIT ? this.canvas && this.canvas.zoomAvailCenter() : this.canvas.updateMode()
        }
        updateSite() {
            var {top: A, left: e} = this.el.getBoundingClientRect()
              , {top: t, left: n} = this.bound;
            t === A && n === e || this.bound.setData({
                top: A,
                left: e
            })
        }
        keydownEvent(A) {
            switch (A.code) {
            case "Escape":
                this.exitInsidePreview();
                break;
            case "Space":
                this.initCanvasMove()
            }
        }
        keyupEvent(A) {
            "Space" === A.code && this.removeCanvasMove()
        }
        mouseupEvent() {
            this.emit("moveCanvasEnd", {}),
            this.moveCanvasEnd = !0
        }
        alignTo(A, e) {
            return !!["top", "bottom", "left", "right", "vertical", "horizal"].includes(A) && (recordBound(e = isType$1(e, "Array") ? e : void 0),
            A = align[A](e),
            commandAPI.align(e),
            A)
        }
        registerCommandType(A) {
            return generateExecution.addCommandType(A)
        }
        get layers() {
            return store$1.getLayers()
        }
        get groups() {
            return store$1.getGroups()
        }
        get containers() {
            return store$1.getContainers()
        }
        destroy() {
            this.lifeCycle.call("beforeDestroy"),
            moveManager.remove(this.el),
            this.el.removeEventListener("click", this._clickEvent),
            window.removeEventListener("resize", this._resizeEvent),
            window.removeEventListener("scroll", this._scrollEvent),
            document.removeEventListener("keydown", this._keydownListener),
            document.removeEventListener("keyup", this._keyupListener),
            super.destroy(),
            this.bound = null,
            this.canvas && this.canvas.destroy(),
            store$1.destroy(),
            this.canvasMode = null,
            this.rootEl.removeChild(this.parentEl),
            this.parentEl = null,
            this.lifeCycle.call("destroyed"),
            this.lifeCycle.destroy()
        }
        undo(A, e) {
            return command.undo(A, e)
        }
        canUndo() {
            return command.canUndo()
        }
        canRedo() {
            return command.canRedo()
        }
        redo(A, e) {
            return command.redo(A, e)
        }
        commandClear() {
            command.clear()
        }
    }
    function clickEvent(A) {
        this.el !== A.target || this.getInsidePreview() || this.selector.clear()
    }
    UI.version = version;
    class Queue {
        constructor() {
            this.taskCaches = [],
            this.has = {},
            this.waiting = !1,
            this.flushing = !1
        }
        _flushCaches() {
            let A;
            for (this.flushing = !0; this.taskCaches.length; )
                A = this.taskCaches.shift(),
                this.has[A.id] = void 0,
                A.run();
            this._resetState()
        }
        _resetState() {
            this.taskCaches.length = 0,
            this.has = {},
            this.waiting = this.flushing = !1
        }
        addTask(A) {
            var e = A.id;
            void 0 === this.has[e] ? (this.has[e] = A.instance,
            this.flushing || this.taskCaches.push(A),
            this.waiting || (this.waiting = !0,
            nextTick.call(this._flushCaches.bind(this)))) : this.has[e] !== A.instance && (this.has[e] = A.instance,
            e = this.taskCaches.findIndex((e=>e.id === A.id)),
            this.taskCaches.splice(e, 1),
            this.taskCaches.push(A))
        }
        destroy() {
            this._resetState()
        }
    }
    var queue = new Queue;
    const STYLELIST = ["position", "top", "left", "width", "height", "transform", "transformOrigin", "filter", "right", "bottom", "outline", "backgroundImage", "backgroundColor", "background", "backgroundPosition", "flex", "padding", "margin", "display", "border", "opacity", "zIndex", "pointerEvents", "cursor", "flexDirection", "justifyContent", "alignItems", "backgroundRepeat", "backgroundSize", "backdropFilter", "boxSizing"];
    function setTransform(A) {
        return function(e) {
            this._setTransform(A, e)
        }
    }
    function setDistance(A, e) {
        return function(t) {
            this._setDistance(A, e, t)
        }
    }
    const styleFnMap = {
        translate: setTransform("translate"),
        scale: setTransform("scale"),
        skew: setTransform("skew"),
        rotate: setTransform("rotate"),
        matrix: setTransform("matrix")
    }
      , combineStyle = [["padding", "margin"], ["Top", "Right", "Bottom", "Left"]]
      , getPx = (combineStyle[0].forEach((A=>{
        combineStyle[1].forEach(((e,t)=>styleFnMap[A + e] = setDistance(A, t)))
    }
    )),
    A=>/px|%/.test(A) ? A : A + "px")
      , getDeg = A=>/deg/.test(A) ? A : A + "deg"
      , getUrl = A=>/url/.test(A) ? A : `url(${A})`
      , isArray = A=>isType$1(A, "Array")
      , isNumberNaN = A=>!Number.isNaN(Number(A))
      , join = (A,e)=>A.join(e)
      , replace = (A,e)=>isArray(A) ? A.filter((A=>isDef(A))).map((A=>e(A))) : e(A)
      , handler = {
        backgroundImage: A=>getUrl(A),
        width: A=>isNumberNaN(A) ? getPx(A) : A,
        height: A=>isNumberNaN(A) ? getPx(A) : A,
        margin: A=>isArray(A) ? join(replace(A, getPx), " ") : A,
        padding: A=>isArray(A) ? join(replace(A, getPx), " ") : A,
        top: A=>isNumber(A) ? getPx(A) : A,
        left: A=>isNumber(A) ? getPx(A) : A,
        right: A=>isNumber(A) ? getPx(A) : A,
        bottom: A=>isNumber(A) ? getPx(A) : A
    };
    class Style {
        constructor(A) {
            return this.parent = A,
            this.layout = this.parent.layout,
            this._style = {},
            this.dirtyMap = {},
            new Proxy(this,{
                get: (A,e,t)=>-1 !== STYLELIST.indexOf(e) || Reflect.has(styleFnMap, e) ? A._style[e] : Reflect.get(A, e, t),
                set: (A,e,t,n)=>-1 !== STYLELIST.indexOf(e) ? (A._setStyle(e, t),
                !0) : styleFnMap[e] ? (styleFnMap[e].call(A, t),
                !0) : Reflect.set(A, e, t, n)
            })
        }
        static factory(A) {
            return new Style(A)
        }
        setOption(A) {
            return !!isType$1(A, "Object") && (Object.keys(A).forEach((e=>{
                this[e] = A[e]
            }
            )),
            !0)
        }
        getValue(A) {
            if (void 0 === A)
                return {
                    ...this._style
                };
            var e = this._style[A];
            return A in handler ? handler[A](e) : "transform" === A ? this._getTransformStyleValue() : isArray(e) ? join(e, " ") : e
        }
        _getTransformStyleValue() {
            var {translate: A, scale: e, rotate: t, skew: n, matrix: s} = this._style
              , i = "";
            return (i += (isArray(A) ? `translate(${join(replace(A, getPx), ",")}) ` : "") + (isArray(e) ? `scale(${join(e, ",")}) ` : "") + (isDef(t) ? `rotate(${replace(t, getDeg)}) ` : "") + (isArray(n) ? `skew(${join(replace(n, getDeg), ",")}) ` : "") + (isArray(s) ? `matrix(${join(s, ",")}) ` : "")) || this._style.transform
        }
        getDirtyStyleList() {
            const A = [];
            for (const t in this.dirtyMap) {
                var e = this.getValue(t);
                null != e && this.dirtyMap[t] && (A.push({
                    name: t,
                    value: e
                }),
                this.dirtyMap[t] = !1)
            }
            return A
        }
        _setStyle(A, e) {
            isType$1(e, "Object") ? this._style[e.name] = e.value : this._style[A] = e,
            this.dirtyMap[A] = !0,
            this.parent.dirty = !0,
            queue.addTask({
                id: this.parent.id,
                instance: this.parent,
                run: this.parent._updateStyle.bind(this.parent)
            })
        }
        _setDistance(A, e, t) {
            if ("margin" === A || "padding" === A) {
                let n = this[A];
                (n = isType$1(n, "Array") ? n : [0, 0, 0, 0])[e] = t,
                this._setStyle(A, n)
            }
        }
        _setTransform(A, e) {
            e = ["translate", "scale", "skew"].includes(A) ? this.formatValue(e) : e,
            this._setStyle("transform", {
                name: A,
                value: e
            })
        }
        formatValue(A) {
            let e = "";
            return isType$1(A, "Number") && (e = [A, A]),
            isType$1(A, "Array") && isType$1(A[0], "Number") && isType$1(A[1], "Number") ? [A[0], A[1]] : e
        }
        destroy() {
            this._style = {},
            this.dirtyMap = {}
        }
        set dirty(A) {
            this.parent.dirty = A
        }
        get dirty() {
            return this.parent.dirty
        }
    }
    const eventList = ["click", "dblclick", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu", "mouseover"];
    class DomEvent {
        initDomEvent() {
            this.eventBind = {},
            this._emit = this.emit.bind(this),
            this.event = new EventEmitter
        }
        on(A, e, t) {
            return this._hasType(A) && (this.event.on(A, e, t),
            this._addListener(A)),
            this
        }
        once(A, e, t) {
            if (!this._hasType(A))
                return this;
            const n = (...s)=>{
                this.off(A, n),
                e.apply(t, s)
            }
            ;
            return this.on(A, n),
            this
        }
        off(A, e) {
            return A || e ? this._hasType(A) && (e || this._removeListener(A),
            this.event.off(A, e)) : this.destroyEvent(),
            this
        }
        emit(A) {
            this.event.emit(A.type, A)
        }
        destroyEvent() {
            for (const A in this.eventBind)
                this._removeListener(A);
            return this.event.destroy(),
            this
        }
        _addListener(A) {
            this.eventBind[A] || (this.eventBind[A] = !0,
            this.el.addEventListener(A, this._emit))
        }
        _removeListener(A) {
            this.eventBind[A] && (this.eventBind[A] = !1,
            this.el.removeEventListener(A, this._emit))
        }
        _hasType(A) {
            return !!eventList.includes(A)
        }
    }
    class AdapterManager {
        constructor() {
            this._map = new Map
        }
        getBaseAdapter() {
            return this._map.has("BaseAdapter") ? this._map.get("BaseAdapter") : (log.warn("BaseAdapter还没有注册"),
            null)
        }
        register(A, e) {
            if (this._map.has(A))
                console.warn("重复注册" + A);
            else {
                if (!e.factory)
                    throw new Error("注册的对象缺失factory静态方法");
                this._map.set(A, e)
            }
        }
        creatComponent(A, e, t, n) {
            if (!this._map.has(A))
                return console.warn(A + "尚未注册，请检查参数"),
                !1;
            try {
                return this._map.get(A).factory(A, e, t, n)
            } catch (e) {
                throw new Error(`创建${A}出错` + e)
            }
        }
    }
    var adapterManager = new AdapterManager
      , dep = new EventEmitter;
    class GraphObject extends Displayable {
        constructor(A, e) {
            super(A, e),
            this.el = null,
            this.style = null,
            this.adapter = null,
            this.bound = null,
            this.isMounted = null,
            this._mountInfo = null,
            this._moveInfo = null,
            this._initAdapterData = null,
            this.eventActive = null,
            this.maskStyle = null,
            this.maskDefaultEnable = !0,
            this.animation = null
        }
        init() {
            super.init(),
            this.el = createElement(),
            this.el.dataset.id = this.id,
            this.contentEl = createElement(),
            this.contentEl.style.cssText = "position: relative; width: 100%; height: 100%; zIndex: 0;",
            this.maskStyle || (this.maskStyle = clone(MASK_STYLE)),
            this.maskEl = createElementWithAttr("div", this.maskStyle, {
                id: "mask"
            }),
            this.el.appendChild(this.contentEl),
            this.maskDefaultEnable && this._initMask(),
            this.style = Style.factory(this),
            this.options.style && (this.style.setOption(this.options.style),
            this._setVisible(this.visible)),
            this.options.animation && (this.animation = this.options.animation),
            this.isMounted = !1,
            this._mountInfo = null,
            this._moveInfo = null,
            this.eventActive = !0;
            var {left: A, top: e, width: t, height: n, rotate: s} = this.boundingRect();
            this.bound = new BoundingRect(A,e,t,n,{
                left: 0,
                top: 0
            },s),
            this._initAdapterData = this.options.adapter,
            checkLayoutType(this, LAYOUT_MAP.CONTAINER) && this.initBoundOffset(),
            this.initDomEvent(),
            this._initEvent(),
            commandAPI.graph(this, this.config.inStack)
        }
        mount() {
            if (!this.isMounted) {
                var A = this._mountInfo;
                let e, t = getElementParent(this.parent);
                A && (t = A.target,
                e = A.type),
                this.lifeCycle.call("beforeMount"),
                mount(this, t, e),
                this._mount && this._mount(),
                this.isMounted = !0,
                this._mountInfo = null,
                this.destroyDep(),
                this.registerDep(),
                this.lifeCycle.call("mounted"),
                this.root.nextTick((()=>{
                    var A;
                    this._initAdapterData && (A = this._initAdapterData,
                    this.adapter = adapterManager.creatComponent(A.type, A.name, this, A),
                    this.adapter._initComponent(A.option)),
                    delete this._initAdapterData,
                    this.animation && "enter"in this.animation && (this.hidden(),
                    this.show())
                }
                ))
            }
        }
        registerDep() {}
        unmount() {
            if (this.isMounted) {
                let A = this.el.nextSibling
                  , e = "before";
                A || (A = this.el.parentNode,
                e = null),
                this._mountInfo = {
                    target: {
                        el: A
                    },
                    type: e
                },
                unmount(this),
                this.isMounted = !1
            }
        }
        setAnimation(A, e) {
            var t, n;
            "enter" !== A && "leave" !== A || (({animation: e, delay: t, duration: n} = e),
            this.animation = {
                ...this.animation
            },
            this.animation[A] = {
                animation: e,
                delay: t,
                duration: n
            })
        }
        _initEvent() {
            this.eventActive = !0,
            graphEvent.initMoveEvent(this),
            this.on("dblclick", dblclickEvent, this)
        }
        _startEvent() {
            return this.eventActive = !0
        }
        _pauseEvent() {
            return !(this.eventActive = !1)
        }
        _initMask() {
            return !this.maskEl.parentNode && (this.el.appendChild(this.maskEl),
            !0)
        }
        _destroyMask() {
            return !!this.maskEl.parentNode && (this.el.removeChild(this.maskEl),
            !0)
        }
        _destroyEvent() {
            this.eventActive = !1,
            graphEvent.destroyMoveEvent(this),
            this.off("dblclick", dblclickEvent, this)
        }
        _updateStyle() {
            this.el && (this.lifeCycle.call("beforeUpdate"),
            updateStyle(this),
            this.lifeCycle.call("updated"))
        }
        show() {
            return !this.visible && (this.visible = !0,
            this._setVisible(!0) && this.animation && (A = (A = this.animation) && A.enter) && (({animation: A, delay: e, duration: t} = A),
            this.root.animation.run({
                target: this,
                animation: A,
                delay: e,
                duration: t
            })),
            commandAPI.attribute(this, "show"),
            !0);
            var A, e, t
        }
        hidden() {
            return !!this.visible && (this.unselect(),
            this.visible = !1,
            this._setVisible(!1),
            commandAPI.attribute(this, "hidden"),
            !0)
        }
        _setVisible(A=!0) {
            return this.style.display = A ? "" : "none",
            A
        }
        _adapterResize() {
            this.adapter && this.root.nextTick((()=>{
                this.adapter.resize()
            }
            ))
        }
        setBound(A) {
            var e, t, n, s, i;
            this.isLock || (this.bound.setData(A),
            ({left: A, top: e, width: t, height: n} = this.bound),
            ({width: s, height: i} = this.style.getValue()),
            this.style.setOption({
                left: A - this.translate[0],
                top: e - this.translate[1],
                width: t,
                height: n
            }),
            s === t && i === n || this._adapterResize())
        }
        move(A, e) {
            var {left: t, top: n} = this.bound;
            setBoundEvent.call(this, {
                left: t + A,
                top: n + e
            })
        }
        boundingRect() {
            return {
                left: this.left + this.translate[0],
                top: this.top + this.translate[1],
                width: this.width * this.scale,
                height: this.height * this.scale,
                rotate: this.rotate
            }
        }
        get left() {
            return parseInt(this.style.left)
        }
        get top() {
            return parseInt(this.style.top)
        }
        get height() {
            return parseInt(this.style.height)
        }
        get width() {
            return parseInt(this.style.width)
        }
        get translate() {
            return this.style.translate || [0, 0]
        }
        get rotate() {
            return this.style.rotate || 0
        }
        get scale() {
            return this.style.scale || 1
        }
        set left(A) {
            setBoundEvent.call(this, {
                left: A
            })
        }
        set top(A) {
            setBoundEvent.call(this, {
                top: A
            })
        }
        set height(A) {
            setBoundEvent.call(this, {
                height: A
            })
        }
        set width(A) {
            setBoundEvent.call(this, {
                width: A
            })
        }
        get app() {
            return this.adapter && this.adapter.componentInstance
        }
        destroy() {
            this.lifeCycle.call("beforeDestroy"),
            super.destroy(),
            this._moveInfo = null,
            this.destroyDep(),
            commandAPI.unGraph(this),
            this.lifeCycle.call("destroyed")
        }
        _destroyTruthy() {
            this._moveInfo = null,
            this.off(),
            super._destroyTruthy()
        }
        destroyDep() {
            dep.off("toggleEvent", this.toggleCtEvent, this)
        }
    }
    function setBoundEvent(A) {
        this.setBound(A),
        this.root.emit("graphBoundChange", this)
    }
    function dblclickEvent(A) {
        A.stopPropagation(),
        this.eventActive && graphEvent.dblclickEvent(A, this)
    }
    applyMixins(GraphObject, [DomEvent]);
    class Base {
        constructor() {
            this.el = null,
            this._el = null,
            this.visible = !1,
            this.type = null
        }
        init(A, e, t) {
            this.el = createElement(),
            this.type = this.el.dataset.id = A,
            Object.assign(this.el.style, e),
            0 === t && this.createRotateDom(e),
            this.visible = !0
        }
        createRotateDom(A) {
            A = parseFloat(A.width);
            const e = createElement();
            e.dataset.type = "rotate",
            A = {
                width: "16px",
                height: "16px",
                position: "absolute",
                cursor: "pointer",
                top: "-21px",
                left: -(8 - A / 2) + "px",
                backgroundImage: rotateIcon(),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            },
            Object.assign(e.style, A),
            this._el = e,
            this.el.appendChild(this._el)
        }
        setStyle(A) {
            isPlainObject(A) && Object.assign(this.el.style, A)
        }
        destroy() {
            unmount(this),
            this.el = null,
            this.type = null,
            this.visible = !1,
            this.config = null
        }
        isRotate() {
            var A = store$1.getSelectElements();
            return !(A && (1 === A.length && "Group" === A[0].type || 1 < A.length))
        }
    }
    class Rect extends Base {
        constructor(A, e) {
            super(),
            this.config = e,
            this.init(A)
        }
        init(A="rect") {
            var {rectColor: e, rectStyle: t} = this.config.theme;
            super.init(A, {
                display: "none",
                top: "0px",
                left: "0px",
                width: "0px",
                height: "0px",
                zIndex: "20",
                border: `1px ${e} ` + t,
                boxSizing: "border-box",
                position: "absolute",
                pointerEvents: "none"
            })
        }
        show(A, e=1, t) {
            var n, {top: A, left: s, width: i, height: r, angle: o} = A, a = this.isRotate();
            i <= 0 && r <= 0 ? this.hidden() : (({rectColor: t, rectStyle: n} = {
                ...this.config.theme,
                ...this.config.theme[t]
            }),
            this.setStyle({
                top: A + "px",
                left: s + "px",
                width: i + "px",
                height: r + "px",
                border: 1 / e + `px ${t} ` + n,
                display: "block",
                transform: o && a ? `rotate(${o}deg)` : ""
            }),
            this.visible = !0)
        }
        hidden() {
            this.visible && this.setStyle({
                display: "none"
            }),
            this.visible = !1
        }
        scale(A) {
            this.visible && this.setStyle({
                borderWidth: 1 / A + "px"
            })
        }
    }
    class Resize extends Base {
        constructor(A, e) {
            super(),
            this.index = A,
            this.visible = !1,
            this.config = e,
            this.size = 10,
            this.init()
        }
        init() {
            super.init("resize" + this.index, {
                display: "none",
                top: "0px",
                left: "0px",
                width: this.size + "px",
                height: this.size + "px",
                borderRadius: this.size / 2 + "px",
                backgroundColor: this.config.theme.handleColor,
                position: "absolute",
                zIndex: "21",
                pointerEvents: "all",
                cursor: CURSOR_STYLE[this.index]
            }, this.index),
            this.initDomEvent(),
            initEvent.call(this)
        }
        contain(A, e) {
            var {top: t, left: n, right: s, bottom: i} = this.el.getBoundingClientRect();
            return n < A && t < e && A < s && e < i ? this : null
        }
        show(A, e, t=1, n) {
            var s;
            n = {
                ...this.config.theme,
                ...this.config.theme[n]
            }.handleColor;
            0 === this.index && (this.isRotate() ? (s = store$1.getSelectElements()) && 1 === s.length && "Container" === s[0].type && (this._el || this.createRotateDom({
                width: this.size + "px"
            }),
            addRotateEvent.call(this)) : (removeEvent.call(this),
            this._el && this.el.removeChild(this._el),
            this._el = null)),
            this.setStyle({
                display: "block",
                top: e - this.size / 2 + "px",
                left: A - this.size / 2 + "px",
                transform: `scale(${1 / t})`,
                backgroundColor: n
            }),
            this.visible = !0
        }
        hidden() {
            this.visible && this.setStyle({
                top: "0px",
                left: "0px",
                display: "none"
            }),
            this.visible = !1
        }
        scale(A) {
            this.visible && this.setStyle({
                transform: `scale(${1 / A})`
            })
        }
        destroy() {
            this.off("mousedown"),
            super.destroy()
        }
    }
    function initEvent() {
        graphEvent.initResizeEvent(this),
        graphEvent.initRotateEvent(this)
    }
    function addRotateEvent() {
        graphEvent.initRotateEvent(this)
    }
    function removeEvent() {
        graphEvent._destroyMoveEvent(this)
    }
    applyMixins(Resize, [DomEvent]);
    class SizeLabel extends Base {
        constructor(A) {
            super(),
            this.config = A,
            this.init()
        }
        init() {
            var {labelColor: A, labelBackground: e} = this.config.theme;
            super.init("SizeLabel", {
                top: "0px",
                left: "0px",
                zIndex: 21,
                padding: "0 4px",
                fontSize: "12px",
                color: A,
                lineHeight: "20px",
                userSelect: "none",
                borderRadius: "2px",
                position: "absolute",
                transformOrigin: "left",
                backgroundColor: e,
                display: "none"
            })
        }
        show(A, e, t, n=1, s) {
            var {labelColor: s, labelBackground: i} = {
                ...this.config.theme,
                ...this.config.theme[s]
            };
            this.setStyle({
                top: e - 10 + "px",
                left: A + 15 + "px",
                color: s,
                backgroundColor: i,
                display: "inline-block",
                transform: `scale(${1 / n})`,
                whiteSpace: "nowrap"
            }),
            this.el.innerText = t,
            this.visible = !0
        }
        hidden() {
            this.visible && this.setStyle({
                top: "0px",
                left: "0px",
                display: "none"
            }),
            this.visible = !1
        }
        scale(A) {
            this.visible && this.setStyle({
                transform: `scale(${1 / A})`
            })
        }
    }
    class Operation {
        constructor() {
            this.parent = null,
            this.el = createElement(),
            this.el.dataset.id = "operation",
            this.el.style.cssText = "position:absolute;top:0;left:0;width:inherit;pointer-events:none;",
            this.inited = !1,
            this.resizes = null,
            this.rect = null,
            this.subRect = null,
            this.sizeLabel = null,
            this.alignmentLineManager = null
        }
        init(A) {
            if (!this.inited) {
                var e = {
                    theme: (this.parent = A).root.config.theme.bound
                };
                this.rect = new Rect("rect",e),
                mount(this.rect, this),
                this.subRect = new Rect("subRect",e),
                mount(this.subRect, this),
                this.resizes = [];
                for (let A = 0; A < 8; A++) {
                    var t = new Resize(A,e);
                    mount(t, this.rect),
                    this.resizes.push(t)
                }
                this.sizeLabel = new SizeLabel(e),
                mount(this.sizeLabel, this.rect),
                mount(this, {
                    contentEl: A.el
                }),
                this.initEvent(),
                this.inited = !0
            }
        }
        initEvent() {
            const A = this.parent.root;
            A.on("graphBoundChange", syncBound, this),
            A.on("select", this.repaint, this),
            A.on("unselect", this.repaint, this),
            A.on("delete", this.repaint, this),
            A.on("graphMoving", this.hidden, this),
            A.on("graphResizing", this.repaint, this),
            A.on("graphRotating", this.repaint, this),
            A.on("graphMoveEnd", this.repaint, this),
            A.on("canvasZoom", this.scale, this),
            A.on("moveLayer", updateLayerOffset, this),
            A.on("graphMouseover", this.showSubRect, this),
            A.on("graphMouseout", this.hideSubRect, this)
        }
        destroyEvent() {
            const A = this.parent.root;
            A.off("graphBoundChange", syncBound, this),
            A.off("delete", this.repaint, this),
            A.off("select", this.repaint, this),
            A.off("unselect", this.repaint, this),
            A.off("graphMoving", this.hidden, this),
            A.off("graphResizing", this.repaint, this),
            A.off("graphRotating", this.repaint, this),
            A.off("graphMoveEnd", this.repaint, this),
            A.off("canvasZoom", this.scale, this),
            A.off("moveLayer", updateLayerOffset, this),
            A.off("graphMouseover", this.showSubRect, this),
            A.off("graphMouseout", this.hideSubRect, this)
        }
        destroy() {
            unmount(this),
            this.el = null,
            this.destroyEvent(),
            this.parent = null,
            this.resizes.forEach((A=>A.destroy())),
            this.rect.destroy(),
            this.subRect.destroy(),
            this.sizeLabel.destroy(),
            this.rect = null,
            this.subRect = null,
            this.resizes = null,
            this.sizeLabel = null,
            this.alignmentLineManager = null
        }
        show() {
            var A = this.getSelectBoundRect();
            if (A) {
                const n = store$1.getSelectElements().find((A=>checkLayoutType(A, LAYOUT_MAP.LAYER)));
                var {width: e, height: t} = A;
                const s = this.parent.getZoom()
                  , i = this.selectType()
                  , r = (this.rect.show(A, s, i),
                this.hideSubRect(),
                [{
                    top: 0,
                    left: e / 2
                }, {
                    top: t,
                    left: e / 2
                }, {
                    top: t / 2,
                    left: 0
                }, {
                    top: t / 2,
                    left: e
                }, {
                    top: 0,
                    left: 0
                }, {
                    top: 0,
                    left: e
                }, {
                    top: t,
                    left: 0
                }, {
                    top: t,
                    left: e
                }]);
                this.resizes.forEach(((A,e)=>{
                    n ? A.hidden() : A.show(r[e].left, r[e].top, s, i)
                }
                )),
                this.sizeLabel.show(r[3].left, r[3].top, Math.round(e) + " × " + Math.round(t), s, i),
                this.visible = !0
            }
        }
        hidden() {
            this.visible && (this.rect.hidden(),
            this.resizes.forEach((A=>A.hidden())),
            this.sizeLabel.hidden(),
            this.hideSubRect(),
            this.visible = !1)
        }
        showSubRect(A, e) {
            var t = this.parent.getZoom();
            "Group" === e.type && (A.angle = 0),
            this.subRect.show(A, t, this.selectType([e]))
        }
        hideSubRect() {
            this.subRect.hidden()
        }
        scale(A=1) {
            this.rect.scale(A),
            this.subRect.scale(A),
            this.resizes.forEach((e=>e.scale(A))),
            this.sizeLabel.scale(A)
        }
        setStyle(A) {
            A.rect && this.rect.setStyle(A.rect),
            A.resize && this.resizes.forEach((e=>e.setStyle(A.resize))),
            A.label && this.sizeLabel.setStyle(A.label)
        }
        contain(A, e) {
            return this.resizes.find((t=>t.contain(A, e))) || null
        }
        repaint() {
            store$1.getSelectElements().length ? this.show() : this.hidden()
        }
        getSelectBoundRect() {
            const A = store$1.getSelectElements();
            if (A.length) {
                const e = new BoundingRect;
                return A.forEach((A=>e.union(A.bound, !0))),
                e.plain()
            }
            return null
        }
        selectType(A=store$1.getSelectElements()) {
            return 1 === A.length ? A[0].constructor.name.toLowerCase() : 1 < A.length ? "multSelect" : void 0
        }
    }
    function syncBound() {
        this.visible && this.repaint()
    }
    function updateLayerOffset({layers: A=[]}) {
        A.forEach((A=>A.containers.forEach((e=>e.updateBoundRef(A.left, A.top)))))
    }
    class ScaleManage {
        constructor(A) {
            this.instance = A,
            this.el = this.instance.el,
            this.ratio = null,
            this.rootCenter = null,
            this.center = null,
            this.location = [],
            this.instance.style.transformOrigin = "0 0",
            this.lock = !1,
            this._keydown = this.keydown.bind(this),
            this._keyup = this.keyup.bind(this),
            this.wheelEvent = this.wheelEvent.bind(this),
            this.instance.el.parentNode.addEventListener("wheel", this.wheelEvent, this),
            document.addEventListener("keydown", this._keydown),
            document.addEventListener("keyup", this._keyup),
            this.zoomAvailCenter()
        }
        zoomAvailCenter() {
            var A = this.instance
              , e = [((e = A.root.bound).width - .2 * e.width) / A.width, (e.height - .2 * e.height) / A.height];
            return this.rootCenter = [A.root.bound.width / 2, A.root.bound.height / 2],
            this.setZoom(window.Math.min(...e))
        }
        wheelEvent(A) {
            if (A.preventDefault(),
            this.lock)
                return !1;
            -1 < window.navigator.userAgent.indexOf("Mac OS X") && !this.canMacOSZoomCanvas ? this._doPan(A) : this._doZoom(A)
        }
        _doPan(A) {
            var e = -A.deltaY * this.ratio;
            A = -A.deltaX * this.ratio;
            this.move(A, e),
            this.instance.root.nextTick((()=>{
                this.instance.root.emit("moveCanvas")
            }
            ))
        }
        _doZoom(A) {
            let e = this.getZoom();
            0 < A.deltaY ? e -= .02 : e += .02,
            this._setZoom(e),
            this.updateCenter({
                left: A.clientX,
                top: A.clientY
            })
        }
        keydown(A) {
            "Control" !== A.key && "Meta" !== A.key || (this.canMacOSZoomCanvas = !0)
        }
        keyup() {
            this.canMacOSZoomCanvas = !1
        }
        setCenter(A) {
            return A && (this.rootCenter = A),
            this.updateCenter()
        }
        getCenter() {
            return this.rootCenter
        }
        setZoom(A) {
            return this._setZoom(A),
            this.updateCenter()
        }
        _setZoom(A) {
            A = Number(parseFloat(A).toFixed(2)),
            this.ratio = A = A <= .15 || 4 < A ? A <= .15 ? .15 : 4 : A
        }
        getZoom() {
            return this.ratio
        }
        move(A, e) {
            this.location[0] += A,
            this.location[1] += e,
            this.updateStyle()
        }
        updateCenter(A) {
            const e = this.instance;
            var t, n, s = this.ratio;
            let i;
            return i = A ? (e.root.updateSite(),
            t = e.root.bound,
            n = e.el.getBoundingClientRect(),
            [A.left - e.width * s * ((A.left - n.left) / n.width) - t.left, A.top - e.height * s * ((A.top - n.top) / n.height) - t.top]) : [this.rootCenter[0] - e.width * s / 2, this.rootCenter[1] - e.height * s / 2],
            this.location = this.center = i,
            this.updateStyle(),
            this.instance.root.nextTick((()=>{
                this.instance && this.instance.root && this.instance.root.emit("canvasZoom", this.getZoom())
            }
            )),
            !0
        }
        updateStyle() {
            var A = this.location.join("px, ") + "px";
            this.instance.style.transform = `translate(${A}) scale(${this.ratio})`
        }
        destroy() {
            this.instance.el.parentNode.removeEventListener("wheel", this.wheelEvent),
            document.removeEventListener("keydown", this._keydown),
            document.removeEventListener("keyup", this._keyup),
            this.instance = null,
            this.el = null,
            this.ratio = null,
            this.center = null,
            this.rootCenter = null
        }
    }
    class Canvas extends GraphObject {
        constructor(A, e, t) {
            if (!A || !checkLayoutType(A, LAYOUT_MAP.UI))
                throw new Error(`parent参数必须是${LAYOUT_MAP.UI}实例`);
            super(A, mergeOption(LAYOUT_MAP.CANVAS, e, t)),
            this.scaleMode = hasOwn(this.options, "scaleMode") ? this.options.scaleMode : CANVAS_SCALE_MODE.SCALEALL,
            this.maskDefaultEnable = !1,
            this.maskStyle = merge(clone(MASK_STYLE), {
                cursor: "pointer",
                zIndex: 2
            }),
            this.init(),
            initOperation.call(this),
            this.canvasManage = new ScaleManage(this)
        }
        static factory(A, e) {
            return new Canvas(A,e)
        }
        static factoryConfig(A, e, t) {
            return new Canvas(A,e,t)
        }
        _beginMove() {
            this._initMask()
        }
        _endMove() {
            this._destroyMask()
        }
        _initEvent() {
            this.on("mousedown", (()=>{
                this.root.selector.clear()
            }
            ))
        }
        _destroyEvent() {
            this.off("mousedown")
        }
        move(A, e) {
            this.canvasManage && this.canvasManage.move(A, e)
        }
        clear() {
            this.children.forEach((A=>{
                A.destroy()
            }
            ))
        }
        setCenter(A) {
            return this.root.canvasMode === CANVAS_MODE.PLAY ? log.warn("预览模式下，无法设置中间坐标值") : isType$1(A, "Array") ? this.canvasManage.setCenter(A) : log.warn(A + " 必须是数组类型")
        }
        getCenter() {
            if (this.root.canvasMode === CANVAS_MODE.PLAY)
                throw new Error("预览模式下，无法获取中间坐标值");
            return this.canvasManage.getCenter()
        }
        setZoom(A) {
            return this.root.canvasMode === CANVAS_MODE.PLAY ? log.warn("预览模式下，无法设置缩放比例") : this.canvasManage.setZoom(A)
        }
        getZoom(A) {
            if (this.root.canvasMode !== CANVAS_MODE.PLAY)
                return this.canvasManage.getZoom();
            var e = this.rect;
            if (A && e)
                switch (this.scaleMode) {
                case CANVAS_SCALE_MODE.SCROLL:
                    return [1, 1];
                case CANVAS_SCALE_MODE.SCALEALL:
                    return e;
                case CANVAS_SCALE_MODE.SCALEWIDTH:
                    return [e[0], e[0]];
                case CANVAS_SCALE_MODE.SCALEHEIGHT:
                    return [e[1], e[1]]
                }
            throw new Error("预览模式下，获取缩放比例")
        }
        zoomAvailCenter() {
            return this.root.canvasMode === CANVAS_MODE.PLAY ? log.warn("预览模式下，缩放画布到可视区域位置") : this.canvasManage.zoomAvailCenter()
        }
        getZoomState() {
            return this.canvasManage.lock
        }
        setZoomState(A) {
            A !== this.canvasManage.lock && (this.canvasManage.lock = A)
        }
        toJSON() {
            const A = super.toJSON();
            return A.option.scaleMode = this.scaleMode,
            delete A.option.style.transform,
            A
        }
        updateMode() {
            const A = this.style;
            var e = this.scaleMode;
            if (this.root.emit("beforeCanvasMode", this.root.canvasMode),
            this.root.canvasMode === CANVAS_MODE.PLAY)
                if (this.canvasManage && (this.canvasManage.destroy(),
                this.canvasManage = null),
                dep.emit("toggleEvent"),
                e === CANVAS_SCALE_MODE.SCROLL)
                    this.root.el.style.overflow = "auto",
                    A.transform = "";
                else {
                    var t = this.root.el.getBoundingClientRect();
                    const n = [t.width / this.width, t.height / this.height];
                    switch (this.rect = n,
                    e) {
                    case CANVAS_SCALE_MODE.SCALEALL:
                        A.transform = `scale(${n.join(", ")})`;
                        break;
                    case CANVAS_SCALE_MODE.SCALEWIDTH:
                        A.top = "50%",
                        A.left = 0,
                        A.transform = `scale(${n[0]}) translateY(-50%)`,
                        A.transformOrigin = "0px 0px";
                        break;
                    case CANVAS_SCALE_MODE.SCALEHEIGHT:
                        A.top = "0",
                        A.left = "50%",
                        A.transform = `scale(${n[1]}) translateX(-50%)`,
                        A.transformOrigin = "0px 0px"
                    }
                    this.root.el.style.overflow = "hidden"
                }
            else
                A.top = "",
                A.left = "",
                A.transform = "",
                this.canvasManage = new ScaleManage(this),
                dep.emit("toggleEvent", !0);
            return canvasModeEvent.call(this),
            this.root.nextTick((()=>{
                this.root.emit("canvasMode", this.root.canvasMode)
            }
            )),
            !0
        }
        get layers() {
            return store$1.getLayers()
        }
        get groups() {
            return store$1.getGroups()
        }
        get containers() {
            return store$1.getContainers()
        }
        destroy() {
            return queue.destroy(),
            destroyOperation.call(this),
            this.scaleMode = null,
            this.canvasManage && (this.canvasManage.destroy(),
            this.canvasManage = null),
            this.destroyDep(),
            store$1.clearStack(),
            super._destroyTruthy(),
            this.root && (this.root.canvas = null,
            this.root = null),
            !0
        }
        destroyDep() {
            dep.off("toggleEvent")
        }
    }
    function initOperation() {
        this.operation || (this.operation = new Operation,
        this.operation.init(this))
    }
    function destroyOperation() {
        this.operation && this.operation.destroy(),
        this.operation = null
    }
    function canvasModeEvent(A) {
        CANVAS_MODE.PLAY === A ? destroyOperation.call(this) : CANVAS_MODE.EDIT === A && initOperation.call(this)
    }
    class Layer$1 extends GraphObject {
        constructor(A, e, t) {
            if (!A || !checkLayoutType(A, LAYOUT_MAP.CANVAS))
                throw new Error(`parent参数必须是${LAYOUT_MAP.CANVAS}实例`);
            super(A, mergeOption(LAYOUT_MAP.LAYER, e, t)),
            this.maskDefaultEnable = !1,
            this.init()
        }
        registerDep() {
            dep.on("toggleEvent", this.toggleCtEvent, this)
        }
        toggleCtEvent(A) {
            A ? (this._initEvent(),
            this.style.pointerEvents = "all") : (this._destroyEvent(),
            this.style.pointerEvents = "none")
        }
        static factory(A, e) {
            return new Layer$1(A,e)
        }
        static factoryConfig(A, e, t) {
            return new Layer$1(A,e,t)
        }
        moveToTarget(A, e) {
            return e && checkLayoutType(A, LAYOUT_MAP.LAYER) && A !== this ? (commandAPI.move(this, A, e),
            this.root.operation.repaint(),
            !0) : log.warn("图层移动只能以其他图层为目标，不能移动到内部")
        }
        _setVisible(A) {
            super._setVisible(A),
            A && this.containers.forEach((A=>A.adapterResize()))
        }
        _mount() {
            this.containers.forEach((A=>{
                A._isMounted = !0
            }
            ))
        }
        unmount() {
            super.unmount(),
            this.containers.forEach((A=>{
                A._isMounted = !1
            }
            ))
        }
        get groups() {
            return store$1.getGroupsByEL(this)
        }
        get containers() {
            return store$1.getContainersByEl(this)
        }
        setBound(A) {
            super.setBound(A),
            (isNumber(A.left) || isNumber(A.right)) && this.updateOffset()
        }
        updateOffset() {
            this.isLock || this.root.emit("moveLayer", {
                layers: [this]
            })
        }
    }
    let maskDom = null, conch;
    class Container extends GraphObject {
        constructor(A, e, t) {
            if (!A || !checkLayoutType(A, [LAYOUT_MAP.LAYER, LAYOUT_MAP.GROUP]))
                throw new Error(`parent参数必须是${LAYOUT_MAP.LAYER}或者${LAYOUT_MAP.GROUP}实例`);
            super(A, mergeOption(LAYOUT_MAP.CONTAINER, e, t)),
            this.previewModeState = null,
            this.previewModeLock = null,
            this.controlDashByApi = null,
            this.borderDom = null,
            this.penetrateOnplay = this.options.penetrateOnplay,
            this.init()
        }
        init() {
            super.init(),
            this.contentEl.style.transform = "translate(0)",
            this.previewModeState = !1,
            this.previewModeLock = !0
        }
        registerDep() {
            dep.on("toggleEvent", this.toggleCtEvent, this)
        }
        toggleCtEvent(A) {
            A ? (this._initEvent(),
            this.contentEl.style.pointerEvents = "none") : (this._destroyEvent(),
            this.penetrateOnplay ? this.contentEl.style.pointerEvents = "none" : this.contentEl.style.pointerEvents = "all")
        }
        static factory(A, e) {
            return new Container(A,e)
        }
        static factoryConfig(A, e, t) {
            return new Container(A,e,t)
        }
        _initEvent() {
            super._initEvent(),
            this.on("dblclick", this._dblclickFn, this),
            this.on("mouseover", showBound, this),
            this.on("mouseout", hideBound, this)
        }
        _destroyEvent() {
            super._destroyEvent(),
            this.off("dblclick", this._dblclickFn),
            this.off("mouseover", showBound, this),
            this.off("mouseout", hideBound, this)
        }
        _dblclickFn() {
            this.previewModeState || (this.zDown && this.zIndexUp(),
            this.root.enterInsidePreview(this))
        }
        _enterPreview() {
            return !this.previewModeLock && (maskDom = this.createMask(),
            log.info("进入预览模式"),
            this.select(),
            this.root.canvas.el.appendChild(maskDom),
            this._pauseEvent(),
            this.root.canvas._destroyEvent(),
            this.root.canvas.setZoomState(!0),
            this._destroyMask(),
            this.selectLock = !0,
            this.previewModeState = !0)
        }
        createMask() {
            var A = this.root.config.theme.mask;
            return createElementWithAttr("div", {
                ...MASK_STYLE,
                background: A.background,
                opacity: A.opacity
            }, {
                id: "previewMask"
            })
        }
        _exitPreview() {
            return log.info("退出预览模式"),
            this.root.canvas.el.removeChild(maskDom),
            this._startEvent(),
            this.root.canvas._initEvent(),
            this.root.canvas.setZoomState(!1),
            this._initMask(),
            this.selectLock = !1,
            this.previewModeState = !1,
            this.zDown && this.zIndexDown(),
            !0
        }
        moveToTarget(A, e) {
            return e && !checkLayoutType(A, [LAYOUT_MAP.GROUP, LAYOUT_MAP.CONTAINER]) && A !== this ? log.warn("容器只能移动到编组或者其他容器旁边") : e || checkLayoutType(A, [LAYOUT_MAP.LAYER, LAYOUT_MAP.GROUP]) ? (commandAPI.move(this, A, e),
            this.root.operation.repaint(),
            !0) : log.warn("容器只能移动到图层或者编组里面")
        }
        setRotate(A) {
            var e = this.bound.angle;
            this.setBound({
                angle: A + e
            }),
            this.root.emit("graphBoundChange", this)
        }
        setBound(A) {
            this.isLock || (super.setBound(A),
            isDef(A = A.angle) && this.style.setOption({
                rotate: A
            }))
        }
        getParentLayer() {
            return getParentLayer(this.parent)
        }
        initBoundOffset() {
            var A = this.getParentLayer();
            this.bound.setOffset(A.left, A.top)
        }
        updateLocation() {
            var A = this.getParentLayer(this);
            this.top = this.bound.plainReal().top - A.top,
            this.left = this.bound.plainReal().left - A.left,
            this.updateBoundRef()
        }
        updateBoundRef(A, e) {
            var t = this.getParentLayer();
            isDef(A) || (A = t.left),
            isDef(e) || (e = t.top),
            this.bound.setOffset(A, e)
        }
        _setVisible() {
            var A = setContainerDisplay(this);
            return super._setVisible(A),
            this.adapterResize(),
            A
        }
        adapterResize() {
            this.app && "echarts" === this.app.type && this._adapterResize()
        }
        _updateStyle() {
            super._updateStyle(),
            this.showDashBorder()
        }
        showDashBorder() {
            var A, e, t;
            !this.controlDashByApi && this.el && (({backgroundColor: A, backgroundImage: e, opacity: t} = this.el.style),
            this.root.canvasMode !== CANVAS_MODE.EDIT || this.adapter || e && "initial" !== e || A && "rgba(0, 0, 0, 0)" !== A && "transparent" !== A && (!A || "0" !== t) ? this._removeDashBorder() : this._addDashBorder())
        }
        showDash() {
            this.controlDashByApi = "show",
            this._addDashBorder()
        }
        hiddenDash() {
            this._removeDashBorder(),
            this.controlDashByApi = "hidden"
        }
        _addDashBorder() {
            if (!this.borderDom && "hidden" !== this.controlDashByApi) {
                const A = document.createElement("div");
                A.className = "border",
                A.style = "position: absolute; top: 0; right: 0; width: 100%; height: 100%; border: 1px dashed #027AFF; box-sizing: border-box;",
                this.el.appendChild(A),
                this.borderDom = A,
                this.root.on("canvasMode", this._showDashByCanvasMode, this)
            }
        }
        _removeDashBorder() {
            this.borderDom && (this.el.removeChild(this.borderDom),
            this.borderDom = null,
            this.root.off("canvasMode", this._showDashByCanvasMode, this))
        }
        _showDashByCanvasMode(A) {
            this.root.CANVASMODE.PLAY === A ? this.borderDom.style.display = "none" : this.root.CANVASMODE.EDIT === A && (this.borderDom.style.display = "block")
        }
        toJSON() {
            const A = super.toJSON();
            return delete A.children,
            A
        }
        _destroyTruthy() {
            maskDom && 1 === this.root.containers.length && (this.root.canvas.el.removeChild(maskDom),
            maskDom = null),
            this.adapter && this.adapter.destroy(),
            super._destroyTruthy()
        }
    }
    function showBound(A) {
        A.stopPropagation(),
        this.eventActive && graphEvent.mouseOverEvent(this)
    }
    function hideBound(A) {
        A.stopPropagation(),
        this.eventActive && graphEvent.mouseOutEvent(this)
    }
    class DefaultContainer extends Container {
        constructor(A, e, t) {
            super(A, e, t),
            this.isDefaultContainer = !0,
            this.zDown = e.zDown,
            this.penetrateOnplay = !1
        }
        init() {
            this.config.isLock = !1,
            super.init(),
            this.previewModeLock = !1,
            this.dom = this.contentEl,
            this._initUIEvent()
        }
        toggleCtEvent(A) {
            A ? this._initEvent() : this._destroyEvent(),
            this.contentEl.style.pointerEvents = "all"
        }
        createMask() {
            var A = this.root.config.theme.mask;
            return createElementWithAttr("div", {
                ...MASK_STYLE,
                background: A.defaultContainer.background || A.background,
                opacity: A.defaultContainer.opacity || A.opacity
            }, {
                id: "previewMask"
            })
        }
        static factory(A, e) {
            return new DefaultContainer(A,e)
        }
        static factoryConfig(A, e, t) {
            return new DefaultContainer(A,e,t)
        }
        _initUIEvent() {
            this.root.on("canvasMode", this._canvasModeFn, this),
            this.root.on("beforeCanvasMode", this._beforeCanvasModeFn, this)
        }
        _updateStyle() {
            super._updateStyle()
        }
        showDashBorder() {
            return !1
        }
        showDash() {
            return !1
        }
        hiddenDash() {
            return !1
        }
        _destroyTruthy() {
            this.root.off("canvasMode", this._canvasModeFn),
            this.root.off("beforeCanvasMode", this._beforeCanvasModeFn),
            super._destroyTruthy()
        }
        _beforeCanvasModeFn(A) {
            this.root.CANVASMODE.PLAY === A && this.previewModeState && this.root.exitInsidePreview()
        }
        _canvasModeFn(A) {
            this.root.CANVASMODE.PLAY === A ? this._destroyMask() : this.root.CANVASMODE.EDIT === A && this._initMask()
        }
        toJSON() {
            const A = super.toJSON();
            return A.type = "DefaultContainer",
            A
        }
    }
    class Adapter {
        constructor(A, e, t={}) {
            return A instanceof Container ? (this.adapter = adapterManager.creatComponent(e.type, e.name, A, t),
            this.adapter._resolve = null,
            this.adapter.mounted = function() {
                return new Promise((A=>{
                    this._resolve ? A() : this._resolve = A
                }
                ))
            }
            ,
            A.root.nextTick((()=>{
                this.adapter._initComponent(e.opts)
            }
            )),
            A.adapter = this.adapter,
            this.adapter) : (log.warn("请传入正确父节点"),
            null)
        }
    }
    window.THING ? window.THING.UI = UI : log.warn("请引入 ThingJS 后使用"),
    layoutManager.register(LAYOUT_MAP.UI, UI),
    layoutManager.register(LAYOUT_MAP.CANVAS, Canvas),
    layoutManager.register(LAYOUT_MAP.LAYER, Layer$1),
    layoutManager.register(LAYOUT_MAP.GROUP, Group),
    layoutManager.register(LAYOUT_MAP.CONTAINER, Container),
    layoutManager.register(LAYOUT_MAP.DEFAULTLAYER, DefaultContainer),
    UI.Layer = function(...A) {
        return Layer$1.factory(...A)
    }
    ,
    UI.Group = function(...A) {
        return Group.factory(...A)
    }
    ,
    UI.Container = function(...A) {
        return Container.factory(...A)
    }
    ,
    UI.DefaultContainer = function(...A) {
        return DefaultContainer.factory(...A)
    }
    ,
    UI.ScaleManage = function(...A) {
        return new ScaleManage(...A)
    }
    ,
    UI.use = mm.register.bind(mm),
    UI.mixin = mm.mixin.bind(mm),
    UI.adapterManager = adapterManager,
    UI.Adapter = Adapter,
    UI.STATIC = {
        CANVAS_MODE: CANVAS_MODE,
        CANVAS_SCALE_MODE: CANVAS_SCALE_MODE
    };
    class BaseAdapter$1 {
        constructor(A, e, t, n={}) {
            this.parent = t,
            this.name = e,
            this.type = A,
            this.componentInstance = null,
            this.config = n,
            this.dom = null,
            this.complete = !1,
            this.initDom()
        }
        static factory(A, e, t, n) {}
        beforeMount() {}
        mounted() {
            this.complete = !0
        }
        beforeUpdate() {}
        updated() {}
        beforeDestroy() {}
        destroyed() {}
        initDom() {
            const A = document.createElement("div");
            A.style.width = this.parent.width + "px",
            A.style.height = this.parent.height + "px",
            this.dom = A
        }
        init(A) {
            this.beforeMount(),
            this._initComponent(A),
            this.mounted()
        }
        _initComponent(A) {}
        update() {
            this.beforeUpdate(),
            this._updateComponent(),
            this.updated()
        }
        _updateComponent() {}
        setConfig(A, e) {
            e ? this.config[e] = A : this.config = A
        }
        getConfig(A) {
            return A ? this.config[A] : this.config
        }
        getComponentInstance() {
            return this.componentInstance
        }
        destroy() {
            this.beforeDestroy(),
            this._destroyComponent(),
            this.destroyed()
        }
        _destroyComponent() {
            this.parent.showDashBorder && this.parent.showDashBorder()
        }
        _componentComplete() {
            this.parent.showDashBorder && this.parent.showDashBorder(),
            this.parent.root.emit("componentComplete", {
                parent: this.parent,
                adapter: this
            }),
            this.parent.root.emit("collectCompComplete")
        }
        resize() {
            var A = this.parent.width
              , e = this.parent.height;
            this.parent.contentEl.style.width = A + "px",
            this.parent.contentEl.style.height = e + "px",
            this.dom.style.width = A + "px",
            this.dom.style.height = e + "px",
            this.complete && this.componentInstance && this.componentInstance.resize && this.componentInstance.resize()
        }
        toJSON() {}
    }
    class ConchAdapter extends BaseAdapter$1 {
        constructor(A, e, t, n) {
            super(A, e, t, n)
        }
        static _loadConch() {
            return window.conch ? conch = window.conch : (log.warn("请先加载spray-conch，否则组件将无法使用"),
            !1)
        }
        static factory(A, e, t, n) {
            if (conch || ConchAdapter._loadConch(),
            conch && conch[e])
                return new ConchAdapter(A,e,t,n);
            throw new Error(`Conch没有加载或Conch中没有ID为${e}的组件`)
        }
        async _initComponent(A) {
            if (this.config.option = merge({
                prefix: "/s-static"
            }, A || {}),
            ConchAdapter._loadConch(),
            !conch[this.name])
                throw new Error(`组件${this.name}未检测到，请先到spray-conch中下载对应的组件包`);
            this.parent.contentEl && this.parent.contentEl.appendChild(this.dom);
            try {
                this.parent && !this.componentInstance && this.dom && (this.componentInstance = new conch[this.name](this.dom,this.config.option)),
                this.componentInstance && (this.componentInstance.parent = this.parent),
                await this.componentInstance.render(),
                this._resolve ? "function" == typeof this._resolve && this._resolve() : this._resolve = !0
            } catch (A) {
                this.error = A
            }
            try {
                Reflect.has(this.config, "data") && this.setData(this.config.data),
                Reflect.has(this.config, "opts") && this.setOption(this.config.opts)
            } catch (A) {
                console.error(A)
            }
            return this.complete = !0,
            this.parent.root.config.enableContainerPreview && (this.parent.previewModeLock = !1),
            this._componentComplete(),
            !0
        }
        isComplex() {
            return "complex" === this.componentInstance.type
        }
        setOption(A) {
            A && (this.config.opts = A,
            this.componentInstance && this.componentInstance.setOption(this.config.opts))
        }
        setData(A) {
            this.config.data = A,
            this.componentInstance && this.componentInstance.setData(this.config.data)
        }
        _updateComponent() {
            this.complete = !1,
            this.componentInstance && this._initComponent(),
            this.complete = !0
        }
        _destroyComponent() {
            this.componentInstance && this.componentInstance.destroy(),
            this.config = null,
            this.dom && this.parent.contentEl && this.parent.contentEl.removeChild(this.dom),
            this.parent.adapter = null,
            this.parent.previewModeLock = !0,
            this.parent = null
        }
        toJSON() {
            this.config.type = this.type,
            this.config.name = this.name;
            var A = this.componentInstance;
            return A && (this.config.data = this.componentInstance.data,
            "echarts" === A.type && A.config ? this.config.opts = A.config : this.config.opts = this.componentInstance.opts),
            this.config
        }
    }
    class AlignmentLines {
        constructor(A) {
            this.lines = A ? setLines(A) : null
        }
        update(A) {
            A && (this.lines = setLines(A))
        }
        calcNearLine(A={}) {
            if (!this.lines.v || !this.lines.h)
                return null;
            const e = [...this.lines.v, ...this.lines.h]
              , t = {
                v: [],
                h: []
            };
            return e.forEach((e=>{
                var n;
                e.type.includes("v") ? (n = findLine(e, A.v)) && t.v.push({
                    val: Math.abs(Math.round(n.pos) - Math.round(e.pos)),
                    from: e,
                    ...n
                }) : (n = findLine(e, A.h)) && t.h.push({
                    val: Math.abs(Math.round(n.pos) - Math.round(e.pos)),
                    from: e,
                    ...n
                })
            }
            )),
            {
                vLines: getShowLines(t.v) || [],
                hLines: getShowLines(t.h) || [],
                vLinesAll: t.v || [],
                hLinesAll: t.h || []
            }
        }
    }
    function setLines(A) {
        var {left: e, top: t, width: n, height: s} = A;
        return {
            v: [{
                type: "vl",
                pos: e,
                start: t,
                end: t + s,
                displayable: A
            }, {
                type: "vm",
                pos: e + n / 2,
                start: t,
                end: t + s,
                displayable: A
            }, {
                type: "vr",
                pos: e + n,
                start: t,
                end: t + s,
                displayable: A
            }],
            h: [{
                type: "ht",
                pos: t,
                start: e,
                end: e + n,
                displayable: A
            }, {
                type: "hm",
                pos: t + s / 2,
                start: e,
                end: e + n,
                displayable: A
            }, {
                type: "hb",
                pos: t + s,
                start: e,
                end: e + n,
                displayable: A
            }]
        }
    }
    function findLine(A={}, e=[]) {
        if (e.length <= 0)
            return null;
        let t = 0
          , n = e.length - 1;
        for (; t <= n; ) {
            var s = Math.round(n - (n - t) / 2);
            if (Math.round(A.pos) < Math.round(e[s].pos))
                n = s - 1;
            else {
                if (!(Math.round(A.pos) > Math.round(e[s].pos)))
                    return e[s];
                t = s + 1
            }
        }
        return t === n ? e[t] : t > n ? t >= e.length ? e[n] : n < 0 ? e[0] : Math.abs(Math.round(e[n].pos) - Math.round(A.pos)) < Math.abs(Math.round(e[t].pos) - Math.round(A.pos)) ? e[n] : e[t] : null
    }
    function getShowLines(A=[]) {
        return A.sort(((A,e)=>A.val - e.val)),
        A.filter(((A,e)=>0 === e || 0 === A.val))
    }
    class Line extends Base {
        constructor(A, e) {
            super();
            A = A.config.theme.alignmentLines;
            this.index = e,
            this.realWidth = A.width,
            this.realHeight = A.width,
            this.color = A.color,
            this.visible = !1,
            this.isAdsorbed = !1,
            this.adsorbMovement = 0,
            this.init()
        }
        init() {
            this.initStyle = {
                display: "none",
                top: "0px",
                left: "0px",
                width: this.realWidth + "px",
                height: this.realHeight + "px",
                backgroundColor: this.color,
                position: "absolute",
                pointerEvents: "all"
            },
            super.init("alignment-line" + this.index, this.initStyle)
        }
        resetStyle() {
            this.setStyle(this.initStyle)
        }
        show(A={}) {
            A.display = "block",
            this.setStyle(A),
            this.visible = !0
        }
        hidden() {
            this.visible && this.setStyle({
                top: "0px",
                left: "0px",
                display: "none"
            }),
            this.visible = !1
        }
    }
    const breakAdsorbRuler = 15
      , breakAdsorbAlign = 10;
    class Adsorb {
        constructor() {
            this.adsorbDistance = 4,
            this.adsorbed = [0, 0],
            this.rulerAdsorbed = [0, 0],
            this.ratio = 1
        }
        setOffset(A=[]) {
            A.forEach((A=>{
                "top" === A.type && (setMouseMoveInfo(0, A.offset),
                this.rulerAdsorbed[1] = 1),
                "left" === A.type && (setMouseMoveInfo(A.offset, 0),
                this.rulerAdsorbed[0] = 1)
            }
            ))
        }
        execute() {
            1 === this.rulerAdsorbed[0] && (graphEvent.moveEvent(),
            graphEvent.canMoveX = !1,
            this.rulerAdsorbed[0] = 0),
            1 === this.rulerAdsorbed[1] && (graphEvent.moveEvent(),
            graphEvent.canMoveY = !1,
            this.rulerAdsorbed[1] = 0);
            var {mouseMoveInfo: A, _mouseMoveInfo: e} = getMouseMoveInfo();
            Math.abs(e.x - A.x) > breakAdsorbRuler && (graphEvent.canMoveX = !0),
            Math.abs(e.y - A.y) > breakAdsorbRuler && (graphEvent.canMoveY = !0)
        }
        setAlignment(A=[]) {
            A.forEach((A=>{
                "left" === A.type && 0 === this.adsorbed[0] && (setMouseMoveInfo(A.offset, 0),
                this.adsorbed[0] = 1),
                "top" === A.type && 0 === this.adsorbed[1] && (setMouseMoveInfo(0, A.offset),
                this.adsorbed[1] = 1)
            }
            ))
        }
        executeAlignment() {
            var A = !1
              , {mouseMoveInfo: e, _mouseMoveInfo: t} = (1 === this.adsorbed[0] && (A = !0,
            graphEvent.moveEvent(),
            graphEvent.canMoveX = !1,
            this.adsorbed[0] = 0),
            1 === this.adsorbed[1] && (A = !0,
            graphEvent.moveEvent(),
            graphEvent.canMoveY = !1,
            this.adsorbed[1] = 0),
            getMouseMoveInfo());
            return Math.abs(t.x - e.x) > breakAdsorbAlign && (graphEvent.canMoveX = !0),
            Math.abs(t.y - e.y) > breakAdsorbAlign && (graphEvent.canMoveY = !0),
            A
        }
        destroy() {
            this.adsorbDistance = null
        }
        resetAdsorbMovement() {
            this.adsorbed = [0, 0]
        }
    }
    function getMouseMoveInfo() {
        return {
            mouseMoveInfo: {
                x: graphEvent.mouseMoveInfo.x,
                y: graphEvent.mouseMoveInfo.y
            },
            _mouseMoveInfo: {
                x: graphEvent._mouseMoveInfo.x,
                y: graphEvent._mouseMoveInfo.y
            }
        }
    }
    function setMouseMoveInfo(A, e) {
        graphEvent.mouseMoveInfo.x += A,
        graphEvent.mouseMoveInfo.y += e
    }
    const defaultStyle = {
        position: "absolute",
        top: "0px",
        left: "0px",
        backgroundColor: "#CCFF99"
    };
    class DistanceLine {
        constructor(A, e) {
            var {alignmentLines: t} = A.root.config.theme;
            this.parent = A,
            this.index = e,
            this.el = null,
            this.toolTip = null,
            this.leftSide = null,
            this.rightSide = null,
            this.index = e,
            this.isShow = !1,
            this.realWidth = t.distanceStyle.width,
            this.realHeight = t.distanceStyle.width,
            defaultStyle.backgroundColor = t.distanceStyle.color,
            this.toolTipWidth = 40,
            this.toolTipHeight = 20,
            this.sideWidth = 2,
            this.sideHeight = 2,
            this.sideShowSize = 8,
            this.init(e)
        }
        init(A) {
            this.el = createElement(),
            this.toolTip = createElement(),
            this.leftSide = createElement(),
            this.rightSide = createElement(),
            this.el.dataset.id = "distance-line" + A,
            this.toolTip.dataset.id = "tip" + A,
            this.leftSide.dataset.id = "left-side" + A,
            this.rightSide.dataset.id = "right-side" + A,
            this.initStyle(),
            this.el.appendChild(this.toolTip),
            this.el.appendChild(this.leftSide),
            this.el.appendChild(this.rightSide),
            this.parent.el.appendChild(this.el)
        }
        initStyle() {
            Object.assign(this.el.style, defaultStyle, {
                display: "none",
                width: this.realWidth + "px",
                height: this.realHeight + "px",
                zIndex: 20
            }),
            Object.assign(this.toolTip.style, defaultStyle, {
                display: "block",
                width: this.toolTipWidth + "px",
                height: this.toolTipHeight + "px",
                color: "#333",
                lineHeight: this.toolTipHeight + "px",
                textAlign: "center"
            }),
            Object.assign(this.leftSide.style, defaultStyle, {
                display: "block",
                width: this.sideWidth + "px",
                height: this.sideHeight + "px"
            }),
            Object.assign(this.rightSide.style, defaultStyle, {
                display: "block",
                width: this.sideWidth + "px",
                height: this.sideHeight + "px"
            })
        }
        resetStyle() {
            this.initStyle(),
            this.isShow = !1
        }
        show(A, e, t=1) {
            if (A)
                switch (this.isShow = !0,
                e) {
                case 0:
                    Object.assign(this.el.style, {
                        display: "block",
                        left: A.pos + ("vl" === A.from.type ? -1 : 0) + "px",
                        top: A.from.start - A.distance + "px",
                        height: A.distance + "px",
                        transform: `scaleX(${1 / t})`
                    }),
                    this.showTipY(A, t),
                    this.showSideY(A);
                    break;
                case 1:
                    Object.assign(this.el.style, {
                        display: "block",
                        left: A.pos + ("vl" === A.from.type ? -1 : 0) + "px",
                        top: A.from.end + "px",
                        height: A.distance + "px",
                        transform: `scaleX(${1 / t})`
                    }),
                    this.showTipY(A, t),
                    this.showSideY(A);
                    break;
                case 2:
                    Object.assign(this.el.style, {
                        display: "block",
                        left: A.from.start - A.distance + "px",
                        top: A.pos + ("ht" === A.from.type ? -1 : 0) + "px",
                        width: A.distance + "px",
                        transform: `scaleY(${1 / t})`
                    }),
                    this.showTipX(A, t),
                    this.showSideX(A);
                    break;
                case 3:
                    Object.assign(this.el.style, {
                        display: "block",
                        left: A.from.end + "px",
                        top: A.pos + ("ht" === A.from.type ? -1 : 0) + "px",
                        width: A.distance + "px",
                        transform: `scaleY(${1 / t})`
                    }),
                    this.showTipX(A, t),
                    this.showSideX(A)
                }
        }
        showTipX(A, e) {
            this.toolTip.innerText = A.distance,
            Object.assign(this.toolTip.style, {
                left: A.distance / 2 - 20 + "px",
                transform: `scaleX(${1 / e})`
            })
        }
        showTipY(A, e) {
            this.toolTip.innerText = A.distance,
            Object.assign(this.toolTip.style, {
                top: A.distance / 2 - 10 + "px",
                transform: `scaleY(${1 / e})`
            })
        }
        showSideX(A) {
            Object.assign(this.leftSide.style, {
                height: this.sideShowSize + "px",
                transform: "translate(0, -50%)"
            }),
            Object.assign(this.rightSide.style, {
                height: this.sideShowSize + "'px",
                transform: `translate(${A.distance - this.sideWidth}px, -50%)`
            })
        }
        showSideY(A) {
            Object.assign(this.leftSide.style, {
                width: this.sideShowSize + "px",
                transform: "translate(-50%, 0)"
            }),
            Object.assign(this.rightSide.style, {
                width: this.sideShowSize + "px",
                transform: `translate(-50%, ${A.distance - this.sideHeight}px)`
            })
        }
    }
    class DistanceTip {
        constructor(A) {
            this.parent = A,
            this.left = [],
            this.right = [],
            this.top = [],
            this.bottom = [],
            this.compareLines = this._compareLines(),
            this.ratio = 1
        }
        show(A) {
            this.init(),
            this.setLines(A),
            this.showLines()
        }
        init() {
            this.left = [],
            this.right = [],
            this.top = [],
            this.bottom = []
        }
        setLines(A=[]) {
            const e = {
                ht: 0,
                hm: 1,
                hb: 2
            }
              , t = {
                vl: 0,
                vm: 1,
                vr: 2
            };
            A.forEach((A=>{
                const n = A.from.type;
                n.includes("v") ? (A.start < A.from.start && (this.top[t[n]] = this._setDistanceItem({
                    target: this.top[t[n]],
                    line: A,
                    index: 0
                })),
                A.end > A.from.end && (this.bottom[t[n]] = this._setDistanceItem({
                    target: this.bottom[t[n]],
                    line: A,
                    index: 1
                }))) : (A.start < A.from.start && (this.left[e[n]] = this._setDistanceItem({
                    target: this.left[e[n]],
                    line: A,
                    index: 2
                })),
                A.end > A.from.end && (this.right[e[n]] = this._setDistanceItem({
                    target: this.right[e[n]],
                    line: A,
                    index: 3
                })))
            }
            ))
        }
        showLines() {
            const A = this.parent.distanceLines
              , e = [this.top, this.bottom, this.left, this.right];
            A.forEach(((A,t)=>{
                A.resetStyle();
                var n = this._getLine(e[t], t);
                A.show(n, t, this.ratio)
            }
            ))
        }
        hideLines() {
            this.parent.distanceLines.forEach((A=>{
                A.resetStyle()
            }
            ))
        }
        _getLine(A, e) {
            return A.forEach((A=>{
                A.distance = Math.round(Math.abs(this.compareLines.get(e)(A)))
            }
            )),
            A.sort(((A,e)=>A.distance - e.distance))[0]
        }
        _compareLines() {
            const A = new Map;
            return A.set(0, compareLinesLT),
            A.set(1, compareLinesRB),
            A.set(2, compareLinesLT),
            A.set(3, compareLinesRB),
            A
        }
        _setDistanceItem(A={}) {
            var {target: A, index: e, line: t} = A;
            return A && Math.abs(this.compareLines.get(e)(A)) <= Math.abs(this.compareLines.get(e)(t)) ? A : t
        }
    }
    function compareLinesLT(A) {
        return A.end >= A.from.start ? A.from.start - A.start : A.from.start - A.end
    }
    function compareLinesRB(A) {
        return A.start <= A.from.end ? A.from.end - A.end : A.from.end - A.start
    }
    class AlignmentLinesManager {
        constructor() {
            this.parent = null,
            this.el = createElement(),
            this.el.dataset.id = "alignment",
            this.el.style.cssText = "position:absolute;top:0;left:0;z-index:21;",
            this.lineEntities = null,
            this.graphLinesData = {},
            this.alignmentLines = null,
            this.updated = !1,
            this.lineSelect = null,
            this.adsorb = null,
            this.adsorbLinesInfo = null,
            this.distanceLines = null,
            this.distanceTip = null
        }
        init(A, e) {
            if (!this.parent) {
                this.parent = e,
                this.root = A,
                mount(this, {
                    contentEl: e.el
                }),
                this.lineEntities = [];
                for (let e = 0; e < 6; e++) {
                    var t = new Line(A,e);
                    mount(t, this),
                    this.lineEntities.push(t)
                }
                this.distanceLines = [];
                for (let A = 0; A < 4; A++)
                    this.distanceLines.push(new DistanceLine(this,A));
                this.alignmentLines = {
                    v: [],
                    h: []
                },
                this.updated = !1,
                this.lineSelect = new AlignmentLines,
                this.adsorb = new Adsorb,
                this.distanceTip = new DistanceTip(this),
                this.initEvent(),
                this.resetStore()
            }
        }
        disable() {
            this.destroyEvent(),
            this.enable = !1,
            this.lineEntities && this.lineEntities.forEach((A=>A.destroy())),
            unmount(this),
            this.lineEntities = null,
            this.lineSelect = null,
            this.adsorb = null,
            this.adsorbLinesInfo = null,
            this.parent = null,
            this.root = null,
            this.distanceLines = null,
            this.distanceTip = null
        }
        destroy() {
            this.disable(),
            this.el = null,
            this.graphLinesData = null
        }
        initEvent() {
            const A = this.root;
            A.on("select", this.resetStore, this),
            A.on("graphMoveEnd", this.hidden, this),
            A.on("graphResizeEnd", this.hidden, this)
        }
        destroyEvent() {
            const A = this.root;
            A && (A.off("select", this.resetStore, this),
            A.off("graphMoveEnd", this.hidden, this),
            A.off("graphResizeEnd", this.hidden, this))
        }
        addLine(A, e) {
            A && e && (this.updated = !1,
            this.graphLinesData[A] = e)
        }
        removeLine(A) {
            A && (this.updated = !1,
            A in this.graphLinesData && delete this.graphLinesData[A])
        }
        resetStore() {
            var A, e = selector.getContainers();
            if (!(e.length <= 0)) {
                const t = this.root.operation
                  , n = (this.lineSelect.update(t.getSelectBoundRect()),
                getIds(e))
                  , {graphLinesData: s, alignmentLines: i} = (this.alignmentLines = {
                    v: [],
                    h: []
                },
                this);
                for (const e in s)
                    n.includes(e) || (A = s[e],
                    i.v = [...i.v, ...A.lines.v],
                    i.h = [...i.h, ...A.lines.h]);
                i.v = this.union(i.v),
                i.h = this.union(i.h),
                this.updated = !0,
                this.adsorb.resetAdsorbMovement()
            }
        }
        union(A=[]) {
            const e = {}
              , t = (A.forEach((A=>{
                if (e[A.pos]) {
                    const s = e[A.pos];
                    var t = [s.start, s.end, A.start, A.end].sort(((A,e)=>A - e))
                      , n = [...this.getBefore(s), ...this.getBefore(A)];
                    e[A.pos] = {
                        ...A,
                        start: t[0],
                        end: t[3],
                        isCombine: !0,
                        before: n
                    }
                } else
                    e[A.pos] = A
            }
            )),
            Object.values(e));
            return t.sort(((A,e)=>A.pos - e.pos))
        }
        getBefore(A={}) {
            var e = A.before;
            return !e || e.length < 1 ? [A] : [...e]
        }
        repaint({event: A, handler: e}, t="move") {
            if (this.updated) {
                var n = selector.getLayers();
                if (!n.length)
                    if (n = selector.getContainers(),
                    this.parent) {
                        var s = this.root.operation.getSelectBoundRect();
                        s && (this.lineSelect.update(s),
                        this.updateContainerAlignmentLines(n),
                        A && ((s = this.showLine(t, e, A).info).length && ![37, 38, 39, 40].includes(A.keyCode) && executeAdsorb.call(this, s, t, e)))
                    } else
                        this.updateContainerAlignmentLines(n)
            }
        }
        updateContainerAlignmentLines(A=[]) {
            A.forEach((A=>{
                A.alignmentLines && A.alignmentLines.update(A.bound.plainReal())
            }
            ))
        }
        showLine(A="move", e=null, t={}) {
            var n = this.lineSelect.calcNearLine(this.alignmentLines);
            const s = this.parent.getZoom();
            if (!Array.isArray(n.vLines) || !Array.isArray(n.hLines))
                return [];
            const i = [...n.vLines, ...n.hLines]
              , r = [...n.vLinesAll, ...n.hLinesAll]
              , o = []
              , a = []
              , c = [37, 38, 39, 40];
            return this.lineEntities.forEach(((n,l)=>{
                const h = ("move" === A ? i : r)[l];
                n.resetStyle(),
                !h || h.val > this.adsorb.adsorbDistance / s || "resize" === A && h.from.type.includes("m") || c.includes(t.keyCode) && 0 !== h.val ? n.hidden() : (n.show(getLineStyle(h, s)),
                o.push(h),
                "move" === A && a.push(getMoveInfo(h)),
                "resize" === A && a.push(getResizeInfo(h, e)))
            }
            )),
            this.distanceTip.ratio = s,
            this.distanceTip.show(o),
            {
                lines: o,
                info: a
            }
        }
        hidden() {
            this.lineEntities && this.lineEntities.forEach((A=>{
                A.resetStyle()
            }
            )),
            this.distanceTip.hideLines(),
            this.adsorb.resetAdsorbMovement()
        }
    }
    function executeAdsorb(A, e, t) {
        this.adsorb.ratio = this.parent.getZoom(),
        this.adsorb.setAlignment(A),
        this.adsorb.executeAlignment() && this.showLine(e, t)
    }
    function getIds(A) {
        return A.map ? A.map((A=>A.id)) : []
    }
    function getLineStyle(A, e) {
        var t = [A.start, A.end, A.from.start, A.from.end].sort(((A,e)=>A - e));
        return A.type.includes("v") ? {
            top: t[0] + "px",
            left: A.pos + ("vl" === A.from.type ? -1 : 0) + "px",
            transform: `scaleX(${1 / e})`,
            height: Math.abs(t[3] - t[0]) + "px"
        } : {
            top: A.pos + ("ht" === A.from.type ? -1 : 0) + "px",
            left: t[0] + "px",
            transform: `scaleY(${1 / e})`,
            width: Math.abs(t[3] - t[0]) + "px"
        }
    }
    function getMoveInfo(A) {
        const {pos: e, from: t, type: n} = A;
        return A = Math.round(e) - Math.round(t.pos),
        n.includes("v") ? {
            offset: A,
            type: "left"
        } : n.includes("h") ? {
            offset: A,
            type: "top"
        } : {}
    }
    function getResizeInfo(A, e) {
        const t = ["ht", "hb", "vl", "vr"]
          , n = handlerFnArr[e.index].map((A=>t[A]))
          , {pos: s, from: i, type: r} = A;
        if (e = Math.round(s) - Math.round(i.pos),
        i && i.type && !i.type.includes("m")) {
            if (r.includes("v") && n.includes(i.type))
                return {
                    offset: e,
                    type: "left"
                };
            if (r.includes("h") && n.includes(i.type))
                return {
                    offset: e,
                    type: "top"
                }
        }
        return {}
    }
    new AlignmentLinesManager,
    window.navigator.userAgent.indexOf("Mac OS X");
    const levelMap = {
        0: ["error", "warn", "info"],
        1: ["error", "warn"],
        2: ["error"]
    };
    class Log {
        constructor(A={}) {
            this.maxLog = A.maxLog || 100,
            this.printDate = Boolean(A.printDate) || !0,
            this.printOnBrowser = Boolean(A.printOnBrowser) || !0,
            this.level = isNumber(A.level) || 0,
            this._logRange = {},
            this._logStore = []
        }
        getLog() {
            return this._logStore.join("")
        }
        clearLog() {
            this._logStore = []
        }
        setLevel(A) {
            const e = Object.keys(levelMap).map((A=>Number(A)));
            if (!e.includes(A))
                throw new Error("日志级别配置错误！");
            this.level = A
        }
        downloadLog() {
            var A = this.getLog();
            A = new Blob([A],{
                type: "data:text/plain;charset=utf-8"
            });
            const e = document.createElement("a");
            e.href = window.URL.createObjectURL(A),
            e.target = "_blank",
            e.download = `THING.UI-${this.level}-log.txt`,
            document.body.appendChild(e),
            e.click(),
            document.body.removeChild(e),
            window.URL.revokeObjectURL(e.href)
        }
        record(A, e, ...t) {
            if (!levelMap[this.level].includes(A))
                return !1;
            this._logStore.length >= this.maxLog && this._logStore.shift(),
            this.printOnBrowser && log[A](...t);
            var n = "";
            n = (n += this.printDate ? `[THING.UI ${A}] ${this._date()} ` : `[THING.UI ${A}] `) + t.map((A=>JSON.stringify(A))).join(" ");
            return this._logStore.push(n += "\n"),
            this._logRange[e] = new Date,
            !0
        }
        output(A) {
            return new Date - this._logRange[A]
        }
        _date() {
            const A = new Date;
            return A.toLocaleDateString() + " " + A.toLocaleTimeString()
        }
    }
    new Log;
    var extendStatics = function(A, e) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(A, e) {
            A.__proto__ = e
        }
        || function(A, e) {
            for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t])
        }
        )(A, e)
    };
    function __extends(A, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function t() {
            this.constructor = A
        }
        extendStatics(A, e),
        A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype,
        new t)
    }
    var __assign = function() {
        return (__assign = Object.assign || function(A) {
            for (var e, t = 1, n = arguments.length; t < n; t++)
                for (var s in e = arguments[t])
                    Object.prototype.hasOwnProperty.call(e, s) && (A[s] = e[s]);
            return A
        }
        ).apply(this, arguments)
    };
    function __awaiter(A, e, t, n) {
        return new (t = t || Promise)((function(s, i) {
            function r(A) {
                try {
                    a(n.next(A))
                } catch (A) {
                    i(A)
                }
            }
            function o(A) {
                try {
                    a(n.throw(A))
                } catch (A) {
                    i(A)
                }
            }
            function a(A) {
                var e;
                A.done ? s(A.value) : ((e = A.value)instanceof t ? e : new t((function(A) {
                    A(e)
                }
                ))).then(r, o)
            }
            a((n = n.apply(A, e || [])).next())
        }
        ))
    }
    function __generator(A, e) {
        var t, n, s, i = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, r = {
            next: o(0),
            throw: o(1),
            return: o(2)
        };
        return "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }
        ),
        r;
        function o(r) {
            return function(o) {
                var a = [r, o];
                if (t)
                    throw new TypeError("Generator is already executing.");
                for (; i; )
                    try {
                        if (t = 1,
                        n && (s = 2 & a[0] ? n.return : a[0] ? n.throw || ((s = n.return) && s.call(n),
                        0) : n.next) && !(s = s.call(n, a[1])).done)
                            return s;
                        switch (n = 0,
                        (a = s ? [2 & a[0], s.value] : a)[0]) {
                        case 0:
                        case 1:
                            s = a;
                            break;
                        case 4:
                            return i.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            i.label++,
                            n = a[1],
                            a = [0];
                            continue;
                        case 7:
                            a = i.ops.pop(),
                            i.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                i.label = a[1];
                                break
                            }
                            if (6 === a[0] && i.label < s[1]) {
                                i.label = s[1],
                                s = a;
                                break
                            }
                            if (s && i.label < s[2]) {
                                i.label = s[2],
                                i.ops.push(a);
                                break
                            }
                            s[2] && i.ops.pop(),
                            i.trys.pop();
                            continue
                        }
                        a = e.call(A, i)
                    } catch (o) {
                        a = [6, o],
                        n = 0
                    } finally {
                        t = s = 0
                    }
                if (5 & a[0])
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
        }
    }
    function __spreadArray(A, e, t) {
        if (t || 2 === arguments.length)
            for (var n, s = 0, i = e.length; s < i; s++)
                !n && s in e || ((n = n || Array.prototype.slice.call(e, 0, s))[s] = e[s]);
        return A.concat(n || e)
    }
    for (var Bounds = function() {
        function A(A, e, t, n) {
            this.left = A,
            this.top = e,
            this.width = t,
            this.height = n
        }
        return A.prototype.add = function(e, t, n, s) {
            return new A(this.left + e,this.top + t,this.width + n,this.height + s)
        }
        ,
        A.fromClientRect = function(e, t) {
            return new A(t.left + e.windowBounds.left,t.top + e.windowBounds.top,t.width,t.height)
        }
        ,
        A.fromDOMRectList = function(e, t) {
            return t = Array.from(t).find((function(A) {
                return 0 !== A.width
            }
            )),
            t ? new A(t.left + e.windowBounds.left,t.top + e.windowBounds.top,t.width,t.height) : A.EMPTY
        }
        ,
        A.EMPTY = new A(0,0,0,0),
        A
    }(), parseBounds = function(A, e) {
        return Bounds.fromClientRect(A, e.getBoundingClientRect())
    }, parseDocumentSize = function(A) {
        var e = A.body;
        A = A.documentElement;
        if (!e || !A)
            throw new Error("Unable to get document size");
        var t = Math.max(Math.max(e.scrollWidth, A.scrollWidth), Math.max(e.offsetWidth, A.offsetWidth), Math.max(e.clientWidth, A.clientWidth));
        e = Math.max(Math.max(e.scrollHeight, A.scrollHeight), Math.max(e.offsetHeight, A.offsetHeight), Math.max(e.clientHeight, A.clientHeight));
        return new Bounds(0,0,t,e)
    }, toCodePoints$1 = function(A) {
        for (var e = [], t = 0, n = A.length; t < n; ) {
            var s, i = A.charCodeAt(t++);
            55296 <= i && i <= 56319 && t < n ? 56320 == (64512 & (s = A.charCodeAt(t++))) ? e.push(((1023 & i) << 10) + (1023 & s) + 65536) : (e.push(i),
            t--) : e.push(i)
        }
        return e
    }, fromCodePoint$1 = function() {
        for (var A = [], e = 0; e < arguments.length; e++)
            A[e] = arguments[e];
        if (String.fromCodePoint)
            return String.fromCodePoint.apply(String, A);
        var t = A.length;
        if (!t)
            return "";
        for (var n = [], s = -1, i = ""; ++s < t; ) {
            var r = A[s];
            r <= 65535 ? n.push(r) : (r -= 65536,
            n.push(55296 + (r >> 10), r % 1024 + 56320)),
            (s + 1 === t || 16384 < n.length) && (i += String.fromCharCode.apply(String, n),
            n.length = 0)
        }
        return i
    }, chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup$2 = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$2 = 0; i$2 < chars$2.length; i$2++)
        lookup$2[chars$2.charCodeAt(i$2)] = i$2;
    for (var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup$1$1 = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++)
        lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
    for (var decode$1 = function(A) {
        for (var e, t, n, s, i = .75 * A.length, r = A.length, o = 0, a = (i = ("=" === A[A.length - 1] && (i--,
        "=" === A[A.length - 2] && i--),
        new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(i)),
        Array.isArray(i) ? i : new Uint8Array(i)), c = 0; c < r; c += 4)
            e = lookup$1$1[A.charCodeAt(c)],
            t = lookup$1$1[A.charCodeAt(c + 1)],
            n = lookup$1$1[A.charCodeAt(c + 2)],
            s = lookup$1$1[A.charCodeAt(c + 3)],
            a[o++] = e << 2 | t >> 4,
            a[o++] = (15 & t) << 4 | n >> 2,
            a[o++] = (3 & n) << 6 | 63 & s;
        return i
    }, polyUint16Array$1 = function(A) {
        for (var e = A.length, t = [], n = 0; n < e; n += 2)
            t.push(A[n + 1] << 8 | A[n]);
        return t
    }, polyUint32Array$1 = function(A) {
        for (var e = A.length, t = [], n = 0; n < e; n += 4)
            t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
        return t
    }, UTRIE2_SHIFT_2$1 = 5, UTRIE2_SHIFT_1$1 = 11, UTRIE2_INDEX_SHIFT$1 = 2, UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1, UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1, UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1, UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1, UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1, UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1, UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1, UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 32, UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1, UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1, UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1, UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1, slice16$1 = function(A, e, t) {
        return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
    }, slice32$1 = function(A, e, t) {
        return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
    }, createTrieFromBase64$1 = function(A, e) {
        A = decode$1(A);
        var t = Array.isArray(A) ? polyUint32Array$1(A) : new Uint32Array(A)
          , n = (A = Array.isArray(A) ? polyUint16Array$1(A) : new Uint16Array(A),
        slice16$1(A, 12, t[4] / 2));
        A = 2 === t[5] ? slice16$1(A, (24 + t[4]) / 2) : slice32$1(t, Math.ceil((24 + t[4]) / 4));
        return new Trie$1(t[0],t[1],t[2],t[3],n,A)
    }, Trie$1 = function() {
        function A(A, e, t, n, s, i) {
            this.initialValue = A,
            this.errorValue = e,
            this.highStart = t,
            this.highValueIndex = n,
            this.index = s,
            this.data = i
        }
        return A.prototype.get = function(A) {
            var e;
            if (0 <= A) {
                if (A < 55296 || 56319 < A && A <= 65535)
                    return e = this.index[A >> UTRIE2_SHIFT_2$1],
                    this.data[e = (e << UTRIE2_INDEX_SHIFT$1) + (A & UTRIE2_DATA_MASK$1)];
                if (A <= 65535)
                    return e = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (A - 55296 >> UTRIE2_SHIFT_2$1)],
                    this.data[e = (e << UTRIE2_INDEX_SHIFT$1) + (A & UTRIE2_DATA_MASK$1)];
                if (A < this.highStart)
                    return e = this.index[e = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (A >> UTRIE2_SHIFT_1$1)],
                    e = this.index[e += A >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1],
                    this.data[e = (e << UTRIE2_INDEX_SHIFT$1) + (A & UTRIE2_DATA_MASK$1)];
                if (A <= 1114111)
                    return this.data[this.highValueIndex]
            }
            return this.errorValue
        }
        ,
        A
    }(), chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup$3 = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$3 = 0; i$3 < chars$3.length; i$3++)
        lookup$3[chars$3.charCodeAt(i$3)] = i$3;
    var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="
      , LETTER_NUMBER_MODIFIER = 50
      , BK = 1
      , CR$1 = 2
      , LF$1 = 3
      , CM = 4
      , NL = 5
      , WJ = 7
      , ZW = 8
      , GL = 9
      , SP = 10
      , ZWJ$1 = 11
      , B2 = 12
      , BA = 13
      , BB = 14
      , HY = 15
      , CB = 16
      , CL = 17
      , CP = 18
      , EX = 19
      , IN = 20
      , NS = 21
      , OP = 22
      , QU = 23
      , IS = 24
      , NU = 25
      , PO = 26
      , PR = 27
      , SY = 28
      , AI = 29
      , AL = 30
      , CJ = 31
      , EB = 32
      , EM = 33
      , H2 = 34
      , H3 = 35
      , HL = 36
      , ID = 37
      , JL = 38
      , JV = 39
      , JT = 40
      , RI$1 = 41
      , SA = 42
      , XX = 43
      , ea_OP = [9001, 65288]
      , BREAK_MANDATORY = "!"
      , BREAK_NOT_ALLOWED$1 = "×"
      , BREAK_ALLOWED$1 = "÷"
      , UnicodeTrie$1 = createTrieFromBase64$1(base64$1)
      , ALPHABETICS = [AL, HL]
      , HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL]
      , SPACE$1 = [SP, ZW]
      , PREFIX_POSTFIX = [PR, PO]
      , LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1)
      , KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3]
      , HYPHEN = [HY, BA]
      , codePointsToCharacterClasses = function(A, e) {
        void 0 === e && (e = "strict");
        var t = []
          , n = []
          , s = [];
        return A.forEach((function(A, i) {
            var r = UnicodeTrie$1.get(A);
            return LETTER_NUMBER_MODIFIER < r ? (s.push(!0),
            r -= LETTER_NUMBER_MODIFIER) : s.push(!1),
            -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A) ? (n.push(i),
            t.push(CB)) : r !== CM && r !== ZWJ$1 ? (n.push(i),
            r === CJ ? t.push("strict" === e ? NS : ID) : r === SA || r === AI ? t.push(AL) : r === XX ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? t.push(ID) : t.push(AL) : void t.push(r)) : 0 === i ? (n.push(i),
            t.push(AL)) : (A = t[i - 1],
            -1 === LINE_BREAKS.indexOf(A) ? (n.push(n[i - 1]),
            t.push(A)) : (n.push(i),
            t.push(AL)))
        }
        )),
        [n, t, s]
    }
      , isAdjacentWithSpaceIgnored = function(A, e, t, n) {
        var s = n[t];
        if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
            for (var i = t; i <= n.length; ) {
                if ((o = n[++i]) === e)
                    return !0;
                if (o !== SP)
                    break
            }
        if (s === SP)
            for (i = t; 0 < i; ) {
                var r = n[--i];
                if (Array.isArray(A) ? -1 !== A.indexOf(r) : A === r)
                    for (var o, a = t; a <= n.length; ) {
                        if ((o = n[++a]) === e)
                            return !0;
                        if (o !== SP)
                            break
                    }
                if (r !== SP)
                    break
            }
        return !1
    }
      , previousNonSpaceClassType = function(A, e) {
        for (var t = A; 0 <= t; ) {
            var n = e[t];
            if (n !== SP)
                return n;
            t--
        }
        return 0
    }
      , _lineBreakAtIndex = function(A, e, t, n, s) {
        if (0 === t[n])
            return BREAK_NOT_ALLOWED$1;
        if (n -= 1,
        Array.isArray(s) && !0 === s[n])
            return BREAK_NOT_ALLOWED$1;
        s = n - 1;
        var i = 1 + n
          , r = e[n]
          , o = 0 <= s ? e[s] : 0
          , a = e[i];
        if (r === CR$1 && a === LF$1)
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== HARD_LINE_BREAKS.indexOf(r))
            return BREAK_MANDATORY;
        if (-1 !== HARD_LINE_BREAKS.indexOf(a))
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== SPACE$1.indexOf(a))
            return BREAK_NOT_ALLOWED$1;
        if (previousNonSpaceClassType(n, e) === ZW)
            return BREAK_ALLOWED$1;
        if (UnicodeTrie$1.get(A[n]) === ZWJ$1)
            return BREAK_NOT_ALLOWED$1;
        if ((r === EB || r === EM) && UnicodeTrie$1.get(A[i]) === ZWJ$1)
            return BREAK_NOT_ALLOWED$1;
        if (r === WJ || a === WJ)
            return BREAK_NOT_ALLOWED$1;
        if (r === GL)
            return BREAK_NOT_ALLOWED$1;
        if (-1 === [SP, BA, HY].indexOf(r) && a === GL)
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== [CL, CP, EX, IS, SY].indexOf(a))
            return BREAK_NOT_ALLOWED$1;
        if (previousNonSpaceClassType(n, e) === OP)
            return BREAK_NOT_ALLOWED$1;
        if (isAdjacentWithSpaceIgnored(QU, OP, n, e))
            return BREAK_NOT_ALLOWED$1;
        if (isAdjacentWithSpaceIgnored([CL, CP], NS, n, e))
            return BREAK_NOT_ALLOWED$1;
        if (isAdjacentWithSpaceIgnored(B2, B2, n, e))
            return BREAK_NOT_ALLOWED$1;
        if (r === SP)
            return BREAK_ALLOWED$1;
        if (r === QU || a === QU)
            return BREAK_NOT_ALLOWED$1;
        if (a === CB || r === CB)
            return BREAK_ALLOWED$1;
        if (-1 !== [BA, HY, NS].indexOf(a) || r === BB)
            return BREAK_NOT_ALLOWED$1;
        if (o === HL && -1 !== HYPHEN.indexOf(r))
            return BREAK_NOT_ALLOWED$1;
        if (r === SY && a === HL)
            return BREAK_NOT_ALLOWED$1;
        if (a === IN)
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== ALPHABETICS.indexOf(a) && r === NU || -1 !== ALPHABETICS.indexOf(r) && a === NU)
            return BREAK_NOT_ALLOWED$1;
        if (r === PR && -1 !== [ID, EB, EM].indexOf(a) || -1 !== [ID, EB, EM].indexOf(r) && a === PO)
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== ALPHABETICS.indexOf(r) && -1 !== PREFIX_POSTFIX.indexOf(a) || -1 !== PREFIX_POSTFIX.indexOf(r) && -1 !== ALPHABETICS.indexOf(a))
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== [PR, PO].indexOf(r) && (a === NU || -1 !== [OP, HY].indexOf(a) && e[1 + i] === NU) || -1 !== [OP, HY].indexOf(r) && a === NU || r === NU && -1 !== [NU, SY, IS].indexOf(a))
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== [NU, SY, IS, CL, CP].indexOf(a))
            for (var c = n; 0 <= c; ) {
                if ((l = e[c]) === NU)
                    return BREAK_NOT_ALLOWED$1;
                if (-1 === [SY, IS].indexOf(l))
                    break;
                c--
            }
        if (-1 !== [PR, PO].indexOf(a)) {
            var l;
            for (c = -1 !== [CL, CP].indexOf(r) ? s : n; 0 <= c; ) {
                if ((l = e[c]) === NU)
                    return BREAK_NOT_ALLOWED$1;
                if (-1 === [SY, IS].indexOf(l))
                    break;
                c--
            }
        }
        if (JL === r && -1 !== [JL, JV, H2, H3].indexOf(a) || -1 !== [JV, H2].indexOf(r) && -1 !== [JV, JT].indexOf(a) || -1 !== [JT, H3].indexOf(r) && a === JT)
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== KOREAN_SYLLABLE_BLOCK.indexOf(r) && -1 !== [IN, PO].indexOf(a) || -1 !== KOREAN_SYLLABLE_BLOCK.indexOf(a) && r === PR)
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== ALPHABETICS.indexOf(r) && -1 !== ALPHABETICS.indexOf(a))
            return BREAK_NOT_ALLOWED$1;
        if (r === IS && -1 !== ALPHABETICS.indexOf(a))
            return BREAK_NOT_ALLOWED$1;
        if (-1 !== ALPHABETICS.concat(NU).indexOf(r) && a === OP && -1 === ea_OP.indexOf(A[i]) || -1 !== ALPHABETICS.concat(NU).indexOf(a) && r === CP)
            return BREAK_NOT_ALLOWED$1;
        if (r === RI$1 && a === RI$1) {
            for (var h = t[n], B = 1; 0 < h && e[--h] === RI$1; )
                B++;
            if (B % 2 != 0)
                return BREAK_NOT_ALLOWED$1
        }
        return r === EB && a === EM ? BREAK_NOT_ALLOWED$1 : BREAK_ALLOWED$1
    }
      , cssFormattedClasses = function(A, e) {
        var t = (s = codePointsToCharacterClasses(A, (e = e || {
            lineBreak: "normal",
            wordBreak: "normal"
        }).lineBreak))[0]
          , n = s[1]
          , s = s[2];
        "break-all" !== e.wordBreak && "break-word" !== e.wordBreak || (n = n.map((function(A) {
            return -1 !== [NU, AL, SA].indexOf(A) ? ID : A
        }
        ))),
        e = "keep-all" === e.wordBreak ? s.map((function(e, t) {
            return e && 19968 <= A[t] && A[t] <= 40959
        }
        )) : void 0;
        return [t, n, e]
    }
      , Break = function() {
        function A(A, e, t, n) {
            this.codePoints = A,
            this.required = e === BREAK_MANDATORY,
            this.start = t,
            this.end = n
        }
        return A.prototype.slice = function() {
            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end))
        }
        ,
        A
    }()
      , LineBreaker = function(A, e) {
        var t = toCodePoints$1(A)
          , n = (A = cssFormattedClasses(t, e))[0]
          , s = A[1]
          , i = A[2]
          , r = t.length
          , o = 0
          , a = 0;
        return {
            next: function() {
                if (r <= a)
                    return {
                        done: !0,
                        value: null
                    };
                for (var A, e = BREAK_NOT_ALLOWED$1; a < r && (e = _lineBreakAtIndex(t, s, n, ++a, i)) === BREAK_NOT_ALLOWED$1; )
                    ;
                return e !== BREAK_NOT_ALLOWED$1 || a === r ? (A = new Break(t,e,o,a),
                o = a,
                {
                    value: A,
                    done: !1
                }) : {
                    done: !0,
                    value: null
                }
            }
        }
    }
      , FLAG_UNRESTRICTED = 1
      , FLAG_ID = 2
      , FLAG_INTEGER = 4
      , FLAG_NUMBER = 8
      , LINE_FEED = 10
      , SOLIDUS = 47
      , REVERSE_SOLIDUS = 92
      , CHARACTER_TABULATION = 9
      , SPACE = 32
      , QUOTATION_MARK = 34
      , EQUALS_SIGN = 61
      , NUMBER_SIGN = 35
      , DOLLAR_SIGN = 36
      , PERCENTAGE_SIGN = 37
      , APOSTROPHE = 39
      , LEFT_PARENTHESIS = 40
      , RIGHT_PARENTHESIS = 41
      , LOW_LINE = 95
      , HYPHEN_MINUS = 45
      , EXCLAMATION_MARK = 33
      , LESS_THAN_SIGN = 60
      , GREATER_THAN_SIGN = 62
      , COMMERCIAL_AT = 64
      , LEFT_SQUARE_BRACKET = 91
      , RIGHT_SQUARE_BRACKET = 93
      , CIRCUMFLEX_ACCENT = 61
      , LEFT_CURLY_BRACKET = 123
      , QUESTION_MARK = 63
      , RIGHT_CURLY_BRACKET = 125
      , VERTICAL_LINE = 124
      , TILDE = 126
      , CONTROL = 128
      , REPLACEMENT_CHARACTER = 65533
      , ASTERISK = 42
      , PLUS_SIGN = 43
      , COMMA = 44
      , COLON = 58
      , SEMICOLON = 59
      , FULL_STOP = 46
      , NULL = 0
      , BACKSPACE = 8
      , LINE_TABULATION = 11
      , SHIFT_OUT = 14
      , INFORMATION_SEPARATOR_ONE = 31
      , DELETE = 127
      , EOF = -1
      , ZERO = 48
      , a = 97
      , e = 101
      , f = 102
      , u = 117
      , z = 122
      , A = 65
      , E = 69
      , F = 70
      , U = 85
      , Z = 90
      , isDigit = function(A) {
        return ZERO <= A && A <= 57
    }
      , isSurrogateCodePoint = function(A) {
        return 55296 <= A && A <= 57343
    }
      , isHex = function(e) {
        return isDigit(e) || A <= e && e <= F || a <= e && e <= f
    }
      , isLowerCaseLetter = function(A) {
        return a <= A && A <= z
    }
      , isUpperCaseLetter = function(e) {
        return A <= e && e <= Z
    }
      , isLetter = function(A) {
        return isLowerCaseLetter(A) || isUpperCaseLetter(A)
    }
      , isNonASCIICodePoint = function(A) {
        return CONTROL <= A
    }
      , isWhiteSpace = function(A) {
        return A === LINE_FEED || A === CHARACTER_TABULATION || A === SPACE
    }
      , isNameStartCodePoint = function(A) {
        return isLetter(A) || isNonASCIICodePoint(A) || A === LOW_LINE
    }
      , isNameCodePoint = function(A) {
        return isNameStartCodePoint(A) || isDigit(A) || A === HYPHEN_MINUS
    }
      , isNonPrintableCodePoint = function(A) {
        return NULL <= A && A <= BACKSPACE || A === LINE_TABULATION || SHIFT_OUT <= A && A <= INFORMATION_SEPARATOR_ONE || A === DELETE
    }
      , isValidEscape = function(A, e) {
        return A === REVERSE_SOLIDUS && e !== LINE_FEED
    }
      , isIdentifierStart = function(A, e, t) {
        return A === HYPHEN_MINUS ? isNameStartCodePoint(e) || isValidEscape(e, t) : !!isNameStartCodePoint(A) || !(A !== REVERSE_SOLIDUS || !isValidEscape(A, e))
    }
      , isNumberStart = function(A, e, t) {
        return A === PLUS_SIGN || A === HYPHEN_MINUS ? !!isDigit(e) || e === FULL_STOP && isDigit(t) : isDigit(A === FULL_STOP ? e : A)
    }
      , stringToNumber = function(A) {
        for (var t = 0, n = 1, s = (A[t] !== PLUS_SIGN && A[t] !== HYPHEN_MINUS || (A[t] === HYPHEN_MINUS && (n = -1),
        t++),
        []); isDigit(A[t]); )
            s.push(A[t++]);
        for (var i = s.length ? parseInt(fromCodePoint$1.apply(void 0, s), 10) : 0, r = (A[t] === FULL_STOP && t++,
        []); isDigit(A[t]); )
            r.push(A[t++]);
        for (var o = r.length, a = o ? parseInt(fromCodePoint$1.apply(void 0, r), 10) : 0, c = (A[t] !== E && A[t] !== e || t++,
        1), l = (A[t] !== PLUS_SIGN && A[t] !== HYPHEN_MINUS || (A[t] === HYPHEN_MINUS && (c = -1),
        t++),
        []); isDigit(A[t]); )
            l.push(A[t++]);
        var h = l.length ? parseInt(fromCodePoint$1.apply(void 0, l), 10) : 0;
        return n * (i + a * Math.pow(10, -o)) * Math.pow(10, c * h)
    }
      , LEFT_PARENTHESIS_TOKEN = {
        type: 2
    }
      , RIGHT_PARENTHESIS_TOKEN = {
        type: 3
    }
      , COMMA_TOKEN = {
        type: 4
    }
      , SUFFIX_MATCH_TOKEN = {
        type: 13
    }
      , PREFIX_MATCH_TOKEN = {
        type: 8
    }
      , COLUMN_TOKEN = {
        type: 21
    }
      , DASH_MATCH_TOKEN = {
        type: 9
    }
      , INCLUDE_MATCH_TOKEN = {
        type: 10
    }
      , LEFT_CURLY_BRACKET_TOKEN = {
        type: 11
    }
      , RIGHT_CURLY_BRACKET_TOKEN = {
        type: 12
    }
      , SUBSTRING_MATCH_TOKEN = {
        type: 14
    }
      , BAD_URL_TOKEN = {
        type: 23
    }
      , BAD_STRING_TOKEN = {
        type: 1
    }
      , CDO_TOKEN = {
        type: 25
    }
      , CDC_TOKEN = {
        type: 24
    }
      , COLON_TOKEN = {
        type: 26
    }
      , SEMICOLON_TOKEN = {
        type: 27
    }
      , LEFT_SQUARE_BRACKET_TOKEN = {
        type: 28
    }
      , RIGHT_SQUARE_BRACKET_TOKEN = {
        type: 29
    }
      , WHITESPACE_TOKEN = {
        type: 31
    }
      , EOF_TOKEN = {
        type: 32
    }
      , Tokenizer = function() {
        function A() {
            this._value = []
        }
        return A.prototype.write = function(A) {
            this._value = this._value.concat(toCodePoints$1(A))
        }
        ,
        A.prototype.read = function() {
            for (var A = [], e = this.consumeToken(); e !== EOF_TOKEN; )
                A.push(e),
                e = this.consumeToken();
            return A
        }
        ,
        A.prototype.consumeToken = function() {
            var A = this.consumeCodePoint();
            switch (A) {
            case QUOTATION_MARK:
                return this.consumeStringToken(QUOTATION_MARK);
            case NUMBER_SIGN:
                var e = this.peekCodePoint(0)
                  , t = this.peekCodePoint(1)
                  , n = this.peekCodePoint(2);
                if (isNameCodePoint(e) || isValidEscape(t, n))
                    return e = isIdentifierStart(e, t, n) ? FLAG_ID : FLAG_UNRESTRICTED,
                    {
                        type: 5,
                        value: this.consumeName(),
                        flags: e
                    };
                break;
            case DOLLAR_SIGN:
                if (this.peekCodePoint(0) === EQUALS_SIGN)
                    return this.consumeCodePoint(),
                    SUFFIX_MATCH_TOKEN;
                break;
            case APOSTROPHE:
                return this.consumeStringToken(APOSTROPHE);
            case LEFT_PARENTHESIS:
                return LEFT_PARENTHESIS_TOKEN;
            case RIGHT_PARENTHESIS:
                return RIGHT_PARENTHESIS_TOKEN;
            case ASTERISK:
                if (this.peekCodePoint(0) === EQUALS_SIGN)
                    return this.consumeCodePoint(),
                    SUBSTRING_MATCH_TOKEN;
                break;
            case PLUS_SIGN:
                if (isNumberStart(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                    return this.reconsumeCodePoint(A),
                    this.consumeNumericToken();
                break;
            case COMMA:
                return COMMA_TOKEN;
            case HYPHEN_MINUS:
                if (t = A,
                n = this.peekCodePoint(0),
                e = this.peekCodePoint(1),
                isNumberStart(t, n, e))
                    return this.reconsumeCodePoint(A),
                    this.consumeNumericToken();
                if (isIdentifierStart(t, n, e))
                    return this.reconsumeCodePoint(A),
                    this.consumeIdentLikeToken();
                if (n === HYPHEN_MINUS && e === GREATER_THAN_SIGN)
                    return this.consumeCodePoint(),
                    this.consumeCodePoint(),
                    CDC_TOKEN;
                break;
            case FULL_STOP:
                if (isNumberStart(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                    return this.reconsumeCodePoint(A),
                    this.consumeNumericToken();
                break;
            case SOLIDUS:
                if (this.peekCodePoint(0) === ASTERISK)
                    for (this.consumeCodePoint(); ; ) {
                        var s = this.consumeCodePoint();
                        if (s === ASTERISK && (s = this.consumeCodePoint()) === SOLIDUS)
                            return this.consumeToken();
                        if (s === EOF)
                            return this.consumeToken()
                    }
                break;
            case COLON:
                return COLON_TOKEN;
            case SEMICOLON:
                return SEMICOLON_TOKEN;
            case LESS_THAN_SIGN:
                if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS)
                    return this.consumeCodePoint(),
                    this.consumeCodePoint(),
                    CDO_TOKEN;
                break;
            case COMMERCIAL_AT:
                if (t = this.peekCodePoint(0),
                n = this.peekCodePoint(1),
                e = this.peekCodePoint(2),
                isIdentifierStart(t, n, e))
                    return {
                        type: 7,
                        value: this.consumeName()
                    };
                break;
            case LEFT_SQUARE_BRACKET:
                return LEFT_SQUARE_BRACKET_TOKEN;
            case REVERSE_SOLIDUS:
                if (isValidEscape(A, this.peekCodePoint(0)))
                    return this.reconsumeCodePoint(A),
                    this.consumeIdentLikeToken();
                break;
            case RIGHT_SQUARE_BRACKET:
                return RIGHT_SQUARE_BRACKET_TOKEN;
            case CIRCUMFLEX_ACCENT:
                if (this.peekCodePoint(0) === EQUALS_SIGN)
                    return this.consumeCodePoint(),
                    PREFIX_MATCH_TOKEN;
                break;
            case LEFT_CURLY_BRACKET:
                return LEFT_CURLY_BRACKET_TOKEN;
            case RIGHT_CURLY_BRACKET:
                return RIGHT_CURLY_BRACKET_TOKEN;
            case u:
            case U:
                return t = this.peekCodePoint(0),
                n = this.peekCodePoint(1),
                t !== PLUS_SIGN || !isHex(n) && n !== QUESTION_MARK || (this.consumeCodePoint(),
                this.consumeUnicodeRangeToken()),
                this.reconsumeCodePoint(A),
                this.consumeIdentLikeToken();
            case VERTICAL_LINE:
                if (this.peekCodePoint(0) === EQUALS_SIGN)
                    return this.consumeCodePoint(),
                    DASH_MATCH_TOKEN;
                if (this.peekCodePoint(0) === VERTICAL_LINE)
                    return this.consumeCodePoint(),
                    COLUMN_TOKEN;
                break;
            case TILDE:
                if (this.peekCodePoint(0) === EQUALS_SIGN)
                    return this.consumeCodePoint(),
                    INCLUDE_MATCH_TOKEN;
                break;
            case EOF:
                return EOF_TOKEN
            }
            return isWhiteSpace(A) ? (this.consumeWhiteSpace(),
            WHITESPACE_TOKEN) : isDigit(A) ? (this.reconsumeCodePoint(A),
            this.consumeNumericToken()) : isNameStartCodePoint(A) ? (this.reconsumeCodePoint(A),
            this.consumeIdentLikeToken()) : {
                type: 6,
                value: fromCodePoint$1(A)
            }
        }
        ,
        A.prototype.consumeCodePoint = function() {
            var A = this._value.shift();
            return void 0 === A ? -1 : A
        }
        ,
        A.prototype.reconsumeCodePoint = function(A) {
            this._value.unshift(A)
        }
        ,
        A.prototype.peekCodePoint = function(A) {
            return A >= this._value.length ? -1 : this._value[A]
        }
        ,
        A.prototype.consumeUnicodeRangeToken = function() {
            for (var A = [], e = this.consumeCodePoint(); isHex(e) && A.length < 6; )
                A.push(e),
                e = this.consumeCodePoint();
            for (var t = !1; e === QUESTION_MARK && A.length < 6; )
                A.push(e),
                e = this.consumeCodePoint(),
                t = !0;
            if (t)
                return {
                    type: 30,
                    start: parseInt(fromCodePoint$1.apply(void 0, A.map((function(A) {
                        return A === QUESTION_MARK ? ZERO : A
                    }
                    ))), 16),
                    end: parseInt(fromCodePoint$1.apply(void 0, A.map((function(A) {
                        return A === QUESTION_MARK ? F : A
                    }
                    ))), 16)
                };
            var n = parseInt(fromCodePoint$1.apply(void 0, A), 16);
            if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                e = this.consumeCodePoint();
                for (var s = []; isHex(e) && s.length < 6; )
                    s.push(e),
                    e = this.consumeCodePoint();
                return {
                    type: 30,
                    start: n,
                    end: parseInt(fromCodePoint$1.apply(void 0, s), 16)
                }
            }
            return {
                type: 30,
                start: n,
                end: n
            }
        }
        ,
        A.prototype.consumeIdentLikeToken = function() {
            var A = this.consumeName();
            return "url" === A.toLowerCase() && this.peekCodePoint(0) === LEFT_PARENTHESIS ? (this.consumeCodePoint(),
            this.consumeUrlToken()) : this.peekCodePoint(0) === LEFT_PARENTHESIS ? (this.consumeCodePoint(),
            {
                type: 19,
                value: A
            }) : {
                type: 20,
                value: A
            }
        }
        ,
        A.prototype.consumeUrlToken = function() {
            var A = [];
            if (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === EOF)
                return {
                    type: 22,
                    value: ""
                };
            var e = this.peekCodePoint(0);
            if (e === APOSTROPHE || e === QUOTATION_MARK)
                return 0 === (e = this.consumeStringToken(this.consumeCodePoint())).type && (this.consumeWhiteSpace(),
                this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) ? (this.consumeCodePoint(),
                {
                    type: 22,
                    value: e.value
                }) : (this.consumeBadUrlRemnants(),
                BAD_URL_TOKEN);
            for (; ; ) {
                var t = this.consumeCodePoint();
                if (t === EOF || t === RIGHT_PARENTHESIS)
                    return {
                        type: 22,
                        value: fromCodePoint$1.apply(void 0, A)
                    };
                if (isWhiteSpace(t))
                    return this.consumeWhiteSpace(),
                    this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS ? (this.consumeCodePoint(),
                    {
                        type: 22,
                        value: fromCodePoint$1.apply(void 0, A)
                    }) : (this.consumeBadUrlRemnants(),
                    BAD_URL_TOKEN);
                if (t === QUOTATION_MARK || t === APOSTROPHE || t === LEFT_PARENTHESIS || isNonPrintableCodePoint(t))
                    return this.consumeBadUrlRemnants(),
                    BAD_URL_TOKEN;
                if (t === REVERSE_SOLIDUS) {
                    if (!isValidEscape(t, this.peekCodePoint(0)))
                        return this.consumeBadUrlRemnants(),
                        BAD_URL_TOKEN;
                    A.push(this.consumeEscapedCodePoint())
                } else
                    A.push(t)
            }
        }
        ,
        A.prototype.consumeWhiteSpace = function() {
            for (; isWhiteSpace(this.peekCodePoint(0)); )
                this.consumeCodePoint()
        }
        ,
        A.prototype.consumeBadUrlRemnants = function() {
            for (; ; ) {
                var A = this.consumeCodePoint();
                if (A === RIGHT_PARENTHESIS || A === EOF)
                    return;
                isValidEscape(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
            }
        }
        ,
        A.prototype.consumeStringSlice = function(A) {
            for (var e = ""; 0 < A; ) {
                var t = Math.min(5e4, A);
                e += fromCodePoint$1.apply(void 0, this._value.splice(0, t)),
                A -= t
            }
            return this._value.shift(),
            e
        }
        ,
        A.prototype.consumeStringToken = function(A) {
            for (var e = "", t = 0; ; ) {
                var n, s = this._value[t];
                if (s === EOF || void 0 === s || s === A)
                    return {
                        type: 0,
                        value: e += this.consumeStringSlice(t)
                    };
                if (s === LINE_FEED)
                    return this._value.splice(0, t),
                    BAD_STRING_TOKEN;
                s !== REVERSE_SOLIDUS || (n = this._value[t + 1]) !== EOF && void 0 !== n && (n === LINE_FEED ? (e += this.consumeStringSlice(t),
                t = -1,
                this._value.shift()) : isValidEscape(s, n) && (e = (e += this.consumeStringSlice(t)) + fromCodePoint$1(this.consumeEscapedCodePoint()),
                t = -1)),
                t++
            }
        }
        ,
        A.prototype.consumeNumber = function() {
            var A = []
              , t = FLAG_INTEGER;
            for ((n = this.peekCodePoint(0)) !== PLUS_SIGN && n !== HYPHEN_MINUS || A.push(this.consumeCodePoint()); isDigit(this.peekCodePoint(0)); )
                A.push(this.consumeCodePoint());
            var n = this.peekCodePoint(0)
              , s = this.peekCodePoint(1);
            if (n === FULL_STOP && isDigit(s))
                for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                t = FLAG_NUMBER; isDigit(this.peekCodePoint(0)); )
                    A.push(this.consumeCodePoint());
            n = this.peekCodePoint(0);
            s = this.peekCodePoint(1);
            var i = this.peekCodePoint(2);
            if ((n === E || n === e) && ((s === PLUS_SIGN || s === HYPHEN_MINUS) && isDigit(i) || isDigit(s)))
                for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                t = FLAG_NUMBER; isDigit(this.peekCodePoint(0)); )
                    A.push(this.consumeCodePoint());
            return [stringToNumber(A), t]
        }
        ,
        A.prototype.consumeNumericToken = function() {
            var A = (e = this.consumeNumber())[0]
              , e = e[1]
              , t = this.peekCodePoint(0)
              , n = this.peekCodePoint(1)
              , s = this.peekCodePoint(2);
            return isIdentifierStart(t, n, s) ? {
                type: 15,
                number: A,
                flags: e,
                unit: this.consumeName()
            } : t === PERCENTAGE_SIGN ? (this.consumeCodePoint(),
            {
                type: 16,
                number: A,
                flags: e
            }) : {
                type: 17,
                number: A,
                flags: e
            }
        }
        ,
        A.prototype.consumeEscapedCodePoint = function() {
            var A = this.consumeCodePoint();
            if (isHex(A)) {
                for (var e = fromCodePoint$1(A); isHex(this.peekCodePoint(0)) && e.length < 6; )
                    e += fromCodePoint$1(this.consumeCodePoint());
                isWhiteSpace(this.peekCodePoint(0)) && this.consumeCodePoint();
                var t = parseInt(e, 16);
                return 0 === t || isSurrogateCodePoint(t) || 1114111 < t ? REPLACEMENT_CHARACTER : t
            }
            return A === EOF ? REPLACEMENT_CHARACTER : A
        }
        ,
        A.prototype.consumeName = function() {
            for (var A = ""; ; ) {
                var e = this.consumeCodePoint();
                if (isNameCodePoint(e))
                    A += fromCodePoint$1(e);
                else {
                    if (!isValidEscape(e, this.peekCodePoint(0)))
                        return this.reconsumeCodePoint(e),
                        A;
                    A += fromCodePoint$1(this.consumeEscapedCodePoint())
                }
            }
        }
        ,
        A
    }()
      , Parser = function() {
        function A(A) {
            this._tokens = A
        }
        return A.create = function(e) {
            var t = new Tokenizer;
            return t.write(e),
            new A(t.read())
        }
        ,
        A.parseValue = function(e) {
            return A.create(e).parseComponentValue()
        }
        ,
        A.parseValues = function(e) {
            return A.create(e).parseComponentValues()
        }
        ,
        A.prototype.parseComponentValue = function() {
            for (var A = this.consumeToken(); 31 === A.type; )
                A = this.consumeToken();
            if (32 === A.type)
                throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            this.reconsumeToken(A);
            for (var e = this.consumeComponentValue(); 31 === (A = this.consumeToken()).type; )
                ;
            if (32 === A.type)
                return e;
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
        }
        ,
        A.prototype.parseComponentValues = function() {
            for (var A = []; ; ) {
                var e = this.consumeComponentValue();
                if (32 === e.type)
                    return A;
                A.push(e),
                A.push()
            }
        }
        ,
        A.prototype.consumeComponentValue = function() {
            var A = this.consumeToken();
            switch (A.type) {
            case 11:
            case 28:
            case 2:
                return this.consumeSimpleBlock(A.type);
            case 19:
                return this.consumeFunction(A)
            }
            return A
        }
        ,
        A.prototype.consumeSimpleBlock = function(A) {
            for (var e = {
                type: A,
                values: []
            }, t = this.consumeToken(); ; ) {
                if (32 === t.type || isEndingTokenFor(t, A))
                    return e;
                this.reconsumeToken(t),
                e.values.push(this.consumeComponentValue()),
                t = this.consumeToken()
            }
        }
        ,
        A.prototype.consumeFunction = function(A) {
            for (var e = {
                name: A.value,
                values: [],
                type: 18
            }; ; ) {
                var t = this.consumeToken();
                if (32 === t.type || 3 === t.type)
                    return e;
                this.reconsumeToken(t),
                e.values.push(this.consumeComponentValue())
            }
        }
        ,
        A.prototype.consumeToken = function() {
            var A = this._tokens.shift();
            return void 0 === A ? EOF_TOKEN : A
        }
        ,
        A.prototype.reconsumeToken = function(A) {
            this._tokens.unshift(A)
        }
        ,
        A
    }()
      , isDimensionToken = function(A) {
        return 15 === A.type
    }
      , isNumberToken = function(A) {
        return 17 === A.type
    }
      , isIdentToken = function(A) {
        return 20 === A.type
    }
      , isStringToken = function(A) {
        return 0 === A.type
    }
      , isIdentWithValue = function(A, e) {
        return isIdentToken(A) && A.value === e
    }
      , nonWhiteSpace = function(A) {
        return 31 !== A.type
    }
      , nonFunctionArgSeparator = function(A) {
        return 31 !== A.type && 4 !== A.type
    }
      , parseFunctionArgs = function(A) {
        var e = []
          , t = [];
        return A.forEach((function(A) {
            if (4 === A.type) {
                if (0 === t.length)
                    throw new Error("Error parsing function args, zero tokens for arg");
                return e.push(t),
                void (t = [])
            }
            31 !== A.type && t.push(A)
        }
        )),
        t.length && e.push(t),
        e
    }
      , isEndingTokenFor = function(A, e) {
        return 11 === e && 12 === A.type || 28 === e && 29 === A.type || 2 === e && 3 === A.type
    }
      , isLength = function(A) {
        return 17 === A.type || 15 === A.type
    }
      , isLengthPercentage = function(A) {
        return 16 === A.type || isLength(A)
    }
      , parseLengthPercentageTuple = function(A) {
        return 1 < A.length ? [A[0], A[1]] : [A[0]]
    }
      , ZERO_LENGTH = {
        type: 17,
        number: 0,
        flags: FLAG_INTEGER
    }
      , FIFTY_PERCENT = {
        type: 16,
        number: 50,
        flags: FLAG_INTEGER
    }
      , HUNDRED_PERCENT = {
        type: 16,
        number: 100,
        flags: FLAG_INTEGER
    }
      , getAbsoluteValueForTuple = function(A, e, t) {
        var n = A[0];
        A = A[1];
        return [getAbsoluteValue(n, e), getAbsoluteValue(void 0 !== A ? A : n, t)]
    }
      , getAbsoluteValue = function(A, e) {
        if (16 === A.type)
            return A.number / 100 * e;
        if (isDimensionToken(A))
            switch (A.unit) {
            case "rem":
            case "em":
                return 16 * A.number;
            default:
                return A.number
            }
        return A.number
    }
      , DEG = "deg"
      , GRAD = "grad"
      , RAD = "rad"
      , TURN = "turn"
      , angle = {
        name: "angle",
        parse: function(A, e) {
            if (15 === e.type)
                switch (e.unit) {
                case DEG:
                    return Math.PI * e.number / 180;
                case GRAD:
                    return Math.PI / 200 * e.number;
                case RAD:
                    return e.number;
                case TURN:
                    return 2 * Math.PI * e.number
                }
            throw new Error("Unsupported angle type")
        }
    }
      , isAngle = function(A) {
        return 15 === A.type && (A.unit === DEG || A.unit === GRAD || A.unit === RAD || A.unit === TURN)
    }
      , parseNamedSide = function(A) {
        switch (A.filter(isIdentToken).map((function(A) {
            return A.value
        }
        )).join(" ")) {
        case "to bottom right":
        case "to right bottom":
        case "left top":
        case "top left":
            return [ZERO_LENGTH, ZERO_LENGTH];
        case "to top":
        case "bottom":
            return deg(0);
        case "to bottom left":
        case "to left bottom":
        case "right top":
        case "top right":
            return [ZERO_LENGTH, HUNDRED_PERCENT];
        case "to right":
        case "left":
            return deg(90);
        case "to top left":
        case "to left top":
        case "right bottom":
        case "bottom right":
            return [HUNDRED_PERCENT, HUNDRED_PERCENT];
        case "to bottom":
        case "top":
            return deg(180);
        case "to top right":
        case "to right top":
        case "left bottom":
        case "bottom left":
            return [HUNDRED_PERCENT, ZERO_LENGTH];
        case "to left":
        case "right":
            return deg(270)
        }
        return 0
    }
      , deg = function(A) {
        return Math.PI * A / 180
    }
      , color$1 = {
        name: "color",
        parse: function(A, e) {
            if (18 === e.type) {
                var t = SUPPORTED_COLOR_FUNCTIONS[e.name];
                if (void 0 === t)
                    throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
                return t(A, e.values)
            }
            if (5 === e.type) {
                var n, s, i, r;
                if (3 === e.value.length)
                    return n = e.value.substring(0, 1),
                    s = e.value.substring(1, 2),
                    i = e.value.substring(2, 3),
                    pack(parseInt(n + n, 16), parseInt(s + s, 16), parseInt(i + i, 16), 1);
                if (4 === e.value.length)
                    return n = e.value.substring(0, 1),
                    s = e.value.substring(1, 2),
                    i = e.value.substring(2, 3),
                    r = e.value.substring(3, 4),
                    pack(parseInt(n + n, 16), parseInt(s + s, 16), parseInt(i + i, 16), parseInt(r + r, 16) / 255);
                if (6 === e.value.length)
                    return n = e.value.substring(0, 2),
                    s = e.value.substring(2, 4),
                    i = e.value.substring(4, 6),
                    pack(parseInt(n, 16), parseInt(s, 16), parseInt(i, 16), 1);
                if (8 === e.value.length)
                    return n = e.value.substring(0, 2),
                    s = e.value.substring(2, 4),
                    i = e.value.substring(4, 6),
                    r = e.value.substring(6, 8),
                    pack(parseInt(n, 16), parseInt(s, 16), parseInt(i, 16), parseInt(r, 16) / 255)
            }
            return 20 === e.type && void 0 !== (t = COLORS[e.value.toUpperCase()]) ? t : COLORS.TRANSPARENT
        }
    }
      , isTransparent = function(A) {
        return 0 == (255 & A)
    }
      , asString = function(A) {
        var e = 255 & A
          , t = 255 & A >> 8
          , n = 255 & A >> 16;
        A = 255 & A >> 24;
        return e < 255 ? "rgba(" + A + "," + n + "," + t + "," + e / 255 + ")" : "rgb(" + A + "," + n + "," + t + ")"
    }
      , pack = function(A, e, t, n) {
        return (A << 24 | e << 16 | t << 8 | Math.round(255 * n) << 0) >>> 0
    }
      , getTokenColorValue = function(A, e) {
        return 17 === A.type ? A.number : 16 === A.type ? (t = 3 === e ? 1 : 255,
        3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)) : 0;
        var t
    }
      , rgb = function(A, e) {
        var t, n, s;
        return 3 === (e = e.filter(nonFunctionArgSeparator)).length ? (t = (s = e.map(getTokenColorValue))[0],
        n = s[1],
        s = s[2],
        pack(t, n, s, 1)) : 4 === e.length ? (t = (e = e.map(getTokenColorValue))[0],
        n = e[1],
        s = e[2],
        e = e[3],
        pack(t, n, s, e)) : 0
    };
    function hue2rgb(A, e, t) {
        return t < 0 && (t += 1),
        1 <= t && --t,
        t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
    }
    var hsl = function(A, e) {
        var t = (e = e.filter(nonFunctionArgSeparator))[0]
          , n = e[1]
          , s = e[2];
        e = e[3],
        A = (17 === t.type ? deg(t.number) : angle.parse(A, t)) / (2 * Math.PI),
        t = isLengthPercentage(n) ? n.number / 100 : 0,
        n = isLengthPercentage(s) ? s.number / 100 : 0,
        s = void 0 !== e && isLengthPercentage(e) ? getAbsoluteValue(e, 1) : 1;
        if (0 == t)
            return pack(255 * n, 255 * n, 255 * n, 1);
        n = hue2rgb(t = 2 * n - (e = n <= .5 ? n * (1 + t) : n + t - n * t), e, A + 1 / 3);
        var i = hue2rgb(t, e, A);
        t = hue2rgb(t, e, A - 1 / 3);
        return pack(255 * n, 255 * i, 255 * t, s)
    }
      , SUPPORTED_COLOR_FUNCTIONS = {
        hsl: hsl,
        hsla: hsl,
        rgb: rgb,
        rgba: rgb
    }
      , parseColor = function(A, e) {
        return color$1.parse(A, Parser.create(e).parseComponentValue())
    }
      , COLORS = {
        ALICEBLUE: 4042850303,
        ANTIQUEWHITE: 4209760255,
        AQUA: 16777215,
        AQUAMARINE: 2147472639,
        AZURE: 4043309055,
        BEIGE: 4126530815,
        BISQUE: 4293182719,
        BLACK: 255,
        BLANCHEDALMOND: 4293643775,
        BLUE: 65535,
        BLUEVIOLET: 2318131967,
        BROWN: 2771004159,
        BURLYWOOD: 3736635391,
        CADETBLUE: 1604231423,
        CHARTREUSE: 2147418367,
        CHOCOLATE: 3530104575,
        CORAL: 4286533887,
        CORNFLOWERBLUE: 1687547391,
        CORNSILK: 4294499583,
        CRIMSON: 3692313855,
        CYAN: 16777215,
        DARKBLUE: 35839,
        DARKCYAN: 9145343,
        DARKGOLDENROD: 3095837695,
        DARKGRAY: 2846468607,
        DARKGREEN: 6553855,
        DARKGREY: 2846468607,
        DARKKHAKI: 3182914559,
        DARKMAGENTA: 2332068863,
        DARKOLIVEGREEN: 1433087999,
        DARKORANGE: 4287365375,
        DARKORCHID: 2570243327,
        DARKRED: 2332033279,
        DARKSALMON: 3918953215,
        DARKSEAGREEN: 2411499519,
        DARKSLATEBLUE: 1211993087,
        DARKSLATEGRAY: 793726975,
        DARKSLATEGREY: 793726975,
        DARKTURQUOISE: 13554175,
        DARKVIOLET: 2483082239,
        DEEPPINK: 4279538687,
        DEEPSKYBLUE: 12582911,
        DIMGRAY: 1768516095,
        DIMGREY: 1768516095,
        DODGERBLUE: 512819199,
        FIREBRICK: 2988581631,
        FLORALWHITE: 4294635775,
        FORESTGREEN: 579543807,
        FUCHSIA: 4278255615,
        GAINSBORO: 3705462015,
        GHOSTWHITE: 4177068031,
        GOLD: 4292280575,
        GOLDENROD: 3668254975,
        GRAY: 2155905279,
        GREEN: 8388863,
        GREENYELLOW: 2919182335,
        GREY: 2155905279,
        HONEYDEW: 4043305215,
        HOTPINK: 4285117695,
        INDIANRED: 3445382399,
        INDIGO: 1258324735,
        IVORY: 4294963455,
        KHAKI: 4041641215,
        LAVENDER: 3873897215,
        LAVENDERBLUSH: 4293981695,
        LAWNGREEN: 2096890111,
        LEMONCHIFFON: 4294626815,
        LIGHTBLUE: 2916673279,
        LIGHTCORAL: 4034953471,
        LIGHTCYAN: 3774873599,
        LIGHTGOLDENRODYELLOW: 4210742015,
        LIGHTGRAY: 3553874943,
        LIGHTGREEN: 2431553791,
        LIGHTGREY: 3553874943,
        LIGHTPINK: 4290167295,
        LIGHTSALMON: 4288707327,
        LIGHTSEAGREEN: 548580095,
        LIGHTSKYBLUE: 2278488831,
        LIGHTSLATEGRAY: 2005441023,
        LIGHTSLATEGREY: 2005441023,
        LIGHTSTEELBLUE: 2965692159,
        LIGHTYELLOW: 4294959359,
        LIME: 16711935,
        LIMEGREEN: 852308735,
        LINEN: 4210091775,
        MAGENTA: 4278255615,
        MAROON: 2147483903,
        MEDIUMAQUAMARINE: 1724754687,
        MEDIUMBLUE: 52735,
        MEDIUMORCHID: 3126187007,
        MEDIUMPURPLE: 2473647103,
        MEDIUMSEAGREEN: 1018393087,
        MEDIUMSLATEBLUE: 2070474495,
        MEDIUMSPRINGGREEN: 16423679,
        MEDIUMTURQUOISE: 1221709055,
        MEDIUMVIOLETRED: 3340076543,
        MIDNIGHTBLUE: 421097727,
        MINTCREAM: 4127193855,
        MISTYROSE: 4293190143,
        MOCCASIN: 4293178879,
        NAVAJOWHITE: 4292783615,
        NAVY: 33023,
        OLDLACE: 4260751103,
        OLIVE: 2155872511,
        OLIVEDRAB: 1804477439,
        ORANGE: 4289003775,
        ORANGERED: 4282712319,
        ORCHID: 3664828159,
        PALEGOLDENROD: 4008225535,
        PALEGREEN: 2566625535,
        PALETURQUOISE: 2951671551,
        PALEVIOLETRED: 3681588223,
        PAPAYAWHIP: 4293907967,
        PEACHPUFF: 4292524543,
        PERU: 3448061951,
        PINK: 4290825215,
        PLUM: 3718307327,
        POWDERBLUE: 2967529215,
        PURPLE: 2147516671,
        REBECCAPURPLE: 1714657791,
        RED: 4278190335,
        ROSYBROWN: 3163525119,
        ROYALBLUE: 1097458175,
        SADDLEBROWN: 2336560127,
        SALMON: 4202722047,
        SANDYBROWN: 4104413439,
        SEAGREEN: 780883967,
        SEASHELL: 4294307583,
        SIENNA: 2689740287,
        SILVER: 3233857791,
        SKYBLUE: 2278484991,
        SLATEBLUE: 1784335871,
        SLATEGRAY: 1887473919,
        SLATEGREY: 1887473919,
        SNOW: 4294638335,
        SPRINGGREEN: 16744447,
        STEELBLUE: 1182971135,
        TAN: 3535047935,
        TEAL: 8421631,
        THISTLE: 3636451583,
        TOMATO: 4284696575,
        TRANSPARENT: 0,
        TURQUOISE: 1088475391,
        VIOLET: 4001558271,
        WHEAT: 4125012991,
        WHITE: 4294967295,
        WHITESMOKE: 4126537215,
        YELLOW: 4294902015,
        YELLOWGREEN: 2597139199
    }
      , backgroundClip = {
        name: "background-clip",
        initialValue: "border-box",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.map((function(A) {
                if (isIdentToken(A))
                    switch (A.value) {
                    case "padding-box":
                        return 1;
                    case "content-box":
                        return 2
                    }
                return 0
            }
            ))
        }
    }
      , backgroundColor = {
        name: "background-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }
      , parseColorStop = function(A, e) {
        return A = color$1.parse(A, e[0]),
        (e = e[1]) && isLengthPercentage(e) ? {
            color: A,
            stop: e
        } : {
            color: A,
            stop: null
        }
    }
      , processColorStops = function(A, e) {
        for (var t = A[0], n = A[A.length - 1], s = (null === t.stop && (t.stop = ZERO_LENGTH),
        null === n.stop && (n.stop = HUNDRED_PERCENT),
        []), i = 0, r = 0; r < A.length; r++) {
            var o = A[r].stop;
            null !== o ? (i < (o = getAbsoluteValue(o, e)) ? s.push(o) : s.push(i),
            i = o) : s.push(null)
        }
        var a = null;
        for (r = 0; r < s.length; r++) {
            var c = s[r];
            if (null === c)
                null === a && (a = r);
            else if (null !== a) {
                for (var l = r - a, h = (c - s[a - 1]) / (1 + l), B = 1; B <= l; B++)
                    s[a + B - 1] = h * B;
                a = null
            }
        }
        return A.map((function(A, t) {
            return {
                color: A.color,
                stop: Math.max(Math.min(1, s[t] / e), 0)
            }
        }
        ))
    }
      , getAngleFromCorner = function(A, e, t) {
        var n = e / 2
          , s = t / 2;
        e = getAbsoluteValue(A[0], e) - n,
        n = s - getAbsoluteValue(A[1], t);
        return (Math.atan2(n, e) + 2 * Math.PI) % (2 * Math.PI)
    }
      , calculateGradientDirection = function(A, e, t) {
        A = "number" == typeof A ? A : getAngleFromCorner(A, e, t);
        var n = Math.abs(e * Math.sin(A)) + Math.abs(t * Math.cos(A))
          , s = (e = e / 2,
        t = t / 2,
        n / 2)
          , i = Math.sin(A - Math.PI / 2) * s;
        return [n, e - (A = Math.cos(A - Math.PI / 2) * s), e + A, t - i, t + i]
    }
      , distance = function(A, e) {
        return Math.sqrt(A * A + e * e)
    }
      , findCorner = function(A, e, t, n, s) {
        return [[0, 0], [0, e], [A, 0], [A, e]].reduce((function(A, e) {
            var i = e[0]
              , r = e[1];
            i = distance(t - i, n - r);
            return (s ? i < A.optimumDistance : i > A.optimumDistance) ? {
                optimumCorner: e,
                optimumDistance: i
            } : A
        }
        ), {
            optimumDistance: s ? 1 / 0 : -1 / 0,
            optimumCorner: null
        }).optimumCorner
    }
      , calculateRadius = function(A, e, t, n, s) {
        var i, r, o, a, c = 0, l = 0;
        switch (A.size) {
        case 0:
            0 === A.shape ? c = l = Math.min(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - s)) : 1 === A.shape && (c = Math.min(Math.abs(e), Math.abs(e - n)),
            l = Math.min(Math.abs(t), Math.abs(t - s)));
            break;
        case 2:
            0 === A.shape ? c = l = Math.min(distance(e, t), distance(e, t - s), distance(e - n, t), distance(e - n, t - s)) : 1 === A.shape && (i = Math.min(Math.abs(t), Math.abs(t - s)) / Math.min(Math.abs(e), Math.abs(e - n)),
            o = (a = findCorner(n, s, e, t, !0))[0],
            a = a[1],
            l = i * (c = distance(o - e, (a - t) / i)));
            break;
        case 1:
            0 === A.shape ? c = l = Math.max(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - s)) : 1 === A.shape && (c = Math.max(Math.abs(e), Math.abs(e - n)),
            l = Math.max(Math.abs(t), Math.abs(t - s)));
            break;
        case 3:
            0 === A.shape ? c = l = Math.max(distance(e, t), distance(e, t - s), distance(e - n, t), distance(e - n, t - s)) : 1 === A.shape && (i = Math.max(Math.abs(t), Math.abs(t - s)) / Math.max(Math.abs(e), Math.abs(e - n)),
            o = (r = findCorner(n, s, e, t, !1))[0],
            a = r[1],
            l = i * (c = distance(o - e, (a - t) / i)))
        }
        return Array.isArray(A.size) && (c = getAbsoluteValue(A.size[0], n),
        l = 2 === A.size.length ? getAbsoluteValue(A.size[1], s) : c),
        [c, l]
    }
      , linearGradient = function(A, e) {
        var t = deg(180)
          , n = [];
        return parseFunctionArgs(e).forEach((function(e, s) {
            if (0 === s) {
                if (20 === (s = e[0]).type && "to" === s.value)
                    return void (t = parseNamedSide(e));
                if (isAngle(s))
                    return void (t = angle.parse(A, s))
            }
            s = parseColorStop(A, e),
            n.push(s)
        }
        )),
        {
            angle: t,
            stops: n,
            type: 1
        }
    }
      , prefixLinearGradient = function(A, e) {
        var t = deg(180)
          , n = [];
        return parseFunctionArgs(e).forEach((function(e, s) {
            if (0 === s) {
                if (20 === (s = e[0]).type && -1 !== ["top", "left", "right", "bottom"].indexOf(s.value))
                    return void (t = parseNamedSide(e));
                if (isAngle(s))
                    return void (t = (angle.parse(A, s) + deg(270)) % deg(360))
            }
            s = parseColorStop(A, e),
            n.push(s)
        }
        )),
        {
            angle: t,
            stops: n,
            type: 1
        }
    }
      , webkitGradient = function(A, e) {
        var t = deg(180)
          , n = []
          , s = 1;
        return parseFunctionArgs(e).forEach((function(e, t) {
            var i;
            e = e[0];
            if (0 === t) {
                if (isIdentToken(e) && "linear" === e.value)
                    return void (s = 1);
                if (isIdentToken(e) && "radial" === e.value)
                    return void (s = 2)
            }
            18 === e.type && ("from" === e.name ? (i = color$1.parse(A, e.values[0]),
            n.push({
                stop: ZERO_LENGTH,
                color: i
            })) : "to" === e.name ? (i = color$1.parse(A, e.values[0]),
            n.push({
                stop: HUNDRED_PERCENT,
                color: i
            })) : "color-stop" === e.name && 2 === (t = e.values.filter(nonFunctionArgSeparator)).length && (i = color$1.parse(A, t[1]),
            e = t[0],
            isNumberToken(e) && n.push({
                stop: {
                    type: 16,
                    number: 100 * e.number,
                    flags: e.flags
                },
                color: i
            })))
        }
        )),
        1 === s ? {
            angle: (t + deg(180)) % deg(360),
            stops: n,
            type: s
        } : {
            size: 3,
            shape: 0,
            stops: n,
            position: [],
            type: s
        }
    }
      , CLOSEST_SIDE = "closest-side"
      , FARTHEST_SIDE = "farthest-side"
      , CLOSEST_CORNER = "closest-corner"
      , FARTHEST_CORNER = "farthest-corner"
      , CIRCLE = "circle"
      , ELLIPSE = "ellipse"
      , COVER = "cover"
      , CONTAIN = "contain"
      , radialGradient = function(A, e) {
        var t = 0
          , n = 3
          , s = []
          , i = [];
        return parseFunctionArgs(e).forEach((function(e, r) {
            var o, a = !0;
            0 === r && (o = !1,
            a = e.reduce((function(A, e) {
                if (o)
                    if (isIdentToken(e))
                        switch (e.value) {
                        case "center":
                            return i.push(FIFTY_PERCENT),
                            A;
                        case "top":
                        case "left":
                            return i.push(ZERO_LENGTH),
                            A;
                        case "right":
                        case "bottom":
                            return i.push(HUNDRED_PERCENT),
                            A
                        }
                    else
                        (isLengthPercentage(e) || isLength(e)) && i.push(e);
                else if (isIdentToken(e))
                    switch (e.value) {
                    case CIRCLE:
                        return t = 0,
                        !1;
                    case ELLIPSE:
                        return !(t = 1);
                    case "at":
                        return !(o = !0);
                    case CLOSEST_SIDE:
                        return n = 0,
                        !1;
                    case COVER:
                    case FARTHEST_SIDE:
                        return !(n = 1);
                    case CONTAIN:
                    case CLOSEST_CORNER:
                        return !(n = 2);
                    case FARTHEST_CORNER:
                        return !(n = 3)
                    }
                else if (isLength(e) || isLengthPercentage(e))
                    return (n = Array.isArray(n) ? n : []).push(e),
                    !1;
                return A
            }
            ), a)),
            a && (r = parseColorStop(A, e),
            s.push(r))
        }
        )),
        {
            size: n,
            shape: t,
            stops: s,
            position: i,
            type: 2
        }
    }
      , prefixRadialGradient = function(A, e) {
        var t = 0
          , n = 3
          , s = []
          , i = [];
        return parseFunctionArgs(e).forEach((function(e, r) {
            var o = !0;
            0 === r ? o = e.reduce((function(A, e) {
                if (isIdentToken(e))
                    switch (e.value) {
                    case "center":
                        return i.push(FIFTY_PERCENT),
                        !1;
                    case "top":
                    case "left":
                        return i.push(ZERO_LENGTH),
                        !1;
                    case "right":
                    case "bottom":
                        return i.push(HUNDRED_PERCENT),
                        !1
                    }
                else if (isLengthPercentage(e) || isLength(e))
                    return i.push(e),
                    !1;
                return A
            }
            ), o) : 1 === r && (o = e.reduce((function(A, e) {
                if (isIdentToken(e))
                    switch (e.value) {
                    case CIRCLE:
                        return t = 0,
                        !1;
                    case ELLIPSE:
                        return !(t = 1);
                    case CONTAIN:
                    case CLOSEST_SIDE:
                        return n = 0,
                        !1;
                    case FARTHEST_SIDE:
                        return !(n = 1);
                    case CLOSEST_CORNER:
                        return !(n = 2);
                    case COVER:
                    case FARTHEST_CORNER:
                        return !(n = 3)
                    }
                else if (isLength(e) || isLengthPercentage(e))
                    return (n = Array.isArray(n) ? n : []).push(e),
                    !1;
                return A
            }
            ), o)),
            o && (r = parseColorStop(A, e),
            s.push(r))
        }
        )),
        {
            size: n,
            shape: t,
            stops: s,
            position: i,
            type: 2
        }
    }
      , isLinearGradient = function(A) {
        return 1 === A.type
    }
      , isRadialGradient = function(A) {
        return 2 === A.type
    }
      , image = {
        name: "image",
        parse: function(A, e) {
            if (22 === e.type)
                return t = {
                    url: e.value,
                    type: 0
                },
                A.cache.addImage(e.value),
                t;
            if (18 !== e.type)
                throw new Error("Unsupported image type " + e.type);
            var t = SUPPORTED_IMAGE_FUNCTIONS[e.name];
            if (void 0 === t)
                throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
            return t(A, e.values)
        }
    };
    function isSupportedImage(A) {
        return !(20 === A.type && "none" === A.value || 18 === A.type && !SUPPORTED_IMAGE_FUNCTIONS[A.name])
    }
    for (var SUPPORTED_IMAGE_FUNCTIONS = {
        "linear-gradient": linearGradient,
        "-moz-linear-gradient": prefixLinearGradient,
        "-ms-linear-gradient": prefixLinearGradient,
        "-o-linear-gradient": prefixLinearGradient,
        "-webkit-linear-gradient": prefixLinearGradient,
        "radial-gradient": radialGradient,
        "-moz-radial-gradient": prefixRadialGradient,
        "-ms-radial-gradient": prefixRadialGradient,
        "-o-radial-gradient": prefixRadialGradient,
        "-webkit-radial-gradient": prefixRadialGradient,
        "-webkit-gradient": webkitGradient
    }, backgroundImage = {
        name: "background-image",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            if (0 === e.length)
                return [];
            var t = e[0];
            return 20 === t.type && "none" === t.value ? [] : e.filter((function(A) {
                return nonFunctionArgSeparator(A) && isSupportedImage(A)
            }
            )).map((function(e) {
                return image.parse(A, e)
            }
            ))
        }
    }, backgroundOrigin = {
        name: "background-origin",
        initialValue: "border-box",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.map((function(A) {
                if (isIdentToken(A))
                    switch (A.value) {
                    case "padding-box":
                        return 1;
                    case "content-box":
                        return 2
                    }
                return 0
            }
            ))
        }
    }, backgroundPosition = {
        name: "background-position",
        initialValue: "0% 0%",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            return parseFunctionArgs(e).map((function(A) {
                return A.filter(isLengthPercentage)
            }
            )).map(parseLengthPercentageTuple)
        }
    }, backgroundRepeat = {
        name: "background-repeat",
        initialValue: "repeat",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return parseFunctionArgs(e).map((function(A) {
                return A.filter(isIdentToken).map((function(A) {
                    return A.value
                }
                )).join(" ")
            }
            )).map(parseBackgroundRepeat)
        }
    }, parseBackgroundRepeat = function(A) {
        switch (A) {
        case "no-repeat":
            return 1;
        case "repeat-x":
        case "repeat no-repeat":
            return 2;
        case "repeat-y":
        case "no-repeat repeat":
            return 3;
        default:
            return 0
        }
    }, BACKGROUND_SIZE, backgroundSize = (function(A) {
        A.AUTO = "auto",
        A.CONTAIN = "contain",
        A.COVER = "cover"
    }(BACKGROUND_SIZE = BACKGROUND_SIZE || {}),
    {
        name: "background-size",
        initialValue: "0",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return parseFunctionArgs(e).map((function(A) {
                return A.filter(isBackgroundSizeInfoToken)
            }
            ))
        }
    }), isBackgroundSizeInfoToken = function(A) {
        return isIdentToken(A) || isLengthPercentage(A)
    }, borderColorForSide = function(A) {
        return {
            name: "border-" + A + "-color",
            initialValue: "transparent",
            prefix: !1,
            type: 3,
            format: "color"
        }
    }, borderTopColor = borderColorForSide("top"), borderRightColor = borderColorForSide("right"), borderBottomColor = borderColorForSide("bottom"), borderLeftColor = borderColorForSide("left"), borderRadiusForSide = function(A) {
        return {
            name: "border-radius-" + A,
            initialValue: "0 0",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return parseLengthPercentageTuple(e.filter(isLengthPercentage))
            }
        }
    }, borderTopLeftRadius = borderRadiusForSide("top-left"), borderTopRightRadius = borderRadiusForSide("top-right"), borderBottomRightRadius = borderRadiusForSide("bottom-right"), borderBottomLeftRadius = borderRadiusForSide("bottom-left"), borderStyleForSide = function(A) {
        return {
            name: "border-" + A + "-style",
            initialValue: "solid",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                case "none":
                    return 0;
                case "dashed":
                    return 2;
                case "dotted":
                    return 3;
                case "double":
                    return 4
                }
                return 1
            }
        }
    }, borderTopStyle = borderStyleForSide("top"), borderRightStyle = borderStyleForSide("right"), borderBottomStyle = borderStyleForSide("bottom"), borderLeftStyle = borderStyleForSide("left"), borderWidthForSide = function(A) {
        return {
            name: "border-" + A + "-width",
            initialValue: "0",
            type: 0,
            prefix: !1,
            parse: function(A, e) {
                return isDimensionToken(e) ? e.number : 0
            }
        }
    }, borderTopWidth = borderWidthForSide("top"), borderRightWidth = borderWidthForSide("right"), borderBottomWidth = borderWidthForSide("bottom"), borderLeftWidth = borderWidthForSide("left"), color = {
        name: "color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }, direction = {
        name: "direction",
        initialValue: "ltr",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            return "rtl" !== e ? 0 : 1
        }
    }, display = {
        name: "display",
        initialValue: "inline-block",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.filter(isIdentToken).reduce((function(A, e) {
                return A | parseDisplayValue(e.value)
            }
            ), 0)
        }
    }, parseDisplayValue = function(A) {
        switch (A) {
        case "block":
        case "-webkit-box":
            return 2;
        case "inline":
            return 4;
        case "run-in":
            return 8;
        case "flow":
            return 16;
        case "flow-root":
            return 32;
        case "table":
            return 64;
        case "flex":
        case "-webkit-flex":
            return 128;
        case "grid":
        case "-ms-grid":
            return 256;
        case "ruby":
            return 512;
        case "subgrid":
            return 1024;
        case "list-item":
            return 2048;
        case "table-row-group":
            return 4096;
        case "table-header-group":
            return 8192;
        case "table-footer-group":
            return 16384;
        case "table-row":
            return 32768;
        case "table-cell":
            return 65536;
        case "table-column-group":
            return 131072;
        case "table-column":
            return 262144;
        case "table-caption":
            return 524288;
        case "ruby-base":
            return 1048576;
        case "ruby-text":
            return 2097152;
        case "ruby-base-container":
            return 4194304;
        case "ruby-text-container":
            return 8388608;
        case "contents":
            return 16777216;
        case "inline-block":
            return 33554432;
        case "inline-list-item":
            return 67108864;
        case "inline-table":
            return 134217728;
        case "inline-flex":
            return 268435456;
        case "inline-grid":
            return 536870912
        }
        return 0
    }, float = {
        name: "float",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "left":
                return 1;
            case "right":
                return 2;
            case "inline-start":
                return 3;
            case "inline-end":
                return 4
            }
            return 0
        }
    }, letterSpacing = {
        name: "letter-spacing",
        initialValue: "0",
        prefix: !1,
        type: 0,
        parse: function(A, e) {
            return 20 === e.type && "normal" === e.value || 17 !== e.type && 15 !== e.type ? 0 : e.number
        }
    }, LINE_BREAK, lineBreak = (function(A) {
        A.NORMAL = "normal",
        A.STRICT = "strict"
    }(LINE_BREAK = LINE_BREAK || {}),
    {
        name: "line-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            return "strict" !== e ? LINE_BREAK.NORMAL : LINE_BREAK.STRICT
        }
    }), lineHeight = {
        name: "line-height",
        initialValue: "normal",
        prefix: !1,
        type: 4
    }, computeLineHeight = function(A, e) {
        return isIdentToken(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : isLengthPercentage(A) ? getAbsoluteValue(A, e) : e
    }, listStyleImage = {
        name: "list-style-image",
        initialValue: "none",
        type: 0,
        prefix: !1,
        parse: function(A, e) {
            return 20 === e.type && "none" === e.value ? null : image.parse(A, e)
        }
    }, listStylePosition = {
        name: "list-style-position",
        initialValue: "outside",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            return "inside" !== e ? 1 : 0
        }
    }, listStyleType = {
        name: "list-style-type",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "disc":
                return 0;
            case "circle":
                return 1;
            case "square":
                return 2;
            case "decimal":
                return 3;
            case "cjk-decimal":
                return 4;
            case "decimal-leading-zero":
                return 5;
            case "lower-roman":
                return 6;
            case "upper-roman":
                return 7;
            case "lower-greek":
                return 8;
            case "lower-alpha":
                return 9;
            case "upper-alpha":
                return 10;
            case "arabic-indic":
                return 11;
            case "armenian":
                return 12;
            case "bengali":
                return 13;
            case "cambodian":
                return 14;
            case "cjk-earthly-branch":
                return 15;
            case "cjk-heavenly-stem":
                return 16;
            case "cjk-ideographic":
                return 17;
            case "devanagari":
                return 18;
            case "ethiopic-numeric":
                return 19;
            case "georgian":
                return 20;
            case "gujarati":
                return 21;
            case "gurmukhi":
            case "hebrew":
                return 22;
            case "hiragana":
                return 23;
            case "hiragana-iroha":
                return 24;
            case "japanese-formal":
                return 25;
            case "japanese-informal":
                return 26;
            case "kannada":
                return 27;
            case "katakana":
                return 28;
            case "katakana-iroha":
                return 29;
            case "khmer":
                return 30;
            case "korean-hangul-formal":
                return 31;
            case "korean-hanja-formal":
                return 32;
            case "korean-hanja-informal":
                return 33;
            case "lao":
                return 34;
            case "lower-armenian":
                return 35;
            case "malayalam":
                return 36;
            case "mongolian":
                return 37;
            case "myanmar":
                return 38;
            case "oriya":
                return 39;
            case "persian":
                return 40;
            case "simp-chinese-formal":
                return 41;
            case "simp-chinese-informal":
                return 42;
            case "tamil":
                return 43;
            case "telugu":
                return 44;
            case "thai":
                return 45;
            case "tibetan":
                return 46;
            case "trad-chinese-formal":
                return 47;
            case "trad-chinese-informal":
                return 48;
            case "upper-armenian":
                return 49;
            case "disclosure-open":
                return 50;
            case "disclosure-closed":
                return 51;
            default:
                return -1
            }
        }
    }, marginForSide = function(A) {
        return {
            name: "margin-" + A,
            initialValue: "0",
            prefix: !1,
            type: 4
        }
    }, marginTop = marginForSide("top"), marginRight = marginForSide("right"), marginBottom = marginForSide("bottom"), marginLeft = marginForSide("left"), overflow = {
        name: "overflow",
        initialValue: "visible",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.filter(isIdentToken).map((function(A) {
                switch (A.value) {
                case "hidden":
                    return 1;
                case "scroll":
                    return 2;
                case "clip":
                    return 3;
                case "auto":
                    return 4;
                default:
                    return 0
                }
            }
            ))
        }
    }, overflowWrap = {
        name: "overflow-wrap",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            return "break-word" !== e ? "normal" : "break-word"
        }
    }, paddingForSide = function(A) {
        return {
            name: "padding-" + A,
            initialValue: "0",
            prefix: !1,
            type: 3,
            format: "length-percentage"
        }
    }, paddingTop = paddingForSide("top"), paddingRight = paddingForSide("right"), paddingBottom = paddingForSide("bottom"), paddingLeft = paddingForSide("left"), textAlign = {
        name: "text-align",
        initialValue: "left",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "right":
                return 2;
            case "center":
            case "justify":
                return 1;
            default:
                return 0
            }
        }
    }, position = {
        name: "position",
        initialValue: "static",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "relative":
                return 1;
            case "absolute":
                return 2;
            case "fixed":
                return 3;
            case "sticky":
                return 4
            }
            return 0
        }
    }, textShadow = {
        name: "text-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            return 1 === e.length && isIdentWithValue(e[0], "none") ? [] : parseFunctionArgs(e).map((function(e) {
                for (var t = {
                    color: COLORS.TRANSPARENT,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH
                }, n = 0, s = 0; s < e.length; s++) {
                    var i = e[s];
                    isLength(i) ? (0 === n ? t.offsetX = i : 1 === n ? t.offsetY = i : t.blur = i,
                    n++) : t.color = color$1.parse(A, i)
                }
                return t
            }
            ))
        }
    }, textTransform = {
        name: "text-transform",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "uppercase":
                return 2;
            case "lowercase":
                return 1;
            case "capitalize":
                return 3
            }
            return 0
        }
    }, transform$1 = {
        name: "transform",
        initialValue: "none",
        prefix: !0,
        type: 0,
        parse: function(A, e) {
            if (20 === e.type && "none" === e.value)
                return null;
            if (18 !== e.type)
                return null;
            var t = SUPPORTED_TRANSFORM_FUNCTIONS[e.name];
            if (void 0 === t)
                throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
            return t(e.values)
        }
    }, matrix = function(A) {
        return 6 === (A = A.filter((function(A) {
            return 17 === A.type
        }
        )).map((function(A) {
            return A.number
        }
        ))).length ? A : null
    }, matrix3d = function(A) {
        var e = (A = A.filter((function(A) {
            return 17 === A.type
        }
        )).map((function(A) {
            return A.number
        }
        )))[0]
          , t = A[1]
          , n = (A[2],
        A[3],
        A[4])
          , s = A[5]
          , i = (A[6],
        A[7],
        A[8],
        A[9],
        A[10],
        A[11],
        A[12])
          , r = A[13];
        return A[14],
        A[15],
        16 === A.length ? [e, t, n, s, i, r] : null
    }, SUPPORTED_TRANSFORM_FUNCTIONS = {
        matrix: matrix,
        matrix3d: matrix3d
    }, DEFAULT_VALUE = {
        type: 16,
        number: 50,
        flags: FLAG_INTEGER
    }, DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE], transformOrigin = {
        name: "transform-origin",
        initialValue: "50% 50%",
        prefix: !0,
        type: 1,
        parse: function(A, e) {
            return 2 !== (e = e.filter(isLengthPercentage)).length ? DEFAULT : [e[0], e[1]]
        }
    }, visibility = {
        name: "visible",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "hidden":
                return 1;
            case "collapse":
                return 2;
            default:
                return 0
            }
        }
    }, WORD_BREAK, wordBreak = (function(A) {
        A.NORMAL = "normal",
        A.BREAK_ALL = "break-all",
        A.KEEP_ALL = "keep-all"
    }(WORD_BREAK = WORD_BREAK || {}),
    {
        name: "word-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "break-all":
                return WORD_BREAK.BREAK_ALL;
            case "keep-all":
                return WORD_BREAK.KEEP_ALL;
            default:
                return WORD_BREAK.NORMAL
            }
        }
    }), zIndex = {
        name: "z-index",
        initialValue: "auto",
        prefix: !1,
        type: 0,
        parse: function(A, e) {
            if (20 === e.type)
                return {
                    auto: !0,
                    order: 0
                };
            if (isNumberToken(e))
                return {
                    auto: !1,
                    order: e.number
                };
            throw new Error("Invalid z-index number parsed")
        }
    }, time = {
        name: "time",
        parse: function(A, e) {
            if (15 === e.type)
                switch (e.unit.toLowerCase()) {
                case "s":
                    return 1e3 * e.number;
                case "ms":
                    return e.number
                }
            throw new Error("Unsupported time type")
        }
    }, opacity = {
        name: "opacity",
        initialValue: "1",
        type: 0,
        prefix: !1,
        parse: function(A, e) {
            return isNumberToken(e) ? e.number : 1
        }
    }, textDecorationColor = {
        name: "text-decoration-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }, textDecorationLine = {
        name: "text-decoration-line",
        initialValue: "none",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.filter(isIdentToken).map((function(A) {
                switch (A.value) {
                case "underline":
                    return 1;
                case "overline":
                    return 2;
                case "line-through":
                    return 3;
                case "none":
                    return 4
                }
                return 0
            }
            )).filter((function(A) {
                return 0 !== A
            }
            ))
        }
    }, fontFamily = {
        name: "font-family",
        initialValue: "",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            var t = []
              , n = [];
            return e.forEach((function(A) {
                switch (A.type) {
                case 20:
                case 0:
                    t.push(A.value);
                    break;
                case 17:
                    t.push(A.number.toString());
                    break;
                case 4:
                    n.push(t.join(" ")),
                    t.length = 0
                }
            }
            )),
            t.length && n.push(t.join(" ")),
            n.map((function(A) {
                return -1 === A.indexOf(" ") ? A : "'" + A + "'"
            }
            ))
        }
    }, fontSize = {
        name: "font-size",
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length"
    }, fontWeight = {
        name: "font-weight",
        initialValue: "normal",
        type: 0,
        prefix: !1,
        parse: function(A, e) {
            return isNumberToken(e) ? e.number : isIdentToken(e) && "bold" === e.value ? 700 : 400
        }
    }, fontVariant = {
        name: "font-variant",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            return e.filter(isIdentToken).map((function(A) {
                return A.value
            }
            ))
        }
    }, fontStyle = {
        name: "font-style",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "oblique":
                return "oblique";
            case "italic":
                return "italic";
            default:
                return "normal"
            }
        }
    }, contains = function(A, e) {
        return 0 != (A & e)
    }, content = {
        name: "content",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            if (0 === e.length)
                return [];
            var t = e[0];
            return 20 === t.type && "none" === t.value ? [] : e
        }
    }, counterIncrement = {
        name: "counter-increment",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(A, e) {
            if (0 === e.length)
                return null;
            var t = e[0];
            if (20 === t.type && "none" === t.value)
                return null;
            for (var n = [], s = e.filter(nonWhiteSpace), i = 0; i < s.length; i++) {
                var r = s[i]
                  , o = s[i + 1];
                20 === r.type && (o = o && isNumberToken(o) ? o.number : 1,
                n.push({
                    counter: r.value,
                    increment: o
                }))
            }
            return n
        }
    }, counterReset = {
        name: "counter-reset",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(A, e) {
            if (0 === e.length)
                return [];
            for (var t = [], n = e.filter(nonWhiteSpace), s = 0; s < n.length; s++) {
                var i = n[s]
                  , r = n[s + 1];
                isIdentToken(i) && "none" !== i.value && (r = r && isNumberToken(r) ? r.number : 0,
                t.push({
                    counter: i.value,
                    reset: r
                }))
            }
            return t
        }
    }, duration = {
        name: "duration",
        initialValue: "0s",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.filter(isDimensionToken).map((function(e) {
                return time.parse(A, e)
            }
            ))
        }
    }, quotes = {
        name: "quotes",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(A, e) {
            if (0 === e.length)
                return null;
            var t = e[0];
            if (20 === t.type && "none" === t.value)
                return null;
            var n = []
              , s = e.filter(isStringToken);
            if (s.length % 2 != 0)
                return null;
            for (var i = 0; i < s.length; i += 2) {
                var r = s[i].value
                  , o = s[i + 1].value;
                n.push({
                    open: r,
                    close: o
                })
            }
            return n
        }
    }, getQuote = function(A, e, t) {
        return A && (e = A[Math.min(e, A.length - 1)]) ? t ? e.open : e.close : ""
    }, boxShadow = {
        name: "box-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            return 1 === e.length && isIdentWithValue(e[0], "none") ? [] : parseFunctionArgs(e).map((function(e) {
                for (var t = {
                    color: 255,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH,
                    spread: ZERO_LENGTH,
                    inset: !1
                }, n = 0, s = 0; s < e.length; s++) {
                    var i = e[s];
                    isIdentWithValue(i, "inset") ? t.inset = !0 : isLength(i) ? (0 === n ? t.offsetX = i : 1 === n ? t.offsetY = i : 2 === n ? t.blur = i : t.spread = i,
                    n++) : t.color = color$1.parse(A, i)
                }
                return t
            }
            ))
        }
    }, paintOrder = {
        name: "paint-order",
        initialValue: "normal",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            var t = [];
            return e.filter(isIdentToken).forEach((function(A) {
                switch (A.value) {
                case "stroke":
                    t.push(1);
                    break;
                case "fill":
                    t.push(0);
                    break;
                case "markers":
                    t.push(2)
                }
            }
            )),
            [0, 1, 2].forEach((function(A) {
                -1 === t.indexOf(A) && t.push(A)
            }
            )),
            t
        }
    }, webkitTextStrokeColor = {
        name: "-webkit-text-stroke-color",
        initialValue: "currentcolor",
        prefix: !1,
        type: 3,
        format: "color"
    }, webkitTextStrokeWidth = {
        name: "-webkit-text-stroke-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function(A, e) {
            return isDimensionToken(e) ? e.number : 0
        }
    }, CSSParsedDeclaration = function() {
        function A(A, e) {
            this.animationDuration = parse(A, duration, e.animationDuration),
            this.backgroundClip = parse(A, backgroundClip, e.backgroundClip),
            this.backgroundColor = parse(A, backgroundColor, e.backgroundColor),
            this.backgroundImage = parse(A, backgroundImage, e.backgroundImage),
            this.backgroundOrigin = parse(A, backgroundOrigin, e.backgroundOrigin),
            this.backgroundPosition = parse(A, backgroundPosition, e.backgroundPosition),
            this.backgroundRepeat = parse(A, backgroundRepeat, e.backgroundRepeat),
            this.backgroundSize = parse(A, backgroundSize, e.backgroundSize),
            this.borderTopColor = parse(A, borderTopColor, e.borderTopColor),
            this.borderRightColor = parse(A, borderRightColor, e.borderRightColor),
            this.borderBottomColor = parse(A, borderBottomColor, e.borderBottomColor),
            this.borderLeftColor = parse(A, borderLeftColor, e.borderLeftColor),
            this.borderTopLeftRadius = parse(A, borderTopLeftRadius, e.borderTopLeftRadius),
            this.borderTopRightRadius = parse(A, borderTopRightRadius, e.borderTopRightRadius),
            this.borderBottomRightRadius = parse(A, borderBottomRightRadius, e.borderBottomRightRadius),
            this.borderBottomLeftRadius = parse(A, borderBottomLeftRadius, e.borderBottomLeftRadius),
            this.borderTopStyle = parse(A, borderTopStyle, e.borderTopStyle),
            this.borderRightStyle = parse(A, borderRightStyle, e.borderRightStyle),
            this.borderBottomStyle = parse(A, borderBottomStyle, e.borderBottomStyle),
            this.borderLeftStyle = parse(A, borderLeftStyle, e.borderLeftStyle),
            this.borderTopWidth = parse(A, borderTopWidth, e.borderTopWidth),
            this.borderRightWidth = parse(A, borderRightWidth, e.borderRightWidth),
            this.borderBottomWidth = parse(A, borderBottomWidth, e.borderBottomWidth),
            this.borderLeftWidth = parse(A, borderLeftWidth, e.borderLeftWidth),
            this.boxShadow = parse(A, boxShadow, e.boxShadow),
            this.color = parse(A, color, e.color),
            this.direction = parse(A, direction, e.direction),
            this.display = parse(A, display, e.display),
            this.float = parse(A, float, e.cssFloat),
            this.fontFamily = parse(A, fontFamily, e.fontFamily),
            this.fontSize = parse(A, fontSize, e.fontSize),
            this.fontStyle = parse(A, fontStyle, e.fontStyle),
            this.fontVariant = parse(A, fontVariant, e.fontVariant),
            this.fontWeight = parse(A, fontWeight, e.fontWeight),
            this.letterSpacing = parse(A, letterSpacing, e.letterSpacing),
            this.lineBreak = parse(A, lineBreak, e.lineBreak),
            this.lineHeight = parse(A, lineHeight, e.lineHeight),
            this.listStyleImage = parse(A, listStyleImage, e.listStyleImage),
            this.listStylePosition = parse(A, listStylePosition, e.listStylePosition),
            this.listStyleType = parse(A, listStyleType, e.listStyleType),
            this.marginTop = parse(A, marginTop, e.marginTop),
            this.marginRight = parse(A, marginRight, e.marginRight),
            this.marginBottom = parse(A, marginBottom, e.marginBottom),
            this.marginLeft = parse(A, marginLeft, e.marginLeft),
            this.opacity = parse(A, opacity, e.opacity);
            var t = parse(A, overflow, e.overflow);
            this.overflowX = t[0],
            this.overflowY = t[1 < t.length ? 1 : 0],
            this.overflowWrap = parse(A, overflowWrap, e.overflowWrap),
            this.paddingTop = parse(A, paddingTop, e.paddingTop),
            this.paddingRight = parse(A, paddingRight, e.paddingRight),
            this.paddingBottom = parse(A, paddingBottom, e.paddingBottom),
            this.paddingLeft = parse(A, paddingLeft, e.paddingLeft),
            this.paintOrder = parse(A, paintOrder, e.paintOrder),
            this.position = parse(A, position, e.position),
            this.textAlign = parse(A, textAlign, e.textAlign),
            this.textDecorationColor = parse(A, textDecorationColor, null != (t = e.textDecorationColor) ? t : e.color),
            this.textDecorationLine = parse(A, textDecorationLine, null != (t = e.textDecorationLine) ? t : e.textDecoration),
            this.textShadow = parse(A, textShadow, e.textShadow),
            this.textTransform = parse(A, textTransform, e.textTransform),
            this.transform = parse(A, transform$1, e.transform),
            this.transformOrigin = parse(A, transformOrigin, e.transformOrigin),
            this.visibility = parse(A, visibility, e.visibility),
            this.webkitTextStrokeColor = parse(A, webkitTextStrokeColor, e.webkitTextStrokeColor),
            this.webkitTextStrokeWidth = parse(A, webkitTextStrokeWidth, e.webkitTextStrokeWidth),
            this.wordBreak = parse(A, wordBreak, e.wordBreak),
            this.zIndex = parse(A, zIndex, e.zIndex)
        }
        return A.prototype.isVisible = function() {
            return 0 < this.display && 0 < this.opacity && 0 === this.visibility
        }
        ,
        A.prototype.isTransparent = function() {
            return isTransparent(this.backgroundColor)
        }
        ,
        A.prototype.isTransformed = function() {
            return null !== this.transform
        }
        ,
        A.prototype.isPositioned = function() {
            return 0 !== this.position
        }
        ,
        A.prototype.isPositionedWithZIndex = function() {
            return this.isPositioned() && !this.zIndex.auto
        }
        ,
        A.prototype.isFloating = function() {
            return 0 !== this.float
        }
        ,
        A.prototype.isInlineLevel = function() {
            return contains(this.display, 4) || contains(this.display, 33554432) || contains(this.display, 268435456) || contains(this.display, 536870912) || contains(this.display, 67108864) || contains(this.display, 134217728)
        }
        ,
        A
    }(), CSSParsedPseudoDeclaration = function(A, e) {
        this.content = parse(A, content, e.content),
        this.quotes = parse(A, quotes, e.quotes)
    }, CSSParsedCounterDeclaration = function(A, e) {
        this.counterIncrement = parse(A, counterIncrement, e.counterIncrement),
        this.counterReset = parse(A, counterReset, e.counterReset)
    }, parse = function(A, e, t) {
        var n = new Tokenizer
          , s = (t = null != t ? t.toString() : e.initialValue,
        n.write(t),
        new Parser(n.read()));
        switch (e.type) {
        case 2:
            var i = s.parseComponentValue();
            return e.parse(A, isIdentToken(i) ? i.value : e.initialValue);
        case 0:
            return e.parse(A, s.parseComponentValue());
        case 1:
            return e.parse(A, s.parseComponentValues());
        case 4:
            return s.parseComponentValue();
        case 3:
            switch (e.format) {
            case "angle":
                return angle.parse(A, s.parseComponentValue());
            case "color":
                return color$1.parse(A, s.parseComponentValue());
            case "image":
                return image.parse(A, s.parseComponentValue());
            case "length":
                var r = s.parseComponentValue();
                return isLength(r) ? r : ZERO_LENGTH;
            case "length-percentage":
                return r = s.parseComponentValue(),
                isLengthPercentage(r) ? r : ZERO_LENGTH;
            case "time":
                return time.parse(A, s.parseComponentValue())
            }
        }
    }, elementDebuggerAttribute = "data-html2canvas-debug", getElementDebugType = function(A) {
        switch (A.getAttribute(elementDebuggerAttribute)) {
        case "all":
            return 1;
        case "clone":
            return 2;
        case "parse":
            return 3;
        case "render":
            return 4;
        default:
            return 0
        }
    }, isDebugging = function(A, e) {
        return 1 === (A = getElementDebugType(A)) || e === A
    }, ElementContainer = function(A, e) {
        this.context = A,
        this.textNodes = [],
        this.elements = [],
        this.flags = 0,
        isDebugging(e, 3),
        this.styles = new CSSParsedDeclaration(A,window.getComputedStyle(e, null)),
        isHTMLElementNode(e) && (this.styles.animationDuration.some((function(A) {
            return 0 < A
        }
        )) && (e.style.animationDuration = "0s"),
        null !== this.styles.transform && (e.style.transform = "none")),
        this.bounds = parseBounds(this.context, e),
        isDebugging(e, 4) && (this.flags |= 16)
    }, base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup$1 = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$1 = 0; i$1 < chars$1.length; i$1++)
        lookup$1[chars$1.charCodeAt(i$1)] = i$1;
    for (var decode = function(A) {
        for (var e, t, n, s, i = .75 * A.length, r = A.length, o = 0, a = (i = ("=" === A[A.length - 1] && (i--,
        "=" === A[A.length - 2] && i--),
        new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(i)),
        Array.isArray(i) ? i : new Uint8Array(i)), c = 0; c < r; c += 4)
            e = lookup$1[A.charCodeAt(c)],
            t = lookup$1[A.charCodeAt(c + 1)],
            n = lookup$1[A.charCodeAt(c + 2)],
            s = lookup$1[A.charCodeAt(c + 3)],
            a[o++] = e << 2 | t >> 4,
            a[o++] = (15 & t) << 4 | n >> 2,
            a[o++] = (3 & n) << 6 | 63 & s;
        return i
    }, polyUint16Array = function(A) {
        for (var e = A.length, t = [], n = 0; n < e; n += 2)
            t.push(A[n + 1] << 8 | A[n]);
        return t
    }, polyUint32Array = function(A) {
        for (var e = A.length, t = [], n = 0; n < e; n += 4)
            t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
        return t
    }, UTRIE2_SHIFT_2 = 5, UTRIE2_SHIFT_1 = 11, UTRIE2_INDEX_SHIFT = 2, UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2, UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2, UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2, UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1, UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2, UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH, UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH, UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32, UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH, UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1, UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2, UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1, slice16 = function(A, e, t) {
        return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
    }, slice32 = function(A, e, t) {
        return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
    }, createTrieFromBase64 = function(A, e) {
        A = decode(A);
        var t = Array.isArray(A) ? polyUint32Array(A) : new Uint32Array(A)
          , n = (A = Array.isArray(A) ? polyUint16Array(A) : new Uint16Array(A),
        slice16(A, 12, t[4] / 2));
        A = 2 === t[5] ? slice16(A, (24 + t[4]) / 2) : slice32(t, Math.ceil((24 + t[4]) / 4));
        return new Trie(t[0],t[1],t[2],t[3],n,A)
    }, Trie = function() {
        function A(A, e, t, n, s, i) {
            this.initialValue = A,
            this.errorValue = e,
            this.highStart = t,
            this.highValueIndex = n,
            this.index = s,
            this.data = i
        }
        return A.prototype.get = function(A) {
            var e;
            if (0 <= A) {
                if (A < 55296 || 56319 < A && A <= 65535)
                    return e = this.index[A >> UTRIE2_SHIFT_2],
                    this.data[e = (e << UTRIE2_INDEX_SHIFT) + (A & UTRIE2_DATA_MASK)];
                if (A <= 65535)
                    return e = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (A - 55296 >> UTRIE2_SHIFT_2)],
                    this.data[e = (e << UTRIE2_INDEX_SHIFT) + (A & UTRIE2_DATA_MASK)];
                if (A < this.highStart)
                    return e = this.index[e = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (A >> UTRIE2_SHIFT_1)],
                    e = this.index[e += A >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK],
                    this.data[e = (e << UTRIE2_INDEX_SHIFT) + (A & UTRIE2_DATA_MASK)];
                if (A <= 1114111)
                    return this.data[this.highValueIndex]
            }
            return this.errorValue
        }
        ,
        A
    }(), chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < chars.length; i++)
        lookup[chars.charCodeAt(i)] = i;
    var Prepend = 1, CR = 2, LF = 3, Control = 4, Extend = 5, SpacingMark = 7, L = 8, V = 9, T = 10, LV = 11, LVT = 12, ZWJ = 13, Extended_Pictographic = 14, RI = 15, toCodePoints = function(A) {
        for (var e = [], t = 0, n = A.length; t < n; ) {
            var s, i = A.charCodeAt(t++);
            55296 <= i && i <= 56319 && t < n ? 56320 == (64512 & (s = A.charCodeAt(t++))) ? e.push(((1023 & i) << 10) + (1023 & s) + 65536) : (e.push(i),
            t--) : e.push(i)
        }
        return e
    }, fromCodePoint = function() {
        for (var A = [], e = 0; e < arguments.length; e++)
            A[e] = arguments[e];
        if (String.fromCodePoint)
            return String.fromCodePoint.apply(String, A);
        var t = A.length;
        if (!t)
            return "";
        for (var n = [], s = -1, i = ""; ++s < t; ) {
            var r = A[s];
            r <= 65535 ? n.push(r) : (r -= 65536,
            n.push(55296 + (r >> 10), r % 1024 + 56320)),
            (s + 1 === t || 16384 < n.length) && (i += String.fromCharCode.apply(String, n),
            n.length = 0)
        }
        return i
    }, UnicodeTrie = createTrieFromBase64(base64), BREAK_NOT_ALLOWED = "×", BREAK_ALLOWED = "÷", codePointToClass = function(A) {
        return UnicodeTrie.get(A)
    }, _graphemeBreakAtIndex = function(A, e, t) {
        var n = t - 2
          , s = e[n]
          , i = e[t - 1];
        t = e[t];
        if (i === CR && t === LF)
            return BREAK_NOT_ALLOWED;
        if (i === CR || i === LF || i === Control)
            return BREAK_ALLOWED;
        if (t === CR || t === LF || t === Control)
            return BREAK_ALLOWED;
        if (i === L && -1 !== [L, V, LV, LVT].indexOf(t))
            return BREAK_NOT_ALLOWED;
        if (!(i !== LV && i !== V || t !== V && t !== T))
            return BREAK_NOT_ALLOWED;
        if ((i === LVT || i === T) && t === T)
            return BREAK_NOT_ALLOWED;
        if (t === ZWJ || t === Extend)
            return BREAK_NOT_ALLOWED;
        if (t === SpacingMark)
            return BREAK_NOT_ALLOWED;
        if (i === Prepend)
            return BREAK_NOT_ALLOWED;
        if (i === ZWJ && t === Extended_Pictographic) {
            for (; s === Extend; )
                s = e[--n];
            if (s === Extended_Pictographic)
                return BREAK_NOT_ALLOWED
        }
        if (i === RI && t === RI) {
            for (var r = 0; s === RI; )
                r++,
                s = e[--n];
            if (r % 2 == 0)
                return BREAK_NOT_ALLOWED
        }
        return BREAK_ALLOWED
    }, GraphemeBreaker = function(A) {
        var e = toCodePoints(A)
          , t = e.length
          , n = 0
          , s = 0
          , i = e.map(codePointToClass);
        return {
            next: function() {
                if (t <= n)
                    return {
                        done: !0,
                        value: null
                    };
                for (var A, r = BREAK_NOT_ALLOWED; n < t && (r = _graphemeBreakAtIndex(e, i, ++n)) === BREAK_NOT_ALLOWED; )
                    ;
                return r !== BREAK_NOT_ALLOWED || n === t ? (A = fromCodePoint.apply(null, e.slice(s, n)),
                s = n,
                {
                    value: A,
                    done: !1
                }) : {
                    done: !0,
                    value: null
                }
            }
        }
    }, splitGraphemes = function(A) {
        for (var e, t = GraphemeBreaker(A), n = []; !(e = t.next()).done; )
            e.value && n.push(e.value.slice());
        return n
    }, testRangeBounds = function(A) {
        if (A.createRange && (t = A.createRange()).getBoundingClientRect) {
            var e = A.createElement("boundtest")
              , t = (e.style.height = "123px",
            e.style.display = "block",
            A.body.appendChild(e),
            t.selectNode(e),
            t.getBoundingClientRect());
            t = Math.round(t.height);
            if (A.body.removeChild(e),
            123 === t)
                return !0
        }
        return !1
    }, testIOSLineBreak = function(A) {
        var e = A.createElement("boundtest")
          , t = (e.style.width = "50px",
        e.style.display = "block",
        e.style.fontSize = "12px",
        e.style.letterSpacing = "0px",
        e.style.wordSpacing = "0px",
        A.body.appendChild(e),
        A.createRange())
          , n = (e.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "",
        e.firstChild)
          , s = toCodePoints$1(n.data).map((function(A) {
            return fromCodePoint$1(A)
        }
        ))
          , i = 0
          , r = {};
        s = s.every((function(A, e) {
            t.setStart(n, i),
            t.setEnd(n, i + A.length);
            var s = t.getBoundingClientRect();
            i += A.length,
            A = s.x > r.x || s.y > r.y;
            return r = s,
            0 === e || A
        }
        ));
        return A.body.removeChild(e),
        s
    }, testCORS = function() {
        return void 0 !== (new Image).crossOrigin
    }, testResponseType = function() {
        return "string" == typeof (new XMLHttpRequest).responseType
    }, testSVG = function(A) {
        var e = new Image
          , t = (A = A.createElement("canvas")).getContext("2d");
        if (!t)
            return !1;
        e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        try {
            t.drawImage(e, 0, 0),
            A.toDataURL()
        } catch (A) {
            return !1
        }
        return !0
    }, isGreenPixel = function(A) {
        return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
    }, testForeignObject = function(A) {
        var e = A.createElement("canvas")
          , t = 100
          , n = (e.width = t,
        e.height = t,
        e.getContext("2d"));
        if (!n)
            return Promise.reject(!1);
        n.fillStyle = "rgb(0, 255, 0)",
        n.fillRect(0, 0, t, t);
        var s = new Image
          , i = e.toDataURL();
        s.src = i,
        e = createForeignObjectSVG(t, t, 0, 0, s);
        return n.fillStyle = "red",
        n.fillRect(0, 0, t, t),
        loadSerializedSVG$1(e).then((function(e) {
            n.drawImage(e, 0, 0);
            e = n.getImageData(0, 0, t, t).data;
            var s = (n.fillStyle = "red",
            n.fillRect(0, 0, t, t),
            A.createElement("div"));
            return s.style.backgroundImage = "url(" + i + ")",
            s.style.height = "100px",
            isGreenPixel(e) ? loadSerializedSVG$1(createForeignObjectSVG(t, t, 0, 0, s)) : Promise.reject(!1)
        }
        )).then((function(A) {
            return n.drawImage(A, 0, 0),
            isGreenPixel(n.getImageData(0, 0, t, t).data)
        }
        )).catch((function() {
            return !1
        }
        ))
    }, createForeignObjectSVG = function(A, e, t, n, s) {
        var i = "http://www.w3.org/2000/svg"
          , r = document.createElementNS(i, "svg");
        i = document.createElementNS(i, "foreignObject");
        return r.setAttributeNS(null, "width", A.toString()),
        r.setAttributeNS(null, "height", e.toString()),
        i.setAttributeNS(null, "width", "100%"),
        i.setAttributeNS(null, "height", "100%"),
        i.setAttributeNS(null, "x", t.toString()),
        i.setAttributeNS(null, "y", n.toString()),
        i.setAttributeNS(null, "externalResourcesRequired", "true"),
        r.appendChild(i),
        i.appendChild(s),
        r
    }, loadSerializedSVG$1 = function(A) {
        return new Promise((function(e, t) {
            var n = new Image;
            n.onload = function() {
                return e(n)
            }
            ,
            n.onerror = t,
            n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
        }
        ))
    }, FEATURES = {
        get SUPPORT_RANGE_BOUNDS() {
            var A = testRangeBounds(document);
            return Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", {
                value: A
            }),
            A
        },
        get SUPPORT_WORD_BREAKING() {
            var A = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            return Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", {
                value: A
            }),
            A
        },
        get SUPPORT_SVG_DRAWING() {
            var A = testSVG(document);
            return Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", {
                value: A
            }),
            A
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var A = "function" == typeof Array.from && "function" == typeof window.fetch ? testForeignObject(document) : Promise.resolve(!1);
            return Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                value: A
            }),
            A
        },
        get SUPPORT_CORS_IMAGES() {
            var A = testCORS();
            return Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", {
                value: A
            }),
            A
        },
        get SUPPORT_RESPONSE_TYPE() {
            var A = testResponseType();
            return Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", {
                value: A
            }),
            A
        },
        get SUPPORT_CORS_XHR() {
            var A = "withCredentials"in new XMLHttpRequest;
            return Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", {
                value: A
            }),
            A
        },
        get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            var A = !("undefined" == typeof Intl || !Intl.Segmenter);
            return Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
                value: A
            }),
            A
        }
    }, TextBounds = function(A, e) {
        this.text = A,
        this.bounds = e
    }, parseTextBounds = function(A, e, t, n) {
        e = breakText(e, t);
        var s = []
          , i = 0;
        return e.forEach((function(e) {
            var r, o, a;
            t.textDecorationLine.length || 0 < e.trim().length ? FEATURES.SUPPORT_RANGE_BOUNDS ? 1 < (r = createRange(n, i, e.length).getClientRects()).length ? (a = segmentGraphemes(e),
            o = 0,
            a.forEach((function(e) {
                s.push(new TextBounds(e,Bounds.fromDOMRectList(A, createRange(n, o + i, e.length).getClientRects()))),
                o += e.length
            }
            ))) : s.push(new TextBounds(e,Bounds.fromDOMRectList(A, r))) : (a = n.splitText(e.length),
            s.push(new TextBounds(e,getWrapperBounds(A, n))),
            n = a) : FEATURES.SUPPORT_RANGE_BOUNDS || (n = n.splitText(e.length)),
            i += e.length
        }
        )),
        s
    }, getWrapperBounds = function(A, e) {
        if (t = e.ownerDocument) {
            var t, n = ((t = t.createElement("html2canvaswrapper")).appendChild(e.cloneNode(!0)),
            e.parentNode);
            if (n)
                return n.replaceChild(t, e),
                e = parseBounds(A, t),
                t.firstChild && n.replaceChild(t.firstChild, t),
                e
        }
        return Bounds.EMPTY
    }, createRange = function(A, e, t) {
        var n = A.ownerDocument;
        if (!n)
            throw new Error("Node has no owner document");
        return (n = n.createRange()).setStart(A, e),
        n.setEnd(A, e + t),
        n
    }, segmentGraphemes = function(A) {
        var e;
        return FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0,{
            granularity: "grapheme"
        }),
        Array.from(e.segment(A)).map((function(A) {
            return A.segment
        }
        ))) : splitGraphemes(A)
    }, segmentWords = function(A, e) {
        var t;
        return FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (t = new Intl.Segmenter(void 0,{
            granularity: "word"
        }),
        Array.from(t.segment(A)).map((function(A) {
            return A.segment
        }
        ))) : breakWords(A, e)
    }, breakText = function(A, e) {
        return 0 !== e.letterSpacing ? segmentGraphemes(A) : segmentWords(A, e)
    }, wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241], breakWords = function(A, e) {
        for (var t, n = LineBreaker(A, {
            lineBreak: e.lineBreak,
            wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak
        }), s = []; !(t = n.next()).done; )
            !function() {
                var A, e;
                t.value && (A = t.value.slice(),
                A = toCodePoints$1(A),
                e = "",
                A.forEach((function(A) {
                    -1 === wordSeparators.indexOf(A) ? e += fromCodePoint$1(A) : (e.length && s.push(e),
                    s.push(fromCodePoint$1(A)),
                    e = "")
                }
                )),
                e.length && s.push(e))
            }();
        return s
    }, TextContainer = function(A, e, t) {
        this.text = transform(e.data, t.textTransform),
        this.textBounds = parseTextBounds(A, this.text, t, e)
    }, transform = function(A, e) {
        switch (e) {
        case 1:
            return A.toLowerCase();
        case 3:
            return A.replace(CAPITALIZE, capitalize);
        case 2:
            return A.toUpperCase();
        default:
            return A
        }
    }, CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g, capitalize = function(A, e, t) {
        return 0 < A.length ? e + t.toUpperCase() : A
    }, ImageElementContainer = function(A) {
        function e(e, t) {
            return (e = A.call(this, e, t) || this).src = t.currentSrc || t.src,
            e.intrinsicWidth = t.naturalWidth,
            e.intrinsicHeight = t.naturalHeight,
            e.context.cache.addImage(e.src),
            e
        }
        return __extends(e, A),
        e
    }(ElementContainer), CanvasElementContainer = function(A) {
        function e(e, t) {
            return (e = A.call(this, e, t) || this).canvas = t,
            e.intrinsicWidth = t.width,
            e.intrinsicHeight = t.height,
            e
        }
        return __extends(e, A),
        e
    }(ElementContainer), SVGElementContainer = function(A) {
        function e(e, t) {
            var n = A.call(this, e, t) || this
              , s = new XMLSerializer;
            e = parseBounds(e, t);
            return t.setAttribute("width", e.width + "px"),
            t.setAttribute("height", e.height + "px"),
            n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(t)),
            n.intrinsicWidth = t.width.baseVal.value,
            n.intrinsicHeight = t.height.baseVal.value,
            n.context.cache.addImage(n.svg),
            n
        }
        return __extends(e, A),
        e
    }(ElementContainer), LIElementContainer = function(A) {
        function e(e, t) {
            return (e = A.call(this, e, t) || this).value = t.value,
            e
        }
        return __extends(e, A),
        e
    }(ElementContainer), OLElementContainer = function(A) {
        function e(e, t) {
            return (e = A.call(this, e, t) || this).start = t.start,
            e.reversed = "boolean" == typeof t.reversed && !0 === t.reversed,
            e
        }
        return __extends(e, A),
        e
    }(ElementContainer), CHECKBOX_BORDER_RADIUS = [{
        type: 15,
        flags: 0,
        unit: "px",
        number: 3
    }], RADIO_BORDER_RADIUS = [{
        type: 16,
        flags: 0,
        number: 50
    }], reformatInputBounds = function(A) {
        return A.width > A.height ? new Bounds(A.left + (A.width - A.height) / 2,A.top,A.height,A.height) : A.width < A.height ? new Bounds(A.left,A.top + (A.height - A.width) / 2,A.width,A.width) : A
    }, getInputValue = function(A) {
        var e = A.type === PASSWORD ? new Array(A.value.length + 1).join("•") : A.value;
        return 0 === e.length ? A.placeholder || "" : e
    }, CHECKBOX = "checkbox", RADIO = "radio", PASSWORD = "password", INPUT_COLOR = 707406591, InputElementContainer = function(A) {
        function e(e, t) {
            var n = A.call(this, e, t) || this;
            switch (n.type = t.type.toLowerCase(),
            n.checked = t.checked,
            n.value = getInputValue(t),
            n.type !== CHECKBOX && n.type !== RADIO || (n.styles.backgroundColor = 3739148031,
            n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575,
            n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1,
            n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1,
            n.styles.backgroundClip = [0],
            n.styles.backgroundOrigin = [0],
            n.bounds = reformatInputBounds(n.bounds)),
            n.type) {
            case CHECKBOX:
                n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
                break;
            case RADIO:
                n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS
            }
            return n
        }
        return __extends(e, A),
        e
    }(ElementContainer), SelectElementContainer = function(A) {
        function e(e, t) {
            return e = A.call(this, e, t) || this,
            t = t.options[t.selectedIndex || 0],
            e.value = t && t.text || "",
            e
        }
        return __extends(e, A),
        e
    }(ElementContainer), TextareaElementContainer = function(A) {
        function e(e, t) {
            return (e = A.call(this, e, t) || this).value = t.value,
            e
        }
        return __extends(e, A),
        e
    }(ElementContainer), IFrameElementContainer = function(A) {
        function e(e, t) {
            var n, s, i = A.call(this, e, t) || this;
            i.src = t.src,
            i.width = parseInt(t.width, 10) || 0,
            i.height = parseInt(t.height, 10) || 0,
            i.backgroundColor = i.styles.backgroundColor;
            try {
                t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement && (i.tree = parseTree(e, t.contentWindow.document.documentElement),
                n = t.contentWindow.document.documentElement ? parseColor(e, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT,
                s = t.contentWindow.document.body ? parseColor(e, getComputedStyle(t.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT,
                i.backgroundColor = isTransparent(n) ? isTransparent(s) ? i.styles.backgroundColor : s : n)
            } catch (e) {}
            return i
        }
        return __extends(e, A),
        e
    }(ElementContainer), LIST_OWNERS = ["OL", "UL", "MENU"], parseNodeTree = function(A, e, t, n) {
        for (var s = e.firstChild; s; s = r) {
            var i, r = s.nextSibling;
            isTextNode(s) && 0 < s.data.trim().length ? t.textNodes.push(new TextContainer(A,s,t.styles)) : isElementNode(s) && (isSlotElement(s) && s.assignedNodes ? s.assignedNodes().forEach((function(e) {
                return parseNodeTree(A, e, t, n)
            }
            )) : (i = createContainer(A, s)).styles.isVisible() && (createsRealStackingContext(s, i, n) ? i.flags |= 4 : createsStackingContext(i.styles) && (i.flags |= 2),
            -1 !== LIST_OWNERS.indexOf(s.tagName) && (i.flags |= 8),
            t.elements.push(i),
            s.slot,
            s.shadowRoot ? parseNodeTree(A, s.shadowRoot, i, n) : isTextareaElement(s) || isSVGElement(s) || isSelectElement(s) || parseNodeTree(A, s, i, n)))
        }
    }, createContainer = function(A, e) {
        return new (isImageElement(e) ? ImageElementContainer : isCanvasElement(e) ? CanvasElementContainer : isSVGElement(e) ? SVGElementContainer : isLIElement(e) ? LIElementContainer : isOLElement(e) ? OLElementContainer : isInputElement(e) ? InputElementContainer : isSelectElement(e) ? SelectElementContainer : isTextareaElement(e) ? TextareaElementContainer : isIFrameElement(e) ? IFrameElementContainer : ElementContainer)(A,e)
    }, parseTree = function(A, e) {
        var t = createContainer(A, e);
        return t.flags |= 4,
        parseNodeTree(A, e, t, t),
        t
    }, createsRealStackingContext = function(A, e, t) {
        return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || isBodyElement(A) && t.styles.isTransparent()
    }, createsStackingContext = function(A) {
        return A.isPositioned() || A.isFloating()
    }, isTextNode = function(A) {
        return A.nodeType === Node.TEXT_NODE
    }, isElementNode = function(A) {
        return A.nodeType === Node.ELEMENT_NODE
    }, isHTMLElementNode = function(A) {
        return isElementNode(A) && void 0 !== A.style && !isSVGElementNode(A)
    }, isSVGElementNode = function(A) {
        return "object" == typeof A.className
    }, isLIElement = function(A) {
        return "LI" === A.tagName
    }, isOLElement = function(A) {
        return "OL" === A.tagName
    }, isInputElement = function(A) {
        return "INPUT" === A.tagName
    }, isHTMLElement = function(A) {
        return "HTML" === A.tagName
    }, isSVGElement = function(A) {
        return "svg" === A.tagName
    }, isBodyElement = function(A) {
        return "BODY" === A.tagName
    }, isCanvasElement = function(A) {
        return "CANVAS" === A.tagName
    }, isVideoElement = function(A) {
        return "VIDEO" === A.tagName
    }, isImageElement = function(A) {
        return "IMG" === A.tagName
    }, isIFrameElement = function(A) {
        return "IFRAME" === A.tagName
    }, isStyleElement = function(A) {
        return "STYLE" === A.tagName
    }, isScriptElement = function(A) {
        return "SCRIPT" === A.tagName
    }, isTextareaElement = function(A) {
        return "TEXTAREA" === A.tagName
    }, isSelectElement = function(A) {
        return "SELECT" === A.tagName
    }, isSlotElement = function(A) {
        return "SLOT" === A.tagName
    }, isCustomElement = function(A) {
        return 0 < A.tagName.indexOf("-")
    }, CounterState = function() {
        function A() {
            this.counters = {}
        }
        return A.prototype.getCounterValue = function(A) {
            return (A = this.counters[A]) && A.length ? A[A.length - 1] : 1
        }
        ,
        A.prototype.getCounterValues = function(A) {
            return (A = this.counters[A]) || []
        }
        ,
        A.prototype.pop = function(A) {
            var e = this;
            A.forEach((function(A) {
                return e.counters[A].pop()
            }
            ))
        }
        ,
        A.prototype.parse = function(A) {
            var e = this
              , t = A.counterIncrement
              , n = (A = A.counterReset,
            !0)
              , s = (null !== t && t.forEach((function(A) {
                var t = e.counters[A.counter];
                t && 0 !== A.increment && (n = !1,
                t.length || t.push(1),
                t[Math.max(0, t.length - 1)] += A.increment)
            }
            )),
            []);
            return n && A.forEach((function(A) {
                var t = e.counters[A.counter];
                s.push(A.counter),
                (t = t || (e.counters[A.counter] = [])).push(A.reset)
            }
            )),
            s
        }
        ,
        A
    }(), ROMAN_UPPER = {
        integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    }, ARMENIAN = {
        integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
    }, HEBREW = {
        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
    }, GEORGIAN = {
        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
    }, createAdditiveCounter = function(A, e, t, n, s, i) {
        return A < e || t < A ? createCounterText(A, s, 0 < i.length) : n.integers.reduce((function(e, t, s) {
            for (; t <= A; )
                A -= t,
                e += n.values[s];
            return e
        }
        ), "") + i
    }, createCounterStyleWithSymbolResolver = function(A, e, t, n) {
        for (var s = ""; t || A--,
        s = n(A) + s,
        e <= (A /= e) * e; )
            ;
        return s
    }, createCounterStyleFromRange = function(A, e, t, n, s) {
        var i = t - e + 1;
        return (A < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(A), i, n, (function(A) {
            return fromCodePoint$1(Math.floor(A % i) + e)
        }
        )) + s)
    }, createCounterStyleFromSymbols = function(A, e, t) {
        void 0 === t && (t = ". ");
        var n = e.length;
        return createCounterStyleWithSymbolResolver(Math.abs(A), n, !1, (function(A) {
            return e[Math.floor(A % n)]
        }
        )) + t
    }, CJK_ZEROS = 1, CJK_TEN_COEFFICIENTS = 2, CJK_TEN_HIGH_COEFFICIENTS = 4, CJK_HUNDRED_COEFFICIENTS = 8, createCJKCounter = function(A, e, t, n, s, i) {
        if (A < -9999 || 9999 < A)
            return createCounterText(A, 4, 0 < s.length);
        var r = Math.abs(A)
          , o = s;
        if (0 === r)
            return e[0] + o;
        for (var a = 0; 0 < r && a <= 4; a++) {
            var c = r % 10;
            0 == c && contains(i, CJK_ZEROS) && "" !== o ? o = e[c] + o : 1 < c || 1 == c && 0 === a || 1 == c && 1 === a && contains(i, CJK_TEN_COEFFICIENTS) || 1 == c && 1 === a && contains(i, CJK_TEN_HIGH_COEFFICIENTS) && 100 < A || 1 == c && 1 < a && contains(i, CJK_HUNDRED_COEFFICIENTS) ? o = e[c] + (0 < a ? t[a - 1] : "") + o : 1 == c && 0 < a && (o = t[a - 1] + o),
            r = Math.floor(r / 10)
        }
        return (A < 0 ? n : "") + o
    }, CHINESE_INFORMAL_MULTIPLIERS = "十百千萬", CHINESE_FORMAL_MULTIPLIERS = "拾佰仟萬", JAPANESE_NEGATIVE = "マイナス", KOREAN_NEGATIVE = "마이너스", createCounterText = function(A, e, t) {
        var n = t ? ". " : ""
          , s = t ? "、" : ""
          , i = t ? ", " : ""
          , r = t ? " " : "";
        switch (e) {
        case 0:
            return "•" + r;
        case 1:
            return "◦" + r;
        case 2:
            return "◾" + r;
        case 5:
            var o = createCounterStyleFromRange(A, 48, 57, !0, n);
            return o.length < 4 ? "0" + o : o;
        case 4:
            return createCounterStyleFromSymbols(A, "〇一二三四五六七八九", s);
        case 6:
            return createAdditiveCounter(A, 1, 3999, ROMAN_UPPER, 3, n).toLowerCase();
        case 7:
            return createAdditiveCounter(A, 1, 3999, ROMAN_UPPER, 3, n);
        case 8:
            return createCounterStyleFromRange(A, 945, 969, !1, n);
        case 9:
            return createCounterStyleFromRange(A, 97, 122, !1, n);
        case 10:
            return createCounterStyleFromRange(A, 65, 90, !1, n);
        case 11:
            return createCounterStyleFromRange(A, 1632, 1641, !0, n);
        case 12:
        case 49:
            return createAdditiveCounter(A, 1, 9999, ARMENIAN, 3, n);
        case 35:
            return createAdditiveCounter(A, 1, 9999, ARMENIAN, 3, n).toLowerCase();
        case 13:
            return createCounterStyleFromRange(A, 2534, 2543, !0, n);
        case 14:
        case 30:
            return createCounterStyleFromRange(A, 6112, 6121, !0, n);
        case 15:
            return createCounterStyleFromSymbols(A, "子丑寅卯辰巳午未申酉戌亥", s);
        case 16:
            return createCounterStyleFromSymbols(A, "甲乙丙丁戊己庚辛壬癸", s);
        case 17:
        case 48:
            return createCJKCounter(A, "零一二三四五六七八九", CHINESE_INFORMAL_MULTIPLIERS, "負", s, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case 47:
            return createCJKCounter(A, "零壹貳參肆伍陸柒捌玖", CHINESE_FORMAL_MULTIPLIERS, "負", s, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case 42:
            return createCJKCounter(A, "零一二三四五六七八九", CHINESE_INFORMAL_MULTIPLIERS, "负", s, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case 41:
            return createCJKCounter(A, "零壹贰叁肆伍陆柒捌玖", CHINESE_FORMAL_MULTIPLIERS, "负", s, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case 26:
            return createCJKCounter(A, "〇一二三四五六七八九", "十百千万", JAPANESE_NEGATIVE, s, 0);
        case 25:
            return createCJKCounter(A, "零壱弐参四伍六七八九", "拾百千万", JAPANESE_NEGATIVE, s, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case 31:
            return createCJKCounter(A, "영일이삼사오육칠팔구", "십백천만", KOREAN_NEGATIVE, i, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case 33:
            return createCJKCounter(A, "零一二三四五六七八九", "十百千萬", KOREAN_NEGATIVE, i, 0);
        case 32:
            return createCJKCounter(A, "零壹貳參四五六七八九", "拾百千", KOREAN_NEGATIVE, i, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case 18:
            return createCounterStyleFromRange(A, 2406, 2415, !0, n);
        case 20:
            return createAdditiveCounter(A, 1, 19999, GEORGIAN, 3, n);
        case 21:
            return createCounterStyleFromRange(A, 2790, 2799, !0, n);
        case 22:
            return createCounterStyleFromRange(A, 2662, 2671, !0, n);
        case 22:
            return createAdditiveCounter(A, 1, 10999, HEBREW, 3, n);
        case 23:
            return createCounterStyleFromSymbols(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
        case 24:
            return createCounterStyleFromSymbols(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
        case 27:
            return createCounterStyleFromRange(A, 3302, 3311, !0, n);
        case 28:
            return createCounterStyleFromSymbols(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", s);
        case 29:
            return createCounterStyleFromSymbols(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", s);
        case 34:
            return createCounterStyleFromRange(A, 3792, 3801, !0, n);
        case 37:
            return createCounterStyleFromRange(A, 6160, 6169, !0, n);
        case 38:
            return createCounterStyleFromRange(A, 4160, 4169, !0, n);
        case 39:
            return createCounterStyleFromRange(A, 2918, 2927, !0, n);
        case 40:
            return createCounterStyleFromRange(A, 1776, 1785, !0, n);
        case 43:
            return createCounterStyleFromRange(A, 3046, 3055, !0, n);
        case 44:
            return createCounterStyleFromRange(A, 3174, 3183, !0, n);
        case 45:
            return createCounterStyleFromRange(A, 3664, 3673, !0, n);
        case 46:
            return createCounterStyleFromRange(A, 3872, 3881, !0, n);
        default:
            return createCounterStyleFromRange(A, 48, 57, !0, n)
        }
    }, IGNORE_ATTRIBUTE = "data-html2canvas-ignore", DocumentCloner = function() {
        function A(A, e, t) {
            if (this.context = A,
            this.options = t,
            this.scrolledElements = [],
            this.referenceElement = e,
            this.counters = new CounterState,
            this.quoteDepth = 0,
            !e.ownerDocument)
                throw new Error("Cloned element does not have an owner document");
            this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1)
        }
        return A.prototype.toIFrame = function(A, e) {
            var t = this
              , n = createIFrameContainer(A, e);
            if (!n.contentWindow)
                return Promise.reject("Unable to find iframe window");
            var s = A.defaultView.pageXOffset
              , i = (A = A.defaultView.pageYOffset,
            n.contentWindow)
              , r = i.document
              , o = iframeLoader(n).then((function() {
                return __awaiter(t, void 0, void 0, (function() {
                    var A, t;
                    return __generator(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return this.scrolledElements.forEach(restoreNodeScroll),
                            i && (i.scrollTo(e.left, e.top),
                            !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === e.top && i.scrollX === e.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                            this.context.windowBounds = this.context.windowBounds.add(i.scrollX - e.left, i.scrollY - e.top, 0, 0))),
                            A = this.options.onclone,
                            void 0 === (t = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : r.fonts && r.fonts.ready ? [4, r.fonts.ready] : [3, 2];
                        case 1:
                            s.sent(),
                            s.label = 2;
                        case 2:
                            return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, imagesReady(r)] : [3, 4];
                        case 3:
                            s.sent(),
                            s.label = 4;
                        case 4:
                            return "function" == typeof A ? [2, Promise.resolve().then((function() {
                                return A(r, t)
                            }
                            )).then((function() {
                                return n
                            }
                            ))] : [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ));
            return r.open(),
            r.write(serializeDoctype(document.doctype) + "<html></html>"),
            restoreOwnerScroll(this.referenceElement.ownerDocument, s, A),
            r.replaceChild(r.adoptNode(this.documentElement), r.documentElement),
            r.close(),
            o
        }
        ,
        A.prototype.createElementClone = function(A) {
            if (isDebugging(A, 2),
            isCanvasElement(A))
                return this.createCanvasClone(A);
            if (isVideoElement(A))
                return this.createVideoClone(A);
            if (isStyleElement(A))
                return this.createStyleClone(A);
            var e = A.cloneNode(!1);
            return isImageElement(e) && (isImageElement(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc,
            e.srcset = ""),
            "lazy" === e.loading && (e.loading = "eager")),
            isCustomElement(e) ? this.createCustomElementClone(e) : e
        }
        ,
        A.prototype.createCustomElementClone = function(A) {
            var e = document.createElement("html2canvascustomelement");
            return copyCSSStyles(A.style, e),
            e
        }
        ,
        A.prototype.createStyleClone = function(A) {
            try {
                var e, t, n = A.sheet;
                if (n && n.cssRules)
                    return e = [].slice.call(n.cssRules, 0).reduce((function(A, e) {
                        return e && "string" == typeof e.cssText ? A + e.cssText : A
                    }
                    ), ""),
                    (t = A.cloneNode(!1)).textContent = e,
                    t
            } catch (A) {
                if (this.context.logger.error("Unable to access cssRules property", A),
                "SecurityError" !== A.name)
                    throw A
            }
            return A.cloneNode(!1)
        }
        ,
        A.prototype.createCanvasClone = function(A) {
            var e;
            if (this.options.inlineImages && A.ownerDocument) {
                var t = A.ownerDocument.createElement("img");
                try {
                    return t.src = A.toDataURL(),
                    t
                } catch (e) {
                    this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
                }
            }
            t = A.cloneNode(!1);
            try {
                t.width = A.width,
                t.height = A.height;
                var n, s, i = A.getContext("2d"), r = t.getContext("2d");
                return r && (!this.options.allowTaint && i ? r.putImageData(i.getImageData(0, 0, A.width, A.height), 0, 0) : ((n = null != (e = A.getContext("webgl2")) ? e : A.getContext("webgl")) && !1 === (null == (s = n.getContextAttributes()) ? void 0 : s.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A),
                r.drawImage(A, 0, 0))),
                t
            } catch (e) {
                this.context.logger.info("Unable to clone canvas as it is tainted", A)
            }
            return t
        }
        ,
        A.prototype.createVideoClone = function(A) {
            var e = A.ownerDocument.createElement("canvas")
              , t = (e.width = A.offsetWidth,
            e.height = A.offsetHeight,
            e.getContext("2d"));
            try {
                return t && (t.drawImage(A, 0, 0, e.width, e.height),
                this.options.allowTaint || t.getImageData(0, 0, e.width, e.height)),
                e
            } catch (e) {
                this.context.logger.info("Unable to clone video as it is tainted", A)
            }
            return (t = A.ownerDocument.createElement("canvas")).width = A.offsetWidth,
            t.height = A.offsetHeight,
            t
        }
        ,
        A.prototype.appendChildNode = function(A, e, t) {
            isElementNode(e) && (isScriptElement(e) || e.hasAttribute(IGNORE_ATTRIBUTE) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(e)) || this.options.copyStyles && isElementNode(e) && isStyleElement(e) || A.appendChild(this.cloneNode(e, t))
        }
        ,
        A.prototype.cloneChildNodes = function(A, e, t) {
            for (var n, s = this, i = (A.shadowRoot || A).firstChild; i; i = i.nextSibling)
                isElementNode(i) && isSlotElement(i) && "function" == typeof i.assignedNodes ? (n = i.assignedNodes()).length && n.forEach((function(A) {
                    return s.appendChildNode(e, A, t)
                }
                )) : this.appendChildNode(e, i, t)
        }
        ,
        A.prototype.cloneNode = function(A, e) {
            if (isTextNode(A))
                return document.createTextNode(A.data);
            if (!A.ownerDocument)
                return A.cloneNode(!1);
            var t, n, s, i, r = A.ownerDocument.defaultView;
            return r && isElementNode(A) && (isHTMLElementNode(A) || isSVGElementNode(A)) ? ((t = this.createElementClone(A)).style.transitionProperty = "none",
            n = r.getComputedStyle(A),
            i = r.getComputedStyle(A, ":before"),
            r = r.getComputedStyle(A, ":after"),
            this.referenceElement === A && isHTMLElementNode(t) && (this.clonedReferenceElement = t),
            isBodyElement(t) && createPseudoHideStyles(t),
            s = this.counters.parse(new CSSParsedCounterDeclaration(this.context,n)),
            i = this.resolvePseudoContent(A, t, i, PseudoElementType.BEFORE),
            isCustomElement(A) && (e = !0),
            isVideoElement(A) || this.cloneChildNodes(A, t, e),
            i && t.insertBefore(i, t.firstChild),
            (i = this.resolvePseudoContent(A, t, r, PseudoElementType.AFTER)) && t.appendChild(i),
            this.counters.pop(s),
            (n && (this.options.copyStyles || isSVGElementNode(A)) && !isIFrameElement(A) || e) && copyCSSStyles(n, t),
            0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([t, A.scrollLeft, A.scrollTop]),
            (isTextareaElement(A) || isSelectElement(A)) && (isTextareaElement(t) || isSelectElement(t)) && (t.value = A.value),
            t) : A.cloneNode(!1)
        }
        ,
        A.prototype.resolvePseudoContent = function(A, e, t, n) {
            var s = this;
            if (t) {
                var i, r, o = t.content, a = e.ownerDocument;
                if (a && o && "none" !== o && "-moz-alt-content" !== o && "none" !== t.display)
                    return this.counters.parse(new CSSParsedCounterDeclaration(this.context,t)),
                    i = new CSSParsedPseudoDeclaration(this.context,t),
                    r = a.createElement("html2canvaspseudoelement"),
                    copyCSSStyles(t, r),
                    i.content.forEach((function(e) {
                        if (0 === e.type)
                            r.appendChild(a.createTextNode(e.value));
                        else if (22 === e.type) {
                            var t = a.createElement("img");
                            t.src = e.value,
                            t.style.opacity = "1",
                            r.appendChild(t)
                        } else if (18 === e.type) {
                            var n, o, c, l;
                            "attr" === e.name ? (t = e.values.filter(isIdentToken)).length && r.appendChild(a.createTextNode(A.getAttribute(t[0].value) || "")) : "counter" === e.name ? (c = (t = e.values.filter(nonFunctionArgSeparator))[0],
                            l = t[1],
                            c && isIdentToken(c) && (t = s.counters.getCounterValue(c.value),
                            n = l && isIdentToken(l) ? listStyleType.parse(s.context, l.value) : 3,
                            r.appendChild(a.createTextNode(createCounterText(t, n, !1))))) : "counters" === e.name && (c = (t = e.values.filter(nonFunctionArgSeparator))[0],
                            n = t[1],
                            l = t[2],
                            c && isIdentToken(c) && (t = s.counters.getCounterValues(c.value),
                            o = l && isIdentToken(l) ? listStyleType.parse(s.context, l.value) : 3,
                            c = n && 0 === n.type ? n.value : "",
                            l = t.map((function(A) {
                                return createCounterText(A, o, !1)
                            }
                            )).join(c),
                            r.appendChild(a.createTextNode(l))))
                        } else if (20 === e.type)
                            switch (e.value) {
                            case "open-quote":
                                r.appendChild(a.createTextNode(getQuote(i.quotes, s.quoteDepth++, !0)));
                                break;
                            case "close-quote":
                                r.appendChild(a.createTextNode(getQuote(i.quotes, --s.quoteDepth, !1)));
                                break;
                            default:
                                r.appendChild(a.createTextNode(e.value))
                            }
                    }
                    )),
                    r.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER,
                    o = n === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER,
                    isSVGElementNode(e) ? e.className.baseValue += o : e.className += o,
                    r
            }
        }
        ,
        A.destroy = function(A) {
            return !!A.parentNode && (A.parentNode.removeChild(A),
            !0)
        }
        ,
        A
    }(), PseudoElementType, createIFrameContainer = (function(A) {
        A[A.BEFORE = 0] = "BEFORE",
        A[A.AFTER = 1] = "AFTER"
    }(PseudoElementType = PseudoElementType || {}),
    function(A, e) {
        var t = A.createElement("iframe");
        return t.className = "html2canvas-container",
        t.style.visibility = "hidden",
        t.style.position = "fixed",
        t.style.left = "-10000px",
        t.style.top = "0px",
        t.style.border = "0",
        t.width = e.width.toString(),
        t.height = e.height.toString(),
        t.scrolling = "no",
        t.setAttribute(IGNORE_ATTRIBUTE, "true"),
        A.body.appendChild(t),
        t
    }
    ), imageReady = function(A) {
        return new Promise((function(e) {
            !A.complete && A.src ? (A.onload = e,
            A.onerror = e) : e()
        }
        ))
    }, imagesReady = function(A) {
        return Promise.all([].slice.call(A.images, 0).map(imageReady))
    }, iframeLoader = function(A) {
        return new Promise((function(e, t) {
            var n = A.contentWindow;
            if (!n)
                return t("No window assigned for iframe");
            var s = n.document;
            n.onload = A.onload = function() {
                n.onload = A.onload = null;
                var t = setInterval((function() {
                    0 < s.body.childNodes.length && "complete" === s.readyState && (clearInterval(t),
                    e(A))
                }
                ), 50)
            }
        }
        ))
    }, ignoredStyleProperties = ["all", "d", "content"], copyCSSStyles = function(A, e) {
        for (var t = A.length - 1; 0 <= t; t--) {
            var n = A.item(t);
            -1 === ignoredStyleProperties.indexOf(n) && e.style.setProperty(n, A.getPropertyValue(n))
        }
        return e
    }, serializeDoctype = function(A) {
        var e = "";
        return A && (e += "<!DOCTYPE ",
        A.name && (e += A.name),
        A.internalSubset && (e += A.internalSubset),
        A.publicId && (e += '"' + A.publicId + '"'),
        A.systemId && (e += '"' + A.systemId + '"'),
        e += ">"),
        e
    }, restoreOwnerScroll = function(A, e, t) {
        A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
    }, restoreNodeScroll = function(A) {
        var e = A[0]
          , t = A[1];
        A = A[2];
        e.scrollLeft = t,
        e.scrollTop = A
    }, PSEUDO_BEFORE = ":before", PSEUDO_AFTER = ":after", PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}', createPseudoHideStyles = function(A) {
        createStyles(A, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE)
    }, createStyles = function(A, e) {
        var t = A.ownerDocument;
        t && ((t = t.createElement("style")).textContent = e,
        A.appendChild(t))
    }, CacheStorage = function() {
        function A() {}
        return A.getOrigin = function(e) {
            var t = A._link;
            return t ? (t.href = e,
            t.href = t.href,
            t.protocol + t.hostname + t.port) : "about:blank"
        }
        ,
        A.isSameOrigin = function(e) {
            return A.getOrigin(e) === A._origin
        }
        ,
        A.setContext = function(e) {
            A._link = e.document.createElement("a"),
            A._origin = A.getOrigin(e.location.href)
        }
        ,
        A._origin = "about:blank",
        A
    }(), Cache = function() {
        function A(A, e) {
            this.context = A,
            this._options = e,
            this._cache = {}
        }
        return A.prototype.addImage = function(A) {
            var e = Promise.resolve();
            return this.has(A) || (isBlobImage(A) || isRenderable(A)) && (this._cache[A] = this.loadImage(A)).catch((function() {}
            )),
            e
        }
        ,
        A.prototype.match = function(A) {
            return this._cache[A]
        }
        ,
        A.prototype.loadImage = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n, s, i = this;
                return __generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return e = CacheStorage.isSameOrigin(A),
                        t = !isInlineImage(A) && !0 === this._options.useCORS && FEATURES.SUPPORT_CORS_IMAGES && !e,
                        n = !isInlineImage(A) && !e && !isBlobImage(A) && "string" == typeof this._options.proxy && FEATURES.SUPPORT_CORS_XHR && !t,
                        e || !1 !== this._options.allowTaint || isInlineImage(A) || isBlobImage(A) || n || t ? (s = A,
                        n ? [4, this.proxy(s)] : [3, 2]) : [2];
                    case 1:
                        s = r.sent(),
                        r.label = 2;
                    case 2:
                        return this.context.logger.debug("Added image " + A.substring(0, 256)),
                        [4, new Promise((function(A, e) {
                            var n = new Image;
                            n.onload = function() {
                                return A(n)
                            }
                            ,
                            n.onerror = e,
                            (isInlineBase64Image(s) || t) && (n.crossOrigin = "anonymous"),
                            n.src = s,
                            !0 === n.complete && setTimeout((function() {
                                return A(n)
                            }
                            ), 500),
                            0 < i._options.imageTimeout && setTimeout((function() {
                                return e("Timed out (" + i._options.imageTimeout + "ms) loading image")
                            }
                            ), i._options.imageTimeout)
                        }
                        ))];
                    case 3:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        A.prototype.has = function(A) {
            return void 0 !== this._cache[A]
        }
        ,
        A.prototype.keys = function() {
            return Promise.resolve(Object.keys(this._cache))
        }
        ,
        A.prototype.proxy = function(A) {
            var e = this
              , t = this._options.proxy;
            if (!t)
                throw new Error("No proxy defined");
            var n = A.substring(0, 256);
            return new Promise((function(s, i) {
                var r, o = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text", a = new XMLHttpRequest, c = (a.onload = function() {
                    var A;
                    200 === a.status ? "text" == o ? s(a.response) : ((A = new FileReader).addEventListener("load", (function() {
                        return s(A.result)
                    }
                    ), !1),
                    A.addEventListener("error", (function(A) {
                        return i(A)
                    }
                    ), !1),
                    A.readAsDataURL(a.response)) : i("Failed to proxy resource " + n + " with status code " + a.status)
                }
                ,
                a.onerror = i,
                -1 < t.indexOf("?") ? "&" : "?");
                a.open("GET", t + c + "url=" + encodeURIComponent(A) + "&responseType=" + o),
                "text" != o && a instanceof XMLHttpRequest && (a.responseType = o),
                e._options.imageTimeout && (r = e._options.imageTimeout,
                a.timeout = r,
                a.ontimeout = function() {
                    return i("Timed out (" + r + "ms) proxying " + n)
                }
                ),
                a.send()
            }
            ))
        }
        ,
        A
    }(), INLINE_SVG = /^data:image\/svg\+xml/i, INLINE_BASE64 = /^data:image\/.*;base64,/i, INLINE_IMG = /^data:image\/.*/i, isRenderable = function(A) {
        return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(A)
    }, isInlineImage = function(A) {
        return INLINE_IMG.test(A)
    }, isInlineBase64Image = function(A) {
        return INLINE_BASE64.test(A)
    }, isBlobImage = function(A) {
        return "blob" === A.substr(0, 4)
    }, isSVG = function(A) {
        return "svg" === A.substr(-3).toLowerCase() || INLINE_SVG.test(A)
    }, Vector = function() {
        function A(A, e) {
            this.type = 0,
            this.x = A,
            this.y = e
        }
        return A.prototype.add = function(e, t) {
            return new A(this.x + e,this.y + t)
        }
        ,
        A
    }(), lerp = function(A, e, t) {
        return new Vector(A.x + (e.x - A.x) * t,A.y + (e.y - A.y) * t)
    }, BezierCurve = function() {
        function A(A, e, t, n) {
            this.type = 1,
            this.start = A,
            this.startControl = e,
            this.endControl = t,
            this.end = n
        }
        return A.prototype.subdivide = function(e, t) {
            var n = lerp(this.start, this.startControl, e)
              , s = lerp(this.startControl, this.endControl, e)
              , i = lerp(this.endControl, this.end, e)
              , r = lerp(n, s, e);
            s = lerp(s, i, e),
            e = lerp(r, s, e);
            return t ? new A(this.start,n,r,e) : new A(e,s,i,this.end)
        }
        ,
        A.prototype.add = function(e, t) {
            return new A(this.start.add(e, t),this.startControl.add(e, t),this.endControl.add(e, t),this.end.add(e, t))
        }
        ,
        A.prototype.reverse = function() {
            return new A(this.end,this.endControl,this.startControl,this.start)
        }
        ,
        A
    }(), isBezierCurve = function(A) {
        return 1 === A.type
    }, BoundCurves = function(A) {
        var e = A.styles
          , t = A.bounds
          , n = (s = getAbsoluteValueForTuple(e.borderTopLeftRadius, t.width, t.height))[0]
          , s = s[1]
          , i = (r = getAbsoluteValueForTuple(e.borderTopRightRadius, t.width, t.height))[0]
          , r = r[1]
          , o = (a = getAbsoluteValueForTuple(e.borderBottomRightRadius, t.width, t.height))[0]
          , a = a[1]
          , c = (l = getAbsoluteValueForTuple(e.borderBottomLeftRadius, t.width, t.height))[0]
          , l = l[1];
        (h = []).push((n + i) / t.width),
        h.push((c + o) / t.width),
        h.push((s + l) / t.height),
        h.push((r + a) / t.height),
        1 < (h = Math.max.apply(Math, h)) && (n /= h,
        s /= h,
        i /= h,
        r /= h,
        o /= h,
        a /= h,
        c /= h,
        l /= h);
        var h = t.width - i
          , B = t.height - a
          , u = t.width - o
          , d = t.height - l
          , g = e.borderTopWidth
          , p = e.borderRightWidth
          , C = e.borderBottomWidth
          , w = e.borderLeftWidth
          , Q = getAbsoluteValue(e.paddingTop, A.bounds.width)
          , E = getAbsoluteValue(e.paddingRight, A.bounds.width)
          , f = getAbsoluteValue(e.paddingBottom, A.bounds.width);
        e = getAbsoluteValue(e.paddingLeft, A.bounds.width);
        this.topLeftBorderDoubleOuterBox = 0 < n || 0 < s ? getCurvePoints(t.left + w / 3, t.top + g / 3, n - w / 3, s - g / 3, CORNER.TOP_LEFT) : new Vector(t.left + w / 3,t.top + g / 3),
        this.topRightBorderDoubleOuterBox = 0 < n || 0 < s ? getCurvePoints(t.left + h, t.top + g / 3, i - p / 3, r - g / 3, CORNER.TOP_RIGHT) : new Vector(t.left + t.width - p / 3,t.top + g / 3),
        this.bottomRightBorderDoubleOuterBox = 0 < o || 0 < a ? getCurvePoints(t.left + u, t.top + B, o - p / 3, a - C / 3, CORNER.BOTTOM_RIGHT) : new Vector(t.left + t.width - p / 3,t.top + t.height - C / 3),
        this.bottomLeftBorderDoubleOuterBox = 0 < c || 0 < l ? getCurvePoints(t.left + w / 3, t.top + d, c - w / 3, l - C / 3, CORNER.BOTTOM_LEFT) : new Vector(t.left + w / 3,t.top + t.height - C / 3),
        this.topLeftBorderDoubleInnerBox = 0 < n || 0 < s ? getCurvePoints(t.left + 2 * w / 3, t.top + 2 * g / 3, n - 2 * w / 3, s - 2 * g / 3, CORNER.TOP_LEFT) : new Vector(t.left + 2 * w / 3,t.top + 2 * g / 3),
        this.topRightBorderDoubleInnerBox = 0 < n || 0 < s ? getCurvePoints(t.left + h, t.top + 2 * g / 3, i - 2 * p / 3, r - 2 * g / 3, CORNER.TOP_RIGHT) : new Vector(t.left + t.width - 2 * p / 3,t.top + 2 * g / 3),
        this.bottomRightBorderDoubleInnerBox = 0 < o || 0 < a ? getCurvePoints(t.left + u, t.top + B, o - 2 * p / 3, a - 2 * C / 3, CORNER.BOTTOM_RIGHT) : new Vector(t.left + t.width - 2 * p / 3,t.top + t.height - 2 * C / 3),
        this.bottomLeftBorderDoubleInnerBox = 0 < c || 0 < l ? getCurvePoints(t.left + 2 * w / 3, t.top + d, c - 2 * w / 3, l - 2 * C / 3, CORNER.BOTTOM_LEFT) : new Vector(t.left + 2 * w / 3,t.top + t.height - 2 * C / 3),
        this.topLeftBorderStroke = 0 < n || 0 < s ? getCurvePoints(t.left + w / 2, t.top + g / 2, n - w / 2, s - g / 2, CORNER.TOP_LEFT) : new Vector(t.left + w / 2,t.top + g / 2),
        this.topRightBorderStroke = 0 < n || 0 < s ? getCurvePoints(t.left + h, t.top + g / 2, i - p / 2, r - g / 2, CORNER.TOP_RIGHT) : new Vector(t.left + t.width - p / 2,t.top + g / 2),
        this.bottomRightBorderStroke = 0 < o || 0 < a ? getCurvePoints(t.left + u, t.top + B, o - p / 2, a - C / 2, CORNER.BOTTOM_RIGHT) : new Vector(t.left + t.width - p / 2,t.top + t.height - C / 2),
        this.bottomLeftBorderStroke = 0 < c || 0 < l ? getCurvePoints(t.left + w / 2, t.top + d, c - w / 2, l - C / 2, CORNER.BOTTOM_LEFT) : new Vector(t.left + w / 2,t.top + t.height - C / 2),
        this.topLeftBorderBox = 0 < n || 0 < s ? getCurvePoints(t.left, t.top, n, s, CORNER.TOP_LEFT) : new Vector(t.left,t.top),
        this.topRightBorderBox = 0 < i || 0 < r ? getCurvePoints(t.left + h, t.top, i, r, CORNER.TOP_RIGHT) : new Vector(t.left + t.width,t.top),
        this.bottomRightBorderBox = 0 < o || 0 < a ? getCurvePoints(t.left + u, t.top + B, o, a, CORNER.BOTTOM_RIGHT) : new Vector(t.left + t.width,t.top + t.height),
        this.bottomLeftBorderBox = 0 < c || 0 < l ? getCurvePoints(t.left, t.top + d, c, l, CORNER.BOTTOM_LEFT) : new Vector(t.left,t.top + t.height),
        this.topLeftPaddingBox = 0 < n || 0 < s ? getCurvePoints(t.left + w, t.top + g, Math.max(0, n - w), Math.max(0, s - g), CORNER.TOP_LEFT) : new Vector(t.left + w,t.top + g),
        this.topRightPaddingBox = 0 < i || 0 < r ? getCurvePoints(t.left + Math.min(h, t.width - p), t.top + g, h > t.width + p ? 0 : Math.max(0, i - p), Math.max(0, r - g), CORNER.TOP_RIGHT) : new Vector(t.left + t.width - p,t.top + g),
        this.bottomRightPaddingBox = 0 < o || 0 < a ? getCurvePoints(t.left + Math.min(u, t.width - w), t.top + Math.min(B, t.height - C), Math.max(0, o - p), Math.max(0, a - C), CORNER.BOTTOM_RIGHT) : new Vector(t.left + t.width - p,t.top + t.height - C),
        this.bottomLeftPaddingBox = 0 < c || 0 < l ? getCurvePoints(t.left + w, t.top + Math.min(d, t.height - C), Math.max(0, c - w), Math.max(0, l - C), CORNER.BOTTOM_LEFT) : new Vector(t.left + w,t.top + t.height - C),
        this.topLeftContentBox = 0 < n || 0 < s ? getCurvePoints(t.left + w + e, t.top + g + Q, Math.max(0, n - (w + e)), Math.max(0, s - (g + Q)), CORNER.TOP_LEFT) : new Vector(t.left + w + e,t.top + g + Q),
        this.topRightContentBox = 0 < i || 0 < r ? getCurvePoints(t.left + Math.min(h, t.width + w + e), t.top + g + Q, h > t.width + w + e ? 0 : i - w + e, r - (g + Q), CORNER.TOP_RIGHT) : new Vector(t.left + t.width - (p + E),t.top + g + Q),
        this.bottomRightContentBox = 0 < o || 0 < a ? getCurvePoints(t.left + Math.min(u, t.width - (w + e)), t.top + Math.min(B, t.height + g + Q), Math.max(0, o - (p + E)), a - (C + f), CORNER.BOTTOM_RIGHT) : new Vector(t.left + t.width - (p + E),t.top + t.height - (C + f)),
        this.bottomLeftContentBox = 0 < c || 0 < l ? getCurvePoints(t.left + w + e, t.top + d, Math.max(0, c - (w + e)), l - (C + f), CORNER.BOTTOM_LEFT) : new Vector(t.left + w + e,t.top + t.height - (C + f))
    }, CORNER, getCurvePoints = (function(A) {
        A[A.TOP_LEFT = 0] = "TOP_LEFT",
        A[A.TOP_RIGHT = 1] = "TOP_RIGHT",
        A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
        A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
    }(CORNER = CORNER || {}),
    function(A, e, t, n, s) {
        var i = (Math.sqrt(2) - 1) / 3 * 4
          , r = t * i
          , o = n * i
          , a = A + t
          , c = e + n;
        switch (s) {
        case CORNER.TOP_LEFT:
            return new BezierCurve(new Vector(A,c),new Vector(A,c - o),new Vector(a - r,e),new Vector(a,e));
        case CORNER.TOP_RIGHT:
            return new BezierCurve(new Vector(A,e),new Vector(A + r,e),new Vector(a,c - o),new Vector(a,c));
        case CORNER.BOTTOM_RIGHT:
            return new BezierCurve(new Vector(a,e),new Vector(a,e + o),new Vector(A + r,c),new Vector(A,c));
        default:
            return CORNER.BOTTOM_LEFT,
            new BezierCurve(new Vector(a,c),new Vector(a - r,c),new Vector(A,e + o),new Vector(A,e))
        }
    }
    ), calculateBorderBoxPath = function(A) {
        return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
    }, calculateContentBoxPath = function(A) {
        return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
    }, calculatePaddingBoxPath = function(A) {
        return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
    }, TransformEffect = function(A, e, t) {
        this.offsetX = A,
        this.offsetY = e,
        this.matrix = t,
        this.type = 0,
        this.target = 6
    }, ClipEffect = function(A, e) {
        this.path = A,
        this.target = e,
        this.type = 1
    }, OpacityEffect = function(A) {
        this.opacity = A,
        this.type = 2,
        this.target = 6
    }, isTransformEffect = function(A) {
        return 0 === A.type
    }, isClipEffect = function(A) {
        return 1 === A.type
    }, isOpacityEffect = function(A) {
        return 2 === A.type
    }, equalPath = function(A, e) {
        return A.length === e.length && A.some((function(A, t) {
            return A === e[t]
        }
        ))
    }, transformPath = function(A, e, t, n, s) {
        return A.map((function(A, i) {
            switch (i) {
            case 0:
                return A.add(e, t);
            case 1:
                return A.add(e + n, t);
            case 2:
                return A.add(e + n, t + s);
            case 3:
                return A.add(e, t + s)
            }
            return A
        }
        ))
    }, StackingContext = function(A) {
        this.element = A,
        this.inlineLevel = [],
        this.nonInlineLevel = [],
        this.negativeZIndex = [],
        this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
        this.positiveZIndex = [],
        this.nonPositionedFloats = [],
        this.nonPositionedInlineLevel = []
    }, ElementPaint = function() {
        function A(A, e) {
            var t;
            this.container = A,
            this.parent = e,
            this.effects = [],
            this.curves = new BoundCurves(this.container),
            this.container.styles.opacity < 1 && this.effects.push(new OpacityEffect(this.container.styles.opacity)),
            null !== this.container.styles.transform && (A = this.container.bounds.left + this.container.styles.transformOrigin[0].number,
            e = this.container.bounds.top + this.container.styles.transformOrigin[1].number,
            t = this.container.styles.transform,
            this.effects.push(new TransformEffect(A,e,t))),
            0 !== this.container.styles.overflowX && (A = calculateBorderBoxPath(this.curves),
            e = calculatePaddingBoxPath(this.curves),
            equalPath(A, e) ? this.effects.push(new ClipEffect(A,6)) : (this.effects.push(new ClipEffect(A,2)),
            this.effects.push(new ClipEffect(e,4))))
        }
        return A.prototype.getEffects = function(A) {
            for (var e = -1 === [2, 3].indexOf(this.container.styles.position), t = this.parent, n = this.effects.slice(0); t; ) {
                var s, i, r = t.effects.filter((function(A) {
                    return !isClipEffect(A)
                }
                ));
                e || 0 !== t.container.styles.position || !t.parent ? (n.unshift.apply(n, r),
                e = -1 === [2, 3].indexOf(t.container.styles.position),
                0 !== t.container.styles.overflowX && (s = calculateBorderBoxPath(t.curves),
                i = calculatePaddingBoxPath(t.curves),
                equalPath(s, i) || n.unshift(new ClipEffect(i,6)))) : n.unshift.apply(n, r),
                t = t.parent
            }
            return n.filter((function(e) {
                return contains(e.target, A)
            }
            ))
        }
        ,
        A
    }(), parseStackTree = function(A, e, t, n) {
        A.container.elements.forEach((function(s) {
            var i, r, o, a, c = contains(s.flags, 4), l = contains(s.flags, 2), h = new ElementPaint(s,A), B = (contains(s.styles.display, 2048) && n.push(h),
            contains(s.flags, 8) ? [] : n);
            c || l ? (l = c || s.styles.isPositioned() ? t : e,
            i = new StackingContext(h),
            s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed() ? (r = s.styles.zIndex.order) < 0 ? (o = 0,
            l.negativeZIndex.some((function(A, e) {
                return r > A.element.container.styles.zIndex.order ? (o = e,
                !1) : 0 < o
            }
            )),
            l.negativeZIndex.splice(o, 0, i)) : 0 < r ? (a = 0,
            l.positiveZIndex.some((function(A, e) {
                return r >= A.element.container.styles.zIndex.order ? (a = e + 1,
                !1) : 0 < a
            }
            )),
            l.positiveZIndex.splice(a, 0, i)) : l.zeroOrAutoZIndexOrTransformedOrOpacity.push(i) : (s.styles.isFloating() ? l.nonPositionedFloats : l.nonPositionedInlineLevel).push(i),
            parseStackTree(h, i, c ? i : t, B)) : ((s.styles.isInlineLevel() ? e.inlineLevel : e.nonInlineLevel).push(h),
            parseStackTree(h, e, t, B)),
            contains(s.flags, 8) && processListItems(s, B)
        }
        ))
    }, processListItems = function(A, e) {
        for (var t = A instanceof OLElementContainer ? A.start : 1, n = A instanceof OLElementContainer && A.reversed, s = 0; s < e.length; s++) {
            var i = e[s];
            i.container instanceof LIElementContainer && "number" == typeof i.container.value && 0 !== i.container.value && (t = i.container.value),
            i.listValue = createCounterText(t, i.container.styles.listStyleType, !0),
            t += n ? -1 : 1
        }
    }, parseStackingContexts = function(A) {
        A = new ElementPaint(A,null);
        var e = new StackingContext(A)
          , t = [];
        return parseStackTree(A, e, e, t),
        processListItems(A.container, t),
        e
    }, parsePathForBorder = function(A, e) {
        switch (e) {
        case 0:
            return createPathFromCurves(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
        case 1:
            return createPathFromCurves(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
        case 2:
            return createPathFromCurves(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
        default:
            return createPathFromCurves(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
        }
    }, parsePathForBorderDoubleOuter = function(A, e) {
        switch (e) {
        case 0:
            return createPathFromCurves(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
        case 1:
            return createPathFromCurves(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
        case 2:
            return createPathFromCurves(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
        default:
            return createPathFromCurves(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
        }
    }, parsePathForBorderDoubleInner = function(A, e) {
        switch (e) {
        case 0:
            return createPathFromCurves(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
        case 1:
            return createPathFromCurves(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
        case 2:
            return createPathFromCurves(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
        default:
            return createPathFromCurves(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
        }
    }, parsePathForBorderStroke = function(A, e) {
        switch (e) {
        case 0:
            return createStrokePathFromCurves(A.topLeftBorderStroke, A.topRightBorderStroke);
        case 1:
            return createStrokePathFromCurves(A.topRightBorderStroke, A.bottomRightBorderStroke);
        case 2:
            return createStrokePathFromCurves(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
        default:
            return createStrokePathFromCurves(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
        }
    }, createStrokePathFromCurves = function(A, e) {
        var t = [];
        return isBezierCurve(A) ? t.push(A.subdivide(.5, !1)) : t.push(A),
        isBezierCurve(e) ? t.push(e.subdivide(.5, !0)) : t.push(e),
        t
    }, createPathFromCurves = function(A, e, t, n) {
        var s = [];
        return isBezierCurve(A) ? s.push(A.subdivide(.5, !1)) : s.push(A),
        isBezierCurve(t) ? s.push(t.subdivide(.5, !0)) : s.push(t),
        isBezierCurve(n) ? s.push(n.subdivide(.5, !0).reverse()) : s.push(n),
        isBezierCurve(e) ? s.push(e.subdivide(.5, !1).reverse()) : s.push(e),
        s
    }, paddingBox = function(A) {
        var e = A.bounds;
        A = A.styles;
        return e.add(A.borderLeftWidth, A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth), -(A.borderTopWidth + A.borderBottomWidth))
    }, contentBox = function(A) {
        var e = A.styles
          , t = (A = A.bounds,
        getAbsoluteValue(e.paddingLeft, A.width))
          , n = getAbsoluteValue(e.paddingRight, A.width)
          , s = getAbsoluteValue(e.paddingTop, A.width)
          , i = getAbsoluteValue(e.paddingBottom, A.width);
        return A.add(t + e.borderLeftWidth, s + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + t + n), -(e.borderTopWidth + e.borderBottomWidth + s + i))
    }, calculateBackgroundPositioningArea = function(A, e) {
        return 0 === A ? e.bounds : (2 === A ? contentBox : paddingBox)(e)
    }, calculateBackgroundPaintingArea = function(A, e) {
        return 0 === A ? e.bounds : (2 === A ? contentBox : paddingBox)(e)
    }, calculateBackgroundRendering = function(A, e, t) {
        var n = calculateBackgroundPositioningArea(getBackgroundValueForIndex(A.styles.backgroundOrigin, e), A)
          , s = calculateBackgroundPaintingArea(getBackgroundValueForIndex(A.styles.backgroundClip, e), A)
          , i = (t = calculateBackgroundSize(getBackgroundValueForIndex(A.styles.backgroundSize, e), t, n))[0]
          , r = t[1]
          , o = getAbsoluteValueForTuple(getBackgroundValueForIndex(A.styles.backgroundPosition, e), n.width - i, n.height - r);
        return [calculateBackgroundRepeatPath(getBackgroundValueForIndex(A.styles.backgroundRepeat, e), o, t, n, s), Math.round(n.left + o[0]), Math.round(n.top + o[1]), i, r]
    }, isAuto = function(A) {
        return isIdentToken(A) && A.value === BACKGROUND_SIZE.AUTO
    }, hasIntrinsicValue = function(A) {
        return "number" == typeof A
    }, calculateBackgroundSize = function(A, e, t) {
        var n = e[0]
          , s = e[1]
          , i = (e = e[2],
        A[0]);
        A = A[1];
        if (!i)
            return [0, 0];
        if (isLengthPercentage(i) && A && isLengthPercentage(A))
            return [getAbsoluteValue(i, t.width), getAbsoluteValue(A, t.height)];
        var r = hasIntrinsicValue(e);
        if (isIdentToken(i) && (i.value === BACKGROUND_SIZE.CONTAIN || i.value === BACKGROUND_SIZE.COVER))
            return hasIntrinsicValue(e) ? t.width / t.height < e != (i.value === BACKGROUND_SIZE.COVER) ? [t.width, t.width / e] : [t.height * e, t.height] : [t.width, t.height];
        var o = hasIntrinsicValue(n)
          , a = hasIntrinsicValue(s)
          , c = o || a;
        if (isAuto(i) && (!A || isAuto(A)))
            return o && a ? [n, s] : r || c ? c && r ? [o ? n : s * e, a ? s : n / e] : [o ? n : t.width, a ? s : t.height] : [t.width, t.height];
        if (r)
            return r = c = 0,
            isLengthPercentage(i) ? c = getAbsoluteValue(i, t.width) : isLengthPercentage(A) && (r = getAbsoluteValue(A, t.height)),
            isAuto(i) ? c = r * e : A && !isAuto(A) || (r = c / e),
            [c, r];
        if (e = null,
        c = null,
        isLengthPercentage(i) ? e = getAbsoluteValue(i, t.width) : A && isLengthPercentage(A) && (c = getAbsoluteValue(A, t.height)),
        null !== (e = null !== (c = null === e || A && !isAuto(A) ? c : o && a ? e / n * s : t.height) && isAuto(i) ? o && a ? c / s * n : t.width : e) && null !== c)
            return [e, c];
        throw new Error("Unable to calculate background-size for element")
    }, getBackgroundValueForIndex = function(A, e) {
        return void 0 === (e = A[e]) ? A[0] : e
    }, calculateBackgroundRepeatPath = function(A, e, t, n, s) {
        var i = e[0]
          , r = e[1]
          , o = t[0]
          , a = t[1];
        switch (A) {
        case 2:
            return [new Vector(Math.round(n.left),Math.round(n.top + r)), new Vector(Math.round(n.left + n.width),Math.round(n.top + r)), new Vector(Math.round(n.left + n.width),Math.round(a + n.top + r)), new Vector(Math.round(n.left),Math.round(a + n.top + r))];
        case 3:
            return [new Vector(Math.round(n.left + i),Math.round(n.top)), new Vector(Math.round(n.left + i + o),Math.round(n.top)), new Vector(Math.round(n.left + i + o),Math.round(n.height + n.top)), new Vector(Math.round(n.left + i),Math.round(n.height + n.top))];
        case 1:
            return [new Vector(Math.round(n.left + i),Math.round(n.top + r)), new Vector(Math.round(n.left + i + o),Math.round(n.top + r)), new Vector(Math.round(n.left + i + o),Math.round(n.top + r + a)), new Vector(Math.round(n.left + i),Math.round(n.top + r + a))];
        default:
            return [new Vector(Math.round(s.left),Math.round(s.top)), new Vector(Math.round(s.left + s.width),Math.round(s.top)), new Vector(Math.round(s.left + s.width),Math.round(s.height + s.top)), new Vector(Math.round(s.left),Math.round(s.height + s.top))]
        }
    }, SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", SAMPLE_TEXT = "Hidden Text", FontMetrics = function() {
        function A(A) {
            this._data = {},
            this._document = A
        }
        return A.prototype.parseMetrics = function(A, e) {
            var t = this._document.createElement("div")
              , n = this._document.createElement("img")
              , s = this._document.createElement("span")
              , i = this._document.body;
            t.style.visibility = "hidden",
            t.style.fontFamily = A,
            t.style.fontSize = e,
            t.style.margin = "0",
            t.style.padding = "0",
            t.style.whiteSpace = "nowrap",
            i.appendChild(t),
            n.src = SMALL_IMAGE,
            n.width = 1,
            n.height = 1,
            n.style.margin = "0",
            n.style.padding = "0",
            n.style.verticalAlign = "baseline",
            s.style.fontFamily = A,
            s.style.fontSize = e,
            s.style.margin = "0",
            s.style.padding = "0",
            s.appendChild(this._document.createTextNode(SAMPLE_TEXT)),
            t.appendChild(s),
            t.appendChild(n),
            A = n.offsetTop - s.offsetTop + 2,
            t.removeChild(s),
            t.appendChild(this._document.createTextNode(SAMPLE_TEXT)),
            t.style.lineHeight = "normal",
            n.style.verticalAlign = "super",
            e = n.offsetTop - t.offsetTop + 2;
            return i.removeChild(t),
            {
                baseline: A,
                middle: e
            }
        }
        ,
        A.prototype.getMetrics = function(A, e) {
            var t = A + " " + e;
            return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)),
            this._data[t]
        }
        ,
        A
    }(), Renderer = function(A, e) {
        this.context = A,
        this.options = e
    }, MASK_OFFSET = 1e4, CanvasRenderer = function(A) {
        function e(e, t) {
            return (e = A.call(this, e, t) || this)._activeEffects = [],
            e.canvas = t.canvas || document.createElement("canvas"),
            e.ctx = e.canvas.getContext("2d"),
            t.canvas || (e.canvas.width = Math.floor(t.width * t.scale),
            e.canvas.height = Math.floor(t.height * t.scale),
            e.canvas.style.width = t.width + "px",
            e.canvas.style.height = t.height + "px"),
            e.fontMetrics = new FontMetrics(document),
            e.ctx.scale(e.options.scale, e.options.scale),
            e.ctx.translate(-t.x, -t.y),
            e.ctx.textBaseline = "bottom",
            e._activeEffects = [],
            e.context.logger.debug("Canvas renderer initialized (" + t.width + "x" + t.height + ") with scale " + t.scale),
            e
        }
        return __extends(e, A),
        e.prototype.applyEffects = function(A) {
            for (var e = this; this._activeEffects.length; )
                this.popEffect();
            A.forEach((function(A) {
                return e.applyEffect(A)
            }
            ))
        }
        ,
        e.prototype.applyEffect = function(A) {
            this.ctx.save(),
            isOpacityEffect(A) && (this.ctx.globalAlpha = A.opacity),
            isTransformEffect(A) && (this.ctx.translate(A.offsetX, A.offsetY),
            this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]),
            this.ctx.translate(-A.offsetX, -A.offsetY)),
            isClipEffect(A) && (this.path(A.path),
            this.ctx.clip()),
            this._activeEffects.push(A)
        }
        ,
        e.prototype.popEffect = function() {
            this._activeEffects.pop(),
            this.ctx.restore()
        }
        ,
        e.prototype.renderStack = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return A.element.container.styles.isVisible() ? [4, this.renderStackContent(A)] : [3, 2];
                    case 1:
                        e.sent(),
                        e.label = 2;
                    case 2:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderNode = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return contains(A.container.flags, 16),
                        A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3];
                    case 1:
                        return e.sent(),
                        [4, this.renderNodeContent(A)];
                    case 2:
                        e.sent(),
                        e.label = 3;
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderTextWithLetterSpacing = function(A, e, t) {
            var n = this;
            0 === e ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + t) : segmentGraphemes(A.text).reduce((function(e, s) {
                return n.ctx.fillText(s, e, A.bounds.top + t),
                e + n.ctx.measureText(s).width
            }
            ), A.bounds.left)
        }
        ,
        e.prototype.createFontStyle = function(A) {
            var e = A.fontVariant.filter((function(A) {
                return "normal" === A || "small-caps" === A
            }
            )).join("")
              , t = fixIOSSystemFonts(A.fontFamily).join(", ")
              , n = isDimensionToken(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
            return [[A.fontStyle, e, A.fontWeight, n, t].join(" "), t, n]
        }
        ,
        e.prototype.renderTextNode = function(A, e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t, n, s, i, r, o, a = this;
                return __generator(this, (function(c) {
                    return n = this.createFontStyle(e),
                    s = n[0],
                    t = n[1],
                    n = n[2],
                    this.ctx.font = s,
                    this.ctx.direction = 1 === e.direction ? "rtl" : "ltr",
                    this.ctx.textAlign = "left",
                    this.ctx.textBaseline = "alphabetic",
                    s = this.fontMetrics.getMetrics(t, n),
                    i = s.baseline,
                    r = s.middle,
                    o = e.paintOrder,
                    A.textBounds.forEach((function(A) {
                        o.forEach((function(t) {
                            switch (t) {
                            case 0:
                                a.ctx.fillStyle = asString(e.color),
                                a.renderTextWithLetterSpacing(A, e.letterSpacing, i);
                                var n = e.textShadow;
                                n.length && A.text.trim().length && (n.slice(0).reverse().forEach((function(t) {
                                    a.ctx.shadowColor = asString(t.color),
                                    a.ctx.shadowOffsetX = t.offsetX.number * a.options.scale,
                                    a.ctx.shadowOffsetY = t.offsetY.number * a.options.scale,
                                    a.ctx.shadowBlur = t.blur.number,
                                    a.renderTextWithLetterSpacing(A, e.letterSpacing, i)
                                }
                                )),
                                a.ctx.shadowColor = "",
                                a.ctx.shadowOffsetX = 0,
                                a.ctx.shadowOffsetY = 0,
                                a.ctx.shadowBlur = 0),
                                e.textDecorationLine.length && (a.ctx.fillStyle = asString(e.textDecorationColor || e.color),
                                e.textDecorationLine.forEach((function(e) {
                                    switch (e) {
                                    case 1:
                                        a.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + i), A.bounds.width, 1);
                                        break;
                                    case 2:
                                        a.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                                        break;
                                    case 3:
                                        a.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + r), A.bounds.width, 1)
                                    }
                                }
                                )));
                                break;
                            case 1:
                                e.webkitTextStrokeWidth && A.text.trim().length && (a.ctx.strokeStyle = asString(e.webkitTextStrokeColor),
                                a.ctx.lineWidth = e.webkitTextStrokeWidth,
                                a.ctx.lineJoin = window.chrome ? "miter" : "round",
                                a.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + i)),
                                a.ctx.strokeStyle = "",
                                a.ctx.lineWidth = 0,
                                a.ctx.lineJoin = "miter"
                            }
                        }
                        ))
                    }
                    )),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderReplacedElement = function(A, e, t) {
            var n;
            t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight && (n = contentBox(A),
            e = calculatePaddingBoxPath(e),
            this.path(e),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, n.left, n.top, n.width, n.height),
            this.ctx.restore())
        }
        ,
        e.prototype.renderNodeContent = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                var t, n, s, i, r, o, a, c, l, h, B, u, d;
                return __generator(this, (function(g) {
                    switch (g.label) {
                    case 0:
                        this.applyEffects(A.getEffects(4)),
                        t = A.container,
                        n = A.curves,
                        s = t.styles,
                        i = 0,
                        r = t.textNodes,
                        g.label = 1;
                    case 1:
                        return i < r.length ? (o = r[i],
                        [4, this.renderTextNode(o, s)]) : [3, 4];
                    case 2:
                        g.sent(),
                        g.label = 3;
                    case 3:
                        return i++,
                        [3, 1];
                    case 4:
                        if (!(t instanceof ImageElementContainer))
                            return [3, 8];
                        g.label = 5;
                    case 5:
                        return g.trys.push([5, 7, , 8]),
                        [4, this.context.cache.match(t.src)];
                    case 6:
                        return h = g.sent(),
                        this.renderReplacedElement(t, n, h),
                        [3, 8];
                    case 7:
                        return g.sent(),
                        this.context.logger.error("Error loading image " + t.src),
                        [3, 8];
                    case 8:
                        if (t instanceof CanvasElementContainer && this.renderReplacedElement(t, n, t.canvas),
                        !(t instanceof SVGElementContainer))
                            return [3, 12];
                        g.label = 9;
                    case 9:
                        return g.trys.push([9, 11, , 12]),
                        [4, this.context.cache.match(t.svg)];
                    case 10:
                        return h = g.sent(),
                        this.renderReplacedElement(t, n, h),
                        [3, 12];
                    case 11:
                        return g.sent(),
                        this.context.logger.error("Error loading svg " + t.svg.substring(0, 255)),
                        [3, 12];
                    case 12:
                        return t instanceof IFrameElementContainer && t.tree ? [4, new e(this.context,{
                            scale: this.options.scale,
                            backgroundColor: t.backgroundColor,
                            x: 0,
                            y: 0,
                            width: t.width,
                            height: t.height
                        }).render(t.tree)] : [3, 14];
                    case 13:
                        o = g.sent(),
                        t.width && t.height && this.ctx.drawImage(o, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height),
                        g.label = 14;
                    case 14:
                        if (t instanceof InputElementContainer && (a = Math.min(t.bounds.width, t.bounds.height),
                        t.type === CHECKBOX ? t.checked && (this.ctx.save(),
                        this.path([new Vector(t.bounds.left + .39363 * a,t.bounds.top + .79 * a), new Vector(t.bounds.left + .16 * a,t.bounds.top + .5549 * a), new Vector(t.bounds.left + .27347 * a,t.bounds.top + .44071 * a), new Vector(t.bounds.left + .39694 * a,t.bounds.top + .5649 * a), new Vector(t.bounds.left + .72983 * a,t.bounds.top + .23 * a), new Vector(t.bounds.left + .84 * a,t.bounds.top + .34085 * a), new Vector(t.bounds.left + .39363 * a,t.bounds.top + .79 * a)]),
                        this.ctx.fillStyle = asString(INPUT_COLOR),
                        this.ctx.fill(),
                        this.ctx.restore()) : t.type === RADIO && t.checked && (this.ctx.save(),
                        this.ctx.beginPath(),
                        this.ctx.arc(t.bounds.left + a / 2, t.bounds.top + a / 2, a / 4, 0, 2 * Math.PI, !0),
                        this.ctx.fillStyle = asString(INPUT_COLOR),
                        this.ctx.fill(),
                        this.ctx.restore())),
                        isTextInputElement(t) && t.value.length) {
                            switch (a = this.createFontStyle(s),
                            u = a[0],
                            B = a[1],
                            B = this.fontMetrics.getMetrics(u, B).baseline,
                            this.ctx.font = u,
                            this.ctx.fillStyle = asString(s.color),
                            this.ctx.textBaseline = "alphabetic",
                            this.ctx.textAlign = canvasTextAlign(t.styles.textAlign),
                            d = contentBox(t),
                            c = 0,
                            t.styles.textAlign) {
                            case 1:
                                c += d.width / 2;
                                break;
                            case 2:
                                c += d.width
                            }
                            l = d.add(c, 0, 0, -d.height / 2 + 1),
                            this.ctx.save(),
                            this.path([new Vector(d.left,d.top), new Vector(d.left + d.width,d.top), new Vector(d.left + d.width,d.top + d.height), new Vector(d.left,d.top + d.height)]),
                            this.ctx.clip(),
                            this.renderTextWithLetterSpacing(new TextBounds(t.value,l), s.letterSpacing, B),
                            this.ctx.restore(),
                            this.ctx.textBaseline = "alphabetic",
                            this.ctx.textAlign = "left"
                        }
                        if (!contains(t.styles.display, 2048))
                            return [3, 20];
                        if (null === t.styles.listStyleImage)
                            return [3, 19];
                        if (0 !== (l = t.styles.listStyleImage).type)
                            return [3, 18];
                        h = void 0,
                        B = l.url,
                        g.label = 15;
                    case 15:
                        return g.trys.push([15, 17, , 18]),
                        [4, this.context.cache.match(B)];
                    case 16:
                        return h = g.sent(),
                        this.ctx.drawImage(h, t.bounds.left - (h.width + 10), t.bounds.top),
                        [3, 18];
                    case 17:
                        return g.sent(),
                        this.context.logger.error("Error loading list-style-image " + B),
                        [3, 18];
                    case 18:
                        return [3, 20];
                    case 19:
                        A.listValue && -1 !== t.styles.listStyleType && (u = this.createFontStyle(s)[0],
                        this.ctx.font = u,
                        this.ctx.fillStyle = asString(s.color),
                        this.ctx.textBaseline = "middle",
                        this.ctx.textAlign = "right",
                        d = new Bounds(t.bounds.left,t.bounds.top + getAbsoluteValue(t.styles.paddingTop, t.bounds.width),t.bounds.width,computeLineHeight(s.lineHeight, s.fontSize.number) / 2 + 1),
                        this.renderTextWithLetterSpacing(new TextBounds(A.listValue,d), s.letterSpacing, computeLineHeight(s.lineHeight, s.fontSize.number) / 2 + 2),
                        this.ctx.textBaseline = "bottom",
                        this.ctx.textAlign = "left"),
                        g.label = 20;
                    case 20:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderStackContent = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n, s, i, r, o, a, c, l, h, B, u, d, g;
                return __generator(this, (function(p) {
                    switch (p.label) {
                    case 0:
                        return contains(A.element.container.flags, 16),
                        [4, this.renderNodeBackgroundAndBorders(A.element)];
                    case 1:
                        p.sent(),
                        e = 0,
                        t = A.negativeZIndex,
                        p.label = 2;
                    case 2:
                        return e < t.length ? (g = t[e],
                        [4, this.renderStack(g)]) : [3, 5];
                    case 3:
                        p.sent(),
                        p.label = 4;
                    case 4:
                        return e++,
                        [3, 2];
                    case 5:
                        return [4, this.renderNodeContent(A.element)];
                    case 6:
                        p.sent(),
                        n = 0,
                        s = A.nonInlineLevel,
                        p.label = 7;
                    case 7:
                        return n < s.length ? (g = s[n],
                        [4, this.renderNode(g)]) : [3, 10];
                    case 8:
                        p.sent(),
                        p.label = 9;
                    case 9:
                        return n++,
                        [3, 7];
                    case 10:
                        i = 0,
                        r = A.nonPositionedFloats,
                        p.label = 11;
                    case 11:
                        return i < r.length ? (g = r[i],
                        [4, this.renderStack(g)]) : [3, 14];
                    case 12:
                        p.sent(),
                        p.label = 13;
                    case 13:
                        return i++,
                        [3, 11];
                    case 14:
                        o = 0,
                        a = A.nonPositionedInlineLevel,
                        p.label = 15;
                    case 15:
                        return o < a.length ? (g = a[o],
                        [4, this.renderStack(g)]) : [3, 18];
                    case 16:
                        p.sent(),
                        p.label = 17;
                    case 17:
                        return o++,
                        [3, 15];
                    case 18:
                        c = 0,
                        l = A.inlineLevel,
                        p.label = 19;
                    case 19:
                        return c < l.length ? (g = l[c],
                        [4, this.renderNode(g)]) : [3, 22];
                    case 20:
                        p.sent(),
                        p.label = 21;
                    case 21:
                        return c++,
                        [3, 19];
                    case 22:
                        h = 0,
                        B = A.zeroOrAutoZIndexOrTransformedOrOpacity,
                        p.label = 23;
                    case 23:
                        return h < B.length ? (g = B[h],
                        [4, this.renderStack(g)]) : [3, 26];
                    case 24:
                        p.sent(),
                        p.label = 25;
                    case 25:
                        return h++,
                        [3, 23];
                    case 26:
                        u = 0,
                        d = A.positiveZIndex,
                        p.label = 27;
                    case 27:
                        return u < d.length ? (g = d[u],
                        [4, this.renderStack(g)]) : [3, 30];
                    case 28:
                        p.sent(),
                        p.label = 29;
                    case 29:
                        return u++,
                        [3, 27];
                    case 30:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.mask = function(A) {
            this.ctx.beginPath(),
            this.ctx.moveTo(0, 0),
            this.ctx.lineTo(this.canvas.width, 0),
            this.ctx.lineTo(this.canvas.width, this.canvas.height),
            this.ctx.lineTo(0, this.canvas.height),
            this.ctx.lineTo(0, 0),
            this.formatPath(A.slice(0).reverse()),
            this.ctx.closePath()
        }
        ,
        e.prototype.path = function(A) {
            this.ctx.beginPath(),
            this.formatPath(A),
            this.ctx.closePath()
        }
        ,
        e.prototype.formatPath = function(A) {
            var e = this;
            A.forEach((function(A, t) {
                var n = isBezierCurve(A) ? A.start : A;
                0 === t ? e.ctx.moveTo(n.x, n.y) : e.ctx.lineTo(n.x, n.y),
                isBezierCurve(A) && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
            }
            ))
        }
        ,
        e.prototype.renderRepeat = function(A, e, t, n) {
            this.path(A),
            this.ctx.fillStyle = e,
            this.ctx.translate(t, n),
            this.ctx.fill(),
            this.ctx.translate(-t, -n)
        }
        ,
        e.prototype.resizeImage = function(A, e, t) {
            if (A.width === e && A.height === t)
                return A;
            var n = (null != (n = this.canvas.ownerDocument) ? n : document).createElement("canvas");
            return n.width = Math.max(1, e),
            n.height = Math.max(1, t),
            n.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t),
            n
        }
        ,
        e.prototype.renderBackgroundImage = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n, s, i, r;
                return __generator(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        e = A.styles.backgroundImage.length - 1,
                        t = function(t) {
                            var s, i, r, o, a, c, l, h, B, u, d, g, p, C, w, Q, E, f, U, m, F;
                            return __generator(this, (function(y) {
                                switch (y.label) {
                                case 0:
                                    if (0 !== t.type)
                                        return [3, 5];
                                    s = void 0,
                                    i = t.url,
                                    y.label = 1;
                                case 1:
                                    return y.trys.push([1, 3, , 4]),
                                    [4, n.context.cache.match(i)];
                                case 2:
                                    return s = y.sent(),
                                    [3, 4];
                                case 3:
                                    return y.sent(),
                                    n.context.logger.error("Error loading background-image " + i),
                                    [3, 4];
                                case 4:
                                    return s && (u = calculateBackgroundRendering(A, e, [s.width, s.height, s.width / s.height]),
                                    c = u[0],
                                    g = u[1],
                                    p = u[2],
                                    B = u[3],
                                    u = u[4],
                                    o = n.ctx.createPattern(n.resizeImage(s, B, u), "repeat"),
                                    n.renderRepeat(c, o, g, p)),
                                    [3, 6];
                                case 5:
                                    isLinearGradient(t) ? (d = calculateBackgroundRendering(A, e, [null, null, null]),
                                    c = d[0],
                                    g = d[1],
                                    p = d[2],
                                    B = d[3],
                                    u = d[4],
                                    d = calculateGradientDirection(t.angle, B, u),
                                    C = d[0],
                                    a = d[1],
                                    h = d[2],
                                    l = d[3],
                                    d = d[4],
                                    (Q = document.createElement("canvas")).width = B,
                                    Q.height = u,
                                    w = Q.getContext("2d"),
                                    r = w.createLinearGradient(a, l, h, d),
                                    processColorStops(t.stops, C).forEach((function(A) {
                                        return r.addColorStop(A.stop, asString(A.color))
                                    }
                                    )),
                                    w.fillStyle = r,
                                    w.fillRect(0, 0, B, u),
                                    0 < B && 0 < u && (o = n.ctx.createPattern(Q, "repeat"),
                                    n.renderRepeat(c, o, g, p))) : isRadialGradient(t) && (a = calculateBackgroundRendering(A, e, [null, null, null]),
                                    c = a[0],
                                    l = a[1],
                                    h = a[2],
                                    B = a[3],
                                    u = a[4],
                                    d = 0 === t.position.length ? [FIFTY_PERCENT] : t.position,
                                    g = getAbsoluteValue(d[0], B),
                                    p = getAbsoluteValue(d[d.length - 1], u),
                                    C = calculateRadius(t, g, p, B, u),
                                    w = C[0],
                                    Q = C[1],
                                    0 < w && 0 < Q && (E = n.ctx.createRadialGradient(l + g, h + p, 0, l + g, h + p, w),
                                    processColorStops(t.stops, 2 * w).forEach((function(A) {
                                        return E.addColorStop(A.stop, asString(A.color))
                                    }
                                    )),
                                    n.path(c),
                                    n.ctx.fillStyle = E,
                                    w !== Q ? (f = A.bounds.left + .5 * A.bounds.width,
                                    U = A.bounds.top + .5 * A.bounds.height,
                                    F = 1 / (m = Q / w),
                                    n.ctx.save(),
                                    n.ctx.translate(f, U),
                                    n.ctx.transform(1, 0, 0, m, 0, 0),
                                    n.ctx.translate(-f, -U),
                                    n.ctx.fillRect(l, F * (h - U) + U, B, u * F),
                                    n.ctx.restore()) : n.ctx.fill())),
                                    y.label = 6;
                                case 6:
                                    return e--,
                                    [2]
                                }
                            }
                            ))
                        }
                        ,
                        n = this,
                        s = 0,
                        i = A.styles.backgroundImage.slice(0).reverse(),
                        o.label = 1;
                    case 1:
                        return s < i.length ? (r = i[s],
                        [5, t(r)]) : [3, 4];
                    case 2:
                        o.sent(),
                        o.label = 3;
                    case 3:
                        return s++,
                        [3, 1];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderSolidBorder = function(A, e, t) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(n) {
                    return this.path(parsePathForBorder(t, e)),
                    this.ctx.fillStyle = asString(A),
                    this.ctx.fill(),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderDoubleBorder = function(A, e, t, n) {
            return __awaiter(this, void 0, void 0, (function() {
                var s;
                return __generator(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return e < 3 ? [4, this.renderSolidBorder(A, t, n)] : [3, 2];
                    case 1:
                        return i.sent(),
                        [2];
                    case 2:
                        return s = parsePathForBorderDoubleOuter(n, t),
                        this.path(s),
                        this.ctx.fillStyle = asString(A),
                        this.ctx.fill(),
                        s = parsePathForBorderDoubleInner(n, t),
                        this.path(s),
                        this.ctx.fill(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderNodeBackgroundAndBorders = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n, s, i, r, o, a, c = this;
                return __generator(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        return this.applyEffects(A.getEffects(2)),
                        e = A.container.styles,
                        t = !isTransparent(e.backgroundColor) || e.backgroundImage.length,
                        n = [{
                            style: e.borderTopStyle,
                            color: e.borderTopColor,
                            width: e.borderTopWidth
                        }, {
                            style: e.borderRightStyle,
                            color: e.borderRightColor,
                            width: e.borderRightWidth
                        }, {
                            style: e.borderBottomStyle,
                            color: e.borderBottomColor,
                            width: e.borderBottomWidth
                        }, {
                            style: e.borderLeftStyle,
                            color: e.borderLeftColor,
                            width: e.borderLeftWidth
                        }],
                        s = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(e.backgroundClip, 0), A.curves),
                        t || e.boxShadow.length ? (this.ctx.save(),
                        this.path(s),
                        this.ctx.clip(),
                        isTransparent(e.backgroundColor) || (this.ctx.fillStyle = asString(e.backgroundColor),
                        this.ctx.fill()),
                        [4, this.renderBackgroundImage(A.container)]) : [3, 2];
                    case 1:
                        l.sent(),
                        this.ctx.restore(),
                        e.boxShadow.slice(0).reverse().forEach((function(e) {
                            c.ctx.save();
                            var t = calculateBorderBoxPath(A.curves)
                              , n = e.inset ? 0 : MASK_OFFSET
                              , s = transformPath(t, -n + (e.inset ? 1 : -1) * e.spread.number, (e.inset ? 1 : -1) * e.spread.number, e.spread.number * (e.inset ? -2 : 2), e.spread.number * (e.inset ? -2 : 2));
                            e.inset ? (c.path(t),
                            c.ctx.clip(),
                            c.mask(s)) : (c.mask(t),
                            c.ctx.clip(),
                            c.path(s)),
                            c.ctx.shadowOffsetX = e.offsetX.number + n,
                            c.ctx.shadowOffsetY = e.offsetY.number,
                            c.ctx.shadowColor = asString(e.color),
                            c.ctx.shadowBlur = e.blur.number,
                            c.ctx.fillStyle = e.inset ? asString(e.color) : "rgba(0,0,0,1)",
                            c.ctx.fill(),
                            c.ctx.restore()
                        }
                        )),
                        l.label = 2;
                    case 2:
                        r = i = 0,
                        o = n,
                        l.label = 3;
                    case 3:
                        return r < o.length ? 0 !== (a = o[r]).style && !isTransparent(a.color) && 0 < a.width ? 2 !== a.style ? [3, 5] : [4, this.renderDashedDottedBorder(a.color, a.width, i, A.curves, 2)] : [3, 11] : [3, 13];
                    case 4:
                        return l.sent(),
                        [3, 11];
                    case 5:
                        return 3 !== a.style ? [3, 7] : [4, this.renderDashedDottedBorder(a.color, a.width, i, A.curves, 3)];
                    case 6:
                        return l.sent(),
                        [3, 11];
                    case 7:
                        return 4 !== a.style ? [3, 9] : [4, this.renderDoubleBorder(a.color, a.width, i, A.curves)];
                    case 8:
                        return l.sent(),
                        [3, 11];
                    case 9:
                        return [4, this.renderSolidBorder(a.color, i, A.curves)];
                    case 10:
                        l.sent(),
                        l.label = 11;
                    case 11:
                        i++,
                        l.label = 12;
                    case 12:
                        return r++,
                        [3, 3];
                    case 13:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderDashedDottedBorder = function(A, e, t, n, s) {
            return __awaiter(this, void 0, void 0, (function() {
                var i, r, o, a, c, l, h, B, u, d, g;
                return __generator(this, (function(p) {
                    return this.ctx.save(),
                    c = parsePathForBorderStroke(n, t),
                    i = parsePathForBorder(n, t),
                    2 === s && (this.path(i),
                    this.ctx.clip()),
                    u = isBezierCurve(i[0]) ? (r = i[0].start.x,
                    i[0].start.y) : (r = i[0].x,
                    i[0].y),
                    a = isBezierCurve(i[1]) ? (o = i[1].end.x,
                    i[1].end.y) : (o = i[1].x,
                    i[1].y),
                    u = 0 === t || 2 === t ? Math.abs(r - o) : Math.abs(u - a),
                    this.ctx.beginPath(),
                    3 === s ? this.formatPath(c) : this.formatPath(i.slice(0, 2)),
                    a = e < 3 ? 3 * e : 2 * e,
                    c = e < 3 ? 2 * e : e,
                    3 === s && (c = a = e),
                    l = !0,
                    u <= 2 * a ? l = !1 : u <= 2 * a + c ? (a *= h = u / (2 * a + c),
                    c *= h) : (h = Math.floor((u + c) / (a + c)),
                    B = (u - h * a) / (h - 1),
                    c = (u = (u - (h + 1) * a) / h) <= 0 || Math.abs(c - B) < Math.abs(c - u) ? B : u),
                    l && (3 === s ? this.ctx.setLineDash([0, a + c]) : this.ctx.setLineDash([a, c])),
                    3 === s ? (this.ctx.lineCap = "round",
                    this.ctx.lineWidth = e) : this.ctx.lineWidth = 2 * e + 1.1,
                    this.ctx.strokeStyle = asString(A),
                    this.ctx.stroke(),
                    this.ctx.setLineDash([]),
                    2 === s && (isBezierCurve(i[0]) && (d = i[3],
                    g = i[0],
                    this.ctx.beginPath(),
                    this.formatPath([new Vector(d.end.x,d.end.y), new Vector(g.start.x,g.start.y)]),
                    this.ctx.stroke()),
                    isBezierCurve(i[1]) && (d = i[1],
                    g = i[2],
                    this.ctx.beginPath(),
                    this.formatPath([new Vector(d.end.x,d.end.y), new Vector(g.start.x,g.start.y)]),
                    this.ctx.stroke())),
                    this.ctx.restore(),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.render = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this.options.backgroundColor && (this.ctx.fillStyle = asString(this.options.backgroundColor),
                        this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                        e = parseStackingContexts(A),
                        [4, this.renderStack(e)];
                    case 1:
                        return t.sent(),
                        this.applyEffects([]),
                        [2, this.canvas]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }(Renderer), isTextInputElement = function(A) {
        return A instanceof TextareaElementContainer || A instanceof SelectElementContainer || A instanceof InputElementContainer && A.type !== RADIO && A.type !== CHECKBOX
    }, calculateBackgroundCurvedPaintingArea = function(A, e) {
        switch (A) {
        case 0:
            return calculateBorderBoxPath(e);
        case 2:
            return calculateContentBoxPath(e);
        default:
            return calculatePaddingBoxPath(e)
        }
    }, canvasTextAlign = function(A) {
        switch (A) {
        case 1:
            return "center";
        case 2:
            return "right";
        default:
            return "left"
        }
    }, iOSBrokenFonts = ["-apple-system", "system-ui"], fixIOSSystemFonts = function(A) {
        return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter((function(A) {
            return -1 === iOSBrokenFonts.indexOf(A)
        }
        )) : A
    }, ForeignObjectRenderer = function(A) {
        function e(e, t) {
            return (e = A.call(this, e, t) || this).canvas = t.canvas || document.createElement("canvas"),
            e.ctx = e.canvas.getContext("2d"),
            e.options = t,
            e.canvas.width = Math.floor(t.width * t.scale),
            e.canvas.height = Math.floor(t.height * t.scale),
            e.canvas.style.width = t.width + "px",
            e.canvas.style.height = t.height + "px",
            e.ctx.scale(e.options.scale, e.options.scale),
            e.ctx.translate(-t.x, -t.y),
            e.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale),
            e
        }
        return __extends(e, A),
        e.prototype.render = function(A) {
            return __awaiter(this, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return e = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A),
                        [4, loadSerializedSVG(e)];
                    case 1:
                        return e = t.sent(),
                        this.options.backgroundColor && (this.ctx.fillStyle = asString(this.options.backgroundColor),
                        this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                        this.ctx.drawImage(e, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                        [2, this.canvas]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }(Renderer), loadSerializedSVG = function(A) {
        return new Promise((function(e, t) {
            var n = new Image;
            n.onload = function() {
                e(n)
            }
            ,
            n.onerror = t,
            n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
        }
        ))
    }, Logger = function() {
        function A(A) {
            var e = A.id;
            A = A.enabled;
            this.id = e,
            this.enabled = A,
            this.start = Date.now()
        }
        return A.prototype.debug = function() {
            for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }
        ,
        A.prototype.getTime = function() {
            return Date.now() - this.start
        }
        ,
        A.prototype.info = function() {
            for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
            this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], A))
        }
        ,
        A.prototype.warn = function() {
            for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }
        ,
        A.prototype.error = function() {
            for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }
        ,
        A.instances = {},
        A
    }(), Context = function() {
        function A(e, t) {
            this.windowBounds = t,
            this.instanceName = "#" + A.instanceCount++,
            this.logger = new Logger({
                id: this.instanceName,
                enabled: e.logging
            }),
            this.cache = null != (t = e.cache) ? t : new Cache(this,e)
        }
        return A.instanceCount = 1,
        A
    }();
    "undefined" != typeof window && CacheStorage.setContext(window);
    var parseBackgroundColor = function(A, e, t) {
        var n = e.ownerDocument
          , s = n.documentElement ? parseColor(A, getComputedStyle(n.documentElement).backgroundColor) : COLORS.TRANSPARENT
          , i = n.body ? parseColor(A, getComputedStyle(n.body).backgroundColor) : COLORS.TRANSPARENT;
        A = "string" == typeof t ? parseColor(A, t) : null === t ? COLORS.TRANSPARENT : 4294967295;
        return e === n.documentElement ? isTransparent(s) ? isTransparent(i) ? A : i : s : A
    };
    const styleArr = ["width", "height", "backgroundColor", "backgroundImage", "backgroundSize", "opacity"]
      , makeMap = A=>{
        const e = {};
        return A.forEach((A=>{
            e[A] = !0
        }
        )),
        e
    }
    ;
    makeMap(styleArr),
    UI.adapterManager.register("BaseAdapter", BaseAdapter$1),
    UI.adapterManager.register("ConchAdapter", ConchAdapter);
    var thingUiCanvas = UI;
    class HandleData {
        constructor(A, e) {
            this.parent = A,
            this.dataFilters = e,
            this.conditon = {},
            this.subData = {},
            this.fieldMapping = []
        }
        setSubData(A, e, t, n) {
            var s;
            const i = e[A]
              , r = n || A
              , o = this.parent.query(`#${r}`);
            if (!(null === (s = null == i ? void 0 : i.adapter) || void 0 === s ? void 0 : s.data))
                return;
            const {dataType: a, subscribeData: c, source: l, filter: h, fieldMapping: B} = i.adapter.data;
            if (this.fieldMapping = B,
            h.enabled && h.list.forEach((A=>{
                A.enabled && this._addInfo(this.conditon, r, A.name)
            }
            )),
            "staticData" === a && this._setData(o, l.staticData),
            "subscribeData" === a && c) {
                const {level: t, id: n} = c;
                this._addInfo(this.subData, n, A),
                this.setSubData(n, e, t, A)
            }
            "restData" === a && (null == l ? void 0 : l.restData) && this._setRestData(o, null == l ? void 0 : l.restData, t)
        }
        mutualSubData(A, e, t, n) {
            var s;
            const i = e[A]
              , r = n || A
              , o = this.parent.query(`#${r}`);
            if (!(null === (s = null == i ? void 0 : i.adapter) || void 0 === s ? void 0 : s.data))
                return;
            const {dataType: a, subscribeData: c, source: l, fieldMapping: h} = i.adapter.data;
            if (this.fieldMapping = h,
            "staticData" === a && this._setData(o, l.staticData),
            "subscribeData" === a && c) {
                const {level: t, id: n} = c;
                this.mutualSubData(n, e, t, A)
            }
            "restData" === a && (null == l ? void 0 : l.restData) && this._setRestData(o, null == l ? void 0 : l.restData, t)
        }
        _addInfo(A, e, t) {
            A[e] ? A[e].push(t) : A[e] = [t]
        }
        _filterData(A, e) {
            return e.forEach((e=>{
                const t = this.dataFilters.find((A=>A.name === e));
                if (!t)
                    return;
                const n = {};
                t.callbackArgs.forEach((A=>{
                    n[A] = this.filterKeys && this.filterKeys[A]
                }
                ));
                const s = new Function("data","callbackArgs",`${t.code}`);
                if ("function" == typeof s)
                    try {
                        A = s(A, n)
                    } catch (A) {
                        console.error(`过滤器 ${t.name} 代码执行失败: ${A}`)
                    }
            }
            )),
            A
        }
        _fieldMapping(A) {
            return this.fieldMapping.forEach((e=>{
                e.name !== e.value && A.forEach((A=>{
                    A[e.name] = A[e.value]
                }
                ))
            }
            )),
            A
        }
        setCallbackParam(A) {
            this.filterKeys = A
        }
        _getLevel(A, e) {
            return e.split(".").forEach((e=>{
                A = A[e]
            }
            )),
            A
        }
        _getLevelData(A, e, t) {
            return t && e ? this._getLevel(this._getLevel(A, t), e) : t ? this._getLevel(A, t) : e ? this._getLevel(A, e) : A
        }
        _setRestData(A, e, t) {
            if (!e)
                return !1;
            const {level: n, body: s, method: i, url: r, header: o} = e;
            if (!r)
                return !1;
            requests(r, i, {
                headers: o,
                body: s
            }).then((e=>{
                this._setData(A, this._getLevelData(e, n, t))
            }
            )).catch((A=>{
                console.error(A)
            }
            ))
        }
        _setData(A, e) {
            const t = this.conditon[A.id]
              , n = this._fieldMapping(e)
              , s = t ? this._filterData(n, t) : n;
            try {
                A.adapter.setData(s)
            } catch (A) {}
            this.subData[A.id] && this.subData[A.id].forEach((A=>{
                this._setData(this.parent.query(`#${A}`), s)
            }
            ))
        }
    }
    const typePool = {
        gradually: A=>({
            opacity: 0 === A.style.opacity ? 1 : 0
        }),
        left: (A,{x: e=100})=>({
            translate: [-e, 0]
        }),
        right: (A,{x: e=100})=>({
            translate: [e, 0]
        }),
        top: (A,{y: e=100})=>({
            translate: [0, -e]
        }),
        bottom: (A,{y: e=100})=>({
            translate: [0, e]
        })
    }
      , actionsPool = {
        show: ()=>({
            opacity: 1
        }),
        hidden: ()=>({
            opacity: 0
        }),
        showOrHidden: A=>({
            opacity: 0 === A.style.opacity ? 1 : 0
        }),
        move: (A,{x: e=100, y: t=100})=>({
            translate: [e, t]
        }),
        scale: (A,{scaleX: e=1.5, scaleY: t=1.5})=>{
            const n = A.style.scale || [1, 1];
            return {
                scale: [n[0] * e, n[1] * t]
            }
        }
        ,
        rotate: (A,{rotate: e=90})=>({
            rotate: (A.style.rotate || 0) + e
        })
    };
    function calcCode(A, e) {
        return new Function("data",A)(e)
    }
    function simpleCalc(A, e) {
        return simpleCalcFactory(A, (A=>simpleCalcFactory(A, (A=>contrast(e, ...A)))))
    }
    function contrast(A, e, t, n) {
        let s = A[e];
        switch ("eq" === t || "in" === t || "nin" === t ? (s = s.toString(),
        n = n.toString()) : (s *= 1,
        n *= 1),
        t) {
        case "eq":
            return s === n;
        case "gt":
            return s > n;
        case "lt":
            return s < n;
        case "gte":
            return s >= n;
        case "lte":
            return s <= n;
        case "ne":
            return s !== n;
        case "in":
            return s.toString().includes(n.toString());
        case "nin":
            return !s.toString().includes(n.toString())
        }
    }
    function simpleCalcFactory(A, e) {
        return getCalcFn(A.operator).call(A.expressions, e)
    }
    function getCalcFn(A) {
        switch (A) {
        case "OR":
            return Array.prototype.some;
        case "AND":
            return Array.prototype.every;
        default:
            return ()=>!1
        }
    }
    function calc(A, e) {
        if (!1 === A.enabled)
            return !0;
        switch (A.type) {
        case "code":
            return calcCode(A.filterCode, e);
        case "tree":
            return simpleCalc(A, e);
        default:
            return !0
        }
    }
    class Mutual {
        constructor(A, {kpUserData: e, handleData: t}) {
            this.ui = A,
            this.kpUserData = e,
            this.handleData = t
        }
        loadEvent() {
            var A;
            const e = this.kpUserData;
            for (const t in e) {
                const n = e[t];
                if (!(null === (A = null == n ? void 0 : n.adapter) || void 0 === A ? void 0 : A.events))
                    continue;
                const s = this.ui.query(`#${t}`);
                n.adapter.events.forEach((A=>{
                    const {actions: e, condition: t, identified: n} = A;
                    s.app._waitAction(n).done((A=>{
                        calc(t, A) && e.forEach((e=>{
                            this.transfromAction(e, A)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }
        transfromAction(A, e) {
            const t = A.comps.map((A=>this.ui.query("#" + A)));
            switch (A.type) {
            case "callback":
                this._doCallback(A.callback.callback, e[A.callback.value]);
                break;
            case "chart":
                if ("changeOptions" === A.action)
                    t.forEach((e=>{
                        try {
                            e.adapter.setOption(A.options)
                        } catch (A) {}
                    }
                    ));
                else
                    this._doAnimation(A, t)
            }
        }
        _doCallback(A, e) {
            for (const t in this.handleData.conditon)
                this.handleData.setCallbackParam({
                    [A]: e
                }),
                this.handleData.mutualSubData(t, this.kpUserData, "", "")
        }
        _doAnimation(A, e) {
            const t = e.map((t=>Object.assign({
                target: e,
                animation: Object.assign(Object.assign({}, "move" !== A.action ? typePool[A.animation.type](t, A.animation) : {}), actionsPool[A.action](t, A.animation))
            }, A.animation)));
            this.ui.animation.run(t)
        }
    }
    function stringToJson(A) {
        try {
            return JSON.parse(A)
        } catch (A) {
            console.error(A)
        }
    }
    function eachChildren(A, e) {
        Array.isArray(A) && A.forEach((A=>{
            e(A),
            eachChildren(A.children, e)
        }
        ))
    }
    function isStaticPrefix(A) {
        return /^\/s-static/.test(A) || /^url\(\/s-static/.test(A)
    }
    function replacePath(A, e) {
        return A.replace("/s-static", "" + (e ? e + "/web" : address + "/s-static"))
    }
    function transfromImg(A, e) {
        Object.entries(A).forEach((([t,n])=>{
            "string" == typeof n && isStaticPrefix(n) && (A[t] = replacePath(n, e)),
            "series" === t && Array.isArray(n) && n.forEach((A=>{
                var e;
                A.symbol = null === (e = A.symbol) || void 0 === e ? void 0 : e.replace("image://", address)
            }
            )),
            isType$2(n, "Object") && transfromImg(n, e)
        }
        ))
    }
    function transfromDefPrefix({userData: A, scene: e}, t) {
        Object.values(A).forEach((A=>{
            A.option.prefix = t ? `${t}/web` : address + "/s-static",
            A.opts && transfromImg(A.opts, t)
        }
        )),
        eachChildren(e.children, (A=>{
            A.option.style && "string" == typeof A.option.style.backgroundImage && isStaticPrefix(A.option.style.backgroundImage) && (A.option.style.backgroundImage = replacePath(A.option.style.backgroundImage, t))
        }
        ));
        const n = e.option.style.backgroundImage || e.option.style.background;
        n && (e.option.style.backgroundImage = replacePath(n, t))
    }
    function getContainers(A) {
        let e = [];
        const {option: t, children: n, type: s} = A;
        return "Container" === s && t.adapter && e.push(A),
        null == n || n.forEach((A=>{
            e = e.concat(getContainers(A))
        }
        )),
        e
    }
    const dataContainers = [];
    class ThingJSUIPlugins extends thingUiCanvas {
        transfromDef(A, e) {
            const t = stringToJson(A.def);
            return transfromDefPrefix(t, e),
            Object.entries(t.userData).forEach((([A,e])=>{
                var t, n;
                "UdatavAdapter" === e.type && (e.data = null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.source) || void 0 === n ? void 0 : n.staticData)
            }
            )),
            t
        }
        loadBasJS(A) {
            return __awaiter$1(this, void 0, void 0, (function*() {
                A ? yield loadScript$1("/base/base.js", `${A}/web`) : yield loadScript$1("/spray/compile")
            }
            ))
        }
        loadCompJS(A, e) {
            return __awaiter$1(this, void 0, void 0, (function*() {
                const {component: t} = stringToJson(A.config);
                for (let A = 0; A < t.length; A++)
                    e ? yield loadScript$1(`/component/${t[A]}.js`, `${e}/web`) : yield loadScript$1(`/s-static/component/${t[A]}.js`)
            }
            ))
        }
        initData(A, {prefix: e, hide3D: t}) {
            var n, s, i, r, o;
            const {kpUserData: a, scene: c} = stringToJson(A.def);
            if (!a)
                return !1;
            const l = null === (n = a[c.option.id]) || void 0 === n ? void 0 : n.dataFilters
              , h = new HandleData(this,l);
            new Mutual(this,{
                kpUserData: a,
                handleData: h
            }).loadEvent(),
            this._transfromLayer(c, a, t);
            for (const B in a) {
                const u = a[B]
                  , d = this.query(`#${B}`);
                if ("Container" !== (null == d ? void 0 : d.type))
                    continue;
                if (null === (s = null == u ? void 0 : u.adapter) || void 0 === s ? void 0 : s.opts) {
                    transfromImg(u.adapter.opts, e);
                    try {
                        d.adapter.setOption(u.adapter.opts)
                    } catch (w) {}
                }
                if ((null === (i = null == u ? void 0 : u.adapter) || void 0 === i ? void 0 : i.padding) && d.app.setPadding(u.adapter.padding),
                (null === (r = null == u ? void 0 : u.adapter) || void 0 === r ? void 0 : r.theme) && d.app.setTheme(u.adapter.theme),
                h.setSubData(B, a, "", ""),
                !(null === (o = null == u ? void 0 : u.adapter) || void 0 === o ? void 0 : o.data))
                    continue;
                const {close: g, time: p} = u.adapter.data;
                function C() {
                    h.setSubData(B, a, "", "");
                    const A = setTimeout((()=>{
                        C(),
                        clearTimeout(A)
                    }
                    ), 1e3 * p)
                }
                "seabedData" === d.app.tag && dataContainers.push(d),
                g || C()
            }
        }
        _transfromLayer(A, e, t) {
            var n;
            null === (n = null == A ? void 0 : A.children) || void 0 === n || n.forEach((A=>{
                var n, s, i;
                const r = A.option.id
                  , o = this.query(`#${r}`);
                (null === (n = e[r]) || void 0 === n ? void 0 : n._kpSelected) && (o.show(),
                getContainers(A).forEach((A=>{
                    this.nextTick().then((()=>{
                        var e, t;
                        null === (t = null === (e = this.query(`#${A.option.id}`)) || void 0 === e ? void 0 : e.adapter) || void 0 === t || t.resize()
                    }
                    )).catch((A=>{
                        console.error(A)
                    }
                    ))
                }
                ))),
                (null === (s = e[r]) || void 0 === s ? void 0 : s._kp3DLayer) && (t && o.hidden(),
                t || getContainers(A).forEach((A=>{
                    this.nextTick().then((()=>{
                        var t;
                        const n = A.option.id
                          , s = e[n].adapter.thingOpts;
                        null === (t = this.query(`#${n}`)) || void 0 === t || t.app.init(s, {
                            authServerUrl: "https://city.thingjs.com/ra/thingauth/processrequest1",
                            urlV1: `${address}/builder/api-campus/` + s.urlV1
                        })
                    }
                    )).catch((A=>{
                        console.error(A)
                    }
                    ))
                }
                ))),
                (null === (i = e[r]) || void 0 === i ? void 0 : i._kpClip) && o.zIndexDown()
            }
            ))
        }
        _hideDataContainers() {
            dataContainers.forEach((A=>{
                A.hidden()
            }
            ))
        }
        playScene() {
            this._hideDataContainers(),
            this.play()
        }
    }
    const comp = {
        state: {
            compData: []
        },
        get: {
            getById: (A,e)=>{
                var t;
                if (e && "string" == typeof e)
                    return null === (t = A.compData.find((A=>A.id === e))) || void 0 === t ? void 0 : t.data
            }
            ,
            getByAlias: (A,e)=>{
                var t;
                if (e && "string" == typeof e)
                    return null === (t = A.compData.find((A=>A.alias === e))) || void 0 === t ? void 0 : t.data
            }
            ,
            getcompData: A=>A.compData
        },
        set: {
            setUdata: (A,e)=>A.compData = e
        }
    }
      , callbackPool = {
        state: {
            callbackPool: {}
        },
        get: {
            getcallbackPool: A=>A.callbackPool
        },
        set: {
            addCBToStackHostPool: (A,e)=>{
                if (Array.isArray(e)) {
                    const [t,n] = e;
                    if (!t.id || !t.callback)
                        return;
                    const s = A.callbackPool;
                    s[n] || (s[n] = []),
                    s[n].push(t)
                }
            }
            ,
            clearFromStackHostPool(A, e) {
                const t = A.callbackPool
                  , [n,s] = e;
                if (t[s]) {
                    const e = A.callbackPool[s];
                    let t = e.length;
                    for (; t--; ) {
                        e[t].id === n && e.splice(t, 1)
                    }
                }
            }
        }
    };
    class StorageManager {
        constructor(A) {
            this.statePool = {},
            this.getPool = {},
            this.setPool = {},
            A.forEach((A=>{
                this.register(A)
            }
            ))
        }
        register(A) {
            Object.assign(this.statePool, A.state),
            Object.assign(this.getPool, A.get),
            Object.assign(this.setPool, A.set)
        }
        get(A, e) {
            return this.getPool[A](this.statePool, e)
        }
        commit(A, e) {
            this.setPool[A](this.statePool, e)
        }
    }
    var store = new StorageManager([comp, callbackPool]);
    class CompBase {
        constructor(A, e) {
            this.config = e,
            this.el = A,
            this.uBizData = e.data,
            this.options = e.opts,
            this.cbArr = [],
            this.comTimes = null,
            this.componentAliasObj = {},
            this.initApi()
        }
        get JSCode() {
            return this.config.options.JSCode || ""
        }
        get compType() {
            return this.config.options.type
        }
        _initComponent() {
            this.initBizData(),
            this.initOptions(),
            this.runJSCode(),
            this.initCompDom()
        }
        resize() {}
        initBizData() {}
        initOptions() {}
        initCompDom() {}
        update() {}
        getOption() {
            return this.options
        }
        setOption(A) {
            this.options = A,
            this.update()
        }
        getData() {
            return this.uBizData
        }
        setData(A) {
            this.uBizData = A,
            this.update()
        }
        runJSCode() {
            if (this.JSCode) {
                const A = new Function("param",`${this.JSCode}`);
                if ("function" == typeof A)
                    try {
                        A.call(this.api)
                    } catch (A) {
                        console.error(`组件执行代码逻辑失败: ${A}`)
                    }
            }
        }
        runTimesFunction(A, e) {
            this.comTimes = null,
            this.comTimes && window.clearTimeout(this.comTimes),
            this.comTimes = window.setTimeout((()=>{
                this.runTimesFunction(A, e),
                A.call(this.api)
            }
            ), parseInt(e))
        }
        initApi() {
            const A = this.compType;
            this.api = {
                getDom: ()=>this.el,
                getEcharts: ()=>window.echarts,
                getJquery: ()=>window.$,
                getOptions: ()=>this.options,
                setOptions: A=>{
                    this.options = A
                }
                ,
                getComponentData: ()=>this.uBizData
            },
            this.api.getSceneDataByAlias = A=>store.get("getByAlias", A) || null,
            this.api.getPublishDataById = A=>store.get("getById", A) || null,
            this.api.getPublishDataByAlias = A=>store.get("getByAlias", A) || null,
            this.api.clearDom = ()=>{
                const A = this.el;
                window.$(A).empty()
            }
            ,
            this.api.setStyle = (A,e)=>{
                if (A && A instanceof HTMLElement && e && "object" == typeof e)
                    for (const t in e)
                        A.style[t] = e[t]
            }
            ,
            this.api.setStyleByArray = (A,e)=>{
                var t;
                if (A instanceof Array && e instanceof Array && A.length === e.length) {
                    const n = A.length;
                    for (let s = 0; s < n; s++) {
                        const n = A[s]
                          , i = e[s];
                        null === (t = this.api) || void 0 === t || t.setStyle(n, i)
                    }
                }
            }
            ,
            this.api.setItemValue = (A,e)=>{
                A && A instanceof HTMLElement && ("string" == typeof e || "number" == typeof e) && (A.innerText = e)
            }
            ,
            this.api.mountToDom = (A,e)=>{
                e instanceof HTMLElement && A instanceof HTMLElement && e.appendChild(A)
            }
            ,
            this.api.setItemHTML = (A,e)=>{
                A && A instanceof HTMLElement && "string" == typeof e && (A.innerHTML = e)
            }
            ,
            this.api.getStyleStringByObject = A=>{
                let e = "";
                for (const t in A)
                    e += `${t}:${A[t]};`;
                return e
            }
            ,
            this.api.createDOMByDefinition = (A,e,t)=>{
                if (A && e && e instanceof Array) {
                    const n = function(A) {
                        let e = "";
                        if ("string" == typeof A) {
                            const t = A.length;
                            ";" !== A.substr(t - 1, 1) && (e = ";")
                        }
                        return e
                    };
                    e.forEach((e=>{
                        var s, i, r;
                        const o = e.type;
                        if (!o)
                            return;
                        let a = null;
                        if ("svg" === o || "defs" === o || "rect" === o || "linearGradient" === o || "stop" === o) {
                            const A = "http://www.w3.org/2000/svg";
                            a = document.createElementNS(A, o)
                        } else
                            a = document.createElement(o);
                        const c = e.style;
                        if (c) {
                            let A = "";
                            if (c instanceof Array) {
                                const e = c.length;
                                for (let t = 0; t < e; t++) {
                                    const e = c[t];
                                    if ("string" == typeof e)
                                        A += e,
                                        A += n(A);
                                    else if ("object" == typeof e) {
                                        const t = null === (s = this.api) || void 0 === s ? void 0 : s.getStyleStringByObject(e);
                                        t && (A += t,
                                        A += n(A))
                                    }
                                }
                            } else if ("object" != typeof c || c instanceof Array)
                                "string" == typeof c && (A += c,
                                A += n(A));
                            else {
                                const e = c ? null === (i = this.api) || void 0 === i ? void 0 : i.getStyleStringByObject(c) : "";
                                e && (A += e,
                                A += n(A))
                            }
                            A && (a.style.cssText = A)
                        }
                        const l = e.text;
                        l && (a.innerText = l),
                        A.appendChild(a),
                        t && t instanceof Function && t.call(this, a, e),
                        e.children && (null === (r = this.api) || void 0 === r || r.createDOMByDefinition(a, e.children, t))
                    }
                    ))
                }
            }
            ,
            this.api.setComponentSize = (A,e)=>{}
            ,
            this.api.setTimes = (A,e)=>{
                "function" == typeof A && parseInt(e) ? (this.comTimes && window.clearTimeout(this.comTimes),
                this.comTimes = null,
                this.runTimesFunction(A, e)) : console.error("setTimes传入参数错误")
            }
            ,
            this.api.addCallback = A=>{
                A instanceof Function && this.cbArr.push(A)
            }
            ,
            this.api.clearCallback = ()=>{
                this.cbArr = []
            }
            ,
            this.api.addCBToStackHostPool = (A,e)=>{
                const t = [{
                    id: this.config.name,
                    callback: A,
                    self: this
                }, e];
                return store.commit("addCBToStackHostPool", t)
            }
            ,
            this.api.clearFromStackHostPool = A=>{
                const e = [this.config.name, A];
                return store.commit("clearFromStackHostPool", e)
            }
            ,
            this.api.clearTimes = ()=>{
                this.comTimes && window.clearTimeout(this.comTimes),
                this.comTimes = null
            }
            ,
            this.api.setComponentData = e=>{
                if (e)
                    if ("ctextlist" === A) {
                        if (this.uBizData = window.$.extend(!0, [], e),
                        this.initOptions(),
                        this.initBizData(),
                        !this.options.isCarousel)
                            for (const A of this.uBizData)
                                A.isShow = !0
                    } else
                        this.uBizData = e;
                else
                    console.warn("没有获取到合法的数据")
            }
            ,
            this.api.startAnimate = ()=>{}
            ,
            window.callCBStack = A=>{
                if (!A || "string" != typeof A)
                    return void console.error("call回调队列时参数字符中需要携带队列id,并且参数必须为字符串");
                if (A.indexOf("，") >= 0)
                    return void console.error("call回调队列的参数中不能含有中文逗号,如果传多参，参数之间用英文逗号隔开");
                const e = A.split(",")
                  , [t,...n] = e
                  , s = store.get("getcallbackPool").all;
                if (s && s instanceof Array) {
                    const A = s.length;
                    for (let e = 0; e < A; e++) {
                        if (s[e][1] !== t)
                            continue;
                        const A = s[e][0];
                        A.callback.call(A.self, n)
                    }
                }
            }
        }
        destory() {
            var A;
            this.options = void 0,
            this.uBizData = void 0,
            this.api = void 0,
            this.dom && (null === (A = this.el) || void 0 === A || A.removeChild(this.dom),
            this.dom = void 0),
            window.$(this.el).empty()
        }
    }
    class CompNew extends CompBase {
    }
    Math.random().toString(36).substr(-8);
    const isType = (A,e)=>Object.prototype.toString.call(A).includes(e)
      , getCSSTextFromStyleObj = A=>{
        if (!A)
            return null;
        let e = "";
        for (const t in A) {
            if (["bgImageUrl", "isBgImage", "backgroundColorLgColor", "backgroundColorisUseLgColor", "webkitTextFillColor", "colorisUseLgColor", "colorLgColor"].includes(t))
                continue;
            const n = /\w/g;
            let s = "";
            s = t.replace(n, (function(A) {
                return A >= "A" && A <= "Z" ? "-" + A.toLowerCase() : A
            }
            )),
            e += `${s}:${A[t]};`
        }
        return e
    }
      , createDiv$1 = A=>{
        const e = document.createElement("div");
        return e.setAttribute("style", A),
        e
    }
      , loadScript = A=>new Promise((e=>{
        const t = A.split("/")
          , n = `script-${t[t.length - 1]}`;
        let s = document.getElementById(n);
        s || (s = document.createElement("script"),
        s.src = A,
        document.head.appendChild(s),
        s.onload = ()=>{
            e(s)
        }
        ,
        s.onerror = ()=>{
            console.warn(`${A}: 当前资源不存在`),
            e(s)
        }
        )
    }
    ))
      , formatData = (A,e,t)=>{
        const n = A.padStart(e, "0");
        return t && n.length > 4 ? n.substring(0, e - 4) + "万" + n.substring(e - 4, e) : n
    }
    ;
    class Text extends CompNew {
        _initComponent() {
            this.initOptions(),
            this.initCompDom(),
            this.initBizData(),
            this.runJSCode()
        }
        initCompDom() {
            var A, e;
            const t = document.createElement("div");
            t.setAttribute("style", "width:100%;height:100%;overflow:hidden;"),
            this.dom = document.createElement("div"),
            this.dom.innerText = (null === (A = this.uBizData) || void 0 === A ? void 0 : A.value) || "数据不符合规范",
            t.appendChild(this.dom),
            this.options && this._setOption(this.options),
            null === (e = this.el) || void 0 === e || e.appendChild(t)
        }
        initOptions() {
            if (this.options) {
                const A = this.options;
                (null == A ? void 0 : A.colorLgColor) && (null == A ? void 0 : A.colorisUseLgColor) && (A.backgroundImage = null == A ? void 0 : A.colorLgColor.replace(/_/g, ","),
                A["-webkit-background-clip"] = "text",
                A["-webkit-text-fill-color"] = A.webkitTextFillColor),
                this._setOption(A)
            }
        }
        _setOption(A) {
            this.dom && this.dom.setAttribute("style", this.compStyle = getCSSTextFromStyleObj(A))
        }
        initBizData() {
            let A = this.uBizData;
            Array.isArray(A) && (A = A[0]),
            A || (A = {
                value: "数据为null"
            }),
            this._setData(A)
        }
        _setData(A) {
            this.dom && (this.uBizData = A,
            this.dom.innerText = A.value || "数据不符合规范")
        }
        update() {
            this.initOptions(),
            this.runJSCode(),
            this.initBizData()
        }
        destory() {
            this.uBizData = void 0,
            this.compStyle = void 0,
            super.destory()
        }
    }
    class Layer extends CompNew {
        initCompDom() {
            var A;
            this.dom = document.createElement("div"),
            this.initOptions(),
            null === (A = this.el) || void 0 === A || A.appendChild(this.dom)
        }
        initOptions() {
            if (this.dom && this.options) {
                const A = this.options;
                let e = "height:100%;";
                A.backgroundColor && (e += `background-color:${A.backgroundColor};`),
                A.isBgImage && A.bgImageUrl && (e += `background-image:${A.bgImageUrl};background-size:100%;background-position:center;background-repeat:no-repeat;`),
                this.dom.setAttribute("style", e),
                (null == A ? void 0 : A.backgroundColorisUseLgColor) && A.backgroundColorLgColor && (this.dom.style.background = A.backgroundColorLgColor.replace(/_/g, ","))
            }
        }
        update() {
            this.initOptions(),
            this.runJSCode()
        }
    }
    function init(A, e) {
        A.forEach(((A,t)=>{
            A.style.transition = "",
            A.style.transform = "",
            A._height || (A._height = A.style.height),
            A._display || (A._display = A.style.display),
            A.ontransitionend = null,
            t <= e - 1 ? (A.style.display = A._display,
            A.style.opacity = "1") : (A.style.display = "none",
            A.style.opacity = "0")
        }
        ))
    }
    function scroll(A, e, t) {
        return __awaiter$1(this, void 0, void 0, (function*() {
            let n = 0;
            const s = A.length - 1;
            init(A, e);
            let i, r = !0;
            return yield function o() {
                return __awaiter$1(this, void 0, void 0, (function*() {
                    const a = A[n + e];
                    yield leave(A[n]),
                    a && (yield enter(a)),
                    n >= s ? (init(A, e),
                    n = 0) : n++,
                    r && (i = setTimeout((()=>{
                        clearTimeout(i),
                        o()
                    }
                    ), 1e3 * +t))
                }
                ))
            }(),
            ()=>{
                r = !1,
                i && clearTimeout(i)
            }
        }
        ))
    }
    function leave(A) {
        return new Promise((e=>{
            A.style.display = A._display,
            setTimeout((()=>{
                A.style.transition = "transform 0.5s, opacity 0.5s, height 0.5s",
                A.style.transform = "translateY(20px) rotateX(90deg)",
                A.style.opacity = "0",
                A.style.height = "0",
                A.ontransitionend = function() {
                    A.style.transition = "",
                    A.style.display = "none",
                    A.style.opacity = "0",
                    A.style.height = A._height,
                    A.ontransitionend = null,
                    e(1)
                }
            }
            ))
        }
        ))
    }
    function enter(A) {
        return new Promise((e=>{
            A.style.display = A._display,
            A.style.opacity = "0",
            A.style.transform = "translateY(50px)",
            A.style.transition = "",
            setTimeout((()=>{
                A.style.transition = "transform 0.8s, opacity 0.8s",
                A.style.opacity = "1",
                A.style.transform = "translateY(0)",
                A.ontransitionend = function() {
                    A.style.transform = "translateY(0)",
                    A.style.opacity = "1",
                    A.ontransitionend = null,
                    e(1)
                }
            }
            ))
        }
        ))
    }
    class TextList extends CompNew {
        initBizData() {
            this.uBizData && (this.cacheData || (this.cacheData = JSON.parse(JSON.stringify(this.uBizData))),
            this.uBizData = this.cacheData.map((A=>Object.assign(Object.assign({}, A), {
                cellStyle: {}
            }))))
        }
        initOptions() {
            const A = this.options;
            if (A) {
                const e = "px" === A.titleLineheight ? "50px" : A.titleLineheight
                  , t = {
                    color: A.titleColor,
                    textAlign: A.titleTextAlign,
                    fontFamily: A.titleFontFamily,
                    fontSize: A.titleFongSize,
                    fontWeight: A.titleFontWeight,
                    lineHeight: e,
                    backgroundColor: A.titleBackgroundColor,
                    borderColor: A.titleBorderColor,
                    borderStyle: A.titleBorderStyle,
                    borderWidth: A.titleBorderWeight,
                    height: e,
                    background: ""
                }
                  , n = {
                    textAlign: A.fontTextAlign,
                    lineHeight: A.fontLineHeight
                }
                  , s = {
                    borderColor: A.borderColor,
                    borderStyle: A.borderStyle,
                    borderWidth: A.borderWeight
                }
                  , i = {
                    color: A.oddFontColor,
                    fontFamily: A.oddFontFamily,
                    fontSize: A.oddFontSize,
                    fontWeight: A.oddFontWeight,
                    height: A.fontLineHeight,
                    backgroundColor: null == A ? void 0 : A.oddBackgroundColor,
                    background: ""
                }
                  , r = {
                    color: A.evenFontColor,
                    fontFamily: A.evenFontFamily,
                    fontSize: A.evenFontSize,
                    fontWeight: A.evenFontWeight,
                    height: A.fontLineHeight,
                    backgroundColor: null == A ? void 0 : A.evenBackgroundColor,
                    background: ""
                };
                (null == A ? void 0 : A.titleBackgroundColorLgColor) && (null == A ? void 0 : A.titleBackgroundColorisUseLgColor) && (t.background = null == A ? void 0 : A.titleBackgroundColorLgColor.replace(/_/g, ",")),
                (null == A ? void 0 : A.oddBackgroundColorLgColor) && (null == A ? void 0 : A.oddBackgroundColorisUseLgColor) && (i.background = null == A ? void 0 : A.oddBackgroundColorLgColor.replace(/_/g, ",")),
                (null == A ? void 0 : A.evenBackgroundColorLgColor) && (null == A ? void 0 : A.evenBackgroundColorisUseLgColor) && (r.background = null == A ? void 0 : A.evenBackgroundColorLgColor.replace(/_/g, ",")),
                this.compStyle = {
                    titleStyle: getCSSTextFromStyleObj(t) || "",
                    bodyStyle: getCSSTextFromStyleObj(n) || "",
                    borderStyle: getCSSTextFromStyleObj(s) || "",
                    oddStyle: getCSSTextFromStyleObj(i) || "",
                    evenStyle: getCSSTextFromStyleObj(r) || ""
                }
            }
        }
        _destoryDom() {
            this.textListDom && window.$(this.textListDom).empty(),
            this.clearTimer && this.clearTimer()
        }
        initCompDom() {
            var A, e;
            return __awaiter$1(this, void 0, void 0, (function*() {
                if (this.textListDom ? this._destoryDom() : (this.textListDom = document.createElement("div"),
                this.textListDom.setAttribute("style", "width:100%;height:100%;overflow:hidden;"),
                null === (A = this.el) || void 0 === A || A.appendChild(this.textListDom)),
                this.compStyle) {
                    const {titleStyle: A, bodyStyle: t, borderStyle: n, oddStyle: s, evenStyle: i} = this.compStyle
                      , r = this.options
                      , o = createDiv$1(`display:flex;${A}`);
                    r.title.forEach((A=>{
                        const e = createDiv$1(`width:${A.titleWidth};`);
                        e.innerText = A.titleName || "",
                        o.appendChild(e)
                    }
                    ));
                    const a = document.createElement("div");
                    Array.isArray(this.uBizData) && this.uBizData.forEach(((A,e)=>{
                        const o = createDiv$1(`box-sizing:border-box;width:100%;display:flex;${n};${(e + 1) % 2 ? s : i}`);
                        r.title.forEach((e=>{
                            if (A.cellStyle) {
                                let n = "";
                                A.cellStyle[e.compName] && (n = getCSSTextFromStyleObj(A.cellStyle[e.compName]) || "");
                                const s = createDiv$1(`${t};width:${e.titleWidth};${n}`);
                                s.innerText = A[e.compName] || "",
                                o.appendChild(s)
                            }
                        }
                        )),
                        a.appendChild(o)
                    }
                    )),
                    this.textListDom.appendChild(o),
                    this.textListDom.appendChild(a),
                    (null === (e = this.uBizData) || void 0 === e ? void 0 : e.length) > 0 && (null == r ? void 0 : r.isCarousel) && "onebyone" === r.animateType && (this.clearTimer = yield scroll(Array.from(a.childNodes), +r.pageNumber, r.carouselCycle))
                }
            }
            ))
        }
        update() {
            this.initBizData(),
            this.initOptions(),
            this.runJSCode(),
            this.initCompDom()
        }
        getData() {
            return this.cacheData
        }
        setData(A) {
            this.cacheData = A,
            this.update()
        }
    }
    class Iframe extends CompNew {
        initCompDom() {
            var A;
            this.dom = document.createElement("iframe"),
            this.dom.setAttribute("style", "width:100%;height:100%"),
            this.initOptions(),
            null === (A = this.el) || void 0 === A || A.appendChild(this.dom)
        }
        initOptions() {
            this.dom && this.options && this.options.iframeURL && !0 === this.options.isOpenIframe && (this.dom.src = /^(http|https):/.test(this.options.iframeURL) ? this.options.iframeURL : `http://${this.options.iframeURL}`)
        }
        update() {
            this.initOptions(),
            this.runJSCode()
        }
    }
    class Progress extends CompNew {
        initCompDom() {
            var A;
            const e = createDiv$1("width:100%;height:100%;overflow:hidden;");
            isType(this.uBizData, "Array") && this.uBizData.forEach((A=>{
                e.appendChild(this.createProgressDom(A, this.compStyle))
            }
            )),
            null === (A = this.el) || void 0 === A || A.appendChild(e)
        }
        update() {
            window.$(this.el).empty(),
            this.initBizData(),
            this.initOptions(),
            this.runJSCode(),
            this.initCompDom()
        }
        getData() {
            return this.cacheData
        }
        setData(A) {
            this.cacheData = A,
            this.update()
        }
        initBizData() {
            isType(this.uBizData, "Array") ? (this.cacheData || (this.cacheData = JSON.parse(JSON.stringify(this.uBizData))),
            this.uBizData = this.cacheData.map((A=>Object.assign(Object.assign({}, A), {
                cProgressColor: {}
            })))) : console.warn("数据不符合规范，cprogress类型数据应该是一个数组")
        }
        createProgressDom(A, e) {
            let t = "";
            A.cProgressColor && (t = getCSSTextFromStyleObj(A.cProgressColor));
            const {progress: n, title: s, unit: i, progressbg: r} = e
              , o = createDiv$1(`${s}`)
              , a = createDiv$1(`${r}`)
              , c = createDiv$1(`${i}`);
            A.title ? o.innerHTML = `${A.title}` : o.style.display = "none",
            c.innerHTML = 100 * A.progress + " %";
            const l = createDiv$1(`${n}${t}width:${A.progress * parseInt(this.options.progress_width)}px`);
            a.appendChild(l);
            const h = createDiv$1("display:flex;");
            return h.appendChild(o),
            h.appendChild(a),
            h.appendChild(c),
            h
        }
        initOptions() {
            this.compStyle || (this.compStyle = {
                progress: "",
                title: "",
                unit: ""
            });
            const A = this.options
              , e = {};
            for (const t in A) {
                const n = t.split("_");
                n[1] && (e[n[0]] ? e[n[0]][n[1]] = A[t] : e[n[0]] = {
                    [n[1]]: A[t]
                })
            }
            const {title: t, progress: n, unit: s} = e;
            (null == t ? void 0 : t.backgroundColorLgColor) && (null == t ? void 0 : t.backgroundColorisUseLgColor) && (t.background = t.backgroundColorLgColor.replace(/_/g, ",")),
            (null == n ? void 0 : n.backgroundColorLgColor) && (null == n ? void 0 : n.backgroundColorisUseLgColor) && (n.background = n.backgroundColorLgColor.replace(/_/g, ",")),
            (null == s ? void 0 : s.backgroundColorLgColor) && (null == s ? void 0 : s.backgroundColorisUseLgColor) && (s.background = s.backgroundColorLgColor.replace(/_/g, ","));
            const {backgroundColor: i, borderRadius: r, color: o, height: a, marginTop: c, width: l} = n;
            e.progressbg = {
                backgroundColor: i,
                borderRadius: r,
                height: a,
                width: l,
                marginTop: c
            },
            e.progress = {
                backgroundColor: o,
                borderRadius: r,
                height: a
            };
            for (const A in e)
                this.compStyle[A] = getCSSTextFromStyleObj(e[A])
        }
    }
    Math.random().toString(36).substr(-8);
    const createDiv = A=>{
        const e = document.createElement("div");
        return e.setAttribute("style", A),
        e
    }
    ;
    class Timecard extends CompNew {
        initOptions() {
            if (this.options) {
                const A = this.options;
                let e = `color:${A.fontColor};font-family:${A.fontFamily};font-size:${A.fontSize};`;
                this.dateStyle = A.isShowDay ? "" : "display:none;",
                this.timerStyle = A.isShowTime ? "" : "display:none;",
                A.isLineWarp || (e += "display: flex;",
                this.dateStyle += `margin-right:${A.spacing};`),
                this.compStyle = e,
                this._setOption()
            }
        }
        initCompDom() {
            var A;
            this.dom = createDiv(this.compStyle || ""),
            this.dateDom = createDiv(this.dateStyle || ""),
            this.timeDom = createDiv(this.timerStyle || ""),
            this.dom.appendChild(this.dateDom),
            this.dom.appendChild(this.timeDom),
            null === (A = this.el) || void 0 === A || A.appendChild(this.dom),
            this.setCurrentTime()
        }
        update() {
            this.initOptions()
        }
        _setOption() {
            this.dateDom && this.timeDom && (this.dateDom.setAttribute("style", this.dateStyle || ""),
            this.timeDom.setAttribute("style", this.timerStyle || ""))
        }
        _changeInerHTML(A) {
            this.dateDom.innerText = A[0],
            this.timeDom.innerText = A[1]
        }
        _getNowTime() {
            const A = new Date;
            return [A.toLocaleTimeString(), A.getFullYear(), A.getMonth() + 1, A.getDate(), A]
        }
        setCurrentTime() {
            this._timer && clearTimeout(this._timer),
            this._timer = void 0;
            const [A,e,t,n,s] = this._getNowTime()
              , i = {
                0: `${e}年${t}月${n}日`,
                1: `${e}-${t}-${n}`,
                2: s.toLocaleDateString()
            }
              , r = this.options ? this.options.timeFormat : 0;
            this._changeInerHTML([i[r], A]),
            this._timer = setTimeout((()=>{
                this.setCurrentTime()
            }
            ), 1e3)
        }
        destory() {
            this._timer && clearTimeout(this._timer),
            this._timer = void 0,
            this.dateDom = void 0,
            this.timeDom = void 0,
            this.dateStyle = void 0,
            this.timerStyle = void 0,
            this.compStyle = void 0,
            super.destory()
        }
    }
    class CompChart extends CompBase {
        constructor(A, e) {
            super(A, e),
            this.echartsInstance = void 0
        }
        initApi() {
            super.initApi(),
            this.api && (this.api.renderCharts = ()=>{
                window.ui.nextTick().then((()=>{
                    var A;
                    this.echartsInstance ? this.echartsInstance.clear() : this.echartsInstance = window.echarts && window.echarts.init(this.el),
                    this.options && (null === (A = this.echartsInstance) || void 0 === A || A.setOption(this.options))
                }
                )).catch((A=>{
                    console.warn(A)
                }
                ))
            }
            ,
            this.api.getChartsInstance = ()=>this.echartsInstance,
            this.api.getChartsData = ()=>this.uBizData,
            this.api.getChartsOptions = ()=>this.options)
        }
    }
    class Echarts extends CompChart {
        constructor(A, e) {
            super(A, e),
            this.el = A,
            this.dbapitype = this.config.options.dbapitype || "1",
            this.defaultColor = [["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"], ["#C1232B", "#27727B", "#FCCE10", "#E87C25", "#B5C334", "#FE8463", "#9BCA63", "#FAD860", "#F3A43B", "#60C0DD", "#D7504B"], ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4"], ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487", "#7798BF", "#aaeeee", "#DF5353"], ["#E01F54", "#001852", "#f5e8c8", "#b8d2c7", "#c6b38e", "#a4d8c2", "#f3d999", "#d3758f", "#dcc392", "#2e4783", "#82b6e9"]]
        }
        resize() {
            this.echartsInstance && this.echartsInstance.resize()
        }
        _initComponent() {
            this.initBizData(),
            this.initOptions(),
            this.runJSCode(),
            this.initCompDom()
        }
        initCompDom() {
            var A;
            this.dom || (this.dom = createDiv$1("width:100%;height:100%;"),
            null === (A = this.el) || void 0 === A || A.appendChild(this.dom),
            this.echartsInstance = window.echarts && window.echarts.init(this.dom));
            const e = this.options;
            try {
                this.echartsInstance && e && this.echartsInstance.setOption(e)
            } catch (A) {
                console.error(A)
            }
        }
        update() {
            this._initComponent()
        }
        initOptions() {
            const A = this.dbapitype;
            if (this.options && this.xAxisData && this.legendData) {
                if ((!this.options.color || Array.isArray(Array) && 0 === this.options.color.length) && (this.options.color = this.defaultColor[0]),
                "1" === A && Array.isArray(this.uBizData)) {
                    if (this.xAxisData.length > 0) {
                        if (Array.isArray(this.options.xAxis)) {
                            const A = this.options.xAxis.length;
                            for (let e = 0; e < A; e++)
                                this.options.xAxis[e].type && "category" === this.options.xAxis[e].type && (this.options.xAxis[e].data = this.xAxisData)
                        } else
                            this.options.xAxis && "category" === this.options.xAxis.type && (this.options.xAxis.data = this.xAxisData);
                        if (Array.isArray(this.options.yAxis)) {
                            const A = this.options.yAxis.length;
                            for (let e = 0; e < A; e++)
                                this.options.yAxis[e].type && "category" === this.options.yAxis[e].type && (this.options.yAxis[e].data = this.xAxisData)
                        } else
                            this.options.yAxis && "category" === this.options.yAxis.type && (this.options.yAxis.data = this.xAxisData)
                    }
                    this.legendData.length > 0 && (this.options.legend || (this.options.legend = {}),
                    this.options.legend.data = this.legendData);
                    const A = this.uBizData.length
                      , e = this.options.series.length
                      , t = [];
                    for (let n = 0; n < A; n++)
                        if (n < e)
                            this.options.series[n].name = this.uBizData[n].name,
                            this.options.series[n].data = this.uBizData[n].data;
                        else if (e > 0) {
                            const A = this.options.series[e - 1];
                            A.name = this.uBizData[n].name,
                            A.data = this.uBizData[n].data,
                            t.push(A)
                        }
                    t.length > 0 && (this.options.series = this.options.series.concat(t))
                } else
                    "3" === A && Array.isArray(this.uBizData) && this.options && Object.keys(this.options).length > 0 && (this.options.series && (this.options.series[0].data = this.uBizData),
                    this.legendData.length > 0 && (this.options.legend || (this.options.legend = {}),
                    this.options.legend.data = this.legendData));
                this.initOptionsFunction(this.options)
            }
        }
        initOptionsFunction(A) {
            if (A && "object" == typeof A && !Array.isArray(A)) {
                const e = Object.keys(A);
                for (let t = 0; t < e.length; t++) {
                    const n = A[e[t]];
                    if ("object" != typeof n || n instanceof Array || this.initOptionsFunction(n),
                    n instanceof Array)
                        for (let A = 0; A < n.length; A++)
                            this.initOptionsFunction(n[A]);
                    "string" == typeof n && n.indexOf("function") >= 0 && (A[e[t]] = new Function("return " + n)())
                }
            }
        }
        initBizData() {
            let A = [];
            const e = this.uBizData
              , t = this.dbapitype;
            if ("1" === t && e && "object" == typeof e && !Array.isArray(e) && e.name) {
                this.legendData = [],
                this.xAxisData = [];
                for (const [t,n] of Object.entries(e))
                    if ("name" === t && n instanceof Array && (this.xAxisData = n),
                    "name" !== t) {
                        const e = {
                            name: "",
                            data: []
                        };
                        n instanceof Array && (e.name = t,
                        e.data = n,
                        A.push(e)),
                        this.legendData.push(t)
                    }
            }
            if ("3" === t && e && e instanceof Array && e.length > 0) {
                A = e,
                this.legendData = [],
                this.xAxisData = [];
                for (let e = 0; e < A.length; e++)
                    A[e].name && this.legendData.push(A[e].name)
            }
            this.uBizData = A
        }
    }
    class Blankcomponent extends CompNew {
        update() {
            this.runJSCode()
        }
    }
    class Countdown extends CompNew {
        constructor(A, e) {
            super(A, e),
            this.currentValue = 0,
            this.oldValue = 0,
            this.len = 0,
            this.compDom = null
        }
        initCompDom() {
            var A;
            let {value: e, maxValue: t} = this.uBizData;
            const {pageAlign: n} = this.options;
            t || (t = e,
            e = "0"),
            this.compDom = createDiv$1(`height:100%;width:100%;overflow:hidden;text-align: ${n};`),
            this.currentValue = +e,
            this.len = t.split("").length,
            t.split("").forEach(((A,e)=>{
                this.createPage(A, e)
            }
            )),
            this.options.split && this.createPage("0", 0),
            this.loadData(+e, +t),
            null === (A = this.el) || void 0 === A || A.appendChild(this.compDom)
        }
        loadData(A, e) {
            this.timer && clearTimeout(this.timer);
            const t = Math.floor((e - A) / 30) || 1;
            e - this.currentValue >= t ? this.currentValue = +this.currentValue + t : this.currentValue = e,
            this.changeNumber(),
            +this.currentValue >= +e || (this.timer = setTimeout((()=>{
                this.oldValue = this.currentValue,
                this.loadData(A, e)
            }
            ), 1e3))
        }
        changeNumber() {
            var A, e, t;
            const n = this.options.split
              , s = (formatData(this.currentValue.toString(), this.len, n) + this.options.unit).split("")
              , i = (formatData(this.oldValue.toString(), this.len, n) + this.options.unit).split("");
            if (null === (A = this.compDom) || void 0 === A ? void 0 : A.childNodes)
                for (let A = 0; A < (null === (e = this.compDom) || void 0 === e ? void 0 : e.childNodes.length); A++) {
                    const e = null === (t = this.compDom) || void 0 === t ? void 0 : t.childNodes[A];
                    if (e.childNodes[0].setAttribute("data-before", i[A]),
                    e.childNodes[1].setAttribute("data-before", s[A]),
                    e.classList.remove("go"),
                    i[A] !== s[A]) {
                        const A = setTimeout((()=>{
                            clearTimeout(A),
                            e.classList.add("go")
                        }
                        ), 600)
                    }
                }
        }
        update() {
            window.$(this.el).empty(),
            this.initOptions(),
            this.runJSCode(),
            this.initCompDom()
        }
        _createPage(A) {
            if (this.compStyle) {
                const {pageMargin: e} = this.options
                  , t = document.createElement("div")
                  , {font: n, number: s, page: i} = this.compStyle
                  , r = document.createElement("div")
                  , o = document.createElement("div");
                return r.setAttribute("class", "card-font-number front"),
                o.setAttribute("class", "card-font-number next"),
                t.setAttribute("class", "down"),
                t.appendChild(r),
                t.appendChild(o),
                t.setAttribute("style", `${/^[0-9]*$/.test(A) ? i + s : n};position: relative;display: inline-block; margin-left: ${e}`),
                t
            }
        }
        createPage(A, e) {
            var t, n;
            if (this.compStyle) {
                const s = this._createPage(A);
                if (s && (null === (t = this.compDom) || void 0 === t || t.appendChild(s)),
                4 === e) {
                    const A = this._createPage("0");
                    A && (null === (n = this.compDom) || void 0 === n || n.appendChild(A))
                }
            }
        }
        initOptions() {
            const A = this.options
              , e = {
                color: A.fontColor,
                fontFamily: A.fontFamily,
                lineHeight: A.fontLineHeight,
                fontSize: A.fontSize,
                textAlign: A.fontTextAlign,
                fontWeight: A.fontWeight
            }
              , t = {
                color: A.numberColor,
                fontFamily: A.numberFontFamily,
                fontSize: A.numberSize,
                textAlign: A.numberTextAlign,
                fontWeight: A.numberWeight
            }
              , n = {
                borderRadius: A.pageRadius,
                width: A.pageWidth,
                height: A.pageHeight,
                lineHeight: A.pageHeight,
                textAlign: A.pageAlign,
                background: A.bottomBackgroundColor
            };
            this.compStyle || (this.compStyle = {
                font: "string",
                number: "string",
                page: "string"
            });
            const s = {
                font: e,
                number: t,
                page: n
            };
            for (const A in s)
                this.compStyle[A] = getCSSTextFromStyleObj(s[A]);
            this.setStyle()
        }
        setStyle() {
            let A = document.getElementById("style_card");
            A || (A = document.createElement("style"),
            A.id = "style_card",
            document.head.appendChild(A));
            let e = `.card-font-number:before,\n      .card-font-number:after {\n        content:attr(data-before);\n        position:absolute;\n        left: 0;\n        right:0;\n        overflow:hidden;\n        box-sizing:border-box;\n      }\n      .card-font-number:before{\n        top:0;\n        bottom:50%;\n        background:${this.options.topBackgroundColor};\n      }\n      .card-font-number:after{\n        top:50%;\n        bottom:0;\n        line-height: 0;\n        background:${this.options.bottomBackgroundColor};\n      }\n      .front:before {\n        z-index: 3;\n      }\n      .next:after {\n        z-index: 2;\n        transform-origin: 50% 0%;\n        transform: perspective(160px) rotateX(180deg);\n      }\n      .front:after, .next:before {\n        z-index: 1;\n      }\n      .go .front:after{\n        animation: fade 0.6s ease-in-out both;\n      }\n      .go .front:before {\n        opacity: 0;\n      }\n      .down:not(.go) .next{\n        display: none;\n      }\n      .go .next:after {\n        animation: backFlipDown 0.6s ease-in-out both;\n      }\n      @keyframes fade {\n        100% {\n          opacity: 0;\n        }\n      }\n      @keyframes frontFlipDown {\n        0% {\n          transform: perspective(160px) rotateX(0deg);\n        }\n\n        100% {\n          transform: perspective(160px) rotateX(-180deg);\n        }\n      }\n      @keyframes backFlipDown {\n        0% {\n          transform: perspective(160px) rotateX(180deg);\n        }\n\n        100% {\n          transform: perspective(160px) rotateX(0deg);\n        }\n      }\n      `;
            e = e.replace(/[\r\n]/g, ""),
            A.innerText = e
        }
    }
    class Countdownv2 extends CompNew {
        constructor(A, e) {
            super(A, e),
            this.currentValue = 0,
            this.len = 0
        }
        initCompDom() {
            return __awaiter$1(this, void 0, void 0, (function*() {
                let {value: A, maxValue: e} = this.uBizData;
                e || (e = A,
                A = "0"),
                this.currentValue = +A,
                this.len = e.split("").length,
                this.compDom = document.createElement("span"),
                this.compDom.setAttribute("style", `display: block;${this.compStyle}`),
                this.el.appendChild(this.compDom),
                this.creatPromise(),
                this.loadData(+A, +e),
                yield this.promise,
                this.options.setCountDown && (yield this._loopLoadData(+A, +e))
            }
            ))
        }
        _loopLoadData(A, e) {
            return __awaiter$1(this, void 0, void 0, (function*() {
                this.currentValue = A,
                this.creatPromise(),
                this.loadData(A, e),
                yield this.promise;
                const t = setTimeout((()=>{
                    this._loopLoadData(A, e),
                    clearTimeout(t)
                }
                ), 1e3)
            }
            ))
        }
        creatPromise() {
            this.promise && (this.promise = void 0,
            this.resolve = void 0),
            this.promise = new Promise((A=>{
                this.resolve = A
            }
            ))
        }
        loadData(A, e) {
            const {separate: t, udurationTime: n, udecimal: s} = this.options
              , i = {
                0: Math.floor((e - A) / 30) || 1,
                1: +((e - A) / 30).toFixed(1),
                2: +((e - A) / 30).toFixed(2)
            }[s];
            if (e - this.currentValue >= i ? this.currentValue = +(this.currentValue + i).toFixed(+s) : this.currentValue = e,
            this.compDom.innerHTML = this.formatData(t),
            +this.currentValue >= +e)
                return void (this.resolve && this.resolve());
            const r = setTimeout((()=>{
                this.loadData(A, e),
                clearTimeout(r)
            }
            ), parseInt(n) / 30 || 50)
        }
        formatData(A) {
            const e = this.currentValue.toString().padStart(this.len, this.options.autoNumber);
            if (!A)
                return e;
            const t = e.split(".");
            return t[0].replace(/(\d)(?=(\d{3})+$)/g, (function(A) {
                return A + ","
            }
            )) + "" + (t[1] ? "." + t[1] : "")
        }
        initOptions() {
            const {color: A, fontFamily: e, fontSize: t, fontWeight: n, lineHeight: s, fontTextAlign: i, letterSpacing: r} = this.options
              , o = {
                color: A,
                fontFamily: e,
                lineHeight: s,
                fontSize: t,
                fontWeight: n,
                letterSpacing: r,
                textAlign: i
            };
            this.compStyle = getCSSTextFromStyleObj(o)
        }
    }
    class Video extends CompNew {
        initCompDom() {
            var A;
            this.dom = document.createElement("video"),
            this.dom.setAttribute("style", "width:100%;"),
            null === (A = this.el) || void 0 === A || A.appendChild(this.dom)
        }
        initOptions() {
            if (this.dom && this.options)
                for (const A in this.options)
                    "videoSrc" === A ? this.dom.src = this.options.videoSrc : this.dom.setAttribute(A, this.options[A] ? A : "")
        }
        update() {
            this.initOptions()
        }
    }
    const udataImg = '<svg width="175px" height="75px" viewBox="0 0 75 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<title>jieshuzujian</title>\n<g id="大屏编辑器" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="大屏编辑器-接数组件" transform="translate(-72.000000, -103.000000)">\n        <g id="左侧导航/二级菜单" transform="translate(44.000000, 76.000000)">\n            <g id="卡片/小" transform="translate(16.000000, 16.000000)">\n                <g id="图片/小96" transform="translate(0.000000, 0.000000)">\n                    <g id="jieshuzujian" transform="translate(12.375000, 11.407407)">\n                        <rect id="矩形" x="0" y="0" width="74.25" height="33.1851852"></rect>\n                        <path d="M50.3421875,16.5061728 C50.3421875,23.8467872 44.4246511,29.7975309 37.125,29.7975309 C31.8999056,29.7975309 27.2636158,26.720868 25.1326467,22.1026495 C24.3314718,21.9765021 23.71875,21.2793428 23.71875,20.4382716 C23.71875,19.5075695 24.4690228,18.7530864 25.3945312,18.7530864 C26.3200397,18.7530864 27.0703125,19.5075695 27.0703125,20.4382716 C27.0703125,20.7627404 26.9791232,21.0657913 26.8211106,21.3229216 C28.6519328,25.2885573 32.6358305,27.9308642 37.125,27.9308642 C43.2998777,27.9308642 48.3241631,22.9769481 48.4821084,16.8057152 L48.4859375,16.5061728 L50.3421875,16.5061728 Z M34.531242,17.4449999 L34.51475,18.5608148 L41.2542362,18.5611614 L41.2542362,20.427828 L34.48775,20.4278148 L34.474347,21.359156 L32.0495318,19.5146603 L34.531242,17.4449999 Z M37.125,3.21481481 C42.3634969,3.21481481 46.9937637,6.30572435 49.118067,10.9102843 C49.9185282,11.0358436 50.53125,11.7330029 50.53125,12.5740741 C50.53125,13.5047762 49.7809772,14.2592593 48.8554688,14.2592593 C47.9299603,14.2592593 47.1796875,13.5047762 47.1796875,12.5740741 C47.1796875,12.2496053 47.2708768,11.9465544 47.4288894,11.6894241 C45.60436,7.73613076 41.6255432,5.08148148 37.125,5.08148148 C30.9501223,5.08148148 25.9258369,10.0353975 25.7678916,16.2066304 L25.7640625,16.5061728 L23.9078125,16.5061728 C23.9078125,9.1655585 29.8253489,3.21481481 37.125,3.21481481 Z M40.0950456,11.827716 L42.5767558,13.8973763 L40.1519406,15.741872 L40.13775,14.8098148 L33.0066409,14.8105441 L33.0066409,12.9438774 L40.11075,12.9438148 L40.0950456,11.827716 Z" id="形状结合" fill="#3284FF"></path>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</g>\n</svg>';
    class Udata extends CompNew {
        initCompDom() {
            var A, e;
            this.dom = document.createElement("div"),
            this.dom.setAttribute("style", "display:flex;justify-content:center;align-items:center;");
            const t = document.createElement("div");
            t.innerHTML = udataImg,
            null === (A = this.dom) || void 0 === A || A.appendChild(t),
            null === (e = this.el) || void 0 === e || e.appendChild(this.dom)
        }
    }
    const CompMap = {
        ctext: Text,
        clayout: Layer,
        ctextlist: TextList,
        ciframe: Iframe,
        ciframedpd: Iframe,
        cprogress: Progress,
        ctimecard: Timecard,
        echarts: Echarts,
        cblankcomponent: Blankcomponent,
        ccountdown: Countdown,
        ccountdown_v2: Countdownv2,
        cvideo: Video,
        udata: Udata
    };
    let isLoad = !1
      , isLoading = !1
      , cbList = [];
    const BaseAdapter = thingUiCanvas.adapterManager.getBaseAdapter();
    class UdatavAdapter extends BaseAdapter {
        constructor(A, e, t, n) {
            super(A, e, t, n),
            this.parent = t,
            this.config = n
        }
        static factory(A, e, t, n) {
            return new UdatavAdapter(A,e,t,n)
        }
        _initComponent() {
            var A;
            return __awaiter$1(this, void 0, void 0, (function*() {
                const e = null === (A = this.config) || void 0 === A ? void 0 : A.options.type
                  , t = CompMap[e];
                t ? isLoad ? this._render(t) : isLoading ? cbList.push((()=>{
                    this._render(t)
                }
                )) : (isLoading = !0,
                yield this.loadResource(),
                isLoad = !0,
                this._render(t),
                cbList.forEach((A=>{
                    A()
                }
                )),
                cbList = []) : (console.warn(`${e}：该类型暂时没有实现，请联系开发者！！！`),
                this.componentInstance = {
                    setOption() {},
                    setData() {},
                    resize() {}
                },
                this._componentComplete(),
                this.complete = !0)
            }
            ))
        }
        _render(A) {
            var e, t;
            null === (t = null === (e = this.parent) || void 0 === e ? void 0 : e.contentEl) || void 0 === t || t.appendChild(this.dom);
            try {
                this.componentInstance = new A(this.dom,this.config),
                this.componentInstance._initComponent(),
                this._componentComplete(),
                this.complete = !0
            } catch (A) {
                console.error(A)
            }
        }
        loadResource() {
            return __awaiter$1(this, void 0, void 0, (function*() {
                const A = ["jquery.min.js", "echarts410.js", "echarts-gl110.js", "echarts-liquidfill4echarts4.js"];
                for (const e of A)
                    yield loadScript(`${address}/s-static/lib/${e}`)
            }
            ))
        }
        setOption(A) {
            A && (this.config.opts = A,
            this.componentInstance.setOption(A))
        }
        setData(A) {
            this.config.data = A,
            this.componentInstance.setData(A)
        }
        _destroyComponent() {
            var A;
            this.componentInstance && this.componentInstance.destory(),
            this.config = null,
            this.dom && (null === (A = this.parent) || void 0 === A ? void 0 : A.contentEl) && this.parent.contentEl.removeChild(this.dom),
            this.parent.adapter = null,
            this.parent.previewModeLock = !0,
            this.parent = null
        }
    }
    class PreviewThingJSUI {
        constructor(A) {
            this.id = A.id,
            this.el = A.el,
            this.options = A,
            this.el.style.pointerEvents = "none",
            this.init()
        }
        waitForComplete() {
            return this.promise
        }
        getSceneData() {
            return __awaiter$1(this, void 0, void 0, (function*() {
                return requests("spray/scene/scene/getById", "post", this.id)
            }
            ))
        }
        loadSceneBundle(A="") {
            return __awaiter$1(this, void 0, void 0, (function*() {
                const {prefix: e, id: t} = this.options;
                return axios(`${e}/web/scene-data/${A || t + ".json"}`)
            }
            ))
        }
        loadCompBundle(A="") {
            return __awaiter$1(this, void 0, void 0, (function*() {
                const {prefix: e, id: t} = this.options
                  , n = yield axios(`${e}/package.json`)
                  , {width: s, height: i, bgColor: r} = JSON.parse(n.config);
                yield loadScript$1(A || `${t}.js`, `${e}/`);
                const o = document.createElement("div");
                o.setAttribute("style", `width:${s}px;height:${i}px;background:${r}`),
                this.el.appendChild(o);
                const a = new window.conch[`C${n.id}`](o,{
                    prefix: e
                },window.Vue);
                yield a.render(),
                this.ui = a,
                this.resolve && this.resolve(a)
            }
            ))
        }
        init() {
            return __awaiter$1(this, void 0, void 0, (function*() {
                this.promise = new Promise((A=>{
                    this.resolve = A
                }
                ));
                const {prefix: A, offline: e, baseUrl: t} = this.options;
                if (setAddress(t),
                !e) {
                    const e = yield this.getSceneData();
                    return void (200 === e.code ? yield this.parseScene(e.data, A) : console.warn(`获取定义文件失败,请查看${this.id}场景是否存在！`))
                }
                const n = yield axios(`${A}/bundle.json`);
                console.log('nnnnnnn',n)
                if ("chart" === n.type && (yield this.loadCompBundle(n.main)),
                "dashboard" === n.type) {
                    const e = yield this.loadSceneBundle(n.main);
                    yield this.parseScene(e, A)
                }
            }
            ))
        }
        parseScene(data, prefix) {
            var _a;
            return __awaiter$1(this, void 0, void 0, (function*() {
                const baseUrl = null !== (_a = this.options.baseUrl) && void 0 !== _a ? _a : "https://charts.thingjs.com";
                yield loadScript$1("vue.min.js", `${baseUrl}/s-static/external/`);
                const ui = new ThingJSUIPlugins(this.el || document.getElementById("div3d"),{},{
                    theme: {
                        ui: {
                            background: "rgba(0,0,0,0)"
                        }
                    }
                });
                if (!(null == data ? void 0 : data.def))
                    return !1;
                const newDef = ui.transfromDef(data, prefix);
                yield ui.loadBasJS(prefix),
                yield ui.loadCompJS(data, prefix),
                ThingJSUIPlugins.adapterManager.register("UdatavAdapter", UdatavAdapter),
                yield ui.parseJSON(newDef),
                ui.initData(data, {
                    prefix: prefix,
                    hide3D: !!this.options.hide3D
                }),
                (null == data ? void 0 : data.jsCode) && eval(data.jsCode),
                ui.playScene(),
                this.ui = ui,
                this.resolve && this.resolve(ui),
                this.options.complete && this.options.complete(ui)
            }
            ))
        }
    }
    return PreviewThingJSUI.Utils = {
        loadbundle: (A,{container: e, id: t, hide3D: n})=>new PreviewThingJSUI({
            prefix: A,
            el: e,
            id: t,
            offline: !0,
            hide3D: n
        })
    },
    window.THING || (window.THING = {}),
    window.THING.CHARTS = PreviewThingJSUI,
    PreviewThingJSUI
}
));
