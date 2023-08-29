window.addEventListener('scroll', e => {
    document.documentElement.style.setProrepty('--scrollTop', '${this.scrollY}px')
})

gsap.registerPlugin(scrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})