class Sweet {
    color: string
    constructor(name:string, startColor:string){
        console.log("Hello" + name)
        this.color = startColor
    }
    getcolor(){
        console.log(this.color)
    }
}
// let world = new Sweet("world", "green")
// let basil = new Sweet("basil", "bright green")
// basil.getcolor()
// world.getcolor()

// console.log(basil.color)

class Basil extends Sweet {
    constructor(name:string, startColor:string){
        super(name, startColor)
    }
    setNewColor(newColor:string){
        this.color = newColor
    }
}

let basil3 = new Basil("basil", "brite green")

basil3.getcolor()
basil3.setNewColor("Red")
basil3.getcolor()