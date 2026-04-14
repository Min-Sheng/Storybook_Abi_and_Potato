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
            width: 480, 
            height: 680, 
            size: "stretch", 
            minWidth: 200,
            maxWidth: 1000,
            minHeight: 300,
            maxHeight: 1500,

            maxShadowOpacity: 0, // Fully disable shadow opacity
            showCover: true,
            mobileScrollSupport: false, 
            usePortrait: true,
            startPage: 0,
            drawShadow: false, // Turn off shadow calculation entirely
            flippingTime: 600, // Faster flip for less chance of frame drops
            useMouseEvents: true,
            swipeDistance: 30, // Sensitivity
            showPageCorners: false // Disable corner folding effect to save GPU
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
