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
import { actions } from "astro:actions";

interface Props {
  postId: string
}

const props = defineProps<Props>();
const likeCount = ref(0)
const likeClicks = ref(0)
const isLoading = ref(true)

watch(likeCount, debounce(async () => {
  await actions.updateLikes({
    postId: props.postId,
    increment: likeClicks.value
  })

  // fetch(`/api/likes/${props.postId}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ likes: likeClicks.value })
  // })

  likeClicks.value = 0

}, 500))

const likePost = async () => {
  likeCount.value++
  likeClicks.value++

  const { data, error } = await actions.getGreeting({
    age: 29,
    name: 'isaaaac',
    isActive: true,
  })

  if (error) {
    console.error(error)
  }

  console.log(data);


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

  const { data, error } = await actions.getLikes(props.postId)
  // const resp = await fetch(`/api/likes/${props.postId}`)
  // if (!resp.ok) return
  // const data = await resp.json()

  if (error) {
    console.error(error)
  }

  likeCount.value = data!.likes
  isLoading.value = false
}

getCurrentLikes()
</script>