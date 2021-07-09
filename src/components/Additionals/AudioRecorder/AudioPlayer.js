import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import React from 'react'

export default function Audio({ source }) {
    const muiTheme = createMuiTheme({});
    return (
        <ThemeProvider theme={muiTheme}>
            <AudioPlayer variation="primary" src={source} />
        </ThemeProvider>
    )
}



