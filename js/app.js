//* Write functions here:

const $createNewFamilyMember = () => {
    const $familyMember1 = $(".familyMember1")
    // console.log($familyMember1)
    const $familyMembers = $(".familyMembers")
    $familyMember1.clone(true).removeClass("familyMember1").appendTo($familyMembers)
}

const $showGroceryList = () => {
    $(".groceryList").show()
}





//* Run functions here:

const main = () => {
    const $newFamily = $(".addNewFamily") 
    $newFamily.on("click", $createNewFamilyMember)
    const $groceryList = $(".groceryList")
    $groceryList.hide()
    const $groceryButton = $(".groceryListButton")
    $groceryButton.on("click", $showGroceryList)
}

$(main)

