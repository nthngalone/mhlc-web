<template>
    <v-container class="newsletter-signup">
        <h2>Newsletter Signup</h2>
        <hr />
        <NewsletterSignupForm />
      </v-container>
</template>

<script setup>
  import NewsletterSignupForm from '@/components/NewsletterSignupForm.vue'
</script>

<style scoped>
  .v-container.newsletter-signup h2 { margin-top: 10px; margin-bottom: 10px; }
  .v-container.newsletter-signup hr { margin-bottom: 20px; }
</style>
