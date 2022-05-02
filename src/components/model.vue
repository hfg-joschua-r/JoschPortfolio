<template>
  <Renderer
    ref="renderer"
    antialias
    :orbit-ctrl="{
      autoRotate: true,
      autoRotateSpeed: 1.5,
      enableDamping: true,
      dampingFactor: 1,
      enableZoom: false,
    }"
    resize
    @onResize="resizeHandler"
  >
    <Camera :position="{ x: 0, y: 0, z: 120 }" />
    <Scene background="#005662">
      <AmbientLight :intensity="0.9" color="#D9FAFF" />
      <PointLight
        ref="light"
        :position="{ z: 80 }"
        :intensity="2"
        color="#D9FAFF"
      />
      <GltfModel src="./models/pixelMeglb.glb" ref="model" />
    </Scene>
  </Renderer>
</template>

<script>
import {
  AmbientLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
  PointLight,
} from "troisjs";
export default {
  components: {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
    PointLight,
  },
  props: {
    width: {
      type: String,
      default: "400",
    },
    height: {
      type: String,
      default: "250",
    },
  },
  methods: {
    resizeHandler() {
      this.$refs.renderer.three.setSize(window.innerWidth / 3, window.innerWidth / 3);
    },
  },
  mounted() {
    const renderer = this.$refs.renderer;
    renderer.onResize(() => {
        this.resizeHandler();
    });
    this.resizeHandler();
  },
};
</script>