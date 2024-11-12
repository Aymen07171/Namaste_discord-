import Peer from 'peerjs';

class WebRTCService {
  constructor() {
    this.peer = null;
    this.calls = new Map();
  }

  initialize(userId) {
    this.peer = new Peer(userId);
    
    this.peer.on('open', (id) => {
      console.log('Connected with ID:', id);
    });

    this.peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(
