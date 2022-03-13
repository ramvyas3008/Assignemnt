function changeDiv(div_id) {
    var main_div = document.getElementById('main_div');
    var contact_section = document.getElementById('contact_section');

    if (div_id == "01") {
        main_div.style.display = "initial";
        contact_section.style.display = "none";
    } else {
        main_div.style.display = "none";
        contact_section.style.display = "initial";
    }

}



