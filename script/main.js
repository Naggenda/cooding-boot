// my script

function myfunction(v) {
    var second=document.getElementById('second');
    if(second.style.display=='flex')
    {
         var buttons =document.getElementById('buttons');
         buttons.style.display = 'block';
        
        second.style.display = 'none';
    
        var first =document.getElementById('first');
        first.style.display = 'flex';
        
        
        
    }
    else{
        var buttons=document.getElementById('buttons');
        buttons.style.display = 'block';

        second.style.display = 'flex';
    
         var first=document.getElementById('first');
         first.style.display = 'none';
    }
    }