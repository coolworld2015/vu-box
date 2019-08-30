<template>
  <aside class="navigation-sidebar" v-bind:class="{ shown: isActive }">
    <nav class="h-100 fp-navbar" onclick="event.preventDefault();return false">
      <ul class="h-100 fp-nav-right" style="margin-left: 5px; padding-top: 2px;">
        <li v-on:click="changeView()">
          <img src="../../assets/img/logo.jpg"
               style="width: 55px; height: 50px; margin-right: 10px; margin-left: 4px; margin-top: -5px;"
               v-on:click="changeView()"
          />
          <span style="font-weight: bold; color: white; font-size: 20px; text-shadow: #000 0.15em 0.15em 0.15em;">
                      Media box
                    </span>
        </li>
        <li class="fp-nav-item fp-nav-item-right">
          <span class="fp-nav-link menu-block-header">by CoolWorld</span>
        </li>

        <li class="fp-nav-item fp-nav-item-right" v-on:click="changeRoute('box')"
            v-bind:class="{ active: box }">
          <span class="fp-nav-link">Box</span>
        </li>
      </ul>

      <ul class="h-100 fp-nav-left" style="box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.35);}">
        <li class="fp-nav-item fp-nav-item-left li-border-bottom" v-on:click="changeView()">
          <span class="fp-nav-link" id="showNav" title="Media box">MB</span>
          <span class="hot-key-hint">~</span>
        </li>
        <li class="fp-nav-item fp-nav-item-left">
          <span class="fp-nav-link"></span>
          <span class="hot-key-hint">1</span>
        </li>

        <li class="fp-nav-item fp-nav-item-left" v-on:click="changeRoute('box')"
            v-bind:class="{ active: box }">
          <span class="fp-nav-link" title="Box">BX</span>
          <span class="hot-key-hint">2</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
    import appConfig from '../../main'

    export default {
        name: 'navbar',
        data: function () {
            return {
                searchQuery: '',
                route: appConfig.route,
                isActive: false,
                box: null
            }
        },
        created() {
            this.init()
        },
      methods: {
            init() {
                if (this.route === 'Box') {
                    this.box = true
                } else {
                    this.box = false
                }
            },
            changeView() {
                if (this.isActive !== false) {
                    this.isActive = false
                } else {
                    this.isActive = true
                }
            },
            changeRoute(route) {
                event.preventDefault();
                this.$router.push('/' + route);
                return null;
            }
        }
    }

</script>

