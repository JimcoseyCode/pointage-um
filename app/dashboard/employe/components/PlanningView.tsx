"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Lock } from "lucide-react"
import { useSession } from "next-auth/react"
import styles from "../styles/Planning.module.css"

interface ScheduleEntry {
  time: string
  location: string
}

interface DaySchedule {
  date: Date
  day: string
  planned: ScheduleEntry | null
  actual: ScheduleEntry | null
  task: string
  remarks: string
}

export default function PlanningView() {
  const TODAY = new Date()

  const [currentDate, setCurrentDate] = useState(new Date(TODAY))
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  )

  // Simplified timer state with isRunning flag
  const [timers, setTimers] = useState<{ [key: string]: { startTime: number; elapsed: number; isRunning: boolean } }>(
    {},
  )

  // Update current time every second with the real current time
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  // Update running timers every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers }
        let hasChanges = false

        Object.keys(updatedTimers).forEach((key) => {
          if (updatedTimers[key].isRunning) {
            const newElapsed = Math.floor((Date.now() - updatedTimers[key].startTime) / 60000)
            if (updatedTimers[key].elapsed !== newElapsed) {
              updatedTimers[key].elapsed = newElapsed
              hasChanges = true
            }
          }
        })

        return hasChanges ? updatedTimers : prevTimers
      })
    }, 1000) // Update every second for more responsive UI

    return () => clearInterval(interval)
  }, [])

  const getWeekNumber = (date: Date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1)
    const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000))
    return Math.ceil((days + startOfYear.getDay() + 1) / 7)
  }

  const getMondayOfWeek = (date: Date) => {
    const monday = new Date(date)
    const dayOfWeek = monday.getDay()
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
    monday.setDate(monday.getDate() + diff)
    return monday
  }

  const generateWeekSchedule = (startDate: Date) => {
    const daysOfWeek = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
    return daysOfWeek.map((day, index) => {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + index)
      return {
        day,
        date,
        planned: null,
        actual: null,
        task: "",
        remarks: "",
      }
    })
  }

  const weekStartDate = getMondayOfWeek(currentDate)
  const schedule: DaySchedule[] = generateWeekSchedule(weekStartDate)

  // Check if a date is today (using our TODAY constant)
  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  // Toggle timer function - only works for today
  const toggleTimer = (dayKey: string, date: Date) => {
    // Only allow toggling for today's date
    if (!isToday(date)) return

    setTimers((prevTimers) => {
      // If timer doesn't exist, create and start it
      if (!prevTimers[dayKey]) {
        return {
          ...prevTimers,
          [dayKey]: {
            startTime: Date.now(),
            elapsed: 0,
            isRunning: true,
          },
        }
      }

      // If timer exists, toggle its state
      const timer = prevTimers[dayKey]
      const isRunning = !timer.isRunning

      return {
        ...prevTimers,
        [dayKey]: {
          startTime: isRunning ? Date.now() - timer.elapsed * 60000 : timer.startTime,
          elapsed: timer.elapsed,
          isRunning: isRunning,
        },
      }
    })
  }

  const formatElapsedTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours} h ${remainingMinutes} min`
  }

  const { data: session } = useSession()
  const user = session?.user

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.planningHeader}>
          <div className={styles.weekSelector}>
            <div className={styles.weekLabel}>
              <span className={styles.weekBadge}>semaine</span>
            </div>

            <div className={styles.weekNavigation}>
              <button onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}>
                <ChevronLeft className={styles.navIcon} />
              </button>
              <button className={styles.weekButton}>
                {`Semaine ${getWeekNumber(currentDate)} - ${currentDate.getFullYear()}`}
              </button>
              <button onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}>
                <ChevronRight className={styles.navIcon} />
              </button>
              <span className={styles.currentTime}>{currentTime}</span>
            </div>
          </div>

          <div className={styles.scheduleTable}>
            <div className={styles.tableHeader}>
              <div className={styles.headerCell}>{user ? `${user.name} ${user.firstName}` : "Nom et Prénom"}</div>
              <div className={styles.headerCell}>HORAIRE PRÉVU</div>
              <div className={styles.headerCell}>HORAIRE RÉEL</div>
              <div className={styles.headerCell}>TÂCHE</div>
              <div className={styles.headerCell}>REMARQUE</div>
            </div>

            <div className={styles.tableBody}>
              {schedule.map((day) => {
                const dayIsToday = isToday(day.date)
                return (
                  <div key={day.day} className={styles.tableRow}>
                    <div className={`${styles.dayCell} ${dayIsToday ? styles.today : ""}`}>
                      {day.day}
                      <div className={styles.date}>{day.date.toLocaleDateString("fr-FR")}</div>
                    </div>
                    <div className={styles.cell}>{day.planned?.time || ""}</div>
                    <div className={`${styles.cell} ${styles.timerCell}`}>
                      <span>
                        {timers[day.day]?.elapsed !== undefined
                          ? formatElapsedTime(timers[day.day].elapsed)
                          : "0 h 0 min"}
                      </span>
                      <button
                        onClick={() => toggleTimer(day.day, day.date)}
                        className={`${styles.timerButton} ${dayIsToday ? styles.activeTimer : styles.inactiveTimer}`}
                        type="button"
                        disabled={!dayIsToday}
                        title={
                          dayIsToday ? "Démarrer/Arrêter le chronomètre" : "Disponible uniquement pour aujourd'hui"
                        }
                      >
                        {dayIsToday ? (
                          timers[day.day]?.isRunning ? (
                            <Pause className={styles.timerIcon} />
                          ) : (
                            <Play className={styles.timerIcon} />
                          )
                        ) : (
                          <Lock className={styles.timerIcon} />
                        )}
                      </button>
                    </div>
                    <div className={styles.cell}>{day.task}</div>
                    <div className={styles.cell}>{day.remarks}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

