"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9432],{3511:(e,l,t)=>{t.r(l),t.d(l,{default:()=>h});t(5697);var a=t(8661),i=t(5441),d=(t(710),t(512)),n=t(9801),u=t(477),c=t(111),o=t(6151),_=t(7344),s=t(4481),m=t(394),r=t(3067),f=t(905),g=t(4057);function h(e){let{className:l,contentDetails:t,contentType:h,thumbSize:v,href:p,showPlayButton:T,unavailableContent:y,children:N,onClickCallback:E}=e;const w=(0,i.I0)(),b=(0,i.v9)(_.lH),C=(0,i.v9)((e=>(0,c.B)(e))),k=(0,i.v9)((e=>(0,o.jL)(e))),A=(0,a.useRef)(null),B="game"===h?v:64,$="game"===h?v:64,D=(null==t?void 0:t.imageAlt)&&k>=.5?null==t?void 0:t.imageAlt:null==t?void 0:t.image,Z=e=>{E(e),y||e.target!==A.current||(e.preventDefault(),e.stopImmediatePropagation(),(0,r.A)({category:"game",action:"play-now-launch"}),(0,m.Z)().push(`${p}`),(0,m.Z)().push(`${window.location.pathname}${window.location.search}#fullscreen`),w((0,f.Zx)({toggle:!0})))},L=null==D?void 0:D.path,x=L?(0,s.u2)({width:B,height:$,image:D}):void 0,S=L?(0,s.u2)({width:2*B,height:2*$,image:D}):void 0,U=p?Z:null;const I=function(){const e=(0,d.Z)(g.default.detailedTile__img,{[g.default.detailedTile__img_category]:"category"===h,[g.default.detailedTile__img_unavailable]:y,[g.default.detailedTile__img_sizeS]:v<=40}),l=(0,d.Z)(g.default.detailedTile__titleText,{[g.default.detailedTile__titleText_category]:"category"===h,[g.default.detailedTile__titleText_with_playButton]:T});return a.default.createElement(a.default.Fragment,null,L?a.default.createElement("img",{className:e,alt:t.title,src:x,srcSet:`${x} 1x, ${S} 2x`,decoding:"async",contentType:h,unavailableContent:y,onClick:U,width:v,height:v}):a.default.createElement("div",{className:e}),a.default.createElement("div",{className:(0,d.Z)(g.default.detailedTile__details,{[g.default.detailedTile__details_with_playButton]:T}),onClick:U},t.unlisted?a.default.createElement("div",{className:g.default.detailedTile__unlistedWrapper},a.default.createElement("div",{className:l},t.title),a.default.createElement("div",{className:g.default.detailedTile__unlisted},"Unlisted")):a.default.createElement("div",{className:l},t.title),t.developer&&a.default.createElement("span",{className:g.default.detailedTile__developer},"tr"===b.lang?`${t.developer} ${C.by}`:`${C.by} ${t.developer}`)),T&&a.default.createElement("div",{className:(0,d.Z)(g.default.detailedTile__playNowBtn,{[g.default.detailedTile__playNowBtn_unavailable]:y}),ref:A,onClick:Z},y?a.default.createElement(n.default,{className:g.default.detailedTile__mobileUnavailableIcon,name:"mobileUnavailable",width:"36",height:"36"}):a.default.createElement(n.default,{className:g.default.detailedTile__playIcon,name:"play",width:"36",height:"36"})),N)}();return p?a.default.createElement(u.default,{className:(0,d.Z)(g.default.detailedTile__link,{[g.default.detailedTile__link_category]:"category"===h},l),to:p},I):I}h.defaultProps={contentType:"game",className:void 0,thumbSize:40,href:"",showPlayButton:!1,unavailableContent:!1,children:null,onClickCallback:null}}}]);