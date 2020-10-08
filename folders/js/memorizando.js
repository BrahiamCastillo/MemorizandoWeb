$(document).ready(function () {
    nuevo();

    $(".sobre").click(function() {
        var contracha=0;
        var contpuntos=0;
        var contvida=0;
        var img1;
        var img2;
        img1 = $(this).each(function() {
            $(this).find("img").eq(0).attr("src")
       });
       img2 = $(".sobre").each(function() {
        $(this).find("img").eq(0).attr("src")
       });

       if(img1===img2) {
           $(this).remove();
           contracha++;
           contpuntos=contpuntos+2;
           $("#racha").val(contracha);
           $("#puntos").val(contpuntos);

       } else {
        $(this).remove();
        contvida--;
        if(contvida<0) {
            alert("perdiste");
        }
        $("#vida").val(contvida);
       }

    });
       
});

function nuevo() {
    toastr.success("Debes seleccionar dos casillas incógnitas, si das con dos imágenes iguales, sumas puntos, de lo contrario pierdes.");
}