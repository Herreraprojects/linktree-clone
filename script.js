var items = ['item1','item2','item3'];

function listitems(){
    for(var i=0; i< items.length; i++){
        console.log(items[i]);

    }
}

listitems();

document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
});
