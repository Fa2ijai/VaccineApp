'use client'

export default function InteractiveCard({children}:{children:React.ReactNode}) { 
    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type=='mouseover')
        {
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')
        }
        else{
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('bg-white')
            event.currentTarget.classList.remove('bg-neutral-200')
        }
    }
    return (
        <div className='w-[250px] h-[300px] rounded-lg border-2 shadow-lg bg-white' onMouseOver={onCardMouseAction} onMouseOut={onCardMouseAction}>
          {children}
        </div>
    );

}
