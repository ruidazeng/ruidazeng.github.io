/* ===================================================================
 * Theme Switcher - Day/Night mode based on local time
 *
 * Primary: checks prefers-color-scheme if supported
 * Fallback: time-based (dark between 7 PM and 7 AM)
 * ------------------------------------------------------------------- */

(function() {
    var dark;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
        var h = new Date().getHours();
        dark = h >= 19 || h < 7;
    }

    // Set data-theme on html immediately to prevent FOUC
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

    // Add .dark class to body for academic.css dark styles
    function applyBodyClass() {
        if (dark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    if (document.body) {
        applyBodyClass();
    } else {
        document.addEventListener('DOMContentLoaded', applyBodyClass);
    }

    // Listen for OS theme changes
    if (window.matchMedia) {
        try {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                dark = e.matches;
                document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
                applyBodyClass();
            });
        } catch(e) {}
    }
})();
