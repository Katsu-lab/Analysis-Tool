<template>
  <div>
    <h1>This is an output page</h1>
  </div>
  <div class="grid grid-cols-3 gap-4">
    <div>
      <video-player :options="videoOptions1"/>
    </div>
    <div>
      <video-player :options="videoOptions2"/>
    </div>
    <div>
    </div>
  </div>
  <div class="w-full">Voice Wave</div>
</template>

<script>
import VideoPlayer from "@/components/VideoSection.vue";
import 'video.js/dist/video-js.css';

export default {
    name: "CareVideoPlayer",
    components: {
        VideoPlayer,
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
