interface IProps extends React.PropsWithChildren {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({ props, children }: IProps) => {
  return (
    <button
      className='h-14 px-10 flex justify-between items-center gap-2.5 rounded-sm bg-red-1 active:bg-red-2 disabled:bg-red-3 disabled:text-text-disabled text-text-primary font-[Inter] font-semibold text-lg'
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
