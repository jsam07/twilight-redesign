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

    // Handle Modal Opening & Closing
    const modal = $('.modal');
    const playTrailerBtn = $('#play-button');
    const modalCloseBtn = $('.modal-close');
    const modelBackground = $('.modal-background');

    function enableScrolling() {
        $('html, body').css({
            overflow: 'auto',
            height: 'auto',
        });
    }

    function disableScrolling() {
        $('html, body').css({
            overflow: 'hidden',
            height: '100%',
        });
    }

    function resetTrailer() {
        $('iframe').attr('src', $('iframe').attr('src'));
    }

    function enableScrollingCloseModalAndStopVideo() {
        enableScrolling();
        modal.removeClass('is-active');
        $('.yt-player-iframe').each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });
    }

    // Modal Event Listeners
    playTrailerBtn.on('click', () => {
        resetTrailer();
        disableScrolling();
        modal.addClass('is-active');
    });

    modelBackground.on('click', () => {
        enableScrollingCloseModalAndStopVideo();
    });

    modalCloseBtn.on('click', () => {
        enableScrollingCloseModalAndStopVideo();
    });
});
