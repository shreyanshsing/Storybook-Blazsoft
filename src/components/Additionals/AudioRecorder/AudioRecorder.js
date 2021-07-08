import React, {useState} from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { Button } from '@material-ui/core';

export default function AudioRecorder() {
    const [recordState, setRecordState]= useState(null);
    const start = () => {
        setRecordState(RecordState.START);
    }

    const stop = () => {
        setRecordState(RecordState.STOP);
      }

      //audioData contains blob and blobUrl
  const onStop = (audioData) => {
    console.log('audioData', audioData)
  }

    return (
        <div>
            <AudioReactRecorder canvasHeight="100" canvasWidth="200"  state={recordState} onStop={()=>onStop()} />
            <audio controls>
                        <source src={recordState} type="audio/ogg"></source>
                    </audio>
 <Button onClick={()=>start}>Start</Button>
 <Button onClick={()=>stop}>Stop</Button>
            
        </div>
    )
}