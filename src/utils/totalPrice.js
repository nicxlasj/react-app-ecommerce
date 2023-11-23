export function totalPrice(elements){
    let total= 0;
    elements.map((val)=> {
        total= total + val.price;
    });
    return total;
}