/* ==================== SIMULATED CENTRAL DATABASE ==================== */
const state = {
  student: {
    name: "Alex Smith",
    id: "CS-2024-8891",
    course: "B.Tech Computer Science & Engineering",
    dept: "School of Computing",
    semester: "Semester 5",
    email: "alex.smith@college.edu"
  },
  announcements: [
    { id: 1, title: "Semester Examination Notice", desc: "End-semester examinations schedule has been uploaded to the portal.", date: "2026-09-10", category: "Exam", important: true },
    { id: 2, title: "Mid-Term Holiday Announcement", desc: "The college will remain closed on Friday for the regional festival.", date: "2026-09-12", category: "General", important: false },
    { id: 3, title: "Library Extended Hours Update", desc: "Library will stay open till 11:00 PM starting next Monday.", date: "2026-09-14", category: "Academic", important: false },
    { id: 4, title: "Merit Scholarship 2026-27", desc: "Applications open for state merit scholarship for eligible students.", date: "2026-09-08", category: "Scholarship", important: true },
    { id: 5, title: "Lab Assignment Submission Notice", desc: "Submit Web Dev Lab assignments before midnight on Sunday.", date: "2026-09-13", category: "Academic", important: true }
  ],
  events: [
    { id: 1, name: "TechPulse Hackathon 2026", date: "Sep 20, 2026", time: "09:00 AM", venue: "Auditorium", category: "Technical", desc: "24-hour coding challenge to solve real-world problems.", registered: false },
    { id: 2, name: "Cultural Harmony Night", date: "Sep 25, 2026", time: "05:00 PM", venue: "Open Air Theatre", category: "Cultural", desc: "Annual music, dance, and drama performances.", registered: false },
    { id: 3, name: "Inter-Department Cricket Cup", date: "Oct 02, 2026", time: "08:00 AM", venue: "Sports Ground", category: "Sports", desc: "Knockout cricket tournament.", registered: false },
    { id: 4, name: "AI & Machine Learning Workshop", date: "Oct 10, 2026", time: "10:00 AM", venue: "Lab 302", category: "Workshop", desc: "Hands-on ML model deployment session.", registered: false }
  ],
  timetable: {
    Monday: [
      { time: "09:00 - 10:00", subject: "Data Structures", faculty: "Dr. A. Turing", room: "Hall B1" },
      { time: "10:00 - 11:00", subject: "Web Development", faculty: "Prof. G. Hopper", room: "Lab 204" },
      { time: "11:30 - 12:30", subject: "Database Systems", faculty: "Dr. E. Codd", room: "Hall A2" },
      { time: "01:30 - 02:30", subject: "Operating Systems", faculty: "Prof. L. Torvalds", room: "Hall C1" }
    ],
    Tuesday: [
      { time: "09:00 - 10:00", subject: "Software Engineering", faculty: "Dr. M. Hamilton", room: "Hall B2" },
      { time: "10:00 - 11:00", subject: "Computer Networks", faculty: "Prof. V. Cerf", room: "Lab 101" }
    ],
    Wednesday: [
      { time: "09:00 - 10:00", subject: "Data Structures Lab", faculty: "Dr. A. Turing", room: "Lab 204" },
      { time: "11:30 - 12:30", subject: "Operating Systems", faculty: "Prof. L. Torvalds", room: "Hall C1" }
    ],
    Thursday: [
      { time: "10:00 - 11:00", subject: "Web Development", faculty: "Prof. G. Hopper", room: "Lab 204" },
      { time: "01:30 - 02:30", subject: "Database Systems", faculty: "Dr. E. Codd", room: "Hall A2" }
    ],
    Friday: [
      { time: "09:00 - 10:00", subject: "Computer Networks", faculty: "Prof. V. Cerf", room: "Hall B1" },
      { time: "11:30 - 12:30", subject: "Software Engineering", faculty: "Dr. M. Hamilton", room: "Hall B2" }
    ],
    Saturday: [
      { time: "10:00 - 12:00", subject: "Club Activities / Seminars", faculty: "Guest Faculty", room: "Auditorium" }
    ]
  },
  attendance: [
    { subject: "Data Structures", total: 40, attended: 34, percent: 85 },
    { subject: "Web Development", total: 38, attended: 35, percent: 92 },
    { subject: "Database Systems", total: 36, attended: 28, percent: 78 },
    { subject: "Operating Systems", total: 40, attended: 29, percent: 72.5 } // Below 75%
  ],
  assignments: [
    { id: 1, title: "Binary Search Tree Implementation", subject: "Data Structures", faculty: "Dr. A. Turing", due: "Sep 18, 2026", status: "Pending" },
    { id: 2, title: "Responsive Portfolio Project", subject: "Web Development", faculty: "Prof. G. Hopper", due: "Sep 15, 2026", status: "Pending" },
    { id: 3, title: "SQL Complex Queries Assignment", subject: "Database Systems", faculty: "Dr. E. Codd", due: "Sep 05, 2026", status: "Submitted" },
    { id: 4, title: "Process Synchronization Report", subject: "Operating Systems", faculty: "Prof. L. Torvalds", due: "Aug 30, 2026", status: "Overdue" }
  ],
  clubs: [
    { id: 1, name: "Coding Club", icon: "fa-code", members: 142, desc: "Competitive programming and development community.", joined: true },
    { id: 2, name: "Robotics Club", icon: "fa-robot", members: 89, desc: "Building autonomous systems and hardware bots.", joined: false },
    { id: 3, name: "Cultural Club", icon: "fa-masks-theater", members: 210, desc: "Drama, dance, and stage arts society.", joined: false },
    { id: 4, name: "Music Club", icon: "fa-music", members: 115, desc: "Vocal and instrumental jams and band sessions.", joined: false },
    { id: 5, name: "Photography Club", icon: "fa-camera", members: 76, desc: "Visual storytelling and photo walks.", joined: false },
    { id: 6, name: "Entrepreneurship Club", icon: "fa-lightbulb", members: 95, desc: "Startups, pitch decks, and business ideas.", joined: false }
  ],
  contacts: [
    { dept: "Administration Office", phone: "+1 555-0192", email: "admin@college.edu", location: "Admin Block, Rm 101" },
    { dept: "Examination Cell", phone: "+1 555-0193", email: "exams@college.edu", location: "Admin Block, Rm 204" },
    { dept: "Central Library Desk", phone: "+1 555-0144", email: "library@college.edu", location: "Library Ground Floor" },
    { dept: "IT Help Desk", phone: "+1 555-0155", email: "ithelp@college.edu", location: "CS Block, Rm 002" },
    { dept: "Student Support Cell", phone: "+1 555-0177", email: "support@college.edu", location: "Student Center" },
    { dept: "Placement Cell", phone: "+1 555-0188", email: "placements@college.edu", location: "Admin Block, Rm 302" }
  ],
  mapData: {
    gate: { title: "Main Gate", tag: "Entrance", desc: "Primary entry point equipped with security checking and visitor registration.", hours: "24/7", zone: "Outer Perimeter" },
    admin: { title: "Administrative Block", tag: "Office", desc: "Houses the Dean's office, accounts section, and registrar desk.", hours: "9:00 AM - 5:00 PM", zone: "Central Block" },
    library: { title: "Central Library", tag: "Academic", desc: "3-story quiet study building with over 50,000 digital & physical books.", hours: "8:00 AM - 10:00 PM", zone: "East Campus" },
    labs: { title: "Computer Science Labs", tag: "Laboratory", desc: "High-performance computing units with high-speed internet and AI workstations.", hours: "8:00 AM - 7:00 PM", zone: "Tech Block" },
    canteen: { title: "Campus Cafeteria", tag: "Dining", desc: "Multi-cuisine dining area serving breakfast, lunch, snacks, and beverages.", hours: "7:30 AM - 8:00 PM", zone: "Student Center" },
    auditorium: { title: "Grand Auditorium", tag: "Events", desc: "1,200-seat fully air-conditioned hall for seminars and cultural programs.", hours: "Event Based", zone: "West Campus" },
    sports: { title: "Sports Complex", tag: "Recreation", desc: "Cricket field, basketball court, badminton hall, and fitness gymnasium.", hours: "6:00 AM - 8:00 PM", zone: "South Campus" }
  }
};

/* ==================== CORE INITIALIZATION & EVENT LISTENERS ==================== */
document.addEventListener('DOMContentLoaded', () => {
  initDateTime();
  initTheme();
  initNavigation();
  initSidebarMobile();
  initNotifications();
  initGlobalSearch();

  // Initial renders
  renderProfile();
  renderDashboardSchedule();
  renderAnnouncements();
  renderEvents();
  renderTimetable('Monday');
  renderAttendance();
  renderAssignments();
  renderClubs();
  renderContacts();
  initCampusMap();
});

/* ==================== DATE & TIME DISPLAY ==================== */
function initDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const hours = now.getHours();
  
  let greeting = "Good Day";
  if (hours < 12) greeting = "Good Morning";
  else if (hours < 17) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  document.getElementById('greetingTime').innerText = greeting;
  document.getElementById('currentDateDisplay').innerHTML = `<i class="fa-regular fa-calendar"></i> ${dateStr}`;
}

/* ==================== NAVIGATION & ROUTING ==================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute('data-section');
      navigateTo(targetSection);
      
      // Mobile auto close sidebar
      closeSidebar();
    });
  });
}

function navigateTo(sectionId) {
  // Update sidebar active link
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('data-section') === sectionId);
  });

  // Switch sections
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ==================== SIDEBAR & MOBILE TOGGLES ==================== */
function initSidebarMobile() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
  });

  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
}

/* ==================== THEME TOGGLE (DARK/LIGHT) ==================== */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.body.removeAttribute('data-theme');
      themeIcon.className = 'fa-solid fa-moon';
    } else {
      document.body.setAttribute('data-theme', 'dark');
      themeIcon.className = 'fa-solid fa-sun';
    }
  });
}

/* ==================== NOTIFICATIONS ==================== */
function initNotifications() {
  const bell = document.getElementById('notifBell');
  const panel = document.getElementById('notifPanel');
  const markReadBtn = document.getElementById('markAllReadBtn');
  const badge = document.getElementById('notifBadge');

  bell.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !bell.contains(e.target)) {
      panel.classList.remove('show');
    }
  });

  markReadBtn.addEventListener('click', () => {
    document.querySelectorAll('.notif-item').forEach(item => item.classList.remove('unread'));
    badge.style.display = 'none';
  });
}

/* ==================== RENDER PROFILE & MODAL EDIT ==================== */
function renderProfile() {
  const s = state.student;
  const initials = s.name.split(' ').map(n => n[0]).join('');

  document.getElementById('headerUserName').innerText = s.name;
  document.getElementById('headerAvatar').innerText = initials;
  document.getElementById('dashStudentName').innerText = s.name;
  
  document.getElementById('profName').innerText = s.name;
  document.getElementById('profCourse').innerText = s.course;
  document.getElementById('profId').innerText = s.id;
  document.getElementById('profDept').innerText = s.dept;
  document.getElementById('profSem').innerText = s.semester;
  document.getElementById('profEmail').innerText = s.email;
  document.getElementById('profileAvatarLarge').innerText = initials;

  document.getElementById('editProfileBtn').addEventListener('click', openEditProfileModal);
}

function openEditProfileModal() {
  const content = `
    <form id="editProfileForm">
      <div style="margin-bottom: 12px;">
        <label style="display:block; font-size:0.85rem; margin-bottom:4px; font-weight:600;">Full Name</label>
        <input type="text" id="editNameInput" class="form-control" style="width:100%;" value="${state.student.name}" required>
      </div>
      <div style="margin-bottom: 16px;">
        <label style="display:block; font-size:0.85rem; margin-bottom:4px; font-weight:600;">Course</label>
        <input type="text" id="editCourseInput" class="form-control" style="width:100%;" value="${state.student.course}" required>
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%;">Save Changes</button>
    </form>
  `;
  openModal('Edit Student Profile', content);

  document.getElementById('editProfileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    state.student.name = document.getElementById('editNameInput').value;
    state.student.course = document.getElementById('editCourseInput').value;
    renderProfile();
    closeModal();
  });
}

/* ==================== RENDER DASHBOARD SCHEDULE ==================== */
function renderDashboardSchedule() {
  const container = document.getElementById('dashScheduleList');
  const todayClasses = state.timetable['Monday']; // Demo default to Monday

  container.innerHTML = todayClasses.map(c => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid var(--border-color);">
      <div>
        <strong>${c.subject}</strong>
        <p class="text-muted" style="font-size:0.85rem;">${c.faculty} • ${c.room}</p>
      </div>
      <span class="badge badge-accent"><i class="fa-regular fa-clock"></i> ${c.time}</span>
    </div>
  `).join('');
}

/* ==================== ANNOUNCEMENTS ==================== */
function renderAnnouncements() {
  const grid = document.getElementById('announcementsGrid');
  const categoryFilter = document.getElementById('announcementCategoryFilter').value;
  const searchText = document.getElementById('announcementSearch').value.toLowerCase();

  const filtered = state.announcements.filter(a => {
    const matchesCat = categoryFilter === 'all' || a.category === categoryFilter;
    const matchesSearch = a.title.toLowerCase().includes(searchText) || a.desc.toLowerCase().includes(searchText);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="text-muted" style="grid-column: span 2;">No announcements match your filter.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(a => `
    <div class="card card-item">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-${a.important ? 'urgent' : 'general'}">${a.category}</span>
          <small class="text-muted">${a.date}</small>
        </div>
        <h3 class="card-item-title">${a.title}</h3>
        <p class="text-muted" style="font-size:0.9rem;">${a.desc}</p>
      </div>
      <div style="margin-top:16px;">
        <button class="btn btn-outline btn-sm" onclick="viewAnnouncementModal(${a.id})">Read Details</button>
      </div>
    </div>
  `).join('');

  // Event Listeners for filter inputs
  document.getElementById('announcementCategoryFilter').onchange = renderAnnouncements;
  document.getElementById('announcementSearch').oninput = renderAnnouncements;
}

function viewAnnouncementModal(id) {
  const item = state.announcements.find(a => a.id === id);
  if (!item) return;
  const content = `
    <p class="text-muted"><strong>Category:</strong> ${item.category} | <strong>Date:</strong> ${item.date}</p>
    <p style="margin-top:12px; font-size:0.95rem;">${item.desc}</p>
    <div style="margin-top:20px; text-align:right;">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">Close</button>
    </div>
  `;
  openModal(item.title, content);
}

/* ==================== EVENTS ==================== */
function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  const activeBtn = document.querySelector('#eventCategoryButtons .active');
  const selectedCat = activeBtn ? activeBtn.getAttribute('data-category') : 'all';

  const filtered = state.events.filter(e => selectedCat === 'all' || e.category === selectedCat);

  grid.innerHTML = filtered.map(e => `
    <div class="card card-item">
      <div>
        <span class="badge badge-accent">${e.category}</span>
        <h3 class="card-item-title">${e.name}</h3>
        <p class="text-muted" style="font-size:0.85rem;"><i class="fa-regular fa-calendar"></i> ${e.date} at ${e.time}</p>
        <p class="text-muted" style="font-size:0.85rem;"><i class="fa-solid fa-location-dot"></i> ${e.venue}</p>
        <p style="margin-top:8px; font-size:0.9rem;">${e.desc}</p>
      </div>
      <div style="margin-top:16px;">
        ${e.registered 
          ? `<button class="btn btn-disabled btn-sm" disabled><i class="fa-solid fa-check"></i> Registered</button>` 
          : `<button class="btn btn-primary btn-sm" onclick="registerEvent(${e.id})">Register Now</button>`}
      </div>
    </div>
  `).join('');

  // Category filter handlers
  document.querySelectorAll('#eventCategoryButtons button').forEach(btn => {
    btn.onclick = (e) => {
      document.querySelectorAll('#eventCategoryButtons button').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderEvents();
    };
  });
}

function registerEvent(id) {
  const ev = state.events.find(e => e.id === id);
  if (ev) {
    ev.registered = true;
    renderEvents();
    openModal('Registration Confirmed', `<p>You have successfully registered for <strong>${ev.name}</strong>.</p>`);
  }
}

/* ==================== TIMETABLE ==================== */
function renderTimetable(day) {
  const tbody = document.getElementById('timetableTableBody');
  const classes = state.timetable[day] || [];

  // Update active tab style
  document.querySelectorAll('.tabs-container .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-day') === day);
  });

  if (classes.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;" class="text-muted">No scheduled lectures for ${day}.</td></tr>`;
    return;
  }

  tbody.innerHTML = classes.map(c => `
    <tr>
      <td><strong>${c.time}</strong></td>
      <td>${c.subject}</td>
      <td>${c.faculty}</td>
      <td>${c.room}</td>
      <td><span class="badge badge-academic">Scheduled</span></td>
    </tr>
  `).join('');

  // Tab Listeners
  document.querySelectorAll('.tabs-container .tab-btn').forEach(btn => {
    btn.onclick = () => renderTimetable(btn.getAttribute('data-day'));
  });
}

/* ==================== ATTENDANCE ==================== */
function renderAttendance() {
  const grid = document.getElementById('attendanceGrid');
  let hasLowAttendance = false;

  grid.innerHTML = state.attendance.map(a => {
    let fillClass = 'fill-green';
    if (a.percent < 75) {
      fillClass = 'fill-danger';
      hasLowAttendance = true;
    } else if (a.percent < 80) {
      fillClass = 'fill-warning';
    }

    return `
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4>${a.subject}</h4>
          <span style="font-weight:700; font-size:1.1rem;">${a.percent}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill ${fillClass}" style="width: ${a.percent}%;"></div>
        </div>
        <p class="text-muted" style="font-size:0.85rem;">Attended ${a.attended} out of ${a.total} lectures</p>
      </div>
    `;
  }).join('');

  document.getElementById('attendanceWarning').style.display = hasLowAttendance ? 'flex' : 'none';
}

/* ==================== ASSIGNMENTS ==================== */
function renderAssignments() {
  const grid = document.getElementById('assignmentsGrid');

  grid.innerHTML = state.assignments.map(a => {
    let badgeType = 'general';
    if (a.status === 'Pending') badgeType = 'academic';
    if (a.status === 'Submitted') badgeType = 'accent';
    if (a.status === 'Overdue') badgeType = 'urgent';

    return `
      <div class="card card-item">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="badge badge-${badgeType}">${a.status}</span>
            <small class="text-muted">Due: ${a.due}</small>
          </div>
          <h3 class="card-item-title">${a.title}</h3>
          <p class="text-muted" style="font-size:0.85rem;">${a.subject} • ${a.faculty}</p>
        </div>
        <div style="margin-top:16px; display:flex; gap:8px;">
          ${a.status === 'Pending' ? `<button class="btn btn-success btn-sm" onclick="markAssignmentComplete(${a.id})">Mark as Completed</button>` : ''}
          <button class="btn btn-outline btn-sm" onclick="openModal('${a.title}', '<p>Faculty: ${a.faculty}</p><p>Due Date: ${a.due}</p><p>Status: ${a.status}</p>')">View Details</button>
        </div>
      </div>
    `;
  }).join('');
}

function markAssignmentComplete(id) {
  const asg = state.assignments.find(a => a.id === id);
  if (asg) {
    asg.status = 'Submitted';
    renderAssignments();
  }
}

/* ==================== CLUBS ==================== */
function renderClubs() {
  const grid = document.getElementById('clubsGrid');

  grid.innerHTML = state.clubs.map(c => `
    <div class="card card-item" style="text-align:center;">
      <div>
        <div style="font-size:2rem; color:var(--accent-primary); margin-bottom:8px;"><i class="fa-solid ${c.icon}"></i></div>
        <h3>${c.name}</h3>
        <p class="text-muted" style="font-size:0.8rem; margin-bottom:8px;">${c.members} Active Members</p>
        <p style="font-size:0.85rem;">${c.desc}</p>
      </div>
      <div style="margin-top:16px;">
        ${c.joined 
          ? `<button class="btn btn-disabled btn-sm" style="width:100%;" disabled>Joined ✓</button>` 
          : `<button class="btn btn-primary btn-sm" style="width:100%;" onclick="joinClub(${c.id})">Join Club</button>`}
      </div>
    </div>
  `).join('');
}

function joinClub(id) {
  const club = state.clubs.find(c => c.id === id);
  if (club) {
    club.joined = true;
    club.members += 1;
    renderClubs();
    openModal('Welcome to ' + club.name, `<p>You are now an official member of ${club.name}!</p>`);
  }
}

/* ==================== CAMPUS CONTACTS ==================== */
function renderContacts() {
  const grid = document.getElementById('contactsGrid');
  const searchText = document.getElementById('contactSearch').value.toLowerCase();

  const filtered = state.contacts.filter(c => 
    c.dept.toLowerCase().includes(searchText) || 
    c.email.toLowerCase().includes(searchText)
  );

  grid.innerHTML = filtered.map(c => `
    <div class="card">
      <h3>${c.dept}</h3>
      <p class="text-muted" style="font-size:0.85rem; margin-top:4px;"><i class="fa-solid fa-location-dot"></i> ${c.location}</p>
      <hr class="divider">
      <p style="font-size:0.9rem;"><i class="fa-solid fa-phone"></i> ${c.phone}</p>
      <p style="font-size:0.9rem; margin-top:4px;"><i class="fa-solid fa-envelope"></i> ${c.email}</p>
      <div style="margin-top:12px; display:flex; gap:8px;">
        <a href="tel:${c.phone}" class="btn btn-outline btn-sm" style="text-decoration:none;">Call</a>
        <a href="mailto:${c.email}" class="btn btn-outline btn-sm" style="text-decoration:none;">Email</a>
      </div>
    </div>
  `).join('');

  document.getElementById('contactSearch').oninput = renderContacts;
}

/* ==================== CAMPUS MAP ==================== */
function initCampusMap() {
  const nodes = document.querySelectorAll('.map-node');
  const placeholder = document.getElementById('mapPlaceholder');
  const content = document.getElementById('mapContent');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const locKey = node.getAttribute('data-loc');
      const info = state.mapData[locKey];

      if (info) {
        placeholder.classList.add('hidden');
        content.classList.remove('hidden');

        document.getElementById('mapTitle').innerText = info.title;
        document.getElementById('mapTag').innerText = info.tag;
        document.getElementById('mapDescription').innerText = info.desc;
        document.getElementById('mapHours').innerText = info.hours;
        document.getElementById('mapZone').innerText = info.zone;
      }
    });
  });
}

/* ==================== GLOBAL SEARCH ==================== */
function initGlobalSearch() {
  const searchInput = document.getElementById('globalSearch');

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (!val) return;

    // Filter announcements search & auto navigate if user types specific keyword
    document.getElementById('announcementSearch').value = val;
    document.getElementById('contactSearch').value = val;
    renderAnnouncements();
    renderContacts();
  });
}

/* ==================== REUSABLE MODAL SYSTEM ==================== */
function openModal(title, bodyHTML) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalBody').innerHTML = bodyHTML;
  document.getElementById('appModal').classList.add('open');

  document.getElementById('modalCloseBtn').onclick = closeModal;
}

function closeModal() {
  document.getElementById('appModal').classList.remove('open');
}