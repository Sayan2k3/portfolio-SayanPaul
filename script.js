document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Function to switch between tabs
function showTab(tabId) {
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Animation for Introduction text
function animateIntroText1() {
    const introText1 = ["Hi,", "MY NAME IS", "<span class='highlight-blue'>SAYAN PAUL</span>"];
    const animatedIntro1 = document.getElementById("animated-intro1");

    let index1 = 0;
    function displayNextWord1() {
        if (index1 < introText1.length) {
            animatedIntro1.innerHTML += introText1[index1] + " ";
            index1++;
            setTimeout(displayNextWord1, 400);
        }
    }
    displayNextWord1();
}

function animateIntroText2() {
    const introText2 = [
        "I am an aspiring", 
        "<span class='highlight-blue'>software engineer</span>", 
        "and",
        "<span class='highlight-blue'>Data Scientist</span>", 
        "I work towards creating",
        "solutions for ideas",
        "to turn them into reality."
    ];
    const animatedIntro2 = document.getElementById("animated-intro2");

    let index2 = 0;
    function displayNextWord2() {
        if (index2 < introText2.length) {
            animatedIntro2.innerHTML += introText2[index2] + " ";
            index2++;
            setTimeout(displayNextWord2, 400);
        }
    }
    displayNextWord2();
}

window.addEventListener("load", function() {
    animateIntroText1();
    setTimeout(animateIntroText2, 2500);
    setTimeout(() => {
        document.querySelector('.profile-picture').style.opacity = '1';
        document.querySelector('.bio').style.opacity = '1';
    }, 3000);
});

// Education slideshow for education section
function showTab(tabId) {
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const educationTabButton = document.querySelector('.tab-button:nth-child(2)'); // Assuming Education is the second tab
    const educationItems = document.querySelectorAll('.education-item');

    educationTabButton.addEventListener('click', function () {
        // Apply animation with staggered delays
        educationItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.3}s`; // Add a delay for each item
            item.classList.add('active'); // Trigger animation
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const skillsButtons = document.querySelectorAll('.skills-button');
    const skillsDisplay = document.getElementById('skills-display');

    const skillsData = {
        languages: ['C/C++', 'Python', 'JavaScript', 'SQL'],
        frameworks: ['React', 'Node.js', 'Django'],
        tools: ['Git', 'Docker', 'Webpack'],
        cloud: ['AWS', 'Azure', 'Google Cloud'],
        coursework: ['Data Structures', 'Algorithms', 'Machine Learning'],
        interest: ['AI', 'Blockchain', 'Web Development'],
    };

    skillsButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            displaySkills(category);
        });
    });

    
    
    
    
});


document.addEventListener('DOMContentLoaded', function () {
    const skillsDisplay = document.getElementById('skills-display');

    const skillsData = {
        languages: ['C/C++', 'Python', 'JavaScript', 'SQL'],
        frameworks: ['Flask', 'Bootstrap','React', 'Node.js', 'Django', 'Python Libraries', 'Restful API'],
        tools: ['Git', 'Github', 'Jinja2', 'Android Studio', 'Excel', 'PowerBI', 'VS Code', 'Docker', 'Webpack'],
        cloud: ['SQLite', 'MongoDB', 'MYSQL', 'PostgreSQL', 'AWS', 'Google Cloud'],
        coursework: ['Data Structures', 'Algorithms', 'Machine Learning', 'Operating System', 'DBMS', 'Computer Networks', 'Software Engineering'],
        interest: ['AI-ML', 'GEN-AI', 'Web Development',  'Data Science', 'Data Analysis', 'Data Visualization'],
    };

    // Function to display all skills
    function displayAllSkills() {
        skillsDisplay.innerHTML = ''; // Clear previous skills

        let delay = 0; // Initialize a delay for animations

        // Iterate through each category and its skills
        for (const category in skillsData) {
            // Create a category header
            const categoryHeader = document.createElement('div');
            categoryHeader.classList.add('skill-category');
            categoryHeader.innerHTML = category.charAt(0).toUpperCase() + category.slice(1) + ':'; // Capitalize the first letter
            skillsDisplay.appendChild(categoryHeader); // Append category header

            // Create a container for skill items
            const skillItemsContainer = document.createElement('div');
            skillItemsContainer.classList.add('skill-items');

            const skills = skillsData[category];

            // Iterate through skills in the current category
            skills.forEach(skill => {
                // Create a skill item
                const skillItem = document.createElement('div');
                skillItem.classList.add('skill-item');
                skillItem.innerHTML = `<span class="highlight-skill">${skill}</span>`; // Highlight the skill

                // Append the skill item to the container
                skillItemsContainer.appendChild(skillItem);

                // Trigger animation with a delay
                setTimeout(() => {
                    skillItem.style.opacity = 1; // Fade in effect
                    skillItem.style.transform = 'translateX(0)'; // Move to normal position
                }, delay);
                delay += 300; // Increase delay for the next item
            });

            // Append the skill items container to the skills display
            skillsDisplay.appendChild(skillItemsContainer);
        }
    }

    // Initially display all skills
    displayAllSkills();
});


document.addEventListener('DOMContentLoaded', function() {

    function showTab(tabId) {
        // Hide all tab panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
    
        // Show the selected tab
        document.getElementById(tabId).classList.add('active');
    }
    
    // Example: Show the projects section when clicking on a button with id "projects-tab"
    document.getElementById('projects-tab').addEventListener('click', function() {
        showTab('projects');
    });
});


