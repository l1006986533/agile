const createForm = document.getElementById("create_form");
const loginButton = document.getElementById("create_form_submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    
    const username_len=createForm.username_field.value.length
    
    console.log(username_len);

    if (username_len<=16 ) 
    {
        alert("created account");
        location.reload();
    } else{
        alert("login failed");
    }
})
