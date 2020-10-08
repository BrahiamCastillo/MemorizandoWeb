$(document).ready(function () {
    nuevo();
    var img1;
    var img2;
    var contracha=0;
    var contvidas=0;
    var contpuntos=0;
    
    $(".sobre").click(function() {
        img1 = $(".col-md-2").each(function() {
            $(this).find("img").eq(0).attr("src");
        })
        alert(img1);
        $(this).remove();
        $(".sobre").click(function() {
            img2 = $(this).attr("src");
            if(img1===img2) {
                alert(img2);
                $(this).remove();
                contracha++;
                contpuntos=contpuntos+2;
                $("#racha").html(contracha);
                $("#puntos").html(contpuntos)
                toastr.success("¡Has acertado!.");
            } else {
                $(this).remove();
                contvidas--;
                contpuntos=contpuntos-2;
                $("#puntos").html(contpuntos);
                $("#vida").html(contvidas);
                toastr.error("¡Perdiste!.");
            }
        })
    })
    
});

function nuevo() {
    toastr.success("Debes seleccionar dos casillas incógnitas, si das con dos imágenes iguales, sumas puntos, de lo contrario pierdes.");
}