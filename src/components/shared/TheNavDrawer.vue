<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    app
    color="secondary"
    width="fit-content"
  >

       <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          class="px-2"
        >
          <v-list-item-icon>
        <v-btn icon :to="{ name: item.path }">
            <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
          </v-list-item-icon>

          <v-list-item-content v-if="!mini">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        <template
          #append
          v-if="!mini"
        >
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TheNavDrawer',
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city', path: 'Home' },
          { title: 'Lessons', icon: 'mdi-bookshelf', path: 'LessonIndex' },
          { title: 'Temporary', icon: 'mdi-badge-account-horizontal', path: 'LessonShow' },
          { title: 'About', icon: 'mdi-information', path: 'About' },
        ],
        mini: true,
      }
    },
}
</script>
