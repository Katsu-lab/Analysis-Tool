<template>
  <div class="grid grid-cols-3 gap-4 mb-10">
    <div>
      <video-player :options="videoOptions1"/>
    </div>
    <div>
      <video-player :options="videoOptions2"/>
    </div>
    <div>
      <div class="flex justify-center">
        <img src="@/assets/img/sample.png" alt="">
      </div>
      <result-section />
    </div>
  </div>
  <div class="w-full">
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoSection.vue";
import 'video.js/dist/video-js.css';

import ResultSection from "@/components/ResultSection.vue"
// import VoiceSection from "@/components/VoiceSection.vue"

export default {
    name: "CareVideoPlayer",
    components: {
      VideoPlayer,
      ResultSection
    },
    data() {
        return {
            videoOptions1: {
                autoplay: true,
                controls: true,
                sources: [
                    {
                        src: "data/sample1.mp4",
                        type: "video/mp4",
                    }
                ]
            },
            videoOptions2: {
                autoplay: true,
                controls: true,
                sources: [
                    {
                        src: "data/sample2.mp4",
                        type: "video/mp4",
                    }
                ]
            }
        };
    }
};
</script>
