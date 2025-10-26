const one=document.querySelector('form');
 const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')

one.addEventListener('submit',function(e){
    e.preventDefault()
    console.log( e.target); 
   const height=parseInt( document.querySelector('.Height').value)
      const weight=parseInt( document.querySelector('.weight').value)
       const result = document.querySelector('.result')
      
       
      if(height === '' || height<0 || isNaN(height)){
        result.innerHTML=`Enter An Valid Height ${height}`
      }
       else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML=`Enter An Valid weight ${weight}`
      }
      else{
        bmi= (weight/ ((height*height)/10000)).toFixed(2)
       result.innerHTML = `<span> ${bmi}</span>`
       console.log(" not working");
      
      }
       if(bmi > 25)
      {
        console.log("working");
        span3.style.color = 'red'
      }
      else if(bmi >18.5 && bmi <25)
      {
        span2.style.color = "green"
      }
      else if(bmmi<18.5){
        span1.style.color = "red"
      }
    })