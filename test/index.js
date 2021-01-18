const list = []; 
const delList = [];


const button = document.getElementById('button') 
const button_show_all = document.getElementById('button_show_all')
const button_show_del = document.getElementById('button_show_del')
const button_show_check = document.getElementById('button_show_check')
const button_show_noCheck = document.getElementById('button_show_no-check')

const input = document.getElementById('input') 
const ul = document.getElementById('list') 

button.onclick = () => { 
    const message = input.value; 
    const newItem = { 
        id: new Date().getTime(), 
        message: message, 
        isCheked: false,
        isDel: false
    } 

    list.push(newItem); 
    createNewItem(newItem); 
} 

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
        li.className = 'еуые';
        item.isDel = true;
        // let delList = list.filter(item => item.isDel == true);
        // console.log(delList);
        
        button_show_del.onclick = () =>{ 
          // if (button_show_del.checked == true) {
          //   let copyList = list.filter(item => item.isDel == false);
          //   for (let i = 0; i < copyList.length; i++) {
          //     let id = copyList[i].id;
          //     document.getElementById(id).remove();
          //   }
          //   for (let i = 0; i < delList.length; i++) {
          //     createNewItem(delList[i]);
          //   } 
          //   button_show_del.checked = true;
          // } else{ 
          //   let copyList = list.filter(item => item.isDel == false);
          //   for (let i = 0; i < copyList.length; i++) {
          //     createNewItem(copyList[i])
          //   }
          //   for (let i = 0; i < delList.length; i++) {
          //     let id = delList[i].id;
          //     document.getElementById(id).remove();
          //   } 
          //   button_show_del.checked = false;
          // }
          document.getElementById( "list" ). innerHTML = "";
          if (button_show_del.checked == true) {
            for (let i = 0; i < list.length; i++) {
              if (list[i].isDel == true ) {
                createNewItem(list[i]);
              }
            }
          } else {
            document.getElementById( "list" ). innerHTML = "";
            for (let i = 0; i < list.length; i++) {
              if (list[i].isDel == false ) {
                createNewItem(list[i]);
              }
            }
          }
          
          
        }
    }

    button_show_all.onclick = () => {
      document.getElementById( "list" ). innerHTML = "";
      for (let i = 0; i < list.length; i++) {
          createNewItem(list[i]);
          button_show_del.checked = false;
    }
    }
    
    button_show_check.onclick = () =>{
      document.getElementById( "list" ). innerHTML = "";
      for (let i = 0; i < list.length; i++) {
          if (list[i].isCheked == true)
          createNewItem(list[i]);
          button_show_del.checked = false;
    }
    }
    
    button_show_noCheck.onclick = () =>{
      document.getElementById( "list" ). innerHTML = "";
      for (let i = 0; i < list.length; i++) {
          if (list[i].isCheked == false)
          createNewItem(list[i]);
          button_show_del.checked = false;
    }
    }
    
    

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









