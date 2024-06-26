console.log("Form Validation");

const Name = document.getElementById("name");
const namel = document.getElementById("namel");
const email = document.getElementById("email");
const emaill = document.getElementById("emaill");
const phone = document.getElementById("phone");
const phonel = document.getElementById("phonel")
let validEmail  = false;
let validUser  = false;
let validPhone  = false;

Name.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([a-zA-Z\s]){3,10}$/;
    let str = Name.value;
    console.log(regex,str);
    if(regex.test(str)){
        validUser = true;
        console.log("It Matched");
        namel.classList.remove('iname');
    }

    else{
        console.log("Not Matched");
        namel.classList.add('iname');
    }
});


email.addEventListener('blur',()=>{
    console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,20}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        validEmail = true;
        console.log("It Matched");
        emaill.classList.remove('iemail');
    }

    else{
        console.log("Not Matched");
        emaill.classList.add('iemail');
    }
})

phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    let regex = /([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        validPhone = true;
        console.log("It Matched");
        phonel.classList.remove('iphone');
    }

    else{
        console.log("Not Matched");
        phonel.classList.add('iphone');
    }
})


let submit = document.getElementById('submit');


submit.addEventListener('click',(e)=>{
    let success = document.getElementById('success');
    let failure  = document.getElementById('failure')
    e.preventDefault();
    
   if(validUser && validEmail && validPhone){
    success.classList.add('show');
   }

   else{
       failure.classList.add('show');
   }
})