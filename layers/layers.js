var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ruta2trficopesado_1 = new ol.format.GeoJSON();
var features_Ruta2trficopesado_1 = format_Ruta2trficopesado_1.readFeatures(json_Ruta2trficopesado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2trficopesado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2trficopesado_1.addFeatures(features_Ruta2trficopesado_1);
var lyr_Ruta2trficopesado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2trficopesado_1, 
                style: style_Ruta2trficopesado_1,
                popuplayertitle: "Ruta 2 tráfico pesado",
                interactive: true,
                title: '<img src="styles/legend/Ruta2trficopesado_1.png" /> Ruta 2 tráfico pesado'
            });
var format_Ruta1trficopesado_2 = new ol.format.GeoJSON();
var features_Ruta1trficopesado_2 = format_Ruta1trficopesado_2.readFeatures(json_Ruta1trficopesado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1trficopesado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1trficopesado_2.addFeatures(features_Ruta1trficopesado_2);
var lyr_Ruta1trficopesado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1trficopesado_2, 
                style: style_Ruta1trficopesado_2,
                popuplayertitle: "Ruta 1 tráfico pesado",
                interactive: true,
                title: '<img src="styles/legend/Ruta1trficopesado_2.png" /> Ruta 1 tráfico pesado'
            });
var format_Ruta2trficoliviano_3 = new ol.format.GeoJSON();
var features_Ruta2trficoliviano_3 = format_Ruta2trficoliviano_3.readFeatures(json_Ruta2trficoliviano_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2trficoliviano_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2trficoliviano_3.addFeatures(features_Ruta2trficoliviano_3);
var lyr_Ruta2trficoliviano_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2trficoliviano_3, 
                style: style_Ruta2trficoliviano_3,
                popuplayertitle: "Ruta 2 tráfico liviano",
                interactive: true,
                title: '<img src="styles/legend/Ruta2trficoliviano_3.png" /> Ruta 2 tráfico liviano'
            });
var format_Ruta1trficoliviano_4 = new ol.format.GeoJSON();
var features_Ruta1trficoliviano_4 = format_Ruta1trficoliviano_4.readFeatures(json_Ruta1trficoliviano_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1trficoliviano_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1trficoliviano_4.addFeatures(features_Ruta1trficoliviano_4);
var lyr_Ruta1trficoliviano_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1trficoliviano_4, 
                style: style_Ruta1trficoliviano_4,
                popuplayertitle: "Ruta 1 tráfico liviano",
                interactive: true,
                title: '<img src="styles/legend/Ruta1trficoliviano_4.png" /> Ruta 1 tráfico liviano'
            });
var format_Kilmetrodeingresorutasalternas_5 = new ol.format.GeoJSON();
var features_Kilmetrodeingresorutasalternas_5 = format_Kilmetrodeingresorutasalternas_5.readFeatures(json_Kilmetrodeingresorutasalternas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kilmetrodeingresorutasalternas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kilmetrodeingresorutasalternas_5.addFeatures(features_Kilmetrodeingresorutasalternas_5);
var lyr_Kilmetrodeingresorutasalternas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kilmetrodeingresorutasalternas_5, 
                style: style_Kilmetrodeingresorutasalternas_5,
                popuplayertitle: "Kilómetro de ingreso rutas alternas",
                interactive: true,
    title: 'Kilómetro de ingreso rutas alternas<br />\
    <img src="styles/legend/Kilmetrodeingresorutasalternas_5_0.png" /> KM 113, Cocales<br />\
    <img src="styles/legend/Kilmetrodeingresorutasalternas_5_1.png" /> KM 126, Río Bravo<br />\
    <img src="styles/legend/Kilmetrodeingresorutasalternas_5_2.png" /> KM 136, Nahualate<br />\
    <img src="styles/legend/Kilmetrodeingresorutasalternas_5_3.png" /> KM 157+400, Montecristo Montellano<br />'
        });
var format_Puestosfijosdeseguridad_6 = new ol.format.GeoJSON();
var features_Puestosfijosdeseguridad_6 = format_Puestosfijosdeseguridad_6.readFeatures(json_Puestosfijosdeseguridad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puestosfijosdeseguridad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puestosfijosdeseguridad_6.addFeatures(features_Puestosfijosdeseguridad_6);
var lyr_Puestosfijosdeseguridad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puestosfijosdeseguridad_6, 
                style: style_Puestosfijosdeseguridad_6,
                popuplayertitle: "Puestos fijos de seguridad",
                interactive: true,
                title: '<img src="styles/legend/Puestosfijosdeseguridad_6.png" /> Puestos fijos de seguridad'
            });
var format_Policamotorizada_7 = new ol.format.GeoJSON();
var features_Policamotorizada_7 = format_Policamotorizada_7.readFeatures(json_Policamotorizada_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Policamotorizada_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Policamotorizada_7.addFeatures(features_Policamotorizada_7);
var lyr_Policamotorizada_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Policamotorizada_7, 
                style: style_Policamotorizada_7,
                popuplayertitle: "Policía motorizada",
                interactive: true,
                title: '<img src="styles/legend/Policamotorizada_7.png" /> Policía motorizada'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ruta2trficopesado_1.setVisible(true);lyr_Ruta1trficopesado_2.setVisible(true);lyr_Ruta2trficoliviano_3.setVisible(true);lyr_Ruta1trficoliviano_4.setVisible(true);lyr_Kilmetrodeingresorutasalternas_5.setVisible(true);lyr_Puestosfijosdeseguridad_6.setVisible(true);lyr_Policamotorizada_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ruta2trficopesado_1,lyr_Ruta1trficopesado_2,lyr_Ruta2trficoliviano_3,lyr_Ruta1trficoliviano_4,lyr_Kilmetrodeingresorutasalternas_5,lyr_Puestosfijosdeseguridad_6,lyr_Policamotorizada_7];
lyr_Ruta2trficopesado_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LENGTH': 'LENGTH', 'LAYER': 'LAYER', 'COD3AA101': 'COD3AA101', 'NOMBRE': 'NOMBRE', 'POSICION': 'POSICION', 'CLASIFICAC': 'CLASIFICAC', 'NO_RUTA': 'NO_RUTA', 'NO_RUTA_2': 'NO_RUTA_2', 'CATEGORIA': 'CATEGORIA', 'CATEGORIA2': 'CATEGORIA2', 'TEX_DESCRI': 'TEX_DESCRI', 'REVESTIMIE': 'REVESTIMIE', 'Shape_Leng': 'Shape_Leng', 'DESCRIPCIO': 'DESCRIPCIO', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Ruta1trficopesado_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LENGTH': 'LENGTH', 'LAYER': 'LAYER', 'COD3AA101': 'COD3AA101', 'NOMBRE': 'NOMBRE', 'POSICION': 'POSICION', 'CLASIFICAC': 'CLASIFICAC', 'NO_RUTA': 'NO_RUTA', 'NO_RUTA_2': 'NO_RUTA_2', 'CATEGORIA': 'CATEGORIA', 'CATEGORIA2': 'CATEGORIA2', 'TEX_DESCRI': 'TEX_DESCRI', 'REVESTIMIE': 'REVESTIMIE', 'Shape_Leng': 'Shape_Leng', 'DESCRIPCIO': 'DESCRIPCIO', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Ruta2trficoliviano_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LENGTH': 'LENGTH', 'LAYER': 'LAYER', 'COD3AA101': 'COD3AA101', 'NOMBRE': 'NOMBRE', 'POSICION': 'POSICION', 'CLASIFICAC': 'CLASIFICAC', 'NO_RUTA': 'NO_RUTA', 'NO_RUTA_2': 'NO_RUTA_2', 'CATEGORIA': 'CATEGORIA', 'CATEGORIA2': 'CATEGORIA2', 'TEX_DESCRI': 'TEX_DESCRI', 'REVESTIMIE': 'REVESTIMIE', 'Shape_Leng': 'Shape_Leng', 'DESCRIPCIO': 'DESCRIPCIO', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Ruta1trficoliviano_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LENGTH': 'LENGTH', 'LAYER': 'LAYER', 'COD3AA101': 'COD3AA101', 'NOMBRE': 'NOMBRE', 'POSICION': 'POSICION', 'CLASIFICAC': 'CLASIFICAC', 'NO_RUTA': 'NO_RUTA', 'NO_RUTA_2': 'NO_RUTA_2', 'CATEGORIA': 'CATEGORIA', 'CATEGORIA2': 'CATEGORIA2', 'TEX_DESCRI': 'TEX_DESCRI', 'REVESTIMIE': 'REVESTIMIE', 'Shape_Leng': 'Shape_Leng', 'DESCRIPCIO': 'DESCRIPCIO', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Kilmetrodeingresorutasalternas_5.set('fieldAliases', {'kilometro': 'kilometro', });
lyr_Puestosfijosdeseguridad_6.set('fieldAliases', {'Lugar': 'Lugar', });
lyr_Policamotorizada_7.set('fieldAliases', {'lugar': 'lugar', });
lyr_Ruta2trficopesado_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LENGTH': 'TextEdit', 'LAYER': 'TextEdit', 'COD3AA101': 'TextEdit', 'NOMBRE': 'TextEdit', 'POSICION': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'NO_RUTA': 'TextEdit', 'NO_RUTA_2': 'TextEdit', 'CATEGORIA': 'TextEdit', 'CATEGORIA2': 'TextEdit', 'TEX_DESCRI': 'TextEdit', 'REVESTIMIE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Ruta1trficopesado_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LENGTH': 'TextEdit', 'LAYER': 'TextEdit', 'COD3AA101': 'TextEdit', 'NOMBRE': 'TextEdit', 'POSICION': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'NO_RUTA': 'TextEdit', 'NO_RUTA_2': 'TextEdit', 'CATEGORIA': 'TextEdit', 'CATEGORIA2': 'TextEdit', 'TEX_DESCRI': 'TextEdit', 'REVESTIMIE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Ruta2trficoliviano_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LENGTH': 'TextEdit', 'LAYER': 'TextEdit', 'COD3AA101': 'TextEdit', 'NOMBRE': 'TextEdit', 'POSICION': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'NO_RUTA': 'TextEdit', 'NO_RUTA_2': 'TextEdit', 'CATEGORIA': 'TextEdit', 'CATEGORIA2': 'TextEdit', 'TEX_DESCRI': 'TextEdit', 'REVESTIMIE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Ruta1trficoliviano_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LENGTH': 'TextEdit', 'LAYER': 'TextEdit', 'COD3AA101': 'TextEdit', 'NOMBRE': 'TextEdit', 'POSICION': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'NO_RUTA': 'TextEdit', 'NO_RUTA_2': 'TextEdit', 'CATEGORIA': 'TextEdit', 'CATEGORIA2': 'TextEdit', 'TEX_DESCRI': 'TextEdit', 'REVESTIMIE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Kilmetrodeingresorutasalternas_5.set('fieldImages', {'kilometro': 'TextEdit', });
lyr_Puestosfijosdeseguridad_6.set('fieldImages', {'Lugar': 'TextEdit', });
lyr_Policamotorizada_7.set('fieldImages', {'lugar': 'TextEdit', });
lyr_Ruta2trficopesado_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LENGTH': 'hidden field', 'LAYER': 'hidden field', 'COD3AA101': 'hidden field', 'NOMBRE': 'hidden field', 'POSICION': 'hidden field', 'CLASIFICAC': 'hidden field', 'NO_RUTA': 'hidden field', 'NO_RUTA_2': 'hidden field', 'CATEGORIA': 'hidden field', 'CATEGORIA2': 'hidden field', 'TEX_DESCRI': 'hidden field', 'REVESTIMIE': 'hidden field', 'Shape_Leng': 'hidden field', 'DESCRIPCIO': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_Ruta1trficopesado_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LENGTH': 'hidden field', 'LAYER': 'hidden field', 'COD3AA101': 'hidden field', 'NOMBRE': 'hidden field', 'POSICION': 'hidden field', 'CLASIFICAC': 'hidden field', 'NO_RUTA': 'hidden field', 'NO_RUTA_2': 'hidden field', 'CATEGORIA': 'hidden field', 'CATEGORIA2': 'hidden field', 'TEX_DESCRI': 'hidden field', 'REVESTIMIE': 'hidden field', 'Shape_Leng': 'hidden field', 'DESCRIPCIO': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_Ruta2trficoliviano_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LENGTH': 'hidden field', 'LAYER': 'hidden field', 'COD3AA101': 'hidden field', 'NOMBRE': 'hidden field', 'POSICION': 'hidden field', 'CLASIFICAC': 'hidden field', 'NO_RUTA': 'hidden field', 'NO_RUTA_2': 'hidden field', 'CATEGORIA': 'hidden field', 'CATEGORIA2': 'hidden field', 'TEX_DESCRI': 'hidden field', 'REVESTIMIE': 'hidden field', 'Shape_Leng': 'hidden field', 'DESCRIPCIO': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_Ruta1trficoliviano_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LENGTH': 'hidden field', 'LAYER': 'hidden field', 'COD3AA101': 'hidden field', 'NOMBRE': 'hidden field', 'POSICION': 'hidden field', 'CLASIFICAC': 'hidden field', 'NO_RUTA': 'hidden field', 'NO_RUTA_2': 'hidden field', 'CATEGORIA': 'hidden field', 'CATEGORIA2': 'hidden field', 'TEX_DESCRI': 'hidden field', 'REVESTIMIE': 'hidden field', 'Shape_Leng': 'hidden field', 'DESCRIPCIO': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_Kilmetrodeingresorutasalternas_5.set('fieldLabels', {'kilometro': 'hidden field', });
lyr_Puestosfijosdeseguridad_6.set('fieldLabels', {'Lugar': 'hidden field', });
lyr_Policamotorizada_7.set('fieldLabels', {'lugar': 'hidden field', });
lyr_Policamotorizada_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});