<template>
    <div id="waveform"></div>
</template>

<script setup>
import WaveSurfer from "wavesurfer.js";

const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true
});

wavesurfer.load('data/sample1.mp3');
</script>

<script>
export default {
  name: 'VoiceSection',
}
</script>