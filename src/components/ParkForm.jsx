import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import userdata from '../store/useParkStore';


const ParkForm = () => {
    const { clientData ,loadcliends, addclient, removeFriends} = userdata();
    console.log(clientData)
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const [country, setCountry] = useState("");
    const [ticket, setTicket] = useState("");

    useEffect(() => {
        loadcliends();
    }, [])

    const handleSave = (e) => {
        e.preventDefault();
        if (name && age && id && country && ticket) {
            console.log(name, " ", id, " ", country, " ", ticket)
            addclient(name, parseInt(age), parseInt(id), country, ticket)
            setName("")
            setAge("")
            setId("")
            setCountry("")
            setTicket("")
        }
    }

    return (
        <div>
            <form onSubmit={handleSave} className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Name" />
                    </div>
                    <TextInput type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="age" value="Age" />
                    </div>
                    <TextInput value={age} onChange={(e) => setAge(e.target.value)} type="number" required placeholder='Enter Your Age' />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="id" value="Id" />
                    </div>
                    <TextInput value={id} onChange={(e) => setId(e.target.value)} type="number" placeholder="Enter Your ID" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="country" value="Country" />
                    </div>
                    <TextInput value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Enter Your Country" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="ticket" value="Ticket" />
                    </div>
                    <TextInput value={ticket} onChange={(e) => setTicket(e.target.value)} type="text" placeholder="Enter Your Ticket Price" required />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>

            <div>
                <ul className="w-full h-auto space-y-2">
                    {clientData.map((userData) => (
                        <li key={userData.id} className="border p-2 flex justify-between">
                            Name - {userData.name}  Years- {userData.age} Id- {userData.clientData}  Country- {userData.country}
                            <button
                                onClick={() => removeFriends(userData.id)}
                                className="bg-red-500 text-white px-2 rounded"
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ParkForm