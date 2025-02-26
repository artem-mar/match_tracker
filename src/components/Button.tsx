interface IProps extends React.PropsWithChildren {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({ props, children }: IProps) => {
  return (
    <button
      className='bg-red-1 active:bg-red-2 disabled:bg-red-3 disabled:text-text-disabled text-text-primary flex h-14 items-center justify-between gap-2.5 rounded-sm px-10 font-[Inter] text-lg font-semibold'
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
