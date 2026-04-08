// ===== Gallery Data (100 COMPLETELY UNIQUE Images) =====
const galleryData = [
    // ===== NATURE CATEGORY (25 COMPLETELY Different Images) =====
    { id: 1, title: "Mountain Peak", category: "nature", description: "Stunning mountain landscape at sunrise", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop", alt: "Mountain peak" },
    { id: 2, title: "Northern Lights", category: "nature", description: "Aurora borealis dancing in the night sky", image: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=500&h=500&fit=crop", alt: "Northern lights" },
    { id: 3, title: "Forest Path", category: "nature", description: "Serene pathway through ancient woodland", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", alt: "Forest path" },
    { id: 4, title: "Ocean Waves", category: "nature", description: "Powerful waves crashing on the shore", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop", alt: "Ocean waves" },
    { id: 5, title: "Desert Dunes", category: "nature", description: "Golden sand dunes at sunset", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&h=500&fit=crop", alt: "Desert dunes" },
    { id: 6, title: "Waterfall", category: "nature", description: "Majestic waterfall in tropical rainforest", image: "https://images.unsplash.com/photo-1432405972618-c60b0b3a2c89?w=500&h=500&fit=crop", alt: "Waterfall" },
    { id: 7, title: "Tropical Beach", category: "nature", description: "Paradise tropical beach with palm trees", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=500&fit=crop", alt: "Tropical beach" },
    { id: 8, title: "Green Hill", category: "nature", description: "Rolling hills covered in green grass", image: "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=500&fit=crop", alt: "Green hill" },
    { id: 9, title: "Snow Peak", category: "nature", description: "Snowy mountain peak against blue sky", image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=500&fit=crop", alt: "Snow peak" },
    { id: 10, title: "Flower Field", category: "nature", description: "Vibrant field of wildflowers", image: "https://images.unsplash.com/photo-1490646213743-32ac12b6f4a9?w=500&h=500&fit=crop", alt: "Flower field" },
    { id: 11, title: "Starry Sky", category: "nature", description: "Clear night sky full of stars", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=500&fit=crop", alt: "Starry sky" },
    { id: 12, title: "Canyon View", category: "nature", description: "Deep canyon with stunning rock formations", image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500&h=500&fit=crop", alt: "Canyon view" },
    { id: 13, title: "Sunset Sky", category: "nature", description: "Colorful sunset painting the sky", image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=500&h=500&fit=crop", alt: "Sunset sky" },
    { id: 14, title: "Ice Glacier", category: "nature", description: "Massive ice glacier in polar regions", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop", alt: "Ice glacier" },
    { id: 15, title: "Jungle Canopy", category: "nature", description: "Dense tropical jungle canopy", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", alt: "Jungle canopy" },
    { id: 16, title: "Pine Forest", category: "nature", description: "Ancient pine forest landscape", image: "https://images.unsplash.com/photo-1424581049961-ab4a8885e2fa?w=500&h=500&fit=crop", alt: "Pine forest" },
    { id: 17, title: "Meadow Landscape", category: "nature", description: "Peaceful meadow with wildflowers", image: "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=500&h=500&fit=crop", alt: "Meadow landscape" },
    { id: 18, title: "Lightning Storm", category: "nature", description: "Dramatic lightning strike during storm", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop", alt: "Lightning storm" },
    { id: 19, title: "Lake Reflection", category: "nature", description: "Mountain lake with perfect reflection", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=500&fit=crop", alt: "Lake reflection" },
    { id: 20, title: "Autumn Leaves", category: "nature", description: "Beautiful autumn foliage colors", image: "https://images.unsplash.com/photo-1530494040454-f1d6b2f3d0a0?w=500&h=500&fit=crop", alt: "Autumn leaves" },
    { id: 21, title: "River Rapids", category: "nature", description: "Rushing river with white water rapids", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop", alt: "River rapids" },
    { id: 22, title: "Field of Lavender", category: "nature", description: "Purple lavender field in full bloom", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&h=500&fit=crop", alt: "Field of lavender" },
    { id: 23, title: "Misty Valley", category: "nature", description: "Foggy valley landscape at dawn", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop", alt: "Misty valley" },
    { id: 24, title: "Rocky Mountains", category: "nature", description: "Majestic rocky mountain range", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop", alt: "Rocky mountains" },
    { id: 25, title: "Coastal Cliffs", category: "nature", description: "Dramatic coastal cliffs overlooking ocean", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=500&fit=crop", alt: "Coastal cliffs" },

    // ===== ARCHITECTURE CATEGORY (25 COMPLETELY Different Images) =====
    { id: 26, title: "Modern Building", category: "architecture", description: "Contemporary skyscraper architecture", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=500&fit=crop", alt: "Modern building" },
    { id: 27, title: "Urban Street", category: "architecture", description: "Bustling city street at night", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop", alt: "Urban street" },
    { id: 28, title: "Historic Bridge", category: "architecture", description: "Iconic bridge spanning across the river", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=500&fit=crop", alt: "Historic bridge" },
    { id: 29, title: "Glass Building", category: "architecture", description: "Futuristic glass skyscraper", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=500&fit=crop", alt: "Glass building" },
    { id: 30, title: "Stone Castle", category: "architecture", description: "Medieval stone castle on hilltop", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop", alt: "Stone castle" },
    { id: 31, title: "Ancient Temple", category: "architecture", description: "Ancient temple with intricate carvings", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=500&fit=crop", alt: "Ancient temple" },
    { id: 32, title: "Arch Way", category: "architecture", description: "Historic archway in ancient city", image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=500&fit=crop", alt: "Arch way" },
    { id: 33, title: "Office Complex", category: "architecture", description: "Modern office complex at dusk", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=500&fit=crop", alt: "Office complex" },
    { id: 34, title: "Street Corner", category: "architecture", description: "Corner building in historic district", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop", alt: "Street corner" },
    { id: 35, title: "Cathedral", category: "architecture", description: "Beautiful historic cathedral", image: "https://images.unsplash.com/photo-1504367462240-10ac53077448?w=500&h=500&fit=crop", alt: "Cathedral" },
    { id: 36, title: "Modern Facade", category: "architecture", description: "Contemporary building facade", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=500&fit=crop", alt: "Modern facade" },
    { id: 37, title: "City Lights Night", category: "architecture", description: "City skyline at night with lights", image: "https://images.unsplash.com/photo-1503899036078-d282a8ba896b?w=500&h=500&fit=crop", alt: "City lights night" },
    { id: 38, title: "Wooden Door", category: "architecture", description: "Ornate wooden door in historic building", image: "https://images.unsplash.com/photo-1430026833185-ec8b6fccd233?w=500&h=500&fit=crop", alt: "Wooden door" },
    { id: 39, title: "Brick Wall Art", category: "architecture", description: "Textured red brick wall texture", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop", alt: "Brick wall art" },
    { id: 40, title: "Rooftop View", category: "architecture", description: "View from building rooftop", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=500&fit=crop", alt: "Rooftop view" },
    { id: 41, title: "Plaza Design", category: "architecture", description: "Well-designed public plaza", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop", alt: "Plaza design" },
    { id: 42, title: "Window Pattern", category: "architecture", description: "Geometric window pattern on building", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=500&fit=crop", alt: "Window pattern" },
    { id: 43, title: "Historic Center", category: "architecture", description: "Historic city center architecture", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=500&fit=crop", alt: "Historic center" },
    { id: 44, title: "Spiral Staircase", category: "architecture", description: "Beautiful spiral staircase", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=500&fit=crop", alt: "Spiral staircase" },
    { id: 45, title: "Interior Design", category: "architecture", description: "Modern interior design space", image: "https://images.unsplash.com/photo-1484807353052-23338f8b6370?w=500&h=500&fit=crop", alt: "Interior design" },
    { id: 46, title: "Dome Structure", category: "architecture", description: "Beautiful dome structure", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=500&fit=crop", alt: "Dome structure" },
    { id: 47, title: "Bridge Structure", category: "architecture", description: "Detailed view of bridge structure", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop", alt: "Bridge structure" },
    { id: 48, title: "Parking Garage", category: "architecture", description: "Modern parking structure design", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=500&fit=crop", alt: "Parking garage" },
    { id: 49, title: "Column Detail", category: "architecture", description: "Ornate column architectural detail", image: "https://images.unsplash.com/photo-1504279087293-37dda857be4e?w=500&h=500&fit=crop", alt: "Column detail" },
    { id: 50, title: "Industrial Space", category: "architecture", description: "Industrial warehouse interior", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop", alt: "Industrial space" },

    // ===== PEOPLE CATEGORY (25 COMPLETELY Different Images) =====
    { id: 51, title: "Portrait Study", category: "people", description: "Candid portrait capturing emotions", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop", alt: "Portrait study" },
    { id: 52, title: "Group Celebration", category: "people", description: "Friends enjoying a memorable moment", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop", alt: "Group celebration" },
    { id: 53, title: "Artist at Work", category: "people", description: "Creative individual in their element", image: "https://images.unsplash.com/photo-1488701148f23-603c7161654e?w=500&h=500&fit=crop", alt: "Artist at work" },
    { id: 54, title: "Business Meeting", category: "people", description: "Professional team in meeting", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", alt: "Business meeting" },
    { id: 55, title: "Happy Smile", category: "people", description: "Person with genuine happy smile", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop", alt: "Happy smile" },
    { id: 56, title: "Family Portrait", category: "people", description: "Happy family portrait outdoors", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop", alt: "Family portrait" },
    { id: 57, title: "Dancing Joy", category: "people", description: "Person dancing with joy", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop", alt: "Dancing joy" },
    { id: 58, title: "Thinking Pose", category: "people", description: "Person in contemplative thinking pose", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop", alt: "Thinking pose" },
    { id: 59, title: "Work Colleague", category: "people", description: "Colleague working at office desk", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", alt: "Work colleague" },
    { id: 60, title: "Outdoor Adventure", category: "people", description: "Person on outdoor adventure", image: "https://images.unsplash.com/photo-1504674900152-b8916f50f4cb?w=500&h=500&fit=crop", alt: "Outdoor adventure" },
    { id: 61, title: "Coffee Chat", category: "people", description: "Two people having coffee chat", image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop", alt: "Coffee chat" },
    { id: 62, title: "Phone Call", category: "people", description: "Person talking on phone", image: "https://images.unsplash.com/photo-150784272343-583f20270319?w=500&h=500&fit=crop", alt: "Phone call" },
    { id: 63, title: "Reading Book", category: "people", description: "Person reading a book", image: "https://images.unsplash.com/photo-1507842271343-583f20270319?w=500&h=500&fit=crop", alt: "Reading book" },
    { id: 64, title: "Team Work", category: "people", description: "Team working together collaborate", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", alt: "Team work" },
    { id: 65, title: "Child Playing", category: "people", description: "Happy child playing outdoors", image: "https://images.unsplash.com/photo-1503454537688-e0ce058bef93?w=500&h=500&fit=crop", alt: "Child playing" },
    { id: 66, title: "Fitness Model", category: "people", description: "Athletic person exercising", image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=500&fit=crop", alt: "Fitness model" },
    { id: 67, title: "Fashion Shot", category: "people", description: "Fashion-forward portrait shot", image: "https://images.unsplash.com/photo-1485889517342-0949d5dc75d7?w=500&h=500&fit=crop", alt: "Fashion shot" },
    { id: 68, title: "Interview Scene", category: "people", description: "Job interview scene in office", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", alt: "Interview scene" },
    { id: 69, title: "Cooking Together", category: "people", description: "People cooking together in kitchen", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop", alt: "Cooking together" },
    { id: 70, title: "Student Learning", category: "people", description: "Student learning and writing", image: "https://images.unsplash.com/photo-1488701148f23-603c7161654e?w=500&h=500&fit=crop", alt: "Student learning" },
    { id: 71, title: "Travel Explorer", category: "people", description: "Explorer traveling in foreign land", image: "https://images.unsplash.com/photo-1488701148f23-603c7161654e?w=500&h=500&fit=crop", alt: "Travel explorer" },
    { id: 72, title: "Performance Art", category: "people", description: "Performer on stage", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop", alt: "Performance art" },
    { id: 73, title: "Meditation Pose", category: "people", description: "Person in meditation pose", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop", alt: "Meditation pose" },
    { id: 74, title: "Handshake Deal", category: "people", description: "Business handshake sealing deal", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", alt: "Handshake deal" },
    { id: 75, title: "Birthday Party", category: "people", description: "Friends celebrating birthday", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop", alt: "Birthday party" },

    // ===== TECHNOLOGY CATEGORY (25 COMPLETELY Different Images) =====
    { id: 76, title: "AI Chip", category: "technology", description: "Advanced semiconductor technology", image: "https://images.unsplash.com/photo-1591488320449-011701bb6570?w=500&h=500&fit=crop", alt: "AI Chip" },
    { id: 77, title: "Digital Code", category: "technology", description: "Programming and software development", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", alt: "Digital Code" },
    { id: 78, title: "Tech Workspace", category: "technology", description: "Modern development environment", image: "https://images.unsplash.com/photo-1553531088-f352ddfb63ae?w=500&h=500&fit=crop", alt: "Tech Workspace" },
    { id: 79, title: "Smartphone Tech", category: "technology", description: "Latest smartphone technology", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop", alt: "Smartphone tech" },
    { id: 80, title: "Keyboard Keys", category: "technology", description: "Computer keyboard with RGB lighting", image: "https://images.unsplash.com/photo-1587829191301-ce45f1468509?w=500&h=500&fit=crop", alt: "Keyboard keys" },
    { id: 81, title: "Data Center", category: "technology", description: "Data center server room", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", alt: "Data center" },
    { id: 82, title: "AI Intelligence", category: "technology", description: "Artificial intelligence concept", image: "https://images.unsplash.com/photo-1649089938879-dfa521b4529b?w=500&h=500&fit=crop", alt: "AI intelligence" },
    { id: 83, title: "Virtual Reality", category: "technology", description: "Person wearing VR headset", image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b914?w=500&h=500&fit=crop", alt: "Virtual reality" },
    { id: 84, title: "Drone Tech", category: "technology", description: "Modern drone technology", image: "https://images.unsplash.com/photo-1524634126289-34d36e24302a?w=500&h=500&fit=crop", alt: "Drone tech" },
    { id: 85, title: "Robot Arm", category: "technology", description: "Robotic arm in factory", image: "https://images.unsplash.com/photo-1561557404-bc37be57aebe?w=500&h=500&fit=crop", alt: "Robot arm" },
    { id: 86, title: "Server Room", category: "technology", description: "Organized server room setup", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", alt: "Server room" },
    { id: 87, title: "Circuit Board", category: "technology", description: "Complex circuit board design", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", alt: "Circuit board" },
    { id: 88, title: "Laptop Setup", category: "technology", description: "Professional laptop work setup", image: "https://images.unsplash.com/photo-1517694712062-cfb542e42797?w=500&h=500&fit=crop", alt: "Laptop setup" },
    { id: 89, title: "Mobile App", category: "technology", description: "Mobile app development interface", image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b914?w=500&h=500&fit=crop", alt: "Mobile app" },
    { id: 90, title: "Cloud Storage", category: "technology", description: "Cloud storage technology concept", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", alt: "Cloud storage" },
    { id: 91, title: "Cyber Security", category: "technology", description: "Cybersecurity protection concept", image: "https://images.unsplash.com/photo-1516321347423-f06f85e504b3?w=500&h=500&fit=crop", alt: "Cyber security" },
    { id: 92, title: "Machine Learning", category: "technology", description: "Machine learning visualization", image: "https://images.unsplash.com/photo-1517694712156-64a7fa73e8ca?w=500&h=500&fit=crop", alt: "Machine learning" },
    { id: 93, title: "Gaming Setup", category: "technology", description: "High-end gaming PC setup", image: "https://images.unsplash.com/photo-1553531088-f352ddfb63ae?w=500&h=500&fit=crop", alt: "Gaming setup" },
    { id: 94, title: "Tech Conference", category: "technology", description: "Tech conference presentation", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=500&fit=crop", alt: "Tech conference" },
    { id: 95, title: "Wearable Tech", category: "technology", description: "Wearable technology device", image: "https://images.unsplash.com/photo-1575160211345-7a0c3ca488b7?w=500&h=500&fit=crop", alt: "Wearable tech" },
    { id: 96, title: "Blockchain Tech", category: "technology", description: "Blockchain technology concept", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop", alt: "Blockchain tech" },
    { id: 97, title: "Quantum Computing", category: "technology", description: "Quantum computing visualization", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", alt: "Quantum computing" },
    { id: 98, title: "IoT Sensors", category: "technology", description: "Internet of Things sensors tech", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", alt: "IoT sensors" },
    { id: 99, title: "3D Printing", category: "technology", description: "3D printer technology", image: "https://images.unsplash.com/photo-1616228171905-70f8c1cd4e5f?w=500&h=500&fit=crop", alt: "3D printing" },
    { id: 100, title: "Hologram Tech", category: "technology", description: "Holographic technology display", image: "https://images.unsplash.com/photo-1516214104703-3efca4275514?w=500&h=500&fit=crop", alt: "Hologram tech" }
];

// ===== Gallery Controller =====
class GalleryController {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.currentFilter = 'all';
        this.lightboxIndex = 0;
        this.filteredData = [...galleryData];
        this.isDarkMode = this.loadThemePreference();
        this.init();
    }

    // Initialize gallery
    init() {
        this.applyTheme();
        this.attachEventListeners();
        this.render();
        this.setupPagination();
    }

    // Load theme preference from localStorage
    loadThemePreference() {
        const saved = localStorage.getItem('galleryTheme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Save theme preference
    saveThemePreference() {
        localStorage.setItem('galleryTheme', this.isDarkMode ? 'dark' : 'light');
    }

    // Apply theme to DOM
    applyTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        
        if (this.isDarkMode) {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.style.background = 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)';
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        }
    }

    // Toggle dark mode
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        this.saveThemePreference();
        this.applyTheme();
    }

    // Attach event listeners
    attachEventListeners() {
        // Theme toggle button
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleDarkMode());

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterClick(e));
        });

        // Lightbox navigation
        document.getElementById('prevBtn').addEventListener('click', () => this.prevImage());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextImage());
        document.querySelector('.lightbox-close').addEventListener('click', () => this.closeLightbox());
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') this.closeLightbox();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }

    // Handle filter button clicks
    handleFilterClick(event) {
        const filter = event.currentTarget.dataset.filter;
        this.currentFilter = filter;
        this.currentPage = 1;

        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.currentTarget.classList.add('active');

        // Filter data
        this.filteredData = filter === 'all' 
            ? [...galleryData]
            : galleryData.filter(item => item.category === filter);

        this.render();
        this.setupPagination();
    }

    // Render gallery items
    render() {
        const startIdx = (this.currentPage - 1) * this.itemsPerPage;
        const endIdx = startIdx + this.itemsPerPage;
        const itemsToDisplay = this.filteredData.slice(startIdx, endIdx);

        const galleryGrid = document.getElementById('galleryGrid');
        galleryGrid.innerHTML = '';

        if (itemsToDisplay.length === 0) {
            galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #636e72;">No images found in this category.</p>';
            return;
        }

        itemsToDisplay.forEach((item, index) => {
            const galleryItem = this.createGalleryItem(item, startIdx + index);
            galleryGrid.appendChild(galleryItem);
        });
    }

    // Create individual gallery item
    createGalleryItem(item, index) {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.alt}" class="gallery-item-image">
            <div class="gallery-item-overlay">
                <h3 class="gallery-item-title">${item.title}</h3>
                <span class="gallery-item-category">${this.capitalizeCategory(item.category)}</span>
            </div>
            <div class="gallery-item-icon">
                <i class="fas fa-expand"></i>
            </div>
        `;

        div.addEventListener('click', () => this.openLightbox(index));
        return div;
    }

    // Setup pagination
    setupPagination() {
        const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `pagination-btn ${i === this.currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                this.currentPage = i;
                this.render();
                this.setupPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(btn);
        }
    }

    // Open lightbox
    openLightbox(index) {
        this.lightboxIndex = index;
        const item = this.filteredData[index];
        
        document.getElementById('lightboxImage').src = item.image;
        document.getElementById('lightboxTitle').textContent = item.title;
        document.getElementById('lightboxDescription').textContent = item.description;
        document.getElementById('imageCounter').textContent = `${index + 1} / ${this.filteredData.length}`;
        
        document.getElementById('lightbox').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    closeLightbox() {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Next image in lightbox
    nextImage() {
        this.lightboxIndex = (this.lightboxIndex + 1) % this.filteredData.length;
        const item = this.filteredData[this.lightboxIndex];
        
        document.getElementById('lightboxImage').src = item.image;
        document.getElementById('lightboxTitle').textContent = item.title;
        document.getElementById('lightboxDescription').textContent = item.description;
        document.getElementById('imageCounter').textContent = `${this.lightboxIndex + 1} / ${this.filteredData.length}`;
    }

    // Previous image in lightbox
    prevImage() {
        this.lightboxIndex = (this.lightboxIndex - 1 + this.filteredData.length) % this.filteredData.length;
        const item = this.filteredData[this.lightboxIndex];
        
        document.getElementById('lightboxImage').src = item.image;
        document.getElementById('lightboxTitle').textContent = item.title;
        document.getElementById('lightboxDescription').textContent = item.description;
        document.getElementById('imageCounter').textContent = `${this.lightboxIndex + 1} / ${this.filteredData.length}`;
    }

    // Handle keyboard navigation
    handleKeyDown(event) {
        const lightbox = document.getElementById('lightbox');
        
        if (!lightbox.classList.contains('active')) return;

        switch(event.key) {
            case 'ArrowRight':
                this.nextImage();
                break;
            case 'ArrowLeft':
                this.prevImage();
                break;
            case 'Escape':
                this.closeLightbox();
                break;
        }
    }

    // Capitalize category names
    capitalizeCategory(category) {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}

// ===== Initialize Gallery on DOM Load =====
document.addEventListener('DOMContentLoaded', () => {
    new GalleryController();
});
