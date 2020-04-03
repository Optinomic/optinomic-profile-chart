<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <OptinomicProfileChart :options="chart_options" :ranges="chart_ranges"></OptinomicProfileChart>
    </div>
</template>

<script>
import OptinomicProfileChart from "./components/OptinomicProfileChart.vue";

export default {
    name: "App",
    computed: {
        chart_current() {
            // return 'bscl_chart'
            return 'bdi_chart'
        },
        chart_options() {
            try {
                return this.$store.state[this.chart_current].options;
            } catch (e) {
                return null;
            };
        },
        chart_ranges() {
            try {
                return this.$store.state[this.chart_current].ranges;
            } catch (e) {
                return null;
            };
        },
    },
    components: {
        OptinomicProfileChart
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
