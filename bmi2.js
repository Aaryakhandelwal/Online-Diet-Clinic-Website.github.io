<script>
          function bmiCalculator() {
             var weight = document.bmiForm.weight.value;
             var height = document.bmiForm.height.value;
             if(weight > 0 && height > 0){ 
             var finalBmi = weight/(height/100*height/100);
             finalBmi = finalBmi.toFixed(1);
             if(finalBmi < 18.5){
             document.bmiForm.bmi.value = finalBmi +" " +"(Underweight)";
             document.bmiForm.mean.value ="This BMI is considered underweight. Being underweight may pose certain health risks, including nutrient deficiencies and hormonal changes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.";

              }
            if(finalBmi > 18.5 && finalBmi < 24.9){
              document.bmiForm.bmi.value = finalBmi +" " +"(Healthy)";
              document.bmiForm.mean.value ="This BMI is considered normal. Maintaining a healthy weight may lower the risk of developing certain health conditions, including cardiovascular disease and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks.";
               }
               if(finalBmi > 25.0 && finalBmi < 29.9){
              document.bmiForm.bmi.value = finalBmi +" " +"(Overweight)";
              document.bmiForm.mean.value ="This BMI is considered overweight. Being overweight may increase the risk of certain health conditions, including cardiovascular disease, high blood pressure, and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.";
               }

           if(finalBmi > 30){
            document.bmiForm.bmi.value = finalBmi +" " +"(Obese)";
            document.bmiForm.mean.value ="This BMI is considered obese. People with obesity have increased risk of cardiovascular disease, type 2 diabetes, high blood pressure, and other health conditions. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.";
              }
           }
           else{
            alert("Please Fill in everything correctly");
               }
            }
</script>