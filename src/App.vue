<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="d-flex flex-column align-items-start">
          <a class="navbar-brand" href="/">
            <img src="@/assets/logo01.png" alt="Logo" height="25">
          </a>
          <div class="navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/aa" active-class="active">Shipment Detail</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/bb" active-class="active">Cargo Tracking</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/cc" active-class="active">Statistics Report</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/dd" active-class="active">ISF Status</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-center" to="/ee" active-class="active">Shipments
                  Status<br>Update</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.navbar {
  background-color: #e6f2e6;
}

.nav-link {
  color: #006400;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
}

.nav-link:hover {
  background-color: #c1e1c1;
  color: #004d00;
}

.nav-item .active {
  background-color: #a9d6a9;
  box-shadow: inset 0px 3px 5px rgba(0, 0, 0, 0.2);
  /* 按下效果 */
  color: white;

}

.text-center {
  text-align: center;
}
</style>
