// Index Signatures => [index: string]: number 
//readonly only allows to read. Not allowing any values assigning

// interface TransactionObj {
//     readonly [index: string]: number 
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

//todaysTransactions.Pizza = 40

console.log(todaysTransactions['Dave']) // undefined

///////////////////////////////////

interface Student {
    //[key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test)

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) //this is how to access object values without a index signature
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]) //retrieving the type of the object since we do not know it
})

//function
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')

/////////////////////////////////

// interface Incomes {
//     [key: string]: number
//    [key: string | number]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number> // This represents that Stream is a number
type Incomes2 = Record<Streams, number | string> // This represents that Stream is could be a number or string


const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}