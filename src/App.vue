<template>
    <div id="app" style="margin:30px;">
        <OptinomicProfileChart :options="chart_options" :ranges="chart_ranges" :scales="chart_scales" :scores="chart_current_data" :clinic_samples="chart_cs"></OptinomicProfileChart>
    </div>
</template>

<script>
import OptinomicProfileChart from "./components/OptinomicProfileChart.vue";

import cs_bscl from './assets/clinic_samples/optimized/cs_bscl.json'

export default {
    name: "App",
    computed: {
        chart_current() {
            return 'bscl_chart'
            // return 'bdi_chart'
        },
        chart_current_data() {
            var return_obj = null;
            if (this.chart_current === 'bscl_chart') {
                return_obj = this.$store.state.data_apps.data_object['ch.suedhang.apps.bscl_anq.production'];
            };

            if (this.chart_current === 'bdi_chart') {
                return_obj = this.$store.state.data_apps.data_object['ch.suedhang.apps.bdi.production'];
            };
            return return_obj;
        },
        chart_cs() {
            var return_obj = null;
            if (this.chart_current === 'bscl_chart') {
                return_obj = cs_bscl;
            };

            if (this.chart_current === 'bdi_chart') {
                return_obj = null;
            };
            return return_obj;
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
        chart_scales() {
            try {
                return this.$store.state[this.chart_current].scales;
            } catch (e) {
                return null;
            };
        }
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
