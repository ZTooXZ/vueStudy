export const mixin = {
  methods: {
    showName(){
      alert(this.name)
    }
  },
  mounted() {
    console.log('加载混合')
  },
}

export const mixin2 = {
  data() {
    return {
      x:100,
      y:200
    }
  },
}