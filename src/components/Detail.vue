<template>
    <div id="detail" v-if="movie">
        <movie-item v-bind:movie="movie.movie">
            <div class="movie-details">
                <p class="movie-genre">{{ movie.movie.Genre }}</p>
                <p class="movie-plot">{{ movie.movie.Plot }}</p>
                <table>
                    <tr><td>Released date:</td><td>{{movie.movie.Released}}</td></tr>
                    <tr><td>Running time:</td><td>{{movie.movie.Runtime}}</td></tr>
                    <tr><td>Director:</td><td>{{movie.movie.Director}}</td></tr>
                    <tr><td>Cast:</td><td>{{movie.movie.Actors}}</td></tr>
                </table>
            </div>

        </movie-item>
        <div class="home">
            <router-link v-bind:to="{name: 'home'}">Back to Results</router-link>
        </div>
    </div>

</template>

<script>
    import MovieItem from "./MovieItem.vue";

    export default {
        components: {MovieItem},
        props: ['movies'],
        computed: {
            movie() {
                let movie = this.movies.find(movie => movie.id === this.$route.params.id);
                return movie ? movie : null;
            }
        },
    }
</script>

<style scoped>

</style>