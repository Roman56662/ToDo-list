


k = 0

function get_add(){
    var ul = document.getElementById('list')
        li = document.createElement('li')
        p = document.createElement('p')
        buttonX = document.createElement('button')
        
        check = document.createElement('input')
        check.type = 'checkbox'

        task = document.getElementById('input').value
        p.innerHTML = task
        document.getElementById('input').value = ''

        buttonX.innerHTML = 'X'
    
    ul.appendChild(li)
    li.appendChild(check)
    li.appendChild(p)
    li.appendChild(buttonX)

    li.id = 'li'
    buttonX.id = 'buttonX'

    

}

function get_del(){
    if (document.getElementById('list').getElementsByTagName('li').length > 0) {
        var ul = document.getElementById('list')
        var li = document.getElementById('li')
        var del = ul.removeChild(li);
    } else{
        alert('empty')
    }
        
        

}

// buttonX = document.getElementById('buttonX')
// buttonX.onclick = get_del


var del = document.getElementById('del')
del.onclick = get_del    


var button = document.getElementById('button')
button.onclick = get_add





