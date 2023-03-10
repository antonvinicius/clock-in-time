import { ECycleState } from "../enums/ECycleState"

export interface ICycle {
  state: ECycleState
  startedAtSeconds: number
}