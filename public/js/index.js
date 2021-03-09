$(document).ready(() => {
    // Check for click events on the navbar burger icon
    $('.navbar-burger').click(() => {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
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
