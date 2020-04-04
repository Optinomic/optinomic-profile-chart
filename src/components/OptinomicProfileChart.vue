<template>
    <div v-bind:style="{ width: '100%', height: getChartHeight + 'px' }" ref="chartdiv">
    </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


export default {
    name: 'OptinomicProfileChart',
    props: {
        options: {
            type: Object,
            default: null
        },
        scales: {
            type: Array,
            default: null
        },
        scores: {
            type: Object,
            default: null
        },
        ranges: {
            type: Array,
            default: null
        },
        clinic_samples: {
            type: Object,
            default: null
        },
        clinic_sample_dive: {
            type: Object,
            default: null
        }
    },
    data: function() {
        return {
            chart_data: {
                type: Object,
                default: null
            }
        }
    },
    methods: {

    },
    computed: {
        getChartHeight() {
            var height = (this.scales.length + 2) * this.options.item_height;
            // height = height + this.options.item_height;
            return height;
        }
    },
    mounted() {

        console.error('clinic_samples', this.clinic_samples);

        // ---------------------------------
        // Functions
        // ---------------------------------

        var hasValue = function(value) {
            try {
                if ((value === null) || (value === "null") || (value === undefined) || (value === "")) {
                    return false;
                } else {
                    return true;
                };
            } catch (e) {
                return false;
            };
        };

        var buildData = function(scores_orig, scales, options, cs, cs_dive) {
            try {
                var scores = JSON.parse(JSON.stringify(scores_orig));
                var data_object = {
                    data: [],
                    captures: []
                };

                var getCategoryText = function(title, text) {
                    var r = "";
                    if (title !== "") {
                        r = r + title;
                    };
                    if ((title !== "") && (text !== "")) {
                        r = r + ": ";
                    }
                    if (text !== "") {
                        r = r + text;
                    };
                    return "[font-size:11px]" + r + "[/]";
                };

                var flatten = function(obj, name, stem) {
                    var out = {};
                    var newStem = (typeof stem !== 'undefined' && stem !== '') ? stem + '.' + name : name;

                    if (typeof obj !== 'object') {
                        out[newStem] = obj;
                        return out;
                    }

                    for (var p in obj) {
                        var prop = flatten(obj[p], p, newStem);
                        out = merge([out, prop]);
                    }

                    return out;
                };

                var merge = function(objects) {
                    var out = {};

                    for (var i = 0; i < objects.length; i++) {
                        for (var p in objects[i]) {
                            out[p] = objects[i][p];
                        }
                    }

                    return out;
                }

                var getDataDive = function(data, dive) {
                    var return_ob = {}
                    dive.forEach(function(_d) {
                        if (Array.isArray(data[_d])) {
                            getDataDive(data[_d], dive.shift());
                        } else {
                            if ("statistics" in data[_d]) {
                                return_ob = data[_d].statistics;
                            };
                        };

                    }.bind(this));
                    return return_ob;
                }

                scales.forEach(function(s, sid) {
                    var scale = Object.assign({}, s);
                    // Category
                    scale.category_left = getCategoryText(s.left_title, s.left_text);
                    scale.category_right = getCategoryText(s.right_title, s.right_text);

                    // Messungen hinzufügen
                    scores.data.forEach(function(_sr) {
                        var sr = flatten(_sr);
                        var capture_name = "capture_event_" + sr.event_id;
                        if (sid === 0) {
                            var obj = {
                                category: capture_name,
                                name: sr[options.response_title_path],
                                date: sr[options.response_date_path],
                            };
                            data_object.captures.push(obj);
                        };
                        scale[capture_name] = sr[scale.score_path];
                    }.bind(this));

                    // Clinic Samples hinzufügen;
                    if (cs !== null) {

                        // If no Dive is given - always last.
                        if (cs_dive === null) {
                            cs_dive = [];
                            if ('dimensions' in cs) {
                                cs.dimensions.forEach(function(dim) {
                                    cs_dive.push(dim.array.length - 1);
                                }.bind(this));
                            };
                        };

                        // get current statisics object
                        scale.cs_full_data = getDataDive(cs.data, cs_dive);
                        scale.cs_data = scale.cs_full_data[scale.clinic_sample_var];

                        scale.cs_start = scale.cs_data.mean_1sd_min;
                        scale.cs_end = scale.cs_data.mean_1sd_plus;
                    };



                    // publish
                    data_object.data.push(scale);
                }.bind(this));

                // console.warn('buildData :: ', data_object);
                return data_object;
            } catch (e) {
                console.error('Error: buildData', e);
            }
        };

        var drawRanges = function(ranges, options) {
            try {
                // console.warn('drawRanges :: ', ranges, options);

                ranges.forEach(function(r) {
                    var range = valueAxis.axisRanges.create();
                    var range_start = r.range_start;
                    if (range_start === -999) {
                        range_start = options.min;
                    }
                    var range_stop = r.range_stop;
                    if (range_stop === 999) {
                        range_stop = options.max;
                    }

                    range.value = range_start;
                    range.endValue = range_stop;
                    range.axisFill.fill = am4core.color(r.color);
                    range.axisFill.fillOpacity = options.range_alpha || 0.3;
                    //range.grid.stroke = am4core.color(r.color);
                    //range.grid.strokeOpacity = 0.8;

                    var range_line_left = valueAxis.axisRanges.create();
                    range_line_left.value = r.range_start;
                    range_line_left.endValue = r.range_start + 0.01;
                    range_line_left.axisFill.fill = am4core.color(r.color);
                    range_line_left.axisFill.fillOpacity = 0.8;
                    range_line_left.axisFill.strokeOpacity = 0;


                    var range_line_right = valueAxis.axisRanges.create();
                    range_line_right.value = r.range_stop - 0.01;
                    range_line_right.endValue = r.range_stop;
                    range_line_right.axisFill.fill = am4core.color(r.color);
                    range_line_right.axisFill.fillOpacity = 0.8;

                    if (options.show_range_text === true) {
                        range.label.text = "[font-size:12px]" + r.text + "[/]";
                        range.label.fill = am4core.color("black");
                        range.label.fillOpacity = 0.5;

                        range.label.inside = true;
                        range.label.location = 0;
                        range.label.rotation = 90;
                        range.label.marginTop = 5;
                        range.label.adapter.add("horizontalCenter", function() {
                            return "left";
                        });
                        range.label.adapter.add("verticalCenter", function() {
                            return "bottom";
                        });
                    };

                }.bind(this));

            } catch (e) {
                console.error('Error: drawRanges', e);
            }
        };

        var drawAxis = function(options) {
            try {
                // console.warn('drawAxis :: ', options);

                //create LEFT category axis
                var categoryAxis_left = chart.yAxes.push(new am4charts.CategoryAxis());
                var label_left = categoryAxis_left.renderer.labels.template;
                label_left.wrap = true;
                label_left.align = "left";
                //label_left.truncate = true;
                label_left.maxWidth = options.item_text_left;
                categoryAxis_left.dataFields.category = "category_left";
                categoryAxis_left.renderer.grid.template.location = 0;
                categoryAxis_left.renderer.opposite = false;
                categoryAxis_left.renderer.inversed = true;

                //create LEFT category axis
                var categoryAxis_right = chart.yAxes.push(new am4charts.CategoryAxis());
                var label_right = categoryAxis_right.renderer.labels.template;
                label_right.wrap = true;
                label_right.align = "left";
                //label_right.truncate = true;
                label_right.maxWidth = options.item_text_right;
                categoryAxis_right.dataFields.category = "category_right";
                categoryAxis_right.renderer.grid.template.location = 0;
                categoryAxis_right.renderer.opposite = true;
                categoryAxis_right.renderer.inversed = true;
            } catch (e) {
                console.error('Error: drawAxis', e);
            }
        };

        var drawProfiles = function(data_object, options) {
            try {
                // console.warn('drawProfiles :: ', data_object);
                var stroke_width = 6;

                data_object.captures.forEach(function(val) {
                    //create line
                    var lineSeries = chart.series.push(new am4charts.LineSeries());
                    lineSeries.dataFields.categoryY = "category_left";
                    lineSeries.dataFields.valueX = val.category;
                    lineSeries.name = new Date(val.date);
                    lineSeries.strokeWidth = stroke_width;
                    lineSeries.tooltipText = val.name + ": {valueX.value}";


                    //add bullets | show_score_circles
                    var show_score_circles = true;
                    if ((hasValue(options.show_score_circles)) && (options.show_score_circles === false)) {
                        show_score_circles = false;
                    };
                    if (show_score_circles) {
                        var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
                        circleBullet.circle.fill = am4core.color("#fff");
                        circleBullet.circle.strokeWidth = stroke_width;
                    };

                    //add line-bullets | show_score_profile_line
                    var show_score_profile_line = false;
                    if ((hasValue(options.show_score_profile_line)) && (options.show_score_profile_line === true)) {
                        show_score_profile_line = true;
                    };
                    show_score_profile_line = true;
                    if (show_score_profile_line) {
                        var lineBullet = lineSeries.bullets.push(new am4charts.Bullet());
                        var square = lineBullet.createChild(am4core.Rectangle);
                        square.width = stroke_width;
                        square.height = options.item_height;
                        square.horizontalCenter = "middle";
                        square.verticalCenter = "middle";
                    };

                }.bind(this));
            } catch (e) {
                console.error('Error: drawProfiles', e);
            }
        }

        var drawCS = function(cs, options) {
            // console.warn('drawCS :: ', cs);

            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.categoryY = "category_left";
            series.dataFields.valueX = "cs_end";
            series.dataFields.openValueX = "cs_start";
            series.name = "Klinikstichprobe";
            series.tooltipText = "{openValueX.value} - {valueX.value}";

            series.columns.template.fill = "black";
            series.columns.template.stroke = "black";
            series.columns.template.fillOpacity = 0.2;
            series.columns.template.strokeOpacity = 0.2;
            if (hasValue(options.color_clinic_sample)) {
                series.columns.template.fill = options.color_clinic_sample;
                series.columns.template.stroke = options.color_clinic_sample;
                series.columns.template.fillOpacity = 0.4;
                series.columns.template.strokeOpacity = 0.4;
            };
        }

        // Create Chart & add Data
        let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
        chart.dateFormatter.dateFormat = "dd.MM.yyyy";
        chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.title = "Optinomic - Chart";
        chart.exporting.filePrefix = "optinomic_chart";

        // Create value axis for captures
        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.opposite = true;
        valueAxis.min = this.options.min;
        valueAxis.max = this.options.max;

        // Add Data to Chart
        var chart_data = buildData(this.scores, this.scales, this.options, this.clinic_samples, this.clinic_sample_dive);
        chart.data = chart_data.data;
        this.chart_data = chart_data;

        // Zeichne Achsen
        drawAxis(this.options);


        // Klinikstichprobe
        drawCS(this.clinic_samples, this.options);

        // Profiles
        drawProfiles(chart_data, this.options);

        // Ranges
        drawRanges(this.ranges, this.options);


        // add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomX";

        // add legend
        chart.legend = new am4charts.Legend();

        // Set
        this.chart = chart;
    },
    beforeDestroy() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>