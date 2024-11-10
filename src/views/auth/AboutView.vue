<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const drawer = ref(false)
const router = useRouter()
const showSearch = ref(false)
const searchQuery = ref('')
const tab = ref(1)

function toggleSearch() {
  showSearch.value = !showSearch.value
}

function performSearch() {
  console.log('Searching for:', searchQuery.value)
  // You can add your search logic here
}

const user = reactive({
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
          </v-toolbar-title>

          <v-icon v-if="!showSearch" @click="toggleSearch"
              >mdi-magnify</v-icon
            >

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
           <h1>Hi</h1>
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
.v-toolbar-title {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 24px;
  color: #333;
}
</style>
