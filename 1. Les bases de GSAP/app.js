// // GreenSock
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

// // Apparition au chargement
// // gsap.from(img1, {duration: 2, opacity: 0})

// // gsap.to('.container-images img',  
// //     {y: 100, scale: 2, duration: 2, ease: "power1", stagger:{
// //         each:1,
// //         from: "center" // Démarre depuis le milieu
// //         //amount:1
    
// //     }})

// // // Animation au clic
// // btnCatFade.addEventListener('click', () => {

// //     // gsap.fromTo( img1,      // état de départ
// //     // { opacity: 0, duration: 2 } // état d'arrivée
// //     // ); 
// //     // gsap.fromTo(img1, { opacity: 0 }, 
// //     // { opacity: 1, duration: 2, delay: 2, repeat: 1, repeatDelay: 2})


// // gsap.to('.btn', {duration: 0.2, x: 50, stagger: 0.1})
// // gsap.to('.btn', {duration: 0.2, x: "random(-100,100,10)", stagger: 0.1})

// // ======================== keyframes =====================================

// // gsap.to('.container-images img:nth-child(2)', {
// //     keyframes: [
// //         {duration: 0.3, y:100},
// //         {duration: 0.3, scale:1.3},
// //         {duration: 0.3, y:200}
// //     ]
// // })

// // })

// // ========================== fonctions de callback ========================

// // gsap.to('.container-images img:nth-child(2)', {
// //     y:100,
// //     repeat: 1,
// //     onComplete: () => console.log("Terminées"),
// //     onStart: () => console.log("ça démarre"),
// //     onUpdate: () => console.log("ça continue"),
// //     onRepeat: () => console.log("ça se répète"),
// // })

// // ========================= Enregistrer des tweens ========================

// // gsap.registerEffect({
// //     name: "imgCrazy",
// //     defaults: {
// //         duration: 2
// //     },
// //     effect: (targets, config) => { return gsap.to(targets, {
// //             duration: config.duration,
// //             y: 200,
// //             scale: 1.4,
// //             rotation: 360
// //         });
// //     }
// // });

// // // Utilisation de l’effet
// // gsap.effects.imgCrazy(img1);
// // gsap.effects.imgCrazy('.container-images img:nth-child(2)');

// // ========================= La méthode set ========================

// // mettre en place des propriétés pour des éléments

// // gsap.set(img1, {
// //     opacity: 0
// // })

// // const anim = gsap.to(img1, {
// //     y: 250,
// //     yoyo:true,
// //     repeat: 1
// // })

// // // gsap.to(img1, {
// // //     y: 250,
// // //     yoyo:true,
// // //     repeat: 1
// // // })

// // anim.duration(4)

// // // =========================================================================

// // // avec setTimeout

// // setTimeout(() => {
// //     anim.restart()
// // }, 3000);

// // // ========================== Les timeslines =============================


//         // .to(img1, {autoAlpha: 1, y: 0, duration: 1})
//         // .to(img2, {autoAlpha: 1, y: 0, duration: 1},'-=0.75')
//         // .to(img3, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75') // 0) positionnement absolu //  '-=0.75' relatif
//         // .to(title, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75')
//         // .to(txt, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75')

//         // .to(img1, {autoAlpha: 1, y: 0, duration: 1})
//         // .to(img2, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75')    // '<0.5' on peut metttre > 
//         // .to(img3, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75') // 0) positionnement absolu //  '-=0.75' relatif
//         // .to(title, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75')
//         // .to(txt, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75')

//         //  A rajouter coté css
//         //   opacity: 0;
//         //   visibility: hidden;
//         //   transform: translateY(-30px);

//         // .from(img1, {opacity: 0, y: -50})
//         // .from(img2, {opacity: 0, y: -50})
//         // .from(img3, {opacity: 0, y: -50})
//         // .from(title, {opacity: 0, y: -50})

//         // gsap.to(img1, {y: 110})
//         // gsap.to(img2, {y: 120, delay: 1})
//         // gsap.to(img3, {y: 130, delay: 2})

// // ======================================================================

// // mettre des animations par défaut

// // const btnCatFade = document.querySelector('.cat-fade')
// // const img1 = document.querySelector('.container-images img:nth-child(1)')
// // const img2 = document.querySelector('.container-images img:nth-child(2)')
// // const img3 = document.querySelector('.container-images img:nth-child(3)')
// // const title = document.querySelector('.title')
// // const txt = document.querySelector('.txt')

// // const timeLines = gsap.timeline({
// //         defaults: {
// //                 duration: 1,
// //                 ease: "elastic"
// //         },
// //         repeat: -1,
// //         repeatDelay: 2,
// //         yoyo: true
// //         // paused: true
// //         // onComplete: () => console.log("START"),
// // });

// // timeLines   
// //         .to(img1, {autoAlpha: 1, y: 0, duration: 1})
// //         .to(img2, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75')    
// //         .to(img3, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75') 
// //         .to(title, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75')
// //         .to(txt, {autoAlpha: 1, y: 0, duration: 1}, '-=0.75')

// // ======================================================================

// // Les fonctions add et addLabel

// const btnCatFade = document.querySelector('.cat-fade')
// const img1 = document.querySelector('.container-images img:nth-child(1)')
// const img2 = document.querySelector('.container-images img:nth-child(2)')
// const img3 = document.querySelector('.container-images img:nth-child(3)')
// const title = document.querySelector('.title')
// const txt = document.querySelector('.txt')

// const timeLines = gsap.timeline({
//     defaults: {
//         duration: 1,
//         ease: "power2"
//     },
//     paused: true
// });

// timeLines
//     .to(img1, {autoAlpha: 0.5, y: 0})
//     .to(img2, {autoAlpha: 0.5, y: 0})
//     .to(img3, {autoAlpha: 0.5, y: 0})
//     .to(title, {autoAlpha: 0.5, y: 0})
//     .add(() => {
//         console.log("Finish");
//     })
//     // .addLabel('endAnim', '-=0.75')
//     .to(txt, {autoAlpha: 1, y: 0})

// setTimeout(() => {
//     timeLines.play()    
// }, 1000)
