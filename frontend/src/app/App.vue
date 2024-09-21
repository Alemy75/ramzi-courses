<script setup lang="ts">
import { onMounted, ref } from "vue";
import { request } from "@/shared/api";

const username = ref("");
const password = ref("");

const getUser = async () => {
  await request({
    url: "/api/main/user/",
    method: "GET"
  });
};

const onSubmit = async () => {
  const { data } = await request({
    url: "http://127.0.0.1:8000/api/main/login/",
    method: "POST",
    data: {
      password: password.value,
      username: username.value
    }
  });

  localStorage.setItem("accesstoken", data.access);
  localStorage.setItem("refreshtoken", data.refreshtoken);

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
