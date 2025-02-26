import { FC } from 'react'
import { IMatch } from '../types'
import TeamIcon from '../icons/TeamIcon'
import StatusCard from './StatusCard'

interface IProps {
  match: IMatch
}

const MatchCard: FC<IProps> = ({ match }) => {
  return (
    <div className='bg-bg-card flex h-[87px] items-center justify-between rounded-sm px-9'>
      <div className='flex items-center gap-3.5'>
        <TeamIcon />
        <span className='text-text-primary font-[Inter] text-lg font-semibold'>
          {match.awayTeam.name}
        </span>
      </div>

      <div className='flex flex-col items-center'>
        <span className='text-text-primary font-[Inter] text-[20px] font-semibold'>
          {`${match.awayScore} : ${match.homeScore}`}
        </span>
        <StatusCard status={match.status} />
      </div>

      <div className='flex items-center gap-3.5'>
        <span className='text-text-primary font-[Inter] text-lg font-semibold'>
          {match.homeTeam.name}
        </span>
        <TeamIcon />
      </div>
    </div>
  )
}

export default MatchCard
