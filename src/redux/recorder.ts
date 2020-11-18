import { Action } from 'redux'

interface RecorderState {
  dateStart: string
}

const START = 'recorder/start'
const STOP = 'recorder/stop'

type StartAction = Action<typeof START>
type StopAction = Action<typeof STOP>

export const start = (): StartAction => ({
  type: 'recorder/start'
})

export const stop = (): StopAction => ({
  type: 'recorder/stop'
})

const initialState: RecorderState = {
  dateStart: ''
}

const recorderReducer = (
  state: RecorderState = initialState,
  action: StartAction | StopAction
) => {
  switch (action.type) {
    case 'recorder/start': {
      return {
        ...state,
        dateStart: new Date().toISOString()
      }
    }
    case 'recorder/stop': {
      return {
        ...state,
        dateStart: ''
      }
    }
    default: {
      return state
    }
  }
}

export default recorderReducer
