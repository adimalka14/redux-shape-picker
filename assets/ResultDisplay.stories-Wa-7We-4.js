import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DatCARk7.js";import{u as m,b as Y,d as k,e as z}from"./colorSlice-5fW_o5q5.js";import{S as I}from"./ShapeSvg-5HM91Ioo.js";import"./index-DaYaSSX1.js";const O="_resultDisplay_18wrw_1",$={resultDisplay:O},A=e=>e.color.value,B=e=>e.shape.value;function d(){const e=m(A),p=m(B);return i.jsx("div",{className:`${$.resultDisplay}`,style:p?void 0:{backgroundColor:e},children:i.jsx(I,{shape:p,color:e,size:150})})}d.__docgenInfo={description:"",methods:[],displayName:"ResultDisplay"};const M={title:"Components/ResultDisplay",component:d,argTypes:{shape:{control:"select",options:["circle","square","triangle",null]},color:{control:"color"}}},s=e=>{const p=({shape:u,color:h})=>{const l=Y();return console.log("render",u,h),f.useEffect(()=>{l(k(u))},[u,l]),f.useEffect(()=>{l(z(h))},[h,l]),i.jsx(d,{})};return i.jsx(p,{...e})},r=s.bind({});r.args={shape:"circle",color:"#3b82f6"};const o=s.bind({});o.args={shape:null,color:"#facc15"};const a=s.bind({});a.args={shape:"triangle",color:void 0};const n=s.bind({});n.args={shape:"circle",color:"#05ca1e"};const t=s.bind({});t.args={shape:"square",color:"#facc15"};const c=s.bind({});c.args={shape:"triangle",color:"#ef4444"};var g,D,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const Wrapper = ({
    shape,
    color
  }) => {
    const dispatch = useDispatch();
    console.log('render', shape, color);
    useEffect(() => {
      dispatch(setShape(shape));
    }, [shape, dispatch]);
    useEffect(() => {
      dispatch(setColor(color));
    }, [color, dispatch]);
    return <ResultDisplay />;
  };
  return <Wrapper {...args} />;
}`,...(S=(D=r.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var y,E,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const Wrapper = ({
    shape,
    color
  }) => {
    const dispatch = useDispatch();
    console.log('render', shape, color);
    useEffect(() => {
      dispatch(setShape(shape));
    }, [shape, dispatch]);
    useEffect(() => {
      dispatch(setColor(color));
    }, [color, dispatch]);
    return <ResultDisplay />;
  };
  return <Wrapper {...args} />;
}`,...(C=(E=o.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var R,W,b;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const Wrapper = ({
    shape,
    color
  }) => {
    const dispatch = useDispatch();
    console.log('render', shape, color);
    useEffect(() => {
      dispatch(setShape(shape));
    }, [shape, dispatch]);
    useEffect(() => {
      dispatch(setColor(color));
    }, [color, dispatch]);
    return <ResultDisplay />;
  };
  return <Wrapper {...args} />;
}`,...(b=(W=a.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var x,_,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const Wrapper = ({
    shape,
    color
  }) => {
    const dispatch = useDispatch();
    console.log('render', shape, color);
    useEffect(() => {
      dispatch(setShape(shape));
    }, [shape, dispatch]);
    useEffect(() => {
      dispatch(setColor(color));
    }, [color, dispatch]);
    return <ResultDisplay />;
  };
  return <Wrapper {...args} />;
}`,...(j=(_=n.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var v,N,q;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const Wrapper = ({
    shape,
    color
  }) => {
    const dispatch = useDispatch();
    console.log('render', shape, color);
    useEffect(() => {
      dispatch(setShape(shape));
    }, [shape, dispatch]);
    useEffect(() => {
      dispatch(setColor(color));
    }, [color, dispatch]);
    return <ResultDisplay />;
  };
  return <Wrapper {...args} />;
}`,...(q=(N=t.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var w,T,G;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const Wrapper = ({
    shape,
    color
  }) => {
    const dispatch = useDispatch();
    console.log('render', shape, color);
    useEffect(() => {
      dispatch(setShape(shape));
    }, [shape, dispatch]);
    useEffect(() => {
      dispatch(setColor(color));
    }, [color, dispatch]);
    return <ResultDisplay />;
  };
  return <Wrapper {...args} />;
}`,...(G=(T=c.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};const P=["Default","NoShape","NoColor","CircleGreen","SquareYellow","TriangleRed"];export{n as CircleGreen,r as Default,a as NoColor,o as NoShape,t as SquareYellow,c as TriangleRed,P as __namedExportsOrder,M as default};
