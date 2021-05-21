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
        <div style="margin-bottom:50px;">
          <vs-row>
            <vs-col w='5'>
              <div class=" grid">
                <vs-row>
                  <vs-col w='12' style="margin-top:30px;">
                    <div class="end">
                      <vs-avatar circle v-bind:style="showit" style="height:85%;width:85%;">
                        <img src="~/assets/avatar/Profile_Ricko.png" alt="">
                      </vs-avatar>
                    </div>
                    <transition name="slide-fade">
                      <div v-bind:style="showem" v-if="showem" style="" class="end">
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
                    </transition>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
            <vs-col w='6'>
              <div class="" style="margin-top:15%;">
                <h1 style="font-size:38px;">Hello, My Name <span style="color:gold;">Ricko Tiaka</span></h1>
                <h5>19 Years  /  Indonesia  /  Freelance</h5>
                <p style="margin-top:20px;">
                  <b>I'm a Freelance Designer & Programmer, </b> interesting with Multi-Platform Application <br> and Company Branding.
                  I Love Photography, build a Code and do many things with Technology.<br> I've been worked with several software companies for 1 year, <br> I've been built social media startup applications and company profile websites 
                </p>
                <transition name="slide-fade">
                  <div v-bind:style="showem" v-if="showem" style="position:inherit;" class="grid">
                    <vs-row>
                      <vs-col w='12'>
                        <vs-row>
                          <vs-col w='12' style="margin-top:20px;padding:20px;border-bottom:solid 1px black;border-top:solid 1px black;">
                            <vs-row>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <vs-row>
                                  <vs-col w='12'>
                                    <i class='bx bxs-palette' style="font-size:40px;"></i>
                                  </vs-col>
                                  <vs-col w='12'>
                                    <h2 style="margin-top:10px;margin-bottom:10px;">Design</h2>
                                      Perfect Design for your Perfect Company, good looking and good branding to introduce the company.
                                  </vs-col>
                                </vs-row>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <vs-row>
                                  <vs-col w='12'>
                                    <i class='bx bx-fast-forward' style="font-size:50px;"></i>
                                  </vs-col>
                                  <vs-col w='12'>
                                    <h2 style="margin-top:10px;margin-bottom:10px;">Fast Working</h2>
                                      Fast Responsibility for any idea and suggestion and also make it to your website.
                                  </vs-col>
                                </vs-row>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <vs-row>
                                  <vs-col w='12'>
                                    <i class='bx bx-pin' style="font-size:50px;"></i>
                                  </vs-col>
                                  <vs-col w='12'>
                                    <h2 style="margin-top:10px;margin-bottom:10px;">Focus</h2>
                                      We focus to make your website can reach the company Target.
                                  </vs-col>
                                </vs-row>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <vs-row>
                                  <vs-col w='12'>
                                    <i class='bx bx-happy' style="font-size:50px;"></i>
                                  </vs-col>
                                  <vs-col w='12'>
                                    <h2 style="margin-top:10px;margin-bottom:10px;">Happiness</h2>
                                      We happy when our client happy with our service.
                                  </vs-col>
                                </vs-row>
                              </vs-col>
                            </vs-row>
                          </vs-col>
                          <vs-col w='12' style="padding:20px;border-bottom:solid 1px black;">
                            <vs-row>
                              <vs-col w='12' style="margin-bottom:30px;">
                                <h1>Education</h1>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <h2>SMP Negeri 21 Samarinda</h2>
                                <h4>Information & Technology</h4>
                                <p style="margin-top:15px;">
                                  I Learn Design & Programming, Design with Photoshop, and Programming with Visual Basic .NET, HTML5 and Javascript.
                                </p>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <h2>SMK Negeri 7 Samarinda</h2>
                                <h4>Software Engineering</h4>
                                <p style="margin-top:15px;">
                                  I Learn Website & Desktop Programming, Visual Basic .NET, NetBeans, PHP and Laravel. this my first I Know what is Database, so I Learn database with PHPMyAdmin & PostgreSQL .
                                </p>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <h2>National Geographic #GenGeo Course</h2>
                                <h4>Storytelling & Photography</h4>
                                <p style="margin-top:15px;">
                                  I Learn many about Photography and Storytelling, I do course 6 month.
                                </p>
                              </vs-col>
                            </vs-row>
                          </vs-col>
                          <vs-col w='12' style="margin-bottom:20px;padding:20px;border-bottom:solid 1px black;">
                            <vs-row>
                              <vs-col w='12' style="margin-bottom:30px;">
                                <h1>Experience</h1>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <h2>Ayam Thorr Restaurant</h2>
                                <h4>Head Of Marketing & Technology</h4>
                                <p style="margin-top:15px;">
                                  I Do many task, like do a Branding Market, and Increase Restaurant Brand. I Also build Website Restaurant Profile and do some Network Technician.
                                </p>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <h2>Print Inn</h2>
                                <h4>Printing Machine Operator & Full-Stack Web Developer</h4>
                                <p style="margin-top:15px;">
                                  I Do design Job there, like make Brand Logo for client Company, and do print design orders. I Make a Website Company Profile for company that i work at with Laravel, Materialize Css and JQuery
                                </p>
                              </vs-col>
                              <vs-col w='6' style="margin-bottom:30px;">
                                <h2>Utama Web</h2>
                                <h4>Back-End Web Developer</h4>
                                <p style="margin-top:15px;">
                                  I Do a Big project here with Laravel, Bulma and JQuery. I Learn many here, Like Vue JS, Ionic, Flutter and Angular.
                                </p>
                              </vs-col>
                            </vs-row>
                          </vs-col>
                          <vs-col w='12' style="padding:20px;"><h1>Skill</h1></vs-col>
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
                </transition>
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
    showem: false,
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
        this.showem = true
      } else if (e.type == 'enter') {
        this.showit = {
          height: '85%',
          width: '85%'
        }
        this.showem = false
      }
      // console.log(e)
      // alert('ok')
    }
  },
}
</script>

<style>

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease-in-out;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(200px);
  opacity: 0;
}

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
  background: white;
}
</style>
