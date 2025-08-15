        // Mobile menu toggle
        function toggleMenu() {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
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

        // Download CV functionality
        function downloadCV() {
            const cvContent = `
Harsh Kumar Jha - Web Developer

Contact Information:
Email: kumarjhapradeep352@gmail.com
Phone: +91 6283460455
LinkedIn: linkedin.com/in/kr-harsh-dev
GitHub: github.com/krharsh-code
Location: Zirakpur, Punjab

Professional Summary:
Computer Science student at Chitkara University passionate about web development and AI.
Love building creative and functional projects while continuously learning new technologies.

Skills:
Frontend: HTML, CSS, JavaScript, React.js
Backend: Node.js, Python (Basics/Intermediate)
Programming: Java (Basics), C/C++
Database: Basic SQL
Tools: Git & GitHub, Responsive Web Design

Education:
Bachelor of Technology in Computer Science Engineering
Chitkara University, Punjab (Currently Pursuing)
Focus: Web Development and Artificial Intelligence

Projects:
Personal Portfolio Website:
- Responsive portfolio showcasing skills and projects
- Technologies: HTML, CSS, JavaScript
- Modern design with smooth animations

Interactive Calculator:
- Fully functional web calculator
- Technologies: HTML, CSS, JavaScript
- Clean UI with smooth interactions

Web-based Game:
- Interactive browser game with score tracking
- Technologies: JavaScript, Canvas, HTML5, CSS3
- Engaging gameplay with responsive controls

Learning Journey:
- 2+ years of learning web development
- 10+ projects built during learning process
- 8+ technologies learned and practiced
- 100+ hours of coding experience

Current Focus:
- Advancing React.js skills
- Learning backend development with Node.js
- Exploring AI and machine learning concepts
- Building full-stack applications

Languages:
- English (Fluent)
- Hindi (Native)
            `;

            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Harsh_Kumar_Jha_CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            showNotification('CV downloaded successfully!', 'success');
        }

        // Social media links
        function openSocial(platform) {
            const urls = {
                linkedin: 'https://linkedin.com/in/kr-harsh-dev',
                github: 'https://github.com/krharsh-code'
            };
            
            if (urls[platform]) {
                window.open(urls[platform], '_blank');
            }
        }

        // Hire me action
        function hireMeAction() {
            const message = `Hello Harsh,

I'm interested in working with you on a project. Let's discuss the details.

Best regards`;
            
            const subject = 'Project Inquiry - Let\'s Work Together';
            const mailtoLink = `mailto:kumarjhapradeep352@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            
            window.location.href = mailtoLink;
        }

        // Portfolio project actions
        function viewProject(project) {
            const projects = {
                portfolio: 'https://krharsh-code.github.io/portfolio',
                calculator: 'https://krharsh-code.github.io/calculator',
                game: 'https://krharsh-code.github.io/web-game'
            };
            
            if (projects[project]) {
                window.open(projects[project], '_blank');
            } else {
                showNotification('Demo coming soon! This project is currently being deployed.', 'info');
            }
        }

        function viewCode(project) {
            const repos = {
                portfolio: 'https://github.com/krharsh-code/portfolio',
                calculator: 'https://github.com/krharsh-code/calculator',
                game: 'https://github.com/krharsh-code/web-game'
            };
            
            if (repos[project]) {
                window.open(repos[project], '_blank');
            }
        }

        // Contact form submission - Opens email client directly
        function submitForm(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create email content
            const emailSubject = `Portfolio Contact: ${subject}`;
            const emailBody = `Hello Harsh,

You have received a new message through your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.`;
            
            // Create mailto link and open email client
            const mailtoLink = `mailto:kumarjhapradeep352@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form after a short delay
            setTimeout(() => {
                event.target.reset();
                showNotification('Email client opened! Please send the email to complete your message.', 'success');
            }, 500);
        }

        // Notification system
        function showNotification(message, type = 'info') {
            // Remove existing notifications
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                    <span>${message}</span>
                    <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            // Add styles
            const bgColor = type === 'success' ? 'linear-gradient(45deg, #00d4ff, #0099cc)' : 
                           type === 'error' ? 'linear-gradient(45deg, #ff006e, #ff4081)' : 
                           'rgba(255, 255, 255, 0.1)';
            
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${bgColor};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                animation: slideIn 0.3s ease;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(0, 212, 255, 0.3);
                max-width: 400px;
                font-family: 'Poppins', sans-serif;
            `;
            
            // Add animation styles if not already added
            if (!document.querySelector('#notification-styles')) {
                const style = document.createElement('style');
                style.id = 'notification-styles';
                style.textContent = `
                    @keyframes slideIn {
                        from {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                    .notification-content {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }
                    .notification-close {
                        background: none;
                        border: none;
                        color: white;
                        cursor: pointer;
                        margin-left: auto;
                        padding: 0.2rem;
                        border-radius: 50%;
                        transition: background 0.3s ease;
                        font-size: 0.9rem;
                    }
                    .notification-close:hover {
                        background: rgba(255, 255, 255, 0.2);
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Add to page
            document.body.appendChild(notification);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.style.animation = 'slideIn 0.3s ease reverse';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 5000);
        }

        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        // Animate stats on scroll
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('stats')) {
                        const statNumbers = entry.target.querySelectorAll('.stat-number');
                        statNumbers.forEach(stat => {
                            const finalNumber = parseInt(stat.textContent);
                            animateNumber(stat, finalNumber);
                        });
                    }
                    
                    if (entry.target.classList.contains('skills-grid')) {
                        const skillFills = entry.target.querySelectorAll('.skill-fill');
                        skillFills.forEach(fill => {
                            const width = fill.getAttribute('data-width');
                            setTimeout(() => {
                                fill.style.width = width + '%';
                            }, 200);
                        });
                    }
                }
            });
        }, observerOptions);

        observer.observe(document.querySelector('.stats'));
        observer.observe(document.querySelector('.skills-grid'));

        function animateNumber(element, target) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }, 30);
        }

        // Add fade-in animation for sections
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeObserver.observe(section);
        });


 