'use strict';

function MakeMultiFilter(originalArray) {
    let currentArray= Array.from(originalArray);

    function arrayFilterer(filterCriteria, callback) {
        if (typeof(filterCriteria)=== "function") {
            currentArray = currentArray.filter(filterCriteria);
        }
        else {
            return currentArray;
        }
        if (typeof(callback)==="function") {
            callback.call(originalArray,currentArray);
        }
        return arrayFilterer;
    }
    return arrayFilterer;
}


