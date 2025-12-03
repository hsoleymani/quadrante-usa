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

// --- Data Definitions ---
const aboutData = [
    // Not used for clicking anymore
];

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
        content: `<p class="mb-4">Our team at Right Analytics can provide your organization with a wide range of solutions for Transmission and Distribution Planning, and control. We leverage best software tools and processes to find solutions for the toughest challenges facing the industry today.</p><p>Our expertise includes short-circuit analysis, load-flow studies, capacity expansion, and grid control optimization.</p>`
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
    }
];

// UPDATED EXPERIENCE DATA (For the Project Modal, now Data Center Expertise)
const experienceData = [
    {
        image: "assets/images/media/data_servers.jpeg",
        title: "Engineering Excellence",
        content: `<p class="mb-4"><strong>Precision-engineered systems tailored for uptime and performance powering AI-ready infrastructure.</strong></p><p>Our solutions include High-Performance Computing (HPC) cooling optimization, redundancy planning (N+1, 2N), and advanced electrical distribution design to support the intense power density requirements of modern AI workloads.</p>`
    },
    {
        image: "assets/images/media/data_server_2.jpeg",
        title: "Local Regulations and Permissions",
        content: `<p class="mb-4"><strong>Full compliance with planning, zoning, and environmental permits, and extensive knowledge of local power grid.</strong></p><p>We navigate complex regulatory landscapes, managing everything from Environmental Impact Assessments (EIA) to grid interconnection agreements. Our deep understanding of local ISO/RTO policies ensures faster time-to-power for your data center projects.</p>`
    },
    {
        image: "assets/images/media/data_servers_3.png",
        title: "Sustainability",
        content: `<p class="mb-4"><strong>Sustainable design aligned with international standards and certifications, with the highest PUE and WUE standards.</strong></p><p>We prioritize green building certifications (LEED, BREEAM) and innovative thermal management to minimize Power Usage Effectiveness (PUE) and Water Usage Effectiveness (WUE), driving operational efficiency while meeting corporate ESG goals.</p>`
    }
];

const teamData = [
    {
        image: "assets/images/media/team-saman-babaei.jpeg",
        title: "Dr. Saman Babaei",
        content: `
        <h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4">Founder / Chief Power Systems Engineer - Right Analytics</h4>
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
        <p class="mb-4">Eduardo Llorente leads Quadrante's operations in the United States, driving the company's growth strategy and overseeing major infrastructure projects. With a background in Civil Engineering and Executive Management, he ensures project delivery excellence.</p>
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
    if (window.scrollY > 20) {
        header.classList.add('shadow-xl', 'py-3');
        header.classList.remove('py-6');
    } else {
        header.classList.remove('shadow-xl', 'py-3');
        header.classList.add('py-6');
    }
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressWidth = (window.scrollY / totalHeight) * 100;
    progress.style.width = `${progressWidth}%`;
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

    // Manual controls
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

    console.log('Slider initialized with', slides.length, 'slides');
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

// Acquisition Modal (Kept for completeness, though unused in live UI)
function openAcquisitionModal() {
    const btn = document.querySelector('a[onclick="openAcquisitionModal()"]');
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = "Coming Soon";
        setTimeout(() => btn.innerHTML = originalText, 2000);
    }
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
    else if (section === 'projects') dataArray = experienceData;
    else if (section === 'about') dataArray = aboutData;
    else dataArray = teamData;

    let headerText = 'Our Competencies';
    if (section === 'projects') headerText = 'Data Center Expertise';
    else if (section === 'team') headerText = 'Our Leadership';
    else if (section === 'about') headerText = 'Company Profile';

    if (document.getElementById('sidebar-header')) {
        document.getElementById('sidebar-header').innerText = headerText;
    }

    // Build Nav List
    let html = '';
    let mobileHtml = '';

    dataArray.forEach((item, i) => {
        const isActive = i === index;
        const activeClasses = isActive ? 'bg-brand-primary/10 border-brand-primary' : 'border-transparent hover:bg-white/5';

        // Desktop Nav List
        html += `<button onclick="switchModalItem(${i})" id="nav-item-${i}" class="w-full text-left p-4 flex items-center gap-4 rounded-xl transition-all duration-300 group border-l-4 ${activeClasses}">
            <span class="text-sm font-bold transition-colors line-clamp-2 leading-tight ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}">${item.title}</span>
        </button>`;

        // Mobile Nav List
        mobileHtml += `<button onclick="switchModalItem(${i})" class="inline-flex items-center gap-2 px-4 py-2 mx-1 rounded-full text-xs font-bold border transition-colors ${isActive ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-slate-600 border-slate-200'}">${item.title}</button>`;
    });

    if (navList) navList.innerHTML = html;
    if (mobileNavList) mobileNavList.innerHTML = mobileHtml;

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
    else if (currentModalSection === 'projects') dataArray = experienceData;
    else if (currentModalSection === 'about') dataArray = aboutData;
    else dataArray = teamData;

    // Update desktop navigation highlight
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

    // Update mobile navigation highlight
    const mobileNavList = document.getElementById('mobile-nav-list');
    if (mobileNavList) {
        mobileNavList.querySelectorAll('button').forEach((button, i) => {
            if (i === index) {
                button.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                button.classList.add('bg-brand-primary', 'text-white', 'border-brand-primary');
            } else {
                button.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
                button.classList.remove('bg-brand-primary', 'text-white', 'border-brand-primary');
            }
        });
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
    else if (currentModalSection === 'projects') dataArray = experienceData;
    else if (currentModalSection === 'about') dataArray = aboutData;
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
    document.getElementById('modal-body').innerHTML = data.content;

    let label = 'Featured';
    if (currentModalSection === 'expertise') label = 'Competency';
    else if (currentModalSection === 'projects') label = 'Project';
    else if (currentModalSection === 'about') label = 'About Us';
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

    if (currentModalSection === 'about') {
        // Map/About specific:
        // 1. Expand Modal Width significantly
        modalContainer.classList.remove('max-w-7xl');
        modalContainer.classList.add('max-w-[95vw]');

        // 2. Image takes larger width (65%) to fit map
        // 3. Use object-contain to show full map without cropping
        // 4. Hide Sidebar Menu & Gradient

        sidebar.classList.add('md:w-[65%]');
        contentSection.classList.add('md:w-[35%]');
        imgElement.classList.add('object-contain'); // Fit whole map
        imgElement.classList.add('bg-white'); // Add white bg for map if transparent

        if (sidebarInnerContent) sidebarInnerContent.classList.add('hidden');
        if (gradientOverlay) gradientOverlay.classList.add('hidden');

    } else {
        // Default behavior

        sidebar.classList.add('md:w-1/2');
        contentSection.classList.add('md:w-1/2');
        imgElement.classList.add('object-cover');
        imgElement.classList.remove('bg-white');

        if (sidebarInnerContent) sidebarInnerContent.classList.remove('hidden');
        if (gradientOverlay) gradientOverlay.classList.remove('hidden');
    }

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
    } else if (currentModalSection === 'about') {
        chipsHtml = `
            <button onclick="prefillMessage('modal-question-box', 'Which specific regions do you operate in?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Regions</button>
            <button onclick="prefillMessage('modal-question-box', 'Tell me more about your work with ISOs.')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">ISO Experience</button>
            <button onclick="prefillMessage('modal-question-box', 'I am interested in partnership opportunities.')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Partnership</button>
        `;
    } else if (currentModalSection === 'projects') {
        chipsHtml = `
            <button onclick="prefillMessage('modal-question-box', 'We have a similar project and need support.')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Similar Project</button>
            <button onclick="prefillMessage('modal-question-box', 'What was the timeline for this project?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Timeline Inquiry</button>
            <button onclick="prefillMessage('modal-question-box', 'Can you share more details on the methodology used?')" class="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">Methodology</button>
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

// Enhanced Project Map functionality
let projectMap;
let allMarkers = [];
let layerGroups = {};
let currentRegion = 'usa';

function initializeProjectMap() {
    // Initialize Map - Start focused on USA
    projectMap = L.map('project-map', {
        scrollWheelZoom: false,
        zoomControl: false
    }).setView([39.8283, -98.5795], 4); // USA center

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

    // Filter Logic
    window.toggleFilter = function (type) {
        const layer = layerGroups[type];
        const btn = document.getElementById('btn-' + type);

        if (projectMap.hasLayer(layer)) {
            projectMap.removeLayer(layer);
            btn.classList.add('opacity-50', 'grayscale');
            btn.classList.remove('ring-2', 'ring-offset-1', 'bg-blue-50', 'bg-green-50', 'bg-indigo-50');
        } else {
            projectMap.addLayer(layer);
            btn.classList.remove('opacity-50', 'grayscale');
            btn.classList.add('ring-2', 'ring-offset-1');

            if (type === 'grid') btn.classList.add('bg-blue-50');
            if (type === 'renew') btn.classList.add('bg-green-50');
            if (type === 'study') btn.classList.add('bg-indigo-50');
        }
        updateProjectCounter();
    };

    // Region Focus Logic
    window.focusRegion = function(region) {
        console.log('Focusing on region:', region); // Debug log
        currentRegion = region;

        // Update button states
        document.querySelectorAll('[id^="btn-"]:not([id*="grid"]):not([id*="renew"]):not([id*="study"])').forEach(btn => {
            btn.classList.remove('bg-brand-primary', 'text-white', 'shadow-md');
            btn.classList.add('text-slate-600');
        });

        const activeBtn = document.getElementById(`btn-${region}`);
        if (activeBtn) {
            activeBtn.classList.add('bg-brand-primary', 'text-white', 'shadow-md');
            activeBtn.classList.remove('text-slate-600');
        }

        // Focus map on region
        const regionBounds = {
            usa: { center: [39.8283, -98.5795], zoom: 4 },
            europe: { center: [39.5, -4.0], zoom: 6 }, // Spain/Portugal focus - centered on Iberian Peninsula
            global: { center: [30.0, -40.0], zoom: 3 }
        };

        const bounds = regionBounds[region];
        if (projectMap) {
            projectMap.setView(bounds.center, bounds.zoom);
        }

        updateProjectCounter();
        generateMobileProjectList();
    };

    // Initialize with USA focus
    ['grid', 'renew', 'study'].forEach(type => {
        const btn = document.getElementById('btn-' + type);
        if (type === 'grid') btn.classList.add('ring-blue-100', 'bg-blue-50');
        if (type === 'renew') btn.classList.add('ring-green-100', 'bg-green-50');
        if (type === 'study') btn.classList.add('ring-indigo-100', 'bg-indigo-50');
    });

    window.addEventListener('resize', function () {
        projectMap.invalidateSize();
    });
}

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