<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const router = useRouter()
const tab = ref(1)

function navigateTo(route) {
  router.push(route)
  drawer.value = false // Close the drawer after navigating
}
</script>

<template>
  <v-responsive>
    <v-app>
      <v-card>
        <v-toolbar
          height="80"
          style="background-color: #1e1e1e; color: #ffffff"
        >
          <v-toolbar-title class="d-flex align-self-center">
            <v-avatar size="60">
              <!-- Set size of v-avatar here, e.g., 40 pixels -->
              <v-img
                src="/pics/logo2.webp"
                alt="FlavorSync Logo"
                max-width="100%"
                max-height="100%"
              ></v-img>
            </v-avatar>
            <span class="ml-2 font-weight-bold">FlavorSync</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tabs
            v-model="tab"
            align-tabs="title"
            class="justify-center"
            style="font-family: 'Poppins', sans-serif"
          >
            <v-tab :value="1" @click="navigateTo('/')"> Home </v-tab>
            <v-tab :value="2" @click="navigateTo('/about')">
              About FlavorSync
            </v-tab>
            <v-tab :value="2" @click="navigateTo('/login')">
              <v-icon left>mdi-account</v-icon>Sign up/Log in
            </v-tab>
          </v-tabs>
          <v-spacer></v-spacer>
          <v-btn icon @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-toolbar>

        <!-- Main Content Placeholder -->
        <v-main>
          <div class="hero">
            <div class="content">
              <h4>Discover New Recipes</h4>
              <h1>Welcome to <span>FlavorSync</span>!</h1>
              <div class="button">
                <v-row justify="center">
                  <v-btn
                    @click="navigateTo('/recipe')"
                    class="view-dishes-btn"
                    large
                  >
                    Start Exploring Recipes
                  </v-btn>
                </v-row>
              </div>
            </div>
          </div>

          <!-- Featured Sections -->
          <v-container fluid class="featured-section">
            <v-row>
              <!-- Popular Recipes Card -->
              <v-col cols="12" md="4">
                <v-card class="pa-5" outlined>
                  <v-icon color="deep-orange" large class="mb-3"
                    >mdi-fire</v-icon
                  >
                  <h2 class="text-h5">Popular Recipes</h2>
                  <p>
                    Check out some of the most popular recipes that our
                    community loves to cook and share.
                  </p>
                  <v-btn
                    @click="navigateTo('/popular')"
                    color="deep-orange"
                    text
                  >
                    View Popular Recipes
                  </v-btn>
                </v-card>
              </v-col>

              <!-- New Arrivals Card -->
              <v-col cols="12" md="4">
                <v-card class="pa-5" outlined>
                  <v-icon color="blue" large class="mb-3">mdi-new-box</v-icon>
                  <h2 class="text-h5">New Arrivals</h2>
                  <p>
                    Discover the latest recipes added to our collection,
                    bringing fresh ideas to your kitchen.
                  </p>
                  <v-btn @click="navigateTo('/new-arrivals')" color="blue" text>
                    Explore New Recipes
                  </v-btn>
                </v-card>
              </v-col>

              <!-- Cuisine Types Card -->
              <v-col cols="12" md="4">
                <v-card class="pa-5" outlined>
                  <v-icon color="green" large class="mb-3">mdi-earth</v-icon>
                  <h2 class="text-h5">Explore by Cuisine</h2>
                  <p>
                    From Italian to Filipino, explore dishes from different
                    cuisines and broaden your culinary experience.
                  </p>
                  <v-btn @click="navigateTo('/cuisines')" color="green" text>
                    Browse Cuisines
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <router-view></router-view>
        </v-main>
        <v-footer class="bg-grey-darken-1 text-center d-flex flex-column">
          <v-divider></v-divider>

          <!-- Custom Footer Content -->
          <p>© {{ new Date().getFullYear() }} — <strong>FlavorSync</strong></p>
          <p>Bringing the world of flavors to your kitchen</p>
        </v-footer>
      </v-card>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.hero {
  height: 90vh; /* Full height for the hero section */
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(to bottom, #a3b8c8, #2c3e50);
  color: #ffffff; /* Light text */
}

.hero h1 {
  color: #213032; /* Dark, contrasting color for the main heading */
  font-size: 60px;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Adding a subtle shadow to the heading text */
}

.hero h4 {
  color: #f1f1f1; /* Lighter color for subheadings */
  letter-spacing: 2px;
  font-size: 20px;
}

.hero span {
  color: #3498db; /* Red highlight color */
}

/* View Dishes button styling */
.view-dishes-btn {
  background: rgba(64, 64, 64, 0.15);
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(25px);
  text-align: center;
  color: white;
  width: 400px;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.15);
}

.view-dishes-btn:hover {
  background-color: #16a085; /* Change button background on hover */
}

.v-footer {
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 20px 0;
}

.v-footer .v-btn {
  margin: 5px;
}

.v-footer .v-icon {
  margin: 0 10px;
  cursor: pointer;
}
</style>
