let str = " ";
let buttons = document.querySelectorAll('.button1,.button2,.button3, .button4');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            if(e.target.innerHTML == "*" && e.target.innerHTML == "="){
                str = str * str
                document.querySelector('input').value = str;
            }
            else{
                str = eval(str)
                document.querySelector('input').value = str
            }
            
        }
        else if(e.target.innerHTML == "AC"){
            str = " "
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == "C"){
            str = document.querySelector('input').value.slice(0,-1);
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == "Sq"){
            str = str * str
            document.querySelector('input').value = str;
        }
        else{
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
            console.log("clicked" , e.target);
            // 
        }
    })
})

