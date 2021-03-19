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
    $('.modal').removeClass('is-active');
    $('.yt-player-iframe').each(function () {
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    });
}

function openModal(modalContainer) {
    const modal = modalContainer.children().first();
    modal.addClass('is-active');
}

function openTrailerModal(button) {
    const buttonsContainer = button.parent();
    const modalContainer = buttonsContainer.next();
    openModal(modalContainer);
}

$(() => {
    $('button').on('click', function () {
        if ($(this).hasClass('watch-movie-trailer')) openTrailerModal($(this));
    });

    $('#play-button').on('click', () => {
        const modalContainer = $('#hero-movie-modal-container');
        openModal(modalContainer);
    });

    $('.modal-close').on('click', () => {
        enableScrollingCloseModalAndStopVideo();
    });

    $('.modal-background').on('click', () => {
        enableScrollingCloseModalAndStopVideo();
    });

    $('#directions').on('click', function () {
        const navbarContainer = $(this).parent();
        const modalContainer = navbarContainer.next();
        openModal(modalContainer);
    });

    $('#admissions').on('click', () => {
        const modalContainer = $('#admissions-container');
        openModal(modalContainer);
    });
});
