import { FC } from 'react'
import { StatusType } from '../types'

interface IProps {
  status: StatusType
}
const StatusCard: FC<IProps> = ({ status }) => {
  const colorsMap = {
    Scheduled: 'bg-yellow',
    Ongoing: 'bg-green',
    Finished: 'bg-red-1',
  }
  const statusMap = {
    Scheduled: 'Match preparing',
    Ongoing: 'Live',
    Finished: 'Finished',
  }
  return (
    <div
      className={`text-text-primary flex h-7 min-w-[92px] items-center justify-center rounded-sm px-2 ${colorsMap[status]}`}
    >
      {statusMap[status]}
    </div>
  )
}

export default StatusCard
