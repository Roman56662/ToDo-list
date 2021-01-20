const list = [];  
const allList = [];
const delList = [];
const checklist = [];
const unChecklist = [];

const button = document.getElementById('button');
const button_show_all = document.getElementById('button_show_all')
const button_show_del = document.getElementById('button_show_del')
const button_show_check = document.getElementById('button_show_check')
const button_show_noCheck = document.getElementById('button_show_no-check')
const ul = document.getElementById('list');
const input = document.getElementById('input') 

button.onclick = () => { 
  const message = input.value; 
  if (message != '') {
    const newItem = { 
      id: new Date().getTime(), 
      message: message, 
      isCheked: false,
      isDel: false
  } 
  allList.push(newItem);
  list.push(newItem); 
  createNewItem(newItem);
  } else{
    alert('Empty');
  }
  input.value = '';
}

const createArg = (arg) => {
      const arrayElements = arg.map(item => `<li id='${item.id}'><input type='checkbox' ></input><p>${item.message}</p><button>X</button></li>`)
      const stringElements = arrayElements.join('')
      ul.innerHTML = stringElements;
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

  ul.appendChild(li)
  li.appendChild(check) 
  li.appendChild(p) 
  li.appendChild(deleteButton)

  check.onclick = () => {
    if (check.checked == true){
        li.className = 'checked';
        item.isCheked = true;
        let itemList = list.find(index => index.id == item.id);
        checklist.push(itemList);
        
    } 
    else {
        li.className = 'none-checked';
        item.isCheked = false;
        let itemList = list.find(index => index.id == item.id);
        unChecklist.push(itemList);
        
    }
}


  deleteButton.onclick = () => {
    document.getElementById(item.id).remove();
    let idList = list.findIndex(index => index.id == item.id);
    let itemList = list.find(index => index.id == item.id);
    console.log(itemList);
    delList.push(itemList);
    list.splice(idList, 1);

    button_show_del.onclick = () =>{ 
      if (button_show_del.checked == true) {
      createArg(delList);
      } else {
        createArg(list);
      }
    }
  }
  
  button_show_all.onclick = () => {
    createArg(allList);
    button_show_del.checked = false;
  }
  
  button_show_check.onclick = () =>{
    createArg(checklist);
    button_show_del.checked = false;
  }
  
  button_show_noCheck.onclick = () =>{
    createArg(unChecklist);
    button_show_del.checked = false;
  }

}


