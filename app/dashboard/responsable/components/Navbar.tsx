import { Briefcase, Calendar } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="w-[280px] bg-[#333] text-white p-5 shadow-md h-screen flex flex-col fixed border-r border-[#444]">
      <div className="flex items-center mb-8">
        <div className="bg-[#f0f0f0] text-[#333] p-3 rounded-md">
          <Briefcase className="h-6 w-6" />
        </div>
      </div>
      <ul className="space-y-1 flex-grow">
        <li className="flex items-center p-3 cursor-pointer rounded-md bg-[#4a4a4a] text-white">
          <Briefcase className="mr-3 h-5 w-5 text-white" />
          <span>Permissions</span>
        </li>
        <li className="flex items-center p-3 cursor-pointer rounded-md hover:bg-[#4a4a4a] text-gray-200">
          <Calendar className="mr-3 h-5 w-5 text-gray-200" />
          <span>Planning</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

