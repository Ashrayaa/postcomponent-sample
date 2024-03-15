<template>
  <div class="flex flex-col gap-4 bg-white p-4 fixed w-80 m-14 backdrop-blur-2xl">
    <div class="flex justify-between items-center">
      <h2 class="text-sm ml-4 font-semibold text-start">Comment</h2>
      <button class="mr-4" @click="closeModal">&times;</button>
    </div>

    <div class="h-[1px] w-full bg-gray-200"></div>
    <textarea
      id="myTextarea"
      v-model="textareaValue"
      rows="6"
      class="rounded-lg m-4 border-blue-500 border-2 outline-none p-3"
    ></textarea>
    <div class="h-[1px] w-full bg-gray-200"></div>
    <div class="flex justify-between px-4">
      <button
        @click="cancel"
        class="px-4 text-xs py-2 rounded-md bg-white text-black border border-gray-200"
      >
        Cancel
      </button>
      <button @click="addComment" class="px-4 text-xs py-2 rounded-md bg-blue-700 text-white">
        Reply
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['close-modal', 'add-comment']);

const textareaValue = ref('');

const closeModal = () => {
  emit('close-modal');
};

const cancel = () => {
  closeModal();
};

const addComment = () => {
  emit('add-comment');
};
</script>
