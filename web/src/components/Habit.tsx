interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div className='rounded flex 
        bg-zinc-900 text-white
        w-10 h-10 m-2
        items-center justify-center'>
      {props.completed}
    </div>
  )
}