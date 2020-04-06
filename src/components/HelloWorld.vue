<template>
  <div class="hello" ref="chartdiv"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export default {
  name: "HelloWorld",
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
    chart.data = [
      {
        year: "Resilienz",
        income: 23.5,
        expenses: 18.1,
        cs_start: 5,
        cs_end: 30
      },
      {
        year: "2006",
        income: 26.2,
        expenses: 22.8,
        cs_start: 8,
        cs_end: 21
      },
      {
        year: "2007",
        income: 30.1,
        expenses: 23.9,
        cs_start: 12,
        cs_end: 15
      },
      {
        year: "2008",
        income: 29.5,
        expenses: 25.1,
        cs_start: 11,
        cs_end: 23
      },
      {
        year: "2009",
        income: 24.6,
        expenses: 25,
        cs_start: 9,
        cs_end: 28
      }
    ];

    //create category axis for years
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;

    //create value axis for income and expenses
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;
    valueAxis.min = -5;
    valueAxis.max = 30;

    //create columns
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "year";
    series.dataFields.valueX = "cs_end";
    series.dataFields.openValueX = "cs_start";
    series.name = "Clinic Sample";
    series.columns.template.fillOpacity = 0.2;
    series.columns.template.strokeOpacity = 0.5;
    series.tooltipText = "{openValueX.value} - {valueX.value}";

    //create line
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryY = "year";
    lineSeries.dataFields.valueX = "expenses";
    lineSeries.name = "Messung 1";
    lineSeries.strokeWidth = 8;
    lineSeries.tooltipText = "{categoryY}: {valueX.value}";

    //add bullets
    var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    circleBullet.circle.fill = am4core.color("#fff");
    circleBullet.circle.strokeWidth = 16;

    // Ranges
    var range = valueAxis.axisRanges.create();
    range.value = 10;
    range.endValue = 15;
    range.axisFill.fill = am4core.color("red");
    range.axisFill.fillOpacity = 0.2;
    range.grid.strokeOpacity = 0.1;
    range.label.text = "Goal";
    range.label.fill = am4core.color("red");
    range.label.fillOpacity = 0.7;
    range.label.inside = true;
    range.label.rotation = 90;
    range.label.adapter.add("horizontalCenter", function() {
      return "bottom";
    });

    //add chart cursor
    chart.cursor = new am4charts.XYCursor();
    // chart.cursor.behavior = "zoomY";

    //add legend
    chart.legend = new am4charts.Legend();
    this.chart = chart;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 400px;
}
</style>
