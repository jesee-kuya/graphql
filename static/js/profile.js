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
    let xpData = data.data.user[0].xpHistory; // downTransactions
    let downData = data.data.user[0].downTransactions;
    let upData = data.data.user[0].upTransactions;
    let totalXp = data.data.user[0].totalXP;
    let level = data.data.user[0].events[0].level;
    const totalXPs = totalXp.reduce((totalXPs, transaction) => {
        return transaction.type === "xp" ? totalXPs + transaction.amount : totalXPs;
    }, 0);
    console.log("Total XP is ", xpsize(totalXPs));
    console.log("Level is ", level);













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
                            <p class="xp-value">${xpsize(totalXPs)[0]} ${xpsize(totalXPs)[1]}</p>
                        </div>

                        <!-- XP Card -->
                        <div class="card-inner xp-item">
                            <h3 class="xp-label accent-text">Current Level</h3>
                            <p class="xp-value">${level}</p>
                        </div>

                        <!-- XP Card -->
                        <div class="card-inner xp-item">
                            <h3 class="xp-label accent-text">Next Level</h3>
                            <p class="xp-value">2,550 XP needed</p>
                        </div>

                        <!-- Audit Ratio Pie Chart -->
                        <div class="card-inner audit-ratio", id="audit-ratio">
                            <h3 class="xp-label accent-text">Audit Ratio</h3>
                            <div class="pie-chart">
                                <!-- Pie chart would go here -->
                            </div>
                        </div>
                    </div>

                    <div class="level-progress">
                        <div class="level-labels">
                            <span>${level}</span>
                            <span>${level + 1}</span>
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
    createAuditRatioChart(upData, downData);
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

        // X-axis labels (5 evenly spaced dates)
        const xTickCount = 5;
        const xTicks = Array.from({ length: xTickCount }, (_, i) =>
            new Date(minDate.getTime() + (i / (xTickCount - 1)) * (maxDate - minDate))
        );

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
            label.textContent = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            });
            lsvg.appendChild(label);
        });

        // Y-axis labels (8 ticks with kB formatting)
        const yTickCount = 8;
        const yTicks = Array.from({ length: yTickCount }, (_, i) =>
            (i / (yTickCount - 1)) * maxAmount
        );

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
            label.textContent = `${(amount / 1000).toFixed(1)}kB`;
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
        pathElement.setAttribute('stroke', '#4a90e2');
        pathElement.setAttribute('stroke-width', '2');
        lsvg.appendChild(pathElement);
    }

    const drawPoints = () => {
        parsedData.forEach(d => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', xScale(d.date));
            circle.setAttribute('cy', yScale(d.amount));
            circle.setAttribute('r', '3');
            circle.setAttribute('fill', '#e74c3c');
            lsvg.appendChild(circle);
        });
    }

    // Draw all elements
    drawAxis();
    drawLine();
    drawPoints();
};

const createAuditRatioChart = (upData, downData) => {
    // Calculate totals
    const totalUp = upData.reduce((sum, d) => sum + d.amount, 0);
    const totalDown = downData.reduce((sum, d) => sum + d.amount, 0);

    // Handle division by zero case
    if (totalDown === 0) {
        console.error("Cannot calculate ratio - down total is zero");
        return;
    }

    // Calculate audit ratio
    const auditRatio = totalUp / totalDown;
    const ratioDisplay = auditRatio.toFixed(1);

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "400");
    svg.setAttribute("viewBox", "0 0 200 200");

    // Chart configuration
    const centerX = 100;
    const centerY = 100;
    const radius = 80;
    const upColor = "#C4B5FD";
    const downColor = "#8B5CF6";

    // Calculate angles based on ratio
    const total = auditRatio + 1;
    const upAngle = (auditRatio / total) * 2 * Math.PI;
    const downAngle = (1 / total) * 2 * Math.PI;

    // Draw Up slice
    const upPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    upPath.setAttribute("d", describeArc(centerX, centerY, radius, 0, upAngle));
    upPath.setAttribute("fill", upColor);
    svg.appendChild(upPath);

    // Draw Down slice
    const downPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    downPath.setAttribute("d", describeArc(centerX, centerY, radius, upAngle, upAngle + downAngle));
    downPath.setAttribute("fill", downColor);
    svg.appendChild(downPath);

    // Add central ratio display
    const ratioText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    ratioText.setAttribute("x", centerX);
    ratioText.setAttribute("y", centerY);
    ratioText.setAttribute("text-anchor", "middle");
    ratioText.setAttribute("dominant-baseline", "middle");
    ratioText.setAttribute("font-size", "32");
    ratioText.setAttribute("fill", "white");
    ratioText.textContent = ratioDisplay;
    svg.appendChild(ratioText);

    // Add subtitle
    const subText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    subText.setAttribute("x", centerX);
    subText.setAttribute("y", centerY + 20);
    subText.setAttribute("text-anchor", "middle");
    subText.setAttribute("font-size", "12");
    subText.setAttribute("fill", "white");
    subText.textContent = "Audit Ratio";
    svg.appendChild(subText);

    // Add to DOM
    const container = document.getElementById("audit-ratio");
    container.innerHTML = '';
    container.appendChild(svg);

    // Helper function to create arc path
    function describeArc(x, y, radius, startAngle, endAngle) {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;

        return [
            "M", x, y,
            "L", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
            "Z"
        ].join(" ");
    }

    // Helper function for coordinates conversion
    function polarToCartesian(centerX, centerY, radius, angle) {
        return {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        };
    }
}

const xpsize = (totalXp) => {
    if (totalXp >= 1_000_000) {
      return [Math.round((totalXp / 1_000_000)), "MB"];
    } else if (totalXp >= 1_000) {
      return [Math.round((totalXp / 1_000)), "KB"];
    } else {
      return [Math.round(totalXp), "totalXp"];
    }
  }