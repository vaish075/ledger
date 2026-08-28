# 📔 Ledger — Student Planner

A modern, distraction-free student task planner, exam syllabus tracker, and study companion with persistent offline-first database storage.

---

## 🌟 Key Features

- **🏠 Smart Dashboard**:
  - Overall semester progress bar and completion rate.
  - Daily overview with real-time stats: *Tasks left*, *Due today*, *Completed this week*, and *Overdue*.
  - Grouped sections for Today's tasks, upcoming 7-day deadlines, overdue alerts, and recently completed items.

- **✅ Task & Assignment Management**:
  - **Quick Status Cycling**: Tap the status checkbox to cycle through `Not started` ☐ ➔ `In progress` 🔄 ➔ `Completed` ✅.
  - **Multi-Filter & Search**: Filter by Category (*Study, Assignments, Projects, Exams, College, Internships, Personal*), Priority (*High, Medium, Low*), Status, Subject, or Due Date.
  - **Recurring Tasks**: Automatic rescheduling for daily and weekly recurring tasks.
  - **Rich Task Metadata**: Attach course subjects, priority, deadlines, specific times, resource links (Google Drive, PDFs, URLs), and formatted notes.

- **📅 Interactive Calendar**:
  - Visual month grid with color-coded priority dots for scheduled deliverables.
  - Quick-switch tabs for *Today*, *This Week*, and *Month* views.
  - Day selector to instantly inspect deadlines for any specific date.

- **📊 Subject Progress & Analytics**:
  - Automatically aggregates completion percentages broken down by course/subject.
  - Live progress bars tracking syllabus and assignment completion ratios.

- **📖 Exam Syllabus Tracker**:
  - Set up exam dates with live countdowns (`in X days`, `today`, `past`).
  - Interactive syllabus checklist that automatically computes real-time preparation progress.

- **⏱️ Pomodoro Study Timer**:
  - Animated circular progress ring for focus sessions.
  - Customizable study intervals (e.g. 25 min focus ➔ 5 min break).
  - Daily completed focus cycle tracker.

- **🔐 Local Multi-User Accounts & Security**:
  - Register individual student profiles on the same device.
  - Cryptographic standard **SHA-256 password hashing**.
  - Persistent login sessions.

- **💾 Persistent Database Storage & Backup**:
  - **IndexedDB Object Stores**: `accounts`, `tasks`, `exams`, and `metadata`.
  - Automatic **LocalStorage fallback** for restricted browser environments.
  - **1-Click Backup (`⬇ Backup DB`)**: Exports all user data into a portable `.json` backup file.
  - **1-Click Restore (`⬆ Restore`)**: Restores planner database anytime from a backup file.
  - Stores data **only when explicitly created** by the user (no forced dummy tasks).

---

## 🚀 Getting Started

### Method 1: Direct Browser Launch (Zero Setup)
No server or package manager required:
1. Double-click **`index.html`** or right-click ➔ **Open with** ➔ **Google Chrome** / **Microsoft Edge** / **Firefox** / **Brave**.
2. Click **Register**, create your account, and start adding tasks!

---

### Method 2: Run via Node.js Server (Optional)
If you prefer running a local development server with Express & SQLite:

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start the Server**:
   ```bash
   npm start
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

### Method 3: Run with Python HTTP Server
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

---

## 📁 Project Structure

```
to-do/
│
├── index.html          # Main client-side single-page application (UI + IndexedDB)
├── server.js           # Optional Node.js/Express backend server with SQLite support
├── package.json        # Node.js dependencies & scripts
├── package-lock.json   # Exact dependency versions
└── README.md           # Project documentation
```

---

## 🛠️ Technology Stack

- **Frontend**: Vanilla HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+).
- **Typography**: Google Fonts (*Fraunces*, *Inter*, *JetBrains Mono*).
- **Client Database**: IndexedDB API with LocalStorage fallback.
- **Security**: Pure JavaScript SHA-256 standard hashing.
- **Backend (Optional)**: Node.js, Express, `better-sqlite3`, CORS.

---

## 📄 License
This project is open-source and free to use for personal and academic planning.
