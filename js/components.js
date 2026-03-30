/* ===================================================================
 * Site Components - Shared HTML templates for all pages
 * Eliminates duplicated boilerplate across HTML files
 * =================================================================== */

var SiteComponents = (function() {
    'use strict';

    // Navigation items - single source of truth
    var NAV_ITEMS = [
        { label: 'Home', href: 'index.html', key: 'home' },
        { label: 'News', href: 'news.html', key: 'news' },
        { label: 'Publications', href: 'publications.html', key: 'publications' },
        { label: 'Projects', href: 'projects.html', key: 'projects' },
        { label: 'Blogs', href: 'blogs.html', key: 'blogs' },
        { label: 'Contact', href: 'contact.html', key: 'contact' }
    ];

    var COOKIE_CONSENT_SCRIPT = '<script>' +
        'window.addEventListener("load", function(){' +
            'window.cookieconsent.initialise({' +
                '"palette": {' +
                    '"popup": {"background": "#5b8fb9", "text": "#fff"},' +
                    '"button": {"background": "#fff", "text": "#5b8fb9"}' +
                '},' +
                '"theme": "classic",' +
                '"content": {' +
                    '"message": "This website uses cookies to ensure you get the best experience on my website.",' +
                    '"dismiss": "Got it!",' +
                    '"link": "Learn more",' +
                    '"href": "https://www.cookiesandyou.com"' +
                '}' +
            '})});' +
        '<\/script>';

    // ---------------------------------------------------------------
    // Academic pages (index, news, publications, projects, contact)
    // ---------------------------------------------------------------

    function academicHead(config) {
        var p = config.pathPrefix || '';
        var html = '';

        html += '<meta name="author" content="Ruida Zeng">';
        html += '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';

        // Optional meta tags (OG, Twitter, etc.)
        if (config.extraMeta) html += config.extraMeta;

        html += '<link rel="icon" href="' + p + 'images/icons/squirrel-icon.png" type="image/icon type">';
        html += '<link rel="stylesheet" type="text/css" href="' + p + 'css/academic.css">';
        html += '<link rel="stylesheet" type="text/css" href="' + p + 'css/dark-mode.css">';
        html += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-1/css/all.min.css" crossorigin="anonymous">';
        html += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/academicons/1.8.6/css/academicons.min.css" crossorigin="anonymous">';
        // html += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.css" crossorigin="anonymous">';

        // Extra CSS (e.g., contact page extras)
        if (config.extraCSS) {
            for (var i = 0; i < config.extraCSS.length; i++) {
                html += '<link rel="stylesheet" href="' + config.extraCSS[i] + '">';
            }
        }

        if (!config.noLazysizes) {
            html += '<script src="' + p + 'js/lazysizes.js" defer><\/script>';
        }
        html += '<script src="' + p + 'js/jquery.js" defer><\/script>';
        html += '<script src="' + p + 'js/bootstrap.js" defer><\/script>';
        // html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.js" crossorigin="anonymous" defer><\/script>';
        html += '<script src="' + p + 'js/year.js" defer><\/script>';
        html += '<script src="' + p + 'js/sky.js" defer><\/script>';
        // html += COOKIE_CONSENT_SCRIPT;

        // Extra JS (e.g., leaflet)
        if (config.extraJS) {
            for (var j = 0; j < config.extraJS.length; j++) {
                html += config.extraJS[j];
            }
        }

        // Extra inline style
        if (config.extraStyle) {
            html += '<style>' + config.extraStyle + '</style>';
        }

        document.write(html);
    }

    function academicNav(activePage, pathPrefix) {
        var p = pathPrefix || '';
        var html = '';
        html += '<nav class="navbar navbar-expand-lg navbar-light compensate-for-scrollbar" id="navbar-main">';
        html += '<div class="container">';
        html += '<div class="d-none d-lg-inline-flex">';
        html += '<a class="navbar-brand" href="https://www.ruidazeng.com">Ruida Zeng</a>';
        html += '</div>';
        html += '<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">';
        html += '<span><i class="fas fa-bars"></i></span>';
        html += '</button>';
        html += '<div class="navbar-brand-mobile-wrapper d-inline-flex d-lg-none">';
        html += '<a class="navbar-brand" href="https://www.ruidazeng.com">Ruida Zeng</a>';
        html += '</div>';
        html += '<div class="navbar-collapse main-menu-item justify-content-end collapse" id="navbar-content">';
        html += '<ul class="navbar-nav d-md-inline-flex">';

        for (var i = 0; i < NAV_ITEMS.length; i++) {
            var item = NAV_ITEMS[i];
            var activeClass = (item.key === activePage) ? ' active' : '';
            var ariaCurrent = (item.key === activePage) ? ' aria-current="page"' : '';
            html += '<li class="nav-item">';
            html += '<a class="nav-link' + activeClass + '" href="' + p + item.href + '"' + ariaCurrent + '><span>' + item.label + '</span></a>';
            html += '</li>';
        }

        html += '</ul></div></div></nav>';
        return html;
    }

    function academicFooter() {
        return '<footer class="site-footer">' +
            '<p class="ss-copyright">' +
            '&copy; Ruida Zeng <span class="current-year"></span>' +
            '</p></footer>';
    }

    // ---------------------------------------------------------------
    // Blog pages (blogs.html, blogs/*.html)
    // ---------------------------------------------------------------

    function blogHead(config) {
        var p = config.pathPrefix || '';
        var html = '';

        html += '<meta name="description" content="">';
        html += '<meta name="author" content="">';
        html += '<meta name="viewport" content="width=device-width, initial-scale=1">';
        html += '<link rel="icon" href="' + p + 'images/icons/squirrel-icon.png" type="image/icon type">';
        html += '<link rel="stylesheet" href="' + p + 'css/base.css">';
        html += '<link rel="stylesheet" href="' + p + 'css/main.css">';
        html += '<link rel="stylesheet" href="' + p + 'css/dark-mode.css">';
        html += '<script src="' + p + 'js/modernizr.js"><\/script>';
        html += '<script defer src="' + p + 'js/fontawesome/all.min.js"><\/script>';
        html += '<script src="' + p + 'js/sky.js" defer><\/script>';

        document.write(html);
    }

    function blogPreloader() {
        return '<div id="preloader"><div id="loader" class="dots-fade"><div></div><div></div><div></div></div></div>';
    }

    function blogHeader(activePage, pathPrefix) {
        var p = pathPrefix || '';
        var html = '';

        html += '<header class="s-header">';
        html += '<div class="row"><div class="s-header__content column"><div class="s-header__brand">';
        html += '<h1 class="s-header__logotext"><a href="' + p + 'blogs.html" title="">Ruida\'s Room</a></h1>';
        html += '<p class="s-header__tagline">Private thoughts, book &amp; movie reviews, and yummy recipes.</p>';
        html += '</div></div></div>';

        html += '<nav class="s-header__nav-wrap"><div class="row"><ul class="s-header__nav">';
        for (var i = 0; i < NAV_ITEMS.length; i++) {
            var item = NAV_ITEMS[i];
            var currentClass = (item.key === activePage) ? ' class="current"' : '';
            html += '<li' + currentClass + '><a href="' + p + item.href + '">' + item.label + '</a></li>';
        }
        html += '</ul></div></nav>';
        html += '<a class="header-menu-toggle" href="#0"><span>Menu</span></a>';
        html += '</header>';

        return html;
    }

    function blogFooterFull() {
        return '<footer class="s-footer">' +
            '<div class="row s-footer__bottom">' +
            '<div class="large-6 tab-full column s-footer__info">' +
            '<h3 class="h6">About Ruida\'s Room</h3>' +
            '<p>Ruida\'s Room is a place where I share some of my spontaneous ideas and shower thoughts so that ' +
            'they don\'t get lost in time. I also plan on uploading all my book and movie reviews from the last ' +
            'few years once I figure out how to categorize them correctly. Last but not least, I will be posting ' +
            'some delicious homemade recipes for food and drinks regularly.</p>' +
            '<p>Stay tuned!</p>' +
            '</div>' +
            '<div class="large-6 tab-full column"><div class="row">' +
            '<div class="large-8 tab-full column"></div>' +
            '<div class="large-4 tab-full column">' +
            '<h3 class="h6">Navigate</h3>' +
            '<ul class="s-footer__list s-footer-list--nav group">' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="news.html">News</a></li>' +
            '<li><a href="publications.html">Publications</a></li>' +
            '<li><a href="projects.html">Projects</a></li>' +
            '<li class="current"><a href="blogs.html">Blogs</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
            '</ul></div></div></div>' +
            '<div class="ss-copyright">' +
            '<span>&copy; Ruida Zeng <span class="current-year"></span></span>' +
            '</div>' +
            '<p class="powered-by">Powered by Keep It Simple from <a href="https://www.styleshout.com/">StyleShout</a></p>' +
            '</div>' +
            '<div class="ss-go-top"><a class="smoothscroll" title="Back to Top" href="#top">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z"/></svg>' +
            '</a></div></footer>';
    }

    function blogFooterSimple() {
        return '<footer class="s-footer">' +
            '<div class="row s-footer__bottom"><div class="column">' +
            '<div class="ss-copyright">' +
            '<span>&copy; Ruida Zeng <span class="current-year"></span></span>' +
            '<span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>' +
            '</div></div></div>' +
            '<div class="ss-go-top"><a class="smoothscroll" title="Back to Top" href="#top">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z"/></svg>' +
            '</a></div></footer>';
    }

    function blogBottomScripts(pathPrefix) {
        var p = pathPrefix || '';
        document.write('<script src="' + p + 'js/jquery-3.2.1.min.js"><\/script>');
        document.write('<script src="' + p + 'js/main.js"><\/script>');
    }

    function blogBottomScriptsWithYear(pathPrefix) {
        var p = pathPrefix || '';
        document.write('<script src="' + p + 'js/jquery-3.2.1.min.js"><\/script>');
        document.write('<script src="' + p + 'js/main.js"><\/script>');
        document.write('<script src="' + p + 'js/year.js"><\/script>');
    }

    // ---------------------------------------------------------------
    // Shared elements
    // ---------------------------------------------------------------

    function skyCanvas() {
        return '<canvas class="sky-canvas" aria-hidden="true"></canvas>';
    }

    // ---------------------------------------------------------------
    // Public API
    // ---------------------------------------------------------------

    return {
        academicHead: academicHead,
        academicNav: academicNav,
        academicFooter: academicFooter,
        blogHead: blogHead,
        blogPreloader: blogPreloader,
        blogHeader: blogHeader,
        blogFooterFull: blogFooterFull,
        blogFooterSimple: blogFooterSimple,
        blogBottomScripts: blogBottomScripts,
        blogBottomScriptsWithYear: blogBottomScriptsWithYear,
        skyCanvas: skyCanvas
    };

})();
