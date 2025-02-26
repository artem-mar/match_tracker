import { FC } from "react"
import { StatusType } from "../types"

interface IProps {
  status: StatusType
}
const StatusCard: FC<IProps> = ({ status }) => {
  const colorsMap = {
    Scheduled: "bg-yellow",
    Ongoing: "bg-green",
    Finished: "bg-red-1",
  }
  const statusMap = {
    Scheduled: "Match preparing",
    Ongoing: "Live",
    Finished: "Finished",
  }
  return (
    <div
      className={`h-7 px-2 min-w-[92px] rounded-sm flex justify-center items-center text-text-primary ${colorsMap[status]}`}
    >
      {statusMap[status]}
    </div>
  )
}

export default StatusCard
