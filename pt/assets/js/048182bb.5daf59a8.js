(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[698],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9085:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={title:"Submitting a Pull Request",sidebar_label:"Pull Requests"},u=void 0,p={unversionedId:"contrib/pull-requests",id:"contrib/pull-requests",isDocsHomePage:!1,title:"Submitting a Pull Request",description:"Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.",source:"@site/docs/contrib/pull-requests.md",sourceDirName:"contrib",slug:"/contrib/pull-requests",permalink:"/phpBB-ext-sitemaker/pt/docs/contrib/pull-requests",editUrl:"https://crowdin.com/project/phpbb-ext-sitemaker/pt",version:"current",lastUpdatedBy:"blitze",lastUpdatedAt:1624397021,formattedLastUpdatedAt:"22/06/2021",frontMatter:{title:"Submitting a Pull Request",sidebar_label:"Pull Requests"},sidebar:"tutorialSidebar",previous:{title:"Translators",permalink:"/phpBB-ext-sitemaker/pt/docs/contrib/translators"}},s=[{value:"Forking/Cloning",id:"forkingcloning",children:[]},{value:"Pull Requests",id:"pull-requests",children:[]}],c={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch."),"\n",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/about-pull-requests/"},"Read more")),(0,o.kt)("h2",{id:"forkingcloning"},"Forking/Cloning"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a github account if you don't already have one"),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/blitze/phpBB-ext-sitemaker.git"},"https://github.com/blitze/phpBB-ext-sitemaker.git"),' and click on "Fork"')),(0,o.kt)("p",null,"Clone your fork of the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone git://github.com/<my_github_name>/phpBB-ext-sitemaker.git phpBB/ext/blitze/sitemaker\n")),(0,o.kt)("p",null,"From command line go to sitemaker directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd phpBB/ext/blitze/sitemaker\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configure git:")),(0,o.kt)("p",null,"Add your Username to Git on your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git config --global user.name "Your Name Here"\n')),(0,o.kt)("p",null,"Add your E-mail address to Git on your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git config --add user.email username@phpbb.com\n")),(0,o.kt)("p",null,"Add the upstream remote (you can change \u2018upstream\u2019 to whatever you like):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git remote add upstream git://github.com/blitze/phpBB-ext-sitemaker.git\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install vendors")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"composer install\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install NPM packages")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\n")),(0,o.kt)("p",null,"Alternatively you may use ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install\n")),(0,o.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Create a new branch for your feature & switch to it\ngit checkout -b feature/my-fancy-new-feature\n\n# create a new branch for the issue you are working on * switch to it (ticket # is from github tracker)\ngit checkout -b ticket/1234\n")),(0,o.kt)("p",null,"Make your changes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Stage the files\ngit add <files> \n\n# Commit staged files - please use a correct commit message\ngit commit -m "my commit message"\n')),(0,o.kt)("p",null,"Push the branch back to GitHub\ngit push origin feature/my-fancy-new-feature"),(0,o.kt)("p",null,"Submit a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blitze/phpBB-ext-sitemaker/pulls"},"pull-request")))}m.isMDXComponent=!0}}]);