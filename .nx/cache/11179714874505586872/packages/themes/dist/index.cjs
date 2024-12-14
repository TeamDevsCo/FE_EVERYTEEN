"use strict";var b=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var r=(t,a)=>{for(var n in a)b(t,n,{get:a[n],enumerable:!0})},D=(t,a,n,c)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of E(a))!m.call(t,o)&&o!==n&&b(t,o,{get:()=>a[o],enumerable:!(c=s(a,o))||c.enumerable});return t};var A=t=>D(b({},"__esModule",{value:!0}),t);var f0={};r(f0,{classes:()=>f,vars:()=>h});module.exports=A(f0);var h={};r(h,{box:()=>x,colors:()=>F,typography:()=>e});var F={};r(F,{$scale:()=>l,$static:()=>g});var g={};r(g,{dark:()=>i,light:()=>p});var p={};r(p,{blackAlpha:()=>y,blue:()=>u,color:()=>B,cyan:()=>d,gray:()=>z,green:()=>k,orange:()=>S,pink:()=>L,purple:()=>$,red:()=>H,teal:()=>w,whiteAlpha:()=>C,yellow:()=>W});var B={black:"#000",white:"#fff"},C={50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},y={50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},z={50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},H={50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},S={50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},W={50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},k={50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},w={50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},u={50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},d={50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},$={50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},L={50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"};var i={};r(i,{blackAlpha:()=>G,blue:()=>P,color:()=>j,cyan:()=>Q,gray:()=>I,green:()=>N,orange:()=>K,pink:()=>T,purple:()=>R,red:()=>J,teal:()=>O,whiteAlpha:()=>q,yellow:()=>M});var j={black:"#000",white:"#fff"},q={900:"rgba(255, 255, 255, 0.04)",800:"rgba(255, 255, 255, 0.06)",700:"rgba(255, 255, 255, 0.08)",600:"rgba(255, 255, 255, 0.16)",500:"rgba(255, 255, 255, 0.24)",400:"rgba(255, 255, 255, 0.36)",300:"rgba(255, 255, 255, 0.48)",200:"rgba(255, 255, 255, 0.64)",100:"rgba(255, 255, 255, 0.80)",50:"rgba(255, 255, 255, 0.92)"},G={900:"rgba(0, 0, 0, 0.04)",800:"rgba(0, 0, 0, 0.06)",700:"rgba(0, 0, 0, 0.08)",600:"rgba(0, 0, 0, 0.16)",500:"rgba(0, 0, 0, 0.24)",400:"rgba(0, 0, 0, 0.36)",300:"rgba(0, 0, 0, 0.48)",200:"rgba(0, 0, 0, 0.64)",100:"rgba(0, 0, 0, 0.80)",50:"rgba(0, 0, 0, 0.92)"},I={900:"#F7FAFC",800:"#EDF2F7",700:"#E2E8F0",600:"#CBD5E0",500:"#A0AEC0",400:"#718096",300:"#4A5568",200:"#2D3748",100:"#1A202C",50:"#171923"},J={900:"#FFF5F5",800:"#FED7D7",700:"#FEB2B2",600:"#FC8181",500:"#F56565",400:"#E53E3E",300:"#C53030",200:"#9B2C2C",100:"#822727",50:"#63171B"},K={900:"#FFFAF0",800:"#FEEBC8",700:"#FBD38D",600:"#F6AD55",500:"#ED8936",400:"#DD6B20",300:"#C05621",200:"#9C4221",100:"#7B341E",50:"#652B19"},M={900:"#FFFFF0",800:"#FEFCBF",700:"#FAF089",600:"#F6E05E",500:"#ECC94B",400:"#D69E2E",300:"#B7791F",200:"#975A16",100:"#744210",50:"#5F370E"},N={900:"#F0FFF4",800:"#C6F6D5",700:"#9AE6B4",600:"#68D391",500:"#48BB78",400:"#38A169",300:"#2F855A",200:"#276749",100:"#22543D",50:"#1C4532"},O={900:"#E6FFFA",800:"#B2F5EA",700:"#81E6D9",600:"#4FD1C5",500:"#38B2AC",400:"#319795",300:"#2C7A7B",200:"#285E61",100:"#234E52",50:"#1D4044"},P={900:"#ebf8ff",800:"#bee3f8",700:"#90cdf4",600:"#63b3ed",500:"#4299e1",400:"#3182ce",300:"#2b6cb0",200:"#2c5282",100:"#2a4365",50:"#1A365D"},Q={900:"#EDFDFD",800:"#C4F1F9",700:"#9DECF9",600:"#76E4F7",500:"#0BC5EA",400:"#00B5D8",300:"#00A3C4",200:"#0987A0",100:"#086F83",50:"#065666"},R={900:"#FAF5FF",800:"#E9D8FD",700:"#D6BCFA",600:"#B794F4",500:"#9F7AEA",400:"#805AD5",300:"#6B46C1",200:"#553C9A",100:"#44337A",50:"#322659"},T={900:"#FFF5F7",800:"#FED7E2",700:"#FBB6CE",600:"#F687B3",500:"#ED64A6",400:"#D53F8C",300:"#B83280",200:"#97266D",100:"#702459",50:"#521B41"};var l={};r(l,{blackAlpha:()=>V,blue:()=>a0,cyan:()=>t0,gray:()=>X,green:()=>e0,orange:()=>Z,pink:()=>n0,purple:()=>o0,red:()=>Y,teal:()=>r0,whiteAlpha:()=>U,yellow:()=>_});var U={50:"var(--white-alpha-50)",100:"var(--white-alpha-100)",200:"var(--white-alpha-200)",300:"var(--white-alpha-300)",400:"var(--white-alpha-400)",500:"var(--white-alpha-500)",600:"var(--white-alpha-600)",700:"var(--white-alpha-700)",800:"var(--white-alpha-800)",900:"var(--white-alpha-900)"},V={50:"var(--black-alpha-50)",100:"var(--black-alpha-100)",200:"var(--black-alpha-200)",300:"var(--black-alpha-300)",400:"var(--black-alpha-400)",500:"var(--black-alpha-500)",600:"var(--black-alpha-600)",700:"var(--black-alpha-700)",800:"var(--black-alpha-800)",900:"var(--black-alpha-900)"},X={50:"var(--gray-50)",100:"var(--gray-100)",200:"var(--gray-200)",300:"var(--gray-300)",400:"var(--gray-400)",500:"var(--gray-500)",600:"var(--gray-600)",700:"var(--gray-700)",800:"var(--gray-800)",900:"var(--gray-900)"},Y={50:"var(--red-50)",100:"var(--red-100)",200:"var(--red-200)",300:"var(--red-300)",400:"var(--red-400)",500:"var(--red-500)",600:"var(--red-600)",700:"var(--red-700)",800:"var(--red-800)",900:"var(--red-900)"},Z={50:"var(--orange-50)",100:"var(--orange-100)",200:"var(--orange-200)",300:"var(--orange-300)",400:"var(--orange-400)",500:"var(--orange-500)",600:"var(--orange-600)",700:"var(--orange-700)",800:"var(--orange-800)",900:"var(--orange-900)"},_={50:"var(--yellow-50)",100:"var(--yellow-100)",200:"var(--yellow-200)",300:"var(--yellow-300)",400:"var(--yellow-400)",500:"var(--yellow-500)",600:"var(--yellow-600)",700:"var(--yellow-700)",800:"var(--yellow-800)",900:"var(--yellow-900)"},e0={50:"var(--green-50)",100:"var(--green-100)",200:"var(--green-200)",300:"var(--green-300)",400:"var(--green-400)",500:"var(--green-500)",600:"var(--green-600)",700:"var(--green-700)",800:"var(--green-800)",900:"var(--green-900)"},r0={50:"var(--teal-50)",100:"var(--teal-100)",200:"var(--teal-200)",300:"var(--teal-300)",400:"var(--teal-400)",500:"var(--teal-500)",600:"var(--teal-600)",700:"var(--teal-700)",800:"var(--teal-800)",900:"var(--teal-900)"},a0={50:"var(--blue-50)",100:"var(--blue-100)",200:"var(--blue-200)",300:"var(--blue-300)",400:"var(--blue-400)",500:"var(--blue-500)",600:"var(--blue-600)",700:"var(--blue-700)",800:"var(--blue-800)",900:"var(--blue-900)"},t0={50:"var(--cyan-50)",100:"var(--cyan-100)",200:"var(--cyan-200)",300:"var(--cyan-300)",400:"var(--cyan-400)",500:"var(--cyan-500)",600:"var(--cyan-600)",700:"var(--cyan-700)",800:"var(--cyan-800)",900:"var(--cyan-900)"},o0={50:"var(--purple-50)",100:"var(--purple-100)",200:"var(--purple-200)",300:"var(--purple-300)",400:"var(--purple-400)",500:"var(--purple-500)",600:"var(--purple-600)",700:"var(--purple-700)",800:"var(--purple-800)",900:"var(--purple-900)"},n0={50:"var(--pink-50)",100:"var(--pink-100)",200:"var(--pink-200)",300:"var(--pink-300)",400:"var(--pink-400)",500:"var(--pink-500)",600:"var(--pink-600)",700:"var(--pink-700)",800:"var(--pink-800)",900:"var(--pink-900)"};var e={};r(e,{fontSize:()=>p0,fontWeight:()=>i0,lineHeight:()=>g0});var p0={72:"4.5rem",60:"3.75rem",48:"3rem",36:"2.25rem",30:"1.875rem",24:"1.5rem",20:"1.25rem",18:"1.125rem",16:"1rem",14:"0.875rem",12:"0.75rem"},i0={700:"700",600:"600",500:"500",400:"400"},g0={150:"150%",133:"133%",120:"120%",100:"100%"};var x={};r(x,{radii:()=>F0,shadows:()=>x0,spacing:()=>l0});var l0={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},F0={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},x0={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0px 1px 2px 0px rgba(0, 0, 0, 0.05)",base:"0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",md:"0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",lg:"0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",xl:"0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)","2xl":"0px 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset",darkLg:"0px 15px 40px 0px rgba(0, 0, 0, 0.40), 0px 5px 10px 0px rgba(0, 0, 0, 0.20), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)"};var f={};r(f,{typography:()=>v});var v={};r(v,{heading:()=>h0,text:()=>v0});var h0={"4xl":{fontSize:e.fontSize[60],fontWeight:e.fontWeight[700],lineHeight:e.lineHeight[100]},"3xl":{fontSize:e.fontSize[48],fontWeight:e.fontWeight[700],lineHeight:e.lineHeight[100]},"2xl":{fontSize:e.fontSize[36],fontWeight:e.fontWeight[700],lineHeight:e.lineHeight[120]},xl:{fontSize:e.fontSize[30],fontWeight:e.fontWeight[700],lineHeight:e.lineHeight[133]},lg:{fontSize:e.fontSize[24],fontWeight:e.fontWeight[700],lineHeight:e.lineHeight[133]},md:{fontSize:e.fontSize[20],fontWeight:e.fontWeight[700],lineHeight:e.lineHeight[120]},sm:{fontSize:e.fontSize[16],fontWeight:e.fontWeight[700],lineHeight:e.lineHeight[120]},xs:{fontSize:e.fontSize[14],fontWeight:e.fontWeight[700],lineHeight:e.lineHeight[120]}},v0={"6xl":{fontSize:e.fontSize[60],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},"5xl":{fontSize:e.fontSize[48],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},"4xl":{fontSize:e.fontSize[36],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},"3xl":{fontSize:e.fontSize[30],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},"2xl":{fontSize:e.fontSize[24],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},xl:{fontSize:e.fontSize[20],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},lg:{fontSize:e.fontSize[18],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},md:{fontSize:e.fontSize[16],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},sm:{fontSize:e.fontSize[14],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]},xs:{fontSize:e.fontSize[12],fontWeight:e.fontWeight[400],lineHeight:e.lineHeight[150]}};
//# sourceMappingURL=index.cjs.map