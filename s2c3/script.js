// let no_ofitems=prompt("enter the order quantity");
const price_of_1=500;
const discount=10;
const gst=18;


let final_prise=function(a){
    if(a>10){
       let bgst= (a*price_of_1)-discount/100;
       let final=bgst+(gst/100);
       console.log(final);

    }else{
        let bgst= (a*price_of_1)-discount/100;
       let final=bgst+(gst/100)
       console.log(final);
    }
}
final_prise(132)

