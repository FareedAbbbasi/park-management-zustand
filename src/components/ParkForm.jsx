import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import userdata from '../store/useParkStore';

const ParkForm = () => {
    // const {} = userdata();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [id, setId] = useState();
    const [country, setCountry] = useState();
    const [ticket, setTicket] = useState();

    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Name" />
                </div>
                <TextInput value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter Your Name" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="age" value="Age" />
                </div>
                <TextInput value={age} type="number" required placeholder='Enter Your Age' />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="id" value="ID" />
                </div>
                <TextInput value={id}  type="number" placeholder="Enter Your ID" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="country" value="Country" />
                </div>
                <TextInput value={country} type="text" placeholder="Enter Your Country" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="ticket" value="Ticket Price" />
                </div>
                <TextInput value={ticket} type="text" placeholder="Enter Your Ticket Price" required />
            </div>
            
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default ParkForm