$(document).ready(function () {
    nuevo();
    var img1=null;
    var img2;
    var contracha=0;
    var contvidas=6;
    var contpuntos=0;
    var imagenes=[
        "IMG\1.png", "IMG\2.png",
        "IMG\3.png", "IMG\4.png",
        "IMG\5.png", "IMG\6.png",
        "IMG\7.png", "IMG\8.png"
    ];
    
    $(".sobre").click(function() {
        if(img1==null) {
            img1 = $(this).siblings().attr("src");
            $(this).remove();
        } else {
            img2 = $(this).siblings().attr("src");
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
                if(contvidas<0) {
                    contvidas=0;
                }
                contpuntos=contpuntos-2;
                if(contpuntos<0) {
                    contpuntos=0;
                }
                contracha--;
                if(contracha<0) {
                    contracha=0;
                }
                $("#puntos").html(contpuntos);
                $("#vida").html(contvidas);
                $("#racha").html(contracha);
                toastr.warning("¡Has fallado, esfuérzate mas!.");
                if(contvidas==0) {
                    toastr.error('¡Has perdido!, presione "Nuevo" para una nueva partida.')
                    $(".sobre").remove();
                }
                img1=null;
                img2=null;
            }
        }
    })
    
});


function nuevo() {
    toastr.success("Debes seleccionar dos casillas incógnitas, si das con dos imágenes iguales, sumas puntos, de lo contrario pierdes.");
}