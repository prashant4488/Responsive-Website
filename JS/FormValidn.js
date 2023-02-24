const show_msg = (id, msg, color) => {
    document.getElementById(id).innerHTML = msg;
    document.getElementById(id).style.color = color;
};

const fname_validate = () => {
    let fname = document.querySelector("#fname").value;

    if (!fname.match(/^[A-Z][a-z]{4,10}$/)) {
        show_msg(
            "fname_msg",
            "Name must contain at least 4 and at most 25 letters,started with uppercase",
            "red"
        );
    } else {
        show_msg("fname_msg", "Valid", "green");
    }
};

const email_validate = () => {
    let email = document.querySelector("#email").value;

    if (!email.match(/(^[a-z]+[0-9]+@gmail.com$)/)) {
        show_msg(
            "email_msg",
            "email should be in, [example(4digits)@gmail.com] in this form",
            "red"
        );
    } else {
        show_msg("email_msg", "Valid Email", "green");
    }
};

const password = () => {
    let pwd = document.querySelector("#pwd").value;

    if (!pwd.match(/^[A-Z]+[a-z]+[0-9]+([@#$%&!.]+)$/)) {
        show_msg(
            "pwd_msg",
            "Password must contain uppercase, lowercase, number, & special character respectively. Password length mustn't not be less 8",
            "red"
        );
    } else {
        show_msg("pwd_msg", "Valid password", "green");
    }
};

const phoneval = () => {
let phone = document.querySelector('#phone').value;
if(!phone.match(/^[9|+9][0-9]{10}$/)){
show_msg('phonemsg',"Phone number must contain numbers only started with 9 or +9. Excluding +977 length must be 10 digits only","red" 
)
}
else{
    show_msg("phonemsg","Valid Phone No.","green")
}
}



