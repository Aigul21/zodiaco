function zood() {
    let dia, mes;
    dia = parseInt(document.formulario.dia.value);
    mes = parseInt(document.formulario.mes.value);
    
    var imagen = document.getElementById("imagenes");
    if((dia>=21&&mes==3)||(dia<=20&&mes==4)) {
        document.getElementById("imagenes").src="../page zodico/signos/aries.png";
    }
    if((dia>=21&&mes==4)||(dia<=20&&mes==5)) {
        document.getElementById("imagenes").src="../page zodico/signos/tauro.png";
    }
    if((dia>=21&&mes==5)||(dia<=20&&mes==6)) {
        document.getElementById("imagenes").src="../page zodico/signos/geminis.png";
    }
    if((dia>=21&&mes==6)||(dia<=20&&mes==7)) {
        document.getElementById("imagenes").src="../page zodico/signos/cancer.png";
    }
    if((dia>=21&&mes==7)||(dia<=20&&mes==8)) {
        document.getElementById("imagenes").src="../page zodico/signos/leo.png";
    }
    if((dia>=21&&mes==8)||(dia<=20&&mes==9)) {
        document.getElementById("imagenes").src="../page zodico/signos/virgo.png";
    }
    if((dia>=21&&mes==9)||(dia<=20&&mes==10)) {
        document.getElementById("imagenes").src="../page zodico/signos/libra.png";
    }
    if((dia>=21&&mes==10)||(dia<=20&&mes==11)) {
        document.getElementById("imagenes").src="../page zodico/signos/escorpio.png";
    }
    if((dia>=21&&mes==11)||(dia<=20&&mes==12)) {
        document.getElementById("imagenes").src="../page zodico/signos/sagitario.png";
    }
    if((dia>=21&&mes==12)||(dia<=20&&mes==1)) {
        document.getElementById("imagenes").src="../page zodico/signos/capricornio.png";
    }
    if((dia>=21&&mes==1)||(dia<=20&&mes==2)) {
        document.getElementById("imagenes").src="../page zodico/signos/acuario.png";
    }
    if((dia>=21&&mes==2)||(dia<=20&&mes==3)) {
        document.getElementById("imagenes").src="../page zodico/signos/pisis.png";
    }
   

}