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

  const viewModel: IHomeViewModel = {
    exitSeconds: initialSeconds + breakSeconds + lunchSeconds + TOTAL_WORK_SECONDS,

    handleSaveCurrentTime: () => {
      setInitialSeconds(getSeconds())
    },
    handleStartBreak: () => {
      setBreakStart(getSeconds())
    },
    handleStopBreak: () => {
      setBreakStop(getSeconds())
    },
    handleStartLunch: () => {
      setLunchStart(getSeconds())
    },
    handleStopLunch: () => {
      setLunchStop(getSeconds())
    }
  }

  useEffect(() => {
    if (breakStop != -1) {
      const diff = breakStop - breakStart
      setBreakSeconds(prev => prev + diff)
    }

    return () => {
      if (breakStop != -1) {
        setBreakStop(0)
        setBreakStart(0)
      }
    }
  }, [breakStop])

  useEffect(() => {
    if (lunchStop != -1) {
      const diff = lunchStop - lunchStart
      setLunchSeconds(diff)
    }

    return () => {
      if (lunchStop != -1) {
        setLunchStop(0)
        setLunchStart(0)
      }
    }
  }, [lunchStop])

  console.log(dayjs.unix(viewModel.exitSeconds))

  return viewModel
}