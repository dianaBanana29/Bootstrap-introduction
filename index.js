//const root = document.getElementById('root');
//root.innerHTML = `<ul> ${getItems()}</ul>`
/*function range(from, length){
    const res = [];
    for(let i = 0; i< length; i++){
        res.push(i + from)
    }
    return res;
}
function getItems(){
     return range(1, 10).map(i => `<li> <img src= "fb8d38945a7248b1ea3c388cf42a4bac.jpg"> item ${i}</li>`).join('');
}*/
let currentPage = 1;
const paginator = new Paginator(5, 'root', displayPage)
function displayPage(page){
    if(page == 'next'){
        currentPage = currentPage + 5;
        paginator.show(currentPage)
    } else if(
        page == 'prev'
    ){
        currentPage = currentPage - 5;
    }
    else{
        console.log(page);
    }
    
    }
   console.log( String.fromCharCode(65))