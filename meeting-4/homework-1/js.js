const CarFunctional= {
          getCarInfo(){
                    return `${this.make} ${this.model} released in ${this.year}`;
          },
          addOwner(owner){
                    this.owners.push(owner);
          },
          removeOwner(owner){
                    const ind=this.owners.indexOf(owner);
                    if (inx>=0){
                              this.owners.splice(ind,1);
                    }
          },
          getOwnersCount(){
                    return this.owners.length;
          },
          getOwnerNames(){
                    return this.owners.map(item => item.fullName());
          },
          getFullInfo(){
                    return  `${this.getCarInfo()} . ${this.owners.length} person owns this car . These are - ${this.getOwnerNames()}`;
          }
}

const PersonFunctional= {
          fullName(){
                    return  `${this.name} ${this.surname}` ;                                 
          },
          countCars(){
                    return this.cars.length;
          },
          buysCar(car){
                    this.cars.push(car);
                    const ind=car.owners.indexOf(this);
                    if (ind<0){
                              car.owners.push(this);
                    }
          },
          sellsCar(car){
                    let ind=this.cars.indexOf(car);
                    if (ind>=0){
                              this.cars.splice(ind,1);
                    }

                    ind=car.owners.indexOf(this);
                    if (ind>=0){
                              car.owners.splice(ind,1);
                    }  
          },
          getAllCarsInfo(){
                    return  `${this.name} owns These cars : ${this.cars.map(item => item.getCarInfo() ) }`
          }
}

function createCar (make , model , year){
          let Car=Object.create(CarFunctional);
          Car.make=make;
          Car.model=model;
          Car.year=year;
          Car.owners=[ ];
          return Car;
}

function  createPerson (name , surname , age , gender , cars=[ ]){
          let Person=Object.create(PersonFunctional);
          Person.name=name;
          Person.surname=surname;
          Person.age=age;
          Person.gender=gender;
          Person.cars=cars;
          return Person;
 }

 let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
 let ilona = createPerson("Elon", "Musk", 30, "M");
 let duti_picoti = createCar("BMW", "525", "1999");
 let stodevianosto = createCar("Mercedes", "E190", 1991);
 
 daniel916.buysCar(duti_picoti); // adds passed car
 daniel916.buysCar(stodevianosto); // adds passed car
 daniel916.sellsCar(duti_picoti); // removes passed car
 ilona.buysCar(stodevianosto); // adds passed car
 ilona.buysCar(duti_picoti); // adds passed car
 
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