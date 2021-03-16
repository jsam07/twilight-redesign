const movies = [
    {
        title: 'The Croods 2',
        subtitle: 'A New Age',
        tags: [
            'PG-13',
            'Family',
            'Comedy',
            '2020',
            '1h 35m',
        ],
        // eslint-disable-next-line max-len
        trailerURL: 'https://www.youtube.com/embed/XUN5EEDwHcI?autoplay=1&mute=0&enablejsapi=1&modestbranding=1&vq=highres',
        moviePosterURL: '/movies/hero/croods2-6000x4284_compressed.jpg',
    },
    {
        title: 'Wonder Woman 1984',
        subtitle: '',
        tags: [
            'PG-13',
            'Fantasy',
            'Adventure ',
            '2020',
            '2h 31m',
        ],
        // eslint-disable-next-line max-len
        trailerURL: 'https://www.youtube.com/embed/sfM7_JLk-84?autoplay=1&mute=0&enablejsapi=1&modestbranding=1&vq=highres',
        moviePoster: '/movies/hero/ww84-5120x3594.jpg',
    },
];

function setMovieTags(tags) {
    const tagsContainer = $('#tags');
    tagsContainer.empty();

    tags.forEach((tag) => {
        tagsContainer.append(`<span class="tag is-link is-light">${tag}</span>`);
    });
}

function setMovieTitle(title) {
    $('#movie-title').html(title);
}

function setMoviePoster(poster) {
    $('#hero-poster-container').css('background-image', `url(${poster})`);
}

function setMovieSubtitle(subtitle) {
    const movieSubtitle = $('#movie-subtitle');
    if (subtitle) movieSubtitle.html(subtitle);
    else movieSubtitle.remove();
}

function setMovieTrailerURL(trailerURL) {
    $('#yt-player').attr('src', trailerURL);
}

function renderNextMovie() {
    const nextMovie = movies[1];
    setMovieTags(nextMovie.tags);
    setMovieTitle(nextMovie.title);
    setMoviePoster(nextMovie.moviePoster);
    setMovieSubtitle(nextMovie.subtitle);
    setMovieTrailerURL(nextMovie.trailerURL);
}

$(() => {

});
