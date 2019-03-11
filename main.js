(function Polygon () {
    'use strict';

    let poligonPoints = [{x:12, y:13},
                         {x:55, y:23},
                         {x:65, y:43},
                         {x:55, y:53},
                         {x:155, y:253},
                         {x:255, y:153}];
    let intermidiateArr = [];  
    let svgImg = document.getElementById('plgn');

    let i = 0;
    while(i<poligonPoints.length){
        intermidiateArr.push(poligonPoints[i].x); 
        intermidiateArr.push(','); 
        intermidiateArr.push(poligonPoints[i].y);
        intermidiateArr.push(' '); 
        console.log('массив:' + intermidiateArr.join('')); 
        i++;    
    }  
        svgImg.setAttribute('points',intermidiateArr.join(''));
    console.log(svgImg);
    let plgn = document.getElementById('plgn');
}());