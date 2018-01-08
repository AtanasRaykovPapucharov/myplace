const js = {
    array: function createArray(length) {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while (i--) arr[length - 1 - i] = createArray.apply(this, args);
        }
        return arr;
    },
    rgbToHex: function (red, green, blue) {

        var redHex = red.toString(16);
        var greenHex = green.toString(16);
        var blueHex = blue.toString(16);

        function pad(hex) {
            return (hex.length === 1 ? "0" + hex : hex);
        }

        return pad(redHex) + pad(greenHex) + pad(blueHex);
    },

    hexToRgb: function (hex) {

        var red = parseInt(hex.substring(0, 2), 16);
        var green = parseInt(hex.substring(2, 4), 16);
        var blue = parseInt(hex.substring(4, 6), 16);

        return [red, green, blue];
    }
}
