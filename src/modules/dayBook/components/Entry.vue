<template>
  <div @click=" $router.push({ name: 'entry', params:{id: entry.id} }) "
    class="entry-container mb-3 pointer p-2 mx-2"
  >
    <div class="entry-title d-flex">
      <small>
        <span class="text-muted text-sm"> {{day}} <strong>{{month}}</strong> {{yearDay}} </span>
      </small>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
import getDate from '../helpers/getDate'

export default {
  props:{
    entry:{
      type: Object,
      required: true
    }
  },
  computed:{
    shortText(){
      return ( this.entry.text.length >= 130 )
        ? this.entry.text.substring(0, 130) + '...'
        : this.entry.text
    },
    day(){
      const { day } = getDate( this.entry.date )
      return day
    },
    month(){
      const { month } = getDate( this.entry.date )
      return month
    },
    yearDay(){
      const { yearDay } = getDate( this.entry.date )
      return yearDay
    },
  }
}
</script>

<style lang="scss" scoped>
 .entry-container{
  background-color: #fff;
  border-bottom: 1px solid #5c5c5c5c;
  transition: 0.2s all ease-in;
  padding: 13px 5px;

  &:hover {
    background: lighten($color: gray, $amount: 45);
    transition: 0.2s all ease-in;
    border-radius: .65rem;
  }

  .entry-description{
    font-size: 12px;
  }

 }
</style>