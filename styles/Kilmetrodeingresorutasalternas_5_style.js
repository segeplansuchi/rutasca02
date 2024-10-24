var size = 0;
var placement = 'point';
function categories_Kilmetrodeingresorutasalternas_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'KM 113, Cocales':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 50],
                  scale: 0.53,
                  anchor: [26, 26],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/KM 113 cocales.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KM 126, Río Bravo':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 50],
                  scale: 0.53,
                  anchor: [26, 26],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/KM 126 Rio bravo.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KM 136, Nahualate':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 50],
                  scale: 0.53,
                  anchor: [26, 26],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/KM 136 nahualate.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KM 157+400, Montecristo Montellano':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 50],
                  scale: 0.53,
                  anchor: [26, 26],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/KM 157+400 montellano.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Kilmetrodeingresorutasalternas_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("kilometro");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Kilmetrodeingresorutasalternas_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
