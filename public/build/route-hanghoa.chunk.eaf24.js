(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{mocv:function(e,t,n){"use strict";(function(e){function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=n("8VmE"),l=n.n(c),i=n("hosL"),o=n("QRet"),u=n("2//r"),s=n("TZaN"),h=n("H4M2"),d=n("bTPH"),b=n("g5Li"),f=n("qgEq"),p=n("qnSA"),m=n("PWxM"),g=n("J+xt"),O=n("fRgM"),j=n("XkWK"),v=n("8MV/"),y=n("/TTE"),w=n("Lrno"),C=n("CEWi"),x=n("qDEd"),k=n("t7j9"),S=u.a.TextArea,z=s.a.Text,E=s.a.Title,F=["#F06292","#BA68C8","#9575CD","#303F9F","#283593","#304FFE","#1E88E5","#2962FF","#00E5FF","#00B8D4","#006064","#00BFA5","#33691E","#64DD17","#F57F17","#FF9100","#FF3D00","#8D6E63"];t.a=function(){var t=Object(o.k)([]),n=t[0],r=t[1],c=Object(o.k)({current:1,pageSize:10,hideOnSinglePage:!0,pageSizeOptions:[10,20,50,100]}),s=c[0],I=c[1],N=Object(o.k)(!1),T=N[0],A=N[1],P=[{title:Object(i.h)(E,{ellipsis:!0,level:5},"#"),dataIndex:"index",render:function(e,t,n){return Object(i.h)(z,null,n+1)},width:"2%",align:"center"},{title:Object(i.h)(E,{ellipsis:!0,level:5},"Tên hàng"),dataIndex:"name",render:function(e,t){return Object(i.h)(z,null,t.name)},width:"80%"},{title:Object(i.h)(E,{ellipsis:!0,level:5},"Hành động"),dataIndex:"action",align:"center",width:"auto",render:function(e,t){return Object(i.h)(z,{ellipsis:!0},Object(i.h)(h.a,{type:"primary",onClick:function(){return ae(t)},style:{marginRight:"0.25rem"}},Object(i.h)(v.a,null)),Object(i.h)(d.a,{title:"Bạn có chắc muốn xoá?",onConfirm:function(){return M(t._id)},okText:"Ok",cancelText:"Cancel"},Object(i.h)(h.a,{type:"danger"},Object(i.h)(y.a,null))))}}],R=async function(e,t){A(!0);var n=await Object(k.c)(e,t);r(n.list),I((function(e){return l()({},e,{total:n.totalItem,current:n.pageNumber,pageSize:n.pageSize})})),A(!1)};Object(o.d)((function(){R(s.current,s.pageSize)}),[]);var M=async function(e){await Object(k.b)(e),b.b.success("Xoá thành công"),R(s.current,s.pageSize)},D=Object(o.k)([]),_=D[0],L=D[1],q=Object(o.k)([]),W=q[0],B=q[1];Object(o.d)((function(){Object(C.c)({active:!0}).then((function(e){return L(e)})),Object(x.c)({active:!0}).then((function(e){return B(e)}))}),[]);var J=Object(o.k)(!1),K=J[0],V=J[1],H=Object(o.k)(!1),X=H[0],$=H[1],G=Object(o.k)(null),Z=G[0],Q=G[1],U=Object(o.k)(null),Y=U[0],ee=U[1],te=f.a.useForm()[0],ne=function(e){var t=e.label,n=e.closable,a=e.onClose,r=Object(o.h)((function(){return F[Math.floor(Math.random()*F.length)]}),[]);return Object(i.h)(p.a,{color:r,closable:n,onClose:a,style:{marginRight:"0.25rem"}},t)},ae=function(e){Q(e),te.setFieldsValue({name:null==e?void 0:e.name,description:null==e?void 0:e.description,color:null==e?void 0:e.color,size:null==e?void 0:e.size,sexes:null==e?void 0:e.sexes}),V(!0)},re=function(e,t){return t.find((function(t){return t._id===e})).name},ce=[{title:Object(i.h)(z,{ellipsis:!0},"#"),dataIndex:"index",render:function(e,t,n){return Object(i.h)(z,null,n+1)},width:"2%",align:"center"},{title:Object(i.h)(z,{ellipsis:!0},"Màu"),dataIndex:"color",render:function(e,t){return Object(i.h)(z,null,re(t.color,_))},width:"auto"},{title:Object(i.h)(z,{ellipsis:!0},"Size"),dataIndex:"size",render:function(e,t){return Object(i.h)(z,null,re(t.size,W))},width:"auto"},{title:Object(i.h)(z,{ellipsis:!0},"Nam hay nữ"),dataIndex:"sexes",render:function(e,t){return Object(i.h)(z,null,t.sexes)},width:"auto"},{title:Object(i.h)(z,{ellipsis:!0},"Kích hoạt"),dataIndex:"active",width:"10%",render:function(e,t,n){return Object(i.h)("div",{style:{textAlign:"center"}},Object(i.h)(m.a,{defaultChecked:t.active,onChange:function(e){return function(e,t){ee((function(n){return n[t].active=e,n}))}(e,n)}}))}}];return Object(i.h)(e,null,Object(i.h)(g.a,{bordered:!0,columns:P,rowKey:function(e){return e._id},dataSource:n,pagination:s,loading:T,onChange:function(e){R(e.current,e.pageSize)}}),Object(i.h)("div",{style:{display:"flex",marginTop:"1rem"}},Object(i.h)(h.a,{type:"primary",size:"large",onClick:function(){return ae()}},Object(i.h)(w.a,null))),Object(i.h)(O.a,{title:Object(i.h)(E,{level:3},(Z?"Chỉnh sửa":"Tạo mới")+" hàng"),visible:K,onOk:async function(){$(!0),te.validateFields().then((async function(e){te.resetFields(),Z?(await Object(k.d)(Z._id,e),b.b.success("Cập nhật thành công"),R(s.current,s.pageSize)):(await Object(k.a)(e),b.b.success("Tạo mới thành công"),R(s.current,s.pageSize)),Q(null),$(!1),V(!1)})).catch((function(){$(!1)}))},onCancel:function(){te.resetFields(),V(!1),Q(null)},confirmLoading:X,width:"70%"},Object(i.h)(f.a,{form:te,layout:"vertical",name:"hanghoaForm",preserve:!1,onValuesChange:function(e,t){for(var n,r=t.size,c=t.sexes,l=[],i=a(t.color);!(n=i()).done;)for(var o,u=n.value,s=a(r);!(o=s()).done;)for(var h,d=o.value,b=a(c);!(h=b()).done;){l.push({color:u,size:d,sexes:h.value,active:!0})}ee(l)}},Object(i.h)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridColumnGap:"1rem"}},Object(i.h)("div",null,Object(i.h)(f.a.Item,{name:"name",label:Object(i.h)(E,{level:5},"Tên hàng"),rules:[{required:!0,message:"Không được để tên hàng trống"}]},Object(i.h)(u.a,{placeholder:"Tên hàng"})),Object(i.h)(f.a.Item,{name:"description",label:Object(i.h)(E,{level:5},"Mô tả hàng")},Object(i.h)(S,{autoSize:{minRows:6,maxRows:10},placeholder:"Mô tả hàng"}))),Object(i.h)("div",null,Object(i.h)(f.a.Item,{name:"color",label:Object(i.h)(E,{level:5},"Màu sắc hàng")},Object(i.h)(j.a,{mode:"multiple",showArrow:!0,allowClear:!0,style:{width:"100%"},placeholder:"Chọn màu",tagRender:ne,size:"large",options:_.map((function(e){return{label:e.name,value:e._id}}))})),Object(i.h)(f.a.Item,{name:"size",label:Object(i.h)(E,{level:5},"Size hàng")},Object(i.h)(j.a,{mode:"multiple",showArrow:!0,allowClear:!0,style:{width:"100%"},placeholder:"Chọn size",tagRender:ne,size:"large",options:W.map((function(e){return{label:e.name,value:e._id}}))})),Object(i.h)(f.a.Item,{name:"sexes",label:Object(i.h)(E,{level:5},"Đồ Nam hay Nữ")},Object(i.h)(j.a,{mode:"multiple",showArrow:!0,allowClear:!0,style:{width:"100%"},placeholder:"Chọn giới tính",tagRender:ne,size:"large",options:[{label:"Nam",value:"Nam"},{label:"Nữ",value:"Nữ"}]}))))),Object(i.h)(E,{level:5},"Các phiên bản hàng"),Object(i.h)(g.a,{bordered:!0,columns:ce,rowKey:function(e){return e.color+e.sexes+e.size},dataSource:Y,pagination:{pageSize:5}})))}}).call(this,n("hosL").Fragment)},qnSA:function(e,t,n){"use strict";var a=n("OvAC"),r=n.n(a),c=n("8VmE"),l=n.n(c),i=n("nxTg"),o=n.n(i),u=n("l8WD"),s=n("8Jek"),h=n.n(s),d=n("x9u5"),b=n("EWXb"),f=n.n(b),p=n("Bfez"),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e){var t,n=u.useContext(p.b).getPrefixCls,a=e.prefixCls,c=e.className,i=e.checked,o=m(e,["prefixCls","className","checked"]),s=n("tag",a),d=h()(s,(t={},r()(t,"".concat(s,"-checkable"),!0),r()(t,"".concat(s,"-checkable-checked"),i),t),c);return delete o.onChange,u.createElement("span",l()({},o,{className:d,onClick:function(t){var n=e.onChange,a=e.onClick;n&&n(!e.checked),a&&a(t)}}))},O=n("nxLd"),j=n("wWt5"),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},y=new RegExp("^(".concat(O.a.join("|"),")(-inverse)?$")),w=new RegExp("^(".concat(O.b.join("|"),")$")),C=function(e,t){var n,a=e.prefixCls,c=e.className,i=e.style,s=e.children,b=e.icon,m=e.color,g=e.onClose,O=e.closeIcon,C=e.closable,x=void 0!==C&&C,k=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),S=u.useContext(p.b),z=S.getPrefixCls,E=S.direction,F=u.useState(!0),I=o()(F,2),N=I[0],T=I[1];u.useEffect((function(){"visible"in k&&T(k.visible)}),[k.visible]);var A=function(){return!!m&&(y.test(m)||w.test(m))},P=l()({backgroundColor:m&&!A()?m:void 0},i),R=A(),M=z("tag",a),D=h()(M,(n={},r()(n,"".concat(M,"-").concat(m),R),r()(n,"".concat(M,"-has-color"),m&&!R),r()(n,"".concat(M,"-hidden"),!N),r()(n,"".concat(M,"-rtl"),"rtl"===E),n),c),_=function(e){e.stopPropagation(),g&&g(e),e.defaultPrevented||"visible"in k||T(!1)},L="onClick"in k||s&&"a"===s.type,q=Object(d.a)(k,["visible"]),W=b||null,B=W?u.createElement(u.Fragment,null,W,u.createElement("span",null,s)):s,J=u.createElement("span",l()({},q,{ref:t,className:D,style:P}),B,x?O?u.createElement("div",{className:"".concat(M,"-close-icon"),onClick:_},O):u.createElement(f.a,{className:"".concat(M,"-close-icon"),onClick:_}):null);return L?u.createElement(j.a,null,J):J},x=u.forwardRef(C);x.displayName="Tag",x.CheckableTag=g;t.a=x},t7j9:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n("czhI"),r=n.n(a),c=async function(e,t,n){var a="/api/hanghoa/page?pageNumber="+e+"&pageSize="+t+(n?"&condition="+JSON.stringify(n):""),c=await r.a.get(a);return c.data.error?[]:c.data.result},l=async function(e){var t=await r.a.post("/api/hanghoa",e);return t.data.error?[]:t.data.result},i=async function(e,t){var n=await r.a.put("/api/hanghoa",{_id:e,changes:t});return n.data.error?[]:n.data.result},o=async function(e){var t="/api/hanghoa?_id="+e;await r.a.delete(t)}},vrAG:function(e,t,n){"use strict";n.r(t);var a=n("hosL"),r=n("dZF8"),c=n("mocv"),l=r.a.Content;t.default=function(){return Object(a.h)(l,{style:{margin:"1rem 1rem 0 1rem"}},Object(a.h)("div",{className:"site-layout-background",style:{padding:24,minHeight:360,background:"white"}},Object(a.h)(c.a,null)))}}}]);
//# sourceMappingURL=route-hanghoa.chunk.eaf24.js.map