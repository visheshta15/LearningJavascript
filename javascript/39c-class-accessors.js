// the "get" and "set" keywords are used to create a method which acts as a property.

class Vehicle {
    #_model = ""
    get model(){
        console.log('Getter executed', this.#_model)
        return ""
    }
    set model(v){
         console.log("Setter executed")
         if(v.length < 3){
            this.#_model = "****" + v
         } else {
            this.#_model = "^^^^" + v
         }
    }
}

const obj = new Vehicle()
obj.model = "uv"       // when setting a value , setter got called
obj.model               // when fetching a value, getter got called