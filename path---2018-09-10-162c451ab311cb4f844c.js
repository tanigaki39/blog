webpackJsonp([29541499254378],{426:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Takumon Blog",author:"Takuto Inoue"}},markdownRemark:{id:"/Users/inouetakumon/git/blog/src/pages/2018/09/10/index.md absPath of file >>> MarkdownRemark",html:'<h2>ブログ開設手順</h2>\n<p>Gatsbyってなにって状態から30分程度でブログを開設できました。\n下記にそのときの手順をメモしておきます。</p>\n<h3>0. 前提条件</h3>\n<p>Git、Node、npmは事前にインストールしておいてください。</p>\n<h3>1. ブログのスターターキットを起動</h3>\n<p>Gatsbyはブログをすぐ始められるようにスターターキット(スキャフォールド)を用意しています。\nまずはそれを使ってローカルでブログを起動してみます。</p>\n<h4>1-1. Gatsbyインストール</h4>\n<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g gatsby</code></pre></div>\n<h4>1-2. プロジェクト生成</h4>\n<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog</code></pre></div>\n<h4>1-3. ローカルで起動</h4>\n<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">cd</span> blog\n<span class="token function">npm</span> run dev</code></pre></div>\n<p><a href="http://localhost:8000/">http://localhost:8000</a>にアクセスするとブログが表示されます。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/blog_image_1_main-7e3132994c4eb6ab77004896a109d06d-4a9bb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 101.7857142857143%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADAklEQVQ4y5WUy07bQBSG81iVuqoULquCxLP0BUgKYlfYgJBAiG4qKnWDBM0CtVIXEIcIVJTSQBIUEt9jO4mN787fM5MLOEIVWPr1j489n2fOOZ7Mwts3H94vvvuVX109yudyhXz+Y2Fzc7OwsrJSWFpaKmSz2cLc3BzX7Ows1/ieaX5+nr1zPJOd+bGwsJjPfDs4+FouC/h9dYV6rYZWqwXTtNDpdNBoNFCv17nX6NnYb25uUK1Wudi4XC5DEAQQ6mfGdpx9DK/A6lqxYRgxwWJZlmPf92PTNHnMdV0+fnh4iJMkien9pwoZ4OLi8ihjWdbnETA6OTnB+vo6dnd3kcvlsL29jZ2dHSwvL2NrawsbGxvc6QN8AoExGAzIBwyKUqn0PQU8PDzE2toa9vb2UKlUYNv2ZFIURfylOOZzeeyJHoHdbncCvKX8CKUSGPj6+hovuf4LlJp3uKeiuK4HXdN4QdqiBFnrDKXqUMkVkk5FC8NwDB0CBSENvG/U0KxVYVCVNU2HQZOMrg21F0DpeuQ+9L7PPYwYY2rLQvERSImN8JrruRwWz9IrVPsBapqLRsfHreah7ycvzePzwKak47J6jxvRxN+2Ac2y4bkuHMfh7o5Evcg7gMVpZxNg8WwK2O9S7mQRhqbA1BWossT/HFEUIbbb3CVJ4n3IYMO2egJMr3AQ+WEM2wvhkJgHYcT7jon14XjM8vbcloViMb3Cumrj/M7CH9XDleyh94Icpqs8tWXWJmK7BU1VoJMs06S+03kL6XqH4io/NFRydoD0er0UsHx+mgY6/T4sg/pPU6EqCjoMwmFDqCTJfKwoKi8OS8NT4HlpCqjYMRpmhNtOiIfoNS05zuEpPxwmx5ekW0mtpSaS6SSOFyRRGCZBECZ0jJEHQ9HY9wMeYyIYKYlGVT7OUB6+jL9k93vUKjLPH9syaxOdtipTq8iyQi7ze/oIwiAgD1IrFYSzk4yua5/oJzfpYYPU9Jl8v+l5PncmFg9GceaUuya1D9cofkcxtVK52v8HdAO2pf8ZX28AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ブログ初期イメージ"\n        title=""\n        src="/static/blog_image_1_main-7e3132994c4eb6ab77004896a109d06d-fb8a0.png"\n        srcset="/static/blog_image_1_main-7e3132994c4eb6ab77004896a109d06d-1a291.png 148w,\n/static/blog_image_1_main-7e3132994c4eb6ab77004896a109d06d-2bc4a.png 295w,\n/static/blog_image_1_main-7e3132994c4eb6ab77004896a109d06d-fb8a0.png 590w,\n/static/blog_image_1_main-7e3132994c4eb6ab77004896a109d06d-4a9bb.png 784w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>2. ブログの記事などを自分仕様にカスタマイズ</h3>\n<p>現状だと、ブロガーがKyle Mathews氏(Gatsbyの作者)になっていたり、仮の記事が3つある状態なので、\n自分仕様にカスタマイズします。\n<small>ここでは僕の例を示します。</small></p>\n<h4>2-1. ブラウザタブのタイトル修正</h4>\n<p><code class="language-text">gatsby-config.js</code>の<code class="language-text">siteMetadata</code>を下記のように修正します。\nなお<code class="language-text">siteUrl</code>はGitHub Pagesでの公開を想定したものです。</p>\n<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  siteMetadata<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    title<span class="token punctuation">:</span> <span class="token string">\'Takumon Blog\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    author<span class="token punctuation">:</span> <span class="token string">\'Takuto Inoue\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    description<span class="token punctuation">:</span> <span class="token string">\'日々の作業をつづっていきます。\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    siteUrl<span class="token punctuation">:</span> <span class="token string">\'https://takumon.github.io/blog/\'</span><span class="token punctuation">,</span>\n</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  ・・・\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>\n<h4>2-2. 画面タイトル修正</h4>\n<p><code class="language-text">src/layouts/index.js</code>を修正します。\n<code class="language-text">Gatsby Starter Blog</code>となっている部分が2カ所あるので、自分のブログ名に修正します。\n僕は<code class="language-text">Takumon Blog</code>にしました。</p>\n<h4>2-3. プロフィール修正</h4>\n<p><code class="language-text">src/components/Bio.js</code>のアバター(imgタグ)と自己紹介文(pタグ)を修正します。</p>\n<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html">&lt;img\n<span class="gatsby-highlight-code-line">  src="https://s.gravatar.com/avatar/37d27f624f8c9c8db6fe6b6581b256f1?s=80"\n</span><span class="gatsby-highlight-code-line">  alt={`Takuto Inoue`}\n</span><span class="gatsby-highlight-code-line">  style={{\n</span><span class="gatsby-highlight-code-line">    marginRight: rhythm(1 / 2),\n</span><span class="gatsby-highlight-code-line">    marginBottom: 0,\n</span><span class="gatsby-highlight-code-line">    width: rhythm(2),\n</span><span class="gatsby-highlight-code-line">    height: rhythm(2),\n</span><span class="gatsby-highlight-code-line">    borderRadius: rhythm(1),\n</span>  }}\n/>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">  Written by <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>Takuto Inoue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span> who lives and works in Tokyo building useful things.\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code></pre></div>\n<h4>2-4. 余計な記事を削除</h4>\n<p>記事は<code class="language-text">src/page</code>配下にフォルダ分けされて存在します。\n1つ目以外の記事は不要なのでフォルダごと削除します。\nあと1つ目の記事て使っている画像も削除します。</p>\n<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">src/\n├── pages\n│   ├── hello-world\n│   │   ├── index.md\n<span class="gatsby-highlight-code-line">│   │   └── salty_egg.jpg ・・・削除対象\n</span><span class="gatsby-highlight-code-line">│   ├── hi-folks          ・・・削除対象\n</span><span class="gatsby-highlight-code-line">│   │   └── index.md\n</span><span class="gatsby-highlight-code-line">│   └── my-second-post    ・・・削除対象\n</span><span class="gatsby-highlight-code-line">│       └── index.md\n</span></code></pre></div>\n<h4>2-5. 記事を編集</h4>\n<p>1つめの記事<code class="language-text">src/pages/hello-world/index.md</code>を編集します。\nマークダウンファイル上部にメタ情報としてタイトルと作成日時を、その下に本文を記載しましょう。</p>\n<div class="gatsby-highlight" data-language="markup"><pre class="language-markup"><code class="language-markup">---\n<span class="gatsby-highlight-code-line">title: Hello World\n</span><span class="gatsby-highlight-code-line">date: "2018-09-10T12:00:00.000Z"\n</span>---\n\n<span class="gatsby-highlight-code-line">Gatsbyでブログ始めました！\n</span></code></pre></div>\n<h4>2-6. ローカルで起動</h4>\n<p>この状態で<code class="language-text">npm run dev</code>して<a href="http://localhost:8000">http://localhost:8000</a>を見てみると下記のようになっています。</p>\n<p>記事一覧\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/blog_image_2_main-7da4ae8b009b5d5c1bd9f97e99c153a7-1d2e1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100.86100861008612%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACGklEQVQ4y92Uz2saQRTH9w+yioSEEi+Fpuf+F4UmXhKop6wElRSSHsSCRysFW3LoRfDnxWvxYrri7noQgjEUrK7bXdfsGve9vv0Ru0ZsNfTUL3zZ2Zl5n3nzZneYl0+3t/aePYm92n99HHkTYSORCBuLxdhwOMyGdkOsz+djA4EA6/f7bVttr4PBoOXj3VAo/nzvxRaTODk5+vzpI1aqVazX69hoXGKn00GB57FWq2GxWMRKpYJVGreepVIJy6Wy8yyXMZ/PY/ZDFr9cXODp6dsjRhDFfSSZpqlrmjZVVfXOEnUt2DCMpT6PdYvBcdwBI4piGB3Nut0uJOIJOH93DplMBlKpFKTTacjlchCNRiGZTNrvuq4DzQdKAixZsS4wzAiC4AABZjQC8q2K0lBCSZKw3+/bHo1G+FNRcDgYYqvVwslkgpSxtSsERx4gz88z/NH4Cq3sexxKMvauezgggEKg8Vglj23ruoGyLNsLTu3K4GKG4n2G1GmqCsy+31BjRoG3uI6Wt+yp4RQQNBrWDBPvTGdxa/5f/ADIt+bAgaLDtysJL7sjHIyn9xlsBhSF3zWkWsFN75qKP7APwiq8F7rWlsV2ew4ET5R7gpsDec+huJ/AQvAq0OoMPYfiBXrBf4IuAdsrtryu/gPgY/QQeOACDfcn38hujDG/vgh4iP9IzWbzkKFbd4fjmmdEj5MTjzGB4uSzQqGw8wtf9qFNOS60nQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ブログ修正後イメージ_記事一覧"\n        title=""\n        src="/static/blog_image_2_main-7da4ae8b009b5d5c1bd9f97e99c153a7-fb8a0.png"\n        srcset="/static/blog_image_2_main-7da4ae8b009b5d5c1bd9f97e99c153a7-1a291.png 148w,\n/static/blog_image_2_main-7da4ae8b009b5d5c1bd9f97e99c153a7-2bc4a.png 295w,\n/static/blog_image_2_main-7da4ae8b009b5d5c1bd9f97e99c153a7-fb8a0.png 590w,\n/static/blog_image_2_main-7da4ae8b009b5d5c1bd9f97e99c153a7-1d2e1.png 813w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>記事詳細\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/blog_image_2_detail-ddf78c319bfb9bdb52617201c72de7df-3a8a9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 101.10974106041924%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQ4y+WUTWsTURSG5xdpM6FdaBQt7vwdVugHlrTqwsxm/AG60k0QxA/QVdpmkGYRyGqmxEjoJIj5cFFboQkxM8lkMs1M7uu5kzFNoKlp6K4vvFy4l/eZc+ZcrnB/XgzfWxTlpeXl2JPHT6VH6+tSdGNTerD0ULpxMyJduz4nhURRmgudOjRiMRyW5hcWYpFbt5/fubsYFuTYs+j7d2/wZXcXe9oestkscrkc9nUd6XQa2zs7UBQFyaQyWJXxNZFIIB6P4/OHj5BleVP4USqtgOS6rtPpdHqGYbimafrm21Pa4Qxd11eFaqWyioG8er3OVFVl+XyeaZrGjo9rrNvtMq5+v3+muQIoCoXCmlAul4fAg18HbHtrC6qqIZPJIEntlkpl/5DC4NkzzOUFFa4JlZEKu7bN6rUaqF1QZRh8HJNAQyDPDiscBfaoBbvn4sRxYFkWPNfD/3Qu0Kodst/fv8Jqd0DDQaPxB81mE61WC+1W219Nk2yYtG/wQfrMiUBj/xv7+ektGhQ4OjzyAbx1hyoeNd+zbRue500GBj+W4YI6t+XgfkwziOmGElyBscA/+MwVXnrLVxA4i8aA9DisBMATOnP5fbyoefb0+apWo7gkFYvFDYGeqQhBX5FfkF/OaJ59nUqlIn8BqESsK9UQHY4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ブログ修正後イメージ_記事詳細"\n        title=""\n        src="/static/blog_image_2_detail-ddf78c319bfb9bdb52617201c72de7df-fb8a0.png"\n        srcset="/static/blog_image_2_detail-ddf78c319bfb9bdb52617201c72de7df-1a291.png 148w,\n/static/blog_image_2_detail-ddf78c319bfb9bdb52617201c72de7df-2bc4a.png 295w,\n/static/blog_image_2_detail-ddf78c319bfb9bdb52617201c72de7df-fb8a0.png 590w,\n/static/blog_image_2_detail-ddf78c319bfb9bdb52617201c72de7df-3a8a9.png 811w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>ここまでで一通り自分のブログをローカルで作ることができました。</p>\n<h3>3. GitHub Pagesにブログを公開</h3>\n<p>Gatsbyを使うとnpmスクリプト一発でGitHub Pageに公開ができます。\nここではGitHubでのリポジトリ作成などの事前準備も含めて手順を示します。</p>\n<h4>3-1. GitHubにリポジトリ作成</h4>\n<p>GitHubにリポジトリを作り、手順2で作成した資産をプッシュしてください。</p>\n<h4>3-2. GitHub Pagesの設定</h4>\n<p>GitHubのリポジトリ > settings > GitHub Pages > Source で<code class="language-text">gh-pages branch</code>を選択します。</p>\n<h4>3-3. メタ情報の修正</h4>\n<p>手順2によりローカルでブログを起動できるようになりましたが、GitHub Pagesに公開するには、まだ少し修正が必要です。</p>\n<h5>gatsby-config.jsの<code class="language-text">pathPrefix</code>の修正</h5>\n<p>ブログのコンテキストURLは、現状だとスターターキットの値なので修正します。\nこれを指定するとブログのURLが<code class="language-text">https://[オーナー名].github.io/[pathPrefixの値]/</code>のようになります。\n僕の場合は<code class="language-text">https://takumon.github.io/blog</code>のようになります。</p>\n<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  ・・・\n<span class="gatsby-highlight-code-line">  pathPrefix<span class="token punctuation">:</span> <span class="token string">\'/blog\'</span><span class="token punctuation">,</span>\n</span>  ・・・\n<span class="token punctuation">}</span></code></pre></div>\n<h5>package.json、pacakge-lock.json、README.mdのメタ情報修正</h5>\n<p>上記3ファイルにおいて、プロジェクト名や、管理者、ブログのURLなどが、すべてスターターキットの状態になっているので\n自分仕様に修正します。</p>\n<h4>3-4. 資産をgh-pagesブランチにプッシュ</h4>\n<p><code class="language-text">git push origin master</code>でマスターに最新資産をプッシュします。</p>\n<p><code class="language-text">npm run deploy</code>を実行します。実態は<code class="language-text">gatsby build &amp;&amp; gh-pages -d public</code>というコマンドです。これを実行するとgatbyコマンドによりビルド資産をgh-pagesブランチにプッシュしてくれます。</p>\n<h4>3-5. 公開できたことを確認</h4>\n<p>GitHub Pagesの公開URLをブラウザでたたき、自分のブログが公開されていることを確認します。</p>\n<p>以上でブログの公開手順は終了です。</p>\n<h3>参考記事</h3>\n<ul>\n<li>\n<p><a href="https://qiita.com/jaxx2104/items/5f28915355a85d36e38a">React.js製の静的サイトジェネレーターGatsbyに移行した</a></p>\n<ul>\n<li>Gatsbyを始めるきっかけとなった記事です。この記事のおかげで簡単にGatsby製ブログを開設できました。</li>\n</ul>\n</li>\n</ul>',frontmatter:{title:"Gatsby製ブログ開設手順",date:"2018/09/10"}}},pathContext:{slug:"/2018/09/10/",previous:{fields:{slug:"/2018/09/09/"},frontmatter:{title:"Gatsbyでブログ始めました。"}},next:{fields:{slug:"/2018/09/12/"},frontmatter:{title:"GitHub Pagesを独自ドメイン化 + Https化"}}}}}});
//# sourceMappingURL=path---2018-09-10-162c451ab311cb4f844c.js.map