import { FC } from "react"
import { IMatch } from "../types"
import TeamIcon from "../icons/TeamIcon"
import StatusCard from "./StatusCard"

interface IProps {
  match: IMatch
}

const MatchCard: FC<IProps> = ({ match }) => {
  return (
    <div className='bg-bg-card h-[87px] flex justify-between items-center px-9 rounded-sm'>
      <div className='flex gap-3.5 items-center'>
        <TeamIcon />
        <span className='font-[Inter] font-semibold text-lg text-text-primary'>
          {match.awayTeam.name}
        </span>
      </div>

      <div className='flex flex-col items-center'>
        <span className='font-[Inter] font-semibold text-[20px] text-text-primary'>
          {`${match.awayScore} : ${match.homeScore}`}
        </span>
        <StatusCard status={match.status} />
      </div>

      <div className='flex gap-3.5 items-center'>
        <span className='font-[Inter] font-semibold text-lg text-text-primary'>
          {match.homeTeam.name}
        </span>
        <TeamIcon />
      </div>
    </div>
  )
}

export default MatchCard
