var groceries = ['eggs','milk','cheese'];

function listgroceries(){
    for(var i=0; i< groceries.length; i++){
        console.log(groceries[i]);

    }
}

listgroceries();

document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
});