orderData={
    'Below 500':60,
    '500-1000':50,
    '1000-1500':60,
    '1500-2000':20,
    'Above 2000':60
};
let totalOrders=0;
let totalOptions=0;
let keys=Object.keys(orderData);
let entry=Object.entries(orderData);
let value=Object.values(orderData);
for(let v of entry){
  
    totalOrders+=v[1];
    totalOptions++;
}
let percent=value.map(function(value,index){
    return (value/totalOrders)*100;
});
let ans=[];
for(let i=1;i<=totalOptions;i++){
    object={
        id:i,
        order:keys[i-1],
        order_percentage:`${percent[i-1]}`
    }
    ans.push(object);
}
console.log(totalOrders);
console.log(totalOptions);
console.log(percent);
console.log(ans);


