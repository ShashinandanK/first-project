
    // ========================================
    // 1. NAVIGATION: Change the active menu link
    // ========================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });


    // ========================================
    // 2. ANNOUNCEMENTS: Show and hide announcements
    // ========================================

    const toggleButton = document.getElementById("toggleAnnouncements");
    const announcementItems = document.querySelectorAll(".announcement");

    toggleButton.addEventListener("click", function () {

        const isVisible = announcementItems[0].style.display !== "none";

        announcementItems.forEach(function (item) {
            item.style.display = isVisible ? "none" : "block";
        });

        toggleButton.textContent = isVisible
            ? "Show Announcements"
            : "Hide Announcements";
    });


    // ========================================
    // 3. WELCOME BUTTON: Change the heading
    // ========================================

    const welcomeButton = document.getElementById("welcomeButton");
    const welcomeHeading = document.getElementById("welcomeHeading");

    welcomeButton.addEventListener("click", function () {
        welcomeHeading.textContent = "Welcome to CampusHub!";
        console.log("Welcome to CampusHub!");
    })