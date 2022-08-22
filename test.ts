// Typescript_Basic

// #001. Typescript_Basic_Types

let a = "hello"
a = "bye"
// a = 2

let user : {
    name: string
    age?: number
} = {
    name: 'jiwoo'
}

type User_old = {
    name: string
    age?: number
}

const jiw : User_old = {
    name: 'jiwoo',
    age: 26
}

const yur : User_old = {
    name: 'yuri'
}


// #002. Typescript_Basic_Call Signature
type signatureAdd = (a: number, b: number) => number

const sig_add: signatureAdd = (a,b) => a+b


// Typescript_Basic_Overloading
type overloadingAdd_1 = {
	(a:number, b: number) : number
	(a:number, b: string) : number
}
const over_add_1 : overloadingAdd_1 = (a,b) => {
	if(typeof b === 'string') return a
	return a+b
}

type overloadingAdd_2 = {
	(a:number, b: number) : number,
	(a:number, b: number, c: number) : number
}

const over_add_2 : overloadingAdd_2 = (a,b,c?:number) => {
	if (c) return a+ b+c
    return a+b
}


// #003. Typescript_Basic_Polymorphism
type printOnebyOne = {
	(a : number[]) :void
	(a : string[]) :void
	(a : boolean[]) :void
}

const printall : printOnebyOne = (a) => {
	a.forEach(i => console.log())
}

type printFirstOne_old = {
	<T>(a : T[]) : T
}

type printFirstOne = <T>(a:T[]) => T

const printfirstone : printFirstOne = (a) => a[0]

// Why avoid using "Any"
type Anyprint = (a: any[]) => any

const anyprint : Anyprint = (a) => a[0]

const arr = anyprint([1,2,3])
const str = anyprint(['a', 'b', 'c'])
const bool = anyprint([true, false])

// arr.toUpperCase() -> no Error sign

// Example of using Generic
type User<E> = {
	name: string
	extraInfo : E
}

type JiwooInfo = {
    mobile : string
}

type UserJiwoo = User<JiwooInfo>

const jiwoo : UserJiwoo = {
	name: 'jiwoo',
	extraInfo : {
	mobile: "01012345678"
	}
}

const yuri : User<null> = {
    name: 'yuri',
    extraInfo : null
}