<template>
  <div class="ChatInput">
    <input @keydown.enter="send" ref="chatInput" placeholder="Type a message... Hit enter to send" />
  </div>
</template>

<script>
export default {
  name: "ChatInput",
  methods: {
    send() {
      let value = this.$refs.chatInput.value;
      this.$emit('send', value);
      this.$refs.chatInput.value = '';
    },
  },
};
</script>

<style lang="scss">
.ChatInput {
  width: 95%;
  display: block;
  margin: auto;

  input {
    padding: 10px;
    margin: 0;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 98%;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  }
}
</style>
