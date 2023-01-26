
function openAndCloseDD(button, dropdown) {
  document.querySelector(button).addEventListener("click", myFunction);
  
  function myFunction() {
    const phStyles =  document.querySelector(dropdown).style.display
    if (phStyles == "block" ) 
    document.querySelector(dropdown).style.display = null;
   else document.querySelector(dropdown).style.display ="block";
  }

}

openAndCloseDD('.call.dropdown', '.ph')
openAndCloseDD('.sales', '.scupp')
openAndCloseDD('.mt', '.mta')
