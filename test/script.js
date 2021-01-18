const list = []; 
const delList = [];


const button = document.getElementById('button') 
const button_show_del = document.getElementById('button_show_del')
const button_show_check = document.getElementById('button_show_check')

const input = document.getElementById('input') 
const ul = document.getElementById('list') 

button.onclick = () => { 
    const message = input.value; 
    const newItem = { 
        id: new Date().getTime(), 
        message: message, 
        isCheked: false 
    } 

    list.push(newItem); 
    createNewItem(newItem); 
} 

//SHOW DEL
button_show_del.onclick = () =>{ 
    for (let i = 0; i < delList.length; i++) {
        createNewItem(delList[i]);
    } 
}

//SHOW CHECK


const createNewItem = (item) => { 
    const li = document.createElement('li')
    const check = document.createElement('input')
    check.type = 'checkbox' 
    const p = document.createElement('p') 
    const deleteButton = document.createElement('button') 

    li.id = item.id;
    li.className = 'none-checked';
    check.checked = item.isCheked;
    p.innerHTML = item.message; 
    input.value = ''; 

    deleteButton.innerHTML = 'X' 

    deleteButton.onclick = () => {
        document.getElementById(item.id).remove();
        let idList = list.findIndex(index => index.id == item.id);
        let itemList = list.find(index => index.id == item.id);
        console.log(itemList);
        delList.push(itemList);
        // list.splice(idList, 1);
    }

    // button_show_check.onclick = () =>{ 
    //     for (let i = 0; i < list.length; i++) {
    //         if (list[i].isCheked == true){
    //             li.style.visibility = 'hidden';
    //             console.log(list[i].isCheked);
    //         }
            
    //     }
    // }
    
    

    check.onclick = () => {
        if (check.checked == true){
            li.className = 'checked';
            item.isCheked = true;
        } 
        else {
            li.className = 'none-checked';
            item.isCheked = false;
        }
    }

    ul.appendChild(li)
    li.appendChild(check) 
    li.appendChild(p) 
    li.appendChild(deleteButton) 

}





