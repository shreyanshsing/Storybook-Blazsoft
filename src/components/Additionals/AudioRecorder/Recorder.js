import React, { useState, useEffect } from "react";
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Button, IconButton } from "@material-ui/core";

const audioType = "audio/*";
let mediaRecorder;
export default function Recorder({showUIAudio, audioURL, handleAudioUpload, handleAudioStop, mimeTypeToUseWhenRecording }) {
    const [time, setTime] = useState({});
    const [seconds, setSeconds] = useState(0);
    const [recording, setRecording] = useState(false);
    const [medianotFound, setMedianotFound] = useState(false);
    const [audios, setAudios] = useState([]);
    const [audioBlob, setAudioBlob] = useState(null);
    const [pauseRecord, setPauseRecord]= useState(false);
    let timer = 0;
    let chunk;

    useEffect(() => media(), []);
    const media = async () => {
        navigator.getUserMedia =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
        if (navigator.mediaDevices) {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (mimeTypeToUseWhenRecording) {
                mediaRecorder = new MediaRecorder(stream, { mimeType: mimeTypeToUseWhenRecording });
            } else {
                mediaRecorder = new MediaRecorder(stream);
            }
            
            chunk = [];
            mediaRecorder.ondataavailable = e => {
                if (e.data && e.data.size > 0) {
                    chunk.push(e.data);
                }
            };
        } else {
            setMedianotFound(true);
            console.log("Media Decives will work only with SSL.....");
        }
    }
    const handleAudioPause = (e) => {
        e.preventDefault();
        clearInterval(timer);
        mediaRecorder.pause();
        setPauseRecord(false );
    }
    const handleAudioStart = (e) => {
        e.preventDefault();
        startTimer();
        mediaRecorder.resume();
        setPauseRecord(false );
    }

    const startTimer = () => {
        //if (this.timer === 0 && this.state.seconds > 0) {
        timer = setInterval(countDown, 1000);
        //}
    }
    const startRecording = (e) => {
        e.preventDefault();
        // wipe old data chunks
        chunk = [];
        // start recorder with 10ms buffer
        mediaRecorder.start(10);
        startTimer();
        // say that we're recording
        setRecording(true);
    }

    const stopRecording = (e) => {
        clearInterval(timer);
        setTime({});
        e.preventDefault();
        // stop the recorder
        mediaRecorder.stop();
        // say that we're not recording
        setRecording(false);
        setPauseRecord(false );
        // save the video to memory
        saveAudio();
    }

    const handleReset = (e) => {
        if (recording) {
            stopRecording(e);
        }
        setTime({});
        setSeconds(0);
        setRecording(false);
        setMedianotFound(false);
        setAudios([]);
        setAudioBlob(null);
        handleReset();

    }

    const saveAudio = () => {
        // convert saved chunks to blob
        const blob = new Blob([chunk], { type: audioType });
        // generate video url from blob
        const audioURL = window.URL.createObjectURL(blob);
        // append videoURL to list of saved videos for rendering
        const audio = [audioURL];
        setAudios(audio);
        setAudioBlob(blob);
        handleAudioStop({
            url: audioURL,
            blob: blob,
            chunks: chunk,
            duration:time
        });
    }

    const countDown = () => {
        // Remove one second, set state so a re-render happens.
        let sec = seconds + 1;
        setSeconds(sec);
        setTime(secondsToTime(sec));
    }

    const secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            h: hours,
            m: minutes,
            s: seconds
        };
        return obj;
    }


    return (
        <div>
            <div >
                <div >
                    {!medianotFound ? (
                        <div >
                            <div >
                                <Button
                                    onClick={() => handleAudioUpload(audioBlob)
                                    }

                                    //disabled={this.props.uploadButtonDisabled}
                                >
                                    Upload
                                </Button>
                                <Button
                                    onClick={(e) => handleReset(e)}

                                >
                                    Clear
                                </Button>
                            </div>
                            <div >
                                <div >
                                    {audioURL !== null && showUIAudio ? (
                                        <audio controls>
                                            <source src={audios[0]} type="audio/ogg" />
                                            <source src={audios[0]} type="audio/mpeg" />
                                        </audio>
                                    ) : null}
                                </div>
                                <div >
                                    <span >
                                        {time.m !== undefined
                                            ? `${time.m <= 9 ? "0" + time.m : time.m}`
                                            : "00"}
                                    </span>
                                    <span >:</span>
                                    <span >
                                        {time.s !== undefined
                                            ? `${time.s <= 9 ? "0" + time.s : time.s}`
                                            : "00"}
                                    </span>
                                </div>
                                {!recording ? (
                                    <p >Press the microphone to record</p>
                                ) : null}
                            </div>
                            {!recording ? (
                                <IconButton
                                    onClick={e => startRecording(e)}
                                    href=" #"
                                    color="primary"

                                >
                                    <MicIcon />
                                </IconButton>
                            ) : (
                                <div >
                                    <IconButton onClick={e => stopRecording(e)}><StopIcon color="primary" /></IconButton>

                                    {/* <img src={stopIcon} width={20} height={20} alt="Stop icons" /> */}

                                    {/* <span className={`${styles.icons} ${styles.FaStop}`}></span> */}

                                    <IconButton
                                        onClick={
                                            !pauseRecord
                                                ? e => handleAudioPause(e)
                                                : e => handleAudioStart(e)
                                        }
                                        href=" #"

                                    >
                                        {pauseRecord ?
                                            <PlayCircleOutlineIcon color="primary" /> :
                                            <PauseIcon color="primary" />}
                                    </IconButton>

                                </div>
                            )}
                        </div>
                    ) : (
                        <p style={{ color: "#fff", marginTop: 30, fontSize: 25 }}>
                            Seems the site is Non-SSL
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}






