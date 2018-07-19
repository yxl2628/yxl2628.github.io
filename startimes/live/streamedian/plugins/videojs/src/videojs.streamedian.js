/**
 * Created by Ruslan on 7/6/2016.
 */
import {LogLevel, getTagged} from 'bp_logger';
import * as streamedian_p from 'streamedian/player';
import WebsocketTransport from 'streamedian/transport/websocket';
import RTSPClient from 'streamedian/client/rtsp/client';
import HLSClient from 'streamedian/client/hls/client';


(function (videojs) {
    // nothing to do if loaded without videojs
    if (!videojs) {
        console.error('Missing videojs library');
        return;
    }

    /**
     *
     * @param source
     * @param tech
     * @constructor
     */
    function Html5HlsJS(source, tech) {
        var options = tech.options_;
        var el = tech.el();

        getTagged("transport:ws").setLevel(LogLevel.Error);
        this.transport = {
            constructor: WebsocketTransport,
            options: {
                socket: window.videojs_rtsp_config.websocket_url
            }
        };
        let player = new streamedian_p.WSPlayer(el, {
            modules: [
                {
                    client: RTSPClient,
                    transport: this.transport
                },
                {
                    client: HLSClient,
                    transport: this.transport
                }
            ]
        });

    }


    var HlsSourceHandler = {
        canHandleSource: function (source) {
            return this.canPlayType(source.type);
        },
        handleSource: function (source, tech) {
            return new Html5HlsJS(source, tech);
        },
        canPlayType: function (type) {
            if (streamedian_p.WSPlayer.canPlayWithModules(type,[
                    {
                        client: RTSPClient,
                        transport: WebsocketTransport
                    },
                    {
                        client: HLSClient,
                        transport: WebsocketTransport
                    }
                ])) {
                return 'probably';
            }
            return '';
        }
    };


    
    var video_element = document.createElement("video");

    // if browser not supported native hls add plugin
    videojs.getComponent('Html5').registerSourceHandler(HlsSourceHandler, 0);

    video_element = null;

})(window.videojs);


