<template>
    <div class="timer">
        <p id="timespan">{{time}}</p>
        <v-btn color="yellow" class="reset-button" v-on:click="select">Reset</v-btn>
    </div>
</template>

<script>
  export default {
    name: "Timer",

    data: () => ({
      time: 0
    }),
    methods: {
      select: function () {
        console.log("borabora")
      }
    }
  }
</script>

<style scoped>
    .timer {
        text-align: center;
        font-size: 150px;
    }
</style>
