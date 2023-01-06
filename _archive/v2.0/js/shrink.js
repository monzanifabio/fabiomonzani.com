window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const brand = document.body.querySelector('#brand');
        const menu = document.body.querySelector('#menu');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY <= 700) {
            navbarCollapsible.classList.remove('navbar-shrink');
            brand.classList.add('filter-invert');
            menu.classList.add('filter-invert');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            brand.classList.remove('filter-invert');
            menu.classList.remove('filter-invert');
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
