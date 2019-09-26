<template>
  <div class="card">
    <!-- 左侧文字 -->
    <div class="card-left">
      <div class="post-title">
        hao123是汇集全网优质网址及资源的中文上网导航,
        hao123是汇集全网优质网址及资源的中文上网导航
        hao123是汇集全网优质网址及资源的中文上网导航
      </div>
      <p class="post-info">
        <span>火星时报</span>
        <span>100跟帖</span>
      </p>
    </div>
    <div class="card-img">
      <img
        src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1569488814&di=1d8852714981dc51fe39e6ab10fb818f&src=http://b-ssl.duitang.com/uploads/item/201706/11/20170611211241_siFHV.thumb.700_0.jpeg"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.card {
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;

  .card-left {
    flex: 1;

    .post-title {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .post-info{
        font-size:12px;
        color:#999;

    }
  }
  .card-img{
      img{
          display: block;
          width: 120/360*100vw;
          height: 80/360*100vw;
          object-fit: cover;

      }
  }
}
</style>