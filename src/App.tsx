import './App.css'
// import { Avatar } from './components/ui/avatar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import image from './assets/image-removebg-preview.png'
import jsimg from './assets/js.png'
import tsimg from './assets/ts.png'
import blenderimg from './assets/blender.png'
import logo from './assets/logo.jpg'
import bgimage from './assets/heropage_illuraration-removebg-preview.png'
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
} from "@/components/ui/card"



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Menubar,

  MenubarContent,
  MenubarItem,
  MenubarMenu,

  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"



import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Textarea } from "@/components/ui/textarea"



function App() {
  // const [date, setDate] = React.useState<Date | undefined>(new Date())


  return (
    <>
      <section className='bg-zinc-100 h-screen '>
        <section className='flex  justify-between align-middle items-center p-10'>
          <div className="logo flex">
            <Avatar>
              <AvatarImage src={logo}/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">Dinesh</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src={logo}/>
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Web Developer</h4>
                    <p className="text-sm">
                      Code is like humor, when you have to explain it, it's bad.
                    </p>
                    
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <Menubar className='bg-zinc-100'>
            <MenubarMenu>
              <MenubarTrigger>Skills</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  HTML&CSS<MenubarShortcut>  <img width={60} src={image} alt="" /> </MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  JavaScript <MenubarShortcut className='relative right-2'> <img width={40} src={jsimg} alt="" /></MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  TypeScript <MenubarShortcut><img className='relative right-4' width={20} src={tsimg} alt="" /> </MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger> Libraries</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem></MenubarItem>
                    <MenubarItem>React</MenubarItem>
                    <MenubarItem>ShadCN</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSub>
                  <MenubarSubTrigger> Framework</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem></MenubarItem>
                    <MenubarItem>Taillwind</MenubarItem>
                    <MenubarItem>Boostrap</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Blender(basic)<MenubarShortcut><img className='relative right-4' width={20} src={blenderimg} alt="" /> </MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='bg-transparent text-black hover:bg-transparent'>About Me</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>About Me</DialogTitle>
                    <DialogDescription className='tracking-wider text-black text-lg text-justify'>
                      I'm passionate about building innovative systems and pursuing a career in web
                      development, with a focus on frontend engineering. Driven by a desire to enhance user
                      experience, I continuously seek out new techniques and technologies to stay up-to-date.
                      Beyond my professional pursuits.</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </MenubarMenu>
            <MenubarMenu>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='bg-transparent text-black hover:bg-transparent'>Projects</Button>
                </DialogTrigger>
                <DialogContent className="sm:min-w-[425px] lg:w-[70rem]">
                  <DialogHeader>
                    <DialogTitle>Projects</DialogTitle>
                    <DialogDescription className='tracking-wider text-black text-lg text-justify'>
                      <ResizablePanelGroup
                        direction="horizontal"
                        className="max-w-md rounded-lg border md:min-w-[450px]"
                      >
                        <ResizablePanel defaultSize={50}>
                          <div className="flex h-[200px] items-center justify-center p-6">
                            <span className="font-semibold">One</span>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={50}>
                          <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={25}>
                              <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Two</span>
                              </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={75}>
                              <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Three</span>
                              </div>
                            </ResizablePanel>
                          </ResizablePanelGroup>
                        </ResizablePanel>
                      </ResizablePanelGroup></DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </MenubarMenu>
            <MenubarMenu>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='bg-transparent text-black hover:bg-transparent'>Contact</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    <DialogDescription className='p-5 '>
                      <Input className='my-5' type="email" placeholder="Name" />
                      <Input className='my-5' type="email" placeholder="Email" />
                      <Textarea className='my-5' placeholder="Type your message here." />
                      <div className='place-self-center'>
                        <Button>Submit</Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </MenubarMenu>
          </Menubar>
        </section>
        <div className=' h-[50rem] mt-5'>
          <ResizablePanelGroup
            direction="horizontal"
            className="md:max-w-3xl lg:max-w-7xl rounded-lg border place-self-center  w-[30rem]"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[600px] items-center justify-center p-6">
                <span className="font-semibold">
                  <img src={bgimage} alt="" />
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold text-justify sm:text-sm lg:text-lg md:text-md  "> I'm passionate about building innovative systems and pursuing a career in web
                      development, with a focus on frontend engineering. Driven by a desire to enhance user
                      experience, I continuously seek out new techniques and technologies to stay up-to-date.
                      Beyond my professional pursuits.</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">
                      <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">Project:{index + 1}</span>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>

        </div>

      </section>
    </>
  )
}

export default App
