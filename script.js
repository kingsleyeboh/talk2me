
// WhatsApp functionality
const whatsappNumber = "+2348037160691"; // Replace with actual number

function openWhatsApp() {
    const message = encodeURIComponent("Hi! I'm interested in your premium fabrics. Can you help me?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

function orderProduct(productName) {
    const message = encodeURIComponent(`Hi! I'm interested in ordering the ${productName}. Can you provide more details?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

function customRequest() {
    const message = encodeURIComponent("Hi! I'm looking for specific fabrics not listed on your website. Can you help me?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

function openInstagram() {
    const instagramHandle = "talk2mewears"; // Replace with actual Instagram handle
    window.open(`https://instagram.com/${instagramHandle}`, '_blank');
}

// Mobile navigation toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNav.classList.toggle('active');
    
    // Animate hamburger
    const hamburger = mobileMenuBtn.querySelector('.hamburger');
    if (mobileNav.classList.contains('active')) {
        hamburger.style.background = 'transparent';
        hamburger.style.transform = 'rotate(45deg)';
        
        // Transform lines into X
        const before = hamburger.querySelector('::before');
        const after = hamburger.querySelector('::after');
    } else {
        hamburger.style.background = '#374151';
        hamburger.style.transform = 'rotate(0deg)';
    }
}

// Close mobile menu when clicking on links
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.remove('active');
            
            // Reset hamburger
            const hamburger = document.querySelector('.hamburger');
            hamburger.style.background = '#374151';
            hamburger.style.transform = 'rotate(0deg)';
        });
    });
});

// Contact form submission
function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, phone, message });
    
    // Show success message
    alert('Thank you for contacting us! Talk2Me will get back to you soon.');
    
    // Reset form
    event.target.reset();
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll animations
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .product-card, .info-card');
    
    animatedElements.forEach((element, index) => {
        if (isElementInViewport(element)) {
            element.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Run once on load
});
