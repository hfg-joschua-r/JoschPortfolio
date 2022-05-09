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
      enablePan: false,
    }"
    resize
    @onResize="resizeHandler"
  >
    <Camera :position="{ x: 1, y: .5, z: 0 }" :zoom="3" :fov="9"/>
    <Scene background="#001E22">
      <AmbientLight :intensity="0.9" color="#D9FAFF" />
      <PointLight
        ref="light"
        :position="{ z: 10 }"
        :intensity="2"
        color="#D9FAFF"
      />
      <GltfModel src="./models/keyboard2.glb" ref="model" />
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
      this.$refs.renderer.three.setSize(window.innerWidth /2, window.innerWidth/ 4);
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