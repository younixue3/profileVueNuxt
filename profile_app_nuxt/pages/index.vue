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
    <div id="profile" class="square" style="margin-top:150px;">
      <div class="grid">
        <div style="margin-bottom:150px;">
          <vs-row>
            <vs-col w='5'>
              <div class=" grid">
                <vs-row>
                  <vs-col w='12'>
                    <div class="end">
                      <vs-avatar circle style="height:85%;width:85%;">
                        <img src="~/assets/avatar/Profile_Ricko.png" alt="">
                      </vs-avatar>
                    </div>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
            <vs-col w='6'>
              <div class="" style="margin-top:15%;">
                <h1 style="font-size:38px;">Hello, My Name Ricko Tiaka</h1>
                <p>
                  <b>I'm a Freelance Designer & Programmer, </b> interesting with Multi-Platform Application <br> and Company Branding.
                  I Love Photography, build a Code and <br>do many things with Technology.
                </p>
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
    active: 'guide'
  }),
  components: {
    Logo,
    VuesaxLogo
  }
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
