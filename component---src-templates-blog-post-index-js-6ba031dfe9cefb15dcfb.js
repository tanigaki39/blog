(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);a(230);var n=a(7),l=a.n(n),o=a(0),r=a.n(o),s=a(145),i=a(161),c=a.n(i),m=a(212),d=a.n(m),u=a(154),_=a.n(u),h=a(181),p=a(206),b=(a(216),a(182)),E=a.n(b),k=a(372),f=a(373),g=a(374),w=a(375),x=a(376),v=a(377),N=a(378),y=a(379),S=a(307),j=a.n(S),T=a(148),U=a(215);function L(e){var t=e.title,a=e.link,n=e.twitterUserName;return r.a.createElement("ul",{className:j.a.content},r.a.createElement(E.a,null,r.a.createElement("script",{type:"text/javascript",src:"//b.st-hatena.com/js/bookmark_button.js",charset:"utf-8",async:"async"}),r.a.createElement("script",{type:"text/javascript",src:"//widgets.getpocket.com/v1/j/btn.js?v=1",charset:"utf-8",async:"async"})),r.a.createElement("li",{className:j.a.share_button},r.a.createElement(k.a,{additionalProps:{"aria-label":"share_facebook"},url:a},r.a.createElement(f.a,{size:32,round:!0}))),r.a.createElement("li",{className:j.a.share_button},r.a.createElement(g.a,{additionalProps:{"aria-label":"share_googleplus"},url:a},r.a.createElement(w.a,{size:32,round:!0}))),r.a.createElement("li",{className:j.a.share_button},r.a.createElement(x.a,{additionalProps:{"aria-label":"share_linkedin"},url:a},r.a.createElement(v.a,{title:t,size:32,round:!0}))),r.a.createElement("li",{className:j.a.share_button},r.a.createElement(N.a,{additionalProps:{"aria-label":"share_twitter"},title:t,via:n,url:a},r.a.createElement(y.a,{size:32,round:!0}))),r.a.createElement("li",{className:j.a.share_button},r.a.createElement("a",{"aria-label":"share_pocket",className:j.a.pocket_icon_link,href:"https://getpocket.com/edit?url="+a+"&title="+t,onClick:"window.open(this.href, 'PCwindow', 'width=550, height=350, menubar=no, toolbar=no, scrollbars=yes'); return false;"},r.a.createElement(T.a,{color:"#fff",className:j.a.pocket_icon,icon:U.a}))),r.a.createElement("li",{className:j.a.share_button},r.a.createElement("a",{"aria-label":"share_hatena-bookmark",href:"http://b.hatena.ne.jp/entry/",className:"hatena-bookmark-button","data-hatena-bookmark-layout":"touch-counter",title:"このエントリーをはてなブックマークに追加",style:{boxShadow:"none"}},r.a.createElement("img",{src:"https://b.st-hatena.com/images/entry-button/button-only@2x.png",alt:"このエントリーをはてなブックマークに追加",width:"24",height:"24",style:{border:"none"}}))))}var P=a(196),C=a(214),M=a(367),D=a.n(M);a.d(t,"pageQuery",function(){return z});var I=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isShowSnsShare:!1},a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.stock=this.watchCurrentPosition.bind(this),window.addEventListener("scroll",this.stock,!0)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.stock,!0),this.stock=null},a.watchCurrentPosition=function(){this.setState({isShowSnsShare:this.scrollTop()>400})},a.scrollTop=function(){return Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)},a.render=function(){var e,t=this.props.data.markdownRemark,a=c()(this.props,"data.site.siteMetadata.title"),n=this.props.pageContext,l=n.previous,o=n.next,i=n.slug,m=""+_.a.blogUrl+i,u=d()(((e={})[""+D.a.sns_share]=!0,e[""+D.a.sns_share_show]=this.state.isShowSnsShare,e[""+D.a.sns_share_hide]=!this.state.isShowSnsShare,e));return r.a.createElement(p.a,{location:this.props.location},r.a.createElement("article",null,r.a.createElement(h.a,{postTitle:t.frontmatter.title}),r.a.createElement(C.a,{isRoot:!1,title:t.frontmatter.title+" | "+a,description:t.excerpt,postUrl:m,postDate:t.frontmatter.date}),r.a.createElement("div",{className:D.a.header},r.a.createElement("div",{className:D.a.header__inner},r.a.createElement("div",{className:D.a.header__inner__content},r.a.createElement("h4",{className:D.a.blog_title},r.a.createElement(s.Link,{className:D.a.blog_title__link,to:"/"},_.a.blogTitle,r.a.createElement("i",{className:D.a.blog_title__icon}))),r.a.createElement("a",{href:m,rel:"current",className:D.a.post_title},r.a.createElement("h1",null,t.frontmatter.title)),r.a.createElement(P.a,{post:t.frontmatter})))),r.a.createElement("div",{className:D.a.container},r.a.createElement("div",{className:D.a.post,dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("div",{className:D.a.toc,dangerouslySetInnerHTML:{__html:t.tableOfContents}}),r.a.createElement("div",{className:u},r.a.createElement(L,{title:t.frontmatter.title,link:m,twitterUserName:_.a.blogAuthorTwitterUserName})),r.a.createElement("ul",{className:D.a.paging},r.a.createElement("li",null,l&&r.a.createElement(s.Link,{className:D.a.link_to_previous,to:l.fields.slug,rel:"prev"},"← 古い記事",r.a.createElement("br",null),l.frontmatter.title)),r.a.createElement("li",null,o&&r.a.createElement(s.Link,{className:D.a.link_to_next,to:o.fields.slug,rel:"next"},"新しい記事 →",r.a.createElement("br",null),o.frontmatter.title))))))},t}(r.a.Component),z=(t.default=I,"3426890876")},307:function(e,t,a){e.exports={content:"index-module--content--1DYGE",share_button:"index-module--share_button---VgVo",pocket_icon_link:"index-module--pocket_icon_link--3W0dP",pocket_icon:"index-module--pocket_icon--uochy"}},367:function(e,t,a){e.exports={blog_title:"index-module--blog_title--GAeRB",blog_title__link:"index-module--blog_title__link--3MKH_",blog_title__icon:"index-module--blog_title__icon--2zkY2",post_title:"index-module--post_title--3KwDI",header:"index-module--header---9Mjo",header__inner:"index-module--header__inner--239tX",header__inner__content:"index-module--header__inner__content--18w2m",fadeInDown:"index-module--fade-in-down--3WKpk",container:"index-module--container--31IEc",post:"index-module--post--2gyes",toc:"index-module--toc--2594L",sns_share:"index-module--sns_share--1D8Ul",paging:"index-module--paging--2jSWU",link_to_previous:"index-module--link_to_previous--3sKxs",link_to_next:"index-module--link_to_next--2gYl2",sns_share_show:"index-module--sns_share_show--AyUIa",sns_share_hide:"index-module--sns_share_hide--nq2bf"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-js-6ba031dfe9cefb15dcfb.js.map