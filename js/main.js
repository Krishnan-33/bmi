$(document).ready(function () {
    $('input').on('focus', function (e) {
        $(this).closest('.form-group').find('label').css("bottom","40px");
    });
    $('input').on('blur', function (e) {
        if($(this).val()==""){
            $(this).closest('.form-group').find('label').css("bottom","auto");
        }
    });
    $('#bmi').on('click',function(){
        $('.bmi_container').addClass('d-none');
        const height=$('#height').val();
        const weight=$('#weight').val();
        if(height==""){
            alert("Enter height");
            return;
        }
        if(weight==""){
            alert("Enter weight");
            return;
        }
        if(height<=0){
            alert("Invalid height");
            return;
        }
        if(weight<=0){
            alert("Invalid weight");
            return;
        }
        var bmi=weight/(height*height);
        var bmi_mssg="";
        var bmi_class="";
        if (bmi < 18) {
            bmi_mssg = "Under Weight";
            bmi_class="text-warning";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmi_mssg = "Healthy";
            bmi_class="text-success"
        } else if (bmi >= 24.9 && bmi < 30) {
            bmi_mssg = "Over Weight";
            bmi_class="text-danger"
        } else if (bmi >= 30) {
            bmi_mssg = "Suffering from Obesity";
            bmi_class="text-danger"
        }
        $('.bmi_container').removeClass('d-none');
        $('#final_bmi').text(bmi.toFixed(2));
        $('#bmi_mssg').text(bmi_mssg);
        $('#bmi_mssg').addClass(bmi_class);
    
    });
    $('#bmi_reset').on('click',function(){
        $('#height').val("");
        $('#weight').val("");
        $('.bmi_container').addClass('d-none');
    });
});