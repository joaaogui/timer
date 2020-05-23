<template>
    <div class="timer">
        <p id="timespan">{{time}}</p>
        <v-btn color="yellow" class="reset-button" v-on:click="select">Reset</v-btn>
        <v-btn color="yellow" class="reset-button" v-on:click="postTimer">Change to 180</v-btn>
    </div>
</template>

<script>
  import {db, functions} from '@/firebase'

  export default {
    name: "Timer",

    data: () => ({
      time: 0
    }),
    async created() {
      const snapshot = await db.collection('timer').doc('0pIjI4F5JUT6Hqqxy1VZ').get()
      this.time = snapshot.data().time
    },
    methods: {
      select: async function () {
        const resetTimer = await functions.httpsCallable('resetTimer')

        resetTimer().then(result => {
          console.log(result.data)
        })
      },
      postTimer(){
        db.collection('timer').doc('0pIjI4F5JUT6Hqqxy1VZ').update({time: 180})
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
