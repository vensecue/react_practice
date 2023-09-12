(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,a,c){},14:function(e,a,c){"use strict";c.r(a);c(1);var t=c(4),s=c.n(t),r=(c(9),c(10),c(3)),d=(c(11),c(12),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),i=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],n=c(0),l=([{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=i.find((function(a){return a.id===e.categoryId})),c=d.find((function(e){return e.id===a.ownerId}));return Object(r.a)(Object(r.a)({},e),{},{category:a,user:c})})),function(){return Object(n.jsx)("div",{className:"section",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"title",children:"Product Categories"}),Object(n.jsx)("div",{className:"block",children:Object(n.jsxs)("nav",{className:"panel",children:[Object(n.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(n.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(n.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",children:"All"}),Object(n.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 1"}),Object(n.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:"is-active",children:"User 2"}),Object(n.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 3"})]}),Object(n.jsx)("div",{className:"panel-block",children:Object(n.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(n.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:"qwe"}),Object(n.jsx)("span",{className:"icon is-left",children:Object(n.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(n.jsx)("span",{className:"icon is-right",children:Object(n.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(n.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(n.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(n.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(n.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(n.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(n.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(n.jsx)("div",{className:"panel-block",children:Object(n.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(n.jsxs)("div",{className:"box table-container",children:[Object(n.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(n.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:Object(n.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(n.jsx)("a",{href:"#/",children:Object(n.jsx)("span",{className:"icon",children:Object(n.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(n.jsx)("th",{children:Object(n.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(n.jsx)("a",{href:"#/",children:Object(n.jsx)("span",{className:"icon",children:Object(n.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(n.jsx)("th",{children:Object(n.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(n.jsx)("a",{href:"#/",children:Object(n.jsx)("span",{className:"icon",children:Object(n.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(n.jsx)("th",{children:Object(n.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(n.jsx)("a",{href:"#/",children:Object(n.jsx)("span",{className:"icon",children:Object(n.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{"data-cy":"Product",children:[Object(n.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:"1"}),Object(n.jsx)("td",{"data-cy":"ProductName",children:"Milk"}),Object(n.jsx)("td",{"data-cy":"ProductCategory",children:"\ud83c\udf7a - Drinks"}),Object(n.jsx)("td",{"data-cy":"ProductUser",className:"has-text-link",children:"Max"})]}),Object(n.jsxs)("tr",{"data-cy":"Product",children:[Object(n.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:"2"}),Object(n.jsx)("td",{"data-cy":"ProductName",children:"Bread"}),Object(n.jsx)("td",{"data-cy":"ProductCategory",children:"\ud83c\udf5e - Grocery"}),Object(n.jsx)("td",{"data-cy":"ProductUser",className:"has-text-danger",children:"Anna"})]}),Object(n.jsxs)("tr",{"data-cy":"Product",children:[Object(n.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:"3"}),Object(n.jsx)("td",{"data-cy":"ProductName",children:"iPhone"}),Object(n.jsx)("td",{"data-cy":"ProductCategory",children:"\ud83d\udcbb - Electronics"}),Object(n.jsx)("td",{"data-cy":"ProductUser",className:"has-text-link",children:"Roma"})]})]})]})]})]})})});s.a.render(Object(n.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a6bd9b7a.chunk.js.map