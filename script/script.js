const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(46, 116, 166, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%)';
        header.style.backdropFilter = 'none';
    }

    lastScroll = currentScroll;
});

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 10 + 5;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    document.getElementById('particles').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 20000);
}

setInterval(createParticle, 500);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const button = e.target.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
        alert('¡Gracias por tu interés! Te contactaremos pronto para confirmar tu lugar este domingo.');
        e.target.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

document.querySelectorAll('.benefit-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.benefit-icon i').style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.benefit-icon i').style.transform = 'scale(1) rotate(0deg)';
    });
});

document.querySelectorAll('.benefit-icon i').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});

// Instructor cards hover effects
document.querySelectorAll('.instructor-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Method benefits list animation
document.querySelectorAll('.method-benefits li').forEach((li, index) => {
    li.style.opacity = '0';
    li.style.transform = 'translateX(-20px)';
    li.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
        li.style.opacity = '1';
        li.style.transform = 'translateX(0)';
    }, 500 + (index * 100));
});

// Certification badges hover effect
document.querySelectorAll('.cert-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 4px 8px rgba(93, 173, 226, 0.3)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

for (let i = 0; i < 10; i++) {
    setTimeout(createParticle, i * 200);
}

window.addEventListener('load', () => {
    document.querySelector('.logo').style.animation = 'fadeInLeft 1s ease';
});