<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const drawer = ref(false)
const router = useRouter()

const user = reactive({
  initials: 'JD',
  fullName: 'John Doe',
  email: 'john.doe@doe.com',
})

function toggleDrawer() {
  drawer.value = !drawer.value
}

function navigateTo(route) {
  router.push(route)
  drawer.value = false // Close the drawer after navigating
}
</script>

<template>
    <v-app>
    <!-- App Bar -->
    <v-app-bar app dense class="navbar">
      <v-toolbar-title>
        <img src="" class="logo" /> Pagkaing<span>Pinoy</span>
      </v-toolbar-title>

      <!-- Desktop Links (shown on large screens) -->
      <v-spacer></v-spacer>
      <v-row class="d-flex align-center" justify="space-around">
        <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
          <v-tab @click="navigateTo('/home')">Home</v-tab>
          <v-tab @click="navigateTo('/about')">About</v-tab>
          <v-tab @click="navigateTo('/recipe')">Dishes</v-tab>
          <v-tab @click="navigateTo('/category')">Categories</v-tab>
          <v-tab @click="navigateTo('/bookmark')">Cooklater</v-tab>
        </v-tabs>
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar color="brown" size="large">
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <span class="text-h5">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn text color="black"> Edit Account </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn text color="black" @click="navigateTo('/')"
                  >Logout</v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-row>

      <!-- Mobile Menu Icon (shown on small screens) -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="toggleDrawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Navigation Drawer (visible on small screens) -->
    <v-navigation-drawer v-model="drawer" temporary app right>
      <v-list>
        <v-list-item @click="navigateTo('/home')" class="white-text"
          >Home</v-list-item
        >
        <v-list-item @click="navigateTo('/about')" class="white-text"
          >About</v-list-item
        >
        <v-list-item @click="navigateTo('/recipe')" class="white-text"
          >Dishes</v-list-item
        >
        <v-list-item @click="navigateTo('/category')" class="white-text"
          >Categories</v-list-item
        >
        <v-list-item @click="navigateTo('/bookmark')" class="white-text"
          >Cooklater</v-list-item
        >
        <v-list-item @click="navigateTo('/')" class="white-text"
          >Logout</v-list-item
        >
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content Placeholder -->
    <v-main>

      <router-view></router-view>
    </v-main>
  </v-app>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>