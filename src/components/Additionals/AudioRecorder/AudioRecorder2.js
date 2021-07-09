import React, {useState} from 'react'
import Recorder from './AudioRecorder3'

export default function AudioRecorder2() {
    const [audioDetails, setAudioDetails] =useState({
        url: null,
        blob: null,
        chunks: null,
        duration: {
            h: null,
            m: null,
            s: null,
        }
    })

    const handleAudioStop = (data) => {
        console.log(data)
        setAudioDetails(data);
    }
    const handleAudioUpload = (file) => {
        console.log(file);
    }
    const handleReset = () => {
        const reset = {
            url: null,
            blob: null,
            chunks: null,
            duration: {
                h: null,
                m: null,
                s: null,
            }
        }
        setAudioDetails(reset);
    }
    return (
        <div>
            <Recorder
                record={true}
                title={"New recording"}
                audioURL={audioDetails.url}
                showUIAudio
                handleAudioStop={(data) => handleAudioStop(data)}
                //handleOnChange={(value) => handleOnChange(value, 'firstname')}
                handleAudioUpload={(data) => handleAudioUpload(data)}
                handleReset={() => handleReset()}
                mimeTypeToUseWhenRecording={null} />
        </div>
    )
}
