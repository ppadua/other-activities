$(document).ready(function(){

    $("#user_info").find("#"+ $("#breadcrumb .active_breadcrumb").attr("id")).removeClass("hidden");

    $("body").on("click", ".continue_form", function(){
        var continue_button = $(this);
        var is_next_form = 0;
        var is_new_sub_form = false;
        var is_next_sub_form = 0;

        continue_button.closest(".user_info").find("div:not(.sub_form) ul").each(function(){
            if($(this).find("input[type=radio]:checked").val() == undefined)
                is_next_form++;
            else if($(this).find("input[type=radio]:checked").attr("data-show-hidden")){
                is_new_sub_form = true;
            }
            else if($(this).find("input[type=radio]:checked").attr("data-terminate")){
                $("#content").remove();
                $("#terminate_content").removeClass("hidden");
            }
        });

        if(is_new_sub_form){
            continue_button.closest(".user_info").find("div.sub_form ul").each(function(){
                if($(this).find("input[type=checkbox]").length != 0){
                    if($(this).find("input[type=checkbox]:checked").val() != undefined)
                        is_next_sub_form++;
                }
                else{
                    if($(this).find("input[type=radio]:checked").val() != undefined)
                        is_next_sub_form++;
                }
            });

            if(is_next_sub_form != 0)
                is_new_sub_form = false;
        }

        if(is_next_form == 0){
            if(!is_new_sub_form){
                var next_form = continue_button.closest(".user_info");

                $("#breadcrumb li").removeClass("active_breadcrumb");
                $("#breadcrumb li[id="+next_form.attr("id")+"]").next().addClass("active_breadcrumb");
                next_form.addClass("hidden").next().removeClass("hidden");
                continue_button.siblings(".back_sub_form").addClass("hidden");
            }
            else{
                continue_button.parents(".button_click").siblings("div:not(.sub_form)").addClass("hidden");
                continue_button.siblings(".back_sub_form").removeClass("hidden");
                continue_button.siblings(".back_form").addClass("hidden");
                continue_button.closest(".user_info").find("div:not(.sub_form) ul").each(function(){
                    if($(this).find("input[type=radio]:checked").attr("data-show-hidden") != undefined)
                        continue_button.parents(".button_click").siblings(".user_"+$(this).find("input[type=radio]:checked").attr("data-show-hidden")).removeClass("hidden");
                });
            }
        }

        return false;
    });

    $("body").on("click", ".back_form", function(){
        var back_button = $(this);
        var back_form = back_button.closest(".user_info");

        $("#breadcrumb li").removeClass("active_breadcrumb");
        $("#breadcrumb li[id="+back_form.attr("id")+"]").prev().addClass("active_breadcrumb");

        back_form.prev().find("div:not(.sub_form)").removeClass("hidden");
        back_form.addClass("hidden").prev().removeClass("hidden");
        back_form.prev().find(".sub_form").addClass("hidden");
        back_form.prev().find(".sub_form").find("ul li input:checked").each(function(){
            $(this).prop('checked', false);
        });

        return false;
    })

    $("body").on("click", ".back_sub_form", function(){
        var back_button = $(this);
        var next_form = back_button.closest(".user_info");

        back_button.parents(".button_click").siblings(".sub_form").find("ul li input:checked").each(function(){
            $(this).prop('checked', false);
        });

        back_button.addClass("hidden");
        back_button.parents(".button_click").siblings("div:not(.sub_form)").removeClass("hidden");
        back_button.parents(".button_click").siblings(".sub_form").addClass("hidden");
        back_button.siblings(".back_form").removeClass("hidden")

        return false;
    })

    $("body").on("submit", "#user_info", function(){
        var form = $(this);
        var data_object = form.serializeObject();

        if (data_object.user_mixed_ethinicity != undefined) data_object.user_mixed_ethinicity = data_object.user_mixed_ethinicity.toString() ;
        if (data_object.user_employed != undefined) data_object.user_employed = data_object.user_employed.toString();
        if (data_object.user_income != undefined) data_object.user_income = data_object.user_income.toString();

        var words = $(this).find(".other_info textarea").val().trim().split(' ').length;
        if($(this).find(".other_info textarea").val().trim() != "" && words > 2){
            $(".button_click input[type=submit]").attr("disabled", "disabled");
            $(this).find(".other_info textarea").removeClass("input_error");

            $.ajax({
                url: 'https://script.google.com/a/village88.com/macros/s/AKfycbxCmWZugkCInqF9ijd64MbszvVLH9dsjsqiUZflq9dN9PfKCQ/exec',
                method: "GET",
                dataType: "jsonp",
                data: data_object,
                success : function(data){
                    success_message();
                },
                error : function(data){
                    success_message();
                }
            })
        }
        else{
            $(this).find(".other_info textarea").addClass("input_error");
        }

        return false;
    })

    function success_message(){
        $("#terminate_content").remove();
        $("#content").remove();
        $("#ty_content").removeClass("hidden");
    }
});
