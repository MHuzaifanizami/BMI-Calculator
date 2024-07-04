var form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault()

    var height = parseInt(document.getElementById("height").value);
    var wieght = parseInt(document.getElementById("weight").value);
    var result = document.getElementById("result");
    var suggest = document.getElementById("suggest");

    if(height == "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please Enter a valid Height"
    }
    else if(wieght == "" || wieght < 0 || isNaN(wieght)){
        result.innerHTML = "Please Enter a valid weight"

    }else{
        var bmi = (wieght / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `${bmi}`
    }

   if(bmi < 18.6){
    suggest.innerHTML = `Under Weight`
   }else if(bmi < 24.9){
    suggest.innerHTML = `Normal Range`
   }else if(bmi > 24.9){
    suggest.innerHTML = `Over Weight`
   }
})

////////////////////////////////////////////////////////////////