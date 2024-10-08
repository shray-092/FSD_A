function validate()
{
    let username=document.getElementById("un").value;

    
    let password=document.getElementById("ps").value;
    let p1=document.getElementById("result")
    if(username.length<10)

    {
        return false;
    }