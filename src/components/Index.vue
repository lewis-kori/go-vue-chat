<template>
  <div class="hello">
    <ChatHistory :messages="chatHistory" />
    <ChatInput @send="send" style="margin-top: 2rem;" />
    <Footer />
  </div>
</template>

<script>
import { connect, sendMsg } from "../api";
import ChatHistory from "./ChatHistory/ChatHistory.vue";
import ChatInput from "./ChatInput/ChatInput.vue";
import Footer from './Footer.vue'
export default {
  name: "Index",
  components: {
    ChatHistory,
    ChatInput,
    Footer,
  },
  data() {
    return {
      chatHistory: [],
    };
  },
  created() {
    connect((msg) => {
      console.log("New message");
      this.chatHistory = [...this.chatHistory, msg];
    });
  },
  methods: {
    send(value) {
      sendMsg(value);
    },
  },
};
</script>
