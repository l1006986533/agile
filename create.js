const createForm = document.getElementById("create-form");
const loginButton = document.getElementById("create-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const Last_name = createForm.Last_name.value;
    const First_name = createForm.First_name.value;
    const enter_Email = createForm.enter_Email.value;

    if (Last_name === "Koneti" && First_name === "Kavya" && enter_Email=="Kvkoneti@gmail.com") 
    {
        alert("created account");
        location.reload();
    } else{
        alert("login failed");
    }
})
