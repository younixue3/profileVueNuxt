<template>
  <div>
    <vs-navbar fixed color="dark" id="body" text-white square center-collapsed v-model="active">
      <template #left>
        <b>Logo</b>
      </template>
      <vs-navbar-item :active="active == 'profile'" id="profile" v-scroll-to='{el: "#body",easing: "ease",}'>
        Profile
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'software'" id="software" v-scroll-to='{el: "#software",easing: "ease",}'>
        Software
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'design'" id="design" v-scroll-to='{el: "#design",easing: "ease",}'>
        Design
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'photography'" id="photography" v-scroll-to='{el: "#photography",easing: "ease",}'>
        Photography
      </vs-navbar-item>
      <template #right>
        <vs-button color="#fff" flat >Login</vs-button>
        <vs-button color="#fff" border >Get Started</vs-button>
      </template>
    </vs-navbar>
    <div id="profile" class="square">
      <div v-view='viewer' style="margin:50px;visibility:hidden;">here</div>
      <div class="grid">
        <div v-bind:style="showem" style="margin-bottom:50px;">
          <vs-row>
            <vs-col w='5'>
              <div class=" grid">
                <vs-row>
                  <vs-col w='12'>
                    <div class="end">
                      <vs-avatar circle v-bind:style="showit" style="height:85%;width:85%;">
                        <img src="~/assets/avatar/Profile_Ricko.png" alt="">
                      </vs-avatar>
                    </div>
                    <div class="end">
                      <vs-button
                        icon
                        color="facebook"
                      >
                        <i class='bx bxl-facebook-square'></i>
                      </vs-button>

                      <vs-button
                        icon
                        color="linkedin"
                      >
                        <i class='bx bxl-linkedin'></i>
                      </vs-button>

                      <vs-button
                        icon
                        color="#f94fb0"
                      >
                        <i class='bx bxl-instagram'></i>
                      </vs-button>
                    </div>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
            <vs-col w='6'>
              <div class="" style="margin-top:15%;">
                <h1 style="font-size:38px;">Hello, My Name Ricko Tiaka</h1>
                <h5>19 Years  /  Indonesia  /  Freelance</h5>
                <p style="margin-top:20px;">
                  <b>I'm a Freelance Designer & Programmer, </b> interesting with Multi-Platform Application <br> and Company Branding.
                  I Love Photography, build a Code and do many things with Technology.<br> I've been worked with several software companies for 1 year, <br> I've been built social media startup applications and company profile websites 
                </p>
                <div class="grid" style="margin-top:20px;padding:20px;border-top:solid 1px black;">
                  <vs-row>
                    <vs-col w='12'>
                      <vs-row>
                        <vs-col class="center" w='2'>
                          <vs-row>
                            <vs-col w='12'>
                              <img src="https://img.icons8.com/color/50/000000/vue-js.png"/>
                            </vs-col>
                            <vs-col w='12'>
                              Vue Js
                            </vs-col>
                          </vs-row>

                        </vs-col>
                        <vs-col class="center" w='2'>
                          <vs-row>
                            <vs-col w='12'>
                              <img src="https://img.icons8.com/fluent/48/000000/laravel.png"/>
                            </vs-col>
                            <vs-col w='12'>
                              Laravel
                            </vs-col>
                          </vs-row>

                        </vs-col>
                        <vs-col class="center" w='2'>
                          <vs-row>
                            <vs-col w='12'>
                              <img src="https://img.icons8.com/color/48/000000/django.png"/>
                            </vs-col>
                            <vs-col w='12'>
                              Django
                            </vs-col>
                          </vs-row>

                        </vs-col>
                        <vs-col class="center" w='2'>
                          <vs-row>
                            <vs-col w='12'>
                              <img src="https://img.icons8.com/color/48/000000/flutter.png"/>
                            </vs-col>
                            <vs-col w='12'>
                              Flutter
                            </vs-col>
                          </vs-row>
                        </vs-col>
                        <vs-col class="center" w='2'>
                          <vs-row>
                            <vs-col w='12'>
                              <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
                            </vs-col>
                            <vs-col w='12'>
                              Bootstrap
                            </vs-col>
                          </vs-row>
                        </vs-col>
                        <vs-col class="center" w='2'>
                          <vs-row>
                            <vs-col w='12'>
                              <img src="https://img.icons8.com/color/48/000000/python.png"/>
                            </vs-col>
                            <vs-col w='12'>
                              Python
                            </vs-col>
                          </vs-row>
                        </vs-col>
                      </vs-row>
                    </vs-col>
                  </vs-row>
                </div>
              </div>
            </vs-col>
          </vs-row>
        </div>
        <vs-row style="background-color:rgb(30,30,30);padding:20px;" id="software">
          <vs-col w='12'>
            <h1 style="color:white;font-size:40px;">Software</h1>
          </vs-col>
          <vs-col offset='' w='4'>
            <vs-card type="2" class="cardcontent">
              <template #title>
                <h3>Pot with a plant</h3>
              </template>
              <template #img>
                <img src="~/assets/content/20201203_145641.jpg" alt="">
              </template>
            </vs-card>
          </vs-col>
          <vs-col w='8'>
            <div class="grid">
              <vs-row>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/119719030_110315644155484_1711121628102453766_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/121509481_3269302733168262_589183152812879888_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/119719030_110315644155484_1711121628102453766_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
              </vs-row>
            </div>
          </vs-col>
        </vs-row>
        <vs-row style="padding:20px;" id="design">
          <vs-col w='12'>
            <h1 style="color:black;font-size:40px;">Design</h1>
          </vs-col>
          <vs-col w='8'>
            <div class="grid">
              <vs-row>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/121509481_3269302733168262_589183152812879888_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/119719030_110315644155484_1711121628102453766_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/121509481_3269302733168262_589183152812879888_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
              </vs-row>
            </div>
          </vs-col>
          <vs-col offset='' w='4'>
            <vs-card type="2" class="cardcontent">
              <template #title>
                <h3>Pot with a plant</h3>
              </template>
              <template #img>
                <img src="~/assets/content/20201203_145641.jpg" alt="">
              </template>
            </vs-card>
          </vs-col>
        </vs-row>
        <vs-row style="background-color:rgb(30,30,30);padding:20px;" id="photography">
          <vs-col w='12'>
            <h1 style="color:white;font-size:40px;">Photography</h1>
          </vs-col>
          <vs-col offset='' w='4'>
            <vs-card type="2" class="cardcontent">
              <template #title>
                <h3>Pot with a plant</h3>
              </template>
              <template #img>
                <img src="~/assets/content/20201203_145641.jpg" alt="">
              </template>
            </vs-card>
          </vs-col>
          <vs-col w='8'>
            <div class="grid">
              <vs-row>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/119719030_110315644155484_1711121628102453766_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/121509481_3269302733168262_589183152812879888_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col w='4'>
                  <vs-card type="2" class="cardcontent">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="~/assets/content/119719030_110315644155484_1711121628102453766_n.jpg" alt="">
                    </template>
                  </vs-card>
                </vs-col>
              </vs-row>
            </div>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuesaxLogo from '~/components/VuesaxLogo.vue'

export default {
  data:() => ({
    active: 'guide',
    showit: {},
    showem: {},
  }),
  components: {
    Logo,
    VuesaxLogo
  },
  methods: {
    viewer: function (e) {
      console.log(e.type) // 'enter', 'exit', 'progress'
      if (e.type == 'exit') {
        this.showit = {
          height: '65%',
          width: '65%'
        }
        this.showem = {
          marginBottom: '500px',
        }
      } else if (e.type == 'enter') {
        this.showit = {
          height: '85%',
          width: '85%'
        }
        this.showem = {
          marginBottom: '50px',
        }
      }
      // console.log(e)
      // alert('ok')
    }
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.cardcontent {
  padding: 10px;
}

.cardcontent .vs-card {
  max-width:500px;
  border-radius: 0px;
}

.cardcontent .vs-card__img {
  max-height:none;
  border-radius: 0px;
}

.cardcontent .vs-card__img img {
  border-radius: 0px;
}

.cardcontent .vs-card__text {
  padding-right:100%;
}

.center {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
}

.end {
  display: flex;
  align-items: flex-end;
  text-align: flex-end;
  justify-content: flex-end;
  padding: 20px;
  flex-wrap: wrap;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  margin: 10px;
}
body {
  background: #eaeaea;
}
</style>
