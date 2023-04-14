interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps){
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>          
      <div
        role='progressbar'
        aria-label='Progresso de hábitos completados'
        aria-valuenow={props.progress}
        aria-aria-valuemin={0}
        aria-aria-valuemax={100}
        className='h-3 rounded-xl bg-violet-600'
        style={{width: `${props.progress}%`}} 
      />
    </div>
  )
}