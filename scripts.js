// click event for the buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");   
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");   

portfolioBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    portfolio.style.display = "flex";
    skillsBtn.classList.remove("active__btn");
    portfolioBtn.classList.add("active__btn");
});

skillsBtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";  // Hide the portfolio section
    skills.style.display = "flex";     // Display the skills section
    portfolioBtn.classList.remove("active__btn");
    skillsBtn.classList.add("active__btn");
});

// light and dark mode
document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme icon"]');
    const gitHubLogo = document.querySelector('img[alt="github logo"]');
    const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
    const emailLogo = document.querySelector('img[alt="email logo"]');

    const lightlogos = {
        github: "images/github_light.png",
        linkedin: "images/linkedin_light.png",
        email: "images/email_light.png",
        theme: "images/theme_light.png",
    };
    
    const darklogos = {
        github: "images/github_dark.png",
        linkedin: "images/linkedin_dark.png",
        email: "images/email_dark.png",
        theme: "images/theme_dark.png",
    };
    
    function setTheme(isDark) {
        gitHubLogo.src = isDark ? darklogos.github : lightlogos.github;
        linkedinLogo.src = isDark ? darklogos.linkedin : lightlogos.linkedin;
        emailLogo.src = isDark ? darklogos.email : lightlogos.email;
        themeIcon.src = isDark ? darklogos.theme : lightlogos.theme;
    }

    toggleThemeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);
    

    setTheme(isDark);
});

    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);

        setTheme(isDark);
    };

    loadTheme();
});

