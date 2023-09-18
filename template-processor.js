"use strict";
function TemplateProcessor(template){
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
    const regex = /\{\{([^{}]+?)\}\}/g;

    // Replace properties in the template using a callback function
    const finalTemplate = this.template.replace(regex, function (match, property) {
        if (dictionary[property] !== null && typeof (dictionary[property]) !== "undefined") {
            return dictionary[property];
        } else {
            return '';
        }
    });

    return finalTemplate;
};
