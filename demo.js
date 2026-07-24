const student = {
    id: 101 ,
    name:"sajal" ,
    address:{
        city:"Ghaziabad" ,
        state:"UP" ,
        country:"India"
    },
    greet(){
        console.log(`Hello ${this.name} from ${this.address.city}, ${this.address.state}, ${this.address.country}`);
    }

}
student.greet();