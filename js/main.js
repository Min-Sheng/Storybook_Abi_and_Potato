document.addEventListener('DOMContentLoaded', function() {
    // Check if libraries are loaded
    if (typeof St === 'undefined' || typeof St.PageFlip === 'undefined') {
        console.error("StPageFlip library not loaded.");
        return;
    }

    const bookElement = document.getElementById("book");
    const pageFlip = new St.PageFlip(
        bookElement,
        {
            width: 480, // base page width
            height: 680, // base page height
            size: "stretch", // automatically scales
            minWidth: 200,
            maxWidth: 1000,
            minHeight: 300,
            maxHeight: 1500,

            maxShadowOpacity: 0.5,
            showCover: true,
            mobileScrollSupport: false, 
            usePortrait: true, // Switch to single page in portrait
            startPage: 0
        }
    );

    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // Handle window resize for smoother mobile experience
    window.addEventListener('resize', () => {
        // StPageFlip usually handles resize automatically with "stretch",
        // but explicitly calling a redraw can fix some boundary issues on mobile orientation change
        pageFlip.update();
    });

    // Add replay button listener
    const replayBtn = document.getElementById('btn-replay');
    if (replayBtn) {
        replayBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            pageFlip.turnToPage(0);
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
