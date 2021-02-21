export interface TK1Measurements {
  [key: string]: {
    values: number[]
    times: number[]
  }
}

export interface Measurements {
  current: {
    data: {
      TK1: TK1Measurements
    }
  }
}
