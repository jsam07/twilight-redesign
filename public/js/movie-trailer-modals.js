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

function enableScrollingCloseModalAndStopVideo(parentContainer) {
    $('.modal').removeClass('is-active');
    $('.yt-player-iframe').each(function () {
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    });

    const iframe = parentContainer.find('iframe');

    if (iframe) iframe.remove();
}

function openModal(modalContainer) {
    const modal = modalContainer.children().first();
    modal.addClass('is-active');
}

function findIframeAndOpenModal(modalContainer) {
    const figureContainer = modalContainer.find('figure');
    const iframeSRC = figureContainer.attr('data-src');
    figureContainer.empty();
    figureContainer.append(
        `
        <iframe class="has-ratio yt-player-iframe" 
            allowfullscreen
            src=${iframeSRC}
            >
        </iframe>
        `,
    );
    openModal(modalContainer);
}

function openTrailerModal(button) {
    const buttonsContainer = button.parent();
    const modalContainer = buttonsContainer.next();
    findIframeAndOpenModal(modalContainer);
}

$(() => {
    $('button').on('click', function () {
        if ($(this).hasClass('watch-movie-trailer')) openTrailerModal($(this));
    });

    $('#play-button').on('click', () => {
        const modalContainer = $('#hero-movie-modal-container');
        findIframeAndOpenModal(modalContainer);
    });

    $('.modal-close').on('click', () => {
        const parentContainer = $(this).parent();
        enableScrollingCloseModalAndStopVideo(parentContainer);
    });

    $('.modal-background').on('click', () => {
        const parentContainer = $(this).parent();
        enableScrollingCloseModalAndStopVideo(parentContainer);
    });

    $('#directions').on('click', function () {
        const navbarContainer = $(this).parent();
        const modalContainer = navbarContainer.next();
        findIframeAndOpenModal(modalContainer);
    });

    $('#admissions').on('click', () => {
        const modalContainer = $('#admissions-container');
        openModal(modalContainer);
    });
});
