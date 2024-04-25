"use strict";

import ApexCharts from 'apexcharts'

// module Apexcharts


export function _createChart(selector) {
    return function(apexoptions){
        return {selector, apexoptions};
    }
};


export function render(chartDef) {
    return function() {
        var chart = new ApexCharts(document.querySelector(chartDef.selector), chartDef.apexoptions);
        chart.render();
    };
};

export function _updateOptions(chart) {
    return function(newOptions) {
        return function() {chart.updateOptions(newOptions);};
    };
};

