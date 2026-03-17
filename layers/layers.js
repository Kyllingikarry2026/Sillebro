var wms_layers = [];

var format_s_0 = new ol.format.GeoJSON();
var features_s_0 = format_s_0.readFeatures(json_s_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_s_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_s_0.addFeatures(features_s_0);
var lyr_s_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_s_0, 
                style: style_s_0,
                popuplayertitle: 'sø',
                interactive: true,
                title: '<img src="styles/legend/s_0.png" /> sø'
            });
var format_Omrde_speciale_1_1 = new ol.format.GeoJSON();
var features_Omrde_speciale_1_1 = format_Omrde_speciale_1_1.readFeatures(json_Omrde_speciale_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Omrde_speciale_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Omrde_speciale_1_1.addFeatures(features_Omrde_speciale_1_1);
var lyr_Omrde_speciale_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Omrde_speciale_1_1, 
                style: style_Omrde_speciale_1_1,
                popuplayertitle: 'Område_speciale_1',
                interactive: true,
                title: '<img src="styles/legend/Omrde_speciale_1_1.png" /> Område_speciale_1'
            });
var format_oversvmmelse_045_2 = new ol.format.GeoJSON();
var features_oversvmmelse_045_2 = format_oversvmmelse_045_2.readFeatures(json_oversvmmelse_045_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oversvmmelse_045_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oversvmmelse_045_2.addFeatures(features_oversvmmelse_045_2);
var lyr_oversvmmelse_045_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oversvmmelse_045_2, 
                style: style_oversvmmelse_045_2,
                popuplayertitle: 'oversvømmelse_045',
                interactive: true,
                title: '<img src="styles/legend/oversvmmelse_045_2.png" /> oversvømmelse_045'
            });
var format_s_3 = new ol.format.GeoJSON();
var features_s_3 = format_s_3.readFeatures(json_s_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_s_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_s_3.addFeatures(features_s_3);
var lyr_s_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_s_3, 
                style: style_s_3,
                popuplayertitle: 'sø',
                interactive: true,
                title: '<img src="styles/legend/s_3.png" /> sø'
            });
var format_vej_4 = new ol.format.GeoJSON();
var features_vej_4 = format_vej_4.readFeatures(json_vej_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vej_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vej_4.addFeatures(features_vej_4);
var lyr_vej_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vej_4, 
                style: style_vej_4,
                popuplayertitle: 'vej',
                interactive: true,
                title: '<img src="styles/legend/vej_4.png" /> vej'
            });
var format_vej_5 = new ol.format.GeoJSON();
var features_vej_5 = format_vej_5.readFeatures(json_vej_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vej_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vej_5.addFeatures(features_vej_5);
var lyr_vej_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vej_5, 
                style: style_vej_5,
                popuplayertitle: 'vej',
                interactive: true,
                title: '<img src="styles/legend/vej_5.png" /> vej'
            });
var format_O_6 = new ol.format.GeoJSON();
var features_O_6 = format_O_6.readFeatures(json_O_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_O_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_O_6.addFeatures(features_O_6);
var lyr_O_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_O_6, 
                style: style_O_6,
                popuplayertitle: 'O',
                interactive: true,
                title: '<img src="styles/legend/O_6.png" /> O'
            });
var format_sti_7 = new ol.format.GeoJSON();
var features_sti_7 = format_sti_7.readFeatures(json_sti_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sti_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sti_7.addFeatures(features_sti_7);
var lyr_sti_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sti_7, 
                style: style_sti_7,
                popuplayertitle: 'sti',
                interactive: true,
                title: '<img src="styles/legend/sti_7.png" /> sti'
            });
var format_sti_8 = new ol.format.GeoJSON();
var features_sti_8 = format_sti_8.readFeatures(json_sti_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sti_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sti_8.addFeatures(features_sti_8);
var lyr_sti_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sti_8, 
                style: style_sti_8,
                popuplayertitle: 'sti',
                interactive: true,
                title: '<img src="styles/legend/sti_8.png" /> sti'
            });
var format_AA_9 = new ol.format.GeoJSON();
var features_AA_9 = format_AA_9.readFeatures(json_AA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AA_9.addFeatures(features_AA_9);
var lyr_AA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AA_9, 
                style: style_AA_9,
                popuplayertitle: 'AA',
                interactive: true,
                title: '<img src="styles/legend/AA_9.png" /> AA'
            });

lyr_s_0.setVisible(true);lyr_Omrde_speciale_1_1.setVisible(true);lyr_oversvmmelse_045_2.setVisible(true);lyr_s_3.setVisible(true);lyr_vej_4.setVisible(true);lyr_vej_5.setVisible(true);lyr_O_6.setVisible(true);lyr_sti_7.setVisible(true);lyr_sti_8.setVisible(true);lyr_AA_9.setVisible(true);
var layersList = [lyr_s_0,lyr_Omrde_speciale_1_1,lyr_oversvmmelse_045_2,lyr_s_3,lyr_vej_4,lyr_vej_5,lyr_O_6,lyr_sti_7,lyr_sti_8,lyr_AA_9];
lyr_s_0.set('fieldAliases', {'fid': 'fid', 'sø': 'sø', });
lyr_Omrde_speciale_1_1.set('fieldAliases', {'fid': 'fid', 'Polygon': 'Polygon', });
lyr_oversvmmelse_045_2.set('fieldAliases', {'fid': 'fid', 'oversømmelse': 'oversømmelse', });
lyr_s_3.set('fieldAliases', {'fid': 'fid', 'sø': 'sø', });
lyr_vej_4.set('fieldAliases', {'fid': 'fid', 'vej': 'vej', });
lyr_vej_5.set('fieldAliases', {'fid': 'fid', 'vej': 'vej', });
lyr_O_6.set('fieldAliases', {'fid': 'fid', 'o': 'o', });
lyr_sti_7.set('fieldAliases', {'fid': 'fid', 'sti': 'sti', });
lyr_sti_8.set('fieldAliases', {'fid': 'fid', 'sti': 'sti', });
lyr_AA_9.set('fieldAliases', {'fid': 'fid', 'AA': 'AA', });
lyr_s_0.set('fieldImages', {'fid': 'TextEdit', 'sø': 'TextEdit', });
lyr_Omrde_speciale_1_1.set('fieldImages', {'fid': '', 'Polygon': '', });
lyr_oversvmmelse_045_2.set('fieldImages', {'fid': 'TextEdit', 'oversømmelse': 'TextEdit', });
lyr_s_3.set('fieldImages', {'fid': 'TextEdit', 'sø': 'TextEdit', });
lyr_vej_4.set('fieldImages', {'fid': 'TextEdit', 'vej': 'TextEdit', });
lyr_vej_5.set('fieldImages', {'fid': 'TextEdit', 'vej': 'TextEdit', });
lyr_O_6.set('fieldImages', {'fid': 'TextEdit', 'o': 'TextEdit', });
lyr_sti_7.set('fieldImages', {'fid': '', 'sti': '', });
lyr_sti_8.set('fieldImages', {'fid': '', 'sti': '', });
lyr_AA_9.set('fieldImages', {'fid': 'TextEdit', 'AA': 'TextEdit', });
lyr_s_0.set('fieldLabels', {'fid': 'no label', 'sø': 'no label', });
lyr_Omrde_speciale_1_1.set('fieldLabels', {'fid': 'no label', 'Polygon': 'no label', });
lyr_oversvmmelse_045_2.set('fieldLabels', {'fid': 'no label', 'oversømmelse': 'no label', });
lyr_s_3.set('fieldLabels', {'fid': 'no label', 'sø': 'no label', });
lyr_vej_4.set('fieldLabels', {'fid': 'no label', 'vej': 'no label', });
lyr_vej_5.set('fieldLabels', {'fid': 'no label', 'vej': 'no label', });
lyr_O_6.set('fieldLabels', {'fid': 'no label', 'o': 'no label', });
lyr_sti_7.set('fieldLabels', {'fid': 'no label', 'sti': 'no label', });
lyr_sti_8.set('fieldLabels', {'fid': 'no label', 'sti': 'no label', });
lyr_AA_9.set('fieldLabels', {'fid': 'no label', 'AA': 'no label', });
lyr_AA_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});