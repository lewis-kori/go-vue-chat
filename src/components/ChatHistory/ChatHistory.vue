<template>
  <div>
    <p v-for="(message, index) in messages" :key="index">
      <Message :inputMessage="message.data" />
    </p>
  </div>
</template>

<script>
import Message from '../Message/Message.vue'
export default {
  name: "ChatHistory",
  components: {
    Message
  },
  props: {
    messages: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.ChatHistory {
  background-color: #f7f7f7;
  margin: 0;
  padding: 20px;
  h2 {
    margin: 0;
    padding: 0;
  }
}
</style>