class vehicle {
          constructor (make,model){
                    this.make=make;
                    this.model=model;
          }
}

class car extends vehicle {
          constructor(make,model,year){
                    super(make,model);
                    this.year=year;
          }
          owners=[ ];
          getCarInfo = () => `${this.make} ${this.model} released in ${this.year}`
          addOwner = owner => this.owners.push(owner);
          removeOwner = owner => {
                    const ind=this.owners.indexOf(owner);
                    if (inx>=0){
                              this.owners.splice(ind,1);
                    }
          }
          getOwnersCount = () => this.owners.length;
          getOwnerNames = () => this.owners.map(item => item.fullName());
          getFullInfo = () =>  `${this.getCarInfo()} . ${this.owners.length} person owns this car . These are - ${this.getOwnerNames()}`
}

class Person {
          constructor(name, surname, age, gender, cars = [ ]){
                    this.name=name;
                    this.surname=surname;
                    this.age=age;
                    this.gender=gender;
                    this.cars=cars;
          }
          fullName = () => `${this.name} ${this.surname}`
          countCars = () => this.cars.length;
          buysCar = car => {
                    console.log(car.getCarInfo());
                    this.cars.push(car);
                    const ind=car.owners.indexOf(this);
                    if (ind<0){
                              car.owners.push(this);
                    }
          }
          sellsCar = car =>{
                    let ind=this.cars.indexOf(car);
                    if (ind>=0){
                              this.cars.splice(ind,1);
                    }

                    ind=car.owners.indexOf(this);
                    if (ind>=0){
                              car.owners.splice(ind,1);
                    }
          }
          getAllCarsInfo = () => `${this.name} owns These cars : ${this.cars.map(item => item.getCarInfo() ) }`
 }

let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new car("BMW", "525", "1999");
let stodevianosto = new car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); 
daniel916.buysCar(stodevianosto);
daniel916.sellsCar(duti_picoti); 
ilona.buysCar(stodevianosto); 
ilona.buysCar(duti_picoti);

console.log({
          daniel: {
            fullName: daniel916.fullName(),
            countCars: daniel916.countCars(),
            getAllCarsInfo: daniel916.getAllCarsInfo(),
          },
          elon: {
            fullName: ilona.fullName(),
            countCars: ilona.countCars(),
            getAllCarsInfo: ilona.getAllCarsInfo(),
          },
          duti_picoti: {
            getOwnersCount: duti_picoti.getOwnersCount(),
            getOwnerNames: duti_picoti.getOwnerNames(),
            getFullInfo: duti_picoti.getFullInfo(),
            getCarInfo: duti_picoti.getCarInfo(),
          },
          stodevianosto: {
            getOwnersCount: stodevianosto.getOwnersCount(),
            getOwnerNames: stodevianosto.getOwnerNames(),
            getFullInfo: stodevianosto.getFullInfo(),
            getCarInfo: stodevianosto.getCarInfo(),
          },
});