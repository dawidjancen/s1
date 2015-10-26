(function () {
    // Define the constructor
    this.s1 = function () {
        
        // Create global element references
        this.test = null;

        // Define option defaults
        var defaults = {
            direction: "right"
        }

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

    }

    s1.prototype.testIt = function () {
        console.log("testIt");
    }

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;

        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }

        return source;
    }

}());
