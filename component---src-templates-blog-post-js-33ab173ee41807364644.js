;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    142: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'pageQuery', function() {
          return f
        })
      a(32), a(155)
      var r = a(7),
        i = a.n(r),
        n = a(0),
        o = a.n(n),
        s = a(147),
        l = a(159),
        c = a(151),
        d = a(153),
        u = a(148),
        A = (function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            i()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.markdownRemark,
                t = this.props.data.site.siteMetadata.title,
                a = this.props.pageContext,
                r = a.previous,
                i = a.next
              return o.a.createElement(
                c.a,
                { location: this.props.location, title: t },
                o.a.createElement(d.a, {
                  title: e.frontmatter.title,
                  description: e.excerpt,
                  pathname: this.props.location.pathname,
                  thumbnail: e.frontmatter.cover.childImageSharp.fixed.src,
                  type: 'article'
                }),
                o.a.createElement('h1', null, e.frontmatter.title),
                o.a.createElement(
                  'p',
                  {
                    style: Object.assign({}, Object(u.b)(-0.2), {
                      display: 'block',
                      marginBottom: Object(u.a)(1),
                      marginTop: Object(u.a)(-1)
                    })
                  },
                  e.frontmatter.date
                ),
                o.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: e.html }
                }),
                o.a.createElement('hr', {
                  style: { marginBottom: Object(u.a)(1) }
                }),
                o.a.createElement(l.a, null),
                o.a.createElement(
                  'ul',
                  {
                    style: {
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      listStyle: 'none',
                      padding: 0,
                      marginLeft: 0
                    }
                  },
                  o.a.createElement(
                    'li',
                    null,
                    r &&
                      o.a.createElement(
                        s.Link,
                        { to: r.fields.slug, rel: 'prev' },
                        '← ',
                        r.frontmatter.title
                      )
                  ),
                  o.a.createElement(
                    'li',
                    null,
                    i &&
                      o.a.createElement(
                        s.Link,
                        { to: i.fields.slug, rel: 'next' },
                        i.frontmatter.title,
                        ' →'
                      )
                  )
                )
              )
            }),
            t
          )
        })(o.a.Component)
      t.default = A
      var f = '995975735'
    },
    147: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'graphql', function() {
          return p
        }),
        a.d(t, 'StaticQueryContext', function() {
          return A
        }),
        a.d(t, 'StaticQuery', function() {
          return f
        })
      var r = a(0),
        i = a.n(r),
        n = a(4),
        o = a.n(n),
        s = a(146),
        l = a.n(s)
      a.d(t, 'Link', function() {
        return l.a
      }),
        a.d(t, 'withPrefix', function() {
          return s.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return s.navigate
        }),
        a.d(t, 'push', function() {
          return s.push
        }),
        a.d(t, 'replace', function() {
          return s.replace
        }),
        a.d(t, 'navigateTo', function() {
          return s.navigateTo
        })
      var c = a(149),
        d = a.n(c)
      a.d(t, 'PageRenderer', function() {
        return d.a
      })
      var u = a(33)
      a.d(t, 'parsePath', function() {
        return u.a
      })
      var A = i.a.createContext({}),
        f = function(e) {
          return i.a.createElement(A.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : i.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function p() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      f.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func
      }
    },
    148: function(e, t, a) {
      'use strict'
      a.d(t, 'a', function() {
        return d
      }),
        a.d(t, 'b', function() {
          return u
        })
      var r = a(162),
        i = a.n(r),
        n = a(163),
        o = a.n(n),
        s = a(164),
        l = a.n(s)
      ;(l.a.plugins = [new o.a()]),
        (l.a.overrideThemeStyles = function(e, t) {
          e.rhythm
          return {}
        })
      var c = new i.a(l.a)
      var d = c.rhythm,
        u = c.scale
    },
    149: function(e, t, a) {
      var r
      e.exports = ((r = a(150)) && r.default) || r
    },
    150: function(e, t, a) {
      'use strict'
      a.r(t)
      a(32)
      var r = a(0),
        i = a.n(r),
        n = a(4),
        o = a.n(n),
        s = a(52),
        l = a(2),
        c = function(e) {
          var t = e.location,
            a = l.default.getResourcesForPathnameSync(t.pathname)
          return i.a.createElement(
            s.a,
            Object.assign({ location: t, pageResources: a }, a.json)
          )
        }
      ;(c.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired
      }),
        (t.default = c)
    },
    151: function(e, t, a) {
      'use strict'
      a(32)
      var r = a(7),
        i = a.n(r),
        n = a(0),
        o = a.n(n),
        s = a(147),
        l = a(148),
        c = (a(152),
        (function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            i()(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                a = t.location,
                r = t.title,
                i = t.children
              return (
                (e =
                  '/' === a.pathname
                    ? o.a.createElement(
                        'h1',
                        {
                          style: Object.assign({}, Object(l.b)(1.5), {
                            marginBottom: Object(l.a)(1.5),
                            marginTop: 0
                          })
                        },
                        o.a.createElement(
                          s.Link,
                          {
                            style: {
                              boxShadow: 'none',
                              textDecoration: 'none',
                              color: 'inherit'
                            },
                            to: '/'
                          },
                          r
                        )
                      )
                    : o.a.createElement(
                        'h3',
                        { style: { marginTop: 0 } },
                        o.a.createElement(
                          s.Link,
                          {
                            style: {
                              boxShadow: 'none',
                              textDecoration: 'none',
                              color: 'inherit'
                            },
                            to: '/'
                          },
                          r
                        )
                      )),
                o.a.createElement(
                  'div',
                  {
                    style: {
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: Object(l.a)(24),
                      padding: Object(l.a)(1.5) + ' ' + Object(l.a)(0.75)
                    }
                  },
                  o.a.createElement('header', null, e),
                  o.a.createElement('main', null, i),
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
            t
          )
        })(o.a.Component))
      t.a = c
    },
    152: function(e, t, a) {},
    153: function(e, t, a) {
      'use strict'
      var r = a(154),
        i = a(0),
        n = a.n(i),
        o = a(4),
        s = a.n(o),
        l = a(165),
        c = a.n(l),
        d = a(147)
      function u(e) {
        var t = e.description,
          a = e.lang,
          i = e.meta,
          o = e.keywords,
          s = e.title,
          l = e.pathname,
          u = e.thumbnail,
          f = e.type
        return n.a.createElement(d.StaticQuery, {
          query: A,
          render: function(e) {
            var r = t || e.site.siteMetadata.description
            return n.a.createElement(c.a, {
              htmlAttributes: { lang: a },
              title: s,
              titleTemplate: e.site.siteMetadata.title + ' | %s',
              meta: [
                { name: 'description', content: r },
                {
                  property: 'og:url',
                  content: '' + e.site.siteMetadata.siteUrl + l
                },
                { property: 'og:title', content: s },
                {
                  property: 'og:image',
                  content: '' + e.site.siteMetadata.siteUrl + u
                },
                { property: 'og:description', content: r },
                { property: 'og:type', content: f },
                { name: 'twitter:card', content: 'summary' },
                {
                  name: 'twitter:creator',
                  content: e.site.siteMetadata.author
                },
                { name: 'twitter:title', content: s },
                { name: 'twitter:description', content: r }
              ]
                .concat(
                  o.length > 0
                    ? { name: 'keywords', content: o.join(', ') }
                    : []
                )
                .concat(i)
            })
          },
          data: r
        })
      }
      ;(u.defaultProps = {
        lang: 'en',
        meta: [],
        keywords: [],
        pathname: void 0,
        thumbnail: void 0,
        type: 'site'
      }),
        (u.propTypes = {
          description: s.a.string,
          pathname: s.a.string,
          lang: s.a.string,
          meta: s.a.array,
          keywords: s.a.arrayOf(s.a.string),
          thumbnail: s.a.string,
          type: s.a.string,
          title: s.a.string.isRequired
        }),
        (t.a = u)
      var A = '2229664651'
    },
    154: function(e) {
      e.exports = {
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
    },
    155: function(e, t, a) {
      'use strict'
      a(156)('fixed', function(e) {
        return function() {
          return e(this, 'tt', '', '')
        }
      })
    },
    156: function(e, t, a) {
      var r = a(11),
        i = a(24),
        n = a(16),
        o = /"/g,
        s = function(e, t, a, r) {
          var i = String(n(e)),
            s = '<' + t
          return (
            '' !== a &&
              (s += ' ' + a + '="' + String(r).replace(o, '&quot;') + '"'),
            s + '>' + i + '</' + t + '>'
          )
        }
      e.exports = function(e, t) {
        var a = {}
        ;(a[e] = t(s)),
          r(
            r.P +
              r.F *
                i(function() {
                  var t = ''[e]('"')
                  return t !== t.toLowerCase() || t.split('"').length > 3
                }),
            'String',
            a
          )
      }
    },
    159: function(e, t, a) {
      'use strict'
      a(155)
      var r = a(160),
        i = a(0),
        n = a.n(i),
        o = a(147),
        s = a(161),
        l = a.n(s),
        c = a(148)
      var d = '4007731267'
      t.a = function() {
        return n.a.createElement(o.StaticQuery, {
          query: d,
          render: function(e) {
            var t = e.site.siteMetadata.author
            return n.a.createElement(
              'div',
              { style: { display: 'flex', marginBottom: Object(c.a)(2.5) } },
              n.a.createElement(l.a, {
                fixed: e.avatar.childImageSharp.fixed,
                alt: t,
                style: {
                  marginRight: Object(c.a)(0.5),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: '100%'
                },
                imgStyle: { borderRadius: '50%' }
              }),
              n.a.createElement(
                'p',
                null,
                'Personal Blog by ',
                n.a.createElement('strong', null, t),
                n.a.createElement('br', null),
                'A collection of my random thoughts'
              )
            )
          },
          data: r
        })
      }
    },
    160: function(e) {
      e.exports = {
        data: {
          avatar: {
            childImageSharp: {
              fixed: {
                base64:
                  'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB5TsqPWYhCIZwf//EAB0QAAICAQUAAAAAAAAAAAAAAAECAAMQERITITP/2gAIAQEAAQUCdm0TnqtIET13q1hsix+8f//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAIBAwUAAAAAAAAAAAAAAAERAgAQIRIiMTJB/9oACAEBAAY/AjCHaoai2UQ7Tw9tAEDBbs/a4t//xAAcEAADAAIDAQAAAAAAAAAAAAAAAREhMUFhcYH/2gAIAQEAAT8hXoVPhq2VkirZDqkVGJDB0pyVdNfInNpehn//2gAMAwEAAgADAAAAEDPIPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQWFx8P/aAAgBAQABPxAycATEL2/3Ydw8L6WtPHY/cWD0AGqyenEg2hf2Co4wl6gtNdyBAkK2K8R05nyf/9k=',
                width: 50,
                height: 50,
                src:
                  '/static/1bc3bc127b6330fdc88c2211310fe75a/d2d31/profile-pic.jpg',
                srcSet:
                  '/static/1bc3bc127b6330fdc88c2211310fe75a/d2d31/profile-pic.jpg 1x,\n/static/1bc3bc127b6330fdc88c2211310fe75a/0b804/profile-pic.jpg 1.5x,\n/static/1bc3bc127b6330fdc88c2211310fe75a/753c3/profile-pic.jpg 2x,\n/static/1bc3bc127b6330fdc88c2211310fe75a/31ca8/profile-pic.jpg 3x'
              }
            }
          },
          site: {
            siteMetadata: {
              author: 'Bruno Luiz Silva',
              social: { twitter: 'brunoluiz' }
            }
          }
        }
      }
    },
    161: function(e, t, a) {
      'use strict'
      var r = a(8)
      ;(t.__esModule = !0), (t.default = void 0)
      var i,
        n = r(a(7)),
        o = r(a(51)),
        s = r(a(157)),
        l = r(a(158)),
        c = r(a(0)),
        d = r(a(4)),
        u = function(e) {
          var t = (0, l.default)({}, e)
          return (
            t.resolutions && ((t.fixed = t.resolutions), delete t.resolutions),
            t.sizes && ((t.fluid = t.sizes), delete t.sizes),
            t
          )
        },
        A = {},
        f = function(e) {
          var t = u(e),
            a = t.fluid ? t.fluid.src : t.fixed.src
          return A[a] || !1
        },
        p = []
      var h = function(e, t) {
          ;(void 0 === i &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            (i = new window.IntersectionObserver(
              function(e) {
                e.forEach(function(e) {
                  p.forEach(function(t) {
                    t[0] === e.target &&
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                      (i.unobserve(t[0]), t[1]())
                  })
                })
              },
              { rootMargin: '200px' }
            )),
          i).observe(e),
            p.push([e, t])
        },
        m = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            r = e.srcSetWebp
              ? "<source type='image/webp' srcSet=\"" +
                e.srcSetWebp +
                '" ' +
                a +
                '/>'
              : '',
            i = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + a + '/>' : '',
            n = e.title ? 'title="' + e.title + '" ' : '',
            o = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : '',
            l = e.height ? 'height="' + e.height + '" ' : '',
            c = e.opacity ? e.opacity : '1'
          return (
            '<picture>' +
            r +
            i +
            '<img ' +
            s +
            l +
            t +
            o +
            n +
            'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:' +
            (e.transitionDelay ? e.transitionDelay : '0.5s') +
            ';opacity:' +
            c +
            ';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          )
        },
        g = c.default.forwardRef(function(e, t) {
          var a = e.style,
            r = e.onLoad,
            i = e.onError,
            n = (0, s.default)(e, ['style', 'onLoad', 'onError'])
          return c.default.createElement(
            'img',
            (0, l.default)({}, n, {
              onLoad: r,
              onError: i,
              ref: t,
              style: (0, l.default)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                },
                a
              )
            })
          )
        })
      g.propTypes = {
        style: d.default.object,
        onError: d.default.func,
        onLoad: d.default.func
      }
      var y = (function(e) {
        function t(t) {
          var a
          a = e.call(this, t) || this
          var r = !0,
            i = !1,
            n = t.fadeIn,
            s = f(t)
          !s &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            ((r = !1), (i = !0)),
            'undefined' == typeof window && (r = !1),
            t.critical && ((r = !0), (i = !1))
          var l = !(a.props.critical && !a.props.fadeIn)
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              IOSupported: i,
              fadeIn: n,
              hasNoScript: l,
              seenBefore: s
            }),
            (a.imageRef = c.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind(
              (0, o.default)((0, o.default)(a))
            )),
            (a.handleRef = a.handleRef.bind((0, o.default)((0, o.default)(a)))),
            a
          )
        }
        ;(0, n.default)(t, e)
        var a = t.prototype
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                'function' == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: f(this.props) }),
              this.props.critical)
            ) {
              var e = this.imageRef.current
              e && e.complete && this.handleImageLoaded()
            }
          }),
          (a.handleRef = function(e) {
            var t = this
            this.state.IOSupported &&
              e &&
              h(e, function() {
                var e = f(t.props)
                t.state.isVisible ||
                  'function' != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0, imgLoaded: e })
              })
          }),
          (a.handleImageLoaded = function() {
            var e, t, a
            ;(e = this.props),
              (t = u(e)),
              (a = t.fluid ? t.fluid.src : t.fixed.src),
              (A[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.state.seenBefore && this.setState({ fadeIn: !1 }),
              this.props.onLoad && this.props.onLoad()
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              o = e.imgStyle,
              s = void 0 === o ? {} : o,
              d = e.placeholderStyle,
              A = void 0 === d ? {} : d,
              f = e.placeholderClassName,
              p = e.fluid,
              h = e.fixed,
              y = e.backgroundColor,
              b = e.Tag,
              E = e.itemProp,
              v = 'boolean' == typeof y ? 'lightgray' : y,
              w = (0, l.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: 'opacity 0.5s',
                  transitionDelay: this.state.imgLoaded ? '0.5s' : '0.25s'
                },
                s,
                A
              ),
              S = (0, l.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition: !0 === this.state.fadeIn ? 'opacity 0.5s' : 'none'
                },
                s
              ),
              j = {
                title: t,
                alt: this.state.isVisible ? '' : a,
                style: w,
                className: f
              }
            if (p) {
              var R = p
              return c.default.createElement(
                b,
                {
                  className: (r || '') + ' gatsby-image-wrapper',
                  style: (0, l.default)(
                    { position: 'relative', overflow: 'hidden' },
                    n
                  ),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(R.srcSet)
                },
                c.default.createElement(b, {
                  style: {
                    width: '100%',
                    paddingBottom: 100 / R.aspectRatio + '%'
                  }
                }),
                R.base64 &&
                  c.default.createElement(
                    g,
                    (0, l.default)({ src: R.base64 }, j)
                  ),
                R.tracedSVG &&
                  c.default.createElement(
                    g,
                    (0, l.default)({ src: R.tracedSVG }, j)
                  ),
                v &&
                  c.default.createElement(b, {
                    title: t,
                    style: {
                      backgroundColor: v,
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      opacity: this.state.imgLoaded ? 0 : 1,
                      transitionDelay: '0.35s',
                      right: 0,
                      left: 0
                    }
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    'picture',
                    null,
                    R.srcSetWebp &&
                      c.default.createElement('source', {
                        type: 'image/webp',
                        srcSet: R.srcSetWebp,
                        sizes: R.sizes
                      }),
                    c.default.createElement('source', {
                      srcSet: R.srcSet,
                      sizes: R.sizes
                    }),
                    c.default.createElement(g, {
                      alt: a,
                      title: t,
                      src: R.src,
                      style: S,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: E
                    })
                  ),
                this.state.hasNoScript &&
                  c.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: m((0, l.default)({ alt: a, title: t }, R))
                    }
                  })
              )
            }
            if (h) {
              var B = h,
                I = (0, l.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: B.width,
                    height: B.height
                  },
                  n
                )
              return (
                'inherit' === n.display && delete I.display,
                c.default.createElement(
                  b,
                  {
                    className: (r || '') + ' gatsby-image-wrapper',
                    style: I,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(B.srcSet)
                  },
                  B.base64 &&
                    c.default.createElement(
                      g,
                      (0, l.default)({ src: B.base64 }, j)
                    ),
                  B.tracedSVG &&
                    c.default.createElement(
                      g,
                      (0, l.default)({ src: B.tracedSVG }, j)
                    ),
                  v &&
                    c.default.createElement(b, {
                      title: t,
                      style: {
                        backgroundColor: v,
                        width: B.width,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        transitionDelay: '0.25s',
                        height: B.height
                      }
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      'picture',
                      null,
                      B.srcSetWebp &&
                        c.default.createElement('source', {
                          type: 'image/webp',
                          srcSet: B.srcSetWebp,
                          sizes: B.sizes
                        }),
                      c.default.createElement('source', {
                        srcSet: B.srcSet,
                        sizes: B.sizes
                      }),
                      c.default.createElement(g, {
                        alt: a,
                        title: t,
                        width: B.width,
                        height: B.height,
                        src: B.src,
                        style: S,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: E
                      })
                    ),
                  this.state.hasNoScript &&
                    c.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: m(
                          (0, l.default)(
                            {
                              alt: a,
                              title: t,
                              width: B.width,
                              height: B.height
                            },
                            B
                          )
                        )
                      }
                    })
                )
              )
            }
            return null
          }),
          t
        )
      })(c.default.Component)
      y.defaultProps = { critical: !1, fadeIn: !0, alt: '', Tag: 'div' }
      var b = d.default.shape({
          width: d.default.number.isRequired,
          height: d.default.number.isRequired,
          src: d.default.string.isRequired,
          srcSet: d.default.string.isRequired,
          base64: d.default.string,
          tracedSVG: d.default.string,
          srcWebp: d.default.string,
          srcSetWebp: d.default.string
        }),
        E = d.default.shape({
          aspectRatio: d.default.number.isRequired,
          src: d.default.string.isRequired,
          srcSet: d.default.string.isRequired,
          sizes: d.default.string.isRequired,
          base64: d.default.string,
          tracedSVG: d.default.string,
          srcWebp: d.default.string,
          srcSetWebp: d.default.string
        })
      y.propTypes = {
        resolutions: b,
        sizes: E,
        fixed: b,
        fluid: E,
        fadeIn: d.default.bool,
        title: d.default.string,
        alt: d.default.string,
        className: d.default.oneOfType([d.default.string, d.default.object]),
        critical: d.default.bool,
        style: d.default.object,
        imgStyle: d.default.object,
        placeholderStyle: d.default.object,
        placeholderClassName: d.default.string,
        backgroundColor: d.default.oneOfType([
          d.default.string,
          d.default.bool
        ]),
        onLoad: d.default.func,
        onError: d.default.func,
        onStartLoad: d.default.func,
        Tag: d.default.string,
        itemProp: d.default.string
      }
      var v = y
      t.default = v
    }
  }
])
//# sourceMappingURL=component---src-templates-blog-post-js-33ab173ee41807364644.js.map
