import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
export function DriverPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="bg-amber-500 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bike invert"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg></button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2 flex flex-row justify-between">
            <Image
              src="/assets/delivery/delivery_item_main.png"
              width={50}
              height={50}
              className="rounded-md object-cover"
              alt="Driver Image"
            />
            <p className="text-2xl font-bold text-muted-foreground">
              DriverName
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input className="shadow-sm" placeholder="Text to driver" />
            <Button variant="outline" className="shadow-sm">Send</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}