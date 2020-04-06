
# \<optinomic-profile-chart\>

`optinomic-profile-chart` creates awesome Profile-Charts for [Optionmic](https://www.optinomic.com/)-Apps.   
This is basically a rewrite of the polymer element [\<optinomic-chart-profile\>](https://github.com/Optinomic/optinomic-chart-profile) in [Vue](https://vuejs.org/) using [AMcharts](https://www.amcharts.com/).

### Example (Scales)
![optinomic_chart](https://user-images.githubusercontent.com/2470873/78606723-10108b00-785e-11ea-94c2-4296b272e3b9.png)

### Example (Single Scale)
![optinomic_chart_single](https://user-images.githubusercontent.com/2470873/78610034-4ea94400-7864-11ea-87e3-d3cc90177ff5.jpg)


## Porperties - Descripiton

### Options | Example

```JAVASCRIPT
var options = {
    "min": "auto",
    "max": "auto",
    "item_height": 50,
    "item_text_left": 100,
    "item_text_right": 120,
    "color_skin": "default",
    "color_grid": "#9E9E9E",
    "color_clinic_sample": "#673AB7",
    "show_baseline": true,
    "show_scale_text": true,
    "show_score_vertical_line": false,
    "show_score_profile_line": true,
    "show_score_circles": true,
    "show_settings_block": true,
    "show_ranges_overview": true,
    "show_range_text": true,
    "allow_toggle_settings_block": false,
    "range_alpha": 0.1,
    "vertical_grid_every_x": 1,
    "norm_sample": "Z-Werte wurden aufgrund der Normstichprobe nach Ottiger (2020) berechnet (N=3500).",
    "response_title_path": "calculation.info.mz.mz_typ",
    "response_date_path": "calculation.info.filled",
    "dropout": "calculation.info.mz.dropout",
    "dropout_reason": "calculation.info.mz.dropout_reason"
};
```
#### Options | Details

The following Properties are supported:

| Property  |  Description  |
|:---:|---|
| __min__ | "auto" will find the min/max automatically for you. You can also hardcode the min or max by setting it as a number. _Default: "auto"_ |
| __max__ | "auto" will find the min/max automatically for you. You can also hardcode the min or max by setting it as a number. _Default: "auto"_ |
| __item_height__ | The height (px) of every scale from scales. _Default: 50_ |
| __item_text_left__ | Space (px) of left axis  |
| __item_text_right__ | Space (px) of right axis  |
| __color_clinic_sample__ | Color for the Clinic Sample with a fillOpacity = 0.4  |
| __show_score_vertical_line__ | Display vertical score lines in profiles? _Default: false_
| __show_score_circles__ | Display score bullets in profiles? _Default: true_
| __show_range_text__ | *new* Display vertical Range Interpretations? _Default: false_
| __range_alpha__ | fillOpacity of Range Interpretations Colors. _Default: 0.3_
| __response_title_path__ | Path to value: Expects a `String` - How should the measurement be called?  |
| __response_date_path__ | Path to value: Expects a `String` - What ist the date of the measurment?  |
| __dropout__ | *todo* Path to value: Expects a `boolean` - Is this measurement a dropout?  |
| __dropout_reason__ | *todo* Path to value:: Expects a `String` - Reason for the dropout?  |



### Start (Depreciated)

Compared to [\<optinomic-chart-profile\>](https://github.com/Optinomic/optinomic-chart-profile), this option is no longer supported.

```JAVASCRIPT
var start = {
  . . .
};
```




## Development


### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
