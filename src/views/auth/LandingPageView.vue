<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const drawer = ref(false)
const tab = ref(null)
const router = useRouter()

const user = reactive({
  initials: 'JD',
  fullName: 'John Doe',
  email: 'john.doe@doe.com',
})

function navigateTo(route) {
  router.push(route)
  drawer.value = false // Close the drawer after navigating
}
function handleLogout() {
  // Add logout logic here, like clearing user data or redirecting to login page
  console.log('Logging out...')
  router.push('/') // Redirect to login or home page
}
</script>

<template>
  <v-responsive>
    <v-app>
      <v-card>
        <v-toolbar>
          <v-toolbar-title>Cook APP</v-toolbar-title>

          <v-text-field
            v-model="searchQuery"
            placeholder="Search..."
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            dense
            outlined
            @click:append="performSearch"
          />

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-avatar>
                  <v-img alt="John" src="/pics/self.jpeg"></v-img>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                  <h3>{{ user.fullName }}</h3>
                  <p class="text-caption mt-1">{{ user.email }}</p>
                  <v-divider class="my-3"></v-divider>

                  <v-list density="compact" nav>
                    <v-list-item
                      prepend-icon="mdi-folder"
                      title="My Files"
                      value="myfiles"
                    ></v-list-item>
                    <v-list-item
                      prepend-icon="mdi-account-multiple"
                      title="Shared with me"
                      value="shared"
                    ></v-list-item>
                    <v-list-item
                      prepend-icon="mdi-star"
                      title="Starred"
                      value="starred"
                    ></v-list-item>

                    <v-divider class="my-2"></v-divider>
                    <!-- Divider to separate logout option -->

                    <v-list-item
                      prepend-icon="mdi-logout"
                      title="Logout"
                      value="logout"
                      @click="handleLogout"
                    ></v-list-item>
                  </v-list>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>

          <template v-slot:extension>
            <v-container class="justify-center">
              <v-tabs v-model="tab" align-tabs="title">
                <v-tab :value="1" @click="navigateTo('/home')">
                  <v-icon left>mdi-home</v-icon>Home
                </v-tab>
                <v-tab :value="2" @click="navigateTo('/about')">
                  <v-icon left>mdi-information</v-icon> About
                </v-tab>
                <v-tab :value="3" @click="navigateTo('/recipe')">
                  <v-icon left>mdi-silverware-fork-knife</v-icon> Dishes
                </v-tab>
                <v-tab :value="4" @click="navigateTo('/category')">
                  <v-icon left>mdi-view-list</v-icon> Categories
                </v-tab>
                <v-tab :value="5" @click="navigateTo('/bookmark')">
                  <v-icon left>mdi-bookmark</v-icon> Cooklater
                </v-tab>
              </v-tabs>
            </v-container>
          </template>
        </v-toolbar>
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
      </v-card>
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
