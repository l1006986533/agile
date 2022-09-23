const createForm = document.getElementById("create_form");
const loginButton = document.getElementById("create_form_submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    
    const username_len=createForm.username_field.value.length
    const password=createForm.password_field.value
    const confirm_password=createForm.confirm_password_field.value
    console.log(username_len);

    if(password!=confirm_password)
    {
        alert("Password doesn't match!");
    }
    else if (username_len>16) 
    {
        alert("The username cannot be longer than 16 letters.");
    } else{
        alert("Created account successfully");
        window.location.href="login.html"
    }
})
