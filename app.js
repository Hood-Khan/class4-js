// Grading system on the basis of marks
// let marks = Number(prompt('Please enter marks: '))

// if(marks>=90 && marks<=100){
//     console.log("A1 Grade")
// }
// else if(marks>=80 && marks<90){
//     console.log('A Grade')
// }
// else if(marks>=70 && marks<80){
//     console.log('B Grade')
// }
// else if(marks>=60 && marks<70){
//     console.log('C Grade')
// }
// else if(marks>=50 && marks<60){
//     console.log('Pass')
// }
// else if(marks>=30 && marks<50){
//     console.log('Pass')
// }
// else if(marks>=0 && marks<30){
//     console.log("fail")
// }
// else{
//     console.log('invalid marks')
// }

// login through if else
// let userName = 'hood'
// let pass = '123'
// let username = prompt('Please enter userName: ')
// if (username == userName){
//     let password = Number(prompt('Please enter password: '))
//     if(pass == password){
//         console.log('Logged In')
//     }
//     else{
//         console.log('Invalid password')
//     }
// }
// else{
//     console.log('Invalid UserName')
// }

let cities = ['peshawar', 'multan', 'karachi', 'quetta', 'lahore', 'islamabad', 'nowshehra', 'abbottabad', 'charsadda', 'mohmand']
// console.log(cities[4])

// console.log(cities[0])

// console.log(cities[5])

// cities.push('gujranwala')

// let popdel = cities.pop() //pop return value so it mean we can add it on other variable

// console.log(popdel)

// for(let i=0; i<cities.length; i++){
//     console.log(cities[i])
// }

let city1 = prompt('enter first city1: ')
let city2 = prompt('enter first city2: ')
let city3 = prompt('enter first city3: ')
let city4 = prompt('enter first city4: ')
let city5 = prompt('enter first city5: ')

let citiess = []

citiess.push(city1)
citiess.push(city2)
citiess.push(city3)
citiess.push(city4)
citiess.push(city5)

console.log(citiess)

let del = prompt('if you want to delete array element')
if (del == 'yes'){
    let popval = citiess.pop()
    console.log('Delete city is: ', popval)
    console.log('remaining cities: ', citiess)
}
else{
    console.log('Total cities: ', citiess)
}

