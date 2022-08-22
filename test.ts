let a = "hello"
a = "bye"
// a = 2

let user : {
    name: string
    age?: number
} = {
    name: 'jiwoo'
}

type User = {
    name: string
    age?: number
}

const jiwoo : User = {
    name: 'jiwoo',
    age: 26
}

const yuri : User = {
    name: 'yuri'
}

a = jiwoo.name
print(a)