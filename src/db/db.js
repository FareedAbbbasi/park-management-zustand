import Dexie from "dexie";

let  db = new Dexie("ParkData");
db.version(1).stores({
    clientData: '++id, name, age, clientId, country'
})

export default db