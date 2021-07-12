import React, { Component } from "react";
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Stop';
import PauseCircleFilledSharpIcon from '@material-ui/icons/PauseCircleFilledSharp';
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import { Button, IconButton, Tooltip } from "@material-ui/core";
import AudioPlayer from './AudioPlayer';

const audioType = "audio/*";

class Recorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            seconds: 0,
            recording: false,
            medianotFound: false,
            audios: [],
            audioBlob: null,
            audioSave:false
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    handleAudioPause(e) {
        e.preventDefault();
        clearInterval(this.timer);
        this.mediaRecorder.pause();
        this.setState({ pauseRecord: true });
    }
    handleAudioStart(e) {
        e.preventDefault();
        this.startTimer();
        this.mediaRecorder.resume();
        this.setState({ pauseRecord: false });
    }

    startTimer() {
        //if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
        //}
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds + 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        });
    }

    secondsToTime(secs) {
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

    async componentDidMount() {
        navigator.getUserMedia =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
        if (navigator.mediaDevices) {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (this.props.mimeTypeToUseWhenRecording) {
                this.mediaRecorder = new MediaRecorder(stream, { mimeType: this.props.mimeTypeToUseWhenRecording });
            } else {
                this.mediaRecorder = new MediaRecorder(stream);
            }
            this.chunks = [];
            this.mediaRecorder.ondataavailable = e => {
                if (e.data && e.data.size > 0) {
                    this.chunks.push(e.data);
                }
            };
        } else {
            this.setState({ medianotFound: true });
            console.log("Media Decives will work only with SSL.....");
        }
    }

    startRecording(e) {
        e.preventDefault();
        // wipe old data chunks
        this.chunks = [];
        // start recorder with 10ms buffer
        this.mediaRecorder.start(10);
        this.startTimer();
        // say that we're recording
        this.setState({ recording: true });
        
    }

    stopRecording(e) {
        clearInterval(this.timer);
        this.setState({ time: {} });
        e.preventDefault();
        // stop the recorder
        this.mediaRecorder.stop();
        // say that we're not recording
        this.setState({ recording: false, pauseRecord: false, });
        // save the video to memory
        this.saveAudio();
        this.setState({audioSave : true})
    }

    handleReset(e) {
        if (this.state.recording) {
            this.stopRecording(e);
        }
        this.setState({audioSave : false})
        this.setState({
            time: {},
            seconds: 0,
            recording: false,
            medianotFound: false,
            audios: [],
            audioBlob: null
        }, () => {

            this.props.handleReset(this.state);
        });

    }

    saveAudio() {
        // convert saved chunks to blob
        const blob = new Blob(this.chunks, { type: audioType });
        // generate video url from blob
        const audioURL = window.URL.createObjectURL(blob);
        // append videoURL to list of saved videos for rendering
        const audios = [audioURL];
        this.setState({ audios, audioBlob: blob });
        this.props.handleAudioStop({
            url: audioURL,
            blob: blob,
            chunks: this.chunks,
            duration: this.state.time
        });
    }


    render() {
        const buttons = <div style={{marginTop:'13px'}} >
            <Button color="secondary"
                variant="contained"
                style={{ marginLeft: 'auto' }}
                onClick={() =>
                    this.props.handleAudioUpload(this.state.audioBlob)
                }
                disabled={this.props.uploadButtonDisabled}
            >
                Send
            </Button>
            <Button color="primary"
                style={{ marginLeft: '10px' }}
                variant="contained"
                onClick={(e) => this.handleReset(e)}

            >
                Record Again
            </Button>
        </div>
        const { recording, audios, time, medianotFound, pauseRecord } = this.state;
        const { showUIAudio, title, audioURL } = this.props;
        return (
            <div style={{ textAlign: "center" }}>
                <div >
                    <div >
                        {!medianotFound ? (
                            <div >

                                <div style={{textAlign:'center'}} >
                                    <div >
                                        {audioURL !== null && showUIAudio ? (
                                            <div>
                                            <AudioPlayer  source={audios[0]} />
                                            </div>
                                        ) : null}

                                    </div>
                                    {audioURL !== null && showUIAudio ? null :
                                    <>
                                    <div style={{ marginTop: "8px" }} >
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
                                    <>
                                        <p >Press the microphone to record</p>
                                        <IconButton
                                        onClick={e => this.startRecording(e)}
                                    >
                                        <MicIcon fontSize='large' color="primary" />
                                    </IconButton>
                                    </>
                                    ) : null}</>}
                                </div>
                                

                                {!recording ? null : (
                                    <div>
                                        <IconButton onClick={e => this.stopRecording(e)}><StopIcon fontSize='large' color="primary" /></IconButton>

                                        <IconButton
                                            onClick={
                                                !pauseRecord
                                                    ? e => this.handleAudioPause(e)
                                                    : e => this.handleAudioStart(e)
                                            }

                                        >
                                            {pauseRecord ?
                                                <PlayCircleFilledSharpIcon fontSize='large' color="primary"/> :
                                                <PauseCircleFilledSharpIcon fontSize='large' color="primary" />}
                                        </IconButton>
                                    </div>
                                )}

{buttons}
                            </div>


                        ) : (
                            <p style={{ color: "#fff", marginTop: 30, fontSize: 25 }}>
                                Seems the site is Non-SSL
                            </p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Recorder;