<template>
    <div>
      <router-link :to="{name:'tel'}">TEL</router-link>
      <router-link :to="{name:'address'}">Address</router-link>
      <router-link :to="{name:'member',params:{id:18}}">Member</router-link>
      <router-link to="/info/all">Show All</router-link>
      <router-view/>
      <router-view name="a"/>
      <router-view name="b"/>
      <router-view name="c"/>
    </div>
</template>