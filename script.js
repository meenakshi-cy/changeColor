let  index=0;
function changeColors(){
    const r=[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"],
    g=[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"],
    b=[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"];
    let randomR1=Math.floor(Math.random()*r.length),
    randomR2=Math.floor(Math.random()*r.length),
    randomG1=Math.floor(Math.random()*r.length),
    randomG2=Math.floor(Math.random()*r.length),
    randomB1=Math.floor(Math.random()*r.length),
    randomB2=Math.floor(Math.random()*r.length);
    console.log("#"+r[randomR1]+r[randomR2]+g[randomG1]+g[randomG2]+b[randomB1]+b[randomB2]);
    document.getElementsByTagName("body")[0].style.backgroundColor="#"+r[randomR1]+r[randomR2]+g[randomG1]+g[randomG2]+b[randomB1]+b[randomB2];
    document.getElementsByTagName("span")[0].innerHTML="#"+r[randomR1]+r[randomR2]+g[randomG1]+g[randomG2]+b[randomB1]+b[randomB2];
}
changeColors();