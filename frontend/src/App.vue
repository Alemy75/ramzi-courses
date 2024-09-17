<script setup lang="ts">
import { onMounted, ref } from "vue";
import { request } from "./request";

const username = ref("");
const password = ref("");

const getUser = async () => {
  await request({
    url: "http://127.0.0.1:8000/api/main/user/",
    method: "GET"
  });
};

const onSubmit = async () => {
  await request({
    url: "http://127.0.0.1:8000/api/main/login/",
    method: "POST",
    data: {
      password: password.value,
      username: username.value
    }
  });

  await getUser();
};

onMounted(() => {
  getUser();
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="username" type="text" />

    <input v-model="password" type="password" />

    <button type="submit">Войти</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, currentColor 10%, transparent);
}
</style>
