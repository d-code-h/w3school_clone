document.querySelector(".show").addEventListener("click", function(){
  let pass = document.getElementById("password").type;
  if(pass === "password"){
    document.getElementById("password").type = "text";
  
  document.getElementById("hide").innerHTML = "Hide";
    document.querySelector(".show i").setAttribute("class", "fa fa-eye-slash");
  
  }else {
    document.getElementById("password").type = "password";
   
 document.querySelector(".show i").setAttribute("class", "fa fa-eye");
    document.getElementById("hide").innerHTML = "Show";
  }
});


document.querySelector("form").addEventListener("submit", function(event){
  if(!this.checkValidity()){
    event.preventDefault();
    
  }
  
}, false);