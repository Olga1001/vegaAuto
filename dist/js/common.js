$(document).ready(function () {

    var curentValue, totalValue;
    $('.count-plus').click(function(){
        curentValue = $(this).parent().find('.count-input').val();
        totalValue = +curentValue + 1;
        $(this).parent().find('.count-input').val(totalValue).change();
    });
    $('.count-minus').click(function(){
        curentValue = $(this).parent().find('.count-input').val();
        totalValue = +curentValue - 1;
        if (totalValue  < 1) {
            totalValue  = 1
        }
        $(this).parent().find('.count-input').val(totalValue).change();
    });

    let selected,
        selected2;
    $('select').mousedown( function(){
        if( $( this ).val() != selected ) {
            selected = $( this ).val();
            selected2=null;
            $(this).closest(".popup-select").addClass('active');
        } else {
            selected=null;
            $(".popup-select").removeClass('active');
        }
    }).blur(function(){
        if (selected2==selected) {
            selected=null;
            selected2=null;
            $(".popup-select").removeClass('active');
        }
    }).mouseup(function(){
        if( $(this).val() != selected || $(this).val() == selected2 ) {
            selected=null;
            selected2=null;
            $(".popup-select").removeClass('active');
        }
        else {
            selected2=$( this ).val();
            $(this).closest(".popup-select").addClass('active');
        }
    });

    //if height popup bigger window height
    if ($(".popup")) {
        let popup = $(this).find(".form, .popup-container").closest(".popup");
        let container = $(this).find(".form");
        if (container.height() >= $(window).height()) {
            popup.addClass('top');
        }
    }


    $(".close, .popup, .close-window").click(function () {
        $(".popup").removeClass('active');
        $.scrollLock(false);
    });
    $(window).click(function () {
        $(".form-actions-item").removeClass('active');
    });

    $(".form, .popup-container").click(function (e) {
        e.stopPropagation()
    });

    $(".btn-edit, .btn-add").click(function () {
        $(".popup").removeClass('active');
        $(".popup-change-data").addClass('active');
        $.scrollLock(true);
    });
    $(".btn-add").click(function () {
        $(".popup").removeClass('active');
        $(".popup-add-part").addClass('active');
        $.scrollLock(true);
    });
    $(".btn-choose-parts").click(function (e) {
        e.preventDefault()
        $(".popup-choose-parts").addClass('active');
        $.scrollLock(true);
    });
    $(".next-add-offer").click(function () {
        $(".popup-add-offer").addClass('active');
        $.scrollLock(true);
    });
    $(".next-change-part").click(function () {
        $(".popup-change-part").addClass('active');
        $.scrollLock(true);
    });
    $(".form-actions-item").click(function (e) {
        e.stopPropagation()
        $(this).toggleClass('active').closest("tr").siblings().find(".form-actions-item").removeClass('active');
    });
    if (window.matchMedia("(max-width: 575px)").matches) {
        $(".proposed .form-header").click(function () {
            $(this).closest(".form").find(".form-drop").slideToggle(300);
            $(this).find(".form-arrow").toggleClass('active');
        });
    }

    $("#your-files").on("change", function (evt) {
        let files = evt.target.files;
        for (let i = 0, f; f = files[i]; i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
                alert("Только изображения....");
            }
            $(".load .form-input").val(this.files[0]);
        }
        return false;
    });
});
