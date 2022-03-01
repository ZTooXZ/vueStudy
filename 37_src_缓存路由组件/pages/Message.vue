<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }} </router-link
        >&nbsp;&nbsp;
        <button @click="pushShow(m)">push跳转</button>
        <button @click="replaceShow(m)">replace跳转</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"
import { nanoid } from "nanoid"
export default {
  name: "Message",
  data() {
    return {
      messages: [{ id: "", title: "" }],
    }
  },
  methods: {
    getTitle() {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          this.messages[0].id = nanoid()
          this.messages[0].title = response.data
        },
        (error) => {
          alert(error.message)
        }
      )
    },
    pushShow(m) {
      this.$router.push({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      })
    },
  },
  mounted() {
    this.getTitle()
    console.log(this)
  },
}
</script>

<style></style>
