const notepad = document.getElementById('pad');
const save = document.getElementById('save');
const reset = document.getElementById('reset');

const savenote = localStorage.getItem('notes');
if(savenote)
{
    pad.value=savenote;
}

save.addEventListener('click' , function() 
{
    const note = pad.value;
    localStorage.setItem('notes' , note);
});

reset.addEventListener('click' , function(){
    pad.value='';
    localStorage.removeItem('notes');
});