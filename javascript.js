// let myfun = () => {
//     alert("completed");
// }
// // gsap.to("#box1",{
// //     x:300,
// //     delay:1,
// //     duration:1,
// //     rotation:360,
// //     // yoyo:true,
// //     ease:"bounce.out",
// // })
// let tl = gsap.timeline({repeat:2,yoyo:true})
// tl.to("#box1", {
//     x: 300,
//     duration: 2,
// })
// tl.to("#box2", {
//     x: 300,
//     duration: 1,
// })
// tl.to("#box3", {
//     x: 300,
//     duration: 1,
// })
// document.getElementById("play").onclick = ()=> tween.play();
// document.getElementById("pause").onclick = ()=> tween.pause();
document.getElementById("play").onclick =()=>{
    gsap.registerPlugin(TextPlugin)
gsap.to("#h1", {
    duration:2,
    color:'red',
    delay:1,
    text:"poda polayadimone"
})
}

