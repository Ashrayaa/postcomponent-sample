<template>
  <main class="flex flex-col">
    <nav class="h-8 border-b border-gray-300 pb-1 mr-4 w-full"></nav>
    <div class="grid grid-flow-col grid-cols-3 ">
      <div class="w-1/2 border-r border-gray-300 h-[100v]">Sidebar</div>
      <div
        class="flex h- flex-col font-Roboto border border-black border-solid rounded-lg m-10 w-[460px] py-4 backdrop-blur-md"
      >
        <ProfileComponent />
        <PostContent />
        <div class="flex justify-end m-4">
          <!-- <p class="text-gray-600 text-[10px]">💬 John Nelson Caampued and {{ commentCount }} others liked</p> -->
          <p class="text-gray-600 text-[10px]">{{ commentCount }} Comments</p>
        </div>
        <div class="h-[1px] w-full bg-gray-200"></div>
        <div class="flex justify-around pt-8">
          <like-button />
          <CommentButton @open-modal="openModal" />
          <repost-button />
        </div>
        <!-- <comment-modal/> -->
        <ModalComment
          v-if="showModal"
          @close-modal="closeModal"
          @add-comment="addComment"
        />
      </div>
    </div>
  </main>
</template>

<script>
import CommentButton from "./components/CommentButton.vue";
import ModalComment from "./components/ModalComment.vue";
import LikeButton from "./components/LikeButton.vue";
import PostContent from "./components/PostContent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import RepostButton from "./components/RepostButton.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    ProfileComponent,
    PostContent,
    LikeButton,
    RepostButton,
    CommentButton,
    ModalComment,
  },

  setup() {
    const showModal = ref(false);
    const commentCount = ref(0);

    const openModal = () => {
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const addComment = () => {
      commentCount.value++;
      closeModal();
    };
    return { showModal, openModal, closeModal, commentCount, addComment };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
