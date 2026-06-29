$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/bim_rendering.png',
            link: 'https://github.com/tony7078',
            title: 'High-speed Rendering of Large-scale BIM Data',
            demo: false,
            technologies: ['C++', 'CUDA', 'OptiX'],
            description: "High-speed rendering of large-scale BIM data (Iaan Co., 2025.01.01 - 2025.12.31)",
            categories: ['featured', 'research']
        },
        {
            image: 'assets/images/creature_in_the_room.png',
            link: 'https://github.com/Studio-NOS/cc-project',
            title: 'Creature in the Room',
            demo: false,
            technologies: ['Unity', 'C#', 'Spine', 'Firebase'],
            description: "2D Mobile Sub-Culture Battle and Raising Simulation Game",
            categories: ['featured', 'game']
        },
        {
            image: 'assets/images/unknown_note.png',
            link: 'https://github.com/DU-E',
            title: 'Unknown Note',
            demo: false,
            technologies: ['Spring', 'Flutter', 'MySQL'],
            description: "A mobile application for anonymously sharing journals, poetry, and novels",
            categories: ['featured', 'web']
        },
        {
            image: 'assets/images/hate_speech_cleaner.png',
            link: 'https://github.com/tony7078/KW_hate_speech_cleaner',
            title: 'Hate Speech Cleaner',
            demo: false,
            technologies: ['Python', 'TensorFlow'],
            description: "A project aimed at detecting and filtering hate speech in text",
            categories: ['ai']
        },
        {
            image: 'assets/images/credit_card_fraud_detection.png',
            link: 'https://github.com/tony7078/AnomalyDetection_CreditCardTransaction',
            title: 'Credit Card Fraud Detection',
            demo: false,
            technologies: ['Python', 'PyTorch'],
            description: "A project aimed at detecting credit card fraud using various anomaly detection",
            categories: ['ai']
        },
        {
            image: 'assets/images/covid_vaccine_hospital.png',
            link: 'https://github.com/tony7078/KW_corona_vaccine_hospital',
            title: 'Covid-19 Vaccine Hospital',
            demo: false,
            technologies: ['C#', '.Net'],
            description: "A window program that finds which hospitals have specific COVID-19 vaccine",
            categories: ['web']
        },
        {
            image: 'assets/images/attentive_acupoint.png',
            link: 'https://github.com/tony7078',
            title: 'AttentiveAcupoint-Net',
            demo: false,
            technologies: ['Python', 'PyTorch'],
            description: "Attention & squeeze-and-excitation based network for acupoints detection",
            categories: ['featured', 'research']
        },
        {
            image: 'assets/images/halluvision.png',
            link: 'https://github.com/tony7078',
            title: 'Halluvision',
            demo: false,
            technologies: ['Python', 'PyTorch', 'NoSQL'],
            description: "Assessing Hallucination in Large Language Models for Cyber Threat Intelligence",
            categories: ['research']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''} </p> 
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}