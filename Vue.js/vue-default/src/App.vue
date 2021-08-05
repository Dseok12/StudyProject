<template>
<div>
  <div>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/basic">Basic</router-link> |
        <router-link to="/databinding">DataBinding</router-link> |
        <router-link to="/databindinghtml">DataBindingHtml</router-link> |
        <router-link to="/example">DataBindingInputText</router-link> |
        <router-link to="/example02">Select</router-link> |
        <router-link to="/example03">Attribute</router-link> |
        <router-link to="/class">Class</router-link> |
        <router-link to="/randering">Randering</router-link> |
        <router-link to="/randering02">Randering02</router-link> |
        <router-link to="/event">Event</router-link> |
        <router-link to="/computed">Computed</router-link> |
        <router-link to="/watch">Watch</router-link> |
        <router-link to="/exercise">Exercise</router-link> |
        <router-link to="/save">save</router-link> |
        <router-link to="/serverdata">ServerData</router-link> |
    </div>
    <div id="nav2">
      <router-link to="/othercomponent">OtherComponent</router-link> |
      <router-link to="/othercomponent02">OtherComponent02</router-link> |
      <router-link to="/othercomponent03">OtherComponent03</router-link> |
      <router-link to="/othercomponent04">OtherComponent04</router-link> |
      <router-link to="/othercomponent05">OtherComponent05</router-link> |
      <router-link to="/othercomponent06">OtherComponent06</router-link> |
      <router-link to="/slot01">Slot-Modal-Layout</router-link> |
      <router-link to="/slot02">Slot-Use-Modal-Layout</router-link> |
      <router-link to="/provideinject">ProvideInject</router-link> |
      <router-link to="/mixintest">MixinTest</router-link> |
    </div>
    <div id="nav2">
      <router-link to="/compositionapi">CompositionAPI</router-link> |
      <router-link to="/compositionapiprovideinjection">CompositionAPI Provide Injection</router-link> |
      <router-link to="/customdirective">Custom Directive</router-link> |
      <router-link to="/plugins">Plugins</router-link> |
      <router-link to="/storeaccess">StoreAccess</router-link> |
      <router-link to="/kakaologin">KakaoLogin</router-link> |
      <router-link to="/naverlogin">NaverLogin</router-link> |
    </div>
    <router-view/>
  </div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

div{
  padding: 30px;
  margin-top: -20px;
}
div a{
  font-weight: bold;
  color: #2c3e50;
}
div a.router-link-exact-active{
  color: #42b983;
}
#nav2{
  margin-top: -30px;
}
</style>
