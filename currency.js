class Currency{
    //USD VE TRY değerlerini app ten alıcak
constructor(firstCurrency,secondCurrency){
this.firstCurrency  = firstCurrency;
this.secondCurrency = secondCurrency;
this.url ="https://api.exchangeratesapi.io/latest?base";
this.amount = null;//her event oluştuğunda değiştiricez o yüzden null

}

exchange(){
    return new Promise((resolve,reject)=>{
//promisi exchonge de yakalıcaz
        fetch(this.url + this.firstCurrency)//base USD haline gelmesi için
        .then(response => response.json()) //verimizin içinden jon ı alıcaz
        .then(data =>{
       const parity =data["rates"][this.secondCurrency]; //parity glioyor
       const amount2 = Number(this.amount);
      let total = parity*amount2;
       resolve(total);
      
        })//datayı aldık
        .catch(err => reject(err));
      
    });


}
changeAmount(amount){

    this.amount = amount;
}

changeFirstCurrency(newFirstCurrency){
this.firstCurrency = newFirstCurrency;
     
}
changeSecondCurrency(newSecondCurrency){

    this.secondCurrency = newSecondCurrency;
}


}