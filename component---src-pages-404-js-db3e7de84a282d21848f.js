;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    143: function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'pageQuery', function() {
          return l
        })
      var a = n(7),
        r = n.n(a),
        i = n(0),
        o = n.n(i),
        u = n(151),
        c = n(153),
        s = (function(t) {
          function e() {
            return t.apply(this, arguments) || this
          }
          return (
            r()(e, t),
            (e.prototype.render = function() {
              var t = this.props.data.site.siteMetadata.title
              return o.a.createElement(
                u.a,
                { location: this.props.location, title: t },
                o.a.createElement(c.a, {
                  title: '404: Not Found',
                  location: this.props.location
                }),
                o.a.createElement('h1', null, 'Not Found'),
                o.a.createElement(
                  'p',
                  null,
                  "You just hit a route that doesn't exist... the sadness."
                )
              )
            }),
            e
          )
        })(o.a.Component)
      e.default = s
      var l = '1097489062'
    },
    147: function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'graphql', function() {
          return h
        }),
        n.d(e, 'StaticQueryContext', function() {
          return p
        }),
        n.d(e, 'StaticQuery', function() {
          return m
        })
      var a = n(0),
        r = n.n(a),
        i = n(4),
        o = n.n(i),
        u = n(146),
        c = n.n(u)
      n.d(e, 'Link', function() {
        return c.a
      }),
        n.d(e, 'withPrefix', function() {
          return u.withPrefix
        }),
        n.d(e, 'navigate', function() {
          return u.navigate
        }),
        n.d(e, 'push', function() {
          return u.push
        }),
        n.d(e, 'replace', function() {
          return u.replace
        }),
        n.d(e, 'navigateTo', function() {
          return u.navigateTo
        })
      var s = n(149),
        l = n.n(s)
      n.d(e, 'PageRenderer', function() {
        return l.a
      })
      var d = n(33)
      n.d(e, 'parsePath', function() {
        return d.a
      })
      var p = r.a.createContext({}),
        m = function(t) {
          return r.a.createElement(p.Consumer, null, function(e) {
            return t.data || (e[t.query] && e[t.query].data)
              ? (t.render || t.children)(t.data ? t.data.data : e[t.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      m.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func
      }
    },
    148: function(t, e, n) {
      'use strict'
      n.d(e, 'a', function() {
        return l
      }),
        n.d(e, 'b', function() {
          return d
        })
      var a = n(162),
        r = n.n(a),
        i = n(163),
        o = n.n(i),
        u = n(164),
        c = n.n(u)
      ;(c.a.plugins = [new o.a()]),
        (c.a.overrideThemeStyles = function(t, e) {
          t.rhythm
          return {}
        })
      var s = new r.a(c.a)
      var l = s.rhythm,
        d = s.scale
    },
    149: function(t, e, n) {
      var a
      t.exports = ((a = n(150)) && a.default) || a
    },
    150: function(t, e, n) {
      'use strict'
      n.r(e)
      n(32)
      var a = n(0),
        r = n.n(a),
        i = n(4),
        o = n.n(i),
        u = n(52),
        c = n(2),
        s = function(t) {
          var e = t.location,
            n = c.default.getResourcesForPathnameSync(e.pathname)
          return r.a.createElement(
            u.a,
            Object.assign({ location: e, pageResources: n }, n.json)
          )
        }
      ;(s.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired
      }),
        (e.default = s)
    },
    151: function(t, e, n) {
      'use strict'
      n(32)
      var a = n(7),
        r = n.n(a),
        i = n(0),
        o = n.n(i),
        u = n(147),
        c = n(148),
        s = (n(152),
        (function(t) {
          function e() {
            return t.apply(this, arguments) || this
          }
          return (
            r()(e, t),
            (e.prototype.render = function() {
              var t,
                e = this.props,
                n = e.location,
                a = e.title,
                r = e.children
              return (
                (t =
                  '/' === n.pathname
                    ? o.a.createElement(
                        'h1',
                        {
                          style: Object.assign({}, Object(c.b)(1.5), {
                            marginBottom: Object(c.a)(1.5),
                            marginTop: 0
                          })
                        },
                        o.a.createElement(
                          u.Link,
                          {
                            style: {
                              boxShadow: 'none',
                              textDecoration: 'none',
                              color: 'inherit'
                            },
                            to: '/'
                          },
                          a
                        )
                      )
                    : o.a.createElement(
                        'h3',
                        { style: { marginTop: 0 } },
                        o.a.createElement(
                          u.Link,
                          {
                            style: {
                              boxShadow: 'none',
                              textDecoration: 'none',
                              color: 'inherit'
                            },
                            to: '/'
                          },
                          a
                        )
                      )),
                o.a.createElement(
                  'div',
                  {
                    style: {
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: Object(c.a)(24),
                      padding: Object(c.a)(1.5) + ' ' + Object(c.a)(0.75)
                    }
                  },
                  o.a.createElement('header', null, t),
                  o.a.createElement('main', null, r),
                  o.a.createElement(
                    'footer',
                    null,
                    o.a.createElement(
                      'a',
                      { href: 'https://github.com/brunoluiz' },
                      'github'
                    ),
                    ' • ',
                    o.a.createElement('a', { href: '/rss.xml' }, 'rss')
                  )
                )
              )
            }),
            e
          )
        })(o.a.Component))
      e.a = s
    },
    152: function(t, e, n) {},
    153: function(t, e, n) {
      'use strict'
      var a = n(154),
        r = n(0),
        i = n.n(r),
        o = n(4),
        u = n.n(o),
        c = n(165),
        s = n.n(c),
        l = n(147)
      function d(t) {
        var e = t.description,
          n = t.lang,
          r = t.meta,
          o = t.keywords,
          u = t.title,
          c = t.pathname,
          d = t.thumbnail,
          m = t.type
        return i.a.createElement(l.StaticQuery, {
          query: p,
          render: function(t) {
            var a = e || t.site.siteMetadata.description
            return i.a.createElement(s.a, {
              htmlAttributes: { lang: n },
              title: u,
              titleTemplate: t.site.siteMetadata.title + ' | %s',
              meta: [
                { name: 'description', content: a },
                {
                  property: 'og:url',
                  content: '' + t.site.siteMetadata.siteUrl + c
                },
                { property: 'og:title', content: u },
                {
                  property: 'og:image',
                  content: '' + t.site.siteMetadata.siteUrl + d
                },
                { property: 'og:description', content: a },
                { property: 'og:type', content: m },
                { name: 'twitter:card', content: 'summary' },
                {
                  name: 'twitter:creator',
                  content: t.site.siteMetadata.author
                },
                { name: 'twitter:title', content: u },
                { name: 'twitter:description', content: a },
                {
                  name: 'google-site-verification',
                  content: '2za6GvvisJHVED9GglWd8xO4jWCp4GPpAKYBDM4ttx8'
                }
              ]
                .concat(
                  o.length > 0
                    ? { name: 'keywords', content: o.join(', ') }
                    : []
                )
                .concat(r)
            })
          },
          data: a
        })
      }
      ;(d.defaultProps = {
        lang: 'en',
        meta: [],
        keywords: [],
        pathname: void 0,
        thumbnail: void 0,
        type: 'site'
      }),
        (d.propTypes = {
          description: u.a.string,
          pathname: u.a.string,
          lang: u.a.string,
          meta: u.a.array,
          keywords: u.a.arrayOf(u.a.string),
          thumbnail: u.a.string,
          type: u.a.string,
          title: u.a.string.isRequired
        }),
        (e.a = d)
      var p = '2229664651'
    },
    154: function(t) {
      t.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Bruno Luiz Blog',
              description:
                'Personal Blog by Bruno Luiz Silva | A collection of my random thoughts.',
              author: 'Bruno Luiz Silva',
              siteUrl: 'https://brunoluiz.net'
            }
          }
        }
      }
    }
  }
])
//# sourceMappingURL=component---src-pages-404-js-db3e7de84a282d21848f.js.map
