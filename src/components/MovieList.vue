

<template>
    <div id="movie-list">
        <movie-item v-for="movie in filteredMovies" v-bind:movie="movie.movie"></movie-item>
    </div>
</template>

<script>
    import genres from '../util/genres';
    import MovieItem from './MovieItem.vue';

    export default {
        // data() {
        //     return {
        //         movies: [
        //             { title: 'Kill Bill', genre: genres.CRIME},
        //             { title: 'Home Alone', genre: genres.COMEDY},
        //             { title: 'Austin Powers', genre: genres.COMEDY}
        //         ]
        //     };
        // },
        props: ['genre', 'time', 'movies'],
        methods: {
            moviePassesGenreFilter(movie) {
                if (!this.genre.length) {
                    return true;
                } else {
                    let movieGenres = movie.movie.Genre.split(", ");
                    let matched = true;
                    this.genre.forEach(genre => {
                        if (movieGenres.indexOf(genre) === -1) {
                            matched = false;
                        };
                    });
                    return matched;
                }
            }
        },
        computed: {
            filteredMovies() {
                return this.movies.filter(this.moviePassesGenreFilter);
            }
        },
        components: {
            MovieItem
        }

    }
</script>