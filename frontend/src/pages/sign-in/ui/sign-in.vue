<script setup lang="ts">
import {
  VContainer,
  VSheet,
  VTextField,
  VForm,
  VBtn
} from "vuetify/components";
</script>

<template>
  <VContainer>
    <VSheet
      max-width="600"
      class="mx-auto px-8 py-8"
      rounded="lg"
      color="surface"
    >
      <p class="text-h4">Авторизация</p>

      <VForm class="mt-4">
        <VTextField counter maxlength="100" label="Логин" />

        <VTextField class="mt-2" counter maxlength="100" label="Пароль" />

        <VBtn class="mt-2" color="primary" block>Войти</VBtn>
      </VForm>
    </VSheet>
  </VContainer>
</template>
