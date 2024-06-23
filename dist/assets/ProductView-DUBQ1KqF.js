import{j as e,L as d,r as m,C as h,a as p,R as g,g as v,I as N,A as y,b as k,c as w,u as I,d as _}from"./index-Be2k-E_a.js";const C=s=>{const{level0_category:t,level1_category:a,name:r}=s,c=t[0],n=a[0];return e.jsxs("div",{className:"text-xs flex flex-wrap text-black font-medium",children:[e.jsx("span",{className:"cursor-pointer hover:text-[#0c831f]",children:e.jsx(d,{to:"/",children:"Home"})}),e.jsx("span",{children:"  /  "}),e.jsx("span",{className:"cursor-pointer hover:text-[#0c831f]",children:e.jsx(d,{to:"/",children:c.name})}),n&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"  /  "}),e.jsx("span",{className:"cursor-pointer hover:text-[#0c831f]",children:e.jsx(d,{to:"/",children:n.name})})]}),e.jsx("span",{children:"  /  "}),e.jsx("span",{className:"_text-muted",children:r})]})},P={desktop:{breakpoint:{max:1920,min:1440},items:6},tablet:{breakpoint:{max:1440,min:1024},items:5},mobile:{breakpoint:{max:1024,min:0},items:1}},B=({images:s})=>{const[t,a]=m.useState(0);return e.jsxs("div",{className:"flex flex-col mb-6 lg:mb-0 lg:border-b border-gray-200",children:[e.jsx("div",{className:"hidden lg:flex justify-center",children:e.jsx("img",{src:s[t],className:"h-96 w-96 object-contain",alt:""})}),e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"relative mx-10",children:e.jsx("div",{className:"lg:w-80% mt-2.5 mb-8 mx-auto lg:h-76",children:e.jsx("div",{className:"flex-1 overflow-auto",children:e.jsx(h,{swipeable:!1,draggable:!1,responsive:P,arrows:!1,renderButtonGroupOutside:!0,customButtonGroup:e.jsx(p,{}),shouldResetAutoplay:!1,infinite:!1,renderDotsOutside:!0,dotListClass:"lg:hidden -bottom-4",showDots:!0,itemClass:"text-center",children:s==null?void 0:s.map((r,c)=>e.jsx("div",{className:`w-96 h-96 lg:h-16 lg:w-16 mx-auto rounded-lg cursor-pointer ${t===c?"border-green-600 border":"border-gray-200"} overflow-hidden`,onClick:()=>a(c),children:e.jsx("img",{src:r,alt:"",className:"h-full w-full object-contain"})},c))})})})})})]})},u=(s=[])=>{const t=[];Object.values(s).forEach(r=>t.push(...r.attributes));const a=t.findIndex(r=>r.title==="Disclaimer");return a>-1&&t.push(t.splice(a,1)[0]),e.jsx("div",{className:"py-4",children:e.jsx("dl",{children:t.map((r,c)=>e.jsxs(g.Fragment,{children:[e.jsx("dt",{className:"text-sm font-extrabold text-black mb-2",children:r.title}),e.jsx("dd",{className:"text-sm mb-4 text-gray-700",children:r.value})]},c))})})},S={lgdesktop:{breakpoint:{max:1920,min:1440},items:4},desktop:{breakpoint:{max:1440,min:992},items:3},tablet:{breakpoint:{max:992,min:600},items:3},mobile:{breakpoint:{max:600,min:0},items:2}},A=({data:s,onSelect:t})=>e.jsxs("div",{onClick:t,className:`rounded-lg max-w-[150px] border overflow-hidden leading-none ${s.selected?"border-[#b1dc9c]":"_border-muted"} ${s.out_of_stock?"bg-gray-50 pointer-events-none":"bg-white cursor-pointer"}`,children:[e.jsxs("div",{className:"py-2 px-3 flex items-center",children:[e.jsx("div",{className:"w-8 pl-1",children:e.jsx("input",{type:"radio",checked:s.selected,readOnly:!0})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-[15px]",children:s.unit}),s.out_of_stock?e.jsx("span",{className:"text-[10px] text-red-500",children:"Out of stock"}):e.jsxs("span",{className:"text-xs",children:["₹",s.price,e.jsxs("del",{className:"ml-1 opacity-80",children:["₹",s.mrp]})]})]})]}),s.selected&&s.offer&&e.jsx("div",{className:"text-[11px] text-center font-bold bg-[#ecffec] border-t border-[#b1dc9c] text-[#54b226] py-2 px-3",children:s.offer})]}),F=({data:s,onSelect:t})=>{const a=s.map(l=>{const{product_id:i,price:o,mrp:x,unit:j,offer:f,inventory:b}=l;return{product_id:i,price:o,mrp:x,unit:j,offer:f,out_of_stock:b===0}}),[r,c]=m.useState(0),n=l=>{c(l),t(l)};return e.jsx("div",{className:"h-full flex items-center",children:e.jsx("div",{className:"relative w-full flex-1 max-w-[400px] md:max-w-[500px] mx-4 lg:-ml-2",children:e.jsx(h,{swipeable:!1,draggable:!1,responsive:S,arrows:!1,renderButtonGroupOutside:!0,customButtonGroup:e.jsx(p,{}),shouldResetAutoplay:!1,infinite:!1,itemClass:"mx-2",children:a.map((l,i)=>e.jsx(A,{data:{...l,selected:r===i},onSelect:()=>n(i)},`var-${i}`))})})})},G=s=>{const{product:t,varients:a}=s,r=[t,...a],[c,n]=m.useState(0),l=r[c],i=v(l);return e.jsxs("div",{className:"relative grid lg:grid-cols-2 lg:border-b border-gray-200 -mt-2",children:[e.jsxs("div",{className:"lg:border-r border-gray-200",children:[e.jsx(B,{images:l.sliding_images}),e.jsxs("div",{className:"hidden lg:block px-4 lg:px-0 pt-8",children:[e.jsx("h4",{className:"text-2xl font-bold text-gray-800",children:"Product Details"}),e.jsx(u,{...l.attribute_collection})]})]}),e.jsx("div",{className:"static lg:block",children:e.jsx("div",{className:"relative top-0 lg:sticky lg:top-20",children:e.jsxs("div",{className:"px-4 lg:pl-12 lg:pt-8",children:[e.jsx(C,{...l}),e.jsx("h1",{className:"text-4xl leading-tight py-3",children:l.name}),e.jsxs(d,{to:"/",className:"text-green-700 font-semibold text-lg flex items-center",children:[l.brand," ",e.jsx(N,{size:14,className:"ml-1"})]}),e.jsx("div",{className:"mt-4 mb-6",children:e.jsx(F,{data:r,onSelect:o=>n(o)})}),e.jsx("div",{className:"my-4 h-12 w-32",children:e.jsx(y,{size:"lg",product:i})}),e.jsxs("div",{className:"lg:hidden mt-8",children:[e.jsx("h4",{className:"text-2xl font-medium text-gray-600",children:"Product Details"}),e.jsx(u,{...l.attribute_collection})]}),e.jsxs("div",{className:"pb-4 hidden lg:block",children:[e.jsx("h4",{className:"font-bold text-gray-800 text-base py-3",children:"Why shop from BlinkIt?"}),k.map((o,x)=>e.jsxs("div",{className:"flex items-center gap-3 py-1",children:[e.jsx("div",{children:e.jsx("img",{className:"w-12 h-12",src:o.imgSrc,alt:""})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h5",{className:"text-black text-sm",children:o.text}),e.jsx("p",{className:"text-xs text-gray-500",children:o.description})]})]},x))]})]})})})]})},D=({title:s,products:t})=>e.jsxs("section",{className:"mt-2",children:[e.jsx("div",{className:"flex items-center justify-between h-16",children:e.jsx("h2",{className:"font-semibold text-[24px] _text-default px-4 lg:px-0",children:s})}),e.jsx(w,{topItems:t})]}),L=()=>e.jsx("div",{className:"_container flex md:justify-center pt-12 px-4 h-[80vh]",children:e.jsxs("div",{className:"flex gap-20 h-full items-center",children:[e.jsx("div",{className:"hidden md:block",children:e.jsx("img",{src:"/img404.webp",alt:"",className:"h-72"})}),e.jsxs("div",{className:"flex flex-col justify-center max-w-lg",children:[e.jsx("h2",{className:"font-bold text-3xl mt-6 md:mt-0",children:"Sorry!"}),e.jsx("p",{className:"mt-3 mb-4 leading-snug font-medium text-lg _text-default",children:"For demo BlinkIt uses partial (sample) data from BlinkIt. So details for all the products are not available."}),e.jsx("span",{className:"text-[13px] _text-muted",children:"You can try following items to check."}),e.jsxs("p",{className:"leading-tight my-3",children:[e.jsx("small",{className:"text-[#0c831f] cursor-pointer",children:e.jsx(d,{to:"/",children:"Go to Home"})}),e.jsx("br",{}),e.jsx("small",{className:"text-[#0c831f] cursor-pointer",children:"Learn about BlinkIt"})]})]})]})}),R=()=>{let{id:s}=I();const t=_(s);if(!t)return window.scrollTo(0,0),e.jsx(L,{});const a=t.product_data,r={product:a.data.product,varients:a.data.variants_info},c=a.objects.map(n=>{const{products:l,title:i}=n.data;return{products:l,title:i}});return e.jsxs("div",{className:"_container",children:[e.jsx(G,{...r}),c.map((n,l)=>e.jsx(D,{...n},l))]})};export{R as default};