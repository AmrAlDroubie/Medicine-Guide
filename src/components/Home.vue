<template>
    <Navbar />
    <Landing />
    <regestrationBox />
</template>


<script>
import Navbar from "./Navbar.vue"
import Landing from "./Landing.vue"
import regestrationBox from "./regestrationBox.vue";
export default {
    name: "Home",
    components: {
        Navbar,
        Landing,
    }
}
</script>


<style></style>./RegestrationBox.vue