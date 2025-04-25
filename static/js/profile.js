import { setHeader } from "./script.js";
import { login } from "./login.js";

export const profile = (data) => {
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "static/css/profile.css");
    setHeader(link);

    document.body.innerHTML = "";

    let maincontainer = document.createElement("div");
    maincontainer.classList.add("main-container");

    let innercontainer = document.createElement("div");
    innercontainer.classList.add("container-inner");

    let gridlayout = document.createElement("div");
    gridlayout.classList.add("grid-layout");

    let information = document.createElement("div");
    information.classList.add("card");

    let informationheader = document.createElement("div");
    informationheader.classList.add("card-header");

    const headerContent = document.createElement("div");
    headerContent.style.display = 'flex';
    headerContent.style.justifyContent = 'space-between';
    headerContent.style.alignItems = 'center';
    headerContent.style.width = '100%';

    const titleContainer = document.createElement("h2");
    titleContainer.classList.add("heading");
    titleContainer.innerHTML = `
    <span class="accent-text"><!-- User icon would go here --></span>
    User Information
`;

    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'Log Out';
    logoutBtn.type = 'button';

    Object.assign(logoutBtn.style, {
        background: 'var(--gradient-accent)',
        color: 'var(--color-text)',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.5rem',
        fontFamily: 'inherit',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    });


    logoutBtn.addEventListener('mouseenter', () => {
        logoutBtn.style.transform = 'translateY(-1px)';
        logoutBtn.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
    });

    logoutBtn.addEventListener('mouseleave', () => {
        logoutBtn.style.transform = 'translateY(0)';
        logoutBtn.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    });

    logoutBtn.addEventListener('mousedown', () => {
        logoutBtn.style.transform = 'scale(0.98)';
    });

    logoutBtn.addEventListener('mouseup', () => {
        logoutBtn.style.transform = 'scale(1)';
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.clear();
        login();
    });

    headerContent.appendChild(titleContainer);
    headerContent.appendChild(logoutBtn);
    informationheader.appendChild(headerContent);


    let informationcontent = document.createElement("div");
    informationcontent.classList.add("card-content");

    let informationcontentspace = document.createElement("div");
    informationcontentspace.classList.add("content-space");

    let name = data.data.user[0].login;

    let infospace = document.createElement("div");
    infospace.classList.add("info-space");
    infospace.innerHTML = `
        <h1 class="main-heading">Jane Doe</h1>
        <p class="accent-text large-text">@${name}</p>
    `;

    let badgecontainer = document.createElement("div");
    badgecontainer.classList.add("badge-container");
    badgecontainer.innerHTML = `
         <div class="badge badge-gray">
             <span class="accent-text"><!-- Location icon --></span>
             <span>San Francisco Campus</span>
         </div>
         <div class="badge badge-accent">
             <span><!-- Award icon --></span>
             <span>Level 7</span>
         </div>
    `;

    let innerdetails = document.createElement("div");
    innerdetails.classList.add("card-inner");
    innerdetails.classList.add("details-card");
    innerdetails.innerHTML = `
        <h3 class="details-heading">Personal Details</h3>
     
        <div class="details-space">
            <!-- Phone Detail -->
            <div class="detail-item">
                <div class="detail-icon accent-text"><!-- Phone icon --></div>
                <div>
                    <p class="detail-label">Phone Number</p>
                    <p class="detail-value">+1 (555) 123-4567</p>
                </div>
            </div>

            <!-- Email Detail -->
            <div class="detail-item">
                <div class="detail-icon accent-text"><!-- Mail icon --></div>
                <div>
                    <p class="detail-label">Email</p>
                    <p class="detail-value">jane.doe@example.com</p>
                </div>
            </div>

            <!-- Date of Birth Detail -->
            <div class="detail-item">
                <div class="detail-icon accent-text"><!-- Calendar icon --></div>
                <div>
                    <p class="detail-label">Date of Birth</p>
                    <p class="detail-value">April 15, 1998</p>
                </div>
            </div>

            <!-- Gender Detail -->
            <div class="detail-item">
                <div class="detail-icon accent-text"><!-- User icon --></div>
                <div>
                    <p class="detail-label">Gender</p>
                    <p class="detail-value">Female</p>
                </div>
            </div>
        </div>
    `
    informationcontentspace.appendChild(infospace);
    informationcontentspace.appendChild(badgecontainer);
    informationcontentspace.appendChild(innerdetails);
    informationcontent.appendChild(informationcontentspace);
    information.appendChild(informationheader);
    information.appendChild(informationcontent);

    let skills = document.createElement("div");
    skills.classList.add("card");
    skills.innerHTML = `
        <div class="card-header">
            <h2 class="heading">
                <span class="accent-text"><!-- Code icon --></span>
                Skills Overview
            </h2>
        </div>
        <div class="card-content">
            <div class="content-space">
                <!-- Skill Bar -->
                <div class="skill-container">
                    <div class="skill-header">
                        <span class="skill-name">Algorithms</span>
                        <span class="skill-percent accent-text">85%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-indicator"
                            style="transform: translateX(-15%)">
                        </div>
                    </div>
                </div>

                <!-- Repeat for other skills -->
                <div class="skill-container">
                    <div class="skill-header">
                        <span class="skill-name">Git</span>
                        <span class="skill-percent accent-text">72%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-indicator"
                            style="transform: translateX(-28%)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    gridlayout.appendChild(information);
    gridlayout.appendChild(skills);

    let xp = document.createElement("div");
    xp.classList.add("xp-section");
    xp.innerHTML = `
        <!-- XP Cards and Audit Ratio -->
            <div class="card xp-card">
                <div class="card-header">
                    <h2 class="heading">
                        <span class="accent-text"><!-- Book icon --></span>
                        Experience Points
                    </h2>
                </div>
                <div class="card-content">
                    <div class="xp-grid">
                        <!-- XP Card -->
                        <div class="card-inner xp-item">
                            <h3 class="xp-label accent-text">Total XP</h3>
                            <p class="xp-value">12,450</p>
                        </div>

                        <!-- XP Card -->
                        <div class="card-inner xp-item">
                            <h3 class="xp-label accent-text">Current Level</h3>
                            <p class="xp-value">7</p>
                        </div>

                        <!-- XP Card -->
                        <div class="card-inner xp-item">
                            <h3 class="xp-label accent-text">Next Level</h3>
                            <p class="xp-value">2,550 XP needed</p>
                        </div>

                        <!-- Audit Ratio Pie Chart -->
                        <div class="card-inner audit-ratio">
                            <h3 class="xp-label accent-text">Audit Ratio</h3>
                            <div class="pie-chart">
                                <!-- Pie chart would go here -->
                            </div>
                        </div>
                    </div>

                    <div class="level-progress">
                        <div class="level-labels">
                            <span>Level 7</span>
                            <span>Level 8</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-indicator"
                                style="transform: translateX(-17%)">
                            </div>
                        </div>
                        <div class="level-percent accent-text">83% to next level</div>
                    </div>
                </div>
            </div>

            <!-- XP Progression Graph -->
            <div class="card">
                <div class="card-header">
                    <h2 class="heading">
                        <span class="accent-text"><!-- Trending Up icon --></span>
                        XP Progression
                    </h2>
                </div>
                <div class="card-content">
                    <div class="graph-container">
                        <!-- Line chart would go here -->
                    </div>
                </div>
            </div>
        </div>
    `

    innercontainer.appendChild(gridlayout);
    innercontainer.appendChild(xp);

    maincontainer.appendChild(innercontainer);
    document.body.appendChild(maincontainer);
}