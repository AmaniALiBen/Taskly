const gig = {
    title: "Elite Branding & Identity System",
    seller: "Vector Aura",
    sellerLevel: 3, // 1: New Seller, 2: Professional, 3: Expert
    images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1000",
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=1000",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?w=1000"
    ],
    desc: [
        "Looking for a world-class visual identity? I provide top-tier branding systems for tech startups and modern enterprises.",
        "My process involves deep research, moodboarding, and precision design to ensure your brand stands out."
    ],
    packages: {
        basic: {
            name: "Startup Foundation",
            price: 150,
            desc: "Perfect for early stage startups needing a professional starting point.",
            delivery: "3 Days Delivery",
            revisions: "2 Revisions",
            features: ["Professional Logo", "Color Palette", "High-Res PNG/JPG"]
        },
        standard: {
            name: "Business Growth",
            price: 350,
            desc: "A comprehensive branding kit for growing businesses looking to scale.",
            delivery: "5 Days Delivery",
            revisions: "5 Revisions",
            features: ["Everything in Basic", "Source Files (AI)", "Social Media Kit"]
        },
        premium: {
            name: "Enterprise Elite",
            price: 750,
            desc: "The ultimate identity solution including motion and full brand guidelines.",
            delivery: "10 Days Delivery",
            revisions: "Unlimited",
            features: ["Everything in Standard", "Brand Guidelines", "Motion Logo"]
        }
    }
};

let currentTab = "basic";

function load() {
    document.getElementById("title").innerText = gig.title;
    document.getElementById("seller").innerText = gig.seller;
    document.getElementById("avatar").src = "https://i.pravatar.cc/100?u=aura_vector";
    document.getElementById("desc").innerHTML = gig.desc.map(d => `<p style="margin-bottom:15px;">${d}</p>`).join("");
    
    // Update Single Word Level UI with new requested names
    const level = gig.sellerLevel;
    const badge = document.getElementById("levelBadge");
    
    const levelNames = {
        1: "New Seller",
        2: "Professional",
        3: "Expert"
    };
    
    badge.innerText = levelNames[level];
    
    initGallery();
    render(currentTab);
}

function initGallery() {
    const mainImg = document.getElementById("mainImage");
    const thumbContainer = document.getElementById("thumbnails");
    mainImg.src = gig.images[0];
    
    thumbContainer.innerHTML = gig.images.map((img, index) => `
        <img 
            src="${img}" 
            class="thumbnail ${index === 0 ? 'active' : ''}" 
            onclick="updateGallery(this, '${img}')"
            alt="Work Sample"
        >
    `).join("");
}

function updateGallery(el, src) {
    const mainImg = document.getElementById("mainImage");
    mainImg.style.opacity = '0';
    setTimeout(() => {
        mainImg.src = src;
        mainImg.style.opacity = '1';
    }, 200);
    
    document.querySelectorAll(".thumbnail").forEach(t => t.classList.remove("active"));
    el.classList.add("active");
}

function switchTab(t) {
    currentTab = t;
    document.querySelectorAll(".package-tab").forEach(x => x.classList.remove("active"));
    document.getElementById("tab-" + t).classList.add("active");
    render(t);
}

function render(t) {
    const p = gig.packages[t];
    document.getElementById("pkgName").innerText = p.name;
    document.getElementById("pkgPrice").innerText = "$" + p.price;
    document.getElementById("pkgDesc").innerText = p.desc;
    document.getElementById("delivery").innerHTML = `<i class="far fa-clock" style="margin-right:5px"></i> ${p.delivery}`;
    document.getElementById("revisions").innerHTML = `<i class="fas fa-sync" style="margin-right:5px"></i> ${p.revisions}`;
    document.getElementById("features").innerHTML = p.features.map(f => `<div class="feature-item"><i class="fas fa-check"></i>${f}</div>`).join("");
}

function buy() {
    alert(`Proceeding to Checkout for [${gig.packages[currentTab].name}]`);
}

function goHome() {
     window.location.href = `indexLast.html`;
 
}

window.onload = load;