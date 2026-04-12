import{p as j}from"./chunk-WASTHULE-DKTRsgsh.js";import{p as q}from"./wardley-RL74JXVD-T2LBEBUU-B0R_Zudh.js";import{g as H,s as J,a as Y,b as tt,v as et,t as at,_ as s,l as w,c as it,I as rt,aO as st,aP as ot,aQ as M,aR as nt,e as lt,B as ct,aS as dt,K as pt}from"./md-BZCu4f_O.js";import"./chunk-MFRUYFWM-DT42W5SX.js";import"./index-BkYgo9zr.js";import"./modules/vue-D56oavJi.js";import"./modules/shiki-D09P15mL.js";import"./modules/file-saver-B7oFTzqn.js";import"./slidev/default-C27lyod1.js";import"./slidev/context-sPi3EO0y.js";var gt=pt.pie,C={sections:new Map,showData:!1},u=C.sections,D=C.showData,ht=structuredClone(gt),ut=s(()=>structuredClone(ht),"getConfig"),ft=s(()=>{u=new Map,D=C.showData,ct()},"clear"),mt=s(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(t)||(u.set(t,a),w.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),vt=s(()=>u,"getSections"),St=s(t=>{D=t},"setShowData"),xt=s(()=>D,"getShowData"),B={getConfig:ut,clear:ft,setDiagramTitle:at,getDiagramTitle:et,setAccTitle:tt,getAccTitle:Y,setAccDescription:J,getAccDescription:H,addSection:mt,getSections:vt,setShowData:St,getShowData:xt},wt=s((t,a)=>{j(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Ct={parse:s(async t=>{const a=await q("pie",t);w.debug(a),wt(a,B)},"parse")},Dt=s(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),$t=Dt,yt=s(t=>{const a=[...t.values()].reduce((r,n)=>r+n,0),$=[...t.entries()].map(([r,n])=>({label:r,value:n})).filter(r=>r.value/a*100>=1);return dt().value(r=>r.value).sort(null)($)},"createPieArcs"),Tt=s((t,a,$,y)=>{w.debug(`rendering pie chart
`+t);const r=y.db,n=it(),T=rt(r.getConfig(),n.pie),A=40,o=18,p=4,c=450,d=c,f=st(a),l=f.append("g");l.attr("transform","translate("+d/2+","+c/2+")");const{themeVariables:i}=n;let[_]=ot(i.pieOuterStrokeWidth);_??=2;const b=T.textPosition,g=Math.min(d,c)/2-A,G=M().innerRadius(0).outerRadius(g),L=M().innerRadius(g*b).outerRadius(g*b);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+_/2).attr("class","pieOuterCircle");const h=r.getSections(),O=yt(h),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(e=>{m+=e});const E=O.filter(e=>(e.data.value/m*100).toFixed(0)!=="0"),v=nt(P).domain([...h.keys()]);l.selectAll("mySlices").data(E).enter().append("path").attr("d",G).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),l.selectAll("mySlices").data(E).enter().append("text").text(e=>(e.data.value/m*100).toFixed(0)+"%").attr("transform",e=>"translate("+L.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const I=l.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...h.entries()].map(([e,x])=>({label:e,value:x})),S=l.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(e,x)=>{const F=o+p,V=F*k.length/2,X=12*o,Z=x*F-V;return"translate("+X+","+Z+")"});S.append("rect").attr("width",o).attr("height",o).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),S.append("text").attr("x",o+p).attr("y",o-p).text(e=>r.getShowData()?`${e.label} [${e.value}]`:e.label);const N=Math.max(...S.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),U=d+A+o+p+N,R=I.node()?.getBoundingClientRect().width??0,K=d/2-R/2,Q=d/2+R/2,W=Math.min(0,K),z=Math.max(U,Q)-W;f.attr("viewBox",`${W} 0 ${z} ${c}`),lt(f,c,z,T.useMaxWidth)},"draw"),At={draw:Tt},Lt={parser:Ct,db:B,renderer:At,styles:$t};export{Lt as diagram};
