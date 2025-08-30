import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
enum callStatus{
    INACTIVE ='INACTIVE',
    CONNECTING ='CONNECTING',
    ACTIVE ='ACTIVE',
    FINISHED = 'FINISHED',
}

const Agent = ({userName}:AgentProps) => {
    const isSpeaking = true;
    const [currentCallStatus, setCurrentCallStatus] = React.useState<callStatus>(callStatus.INACTIVE);

  return (
    <>
    <div className='call-view'>
        <div className="card-interview">
            <div className='avatar'>
                <Image src="/ai-avatar.png" alt='vapi' width={65} height={54} className='object-cover'/>
                {isSpeaking && <span className="animate-speak"/>}

            </div>
            <h3 className='flex text-center'>AI Interviewer</h3>
        </div>
        <div className="card-border">
            <div className="card-content">
                <Image src ="/user-avatar.png" alt='user avatar' width={540} height={540} className='rounded-full object-cover size-[120px]'/>
                <h3>{userName}</h3>
            </div>
        </div>
    </div>
    <div className="w-full flex justify-center">
        {currentCallStatus !== callStatus.ACTIVE ? (
          <button className="relative btn-call" onClick={() => handleCall()}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                currentCallStatus !== callStatus.CONNECTING && "hidden"
              )}
            />

            <span className="relative">
              {currentCallStatus === callStatus.INACTIVE || currentCallStatus === callStatus.FINISHED
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" onClick={() => handleDisconnect()}>
            End
          </button>
        )}
      </div>
    </>
  )
}

export default Agent