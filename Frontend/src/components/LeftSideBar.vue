<template>
    <div class="sidebar">
        <p>xD</p>
    </div>
  
</template>

<script>
export default {};
</script>

<style>
:root {
  --sidebar-bg-color: grey;
}
.sidebar {
  color: wheat;
  background-color: var(--sidebar-bg-color);

  float: right;
  position: sticky;
  overflow: hidden;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5m;
  display: flex;
  flex-direction: column;
}
</style>