function ejecuta() {
    nom = document.f_correo.nom.value;
    pat = document.f_correo.pat.value;
    mat = document.f_correo.mat.value;
    fec = document.f_correo.fec.value;
    if (nom.length == 0) {
        document.f_correo.nom.style.background="red";
        alert("Error, debe proporcionar un nombre");
    }
    if (pat.length == 0) {
        document.f_correo.pat.style.background="red";
        alert("Error, debe proporcionar un apellido paterno");
    }
    if (mat.length == 0) {
        document.f_correo.mat.style.background="red";
        alert("Error, debe proporcionar un apellido materno");
    }
    if (fec.length == 0) {
        document.f_correo.fec.style.background="red";
        alert("Error, debe proporcionar una fecha");
    }
    nom = nom.toLowerCase();
    pat = pat.toLowerCase();
    mat = mat.toLowerCase();
    ano = fec.substr(2,2);
    mes = fec.substr(5,2);
    dia = fec.substr(8,2);
    correo = nom.charAt(0) + pat + mat.charAt(0) + "@empresa.com.mx";
    correo = correo.replaceAll("ñ", "n");
    correo = correo.replaceAll("á", "a");
    correo = correo.replaceAll("é", "e");
    correo = correo.replaceAll("í", "i");
    correo = correo.replaceAll("ó", "o");
    correo = correo.replaceAll("ú", "u");
    correo = correo.replaceAll("ü", "u");
    correo = correo.replaceAll(" ", "_");
    con = dia + mes + ano;
    document.f_correo.s_correo.value = correo;
    document.f_correo.s_contra.value = con;
}
