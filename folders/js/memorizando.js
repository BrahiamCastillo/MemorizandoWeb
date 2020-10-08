$(document).ready(function () {
    toastr.success("Debes seleccionar dos casillas incógnitas, si das con dos imágenes iguales, sumas puntos, de lo contrario pierdes, si llegas a 6 puntos, ganas automáticamente.");
    nuevo();
    var img1=null;
    var img2;
    var contracha=0;
    var contvidas=4;
    var contpuntos=0;
    var miliSegundos=0;
    var tiempoCorriendo=null;
    var imagen1;
    var imagen2;

    $(".sobre").css("opacity", 0.0);

    tiempoCorriendo=setInterval(function() {
        miliSegundos++;
        if(miliSegundos>300) {
            $(".sobre").css("opacity", 1.0);

        }
    })

    
    $(".sobre").click(function() {
        if(img1==null) {
            img1 = $(this).siblings().attr("src");
            imagen1=$(this);
            $(this).hide();
        } else {
            img2 = $(this).siblings().attr("src");
            imagen2=$(this);
            $(this).hide();
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
                $("#puntos").html(contpuntos);
                imagen1.show(2000);
                imagen2.show(2000);
                if(contvidas==0) {
                    toastr.error('¡Has perdido!, presione "Nuevo" para una nueva partida.')
                    $(".sobre").remove();
                } else if(contvidas==6) {
                    toastr.success('¡Has ganado!, presiona "Nuevo" para una nueva partida.');
                    $(".sobre").remove();
                }
                img1=null;
                img2=null;
            }
        }
    })

    $("#nuevo").click(function() {
        location.reload();
    })
    
});


function nuevo() {
    var random;
    var imagenes=[
        "IMG/1.png", "IMG/2.png",
        "IMG/3.png", "IMG/4.png",
        "IMG/5.png", "IMG/6.png",
        "IMG/7.png", "IMG/8.png"
    ]; 
    random=Math.floor(Math.random() * (8 + 1));
    $("#1").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#2").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#3").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#4").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#5").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#6").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#7").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#8").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#9").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#10").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#11").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#12").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#13").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#14").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#15").attr("src", imagenes[random]);
    random=Math.floor(Math.random() * (8 + 1));
    $("#16").attr("src", imagenes[random]);
}