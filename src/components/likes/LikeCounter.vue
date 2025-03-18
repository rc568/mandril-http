<template>

  <div v-if="isLoading" class="text-purple-800 animate-pulse">
    Loading ...
  </div>

  <button v-else-if="likeCount === 0" @click="likePost"
    class="text-base text-purple-50 px-3 py-0.5 rounded-md bg-amber-600 cursor-pointer hover:bg-amber-700 transition-colors">
    Like this post
  </button>

  <button
    class="text-base text-purple-50 px-3 py-0.5 rounded-md bg-amber-600 cursor-pointer hover:bg-amber-700 transition-colors"
    v-else @click="likePost">
    Likes:
    <span class="text-inherit pl-6">
      {{ likeCount }}
    </span>
  </button>

</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import confetti from 'canvas-confetti';
import debounce from 'lodash.debounce';

interface Props {
  postId: string
}

const props = defineProps<Props>();
const likeCount = ref(0)
const likeClicks = ref(0)
const isLoading = ref(true)

watch(likeCount, debounce(() => {
  fetch(`/api/likes/${props.postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ likes: likeClicks.value })
  })

  likeClicks.value = 0

}, 500))

const likePost = () => {
  likeCount.value++
  likeClicks.value++

  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2
    }
  })
}

const getCurrentLikes = async () => {
  const resp = await fetch(`/api/likes/${props.postId}`)
  if (!resp.ok) return

  const data = await resp.json()

  likeCount.value = data.likes
  isLoading.value = false
}

getCurrentLikes()
</script>