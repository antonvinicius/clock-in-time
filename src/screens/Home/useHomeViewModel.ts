import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { TOTAL_LUNCH_MINUTES, TOTAL_WORK_SECONDS } from '../../global/config'
import { getSeconds } from '../../lib/dayjs/get-seconds'
import { IHomeViewModel } from './interfaces/IHomeViewModel'

export function useHomeViewModel(): IHomeViewModel {
  const [initialSeconds, setInitialSeconds] = useState(0)
  const [breakSeconds, setBreakSeconds] = useState(0)
  const [lunchSeconds, setLunchSeconds] = useState(TOTAL_LUNCH_MINUTES)

  const [breakStart, setBreakStart] = useState(-1)
  const [breakStop, setBreakStop] = useState(-1)
  const [lunchStart, setLunchStart] = useState(-1)
  const [lunchStop, setLunchStop] = useState(-1)

  const [pauseDisabled, setPauseDisabled] = useState(true)
  const [lunchDisabled, setLunchDisabled] = useState(true)
  const [initialDisabled, setInitialDisabled] = useState(false)

  const exitSeconds = initialSeconds + breakSeconds + lunchSeconds + TOTAL_WORK_SECONDS

  const viewModel: IHomeViewModel = {

    exitTime: initialSeconds === 0 ? '--' : dayjs.unix(exitSeconds).format('HH:mm'),

    initialDisabled: initialDisabled,

    pauseDisabled: pauseDisabled,
    backPauseDisabled: initialSeconds === 0 || !pauseDisabled,

    lunchDisabled: lunchDisabled,
    backLunchDisabled: initialSeconds === 0 || !lunchDisabled,

    handleSaveCurrentTime: () => {
      setInitialSeconds(getSeconds())
      setPauseDisabled(false)
      setLunchDisabled(false)
      setInitialDisabled(true)
    },
    handleStartBreak: () => {
      setBreakStart(getSeconds())
      setPauseDisabled(true)
    },
    handleStopBreak: () => {
      setBreakStop(getSeconds())
      setPauseDisabled(false)
    },
    handleStartLunch: () => {
      setLunchStart(getSeconds())
      setLunchDisabled(true)
    },
    handleStopLunch: () => {
      setLunchStop(getSeconds())
      setLunchDisabled(false)
    }
  }

  useEffect(() => {
    if (breakStop != -1) {
      const diff = breakStop - breakStart
      setBreakSeconds(prev => prev + diff)
    }

    return () => {
      if (breakStop != -1) {
        setBreakStop(-1)
        setBreakStart(-1)
      }
    }
  }, [breakStop])

  useEffect(() => {
    if (lunchStop != -1) {
      const diff = lunchStop - lunchStart
      if (diff >= 60) {
        setLunchSeconds(diff)
        setLunchDisabled(true)
      }
    }

    return () => {
      if (lunchStop != -1) {
        setLunchStop(-1)
        setLunchStart(-1)
      }
    }
  }, [lunchStop])

  console.log(dayjs.unix(exitSeconds))

  return viewModel
}