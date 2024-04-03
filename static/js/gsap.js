document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  gsap.timeline({
    scrollTrigger: {
      trigger: '.container',
      start: 'top top',
      end: '+=10000',
      scrub: 1,
      pin: true,
      pinSpacing: true,
      onUpdate: self => {
        // Update progress bar width
        let vh = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        gsap.set(".bar", {
          width:vh*self.progress
        });
      }
    }
  })
  .addLabel("form-1-animation")
    .from('.form-1', {
      opacity: 0,
      yPercent: 100,
      duration: 2,
    })
    .to('.form-1', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
  .addLabel("form-2-animation")
    .from('.form-2', {
      yPercent: 100,
      opacity: 0,
      duration: 2,
    })
    .to('.form-2', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
    .to(".form-1", {
      yPercent: -5,
      scale: 0.95,
      duration: 1,
      opacity: 0.8,
    }, '-=2.5')

  .addLabel("form-3-animation")

    .from('.form-3', {
      yPercent: 100,
      opacity: 0,
      duration: 2,
    })
    .to('.form-3', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
    .to('.form-2', {
      yPercent: -5,
      scale: 0.95,
      duration: 1,
      opacity: 0.8,
    }, '-=2.5')
    .to('.form-1', {
      yPercent: -10,
      scale: 0.9,
      duration: 1,
      opacity: 0.6,
    }, '-=2.0')

  .addLabel('form-4-animation')
    .from('.form-4', {
      yPercent: 100,
      opacity: 0,
      duration: 2,
    })
    .to('.form-4', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
    .to('.form-3', {
      yPercent: -5,
      scale: 0.95,
      duration: 1,
      opacity: 0.8,
    }, '-=2.5')
    .to('.form-2', {
      yPercent: -10,
      scale: 0.9,
      duration: 1,
      opacity: 0.6,
    }, '-=2.0')
    .to('.form-1', {
      yPercent: -15,
      scale: 0.85,
      duration: 1,
      opacity: 0.4,
    }, '-=2.3')
  .addLabel('form-5-animation')
    .from('.form-5', {
      yPercent: 100,
      opacity: 0,
      duration: 2,
    })
    .to('.form-5', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
    .to('.form-4', {
      yPercent: -5,
      scale: 0.95,
      duration: 1,
      opacity: 0.8,
    }, '-=2.5')
    .to('.form-3', {
      yPercent: -10,
      scale: 0.9,
      duration: 1,
      opacity: 0.6,
    }, '-=2.0')
    .to('.form-2', {
      yPercent: -15,
      scale: 0.85,
      duration: 1,
      opacity: 0.4,
    }, '-=2')
    .to('.form-1',{
      yPercent: -20,
      scale: 0.80,
      duration: 1,
      opacity: 0.2,
    }, '-=1.5')



  .addLabel('form-6-animation')
    .from('.form-6', {
      yPercent: 100,
      opacity: 0,
      duration: 2,
    })
    .to('.form-6', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
    .to('.form-5', {
      yPercent: -5,
      scale: 0.95,
      duration: 1,
      opacity: 0.8,
    }, '-=2.5')
    .to('.form-4', {
      yPercent: -10,
      scale: 0.9,
      duration: 1,
      opacity: 0.6,
    }, '-=2.0')
    .to('.form-3', {
      yPercent: -15,
      scale: 0.85,
      duration: 1,
      opacity: 0.4,
    }, '-=2')
    .to('.form-2',{
      yPercent: -20,
      scale: 0.80,
      duration: 1,
      opacity: 0.2,
    }, '-=1.5')
    .to('.form-1',{
      yPercent: -25,
      scale: 0.75,
      duration: 1,
      opacity: 0,
    }, '-=1')


  .addLabel('form-7-animation')
    .from('.form-7', {
      yPercent: 100,
      opacity: 0,
      duration: 2,
    })
    .to('.form-7', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
    .to('.form-6', {
      yPercent: -5,
      scale: 0.95,
      duration: 1,
      opacity: 0.8,
    }, '-=2.5')
    .to('.form-5', {
      yPercent: -10,
      scale: 0.9,
      duration: 1,
      opacity: 0.6,
    }, '-=2.0')
    .to('.form-4', {
      yPercent: -15,
      scale: 0.85,
      duration: 1,
      opacity: 0.4,
    }, '-=2')
    .to('.form-3',{
      yPercent: -20,
      scale: 0.80,
      duration: 1,
      opacity: 0.2,
    }, '-=1.5')
    .to('.form-2',{
      yPercent: -25,
      scale: 0.75,
      duration: 1,
      opacity: 0,
    }, '-=1')


  .addLabel('form-8-animation')
    .from('.form-8', {
      yPercent: 100,
      opacity: 0,
      duration: 2,
    })
    .to('.form-8', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
    .to('.form-7', {
      yPercent: -5,
      scale: 0.95,
      duration: 1,
      opacity: 0.8,
    }, '-=2.5')
    .to('.form-6', {
      yPercent: -10,
      scale: 0.9,
      duration: 1,
      opacity: 0.6,
    }, '-=2.0')
    .to('.form-5', {
      yPercent: -15,
      scale: 0.85,
      duration: 1,
      opacity: 0.4,
    }, '-=2')
    .to('.form-4',{
      yPercent: -20,
      scale: 0.80,
      duration: 1,
      opacity: 0.2,
    }, '-=1.5')
    .to('.form-3',{
      yPercent: -25,
      scale: 0.75,
      duration: 1,
      opacity: 0,
    }, '-=1')

  .addLabel('form-9-animation')
    .from('.form-9', {
      yPercent: 100,
      opacity: 0,
      duration: 2,
    })
    .to('.form-9', {
      yPercent: 0,
      opacity: 1,
      duration: 2,
    })
    .to('.form-8', {
      yPercent: -5,
      scale: 0.95,
      duration: 1,
      opacity: 0.8,
    }, '-=2.5')
    .to('.form-7', {
      yPercent: -10,
      scale: 0.9,
      duration: 1,
      opacity: 0.6,
    }, '-=2.0')
    .to('.form-6', {
      yPercent: -15,
      scale: 0.85,
      duration: 1,
      opacity: 0.4,
    }, '-=2')
    .to('.form-5',{
      yPercent: -20,
      scale: 0.80,
      duration: 1,
      opacity: 0.2,
    }, '-=1.5')
    .to('.form-4',{
      yPercent: -25,
      scale: 0.75,
      duration: 1,
      opacity: 0,
    }, '-=1')
 });