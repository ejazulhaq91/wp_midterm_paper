function inputValidation()
{
    name = document.dataForm.name.value;
    password = document.dataForm.password.value;

    if(name === "" || name === null)
    {
        alert("Please enter your name");
        return false;
    }
    

    if(password.length <6)
    {
        alert("Password must be atleast 6 charecter long");
        return false;
    }
}