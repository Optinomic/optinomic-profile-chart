<template>
  <div id="app" style="margin:30px;">
    <div v-for="app in app_charts" :key="app.name" style="margin-bottom:60px;">
      <h1 class="display-1 font-weight-thin" v-text="app.title"></h1>
      <OptinomicProfileChart
        :options="getChartOptions(app.name)"
        :ranges="getChartRanges(app.name)"
        :scales="getChartScales(app.name)"
        :scores="getChartData(app.name)"
        :clinic_samples="getChartCS(app.name)"
        :clinic_sample_dive="getChartCSDive(app.name)"
      ></OptinomicProfileChart>
    </div>
  </div>
</template>

<script>
import OptinomicProfileChart from "./components/OptinomicProfileChart.vue";

import cs_bscl from "./assets/clinic_samples/optimized/cs_bscl.json";

export default {
  name: "App",
  data: function() {
    return {
      app_charts: [
        {
          title: "BSCL",
          name: "bscl_chart"
        },
        {
          title: "BDI-II",
          name: "bdi_chart"
        }
      ]
    };
  },
  methods: {
    getChartOptions(chart_current) {
      try {
        return this.$store.state[chart_current].options;
      } catch (e) {
        return null;
      }
    },
    getChartRanges(chart_current) {
      try {
        return this.$store.state[chart_current].ranges;
      } catch (e) {
        return null;
      }
    },
    getChartScales(chart_current) {
      try {
        return this.$store.state[chart_current].scales;
      } catch (e) {
        return null;
      }
    },
    getChartData(chart_current) {
      var return_obj = null;
      if (chart_current === "bscl_chart") {
        return_obj = this.$store.state.data_apps.data_object[
          "ch.suedhang.apps.bscl_anq.production"
        ];
      }
      if (chart_current === "bdi_chart") {
        return_obj = this.$store.state.data_apps.data_object[
          "ch.suedhang.apps.bdi.production"
        ];
      }
      return return_obj;
    },
    getChartCS(chart_current) {
      var return_obj = null;
      if (chart_current === "bscl_chart") {
        return_obj = cs_bscl;
      }
      if (chart_current === "bdi_chart") {
        return_obj = null;
      }
      return return_obj;
    },
    getChartCSDive(chart_current) {
      var return_array = null;
      if (chart_current === "bscl_chart") {
        return_array = [4];
      }
      if (chart_current === "bdi_chart") {
        return_array = null;
      }
      return return_array;
    }
  },
  computed: {},
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
