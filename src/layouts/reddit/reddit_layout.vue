<style scoped lang="scss" src="./reddit_layout.scss"></style>
<script lang="ts" src="./reddit_layout.ts">
</script>
<template>
  <div class="[ reddit_layout ][ grid ]">
    <!-- Header -->
    <div class="[ h-12 ] [ bg-white ]">

      <!-- If user logged in -->
      <div v-if="currentUser.username" class=" flex flex-row">

        Logged In
      </div>

      <!-- If no user logged in -->
      <div v-else>

        Logged Out
      </div>

    </div>

    <!-- Body -->
    <div class="[ grid ] [ bg-reddit ] ">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

  <!-- Footer -->
    <!-- <div class="[ h-12 ]">
                                                    <AppFooter customProp="Footer" />
                                                  </div> -->
  </div>
</template>