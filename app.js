const correctAns = ['B','B','B','B'];  //cause all the questions have the correct ans as B
//the sequence must me maintained as in the html file.


const form= document.querySelector('.quiz-form');  //if user has submited the form?
const result=document.querySelector('.result');

const da= new Date();
console.log(da.getHours());


form.addEventListener('submit', i=>
{

    i.preventDefault(); //default is to refresh page we dont want that.

    let score=0;  //let cause we might update this 

    const userans= [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    //here we get the user ans value. from->q1->value.

    //now compare the ans

    userans.forEach((answer,index)=>   //here ans is actual value and index ijn index of ans
        {
                if(answer === correctAns[index])
                {
                    score +=25;
                }
    
        });

            //scroll top
            //this is inbuilt method
        scrollTo(0,0) //this takes x and y axis as corrdinates

        result.classList.remove('d-none');  //remove d-none class using classList.remove function


        let output=0;

        const timer=setInterval(() =>
        
        {
            result.querySelector('span').textContent = `${output}%`; //textcontent to change that value
            if(output==score)
            {
                clearInterval(timer);
            }
            else
            {
                output++;
            }

        } ,10);  //10 for milliseconds hence timer will fire every 10ms

});

