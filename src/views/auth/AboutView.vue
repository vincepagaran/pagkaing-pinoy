<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const router = useRouter()
const tab = ref(2)

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
            <v-tab :value="3" @click="navigateTo('/login')">
              <v-icon left>mdi-account</v-icon>Sign up/Log in
            </v-tab>
          </v-tabs>
          <v-spacer></v-spacer>
          <v-btn icon @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-toolbar>

        <!-- Main Content Placeholder -->
        <v-main class="about-main">
          <v-container class="about-page" fluid>
            <!-- About Title and Introduction -->
            <v-row>
              <v-col cols="12">
                  <h1 class="text-center text-h3 mb-5">About FlavorSync</h1>
                  <p class="text-center mb-5">
                    FlavorSync is your global guide to the world of cooking. Our
                    mission is to make every recipe in the world accessible,
                    shareable, and easy to follow. Whether you’re looking to
                    recreate family favorites, experiment with new flavors, or
                    learn the culinary traditions of different cultures,
                    FlavorSync is here to support your journey.
                  </p>
              </v-col>
            </v-row>

            <!-- Mission Statement -->
            <v-row class="mt-5">
              <v-col cols="12" md="6" class="d-flex align-center">
                <v-img
                  src="/pics/mission.jpg"
                  alt="Our Mission"
                  max-width="100%"
                ></v-img>
              </v-col>
              <v-col cols="12" md="6">
                <h2 class="text-h5 mb-3">Our Mission</h2>
                <p>
                  At FlavorSync, we aim to bring the joy of cooking and the
                  diversity of global cuisines to every kitchen. We believe that
                  food has the power to connect people, and our mission is to
                  make recipes from around the world accessible to everyone.
                </p>
                <ul>
                  <li>Empowering cooks to explore global flavors</li>
                  <li>Providing easy-to-follow instructions for all levels</li>
                  <li>Encouraging a community of sharing and learning</li>
                </ul>
              </v-col>
            </v-row>

            <!-- Key Features -->
            <v-container class="key-features" fluid>
              <v-row class="justify-center">
                <v-col cols="12">
                  <h2 class="text-center text-h5 mb-4">
                    Key Features of FlavorSync
                  </h2>
                </v-col>

                <v-col cols="12" md="4" class="d-flex justify-center">
                  <v-card class="pa-4 feature-card" outlined>
                    <v-icon large class="mb-3" color="purple"
                      >mdi-book-open-variant</v-icon
                    >
                    <h3 class="text-h6">Extensive Recipe Library</h3>
                    <p>
                      Explore an extensive and growing library of recipes across
                      cuisines, dietary preferences, and skill levels.
                    </p>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="d-flex justify-center">
                  <v-card class="pa-4 feature-card" outlined>
                    <v-icon large class="mb-3" color="green">mdi-food</v-icon>
                    <h3 class="text-h6">Personalized Recommendations</h3>
                    <p>
                      Get customized recipe suggestions based on your taste,
                      preferences, and cooking history.
                    </p>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="d-flex justify-center">
                  <v-card class="pa-4 feature-card" outlined>
                    <v-icon large class="mb-3" color="orange"
                      >mdi-account-group</v-icon
                    >
                    <h3 class="text-h6">Community Sharing</h3>
                    <p>
                      Share your own recipes, connect with other food lovers,
                      and discover culinary ideas from our community.
                    </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <!-- Vision Statement -->
            <v-row class="mt-5">
              <v-col cols="12" md="6">
                <h2 class="text-h5 mb-3">Our Vision</h2>
                <p>
                  We envision a world where culinary knowledge is accessible to
                  everyone, enabling people to experience the richness of other
                  cultures through food. FlavorSync aspires to become a trusted
                  resource that inspires creativity and connects communities
                  through the universal language of food.
                </p>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center">
                <v-img
                  src="/pics/vision.jpg"
                  alt="Our Vision"
                  max-width="100%"
                ></v-img>
              </v-col>
            </v-row>

            <!-- Call to Action -->
            <v-row class="text-center mt-8">
              <v-col cols="12">
                <h2 class="text-h5 mb-4">Join Us on this Culinary Journey</h2>
                <p class="mb-5">
                  Sign up today to save your favorite recipes, connect with a
                  vibrant food community, and unlock the endless possibilities
                  of FlavorSync.
                </p>
                <v-btn
                  @click="navigateTo('/register')"
                  color="deep-orange"
                  large
                  outlined
                >
                  Get Started with FlavorSync
                </v-btn>
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
.about-main {
  /* Background gradient similar to the homepage */
  background: linear-gradient(to bottom, #a9c6d7, #34495e);
  color: #ffffff;
  padding: 60px 20px; /* Adjust padding as needed */
  min-height: 80vh; /* Set height to maintain full view on large screens */
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-page h1,
.about-page h2,
.about-page p {
  color: #f1f1f1; /* Consistent color for text */
}

.about-page h1 {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Shadow for main headings */
}

.about-page h2 {
  font-size: 26px;
  margin-bottom: 15px;
  color: #213032; /* Contrasting color */
  font-weight: 600;
}

.about-page p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.about-page ul {
  padding-left: 20px;
}

.about-page li {
  font-size: 16px;
  margin-bottom: 10px;
}

.key-features {
  padding: 20px;
}

.feature-card {
  min-height: 250px;
  max-width: 320px;
  margin: 10px;
  text-align: center;
}

.v-footer {
  background: linear-gradient(to bottom, #a3b8c8, #2c3e50);
  color: white; /* White text */
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
