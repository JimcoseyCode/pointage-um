const Topbar = () => {
  const currentDate = new Date()
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }

  const formattedDate = currentDate.toLocaleDateString("en-US", options)

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-[#f9f9f9] m-5 rounded-xl shadow-sm">
      <div className="text-base font-medium text-[#333]">Permissions</div>
      <div className="flex items-center">
        <div className="text-sm text-[#666] mr-5">{formattedDate}</div>
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium">Responsable</span>
          <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-8 h-8 rounded-full ml-3" />
        </div>
      </div>
    </div>
  )
}

export default Topbar

