class Vehicle {
    /* 
    color: string = 'red'; //init a variable

    constructor (color: string) {
        this.color = color;
    } 
    */
   //is equivalent to 
   constructor (public color: string) {
        this.color = color;
   }

    /* 
    the constructor func will be instantly executed right when this class is created.
    the argument of this function is going to be whatever we pass in to the class.
    */

    drive(): void {
        console.log('chugga chugga')
    }

    beep(): void {
        console.log('beep')
    }
}

// class Car extends Vehicle {};
/* extends keyword can also be used to override original class
in this case, Car is child class and Vehicle is parent class
when overrideing an existing method the modifier cannot be changed, ex. if the
original modifier is public, you cannot change it to private or protected */
class Car extends Vehicle {
    constructor (public wheels: number, color: string) {
        // super('red')
        super(color);
    }

    drive(): void {
        console.log('vroom');
    }
}

const car = new Car(4, 'orange');

car.drive();
car.beep();
console.log(car.color, car.wheels)