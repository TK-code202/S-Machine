$(document).ready(function() {
    $("#formOne").submit(function (event){
        const firstNameInput = $("input#first-name").val().toUpperCase();
        const lastNameInput = $("input#last-name").val().toUpperCase();
        const ageInput = $("input#age").val();
        const genderInput = $("input#gender").val().toUpperCase();
        const hobbyInput = $("input#hobby").val().toUpperCase();
        const colorInput = $("input#color").val().toUpperCase();
        const foodInput = $("input#food").val().toUpperCase();
        const songInput = $("input#song").val().toUpperCase();
        const ambitionInput = $("input#ambition").val().toUpperCase();



        $(".f-name").text(firstNameInput);
        $(".l-name").text(lastNameInput);
        $(".age").text(ageInput);
        $(".gender").text(genderInput);
        $(".hobby").text(hobbyInput);
        $(".color").text(colorInput);
        $(".food").text(foodInput);
        $(".song").text(songInput);
        $(".ambition").text(ambitionInput);



        $("#result").show();
   

   

        event.preventDefault();


    });
});