<template>
  <button class="" @click="openModal">
    <!-- comment icon here -->

    <span class="font-extralight hover:text-blue-500 text-xs text-gray-600"
      >Comment</span
    >
  </button>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["open-modal"]);

const openModal = () => {
  emit("open-modal");
};
</script>
