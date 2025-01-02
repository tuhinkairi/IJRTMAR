<template>
      <div class="image-container mb-5">
        <div class="image-wrapper" v-for="(item, index) in images" :key="index">
            <img :src="item.indexing_image_url" height="50" width="80" />
        </div>
    </div>
</template>
<script>
export default {
    name: "Blogs",
    components: {
    },
    data: function () {
        return {
            images: [],
        };
    },
    methods: {
        openIndexingURL: function (indexingURL) {
            window.open(indexingURL, '_blank')
        },
        getIndexing: function () {
            this.api.postData("indexfetch").then((res) => {
                console.log(res.data);
                this.images = res.data.indexingList;
            },
                (err) => {
                    console.log(err);
                }
            );
        }
    },
    mounted: function () {
        this.getIndexing()
    }
};
</script>
<style scoped>
.image-wrapper {
    flex: 0 0 50%;
    /* Each image takes up 50% of the row, so 2 images per row */
    box-sizing: border-box;
    /* Ensures padding and border are included in the width */
    padding: 5px;
    /* Adjust padding as needed */
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-wrapper img {
    max-width: 100%;
    /* Ensures images are responsive */
    height: auto;
    /* Maintains aspect ratio */
    margin-bottom: 10px;
}
.image-container {
    display: flex;
    flex-wrap: wrap;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 2px;
}
</style>