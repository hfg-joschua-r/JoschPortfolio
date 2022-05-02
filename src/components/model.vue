<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ autoRotate: true, autoRotateSpeed: 1.5, enableDamping: true, dampingFactor: 1, enableZoom: false }" height="400" width="200"  >
    <Camera :position="{ x: 0, y: 0, z: 120 }" />
    <Scene background="#005662">
      <AmbientLight :intensity="0.7" color="#D9FAFF"/>
      <PointLight ref="light" :position="{ z: 80 }" :intensity="2" color="#D9FAFF" />
      <GltfModel src="./models/pixelMeglb.glb" ref="model"/>
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
} from 'troisjs';
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
  }
  
};
</script>