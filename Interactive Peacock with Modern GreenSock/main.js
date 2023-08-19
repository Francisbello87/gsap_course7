let peacock = document.querySelector('.peacock')
gsap.set(peacock, {autoAlpha:1});

let transformOrigin =  '50% 100%'
gsap.set(".feather", {
    transformOrigin: transformOrigin,
  rotation: gsap.utils.distribute({ base: -90, amount: 180 }),
  zIndex:(i, target, targets) => {
    let half = Math.floor(targets.length/2)
    if(i < half) {
        return targets.length - i
    }else if (i == half) {
        return 200
    }
  }
});

let tl = gsap.timeline()
.from('.feather', {
    rotation:0,
    duration:2
})
.from('.feathers', {
    scale: 0.2,
    transformOrigin: transformOrigin
}, 0)

peacock.addEventListener('click', () => {
    tl.reversed(!tl.reversed())
})