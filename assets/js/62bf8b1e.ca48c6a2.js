"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[64888],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(a),k=n,f=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return a?r.createElement(f,i(i({ref:e},d),{},{components:a})):r.createElement(f,i({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36851:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},i="Salesforce",o={unversionedId:"integrations/sources/salesforce",id:"integrations/sources/salesforce",title:"Salesforce",description:"Setting up the Salesforce source connector involves creating a read-only Salesforce user and configuring the Salesforce connector through the Airbyte UI.",source:"@site/../docs/integrations/sources/salesforce.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/salesforce",permalink:"/integrations/sources/salesforce",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/salesforce.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"S3",permalink:"/integrations/sources/s3"},next:{title:"Salesloft",permalink:"/integrations/sources/salesloft"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: (Optional, Recommended) Create a read-only Salesforce user",id:"step-1-optional-recommended-create-a-read-only-salesforce-user",level:3},{value:"Step 2: Set up Salesforce as a Source in Airbyte",id:"step-2-set-up-salesforce-as-a-source-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Incremental Deletes Sync",id:"incremental-deletes-sync",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Supported Objects",id:"supported-objects",level:2},{value:"Salesforce tutorials",id:"salesforce-tutorials",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"salesforce"},"Salesforce"),(0,n.kt)("p",null,"Setting up the Salesforce source connector involves creating a read-only Salesforce user and configuring the Salesforce connector through the Airbyte UI."),(0,n.kt)("p",null,"This page guides you through the process of setting up the Salesforce source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://login.salesforce.com/"},"Salesforce Account")," with Enterprise access or API quota purchased"),(0,n.kt)("li",{parentName:"ul"},"Dedicated Salesforce ",(0,n.kt)("a",{parentName:"li",href:"https://help.salesforce.com/s/articleView?id=adding_new_users.htm&type=5&language=en_US"},"user")," (optional)"),(0,n.kt)("li",{parentName:"ul"},"(For Airbyte Open Source) Salesforce ",(0,n.kt)("a",{parentName:"li",href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_tokens_scopes.htm&type=5"},"OAuth")," credentials")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-optional-recommended-create-a-read-only-salesforce-user"},"Step 1: (Optional, Recommended) Create a read-only Salesforce user"),(0,n.kt)("p",null,"While you can set up the Salesforce connector using any Salesforce user with read permission, we recommend creating a dedicated read-only user for Airbyte. This allows you to granularly control the data Airbyte can read."),(0,n.kt)("p",null,"To create a dedicated read only Salesforce user:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://login.salesforce.com/"},"Log into Salesforce")," with an admin account."),(0,n.kt)("li",{parentName:"ol"},"On the top right of the screen, click the gear icon and then click ",(0,n.kt)("strong",{parentName:"li"},"Setup"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, under Administration, click ",(0,n.kt)("strong",{parentName:"li"},"Users")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles"),". The Profiles page is displayed. Click ",(0,n.kt)("strong",{parentName:"li"},"New profile"),"."),(0,n.kt)("li",{parentName:"ol"},"For Existing Profile, select ",(0,n.kt)("strong",{parentName:"li"},"Read only"),". For Profile Name, enter ",(0,n.kt)("strong",{parentName:"li"},"Airbyte Read Only User"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),". The Profiles page is displayed. Click ",(0,n.kt)("strong",{parentName:"li"},"Edit"),"."),(0,n.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,n.kt)("strong",{parentName:"li"},"Standard Object Permissions")," and ",(0,n.kt)("strong",{parentName:"li"},"Custom Object Permissions")," and enable the ",(0,n.kt)("strong",{parentName:"li"},"Read")," checkbox for objects that you want to replicate via Airbyte."),(0,n.kt)("li",{parentName:"ol"},"Scroll to the top and click ",(0,n.kt)("strong",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ol"},"On the left side, under Administration, click ",(0,n.kt)("strong",{parentName:"li"},"Users")," > ",(0,n.kt)("strong",{parentName:"li"},"Users"),". The All Users page is displayed. Click ",(0,n.kt)("strong",{parentName:"li"},"New User"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill out the required fields:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"For License, select ",(0,n.kt)("strong",{parentName:"li"},"Salesforce"),"."),(0,n.kt)("li",{parentName:"ol"},"For Profile, select ",(0,n.kt)("strong",{parentName:"li"},"Airbyte Read Only User"),"."),(0,n.kt)("li",{parentName:"ol"},"For Email, make sure to use an email address that you can access."))),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ol"},"Copy the Username and keep it accessible."),(0,n.kt)("li",{parentName:"ol"},"Log into the email you used above and verify your new Salesforce account user. You'll need to set a password as part of this process. Keep this password accessible.")),(0,n.kt)("h3",{id:"step-2-set-up-salesforce-as-a-source-in-airbyte"},"Step 2: Set up Salesforce as a Source in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("p",null,"To set up Salesforce as a source in Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Salesforce")," from the ",(0,n.kt)("strong",{parentName:"li"},"Source type")," dropdown."),(0,n.kt)("li",{parentName:"ol"},"For Name, enter a name for the Salesforce connector."),(0,n.kt)("li",{parentName:"ol"},"Toggle whether your Salesforce account is a ",(0,n.kt)("a",{parentName:"li",href:"https://help.salesforce.com/s/articleView?id=sf.deploy_sandboxes_parent.htm&type=5"},"Sandbox account")," or a production account."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Start Date"),", enter the date in YYYY-MM-DD format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,n.kt)("li",{parentName:"ol"},"(Optional) In the Salesforce Object filtering criteria section, click ",(0,n.kt)("strong",{parentName:"li"},"Add"),". From the Search criteria dropdown, select the criteria relevant to you. For Search value, add the search terms relevant to you. If this field is blank, Airbyte will replicate all data."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Authenticate your account")," to authorize your Salesforce account. Airbyte will authenticate the Salesforce account you are already logged in to. Make sure you are logged into the right account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("p",null,"To set up Salesforce as a source in Airbyte Open Source:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow this ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@bpmmendis94/obtain-access-refresh-tokens-from-salesforce-rest-api-a324fe4ccd9b"},"walkthrough")," with the following modifications:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"If your Salesforce URL\u2019s is not in the ",(0,n.kt)("inlineCode",{parentName:"li"},"X.salesforce.com")," format, use your Salesforce domain name. For example, if your Salesforce URL is ",(0,n.kt)("inlineCode",{parentName:"li"},"awesomecompany.force.com")," then use that instead of ",(0,n.kt)("inlineCode",{parentName:"li"},"awesomecompany.salesforce.com"),"."),(0,n.kt)("li",{parentName:"ol"},"When running a curl command, run it with the ",(0,n.kt)("inlineCode",{parentName:"li"},"-L")," option to follow any redirects."),(0,n.kt)("li",{parentName:"ol"},"If you ",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1wZR8pz4MRdc2zUculc9IqoF8JxN87U40IqVnTtcqdrI/edit#heading=h.w5v6h7b2a9y4"},"created a read-only user"),", use the user credentials when logging in to generate OAuth tokens."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Airbute Open Source dashboard and follow the same steps as ",(0,n.kt)("a",{parentName:"p",href:"#for-airbyte-cloud"},"setting up Salesforce as a source in Airbyte Cloud"),"."))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Salesforce source connector supports the following sync modes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental Sync - Append")),(0,n.kt)("li",{parentName:"ul"},"(Recommended)",(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"}," Incremental Sync - Deduped History"))),(0,n.kt)("h3",{id:"incremental-deletes-sync"},"Incremental Deletes Sync"),(0,n.kt)("p",null,"The Salesforce connector retrieves deleted records from Salesforce. For the streams which support it, a deleted record will be marked with the field ",(0,n.kt)("inlineCode",{parentName:"p"},"isDeleted=true")," value."),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Salesforce connector is restricted by Salesforce\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm"},"Daily Rate Limits"),". The connector syncs data until it hits the daily rate limit, then ends the sync early with success status, and starts the next sync from where it left off. Note that picking up from where it ends will work only for incremental sync, which is why we recommend using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental Sync - Deduped History")," sync mode."),(0,n.kt)("h2",{id:"supported-objects"},"Supported Objects"),(0,n.kt)("p",null,"The Salesforce connector supports reading both Standard Objects and Custom Objects from Salesforce. Each object is read as a separate stream. See a list of all Salesforce Standard Objects ",(0,n.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm"},"here"),"."),(0,n.kt)("p",null,"Airbyte fetches and handles all the possible and available streams dynamically based on:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the authenticated Salesforce user has the Role and Permissions to read and fetch objects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the stream has the queryable property set to true. Airbyte can fetch only queryable streams via the API. If you don\u2019t see your object available via Airbyte, check if it is API-accessible to the Salesforce user you authenticated with in Step 2."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm"},"BULK API")," cannot be used to receive data from the following streams due to Salesforce API limitations. The Salesforce connector syncs them using the REST API which will occasionally cost more of your API quota:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AcceptedEventRelation"),(0,n.kt)("li",{parentName:"ul"},"Attachment"),(0,n.kt)("li",{parentName:"ul"},"CaseStatus"),(0,n.kt)("li",{parentName:"ul"},"ContractStatus"),(0,n.kt)("li",{parentName:"ul"},"DeclinedEventRelation"),(0,n.kt)("li",{parentName:"ul"},"FieldSecurityClassification"),(0,n.kt)("li",{parentName:"ul"},"KnowledgeArticle"),(0,n.kt)("li",{parentName:"ul"},"KnowledgeArticleVersion"),(0,n.kt)("li",{parentName:"ul"},"KnowledgeArticleVersionHistory"),(0,n.kt)("li",{parentName:"ul"},"KnowledgeArticleViewStat"),(0,n.kt)("li",{parentName:"ul"},"KnowledgeArticleVoteStat"),(0,n.kt)("li",{parentName:"ul"},"OrderStatus"),(0,n.kt)("li",{parentName:"ul"},"PartnerRole"),(0,n.kt)("li",{parentName:"ul"},"RecentlyViewed"),(0,n.kt)("li",{parentName:"ul"},"ServiceAppointmentStatus"),(0,n.kt)("li",{parentName:"ul"},"ShiftStatus"),(0,n.kt)("li",{parentName:"ul"},"SolutionStatus"),(0,n.kt)("li",{parentName:"ul"},"TaskPriority"),(0,n.kt)("li",{parentName:"ul"},"TaskStatus"),(0,n.kt)("li",{parentName:"ul"},"UndecidedEventRelation")),(0,n.kt)("h2",{id:"salesforce-tutorials"},"Salesforce tutorials"),(0,n.kt)("p",null,"Now that you have set up the Salesforce source connector, check out the following Salesforce tutorials:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airbyte.com/tutorials/replicate-salesforce-data-to-bigquery"},"Replicate Salesforce data to BigQuery")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airbyte.com/tutorials/salesforce-zendesk-analytics"},"Replicate Salesforce and Zendesk data to Keen for unified analytics"))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22016"},"22016")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy")," for streams explicitly to ",(0,n.kt)("inlineCode",{parentName:"td"},"None"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.29"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20886"},"20886")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,n.kt)("inlineCode",{parentName:"td"},"ActivityMetric")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.28"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20927"},"20927")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix tests; add expected records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.27"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19869"},"19869")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,n.kt)("inlineCode",{parentName:"td"},"AccountHistory")," from unsupported BULK streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19286"},"19286")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix: fallback to REST API if entity is not supported by BULK API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19294"},"19294")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use the correct encoding for non UTF-8 objects and data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18799"},"18799")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update list of unsupported Bulk API objects")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18753"},"18753")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add error_display_message for ConnectionError")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17615"},"17615")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Make paging work, if ",(0,n.kt)("inlineCode",{parentName:"td"},"cursor_field")," is not changed inside one page")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17778"},"17778")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"EventWhoRelation")," to the list of unsupported Bulk API objects.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17453"},"17453")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check objects that are not supported by the Bulk API (v52.0)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17314"},"17314")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed bug with decoding response")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17094"},"17094")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tune connection check: fetch a list of available streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17001"},"17001")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve writing file of decode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16086"},"16086")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve API type detection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16119"},"16119")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exclude ",(0,n.kt)("inlineCode",{parentName:"td"},"KnowledgeArticleVersion")," from using bulk API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15901"},"15901")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exclude ",(0,n.kt)("inlineCode",{parentName:"td"},"KnowledgeArticle")," from using bulk API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15444"},"15444")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed bug when ",(0,n.kt)("inlineCode",{parentName:"td"},"Bulk Job")," was timeout by the connector, but remained running on the server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13729"},"13729")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve configuration field descriptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13658"},"13658")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Correct logic to sync stream larger than page size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12685"},"12685")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update CDK to v0.1.56 to emit an ",(0,n.kt)("inlineCode",{parentName:"td"},"AirbyeTraceMessage")," on uncaught exceptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12576"},"12576")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Decode responses as utf-8 and fallback to ISO-8859-1 if needed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12552"},"12552")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Decode responses as ISO-8859-1 instead of utf-8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12335"},"12335")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adding fixtures to mock time.sleep for connectors that explicitly sleep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12304"},"12304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"Describe")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12230"},"12230")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector to use a ",(0,n.kt)("inlineCode",{parentName:"td"},"spec.yaml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11692"},"11692")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optimised memory usage for ",(0,n.kt)("inlineCode",{parentName:"td"},"BULK")," API calls")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10751"},"10751")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix broken link anchor in connector configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10679"},"10679")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reorganize input parameter order on the UI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10516"},"10516")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Speed up schema discovery by using parallelism")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10141"},"10141")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Processing of failed jobs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10012"},"10012")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increase CSV field_size_limit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9499"},"9499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If a sync reaches daily rate limit it ends the sync early with success status. Read more in ",(0,n.kt)("inlineCode",{parentName:"td"},"Performance considerations")," section")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9757"},"9757")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Parse CSV with "unix" dialect')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8617"},"8617")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9478"},"9478")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add available stream filtering by ",(0,n.kt)("inlineCode",{parentName:"td"},"queryable")," flag")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9302"},"9302")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deprecate API Type parameter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9151"},"9151")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix pagination in REST API streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9409"},"9409")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Correcting the presence of an extra ",(0,n.kt)("inlineCode",{parentName:"td"},"else")," handler in the error handling")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9386"},"9386")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Handling 400 error, while ",(0,n.kt)("inlineCode",{parentName:"td"},"sobject")," doesn't support ",(0,n.kt)("inlineCode",{parentName:"td"},"query")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"queryAll")," requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8797"},"8797")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Switched from authSpecification to advanced_auth in specefication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8871"},"8871")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix ",(0,n.kt)("inlineCode",{parentName:"td"},"examples")," for new field in specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8871"},"8871")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add the ability to filter streams by user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9005"},"9005")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Handling 400 error when a stream is not queryable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8405"},"8405")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filter 'null' byte(s) in HTTP responses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8191"},"8191")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Make ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date")," optional and change its format to ",(0,n.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DD"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8206"},"8206")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Handling 400 error when trying to create a job for sync using Bulk API.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8009"},"8009")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix retring of BULK jobs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7885"},"7885")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"Transform")," for output records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7778"},"7778")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix types for ",(0,n.kt)("inlineCode",{parentName:"td"},"anyType")," fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7592"},"7592")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix getting ",(0,n.kt)("inlineCode",{parentName:"td"},"anyType")," fields using BULK API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6438"},"6438")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotate Oauth2 flow initialization parameters in connector specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6209"},"6209")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix bug with pagination for BULK API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5619"},"5619")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Salesforce Aitbyte-Native Connector")))))}m.isMDXComponent=!0}}]);