document.addEventListener("DOMContentLoaded", () => {
    // Vectors Core Load
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // GSAP Core Config Extensions for Premium Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Entrance Cinematic Nodes
        gsap.from(".gs-hero-left", { opacity: 0, x: -50, duration: 1.2, ease: "power4.out" });
        gsap.from(".gs-hero-right", { opacity: 0, scale: 0.9, duration: 1.4, ease: "power3.out", delay: 0.2 });

        // Lazy Scroll Multi Pop Reveal
        gsap.utils.toArray(".gs-reveal").forEach(box => {
            gsap.from(box, {
                scrollTrigger: {
                    trigger: box,
                    start: "top 88%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                onComplete: () => {
                    const counterElement = box.querySelector('.counter');
                    if (counterElement) executeCounterEngine(counterElement);
                }
            });
        });
    }

    // Navigation Drawer Logic Tracker
    const toggleButton = document.getElementById('menu-toggle');
    const menuGrid = document.getElementById('mobile-menu');
    if (toggleButton && menuGrid) {
        toggleButton.addEventListener('click', () => {
            const visible = menuGrid.classList.contains('opacity-100');
            if (visible) {
                menuGrid.classList.remove('opacity-100', 'pointer-events-auto');
                menuGrid.classList.add('opacity-0', 'pointer-events-none');
            } else {
                menuGrid.classList.remove('opacity-0', 'pointer-events-none');
                menuGrid.classList.add('opacity-100', 'pointer-events-auto');
            }
        });
    }

    // Typing Loop String Matrix Setup
    const typingStrings = ["Together We Create Change.", "Empowering Minds.", "Building Leaders."];
    let stringIndex = 0,
        charIndex = 0,
        deletingActive = false;
    const writingTarget = document.querySelector('.typing-text');

    function handleTypingCore() {
        if (!writingTarget) return;
        const completeWord = typingStrings[stringIndex];

        if (deletingActive) {
            writingTarget.textContent = completeWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            writingTarget.textContent = completeWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let dynamicPace = deletingActive ? 30 : 70;

        if (!deletingActive && charIndex === completeWord.length) {
            dynamicPace = 2500;
            deletingActive = true;
        } else if (deletingActive && charIndex === 0) {
            deletingActive = false;
            stringIndex = (stringIndex + 1) % typingStrings.length;
            dynamicPace = 500;
        }

        setTimeout(handleTypingCore, dynamicPace);
    }
    if (writingTarget) handleTypingCore();

    // Accelerated Numbers Upcounter
    function executeCounterEngine(field) {
        field.innerText = '0';
        const finalLimit = +field.getAttribute('data-target');
        const loopSpeed = finalLimit / 30;

        const countStep = () => {
            const realTimeVal = +field.innerText;
            if (realTimeVal < finalLimit) {
                field.innerText = `${Math.ceil(realTimeVal + loopSpeed)}`;
                setTimeout(countStep, 35);
            } else {
                field.innerText = finalLimit + '+';
            }
        };
        countStep();
    }

    // Scroll Bar Fluid Width Tracker
    window.addEventListener('scroll', () => {
        const topLine = document.getElementById('progress-bar');
        if (topLine) {
            let activeTop = document.documentElement.scrollTop;
            let fullHeightDiff = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            topLine.style.width = (activeTop / fullHeightDiff) * 100 + '%';
        }
    });
});

function showMessage() {
    alert("Thank you for showing interest in joining She Can Foundation!");
}