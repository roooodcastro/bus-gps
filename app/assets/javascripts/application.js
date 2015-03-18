// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require_tree .

var coesaParams = "(F(3hEPH9PFloTVKHLJId3Z7GHO44DaPXLFxfg46-yDP9ZeW4aUeTqXui5mRiGovd2IrJIdsJ9yPsbrJZHpMVh5K3KiaW6lW2CSxQsSOz0_vTBlIMDgw-jbbhN_VRoa6Qd6tjN2daj3eQ3dDQezB_ImHc5AZoc1)S(wog5omaulb3nq4asv5ng0i1p))";
var coesaApiUrl = "http://coesa.com/coesa.com/RESTAPI/" + coesaParams + "/";

var coesaGPSUrl = coesaApiUrl + "MobileActualState/Get?route=";
var coesaRVDUrl = coesaApiUrl + "RouteVariantDirection/GetActiveByRoute?id=";
var coesaBusStopUrl = coesaApiUrl + "BusStopRoute/GetByRVD?id=";
var coesaRoutesUrl = coesaApiUrl + "Route/List/All";

if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;

function autorun() {
    // Run this on DOM load
    initializeMap();
    getApiData(coesaRoutesUrl, "", "logResposta");

    // Para pegar tudo da Coesa:
    // Pegar RouteVariantDirection/GetActiveByRoute?route=423
    // Usar os IDs para pegar as paradas com BusStopRoute/GetByRVD?id=rvd_id
    // Pegar todas as rotas que contém o número pesquisado com Route/List/All (ex: 423 = 423, 2423 e 423A)
    // Pegar a posição dos ônibus para cada rota encontrada acima e atualizar os marcadores
    // Estrutura dos marcadores: hash, com key = placa do ônibus, val = marker
    // Estrutura do hash de ônibus: key = placa do ônibus, val = ônibus
}

function initializeMap() {
    // Initialize Google Maps
    var mapOptions = { center: { lat: -22.9, lng: -43.25}, zoom: 12 };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function getApiData(apiUrl, param, callback) {
    finalUrl = (param == "") ? apiUrl + param + "&callback=" + callback : apiUrl + "?callback=" + callback;
    $.ajax({
        url: finalUrl,
        crossDomain: true
    });
}

function logResposta(data) {
    console.log(data);
}