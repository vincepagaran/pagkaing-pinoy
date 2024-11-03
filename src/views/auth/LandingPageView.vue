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

const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
])
</script>

<template>
  <v-card>
    <v-app>
      <!-- App Bar -->
      <v-app-bar app dense class="navbar">
        <v-toolbar-title>
          <img src="" class="logo" /> Pagkaing<span>Pinoy</span>
        </v-toolbar-title>

        <!-- Desktop Links (shown on large screens) -->
        <v-spacer></v-spacer>
        <v-row class="d-flex align-center" justify="space-around">
          <v-tabs
            v-model="tab"
            align-tabs="center"
            color="deep-purple-accent-4"
          >
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
        <div class="hero">
          <div class="content">
            <h4>Authentic Filipino Recipes</h4>
            <h1>Welcome to <span>Pagkaing Pinoy!</span></h1>
            <div class="button">
              <v-btn @click="navigateTo('/recipe')" class="view-dishes-btn"
                >View Dishes</v-btn
              >
            </div>
          </div>
        </div>

        <router-view></router-view>
      </v-main>
    </v-app>
  </v-card>
  <v-footer class="bg-green-lighten-3 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
  </v-footer>
</template>

<style scoped>
.profile-avatar {
  cursor: pointer;
  border: 2px solid #ffffff;
}

.navbar {
  background-color: #213032; /* Change navbar color */
  color: white;
}

.logo {
  height: 40px; /* Adjust the logo size */
  margin-right: 10px;
}

.v-btn {
  color: white !important;
}

.v-app-bar-nav-icon {
  color: white;
}

.v-navigation-drawer {
  background-color: #213032;
}

.navbar span {
  color: #e74c3c;
}

/* White text for navigation drawer items */
.white-text {
  color: white;
}

.list-item {
  transition: background-color 0.3s;
}

.list-item:hover {
  background-color: #e74c3c; /* Change background on hover */
}

/* Hero section styling */
.hero {
  height: 100vh; /* Full height for the hero section */
  text-align: center;
  padding: 100px 20px;
  background: url('/pics/bg2.jpg'); /* Replace with your background image */
  background-position: center;
  background-size: cover;
}

.hero h1 {
  color: #213032; /* Matching your color scheme */
  font-size: 60px;
  margin: 20px 0;
}

.hero h4 {
  color: black;
  letter-spacing: 2px;
  font-size: 20px;
}

.hero span {
  color: #e74c3c; /* Red highlight color */
}

/* View Dishes button styling */
.view-dishes-btn {
  background-color: #213032; /* Button background color */
  color: white; /* Button text color */
  transition: background-color 0.3s;
}

.view-dishes-btn:hover {
  background-color: #e74c3c; /* Change button background on hover */
}

/* Mobile-specific styling */
@media (max-width: 960px) {
  .navbar .v-toolbar-title {
    font-size: 18px;
  }

  .hero {
    padding: 50px 10px; /* Adjust padding for mobile */
  }
}
</style>
