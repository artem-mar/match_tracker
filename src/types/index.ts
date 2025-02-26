export interface IPlayer {
  username: string
  kills: number
}

export interface ITeam {
  name: string
  players: IPlayer[]
  points: number
  total_kills: number
  place: number
}

export type StatusType = "Ongoing" | "Finished" | "Scheduled"

export interface IMatch {
  awayScore: number
  awayTeam: ITeam
  homeScore: number
  homeTeam: ITeam
  status: StatusType
  time: string
  title: string
}
