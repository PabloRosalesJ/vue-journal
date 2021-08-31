<template>
  <div @click=" $router.push({ name: 'entry', params:{id: 10} }) "
    class="entry-container mb-3 pointer p-2 mx-2"
  >
    <div class="entry-title d-flex">
      <small>
        <span class="text-muted text-sm">29</span> -
        <span class="text-muted text-sm">Agoto</span> - 
        <span class="text-muted text-sm">2021</span>
      </small>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempore, eligendi vitae eum cum labore! Hic praesentium aperiam, et, vel voluptate doloremque quam beatae ex nobis rem quidem, atque pariatur?
    </div>
  </div>
</template>

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