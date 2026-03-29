/* ===================================================================
 * Theme Switcher - Day/Night mode with manual toggle
 *
 * Priority: 1) localStorage user preference
 *           2) prefers-color-scheme if supported
 *           3) time-based (dark between 7 PM and 7 AM)
 *
 * Adds a toggle button to the navbar on DOMContentLoaded.
 * ------------------------------------------------------------------- */

(function() {
    // Determine initial theme
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch(e) {}

    var dark;
    if (stored === 'dark' || stored === 'light') {
        dark = stored === 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
        var h = new Date().getHours();
        dark = h >= 19 || h < 7;
    }

    // Apply theme immediately to prevent FOUC
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

    function applyTheme() {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        if (document.body) {
            document.body.classList.toggle('dark', dark);
        }
        // Update toggle icon if it exists
        var icon = document.getElementById('theme-toggle-icon');
        if (icon) {
            icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
        }
        // Update aria-label
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    function toggleTheme() {
        dark = !dark;
        try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch(e) {}
        applyTheme();
        // Notify sky.js of theme change
        window.dispatchEvent(new CustomEvent('themechange', { detail: { dark: dark } }));
    }

    // Expose for external use
    window.__toggleTheme = toggleTheme;

    // Create the toggle button element
    function createToggleBtn() {
        var btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.className = 'theme-toggle-btn';
        btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
        btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
        btn.innerHTML = '<i id="theme-toggle-icon" class="' + (dark ? 'fas fa-sun' : 'fas fa-moon') + '"></i>';
        btn.addEventListener('click', toggleTheme);
        return btn;
    }

    // Apply body class once DOM is ready
    function init() {
        applyTheme();

        // Academic theme navbar (#navbar-content .navbar-nav)
        var academicNav = document.querySelector('#navbar-content .navbar-nav');
        if (academicNav) {
            var li = document.createElement('li');
            li.className = 'nav-item';
            li.appendChild(createToggleBtn());
            academicNav.appendChild(li);
            return;
        }

        // Blog theme navbar (.s-header__nav)
        var blogNav = document.querySelector('.s-header__nav');
        if (blogNav) {
            var li = document.createElement('li');
            li.appendChild(createToggleBtn());
            blogNav.appendChild(li);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Listen for OS theme changes (only if user hasn't set a manual preference)
    if (window.matchMedia) {
        try {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                var stored = null;
                try { stored = localStorage.getItem('theme'); } catch(ex) {}
                if (!stored) {
                    dark = e.matches;
                    applyTheme();
                    window.dispatchEvent(new CustomEvent('themechange', { detail: { dark: dark } }));
                }
            });
        } catch(e) {}
    }
})();
