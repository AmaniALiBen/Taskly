 const gigsList = [
            { 
                id: 1, 
                title: "Modern Luxury Brand Identity Design", 
                price: 80, 
                category: "Design", 
                freelancer: "Ahmed B.", 
                avatar: "https://i.pravatar.cc/100?u=1", 
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
                rating: 4.9 
            },
            { 
                id: 2, 
                title: "Full Stack Web Application Development", 
                price: 350, 
                category: "Coding", 
                freelancer: "Sara M.", 
                avatar: "https://i.pravatar.cc/100?u=2", 
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800",
                rating: 5.0
            },
            { 
                id: 3, 
                title: "Social Media Video Marketing Content", 
                price: 120, 
                category: "Video", 
                freelancer: "Omar K.", 
                avatar: "https://i.pravatar.cc/100?u=3", 
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
                rating: 4.8
            },
            { 
                id: 4, 
                title: "Business Strategy & Growth Consulting", 
                price: 150, 
                category: "Ads", 
                freelancer: "Layla T.", 
                avatar: "https://i.pravatar.cc/100?u=4", 
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
                rating: 4.7
            }
        ];

        // Rendering Engine
        function renderAvailableGigs() {
            const mainContainer = document.getElementById('gigs-main-container');
            
            mainContainer.innerHTML = gigsList.map(gig => `
                <div class="gig-card" onclick="navigateToGigDetails(${gig.id})">
                    <div class="gig-image-container">
                        <img src="${gig.image}" alt="${gig.title}">
                    </div>
                    <div class="gig-body-content">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                            <img src="${gig.avatar}" style="width: 28px; height: 28px; border-radius: 8px;">
                            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">${gig.freelancer}</span>
                        </div>
                        <span class="gig-category-badge">${gig.category}</span>
                        <h3 class="gig-title-text">${gig.title}</h3>
                        <div class="gig-footer-info">
                            <div class="rating-display">
                                <i class="fas fa-star"></i> ${gig.rating}
                            </div>
                            <div class="price-container-box">
                                <span style="font-size: 0.6rem; color: var(--text-secondary); display: block; text-transform: uppercase; font-weight: 800;">Starting at</span>
                                <span class="price-value-text">$${gig.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function navigateToGigDetails(gigId) {
            window.location.href = `detailsLast.html?id=${gigId}`;
        }

        window.onload = renderAvailableGigs;