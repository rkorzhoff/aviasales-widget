;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-vendors~b1f96ece'],
  {
    '8c4f': function (t, e, r) {
      'use strict'
      /*!
       * vue-router v3.5.2
       * (c) 2021 Evan You
       * @license MIT
       */ function n(t, e) {
        0
      }
      function o(t, e) {
        for (var r in e) t[r] = e[r]
        return t
      }
      var i = /[!'()*]/g,
        a = function (t) {
          return '%' + t.charCodeAt(0).toString(16)
        },
        u = /%2C/g,
        s = function (t) {
          return encodeURIComponent(t).replace(i, a).replace(u, ',')
        }
      function c(t) {
        try {
          return decodeURIComponent(t)
        } catch (e) {
          0
        }
        return t
      }
      function p(t, e, r) {
        void 0 === e && (e = {})
        var n,
          o = r || h
        try {
          n = o(t || '')
        } catch (u) {
          n = {}
        }
        for (var i in e) {
          var a = e[i]
          n[i] = Array.isArray(a) ? a.map(f) : f(a)
        }
        return n
      }
      var f = function (t) {
        return null == t || 'object' === typeof t ? t : String(t)
      }
      function h(t) {
        var e = {}
        return (
          (t = t.trim().replace(/^(\?|#|&)/, '')),
          t
            ? (t.split('&').forEach(function (t) {
                var r = t.replace(/\+/g, ' ').split('='),
                  n = c(r.shift()),
                  o = r.length > 0 ? c(r.join('=')) : null
                void 0 === e[n]
                  ? (e[n] = o)
                  : Array.isArray(e[n])
                  ? e[n].push(o)
                  : (e[n] = [e[n], o])
              }),
              e)
            : e
        )
      }
      function l(t) {
        var e = t
          ? Object.keys(t)
              .map(function (e) {
                var r = t[e]
                if (void 0 === r) return ''
                if (null === r) return s(e)
                if (Array.isArray(r)) {
                  var n = []
                  return (
                    r.forEach(function (t) {
                      void 0 !== t &&
                        (null === t ? n.push(s(e)) : n.push(s(e) + '=' + s(t)))
                    }),
                    n.join('&')
                  )
                }
                return s(e) + '=' + s(r)
              })
              .filter(function (t) {
                return t.length > 0
              })
              .join('&')
          : null
        return e ? '?' + e : ''
      }
      var d = /\/?$/
      function v(t, e, r, n) {
        var o = n && n.options.stringifyQuery,
          i = e.query || {}
        try {
          i = y(i)
        } catch (u) {}
        var a = {
          name: e.name || (t && t.name),
          meta: (t && t.meta) || {},
          path: e.path || '/',
          hash: e.hash || '',
          query: i,
          params: e.params || {},
          fullPath: w(e, o),
          matched: t ? g(t) : [],
        }
        return r && (a.redirectedFrom = w(r, o)), Object.freeze(a)
      }
      function y(t) {
        if (Array.isArray(t)) return t.map(y)
        if (t && 'object' === typeof t) {
          var e = {}
          for (var r in t) e[r] = y(t[r])
          return e
        }
        return t
      }
      var m = v(null, { path: '/' })
      function g(t) {
        var e = []
        while (t) e.unshift(t), (t = t.parent)
        return e
      }
      function w(t, e) {
        var r = t.path,
          n = t.query
        void 0 === n && (n = {})
        var o = t.hash
        void 0 === o && (o = '')
        var i = e || l
        return (r || '/') + i(n) + o
      }
      function b(t, e, r) {
        return e === m
          ? t === e
          : !!e &&
              (t.path && e.path
                ? t.path.replace(d, '') === e.path.replace(d, '') &&
                  (r || (t.hash === e.hash && x(t.query, e.query)))
                : !(!t.name || !e.name) &&
                  t.name === e.name &&
                  (r ||
                    (t.hash === e.hash &&
                      x(t.query, e.query) &&
                      x(t.params, e.params))))
      }
      function x(t, e) {
        if ((void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e))
          return t === e
        var r = Object.keys(t).sort(),
          n = Object.keys(e).sort()
        return (
          r.length === n.length &&
          r.every(function (r, o) {
            var i = t[r],
              a = n[o]
            if (a !== r) return !1
            var u = e[r]
            return null == i || null == u
              ? i === u
              : 'object' === typeof i && 'object' === typeof u
              ? x(i, u)
              : String(i) === String(u)
          })
        )
      }
      function k(t, e) {
        return (
          0 === t.path.replace(d, '/').indexOf(e.path.replace(d, '/')) &&
          (!e.hash || t.hash === e.hash) &&
          R(t.query, e.query)
        )
      }
      function R(t, e) {
        for (var r in e) if (!(r in t)) return !1
        return !0
      }
      function E(t) {
        for (var e = 0; e < t.matched.length; e++) {
          var r = t.matched[e]
          for (var n in r.instances) {
            var o = r.instances[n],
              i = r.enteredCbs[n]
            if (o && i) {
              delete r.enteredCbs[n]
              for (var a = 0; a < i.length; a++) o._isBeingDestroyed || i[a](o)
            }
          }
        }
      }
      var C = {
        name: 'RouterView',
        functional: !0,
        props: { name: { type: String, default: 'default' } },
        render: function (t, e) {
          var r = e.props,
            n = e.children,
            i = e.parent,
            a = e.data
          a.routerView = !0
          var u = i.$createElement,
            s = r.name,
            c = i.$route,
            p = i._routerViewCache || (i._routerViewCache = {}),
            f = 0,
            h = !1
          while (i && i._routerRoot !== i) {
            var l = i.$vnode ? i.$vnode.data : {}
            l.routerView && f++,
              l.keepAlive && i._directInactive && i._inactive && (h = !0),
              (i = i.$parent)
          }
          if (((a.routerViewDepth = f), h)) {
            var d = p[s],
              v = d && d.component
            return v
              ? (d.configProps && A(v, a, d.route, d.configProps), u(v, a, n))
              : u()
          }
          var y = c.matched[f],
            m = y && y.components[s]
          if (!y || !m) return (p[s] = null), u()
          ;(p[s] = { component: m }),
            (a.registerRouteInstance = function (t, e) {
              var r = y.instances[s]
              ;((e && r !== t) || (!e && r === t)) && (y.instances[s] = e)
            }),
            ((a.hook || (a.hook = {})).prepatch = function (t, e) {
              y.instances[s] = e.componentInstance
            }),
            (a.hook.init = function (t) {
              t.data.keepAlive &&
                t.componentInstance &&
                t.componentInstance !== y.instances[s] &&
                (y.instances[s] = t.componentInstance),
                E(c)
            })
          var g = y.props && y.props[s]
          return (
            g && (o(p[s], { route: c, configProps: g }), A(m, a, c, g)),
            u(m, a, n)
          )
        },
      }
      function A(t, e, r, n) {
        var i = (e.props = O(r, n))
        if (i) {
          i = e.props = o({}, i)
          var a = (e.attrs = e.attrs || {})
          for (var u in i)
            (t.props && u in t.props) || ((a[u] = i[u]), delete i[u])
        }
      }
      function O(t, e) {
        switch (typeof e) {
          case 'undefined':
            return
          case 'object':
            return e
          case 'function':
            return e(t)
          case 'boolean':
            return e ? t.params : void 0
          default:
            0
        }
      }
      function _(t, e, r) {
        var n = t.charAt(0)
        if ('/' === n) return t
        if ('?' === n || '#' === n) return e + t
        var o = e.split('/')
        ;(r && o[o.length - 1]) || o.pop()
        for (
          var i = t.replace(/^\//, '').split('/'), a = 0;
          a < i.length;
          a++
        ) {
          var u = i[a]
          '..' === u ? o.pop() : '.' !== u && o.push(u)
        }
        return '' !== o[0] && o.unshift(''), o.join('/')
      }
      function j(t) {
        var e = '',
          r = '',
          n = t.indexOf('#')
        n >= 0 && ((e = t.slice(n)), (t = t.slice(0, n)))
        var o = t.indexOf('?')
        return (
          o >= 0 && ((r = t.slice(o + 1)), (t = t.slice(0, o))),
          { path: t, query: r, hash: e }
        )
      }
      function S(t) {
        return t.replace(/\/\//g, '/')
      }
      var T =
          Array.isArray ||
          function (t) {
            return '[object Array]' == Object.prototype.toString.call(t)
          },
        P = W,
        L = I,
        $ = M,
        q = N,
        U = Y,
        B = new RegExp(
          [
            '(\\\\.)',
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
          ].join('|'),
          'g'
        )
      function I(t, e) {
        var r,
          n = [],
          o = 0,
          i = 0,
          a = '',
          u = (e && e.delimiter) || '/'
        while (null != (r = B.exec(t))) {
          var s = r[0],
            c = r[1],
            p = r.index
          if (((a += t.slice(i, p)), (i = p + s.length), c)) a += c[1]
          else {
            var f = t[i],
              h = r[2],
              l = r[3],
              d = r[4],
              v = r[5],
              y = r[6],
              m = r[7]
            a && (n.push(a), (a = ''))
            var g = null != h && null != f && f !== h,
              w = '+' === y || '*' === y,
              b = '?' === y || '*' === y,
              x = r[2] || u,
              k = d || v
            n.push({
              name: l || o++,
              prefix: h || '',
              delimiter: x,
              optional: b,
              repeat: w,
              partial: g,
              asterisk: !!m,
              pattern: k ? z(k) : m ? '.*' : '[^' + F(x) + ']+?',
            })
          }
        }
        return i < t.length && (a += t.substr(i)), a && n.push(a), n
      }
      function M(t, e) {
        return N(I(t, e), e)
      }
      function V(t) {
        return encodeURI(t).replace(/[\/?#]/g, function (t) {
          return '%' + t.charCodeAt(0).toString(16).toUpperCase()
        })
      }
      function H(t) {
        return encodeURI(t).replace(/[?#]/g, function (t) {
          return '%' + t.charCodeAt(0).toString(16).toUpperCase()
        })
      }
      function N(t, e) {
        for (var r = new Array(t.length), n = 0; n < t.length; n++)
          'object' === typeof t[n] &&
            (r[n] = new RegExp('^(?:' + t[n].pattern + ')$', J(e)))
        return function (e, n) {
          for (
            var o = '',
              i = e || {},
              a = n || {},
              u = a.pretty ? V : encodeURIComponent,
              s = 0;
            s < t.length;
            s++
          ) {
            var c = t[s]
            if ('string' !== typeof c) {
              var p,
                f = i[c.name]
              if (null == f) {
                if (c.optional) {
                  c.partial && (o += c.prefix)
                  continue
                }
                throw new TypeError('Expected "' + c.name + '" to be defined')
              }
              if (T(f)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(f) +
                      '`'
                  )
                if (0 === f.length) {
                  if (c.optional) continue
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  )
                }
                for (var h = 0; h < f.length; h++) {
                  if (((p = u(f[h])), !r[s].test(p)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(p) +
                        '`'
                    )
                  o += (0 === h ? c.prefix : c.delimiter) + p
                }
              } else {
                if (((p = c.asterisk ? H(f) : u(f)), !r[s].test(p)))
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      p +
                      '"'
                  )
                o += c.prefix + p
              }
            } else o += c
          }
          return o
        }
      }
      function F(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
      }
      function z(t) {
        return t.replace(/([=!:$\/()])/g, '\\$1')
      }
      function D(t, e) {
        return (t.keys = e), t
      }
      function J(t) {
        return t && t.sensitive ? '' : 'i'
      }
      function K(t, e) {
        var r = t.source.match(/\((?!\?)/g)
        if (r)
          for (var n = 0; n < r.length; n++)
            e.push({
              name: n,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              asterisk: !1,
              pattern: null,
            })
        return D(t, e)
      }
      function Q(t, e, r) {
        for (var n = [], o = 0; o < t.length; o++) n.push(W(t[o], e, r).source)
        var i = new RegExp('(?:' + n.join('|') + ')', J(r))
        return D(i, e)
      }
      function X(t, e, r) {
        return Y(I(t, r), e, r)
      }
      function Y(t, e, r) {
        T(e) || ((r = e || r), (e = [])), (r = r || {})
        for (
          var n = r.strict, o = !1 !== r.end, i = '', a = 0;
          a < t.length;
          a++
        ) {
          var u = t[a]
          if ('string' === typeof u) i += F(u)
          else {
            var s = F(u.prefix),
              c = '(?:' + u.pattern + ')'
            e.push(u),
              u.repeat && (c += '(?:' + s + c + ')*'),
              (c = u.optional
                ? u.partial
                  ? s + '(' + c + ')?'
                  : '(?:' + s + '(' + c + '))?'
                : s + '(' + c + ')'),
              (i += c)
          }
        }
        var p = F(r.delimiter || '/'),
          f = i.slice(-p.length) === p
        return (
          n || (i = (f ? i.slice(0, -p.length) : i) + '(?:' + p + '(?=$))?'),
          (i += o ? '$' : n && f ? '' : '(?=' + p + '|$)'),
          D(new RegExp('^' + i, J(r)), e)
        )
      }
      function W(t, e, r) {
        return (
          T(e) || ((r = e || r), (e = [])),
          (r = r || {}),
          t instanceof RegExp ? K(t, e) : T(t) ? Q(t, e, r) : X(t, e, r)
        )
      }
      ;(P.parse = L),
        (P.compile = $),
        (P.tokensToFunction = q),
        (P.tokensToRegExp = U)
      var G = Object.create(null)
      function Z(t, e, r) {
        e = e || {}
        try {
          var n = G[t] || (G[t] = P.compile(t))
          return (
            'string' === typeof e.pathMatch && (e[0] = e.pathMatch),
            n(e, { pretty: !0 })
          )
        } catch (o) {
          return ''
        } finally {
          delete e[0]
        }
      }
      function tt(t, e, r, n) {
        var i = 'string' === typeof t ? { path: t } : t
        if (i._normalized) return i
        if (i.name) {
          i = o({}, t)
          var a = i.params
          return a && 'object' === typeof a && (i.params = o({}, a)), i
        }
        if (!i.path && i.params && e) {
          ;(i = o({}, i)), (i._normalized = !0)
          var u = o(o({}, e.params), i.params)
          if (e.name) (i.name = e.name), (i.params = u)
          else if (e.matched.length) {
            var s = e.matched[e.matched.length - 1].path
            i.path = Z(s, u, 'path ' + e.path)
          } else 0
          return i
        }
        var c = j(i.path || ''),
          f = (e && e.path) || '/',
          h = c.path ? _(c.path, f, r || i.append) : f,
          l = p(c.query, i.query, n && n.options.parseQuery),
          d = i.hash || c.hash
        return (
          d && '#' !== d.charAt(0) && (d = '#' + d),
          { _normalized: !0, path: h, query: l, hash: d }
        )
      }
      var et,
        rt = [String, Object],
        nt = [String, Array],
        ot = function () {},
        it = {
          name: 'RouterLink',
          props: {
            to: { type: rt, required: !0 },
            tag: { type: String, default: 'a' },
            custom: Boolean,
            exact: Boolean,
            exactPath: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            ariaCurrentValue: { type: String, default: 'page' },
            event: { type: nt, default: 'click' },
          },
          render: function (t) {
            var e = this,
              r = this.$router,
              n = this.$route,
              i = r.resolve(this.to, n, this.append),
              a = i.location,
              u = i.route,
              s = i.href,
              c = {},
              p = r.options.linkActiveClass,
              f = r.options.linkExactActiveClass,
              h = null == p ? 'router-link-active' : p,
              l = null == f ? 'router-link-exact-active' : f,
              d = null == this.activeClass ? h : this.activeClass,
              y = null == this.exactActiveClass ? l : this.exactActiveClass,
              m = u.redirectedFrom ? v(null, tt(u.redirectedFrom), null, r) : u
            ;(c[y] = b(n, m, this.exactPath)),
              (c[d] = this.exact || this.exactPath ? c[y] : k(n, m))
            var g = c[y] ? this.ariaCurrentValue : null,
              w = function (t) {
                at(t) && (e.replace ? r.replace(a, ot) : r.push(a, ot))
              },
              x = { click: at }
            Array.isArray(this.event)
              ? this.event.forEach(function (t) {
                  x[t] = w
                })
              : (x[this.event] = w)
            var R = { class: c },
              E =
                !this.$scopedSlots.$hasNormal &&
                this.$scopedSlots.default &&
                this.$scopedSlots.default({
                  href: s,
                  route: u,
                  navigate: w,
                  isActive: c[d],
                  isExactActive: c[y],
                })
            if (E) {
              if (1 === E.length) return E[0]
              if (E.length > 1 || !E.length)
                return 0 === E.length ? t() : t('span', {}, E)
            }
            if ('a' === this.tag)
              (R.on = x), (R.attrs = { href: s, 'aria-current': g })
            else {
              var C = ut(this.$slots.default)
              if (C) {
                C.isStatic = !1
                var A = (C.data = o({}, C.data))
                for (var O in ((A.on = A.on || {}), A.on)) {
                  var _ = A.on[O]
                  O in x && (A.on[O] = Array.isArray(_) ? _ : [_])
                }
                for (var j in x) j in A.on ? A.on[j].push(x[j]) : (A.on[j] = w)
                var S = (C.data.attrs = o({}, C.data.attrs))
                ;(S.href = s), (S['aria-current'] = g)
              } else R.on = x
            }
            return t(this.tag, R, this.$slots.default)
          },
        }
      function at(t) {
        if (
          !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
          !t.defaultPrevented &&
          (void 0 === t.button || 0 === t.button)
        ) {
          if (t.currentTarget && t.currentTarget.getAttribute) {
            var e = t.currentTarget.getAttribute('target')
            if (/\b_blank\b/i.test(e)) return
          }
          return t.preventDefault && t.preventDefault(), !0
        }
      }
      function ut(t) {
        if (t)
          for (var e, r = 0; r < t.length; r++) {
            if (((e = t[r]), 'a' === e.tag)) return e
            if (e.children && (e = ut(e.children))) return e
          }
      }
      function st(t) {
        if (!st.installed || et !== t) {
          ;(st.installed = !0), (et = t)
          var e = function (t) {
              return void 0 !== t
            },
            r = function (t, r) {
              var n = t.$options._parentVnode
              e(n) &&
                e((n = n.data)) &&
                e((n = n.registerRouteInstance)) &&
                n(t, r)
            }
          t.mixin({
            beforeCreate: function () {
              e(this.$options.router)
                ? ((this._routerRoot = this),
                  (this._router = this.$options.router),
                  this._router.init(this),
                  t.util.defineReactive(
                    this,
                    '_route',
                    this._router.history.current
                  ))
                : (this._routerRoot =
                    (this.$parent && this.$parent._routerRoot) || this),
                r(this, this)
            },
            destroyed: function () {
              r(this)
            },
          }),
            Object.defineProperty(t.prototype, '$router', {
              get: function () {
                return this._routerRoot._router
              },
            }),
            Object.defineProperty(t.prototype, '$route', {
              get: function () {
                return this._routerRoot._route
              },
            }),
            t.component('RouterView', C),
            t.component('RouterLink', it)
          var n = t.config.optionMergeStrategies
          n.beforeRouteEnter =
            n.beforeRouteLeave =
            n.beforeRouteUpdate =
              n.created
        }
      }
      var ct = 'undefined' !== typeof window
      function pt(t, e, r, n, o) {
        var i = e || [],
          a = r || Object.create(null),
          u = n || Object.create(null)
        t.forEach(function (t) {
          ft(i, a, u, t, o)
        })
        for (var s = 0, c = i.length; s < c; s++)
          '*' === i[s] && (i.push(i.splice(s, 1)[0]), c--, s--)
        return { pathList: i, pathMap: a, nameMap: u }
      }
      function ft(t, e, r, n, o, i) {
        var a = n.path,
          u = n.name
        var s = n.pathToRegexpOptions || {},
          c = lt(a, o, s.strict)
        'boolean' === typeof n.caseSensitive && (s.sensitive = n.caseSensitive)
        var p = {
          path: c,
          regex: ht(c, s),
          components: n.components || { default: n.component },
          alias: n.alias
            ? 'string' === typeof n.alias
              ? [n.alias]
              : n.alias
            : [],
          instances: {},
          enteredCbs: {},
          name: u,
          parent: o,
          matchAs: i,
          redirect: n.redirect,
          beforeEnter: n.beforeEnter,
          meta: n.meta || {},
          props:
            null == n.props
              ? {}
              : n.components
              ? n.props
              : { default: n.props },
        }
        if (
          (n.children &&
            n.children.forEach(function (n) {
              var o = i ? S(i + '/' + n.path) : void 0
              ft(t, e, r, n, p, o)
            }),
          e[p.path] || (t.push(p.path), (e[p.path] = p)),
          void 0 !== n.alias)
        )
          for (
            var f = Array.isArray(n.alias) ? n.alias : [n.alias], h = 0;
            h < f.length;
            ++h
          ) {
            var l = f[h]
            0
            var d = { path: l, children: n.children }
            ft(t, e, r, d, o, p.path || '/')
          }
        u && (r[u] || (r[u] = p))
      }
      function ht(t, e) {
        var r = P(t, [], e)
        return r
      }
      function lt(t, e, r) {
        return (
          r || (t = t.replace(/\/$/, '')),
          '/' === t[0] || null == e ? t : S(e.path + '/' + t)
        )
      }
      function dt(t, e) {
        var r = pt(t),
          n = r.pathList,
          o = r.pathMap,
          i = r.nameMap
        function a(t) {
          pt(t, n, o, i)
        }
        function u(t, e) {
          var r = 'object' !== typeof t ? i[t] : void 0
          pt([e || t], n, o, i, r),
            r &&
              r.alias.length &&
              pt(
                r.alias.map(function (t) {
                  return { path: t, children: [e] }
                }),
                n,
                o,
                i,
                r
              )
        }
        function s() {
          return n.map(function (t) {
            return o[t]
          })
        }
        function c(t, r, a) {
          var u = tt(t, r, !1, e),
            s = u.name
          if (s) {
            var c = i[s]
            if (!c) return h(null, u)
            var p = c.regex.keys
              .filter(function (t) {
                return !t.optional
              })
              .map(function (t) {
                return t.name
              })
            if (
              ('object' !== typeof u.params && (u.params = {}),
              r && 'object' === typeof r.params)
            )
              for (var f in r.params)
                !(f in u.params) &&
                  p.indexOf(f) > -1 &&
                  (u.params[f] = r.params[f])
            return (
              (u.path = Z(c.path, u.params, 'named route "' + s + '"')),
              h(c, u, a)
            )
          }
          if (u.path) {
            u.params = {}
            for (var l = 0; l < n.length; l++) {
              var d = n[l],
                v = o[d]
              if (vt(v.regex, u.path, u.params)) return h(v, u, a)
            }
          }
          return h(null, u)
        }
        function p(t, r) {
          var n = t.redirect,
            o = 'function' === typeof n ? n(v(t, r, null, e)) : n
          if (
            ('string' === typeof o && (o = { path: o }),
            !o || 'object' !== typeof o)
          )
            return h(null, r)
          var a = o,
            u = a.name,
            s = a.path,
            p = r.query,
            f = r.hash,
            l = r.params
          if (
            ((p = a.hasOwnProperty('query') ? a.query : p),
            (f = a.hasOwnProperty('hash') ? a.hash : f),
            (l = a.hasOwnProperty('params') ? a.params : l),
            u)
          ) {
            i[u]
            return c(
              { _normalized: !0, name: u, query: p, hash: f, params: l },
              void 0,
              r
            )
          }
          if (s) {
            var d = yt(s, t),
              y = Z(d, l, 'redirect route with path "' + d + '"')
            return c({ _normalized: !0, path: y, query: p, hash: f }, void 0, r)
          }
          return h(null, r)
        }
        function f(t, e, r) {
          var n = Z(r, e.params, 'aliased route with path "' + r + '"'),
            o = c({ _normalized: !0, path: n })
          if (o) {
            var i = o.matched,
              a = i[i.length - 1]
            return (e.params = o.params), h(a, e)
          }
          return h(null, e)
        }
        function h(t, r, n) {
          return t && t.redirect
            ? p(t, n || r)
            : t && t.matchAs
            ? f(t, r, t.matchAs)
            : v(t, r, n, e)
        }
        return { match: c, addRoute: u, getRoutes: s, addRoutes: a }
      }
      function vt(t, e, r) {
        var n = e.match(t)
        if (!n) return !1
        if (!r) return !0
        for (var o = 1, i = n.length; o < i; ++o) {
          var a = t.keys[o - 1]
          a &&
            (r[a.name || 'pathMatch'] =
              'string' === typeof n[o] ? c(n[o]) : n[o])
        }
        return !0
      }
      function yt(t, e) {
        return _(t, e.parent ? e.parent.path : '/', !0)
      }
      var mt =
        ct && window.performance && window.performance.now
          ? window.performance
          : Date
      function gt() {
        return mt.now().toFixed(3)
      }
      var wt = gt()
      function bt() {
        return wt
      }
      function xt(t) {
        return (wt = t)
      }
      var kt = Object.create(null)
      function Rt() {
        'scrollRestoration' in window.history &&
          (window.history.scrollRestoration = 'manual')
        var t = window.location.protocol + '//' + window.location.host,
          e = window.location.href.replace(t, ''),
          r = o({}, window.history.state)
        return (
          (r.key = bt()),
          window.history.replaceState(r, '', e),
          window.addEventListener('popstate', At),
          function () {
            window.removeEventListener('popstate', At)
          }
        )
      }
      function Et(t, e, r, n) {
        if (t.app) {
          var o = t.options.scrollBehavior
          o &&
            t.app.$nextTick(function () {
              var i = Ot(),
                a = o.call(t, e, r, n ? i : null)
              a &&
                ('function' === typeof a.then
                  ? a
                      .then(function (t) {
                        $t(t, i)
                      })
                      .catch(function (t) {
                        0
                      })
                  : $t(a, i))
            })
        }
      }
      function Ct() {
        var t = bt()
        t && (kt[t] = { x: window.pageXOffset, y: window.pageYOffset })
      }
      function At(t) {
        Ct(), t.state && t.state.key && xt(t.state.key)
      }
      function Ot() {
        var t = bt()
        if (t) return kt[t]
      }
      function _t(t, e) {
        var r = document.documentElement,
          n = r.getBoundingClientRect(),
          o = t.getBoundingClientRect()
        return { x: o.left - n.left - e.x, y: o.top - n.top - e.y }
      }
      function jt(t) {
        return Pt(t.x) || Pt(t.y)
      }
      function St(t) {
        return {
          x: Pt(t.x) ? t.x : window.pageXOffset,
          y: Pt(t.y) ? t.y : window.pageYOffset,
        }
      }
      function Tt(t) {
        return { x: Pt(t.x) ? t.x : 0, y: Pt(t.y) ? t.y : 0 }
      }
      function Pt(t) {
        return 'number' === typeof t
      }
      var Lt = /^#\d/
      function $t(t, e) {
        var r = 'object' === typeof t
        if (r && 'string' === typeof t.selector) {
          var n = Lt.test(t.selector)
            ? document.getElementById(t.selector.slice(1))
            : document.querySelector(t.selector)
          if (n) {
            var o = t.offset && 'object' === typeof t.offset ? t.offset : {}
            ;(o = Tt(o)), (e = _t(n, o))
          } else jt(t) && (e = St(t))
        } else r && jt(t) && (e = St(t))
        e &&
          ('scrollBehavior' in document.documentElement.style
            ? window.scrollTo({ left: e.x, top: e.y, behavior: t.behavior })
            : window.scrollTo(e.x, e.y))
      }
      var qt =
        ct &&
        (function () {
          var t = window.navigator.userAgent
          return (
            ((-1 === t.indexOf('Android 2.') &&
              -1 === t.indexOf('Android 4.0')) ||
              -1 === t.indexOf('Mobile Safari') ||
              -1 !== t.indexOf('Chrome') ||
              -1 !== t.indexOf('Windows Phone')) &&
            window.history &&
            'function' === typeof window.history.pushState
          )
        })()
      function Ut(t, e) {
        Ct()
        var r = window.history
        try {
          if (e) {
            var n = o({}, r.state)
            ;(n.key = bt()), r.replaceState(n, '', t)
          } else r.pushState({ key: xt(gt()) }, '', t)
        } catch (i) {
          window.location[e ? 'replace' : 'assign'](t)
        }
      }
      function Bt(t) {
        Ut(t, !0)
      }
      function It(t, e, r) {
        var n = function (o) {
          o >= t.length
            ? r()
            : t[o]
            ? e(t[o], function () {
                n(o + 1)
              })
            : n(o + 1)
        }
        n(0)
      }
      var Mt = { redirected: 2, aborted: 4, cancelled: 8, duplicated: 16 }
      function Vt(t, e) {
        return zt(
          t,
          e,
          Mt.redirected,
          'Redirected when going from "' +
            t.fullPath +
            '" to "' +
            Jt(e) +
            '" via a navigation guard.'
        )
      }
      function Ht(t, e) {
        var r = zt(
          t,
          e,
          Mt.duplicated,
          'Avoided redundant navigation to current location: "' +
            t.fullPath +
            '".'
        )
        return (r.name = 'NavigationDuplicated'), r
      }
      function Nt(t, e) {
        return zt(
          t,
          e,
          Mt.cancelled,
          'Navigation cancelled from "' +
            t.fullPath +
            '" to "' +
            e.fullPath +
            '" with a new navigation.'
        )
      }
      function Ft(t, e) {
        return zt(
          t,
          e,
          Mt.aborted,
          'Navigation aborted from "' +
            t.fullPath +
            '" to "' +
            e.fullPath +
            '" via a navigation guard.'
        )
      }
      function zt(t, e, r, n) {
        var o = new Error(n)
        return (o._isRouter = !0), (o.from = t), (o.to = e), (o.type = r), o
      }
      var Dt = ['params', 'query', 'hash']
      function Jt(t) {
        if ('string' === typeof t) return t
        if ('path' in t) return t.path
        var e = {}
        return (
          Dt.forEach(function (r) {
            r in t && (e[r] = t[r])
          }),
          JSON.stringify(e, null, 2)
        )
      }
      function Kt(t) {
        return Object.prototype.toString.call(t).indexOf('Error') > -1
      }
      function Qt(t, e) {
        return Kt(t) && t._isRouter && (null == e || t.type === e)
      }
      function Xt(t) {
        return function (e, r, n) {
          var o = !1,
            i = 0,
            a = null
          Yt(t, function (t, e, r, u) {
            if ('function' === typeof t && void 0 === t.cid) {
              ;(o = !0), i++
              var s,
                c = te(function (e) {
                  Zt(e) && (e = e.default),
                    (t.resolved = 'function' === typeof e ? e : et.extend(e)),
                    (r.components[u] = e),
                    i--,
                    i <= 0 && n()
                }),
                p = te(function (t) {
                  var e = 'Failed to resolve async component ' + u + ': ' + t
                  a || ((a = Kt(t) ? t : new Error(e)), n(a))
                })
              try {
                s = t(c, p)
              } catch (h) {
                p(h)
              }
              if (s)
                if ('function' === typeof s.then) s.then(c, p)
                else {
                  var f = s.component
                  f && 'function' === typeof f.then && f.then(c, p)
                }
            }
          }),
            o || n()
        }
      }
      function Yt(t, e) {
        return Wt(
          t.map(function (t) {
            return Object.keys(t.components).map(function (r) {
              return e(t.components[r], t.instances[r], t, r)
            })
          })
        )
      }
      function Wt(t) {
        return Array.prototype.concat.apply([], t)
      }
      var Gt =
        'function' === typeof Symbol && 'symbol' === typeof Symbol.toStringTag
      function Zt(t) {
        return t.__esModule || (Gt && 'Module' === t[Symbol.toStringTag])
      }
      function te(t) {
        var e = !1
        return function () {
          var r = [],
            n = arguments.length
          while (n--) r[n] = arguments[n]
          if (!e) return (e = !0), t.apply(this, r)
        }
      }
      var ee = function (t, e) {
        ;(this.router = t),
          (this.base = re(e)),
          (this.current = m),
          (this.pending = null),
          (this.ready = !1),
          (this.readyCbs = []),
          (this.readyErrorCbs = []),
          (this.errorCbs = []),
          (this.listeners = [])
      }
      function re(t) {
        if (!t)
          if (ct) {
            var e = document.querySelector('base')
            ;(t = (e && e.getAttribute('href')) || '/'),
              (t = t.replace(/^https?:\/\/[^\/]+/, ''))
          } else t = '/'
        return '/' !== t.charAt(0) && (t = '/' + t), t.replace(/\/$/, '')
      }
      function ne(t, e) {
        var r,
          n = Math.max(t.length, e.length)
        for (r = 0; r < n; r++) if (t[r] !== e[r]) break
        return {
          updated: e.slice(0, r),
          activated: e.slice(r),
          deactivated: t.slice(r),
        }
      }
      function oe(t, e, r, n) {
        var o = Yt(t, function (t, n, o, i) {
          var a = ie(t, e)
          if (a)
            return Array.isArray(a)
              ? a.map(function (t) {
                  return r(t, n, o, i)
                })
              : r(a, n, o, i)
        })
        return Wt(n ? o.reverse() : o)
      }
      function ie(t, e) {
        return 'function' !== typeof t && (t = et.extend(t)), t.options[e]
      }
      function ae(t) {
        return oe(t, 'beforeRouteLeave', se, !0)
      }
      function ue(t) {
        return oe(t, 'beforeRouteUpdate', se)
      }
      function se(t, e) {
        if (e)
          return function () {
            return t.apply(e, arguments)
          }
      }
      function ce(t) {
        return oe(t, 'beforeRouteEnter', function (t, e, r, n) {
          return pe(t, r, n)
        })
      }
      function pe(t, e, r) {
        return function (n, o, i) {
          return t(n, o, function (t) {
            'function' === typeof t &&
              (e.enteredCbs[r] || (e.enteredCbs[r] = []),
              e.enteredCbs[r].push(t)),
              i(t)
          })
        }
      }
      ;(ee.prototype.listen = function (t) {
        this.cb = t
      }),
        (ee.prototype.onReady = function (t, e) {
          this.ready
            ? t()
            : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e))
        }),
        (ee.prototype.onError = function (t) {
          this.errorCbs.push(t)
        }),
        (ee.prototype.transitionTo = function (t, e, r) {
          var n,
            o = this
          try {
            n = this.router.match(t, this.current)
          } catch (a) {
            throw (
              (this.errorCbs.forEach(function (t) {
                t(a)
              }),
              a)
            )
          }
          var i = this.current
          this.confirmTransition(
            n,
            function () {
              o.updateRoute(n),
                e && e(n),
                o.ensureURL(),
                o.router.afterHooks.forEach(function (t) {
                  t && t(n, i)
                }),
                o.ready ||
                  ((o.ready = !0),
                  o.readyCbs.forEach(function (t) {
                    t(n)
                  }))
            },
            function (t) {
              r && r(t),
                t &&
                  !o.ready &&
                  ((Qt(t, Mt.redirected) && i === m) ||
                    ((o.ready = !0),
                    o.readyErrorCbs.forEach(function (e) {
                      e(t)
                    })))
            }
          )
        }),
        (ee.prototype.confirmTransition = function (t, e, r) {
          var o = this,
            i = this.current
          this.pending = t
          var a = function (t) {
              !Qt(t) &&
                Kt(t) &&
                (o.errorCbs.length
                  ? o.errorCbs.forEach(function (e) {
                      e(t)
                    })
                  : (n(!1, 'uncaught error during route navigation:'),
                    console.error(t))),
                r && r(t)
            },
            u = t.matched.length - 1,
            s = i.matched.length - 1
          if (b(t, i) && u === s && t.matched[u] === i.matched[s])
            return this.ensureURL(), a(Ht(i, t))
          var c = ne(this.current.matched, t.matched),
            p = c.updated,
            f = c.deactivated,
            h = c.activated,
            l = [].concat(
              ae(f),
              this.router.beforeHooks,
              ue(p),
              h.map(function (t) {
                return t.beforeEnter
              }),
              Xt(h)
            ),
            d = function (e, r) {
              if (o.pending !== t) return a(Nt(i, t))
              try {
                e(t, i, function (e) {
                  !1 === e
                    ? (o.ensureURL(!0), a(Ft(i, t)))
                    : Kt(e)
                    ? (o.ensureURL(!0), a(e))
                    : 'string' === typeof e ||
                      ('object' === typeof e &&
                        ('string' === typeof e.path ||
                          'string' === typeof e.name))
                    ? (a(Vt(i, t)),
                      'object' === typeof e && e.replace
                        ? o.replace(e)
                        : o.push(e))
                    : r(e)
                })
              } catch (n) {
                a(n)
              }
            }
          It(l, d, function () {
            var r = ce(h),
              n = r.concat(o.router.resolveHooks)
            It(n, d, function () {
              if (o.pending !== t) return a(Nt(i, t))
              ;(o.pending = null),
                e(t),
                o.router.app &&
                  o.router.app.$nextTick(function () {
                    E(t)
                  })
            })
          })
        }),
        (ee.prototype.updateRoute = function (t) {
          ;(this.current = t), this.cb && this.cb(t)
        }),
        (ee.prototype.setupListeners = function () {}),
        (ee.prototype.teardown = function () {
          this.listeners.forEach(function (t) {
            t()
          }),
            (this.listeners = []),
            (this.current = m),
            (this.pending = null)
        })
      var fe = (function (t) {
        function e(e, r) {
          t.call(this, e, r), (this._startLocation = he(this.base))
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.setupListeners = function () {
            var t = this
            if (!(this.listeners.length > 0)) {
              var e = this.router,
                r = e.options.scrollBehavior,
                n = qt && r
              n && this.listeners.push(Rt())
              var o = function () {
                var r = t.current,
                  o = he(t.base)
                ;(t.current === m && o === t._startLocation) ||
                  t.transitionTo(o, function (t) {
                    n && Et(e, t, r, !0)
                  })
              }
              window.addEventListener('popstate', o),
                this.listeners.push(function () {
                  window.removeEventListener('popstate', o)
                })
            }
          }),
          (e.prototype.go = function (t) {
            window.history.go(t)
          }),
          (e.prototype.push = function (t, e, r) {
            var n = this,
              o = this,
              i = o.current
            this.transitionTo(
              t,
              function (t) {
                Ut(S(n.base + t.fullPath)), Et(n.router, t, i, !1), e && e(t)
              },
              r
            )
          }),
          (e.prototype.replace = function (t, e, r) {
            var n = this,
              o = this,
              i = o.current
            this.transitionTo(
              t,
              function (t) {
                Bt(S(n.base + t.fullPath)), Et(n.router, t, i, !1), e && e(t)
              },
              r
            )
          }),
          (e.prototype.ensureURL = function (t) {
            if (he(this.base) !== this.current.fullPath) {
              var e = S(this.base + this.current.fullPath)
              t ? Ut(e) : Bt(e)
            }
          }),
          (e.prototype.getCurrentLocation = function () {
            return he(this.base)
          }),
          e
        )
      })(ee)
      function he(t) {
        var e = window.location.pathname,
          r = e.toLowerCase(),
          n = t.toLowerCase()
        return (
          !t ||
            (r !== n && 0 !== r.indexOf(S(n + '/'))) ||
            (e = e.slice(t.length)),
          (e || '/') + window.location.search + window.location.hash
        )
      }
      var le = (function (t) {
        function e(e, r, n) {
          t.call(this, e, r), (n && de(this.base)) || ve()
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.setupListeners = function () {
            var t = this
            if (!(this.listeners.length > 0)) {
              var e = this.router,
                r = e.options.scrollBehavior,
                n = qt && r
              n && this.listeners.push(Rt())
              var o = function () {
                  var e = t.current
                  ve() &&
                    t.transitionTo(ye(), function (r) {
                      n && Et(t.router, r, e, !0), qt || we(r.fullPath)
                    })
                },
                i = qt ? 'popstate' : 'hashchange'
              window.addEventListener(i, o),
                this.listeners.push(function () {
                  window.removeEventListener(i, o)
                })
            }
          }),
          (e.prototype.push = function (t, e, r) {
            var n = this,
              o = this,
              i = o.current
            this.transitionTo(
              t,
              function (t) {
                ge(t.fullPath), Et(n.router, t, i, !1), e && e(t)
              },
              r
            )
          }),
          (e.prototype.replace = function (t, e, r) {
            var n = this,
              o = this,
              i = o.current
            this.transitionTo(
              t,
              function (t) {
                we(t.fullPath), Et(n.router, t, i, !1), e && e(t)
              },
              r
            )
          }),
          (e.prototype.go = function (t) {
            window.history.go(t)
          }),
          (e.prototype.ensureURL = function (t) {
            var e = this.current.fullPath
            ye() !== e && (t ? ge(e) : we(e))
          }),
          (e.prototype.getCurrentLocation = function () {
            return ye()
          }),
          e
        )
      })(ee)
      function de(t) {
        var e = he(t)
        if (!/^\/#/.test(e)) return window.location.replace(S(t + '/#' + e)), !0
      }
      function ve() {
        var t = ye()
        return '/' === t.charAt(0) || (we('/' + t), !1)
      }
      function ye() {
        var t = window.location.href,
          e = t.indexOf('#')
        return e < 0 ? '' : ((t = t.slice(e + 1)), t)
      }
      function me(t) {
        var e = window.location.href,
          r = e.indexOf('#'),
          n = r >= 0 ? e.slice(0, r) : e
        return n + '#' + t
      }
      function ge(t) {
        qt ? Ut(me(t)) : (window.location.hash = t)
      }
      function we(t) {
        qt ? Bt(me(t)) : window.location.replace(me(t))
      }
      var be = (function (t) {
          function e(e, r) {
            t.call(this, e, r), (this.stack = []), (this.index = -1)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.push = function (t, e, r) {
              var n = this
              this.transitionTo(
                t,
                function (t) {
                  ;(n.stack = n.stack.slice(0, n.index + 1).concat(t)),
                    n.index++,
                    e && e(t)
                },
                r
              )
            }),
            (e.prototype.replace = function (t, e, r) {
              var n = this
              this.transitionTo(
                t,
                function (t) {
                  ;(n.stack = n.stack.slice(0, n.index).concat(t)), e && e(t)
                },
                r
              )
            }),
            (e.prototype.go = function (t) {
              var e = this,
                r = this.index + t
              if (!(r < 0 || r >= this.stack.length)) {
                var n = this.stack[r]
                this.confirmTransition(
                  n,
                  function () {
                    var t = e.current
                    ;(e.index = r),
                      e.updateRoute(n),
                      e.router.afterHooks.forEach(function (e) {
                        e && e(n, t)
                      })
                  },
                  function (t) {
                    Qt(t, Mt.duplicated) && (e.index = r)
                  }
                )
              }
            }),
            (e.prototype.getCurrentLocation = function () {
              var t = this.stack[this.stack.length - 1]
              return t ? t.fullPath : '/'
            }),
            (e.prototype.ensureURL = function () {}),
            e
          )
        })(ee),
        xe = function (t) {
          void 0 === t && (t = {}),
            (this.app = null),
            (this.apps = []),
            (this.options = t),
            (this.beforeHooks = []),
            (this.resolveHooks = []),
            (this.afterHooks = []),
            (this.matcher = dt(t.routes || [], this))
          var e = t.mode || 'hash'
          switch (
            ((this.fallback = 'history' === e && !qt && !1 !== t.fallback),
            this.fallback && (e = 'hash'),
            ct || (e = 'abstract'),
            (this.mode = e),
            e)
          ) {
            case 'history':
              this.history = new fe(this, t.base)
              break
            case 'hash':
              this.history = new le(this, t.base, this.fallback)
              break
            case 'abstract':
              this.history = new be(this, t.base)
              break
            default:
              0
          }
        },
        ke = { currentRoute: { configurable: !0 } }
      function Re(t, e) {
        return (
          t.push(e),
          function () {
            var r = t.indexOf(e)
            r > -1 && t.splice(r, 1)
          }
        )
      }
      function Ee(t, e, r) {
        var n = 'hash' === r ? '#' + e : e
        return t ? S(t + '/' + n) : n
      }
      ;(xe.prototype.match = function (t, e, r) {
        return this.matcher.match(t, e, r)
      }),
        (ke.currentRoute.get = function () {
          return this.history && this.history.current
        }),
        (xe.prototype.init = function (t) {
          var e = this
          if (
            (this.apps.push(t),
            t.$once('hook:destroyed', function () {
              var r = e.apps.indexOf(t)
              r > -1 && e.apps.splice(r, 1),
                e.app === t && (e.app = e.apps[0] || null),
                e.app || e.history.teardown()
            }),
            !this.app)
          ) {
            this.app = t
            var r = this.history
            if (r instanceof fe || r instanceof le) {
              var n = function (t) {
                  var n = r.current,
                    o = e.options.scrollBehavior,
                    i = qt && o
                  i && 'fullPath' in t && Et(e, t, n, !1)
                },
                o = function (t) {
                  r.setupListeners(), n(t)
                }
              r.transitionTo(r.getCurrentLocation(), o, o)
            }
            r.listen(function (t) {
              e.apps.forEach(function (e) {
                e._route = t
              })
            })
          }
        }),
        (xe.prototype.beforeEach = function (t) {
          return Re(this.beforeHooks, t)
        }),
        (xe.prototype.beforeResolve = function (t) {
          return Re(this.resolveHooks, t)
        }),
        (xe.prototype.afterEach = function (t) {
          return Re(this.afterHooks, t)
        }),
        (xe.prototype.onReady = function (t, e) {
          this.history.onReady(t, e)
        }),
        (xe.prototype.onError = function (t) {
          this.history.onError(t)
        }),
        (xe.prototype.push = function (t, e, r) {
          var n = this
          if (!e && !r && 'undefined' !== typeof Promise)
            return new Promise(function (e, r) {
              n.history.push(t, e, r)
            })
          this.history.push(t, e, r)
        }),
        (xe.prototype.replace = function (t, e, r) {
          var n = this
          if (!e && !r && 'undefined' !== typeof Promise)
            return new Promise(function (e, r) {
              n.history.replace(t, e, r)
            })
          this.history.replace(t, e, r)
        }),
        (xe.prototype.go = function (t) {
          this.history.go(t)
        }),
        (xe.prototype.back = function () {
          this.go(-1)
        }),
        (xe.prototype.forward = function () {
          this.go(1)
        }),
        (xe.prototype.getMatchedComponents = function (t) {
          var e = t
            ? t.matched
              ? t
              : this.resolve(t).route
            : this.currentRoute
          return e
            ? [].concat.apply(
                [],
                e.matched.map(function (t) {
                  return Object.keys(t.components).map(function (e) {
                    return t.components[e]
                  })
                })
              )
            : []
        }),
        (xe.prototype.resolve = function (t, e, r) {
          e = e || this.history.current
          var n = tt(t, e, r, this),
            o = this.match(n, e),
            i = o.redirectedFrom || o.fullPath,
            a = this.history.base,
            u = Ee(a, i, this.mode)
          return {
            location: n,
            route: o,
            href: u,
            normalizedTo: n,
            resolved: o,
          }
        }),
        (xe.prototype.getRoutes = function () {
          return this.matcher.getRoutes()
        }),
        (xe.prototype.addRoute = function (t, e) {
          this.matcher.addRoute(t, e),
            this.history.current !== m &&
              this.history.transitionTo(this.history.getCurrentLocation())
        }),
        (xe.prototype.addRoutes = function (t) {
          this.matcher.addRoutes(t),
            this.history.current !== m &&
              this.history.transitionTo(this.history.getCurrentLocation())
        }),
        Object.defineProperties(xe.prototype, ke),
        (xe.install = st),
        (xe.version = '3.5.2'),
        (xe.isNavigationFailure = Qt),
        (xe.NavigationFailureType = Mt),
        (xe.START_LOCATION = m),
        ct && window.Vue && window.Vue.use(xe),
        (e['a'] = xe)
    },
  },
])
