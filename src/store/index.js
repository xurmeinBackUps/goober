import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    discussions: {},
    lessons: {},
    messages: {},
    subjects: {},
    topics: {},
    users: {},
    authId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2'
  },
  getters: {
    authUser: function(state) {
      // return state.users[state.authId]
      return  {}
    }
  },
  mutations: {
    setMessage: function (state, { message, messageId }) {
      Vue.set(state.messages, messageId, message)
    },
    appendMessageToLesson: function(state, { messageId, lessonId }) {
      const lesson = state.lessons[lessonId]
      Vue.set(lesson.messages, messageId, messageId)
    },
    appendMessageToUser: function(state, { messageId, userId }) {
      const user = state.users[userId]
      Vue.set(user.messages, messageId, messageId)
    }
  },
  actions: {
    createMessage: function(context, message) {
      const messageId = 'message-' + Math.random()
      message['.key'] = messageId

      context.commit('setMessage', { message, messageId })
      context.commit('appendMessageToLesson', { lessonId: message.lessonId, messageId })
      context.commit('appendMessageToUser', { userId: message.userId, messageId })
    }
  },
  modules: {
  },
});
