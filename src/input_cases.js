"use strict";
exports.__esModule = true;
exports.inputs = void 0;
var inputs = /** @class */ (function () {
    function inputs() {
        this.test_values2 = {
            '2020-01-01': 6,
            '2020-01-04': 12,
            '2020-01-05': 14,
            '2020-01-06': 2,
            '2020-01-07': 4
        };
        this.test_values1 = {
            '2020-01-01': 4,
            '2020-01-02': 4,
            '2020-01-03': 6,
            '2020-01-04': 8,
            '2020-01-05': 2,
            '2020-01-06': -6,
            '2020-01-07': 2,
            '2020-01-08': -2
        };
        this.test_results1 = {
            "Sunday": 2,
            "Monday": -6,
            "Tuesday": 2,
            "Wednesday": 2,
            "Thursday": 4,
            "Friday": 6,
            "Saturday": 8
        };
        this.test_results2 = {
            "Sunday": 14,
            "Monday": 2,
            "Tuesday": 4,
            "Wednesday": 6,
            "Thursday": 8,
            "Friday": 10,
            "Saturday": 12
        };
    } //end of constructor
    return inputs;
}());
exports.inputs = inputs;
