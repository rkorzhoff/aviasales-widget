;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-db7bfbfa'],
  {
    '0f3d': function (t, e, i) {},
    3096: function (t, e, i) {},
    '4aea': function (t, e, i) {
      'use strict'
      i('6209')
    },
    '55ee': function (t, e, i) {
      t.exports = i.p + 'img/company-logo.5be24866.svg'
    },
    5731: function (t, e, i) {
      'use strict'
      i('8be0')
    },
    6209: function (t, e, i) {},
    '8be0': function (t, e, i) {},
    9587: function (t, e, i) {
      'use strict'
      var s = [
        { choiceId: 'choice-all', choiceLabel: 'Все' },
        { choiceId: 'choice-none', choiceLabel: 'Без пересадок' },
        { choiceId: 'choice-one', choiceLabel: '1 пересадка' },
        { choiceId: 'choice-two', choiceLabel: '2 пересадки' },
        { choiceId: 'choice-three', choiceLabel: '3 пересадки' },
      ]
      e['a'] = s
    },
    c166: function (t, e, i) {
      'use strict'
      i('0f3d')
    },
    d5bb: function (t, e, i) {
      'use strict'
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'div',
            { staticClass: 'list-container' },
            t._l(t.listOfFlights, function (t) {
              return i('ListItem', {
                key: t.price,
                staticClass: 'item',
                attrs: { flight: t },
              })
            }),
            1
          )
        },
        c = [],
        a = i('d4ec'),
        r = i('262e'),
        n = i('2caf'),
        o = i('9ab4'),
        l = i('1b40'),
        f = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('div', { staticClass: 'item-container' }, [
            s('div', { staticClass: 'item-container-header' }, [
              s('span', { staticClass: 'price' }, [
                t._v(t._s(t.formatPrice(t.flight.price)) + ' ₽'),
              ]),
              s('img', { attrs: { alt: 'company-logo', src: i('55ee') } }),
            ]),
            s('div', { staticClass: 'item-container-body' }, [
              s('div', { staticClass: 'ticket-wrapper' }, [
                s('div', { staticClass: 'body-item' }, [
                  s('span', { staticClass: 'item-top' }, [
                    t._v(
                      t._s(t.flight.firstTicket.departureCity) +
                        ' - ' +
                        t._s(t.flight.firstTicket.arrivalCity)
                    ),
                  ]),
                  s('span', { staticClass: 'item-bottom' }, [
                    t._v(
                      t._s(t.flight.firstTicket.departureTime) +
                        ' - ' +
                        t._s(t.flight.firstTicket.arrivalTime)
                    ),
                  ]),
                ]),
                s('div', { staticClass: 'body-item' }, [
                  s('span', { staticClass: 'item-top' }, [t._v('В ПУТИ')]),
                  s('span', { staticClass: 'item-bottom' }, [
                    t._v(t._s(t.firstFlightTime)),
                  ]),
                ]),
                s('div', { staticClass: 'body-item' }, [
                  s('span', { staticClass: 'item-top' }, [
                    t._v(t._s(t.firstTransfer)),
                  ]),
                  s('span', { staticClass: 'item-bottom' }, [
                    t._v(
                      t._s(t.flight.firstTicket.transferPoints.toString()) + ' '
                    ),
                  ]),
                ]),
              ]),
              s('div', { staticClass: 'ticket-wrapper' }, [
                s('div', { staticClass: 'body-item' }, [
                  s('span', { staticClass: 'item-top' }, [
                    t._v(
                      t._s(t.flight.secondTicket.departureCity) +
                        ' - ' +
                        t._s(t.flight.secondTicket.arrivalCity)
                    ),
                  ]),
                  s('span', { staticClass: 'item-bottom' }, [
                    t._v(
                      t._s(t.flight.secondTicket.departureTime) +
                        ' - ' +
                        t._s(t.flight.secondTicket.arrivalTime)
                    ),
                  ]),
                ]),
                s('div', { staticClass: 'body-item' }, [
                  s('span', { staticClass: 'item-top' }, [t._v('В ПУТИ')]),
                  s('span', { staticClass: 'item-bottom' }, [
                    t._v(t._s(t.secondFlightTime)),
                  ]),
                ]),
                s('div', { staticClass: 'body-item' }, [
                  s('span', { staticClass: 'item-top' }, [
                    t._v(t._s(t.secondTransfer)),
                  ]),
                  s('span', { staticClass: 'item-bottom' }, [
                    t._v(
                      t._s(t.flight.secondTicket.transferPoints.toString()) +
                        ' '
                    ),
                  ]),
                ]),
              ]),
            ]),
          ])
        },
        h = [],
        u = i('bee2'),
        d = (i('ac1f'), i('5319'), i('d3b7'), i('25f0'), i('99af'), i('d4be')),
        b = (function (t) {
          Object(r['a'])(i, t)
          var e = Object(n['a'])(i)
          function i() {
            var t
            return (
              Object(a['a'])(this, i),
              (t = e.apply(this, arguments)),
              (t.firstFlightTime = ''),
              (t.secondFlightTime = ''),
              (t.firstNumberOfTransfers = 0),
              (t.secondNumberOfTransfers = 0),
              (t.firstTransfer = ''),
              (t.secondTransfer = ''),
              (t.transferDecl = ['пересадка', 'пересадки', 'пересадок']),
              t
            )
          }
          return (
            Object(u['a'])(i, [
              {
                key: 'calculateFlightTime',
                value: function () {
                  ;(this.firstFlightTime = d['a'].calculateTime(
                    this.flight.firstTicket.arrivalTime,
                    this.flight.firstTicket.departureTime
                  )),
                    (this.secondFlightTime = d['a'].calculateTime(
                      this.flight.secondTicket.arrivalTime,
                      this.flight.secondTicket.departureTime
                    ))
                },
              },
              {
                key: 'formatPrice',
                value: function (t) {
                  return t.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
                },
              },
              {
                key: 'declOfNum',
                value: function (t, e) {
                  return e[
                    t % 100 > 4 && t % 100 < 20
                      ? 2
                      : [2, 0, 1, 1, 1, 2][t % 10 < 5 ? Math.abs(t) % 10 : 5]
                  ]
                },
              },
              {
                key: 'getNumberOfTransfers',
                value: function () {
                  ;(this.firstNumberOfTransfers =
                    this.flight.firstTicket.transferPoints.length),
                    (this.secondNumberOfTransfers =
                      this.flight.secondTicket.transferPoints.length),
                    (this.firstTransfer = ''
                      .concat(this.firstNumberOfTransfers, ' ')
                      .concat(
                        this.declOfNum(
                          this.firstNumberOfTransfers,
                          this.transferDecl
                        )
                      )),
                    (this.secondTransfer = ''
                      .concat(this.secondNumberOfTransfers, ' ')
                      .concat(
                        this.declOfNum(
                          this.secondNumberOfTransfers,
                          this.transferDecl
                        )
                      ))
                },
              },
              {
                key: 'created',
                value: function () {
                  this.calculateFlightTime(), this.getNumberOfTransfers()
                },
              },
            ]),
            i
          )
        })(l['f'])
      Object(o['a'])([Object(l['c'])()], b.prototype, 'flight', void 0),
        (b = Object(o['a'])([l['a']], b))
      var m = b,
        p = m,
        v = (i('4aea'), i('2877')),
        T = Object(v['a'])(p, f, h, !1, null, '2175fb6f', null),
        g = T.exports,
        O = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'div',
            { staticClass: 'sort-container' },
            t._l(t.sortTypes, function (e) {
              return i(
                'div',
                {
                  key: e,
                  staticClass: 'option-wrapper',
                  class: { active: t.active === e },
                  on: {
                    click: function (i) {
                      t.active = e
                    },
                  },
                },
                [i('span', [t._v(t._s(e))])]
              )
            }),
            0
          )
        },
        _ = [],
        k = (function (t) {
          Object(r['a'])(i, t)
          var e = Object(n['a'])(i)
          function i() {
            var t
            return (
              Object(a['a'])(this, i),
              (t = e.apply(this, arguments)),
              (t.sortTypes = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']),
              (t.active = ''),
              t
            )
          }
          return i
        })(l['f'])
      k = Object(o['a'])([l['a']], k)
      var C = k,
        y = C,
        j = (i('c166'), Object(v['a'])(y, O, _, !1, null, '373b8a50', null)),
        F = j.exports,
        I = (function (t) {
          Object(r['a'])(i, t)
          var e = Object(n['a'])(i)
          function i() {
            return Object(a['a'])(this, i), e.apply(this, arguments)
          }
          return i
        })(l['f'])
      Object(o['a'])([Object(l['b'])()], I.prototype, 'listOfFlights', void 0),
        (I = Object(o['a'])(
          [Object(l['a'])({ components: { ListItem: g, ListSort: F } })],
          I
        ))
      var N = I,
        w = N,
        L = (i('d887'), Object(v['a'])(w, s, c, !1, null, '4e5531b8', null))
      e['a'] = L.exports
    },
    d887: function (t, e, i) {
      'use strict'
      i('3096')
    },
    dfa4: function (t, e, i) {
      'use strict'
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'div',
            { staticClass: 'filter-container' },
            [
              i('h2', { staticClass: 'filter-header' }, [
                t._v('Количество пересадок'),
              ]),
              t._l(t.transfersFilters, function (e) {
                return i(
                  'div',
                  { key: e.choiceId, staticClass: 'choice-item' },
                  [
                    i(
                      'label',
                      { staticClass: 'item-label', attrs: { for: e.choiceId } },
                      [
                        t._v(t._s(e.choiceLabel) + ' '),
                        i('input', {
                          staticClass: 'item-input',
                          attrs: {
                            id: e.choiceId,
                            name: e.choiceId,
                            type: 'checkbox',
                          },
                          domProps: {
                            checked: t.checkVal(e.choiceId),
                            value: e.choiceId,
                          },
                          on: { change: t.onFilterSet },
                        }),
                        i('span', { staticClass: 'checkmark' }),
                      ]
                    ),
                  ]
                )
              }),
            ],
            2
          )
        },
        c = [],
        a = i('d4ec'),
        r = i('bee2'),
        n = i('262e'),
        o = i('2caf'),
        l = (i('caad'), i('2532'), i('159b'), i('a434'), i('9ab4')),
        f = i('1b40'),
        h = i('9587'),
        u = (function (t) {
          Object(n['a'])(i, t)
          var e = Object(o['a'])(i)
          function i() {
            var t
            return (
              Object(a['a'])(this, i),
              (t = e.apply(this, arguments)),
              (t.transfersFilters = h['a']),
              t
            )
          }
          return (
            Object(r['a'])(i, [
              {
                key: 'checkVal',
                value: function (t) {
                  return 'choice-all' === t
                    ? 4 === this.computedFilters.length
                    : this.computedFilters.includes(t)
                },
              },
              {
                key: 'onFilterSet',
                value: function (t) {
                  var e = this
                  'choice-all' === t.target.id
                    ? ((this.computedFilters.length = 0),
                      this.transfersFilters.forEach(function (t) {
                        'choice-all' !== t.choiceId &&
                          e.computedFilters.push(t.choiceId)
                      }))
                    : this.computedFilters.includes(t.target.id)
                    ? this.computedFilters.splice(
                        this.computedFilters.indexOf(t.target.id),
                        1
                      )
                    : this.computedFilters.push(t.target.id)
                },
              },
            ]),
            i
          )
        })(f['f'])
      Object(l['a'])(
        [Object(f['e'])()],
        u.prototype,
        'computedFilters',
        void 0
      ),
        (u = Object(l['a'])([f['a']], u))
      var d = u,
        b = d,
        m = (i('5731'), i('2877')),
        p = Object(m['a'])(b, s, c, !1, null, 'b20ba74a', null)
      e['a'] = p.exports
    },
  },
])
