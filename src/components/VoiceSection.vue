<template>
  <div id="waveform1"></div>
  <div id="waveform2"></div>
</template>

<script setup>
import WaveSurfer from "wavesurfer.js";

const wavesurfer1 = WaveSurfer.create({
  container: '#waveform1'
})
wavesurfer1.load('data/sample1.mp3');

const wavesurfer2 = WaveSurfer.create({
  container: '#waveform2'
})
wavesurfer2.load('data/sample2.mp3');
</script>

<script>
export default {
  name: 'VoiceSection',
}
</script>