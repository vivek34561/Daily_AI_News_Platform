# 🤖 Aether News | Daily Sovereign AI Intelligence Dashboard

A next-generation, high-fidelity **AI News Intelligence & Analytics Dashboard** built using **React.js (Vite)** + **Tailwind CSS v4** + **Recharts** + **Lucide Icons**. 

This platform tracks, categorizes, and analyzes daily artificial intelligence, machine learning, robotics, and semiconductor export compliance news across **🇮🇳 India** and **🌍 Global** landscapes, supporting complete **24/7 cloud automation** and **date-wise history tracking**.

---

## 📸 Key Features & Architecture

*   **🌌 Premium Glassmorphism UI:** Ultra-modern dark-first theme incorporating high backdrop-blur values, neon glow card hover boundaries, and vibrant background mesh gradients.
*   **📅 Date-Wise News Tracking:** Interactive calendar selector allowing users to browse verified daily AI news archives (May 26, May 25, May 24, etc.) dynamically.
*   **📊 Animated Analytics & Growth Charts:** Integrated Recharts Area Chart comparing India vs Global enterprise AI deployment rates, and real-time sentiment distribution gauges (Positive, Neutral, Negative).
*   **🛠️ Clean State Layer Context:** Centralized context engine (`DashboardContext.jsx`) managing bookmark states, local search queries, notification alert drawers, appearance modes (Dark/Light), and feed refreshing.
*   **🤖 Double-Sided Feeds:** Compartmentalized categories covering **Research, Startups, Product Launches, Open Source, Policy, Funding, Robotics,** and **AI Agents**.
*   **⚡ 24/7 Cloud Automation:** Pre-configured Python scraper and GitHub Actions workflow designed to run at **6:00 AM IST** daily, update database files, and auto-deploy to Vercel without requiring local computers to be online.

---

## 📁 Repository Structure

```text
Daily_AI_News/
├── .github/
│   └── workflows/
│       └── daily-news.yml     # 24/7 Cloud Actions Cron configuration
├── scripts/
│   └── fetch_news.py          # Python news scraper and newsData compiler
├── src/
│   ├── assets/                # Design elements and icons
│   ├── components/
│   │   ├── Sidebar.jsx        # Mobile-ready responsive navigation
│   │   ├── TopBar.jsx         # Search, notification panel, and sync controls
│   │   ├── TrendingTicker.jsx # Scrolling breaking news ticker marquee
│   │   ├── TopTrendCard.jsx   # Hero trend card of the day
│   │   ├── Filters.jsx        # Date selectors, categories pills, and impact dropdowns
│   │   ├── NewsGrid.jsx       # Feed grid managing static/bookmarked views
│   │   ├── NewsCard.jsx       # News cards with expandable details drawer
│   │   ├── SkeletonLoader.jsx # Pulsing loading screen cards
│   │   ├── AnalyticsPanel.jsx # Animated Recharts areas and sentiment gauges
│   │   └── GitHubTrending.jsx # Starred GitHub repositories side-widget
│   ├── context/
│   │   └── DashboardContext.jsx # Search, Bookmarks, and Notifications Provider
│   ├── data/
│   │   └── newsData.js        # Dynamic compiled Daily AI News Database
│   ├── App.jsx                # Layout orchestrator and decorative meshes
│   ├── App.css                # Cleared styles block to prevent clashing
│   ├── index.css              # Custom scrollbars, marquee animation rules, and Tailwind v4 configurations
│   └── main.jsx               # Main React DOM compiler
├── index.html                 # Google Fonts integration and SEO metadata
├── vite.config.js             # Configured with first-party @tailwindcss/vite plugin
├── package.json               # Node packages and build script configurations
└── README.md                  # Project documentation
```

---

## 🚀 Local Quickstart Guide

Ensure you have [Node.js](https://nodejs.org) (v18+) and npm installed, then execute these commands from the root directory:

### **1. Install Dependencies**
```bash
npm install
```

### **2. Launch Development Server**
Starts the hot-reloading development server:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your web browser.

### **3. Production Compilation**
Compiles and optimizes the static files for production into the `dist` directory:
```bash
npm run build
```

---

## ☁️ Continuous 24/7 Cloud Deployment

The dashboard has been built to deploy on **Vercel** with continuous integration enabled via **GitHub**.

### **Method 1: Deploying Easiest via GitHub (Recommended)**
1. Initialize Git and commit the workspace:
   ```bash
   git init
   git add .
   git commit -m "feat: initial futuristic release with cloud schedules"
   ```
2. Create a new repository on [GitHub](https://github.com) and push the code:
   ```bash
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git branch -M main
   git push -u origin main
   ```
3. Connect your repository in your [Vercel Dashboard](https://vercel.com/dashboard) (Vite is detected automatically; leave all default settings unchanged and click **Deploy**).

### **Method 2: 24/7 Auto-Updates Setup**
Because we pushed [.github/workflows/daily-news.yml](.github/workflows/daily-news.yml) and [scripts/fetch_news.py](scripts/fetch_news.py) to your repository:
* **The cloud trigger is active:** GitHub's cloud servers will run the python scraper automatically every morning at **6:00 AM IST**.
* **Zero laptop maintenance:** The action will fetch fresh developments, commit them back to your repository, and Vercel will rebuild and deploy the live site automatically. **Your laptop can remain completely closed!**

---

## ⚖️ License
Aether News is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Developed using the DeepMind Antigravity framework.
