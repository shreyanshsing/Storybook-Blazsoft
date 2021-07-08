import ReactVideoTrimmer from "react-video-trimmer";
import React from 'react'

export default function Trimmer() {
    return (
        <div>
            <ReactVideoTrimmer
                loadingFFMPEGText="Loading required libs..."
                timeLimit={120}
                timeRange={1}
                showEncodeBtn
            />
        </div>
    )
}
