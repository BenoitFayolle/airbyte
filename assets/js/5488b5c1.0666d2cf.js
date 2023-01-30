"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[87616],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(r),c=n,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(k,o(o({ref:e},u),{},{components:r})):a.createElement(k,o({ref:e},u))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34602:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={},o="SurveyMonkey",i={unversionedId:"integrations/sources/surveymonkey",id:"integrations/sources/surveymonkey",title:"SurveyMonkey",description:"This page guides you through the process of setting up the SurveyMonkey source connector.",source:"@site/../docs/integrations/sources/surveymonkey.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/surveymonkey",permalink:"/integrations/sources/surveymonkey",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/surveymonkey.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"SurveyCTO",permalink:"/integrations/sources/surveycto"},next:{title:"Talkdesk Explore",permalink:"/integrations/sources/talkdesk-explore"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up SurveyMonkey",id:"step-1-set-up-surveymonkey",level:3},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:3},{value:"Supported streams and sync modes",id:"supported-streams-and-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:s};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"surveymonkey"},"SurveyMonkey"),(0,n.kt)("p",null,"This page guides you through the process of setting up the SurveyMonkey source connector."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"OAuth for Survey Monkey is officially supported only for the US. We are testing how to enable it in the EU at the moment. If you run into any issues, please ",(0,n.kt)("a",{parentName:"p",href:"mailto:product@airbyte.io"},"reach out to us")," so we can promptly assist you.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access Token")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-surveymonkey"},"Step 1: Set up SurveyMonkey"),(0,n.kt)("p",null,"Please read this ",(0,n.kt)("a",{parentName:"p",href:"https://developer.surveymonkey.com/api/v3/#getting-started"},"docs"),". Register your application ",(0,n.kt)("a",{parentName:"p",href:"https://developer.surveymonkey.com/apps/"},"here")," Then go to Settings and copy your access token"),(0,n.kt)("h3",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"SurveyMonkey")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"lick ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and Authorize to the SurveyMonkey account"),(0,n.kt)("li",{parentName:"ol"},"Choose required Start date"),(0,n.kt)("li",{parentName:"ol"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"SurveyMonkey")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Add ",(0,n.kt)("strong",{parentName:"li"},"Access Token")),(0,n.kt)("li",{parentName:"ol"},"Choose required Start date"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-streams-and-sync-modes"},"Supported streams and sync modes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.surveymonkey.com/api/v3/#surveys"},"Surveys")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.surveymonkey.com/api/v3/#surveys-id-pages"},"SurveyPages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id-questions"},"SurveyQuestions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.surveymonkey.com/api/v3/#survey-responses"},"SurveyResponses")," ","(","Incremental",")")),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The SurveyMonkey API applies heavy API quotas for default private apps, which have the following limits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"125 requests per minute"),(0,n.kt)("li",{parentName:"ul"},"500 requests per day")),(0,n.kt)("p",null,"To cover more data from this source we use caching."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22024"},"22024")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy")," for streams explicitly to ",(0,n.kt)("inlineCode",{parentName:"td"},"None"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19868"},"19868")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix OAuth flow urls")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17964"},"17964")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add OAuth for Eu and Ca")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17326"},"17326")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16706"},"16706")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix 404 error when handling nonexistent surveys")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14998"},"13046")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix state for response stream, fixed backoff behaviour, added unittest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13046"},"13046")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix incremental streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8768"},"8768")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add custom survey IDs to limit API calls")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9508"},"9508")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Scopes change")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8628"},"8628")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7868"},"7868")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve 'check' using '/users/me' API call")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7433"},"7433")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove unsused oAuth flow parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7433"},"7433")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add OAuth support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5983"},"5983")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix caching for gzip compressed http response")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4097"},"4097")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}m.isMDXComponent=!0}}]);