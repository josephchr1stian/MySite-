
'use client'
import React from 'react';
import YouTube from "react-youtube";


export default class VidTest extends React.Component {

    _onReady(event) {
        // Access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() {
        const videoId = 'UBS4Gi1y_nc';
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        return (<YouTube videoid = {videoId} opts={opts} onReady={this._onReady} />);
    }

    function
}



