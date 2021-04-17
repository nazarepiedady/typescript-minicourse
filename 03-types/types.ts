// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hexdecimal, binary)
let total: number
total = 0xff2

// array (type[] / Array<type>)
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string, string]
title = [1, 'foo', 'bar']

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any (anything)
let coisa: any
coisa = [1]

// void (empty)
function logger(): void {
  console.log('foo')
}

// null / undefined
type Bla = string | undefined
