let del=document.querySelector("#category").addEventListener('click',(e)=>{
    console.log(e.target.id);
    if(e.target.tagName=='LI'){ //here it is checking that the target is the li tag or not or else it will not redirect to this list.
        //this allows the user to redirect to the specific page. without randomly going any page.
    window.location.href="/"+e.target.id;//here this syntax is helping to redirect to the specific item's page. it is like <a href="">.
    }  
});

let delInput=document.querySelector("#form-list");
delInput.addEventListener('keyup',(e)=>{
    console.log(e.target);
    if(e.target.dataset.upper!=undefined){
        e.target.value=e.target.value.toUpperCase();
    }
}); //this functionality makes the upper dataset in the event object to convert from lowercase letters to uppercase letters via keyup event.