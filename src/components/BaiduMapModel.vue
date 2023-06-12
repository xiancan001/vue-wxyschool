<template>
    <div class="">
        <baidu-map v-if="hackRest" auto-resize="true" style="width: 700px; height: 500px; " :center="center" :zoom="zoom"
        @ready="handler" @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom" :scroll-wheel-zoom="true"
            :double-click-zoom="true">
            <!-- <bm-view class="map"></bm-view> -->
            <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_LEFT_RIGHT" :enableGeolocation="true"></bm-navigation>
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

import { defineComponent } from "vue";
import { Maperstate } from "../store/maperstate";
export default defineComponent({

    props: {
        Center: {
            type: Object,
            required: true
        },

    },

    data() {
        return {
            hackRest: true,

            center: {
                lat: null,
                lng: null
            },
            zoom: 18,
        }
    },

    methods: {
        // ready 事件来执行地图 API 加载完毕后才能执行的代码，
        handler({ BMap, map }) {
            // console.log("ready---go---->", BMap, map)
            // this.center.lng = 116.404
            // this.center.lat = 39.915
            // this.zoom = 15

            const store=Maperstate();
            const cen=store.getMapXy;
            this.center=cen;


        },


        syncCenterAndZoom(e) {
            // console.log("e--->", e);
            // console.log(e.target.getCenter());


            // const { lng, lat } =   e.target.getCenter();

            // this.center.lng = lng
            // this.center.lat = lat
            // this.zoom = e.target.getZoom()
        }
    },
    //开启监听
    watch: {
        Center: {
            deep: true,
            handler(newV, oldV) {

                this.center = newV;
                this.hackRest = false;

                //超级 超级  重要  解决弹窗下不能重新刷新的问题

                this.$nextTick(() => {

                    this.center = newV;
                    //在 DOM 中重新添加组件渲染地图
                    this.hackRest = true;


                });

            }
        }

    }
})
</script>
  
<style lang="scss" scoped></style>
  