const cursor=document.querySelector(".cursor-circle");
window.addEventListener("mousemove", function(event){
    const posX=event.clientX;
    const posY=event.clientY;

   cursor.style.left=`${posX}px`;
    cursor.style.top=`${posY}px`;

    cursor.animate({
        left:`${posX}px`,
        top:`${posY}px`,
    },{duration:200, fill:"forwards"});
});


const container=document.getElementById("contentContainer");

container.addEventListener('scroll', function(event) {
    let scrollPosition = container.scrollTop;
    document.querySelector('.circle1').style.transform = `translate(${scrollPosition * 0}px, ${scrollPosition * 0.25}px)`;
    document.querySelector('.circle2').style.transform = `translate(${-scrollPosition * 0}px, ${-scrollPosition * 0.15}px)`;
    document.querySelector('.circle3').style.transform = `translate(${scrollPosition * 0.3}px, ${-scrollPosition * 0}px)`;
});




//cursor hovering animations......................................................................................................

const pointer1=document.getElementById('pointer1');
const pointer2=document.getElementById('pointer2');
const pointer3=document.getElementById('pointer3');
const pointer4=document.getElementById('pointer4');
const pointer5=document.getElementById('pointer5');
const pointer6=document.getElementById('pointer6');
const pointer7=document.getElementById('pointer7');
const pointer8=document.getElementById('pointer8');
const pointer9=document.querySelectorAll('.pointer9');


const cursorCircle=document.querySelector('.cursor-circle');

pointer1.addEventListener("mouseover",event=>{
    cursorCircle.classList.add("cursor-circle-hover");
});
pointer1.addEventListener("mouseout",event=>{
    cursorCircle.classList.remove("cursor-circle-hover");
});

pointer2.addEventListener("mouseover",event=>{
    cursorCircle.classList.add("cursor-circle-hover");
});
pointer2.addEventListener("mouseout",event=>{
    cursorCircle.classList.remove("cursor-circle-hover");
});

pointer3.addEventListener("mouseover",event=>{
    cursorCircle.classList.add("cursor-circle-hover");
});
pointer3.addEventListener("mouseout",event=>{
    cursorCircle.classList.remove("cursor-circle-hover");
});
pointer4.addEventListener("mouseover",event=>{
    cursorCircle.classList.add("cursor-circle-hover2");
});
pointer4.addEventListener("mouseout",event=>{
    cursorCircle.classList.remove("cursor-circle-hover2");
});

pointer5.addEventListener("mouseover",event=>{
    cursorCircle.classList.add("cursor-circle-hover3");
});
pointer5.addEventListener("mouseout",event=>{
    cursorCircle.classList.remove("cursor-circle-hover3");
});

pointer6.addEventListener("mouseover",event=>{
    cursorCircle.classList.add("cursor-circle-hover2");
});
pointer6.addEventListener("mouseout",event=>{
    cursorCircle.classList.remove("cursor-circle-hover2");
});

pointer7.addEventListener("mouseover",event=>{
    cursorCircle.classList.add("cursor-circle-hover3");
});
pointer7.addEventListener("mouseout",event=>{
    cursorCircle.classList.remove("cursor-circle-hover3");
});

pointer9.forEach(pointer=>{
    pointer.addEventListener("mouseover",event=>{
        cursorCircle.classList.add("cursor-circle-hover4");
    });
    pointer.addEventListener("mouseout",event=>{
        cursorCircle.classList.remove("cursor-circle-hover4");
    });
})

//


const circularArrow=document.querySelector('.circleArr');
const img=document.getElementById('img');
const note1=document.getElementById('note1');
const note2=document.getElementById('note2');
circularArrow.addEventListener("mouseover",event=>{
    circularArrow.style.backgroundColor="#FFFFFF";
    img.style.display="none";
    note1.textContent="Well There's a lot more to know!,";
    note2.textContent="Continue surfing 🤞";
});

circularArrow.addEventListener("mouseout",event=>{
    circularArrow.style.backgroundColor="transparent";
    img.style.display="block";
    note1.textContent="";
    note2.textContent="";
});

const circularArrow2=document.querySelector('.circleArr2');
const img2=document.getElementById('img2');
const note3=document.getElementById('note3');
const note4=document.getElementById('note4');
circularArrow2.addEventListener("mouseover",event=>{
    circularArrow2.style.backgroundColor="#FFFFFF";
    img2.style.display="none";
    note3.textContent="Some projects where i contributed!,";
    note4.textContent="Continue surfing 🤞";
});

circularArrow2.addEventListener("mouseout",event=>{
    circularArrow2.style.backgroundColor="transparent";
    img2.style.display="block";
    note3.textContent="";
    note4.textContent="";
});


const knowMoreBtn = document.getElementById('knowMoreBtn');
const aboutTXT=document.querySelector('.first-about');
const secondAbout=document.querySelector('.second-about');

knowMoreBtn.addEventListener('click', () => {
    knowMoreBtn.classList.toggle('circular');
   
    if(knowMoreBtn.classList.contains('circular')){
        aboutTXT.style.display="block";
        secondAbout.style.display="none";
    }
    else{
        aboutTXT.style.display="none";
        secondAbout.style.display="flex";
    }
    
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entr)=>{
        console.log(entr);
        if(entr.isIntersecting){
            entr.target.classList.add('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));



const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('hide');
        }
    });
});

const toHide=document.querySelectorAll('.toHide');
const circles=document.querySelectorAll('.circle');
const loadingWrap=document.querySelector('.loading-wrap');
const bodyEle=document.body;
toHide.forEach((el)=> observer2.observe(el));

window.onload= function(){
    
    setTimeout(function(){
        loadingWrap.style.display="none"; 
        circles.forEach(circle=>{
            circle.style.position="fixed";
        });
        bodyEle.style.backgroundColor="#0A0A0A";
    },5990);
};
