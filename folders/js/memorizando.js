$(document).ready(function () {
    nuevo();
    var img1=null;
    var img2;
    var contracha=0;
    var contvidas=0;
    var contpuntos=0;
    
    $(".sobre").click(function() {
        if(img1==null) {
            img1 = $(this).siblings().attr("src");
            alert(img1);
            $(this).remove();
        } else {
            img2 = $(this).siblings().attr("src");
            alert(img2);
            $(this).remove();
            if(img1==img2) {
                contracha++;
                contpuntos=contpuntos+2;
                $("#racha").html(contracha);
                $("#puntos").html(contpuntos)
                toastr.success("¡Has acertado!.");
                img1=null;
                img2=null;
            } else {
                contvidas--;
                contpuntos=contpuntos-2;
                $("#puntos").html(contpuntos);
                $("#vida").html(contvidas);
                toastr.error("¡Perdiste!.");
                img1=null;
                img2=null;
            }
        }
    })
    
});


function nuevo() {
    toastr.success("Debes seleccionar dos casillas incógnitas, si das con dos imágenes iguales, sumas puntos, de lo contrario pierdes.");
}