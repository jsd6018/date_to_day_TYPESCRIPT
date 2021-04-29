"use strict";
exports.__esModule = true;
exports.export_for_testing = void 0;
var export_for_testing = /** @class */ (function () {
    function export_for_testing() {
    }
    export_for_testing.prototype.get_result = function (input_values) {
        var result = {};
        var numbers = new Array(7).fill(null);
        var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        for (var key in input_values) {
            var value = input_values[key];
            var d = new Date(key);
            if (numbers[d.getDay()] != null)
                numbers[d.getDay()] += value;
            else
                numbers[d.getDay()] = value;
        }
        for (var i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] == null) {
                /*var l = numbers[i-1];
                var r = null;
                for(let j=i+1;j<numbers.length;j++)
                {
                    if(numbers[j]!=null)
                    {
                        r = numbers[j];
                        break
                    }
                }
                if(r==null)
                {
                    r = numbers[0]
                }
                numbers[i] = Math.floor((l+r)/2);*/
                var l = numbers[i - 1];
                var r = numbers[i + 1];
                if (r != null) {
                    numbers[i] = Math.floor((l + r) / 2);
                }
                else {
                    numbers[i] = (numbers[i - 1] * 2) - numbers[i - 2];
                }
            }
            result[days[i]] = numbers[i];
        }
        if (numbers[numbers.length - 1] == null) {
            numbers[numbers.length - 1] = Math.floor((numbers[numbers.length - 2] + numbers[0]) / 2);
        }
        result[days[numbers.length - 1]] = numbers[numbers.length - 1];
        //console.log(result)
        return result;
    };
    return export_for_testing;
}());
exports.export_for_testing = export_for_testing;
//let r = get_result(input_values)
