"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Input from "@/components/Input";


export default function Home() {
  return (


    <div className="flex text-xl">
      <h1>H!</h1>
       <div className="">
          <Input />
        </div>
      <Dialog>
        {/* Trigger Button */}
        <DialogTrigger asChild>
          <Button>Click me</Button>
        </DialogTrigger>
       

        {/* Modal Content */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hello 👋</DialogTitle>
            <DialogDescription>This is your modal content.</DialogDescription>
          </DialogHeader>

          <div className="py-4">
            You can put any JSX here, like forms, messages, etc.
          </div>

          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}