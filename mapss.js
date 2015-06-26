
function myNavFun(name,lat,lon){
    // If it's an iPhone..
    if( (navigator.platform.indexOf("iPhone") != -1)
        || (navigator.platform.indexOf("iPod") != -1)
        || (navigator.platform.indexOf("iPad") != -1))
         window.open("comgooglemaps://?q=PacePlaza&center=comgooglemaps://?q="+name+"&center="+lat + ","+ lon);
    else
         window.open("http://maps.google.com/maps?daddr="+lat+","+lon+"&ll=");
}
