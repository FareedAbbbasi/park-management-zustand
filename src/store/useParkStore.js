import { create } from "zustand";
import db from "../db/db";
const userdata = create((set) => ({
   clientData: [],
 
   loadcliends: async() => {
      const clientData = await db.clientData.toArray();
      set({clientData})
   },

   addclient: async (name, age, clientId, country) => {
    await db.clientData.add({name, age, clientId, country})
    const clientData = await db.clientData.toArray();
    set({clientData})
   },

   removeFriends: async(id) => {
      await db.clientData.delete(id);
      const clientData = await db.clientData.toArray();
      set({clientData})
   }
}))

export default userdata
