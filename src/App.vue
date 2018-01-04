<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/time-entries">计划列表</router-link>
          </li>
        </ul>
      </div>
    </nav>


    <!--除了我们的navbar以外，我们还需要一个.container去放我们其余需要展示的信息。
    并且在这里我们要放一个router-view标签，vue-router的切换就是通过这个标签开始显现的。-->
    <div class="container">
      <div class="col-sm-3">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar.vue'

  export default {
    name: 'app',
    components: {
      Sidebar
    }
  }
</script>
