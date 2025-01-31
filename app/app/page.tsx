"use client"
import * as React from "react"

// import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
// export function ProgressApp() {
//   const [progress, setProgress] = React.useState(13)

//   React.useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500)
//     return () => clearTimeout(timer)
//   }, [])

//   return <Progress value={progress} className="w-[60%]" />
// }

export default function Page() {
  

  return (
    <>
     <div className="bg-white w-full ">
    {/* <ProgressApp /> */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
     
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              FDS - Pointage <Badge className="text-5xl font-semibold tracking-tight text-balance">UM</Badge>
            </h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


