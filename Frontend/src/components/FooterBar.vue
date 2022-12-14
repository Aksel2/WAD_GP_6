<template>
  <div class="footer1">
    <p>Made by AkselKaarelErik © 2022</p>
    <p>Last edit: 23.11.2022</p>
  </div>
</template>

<script>
export default {
  name: "footerBar",
  props: {},
};
</script>

<style>
.footer1{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  position: fixed;
   bottom: 0;
   width: 100%;
  height: 100px;
  font-size: 15px;
  background-color: #ccc5b9;
}
</style>
