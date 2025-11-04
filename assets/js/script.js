const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

let currentCategory = null;
let projectsVisible = true;

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        link.classList.add('active');

        const sectionId = link.getAttribute('data-section');
        const category = link.getAttribute('data-category');
        const projectId = link.getAttribute('data-project');

        document.getElementById(sectionId).classList.add('active');

        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = sectionId === 'home' ? 'none' : 'block';

        if (projectId) {

            showProjectDetails(projectId);
        } else if (category) {

            filterCategory(category);
            currentCategory = category;
        } else if (sectionId === 'projects' && !category && !projectId) {

            showAllCategories();
        }
    });
});

const projectData = {
    'kindergarten-hell': {
        title: "KINDERGARTEN HELL",
        description: "A 2D puzzle game made in the Godot Engine. You play as a teacher tasked with guiding a group of unpredictable children into the school. Each time you move, they react — but each child behaves differently, turning every level into a unique logic challenge. This prototype was created for a presentation and includes HTML5 export with gamepad support, making it playable on Android devices. Note: this is an earlier version of the game.",
        tech: "Godot Engine, GDScript, Aseprite",
        video: "./assets/videos/kindegartenHell.mp4",
        playName: "kindergarten.exe",
        links: {
            play: "https://wtvlucas.github.io/PUTOSINHELL/",
            github: "https://github.com/wtvlucas/KindergartenHell"
        }
    },
    'holy-temptation': {
        title: "HOLY TEMPTATION",
        description: "A fast-paced 2D shooter built in the Godot Engine. You play as a nun armed with a holy water pistol, fending off corrupted priests driven by lust who spawn from all edges of the screen. This prototype was developed during the first semester of the second year of university for a class project themed around the seven deadly sins — with our group assigned the sin of Lust. Expect chaotic gameplay, irreverent humor, and a satirical twist on classic arcade action.",
        tech: "Godot Engine, GDScript, Aseprite",
        image: "./assets/projects/holy_temptation.png",
        playName: "holy.exe",
        links: {
            play: "https://wtvlucas.github.io/HolyTemptationWebBuild/",
            github: "https://github.com/wtvlucas/HolyTemptation"
        }
    },
    'lillys': {
        title: "LILLYS THRIFT STORE",
        description: "A 3D simulation game developed in Unreal Engine — and the first project both in 3D and in this engine. You play as Lilly, the owner of a cozy second-hand shop, where each day brings new items and new tasks. Manage your store and take on interactive minigames like sewing repairs and washing clothes to restore items and satisfy customers. Still in development, this game explores casual gameplay with a focus on charm, creativity, and resourcefulness.",
        tech: "Unreal Engine, Blueprints, C++",
        video: "./assets/videos/LillysPreview.mp4",
        links: {
            github: "https://github.com/wtvlucas/Lilys"
        }
    },
    '3d-room': {
        title: "3D ROOM",
        description: "A stylized low-poly 3D environment designed as a faithful recreation of my own bedroom. Developed for a 3D Modeling class project, the scene was modeled entirely in Blender with a focus on simplified forms, clean geometry, and an efficient visual style. This project explores environmental storytelling through minimalism, turning a personal space into a digital diorama ready for real-time applications or animation use.",
        tech: "Blender, Photoshop",
        image: "./assets/images/LowPollyRoom.png",

    },
    '3d-animations': {
        title: "3D ANIMATIONS",
        description: "A stylized low-poly action prototype developed for a 3D Animation class project. The video showcases my custom 3D character, modeled, rigged, and animated in Blender, featuring an attack animation brought into Unreal Engine for real-time playback. The focus was on creating fluid motion and expressive poses within a minimalist low-poly aesthetic. This project highlights the full animation pipeline — from concept and modeling to exporting and implementation in a game engine.",
        tech: "Photoshop, Blender, Unreal Engine",
        video: "./assets/videos/3dModelAndAnims.mp4",

    }
};

function showProjectDetails(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    document.getElementById('categories-view').style.display = 'none';
    document.getElementById('project-details').style.display = 'block';

    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-tech').textContent = project.tech;

    const projectImageElement = document.getElementById('project-image');

    if (project.video) {

        let videoElement = document.getElementById('project-video');
        if (!videoElement) {
            videoElement = document.createElement('video');
            videoElement.id = 'project-video';
            videoElement.className = 'project-image';
            videoElement.autoplay = true;
            videoElement.loop = true;
            videoElement.muted = true;
            videoElement.playsInline = true;
            projectImageElement.parentNode.insertBefore(videoElement, projectImageElement);
        }
        videoElement.src = project.video;
        videoElement.style.display = 'block';
        projectImageElement.style.display = 'none';
    } else {

        projectImageElement.src = project.image;
        projectImageElement.style.display = 'block';
        const videoElement = document.getElementById('project-video');
        if (videoElement) {
            videoElement.style.display = 'none';
        }
    }
    const linksContainer = document.getElementById('project-links');
    linksContainer.innerHTML = '';

    if (project.links) {
        Object.entries(project.links).forEach(([type, url]) => {
            const projectCategory = document.createElement('div');
            projectCategory.className = 'project-buttons';

            if (type === 'play') {
                projectCategory.onclick = () => openPlayModal(url, project.playName);
            } else {
                projectCategory.onclick = () => window.open(url, '_blank');
            }

            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';

            const iconContainer = document.createElement('div');
            iconContainer.className = 'category-icon';

            const img = document.createElement('img');
            img.src = `./assets/icons/${type}.webp`;
            img.alt = type;
            iconContainer.appendChild(img);

            linksContainer.appendChild(projectCategory);
            categoryHeader.appendChild(iconContainer);
            projectCategory.appendChild(categoryHeader);

        });
    }
}

function showCategories() {
    document.getElementById('categories-view').style.display = 'grid';
    document.getElementById('project-details').style.display = 'none';
}

function openModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalTech').textContent = project.tech;
        document.getElementById('modalWindowTitle').textContent = project.title + ' - Detalhes';
        document.getElementById('projectModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

function showEmailPopup() {
    document.getElementById('emailPopup').style.display = 'block';
}

function closeEmailPopup() {
    document.getElementById('emailPopup').style.display = 'none';
}

window.onclick = function(event) {
    const popup = document.getElementById('emailPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    const emailModal = document.getElementById('emailPopup');
    const playModal = document.getElementById('playModal');

    if (event.target === modal) {
        closeModal();
    } else if (event.target === emailModal) {
        closeEmailPopup();
    } else if (event.target === playModal) {
        closePlayModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeEmailPopup();
        closePlayModal();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home');
    const sidebar = document.querySelector('.sidebar');
    if (homeSection.classList.contains('active')) {
        sidebar.style.display = 'none';
    }
});

function showAllCategories() {
    document.getElementById('categories-view').style.display = 'block';
    document.getElementById('project-details').style.display = 'none';

    document.querySelectorAll('.projects-grid, .projects-category-title').forEach(element => {
        element.style.display = element.classList.contains('projects-grid') ? 'grid' : 'block';
    });

    currentCategory = null;
    projectsVisible = true;

    document.querySelectorAll('[data-category]').forEach(button => {
        button.classList.remove('active');
    });
}

function filterCategory(category) {
    document.getElementById('categories-view').style.display = 'block';
    document.getElementById('project-details').style.display = 'none';

    document.querySelectorAll('.projects-grid').forEach(grid => {
        const gridCategory = grid.getAttribute('data-category');
        grid.style.display = gridCategory === category ? 'grid' : 'none';
    });

    document.querySelectorAll('.projects-category-title').forEach(title => {
        const titleCategory = title.getAttribute('data-category');
        if (titleCategory === category) {
            title.style.display = 'block';
        } else {
            title.style.display = 'none';
        }
    });

    document.querySelectorAll('[data-category]').forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-category') === category);
    });
}

function showCategories() {
    document.getElementById('categories-view').style.display = 'block';
    document.getElementById('project-details').style.display = 'none';

    showAllCategories();

}

function openPlayModal(url, playName) {
    document.getElementById('playWindowTitle').textContent = playName;
    document.getElementById('playFrame').src = url;
    document.getElementById('playModal').style.display = 'block';
}

function closePlayModal() {
    const modal = document.getElementById('playModal');
    const frame = document.getElementById('playFrame');
    frame.src = '';
    modal.style.display = 'none';
}