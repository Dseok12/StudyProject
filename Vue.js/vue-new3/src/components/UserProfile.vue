<template>
  <div class='userprofile'>
    <div class="wrap">
      <div class="inner">
        <div class="user_container">
            <div class="user">
              프로필
            </div>
            <div class="link_box">
              <p>{{ info.id }}</p>
              <!-- <router-link :to="`/user/${info.user}`" class="user_desc">
                {{ info.id }}
              </router-link> -->
              <div class="time">
                {{ info.created }}
              </div>
            </div>
            <!-- 제목 -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userprofile',
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
.user_container{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .user{
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 15px;
  }
  .link_box{
    margin-right: 15px;
    .user_desc{
      display: block;
      font-weight: 600;
      color: #414141;
      margin-bottom: 10px;
    }
    .time{
      font-size: 12px;
    }
  }
}
.title{
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 20px;
}
</style>
