class Hero {
    constructor (name, age, type)
    this.name = name;
    this.age = age;
    this.type = type;    
}

attack (){
    let attack = "";
    if(this.type === "mage") {
        attack = "magic";
    } else if (this.type === "warrior") {
        attack = "sword";
    } else if(this.type === "ranger") {
        attack = "bow and arrow";
    } else if(this.type === "monk") {
        attack = "martial arts"
    } else {
        attack = "unknown attack"
    }
    console.log(`The ${this.type} attacked by ${attack}`)
}

const hero1 = new Hero("Ashlas", 33, "ranger")
const hero2 = new Hero("Hrotghar", 29, "warrior")
const hero3 = new Hero("Balder", 45, "monk")
const hero4 = new Hero("Vastarie", 36, "mage")
const hero5 = new Hero("Alina", 24)