$(() => {
    // Dynamically Set Hero Section Height
    function setHeroSectionHeight() {
        const viewportHeight = $(window).height();
        const navbarHeight = $('.navbar').height();
        const heroSectionHeight = viewportHeight - navbarHeight;

        $('#hero-poster-container').height(heroSectionHeight);
    }

    $(window).resize(() => {
        setHeroSectionHeight();
    });

    setHeroSectionHeight();

    // Expand Hamburger Menu
    $('.navbar-burger').click(() => {
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });
});
