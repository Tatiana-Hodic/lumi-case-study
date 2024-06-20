import { useState } from "react";
import { Button } from "../ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Session } from "@/models/Session";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { DatePicker } from "../ui/datepicker";

const defaultSession:Session = {
    id: "0",
    clientId: "0",
    productId: "0",
    name: "",
    date: new Date(),
    durationMinutes: 0,
    price: "",
    paymentFinalization: "before",
    discount: "",
    paymentMethod: "card",
    location: "online",
    generateInvoice: false
};

export default function AddSession() {
    const [session, setSession] = useState<Session>(defaultSession);

    return(
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add session</DialogTitle>
          <DialogDescription>
            Add a new session
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex justify-end items-center space-x-4">
            <Label htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={session.name}
              value={session.name}
              className="w-[200px]"
            />
          </div>
          <div className="flex justify-end">
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Product" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="pay-pal">Pay-Pal</SelectItem>
                    <SelectItem value="bank-transfer">Bank-Transfer</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Client" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="inperson">In-Person</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end items-center space-x-4">
            <Label htmlFor="username">
            Duration minutes
            </Label>
            <Input
              id="username"
              defaultValue={session.price}
              value={session.price}
              className="w-[200px]"
            />
          </div>
          <div className="flex justify-end items-center space-x-4">
            <Label htmlFor="name" className="text-right">
              Price
            </Label>
            <Input
              id="name"
              defaultValue={session.clientId}
              value={session.clientId}
              className="w-[200px]"
            />
          </div>
          <div className="flex justify-end items-center space-x-4">
            <Label htmlFor="name" className="text-right">
              Payment finalization
            </Label>
            <Input
              id="name"
              defaultValue={session.clientId}
              value={session.clientId}
              className="w-[200px]"
            />
          </div>
          <div className="flex justify-end">
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Payment finalization" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="before">Before</SelectItem>
                    <SelectItem value="after">After</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end items-center space-x-4">
            <Label htmlFor="name" className="text-right">
              Discount
            </Label>
            <Input
              id="name"
              defaultValue={session.clientId}
              value={session.clientId}
              className="w-[200px]"
            />
          </div>
          <div className="flex justify-end">
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Payment method" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="pay-pal">Pay-Pal</SelectItem>
                    <SelectItem value="bank-transfer">Bank-Transfer</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
          <Select>
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="inperson">In-Person</SelectItem>
            </SelectContent>
          </Select>
          </div>
          <div className="flex justify-end items-center space-x-4 w-[200px]">
            <Label htmlFor="name">
              Date
            </Label>
            <DatePicker 
            id="date"
            defaultValue={session.date}
            value={session.date}
            />
          </div>
          <div className="flex justify-end">
            <Label htmlFor="generateInvoice" className="text-right px-4">
              Generate invoice
            </Label>
            <Checkbox
              id="name"
              defaultValue={session.generateInvoice}
              value={session.generateInvoice}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    );
}