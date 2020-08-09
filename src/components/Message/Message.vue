<template>
  <div class="Message">{{ message.body }}</div>
</template>

<script>
export default {
  name: "Message",
  props: ["inputMessage"],
  computed: {
    message() {
      return JSON.parse(this.inputMessage);
    },
  },
};
</script>

<style lang="scss">
.Message {
  display: block;
  background-color: white;
  margin: 10px auto;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  border-radius: 5px;
  clear: both;

  &.me {
    color: white;
    float: right;
    background-color: #328ec4;
  }
}
</style>
