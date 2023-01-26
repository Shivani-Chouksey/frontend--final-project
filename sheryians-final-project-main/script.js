function timelineone(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroll:"#body",
            trigger:"#home",
            markers:true,
            start:"top top",
            scrub:true,
            pin:true,
            end: "+=" + (window.innerHeight * 9)
        },
    })
    tl.to("#mid",{
        left:"50%",
        ease:Power1,
    })
    tl.to("#mid span",{
        opacity:0,
        delay:-.1,
        ease:Power1,
    },"same")
    tl.to("#circle",{
        scale:.1,
        ease:Power1,
    },"same")
    tl.to("#one",{
        rotate:"-180",
        delay:.001,
        ease:Power1,
    },"same")
    tl.to("#two",{
        rotate:"-120deg",
        ease:Power1,
        delay:.01
    },"same")
    tl.to("#three",{
        rotate:"-70deg",
        ease:Power1,
        delay:.02
    },"same")
    tl.to("#gallery",{
        y:250,
        ease:Power1,
    },"same")
    tl.to("#purple",{
        top:"50%",
        delay:-.1,
        ease:Power1,
    },"same")
    tl.to("#midimage",{
        scale:0,
        ease:Power1,
        delay:.1
    },"same")
    tl.to("#pinkflare",{
        top:"70%",
        delay:.2,
        rotate:"0deg",
        ease:Power1,
    },"same")
    // tl.to("#circle",{
    //     scale:.1,
    //     ease:Power1,
    // },"same")
    tl.to("#purple",{
        opacity:0,
        delay:.5,
        ease:Power1,
    },"same")
    tl.to("#smcircle",{
        scale:.4,
        ease:Power1,
        delay:.1
    },"same")
    tl.to("#circle",{
        scale:0,
        ease:Power1,
    },"samesame")
    
    tl.to("#smcircle",{
        scale:0,
        ease:Power1,
    },"samesame")
    tl.to("#pinkbox",{
        bottom:"30%",
        ease:Power1,
    },"samesame")
    tl.to("#pinkbox",{
        bottom:"110%",
        ease:Power1,
        delay:.1
    })
}


function timelinetwo(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            scroll:"#main",
            trigger:"#seconds",
            markers:true,
            start:"top top",
            scrub:true,
            pin:true,
            end: "+=" + (window.innerHeight * 4)
        },
    })
    tl2.to("#pibox",{
        top:"50%",
        scale:1,
        ease:Power1,
    },"a")
    tl2.to("#pubox",{
        top:"50%",
        scale:1,
        ease:Power1,
        delay:.1,
    },"a")
    tl2.to(".cir",{
        left:"50%",
        ease:Power1,
    })
    tl2.to(".cir",{
        scale:.6,
        ease:Power1,
    })
    tl2.to(".cir",{
        scale:6.2,
        ease:Power1,
    })
    tl2.to("#ones",{
        y:-70,
        ease:Power1,
    })
    tl2.to("#twos",{
        y:-50,
        ease:Power1,
    })
    
    tl2.to("#toptop",{
        borderBottom:"none",
        ease:Power1,
    })
    
    tl2.to("#gradient",{
        left:"-190%",
        ease:Power1,
        duration:8
    },"b")
    tl2.to("#wistful",{
        opacity:0,
        delay:2.5,
    
    },"b")
    tl2.to("#magenta",{
        opacity:1,
        delay:3,
        // stagger:3
    
    },"b")
    tl2.to("#twos",{
        y:-140,
        ease:Power1,
        delay:3.4
    },"b")
    tl2.to("#threes",{
        y:-120,
        delay:3.4,
        ease:Power1,
    },"b")
    
    
    tl2.to("#pibox",{
        background: "linear-gradient(to right,#d49dad,#B4AAD5)",
        ease:Power1,
        delay:-.1
        // stagger:3
    },"b")
    tl2.to(".rectangles",{
        top:"0%",
        ease:Power1,
        stagger:true,
        delay:-.1
    },"c")
    tl2.to(".boxes",{
        height:"100%",
        // y:-400,
        ease:Power1,
        stagger: .1,
        delay:-.1
    
    },"c")
    tl2.to(".oneone",{
    x:-60,
    ease:Power1
    },"d")
    tl2.to(".onetwo",{
    x:-60,
    ease:Power1
    })
}

timelineone();
timelinetwo();
// gsap.to("#smcone",{
//     rigth:"8%",
//     duration:2,
    
// })
document.querySelector("#side-circle-one").addEventListener("mouseover",function(){
    document.querySelector("#after-second").style.backgroundColor ="#723c4b";
})
document.querySelector("#side-circle-one").addEventListener("mouseleave",function(){
    document.querySelector("#after-second").style.backgroundColor ="white";
})
document.querySelector("#side-circle-two").addEventListener("mouseover",function(){
    document.querySelector("#after-second").style.backgroundColor ="lightblue";
})
document.querySelector("#side-circle-two").addEventListener("mouseleave",function(){
    document.querySelector("#after-second").style.backgroundColor ="white";
})
document.querySelector(".down-circle").addEventListener("mouseover",function(){
    document.querySelector("#after-second").style.backgroundColor ="rgba(119, 136, 153, 0.764)";
})
document.querySelector(".down-circle").addEventListener("mouseleave",function(){
    document.querySelector("#after-second").style.backgroundColor ="white";
})

const tl3=gsap.timeline({
    scrollTrigger:{
        scroll:"#body",
        trigger:"#after-second",
        markers:true,
        start:"top top",
        scrub:true,
        pin:true,
        // pinSpacing:false,
        end: "+=" + (window.innerHeight * 5)
    },
})
tl3.to("#soverlay",{
    y:-2900,
    ease:Power1

},"a")

tl3.to("#wheel",{
   rotate:"360deg",
    ease:Power1

},"a")
tl3.to("#scroll-h1",{
    x:400,
    ease:Power1,
    // duration:6
},"a")
tl3.from(".youth>span",{
    x:-400,
    ease:Power1,
    delay:-.1

},"a")
tl3.to("#span-two",{
    right:"-10%",
    ease:Power1,
    delay:-.1
},"a")
tl3.to("#down-pinkflar-txt>h1",{
    x:-400,
    ease:Power1,
    duration:1
    // delay:-.1
},"a")
