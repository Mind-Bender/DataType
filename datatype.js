const greet = "Hello Everybody";
console.log(greet);

const project = {
    option1: 'E-store,',
    option2: 'Bank',
    start: function() {
        console.log(this)
        console.log(`Started ${this.option1} ${this.option2}`)},
    stop: function() {
        console.log(this)
        console.log(`Stopped ${this.option1} ${this.option2}`)}
}
project.start()
project.stop()

addItem = () => {
        let item1 = 'shoes';
        let item2 = 'pants';
        let item3 ='shirt';
        console.log(item1);
        console.log(item2);
        console.log(item3);
}


addItem();

//Korey's Changes 

items = ["shoes", "pants", "shirts"];

items.forEach((element) => console.log(element));
