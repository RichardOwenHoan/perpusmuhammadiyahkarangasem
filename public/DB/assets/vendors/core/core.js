/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        x = function (e) {
            return null != e && e === e.window;
        },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");
        if (((o.text = e), t))
            for (r in c)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? n[o.call(e)] || "object"
            : typeof e;
    }
    var f = "3.5.1",
        S = function (e, t) {
            return new S.fn.init(e, t);
        };
    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return (
            !m(e) &&
            !x(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (S.fn = S.prototype =
        {
            jquery: f,
            constructor: S,
            length: 0,
            toArray: function () {
                return s.call(this);
            },
            get: function (e) {
                return null == e
                    ? s.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return S.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    S.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: u,
            sort: t.sort,
            splice: t.splice,
        }),
        (S.extend = S.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof a &&
                        ((l = a), (a = arguments[s] || {}), s++),
                        "object" == typeof a || m(a) || (a = {}),
                        s === u && ((a = this), s--);
                    s < u;
                    s++
                )
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (r = e[t]),
                                "__proto__" !== t &&
                                    a !== r &&
                                    (l &&
                                    r &&
                                    (S.isPlainObject(r) ||
                                        (i = Array.isArray(r)))
                                        ? ((n = a[t]),
                                          (o =
                                              i && !Array.isArray(n)
                                                  ? []
                                                  : i || S.isPlainObject(n)
                                                  ? n
                                                  : {}),
                                          (i = !1),
                                          (a[t] = S.extend(l, o, r)))
                                        : void 0 !== r && (a[t] = r));
                return a;
            }),
        S.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return (
                    !(!e || "[object Object]" !== o.call(e)) &&
                    (!(t = r(e)) ||
                        ("function" ==
                            typeof (n =
                                v.call(t, "constructor") && t.constructor) &&
                            a.call(n) === l))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (p(Object(e))
                            ? S.merge(n, "string" == typeof e ? [e] : e)
                            : u.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol &&
            (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var d = (function (n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            S = "sizzle" + 1 * new Date(),
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function (e, t) {
                return e === t && (l = !0), 0;
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                M +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W =
                "\\[" +
                M +
                "*(" +
                I +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                M +
                "*\\]",
            F =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp(
                "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
                "g"
            ),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        M +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        M +
                        "*(?:([+-]|)" +
                        M +
                        "*(\\d+)|))" +
                        M +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        M +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        M +
                        "*((?:-\\d)?\\d*)" +
                        M +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
                "g"
            ),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                    t ||
                    (n < 0
                        ? String.fromCharCode(n + 65536)
                        : String.fromCharCode(
                              (n >> 10) | 55296,
                              (1023 & n) | 56320
                          ))
                );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t
                    ? "\0" === e
                        ? "\ufffd"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                    : "\\" + e;
            },
            oe = function () {
                T();
            },
            ae = be(
                function (e) {
                    return (
                        !0 === e.disabled &&
                        "fieldset" === e.nodeName.toLowerCase()
                    );
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            H.apply((t = O.call(p.childNodes)), p.childNodes),
                t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length
                    ? function (e, t) {
                          L.apply(e, O.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (
                ((n = n || []),
                "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
            )
                return n;
            if (!r && (T(e), (e = e || C), E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (
                            f &&
                            (a = f.getElementById(i)) &&
                            y(e, a) &&
                            a.id === i
                        )
                            return n.push(a), n;
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)), n;
                        if (
                            (i = u[3]) &&
                            d.getElementsByClassName &&
                            e.getElementsByClassName
                        )
                            return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (
                    d.qsa &&
                    !N[t + " "] &&
                    (!v || !v.test(t)) &&
                    (1 !== p || "object" !== e.nodeName.toLowerCase())
                ) {
                    if (
                        ((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))
                    ) {
                        ((f = (ee.test(t) && ye(e.parentNode)) || e) === e &&
                            d.scope) ||
                            ((s = e.getAttribute("id"))
                                ? (s = s.replace(re, ie))
                                : e.setAttribute("id", (s = S))),
                            (o = (l = h(t)).length);
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return (
                    r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    (e[t + " "] = n)
                );
            };
        }
        function le(e) {
            return (e[S] = !0), e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t ||
                              (e.isDisabled !== !t && ae(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function (o) {
                return (
                    (o = +o),
                    le(function (e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
        (i = se.isXML =
            function (e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
            }),
        (T = se.setDocument =
            function (e) {
                var t,
                    n,
                    r = e ? e.ownerDocument || e : p;
                return (
                    r != C &&
                        9 === r.nodeType &&
                        r.documentElement &&
                        ((a = (C = r).documentElement),
                        (E = !i(C)),
                        p != C &&
                            (n = C.defaultView) &&
                            n.top !== n &&
                            (n.addEventListener
                                ? n.addEventListener("unload", oe, !1)
                                : n.attachEvent &&
                                  n.attachEvent("onunload", oe)),
                        (d.scope = ce(function (e) {
                            return (
                                a
                                    .appendChild(e)
                                    .appendChild(C.createElement("div")),
                                "undefined" != typeof e.querySelectorAll &&
                                    !e.querySelectorAll(":scope fieldset div")
                                        .length
                            );
                        })),
                        (d.attributes = ce(function (e) {
                            return (
                                (e.className = "i"),
                                !e.getAttribute("className")
                            );
                        })),
                        (d.getElementsByTagName = ce(function (e) {
                            return (
                                e.appendChild(C.createComment("")),
                                !e.getElementsByTagName("*").length
                            );
                        })),
                        (d.getElementsByClassName = K.test(
                            C.getElementsByClassName
                        )),
                        (d.getById = ce(function (e) {
                            return (
                                (a.appendChild(e).id = S),
                                !C.getElementsByName ||
                                    !C.getElementsByName(S).length
                            );
                        })),
                        d.getById
                            ? ((b.filter.ID = function (e) {
                                  var t = e.replace(te, ne);
                                  return function (e) {
                                      return e.getAttribute("id") === t;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (
                                      "undefined" != typeof t.getElementById &&
                                      E
                                  ) {
                                      var n = t.getElementById(e);
                                      return n ? [n] : [];
                                  }
                              }))
                            : ((b.filter.ID = function (e) {
                                  var n = e.replace(te, ne);
                                  return function (e) {
                                      var t =
                                          "undefined" !=
                                              typeof e.getAttributeNode &&
                                          e.getAttributeNode("id");
                                      return t && t.value === n;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (
                                      "undefined" != typeof t.getElementById &&
                                      E
                                  ) {
                                      var n,
                                          r,
                                          i,
                                          o = t.getElementById(e);
                                      if (o) {
                                          if (
                                              (n = o.getAttributeNode("id")) &&
                                              n.value === e
                                          )
                                              return [o];
                                          (i = t.getElementsByName(e)), (r = 0);
                                          while ((o = i[r++]))
                                              if (
                                                  (n =
                                                      o.getAttributeNode(
                                                          "id"
                                                      )) &&
                                                  n.value === e
                                              )
                                                  return [o];
                                      }
                                      return [];
                                  }
                              })),
                        (b.find.TAG = d.getElementsByTagName
                            ? function (e, t) {
                                  return "undefined" !=
                                      typeof t.getElementsByTagName
                                      ? t.getElementsByTagName(e)
                                      : d.qsa
                                      ? t.querySelectorAll(e)
                                      : void 0;
                              }
                            : function (e, t) {
                                  var n,
                                      r = [],
                                      i = 0,
                                      o = t.getElementsByTagName(e);
                                  if ("*" === e) {
                                      while ((n = o[i++]))
                                          1 === n.nodeType && r.push(n);
                                      return r;
                                  }
                                  return o;
                              }),
                        (b.find.CLASS =
                            d.getElementsByClassName &&
                            function (e, t) {
                                if (
                                    "undefined" !=
                                        typeof t.getElementsByClassName &&
                                    E
                                )
                                    return t.getElementsByClassName(e);
                            }),
                        (s = []),
                        (v = []),
                        (d.qsa = K.test(C.querySelectorAll)) &&
                            (ce(function (e) {
                                var t;
                                (a.appendChild(e).innerHTML =
                                    "<a id='" +
                                    S +
                                    "'></a><select id='" +
                                    S +
                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']")
                                        .length &&
                                        v.push("[*^$]=" + M + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length ||
                                        v.push(
                                            "\\[" + M + "*(?:value|" + R + ")"
                                        ),
                                    e.querySelectorAll("[id~=" + S + "-]")
                                        .length || v.push("~="),
                                    (t = C.createElement("input")).setAttribute(
                                        "name",
                                        ""
                                    ),
                                    e.appendChild(t),
                                    e.querySelectorAll("[name='']").length ||
                                        v.push(
                                            "\\[" +
                                                M +
                                                "*name" +
                                                M +
                                                "*=" +
                                                M +
                                                "*(?:''|\"\")"
                                        ),
                                    e.querySelectorAll(":checked").length ||
                                        v.push(":checked"),
                                    e.querySelectorAll("a#" + S + "+*")
                                        .length || v.push(".#.+[+~]"),
                                    e.querySelectorAll("\\\f"),
                                    v.push("[\\r\\n\\f]");
                            }),
                            ce(function (e) {
                                e.innerHTML =
                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = C.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length &&
                                        v.push("name" + M + "*[*^$|!~]?="),
                                    2 !==
                                        e.querySelectorAll(":enabled").length &&
                                        v.push(":enabled", ":disabled"),
                                    (a.appendChild(e).disabled = !0),
                                    2 !==
                                        e.querySelectorAll(":disabled")
                                            .length &&
                                        v.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    v.push(",.*:");
                            })),
                        (d.matchesSelector = K.test(
                            (c =
                                a.matches ||
                                a.webkitMatchesSelector ||
                                a.mozMatchesSelector ||
                                a.oMatchesSelector ||
                                a.msMatchesSelector)
                        )) &&
                            ce(function (e) {
                                (d.disconnectedMatch = c.call(e, "*")),
                                    c.call(e, "[s!='']:x"),
                                    s.push("!=", F);
                            }),
                        (v = v.length && new RegExp(v.join("|"))),
                        (s = s.length && new RegExp(s.join("|"))),
                        (t = K.test(a.compareDocumentPosition)),
                        (y =
                            t || K.test(a.contains)
                                ? function (e, t) {
                                      var n =
                                              9 === e.nodeType
                                                  ? e.documentElement
                                                  : e,
                                          r = t && t.parentNode;
                                      return (
                                          e === r ||
                                          !(
                                              !r ||
                                              1 !== r.nodeType ||
                                              !(n.contains
                                                  ? n.contains(r)
                                                  : e.compareDocumentPosition &&
                                                    16 &
                                                        e.compareDocumentPosition(
                                                            r
                                                        ))
                                          )
                                      );
                                  }
                                : function (e, t) {
                                      if (t)
                                          while ((t = t.parentNode))
                                              if (t === e) return !0;
                                      return !1;
                                  }),
                        (D = t
                            ? function (e, t) {
                                  if (e === t) return (l = !0), 0;
                                  var n =
                                      !e.compareDocumentPosition -
                                      !t.compareDocumentPosition;
                                  return (
                                      n ||
                                      (1 &
                                          (n =
                                              (e.ownerDocument || e) ==
                                              (t.ownerDocument || t)
                                                  ? e.compareDocumentPosition(t)
                                                  : 1) ||
                                      (!d.sortDetached &&
                                          t.compareDocumentPosition(e) === n)
                                          ? e == C ||
                                            (e.ownerDocument == p && y(p, e))
                                              ? -1
                                              : t == C ||
                                                (t.ownerDocument == p &&
                                                    y(p, t))
                                              ? 1
                                              : u
                                              ? P(u, e) - P(u, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1)
                                  );
                              }
                            : function (e, t) {
                                  if (e === t) return (l = !0), 0;
                                  var n,
                                      r = 0,
                                      i = e.parentNode,
                                      o = t.parentNode,
                                      a = [e],
                                      s = [t];
                                  if (!i || !o)
                                      return e == C
                                          ? -1
                                          : t == C
                                          ? 1
                                          : i
                                          ? -1
                                          : o
                                          ? 1
                                          : u
                                          ? P(u, e) - P(u, t)
                                          : 0;
                                  if (i === o) return pe(e, t);
                                  n = e;
                                  while ((n = n.parentNode)) a.unshift(n);
                                  n = t;
                                  while ((n = n.parentNode)) s.unshift(n);
                                  while (a[r] === s[r]) r++;
                                  return r
                                      ? pe(a[r], s[r])
                                      : a[r] == p
                                      ? -1
                                      : s[r] == p
                                      ? 1
                                      : 0;
                              })),
                    C
                );
            }),
        (se.matches = function (e, t) {
            return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
            if (
                (T(e),
                d.matchesSelector &&
                    E &&
                    !N[t + " "] &&
                    (!s || !s.test(t)) &&
                    (!v || !v.test(t)))
            )
                try {
                    var n = c.call(e, t);
                    if (
                        n ||
                        d.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                    )
                        return n;
                } catch (e) {
                    N(t, !0);
                }
            return 0 < se(t, C, null, [e]).length;
        }),
        (se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t);
        }),
        (se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r =
                    n && j.call(b.attrHandle, t.toLowerCase())
                        ? n(e, t, !E)
                        : void 0;
            return void 0 !== r
                ? r
                : d.attributes || !E
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
        (se.escape = function (e) {
            return (e + "").replace(re, ie);
        }),
        (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (se.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (
                ((l = !d.detectDuplicates),
                (u = !d.sortStable && e.slice(0)),
                e.sort(D),
                l)
            ) {
                while ((t = e[i++])) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return (u = null), e;
        }),
        (o = se.getText =
            function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else while ((t = e[r++])) n += o(t);
                return n;
            }),
        ((b = se.selectors =
            {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(te, ne)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                te,
                                ne
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || se.error(e[0]),
                                  (e[4] = +(e[4]
                                      ? e[5] + (e[6] || 1)
                                      : 2 *
                                        ("even" === e[3] || "odd" === e[3]))),
                                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && se.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return G.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                  ? (e[2] = e[4] || e[5] || "")
                                  : n &&
                                    X.test(n) &&
                                    (t = h(n, !0)) &&
                                    (t =
                                        n.indexOf(")", n.length - t) -
                                        n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                    (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return (
                                      e.nodeName &&
                                      e.nodeName.toLowerCase() === t
                                  );
                              };
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return (
                            t ||
                            ((t = new RegExp(
                                "(^|" + M + ")" + e + "(" + M + "|$)"
                            )) &&
                                m(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className &&
                                            e.className) ||
                                            ("undefined" !=
                                                typeof e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t
                                ? "!=" === r
                                : !r ||
                                      ((t += ""),
                                      "=" === r
                                          ? t === i
                                          : "!=" === r
                                          ? t !== i
                                          : "^=" === r
                                          ? i && 0 === t.indexOf(i)
                                          : "*=" === r
                                          ? i && -1 < t.indexOf(i)
                                          : "$=" === r
                                          ? i && t.slice(-i.length) === i
                                          : "~=" === r
                                          ? -1 <
                                            (
                                                " " +
                                                t.replace(B, " ") +
                                                " "
                                            ).indexOf(i)
                                          : "|=" === r &&
                                            (t === i ||
                                                t.slice(0, i.length + 1) ===
                                                    i + "-"));
                        };
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (e, t, n) {
                                  var r,
                                      i,
                                      o,
                                      a,
                                      s,
                                      u,
                                      l =
                                          y !== m
                                              ? "nextSibling"
                                              : "previousSibling",
                                      c = e.parentNode,
                                      f = x && e.nodeName.toLowerCase(),
                                      p = !n && !x,
                                      d = !1;
                                  if (c) {
                                      if (y) {
                                          while (l) {
                                              a = e;
                                              while ((a = a[l]))
                                                  if (
                                                      x
                                                          ? a.nodeName.toLowerCase() ===
                                                            f
                                                          : 1 === a.nodeType
                                                  )
                                                      return !1;
                                              u = l =
                                                  "only" === h &&
                                                  !u &&
                                                  "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((u = [
                                              m ? c.firstChild : c.lastChild,
                                          ]),
                                          m && p)
                                      ) {
                                          (d =
                                              (s =
                                                  (r =
                                                      (i =
                                                          (o =
                                                              (a = c)[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] || [])[0] === k &&
                                                  r[1]) && r[2]),
                                              (a = s && c.childNodes[s]);
                                          while (
                                              (a =
                                                  (++s && a && a[l]) ||
                                                  (d = s = 0) ||
                                                  u.pop())
                                          )
                                              if (
                                                  1 === a.nodeType &&
                                                  ++d &&
                                                  a === e
                                              ) {
                                                  i[h] = [k, s, d];
                                                  break;
                                              }
                                      } else if (
                                          (p &&
                                              (d = s =
                                                  (r =
                                                      (i =
                                                          (o =
                                                              (a = e)[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] || [])[0] === k &&
                                                  r[1]),
                                          !1 === d)
                                      )
                                          while (
                                              (a =
                                                  (++s && a && a[l]) ||
                                                  (d = s = 0) ||
                                                  u.pop())
                                          )
                                              if (
                                                  (x
                                                      ? a.nodeName.toLowerCase() ===
                                                        f
                                                      : 1 === a.nodeType) &&
                                                  ++d &&
                                                  (p &&
                                                      ((i =
                                                          (o =
                                                              a[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] = [k, d]),
                                                  a === e)
                                              )
                                                  break;
                                      return (
                                          (d -= v) === g ||
                                          (d % g == 0 && 0 <= d / g)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function (e, o) {
                        var t,
                            a =
                                b.pseudos[e] ||
                                b.setFilters[e.toLowerCase()] ||
                                se.error("unsupported pseudo: " + e);
                        return a[S]
                            ? a(o)
                            : 1 < a.length
                            ? ((t = [e, e, "", o]),
                              b.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? le(function (e, t) {
                                        var n,
                                            r = a(e, o),
                                            i = r.length;
                                        while (i--)
                                            e[(n = P(e, r[i]))] = !(t[n] =
                                                r[i]);
                                    })
                                  : function (e) {
                                        return a(e, 0, t);
                                    })
                            : a;
                    },
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S]
                            ? le(function (e, t, n, r) {
                                  var i,
                                      o = s(e, null, r, []),
                                      a = e.length;
                                  while (a--)
                                      (i = o[a]) && (e[a] = !(t[a] = i));
                              })
                            : function (e, t, n) {
                                  return (
                                      (r[0] = e),
                                      s(r, null, n, i),
                                      (r[0] = null),
                                      !i.pop()
                                  );
                              };
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length;
                        };
                    }),
                    contains: le(function (t) {
                        return (
                            (t = t.replace(te, ne)),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t);
                            }
                        );
                    }),
                    lang: le(function (n) {
                        return (
                            V.test(n || "") ||
                                se.error("unsupported lang: " + n),
                            (n = n.replace(te, ne).toLowerCase()),
                            function (e) {
                                var t;
                                do {
                                    if (
                                        (t = E
                                            ? e.lang
                                            : e.getAttribute("xml:lang") ||
                                              e.getAttribute("lang"))
                                    )
                                        return (
                                            (t = t.toLowerCase()) === n ||
                                            0 === t.indexOf(n + "-")
                                        );
                                } while (
                                    (e = e.parentNode) &&
                                    1 === e.nodeType
                                );
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                        return e === a;
                    },
                    focus: function (e) {
                        return (
                            e === C.activeElement &&
                            (!C.hasFocus || C.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e);
                    },
                    header: function (e) {
                        return J.test(e.nodeName);
                    },
                    input: function (e) {
                        return Q.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                        );
                    },
                    text: function (e) {
                        var t;
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: ve(function () {
                        return [0];
                    }),
                    last: ve(function (e, t) {
                        return [t - 1];
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                            e.push(r);
                        return e;
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = b.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first
                ? function (e, t, n) {
                      while ((e = e[u]))
                          if (1 === e.nodeType || f) return s(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o,
                          a = [k, p];
                      if (n) {
                          while ((e = e[u]))
                              if ((1 === e.nodeType || f) && s(e, t, n))
                                  return !0;
                      } else
                          while ((e = e[u]))
                              if (1 === e.nodeType || f)
                                  if (
                                      ((i =
                                          (o = e[S] || (e[S] = {}))[
                                              e.uniqueID
                                          ] || (o[e.uniqueID] = {})),
                                      l && l === e.nodeName.toLowerCase())
                                  )
                                      e = e[u] || e;
                                  else {
                                      if (
                                          (r = i[c]) &&
                                          r[0] === k &&
                                          r[1] === p
                                      )
                                          return (a[2] = r[2]);
                                      if (((i[c] = a)[2] = s(e, t, n)))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function we(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      var r = i.length;
                      while (r--) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) &&
                    ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e) {
            return (
                v && !v[S] && (v = Ce(v)),
                y && !y[S] && (y = Ce(y, e)),
                le(function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                            e ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    se(e, t[r], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                        p = g ? (y || (e ? d : l || v) ? [] : t) : f;
                    if ((g && g(f, p, n, r), v)) {
                        (i = Te(p, u)), v(i, [], n, r), (o = i.length);
                        while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                (i = []), (o = p.length);
                                while (o--) (a = p[o]) && i.push((f[o] = a));
                                y(null, (p = []), i, r);
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) &&
                                    -1 < (i = y ? P(e, a) : s[o]) &&
                                    (e[i] = !(t[i] = a));
                        }
                    } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
                })
            );
        }
        function Ee(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = be(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = be(
                        function (e) {
                            return -1 < P(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r =
                                (!o && (n || t !== w)) ||
                                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if (
                        (t = b.filter[e[s].type].apply(null, e[s].matches))[S]
                    ) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(
                            1 < s && we(c),
                            1 < s &&
                                xe(
                                    e
                                        .slice(0, s - 1)
                                        .concat({
                                            value:
                                                " " === e[s - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                ).replace($, "$1"),
                            t,
                            s < n && Ee(e.slice(s, n)),
                            n < r && Ee((e = e.slice(n))),
                            n < r && xe(e)
                        );
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (h = se.tokenize =
                function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = x[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    (a = e), (s = []), (u = b.preFilter);
                    while (a) {
                        for (o in ((n && !(r = _.exec(a))) ||
                            (r && (a = a.slice(r[0].length) || a),
                            s.push((i = []))),
                        (n = !1),
                        (r = z.exec(a)) &&
                            ((n = r.shift()),
                            i.push({ value: n, type: r[0].replace($, " ") }),
                            (a = a.slice(n.length))),
                        b.filter))
                            !(r = G[o].exec(a)) ||
                                (u[o] && !(r = u[o](r))) ||
                                ((n = r.shift()),
                                i.push({ value: n, type: o, matches: r }),
                                (a = a.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
                }),
            (f = se.compile =
                function (e, t) {
                    var n,
                        v,
                        y,
                        m,
                        x,
                        r,
                        i = [],
                        o = [],
                        a = A[e + " "];
                    if (!a) {
                        t || (t = h(e)), (n = t.length);
                        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                        (a = A(
                            e,
                            ((v = o),
                            (m = 0 < (y = i).length),
                            (x = 0 < v.length),
                            (r = function (e, t, n, r, i) {
                                var o,
                                    a,
                                    s,
                                    u = 0,
                                    l = "0",
                                    c = e && [],
                                    f = [],
                                    p = w,
                                    d = e || (x && b.find.TAG("*", i)),
                                    h = (k +=
                                        null == p ? 1 : Math.random() || 0.1),
                                    g = d.length;
                                for (
                                    i && (w = t == C || t || i);
                                    l !== g && null != (o = d[l]);
                                    l++
                                ) {
                                    if (x && o) {
                                        (a = 0),
                                            t ||
                                                o.ownerDocument == C ||
                                                (T(o), (n = !E));
                                        while ((s = v[a++]))
                                            if (s(o, t || C, n)) {
                                                r.push(o);
                                                break;
                                            }
                                        i && (k = h);
                                    }
                                    m && ((o = !s && o) && u--, e && c.push(o));
                                }
                                if (((u += l), m && l !== u)) {
                                    a = 0;
                                    while ((s = y[a++])) s(c, f, t, n);
                                    if (e) {
                                        if (0 < u)
                                            while (l--)
                                                c[l] ||
                                                    f[l] ||
                                                    (f[l] = q.call(r));
                                        f = Te(f);
                                    }
                                    H.apply(r, f),
                                        i &&
                                            !e &&
                                            0 < f.length &&
                                            1 < u + y.length &&
                                            se.uniqueSort(r);
                                }
                                return i && ((k = h), (w = p)), c;
                            }),
                            m ? le(r) : r)
                        )).selector = e;
                    }
                    return a;
                }),
            (g = se.select =
                function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = "function" == typeof e && e,
                        c = !r && h((e = l.selector || e));
                    if (((n = n || []), 1 === c.length)) {
                        if (
                            2 < (o = c[0] = c[0].slice(0)).length &&
                            "ID" === (a = o[0]).type &&
                            9 === t.nodeType &&
                            E &&
                            b.relative[o[1].type]
                        ) {
                            if (
                                !(t = (b.find.ID(
                                    a.matches[0].replace(te, ne),
                                    t
                                ) || [])[0])
                            )
                                return n;
                            l && (t = t.parentNode),
                                (e = e.slice(o.shift().value.length));
                        }
                        i = G.needsContext.test(e) ? 0 : o.length;
                        while (i--) {
                            if (((a = o[i]), b.relative[(s = a.type)])) break;
                            if (
                                (u = b.find[s]) &&
                                (r = u(
                                    a.matches[0].replace(te, ne),
                                    (ee.test(o[0].type) && ye(t.parentNode)) ||
                                        t
                                ))
                            ) {
                                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                                    return H.apply(n, r), n;
                                break;
                            }
                        }
                    }
                    return (
                        (l || f(e, c))(
                            r,
                            t,
                            !E,
                            n,
                            !t || (ee.test(e) && ye(t.parentNode)) || t
                        ),
                        n
                    );
                }),
            (d.sortStable = S.split("").sort(D).join("") === S),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function (e) {
                return (
                    1 & e.compareDocumentPosition(C.createElement("fieldset"))
                );
            })),
            ce(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
                fe("type|href|height|width", function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            "type" === t.toLowerCase() ? 1 : 2
                        );
                }),
            (d.attributes &&
                ce(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
                fe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            ce(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                fe(R, function (e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
                }),
            se
        );
    })(C);
    (S.find = d),
        (S.expr = d.selectors),
        (S.expr[":"] = S.expr.pseudos),
        (S.uniqueSort = S.unique = d.uniqueSort),
        (S.text = d.getText),
        (S.isXMLDoc = d.isXML),
        (S.contains = d.contains),
        (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n)
            ? S.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? S.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? S.grep(e, function (e) {
                  return -1 < i.call(n, e) !== r;
              })
            : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : S.find.matches(
                      e,
                      S.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        S.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        S(e).filter(function () {
                            for (t = 0; t < r; t++)
                                if (S.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                    S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(D(this, e || [], !0));
            },
            is: function (e) {
                return !!D(
                    this,
                    "string" == typeof e && k.test(e) ? S(e) : e || [],
                    !1
                ).length;
            },
        });
    var j,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || j), "string" == typeof e)) {
            if (
                !(r =
                    "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                        ? [null, e, null]
                        : q.exec(e)) ||
                (!r[1] && t)
            )
                return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
            if (r[1]) {
                if (
                    ((t = t instanceof S ? t[0] : t),
                    S.merge(
                        this,
                        S.parseHTML(
                            r[1],
                            t && t.nodeType ? t.ownerDocument || t : E,
                            !0
                        )
                    ),
                    N.test(r[1]) && S.isPlainObject(t))
                )
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (
                (i = E.getElementById(r[2])) &&
                    ((this[0] = i), (this.length = 1)),
                this
            );
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
            : S.makeArray(e, this);
    }).prototype = S.fn),
        (j = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? -1 < a.index(n)
                                : 1 === n.nodeType &&
                                  S.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? i.call(S(e), this[0])
                    : i.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        S.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return h(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return h(e, "parentNode", n);
                },
                next: function (e) {
                    return O(e, "nextSibling");
                },
                prev: function (e) {
                    return O(e, "previousSibling");
                },
                nextAll: function (e) {
                    return h(e, "nextSibling");
                },
                prevAll: function (e) {
                    return h(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return h(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return h(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument)
                        ? e.contentDocument
                        : (A(e, "template") && (e = e.content || e),
                          S.merge([], e.childNodes));
                },
            },
            function (r, i) {
                S.fn[r] = function (e, t) {
                    var n = S.map(this, i, e);
                    return (
                        "Until" !== r.slice(-5) && (t = e),
                        t && "string" == typeof t && (n = S.filter(t, n)),
                        1 < this.length &&
                            (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && m((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  S.each(e.match(P) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : S.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length)
                        !1 === s[l].apply(t[0], t[1]) &&
                            r.stopOnFalse &&
                            ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                S.each(e, function (e, t) {
                                    m(t)
                                        ? (r.unique && f.has(t)) || s.push(t)
                                        : t &&
                                          t.length &&
                                          "string" !== w(t) &&
                                          n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (e, t) {
                            var n;
                            while (-1 < (n = S.inArray(t, s, n)))
                                s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return (
                        a ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            u.push(t),
                            i || c()),
                        this
                    );
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        S.extend({
            Deferred: function (e) {
                var o = [
                        [
                            "notify",
                            "progress",
                            S.Callbacks("memory"),
                            S.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return S.Deferred(function (r) {
                                S.each(o, function (e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(r.notify)
                                                  .done(r.resolve)
                                                  .fail(r.reject)
                                            : r[t[0] + "With"](
                                                  this,
                                                  n ? [e] : arguments
                                              );
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if (
                                                    (e = a.apply(n, r)) ===
                                                    o.promise()
                                                )
                                                    throw new TypeError(
                                                        "Thenable self-resolution"
                                                    );
                                                (t =
                                                    e &&
                                                    ("object" == typeof e ||
                                                        "function" ==
                                                            typeof e) &&
                                                    e.then),
                                                    m(t)
                                                        ? s
                                                            ? t.call(
                                                                  e,
                                                                  l(u, o, R, s),
                                                                  l(u, o, M, s)
                                                              )
                                                            : (u++,
                                                              t.call(
                                                                  e,
                                                                  l(u, o, R, s),
                                                                  l(u, o, M, s),
                                                                  l(
                                                                      u,
                                                                      o,
                                                                      R,
                                                                      o.notifyWith
                                                                  )
                                                              ))
                                                        : (a !== R &&
                                                              ((n = void 0),
                                                              (r = [e])),
                                                          (s || o.resolveWith)(
                                                              n,
                                                              r
                                                          ));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      S.Deferred
                                                          .exceptionHook &&
                                                          S.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          u <= i + 1 &&
                                                              (a !== M &&
                                                                  ((n = void 0),
                                                                  (r = [e])),
                                                              o.rejectWith(
                                                                  n,
                                                                  r
                                                              ));
                                                  }
                                              };
                                    i
                                        ? t()
                                        : (S.Deferred.getStackHook &&
                                              (t.stackTrace =
                                                  S.Deferred.getStackHook()),
                                          C.setTimeout(t));
                                };
                            }
                            return S.Deferred(function (e) {
                                o[0][3].add(
                                    l(0, e, m(r) ? r : R, e.notifyWith)
                                ),
                                    o[1][3].add(l(0, e, m(t) ? t : R)),
                                    o[2][3].add(l(0, e, m(n) ? n : M));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    S.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return (
                                    s[t[0] + "With"](
                                        this === s ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = S.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this),
                                (i[t] =
                                    1 < arguments.length
                                        ? s.call(arguments)
                                        : e),
                                --n || o.resolveWith(r, i);
                        };
                    };
                if (
                    n <= 1 &&
                    (I(e, o.done(a(t)).resolve, o.reject, !n),
                    "pending" === o.state() || m(i[t] && i[t].then))
                )
                    return o.then();
                while (t--) I(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
        C.console &&
            C.console.warn &&
            e &&
            W.test(e.name) &&
            C.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
            );
    }),
        (S.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
            C.removeEventListener("load", B),
            S.ready();
    }
    (S.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                S.readyException(e);
            }),
            this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                    ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
                    F.resolveWith(E, [S]);
            },
        }),
        (S.ready.then = F.then),
        "complete" === E.readyState ||
        ("loading" !== E.readyState && !E.documentElement.doScroll)
            ? C.setTimeout(S.ready)
            : (E.addEventListener("DOMContentLoaded", B),
              C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(S(e), n);
                          }))),
                t)
            )
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
        this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        V(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(X)
                            : (t = X(t)) in r
                            ? [t]
                            : t.match(P) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || S.isEmptyObject(r)) &&
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
            },
        });
    var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n =
                        "true" === (i = n) ||
                        ("false" !== i &&
                            ("null" === i
                                ? null
                                : i === +i + ""
                                ? +i
                                : J.test(i)
                                ? JSON.parse(i)
                                : i));
                } catch (e) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
            Y.remove(e, t);
        },
    }),
        S.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (
                        this.length &&
                        ((i = Q.get(o)),
                        1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
                    ) {
                        t = a.length;
                        while (t--)
                            a[t] &&
                                0 === (r = a[t].name).indexOf("data-") &&
                                ((r = X(r.slice(5))), Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n
                    ? this.each(function () {
                          Q.set(this, n);
                      })
                    : $(
                          this,
                          function (e) {
                              var t;
                              if (o && void 0 === e)
                                  return void 0 !== (t = Q.get(o, n))
                                      ? t
                                      : void 0 !== (t = Z(o, n))
                                      ? t
                                      : void 0;
                              this.each(function () {
                                  Q.set(this, n, e);
                              });
                          },
                          null,
                          e,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            },
        }),
        S.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                        (r = Y.get(e, t)),
                        n &&
                            (!r || Array.isArray(n)
                                ? (r = Y.access(e, t, S.makeArray(n)))
                                : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = S._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                S.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: S.Callbacks("once memory").add(function () {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? S.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = S.queue(this, t, n);
                              S._queueHooks(this, t),
                                  "fx" === t &&
                                      "inprogress" !== e[0] &&
                                      S.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)),
                    (e = e || "fx");
                while (a--)
                    (n = Y.get(o[a], e + "queueHooks")) &&
                        n.empty &&
                        (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    re.getRootNode &&
        (ie = function (e) {
            return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
            );
        });
    var ae = function (e, t) {
        return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
        );
    };
    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return S.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== l && +u)) &&
                te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
                S.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
        }
        return (
            n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n &&
                          ((l[c] = Y.get(r, "display") || null),
                          l[c] || (r.style.display = "")),
                      "" === r.style.display &&
                          ae(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = ue[s]) ||
                                  ((o = a.body.appendChild(a.createElement(s))),
                                  (u = S.css(o, "display")),
                                  o.parentNode.removeChild(o),
                                  "none" === u && (u = "block"),
                                  (ue[s] = u)))))
                    : "none" !== n &&
                      ((l[c] = "none"), Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function () {
            return le(this, !0);
        },
        hide: function () {
            return le(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? S(this).show() : S(this).hide();
                  });
        },
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
        (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (y.option = !!ce.lastChild);
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
    };
    function ve(e, t) {
        var n;
        return (
            (n =
                "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : "undefined" != typeof e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
            void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
        );
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td),
        y.option ||
            (ge.optgroup = ge.option =
                [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (
            var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            d < h;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))),
                        (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
                        (u = ge[s] || ge._default),
                        (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
                        (c = u[0]);
                    while (c--) a = a.lastChild;
                    S.merge(p, a.childNodes),
                        ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (
                ((l = ie(o)),
                (a = ve(f.appendChild(o), "script")),
                l && ye(a),
                n)
            ) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0;
    }
    function Ee() {
        return !1;
    }
    function Se(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
                ke(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = Ee;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
                S.event.add(this, t, i, r, n);
            })
        );
    }
    function Ae(e, i, o) {
        o
            ? (Y.set(e, i, !1),
              S.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = Y.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length)
                              (S.event.special[i] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((r = s.call(arguments)),
                              Y.set(this, i, r),
                              (t = o(this, i)),
                              this[i](),
                              r !== (n = Y.get(this, i)) || t
                                  ? Y.set(this, i, !1)
                                  : (n = {}),
                              r !== n)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  n.value
                              );
                      } else
                          r.length &&
                              (Y.set(this, i, {
                                  value: S.event.trigger(
                                      S.extend(r[0], S.Event.prototype),
                                      r.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
    }
    (S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(t);
            if (V(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && S.find.matchesSelector(re, i),
                    n.guid || (n.guid = S.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                        (a = v.handle =
                            function (e) {
                                return "undefined" != typeof S &&
                                    S.event.triggered !== e.type
                                    ? S.event.dispatch.apply(t, arguments)
                                    : void 0;
                            }),
                    (l = (e = (e || "").match(P) || [""]).length);
                while (l--)
                    (d = g = (s = Te.exec(e[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = S.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = S.event.special[d] || {}),
                            (c = S.extend(
                                {
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext:
                                        i && S.expr.match.needsContext.test(i),
                                    namespace: h.join("."),
                                },
                                o
                            )),
                            (p = u[d]) ||
                                (((p = u[d] = []).delegateCount = 0),
                                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                                    (t.addEventListener &&
                                        t.addEventListener(d, a))),
                            f.add &&
                                (f.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (S.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (
                        ((d = g = (s = Te.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d)
                    ) {
                        (f = S.event.special[d] || {}),
                            (p =
                                u[
                                    (d = (r ? f.delegateType : f.bindType) || d)
                                ] || []),
                            (s =
                                s[2] &&
                                new RegExp(
                                    "(^|\\.)" +
                                        h.join("\\.(?:.*\\.|)") +
                                        "(\\.|$)"
                                )),
                            (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r &&
                                        r !== c.selector &&
                                        ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a &&
                            !p.length &&
                            ((f.teardown &&
                                !1 !== f.teardown.call(e, h, v.handle)) ||
                                S.removeEvent(e, d, v.handle),
                            delete u[d]);
                    } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l =
                    (Y.get(this, "events") || Object.create(null))[u.type] ||
                    [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
            ) {
                (a = S.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while (
                        (o = i.handlers[n++]) &&
                        !u.isImmediatePropagationStopped()
                    )
                        (u.rnamespace &&
                            !1 !== o.namespace &&
                            !u.rnamespace.test(o.namespace)) ||
                            ((u.handleObj = o),
                            (u.data = o.data),
                            void 0 !==
                                (r = (
                                    (S.event.special[o.origType] || {})
                                        .handle || o.handler
                                ).apply(i.elem, s)) &&
                                !1 === (u.result = r) &&
                                (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (
                        1 === l.nodeType &&
                        ("click" !== e.type || !0 !== l.disabled)
                    ) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + " ")] &&
                                (a[i] = r.needsContext
                                    ? -1 < S(i, this).index(l)
                                    : S.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Ae(t, "click", Ce),
                        !1
                    );
                },
                trigger: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Ae(t, "click"),
                        !0
                    );
                },
                _default: function (e) {
                    var t = e.target;
                    return (
                        (pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Y.get(t, "click")) ||
                        A(t, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? Ce
                          : Ee),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && be.test(e.type)
                        ? null != e.charCode
                            ? e.charCode
                            : e.keyCode
                        : !e.which && void 0 !== t && we.test(e.type)
                        ? 1 & t
                            ? 1
                            : 2 & t
                            ? 3
                            : 4 & t
                            ? 2
                            : 0
                        : e.which;
                },
            },
            S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
                setup: function () {
                    return Ae(this, e, Se), !1;
                },
                trigger: function () {
                    return Ae(this, e), !0;
                },
                delegateType: t,
            };
        }),
        S.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, i) {
                S.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (n && (n === this || S.contains(this, n))) ||
                                ((e.type = r.origType),
                                (t = r.handler.apply(this, arguments)),
                                (e.type = i)),
                            t
                        );
                    },
                };
            }
        ),
        S.fn.extend({
            on: function (e, t, n, r) {
                return ke(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return ke(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        S(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + "." + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) ||
                        ((n = t), (t = void 0)),
                    !1 === n && (n = Ee),
                    this.each(function () {
                        S.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return (
            (A(e, "table") &&
                A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
            e
        );
    }
    function Le(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function He(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
            e
        );
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in (Y.remove(t, "handle events"), s))
                    for (n = 0, r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) &&
                ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
            });
        if (
            f &&
            ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                (u = e),
                    c !== p &&
                        ((u = S.clone(u, !0, !0)),
                        s && S.merge(a, ve(u, "script"))),
                    i.call(n[c], u, c);
            if (s)
                for (
                    l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0;
                    c < s;
                    c++
                )
                    (u = a[c]),
                        he.test(u.type || "") &&
                            !Y.access(u, "globalEval") &&
                            S.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase()
                                ? S._evalUrl &&
                                  !u.noModule &&
                                  S._evalUrl(
                                      u.src,
                                      {
                                          nonce:
                                              u.nonce ||
                                              u.getAttribute("nonce"),
                                      },
                                      l
                                  )
                                : b(u.textContent.replace(je, ""), u, l));
        }
        return n;
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
                r.parentNode &&
                    (n && ie(r) && ye(ve(r, "script")),
                    r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
            if (
                !(
                    y.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    S.isXMLDoc(e)
                )
            )
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                    (s = o[r]),
                        (u = a[r]),
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) &&
                        pe.test(s.type)
                            ? (u.checked = s.checked)
                            : ("input" !== l && "textarea" !== l) ||
                              (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || ve(e), a = a || ve(c), r = 0, i = o.length;
                        r < i;
                        r++
                    )
                        Oe(o[r], a[r]);
                else Oe(e, c);
            return (
                0 < (a = ve(c, "script")).length &&
                    ye(a, !f && ve(e, "script")),
                c
            );
        },
        cleanData: function (e) {
            for (
                var t, n, r, i = S.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (V(n)) {
                    if ((t = n[Y.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r]
                                    ? S.event.remove(n, r)
                                    : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0;
                    }
                    n[Q.expando] && (n[Q.expando] = void 0);
                }
        },
    }),
        S.fn.extend({
            detach: function (e) {
                return Re(this, e, !0);
            },
            remove: function (e) {
                return Re(this, e);
            },
            text: function (e) {
                return $(
                    this,
                    function (e) {
                        return void 0 === e
                            ? S.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Pe(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        qe(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Pe(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = qe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Pe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Pe(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (S.cleanData(ve(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return S.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return $(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Ne.test(e) &&
                            !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (S.cleanData(ve(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Pe(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 &&
                            (S.cleanData(ve(this)),
                            t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        S.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, a) {
                S.fn[e] = function (e) {
                    for (
                        var t, n = [], r = S(e), i = r.length - 1, o = 0;
                        o <= i;
                        o++
                    )
                        (t = o === i ? this : this.clone(!0)),
                            S(r[o])[a](t),
                            u.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        We = function (e, t, n) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        Fe = new RegExp(ne.join("|"), "i");
    function Be(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || Ie(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                    ie(e) ||
                    (a = S.style(e, t)),
                !y.pixelBoxStyles() &&
                    Me.test(a) &&
                    Fe.test(t) &&
                    ((r = s.width),
                    (i = s.minWidth),
                    (o = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = a),
                    (a = n.width),
                    (s.width = r),
                    (s.minWidth = i),
                    (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function $e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (l) {
                (u.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                (n = "1%" !== e.top),
                    (s = 12 === t(e.marginLeft)),
                    (l.style.right = "60%"),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (l.style.position = "absolute"),
                    (i = 12 === t(l.offsetWidth / 3)),
                    re.removeChild(u),
                    (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = E.createElement("div"),
            l = E.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
            S.extend(y, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                        null == a &&
                            ((e = E.createElement("table")),
                            (t = E.createElement("tr")),
                            (n = E.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;left:-11111px"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            re.appendChild(e).appendChild(t).appendChild(n),
                            (r = C.getComputedStyle(t)),
                            (a = 3 < parseInt(r.height)),
                            re.removeChild(e)),
                        a
                    );
                },
            }));
    })();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return (
            t ||
            (e in ze
                ? e
                : (Ue[e] =
                      (function (e) {
                          var t = e[0].toUpperCase() + e.slice(1),
                              n = _e.length;
                          while (n--) if ((e = _e[n] + t) in ze) return e;
                      })(e) || e))
        );
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
                r
                    ? ("content" === n &&
                          (u -= S.css(e, "padding" + ne[a], !0, i)),
                      "margin" !== n &&
                          (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
                    : ((u += S.css(e, "padding" + ne[a], !0, i)),
                      "padding" !== n
                          ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                          : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
        return (
            !r &&
                0 <= o &&
                (u +=
                    Math.max(
                        0,
                        Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                o -
                                u -
                                s -
                                0.5
                        )
                    ) || 0),
            u
        );
    }
    function Ze(e, t, n) {
        var r = Ie(e),
            i =
                (!y.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!y.boxSizingReliable() && i) ||
                (!y.reliableTrDimensions() && A(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
                Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
        );
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (
                    (u || (t = Xe(s)),
                    (a = S.cssHooks[t] || S.cssHooks[s]),
                    void 0 === n)
                )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                        ? i
                        : l[t];
                "string" === (o = typeof n) &&
                    (i = te.exec(n)) &&
                    i[1] &&
                    ((n = se(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o ||
                            u ||
                            (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                        y.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                            (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = X(t);
            return (
                Ge.test(t) || (t = Xe(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) &&
                    "get" in a &&
                    (i = a.get(e, !0, n)),
                void 0 === i && (i = Be(e, t, r)),
                "normal" === i && t in Qe && (i = Qe[t]),
                "" === n || n
                    ? ((o = parseFloat(i)),
                      !0 === n || isFinite(o) ? o || 0 : i)
                    : i
            );
        },
    }),
        S.each(["height", "width"], function (e, u) {
            S.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ve.test(S.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? Ze(e, u, n)
                            : We(e, Ye, function () {
                                  return Ze(e, u, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = Ie(e),
                        o = !y.scrollboxSize() && "absolute" === i.position,
                        a =
                            (o || n) &&
                            "border-box" === S.css(e, "boxSizing", !1, i),
                        s = n ? Ke(e, u, n, a, i) : 0;
                    return (
                        a &&
                            o &&
                            (s -= Math.ceil(
                                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                                    parseFloat(i[u]) -
                                    Ke(e, u, "border", !1, i) -
                                    0.5
                            )),
                        s &&
                            (r = te.exec(t)) &&
                            "px" !== (r[3] || "px") &&
                            ((e.style[u] = t), (t = S.css(e, u))),
                        Je(0, t, s)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Be(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            We(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (S.cssHooks[i + o] = {
                expand: function (e) {
                    for (
                        var t = 0,
                            n = {},
                            r = "string" == typeof e ? e.split(" ") : [e];
                        t < 4;
                        t++
                    )
                        n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (S.cssHooks[i + o].set = Je);
        }),
        S.fn.extend({
            css: function (e, t) {
                return $(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ie(e), i = t.length; a < i; a++)
                                o[t[a]] = S.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || S.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : et.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              S.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0;
                },
                set: function (e) {
                    S.fx.step[e.prop]
                        ? S.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!S.cssHooks[e.prop] &&
                              null == e.elem.style[Xe(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : S.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (S.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = et.prototype.init),
        (S.fx.step = {});
    var tt,
        nt,
        rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    function st() {
        nt &&
            (!1 === E.hidden && C.requestAnimationFrame
                ? C.requestAnimationFrame(st)
                : C.setTimeout(st, S.fx.interval),
            S.fx.tick());
    }
    function ut() {
        return (
            C.setTimeout(function () {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }
    function lt(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
        for (
            var r,
                i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
                o = 0,
                a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function ft(o, e, t) {
        var n,
            a,
            r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (a) return !1;
                for (
                    var e = tt || ut(),
                        t = Math.max(0, l.startTime + l.duration - e),
                        n = 1 - (t / l.duration || 0),
                        r = 0,
                        i = l.tweens.length;
                    r < i;
                    r++
                )
                    l.tweens[r].run(n);
                return (
                    s.notifyWith(o, [l, n, t]),
                    n < 1 && i
                        ? t
                        : (i || s.notifyWith(o, [l, 1, 0]),
                          s.resolveWith(o, [l]),
                          !1)
                );
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(
                    !0,
                    { specialEasing: {}, easing: S.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(
                        o,
                        l.opts,
                        e,
                        t,
                        l.opts.specialEasing[e] || l.opts.easing
                    );
                    return l.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return (
                        e
                            ? (s.notifyWith(o, [l, 1, 0]),
                              s.resolveWith(o, [l, e]))
                            : s.rejectWith(o, [l, e]),
                        this
                    );
                },
            }),
            c = l.props;
        for (
            !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (
                        ((i = t[(r = X(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                        n !== r && ((e[r] = o), delete e[n]),
                        (a = S.cssHooks[r]) && ("expand" in a))
                    )
                        for (n in ((o = a.expand(o)), delete e[r], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
                return (
                    m(n.stop) &&
                        (S._queueHooks(l.elem, l.opts.queue).stop =
                            n.stop.bind(n)),
                    n
                );
        return (
            S.map(c, ct, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (S.Animation = S.extend(ft, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                    (ft.tweeners[n] = ft.tweeners[n] || []),
                    ft.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    v = Y.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (a = S._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--,
                                S.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), ot.test(i))) {
                        if (
                            (delete t[r],
                            (o = o || "toggle" === i),
                            i === (g ? "hide" : "show"))
                        ) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || S.style(e, r);
                    }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = v && v.display) &&
                            (l = Y.get(e, "display")),
                        "none" === (c = S.css(e, "display")) &&
                            (l
                                ? (c = l)
                                : (le([e], !0),
                                  (l = e.style.display || l),
                                  (c = S.css(e, "display")),
                                  le([e]))),
                        ("inline" === c ||
                            ("inline-block" === c && null != l)) &&
                            "none" === S.css(e, "float") &&
                            (u ||
                                (p.done(function () {
                                    h.display = l;
                                }),
                                null == l &&
                                    ((c = h.display),
                                    (l = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        p.always(function () {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (v
                                ? "hidden" in v && (g = v.hidden)
                                : (v = Y.access(e, "fxshow", { display: l })),
                            o && (v.hidden = !g),
                            g && le([e], !0),
                            p.done(function () {
                                for (r in (g || le([e]),
                                Y.remove(e, "fxshow"),
                                d))
                                    S.style(e, r, d[r]);
                            })),
                            (u = ct(g ? v[r] : 0, r, p)),
                            r in v ||
                                ((v[r] = u.start),
                                g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
    })),
        (S.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? S.extend({}, e)
                    : {
                          complete: n || (!n && t) || (m(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !m(t) && t),
                      };
            return (
                S.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                      (r.duration in S.fx.speeds
                          ? (r.duration = S.fx.speeds[r.duration])
                          : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    m(r.old) && r.old.call(this),
                        r.queue && S.dequeue(this, r.queue);
                }),
                r
            );
        }),
        S.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = S.isEmptyObject(t),
                    o = S.speed(e, n, r),
                    a = function () {
                        var e = ft(this, S.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = S.timers,
                            r = Y.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && at.test(t) && a(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != i && n[t].queue !== i) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || S.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = Y.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = S.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                S.queue(this, a, []),
                                r && r.stop && r.stop.call(this, !0),
                                e = i.length;
                            e--;

                        )
                            i[e].elem === this &&
                                i[e].queue === a &&
                                (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function (e, r) {
            var i = S.fn[r];
            S.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                    ? i.apply(this, arguments)
                    : this.animate(lt(r, !0), e, t, n);
            };
        }),
        S.each(
            {
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, r) {
                S.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n);
                };
            }
        ),
        (S.timers = []),
        (S.fx.tick = function () {
            var e,
                t = 0,
                n = S.timers;
            for (tt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (tt = void 0);
        }),
        (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            nt || ((nt = !0), st());
        }),
        (S.fx.stop = function () {
            nt = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (r, e) {
            return (
                (r = (S.fx && S.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (rt = E.createElement("input")),
        (it = E.createElement("select").appendChild(E.createElement("option"))),
        (rt.type = "checkbox"),
        (y.checkOn = "" !== rt.value),
        (y.optSelected = it.selected),
        ((rt = E.createElement("input")).value = "t"),
        (rt.type = "radio"),
        (y.radioValue = "t" === rt.value);
    var pt,
        dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e);
            });
        },
    }),
        S.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? S.prop(e, t, n)
                        : ((1 === o && S.isXMLDoc(e)) ||
                              (i =
                                  S.attrHooks[t.toLowerCase()] ||
                                  (S.expr.match.bool.test(t) ? pt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void S.removeAttr(e, t)
                                  : i &&
                                    "set" in i &&
                                    void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = S.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (pt = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = dt[t] || S.find.attr;
            dt[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return (
                    n ||
                        ((i = dt[o]),
                        (dt[o] = r),
                        (r = null != a(e, t, n) ? o : null),
                        (dt[o] = i)),
                    r
                );
            };
        });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ");
    }
    function yt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function mt(e) {
        return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e];
            });
        },
    }),
        S.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && S.isXMLDoc(e)) ||
                            ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                        void 0 !== n
                            ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : ht.test(e.nodeName) ||
                              (gt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
            (S.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    var t = e.parentNode;
                    t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        S.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                S.propFix[this.toLowerCase()] = this;
            }
        ),
        S.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).addClass(t.call(this, e, yt(this)));
                    });
                if ((e = mt(t)).length)
                    while ((n = this[u++]))
                        if (
                            ((i = yt(n)),
                            (r = 1 === n.nodeType && " " + vt(i) + " "))
                        ) {
                            a = 0;
                            while ((o = e[a++]))
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = vt(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).removeClass(t.call(this, e, yt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = mt(t)).length)
                    while ((n = this[u++]))
                        if (
                            ((i = yt(n)),
                            (r = 1 === n.nodeType && " " + vt(i) + " "))
                        ) {
                            a = 0;
                            while ((o = e[a++]))
                                while (-1 < r.indexOf(" " + o + " "))
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = vt(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : m(i)
                    ? this.each(function (e) {
                          S(this).toggleClass(i.call(this, e, yt(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, r;
                          if (a) {
                              (t = 0), (n = S(this)), (r = mt(i));
                              while ((e = r[t++]))
                                  n.hasClass(e)
                                      ? n.removeClass(e)
                                      : n.addClass(e);
                          } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++]))
                    if (
                        1 === n.nodeType &&
                        -1 < (" " + vt(yt(n)) + " ").indexOf(t)
                    )
                        return !0;
                return !1;
            },
        });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = m(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, S(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = S.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((r =
                              S.valHooks[this.type] ||
                              S.valHooks[this.nodeName.toLowerCase()]) &&
                              "set" in r &&
                              void 0 !== r.set(this, t, "value")) ||
                              (this.value = t));
                  }))
                : t
                ? (r =
                      S.valHooks[t.type] ||
                      S.valHooks[t.nodeName.toLowerCase()]) &&
                  "get" in r &&
                  void 0 !== (e = r.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(xt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : vt(S.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (
                                ((n = i[r]).selected || r === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled ||
                                    !A(n.parentNode, "optgroup"))
                            ) {
                                if (((t = S(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = S.makeArray(t),
                            a = i.length;
                        while (a--)
                            ((r = i[a]).selected =
                                -1 < S.inArray(S.valHooks.option.get(r), o)) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = -1 < S.inArray(S(e).val(), t));
                },
            }),
                y.checkOn ||
                    (S.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        }),
        (y.focusin = "onfocusin" in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation();
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = f = a = n = n || E),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !bt.test(d + S.event.triggered) &&
                    (-1 < d.indexOf(".") &&
                        ((d = (h = d.split(".")).shift()), h.sort()),
                    (u = d.indexOf(":") < 0 && "on" + d),
                    ((e = e[S.expando]
                        ? e
                        : new S.Event(d, "object" == typeof e && e)).isTrigger =
                        r ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace
                        ? new RegExp(
                              "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : S.makeArray(t, [e])),
                    (c = S.event.special[d] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !x(n)) {
                    for (
                        s = c.delegateType || d,
                            bt.test(s + d) || (o = o.parentNode);
                        o;
                        o = o.parentNode
                    )
                        p.push(o), (a = o);
                    a === (n.ownerDocument || E) &&
                        p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l =
                            (Y.get(o, "events") || Object.create(null))[
                                e.type
                            ] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) &&
                            l.apply &&
                            V(o) &&
                            ((e.result = l.apply(o, t)),
                            !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !V(n) ||
                        (u &&
                            m(n[d]) &&
                            !x(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (S.event.triggered = d),
                            e.isPropagationStopped() &&
                                f.addEventListener(d, wt),
                            n[d](),
                            e.isPropagationStopped() &&
                                f.removeEventListener(d, wt),
                            (S.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
        },
    }),
        S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
            },
        }),
        y.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                var i = function (e) {
                    S.event.simulate(r, e.target, S.event.fix(e));
                };
                S.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r);
                        t || e.addEventListener(n, i, !0),
                            Y.access(e, r, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r) - 1;
                        t
                            ? Y.access(e, r, t)
                            : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                    },
                };
            });
    var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (
            (t && !t.getElementsByTagName("parsererror").length) ||
                S.error("Invalid XML: " + e),
            t
        );
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function (e, t) {
                r || St.test(n)
                    ? i(n, t)
                    : Dt(
                          n +
                              "[" +
                              ("object" == typeof t && null != t ? e : "") +
                              "]",
                          t,
                          r,
                          i
                      );
            });
        else if (r || "object" !== w(e)) i(n, e);
        else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Dt(n, e[n], t, i);
        return r.join("&");
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !S(this).is(":disabled") &&
                            Nt.test(this.nodeName) &&
                            !At.test(e) &&
                            (this.checked || !pe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = S(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? S.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(kt, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(kt, "\r\n") };
                    })
                    .get();
            },
        });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");
    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while ((n = i[r++]))
                    "+" === n[0]
                        ? ((n = n.slice(1) || "*"),
                          (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;
        function l(e) {
            var r;
            return (
                (s[e] = !0),
                S.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n]
                        ? u
                            ? !(r = n)
                            : void 0
                        : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function $t(e, t) {
        var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        Tt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Mt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    v = S.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                    x = S.Deferred(),
                    b = S.Callbacks("once memory"),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = Ht.exec(p)))
                                        n[t[1].toLowerCase() + " "] = (
                                            n[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == h &&
                                    ((e = s[e.toLowerCase()] =
                                        s[e.toLowerCase()] || e),
                                    (a[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                    (v.url = ((e || v.url || Tt.href) + "").replace(
                        Pt,
                        Tt.protocol + "//"
                    )),
                    (v.type = t.method || t.type || v.method || v.type),
                    (v.dataTypes = (v.dataType || "*")
                        .toLowerCase()
                        .match(P) || [""]),
                    null == v.crossDomain)
                ) {
                    r = E.createElement("a");
                    try {
                        (r.href = v.url),
                            (r.href = r.href),
                            (v.crossDomain =
                                Wt.protocol + "//" + Wt.host !=
                                r.protocol + "//" + r.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if (
                    (v.data &&
                        v.processData &&
                        "string" != typeof v.data &&
                        (v.data = S.param(v.data, v.traditional)),
                    Bt(Rt, v, t, T),
                    h)
                )
                    return T;
                for (i in ((g = S.event && v.global) &&
                    0 == S.active++ &&
                    S.event.trigger("ajaxStart"),
                (v.type = v.type.toUpperCase()),
                (v.hasContent = !Ot.test(v.type)),
                (f = v.url.replace(qt, "")),
                v.hasContent
                    ? v.data &&
                      v.processData &&
                      0 ===
                          (v.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (v.data = v.data.replace(jt, "+"))
                    : ((o = v.url.slice(f.length)),
                      v.data &&
                          (v.processData || "string" == typeof v.data) &&
                          ((f += (Et.test(f) ? "&" : "?") + v.data),
                          delete v.data),
                      !1 === v.cache &&
                          ((f = f.replace(Lt, "$1")),
                          (o =
                              (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
                      (v.url = f + o)),
                v.ifModified &&
                    (S.lastModified[f] &&
                        T.setRequestHeader(
                            "If-Modified-Since",
                            S.lastModified[f]
                        ),
                    S.etag[f] &&
                        T.setRequestHeader("If-None-Match", S.etag[f])),
                ((v.data && v.hasContent && !1 !== v.contentType) ||
                    t.contentType) &&
                    T.setRequestHeader("Content-Type", v.contentType),
                T.setRequestHeader(
                    "Accept",
                    v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                        ? v.accepts[v.dataTypes[0]] +
                              ("*" !== v.dataTypes[0]
                                  ? ", " + It + "; q=0.01"
                                  : "")
                        : v.accepts["*"]
                ),
                v.headers))
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                    return T.abort();
                if (
                    ((u = "abort"),
                    b.add(v.complete),
                    T.done(v.success),
                    T.fail(v.error),
                    (c = Bt(Mt, v, t, T)))
                ) {
                    if (
                        ((T.readyState = 1),
                        g && m.trigger("ajaxSend", [T, v]),
                        h)
                    )
                        return T;
                    v.async &&
                        0 < v.timeout &&
                        (d = C.setTimeout(function () {
                            T.abort("timeout");
                        }, v.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                        d && C.clearTimeout(d),
                        (c = void 0),
                        (p = r || ""),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ("*" === u[0])
                                    u.shift(),
                                        void 0 === r &&
                                            (r =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    "Content-Type"
                                                ));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (
                                            !u[0] ||
                                            e.converters[i + " " + u[0]]
                                        ) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(v, T, n)),
                        !i &&
                            -1 < S.inArray("script", v.dataTypes) &&
                            (v.converters["text script"] = function () {}),
                        (s = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !u &&
                                        r &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (u = o),
                                    (o = c.shift()))
                                )
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (
                                            !(a = l[u + " " + o] || l["* " + o])
                                        )
                                            for (i in l)
                                                if (
                                                    (s = i.split(" "))[1] ===
                                                        o &&
                                                    (a =
                                                        l[u + " " + s[0]] ||
                                                        l["* " + s[0]])
                                                ) {
                                                    !0 === a
                                                        ? (a = l[i])
                                                        : !0 !== l[i] &&
                                                          ((o = s[0]),
                                                          c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"]) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a
                                                            ? e
                                                            : "No conversion from " +
                                                              u +
                                                              " to " +
                                                              o,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(v, s, T, i)),
                        i
                            ? (v.ifModified &&
                                  ((u = T.getResponseHeader("Last-Modified")) &&
                                      (S.lastModified[f] = u),
                                  (u = T.getResponseHeader("etag")) &&
                                      (S.etag[f] = u)),
                              204 === e || "HEAD" === v.type
                                  ? (l = "nocontent")
                                  : 304 === e
                                  ? (l = "notmodified")
                                  : ((l = s.state),
                                    (o = s.data),
                                    (i = !(a = s.error))))
                            : ((a = l),
                              (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ""),
                        i
                            ? x.resolveWith(y, [o, l, T])
                            : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                        g &&
                            m.trigger(i ? "ajaxSuccess" : "ajaxError", [
                                T,
                                v,
                                i ? o : a,
                            ]),
                        b.fireWith(y, [T, l]),
                        g &&
                            (m.trigger("ajaxComplete", [T, v]),
                            --S.active || S.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function (e, i) {
            S[i] = function (e, t, n, r) {
                return (
                    m(t) && ((r = r || n), (n = t), (t = void 0)),
                    S.ajax(
                        S.extend(
                            {
                                url: e,
                                type: i,
                                dataType: r,
                                data: t,
                                success: n,
                            },
                            S.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function (e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    S.globalEval(e, t, n);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild)
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return m(n)
                    ? this.each(function (e) {
                          S(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = S(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    S(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    (y.cors = !!zt && "withCredentials" in zt),
        (y.ajax = zt = !!zt),
        S.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || (zt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if (
                            (r.open(
                                i.type,
                                i.url,
                                i.async,
                                i.username,
                                i.password
                            ),
                            i.xhrFields)
                        )
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType &&
                            r.overrideMimeType &&
                            r.overrideMimeType(i.mimeType),
                        i.crossDomain ||
                            e["X-Requested-With"] ||
                            (e["X-Requested-With"] = "XMLHttpRequest"),
                        e))
                            r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o =
                                        a =
                                        r.onload =
                                        r.onerror =
                                        r.onabort =
                                        r.ontimeout =
                                        r.onreadystatechange =
                                            null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                        ? "number" != typeof r.status
                                            ? t(0, "error")
                                            : t(r.status, r.statusText)
                                        : t(
                                              _t[r.status] || r.status,
                                              r.statusText,
                                              "text" !==
                                                  (r.responseType || "text") ||
                                                  "string" !=
                                                      typeof r.responseText
                                                  ? { binary: r.response }
                                                  : { text: r.responseText },
                                              r.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          C.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e;
                },
            },
        }),
        S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = S("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(),
                                        (i = null),
                                        e &&
                                            t(
                                                "error" === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            E.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var Ut,
        Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return (this[e] = !0), e;
        },
    }),
        S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                o,
                a =
                    !1 !== e.jsonp &&
                    (Vt.test(e.url)
                        ? "url"
                        : "string" == typeof e.data &&
                          0 ===
                              (e.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Vt.test(e.data) &&
                          "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback =
                        m(e.jsonpCallback)
                            ? e.jsonpCallback()
                            : e.jsonpCallback),
                    a
                        ? (e[a] = e[a].replace(Vt, "$1" + r))
                        : !1 !== e.jsonp &&
                          (e.url +=
                              (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function () {
                        return o || S.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = C[r]),
                    (C[r] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                            e[r] &&
                                ((e.jsonpCallback = t.jsonpCallback),
                                Xt.push(r)),
                            o && m(i) && i(o[0]),
                            (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (y.createHTMLDocument =
            (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
            2 === Ut.childNodes.length)),
        (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                      (y.createHTMLDocument
                          ? (((r = (t =
                                E.implementation.createHTMLDocument(
                                    ""
                                )).createElement("base")).href =
                                E.location.href),
                            t.head.appendChild(r))
                          : (t = E)),
                  (o = !n && []),
                  (i = N.exec(e))
                      ? [t.createElement(i[1])]
                      : ((i = xe([e], t, o)),
                        o && o.length && S(o).remove(),
                        S.merge([], i.childNodes)));
            var r, i, o;
        }),
        (S.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                    S.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t,
                    })
                        .done(function (e) {
                            (o = arguments),
                                a.html(
                                    r
                                        ? S("<div>")
                                              .append(S.parseHTML(e))
                                              .find(r)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(
                                            this,
                                            o || [e.responseText, t, e]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        (S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = S.css(e, "position"),
                    c = S(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = S.css(e, "top")),
                    (u = S.css(e, "left")),
                    ("absolute" === l || "fixed" === l) &&
                    -1 < (o + u).indexOf("auto")
                        ? ((a = (r = c.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, S.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t
                        ? t.using.call(e, f)
                        : ("number" == typeof f.top && (f.top += "px"),
                          "number" == typeof f.left && (f.left += "px"),
                          c.css(f));
            },
        }),
        S.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              S.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r
                    ? r.getClientRects().length
                        ? ((e = r.getBoundingClientRect()),
                          (n = r.ownerDocument.defaultView),
                          {
                              top: e.top + n.pageYOffset,
                              left: e.left + n.pageXOffset,
                          })
                        : { top: 0, left: 0 }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === S.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()),
                            (n = r.ownerDocument),
                            (e = r.offsetParent || n.documentElement);
                        while (
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            "static" === S.css(e, "position")
                        )
                            e = e.parentNode;
                        e &&
                            e !== r &&
                            1 === e.nodeType &&
                            (((i = S(e).offset()).top += S.css(
                                e,
                                "borderTopWidth",
                                !0
                            )),
                            (i.left += S.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - i.top - S.css(r, "marginTop", !0),
                        left: t.left - i.left - S.css(r, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === S.css(e, "position"))
                        e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        S.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, i) {
                var o = "pageYOffset" === i;
                S.fn[t] = function (e) {
                    return $(
                        this,
                        function (e, t, n) {
                            var r;
                            if (
                                (x(e)
                                    ? (r = e)
                                    : 9 === e.nodeType && (r = e.defaultView),
                                void 0 === n)
                            )
                                return r ? r[i] : e[t];
                            r
                                ? r.scrollTo(
                                      o ? r.pageXOffset : n,
                                      o ? n : r.pageYOffset
                                  )
                                : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }
        ),
        S.each(["top", "left"], function (e, n) {
            S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
                if (t)
                    return (
                        (t = Be(e, n)),
                        Me.test(t) ? S(e).position()[n] + "px" : t
                    );
            });
        }),
        S.each({ Height: "height", Width: "width" }, function (a, s) {
            S.each(
                { padding: "inner" + a, content: s, "": "outer" + a },
                function (r, o) {
                    S.fn[o] = function (e, t) {
                        var n =
                                arguments.length &&
                                (r || "boolean" != typeof e),
                            i =
                                r ||
                                (!0 === e || !0 === t ? "margin" : "border");
                        return $(
                            this,
                            function (e, t, n) {
                                var r;
                                return x(e)
                                    ? 0 === o.indexOf("outer")
                                        ? e["inner" + a]
                                        : e.document.documentElement[
                                              "client" + a
                                          ]
                                    : 9 === e.nodeType
                                    ? ((r = e.documentElement),
                                      Math.max(
                                          e.body["scroll" + a],
                                          r["scroll" + a],
                                          e.body["offset" + a],
                                          r["offset" + a],
                                          r["client" + a]
                                      ))
                                    : void 0 === n
                                    ? S.css(e, t, i)
                                    : S.style(e, t, n, i);
                            },
                            s,
                            n ? e : void 0,
                            n
                        );
                    };
                }
            );
        }),
        S.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                S.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (e, n) {
                S.fn[n] = function (e, t) {
                    return 0 < arguments.length
                        ? this.on(n, null, e, t)
                        : this.trigger(n);
                };
            }
        );
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
                (r = s.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid =
                    e.guid || S.guid++),
                i
            );
    }),
        (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = A),
        (S.isFunction = m),
        (S.isWindow = x),
        (S.camelCase = X),
        (S.type = w),
        (S.now = Date.now),
        (S.isNumeric = function (e) {
            var t = S.type(e);
            return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
        }),
        (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Gt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return S;
            });
    var Yt = C.jQuery,
        Qt = C.$;
    return (
        (S.noConflict = function (e) {
            return (
                C.$ === S && (C.$ = Qt),
                e && C.jQuery === S && (C.jQuery = Yt),
                S
            );
        }),
        "undefined" == typeof e && (C.jQuery = C.$ = S),
        S
    );
});

/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : (e.Popper = t());
})(this, function () {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView,
            n = o.getComputedStyle(e, null);
        return t ? n[t] : n;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
    }
    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e;
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe;
    }
    function p(e) {
        if (!e) return document.documentElement;
        for (
            var o = r(10) ? document.body : null, n = e.offsetParent || null;
            n === o && e.nextElementSibling;

        )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === t(n, "position")
                ? p(n)
                : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
    }
    function s(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode);
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host);
    }
    function l(e) {
        var t =
                1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : "top",
            o = "top" === t ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o];
        }
        return e[o];
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, "top"),
            i = l(t, "left"),
            r = o ? -1 : 1;
        return (
            (e.top += n * r),
            (e.bottom += n * r),
            (e.left += i * r),
            (e.right += i * r),
            e
        );
    }
    function m(e, t) {
        var o = "x" === t ? "Left" : "Top",
            n = "Left" == o ? "Right" : "Bottom";
        return (
            parseFloat(e["border" + o + "Width"]) +
            parseFloat(e["border" + n + "Width"])
        );
    }
    function h(e, t, o, n) {
        return ee(
            t["offset" + e],
            t["scroll" + e],
            o["client" + e],
            o["offset" + e],
            o["scroll" + e],
            r(10)
                ? parseInt(o["offset" + e]) +
                      parseInt(
                          n["margin" + ("Height" === e ? "Top" : "Left")]
                      ) +
                      parseInt(
                          n["margin" + ("Height" === e ? "Bottom" : "Right")]
                      )
                : 0
        );
    }
    function c(e) {
        var t = e.body,
            o = e.documentElement,
            n = r(10) && getComputedStyle(o);
        return { height: h("Height", t, o, n), width: h("Width", t, o, n) };
    }
    function g(e) {
        return le({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, "top"),
                    i = l(e, "left");
                (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
            } else o = e.getBoundingClientRect();
        } catch (t) {}
        var p = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top,
            },
            s = "HTML" === e.nodeName ? c(e.ownerDocument) : {},
            d = s.width || e.clientWidth || p.width,
            a = s.height || e.clientHeight || p.height,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            (f -= m(u, "x")), (h -= m(u, "y")), (p.width -= f), (p.height -= h);
        }
        return g(p);
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = "HTML" === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth),
            c = parseFloat(m.borderLeftWidth);
        i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height,
        });
        if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
            var w = parseFloat(m.marginTop),
                y = parseFloat(m.marginLeft);
            (b.top -= h - w),
                (b.bottom -= h - w),
                (b.left -= c - y),
                (b.right -= c - y),
                (b.marginTop = w),
                (b.marginLeft = y);
        }
        return (
            (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) &&
                (b = f(b, o)),
            b
        );
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = ee(o.clientWidth, window.innerWidth || 0),
            r = ee(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, "left"),
            d = {
                top: p - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r,
            };
        return g(d);
    }
    function y(e) {
        var n = e.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === t(e, "position")) return !0;
        var i = o(e);
        return !!i && y(i);
    }
    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && "none" === t(o, "transform"); )
            o = o.parentElement;
        return o || document.documentElement;
    }
    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            d = { top: 0, left: 0 },
            l = s ? E(e) : a(e, i(t));
        if ("viewport" === p) d = w(l, s);
        else {
            var f;
            "scrollParent" === p
                ? ((f = n(o(t))),
                  "BODY" === f.nodeName &&
                      (f = e.ownerDocument.documentElement))
                : "window" === p
                ? (f = e.ownerDocument.documentElement)
                : (f = p);
            var m = b(f, l, s);
            if ("HTML" === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument),
                    g = h.height,
                    u = h.width;
                (d.top += m.top - m.marginTop),
                    (d.bottom = g + m.top),
                    (d.left += m.left - m.marginLeft),
                    (d.right = u + m.left);
            } else d = m;
        }
        r = r || 0;
        var v = "number" == typeof r;
        return (
            (d.left += v ? r : r.left || 0),
            (d.top += v ? r : r.top || 0),
            (d.right -= v ? r : r.right || 0),
            (d.bottom -= v ? r : r.bottom || 0),
            d
        );
    }
    function x(e) {
        var t = e.width,
            o = e.height;
        return t * o;
    }
    function O(e, t, o, n, i) {
        var r =
            5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = v(o, n, r, i),
            s = {
                top: { width: p.width, height: t.top - p.top },
                right: { width: p.right - t.right, height: p.height },
                bottom: { width: p.width, height: p.bottom - t.bottom },
                left: { width: t.left - p.left, height: p.height },
            },
            d = Object.keys(s)
                .map(function (e) {
                    return le({ key: e }, s[e], { area: x(s[e]) });
                })
                .sort(function (e, t) {
                    return t.area - e.area;
                }),
            a = d.filter(function (e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight;
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function L(e, t, o) {
        var n =
                3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
            r = n ? E(t) : a(t, i(o));
        return b(o, r, n);
    }
    function S(e) {
        var t = e.ownerDocument.defaultView,
            o = t.getComputedStyle(e),
            n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
            i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
            r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
        return r;
    }
    function T(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
        });
    }
    function C(e, t, o) {
        o = o.split("-")[0];
        var n = S(e),
            i = { width: n.width, height: n.height },
            r = -1 !== ["right", "left"].indexOf(o),
            p = r ? "top" : "left",
            s = r ? "left" : "top",
            d = r ? "height" : "width",
            a = r ? "width" : "height";
        return (
            (i[p] = t[p] + t[d] / 2 - n[d] / 2),
            (i[s] = o === s ? t[s] - n[a] : t[T(s)]),
            i
        );
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === o;
            });
        var n = D(e, function (e) {
            return e[t] === o;
        });
        return e.indexOf(n);
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
        return (
            i.forEach(function (t) {
                t["function"] &&
                    console.warn(
                        "`modifier.function` is deprecated, use `modifier.fn`!"
                    );
                var n = t["function"] || t.fn;
                t.enabled &&
                    e(n) &&
                    ((o.offsets.popper = g(o.offsets.popper)),
                    (o.offsets.reference = g(o.offsets.reference)),
                    (o = n(o, t)));
            }),
            o
        );
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {},
            };
            (e.offsets.reference = L(
                this.state,
                this.popper,
                this.reference,
                this.options.positionFixed
            )),
                (e.placement = O(
                    this.options.placement,
                    e.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                )),
                (e.originalPlacement = e.placement),
                (e.positionFixed = this.options.positionFixed),
                (e.offsets.popper = C(
                    this.popper,
                    e.offsets.reference,
                    e.placement
                )),
                (e.offsets.popper.position = this.options.positionFixed
                    ? "fixed"
                    : "absolute"),
                (e = P(this.modifiers, e)),
                this.state.isCreated
                    ? this.options.onUpdate(e)
                    : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
    }
    function W(e, t) {
        return e.some(function (e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t;
        });
    }
    function B(e) {
        for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
                o = e.charAt(0).toUpperCase() + e.slice(1),
                n = 0;
            n < t.length;
            n++
        ) {
            var i = t[n],
                r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function H() {
        return (
            (this.state.isDestroyed = !0),
            W(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[B("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
                this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function M(e, t, o, i) {
        var r = "BODY" === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }),
            r || M(n(p.parentNode), t, o, i),
            i.push(p);
    }
    function F(e, t, o, i) {
        (o.updateBound = i),
            A(e).addEventListener("resize", o.updateBound, { passive: !0 });
        var r = n(e);
        return (
            M(r, "scroll", o.updateBound, o.scrollParents),
            (o.scrollElement = r),
            (o.eventsEnabled = !0),
            o
        );
    }
    function I() {
        this.state.eventsEnabled ||
            (this.state = F(
                this.reference,
                this.options,
                this.state,
                this.scheduleUpdate
            ));
    }
    function R(e, t) {
        return (
            A(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
        );
    }
    function U() {
        this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = R(this.reference, this.state)));
    }
    function Y(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function V(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = "";
            -1 !==
                ["width", "height", "top", "right", "bottom", "left"].indexOf(
                    o
                ) &&
                Y(t[o]) &&
                (n = "px"),
                (e.style[o] = t[o] + n);
        });
    }
    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function q(e, t) {
        var o = e.offsets,
            n = o.popper,
            i = o.reference,
            r = $,
            p = function (e) {
                return e;
            },
            s = r(i.width),
            d = r(n.width),
            a = -1 !== ["left", "right"].indexOf(e.placement),
            l = -1 !== e.placement.indexOf("-"),
            f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p,
            m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right),
        };
    }
    function K(e, t, o) {
        var n = D(e, function (e) {
                var o = e.name;
                return o === t;
            }),
            i =
                !!n &&
                e.some(function (e) {
                    return e.name === o && e.enabled && e.order < n.order;
                });
        if (!i) {
            var r = "`" + t + "`";
            console.warn(
                "`" +
                    o +
                    "`" +
                    " modifier is required by " +
                    r +
                    " modifier in order to work, be sure to include it before " +
                    r +
                    "!"
            );
        }
        return i;
    }
    function z(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = he.indexOf(e),
            n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n;
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
                case "%p":
                    s = o;
                    break;
                case "%":
                case "%r":
                default:
                    s = n;
            }
            var d = g(s);
            return (d[t] / 100) * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return (
                (a =
                    "vh" === p
                        ? ee(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                          )
                        : ee(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                          )),
                (a / 100) * r
            );
        }
        return r;
    }
    function X(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ["right", "left"].indexOf(n),
            p = e.split(/(\+|\-)/).map(function (e) {
                return e.trim();
            }),
            s = p.indexOf(
                D(p, function (e) {
                    return -1 !== e.search(/,|\s/);
                })
            );
        p[s] &&
            -1 === p[s].indexOf(",") &&
            console.warn(
                "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
        var d = /\s*,\s*|\s+/,
            a =
                -1 === s
                    ? [p]
                    : [
                          p.slice(0, s).concat([p[s].split(d)[0]]),
                          [p[s].split(d)[1]].concat(p.slice(s + 1)),
                      ];
        return (
            (a = a.map(function (e, n) {
                var i = (1 === n ? !r : r) ? "height" : "width",
                    p = !1;
                return e
                    .reduce(function (e, t) {
                        return "" === e[e.length - 1] &&
                            -1 !== ["+", "-"].indexOf(t)
                            ? ((e[e.length - 1] = t), (p = !0), e)
                            : p
                            ? ((e[e.length - 1] += t), (p = !1), e)
                            : e.concat(t);
                    }, [])
                    .map(function (e) {
                        return _(e, i, t, o);
                    });
            })),
            a.forEach(function (e, t) {
                e.forEach(function (o, n) {
                    Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
                });
            }),
            i
        );
    }
    function J(e, t) {
        var o,
            n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split("-")[0];
        return (
            (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
            "left" === d
                ? ((p.top += o[0]), (p.left -= o[1]))
                : "right" === d
                ? ((p.top += o[0]), (p.left += o[1]))
                : "top" === d
                ? ((p.left += o[0]), (p.top -= o[1]))
                : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
            (e.popper = p),
            e
        );
    }
    var Q = Math.min,
        Z = Math.floor,
        $ = Math.round,
        ee = Math.max,
        te =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            "undefined" != typeof navigator,
        oe = (function () {
            for (
                var e = ["Edge", "Trident", "Firefox"], t = 0;
                t < e.length;
                t += 1
            )
                if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0;
        })(),
        ne = te && window.Promise,
        ie = ne
            ? function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          window.Promise.resolve().then(function () {
                              (t = !1), e();
                          }));
                  };
              }
            : function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          setTimeout(function () {
                              (t = !1), e();
                          }, oe));
                  };
              },
        re = te && !!(window.MSInputMethodContext && document.documentMode),
        pe = te && /MSIE 10/.test(navigator.userAgent),
        se = function (e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
        },
        de = (function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++)
                    (o = t[n]),
                        (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
            }
            return function (t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t;
            };
        })(),
        ae = function (e, t, o) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = o),
                e
            );
        },
        le =
            Object.assign ||
            function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var n in ((t = arguments[o]), t))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                            (e[n] = t[n]);
                return e;
            },
        fe = te && /Firefox/i.test(navigator.userAgent),
        me = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
        ],
        he = me.slice(3),
        ce = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise",
        },
        ge = (function () {
            function t(o, n) {
                var i = this,
                    r =
                        2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                se(this, t),
                    (this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update);
                    }),
                    (this.update = ie(this.update.bind(this))),
                    (this.options = le({}, t.Defaults, r)),
                    (this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: [],
                    }),
                    (this.reference = o && o.jquery ? o[0] : o),
                    (this.popper = n && n.jquery ? n[0] : n),
                    (this.options.modifiers = {}),
                    Object.keys(
                        le({}, t.Defaults.modifiers, r.modifiers)
                    ).forEach(function (e) {
                        i.options.modifiers[e] = le(
                            {},
                            t.Defaults.modifiers[e] || {},
                            r.modifiers ? r.modifiers[e] : {}
                        );
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function (e) {
                            return le({ name: e }, i.options.modifiers[e]);
                        })
                        .sort(function (e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function (t) {
                        t.enabled &&
                            e(t.onLoad) &&
                            t.onLoad(
                                i.reference,
                                i.popper,
                                i.options,
                                t,
                                i.state
                            );
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(),
                    (this.state.eventsEnabled = p);
            }
            return (
                de(t, [
                    {
                        key: "update",
                        value: function () {
                            return k.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return H.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return I.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return U.call(this);
                        },
                    },
                ]),
                t
            );
        })();
    return (
        (ge.Utils = (
            "undefined" == typeof window ? global : window
        ).PopperUtils),
        (ge.placements = me),
        (ge.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = t.split("-")[1];
                        if (n) {
                            var i = e.offsets,
                                r = i.reference,
                                p = i.popper,
                                s = -1 !== ["bottom", "top"].indexOf(o),
                                d = s ? "left" : "top",
                                a = s ? "width" : "height",
                                l = {
                                    start: ae({}, d, r[d]),
                                    end: ae({}, d, r[d] + r[a] - p[a]),
                                };
                            e.offsets.popper = le({}, p, l[n]);
                        }
                        return e;
                    },
                },
                offset: { order: 200, enabled: !0, fn: J, offset: 0 },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.boundariesElement || p(e.instance.popper);
                        e.instance.reference === o && (o = p(o));
                        var n = B("transform"),
                            i = e.instance.popper.style,
                            r = i.top,
                            s = i.left,
                            d = i[n];
                        (i.top = ""), (i.left = ""), (i[n] = "");
                        var a = v(
                            e.instance.popper,
                            e.instance.reference,
                            t.padding,
                            o,
                            e.positionFixed
                        );
                        (i.top = r),
                            (i.left = s),
                            (i[n] = d),
                            (t.boundaries = a);
                        var l = t.priority,
                            f = e.offsets.popper,
                            m = {
                                primary: function (e) {
                                    var o = f[e];
                                    return (
                                        f[e] < a[e] &&
                                            !t.escapeWithReference &&
                                            (o = ee(f[e], a[e])),
                                        ae({}, e, o)
                                    );
                                },
                                secondary: function (e) {
                                    var o = "right" === e ? "left" : "top",
                                        n = f[o];
                                    return (
                                        f[e] > a[e] &&
                                            !t.escapeWithReference &&
                                            (n = Q(
                                                f[o],
                                                a[e] -
                                                    ("right" === e
                                                        ? f.width
                                                        : f.height)
                                            )),
                                        ae({}, o, n)
                                    );
                                },
                            };
                        return (
                            l.forEach(function (e) {
                                var t =
                                    -1 === ["left", "top"].indexOf(e)
                                        ? "secondary"
                                        : "primary";
                                f = le({}, f, m[t](e));
                            }),
                            (e.offsets.popper = f),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            o = t.popper,
                            n = t.reference,
                            i = e.placement.split("-")[0],
                            r = Z,
                            p = -1 !== ["top", "bottom"].indexOf(i),
                            s = p ? "right" : "bottom",
                            d = p ? "left" : "top",
                            a = p ? "width" : "height";
                        return (
                            o[s] < r(n[d]) &&
                                (e.offsets.popper[d] = r(n[d]) - o[a]),
                            o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                            e
                        );
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, o) {
                        var n;
                        if (!K(e.instance.modifiers, "arrow", "keepTogether"))
                            return e;
                        var i = o.element;
                        if ("string" == typeof i) {
                            if (((i = e.instance.popper.querySelector(i)), !i))
                                return e;
                        } else if (!e.instance.popper.contains(i))
                            return (
                                console.warn(
                                    "WARNING: `arrow.element` must be child of its popper element!"
                                ),
                                e
                            );
                        var r = e.placement.split("-")[0],
                            p = e.offsets,
                            s = p.popper,
                            d = p.reference,
                            a = -1 !== ["left", "right"].indexOf(r),
                            l = a ? "height" : "width",
                            f = a ? "Top" : "Left",
                            m = f.toLowerCase(),
                            h = a ? "left" : "top",
                            c = a ? "bottom" : "right",
                            u = S(i)[l];
                        d[c] - u < s[m] &&
                            (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                            d[m] + u > s[c] &&
                                (e.offsets.popper[m] += d[m] + u - s[c]),
                            (e.offsets.popper = g(e.offsets.popper));
                        var b = d[m] + d[l] / 2 - u / 2,
                            w = t(e.instance.popper),
                            y = parseFloat(w["margin" + f]),
                            E = parseFloat(w["border" + f + "Width"]),
                            v = b - e.offsets.popper[m] - y - E;
                        return (
                            (v = ee(Q(s[l] - u, v), 0)),
                            (e.arrowElement = i),
                            (e.offsets.arrow =
                                ((n = {}), ae(n, m, $(v)), ae(n, h, ""), n)),
                            e
                        );
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (W(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement)
                            return e;
                        var o = v(
                                e.instance.popper,
                                e.instance.reference,
                                t.padding,
                                t.boundariesElement,
                                e.positionFixed
                            ),
                            n = e.placement.split("-")[0],
                            i = T(n),
                            r = e.placement.split("-")[1] || "",
                            p = [];
                        switch (t.behavior) {
                            case ce.FLIP:
                                p = [n, i];
                                break;
                            case ce.CLOCKWISE:
                                p = G(n);
                                break;
                            case ce.COUNTERCLOCKWISE:
                                p = G(n, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return (
                            p.forEach(function (s, d) {
                                if (n !== s || p.length === d + 1) return e;
                                (n = e.placement.split("-")[0]), (i = T(n));
                                var a = e.offsets.popper,
                                    l = e.offsets.reference,
                                    f = Z,
                                    m =
                                        ("left" === n &&
                                            f(a.right) > f(l.left)) ||
                                        ("right" === n &&
                                            f(a.left) < f(l.right)) ||
                                        ("top" === n &&
                                            f(a.bottom) > f(l.top)) ||
                                        ("bottom" === n &&
                                            f(a.top) < f(l.bottom)),
                                    h = f(a.left) < f(o.left),
                                    c = f(a.right) > f(o.right),
                                    g = f(a.top) < f(o.top),
                                    u = f(a.bottom) > f(o.bottom),
                                    b =
                                        ("left" === n && h) ||
                                        ("right" === n && c) ||
                                        ("top" === n && g) ||
                                        ("bottom" === n && u),
                                    w = -1 !== ["top", "bottom"].indexOf(n),
                                    y =
                                        !!t.flipVariations &&
                                        ((w && "start" === r && h) ||
                                            (w && "end" === r && c) ||
                                            (!w && "start" === r && g) ||
                                            (!w && "end" === r && u)),
                                    E =
                                        !!t.flipVariationsByContent &&
                                        ((w && "start" === r && c) ||
                                            (w && "end" === r && h) ||
                                            (!w && "start" === r && u) ||
                                            (!w && "end" === r && g)),
                                    v = y || E;
                                (m || b || v) &&
                                    ((e.flipped = !0),
                                    (m || b) && (n = p[d + 1]),
                                    v && (r = z(r)),
                                    (e.placement = n + (r ? "-" + r : "")),
                                    (e.offsets.popper = le(
                                        {},
                                        e.offsets.popper,
                                        C(
                                            e.instance.popper,
                                            e.offsets.reference,
                                            e.placement
                                        )
                                    )),
                                    (e = P(e.instance.modifiers, e, "flip")));
                            }),
                            e
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1,
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = e.offsets,
                            i = n.popper,
                            r = n.reference,
                            p = -1 !== ["left", "right"].indexOf(o),
                            s = -1 === ["top", "left"].indexOf(o);
                        return (
                            (i[p ? "left" : "top"] =
                                r[o] - (s ? i[p ? "width" : "height"] : 0)),
                            (e.placement = T(t)),
                            (e.offsets.popper = g(i)),
                            e
                        );
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!K(e.instance.modifiers, "hide", "preventOverflow"))
                            return e;
                        var t = e.offsets.reference,
                            o = D(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (
                            t.bottom < o.top ||
                            t.left > o.right ||
                            t.top > o.bottom ||
                            t.right < o.left
                        ) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0),
                                (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1),
                                (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.x,
                            n = t.y,
                            i = e.offsets.popper,
                            r = D(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== r &&
                            console.warn(
                                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                            );
                        var s,
                            d,
                            a = void 0 === r ? t.gpuAcceleration : r,
                            l = p(e.instance.popper),
                            f = u(l),
                            m = { position: i.position },
                            h = q(e, 2 > window.devicePixelRatio || !fe),
                            c = "bottom" === o ? "top" : "bottom",
                            g = "right" === n ? "left" : "right",
                            b = B("transform");
                        if (
                            ((d =
                                "bottom" == c
                                    ? "HTML" === l.nodeName
                                        ? -l.clientHeight + h.bottom
                                        : -f.height + h.bottom
                                    : h.top),
                            (s =
                                "right" == g
                                    ? "HTML" === l.nodeName
                                        ? -l.clientWidth + h.right
                                        : -f.width + h.right
                                    : h.left),
                            a && b)
                        )
                            (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                                (m[c] = 0),
                                (m[g] = 0),
                                (m.willChange = "transform");
                        else {
                            var w = "bottom" == c ? -1 : 1,
                                y = "right" == g ? -1 : 1;
                            (m[c] = d * w),
                                (m[g] = s * y),
                                (m.willChange = c + ", " + g);
                        }
                        var E = { "x-placement": e.placement };
                        return (
                            (e.attributes = le({}, E, e.attributes)),
                            (e.styles = le({}, m, e.styles)),
                            (e.arrowStyles = le(
                                {},
                                e.offsets.arrow,
                                e.arrowStyles
                            )),
                            e
                        );
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return (
                            V(e.instance.popper, e.styles),
                            j(e.instance.popper, e.attributes),
                            e.arrowElement &&
                                Object.keys(e.arrowStyles).length &&
                                V(e.arrowElement, e.arrowStyles),
                            e
                        );
                    },
                    onLoad: function (e, t, o, n, i) {
                        var r = L(i, t, e, o.positionFixed),
                            p = O(
                                o.placement,
                                r,
                                t,
                                e,
                                o.modifiers.flip.boundariesElement,
                                o.modifiers.flip.padding
                            );
                        return (
                            t.setAttribute("x-placement", p),
                            V(t, {
                                position: o.positionFixed
                                    ? "fixed"
                                    : "absolute",
                            }),
                            o
                        );
                    },
                    gpuAcceleration: void 0,
                },
            },
        }),
        ge
    );
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], e)
        : e(
              ((t =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : t || self).bootstrap = {}),
              t.jQuery,
              t.Popper
          );
})(this, function (t, e, n) {
    "use strict";
    function i(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
    }
    var o = i(e),
        a = i(n);
    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
        }
    }
    function l(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), t;
    }
    function r() {
        return (r =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (t[i] = n[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    function u(t) {
        var e = this,
            n = !1;
        return (
            o.default(this).one(d.TRANSITION_END, function () {
                n = !0;
            }),
            setTimeout(function () {
                n || d.triggerTransitionEnd(e);
            }, t),
            this
        );
    }
    var d = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            do {
                t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = o.default(t).css("transition-duration"),
                n = o.default(t).css("transition-delay"),
                i = parseFloat(e),
                a = parseFloat(n);
            return i || a
                ? ((e = e.split(",")[0]),
                  (n = n.split(",")[0]),
                  1e3 * (parseFloat(e) + parseFloat(n)))
                : 0;
        },
        reflow: function (t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
            o.default(t).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
            return Boolean("transitionend");
        },
        isElement: function (t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        a = e[i],
                        s =
                            a && d.isElement(a)
                                ? "element"
                                : null === (l = a) || "undefined" == typeof l
                                ? "" + l
                                : {}.toString
                                      .call(l)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    if (!new RegExp(o).test(s))
                        throw new Error(
                            t.toUpperCase() +
                                ': Option "' +
                                i +
                                '" provided type "' +
                                s +
                                '" but expected type "' +
                                o +
                                '".'
                        );
                }
            var l;
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? d.findShadowRoot(t.parentNode)
                : null;
        },
        jQueryDetection: function () {
            if ("undefined" == typeof o.default)
                throw new TypeError(
                    "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                );
            var t = o.default.fn.jquery.split(" ")[0].split(".");
            if (
                (t[0] < 2 && t[1] < 9) ||
                (1 === t[0] && 9 === t[1] && t[2] < 1) ||
                t[0] >= 4
            )
                throw new Error(
                    "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
                );
        },
    };
    d.jQueryDetection(),
        (o.default.fn.emulateTransitionEnd = u),
        (o.default.event.special[d.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (o.default(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments);
            },
        });
    var f = "alert",
        c = o.default.fn[f],
        h = (function () {
            function t(t) {
                this._element = t;
            }
            var e = t.prototype;
            return (
                (e.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() ||
                            this._removeElement(e);
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.alert"),
                        (this._element = null);
                }),
                (e._getRootElement = function (t) {
                    var e = d.getSelectorFromElement(t),
                        n = !1;
                    return (
                        e && (n = document.querySelector(e)),
                        n || (n = o.default(t).closest(".alert")[0]),
                        n
                    );
                }),
                (e._triggerCloseEvent = function (t) {
                    var e = o.default.Event("close.bs.alert");
                    return o.default(t).trigger(e), e;
                }),
                (e._removeElement = function (t) {
                    var e = this;
                    if (
                        (o.default(t).removeClass("show"),
                        o.default(t).hasClass("fade"))
                    ) {
                        var n = d.getTransitionDurationFromElement(t);
                        o.default(t)
                            .one(d.TRANSITION_END, function (n) {
                                return e._destroyElement(t, n);
                            })
                            .emulateTransitionEnd(n);
                    } else this._destroyElement(t);
                }),
                (e._destroyElement = function (t) {
                    o.default(t).detach().trigger("closed.bs.alert").remove();
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.alert");
                        i || ((i = new t(this)), n.data("bs.alert", i)),
                            "close" === e && i[e](this);
                    });
                }),
                (t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.alert.data-api",
            '[data-dismiss="alert"]',
            h._handleDismiss(new h())
        ),
        (o.default.fn[f] = h._jQueryInterface),
        (o.default.fn[f].Constructor = h),
        (o.default.fn[f].noConflict = function () {
            return (o.default.fn[f] = c), h._jQueryInterface;
        });
    var g = o.default.fn.button,
        m = (function () {
            function t(t) {
                (this._element = t), (this.shouldAvoidTriggerChange = !1);
            }
            var e = t.prototype;
            return (
                (e.toggle = function () {
                    var t = !0,
                        e = !0,
                        n = o
                            .default(this._element)
                            .closest('[data-toggle="buttons"]')[0];
                    if (n) {
                        var i = this._element.querySelector(
                            'input:not([type="hidden"])'
                        );
                        if (i) {
                            if ("radio" === i.type)
                                if (
                                    i.checked &&
                                    this._element.classList.contains("active")
                                )
                                    t = !1;
                                else {
                                    var a = n.querySelector(".active");
                                    a && o.default(a).removeClass("active");
                                }
                            t &&
                                (("checkbox" !== i.type &&
                                    "radio" !== i.type) ||
                                    (i.checked =
                                        !this._element.classList.contains(
                                            "active"
                                        )),
                                this.shouldAvoidTriggerChange ||
                                    o.default(i).trigger("change")),
                                i.focus(),
                                (e = !1);
                        }
                    }
                    this._element.hasAttribute("disabled") ||
                        this._element.classList.contains("disabled") ||
                        (e &&
                            this._element.setAttribute(
                                "aria-pressed",
                                !this._element.classList.contains("active")
                            ),
                        t && o.default(this._element).toggleClass("active"));
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.button"),
                        (this._element = null);
                }),
                (t._jQueryInterface = function (e, n) {
                    return this.each(function () {
                        var i = o.default(this),
                            a = i.data("bs.button");
                        a || ((a = new t(this)), i.data("bs.button", a)),
                            (a.shouldAvoidTriggerChange = n),
                            "toggle" === e && a[e]();
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.button.data-api",
            '[data-toggle^="button"]',
            function (t) {
                var e = t.target,
                    n = e;
                if (
                    (o.default(e).hasClass("btn") ||
                        (e = o.default(e).closest(".btn")[0]),
                    !e ||
                        e.hasAttribute("disabled") ||
                        e.classList.contains("disabled"))
                )
                    t.preventDefault();
                else {
                    var i = e.querySelector('input:not([type="hidden"])');
                    if (
                        i &&
                        (i.hasAttribute("disabled") ||
                            i.classList.contains("disabled"))
                    )
                        return void t.preventDefault();
                    ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
                        m._jQueryInterface.call(
                            o.default(e),
                            "toggle",
                            "INPUT" === n.tagName
                        );
                }
            }
        )
        .on(
            "focus.bs.button.data-api blur.bs.button.data-api",
            '[data-toggle^="button"]',
            function (t) {
                var e = o.default(t.target).closest(".btn")[0];
                o.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
            }
        ),
        o.default(window).on("load.bs.button.data-api", function () {
            for (
                var t = [].slice.call(
                        document.querySelectorAll(
                            '[data-toggle="buttons"] .btn'
                        )
                    ),
                    e = 0,
                    n = t.length;
                e < n;
                e++
            ) {
                var i = t[e],
                    o = i.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked")
                    ? i.classList.add("active")
                    : i.classList.remove("active");
            }
            for (
                var a = 0,
                    s = (t = [].slice.call(
                        document.querySelectorAll('[data-toggle="button"]')
                    )).length;
                a < s;
                a++
            ) {
                var l = t[a];
                "true" === l.getAttribute("aria-pressed")
                    ? l.classList.add("active")
                    : l.classList.remove("active");
            }
        }),
        (o.default.fn.button = m._jQueryInterface),
        (o.default.fn.button.Constructor = m),
        (o.default.fn.button.noConflict = function () {
            return (o.default.fn.button = g), m._jQueryInterface;
        });
    var p = "carousel",
        _ = ".bs.carousel",
        v = o.default.fn[p],
        b = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        E = { TOUCH: "touch", PEN: "pen" },
        w = (function () {
            function t(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(
                        ".carousel-indicators"
                    )),
                    (this._touchSupported =
                        "ontouchstart" in document.documentElement ||
                        navigator.maxTouchPoints > 0),
                    (this._pointerEvent = Boolean(
                        window.PointerEvent || window.MSPointerEvent
                    )),
                    this._addEventListeners();
            }
            var e = t.prototype;
            return (
                (e.next = function () {
                    this._isSliding || this._slide("next");
                }),
                (e.nextWhenVisible = function () {
                    var t = o.default(this._element);
                    !document.hidden &&
                        t.is(":visible") &&
                        "hidden" !== t.css("visibility") &&
                        this.next();
                }),
                (e.prev = function () {
                    this._isSliding || this._slide("prev");
                }),
                (e.pause = function (t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(
                            ".carousel-item-next, .carousel-item-prev"
                        ) &&
                            (d.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                }),
                (e.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval &&
                            (clearInterval(this._interval),
                            (this._interval = null)),
                        this._config.interval &&
                            !this._isPaused &&
                            (this._interval = setInterval(
                                (document.visibilityState
                                    ? this.nextWhenVisible
                                    : this.next
                                ).bind(this),
                                this._config.interval
                            ));
                }),
                (e.to = function (t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(
                        ".active.carousel-item"
                    );
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            o.default(this._element).one(
                                "slid.bs.carousel",
                                function () {
                                    return e.to(t);
                                }
                            );
                        else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = t > n ? "next" : "prev";
                            this._slide(i, this._items[t]);
                        }
                }),
                (e.dispose = function () {
                    o.default(this._element).off(_),
                        o.default.removeData(this._element, "bs.carousel"),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (e._getConfig = function (t) {
                    return (t = r({}, b, t)), d.typeCheckConfig(p, t, y), t;
                }),
                (e._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        (this.touchDeltaX = 0),
                            e > 0 && this.prev(),
                            e < 0 && this.next();
                    }
                }),
                (e._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard &&
                        o
                            .default(this._element)
                            .on("keydown.bs.carousel", function (e) {
                                return t._keydown(e);
                            }),
                        "hover" === this._config.pause &&
                            o
                                .default(this._element)
                                .on("mouseenter.bs.carousel", function (e) {
                                    return t.pause(e);
                                })
                                .on("mouseleave.bs.carousel", function (e) {
                                    return t.cycle(e);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (e._addTouchEventListeners = function () {
                    var t = this;
                    if (this._touchSupported) {
                        var e = function (e) {
                                t._pointerEvent &&
                                E[e.originalEvent.pointerType.toUpperCase()]
                                    ? (t.touchStartX = e.originalEvent.clientX)
                                    : t._pointerEvent ||
                                      (t.touchStartX =
                                          e.originalEvent.touches[0].clientX);
                            },
                            n = function (e) {
                                t._pointerEvent &&
                                    E[
                                        e.originalEvent.pointerType.toUpperCase()
                                    ] &&
                                    (t.touchDeltaX =
                                        e.originalEvent.clientX -
                                        t.touchStartX),
                                    t._handleSwipe(),
                                    "hover" === t._config.pause &&
                                        (t.pause(),
                                        t.touchTimeout &&
                                            clearTimeout(t.touchTimeout),
                                        (t.touchTimeout = setTimeout(function (
                                            e
                                        ) {
                                            return t.cycle(e);
                                        },
                                        500 + t._config.interval)));
                            };
                        o
                            .default(
                                this._element.querySelectorAll(
                                    ".carousel-item img"
                                )
                            )
                            .on("dragstart.bs.carousel", function (t) {
                                return t.preventDefault();
                            }),
                            this._pointerEvent
                                ? (o
                                      .default(this._element)
                                      .on(
                                          "pointerdown.bs.carousel",
                                          function (t) {
                                              return e(t);
                                          }
                                      ),
                                  o
                                      .default(this._element)
                                      .on(
                                          "pointerup.bs.carousel",
                                          function (t) {
                                              return n(t);
                                          }
                                      ),
                                  this._element.classList.add("pointer-event"))
                                : (o
                                      .default(this._element)
                                      .on(
                                          "touchstart.bs.carousel",
                                          function (t) {
                                              return e(t);
                                          }
                                      ),
                                  o
                                      .default(this._element)
                                      .on(
                                          "touchmove.bs.carousel",
                                          function (e) {
                                              return (function (e) {
                                                  e.originalEvent.touches &&
                                                  e.originalEvent.touches
                                                      .length > 1
                                                      ? (t.touchDeltaX = 0)
                                                      : (t.touchDeltaX =
                                                            e.originalEvent
                                                                .touches[0]
                                                                .clientX -
                                                            t.touchStartX);
                                              })(e);
                                          }
                                      ),
                                  o
                                      .default(this._element)
                                      .on("touchend.bs.carousel", function (t) {
                                          return n(t);
                                      }));
                    }
                }),
                (e._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (e._getItemIndex = function (t) {
                    return (
                        (this._items =
                            t && t.parentNode
                                ? [].slice.call(
                                      t.parentNode.querySelectorAll(
                                          ".carousel-item"
                                      )
                                  )
                                : []),
                        this._items.indexOf(t)
                    );
                }),
                (e._getItemByDirection = function (t, e) {
                    var n = "next" === t,
                        i = "prev" === t,
                        o = this._getItemIndex(e),
                        a = this._items.length - 1;
                    if (
                        ((i && 0 === o) || (n && o === a)) &&
                        !this._config.wrap
                    )
                        return e;
                    var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === s
                        ? this._items[this._items.length - 1]
                        : this._items[s];
                }),
                (e._triggerSlideEvent = function (t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(
                            this._element.querySelector(".active.carousel-item")
                        ),
                        a = o.default.Event("slide.bs.carousel", {
                            relatedTarget: t,
                            direction: e,
                            from: i,
                            to: n,
                        });
                    return o.default(this._element).trigger(a), a;
                }),
                (e._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(
                            this._indicatorsElement.querySelectorAll(".active")
                        );
                        o.default(e).removeClass("active");
                        var n =
                            this._indicatorsElement.children[
                                this._getItemIndex(t)
                            ];
                        n && o.default(n).addClass("active");
                    }
                }),
                (e._slide = function (t, e) {
                    var n,
                        i,
                        a,
                        s = this,
                        l = this._element.querySelector(
                            ".active.carousel-item"
                        ),
                        r = this._getItemIndex(l),
                        u = e || (l && this._getItemByDirection(t, l)),
                        f = this._getItemIndex(u),
                        c = Boolean(this._interval);
                    if (
                        ("next" === t
                            ? ((n = "carousel-item-left"),
                              (i = "carousel-item-next"),
                              (a = "left"))
                            : ((n = "carousel-item-right"),
                              (i = "carousel-item-prev"),
                              (a = "right")),
                        u && o.default(u).hasClass("active"))
                    )
                        this._isSliding = !1;
                    else if (
                        !this._triggerSlideEvent(u, a).isDefaultPrevented() &&
                        l &&
                        u
                    ) {
                        (this._isSliding = !0),
                            c && this.pause(),
                            this._setActiveIndicatorElement(u);
                        var h = o.default.Event("slid.bs.carousel", {
                            relatedTarget: u,
                            direction: a,
                            from: r,
                            to: f,
                        });
                        if (o.default(this._element).hasClass("slide")) {
                            o.default(u).addClass(i),
                                d.reflow(u),
                                o.default(l).addClass(n),
                                o.default(u).addClass(n);
                            var g = parseInt(
                                u.getAttribute("data-interval"),
                                10
                            );
                            g
                                ? ((this._config.defaultInterval =
                                      this._config.defaultInterval ||
                                      this._config.interval),
                                  (this._config.interval = g))
                                : (this._config.interval =
                                      this._config.defaultInterval ||
                                      this._config.interval);
                            var m = d.getTransitionDurationFromElement(l);
                            o.default(l)
                                .one(d.TRANSITION_END, function () {
                                    o
                                        .default(u)
                                        .removeClass(n + " " + i)
                                        .addClass("active"),
                                        o
                                            .default(l)
                                            .removeClass(
                                                "active " + i + " " + n
                                            ),
                                        (s._isSliding = !1),
                                        setTimeout(function () {
                                            return o
                                                .default(s._element)
                                                .trigger(h);
                                        }, 0);
                                })
                                .emulateTransitionEnd(m);
                        } else
                            o.default(l).removeClass("active"),
                                o.default(u).addClass("active"),
                                (this._isSliding = !1),
                                o.default(this._element).trigger(h);
                        c && this.cycle();
                    }
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.carousel"),
                            i = r({}, b, o.default(this).data());
                        "object" == typeof e && (i = r({}, i, e));
                        var a = "string" == typeof e ? e : i.slide;
                        if (
                            (n ||
                                ((n = new t(this, i)),
                                o.default(this).data("bs.carousel", n)),
                            "number" == typeof e)
                        )
                            n.to(e);
                        else if ("string" == typeof a) {
                            if ("undefined" == typeof n[a])
                                throw new TypeError(
                                    'No method named "' + a + '"'
                                );
                            n[a]();
                        } else i.interval && i.ride && (n.pause(), n.cycle());
                    });
                }),
                (t._dataApiClickHandler = function (e) {
                    var n = d.getSelectorFromElement(this);
                    if (n) {
                        var i = o.default(n)[0];
                        if (i && o.default(i).hasClass("carousel")) {
                            var a = r(
                                    {},
                                    o.default(i).data(),
                                    o.default(this).data()
                                ),
                                s = this.getAttribute("data-slide-to");
                            s && (a.interval = !1),
                                t._jQueryInterface.call(o.default(i), a),
                                s && o.default(i).data("bs.carousel").to(s),
                                e.preventDefault();
                        }
                    }
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return b;
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.carousel.data-api",
            "[data-slide], [data-slide-to]",
            w._dataApiClickHandler
        ),
        o.default(window).on("load.bs.carousel.data-api", function () {
            for (
                var t = [].slice.call(
                        document.querySelectorAll('[data-ride="carousel"]')
                    ),
                    e = 0,
                    n = t.length;
                e < n;
                e++
            ) {
                var i = o.default(t[e]);
                w._jQueryInterface.call(i, i.data());
            }
        }),
        (o.default.fn[p] = w._jQueryInterface),
        (o.default.fn[p].Constructor = w),
        (o.default.fn[p].noConflict = function () {
            return (o.default.fn[p] = v), w._jQueryInterface;
        });
    var T = "collapse",
        C = o.default.fn[T],
        S = { toggle: !0, parent: "" },
        N = { toggle: "boolean", parent: "(string|element)" },
        D = (function () {
            function t(t, e) {
                (this._isTransitioning = !1),
                    (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._triggerArray = [].slice.call(
                        document.querySelectorAll(
                            '[data-toggle="collapse"][href="#' +
                                t.id +
                                '"],[data-toggle="collapse"][data-target="#' +
                                t.id +
                                '"]'
                        )
                    ));
                for (
                    var n = [].slice.call(
                            document.querySelectorAll(
                                '[data-toggle="collapse"]'
                            )
                        ),
                        i = 0,
                        o = n.length;
                    i < o;
                    i++
                ) {
                    var a = n[i],
                        s = d.getSelectorFromElement(a),
                        l = [].slice
                            .call(document.querySelectorAll(s))
                            .filter(function (e) {
                                return e === t;
                            });
                    null !== s &&
                        l.length > 0 &&
                        ((this._selector = s), this._triggerArray.push(a));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                    this._config.parent ||
                        this._addAriaAndCollapsedClass(
                            this._element,
                            this._triggerArray
                        ),
                    this._config.toggle && this.toggle();
            }
            var e = t.prototype;
            return (
                (e.toggle = function () {
                    o.default(this._element).hasClass("show")
                        ? this.hide()
                        : this.show();
                }),
                (e.show = function () {
                    var e,
                        n,
                        i = this;
                    if (
                        !this._isTransitioning &&
                        !o.default(this._element).hasClass("show") &&
                        (this._parent &&
                            0 ===
                                (e = [].slice
                                    .call(
                                        this._parent.querySelectorAll(
                                            ".show, .collapsing"
                                        )
                                    )
                                    .filter(function (t) {
                                        return "string" ==
                                            typeof i._config.parent
                                            ? t.getAttribute("data-parent") ===
                                                  i._config.parent
                                            : t.classList.contains("collapse");
                                    })).length &&
                            (e = null),
                        !(
                            e &&
                            (n = o
                                .default(e)
                                .not(this._selector)
                                .data("bs.collapse")) &&
                            n._isTransitioning
                        ))
                    ) {
                        var a = o.default.Event("show.bs.collapse");
                        if (
                            (o.default(this._element).trigger(a),
                            !a.isDefaultPrevented())
                        ) {
                            e &&
                                (t._jQueryInterface.call(
                                    o.default(e).not(this._selector),
                                    "hide"
                                ),
                                n || o.default(e).data("bs.collapse", null));
                            var s = this._getDimension();
                            o
                                .default(this._element)
                                .removeClass("collapse")
                                .addClass("collapsing"),
                                (this._element.style[s] = 0),
                                this._triggerArray.length &&
                                    o
                                        .default(this._triggerArray)
                                        .removeClass("collapsed")
                                        .attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var l =
                                    "scroll" +
                                    (s[0].toUpperCase() + s.slice(1)),
                                r = d.getTransitionDurationFromElement(
                                    this._element
                                );
                            o
                                .default(this._element)
                                .one(d.TRANSITION_END, function () {
                                    o
                                        .default(i._element)
                                        .removeClass("collapsing")
                                        .addClass("collapse show"),
                                        (i._element.style[s] = ""),
                                        i.setTransitioning(!1),
                                        o
                                            .default(i._element)
                                            .trigger("shown.bs.collapse");
                                })
                                .emulateTransitionEnd(r),
                                (this._element.style[s] =
                                    this._element[l] + "px");
                        }
                    }
                }),
                (e.hide = function () {
                    var t = this;
                    if (
                        !this._isTransitioning &&
                        o.default(this._element).hasClass("show")
                    ) {
                        var e = o.default.Event("hide.bs.collapse");
                        if (
                            (o.default(this._element).trigger(e),
                            !e.isDefaultPrevented())
                        ) {
                            var n = this._getDimension();
                            (this._element.style[n] =
                                this._element.getBoundingClientRect()[n] +
                                "px"),
                                d.reflow(this._element),
                                o
                                    .default(this._element)
                                    .addClass("collapsing")
                                    .removeClass("collapse show");
                            var i = this._triggerArray.length;
                            if (i > 0)
                                for (var a = 0; a < i; a++) {
                                    var s = this._triggerArray[a],
                                        l = d.getSelectorFromElement(s);
                                    if (null !== l)
                                        o
                                            .default(
                                                [].slice.call(
                                                    document.querySelectorAll(l)
                                                )
                                            )
                                            .hasClass("show") ||
                                            o
                                                .default(s)
                                                .addClass("collapsed")
                                                .attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var r = d.getTransitionDurationFromElement(
                                this._element
                            );
                            o.default(this._element)
                                .one(d.TRANSITION_END, function () {
                                    t.setTransitioning(!1),
                                        o
                                            .default(t._element)
                                            .removeClass("collapsing")
                                            .addClass("collapse")
                                            .trigger("hidden.bs.collapse");
                                })
                                .emulateTransitionEnd(r);
                        }
                    }
                }),
                (e.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.collapse"),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                }),
                (e._getConfig = function (t) {
                    return (
                        ((t = r({}, S, t)).toggle = Boolean(t.toggle)),
                        d.typeCheckConfig(T, t, N),
                        t
                    );
                }),
                (e._getDimension = function () {
                    return o.default(this._element).hasClass("width")
                        ? "width"
                        : "height";
                }),
                (e._getParent = function () {
                    var e,
                        n = this;
                    d.isElement(this._config.parent)
                        ? ((e = this._config.parent),
                          "undefined" != typeof this._config.parent.jquery &&
                              (e = this._config.parent[0]))
                        : (e = document.querySelector(this._config.parent));
                    var i =
                            '[data-toggle="collapse"][data-parent="' +
                            this._config.parent +
                            '"]',
                        a = [].slice.call(e.querySelectorAll(i));
                    return (
                        o.default(a).each(function (e, i) {
                            n._addAriaAndCollapsedClass(
                                t._getTargetFromElement(i),
                                [i]
                            );
                        }),
                        e
                    );
                }),
                (e._addAriaAndCollapsedClass = function (t, e) {
                    var n = o.default(t).hasClass("show");
                    e.length &&
                        o
                            .default(e)
                            .toggleClass("collapsed", !n)
                            .attr("aria-expanded", n);
                }),
                (t._getTargetFromElement = function (t) {
                    var e = d.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.collapse"),
                            a = r(
                                {},
                                S,
                                n.data(),
                                "object" == typeof e && e ? e : {}
                            );
                        if (
                            (!i &&
                                a.toggle &&
                                "string" == typeof e &&
                                /show|hide/.test(e) &&
                                (a.toggle = !1),
                            i ||
                                ((i = new t(this, a)),
                                n.data("bs.collapse", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e]();
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return S;
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.collapse.data-api",
            '[data-toggle="collapse"]',
            function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var e = o.default(this),
                    n = d.getSelectorFromElement(this),
                    i = [].slice.call(document.querySelectorAll(n));
                o.default(i).each(function () {
                    var t = o.default(this),
                        n = t.data("bs.collapse") ? "toggle" : e.data();
                    D._jQueryInterface.call(t, n);
                });
            }
        ),
        (o.default.fn[T] = D._jQueryInterface),
        (o.default.fn[T].Constructor = D),
        (o.default.fn[T].noConflict = function () {
            return (o.default.fn[T] = C), D._jQueryInterface;
        });
    var k = "dropdown",
        A = o.default.fn[k],
        I = new RegExp("38|40|27"),
        j = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
        },
        O = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)",
        },
        x = (function () {
            function t(t, e) {
                (this._element = t),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar()),
                    this._addEventListeners();
            }
            var e = t.prototype;
            return (
                (e.toggle = function () {
                    if (
                        !this._element.disabled &&
                        !o.default(this._element).hasClass("disabled")
                    ) {
                        var e = o.default(this._menu).hasClass("show");
                        t._clearMenus(), e || this.show(!0);
                    }
                }),
                (e.show = function (e) {
                    if (
                        (void 0 === e && (e = !1),
                        !(
                            this._element.disabled ||
                            o.default(this._element).hasClass("disabled") ||
                            o.default(this._menu).hasClass("show")
                        ))
                    ) {
                        var n = { relatedTarget: this._element },
                            i = o.default.Event("show.bs.dropdown", n),
                            s = t._getParentFromElement(this._element);
                        if (
                            (o.default(s).trigger(i), !i.isDefaultPrevented())
                        ) {
                            if (!this._inNavbar && e) {
                                if ("undefined" == typeof a.default)
                                    throw new TypeError(
                                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                                    );
                                var l = this._element;
                                "parent" === this._config.reference
                                    ? (l = s)
                                    : d.isElement(this._config.reference) &&
                                      ((l = this._config.reference),
                                      "undefined" !=
                                          typeof this._config.reference
                                              .jquery &&
                                          (l = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary &&
                                        o
                                            .default(s)
                                            .addClass("position-static"),
                                    (this._popper = new a.default(
                                        l,
                                        this._menu,
                                        this._getPopperConfig()
                                    ));
                            }
                            "ontouchstart" in document.documentElement &&
                                0 ===
                                    o.default(s).closest(".navbar-nav")
                                        .length &&
                                o
                                    .default(document.body)
                                    .children()
                                    .on("mouseover", null, o.default.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                o.default(this._menu).toggleClass("show"),
                                o
                                    .default(s)
                                    .toggleClass("show")
                                    .trigger(
                                        o.default.Event("shown.bs.dropdown", n)
                                    );
                        }
                    }
                }),
                (e.hide = function () {
                    if (
                        !this._element.disabled &&
                        !o.default(this._element).hasClass("disabled") &&
                        o.default(this._menu).hasClass("show")
                    ) {
                        var e = { relatedTarget: this._element },
                            n = o.default.Event("hide.bs.dropdown", e),
                            i = t._getParentFromElement(this._element);
                        o.default(i).trigger(n),
                            n.isDefaultPrevented() ||
                                (this._popper && this._popper.destroy(),
                                o.default(this._menu).toggleClass("show"),
                                o
                                    .default(i)
                                    .toggleClass("show")
                                    .trigger(
                                        o.default.Event("hidden.bs.dropdown", e)
                                    ));
                    }
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.dropdown"),
                        o.default(this._element).off(".bs.dropdown"),
                        (this._element = null),
                        (this._menu = null),
                        null !== this._popper &&
                            (this._popper.destroy(), (this._popper = null));
                }),
                (e.update = function () {
                    (this._inNavbar = this._detectNavbar()),
                        null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e._addEventListeners = function () {
                    var t = this;
                    o.default(this._element).on(
                        "click.bs.dropdown",
                        function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle();
                        }
                    );
                }),
                (e._getConfig = function (t) {
                    return (
                        (t = r(
                            {},
                            this.constructor.Default,
                            o.default(this._element).data(),
                            t
                        )),
                        d.typeCheckConfig(k, t, this.constructor.DefaultType),
                        t
                    );
                }),
                (e._getMenuElement = function () {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(".dropdown-menu"));
                    }
                    return this._menu;
                }),
                (e._getPlacement = function () {
                    var t = o.default(this._element.parentNode),
                        e = "bottom-start";
                    return (
                        t.hasClass("dropup")
                            ? (e = o
                                  .default(this._menu)
                                  .hasClass("dropdown-menu-right")
                                  ? "top-end"
                                  : "top-start")
                            : t.hasClass("dropright")
                            ? (e = "right-start")
                            : t.hasClass("dropleft")
                            ? (e = "left-start")
                            : o
                                  .default(this._menu)
                                  .hasClass("dropdown-menu-right") &&
                              (e = "bottom-end"),
                        e
                    );
                }),
                (e._detectNavbar = function () {
                    return (
                        o.default(this._element).closest(".navbar").length > 0
                    );
                }),
                (e._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (e.fn = function (e) {
                                  return (
                                      (e.offsets = r(
                                          {},
                                          e.offsets,
                                          t._config.offset(
                                              e.offsets,
                                              t._element
                                          ) || {}
                                      )),
                                      e
                                  );
                              })
                            : (e.offset = this._config.offset),
                        e
                    );
                }),
                (e._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: { enabled: this._config.flip },
                            preventOverflow: {
                                boundariesElement: this._config.boundary,
                            },
                        },
                    };
                    return (
                        "static" === this._config.display &&
                            (t.modifiers.applyStyle = { enabled: !1 }),
                        r({}, t, this._config.popperConfig)
                    );
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.dropdown");
                        if (
                            (n ||
                                ((n = new t(
                                    this,
                                    "object" == typeof e ? e : null
                                )),
                                o.default(this).data("bs.dropdown", n)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof n[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            n[e]();
                        }
                    });
                }),
                (t._clearMenus = function (e) {
                    if (
                        !e ||
                        (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    )
                        for (
                            var n = [].slice.call(
                                    document.querySelectorAll(
                                        '[data-toggle="dropdown"]'
                                    )
                                ),
                                i = 0,
                                a = n.length;
                            i < a;
                            i++
                        ) {
                            var s = t._getParentFromElement(n[i]),
                                l = o.default(n[i]).data("bs.dropdown"),
                                r = { relatedTarget: n[i] };
                            if (
                                (e && "click" === e.type && (r.clickEvent = e),
                                l)
                            ) {
                                var u = l._menu;
                                if (
                                    o.default(s).hasClass("show") &&
                                    !(
                                        e &&
                                        (("click" === e.type &&
                                            /input|textarea/i.test(
                                                e.target.tagName
                                            )) ||
                                            ("keyup" === e.type &&
                                                9 === e.which)) &&
                                        o.default.contains(s, e.target)
                                    )
                                ) {
                                    var d = o.default.Event(
                                        "hide.bs.dropdown",
                                        r
                                    );
                                    o.default(s).trigger(d),
                                        d.isDefaultPrevented() ||
                                            ("ontouchstart" in
                                                document.documentElement &&
                                                o
                                                    .default(document.body)
                                                    .children()
                                                    .off(
                                                        "mouseover",
                                                        null,
                                                        o.default.noop
                                                    ),
                                            n[i].setAttribute(
                                                "aria-expanded",
                                                "false"
                                            ),
                                            l._popper && l._popper.destroy(),
                                            o.default(u).removeClass("show"),
                                            o
                                                .default(s)
                                                .removeClass("show")
                                                .trigger(
                                                    o.default.Event(
                                                        "hidden.bs.dropdown",
                                                        r
                                                    )
                                                ));
                                }
                            }
                        }
                }),
                (t._getParentFromElement = function (t) {
                    var e,
                        n = d.getSelectorFromElement(t);
                    return (
                        n && (e = document.querySelector(n)), e || t.parentNode
                    );
                }),
                (t._dataApiKeydownHandler = function (e) {
                    if (
                        !(/input|textarea/i.test(e.target.tagName)
                            ? 32 === e.which ||
                              (27 !== e.which &&
                                  ((40 !== e.which && 38 !== e.which) ||
                                      o
                                          .default(e.target)
                                          .closest(".dropdown-menu").length))
                            : !I.test(e.which)) &&
                        !this.disabled &&
                        !o.default(this).hasClass("disabled")
                    ) {
                        var n = t._getParentFromElement(this),
                            i = o.default(n).hasClass("show");
                        if (i || 27 !== e.which) {
                            if (
                                (e.preventDefault(),
                                e.stopPropagation(),
                                !i || 27 === e.which || 32 === e.which)
                            )
                                return (
                                    27 === e.which &&
                                        o
                                            .default(
                                                n.querySelector(
                                                    '[data-toggle="dropdown"]'
                                                )
                                            )
                                            .trigger("focus"),
                                    void o.default(this).trigger("click")
                                );
                            var a = [].slice
                                .call(
                                    n.querySelectorAll(
                                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                                    )
                                )
                                .filter(function (t) {
                                    return o.default(t).is(":visible");
                                });
                            if (0 !== a.length) {
                                var s = a.indexOf(e.target);
                                38 === e.which && s > 0 && s--,
                                    40 === e.which && s < a.length - 1 && s++,
                                    s < 0 && (s = 0),
                                    a[s].focus();
                            }
                        }
                    }
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return j;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return O;
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "keydown.bs.dropdown.data-api",
            '[data-toggle="dropdown"]',
            x._dataApiKeydownHandler
        )
        .on(
            "keydown.bs.dropdown.data-api",
            ".dropdown-menu",
            x._dataApiKeydownHandler
        )
        .on(
            "click.bs.dropdown.data-api keyup.bs.dropdown.data-api",
            x._clearMenus
        )
        .on(
            "click.bs.dropdown.data-api",
            '[data-toggle="dropdown"]',
            function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    x._jQueryInterface.call(o.default(this), "toggle");
            }
        )
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation();
        }),
        (o.default.fn[k] = x._jQueryInterface),
        (o.default.fn[k].Constructor = x),
        (o.default.fn[k].noConflict = function () {
            return (o.default.fn[k] = A), x._jQueryInterface;
        });
    var P = o.default.fn.modal,
        R = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        L = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
        },
        q = (function () {
            function t(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(".modal-dialog")),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var e = t.prototype;
            return (
                (e.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (e.show = function (t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        o.default(this._element).hasClass("fade") &&
                            (this._isTransitioning = !0);
                        var n = o.default.Event("show.bs.modal", {
                            relatedTarget: t,
                        });
                        o.default(this._element).trigger(n),
                            this._isShown ||
                                n.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                o
                                    .default(this._element)
                                    .on(
                                        "click.dismiss.bs.modal",
                                        '[data-dismiss="modal"]',
                                        function (t) {
                                            return e.hide(t);
                                        }
                                    ),
                                o
                                    .default(this._dialog)
                                    .on(
                                        "mousedown.dismiss.bs.modal",
                                        function () {
                                            o.default(e._element).one(
                                                "mouseup.dismiss.bs.modal",
                                                function (t) {
                                                    o
                                                        .default(t.target)
                                                        .is(e._element) &&
                                                        (e._ignoreBackdropClick =
                                                            !0);
                                                }
                                            );
                                        }
                                    ),
                                this._showBackdrop(function () {
                                    return e._showElement(t);
                                }));
                    }
                }),
                (e.hide = function (t) {
                    var e = this;
                    if (
                        (t && t.preventDefault(),
                        this._isShown && !this._isTransitioning)
                    ) {
                        var n = o.default.Event("hide.bs.modal");
                        if (
                            (o.default(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented())
                        ) {
                            this._isShown = !1;
                            var i = o.default(this._element).hasClass("fade");
                            if (
                                (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                o.default(document).off("focusin.bs.modal"),
                                o.default(this._element).removeClass("show"),
                                o
                                    .default(this._element)
                                    .off("click.dismiss.bs.modal"),
                                o
                                    .default(this._dialog)
                                    .off("mousedown.dismiss.bs.modal"),
                                i)
                            ) {
                                var a = d.getTransitionDurationFromElement(
                                    this._element
                                );
                                o.default(this._element)
                                    .one(d.TRANSITION_END, function (t) {
                                        return e._hideModal(t);
                                    })
                                    .emulateTransitionEnd(a);
                            } else this._hideModal();
                        }
                    }
                }),
                (e.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return o.default(t).off(".bs.modal");
                    }),
                        o.default(document).off("focusin.bs.modal"),
                        o.default.removeData(this._element, "bs.modal"),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (e.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (e._getConfig = function (t) {
                    return (
                        (t = r({}, R, t)), d.typeCheckConfig("modal", t, L), t
                    );
                }),
                (e._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var e = o.default.Event("hidePrevented.bs.modal");
                        if (
                            (o.default(this._element).trigger(e),
                            e.isDefaultPrevented())
                        )
                            return;
                        var n =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight;
                        n || (this._element.style.overflowY = "hidden"),
                            this._element.classList.add("modal-static");
                        var i = d.getTransitionDurationFromElement(
                            this._dialog
                        );
                        o.default(this._element).off(d.TRANSITION_END),
                            o
                                .default(this._element)
                                .one(d.TRANSITION_END, function () {
                                    t._element.classList.remove("modal-static"),
                                        n ||
                                            o
                                                .default(t._element)
                                                .one(
                                                    d.TRANSITION_END,
                                                    function () {
                                                        t._element.style.overflowY =
                                                            "";
                                                    }
                                                )
                                                .emulateTransitionEnd(
                                                    t._element,
                                                    i
                                                );
                                })
                                .emulateTransitionEnd(i),
                            this._element.focus();
                    } else this.hide();
                }),
                (e._showElement = function (t) {
                    var e = this,
                        n = o.default(this._element).hasClass("fade"),
                        i = this._dialog
                            ? this._dialog.querySelector(".modal-body")
                            : null;
                    (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        o
                            .default(this._dialog)
                            .hasClass("modal-dialog-scrollable") && i
                            ? (i.scrollTop = 0)
                            : (this._element.scrollTop = 0),
                        n && d.reflow(this._element),
                        o.default(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var a = o.default.Event("shown.bs.modal", {
                            relatedTarget: t,
                        }),
                        s = function () {
                            e._config.focus && e._element.focus(),
                                (e._isTransitioning = !1),
                                o.default(e._element).trigger(a);
                        };
                    if (n) {
                        var l = d.getTransitionDurationFromElement(
                            this._dialog
                        );
                        o.default(this._dialog)
                            .one(d.TRANSITION_END, s)
                            .emulateTransitionEnd(l);
                    } else s();
                }),
                (e._enforceFocus = function () {
                    var t = this;
                    o.default(document)
                        .off("focusin.bs.modal")
                        .on("focusin.bs.modal", function (e) {
                            document !== e.target &&
                                t._element !== e.target &&
                                0 ===
                                    o.default(t._element).has(e.target)
                                        .length &&
                                t._element.focus();
                        });
                }),
                (e._setEscapeEvent = function () {
                    var t = this;
                    this._isShown
                        ? o
                              .default(this._element)
                              .on("keydown.dismiss.bs.modal", function (e) {
                                  t._config.keyboard && 27 === e.which
                                      ? (e.preventDefault(), t.hide())
                                      : t._config.keyboard ||
                                        27 !== e.which ||
                                        t._triggerBackdropTransition();
                              })
                        : this._isShown ||
                          o
                              .default(this._element)
                              .off("keydown.dismiss.bs.modal");
                }),
                (e._setResizeEvent = function () {
                    var t = this;
                    this._isShown
                        ? o.default(window).on("resize.bs.modal", function (e) {
                              return t.handleUpdate(e);
                          })
                        : o.default(window).off("resize.bs.modal");
                }),
                (e._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            o.default(document.body).removeClass("modal-open"),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                o
                                    .default(t._element)
                                    .trigger("hidden.bs.modal");
                        });
                }),
                (e._removeBackdrop = function () {
                    this._backdrop &&
                        (o.default(this._backdrop).remove(),
                        (this._backdrop = null));
                }),
                (e._showBackdrop = function (t) {
                    var e = this,
                        n = o.default(this._element).hasClass("fade")
                            ? "fade"
                            : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = "modal-backdrop"),
                            n && this._backdrop.classList.add(n),
                            o.default(this._backdrop).appendTo(document.body),
                            o
                                .default(this._element)
                                .on("click.dismiss.bs.modal", function (t) {
                                    e._ignoreBackdropClick
                                        ? (e._ignoreBackdropClick = !1)
                                        : t.target === t.currentTarget &&
                                          e._triggerBackdropTransition();
                                }),
                            n && d.reflow(this._backdrop),
                            o.default(this._backdrop).addClass("show"),
                            !t)
                        )
                            return;
                        if (!n) return void t();
                        var i = d.getTransitionDurationFromElement(
                            this._backdrop
                        );
                        o.default(this._backdrop)
                            .one(d.TRANSITION_END, t)
                            .emulateTransitionEnd(i);
                    } else if (!this._isShown && this._backdrop) {
                        o.default(this._backdrop).removeClass("show");
                        var a = function () {
                            e._removeBackdrop(), t && t();
                        };
                        if (o.default(this._element).hasClass("fade")) {
                            var s = d.getTransitionDurationFromElement(
                                this._backdrop
                            );
                            o.default(this._backdrop)
                                .one(d.TRANSITION_END, a)
                                .emulateTransitionEnd(s);
                        } else a();
                    } else t && t();
                }),
                (e._adjustDialog = function () {
                    var t =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                    !this._isBodyOverflowing &&
                        t &&
                        (this._element.style.paddingLeft =
                            this._scrollbarWidth + "px"),
                        this._isBodyOverflowing &&
                            !t &&
                            (this._element.style.paddingRight =
                                this._scrollbarWidth + "px");
                }),
                (e._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                }),
                (e._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                        Math.round(t.left + t.right) < window.innerWidth),
                        (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (e._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var e = [].slice.call(
                                document.querySelectorAll(
                                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                                )
                            ),
                            n = [].slice.call(
                                document.querySelectorAll(".sticky-top")
                            );
                        o.default(e).each(function (e, n) {
                            var i = n.style.paddingRight,
                                a = o.default(n).css("padding-right");
                            o.default(n)
                                .data("padding-right", i)
                                .css(
                                    "padding-right",
                                    parseFloat(a) + t._scrollbarWidth + "px"
                                );
                        }),
                            o.default(n).each(function (e, n) {
                                var i = n.style.marginRight,
                                    a = o.default(n).css("margin-right");
                                o.default(n)
                                    .data("margin-right", i)
                                    .css(
                                        "margin-right",
                                        parseFloat(a) - t._scrollbarWidth + "px"
                                    );
                            });
                        var i = document.body.style.paddingRight,
                            a = o.default(document.body).css("padding-right");
                        o.default(document.body)
                            .data("padding-right", i)
                            .css(
                                "padding-right",
                                parseFloat(a) + this._scrollbarWidth + "px"
                            );
                    }
                    o.default(document.body).addClass("modal-open");
                }),
                (e._resetScrollbar = function () {
                    var t = [].slice.call(
                        document.querySelectorAll(
                            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                        )
                    );
                    o.default(t).each(function (t, e) {
                        var n = o.default(e).data("padding-right");
                        o.default(e).removeData("padding-right"),
                            (e.style.paddingRight = n || "");
                    });
                    var e = [].slice.call(
                        document.querySelectorAll(".sticky-top")
                    );
                    o.default(e).each(function (t, e) {
                        var n = o.default(e).data("margin-right");
                        "undefined" != typeof n &&
                            o
                                .default(e)
                                .css("margin-right", n)
                                .removeData("margin-right");
                    });
                    var n = o.default(document.body).data("padding-right");
                    o.default(document.body).removeData("padding-right"),
                        (document.body.style.paddingRight = n || "");
                }),
                (e._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"),
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (t._jQueryInterface = function (e, n) {
                    return this.each(function () {
                        var i = o.default(this).data("bs.modal"),
                            a = r(
                                {},
                                R,
                                o.default(this).data(),
                                "object" == typeof e && e ? e : {}
                            );
                        if (
                            (i ||
                                ((i = new t(this, a)),
                                o.default(this).data("bs.modal", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e](n);
                        } else a.show && i.show(n);
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return R;
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
            var e,
                n = this,
                i = d.getSelectorFromElement(this);
            i && (e = document.querySelector(i));
            var a = o.default(e).data("bs.modal")
                ? "toggle"
                : r({}, o.default(e).data(), o.default(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
                t.preventDefault();
            var s = o.default(e).one("show.bs.modal", function (t) {
                t.isDefaultPrevented() ||
                    s.one("hidden.bs.modal", function () {
                        o.default(n).is(":visible") && n.focus();
                    });
            });
            q._jQueryInterface.call(o.default(e), a, this);
        }),
        (o.default.fn.modal = q._jQueryInterface),
        (o.default.fn.modal.Constructor = q),
        (o.default.fn.modal.noConflict = function () {
            return (o.default.fn.modal = P), q._jQueryInterface;
        });
    var F = [
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ],
        Q = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        B = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        H =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function U(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (
            var i = new window.DOMParser().parseFromString(t, "text/html"),
                o = Object.keys(e),
                a = [].slice.call(i.body.querySelectorAll("*")),
                s = function (t, n) {
                    var i = a[t],
                        s = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                        return i.parentNode.removeChild(i), "continue";
                    var l = [].slice.call(i.attributes),
                        r = [].concat(e["*"] || [], e[s] || []);
                    l.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n))
                                return (
                                    -1 === F.indexOf(n) ||
                                    Boolean(
                                        t.nodeValue.match(B) ||
                                            t.nodeValue.match(H)
                                    )
                                );
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    a = i.length;
                                o < a;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, r) || i.removeAttribute(t.nodeName);
                    });
                },
                l = 0,
                r = a.length;
            l < r;
            l++
        )
            s(l);
        return i.body.innerHTML;
    }
    var M = "tooltip",
        W = o.default.fn[M],
        V = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        z = ["sanitize", "whiteList", "sanitizeFn"],
        K = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)",
        },
        X = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
        },
        Y = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Q,
            popperConfig: null,
        },
        $ = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        J = (function () {
            function t(t, e) {
                if ("undefined" == typeof a.default)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                    );
                (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this.element = t),
                    (this.config = this._getConfig(e)),
                    (this.tip = null),
                    this._setListeners();
            }
            var e = t.prototype;
            return (
                (e.enable = function () {
                    this._isEnabled = !0;
                }),
                (e.disable = function () {
                    this._isEnabled = !1;
                }),
                (e.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (e.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = o.default(t.currentTarget).data(e);
                            n ||
                                ((n = new this.constructor(
                                    t.currentTarget,
                                    this._getDelegateConfig()
                                )),
                                o.default(t.currentTarget).data(e, n)),
                                (n._activeTrigger.click =
                                    !n._activeTrigger.click),
                                n._isWithActiveTrigger()
                                    ? n._enter(null, n)
                                    : n._leave(null, n);
                        } else {
                            if (
                                o.default(this.getTipElement()).hasClass("show")
                            )
                                return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (e.dispose = function () {
                    clearTimeout(this._timeout),
                        o.default.removeData(
                            this.element,
                            this.constructor.DATA_KEY
                        ),
                        o.default(this.element).off(this.constructor.EVENT_KEY),
                        o
                            .default(this.element)
                            .closest(".modal")
                            .off("hide.bs.modal", this._hideModalHandler),
                        this.tip && o.default(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (e.show = function () {
                    var t = this;
                    if ("none" === o.default(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var e = o.default.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        o.default(this.element).trigger(e);
                        var n = d.findShadowRoot(this.element),
                            i = o.default.contains(
                                null !== n
                                    ? n
                                    : this.element.ownerDocument
                                          .documentElement,
                                this.element
                            );
                        if (e.isDefaultPrevented() || !i) return;
                        var s = this.getTipElement(),
                            l = d.getUID(this.constructor.NAME);
                        s.setAttribute("id", l),
                            this.element.setAttribute("aria-describedby", l),
                            this.setContent(),
                            this.config.animation &&
                                o.default(s).addClass("fade");
                        var r =
                                "function" == typeof this.config.placement
                                    ? this.config.placement.call(
                                          this,
                                          s,
                                          this.element
                                      )
                                    : this.config.placement,
                            u = this._getAttachment(r);
                        this.addAttachmentClass(u);
                        var f = this._getContainer();
                        o.default(s).data(this.constructor.DATA_KEY, this),
                            o.default.contains(
                                this.element.ownerDocument.documentElement,
                                this.tip
                            ) || o.default(s).appendTo(f),
                            o
                                .default(this.element)
                                .trigger(this.constructor.Event.INSERTED),
                            (this._popper = new a.default(
                                this.element,
                                s,
                                this._getPopperConfig(u)
                            )),
                            o.default(s).addClass("show"),
                            "ontouchstart" in document.documentElement &&
                                o
                                    .default(document.body)
                                    .children()
                                    .on("mouseover", null, o.default.noop);
                        var c = function () {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            (t._hoverState = null),
                                o
                                    .default(t.element)
                                    .trigger(t.constructor.Event.SHOWN),
                                "out" === e && t._leave(null, t);
                        };
                        if (o.default(this.tip).hasClass("fade")) {
                            var h = d.getTransitionDurationFromElement(
                                this.tip
                            );
                            o.default(this.tip)
                                .one(d.TRANSITION_END, c)
                                .emulateTransitionEnd(h);
                        } else c();
                    }
                }),
                (e.hide = function (t) {
                    var e = this,
                        n = this.getTipElement(),
                        i = o.default.Event(this.constructor.Event.HIDE),
                        a = function () {
                            "show" !== e._hoverState &&
                                n.parentNode &&
                                n.parentNode.removeChild(n),
                                e._cleanTipClass(),
                                e.element.removeAttribute("aria-describedby"),
                                o
                                    .default(e.element)
                                    .trigger(e.constructor.Event.HIDDEN),
                                null !== e._popper && e._popper.destroy(),
                                t && t();
                        };
                    if (
                        (o.default(this.element).trigger(i),
                        !i.isDefaultPrevented())
                    ) {
                        if (
                            (o.default(n).removeClass("show"),
                            "ontouchstart" in document.documentElement &&
                                o
                                    .default(document.body)
                                    .children()
                                    .off("mouseover", null, o.default.noop),
                            (this._activeTrigger.click = !1),
                            (this._activeTrigger.focus = !1),
                            (this._activeTrigger.hover = !1),
                            o.default(this.tip).hasClass("fade"))
                        ) {
                            var s = d.getTransitionDurationFromElement(n);
                            o.default(n)
                                .one(d.TRANSITION_END, a)
                                .emulateTransitionEnd(s);
                        } else a();
                        this._hoverState = "";
                    }
                }),
                (e.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (e.addAttachmentClass = function (t) {
                    o.default(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (e.getTipElement = function () {
                    return (
                        (this.tip =
                            this.tip || o.default(this.config.template)[0]),
                        this.tip
                    );
                }),
                (e.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(
                        o.default(t.querySelectorAll(".tooltip-inner")),
                        this.getTitle()
                    ),
                        o.default(t).removeClass("fade show");
                }),
                (e.setElementContent = function (t, e) {
                    "object" != typeof e || (!e.nodeType && !e.jquery)
                        ? this.config.html
                            ? (this.config.sanitize &&
                                  (e = U(
                                      e,
                                      this.config.whiteList,
                                      this.config.sanitizeFn
                                  )),
                              t.html(e))
                            : t.text(e)
                        : this.config.html
                        ? o.default(e).parent().is(t) || t.empty().append(e)
                        : t.text(o.default(e).text());
                }),
                (e.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return (
                        t ||
                            (t =
                                "function" == typeof this.config.title
                                    ? this.config.title.call(this.element)
                                    : this.config.title),
                        t
                    );
                }),
                (e._getPopperConfig = function (t) {
                    var e = this;
                    return r(
                        {},
                        {
                            placement: t,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement,
                                },
                                arrow: { element: ".arrow" },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary,
                                },
                            },
                            onCreate: function (t) {
                                t.originalPlacement !== t.placement &&
                                    e._handlePopperPlacementChange(t);
                            },
                            onUpdate: function (t) {
                                return e._handlePopperPlacementChange(t);
                            },
                        },
                        this.config.popperConfig
                    );
                }),
                (e._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (e.fn = function (e) {
                                  return (
                                      (e.offsets = r(
                                          {},
                                          e.offsets,
                                          t.config.offset(
                                              e.offsets,
                                              t.element
                                          ) || {}
                                      )),
                                      e
                                  );
                              })
                            : (e.offset = this.config.offset),
                        e
                    );
                }),
                (e._getContainer = function () {
                    return !1 === this.config.container
                        ? document.body
                        : d.isElement(this.config.container)
                        ? o.default(this.config.container)
                        : o.default(document).find(this.config.container);
                }),
                (e._getAttachment = function (t) {
                    return X[t.toUpperCase()];
                }),
                (e._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (e) {
                        if ("click" === e)
                            o.default(t.element).on(
                                t.constructor.Event.CLICK,
                                t.config.selector,
                                function (e) {
                                    return t.toggle(e);
                                }
                            );
                        else if ("manual" !== e) {
                            var n =
                                    "hover" === e
                                        ? t.constructor.Event.MOUSEENTER
                                        : t.constructor.Event.FOCUSIN,
                                i =
                                    "hover" === e
                                        ? t.constructor.Event.MOUSELEAVE
                                        : t.constructor.Event.FOCUSOUT;
                            o.default(t.element)
                                .on(n, t.config.selector, function (e) {
                                    return t._enter(e);
                                })
                                .on(i, t.config.selector, function (e) {
                                    return t._leave(e);
                                });
                        }
                    }),
                        (this._hideModalHandler = function () {
                            t.element && t.hide();
                        }),
                        o
                            .default(this.element)
                            .closest(".modal")
                            .on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector
                            ? (this.config = r({}, this.config, {
                                  trigger: "manual",
                                  selector: "",
                              }))
                            : this._fixTitle();
                }),
                (e._fixTitle = function () {
                    var t = typeof this.element.getAttribute(
                        "data-original-title"
                    );
                    (this.element.getAttribute("title") || "string" !== t) &&
                        (this.element.setAttribute(
                            "data-original-title",
                            this.element.getAttribute("title") || ""
                        ),
                        this.element.setAttribute("title", ""));
                }),
                (e._enter = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || o.default(t.currentTarget).data(n)) ||
                        ((e = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        o.default(t.currentTarget).data(n, e)),
                        t &&
                            (e._activeTrigger[
                                "focusin" === t.type ? "focus" : "hover"
                            ] = !0),
                        o.default(e.getTipElement()).hasClass("show") ||
                        "show" === e._hoverState
                            ? (e._hoverState = "show")
                            : (clearTimeout(e._timeout),
                              (e._hoverState = "show"),
                              e.config.delay && e.config.delay.show
                                  ? (e._timeout = setTimeout(function () {
                                        "show" === e._hoverState && e.show();
                                    }, e.config.delay.show))
                                  : e.show());
                }),
                (e._leave = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || o.default(t.currentTarget).data(n)) ||
                        ((e = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        o.default(t.currentTarget).data(n, e)),
                        t &&
                            (e._activeTrigger[
                                "focusout" === t.type ? "focus" : "hover"
                            ] = !1),
                        e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                            (e._hoverState = "out"),
                            e.config.delay && e.config.delay.hide
                                ? (e._timeout = setTimeout(function () {
                                      "out" === e._hoverState && e.hide();
                                  }, e.config.delay.hide))
                                : e.hide());
                }),
                (e._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (e._getConfig = function (t) {
                    var e = o.default(this.element).data();
                    return (
                        Object.keys(e).forEach(function (t) {
                            -1 !== z.indexOf(t) && delete e[t];
                        }),
                        "number" ==
                            typeof (t = r(
                                {},
                                this.constructor.Default,
                                e,
                                "object" == typeof t && t ? t : {}
                            )).delay &&
                            (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title &&
                            (t.title = t.title.toString()),
                        "number" == typeof t.content &&
                            (t.content = t.content.toString()),
                        d.typeCheckConfig(M, t, this.constructor.DefaultType),
                        t.sanitize &&
                            (t.template = U(
                                t.template,
                                t.whiteList,
                                t.sanitizeFn
                            )),
                        t
                    );
                }),
                (e._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] &&
                                (t[e] = this.config[e]);
                    return t;
                }),
                (e._cleanTipClass = function () {
                    var t = o.default(this.getTipElement()),
                        e = t.attr("class").match(V);
                    null !== e && e.length && t.removeClass(e.join(""));
                }),
                (e._handlePopperPlacementChange = function (t) {
                    (this.tip = t.instance.popper),
                        this._cleanTipClass(),
                        this.addAttachmentClass(
                            this._getAttachment(t.placement)
                        );
                }),
                (e._fixTransition = function () {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") &&
                        (o.default(t).removeClass("fade"),
                        (this.config.animation = !1),
                        this.hide(),
                        this.show(),
                        (this.config.animation = e));
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.tooltip"),
                            a = "object" == typeof e && e;
                        if (
                            (i || !/dispose|hide/.test(e)) &&
                            (i ||
                                ((i = new t(this, a)), n.data("bs.tooltip", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e]();
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Y;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return M;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.tooltip";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return $;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.tooltip";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return K;
                        },
                    },
                ]),
                t
            );
        })();
    (o.default.fn[M] = J._jQueryInterface),
        (o.default.fn[M].Constructor = J),
        (o.default.fn[M].noConflict = function () {
            return (o.default.fn[M] = W), J._jQueryInterface;
        });
    var G = "popover",
        Z = o.default.fn[G],
        tt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        et = r({}, J.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        nt = r({}, J.DefaultType, { content: "(string|element|function)" }),
        it = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        },
        ot = (function (t) {
            var e, n;
            function i() {
                return t.apply(this, arguments) || this;
            }
            (n = t),
                ((e = i).prototype = Object.create(n.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = n);
            var a = i.prototype;
            return (
                (a.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (a.addAttachmentClass = function (t) {
                    o.default(this.getTipElement()).addClass("bs-popover-" + t);
                }),
                (a.getTipElement = function () {
                    return (
                        (this.tip =
                            this.tip || o.default(this.config.template)[0]),
                        this.tip
                    );
                }),
                (a.setContent = function () {
                    var t = o.default(this.getTipElement());
                    this.setElementContent(
                        t.find(".popover-header"),
                        this.getTitle()
                    );
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                        this.setElementContent(t.find(".popover-body"), e),
                        t.removeClass("fade show");
                }),
                (a._getContent = function () {
                    return (
                        this.element.getAttribute("data-content") ||
                        this.config.content
                    );
                }),
                (a._cleanTipClass = function () {
                    var t = o.default(this.getTipElement()),
                        e = t.attr("class").match(tt);
                    null !== e && e.length > 0 && t.removeClass(e.join(""));
                }),
                (i._jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = o.default(this).data("bs.popover"),
                            n = "object" == typeof t ? t : null;
                        if (
                            (e || !/dispose|hide/.test(t)) &&
                            (e ||
                                ((e = new i(this, n)),
                                o.default(this).data("bs.popover", e)),
                            "string" == typeof t)
                        ) {
                            if ("undefined" == typeof e[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            e[t]();
                        }
                    });
                }),
                l(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return et;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return G;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.popover";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return it;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.popover";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return nt;
                        },
                    },
                ]),
                i
            );
        })(J);
    (o.default.fn[G] = ot._jQueryInterface),
        (o.default.fn[G].Constructor = ot),
        (o.default.fn[G].noConflict = function () {
            return (o.default.fn[G] = Z), ot._jQueryInterface;
        });
    var at = "scrollspy",
        st = o.default.fn[at],
        lt = { offset: 10, method: "auto", target: "" },
        rt = { offset: "number", method: "string", target: "(string|element)" },
        ut = (function () {
            function t(t, e) {
                var n = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(e)),
                    (this._selector =
                        this._config.target +
                        " .nav-link," +
                        this._config.target +
                        " .list-group-item," +
                        this._config.target +
                        " .dropdown-item"),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    o
                        .default(this._scrollElement)
                        .on("scroll.bs.scrollspy", function (t) {
                            return n._process(t);
                        }),
                    this.refresh(),
                    this._process();
            }
            var e = t.prototype;
            return (
                (e.refresh = function () {
                    var t = this,
                        e =
                            this._scrollElement === this._scrollElement.window
                                ? "offset"
                                : "position",
                        n =
                            "auto" === this._config.method
                                ? e
                                : this._config.method,
                        i = "position" === n ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function (t) {
                                var e,
                                    a = d.getSelectorFromElement(t);
                                if ((a && (e = document.querySelector(a)), e)) {
                                    var s = e.getBoundingClientRect();
                                    if (s.width || s.height)
                                        return [o.default(e)[n]().top + i, a];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1]);
                            });
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.scrollspy"),
                        o.default(this._scrollElement).off(".bs.scrollspy"),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (e._getConfig = function (t) {
                    if (
                        "string" !=
                            typeof (t = r(
                                {},
                                lt,
                                "object" == typeof t && t ? t : {}
                            )).target &&
                        d.isElement(t.target)
                    ) {
                        var e = o.default(t.target).attr("id");
                        e ||
                            ((e = d.getUID(at)),
                            o.default(t.target).attr("id", e)),
                            (t.target = "#" + e);
                    }
                    return d.typeCheckConfig(at, t, rt), t;
                }),
                (e._getScrollTop = function () {
                    return this._scrollElement === window
                        ? this._scrollElement.pageYOffset
                        : this._scrollElement.scrollTop;
                }),
                (e._getScrollHeight = function () {
                    return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight
                        )
                    );
                }),
                (e._getOffsetHeight = function () {
                    return this._scrollElement === window
                        ? window.innerHeight
                        : this._scrollElement.getBoundingClientRect().height;
                }),
                (e._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (
                            this._activeTarget &&
                            t < this._offsets[0] &&
                            this._offsets[0] > 0
                        )
                            return (
                                (this._activeTarget = null), void this._clear()
                            );
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] &&
                                t >= this._offsets[o] &&
                                ("undefined" == typeof this._offsets[o + 1] ||
                                    t < this._offsets[o + 1]) &&
                                this._activate(this._targets[o]);
                        }
                    }
                }),
                (e._activate = function (t) {
                    (this._activeTarget = t), this._clear();
                    var e = this._selector.split(",").map(function (e) {
                            return (
                                e +
                                '[data-target="' +
                                t +
                                '"],' +
                                e +
                                '[href="' +
                                t +
                                '"]'
                            );
                        }),
                        n = o.default(
                            [].slice.call(
                                document.querySelectorAll(e.join(","))
                            )
                        );
                    n.hasClass("dropdown-item")
                        ? (n
                              .closest(".dropdown")
                              .find(".dropdown-toggle")
                              .addClass("active"),
                          n.addClass("active"))
                        : (n.addClass("active"),
                          n
                              .parents(".nav, .list-group")
                              .prev(".nav-link, .list-group-item")
                              .addClass("active"),
                          n
                              .parents(".nav, .list-group")
                              .prev(".nav-item")
                              .children(".nav-link")
                              .addClass("active")),
                        o
                            .default(this._scrollElement)
                            .trigger("activate.bs.scrollspy", {
                                relatedTarget: t,
                            });
                }),
                (e._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (t) {
                            return t.classList.contains("active");
                        })
                        .forEach(function (t) {
                            return t.classList.remove("active");
                        });
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.scrollspy");
                        if (
                            (n ||
                                ((n = new t(this, "object" == typeof e && e)),
                                o.default(this).data("bs.scrollspy", n)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof n[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            n[e]();
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return lt;
                        },
                    },
                ]),
                t
            );
        })();
    o.default(window).on("load.bs.scrollspy.data-api", function () {
        for (
            var t = [].slice.call(
                    document.querySelectorAll('[data-spy="scroll"]')
                ),
                e = t.length;
            e--;

        ) {
            var n = o.default(t[e]);
            ut._jQueryInterface.call(n, n.data());
        }
    }),
        (o.default.fn[at] = ut._jQueryInterface),
        (o.default.fn[at].Constructor = ut),
        (o.default.fn[at].noConflict = function () {
            return (o.default.fn[at] = st), ut._jQueryInterface;
        });
    var dt = o.default.fn.tab,
        ft = (function () {
            function t(t) {
                this._element = t;
            }
            var e = t.prototype;
            return (
                (e.show = function () {
                    var t = this;
                    if (
                        !(
                            (this._element.parentNode &&
                                this._element.parentNode.nodeType ===
                                    Node.ELEMENT_NODE &&
                                o.default(this._element).hasClass("active")) ||
                            o.default(this._element).hasClass("disabled")
                        )
                    ) {
                        var e,
                            n,
                            i = o
                                .default(this._element)
                                .closest(".nav, .list-group")[0],
                            a = d.getSelectorFromElement(this._element);
                        if (i) {
                            var s =
                                "UL" === i.nodeName || "OL" === i.nodeName
                                    ? "> li > .active"
                                    : ".active";
                            n = (n = o.default.makeArray(o.default(i).find(s)))[
                                n.length - 1
                            ];
                        }
                        var l = o.default.Event("hide.bs.tab", {
                                relatedTarget: this._element,
                            }),
                            r = o.default.Event("show.bs.tab", {
                                relatedTarget: n,
                            });
                        if (
                            (n && o.default(n).trigger(l),
                            o.default(this._element).trigger(r),
                            !r.isDefaultPrevented() && !l.isDefaultPrevented())
                        ) {
                            a && (e = document.querySelector(a)),
                                this._activate(this._element, i);
                            var u = function () {
                                var e = o.default.Event("hidden.bs.tab", {
                                        relatedTarget: t._element,
                                    }),
                                    i = o.default.Event("shown.bs.tab", {
                                        relatedTarget: n,
                                    });
                                o.default(n).trigger(e),
                                    o.default(t._element).trigger(i);
                            };
                            e ? this._activate(e, e.parentNode, u) : u();
                        }
                    }
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.tab"),
                        (this._element = null);
                }),
                (e._activate = function (t, e, n) {
                    var i = this,
                        a = (
                            !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                                ? o.default(e).children(".active")
                                : o.default(e).find("> li > .active")
                        )[0],
                        s = n && a && o.default(a).hasClass("fade"),
                        l = function () {
                            return i._transitionComplete(t, a, n);
                        };
                    if (a && s) {
                        var r = d.getTransitionDurationFromElement(a);
                        o.default(a)
                            .removeClass("show")
                            .one(d.TRANSITION_END, l)
                            .emulateTransitionEnd(r);
                    } else l();
                }),
                (e._transitionComplete = function (t, e, n) {
                    if (e) {
                        o.default(e).removeClass("active");
                        var i = o
                            .default(e.parentNode)
                            .find("> .dropdown-menu .active")[0];
                        i && o.default(i).removeClass("active"),
                            "tab" === e.getAttribute("role") &&
                                e.setAttribute("aria-selected", !1);
                    }
                    if (
                        (o.default(t).addClass("active"),
                        "tab" === t.getAttribute("role") &&
                            t.setAttribute("aria-selected", !0),
                        d.reflow(t),
                        t.classList.contains("fade") && t.classList.add("show"),
                        t.parentNode &&
                            o.default(t.parentNode).hasClass("dropdown-menu"))
                    ) {
                        var a = o.default(t).closest(".dropdown")[0];
                        if (a) {
                            var s = [].slice.call(
                                a.querySelectorAll(".dropdown-toggle")
                            );
                            o.default(s).addClass("active");
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.tab");
                        if (
                            (i || ((i = new t(this)), n.data("bs.tab", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e]();
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.tab.data-api",
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function (t) {
                t.preventDefault(),
                    ft._jQueryInterface.call(o.default(this), "show");
            }
        ),
        (o.default.fn.tab = ft._jQueryInterface),
        (o.default.fn.tab.Constructor = ft),
        (o.default.fn.tab.noConflict = function () {
            return (o.default.fn.tab = dt), ft._jQueryInterface;
        });
    var ct = o.default.fn.toast,
        ht = { animation: "boolean", autohide: "boolean", delay: "number" },
        gt = { animation: !0, autohide: !0, delay: 500 },
        mt = (function () {
            function t(t, e) {
                (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._timeout = null),
                    this._setListeners();
            }
            var e = t.prototype;
            return (
                (e.show = function () {
                    var t = this,
                        e = o.default.Event("show.bs.toast");
                    if (
                        (o.default(this._element).trigger(e),
                        !e.isDefaultPrevented())
                    ) {
                        this._clearTimeout(),
                            this._config.animation &&
                                this._element.classList.add("fade");
                        var n = function () {
                            t._element.classList.remove("showing"),
                                t._element.classList.add("show"),
                                o.default(t._element).trigger("shown.bs.toast"),
                                t._config.autohide &&
                                    (t._timeout = setTimeout(function () {
                                        t.hide();
                                    }, t._config.delay));
                        };
                        if (
                            (this._element.classList.remove("hide"),
                            d.reflow(this._element),
                            this._element.classList.add("showing"),
                            this._config.animation)
                        ) {
                            var i = d.getTransitionDurationFromElement(
                                this._element
                            );
                            o.default(this._element)
                                .one(d.TRANSITION_END, n)
                                .emulateTransitionEnd(i);
                        } else n();
                    }
                }),
                (e.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var t = o.default.Event("hide.bs.toast");
                        o.default(this._element).trigger(t),
                            t.isDefaultPrevented() || this._close();
                    }
                }),
                (e.dispose = function () {
                    this._clearTimeout(),
                        this._element.classList.contains("show") &&
                            this._element.classList.remove("show"),
                        o.default(this._element).off("click.dismiss.bs.toast"),
                        o.default.removeData(this._element, "bs.toast"),
                        (this._element = null),
                        (this._config = null);
                }),
                (e._getConfig = function (t) {
                    return (
                        (t = r(
                            {},
                            gt,
                            o.default(this._element).data(),
                            "object" == typeof t && t ? t : {}
                        )),
                        d.typeCheckConfig(
                            "toast",
                            t,
                            this.constructor.DefaultType
                        ),
                        t
                    );
                }),
                (e._setListeners = function () {
                    var t = this;
                    o.default(this._element).on(
                        "click.dismiss.bs.toast",
                        '[data-dismiss="toast"]',
                        function () {
                            return t.hide();
                        }
                    );
                }),
                (e._close = function () {
                    var t = this,
                        e = function () {
                            t._element.classList.add("hide"),
                                o
                                    .default(t._element)
                                    .trigger("hidden.bs.toast");
                        };
                    if (
                        (this._element.classList.remove("show"),
                        this._config.animation)
                    ) {
                        var n = d.getTransitionDurationFromElement(
                            this._element
                        );
                        o.default(this._element)
                            .one(d.TRANSITION_END, e)
                            .emulateTransitionEnd(n);
                    } else e();
                }),
                (e._clearTimeout = function () {
                    clearTimeout(this._timeout), (this._timeout = null);
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.toast");
                        if (
                            (i ||
                                ((i = new t(this, "object" == typeof e && e)),
                                n.data("bs.toast", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e](this);
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ht;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return gt;
                        },
                    },
                ]),
                t
            );
        })();
    (o.default.fn.toast = mt._jQueryInterface),
        (o.default.fn.toast.Constructor = mt),
        (o.default.fn.toast.noConflict = function () {
            return (o.default.fn.toast = ct), mt._jQueryInterface;
        }),
        (t.Alert = h),
        (t.Button = m),
        (t.Carousel = w),
        (t.Collapse = D),
        (t.Dropdown = x),
        (t.Modal = q),
        (t.Popover = ot),
        (t.Scrollspy = ut),
        (t.Tab = ft),
        (t.Toast = mt),
        (t.Tooltip = J),
        (t.Util = d),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */ (function (a, b) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = b())
        : "function" == typeof define && define.amd
        ? define(b)
        : ((a = a || self), (a.PerfectScrollbar = b()));
})(this, function () {
    "use strict";
    var u = Math.abs,
        v = Math.floor;
    function a(a) {
        return getComputedStyle(a);
    }
    function b(a, b) {
        for (var c in b) {
            var d = b[c];
            "number" == typeof d && (d += "px"), (a.style[c] = d);
        }
        return a;
    }
    function c(a) {
        var b = document.createElement("div");
        return (b.className = a), b;
    }
    function d(a, b) {
        if (!w) throw new Error("No element matching method supported");
        return w.call(a, b);
    }
    function e(a) {
        a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a);
    }
    function f(a, b) {
        return Array.prototype.filter.call(a.children, function (a) {
            return d(a, b);
        });
    }
    function g(a, b) {
        var c = a.element.classList,
            d = z.state.scrolling(b);
        c.contains(d) ? clearTimeout(A[b]) : c.add(d);
    }
    function h(a, b) {
        A[b] = setTimeout(function () {
            return (
                a.isAlive && a.element.classList.remove(z.state.scrolling(b))
            );
        }, a.settings.scrollingThreshold);
    }
    function j(a, b) {
        g(a, b), h(a, b);
    }
    function k(a) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(a);
        var b = document.createEvent("CustomEvent");
        return b.initCustomEvent(a, !1, !1, void 0), b;
    }
    function l(a, b, c, d, e) {
        void 0 === d && (d = !0), void 0 === e && (e = !1);
        var f;
        if ("top" === b)
            f = [
                "contentHeight",
                "containerHeight",
                "scrollTop",
                "y",
                "up",
                "down",
            ];
        else if ("left" === b)
            f = [
                "contentWidth",
                "containerWidth",
                "scrollLeft",
                "x",
                "left",
                "right",
            ];
        else throw new Error("A proper axis should be provided");
        m(a, c, f, d, e);
    }
    function m(a, b, c, d, e) {
        var f = c[0],
            g = c[1],
            h = c[2],
            i = c[3],
            l = c[4],
            m = c[5];
        void 0 === d && (d = !0), void 0 === e && (e = !1);
        var n = a.element; // reset reach
        (a.reach[i] = null),
            1 > n[h] && (a.reach[i] = "start"),
            n[h] > a[f] - a[g] - 1 && (a.reach[i] = "end"),
            b &&
                (n.dispatchEvent(k("ps-scroll-" + i)),
                0 > b
                    ? n.dispatchEvent(k("ps-scroll-" + l))
                    : 0 < b && n.dispatchEvent(k("ps-scroll-" + m)),
                d && j(a, i)),
            a.reach[i] &&
                (b || e) &&
                n.dispatchEvent(k("ps-" + i + "-reach-" + a.reach[i]));
    }
    function n(a) {
        return parseInt(a, 10) || 0;
    }
    function o(a) {
        return (
            d(a, "input,[contenteditable]") ||
            d(a, "select,[contenteditable]") ||
            d(a, "textarea,[contenteditable]") ||
            d(a, "button,[contenteditable]")
        );
    }
    function p(b) {
        var c = a(b);
        return (
            n(c.width) +
            n(c.paddingLeft) +
            n(c.paddingRight) +
            n(c.borderLeftWidth) +
            n(c.borderRightWidth)
        );
    }
    function q(a) {
        var b = Math.ceil,
            c = a.element,
            d = v(c.scrollTop),
            g = c.getBoundingClientRect();
        (a.containerWidth = b(g.width)),
            (a.containerHeight = b(g.height)),
            (a.contentWidth = c.scrollWidth),
            (a.contentHeight = c.scrollHeight),
            c.contains(a.scrollbarXRail) ||
                (f(c, z.element.rail("x")).forEach(function (a) {
                    return e(a);
                }),
                c.appendChild(a.scrollbarXRail)),
            c.contains(a.scrollbarYRail) ||
                (f(c, z.element.rail("y")).forEach(function (a) {
                    return e(a);
                }),
                c.appendChild(a.scrollbarYRail)),
            !a.settings.suppressScrollX &&
            a.containerWidth + a.settings.scrollXMarginOffset < a.contentWidth
                ? ((a.scrollbarXActive = !0),
                  (a.railXWidth = a.containerWidth - a.railXMarginWidth),
                  (a.railXRatio = a.containerWidth / a.railXWidth),
                  (a.scrollbarXWidth = r(
                      a,
                      n((a.railXWidth * a.containerWidth) / a.contentWidth)
                  )),
                  (a.scrollbarXLeft = n(
                      ((a.negativeScrollAdjustment + c.scrollLeft) *
                          (a.railXWidth - a.scrollbarXWidth)) /
                          (a.contentWidth - a.containerWidth)
                  )))
                : (a.scrollbarXActive = !1),
            !a.settings.suppressScrollY &&
            a.containerHeight + a.settings.scrollYMarginOffset < a.contentHeight
                ? ((a.scrollbarYActive = !0),
                  (a.railYHeight = a.containerHeight - a.railYMarginHeight),
                  (a.railYRatio = a.containerHeight / a.railYHeight),
                  (a.scrollbarYHeight = r(
                      a,
                      n((a.railYHeight * a.containerHeight) / a.contentHeight)
                  )),
                  (a.scrollbarYTop = n(
                      (d * (a.railYHeight - a.scrollbarYHeight)) /
                          (a.contentHeight - a.containerHeight)
                  )))
                : (a.scrollbarYActive = !1),
            a.scrollbarXLeft >= a.railXWidth - a.scrollbarXWidth &&
                (a.scrollbarXLeft = a.railXWidth - a.scrollbarXWidth),
            a.scrollbarYTop >= a.railYHeight - a.scrollbarYHeight &&
                (a.scrollbarYTop = a.railYHeight - a.scrollbarYHeight),
            s(c, a),
            a.scrollbarXActive
                ? c.classList.add(z.state.active("x"))
                : (c.classList.remove(z.state.active("x")),
                  (a.scrollbarXWidth = 0),
                  (a.scrollbarXLeft = 0),
                  (c.scrollLeft = !0 === a.isRtl ? a.contentWidth : 0)),
            a.scrollbarYActive
                ? c.classList.add(z.state.active("y"))
                : (c.classList.remove(z.state.active("y")),
                  (a.scrollbarYHeight = 0),
                  (a.scrollbarYTop = 0),
                  (c.scrollTop = 0));
    }
    function r(a, b) {
        var c = Math.min,
            d = Math.max;
        return (
            a.settings.minScrollbarLength &&
                (b = d(b, a.settings.minScrollbarLength)),
            a.settings.maxScrollbarLength &&
                (b = c(b, a.settings.maxScrollbarLength)),
            b
        );
    }
    function s(a, c) {
        var d = { width: c.railXWidth },
            e = v(a.scrollTop);
        (d.left = c.isRtl
            ? c.negativeScrollAdjustment +
              a.scrollLeft +
              c.containerWidth -
              c.contentWidth
            : a.scrollLeft),
            c.isScrollbarXUsingBottom
                ? (d.bottom = c.scrollbarXBottom - e)
                : (d.top = c.scrollbarXTop + e),
            b(c.scrollbarXRail, d);
        var f = { top: e, height: c.railYHeight };
        c.isScrollbarYUsingRight
            ? c.isRtl
                ? (f.right =
                      c.contentWidth -
                      (c.negativeScrollAdjustment + a.scrollLeft) -
                      c.scrollbarYRight -
                      c.scrollbarYOuterWidth -
                      9)
                : (f.right = c.scrollbarYRight - a.scrollLeft)
            : c.isRtl
            ? (f.left =
                  c.negativeScrollAdjustment +
                  a.scrollLeft +
                  2 * c.containerWidth -
                  c.contentWidth -
                  c.scrollbarYLeft -
                  c.scrollbarYOuterWidth)
            : (f.left = c.scrollbarYLeft + a.scrollLeft),
            b(c.scrollbarYRail, f),
            b(c.scrollbarX, {
                left: c.scrollbarXLeft,
                width: c.scrollbarXWidth - c.railBorderXWidth,
            }),
            b(c.scrollbarY, {
                top: c.scrollbarYTop,
                height: c.scrollbarYHeight - c.railBorderYWidth,
            });
    }
    function t(a, b) {
        function c(b) {
            b.touches && b.touches[0] && (b[k] = b.touches[0].pageY),
                (s[o] = t + v * (b[k] - u)),
                g(a, p),
                q(a),
                b.stopPropagation(),
                b.preventDefault();
        }
        function d() {
            h(a, p),
                a[r].classList.remove(z.state.clicking),
                a.event.unbind(a.ownerDocument, "mousemove", c);
        }
        function f(b, e) {
            (t = s[o]),
                e && b.touches && (b[k] = b.touches[0].pageY),
                (u = b[k]),
                (v = (a[j] - a[i]) / (a[l] - a[n])),
                e
                    ? a.event.bind(a.ownerDocument, "touchmove", c)
                    : (a.event.bind(a.ownerDocument, "mousemove", c),
                      a.event.once(a.ownerDocument, "mouseup", d),
                      b.preventDefault()),
                a[r].classList.add(z.state.clicking),
                b.stopPropagation();
        }
        var i = b[0],
            j = b[1],
            k = b[2],
            l = b[3],
            m = b[4],
            n = b[5],
            o = b[6],
            p = b[7],
            r = b[8],
            s = a.element,
            t = null,
            u = null,
            v = null;
        a.event.bind(a[m], "mousedown", function (a) {
            f(a);
        }),
            a.event.bind(a[m], "touchstart", function (a) {
                f(a, !0);
            });
    }
    var w =
            "undefined" != typeof Element &&
            (Element.prototype.matches ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector),
        z = {
            main: "ps",
            rtl: "ps__rtl",
            element: {
                thumb: function (a) {
                    return "ps__thumb-" + a;
                },
                rail: function (a) {
                    return "ps__rail-" + a;
                },
                consuming: "ps__child--consume",
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function (a) {
                    return "ps--active-" + a;
                },
                scrolling: function (a) {
                    return "ps--scrolling-" + a;
                },
            },
        },
        A = { x: null, y: null },
        B = function (a) {
            (this.element = a), (this.handlers = {});
        },
        C = { isEmpty: { configurable: !0 } };
    (B.prototype.bind = function (a, b) {
        "undefined" == typeof this.handlers[a] && (this.handlers[a] = []),
            this.handlers[a].push(b),
            this.element.addEventListener(a, b, !1);
    }),
        (B.prototype.unbind = function (a, b) {
            var c = this;
            this.handlers[a] = this.handlers[a].filter(function (d) {
                return (
                    !!(b && d !== b) ||
                    (c.element.removeEventListener(a, d, !1), !1)
                );
            });
        }),
        (B.prototype.unbindAll = function () {
            for (var a in this.handlers) this.unbind(a);
        }),
        (C.isEmpty.get = function () {
            var a = this;
            return Object.keys(this.handlers).every(function (b) {
                return 0 === a.handlers[b].length;
            });
        }),
        Object.defineProperties(B.prototype, C);
    var D = function () {
        this.eventElements = [];
    };
    (D.prototype.eventElement = function (a) {
        var b = this.eventElements.filter(function (b) {
            return b.element === a;
        })[0];
        return b || ((b = new B(a)), this.eventElements.push(b)), b;
    }),
        (D.prototype.bind = function (a, b, c) {
            this.eventElement(a).bind(b, c);
        }),
        (D.prototype.unbind = function (a, b, c) {
            var d = this.eventElement(a);
            d.unbind(b, c),
                d.isEmpty &&
                    this.eventElements.splice(this.eventElements.indexOf(d), 1);
        }),
        (D.prototype.unbindAll = function () {
            this.eventElements.forEach(function (a) {
                return a.unbindAll();
            }),
                (this.eventElements = []);
        }),
        (D.prototype.once = function (a, b, c) {
            var d = this.eventElement(a),
                e = function (a) {
                    d.unbind(b, e), c(a);
                };
            d.bind(b, e);
        });
    var E = {
            isWebKit:
                "undefined" != typeof document &&
                "WebkitAppearance" in document.documentElement.style,
            supportsTouch:
                "undefined" != typeof window &&
                ("ontouchstart" in window ||
                    ("maxTouchPoints" in window.navigator &&
                        0 < window.navigator.maxTouchPoints) ||
                    (window.DocumentTouch &&
                        document instanceof window.DocumentTouch)),
            supportsIePointer:
                "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome:
                "undefined" != typeof navigator &&
                /Chrome/i.test(navigator && navigator.userAgent),
        },
        F = function () {
            return {
                handlers: [
                    "click-rail",
                    "drag-thumb",
                    "keyboard",
                    "wheel",
                    "touch",
                ],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollingThreshold: 1e3,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !0,
                wheelSpeed: 1,
            };
        },
        G = {
            "click-rail": function (a) {
                a.element;
                a.event.bind(a.scrollbarY, "mousedown", function (a) {
                    return a.stopPropagation();
                }),
                    a.event.bind(a.scrollbarYRail, "mousedown", function (b) {
                        var c =
                                b.pageY -
                                window.pageYOffset -
                                a.scrollbarYRail.getBoundingClientRect().top,
                            d = c > a.scrollbarYTop ? 1 : -1;
                        (a.element.scrollTop += d * a.containerHeight),
                            q(a),
                            b.stopPropagation();
                    }),
                    a.event.bind(a.scrollbarX, "mousedown", function (a) {
                        return a.stopPropagation();
                    }),
                    a.event.bind(a.scrollbarXRail, "mousedown", function (b) {
                        var c =
                                b.pageX -
                                window.pageXOffset -
                                a.scrollbarXRail.getBoundingClientRect().left,
                            d = c > a.scrollbarXLeft ? 1 : -1;
                        (a.element.scrollLeft += d * a.containerWidth),
                            q(a),
                            b.stopPropagation();
                    });
            },
            "drag-thumb": function (a) {
                t(a, [
                    "containerWidth",
                    "contentWidth",
                    "pageX",
                    "railXWidth",
                    "scrollbarX",
                    "scrollbarXWidth",
                    "scrollLeft",
                    "x",
                    "scrollbarXRail",
                ]),
                    t(a, [
                        "containerHeight",
                        "contentHeight",
                        "pageY",
                        "railYHeight",
                        "scrollbarY",
                        "scrollbarYHeight",
                        "scrollTop",
                        "y",
                        "scrollbarYRail",
                    ]);
            },
            keyboard: function (a) {
                function b(b, d) {
                    var e = v(c.scrollTop);
                    if (0 === b) {
                        if (!a.scrollbarYActive) return !1;
                        if (
                            (0 === e && 0 < d) ||
                            (e >= a.contentHeight - a.containerHeight && 0 > d)
                        )
                            return !a.settings.wheelPropagation;
                    }
                    var f = c.scrollLeft;
                    if (0 === d) {
                        if (!a.scrollbarXActive) return !1;
                        if (
                            (0 === f && 0 > b) ||
                            (f >= a.contentWidth - a.containerWidth && 0 < b)
                        )
                            return !a.settings.wheelPropagation;
                    }
                    return !0;
                }
                var c = a.element,
                    f = function () {
                        return d(c, ":hover");
                    },
                    g = function () {
                        return (
                            d(a.scrollbarX, ":focus") ||
                            d(a.scrollbarY, ":focus")
                        );
                    };
                a.event.bind(a.ownerDocument, "keydown", function (d) {
                    if (
                        !(
                            (d.isDefaultPrevented && d.isDefaultPrevented()) ||
                            d.defaultPrevented
                        ) &&
                        (f() || g())
                    ) {
                        var e = document.activeElement
                            ? document.activeElement
                            : a.ownerDocument.activeElement;
                        if (e) {
                            if ("IFRAME" === e.tagName)
                                e =
                                    e.contentDocument
                                        .activeElement; // go deeper if element is a webcomponent
                            else
                                for (; e.shadowRoot; )
                                    e = e.shadowRoot.activeElement;
                            if (o(e)) return;
                        }
                        var h = 0,
                            i = 0;
                        switch (d.which) {
                            case 37:
                                h = d.metaKey
                                    ? -a.contentWidth
                                    : d.altKey
                                    ? -a.containerWidth
                                    : -30;
                                break;
                            case 38:
                                i = d.metaKey
                                    ? a.contentHeight
                                    : d.altKey
                                    ? a.containerHeight
                                    : 30;
                                break;
                            case 39:
                                h = d.metaKey
                                    ? a.contentWidth
                                    : d.altKey
                                    ? a.containerWidth
                                    : 30;
                                break;
                            case 40:
                                i = d.metaKey
                                    ? -a.contentHeight
                                    : d.altKey
                                    ? -a.containerHeight
                                    : -30;
                                break;
                            case 32:
                                i = d.shiftKey
                                    ? a.containerHeight
                                    : -a.containerHeight;
                                break;
                            case 33:
                                i = a.containerHeight;
                                break;
                            case 34:
                                i = -a.containerHeight;
                                break;
                            case 36:
                                i = a.contentHeight;
                                break;
                            case 35:
                                i = -a.contentHeight;
                                break;
                            default:
                                return;
                        }
                        (a.settings.suppressScrollX && 0 !== h) ||
                            (a.settings.suppressScrollY && 0 !== i) ||
                            ((c.scrollTop -= i),
                            (c.scrollLeft += h),
                            q(a),
                            b(h, i) && d.preventDefault());
                    }
                });
            },
            wheel: function (b) {
                function c(a, c) {
                    var d,
                        e = v(h.scrollTop),
                        f = 0 === h.scrollTop,
                        g = e + h.offsetHeight === h.scrollHeight,
                        i = 0 === h.scrollLeft,
                        j = h.scrollLeft + h.offsetWidth === h.scrollWidth;
                    return (
                        (d = u(c) > u(a) ? f || g : i || j),
                        !d || !b.settings.wheelPropagation
                    );
                }
                function d(a) {
                    var b = a.deltaX,
                        c = -1 * a.deltaY;
                    return (
                        ("undefined" == typeof b || "undefined" == typeof c) &&
                            ((b = (-1 * a.wheelDeltaX) / 6),
                            (c = a.wheelDeltaY / 6)),
                        a.deltaMode &&
                            1 === a.deltaMode &&
                            ((b *= 10), (c *= 10)),
                        b !== b &&
                            c !== c /* NaN checks */ &&
                            ((b = 0), (c = a.wheelDelta)),
                        a.shiftKey ? [-c, -b] : [b, c]
                    );
                }
                function f(b, c, d) {
                    // FIXME: this is a workaround for <select> issue in FF and IE #571
                    if (!E.isWebKit && h.querySelector("select:focus"))
                        return !0;
                    if (!h.contains(b)) return !1;
                    for (var e = b; e && e !== h; ) {
                        if (e.classList.contains(z.element.consuming))
                            return !0;
                        var f = a(e); // if deltaY && vertical scrollable
                        if (d && f.overflowY.match(/(scroll|auto)/)) {
                            var g = e.scrollHeight - e.clientHeight;
                            if (
                                0 < g &&
                                ((0 < e.scrollTop && 0 > d) ||
                                    (e.scrollTop < g && 0 < d))
                            )
                                return !0;
                        } // if deltaX && horizontal scrollable
                        if (c && f.overflowX.match(/(scroll|auto)/)) {
                            var i = e.scrollWidth - e.clientWidth;
                            if (
                                0 < i &&
                                ((0 < e.scrollLeft && 0 > c) ||
                                    (e.scrollLeft < i && 0 < c))
                            )
                                return !0;
                        }
                        e = e.parentNode;
                    }
                    return !1;
                }
                function g(a) {
                    var e = d(a),
                        g = e[0],
                        i = e[1];
                    if (!f(a.target, g, i)) {
                        var j = !1;
                        b.settings.useBothWheelAxes
                            ? b.scrollbarYActive && !b.scrollbarXActive
                                ? (i
                                      ? (h.scrollTop -=
                                            i * b.settings.wheelSpeed)
                                      : (h.scrollTop +=
                                            g * b.settings.wheelSpeed),
                                  (j = !0))
                                : b.scrollbarXActive &&
                                  !b.scrollbarYActive &&
                                  (g
                                      ? (h.scrollLeft +=
                                            g * b.settings.wheelSpeed)
                                      : (h.scrollLeft -=
                                            i * b.settings.wheelSpeed),
                                  (j = !0))
                            : ((h.scrollTop -= i * b.settings.wheelSpeed),
                              (h.scrollLeft += g * b.settings.wheelSpeed)),
                            q(b),
                            (j = j || c(g, i)),
                            j &&
                                !a.ctrlKey &&
                                (a.stopPropagation(), a.preventDefault());
                    }
                }
                var h = b.element;
                "undefined" == typeof window.onwheel
                    ? "undefined" != typeof window.onmousewheel &&
                      b.event.bind(h, "mousewheel", g)
                    : b.event.bind(h, "wheel", g);
            },
            touch: function (b) {
                function c(a, c) {
                    var d = v(l.scrollTop),
                        e = l.scrollLeft,
                        f = u(a),
                        g = u(c);
                    if (g > f) {
                        // user is perhaps trying to swipe up/down the page
                        if (
                            (0 > c &&
                                d === b.contentHeight - b.containerHeight) ||
                            (0 < c && 0 === d)
                        )
                            // set prevent for mobile Chrome refresh
                            return 0 === window.scrollY && 0 < c && E.isChrome;
                    } else if (
                        f > g &&
                        ((0 > a && e === b.contentWidth - b.containerWidth) ||
                            (0 < a && 0 === e))
                    )
                        // user is perhaps trying to swipe left/right across the page
                        return !0;
                    return !0;
                }
                function d(a, c) {
                    (l.scrollTop -= c), (l.scrollLeft -= a), q(b);
                }
                function f(a) {
                    return a.targetTouches ? a.targetTouches[0] : a;
                }
                function g(a) {
                    return (
                        !(
                            a.pointerType &&
                            "pen" === a.pointerType &&
                            0 === a.buttons
                        ) &&
                        (!!(a.targetTouches && 1 === a.targetTouches.length) ||
                            !!(
                                a.pointerType &&
                                "mouse" !== a.pointerType &&
                                a.pointerType !== a.MSPOINTER_TYPE_MOUSE
                            ))
                    );
                }
                function h(a) {
                    if (g(a)) {
                        var b = f(a);
                        (m.pageX = b.pageX),
                            (m.pageY = b.pageY),
                            (n = new Date().getTime()),
                            null !== p && clearInterval(p);
                    }
                }
                function i(b, c, d) {
                    if (!l.contains(b)) return !1;
                    for (var e = b; e && e !== l; ) {
                        if (e.classList.contains(z.element.consuming))
                            return !0;
                        var f = a(e); // if deltaY && vertical scrollable
                        if (d && f.overflowY.match(/(scroll|auto)/)) {
                            var g = e.scrollHeight - e.clientHeight;
                            if (
                                0 < g &&
                                ((0 < e.scrollTop && 0 > d) ||
                                    (e.scrollTop < g && 0 < d))
                            )
                                return !0;
                        } // if deltaX && horizontal scrollable
                        if (c && f.overflowX.match(/(scroll|auto)/)) {
                            var h = e.scrollWidth - e.clientWidth;
                            if (
                                0 < h &&
                                ((0 < e.scrollLeft && 0 > c) ||
                                    (e.scrollLeft < h && 0 < c))
                            )
                                return !0;
                        }
                        e = e.parentNode;
                    }
                    return !1;
                }
                function j(a) {
                    if (g(a)) {
                        var b = f(a),
                            e = { pageX: b.pageX, pageY: b.pageY },
                            h = e.pageX - m.pageX,
                            j = e.pageY - m.pageY;
                        if (i(a.target, h, j)) return;
                        d(h, j), (m = e);
                        var k = new Date().getTime(),
                            l = k - n;
                        0 < l && ((o.x = h / l), (o.y = j / l), (n = k)),
                            c(h, j) && a.preventDefault();
                    }
                }
                function k() {
                    b.settings.swipeEasing &&
                        (clearInterval(p),
                        (p = setInterval(function () {
                            return b.isInitialized
                                ? void clearInterval(p)
                                : o.x || o.y
                                ? 0.01 > u(o.x) && 0.01 > u(o.y)
                                    ? void clearInterval(p)
                                    : void (d(30 * o.x, 30 * o.y),
                                      (o.x *= 0.8),
                                      (o.y *= 0.8))
                                : void clearInterval(p);
                        }, 10)));
                }
                if (E.supportsTouch || E.supportsIePointer) {
                    var l = b.element,
                        m = {},
                        n = 0,
                        o = {},
                        p = null;
                    E.supportsTouch
                        ? (b.event.bind(l, "touchstart", h),
                          b.event.bind(l, "touchmove", j),
                          b.event.bind(l, "touchend", k))
                        : E.supportsIePointer &&
                          (window.PointerEvent
                              ? (b.event.bind(l, "pointerdown", h),
                                b.event.bind(l, "pointermove", j),
                                b.event.bind(l, "pointerup", k))
                              : window.MSPointerEvent &&
                                (b.event.bind(l, "MSPointerDown", h),
                                b.event.bind(l, "MSPointerMove", j),
                                b.event.bind(l, "MSPointerUp", k)));
                }
            },
        },
        H = function (d, e) {
            var f = this;
            if (
                (void 0 === e && (e = {}),
                "string" == typeof d && (d = document.querySelector(d)),
                !d || !d.nodeName)
            )
                throw new Error(
                    "no element is specified to initialize PerfectScrollbar"
                );
            for (var g in ((this.element = d),
            d.classList.add(z.main),
            (this.settings = F()),
            e))
                this.settings[g] = e[g];
            (this.containerWidth = null),
                (this.containerHeight = null),
                (this.contentWidth = null),
                (this.contentHeight = null);
            var h = function () {
                    return d.classList.add(z.state.focus);
                },
                i = function () {
                    return d.classList.remove(z.state.focus);
                };
            (this.isRtl = "rtl" === a(d).direction),
                !0 === this.isRtl && d.classList.add(z.rtl),
                (this.isNegativeScroll = (function () {
                    var a = d.scrollLeft,
                        b = null;
                    return (
                        (d.scrollLeft = -1),
                        (b = 0 > d.scrollLeft),
                        (d.scrollLeft = a),
                        b
                    );
                })()),
                (this.negativeScrollAdjustment = this.isNegativeScroll
                    ? d.scrollWidth - d.clientWidth
                    : 0),
                (this.event = new D()),
                (this.ownerDocument = d.ownerDocument || document),
                (this.scrollbarXRail = c(z.element.rail("x"))),
                d.appendChild(this.scrollbarXRail),
                (this.scrollbarX = c(z.element.thumb("x"))),
                this.scrollbarXRail.appendChild(this.scrollbarX),
                this.scrollbarX.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarX, "focus", h),
                this.event.bind(this.scrollbarX, "blur", i),
                (this.scrollbarXActive = null),
                (this.scrollbarXWidth = null),
                (this.scrollbarXLeft = null);
            var j = a(this.scrollbarXRail);
            (this.scrollbarXBottom = parseInt(j.bottom, 10)),
                isNaN(this.scrollbarXBottom)
                    ? ((this.isScrollbarXUsingBottom = !1),
                      (this.scrollbarXTop = n(j.top)))
                    : (this.isScrollbarXUsingBottom = !0),
                (this.railBorderXWidth =
                    n(j.borderLeftWidth) + n(j.borderRightWidth)),
                b(this.scrollbarXRail, { display: "block" }),
                (this.railXMarginWidth = n(j.marginLeft) + n(j.marginRight)),
                b(this.scrollbarXRail, { display: "" }),
                (this.railXWidth = null),
                (this.railXRatio = null),
                (this.scrollbarYRail = c(z.element.rail("y"))),
                d.appendChild(this.scrollbarYRail),
                (this.scrollbarY = c(z.element.thumb("y"))),
                this.scrollbarYRail.appendChild(this.scrollbarY),
                this.scrollbarY.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarY, "focus", h),
                this.event.bind(this.scrollbarY, "blur", i),
                (this.scrollbarYActive = null),
                (this.scrollbarYHeight = null),
                (this.scrollbarYTop = null);
            var k = a(this.scrollbarYRail);
            (this.scrollbarYRight = parseInt(k.right, 10)),
                isNaN(this.scrollbarYRight)
                    ? ((this.isScrollbarYUsingRight = !1),
                      (this.scrollbarYLeft = n(k.left)))
                    : (this.isScrollbarYUsingRight = !0),
                (this.scrollbarYOuterWidth = this.isRtl
                    ? p(this.scrollbarY)
                    : null),
                (this.railBorderYWidth =
                    n(k.borderTopWidth) + n(k.borderBottomWidth)),
                b(this.scrollbarYRail, { display: "block" }),
                (this.railYMarginHeight = n(k.marginTop) + n(k.marginBottom)),
                b(this.scrollbarYRail, { display: "" }),
                (this.railYHeight = null),
                (this.railYRatio = null),
                (this.reach = {
                    x:
                        0 >= d.scrollLeft
                            ? "start"
                            : d.scrollLeft >=
                              this.contentWidth - this.containerWidth
                            ? "end"
                            : null,
                    y:
                        0 >= d.scrollTop
                            ? "start"
                            : d.scrollTop >=
                              this.contentHeight - this.containerHeight
                            ? "end"
                            : null,
                }),
                (this.isAlive = !0),
                this.settings.handlers.forEach(function (a) {
                    return G[a](f);
                }),
                (this.lastScrollTop = v(d.scrollTop)),
                (this.lastScrollLeft = d.scrollLeft),
                this.event.bind(this.element, "scroll", function (a) {
                    return f.onScroll(a);
                }),
                q(this);
        };
    return (
        (H.prototype.update = function () {
            this.isAlive && // Recalcuate negative scrollLeft adjustment
                // Recalculate rail margins
                // Hide scrollbars not to affect scrollWidth and scrollHeight
                ((this.negativeScrollAdjustment = this.isNegativeScroll
                    ? this.element.scrollWidth - this.element.clientWidth
                    : 0),
                b(this.scrollbarXRail, { display: "block" }),
                b(this.scrollbarYRail, { display: "block" }),
                (this.railXMarginWidth =
                    n(a(this.scrollbarXRail).marginLeft) +
                    n(a(this.scrollbarXRail).marginRight)),
                (this.railYMarginHeight =
                    n(a(this.scrollbarYRail).marginTop) +
                    n(a(this.scrollbarYRail).marginBottom)),
                b(this.scrollbarXRail, { display: "none" }),
                b(this.scrollbarYRail, { display: "none" }),
                q(this),
                l(this, "top", 0, !1, !0),
                l(this, "left", 0, !1, !0),
                b(this.scrollbarXRail, { display: "" }),
                b(this.scrollbarYRail, { display: "" }));
        }),
        (H.prototype.onScroll = function () {
            this.isAlive &&
                (q(this),
                l(this, "top", this.element.scrollTop - this.lastScrollTop),
                l(this, "left", this.element.scrollLeft - this.lastScrollLeft),
                (this.lastScrollTop = v(this.element.scrollTop)),
                (this.lastScrollLeft = this.element.scrollLeft));
        }),
        (H.prototype.destroy = function () {
            this.isAlive && // unset elements
                (this.event.unbindAll(),
                e(this.scrollbarX),
                e(this.scrollbarY),
                e(this.scrollbarXRail),
                e(this.scrollbarYRail),
                this.removePsClasses(),
                (this.element = null),
                (this.scrollbarX = null),
                (this.scrollbarY = null),
                (this.scrollbarXRail = null),
                (this.scrollbarYRail = null),
                (this.isAlive = !1));
        }),
        (H.prototype.removePsClasses = function () {
            this.element.className = this.element.className
                .split(" ")
                .filter(function (a) {
                    return !a.match(/^ps([-_].+|)$/);
                })
                .join(" ");
        }),
        H
    );
});
//# sourceMappingURL=perfect-scrollbar.min.js.map
