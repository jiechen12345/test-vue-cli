<!--A'son-->
<template>
    <div class="card" style="width: 10rem;">
        <div class="card-body">
            <h5 class="card-title">A'son </h5>
            <p class="card-text">{{ msg }} - {{ userInfo.name }}-{{ userInfo.age }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<script>
export default {
    inject: ['msg', 'userInfo']

}
</script>

<style></style>
