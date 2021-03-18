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
        trailerURL: 'https://www.youtube.com/embed/XUN5EEDwHcI?autoplay=0&mute=0&enablejsapi=1&modestbranding=1&vq=highres',
        moviePoster: '/movies/hero/croods2-6000x4284_compressed.jpg',
        moviePosterOverlay: 'to bottom, rgba(245, 246, 252, 0.32), rgba(27, 27, 27, 0.73)',
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
        trailerURL: 'https://www.youtube.com/embed/sfM7_JLk-84?autoplay=0&mute=0&enablejsapi=1&modestbranding=1&vq=highres',
        moviePoster: '/movies/hero/ww84-3840x2160.jpg',
        moviePosterOverlay: 'to bottom, rgba(245, 246, 252, 0.32), rgba(27, 27, 27, 0.73)',
    },
    {
        title: 'Raya And The Last Dragon',
        subtitle: '',
        tags: [
            'PG-13',
            'Fantasy',
            '2021',
            '1h 57m',
        ],
        // eslint-disable-next-line max-len
        trailerURL: 'https://www.youtube.com/embed/1VIZ89FEjYI?autoplay=0&mute=0&enablejsapi=1&modestbranding=1&vq=highres',
        moviePoster: '/movies/hero/raya-and-the-last-dragon-3840x2160.jpg',
        moviePosterOverlay: 'to bottom, rgba(245, 246, 252, 0.32), rgba(27, 27, 27, 0.73)',
    },
];

function setMovieTags(tags) {
    const tagsContainer = $('#hero-tags');
    tagsContainer.empty();

    tags.forEach((tag) => {
        tagsContainer.append(`<span class="tag is-link is-light">${tag}</span>`);
    });
}

function setMovieTitle(title) {
    $('#movie-title').html(title);
}

function setMoviePoster(poster, overlay) {
    $('#hero-poster-container').css('background-image', `
        linear-gradient(${overlay}),
        url("${poster}")
    `);
}

function setMovieSubtitle(subtitle) {
    const movieSubtitle = $('#movie-subtitle');
    if (subtitle) {
        if (movieSubtitle) movieSubtitle.html(subtitle);
        else $('#movie-subtitle-container').append(`<span id="movie-subtitle">${subtitle}</span>`);
    } else movieSubtitle.remove();
}

function setMovieTrailerURL(trailerURL) {
    $('#yt-player').attr('src', trailerURL);
}

function findCurrentMovieIndex() {
    const movieTitle = $('#movie-title').text();
    const currentMovieIndex = movies.findIndex((movie) => movie.title === movieTitle);
    return currentMovieIndex;
}

function mod(a, n) {
    return ((a % n) + n) % n;
}

function getNextMovie(currentMovieIndex) {
    const nextMovieIndex = mod((currentMovieIndex + 1), movies.length);
    return movies[nextMovieIndex];
}

function getPrevMovie(currentMovieIndex) {
    const prevMovieIndex = mod((currentMovieIndex - 1), movies.length);
    return movies[prevMovieIndex];
}

function renderMovieDetails(movie) {
    setMovieTags(movie.tags);
    setMovieTitle(movie.title);
    setMoviePoster(movie.moviePoster, movie.moviePosterOverlay);
    setMovieSubtitle(movie.subtitle);
    setMovieTrailerURL(movie.trailerURL);
}

function renderNextMovie() {
    const currentMovieIndex = findCurrentMovieIndex();
    const nextMovie = getNextMovie(currentMovieIndex);
    renderMovieDetails(nextMovie);
}

function renderPrevMovie() {
    const currentMovieIndex = findCurrentMovieIndex();
    const prevMovie = getPrevMovie(currentMovieIndex);
    renderMovieDetails(prevMovie);
}

$(() => {
    $('#prev-movie').on('click', renderPrevMovie);
    $('#next-movie').on('click', renderNextMovie);
});
