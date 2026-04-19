// Mock up data for latest news
const newsData = [
    {
        title: "Artificial Intelligence Models Reach New Milestone in Logical Reasoning",
        excerpt: "Researchers announced a breakthrough today as new AI architectures demonstrate advanced logical deduction capabilities previously thought unique to humans.",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        category: "Technology",
        author: "Alex Rivera",
        time: "10 mins ago"
    },
    {
        title: "Global Markets React to Unprecedented Shift in Renewable Energy Subsidies",
        excerpt: "Major indices showed significant volatility morning following the joint announcement by leading nations regarding a sweeping overhaul of green energy policies.",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
        category: "Business",
        author: "Sarah Jenkins",
        time: "1 hour ago"
    },
    {
        title: "Deep Sea Expedition Uncovers Untouched Ecosystem in the Mariana Trench",
        excerpt: "Oceanographers have discovered a thriving, previously unknown ecosystem utilizing chemosynthesis at depths exceeding 10,000 meters.",
        imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1000&auto=format&fit=crop",
        category: "Science",
        author: "Marcus Wei",
        time: "3 hours ago"
    },
    {
        title: "The Next Generation of Consumer Drones Focuses on Urban Delivery",
        excerpt: "Tech giants are rolling out pilot programs in major metropolitan areas, promising delivery times under 15 minutes for basic household goods.",
        imageUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop",
        category: "Technology",
        author: "Jordan Lee",
        time: "4 hours ago"
    },
    {
        title: "Breakthrough Battery Tech Promises 1000-Mile Range for Electric Vehicles",
        excerpt: "Solid-state battery research transitions from the lab to early manufacturing prototypes, signaling a massive leap forward for the EV industry.",
        imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=1000&auto=format&fit=crop",
        category: "Business",
        author: "Elena Rostova",
        time: "5 hours ago"
    },
    {
        title: "Archaeologists Unearth Hidden City Predating the Incan Empire",
        excerpt: "LiDAR scanning technology has revealed a vast complex of structures buried beneath dense jungle canopy, challenging current historical timelines.",
        imageUrl: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=1000&auto=format&fit=crop",
        category: "Culture",
        author: "David Thompson",
        time: "7 hours ago"
    }
];

// Function to render news cards
function renderNewsCards() {
    const grid = document.getElementById('news-grid');
    if (!grid) return;

    newsData.forEach(news => {
        const cardHTML = `
            <article class="news-card">
                <a href="#" class="card-img-wrapper">
                    <img src="${news.imageUrl}" alt="${news.title}" class="card-img" loading="lazy">
                    <span class="card-category">${news.category}</span>
                </a>
                <div class="card-content">
                    <a href="#">
                        <h3 class="card-title">${news.title}</h3>
                    </a>
                    <p class="card-excerpt">${news.excerpt}</p>
                    <div class="card-meta">
                        <span class="card-author">${news.author}</span>
                        <span class="card-time">${news.time}</span>
                    </div>
                </div>
            </article>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Initialize interactivity on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Render the grid
    renderNewsCards();

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            // Simple toggle for demo purposes
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.padding = '1rem';
                navLinks.style.background = 'var(--glass-bg)';
                navLinks.style.backdropFilter = 'blur(12px)';
                navLinks.style.borderBottom = '1px solid var(--glass-border)';
            }
        });
    }

    // Make Navbar sticky behavior smoother
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 11, 16, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = 'none';
        }
    });
});
