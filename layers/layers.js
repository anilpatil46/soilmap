ol.proj.proj4.register(proj4);
ol.proj.get("").setExtent([3605697.300518, 3461900.355491, 3828784.590433, 3609358.393799]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_AvailableP_1 = new ol.format.GeoJSON();
var features_AvailableP_1 = format_AvailableP_1.readFeatures(json_AvailableP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_AvailableP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvailableP_1.addFeatures(features_AvailableP_1);
var lyr_AvailableP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AvailableP_1, 
                style: style_AvailableP_1,
                interactive: true,
    title: 'Available P<br />\
    <img src="styles/legend/AvailableP_1_0.png" /> Low<br />\
    <img src="styles/legend/AvailableP_1_1.png" /> Medium<br />\
    <img src="styles/legend/AvailableP_1_2.png" /> High<br />'
        });
var format_HingoliDistrict_2 = new ol.format.GeoJSON();
var features_HingoliDistrict_2 = format_HingoliDistrict_2.readFeatures(json_HingoliDistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_HingoliDistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HingoliDistrict_2.addFeatures(features_HingoliDistrict_2);
var lyr_HingoliDistrict_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HingoliDistrict_2, 
                style: style_HingoliDistrict_2,
                interactive: true,
                title: '<img src="styles/legend/HingoliDistrict_2.png" /> Hingoli District'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AvailableP_1.setVisible(true);lyr_HingoliDistrict_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AvailableP_1,lyr_HingoliDistrict_2];
lyr_AvailableP_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_HingoliDistrict_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AvailableP_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_HingoliDistrict_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AvailableP_1.set('fieldLabels', {'fid': 'no label', 'DN': 'header label', });
lyr_HingoliDistrict_2.set('fieldLabels', {'DISTRICT': 'no label', 'STATE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_HingoliDistrict_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});