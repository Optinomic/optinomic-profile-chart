<template>
  <v-app id="app" style="margin:60px;">
    <v-content>
      <div
        v-for="app in app_charts"
        :key="app.name"
        style="margin-bottom:60px;"
      >
        <v-divider></v-divider>
        <h1
          class="mt-12 mb-2 display-1 font-weight-thin"
          v-text="app.title"
        ></h1>
        <OptinomicProfileChart
          :options="getChartOptions(app.name)"
          :ranges="getChartRanges(app.name)"
          :scales="getChartScales(app.name)"
          :scores="getChartData(app.name)"
          :clinic_samples="getChartCS(app.name)"
          :clinic_sample_dive="getChartCSDive(app.name)"
        ></OptinomicProfileChart>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import OptinomicProfileChart from "./components/OptinomicProfileChart.vue";
import cs_bscl from "./assets/clinic_samples/optimized/cs_bscl.json";
import cs_isk from "./assets/clinic_samples/optimized/cs_isk.json";
import cs_who from "./assets/clinic_samples/optimized/cs_whoqol.json";

export default {
  name: "App",
  data: function() {
    return {
      currentCS: null,
      app_charts: [
        {
          title: "BSCL",
          name: "bscl_chart"
        },
        {
          title: "BDI-II",
          name: "bdi_chart"
        },
        {
          title: "ISK-K",
          name: "isk_chart",
          id: "ch.suedhang.apps.isk.production"
        },
        {
          title: "WHO-QOL",
          name: "who_chart",
          id: "ch.suedhang.apps.whoqol.production"
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
      if (chart_current === "isk_chart") {
        return_obj = this.$store.state.data_apps.data_object[
          "ch.suedhang.apps.isk.production"
        ];
      }
      if (chart_current === "who_chart") {
        return_obj = this.$store.state.data_apps.data_object[
          "ch.suedhang.apps.whoqol.production"
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
      if (chart_current === "isk_chart") {
        return_obj = cs_isk;
      }
      if (chart_current === "who_chart") {
        return_obj = cs_who;
      }
      this.currentCS = return_obj;
      return return_obj;
    },
    getChartCSDive(chart_current) {
      var return_array = null;
      if (chart_current === "bscl_chart") {
        return_array = [4];
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
  color: #2c3e50;
  margin: 60px;
}
</style>
