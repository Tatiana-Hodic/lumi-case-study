import { useState } from 'react'
import './App.css'
import Sessions from './components/sessions/Sessions'
import { Button } from './components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import AddSession from './components/addsession/AddSession'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">List of all sessions</h1>
      <div className="flex flex-col md:flex md:flex-row mt-20 space-y-4 md:space-y-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" >
              Add session
            </Button>
          </DialogTrigger>
          <AddSession/>
        </Dialog>
        <Sessions />
      </div>
    </>
  )
}

export default App
