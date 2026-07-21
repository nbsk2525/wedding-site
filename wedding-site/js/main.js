/* ==========================================
   Wedding Site
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Fade Animation
    =============================== */

    const fadeItems = document.querySelectorAll(".fade");

    const fadeObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                fadeObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    fadeItems.forEach(item => {

        fadeObserver.observe(item);

    });

    /* ===============================
       FAQ Accordion
    =============================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        const answer = item.querySelector(".faq-answer");

        button.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            faqItems.forEach(faq => {

                faq.classList.remove("active");

                faq.querySelector(".faq-answer").style.maxHeight = null;

                const icon = faq.querySelector(".icon");

                if(icon){

                    icon.textContent = "＋";

                }

            });

            if (!isOpen) {

                item.classList.add("active");

                answer.style.maxHeight = answer.scrollHeight + "px";

                const icon = item.querySelector(".icon");

                if(icon){

                    icon.textContent = "−";

                }

            }

        });

    });

    /* ===============================
       Smooth Scroll
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ===============================
       Navbar Shadow（将来用）
    =============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(!header) return;

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

    /* ===============================
       Gallery Lightbox
    =============================== */

    const images = document.querySelectorAll(".gallery-grid img");

    if(images.length){

        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <span class="close">&times;</span>
            <img>
        `;

        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector("img");

        images.forEach(img=>{

            img.addEventListener("click",()=>{

                lightbox.classList.add("show");

                lightboxImg.src = img.src;

                lightboxImg.alt = img.alt;

                document.body.style.overflow="hidden";

            });

        });

        lightbox.addEventListener("click",(e)=>{

            if(

                e.target===lightbox ||

                e.target.classList.contains("close")

            ){

                lightbox.classList.remove("show");

                document.body.style.overflow="";

            }

        });

    }

    /* ===============================
       Hero Fade
    =============================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll",()=>{

        if(!hero) return;

        const y = window.scrollY;

        hero.style.opacity = Math.max(

            1 - y / 700,

            0

        );

    });

    /* ===============================
       Mouse Parallax
    =============================== */

    const stars = document.querySelectorAll(".stars,.stars2,.stars3");

    document.addEventListener("mousemove",(e)=>{

        const x = (e.clientX / window.innerWidth - .5);

        const y = (e.clientY / window.innerHeight - .5);

        stars.forEach((star,index)=>{

            const depth = (index + 1) * 8;

            star.style.transform = `translate(${x*depth}px,${y*depth}px)`;

        });

    });

    /* ===============================
       Floating Gold Glow
    =============================== */

    const glow = document.createElement("div");

    glow.className="cursor-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove",(e)=>{

        glow.style.left=e.clientX+"px";

        glow.style.top=e.clientY+"px";

    });

});