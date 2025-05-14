# GraphQL User Dashboard

A dynamic web dashboard that interfaces with the Learn Zone 01 Kisumu GraphQL API to display user profiles, XP progression, skills, and audit ratios. Hosted on GitHub Pages.


## Live Demo
🔗 [https://jesee-kuya.github.io/graphql](https://jesee-kuya.github.io/graphql)

## Features
- 🔒 JWT-based authentication
- 👤 Profile overview with personal details
- 📈 XP progression graph (cumulative timeline)
- 🎯 Skills radar chart visualization
- ⚖️ Audit ratio pie chart (upvotes vs downvotes)
- 🏆 Level progression and rank tracking
- 🚪 Session management with logout functionality

## Technologies
- Vanilla JavaScript (ES6+)
- GraphQL API integration
- CSS3 for styling
- SVG-based data visualizations
- GitHub Pages for hosting

## Usage
1. Visit the [live demo](https://jesee-kuya.github.io/graphql)
2. Log in with your Learn Zone 01 credentials:
   - **Username**: Your campus email/login
   - **Password**: Your Learn platform password
3. Explore your learning metrics:
   - View personal information in the profile card
   - Analyze XP accumulation trends
   - Check skill distribution through the radar chart
   - Monitor your audit ratio

## Data Sources
All data is fetched in real-time from:
- `https://learn.zone01kisumu.ke/api/auth/signin` (Authentication)
- `https://learn.zone01kisumu.ke/api/graphql-engine/v1/graphql` (Data queries)

## Security
- Uses `sessionStorage` for token management
- Automatic session clearance on logout
- Basic HTTP authentication for API calls
- No persistent cookies

## Project Structure
```bash
├── static/
│   ├── css/         # Style sheets
│   ├── js/          # Module scripts
│   └── img/         # Assets
├── index.html       # Main entry point
└── README.md        # Documentation