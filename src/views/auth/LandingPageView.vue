<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const drawer = ref(false)
const rail = ref(true)
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
  <v-responsive>
    <v-app>
      <!-- App Bar -->
      <v-app-bar app dense class="navbar">
        <v-toolbar-title>
          <img src="" class="logo" /> Pagkaing<span>Pinoy</span>
        </v-toolbar-title>

        <!-- Desktop Links (shown on large screens) -->
        <v-spacer></v-spacer>
        <v-row class="d-flex align-center" justify="space-around">
          <v-tabs v-model="tab" align-tabs="center" color="deep-black-accent-4">
            <v-tab @click="navigateTo('/home')">
              <v-icon left>mdi-home</v-icon>Home
            </v-tab>
            <v-tab @click="navigateTo('/about')">
              <v-icon left>mdi-information</v-icon> About
            </v-tab>
            <v-tab @click="navigateTo('/recipe')">
              <v-icon left>mdi-silverware-fork-knife</v-icon> Dishes
            </v-tab>
            <v-tab @click="navigateTo('/category')">
              <v-icon left>mdi-view-list</v-icon> Categories
            </v-tab>
            <v-tab @click="navigateTo('/bookmark')">
              <v-icon left>mdi-bookmark</v-icon> Cooklater
            </v-tab>
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
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              class="d-flex align-center"
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            @click="navigateTo('/home')"
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>

          <v-list-item
            @click="navigateTo('/about')"
            prepend-icon="mdi-information"
            title="About"
            value="about"
          ></v-list-item>

          <v-list-item
            @click="navigateTo('/recipe')"
            prepend-icon="mdi-silverware-fork-knife"
            title="Dishes"
            value="recipe"
          ></v-list-item>

          <v-list-item
            @click="navigateTo('/category')"
            prepend-icon="mdi-view-list"
            title="Categories"
            value="category"
          ></v-list-item>

          <v-list-item
            @click="navigateTo('/bookmark')"
            prepend-icon="mdi-bookmark"
            title="Cooklater"
            value="bookmark"
          ></v-list-item>
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
      <v-footer class="bg-grey-darken-1 text-center d-flex flex-column">
        <v-divider></v-divider>

        <div>{{ new Date().getFullYear() }} — <strong>COOK</strong></div>
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
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
