var appli = new Framework7({
  root: '#app',
  name: 'My App',
  id: 'com.myapp.test',
  panel: {
    swipe: 'left',
  },
  notification: {
    title: 'My App',
    closeTimeout: 3000,
  },
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  actions: {
    convertToPopover: false,
    grid: true,
  }
});
var $$ = Dom7;
var app = new Vue({
    el: "#app",
    data: {
      currentVue: 'differentespages',
      currentTab: '',
      nom: '',
      prenom: ''
    },
    methods: {
      saveUser: function () {
        let user = {
          nom: this.nom,
          prenom: this.prenom,
        };

        localStorage.setItem("sactic.user", JSON.stringify(user));
      },
      modifier: function () {
        this.currentTab="modifier";
        console.log(this.currentTab);
      },
      retour: function () {
        this.currentTab="reglages";
      },
      compte: function () {
        this.currentTab="compte";
      }
    },
});
