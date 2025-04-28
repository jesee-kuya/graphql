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

    let username = data.data.user[0].login;
    let campus = data.data.user[0].campus;
    let phone = data.data.user[0].attrs.phone;
    let email = data.data.user[0].attrs.email;
    let dob = new Date(data.data.user[0].attrs.dateOfBirth).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    let gender = data.data.user[0].attrs.gender;
    let firstname = data.data.user[0].attrs.firstName;
    let lastname = data.data.user[0].attrs.lastName;
    let xpData = data.data.user[0].xpTimeline;













    let infospace = document.createElement("div");
    infospace.classList.add("info-space");
    infospace.innerHTML = `
        <h1 class="main-heading">${firstname} ${lastname}</h1>
        <p class="accent-text large-text">@${username}</p>
    `;

    let badgecontainer = document.createElement("div");
    badgecontainer.classList.add("badge-container");
    badgecontainer.innerHTML = `
         <div class="badge badge-gray">
             <span class="accent-text"><!-- Location icon --></span>
             <span>${campus} campus</span>
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
                    <p class="detail-value">${phone}</p>
                </div>
            </div>

            <!-- Email Detail -->
            <div class="detail-item">
                <div class="detail-icon accent-text"><!-- Mail icon --></div>
                <div>
                    <p class="detail-label">Email</p>
                    <p class="detail-value">${email}</p>
                </div>
            </div>

            <!-- Date of Birth Detail -->
            <div class="detail-item">
                <div class="detail-icon accent-text"><!-- Calendar icon --></div>
                <div>
                    <p class="detail-label">Date of Birth</p>
                    <p class="detail-value">${dob}</p>
                </div>
            </div>

            <!-- Gender Detail -->
            <div class="detail-item">
                <div class="detail-icon accent-text"><!-- User icon --></div>
                <div>
                    <p class="detail-label">Gender</p>
                    <p class="detail-value">${gender}</p>
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
    xpGraph(xpData);
}

const xpGraph = (xpData) => {
    // Clear previous graph
    let container = document.querySelector(".graph-container");
    container.innerHTML = '';
    
    // Create SVG element
    let lsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    lsvg.setAttribute("width", "100%");
    lsvg.setAttribute("height", "500");
    lsvg.setAttribute("viewBox", "0 0 1000 500");
    container.appendChild(lsvg);

    // Parse and sort data
    const parsedData = xpData.map(d => ({
        date: new Date(d.createdAt),
        amount: d.amount
    })).sort((a, b) => a.date - b.date);

    // Dimensions
    const width = 1000;
    const height = 500;
    const padding = 50;
    
    // Calculate domains
    const dates = parsedData.map(d => d.date);
    const amounts = parsedData.map(d => d.amount);
    const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
    const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));
    const maxAmount = Math.max(...amounts);

    // Scaling functions
    const xScale = date => 
        padding + ((date - minDate) / (maxDate - minDate)) * (width - 2 * padding);
        
    const yScale = amount => 
        height - padding - (amount / maxAmount) * (height - 2 * padding);

    // Draw functions
    const drawAxis = () => {
        // X-axis
        const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        xAxis.setAttribute('x1', padding);
        xAxis.setAttribute('y1', height - padding);
        xAxis.setAttribute('x2', width - padding);
        xAxis.setAttribute('y2', height - padding);
        xAxis.setAttribute('stroke', 'black');
        lsvg.appendChild(xAxis);

        // Y-axis
        const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        yAxis.setAttribute('x1', padding);
        yAxis.setAttribute('y1', padding);
        yAxis.setAttribute('x2', padding);
        yAxis.setAttribute('y2', height - padding);
        yAxis.setAttribute('stroke', 'black');
        lsvg.appendChild(yAxis);

        // X-axis labels
        const xTicks = [minDate, new Date((minDate.getTime() + maxDate.getTime())/2), maxDate];
        xTicks.forEach(date => {
            const x = xScale(date);
            // Tick mark
            const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            tick.setAttribute('x1', x);
            tick.setAttribute('y1', height - padding);
            tick.setAttribute('x2', x);
            tick.setAttribute('y2', height - padding + 5);
            tick.setAttribute('stroke', 'black');
            lsvg.appendChild(tick);

            // Date label
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', x);
            label.setAttribute('y', height - padding + 20);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('font-size', '12');
            label.textContent = date.toISOString().split('T')[0];
            lsvg.appendChild(label);
        });

        // Y-axis labels
        const yTicks = [0, maxAmount/2, maxAmount];
        yTicks.forEach(amount => {
            const y = yScale(amount);
            // Tick mark
            const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            tick.setAttribute('x1', padding - 5);
            tick.setAttribute('y1', y);
            tick.setAttribute('x2', padding);
            tick.setAttribute('y2', y);
            tick.setAttribute('stroke', 'black');
            lsvg.appendChild(tick);

            // Amount label
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', padding - 10);
            label.setAttribute('y', y + 5);
            label.setAttribute('text-anchor', 'end');
            label.setAttribute('font-size', '12');
            label.textContent = amount.toLocaleString();
            lsvg.appendChild(label);
        });
    }

    const drawLine = () => {
        let path = '';
        parsedData.forEach((d, i) => {
            const x = xScale(d.date);
            const y = yScale(d.amount);
            path += `${i === 0 ? 'M' : 'L'} ${x},${y} `;
        });

        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', path);
        pathElement.setAttribute('fill', 'none');
        pathElement.setAttribute('stroke', 'steelblue');
        pathElement.setAttribute('stroke-width', '2');
        lsvg.appendChild(pathElement);
    }

    const drawPoints = () => {
        parsedData.forEach(d => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', xScale(d.date));
            circle.setAttribute('cy', yScale(d.amount));
            circle.setAttribute('r', '3');
            circle.setAttribute('fill', 'red');
            lsvg.appendChild(circle);
        });
    }

    // Draw all elements
    drawAxis();
    drawLine();
    drawPoints();
};