document.addEventListener('DOMContentLoaded', function() {
    // Check if libraries are loaded
    if (typeof St === 'undefined' || typeof St.PageFlip === 'undefined') {
        console.error("StPageFlip library not loaded.");
        return;
    }

    const pageFlip = new St.PageFlip(
        document.getElementById("book"),
        {
            width: 480, // base width
            height: 680, // base height
            size: "stretch", // automatically scales
            // set threshold values to allow infinite auto scaling:
            minWidth: 150,
            maxWidth: 1000,
            minHeight: 200,
            maxHeight: 1500,

            maxShadowOpacity: 0.5,
            showCover: true,
            mobileScrollSupport: false, // disable content scrolling on mobile devices
            usePortrait: true // allow single-column portrait mode on small displays
        }
    );

    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // Add replay button listener
    const replayBtn = document.getElementById('btn-replay');
    if (replayBtn) {
        replayBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent default page flip triggering
            pageFlip.turnToPage(0); // Go back to the cover page
        });
    }

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            pageFlip.flipNext('top');
        } else if (e.key === 'ArrowLeft') {
            pageFlip.flipPrev('top');
        }
    });
});
