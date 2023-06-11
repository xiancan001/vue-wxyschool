<template>
  <div class="">
    <!-- <label>关键词：<input v-model="keyword"></label>
    <label>地区：<input v-model="location"></label> -->
    <baidu-map style="width: 700px; height: 500px; align-self: center;" :center="center" :zoom="zoom"
      @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom" :scroll-wheel-zoom="true"
      :double-click-zoom="true">
      <bm-view class="map"></bm-view>
      <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_LEFT_RIGHT"></bm-navigation>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-map-type>
      <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
      <bm-geolocation :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      </bm-marker>
      <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search> -->
    </baidu-map>
  </div>
</template>

<script>

import { defineComponent } from "vue"
export default defineComponent({
  data() {
    return {
      center: {
        lat: 24.874507,
        lng: 118.677208
      },
      zoom: 15,
    }
  },
  methods: {
    syncCenterAndZoom(e) {
      const { lng, lat } = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    }
  }
})
</script>

<style lang="scss" scoped></style>
