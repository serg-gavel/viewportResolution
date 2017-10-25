// --------------------  //
//                       //
//  Created 25/10/2017   //
//  by Sergey Gavelyuk   //
//                       //
// Just put script into  //
// your project and have //
//        FUN!!!         //
//                       //
// --------------------  //

$(document).ready(function() {
    viewportResolution(true);
});

function viewportResolution(dimensions) {
    if(dimensions) {
        var body = $('body'),
            innerHeight = window.innerHeight,
            innerWidth = window.innerWidth,
            outerHeight = window.outerHeight,
            outerWidth = window.outerWidth;
        body.prepend('<div id="innersize" style="z-index:9999;position:fixed;bottom:50px;left:0;color:rgba(0,0,0,0.56);background:rgba(28,95,33,0.4);padding:5px;font-size: 13px;">Inner: <br>Height: '+innerHeight+'<br>Width: '+innerWidth+'</div>');
        body.prepend('<div id="outersize" style="z-index:9999;position:fixed;bottom:0;left:0;color:rgba(0,0,0,0.56);background:rgba(95,52,73,0.41);padding:5px; font-size: 13px;">Outer: <br>Height: '+outerHeight+'<br>Width: '+outerWidth+'</div>');
        $(window).resize(function() {
            innerHeight = window.innerHeight;
            innerWidth = window.innerWidth;
            outerHeight = window.outerHeight;
            outerWidth = window.outerWidth;
            $('#innersize').html('Inner: <br>'+ 'Height: '+innerHeight+'<br>Width: '+innerWidth);
            $('#outersize').html('Outer: <br>'+ 'Height: '+outerHeight+'<br>Width: '+outerWidth);
        });
    }
}