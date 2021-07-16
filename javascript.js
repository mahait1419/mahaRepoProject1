function checkuser(username){

    if(username !== ""){
        return true;
    }else {return false;}   
}

function checkpass(pass,passc){
    if(pass.length<8){
        alert ("sorry Password should be at least 8 digits ! ");
        return false;
    }
    if (pass != passc) {
        alert ("confirm password don't match with password ");
        return false;}
    else {return true;}
}

function checktitle(titles){
    if(titles == ""){
        alert("Please fill the titlle ");
        return false;}
    else {        
        return true;}
}

function checkcontent(content){
    if(content !== ""){
        return true;}
    else {        
        alert("Please fill the content ");
        return false;}
}

function checkArticale(titles,content){
    if(checktitle(titles) && checkcontent(content) ){
        alert("Thank you. ");
    }
}

function checklogin(username,pass,passc){
    if( checkuser(username) && checkpass(pass,passc) ){
        alert("Thank you>");
        window.open("admin.html");}
}