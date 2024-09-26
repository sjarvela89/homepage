import React, { useRef, useState } from 'react';

const WebRTCStreamer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);

  const startLocalStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setLocalStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing media devices.', error);
    }
  };

  const stopLocalStream = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      setLocalStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <video ref={videoRef} autoPlay playsInline muted className="video" style={{ width: '100%', height: 'auto', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: 2 }}>
        <button onClick={startLocalStream} style={{ marginRight: '10px' }}>Start Streaming</button>
        <button onClick={stopLocalStream}>Stop Streaming</button>
      </div>
    </div>
  );
};

export default WebRTCStreamer;