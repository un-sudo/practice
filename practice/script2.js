const distortion = document.getElementById("distortion");
const svg = document.getElementById("textSVG");
const btn = document.getElementById("btn");
if (!distortion) {
    console.error("🔥 distortion要素が見つからない！");
  }

let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    paused: true,
  });
  
  tl.to(distortion, {
    duration: 1,
    attr: { scale: 60 },
    ease: "power2.out"
  })
  .to(distortion, {
    duration: 1,
    attr: { scale: 40 },
    ease: "power2.out"
  });
  btn.addEventListener("click",function(){
    svg.style.display = "block";
    tl.restart();

  })
 