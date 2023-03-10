export interface IHomeViewModel {
  exitTime: string

  initialDisabled: boolean

  pauseDisabled: boolean
  backPauseDisabled: boolean

  lunchDisabled: boolean
  backLunchDisabled: boolean

  handleSaveCurrentTime: () => void
  handleStartBreak: () => void
  handleStopBreak: () => void
  handleStartLunch: () => void
  handleStopLunch: () => void
}