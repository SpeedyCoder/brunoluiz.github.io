(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,a){"use strict";a.r(e);a(32),a(155);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),A=a(147),c=a(172);var l=function(t){function e(e){var a;return(a=t.call(this,e)||this).iframe=null,a.onRef=function(t){a.iframe=t},a}r()(e,t);var a=e.prototype;return a.componentDidMount=function(){if(this.iframe){var t=this.props.threadFragment;Object(c.iframeResizer)({checkOrigin:["https://my.remarkbox.com"],inPageLinks:!0,initCallback:function(e){t&&e.iFrameResizer.moveToAnchor(t)}},this.iframe)}},a.render=function(){var t,e,a=this.props.className;return o.a.createElement("iframe",{className:a,frameBorder:0,ref:this.onRef,scrolling:"no",src:(t="1d1a74a1-469b-11e9-9d42-040140774501",e=this.props.uri,"https://my.remarkbox.com/embed?rb_owner_key="+t+"&thread_uri="+encodeURIComponent(e)),style:{width:"100%"},tabIndex:0,title:"Remarkbox"})},e}(i.Component),s=a(159),u=a(151),m=a(153),p=a(148);a.d(e,"pageQuery",function(){return h});var d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return o.a.createElement(u.a,{location:this.props.location,title:e},o.a.createElement(m.a,{title:t.frontmatter.title,description:t.excerpt,pathname:this.props.location.pathname,thumbnail:t.frontmatter.cover.childImageSharp.fixed.src,type:"article"}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(p.b)(-.2),{display:"block",marginBottom:Object(p.a)(1),marginTop:Object(p.a)(-1)})},t.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),o.a.createElement(l,{uri:this.props.location.href}),o.a.createElement(s.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginLeft:0}},o.a.createElement("li",null,n&&o.a.createElement(A.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(A.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},e}(o.a.Component),h=(e.default=d,"995975735")},147:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return d}),a.d(e,"StaticQueryContext",function(){return m}),a.d(e,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),A=a(146),c=a.n(A);a.d(e,"Link",function(){return c.a}),a.d(e,"withPrefix",function(){return A.withPrefix}),a.d(e,"navigate",function(){return A.navigate}),a.d(e,"push",function(){return A.push}),a.d(e,"replace",function(){return A.replace}),a.d(e,"navigateTo",function(){return A.navigateTo});var l=a(149),s=a.n(l);a.d(e,"PageRenderer",function(){return s.a});var u=a(33);a.d(e,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return u});var n=a(162),r=a.n(n),i=a(163),o=a.n(i),A=a(164),c=a.n(A);c.a.plugins=[new o.a],c.a.headerWeight=300,c.a.overrideThemeStyles=function(t,e){t.rhythm;return{}};var l=new r.a(c.a);var s=l.rhythm,u=l.scale},149:function(t,e,a){var n;t.exports=(n=a(150))&&n.default||n},150:function(t,e,a){"use strict";a.r(e);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),A=a(52),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(A.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},151:function(t,e,a){"use strict";a(32);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),A=a(147),c=a(148),l=(a(152),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e,a=this.props,n=a.location,r=a.title,i=a.children;return"/"===n.pathname?(t=o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(A.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),e=o.a.createElement("footer",null,o.a.createElement("a",{href:"mailto:contact@brunoluiz.net"},"e-mail")," • ",o.a.createElement("a",{href:"https://twitter.com/brunoluiz"},"twitter")," • ",o.a.createElement("a",{href:"https://github.com/brunoluiz"},"github")," • ",o.a.createElement("a",{href:"/rss.xml"},"rss"))):t=o.a.createElement("h3",{style:{marginTop:0}},o.a.createElement(A.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},o.a.createElement("header",null,t),o.a.createElement("main",null,i),e)},e}(o.a.Component));e.a=l},152:function(t,e,a){},153:function(t,e,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),A=a.n(o),c=a(165),l=a.n(c),s=a(147);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,A=t.title,c=t.pathname,u=t.thumbnail,p=t.type;return i.a.createElement(s.StaticQuery,{query:m,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:A,titleTemplate:t.site.siteMetadata.title+" | %s",meta:[{name:"description",content:n},{property:"og:url",content:""+t.site.siteMetadata.siteUrl+c},{property:"og:title",content:A},{property:"og:image",content:""+t.site.siteMetadata.siteUrl+u},{property:"og:description",content:n},{property:"og:type",content:p},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:n},{name:"google-site-verification",content:"2za6GvvisJHVED9GglWd8xO4jWCp4GPpAKYBDM4ttx8"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("script",{src:"https://my.remarkbox.com/static/js/iframe-resizer/iframeResizer.min.js"}))},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[],pathname:void 0,thumbnail:void 0,type:"site"},u.propTypes={description:A.a.string,pathname:A.a.string,lang:A.a.string,meta:A.a.array,keywords:A.a.arrayOf(A.a.string),thumbnail:A.a.string,type:A.a.string,title:A.a.string.isRequired},e.a=u;var m="2229664651"},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Bruno Luiz Blog",description:"Personal Blog by Bruno Luiz Silva | A collection of random software engineering thoughts.",author:"Bruno Luiz Silva",siteUrl:"https://brunoluiz.net"}}}}},159:function(t,e,a){"use strict";a(155);var n=a(160),r=a(0),i=a.n(r),o=a(147),A=a(161),c=a.n(A),l=a(148);var s="2955648028";e.a=function(){return i.a.createElement(o.StaticQuery,{query:s,render:function(t){var e=t.site.siteMetadata,a=e.author,n=e.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(1)}},i.a.createElement(c.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Personal Blog by ",i.a.createElement("strong",null,a)," ",i.a.createElement("a",{href:"mailto:"+n.email},"(contact me)"),i.a.createElement("br",null),"A collection of random software engineering thoughts"))},data:n})}},160:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB5TsqPWYhCIZwf//EAB0QAAICAQUAAAAAAAAAAAAAAAECAAMQERITITP/2gAIAQEAAQUCdm0TnqtIET13q1hsix+8f//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAIBAwUAAAAAAAAAAAAAAAERAgAQIRIiMTJB/9oACAEBAAY/AjCHaoai2UQ7Tw9tAEDBbs/a4t//xAAcEAADAAIDAQAAAAAAAAAAAAAAAREhMUFhcYH/2gAIAQEAAT8hXoVPhq2VkirZDqkVGJDB0pyVdNfInNpehn//2gAMAwEAAgADAAAAEDPIPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQWFx8P/aAAgBAQABPxAycATEL2/3Ydw8L6WtPHY/cWD0AGqyenEg2hf2Co4wl6gtNdyBAkK2K8R05nyf/9k=",width:50,height:50,src:"/static/1bc3bc127b6330fdc88c2211310fe75a/d2d31/profile-pic.jpg",srcSet:"/static/1bc3bc127b6330fdc88c2211310fe75a/d2d31/profile-pic.jpg 1x,\n/static/1bc3bc127b6330fdc88c2211310fe75a/0b804/profile-pic.jpg 1.5x,\n/static/1bc3bc127b6330fdc88c2211310fe75a/753c3/profile-pic.jpg 2x,\n/static/1bc3bc127b6330fdc88c2211310fe75a/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Bruno Luiz Silva",social:{email:"contact@brunoluiz.net",twitter:"brunoluiz"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-844980f6d7f12916f311.js.map