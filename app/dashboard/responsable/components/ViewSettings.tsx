"use client"
import { useState } from "react"
import type React from "react"

export default function ViewSettings() {
  const [selectedRole, setSelectedRole] = useState<string>("manager")
  const [hourlyRate, setHourlyRate] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleHourlyRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (Number.parseFloat(value) < 9.4) {
      setError("Le taux horaire ne peut pas être inférieur à 9.4")
    } else {
      setError("")
    }
    setHourlyRate(value)
  }

  return (
    <div className="flex justify-center items-start mt-10">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div className="bg-[#f0f0f0] p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Qui soumet la déclaration de présence par première ?</h2>
          <div className="space-y-4">
            <label className="flex items-start cursor-pointer">
              <input
                type="radio"
                name="declaration"
                value="manager"
                checked={selectedRole === "manager"}
                onChange={() => setSelectedRole("manager")}
                className="mt-1 mr-3 accent-black"
              />
              <div>
                <span className="text-base font-medium text-[#333]">Manager</span>
                <p className="text-sm text-[#666] mt-1">
                  Le Manager est responsable de la soumission des registres de présence de tous les employés par
                  premier.
                </p>
              </div>
            </label>

            <label className="flex items-start cursor-pointer">
              <input
                type="radio"
                name="declaration"
                value="employee"
                checked={selectedRole === "employee"}
                onChange={() => setSelectedRole("employee")}
                className="mt-1 mr-3 accent-black"
              />
              <div>
                <span className="text-base font-medium text-[#333]">Employee</span>
                <p className="text-sm text-[#666] mt-1">
                  Les employés déclarent leur arrivée et attendent la validation du manager.
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="bg-[#f0f0f0] p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Taux horaire:</h2>
          <input
            type="number"
            placeholder="Value"
            className="w-full p-3 border border-[#ccc] rounded-md text-base"
            value={hourlyRate}
            onChange={handleHourlyRateChange}
            min="9.4"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <p className="text-sm text-[#666] mt-2">
            Le salaire horaire minimum autorisé est de <strong>9.4</strong>. Saisissez une valeur pour définir le taux
            standard pour les employés.
          </p>
        </div>
      </div>
    </div>
  )
}

