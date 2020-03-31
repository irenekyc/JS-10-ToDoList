const checklistIcon = (x)=>{
    x.classList.toggle('fas')

}
//DISPLAY LIST
const listItem = document.querySelector('.list-container')

listItem.addEventListener('click', (e)=>{
    if(e.target.parentNode.classList.value === "list-edit"){
        deleteItemId = e.target.parentNode.parentNode.id
        deleteListItem(deleteItemId)
    }
    if(e.target.id === "add-list"){
        addItem()
        
    }
})

const deleteListItem = (id)=>{
    const deleteElement = document.getElementById(id)
    deleteElement.parentNode.removeChild(deleteElement)
}

let i = 0
let customizedList = []
let currentList={}
const addItem = ()=>{
    const input = document.getElementById('item-description')
    currentList = {
        id: `customized-li-${i}`,
        description: input.value
    }
    i++;
    displayCustomizedItem(currentList)  
    input.value=""
    input.autofocus
    
}

//Display Customized List
const displayCustomizedItem = (item)=>{
    let output = `<div class="listItem" id="${item.id}">
    <div class="list-icon">
        <i onclick="checklistIcon(this)" class="far fa-circle"></i>
    </div>
    <div class="list-item">
        <p> ${item.description}</p>
    </div>
    <div class="list-edit">
        <i class="far fa-times-circle"></i>
    </div>
</div>`
    document.querySelector('.customized-list-container').insertAdjacentHTML('afterbegin', output)
}