(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{122:function(e,r,n){},123:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),o=n(23),c=n.n(o),s=(n(92),n(35)),u=n(13),l=n(54),i=n(129),d=n(1),f=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(i.a,{className:"text-center",children:[Object(d.jsx)("small",{children:"Fast Food \xa9"})," ",Object(d.jsx)("small",{children:(new Date).getFullYear()})]})})},p=n(22),j=n(32),O=n(131),h=n(132),b=n(130),v=n(16),m=n.n(v),I=n(41),g=function(){var e=Object(u.k)(),r=Object(j.b)(),n=Object(j.c)((function(e){return null===e||void 0===e?void 0:e.auth})).userInfo,t=Object(j.c)((function(e){return null===e||void 0===e?void 0:e.cart})).cartItems;return Object(d.jsx)("header",{className:"sticky-top",children:Object(d.jsx)(O.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"mb-2 py-2",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(p.LinkContainer,{to:"/",children:Object(d.jsx)(O.a.Brand,{children:Object(d.jsx)("h3",{children:"Kfc Fast Food"})})}),Object(d.jsx)(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(O.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(h.a,{className:"ms-auto",children:[n&&Object(d.jsx)(p.LinkContainer,{to:"/",children:Object(d.jsxs)(h.a.Link,{children:["Hello, ",null===n||void 0===n?void 0:n.userName.split(" ")[0]," "]})}),n&&"customer"===n.role&&Object(d.jsxs)(b.a,{title:Object(d.jsx)("i",{className:"far fa-user",children:" Account "}),children:[Object(d.jsx)(p.LinkContainer,{to:"/v1/user/profile/my-orders",children:Object(d.jsx)(b.a.Item,{children:"My Orders"})}),Object(d.jsx)(p.LinkContainer,{to:"/v1/user/profile/update-information",children:Object(d.jsx)(b.a.Item,{children:"Update Profile"})})]}),n&&"admin"===n.role&&Object(d.jsxs)(b.a,{title:Object(d.jsx)("i",{className:"far fa-user",children:" DashBoard "}),children:[Object(d.jsx)(p.LinkContainer,{to:"/v1/user/profile/all-orders",children:Object(d.jsx)(b.a.Item,{children:"All Orders"})}),Object(d.jsx)(p.LinkContainer,{to:"/v1/user/profile/update-information",children:Object(d.jsx)(b.a.Item,{children:"Update Profile"})})]}),!n&&Object(d.jsx)(p.LinkContainer,{to:"/v1/auth/signup",children:Object(d.jsx)(h.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-user-plus",children:" sign up "})})}),!n&&Object(d.jsx)(p.LinkContainer,{to:"/v1/auth/signin",children:Object(d.jsx)(h.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-sign-in-alt",children:" sign in "})})}),!n&&Object(d.jsx)(p.LinkContainer,{to:"/v1/cart",children:Object(d.jsxs)(h.a.Link,{children:[Object(d.jsx)("i",{className:"fas fa-shopping-basket",children:" cart "})," ",Object(d.jsx)("span",{children:t.length})]})}),n&&"customer"===n.role&&Object(d.jsx)(p.LinkContainer,{to:"/v1/cart",children:Object(d.jsxs)(h.a.Link,{children:[Object(d.jsx)("i",{className:"fas fa-shopping-basket",children:" cart "})," ",Object(d.jsx)("span",{children:t.length})]})}),n&&Object(d.jsx)("div",{onClick:function(n){n.preventDefault(),m.a.remove("accessToken"),localStorage.removeItem("userInfo"),r(Object(I.b)()),e.push("/")},children:Object(d.jsx)(h.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-sign-out-alt",children:" Logout "})})})]})})]})})})},y=n(55),x=Object(t.lazy)((function(){return n.e(14).then(n.bind(null,147))})),C=Object(t.lazy)((function(){return Promise.all([n.e(6),n.e(18)]).then(n.bind(null,146))})),k=Object(t.lazy)((function(){return Promise.all([n.e(3),n.e(17)]).then(n.bind(null,151))})),S=Object(t.lazy)((function(){return n.e(5).then(n.bind(null,152))})),w=[{url:"/v1/auth/signup",protected:!1,component:Object(t.lazy)((function(){return n.e(8).then(n.bind(null,153))}))},{url:"/v1/auth/signin",protected:!1,component:Object(t.lazy)((function(){return n.e(7).then(n.bind(null,154))}))},{url:"/v1/category",protected:!1,component:S},{url:"/v1/cart",protected:!1,component:k},{url:"/v1/user/profile",protected:!0,component:x},{url:"/",protected:!1,component:C}],E=Object(t.lazy)((function(){return n.e(16).then(n.bind(null,139))})),N=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(s.BrowserRouter,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(t.Suspense,{fallback:Object(d.jsx)(y.a,{}),children:Object(d.jsx)("main",{children:Object(d.jsx)(u.g,{children:w.map((function(e,r){return e.protected?Object(d.jsx)(E,{component:e.component,path:e.url},r):Object(d.jsx)(u.d,{path:e.url,component:e.component},r)}))})})}),Object(d.jsx)(l.a,{position:"top-center",reverseOrder:!1}),Object(d.jsx)(f,{})]})})},A=n(5),F=n(74),L=n(61),T=n(75),U=n(76),B=n(77),z=n(78),R=n(79),D=n(80),J=n(81),M=n(82),P=n(83),_=Object(A.a)({reducer:{auth:I.a,cart:L.d,signup:F.a,specificCategory:T.a,updateUser:U.a,allCustomers:B.a,createFood:z.d,checkout:R.d,myOrders:D.a,specificOrder:J.a,allOrders:M.a,deliverOrder:P.a}});n(122);c.a.render(Object(d.jsxs)(a.a.StrictMode,{children:[Object(d.jsx)(j.a,{store:_,children:Object(d.jsx)(N,{})}),","]}),document.getElementById("root"))},41:function(e,r,n){"use strict";n.d(r,"e",(function(){return i})),n.d(r,"c",(function(){return j})),n.d(r,"d",(function(){return O})),n.d(r,"b",(function(){return h}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,i=Object(c.b)("auth/userSigIn",function(){var e=Object(o.a)(a.a.mark((function e(r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.next=3,u.a.post("/api/v1/auth/signin",{email:r.email,password:r.password},n);case 3:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),d=Object(c.c)({name:"auth",initialState:{userInfo:l,status:null,errorInfo:null},reducers:{signin:function(e,r){e.userInfo=r.payload,e.status="success",e.errorInfo=null},signinError:function(e,r){e.userInfo=null,e.status="failed",e.errorInfo=r.payload},signOut:function(e,r){e.userInfo=null,e.status=null,e.errorInfo=null}},extraReducers:function(e){e.addCase(i.pending,(function(e,r){e.userInfo=null,e.status="loading",e.errorInfo=null})),e.addCase(i.fulfilled,(function(e,r){e.userInfo=null,e.status="loading",e.errorInfo=null})),e.addCase(i.rejected,(function(e,r){e.userInfo=null,e.status="failed",e.errorInfo=r.payload}))}}),f=d.actions,p=d.reducer,j=f.signin,O=f.signinError,h=f.signOut;r.a=p},55:function(e,r,n){"use strict";n(0);var t=n(124),a=n(1);r.a=function(){return Object(a.jsx)(t.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})}},61:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return l})),n.d(r,"f",(function(){return i})),n.d(r,"e",(function(){return d})),n.d(r,"c",(function(){return f}));var t=n(5),a=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],o=Object(t.c)({name:"cart",initialState:{cartItems:a},reducers:{addToCart:function(e,r){var n=r.payload;e.cartItems.push(n),localStorage.setItem("cartItems",JSON.stringify(e.cartItems))},removeFromCart:function(e,r){var n=r.payload,t=e.cartItems.filter((function(e){return e._id!==n._id}));e.cartItems=t,localStorage.setItem("cartItems",JSON.stringify(t))},increaseQty:function(e,r){var n=r.payload,t=e.cartItems.map((function(e){return e._id===n._id?(e.qtyToBuy+=1,e):e}));e.cartItems=t,localStorage.setItem("cartItems",JSON.stringify(t))},decreaseQty:function(e,r){var n=r.payload,t=e.cartItems.map((function(e){return e._id===n._id?(e.qtyToBuy<=1?e.qtyToBuy=1:e.qtyToBuy-=1,e):e}));e.cartItems=t,localStorage.setItem("cartItems",JSON.stringify(t))},clearCart:function(e,r){localStorage.removeItem("cartItems"),e.cartItems=[]}}}),c=o.actions,s=o.reducer,u=c.addToCart,l=c.clearCart,i=c.removeFromCart,d=c.increaseQty,f=c.decreaseQty;r.d=s},74:function(e,r,n){"use strict";n.d(r,"c",(function(){return l})),n.d(r,"b",(function(){return p}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=Object(c.b)("auth/userSigUn",function(){var e=Object(o.a)(a.a.mark((function e(r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.next=3,u.a.post("/api/v1/auth/signup",{fullName:null===r||void 0===r?void 0:r.fullName,email:null===r||void 0===r?void 0:r.email,password:null===r||void 0===r?void 0:r.password,phone:null===r||void 0===r?void 0:r.phone},n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),i=Object(c.c)({name:"auth",initialState:{userInfo:null,status:null,errorInfo:null},reducers:{signupError:function(e,r){e.userInfo=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(l.pending,(function(e,r){e.userInfo=null,e.status="loading",e.errorInfo=null})),e.addCase(l.fulfilled,(function(e,r){e.userInfo=null,e.status="loading",e.errorInfo=null})),e.addCase(l.rejected,(function(e,r){e.userInfo=null,e.status="failed",e.errorInfo=r.payload}))}}),d=i.actions,f=i.reducer,p=d.signupError;r.a=f},75:function(e,r,n){"use strict";n.d(r,"c",(function(){return l})),n.d(r,"b",(function(){return p}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=Object(c.b)("specificCategory/fetchSPecificCategoryFoods",function(){var e=Object(o.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/v1/foods/category/".concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),i=Object(c.c)({name:"specificCategory",initialState:{status:null,foods:[],errorInfo:null},reducers:{fetchSPecificCategoryFoods:function(e,r){e.foods=r.payload,e.status="success",e.errorInfo=null}},extraReducers:function(e){e.addCase(l.pending,(function(e,r){e.foods=[],e.status="loading",e.errorInfo=null})),e.addCase(l.fulfilled,(function(e,r){e.foods=[],e.status="loading",e.errorInfo=null})),e.addCase(l.rejected,(function(e,r){e.foods=[],e.status="failed",e.errorInfo=r.payload}))}}),d=i.actions,f=i.reducer,p=d.fetchSPecificCategoryFoods;r.a=f},76:function(e,r,n){"use strict";n.d(r,"d",(function(){return l})),n.d(r,"b",(function(){return p})),n.d(r,"c",(function(){return j}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=Object(c.b)("updateUser/updateUser",function(){var e=Object(o.a)(a.a.mark((function e(r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"Bearer ".concat(null===r||void 0===r?void 0:r.accessToken)}},e.next=3,u.a.put("/api/v1/user/updateUser",r,n);case 3:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),i=Object(c.c)({name:"updateUser",initialState:{updatedUserInfo:null,status:null,errorInfo:null},reducers:{updateUser:function(e,r){e.updatedUserInfo=r.payload,e.status="success",e.errorInfo=null},updateUserError:function(e,r){e.updatedUserInfo=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(l.pending,(function(e,r){e.updatedUserInfo=null,e.status="loading",e.errorInfo=null})),e.addCase(l.fulfilled,(function(e,r){e.updatedUserInfo=null,e.status="loading",e.errorInfo=null})),e.addCase(l.rejected,(function(e,r){e.updatedUserInfo=null,e.status="failed",e.errorInfo=r.payload}))}}),d=i.actions,f=i.reducer,p=d.updateUser,j=d.updateUserError;r.a=f},77:function(e,r,n){"use strict";n.d(r,"d",(function(){return d})),n.d(r,"b",(function(){return O})),n.d(r,"c",(function(){return h}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=n(16),i=n.n(l),d=Object(c.b)("customers/fetchCustomers",Object(o.a)(a.a.mark((function e(){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:"Bearer ".concat(i.a.get("accessToken"))}},e.next=3,u.a.get("/api/v1/user/fetch-all-users",r);case 3:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 5:case"end":return e.stop()}}),e)})))),f=Object(c.c)({name:"customers",initialState:{allCustomers:null,status:null,errorInfo:null},reducers:{fetchAllCustomers:function(e,r){e.allCustomers=r.payload,e.status="success",e.errorInfo=null},fetchAllCustomersError:function(e,r){e.allCustomers=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(d.pending,(function(e,r){e.allCustomers=null,e.status="loading",e.errorInfo=null})),e.addCase(d.fulfilled,(function(e,r){e.allCustomers=null,e.status="loading",e.errorInfo=null})),e.addCase(d.rejected,(function(e,r){e.allCustomers=null,e.status="failed",e.errorInfo=r.payload}))}}),p=f.actions,j=f.reducer,O=p.fetchAllCustomers,h=p.fetchAllCustomersError;r.a=j},78:function(e,r,n){"use strict";n.d(r,"c",(function(){return d})),n.d(r,"a",(function(){return O})),n.d(r,"b",(function(){return h}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=n(16),i=n.n(l),d=Object(c.b)("createFood/createFood",function(){var e=Object(o.a)(a.a.mark((function e(r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"Bearer ".concat(i.a.get("accessToken"))}},e.next=3,u.a.post("/api/v1/foods/create-food",r,n);case 3:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),f=Object(c.c)({name:"createFood",initialState:{status:null,food:null,errorInfo:null},reducers:{createFood:function(e,r){e.foods=r.payload,e.status="success",e.errorInfo=null},createFoodError:function(e,r){e.foods=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(d.pending,(function(e,r){e.food=null,e.status="loading",e.errorInfo=null})),e.addCase(d.fulfilled,(function(e,r){e.food=null,e.status="loading",e.errorInfo=null})),e.addCase(d.rejected,(function(e,r){e.food=null,e.status="failed",e.errorInfo=r.payload}))}}),p=f.actions,j=f.reducer,O=p.createFood,h=p.createFoodError;r.d=j},79:function(e,r,n){"use strict";n.d(r,"c",(function(){return d})),n.d(r,"a",(function(){return O})),n.d(r,"b",(function(){return h}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=n(16),i=n.n(l),d=Object(c.b)("checkout/checkout",function(){var e=Object(o.a)(a.a.mark((function e(r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"Bearer ".concat(i.a.get("accessToken"))}},e.next=3,u.a.post("/api/v1/order/create-order",r,n);case 3:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),f=Object(c.c)({name:"checkout",initialState:{checkoutInfo:null,status:null,errorInfo:null},reducers:{checkout:function(e,r){e.checkoutInfo=r.payload,e.status="success",e.errorInfo=null},checkoutError:function(e,r){e.checkoutInfo=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(d.pending,(function(e,r){e.checkoutInfo=null,e.status="loading",e.errorInfo=null})),e.addCase(d.fulfilled,(function(e,r){e.checkoutInfo=null,e.status="loading",e.errorInfo=null})),e.addCase(d.rejected,(function(e,r){e.checkoutInfo=null,e.status="failed",e.errorInfo=r.payload}))}}),p=f.actions,j=f.reducer,O=p.checkout,h=p.checkoutError;r.d=j},80:function(e,r,n){"use strict";n.d(r,"c",(function(){return d})),n.d(r,"b",(function(){return O}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=n(16),i=n.n(l),d=Object(c.b)("myOrders/fetchMyOrders",Object(o.a)(a.a.mark((function e(){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:"Bearer ".concat(i.a.get("accessToken"))}},e.next=3,u.a.get("/api/v1/order/fetch-my-orders",r);case 3:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 5:case"end":return e.stop()}}),e)})))),f=Object(c.c)({name:"myOrders",initialState:{myOrders:null,status:null,errorInfo:null},reducers:{fetchMyOrders:function(e,r){e.myOrders=r.payload,e.status="success",e.errorInfo=null},fetchMyOrdersError:function(e,r){e.myOrders=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(d.pending,(function(e,r){e.myOrders=null,e.status="loading",e.errorInfo=null})),e.addCase(d.fulfilled,(function(e,r){e.myOrders=null,e.status="loading",e.errorInfo=null})),e.addCase(d.rejected,(function(e,r){e.myOrders=null,e.status="failed",e.errorInfo=r.payload}))}}),p=f.actions,j=f.reducer,O=p.fetchMyOrders;p.fetchMyOrdersError;r.a=j},81:function(e,r,n){"use strict";n.d(r,"c",(function(){return d})),n.d(r,"b",(function(){return O}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=n(16),i=n.n(l),d=Object(c.b)("fetchSpecificOrder/specificOrder",function(){var e=Object(o.a)(a.a.mark((function e(r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"Bearer ".concat(i.a.get("accessToken"))}},e.next=3,u.a.get("/api/v1/order/fetch-a-specific-order/".concat(r),n);case 3:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),f=Object(c.c)({name:"specificOrders",initialState:{orderDetails:null,status:null,errorInfo:null},reducers:{fetchSpecificOrder:function(e,r){e.orderDetails=r.payload,e.status="success",e.errorInfo=null},fetchSpecificOrderError:function(e,r){e.orderDetails=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(d.pending,(function(e,r){e.orderDetails=null,e.status="loading",e.errorInfo=null})),e.addCase(d.fulfilled,(function(e,r){e.orderDetails=null,e.status="loading",e.errorInfo=null})),e.addCase(d.rejected,(function(e,r){e.myOrders=null,e.status="failed",e.errorInfo=r.payload}))}}),p=f.actions,j=f.reducer,O=p.fetchSpecificOrder;p.fetchSpecificOrderError;r.a=j},82:function(e,r,n){"use strict";n.d(r,"c",(function(){return d})),n.d(r,"b",(function(){return O}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=n(16),i=n.n(l),d=Object(c.b)("allOrders/fetchAllOrders",Object(o.a)(a.a.mark((function e(){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:"Bearer ".concat(i.a.get("accessToken"))}},e.next=3,u.a.get("/api/v1/order/fetch-all-orders",r);case 3:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 5:case"end":return e.stop()}}),e)})))),f=Object(c.c)({name:"allOrders",initialState:{allOrders:null,status:null,errorInfo:null},reducers:{fetchAllOrders:function(e,r){e.allOrders=r.payload,e.status="success",e.errorInfo=null},fetchAllOrdersError:function(e,r){e.allOrders=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(d.pending,(function(e,r){e.allOrders=null,e.status="loading",e.errorInfo=null})),e.addCase(d.fulfilled,(function(e,r){e.allOrders=null,e.status="loading",e.errorInfo=null})),e.addCase(d.rejected,(function(e,r){e.allOrders=null,e.status="failed",e.errorInfo=r.payload}))}}),p=f.actions,j=f.reducer,O=p.fetchAllOrders;p.fetchAllOrdersError;r.a=j},83:function(e,r,n){"use strict";n.d(r,"d",(function(){return d})),n.d(r,"b",(function(){return O})),n.d(r,"c",(function(){return h}));var t=n(7),a=n.n(t),o=n(10),c=n(5),s=n(11),u=n.n(s),l=n(16),i=n.n(l),d=Object(c.b)("deliverOrder/deliverOrder",function(){var e=Object(o.a)(a.a.mark((function e(r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"Bearer ".concat(i.a.get("accessToken"))}},e.next=3,u.a.put("/api/v1/order/delivered/".concat(r),r,n);case 3:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),f=Object(c.c)({name:"deliverOrder",initialState:{deliveredOrder:null,status:null,errorInfo:null},reducers:{deliverOrder:function(e,r){e.deliveredOrder=r.payload,e.status="success",e.errorInfo=null},deliverOrderError:function(e,r){e.deliveredOrder=null,e.status="failed",e.errorInfo=r.payload}},extraReducers:function(e){e.addCase(d.pending,(function(e,r){e.deliveredOrder=null,e.status="loading",e.errorInfo=null})),e.addCase(d.fulfilled,(function(e,r){e.deliveredOrder=null,e.status="loading",e.errorInfo=null})),e.addCase(d.rejected,(function(e,r){e.deliveredOrder=null,e.status="failed",e.errorInfo=r.payload}))}}),p=f.actions,j=f.reducer,O=p.deliverOrder,h=p.deliverOrderError;r.a=j}},[[123,1,2]]]);
//# sourceMappingURL=main.de51c325.chunk.js.map