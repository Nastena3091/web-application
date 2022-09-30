alert('Завдання 1')
let firstRow = prompt('Введіть перше речення')
let secondRow = prompt('Введіть друге речення')
let a = prompt('Шукана буква', 'a')

function getRow(firstRow, secondRow, a) {
    st = 0
    nd = 0
    for (let i = 0; i < firstRow.length; i++) 
    {
        if (firstRow.charAt(i) == a){
            st++
        }
    }
    for (var i = 0; i < secondRow.length; i++) 
    {
        if (secondRow.charAt(i) == a){
            nd++
        }
    }
    if (st > nd)
    {
        return firstRow
    }
    else
    {
        return secondRow
    }
}
console.log(getRow(firstRow, secondRow, a));

alert('Завдання 2')
let phone = prompt('Введіть телефон')
function formatPhone(phone) {
    if (phone.length == 10){
        phone = '+38' + phone;
    }
    else if (phone.length == 12){
        if(phone.charAt(0) == 3 && phone.charAt(1) == 8){
            phone = '+' + phone;
        }
        else{
            alert('Формат функції неправильний')
            return ""
        }
        
    }
    else if(phone.length = 13 && phone.charAt(0)== '+' && phone.charAt(1) == 3 && phone.charAt(2) == 8){
    }
    else{
        alert('Формат функції неправильний')
        return ""
    }
    phoneform = ''
    for (let i = 0; i < phone.length; i++) {
        if (i == 3){
            phoneform += " ("
        }
        else if(i == 6){
            phoneform += ") "
        }
        else if(i == 9){
            phoneform += "-"
        }
        else if(i == 11){
            phoneform += "-"
        }
        phoneform += phone.charAt(i);
    }
    return phoneform
}
phone = formatPhone(phone);
console.log(phone);