// Main JavaScript for Quadrante USA website

// Move init to end or use DOMContentLoaded to prevent script blocking
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }

    // Add mobile menu event listener with Safari compatibility
    setTimeout(() => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenuBtn) {
            // Remove any existing listeners
            mobileMenuBtn.removeEventListener('click', handleMobileMenuClick);
            mobileMenuBtn.removeEventListener('touchstart', handleMobileMenuClick);

            // Add only touchstart for mobile, click as fallback
            if ('ontouchstart' in window) {
                mobileMenuBtn.addEventListener('touchstart', handleMobileMenuClick, {passive: false});
                console.log('Mobile menu touchstart listener added');
            } else {
                mobileMenuBtn.addEventListener('click', handleMobileMenuClick);
                console.log('Mobile menu click listener added');
            }
        } else {
            console.log('Mobile menu button not found');
        }
    }, 100);
});

let lastMenuToggle = 0;

function handleMobileMenuClick(event) {
    event.preventDefault();
    event.stopPropagation();

    // Debounce: prevent double-firing within 300ms
    const now = Date.now();
    if (now - lastMenuToggle < 300) {
        console.log('Menu toggle debounced');
        return;
    }
    lastMenuToggle = now;

    toggleMobileMenu();
    console.log('Mobile menu clicked');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) {
        console.error('Mobile menu element not found');
        return;
    }

    const isActive = menu.classList.contains('active');

    if (isActive) {
        // Closing menu
        menu.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
        menu.style.transform = 'translateX(100%)';
        console.log('Mobile menu closed');
    } else {
        // Opening menu
        menu.classList.add('active');
        document.body.classList.add('overflow-hidden');
        menu.style.transform = 'translateX(0)';
        console.log('Mobile menu opened');
    }
}

// Function to ensure mobile menu button remains responsive
function ensureMobileMenuResponsive() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn && window.innerWidth <= 768) {
        // Ensure button is clickable and has proper z-index
        mobileMenuBtn.style.pointerEvents = 'auto';
        mobileMenuBtn.style.zIndex = '60';

        // Check if event listeners are still attached, re-attach if needed
        if (!mobileMenuBtn.hasAttribute('data-listeners-attached')) {
            mobileMenuBtn.removeEventListener('click', handleMobileMenuClick);
            mobileMenuBtn.removeEventListener('touchstart', handleMobileMenuClick);

            if ('ontouchstart' in window) {
                mobileMenuBtn.addEventListener('touchstart', handleMobileMenuClick, {passive: false});
            } else {
                mobileMenuBtn.addEventListener('click', handleMobileMenuClick);
            }

            mobileMenuBtn.setAttribute('data-listeners-attached', 'true');
        }
    }
}

// --- Data Definitions ---

// UPDATED COMPETENCIES DATA (5 PANELS)
const competenciesData = [
    { // Panel 1: Renewable Energy Resources Integration
        image: "assets/images/media/wind-farm-global.png",
        title: "Renewable Energy Resources Integration",
        content: `<p class="mb-4">Right Analytics has a long successful history of performing integration studies for renewable generations. Right Analytics capabilities for interconnection studies range from modeling of the renewable generation resources all the way to transient stability, Sub-Synchronous Control Interaction (SSCI), and dynamic performance studies.</p><p>All our studies comply with the industry standards, ensuring reliability and grid code compliance for projects of any scale.</p>`
    },
    { // Panel 2: Power Systems Planning
        image: "assets/images/media/tower_grid_1.png",
        title: "Power Systems Planning",
        content: `<p class="mb-4">We can provide your organization with a wide range of solutions for Transmission and Distribution Planning, and control. We leverage best software tools and processes to find solutions for the toughest challenges facing the industry today.</p><p>Our expertise includes short-circuit analysis, load-flow studies, capacity expansion, and grid control optimization.</p>`
    },
    { // Panel 3: Data Center Planning and Siting
        image: "assets/images/media/data_center_1.jpeg",
        title: "Data Center Planning and Siting",
        content: `<p class="mb-4">We offer comprehensive load hosting capacity analysis to find the optimal location for building new, large-scale data centers.</p><p>Our analysis minimizes risks related to interconnection costs, grid congestion, and future energy availability, ensuring your data center infrastructure is secure and scalable.</p>`
    },
    { // Panel 4: Microgrid Design
        image: "assets/images/media/Microgrid Design.jpeg",
        title: "Microgrid Design",
        content: `<p class="mb-4">We provide end-to-end design services for microgrid system architecture. This includes detailed component sizing for inverters, energy storage systems (ESS), and Uninterruptible Power Supply (UPS) systems.</p><p>Our designs focus on resiliency, islanding capability, and optimizing the integration of distributed energy resources (DERs) for critical loads.</p>`
    },
    { // Panel 5: Hardware-in-the-Loop Testing, and Simulation
        image: "assets/images/media/Hardware_in_the_Loop.png",
        title: "Hardware-in-the-Loop Testing, and Simulation",
        content: `<p class="mb-4">HIL testing lets you verify your controller design and other Intelligent Electronic Devices (IEDs) without the complete system hardware. Instead, rely on a real-time plant simulator that acts as a digital twin of the real system or parts of it, benefiting you in practicality and cost.</p><p>At Right Analytics, we offer a wide range of HIL tests to verify the performance of power electronics controllers, power system protection systems, and battery management systems.</p>`
    },
    { // Panel 6: Industry & Energy Transition
        image: "assets/images/media/wind-farm-global.png",
        title: "Industry & Energy Transition",
        content: `<p class="mb-4">Quadrante USA leads the way in sustainable energy transition projects, combining decades of experience in renewable energy integration with cutting-edge grid modernization solutions.</p><p>Our expertise spans wind and solar power integration, energy storage systems, and grid decarbonization strategies that support the transition to clean energy while maintaining system reliability and economic viability.</p>`
    },
    { // Panel 7: Cities & Territories
        image: "assets/images/media/city_tree.jpeg",
        title: "Cities & Territories",
        content: `<p class="mb-4">We specialize in sustainable urban infrastructure development and territorial planning that balances environmental protection with economic growth.</p><p>Our integrated approach to smart cities includes resilient power systems, sustainable transportation networks, and green building initiatives that create livable communities for future generations.</p>`
    },
    { // Panel 8: Mobility & Transport
        image: "assets/images/media/mobility.jpeg",
        title: "Mobility & Transport",
        content: `<p class="mb-4">Quadrante USA delivers comprehensive mobility and transportation infrastructure solutions, from electric vehicle charging networks to sustainable public transit systems.</p><p>Our expertise includes transportation electrification, multimodal transport planning, and infrastructure design that supports the transition to sustainable mobility while improving connectivity and accessibility.</p>`
    },
    { // Panel 9: Data Center Engineering Excellence
        image: "assets/images/media/data_servers.jpeg",
        title: "Data Center Engineering Excellence",
        content: `<p class="mb-4"><strong>Precision-engineered systems tailored for uptime and performance powering AI-ready infrastructure.</strong></p><p>Our solutions include High-Performance Computing (HPC) cooling optimization, redundancy planning (N+1, 2N), and advanced electrical distribution design to support the intense power density requirements of modern AI workloads.</p>`
    },
    { // Panel 10: Data Center Regulations & Compliance
        image: "assets/images/media/data_server_2.jpeg",
        title: "Data Center Regulations & Compliance",
        content: `<p class="mb-4"><strong>Full compliance with planning, zoning, and environmental permits, and extensive knowledge of local power grid.</strong></p><p>We navigate complex regulatory landscapes, managing everything from Environmental Impact Assessments (EIA) to grid interconnection agreements. Our deep understanding of local ISO/RTO policies ensures faster time-to-power for your data center projects.</p>`
    },
    { // Panel 11: Data Center Sustainability
        image: "assets/images/media/data_servers_3.png",
        title: "Data Center Sustainability",
        content: `<p class="mb-4"><strong>Sustainable design aligned with international standards and certifications, with the highest PUE and WUE standards.</strong></p><p>We prioritize green building certifications (LEED, BREEAM) and innovative thermal management to minimize Power Usage Effectiveness (PUE) and Water Usage Effectiveness (WUE), driving operational efficiency while meeting corporate ESG goals.</p>`
    }
];

// Experience data removed - Data Center Expertise section has been removed

const teamData = [
    {
        image: "assets/images/media/team-saman-babaei.jpeg",
        title: "Dr. Saman Babaei",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">Founder of Right Analytics / Chief Power Systems Engineer</h4>
        <p class="mb-4">Dr. Saman Babaei brings over 15 years of academic and industrial experience in power systems. He specializes in advanced grid studies, including transient stability, electromagnetic transients, and renewable energy integration.</p>
        <p class="mb-4">Before founding Right Analytics, Saman worked on critical infrastructure projects across North America, developing methodologies for high-penetration renewable grids.</p>
        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100 mt-6">
            <h5 class="font-bold text-slate-900 mb-2">Key Expertise</h5>
            <ul class="list-disc list-inside text-sm space-y-1">
                <li>Grid Interconnection Studies</li>
                <li>Transient Stability Analysis</li>
                <li>HVDC & FACTS Applications</li>
            </ul>
        </div>
        `
    },
    {
        image: "assets/images/media/team-eduardo-llorente.jpeg",
        title: "Eduardo Llorente",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">CEO - USA - Quadrante</h4>
        <p class="mb-4">Eduardo Llorente leads Quadrante's operations in the United States, driving the company's growth strategy and overseeing major infrastructure projects. With a background in Electrical Engineering and Executive Management, he ensures project delivery excellence.</p>
        <p>He focuses on fostering client relationships and integrating Quadrante's global capabilities with local US market needs.</p>
        `
    },
    {
        image: "assets/images/media/team-hanif-livani.jpeg",
        title: "Prof. Hanif Livani",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">Lead Power Systems Engineer</h4>
        <p class="mb-4">Prof. Livani serves as a Professor of Electrical Engineering while leading technical studies at Right Analytics. His academic research in wide-area monitoring and protection systems directly informs his industrial consulting work.</p>
        <p>He is an expert in state estimation, grid resilience, and the application of synchrophasor technology.</p>
        `
    },
    {
        image: "assets/images/media/team-ali-mehrizi.jpeg",
        title: "Prof. Ali Mehrizi-Sani",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">Lead Power Systems Engineer</h4>
        <p class="mb-4">Prof. Mehrizi-Sani is a renowned expert in power electronics and microgrid control. His work bridges the gap between theoretical control strategies and practical hardware implementation.</p>
        <p>At Right Analytics, he oversees Hardware-in-the-Loop (HIL) testing and advanced power electronics simulations.</p>
        `
    },
    {
        image: "assets/images/media/team-nuno-costa.jpeg",
        title: "Nuno Costa",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">Global CEO - Quadrante</h4>
        <p class="mb-4">Nuno Costa is the Global CEO of Quadrante Group. Under his leadership, the group has expanded to 38 offices across three continents.</p>
        <p>He champions the "Total Design" philosophy, ensuring that engineering solutions are sustainable, economically viable, and technically superior.</p>
        `
    },
    {
        image: "assets/images/media/team-isabel-lopez.jpeg",
        title: "Isabel López Ferrer",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">Head of Energy Sector</h4>
        <p class="mb-4">Isabel oversees the Energy Sector for Quadrante globally. She has extensive experience in managing large-scale renewable energy projects, including wind farms, solar plants, and transmission infrastructure.</p>
        `
    },
    {
        image: "assets/images/media/team-armando-santos.jpeg",
        title: "Armando Santos",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">Head of Energy Business Unit</h4>
        <p class="mb-4">Armando leads the Energy Business Unit, focusing on technical excellence and operational efficiency. He plays a key role in the structural and electrical design coordination for complex substation and transmission line projects.</p>
        `
    },
    {
        image: "assets/images/media/team-joao-rocha.png",
        title: "João Rocha",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">Client Manager - Data Centers</h4>
        <p class="mb-4">João Rocha specializes in the critical infrastructure sector, managing high-stakes Data Center projects. He acts as the primary liaison between technical teams and clients like Logicalis and Google, ensuring Tier-standard compliance.</p>
        `
    }
];

// --- SCROLL HEADER ---
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const progress = document.getElementById('scroll-progress');
    const quadranteLogo = document.querySelector('img[alt="Quadrante Logo"]');

    if (window.scrollY > 20) {
        header.classList.add('shadow-xl', 'py-2');
        header.classList.remove('py-3');
        // Change to round logo when scrolled and make it 70% of 300% (210% total)
        if (quadranteLogo) {
            quadranteLogo.src = 'assets/images/media/quadrante_logo_round.png';
            // Scale down the scroll logo on mobile for better proportions
            if (window.innerWidth >= 768) {
                quadranteLogo.style.transform = 'scale(2.1)'; // 300% * 70% = 210%
            } else {
                quadranteLogo.style.transform = 'scale(1.5)'; // More reasonable size for mobile
            }
            quadranteLogo.style.transition = 'all 0.3s ease';
        }
    } else {
        header.classList.remove('shadow-xl', 'py-2');
        header.classList.add('py-3');
        // Change back to original logo when at top
        if (quadranteLogo) {
            quadranteLogo.src = 'assets/images/media/logo-quadrante.png';
            // Remove inline transform to let CSS classes handle the scaling
            quadranteLogo.style.transform = '';
            quadranteLogo.style.transition = 'all 0.3s ease';
        }
    }
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressWidth = (window.scrollY / totalHeight) * 100;
    progress.style.width = `${progressWidth}%`;

    // Ensure mobile menu button remains responsive after scroll
    ensureMobileMenuResponsive();
});

// --- HERO SLIDER ---
let slides = [];
let currentSlide = 0;
let slideInterval;

function initializeSlider() {
    slides = document.querySelectorAll('.slide');
    console.log('Found slides:', slides.length);

    if (slides.length === 0) {
        console.warn('No slides found');
        return;
    }

    // Clear any existing interval
    if (slideInterval) {
        clearInterval(slideInterval);
    }

    // Initialize first slide
    showSlide(0);

    // Start auto advance with custom timing
    startAutoAdvance();

    // Manual controls - Desktop
    const nextBtn = document.getElementById('next-slide');
    const prevBtn = document.getElementById('prev-slide');

    if (nextBtn) {
        nextBtn.removeEventListener('click', nextSlide); // Remove any existing listener
        nextBtn.addEventListener('click', nextSlide);
    }
    if (prevBtn) {
        prevBtn.removeEventListener('click', prevSlide); // Remove any existing listener
        prevBtn.addEventListener('click', prevSlide);
    }

    // Manual controls - Mobile
    const nextBtnMobile = document.getElementById('next-slide-mobile');
    const prevBtnMobile = document.getElementById('prev-slide-mobile');

    if (nextBtnMobile) {
        nextBtnMobile.removeEventListener('click', nextSlide); // Remove any existing listener
        nextBtnMobile.removeEventListener('touchstart', nextSlide);

        // Add both click and touch events for better mobile support
        nextBtnMobile.addEventListener('click', nextSlide);
        nextBtnMobile.addEventListener('touchstart', nextSlide, {passive: true});
    }
    if (prevBtnMobile) {
        prevBtnMobile.removeEventListener('click', prevSlide); // Remove any existing listener
        prevBtnMobile.removeEventListener('touchstart', prevSlide);

        // Add both click and touch events for better mobile support
        prevBtnMobile.addEventListener('click', prevSlide);
        prevBtnMobile.addEventListener('touchstart', prevSlide, {passive: true});
    }


    console.log('Slider initialized with', slides.length, 'slides');

    // Add touch/swipe functionality for mobile
    initializeSliderSwipe();
}

function showSlide(index) {
    if (slides.length === 0) return;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    if (slides.length === 0) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    console.log('Next slide:', currentSlide);

    // Restart auto advance with new timing for the new slide
    if (slideInterval) {
        clearInterval(slideInterval);
        startAutoAdvance();
    }
}

function startAutoAdvance() {
    if (slides.length === 0) return;

    // Clear any existing interval
    if (slideInterval) {
        clearInterval(slideInterval);
    }

    // First slide (index 0) gets 64 seconds, others get 32 seconds
    const duration = currentSlide === 0 ? 64000 : 32000;

    slideInterval = setTimeout(() => {
        nextSlide();
    }, duration);

    console.log(`Slide ${currentSlide} will display for ${duration/1000} seconds`);
}


// Touch/Swipe functionality for hero slider
function initializeSliderSwipe() {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer) return;

    let startX = null;
    let startY = null;
    let isDragging = false;

    // Minimum swipe distance to trigger slide change (in pixels)
    const minSwipeDistance = 50;

    sliderContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    }, {passive: true});

    sliderContainer.addEventListener('touchmove', (e) => {
        if (!isDragging || !startX || !startY) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;

        const diffX = startX - currentX;
        const diffY = startY - currentY;

        // Only prevent default if horizontal swipe is more dominant
        if (Math.abs(diffX) > Math.abs(diffY)) {
            e.preventDefault();
        }
    }, {passive: false});

    sliderContainer.addEventListener('touchend', (e) => {
        if (!isDragging || !startX || !startY) return;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const diffX = startX - endX;
        const diffY = startY - endY;

        // Check if it's more of a horizontal swipe than vertical
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
            if (diffX > 0) {
                // Swiped left - go to next slide
                nextSlide();
            } else {
                // Swiped right - go to previous slide
                prevSlide();
            }
        }

        // Reset
        startX = null;
        startY = null;
        isDragging = false;
    }, {passive: true});

    console.log('Swipe functionality initialized for hero slider');
}

function prevSlide() {
    if (slides.length === 0) return;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    console.log('Previous slide:', currentSlide);

    // Restart auto advance with new timing for the new slide
    if (slideInterval) {
        clearInterval(slideInterval);
        startAutoAdvance();
    }
}

// --- MODALS ---
function prefillMessage(targetId, text) {
    const el = document.getElementById(targetId);
    if (el) {
        el.value = text;
        el.focus();
    }
}

function triggerLeadCapture(sourceId, context = '') {
    const messageBox = document.getElementById(sourceId);
    const messageVal = messageBox ? messageBox.value : '';

    if (sourceId === 'contact-section-message' && context === 'Inquiry: Team Capabilities') {
        // Continue processing
    } else if (!messageVal.trim() && sourceId) {
        // Replaced alert with visual cue
        if (messageBox) {
            messageBox.classList.add('border-red-500', 'ring-2', 'ring-red-200');
            messageBox.focus();
            setTimeout(() => messageBox.classList.remove('border-red-500', 'ring-2', 'ring-red-200'), 2000);
        }
        return;
    }

    document.getElementById('final-message-input').value = messageVal;
    document.getElementById('final-context-input').value = context;

    const modal = document.getElementById('lead-capture-modal');
    const content = document.getElementById('lead-content');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('modal-hidden');
        content.classList.add('scale-100', 'opacity-100');
        content.classList.remove('scale-95', 'opacity-0');
    }, 10);
}

function closeLeadModal() {
    const modal = document.getElementById('lead-capture-modal');
    modal.classList.add('modal-hidden');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Company Information Modal
function openCompanyInfoModal() {
    const modal = document.getElementById('company-info-modal');
    const content = modal.querySelector('.modal-content');
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Disable background scrolling
    setTimeout(() => {
        modal.classList.remove('modal-hidden');
        content.classList.add('scale-100', 'opacity-100');
        content.classList.remove('scale-95', 'opacity-0');
    }, 10);
}

function closeCompanyInfoModal() {
    const modal = document.getElementById('company-info-modal');
    const content = modal.querySelector('.modal-content');
    modal.classList.add('modal-hidden');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    document.body.classList.remove('overflow-hidden'); // Re-enable background scrolling
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }, 300);
}

// AI DRAFT LOGIC
let currentDraftTargetId = null;

function openAiDraftModal(targetId) {
    currentDraftTargetId = targetId;
    document.getElementById('ai-prompt-input').value = '';
    document.getElementById('draft-output').value = '';
    document.getElementById('draft-result-container').classList.add('hidden');

    const modal = document.getElementById('ai-draft-modal');
    const content = document.getElementById('ai-draft-content');
    modal.classList.remove('hidden');
    // small timeout for transition
    setTimeout(() => {
        modal.classList.remove('modal-hidden');
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeAiDraftModal() {
    const modal = document.getElementById('ai-draft-modal');
    const content = document.getElementById('ai-draft-content');
    modal.classList.add('modal-hidden');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Gemini API call logic - START
const apiKey = "AIzaSyDxUBgLd6LZfPPK5Lnl3xAz6_3nj7Lve-I";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

async function fetchWithExponentialBackoff(payload, maxRetries = 5, delay = 1000) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.status === 429 || response.status >= 500) {
                if (i < maxRetries - 1) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    delay *= 2;
                    continue;
                } else {
                    throw new Error(`API call failed after ${maxRetries} attempts.`);
                }
            }

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            return response.json();

        } catch (error) {
            console.error("Fetch attempt failed:", error);
            if (i === maxRetries - 1) throw error;
        }
    }
}

async function callGemini(systemInstruction, userQuery) {
    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: {
            parts: [{ text: systemInstruction }]
        },
    };

    const result = await fetchWithExponentialBackoff(payload);

    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
        console.error("Gemini response lacked text content:", result);
        return "Failed to generate draft. Please try a different prompt or contact us directly.";
    }
    return text;
}
// Gemini API call logic - END

async function generateDraft() {
    const promptInput = document.getElementById('ai-prompt-input');
    const userPrompt = promptInput.value.trim();
    const btn = document.getElementById('generate-btn');
    const originalContent = btn.innerHTML;

    if (!userPrompt) {
        promptInput.classList.add('border-red-500', 'ring-2', 'ring-red-200');
        setTimeout(() => promptInput.classList.remove('border-red-500', 'ring-2', 'ring-red-200'), 2000);
        return;
    }

    btn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin mr-2"></i> Generating...`;
    btn.disabled = true;
    lucide.createIcons({ root: btn });

    const systemPrompt = `Write a short, direct professional email from a client TO Quadrante USA. Keep it under 4 sentences. No filler words. Be clear and to the point.

Format:
- Start: "Dear Quadrante Team,"
- State the need directly
- Ask for what they want (proposal/meeting/information)
- End: "Best regards,"

Make it concise and professional. No options, no extra details, no lengthy explanations.`;

    let draft = "Error: Failed to connect to the drafting service.";

    try {
        if (apiKey && apiKey.trim() !== "") {
            draft = await callGemini(systemPrompt, userPrompt);
        } else {
            draft = "Error: AI service is not configured. Please contact the administrator to set up the API key.";
        }
    } catch (error) {
        console.error("Gemini API error:", error);
        draft = "Error: There was an issue connecting to the AI service. Please try again later.";
    }

    document.getElementById('draft-output').value = draft;
    document.getElementById('draft-result-container').classList.remove('hidden');

    try {
        // Scroll to result safely
        document.getElementById('draft-result-container').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (e) {
        console.log("Scroll failed", e);
    }

    btn.innerHTML = originalContent;
    btn.disabled = false;
    lucide.createIcons({ root: btn });
}

async function modifyDraft(action) {
    const textarea = document.getElementById('draft-output');
    const currentDraft = textarea.value.trim();

    if (!currentDraft) return;

    const btn = document.querySelector(`button[onclick="modifyDraft('${action}')"]`);
    const originalText = btn.innerHTML;
    btn.innerHTML = `...`;

    let systemPrompt = `Modify this client email to Quadrante USA: "${currentDraft}". Keep it under 4 sentences and professional.`;

    if (action === 'shorten') {
        systemPrompt += ' Make it even shorter - 2-3 sentences maximum. Remove all filler words.';
    } else if (action === 'expand') {
        systemPrompt += ' Add one more sentence with project details. Stay concise.';
    } else if (action === 'formal') {
        systemPrompt += ' Use formal business language. Keep it short.';
    } else if (action === 'casual') {
        systemPrompt += ' Make it friendly but professional. Keep it brief.';
    }

    let newDraft = "Error: Failed to refine draft.";

    try {
        if (apiKey && apiKey.trim() !== "") {
            newDraft = await callGemini(systemPrompt, `Refine the draft based on the following instruction: ${systemPrompt}`);
        } else {
            newDraft = "Error: AI service is not configured. Please set up the API key.";
        }
    } catch (error) {
        console.error("Gemini API error:", error);
        newDraft = "Error: Failed to refine draft. Please try again.";
    }

    textarea.value = newDraft;
    btn.innerHTML = originalText;
}

function insertDraft() {
    if (currentDraftTargetId) {
        const draftText = document.getElementById('draft-output').value;
        const target = document.getElementById(currentDraftTargetId);
        if (target) {
            target.value = draftText;
            // visual feedback focus
            target.focus();
        }
    }
    closeAiDraftModal();
}

// Universal Modal
let currentModalSection = '';
let currentModalIndex = 0;

function openUniversalModal(section, index) {
    currentModalSection = section;
    currentModalIndex = index;
    const navList = document.getElementById('modal-nav-list');
    const mobileNavList = document.getElementById('mobile-nav-list');

    let dataArray;
    if (section === 'expertise') dataArray = competenciesData;
    else if (section === 'projects') dataArray = projectModalData;
    else dataArray = teamData;

    let headerText = 'Our Competencies';
    if (section === 'team') headerText = 'Our Leadership';
    else if (section === 'projects') headerText = 'Our Global Projects';

    if (document.getElementById('sidebar-header')) {
        document.getElementById('sidebar-header').innerText = headerText;
    }

    // Build Nav List
    let html = '';
    let mobileHtml = '';

    dataArray.forEach((item, i) => {
        const isActive = i === index;
        const activeClasses = isActive ? 'bg-brand-primary/10 border-brand-primary' : 'border-transparent hover:bg-white/5';

        // Desktop Nav List (sidebar over image)
        html += `<button onclick="switchModalItem(${i})" id="nav-item-${i}" class="w-full text-left p-4 flex items-center gap-4 rounded-xl transition-all duration-300 group border-l-4 ${activeClasses}">
            <span class="text-sm font-bold transition-colors line-clamp-2 leading-tight ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}">${item.title}</span>
        </button>`;

        // Mobile Nav List (horizontal scroll tabs)
        mobileHtml += `<button onclick="switchModalItem(${i})" class="inline-flex items-center gap-2 px-4 py-2 mx-1 rounded-full text-xs font-bold border transition-colors ${isActive ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-slate-600 border-slate-200'}">${item.title}</button>`;
    });

    // Only populate desktop nav on larger screens
    if (navList && window.innerWidth >= 1024) {
        navList.innerHTML = html;
    }
    // Always populate mobile nav (horizontal tabs)
    if (mobileNavList) {
        mobileNavList.innerHTML = mobileHtml;
    }

    updateModalUI();

    const modal = document.getElementById('universal-modal');
    const content = modal.querySelector('.modal-content');
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Disable background scrolling
    setTimeout(() => {
        modal.classList.remove('modal-hidden');
        content.classList.add('scale-100', 'opacity-100');
        content.classList.remove('scale-95', 'opacity-0');
    }, 10);
}

function closeUniversalModal() {
    const modal = document.getElementById('universal-modal');
    const content = modal.querySelector('.modal-content');
    modal.classList.add('modal-hidden');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    document.body.classList.remove('overflow-hidden'); // Re-enable background scrolling
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function switchModalItem(index) {
    currentModalIndex = index;
    updateModalUI();

    let dataArray;
    if (currentModalSection === 'expertise') dataArray = competenciesData;
    else if (currentModalSection === 'projects') dataArray = projectModalData;
    else dataArray = teamData;

    // Update desktop navigation highlight (only on larger screens)
    if (window.innerWidth >= 1024) {
        dataArray.forEach((_, i) => {
            const navItem = document.getElementById(`nav-item-${i}`);
            if (navItem) {
                const span = navItem.querySelector('span');
                if (i === index) {
                    navItem.classList.add('bg-brand-primary/10', 'border-brand-primary');
                    navItem.classList.remove('border-transparent', 'hover:bg-white/5');
                    span.classList.remove('text-slate-400', 'group-hover:text-white');
                    span.classList.add('text-white');
                } else {
                    navItem.classList.remove('bg-brand-primary/10', 'border-brand-primary');
                    navItem.classList.add('border-transparent', 'hover:bg-white/5');
                    span.classList.add('text-slate-400', 'group-hover:text-white');
                    span.classList.remove('text-white');
                }
            }
        });
    }

    // Update mobile navigation highlight
    const mobileNavList = document.getElementById('mobile-nav-list');
    if (mobileNavList) {
        const buttons = mobileNavList.querySelectorAll('button');
        let activeButton = null;

        buttons.forEach((button, i) => {
            const onclick = button.getAttribute('onclick');
            if (onclick) {
                const match = onclick.match(/switchModalItem\((\d+)\)/);
                if (match) {
                    const buttonIndex = parseInt(match[1]);
                    if (buttonIndex === index) {
                        // Set active styles for universal modal
                        button.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                        button.classList.add('bg-brand-primary', 'text-white', 'border-brand-primary');
                        activeButton = button;
                    } else {
                        // Set inactive styles for universal modal
                        button.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
                        button.classList.remove('bg-brand-primary', 'text-white', 'border-brand-primary');
                    }
                }
            }
        });

        // Scroll active button into view
        if (activeButton) {
            activeButton.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }

    // Scroll content to top when switching item
    const contentContainer = document.querySelector('#universal-modal .flex-grow');
    if (contentContainer) {
        contentContainer.scrollTop = 0;
    }
}

function updateModalUI() {
    let dataArray;
    if (currentModalSection === 'expertise') dataArray = competenciesData;
    else if (currentModalSection === 'projects') dataArray = projectModalData;
    else dataArray = teamData;

    const data = dataArray[currentModalIndex];
    const modalContainer = document.querySelector('#universal-modal .modal-content');
    const imgElement = document.getElementById('modal-image');
    const sidebar = document.querySelector('#universal-modal .bg-slate-900');
    const sidebarInnerContent = document.getElementById('sidebar-menu-container');
    const contentSection = document.querySelector('#universal-modal .w-full.md\\:w-1\\/2'); // The right side
    const gradientOverlay = document.getElementById('sidebar-gradient');

    imgElement.src = data.image;

    document.getElementById('mobile-image-title').innerText = data.title;
    document.getElementById('modal-title').innerText = data.title;

    // Handle different data formats for projects vs expertise/team
    if (currentModalSection === 'projects' && data.content === undefined) {
        // Convert project data format to content format
        const projectContent = `<div class="space-y-4">
            <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 class="font-bold text-slate-900 mb-2">Client</h4>
                <p class="text-slate-700">${data.client}</p>
            </div>
            <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 class="font-bold text-slate-900 mb-2">Project Type</h4>
                <p class="text-slate-700">${data.type}</p>
            </div>
            <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 class="font-bold text-slate-900 mb-2">Location</h4>
                <p class="text-slate-700">${data.region}</p>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 mb-2">Project Overview</h4>
                <p class="text-slate-700 mb-4">${data.description}</p>
                <p class="text-slate-600">${data.details}</p>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 mb-3">Key Features</h4>
                <ul class="space-y-2">
                    ${data.keyFeatures.map(feature => `<li class="flex items-center gap-2"><div class="w-2 h-2 bg-brand-primary rounded-full"></div><span class="text-slate-700">${feature}</span></li>`).join('')}
                </ul>
            </div>
        </div>`;
        document.getElementById('modal-body').innerHTML = projectContent;
    } else {
        document.getElementById('modal-body').innerHTML = data.content;
    }

    let label = 'Featured';
    if (currentModalSection === 'expertise') label = 'Competency';
    else if (currentModalSection === 'projects') label = 'Project';
    else label = 'Leadership';

    document.getElementById('modal-section-label').innerText = label;
    document.getElementById('modal-question-box').value = '';

    // --- Layout Adjustments based on User Request (Map vs Others) ---

    // Reset classes to default state
    modalContainer.classList.remove('max-w-[95vw]');
    modalContainer.classList.add('max-w-7xl');

    sidebar.classList.remove('md:w-3/4', 'md:w-1/2', 'md:w-[65%]');
    contentSection.classList.remove('md:w-1/4', 'md:w-1/2', 'md:w-[35%]');
    imgElement.classList.remove('object-contain', 'object-cover');

    // Default behavior
    sidebar.classList.add('md:w-1/2');
    contentSection.classList.add('md:w-1/2');
    imgElement.classList.add('object-cover');
    imgElement.classList.remove('bg-white');

    if (sidebarInnerContent) {
        // Reset to original state: hidden on mobile, visible on large screens
        sidebarInnerContent.className = sidebarInnerContent.className.replace(/\bhidden\b/g, '');
        if (!sidebarInnerContent.classList.contains('lg:flex')) {
            sidebarInnerContent.classList.add('hidden', 'lg:flex');
        }
    }
    if (gradientOverlay) gradientOverlay.classList.remove('hidden');

    // --- Hide/Show Inquiry Form ---
    // If it is 'team' section, we hide the inquiry box at the bottom of the modal
    const inquiryContainer = document.getElementById('modal-inquiry-container');
    if (inquiryContainer) {
        if (currentModalSection === 'team') {
            inquiryContainer.classList.add('hidden');
        } else {
            inquiryContainer.classList.remove('hidden');
        }
    }

    // --- DYNAMIC CHIP GENERATION FOR MODAL ---
    const chipsContainer = document.getElementById('modal-quick-chips');
    let chipsHtml = '';

    if (currentModalSection === 'expertise') {
        chipsHtml = `
            <button onclick="prefillMessage('modal-question-box', 'We need a feasibility study regarding this capability.')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Feasibility Study</button>
            <button onclick="prefillMessage('modal-question-box', 'Can you provide a proposal for this service?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Request Proposal</button>
            <button onclick="prefillMessage('modal-question-box', 'I have a technical question about compliance standards.')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Technical Question</button>
        `;
    } else if (currentModalSection === 'projects') {
        chipsHtml = `
            <button onclick="prefillMessage('modal-question-box', 'We are interested in a similar project. Can we discuss?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Similar Project</button>
            <button onclick="prefillMessage('modal-question-box', 'Can you provide more technical details about this project?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Technical Details</button>
            <button onclick="prefillMessage('modal-question-box', 'What was the project timeline and budget range?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Project Scope</button>
        `;
    } else {
        chipsHtml = `
            <button onclick="prefillMessage('modal-question-box', 'I would like to schedule a meeting with this person.')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Schedule Meeting</button>
            <button onclick="prefillMessage('modal-question-box', 'Can I request a full bio or resume?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Request Resume</button>
            <button onclick="prefillMessage('modal-question-box', 'Is this expert available for a consultation?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Consultation</button>
        `;
    }
    chipsContainer.innerHTML = chipsHtml;

    // Re-initialize icons inside modal content
    if (window.lucide) {
        lucide.createIcons({
            root: document.getElementById('universal-modal')
        });
    }
}

// Scroll Row Function for Capabilities
function scrollRow(rowId, direction) {
    console.log('scrollRow called with:', rowId, direction); // Debug log
    const row = document.getElementById(rowId);
    if (!row) {
        console.error('Row element not found:', rowId);
        return;
    }

    const scrollAmount = 340; // Card width (320px) + gap (20px)
    const currentScroll = row.scrollLeft;
    console.log('Current scroll position:', currentScroll);

    if (direction === 'left') {
        row.scrollTo({
            left: Math.max(0, currentScroll - scrollAmount),
            behavior: 'smooth'
        });
    } else {
        row.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: 'smooth'
        });
    }

    // Update arrow visibility after scroll
    setTimeout(() => updateArrowVisibility(rowId), 100);
}

// Project slider scroll function
function scrollProjectRow(rowId, direction) {
    console.log('scrollProjectRow called with:', rowId, direction); // Debug log
    const row = document.getElementById(rowId);
    if (!row) {
        console.error('Project row element not found:', rowId);
        return;
    }

    const scrollAmount = 340; // Card width (320px) + gap (20px)
    const currentScroll = row.scrollLeft;
    console.log('Current project scroll position:', currentScroll);

    if (direction === 'left') {
        row.scrollTo({
            left: Math.max(0, currentScroll - scrollAmount),
            behavior: 'smooth'
        });
    } else {
        row.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: 'smooth'
        });
    }

    // Update arrow visibility after scroll
    setTimeout(() => updateProjectArrowVisibility(rowId), 100);
}

// Update project arrow visibility based on scroll position
function updateProjectArrowVisibility(rowId) {
    const row = document.getElementById(rowId);
    if (!row) return;

    const leftArrow = document.getElementById(`${rowId}-left-arrow`);
    const rightArrow = document.getElementById(`${rowId}-right-arrow`);

    if (!leftArrow || !rightArrow) return;

    const scrollLeft = row.scrollLeft;
    const scrollWidth = row.scrollWidth;
    const clientWidth = row.clientWidth;

    // Show/hide left arrow
    if (scrollLeft > 10) {
        leftArrow.style.display = 'flex';
    } else {
        leftArrow.style.display = 'none';
    }

    // Show/hide right arrow
    if (scrollLeft < scrollWidth - clientWidth - 10) {
        rightArrow.style.display = 'flex';
    } else {
        rightArrow.style.display = 'none';
    }
}

// Project modal data with detailed information
const projectModalData = [
    // Project 0: NYPA & NYSERDA Initiatives
    {
        title: "NYPA & NYSERDA Initiatives",
        client: "New York Power Authority",
        image: "assets/images/media/wind-farm-global.png",
        type: "Grid & Transmission",
        region: "New York, USA",
        description: "Advanced Power Flow Controller deployment and Wind power enabling technologies for grid modernization and renewable integration.",
        details: "This project focuses on implementing cutting-edge power flow control technologies to enhance grid stability and enable higher penetration of renewable energy sources. Our work includes system studies, equipment specification, and integration planning for NYPA's transmission infrastructure.",
        keyFeatures: ["Advanced Power Flow Controllers", "Wind Power Integration", "Grid Modernization", "System Studies"]
    },
    // Project 1: Dominion Energy Analysis
    {
        title: "Dominion Energy Analysis",
        client: "Dominion Energy",
        image: "assets/images/media/solar_wind.jpeg",
        type: "Studies & Consulting",
        region: "Virginia, USA",
        description: "Hosting capacity analysis and Solar integration cost analysis for utility-scale renewable development.",
        details: "Comprehensive analysis of grid hosting capacity for solar integration, including cost-benefit analysis and interconnection studies. Our work enables Dominion Energy to optimize renewable energy deployment while maintaining grid reliability.",
        keyFeatures: ["Hosting Capacity Analysis", "Solar Integration Studies", "Cost-Benefit Analysis", "Grid Impact Assessment"]
    },
    // Project 2: Project Grimes & Mark Center
    {
        title: "Project Grimes & Mark Center",
        client: "Naturgy",
        image: "assets/images/media/Grimes.jpg",
        type: "Grid & Transmission",
        region: "Texas, USA",
        description: "138/34.5/13.8 kV Substation technical specifications and ERCOT interconnection studies.",
        details: "Complete substation design and interconnection analysis for ERCOT market participation. This project includes detailed engineering specifications, protection system design, and regulatory compliance for multi-voltage level substations.",
        keyFeatures: ["Substation Design", "ERCOT Interconnection", "Multi-Voltage Systems", "Protection Systems"]
    },
    // Project 3: SCE Arc Events Modeling
    {
        title: "SCE Arc Events Modeling",
        client: "Southern California Edison",
        image: "assets/images/media/solar_wind.jpeg",
        type: "Studies & Consulting",
        region: "California, USA",
        description: "Power systems arc events modeling using Real-Time Digital Simulator (RTDS) technology.",
        details: "Advanced modeling and simulation of arc events in power systems using RTDS for Southern California Edison. This work enhances system protection and safety by accurately modeling fault conditions and arc behavior.",
        keyFeatures: ["RTDS Simulation", "Arc Event Modeling", "System Protection", "Fault Analysis"]
    },
    // Project 4: Microgrid Integration
    {
        title: "Microgrid Integration Study",
        client: "San Diego Gas & Electric",
        image: "assets/images/media/Hardware_in_the_Loop.png",
        type: "Studies & Consulting",
        region: "California, USA",
        description: "Microgrid integration study using Hardware-in-the-Loop (RTDS) testing methodologies.",
        details: "Comprehensive microgrid integration analysis using Hardware-in-the-Loop testing to validate control systems and ensure seamless grid integration. The study covers islanding scenarios, protection coordination, and system stability.",
        keyFeatures: ["Hardware-in-the-Loop Testing", "Microgrid Integration", "Islanding Studies", "Control Validation"]
    },
    // Project 5: Viento Fronterizo Line
    {
        title: "Viento Fronterizo Transmission Line",
        client: "Ignis",
        image: "assets/images/media/transmission-lines.jpeg",
        type: "Grid & Transmission",
        region: "US-Mexico Border",
        description: "500 kV High-Voltage Overhead Lines spanning 20km across the US-Mexico border.",
        details: "Design and engineering of a critical cross-border transmission line connecting renewable energy resources in Mexico with US markets. This project involves complex regulatory coordination and international standards compliance.",
        keyFeatures: ["500 kV Transmission", "Cross-Border Project", "International Standards", "Renewable Integration"]
    },
    // Project 6: Ohio Substation Projects
    {
        title: "Ohio Substation Development",
        client: "Naturgy",
        image: "assets/images/media/mark.png",
        type: "Grid & Transmission",
        region: "Ohio, USA",
        description: "Mark Center Project – 69/13.8 kV Substation equipment specifications and design.",
        details: "Complete substation engineering including equipment specification, protection system design, and construction documentation for a new 69/13.8 kV distribution substation serving growing load centers in Ohio.",
        keyFeatures: ["Substation Engineering", "Equipment Specification", "Protection Design", "Distribution Systems"]
    },
    // Project 7: MISO System Impact
    {
        title: "MISO System Impact Study",
        client: "Midcontinent Independent System Operator",
        image: "assets/images/media/tower_grid_1.png",
        type: "Studies & Consulting",
        region: "MISO Territory, USA",
        description: "Comprehensive System Impact Study for transmission planning in the Midcontinent ISO market.",
        details: "Detailed analysis of system impacts for new generation and transmission projects within the MISO footprint. The study evaluates system reliability, congestion patterns, and infrastructure requirements.",
        keyFeatures: ["System Impact Analysis", "MISO Market Studies", "Transmission Planning", "Reliability Assessment"]
    },
    // Project 8: Google Data Center
    {
        title: "Google Data Center Optimization",
        client: "Google",
        image: "assets/images/media/servers.png",
        type: "Studies & Consulting",
        region: "Multiple US Locations",
        description: "Data center optimal location analysis and electrical load assessment for hyperscale facilities.",
        details: "Strategic siting analysis for Google's data center expansion including electrical infrastructure assessment, utility coordination, and load hosting capacity analysis. The project optimizes location selection for cost and reliability.",
        keyFeatures: ["Site Selection Analysis", "Load Assessment", "Utility Coordination", "Infrastructure Planning"]
    },
    // Project 9: Puerto Rico T&D
    {
        title: "Puerto Rico Transmission & Distribution",
        client: "TSK Engineering",
        image: "assets/images/media/Salinas.jpeg",
        type: "Grid & Transmission",
        region: "Puerto Rico",
        description: "115 kV Jobos & Salinas Overhead and Underground transmission lines for grid resilience.",
        details: "Critical transmission infrastructure development in Puerto Rico focusing on grid resilience and reliability improvement. The project includes both overhead and underground construction in challenging environmental conditions.",
        keyFeatures: ["115 kV Transmission", "Overhead & Underground", "Grid Resilience", "Hurricane Hardening"]
    },
    // Project 10: El Higo–Llano Sánchez
    {
        title: "El Higo–Llano Sánchez Transmission",
        client: "Gas Natural Fenosa",
        image: "assets/images/media/higo.png",
        type: "Grid & Transmission",
        region: "Panama",
        description: "230 kV double-circuit overhead transmission lines spanning 82.5 kilometers.",
        details: "Major transmission infrastructure project in Central America connecting key load centers and generation resources. The project enhances regional grid stability and enables increased power transfer capability.",
        keyFeatures: ["230 kV Double Circuit", "82.5 km Length", "Regional Grid", "Power Transfer Enhancement"]
    },
    // Project 11: Carmona Substation
    {
        title: "Carmona Substation Repowering",
        client: "Naturgy (Spain)",
        image: "assets/images/media/Carmona.jpeg",
        type: "Grid & Transmission",
        region: "Andalusia, Spain",
        description: "Repowering of existing 400kV high voltage transmission lines and substation infrastructure.",
        details: "Comprehensive upgrade and repowering of critical 400kV transmission infrastructure in Southern Spain. The project enhances transmission capacity and improves system reliability for renewable energy integration.",
        keyFeatures: ["400kV Repowering", "Infrastructure Upgrade", "Capacity Enhancement", "Renewable Integration"]
    },
    // Project 12: Valle 1 & 2 Lines
    {
        title: "Valle 1 & 2 Evacuation Lines",
        client: "Reganosa (Spain)",
        image: "assets/images/media/Renedo.jpeg",
        type: "Renewables",
        region: "Castile and León, Spain",
        description: "220kV evacuation lines designed specifically for photovoltaic plant grid connection.",
        details: "Specialized transmission lines designed for evacuating power from large-scale photovoltaic installations. The project ensures efficient and reliable connection of renewable generation to the Spanish transmission grid.",
        keyFeatures: ["220kV Evacuation", "PV Plant Connection", "Renewable Evacuation", "Grid Integration"]
    },
    // Project 13: Rio Maior & Torre de Bela
    {
        title: "Rio Maior & Torre de Bela Solar Plants",
        client: "ACISA (Portugal)",
        image: "assets/images/media/Rio_solar.jpeg",
        type: "Renewables",
        region: "Central Portugal",
        description: "272MWp photovoltaic plants with complete basic and detailed engineering design.",
        details: "Large-scale solar development project including comprehensive engineering design from concept through construction. The project represents significant renewable energy capacity addition to the Portuguese grid.",
        keyFeatures: ["272MWp Capacity", "Complete Engineering", "Large-Scale Solar", "Portuguese Grid"]
    },
    // Project 14: Cerca PV Plant
    {
        title: "Cerca Photovoltaic Plant",
        client: "EDP Renováveis",
        image: "assets/images/media/cerca_solar_field.jpeg",
        type: "Renewables",
        region: "Portugal",
        description: "202MWp photovoltaic plant permitting and tender design for utility-scale deployment.",
        details: "Complete permitting and tender documentation for a major utility-scale solar project in Portugal. Our work includes environmental assessments, grid connection studies, and detailed technical specifications.",
        keyFeatures: ["202MWp Solar Plant", "Permitting Support", "Tender Design", "Utility Scale"]
    }
];

// Global variables for project modal navigation
let currentProjectIndex = 0;

// Function to open project modal with navigation
function openProjectModal(projectIndex) {
    currentProjectIndex = projectIndex;
    const project = projectModalData[projectIndex];

    if (!project) {
        console.error('Project not found:', projectIndex);
        return;
    }

    // Create modal content with navigation structure similar to universal modal
    const modalContent = `
        <div id="project-modal-overlay" class="fixed inset-0 bg-black/75 backdrop-blur-sm z-[9999] flex items-center justify-center transition-all duration-500" style="opacity: 1;" onclick="closeProjectModal()">
            <div class="bg-white overflow-hidden shadow-2xl flex transform scale-100 transition-all duration-300 project-modal-container" onclick="event.stopPropagation()">

                <!-- Left Sidebar with Navigation (Desktop) -->
                <div class="hidden lg:block w-80 bg-gradient-to-b from-slate-900 to-slate-800 flex-shrink-0">
                    <!-- Header -->
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-xl font-bold text-white" id="project-sidebar-header">Our Global Projects</h2>
                            <button onclick="closeProjectModal()" class="text-white/60 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all">
                                <i data-lucide="x" class="w-5 h-5"></i>
                            </button>
                        </div>
                        <p class="text-slate-400 text-sm">Browse through our portfolio of infrastructure projects worldwide</p>
                    </div>

                    <!-- Navigation List -->
                    <div class="p-4 overflow-y-auto flex-1" style="max-height: calc(90vh - 200px);">
                        <div id="project-nav-list" class="space-y-2">
                            <!-- Navigation items will be populated by JavaScript -->
                        </div>
                    </div>
                </div>

                <!-- Main Content Area -->
                <div class="flex-1 flex flex-col">
                    <!-- Mobile Header -->
                    <div class="lg:hidden flex items-center justify-between p-4 border-b border-slate-200">
                        <h2 class="text-lg font-bold text-slate-900">Our Global Projects</h2>
                        <button onclick="closeProjectModal()" class="text-slate-600 hover:text-slate-900 p-2">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>

                    <!-- Mobile Navigation Tabs -->
                    <div class="lg:hidden border-b border-slate-200 bg-white">
                        <div class="project-mobile-scroll-container" style="overflow-x: scroll; overflow-y: hidden; -webkit-overflow-scrolling: touch; white-space: nowrap;">
                            <div id="project-mobile-nav-list" class="project-mobile-nav-inner" style="display: inline-flex; padding: 16px; gap: 8px; min-width: 100vw;">
                                <!-- Mobile navigation items will be populated by JavaScript -->
                            </div>
                        </div>
                    </div>
                    <style>
                        .project-mobile-scroll-container::-webkit-scrollbar {
                            display: none;
                        }
                        .project-mobile-scroll-container {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                        .project-mobile-nav-inner > * {
                            flex-shrink: 0;
                            white-space: nowrap;
                        }
                    </style>
                    <style>
                        .project-modal-container {
                            width: 100%;
                            height: 100%;
                            border-radius: 0;
                            max-width: 100vw;
                            max-height: 100vh;
                        }
                        @media (min-width: 1024px) {
                            .project-modal-container {
                                width: 90vw;
                                height: 90vh;
                                border-radius: 16px;
                                max-width: 1200px;
                            }
                        }
                    </style>

                    <!-- Project Content -->
                    <div class="flex-1 overflow-y-auto">
                        <div id="project-content">
                            <!-- Project content will be populated by JavaScript -->
                        </div>
                    </div>
                </div>

                <!-- Navigation Arrows -->
                <button id="project-prev-btn" onclick="switchProjectItem(currentProjectIndex - 1)" class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm lg:left-80">
                    <i data-lucide="chevron-left" class="w-6 h-6"></i>
                </button>
                <button id="project-next-btn" onclick="switchProjectItem(currentProjectIndex + 1)" class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm">
                    <i data-lucide="chevron-right" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalContent);
    document.body.style.overflow = 'hidden';

    // Build navigation and populate content
    buildProjectNavigation();
    updateProjectModalUI();

    // Initialize lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Handle keyboard navigation
    document.addEventListener('keydown', handleProjectModalKeyboard);
}

// Function to build project navigation
function buildProjectNavigation() {
    const navList = document.getElementById('project-nav-list');
    const mobileNavList = document.getElementById('project-mobile-nav-list');

    let html = '';
    let mobileHtml = '';

    // US Projects (indices 0-7)
    html += `<div class="mb-4">
        <div class="px-4 py-2 mb-2">
            <h3 class="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                <span class="text-lg">🇺🇸</span> United States Projects
            </h3>
        </div>`;

    projectModalData.slice(0, 8).forEach((project, i) => {
        const isActive = i === currentProjectIndex;
        const activeClasses = isActive ? 'bg-brand-primary/10 border-brand-primary' : 'border-transparent hover:bg-white/5';

        // Desktop Nav List (sidebar) - US Projects
        html += `<button onclick="switchProjectItem(${i})" id="project-nav-item-${i}" class="w-full text-left p-4 flex items-center gap-4 rounded-xl transition-all duration-300 group border-l-4 ${activeClasses} mb-2">
            <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-700">
                <img src="${project.image}" class="w-full h-full object-cover" alt="${project.title}">
            </div>
            <div class="flex-1 min-w-0">
                <span class="text-sm font-bold transition-colors line-clamp-2 leading-tight ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}">${project.title}</span>
                <span class="text-xs ${isActive ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-400'} block mt-1">${project.client}</span>
            </div>
        </button>`;
    });

    html += `</div>`;

    // EU & International Projects (indices 8-14)
    html += `<div class="mb-4">
        <div class="px-4 py-2 mb-2 border-t border-white/10 pt-4">
            <h3 class="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                <span class="text-lg">🌍</span> EU & International Projects
            </h3>
        </div>`;

    projectModalData.slice(8).forEach((project, i) => {
        const projectIndex = i + 8; // Adjust index for the full array
        const isActive = projectIndex === currentProjectIndex;
        const activeClasses = isActive ? 'bg-brand-primary/10 border-brand-primary' : 'border-transparent hover:bg-white/5';

        // Desktop Nav List (sidebar) - EU/International Projects
        html += `<button onclick="switchProjectItem(${projectIndex})" id="project-nav-item-${projectIndex}" class="w-full text-left p-4 flex items-center gap-4 rounded-xl transition-all duration-300 group border-l-4 ${activeClasses} mb-2">
            <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-700">
                <img src="${project.image}" class="w-full h-full object-cover" alt="${project.title}">
            </div>
            <div class="flex-1 min-w-0">
                <span class="text-sm font-bold transition-colors line-clamp-2 leading-tight ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}">${project.title}</span>
                <span class="text-xs ${isActive ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-400'} block mt-1">${project.client}</span>
            </div>
        </button>`;
    });

    html += `</div>`;

    // Mobile Navigation - Add separators for mobile too
    // US Projects Mobile
    mobileHtml += `<span style="display: inline-flex; align-items: center; gap: 4px; padding: 8px 12px; font-size: 12px; font-weight: bold; color: #64748b; white-space: nowrap;">🇺🇸 US</span>`;

    projectModalData.slice(0, 8).forEach((project, i) => {
        const isActive = i === currentProjectIndex;
        const bgColor = isActive ? '#1e40af' : '#ffffff';
        const textColor = isActive ? '#ffffff' : '#475569';
        const borderColor = isActive ? '#1e40af' : '#e2e8f0';

        mobileHtml += `<button onclick="switchProjectItem(${i})" style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; border: 1px solid ${borderColor}; background-color: ${bgColor}; color: ${textColor}; white-space: nowrap; transition: all 0.3s;">${project.title}</button>`;
    });

    // EU/International Projects Mobile
    mobileHtml += `<span style="display: inline-flex; align-items: center; gap: 4px; padding: 8px 12px; font-size: 12px; font-weight: bold; color: #64748b; white-space: nowrap; margin-left: 16px;">🌍 EU/Intl</span>`;

    projectModalData.slice(8).forEach((project, i) => {
        const projectIndex = i + 8;
        const isActive = projectIndex === currentProjectIndex;
        const bgColor = isActive ? '#1e40af' : '#ffffff';
        const textColor = isActive ? '#ffffff' : '#475569';
        const borderColor = isActive ? '#1e40af' : '#e2e8f0';

        mobileHtml += `<button onclick="switchProjectItem(${projectIndex})" style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; border: 1px solid ${borderColor}; background-color: ${bgColor}; color: ${textColor}; white-space: nowrap; transition: all 0.3s;">${project.title}</button>`;
    });

    if (navList) navList.innerHTML = html;
    if (mobileNavList) mobileNavList.innerHTML = mobileHtml;
}

// Function to switch project item
function switchProjectItem(newIndex) {
    if (newIndex < 0 || newIndex >= projectModalData.length) return;

    currentProjectIndex = newIndex;
    buildProjectNavigation();
    updateProjectModalUI();

    // Re-initialize lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Function to update project modal UI
function updateProjectModalUI() {
    const project = projectModalData[currentProjectIndex];
    const contentDiv = document.getElementById('project-content');
    const prevBtn = document.getElementById('project-prev-btn');
    const nextBtn = document.getElementById('project-next-btn');

    // Update navigation button states
    if (prevBtn) {
        prevBtn.style.opacity = currentProjectIndex === 0 ? '0.5' : '1';
        prevBtn.disabled = currentProjectIndex === 0;
    }
    if (nextBtn) {
        nextBtn.style.opacity = currentProjectIndex === projectModalData.length - 1 ? '0.5' : '1';
        nextBtn.disabled = currentProjectIndex === projectModalData.length - 1;
    }

    // Update content
    if (contentDiv && project) {
        contentDiv.innerHTML = `
            <!-- Project Hero Image -->
            <div class="relative overflow-hidden" style="height: 200px;">
                <img src="${project.image}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" alt="${project.title}">
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent);"></div>
                <div style="position: absolute; bottom: 16px; left: 16px; right: 16px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
                        <span style="padding: 6px 12px; font-size: 12px; font-weight: bold; border-radius: 9999px; background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); color: white;">${project.type}</span>
                        <span style="color: rgba(255,255,255,0.8); font-size: 14px;"><i data-lucide="map-pin" class="w-4 h-4 inline mr-1"></i>${project.region}</span>
                    </div>
                    <h1 style="font-size: 24px; font-family: serif; font-weight: bold; color: white; margin-bottom: 8px; line-height: 1.2;">${project.title}</h1>
                    <p style="color: rgba(255,255,255,0.9); font-size: 16px;">${project.client}</p>
                </div>
            </div>

            <!-- Project Details -->
            <div class="p-6 md:p-8">
                <div class="space-y-6">
                    <!-- Description -->
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Project Overview</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">${project.description}</p>
                        <p class="text-slate-700 leading-relaxed">${project.details}</p>
                    </div>

                    <!-- Key Features -->
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Key Features</h3>
                        <div class="grid md:grid-cols-2 gap-3">
                            ${project.keyFeatures.map(feature => `
                                <div class="flex items-center gap-2 text-slate-700">
                                    <div class="w-2 h-2 bg-brand-primary rounded-full"></div>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Contact CTA -->
                    <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Interested in Similar Projects?</h3>
                        <p class="text-slate-600 mb-4">Contact our team to discuss how we can help with your infrastructure challenges.</p>
                        <a href="#contact" onclick="closeProjectModal()" class="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold transition-all">
                            Get in Touch <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Function to handle keyboard navigation
function handleProjectModalKeyboard(e) {
    if (!document.getElementById('project-modal-overlay')) return;

    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            switchProjectItem(currentProjectIndex - 1);
            break;
        case 'ArrowRight':
            e.preventDefault();
            switchProjectItem(currentProjectIndex + 1);
            break;
        case 'Escape':
            e.preventDefault();
            closeProjectModal();
            break;
    }
}

// Function to close project modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal-overlay');
    if (modal) {
        // Remove keyboard event listener
        document.removeEventListener('keydown', handleProjectModalKeyboard);

        // Remove modal
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Update arrow visibility based on scroll position
function updateArrowVisibility(rowId) {
    const row = document.getElementById(rowId);
    if (!row) return;

    const leftArrow = document.getElementById(`${rowId}-left-arrow`);
    const rightArrow = document.getElementById(`${rowId}-right-arrow`);

    if (!leftArrow || !rightArrow) return;

    const scrollLeft = row.scrollLeft;
    const maxScroll = row.scrollWidth - row.clientWidth;

    // Handle left arrow and left gradient
    if (scrollLeft <= 0) {
        leftArrow.style.display = 'none';
        row.classList.remove('show-left-gradient');
    } else {
        leftArrow.style.display = 'flex';
        row.classList.add('show-left-gradient');
    }

    // Handle right arrow and right gradient
    if (scrollLeft >= maxScroll - 1) {
        rightArrow.style.display = 'none';
        row.classList.remove('show-right-gradient');
    } else {
        rightArrow.style.display = 'flex';
        row.classList.add('show-right-gradient');
    }
}

// Initialize arrow visibility on page load
function initializeArrowVisibility() {
    updateArrowVisibility('row1');
    updateArrowVisibility('row2');

    // Add scroll event listeners to update arrows during manual scrolling
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    if (row1) {
        row1.addEventListener('scroll', () => updateArrowVisibility('row1'));
    }
    if (row2) {
        row2.addEventListener('scroll', () => updateArrowVisibility('row2'));
    }

    // Initialize project slider arrows
    updateProjectArrowVisibility('projects-row1');
    updateProjectArrowVisibility('projects-row2');

    // Add scroll event listeners for project sliders
    const projectsRow1 = document.getElementById('projects-row1');
    const projectsRow2 = document.getElementById('projects-row2');

    if (projectsRow1) {
        projectsRow1.addEventListener('scroll', () => updateProjectArrowVisibility('projects-row1'));
    }
    if (projectsRow2) {
        projectsRow2.addEventListener('scroll', () => updateProjectArrowVisibility('projects-row2'));
    }
}

// Add drag scrolling functionality
function initializeDragScrolling() {
    const scrollContainers = document.querySelectorAll('#row1, #row2, #projects-row1, #projects-row2');

    scrollContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            // Only enable drag if not clicking on a card
            if (!e.target.closest('.group')) {
                isDown = true;
                container.classList.add('grabbing');
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
                e.preventDefault();
            }
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('grabbing');
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('grabbing');
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            container.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        container.addEventListener('touchstart', (e) => {
            if (!e.target.closest('.group')) {
                startX = e.touches[0].pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
            }
        });

        container.addEventListener('touchmove', (e) => {
            if (!e.target.closest('.group')) {
                const x = e.touches[0].pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
                e.preventDefault();
            }
        });
    });
}

// Initialize drag scrolling when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for other initializations
    setTimeout(() => {
        initializeDragScrolling();
        initializeArrowVisibility();
        console.log('Drag scrolling and arrow visibility initialized');
    }, 500);
});

// Enhanced Project Map functionality
let projectMap;
let allMarkers = [];
let layerGroups = {};
let currentRegion = 'usa';

// Global filter and region functions (must be defined before map initialization)
window.toggleFilter = function (type) {
    console.log('Toggle filter called for type:', type); // Debug log
    const layer = layerGroups[type];
    const btn = document.getElementById('btn-' + type);

    if (!layer || !btn) {
        console.error('Layer or button not found for type:', type);
        return;
    }

    if (projectMap && projectMap.hasLayer(layer)) {
        // Hide layer
        projectMap.removeLayer(layer);
        btn.classList.add('opacity-50', 'grayscale');
        btn.classList.remove('ring-2', 'ring-offset-1');

        // Remove type-specific backgrounds
        btn.classList.remove('ring-blue-100', 'bg-blue-50', 'ring-green-100', 'bg-green-50', 'ring-indigo-100', 'bg-indigo-50');
        console.log('Layer hidden for type:', type);
    } else if (projectMap) {
        // Show layer
        projectMap.addLayer(layer);
        btn.classList.remove('opacity-50', 'grayscale');
        btn.classList.add('ring-2', 'ring-offset-1');

        // Add type-specific backgrounds
        if (type === 'grid') {
            btn.classList.add('ring-blue-100', 'bg-blue-50');
        }
        if (type === 'renew') {
            btn.classList.add('ring-green-100', 'bg-green-50');
        }
        if (type === 'study') {
            btn.classList.add('ring-indigo-100', 'bg-indigo-50');
        }
        console.log('Layer shown for type:', type);
    }
    if (typeof updateProjectCounter === 'function') updateProjectCounter();
    if (typeof generateMobileProjectList === 'function') generateMobileProjectList();
};

window.focusRegion = function(region) {
    console.log('Focusing on region:', region); // Debug log
    currentRegion = region;

    // Update button states - find all region buttons (usa, europe, global)
    const regionButtons = ['btn-usa', 'btn-europe', 'btn-global'];
    regionButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.classList.remove('bg-brand-primary', 'text-white', 'shadow-md');
            btn.classList.add('text-slate-600');
        }
    });

    // Set active button
    const activeBtn = document.getElementById(`btn-${region}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-brand-primary', 'text-white', 'shadow-md');
        activeBtn.classList.remove('text-slate-600');
    }

    // Focus map on region
    const regionBounds = {
        usa: { center: [39.8283, -98.5795], zoom: 3 },
        europe: { center: [39.5, -4.0], zoom: 6 }, // Spain/Portugal focus - centered on Iberian Peninsula
        global: { center: [30.0, -40.0], zoom: 2 }
    };

    const bounds = regionBounds[region];
    if (projectMap) {
        projectMap.setView(bounds.center, bounds.zoom);
        console.log('Map view set to:', bounds);
    }

    if (typeof updateProjectCounter === 'function') updateProjectCounter();
    if (typeof generateMobileProjectList === 'function') generateMobileProjectList();
};

function initializeProjectMap() {
    // Initialize Map - Start focused on USA with wider zoom
    projectMap = L.map('project-map', {
        scrollWheelZoom: false,
        zoomControl: false
    }).setView([39.8283, -98.5795], 3); // USA center with wider zoom to show whole USA

    // Add custom zoom controls
    L.control.zoom({
        position: 'bottomright'
    }).addTo(projectMap);

    // Add Tile Layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(projectMap);

    // Enhanced Icon Factory with hover effects
    const createIcon = function (color, size = 'normal') {
        const sizeMap = {
            normal: { width: 14, height: 14, iconSize: [18, 18] },
            highlighted: { width: 18, height: 18, iconSize: [22, 22] }
        };
        const s = sizeMap[size];
        return L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="map-marker-dot" style="background-color: ${color}; width: ${s.width}px; height: ${s.height}px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 4px rgba(0,0,0,0.15); transition: all 0.3s ease; cursor: pointer; animation: blinkPulse 2s infinite;"></div>`,
            iconSize: s.iconSize,
            iconAnchor: [s.iconSize[0]/2, s.iconSize[1]/2],
            popupAnchor: [0, -10]
        });
    };

    const icons = {
        grid: { normal: createIcon('#6b7280'), highlighted: createIcon('#6b7280', 'highlighted') },
        renew: { normal: createIcon('#16a34a'), highlighted: createIcon('#16a34a', 'highlighted') },
        study: { normal: createIcon('#4f46e5'), highlighted: createIcon('#4f46e5', 'highlighted') }
    };

    // Initialize Layer Groups for Filtering
    layerGroups = {
        grid: L.layerGroup().addTo(projectMap),
        renew: L.layerGroup().addTo(projectMap),
        study: L.layerGroup().addTo(projectMap)
    };

    // Enhanced Project Data with regions
    const projects = [
        // USA Projects
        { lat: 40.7128, lng: -74.0060, title: "NYPA & NYSERDA Initiatives", client: "New York Power Authority", desc: "Advanced Power Flow Controller deployment & Wind power enabling technologies.", type: "grid", image: "assets/images/media/wind-farm-global.png", region: "usa" },
        { lat: 37.5407, lng: -77.4360, title: "Dominion Energy Analysis", client: "Dominion Energy", desc: "Hosting capacity analysis & Solar integration cost analysis.", type: "study", image: "assets/images/media/solar_wind.jpeg", region: "usa" },
        { lat: 30.6333, lng: -96.3478, title: "Project Grimes & Mark Center", client: "Naturgy", desc: "138/34.5/13.8 kV Substation technical specs & ERCOT interconnection.", type: "grid", image: "assets/images/media/Grimes.jpg", region: "usa" },
        { lat: 34.0522, lng: -118.2437, title: "SCE Arc Events Modeling", client: "Southern California Edison", desc: "Power systems arc events modeling using RTDS.", type: "study", image: "assets/images/media/solar_wind.jpeg", region: "usa" },
        { lat: 32.7157, lng: -117.1611, title: "Microgrid Integration", client: "SDG&E", desc: "Microgrid integration study using Hardware-in-the-Loop (RTDS).", type: "study", image: "assets/images/media/Hardware_in_the_Loop.png", region: "usa" },
        { lat: 32.5600, lng: -116.6000, title: "Viento Fronterizo Line", client: "Ignis", desc: "500 kV High-Voltage Overhead Lines (20km cross-border).", type: "grid", image: "assets/images/media/transmission-lines.jpeg", region: "usa" },
        { lat: 40.4173, lng: -82.9071, title: "Ohio Substation Projects", client: "Naturgy", desc: "Project Mark Center – 69/13.8 kV Substation equipment specs.", type: "grid", image: "assets/images/media/mark.png", region: "usa" },
        { lat: 38.0000, lng: -97.0000, title: "MISO System Impact", client: "MISO", desc: "System Impact Study for Midcontinent ISO.", type: "study", image: "assets/images/media/tower_grid_1.png", region: "usa" },
        { lat: 35.0000, lng: -100.0000, title: "Google Data Center", client: "Google", desc: "Data center optimal location & load analysis.", type: "study", image: "assets/images/media/servers.png", region: "usa" },
        { lat: 18.2208, lng: -66.5901, title: "Puerto Rico T&D", client: "TSK", desc: "115 kV Jobos & Salinas Overhead/Buried Lines.", type: "grid", image: "assets/images/media/Salinas.jpeg", region: "usa" },

        // Latin America
        { lat: 8.5380, lng: -80.7821, title: "El Higo–Llano Sánchez", client: "Gas Natural Fenosa", desc: "230 kV double-circuit overhead lines (82.5 km).", type: "grid", image: "assets/images/media/higo.png", region: "global" },

        // Europe Projects
        { lat: 37.4697, lng: -5.6415, title: "Carmona Substation", client: "Naturgy (Spain)", desc: "Repowering of 400kV high voltage lines.", type: "grid", image: "assets/images/media/Carmona.jpeg", region: "europe" },
        { lat: 41.6523, lng: -4.7245, title: "Valle 1 & 2 Lines", client: "Reganosa (Spain)", desc: "220kV evacuation lines for PV plants.", type: "renew", image: "assets/images/media/Renedo.jpeg", region: "europe" },
        { lat: 39.3999, lng: -8.2245, title: "Rio Maior & Torre de Bela", client: "ACISA (Portugal)", desc: "272MWp PV Plants - Basic and Detailed Design.", type: "renew", image: "assets/images/media/Rio_solar.jpeg", region: "europe" },
        { lat: 38.7223, lng: -9.1393, title: "Cerca PV Plant", client: "EDP Renováveis", desc: "202MWp PV Plant Permitting and Tender Design.", type: "renew", image: "assets/images/media/cerca_solar_field.jpeg", region: "europe" }
    ];

    window.projectsData = projects; // Store globally for access

    // Add Enhanced Markers
    projects.forEach((p, index) => {
        const marker = L.marker([p.lat, p.lng], {
            icon: icons[p.type].normal,
            riseOnHover: true
        });

        // Enhanced click functionality with debugging
        marker.on('click', function(e) {
            console.log('Marker clicked:', p.title); // Debug log
            e.originalEvent.stopPropagation();
            window.showProjectShowcase(p);
        });

        // Hover effects
        marker.on('mouseover', function() {
            marker.setIcon(icons[p.type].highlighted);
        });

        marker.on('mouseout', function() {
            marker.setIcon(icons[p.type].normal);
        });

        // Store project data with marker
        marker.projectData = p;
        allMarkers.push(marker);
        layerGroups[p.type].addLayer(marker);
    });

    // Update project counter
    updateProjectCounter();

    // Generate mobile project list
    generateMobileProjectList();

    // Initialize with USA focus and ensure all filters are active by default
    ['grid', 'renew', 'study'].forEach(type => {
        const btn = document.getElementById('btn-' + type);
        if (btn) {
            btn.classList.add('ring-2', 'ring-offset-1');
            if (type === 'grid') btn.classList.add('ring-blue-100', 'bg-blue-50');
            if (type === 'renew') btn.classList.add('ring-green-100', 'bg-green-50');
            if (type === 'study') btn.classList.add('ring-indigo-100', 'bg-indigo-50');
            console.log('Initialized filter button:', type);
        } else {
            console.error('Button not found for type:', type);
        }
    });

    window.addEventListener('resize', function () {
        projectMap.invalidateSize();
    });

    // Show interactive map hint after map loads (simplified version)
    setTimeout(() => {
        showMapHint();
    }, 3000); // Show after 3 seconds
}

// Simplified Map Hint Functions
function showMapHint() {
    console.log('🗺️ Showing map interaction hint...');
    const hint = document.getElementById('map-interaction-hint');

    if (hint) {
        hint.style.display = 'block';
        console.log('✅ Map hint should now be visible!');

        // Hide only on map interaction (no auto-hide timer)
        if (projectMap) {
            // Listen for map clicks, drags, or marker clicks
            projectMap.on('click', hideMapHint);
            projectMap.on('drag', hideMapHint);
            projectMap.on('zoom', hideMapHint);

            console.log('🎯 Hint will stay visible until map interaction');
        }

        // Also hide when a project showcase is opened (marker clicked)
        const originalShowcase = window.showProjectShowcase;
        if (originalShowcase && !window.showProjectShowcase._hintModified) {
            window.showProjectShowcase = function(project) {
                console.log('📍 Project marker clicked, hiding hint');
                hideMapHint();
                return originalShowcase(project);
            };
            window.showProjectShowcase._hintModified = true;
        }
    } else {
        console.log('❌ Map hint element not found');
    }
}

function hideMapHint() {
    console.log('🗺️ Hiding map interaction hint...');
    const hint = document.getElementById('map-interaction-hint');
    if (hint) {
        hint.style.display = 'none';

        // Remove map event listeners to prevent multiple calls
        if (projectMap) {
            projectMap.off('click', hideMapHint);
            projectMap.off('drag', hideMapHint);
            projectMap.off('zoom', hideMapHint);
        }

        console.log('✅ Map hint hidden and event listeners removed');
    }
}

// Manual test function - you can call this in console
window.testMapHint = function() {
    console.log('🧪 Manual test - showing map hint');
    showMapHint();
};

// Enhanced Project Showcase
window.showProjectShowcase = function(project) {
    console.log('Showing project:', project.title); // Debug log
    const showcase = document.getElementById('project-showcase');

    if (!showcase) {
        console.error('Project showcase element not found');
        return;
    }

    const typeColors = {
        grid: { bg: 'bg-blue-100', text: 'text-blue-800' },
        renew: { bg: 'bg-green-100', text: 'text-green-800' },
        study: { bg: 'bg-indigo-100', text: 'text-indigo-800' }
    };

    // Update showcase content
    const showcaseImage = document.getElementById('showcase-image');
    const showcaseTitle = document.getElementById('showcase-title');
    const showcaseClient = document.getElementById('showcase-client');
    const showcaseDescription = document.getElementById('showcase-description');
    const showcaseBadge = document.getElementById('showcase-type-badge');
    const showcaseLocation = document.getElementById('showcase-location');

    if (showcaseImage) showcaseImage.src = project.image;
    if (showcaseTitle) showcaseTitle.textContent = project.title;
    if (showcaseClient) showcaseClient.textContent = project.client;
    if (showcaseDescription) showcaseDescription.textContent = project.desc;

    // Set location info
    if (showcaseLocation) {
        const locationText = project.region === 'usa' ? 'United States' :
                           project.region === 'europe' ? 'Europe (Spain/Portugal)' :
                           'International';
        showcaseLocation.textContent = `${locationText} • Lat: ${project.lat.toFixed(2)}, Lng: ${project.lng.toFixed(2)}`;
    }

    if (showcaseBadge) {
        showcaseBadge.textContent = project.type === 'grid' ? 'Grid & Transmission' :
                          project.type === 'renew' ? 'Renewables' : 'Studies & Consulting';
        showcaseBadge.className = `px-3 py-1 text-sm font-bold rounded-full ${typeColors[project.type].bg} ${typeColors[project.type].text}`;
    }

    // Show showcase with enhanced side panel animation
    showcase.classList.remove('translate-x-full', 'opacity-0', 'hide');
    showcase.classList.add('translate-x-0', 'opacity-100', 'show');

    // Force reflow to ensure proper animation
    showcase.offsetHeight;

    // Re-initialize icons for the showcase
    if (window.lucide) {
        lucide.createIcons({ root: showcase });
    }
};

window.closeProjectShowcase = function() {
    const showcase = document.getElementById('project-showcase');
    if (showcase) {
        showcase.classList.add('translate-x-full', 'opacity-0', 'hide');
        showcase.classList.remove('translate-x-0', 'opacity-100', 'show');
    }
};

// Update project counter
function updateProjectCounter() {
    const visibleLayers = Object.keys(layerGroups).filter(type =>
        projectMap.hasLayer(layerGroups[type])
    );

    let count = 0;
    visibleLayers.forEach(type => {
        layerGroups[type].eachLayer(() => count++);
    });

    document.getElementById('project-counter').textContent = count;
}

// Generate mobile project list
function generateMobileProjectList() {
    const container = document.getElementById('mobile-project-list');
    const filteredProjects = window.projectsData.filter(p => {
        if (currentRegion !== 'global' && p.region !== currentRegion) return false;
        return Object.keys(layerGroups).some(type =>
            projectMap.hasLayer(layerGroups[type]) && p.type === type
        );
    });

    const typeColors = {
        grid: 'border-l-blue-500',
        renew: 'border-l-green-500',
        study: 'border-l-indigo-500'
    };

    container.innerHTML = filteredProjects.map(p => `
        <div class="bg-white border-l-4 ${typeColors[p.type]} p-4 rounded-r-lg shadow-sm">
            <div class="flex gap-3">
                <img src="${p.image}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0" alt="${p.title}">
                <div class="flex-1 min-w-0">
                    <div class="text-xs text-slate-500 font-medium mb-1">${p.client}</div>
                    <h5 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">${p.title}</h5>
                    <p class="text-slate-600 text-xs leading-relaxed line-clamp-2">${p.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
}


