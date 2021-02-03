<template>
  <v-container>
    <v-hover v-slot:default="{ hover }" open-delay="200" close-delay="100">
      <v-card flat dark>
        <swiper class="swiper" :options="swiperOption">
          <!-- <swiper-slide v-for="(photo, i) in photos" :key="i">
            <v-img :src="'@/assets/' + photo" height="500"></v-img>
          </swiper-slide> -->
          <swiper-slide>
            <v-img src="@/assets/photo1.jpg">
              <v-fade-transition>
                <v-overlay absolute v-if="hover" color="#e09180">
                  <v-card-text>
                    <v-icon dark small>mdi-map-marker</v-icon>
                    Byodoin Temple in Uji, Kyoto
                  </v-card-text>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </swiper-slide>
          

          <swiper-slide>
            <v-img src="@/assets/photo2.jpg">
              <v-fade-transition>
                <v-overlay absolute v-if="hover" color="#e09180">
                  <v-card-text>
                    <v-icon dark small>mdi-map-marker</v-icon>
                    Naha, Okinawa
                  </v-card-text>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </swiper-slide>

          <swiper-slide>
            <v-img src="@/assets/photo3.jpg">
              <v-fade-transition>
                <v-overlay absolute v-if="hover" color="#e09180">
                  <v-card-text>
                    Julian Lage trio ft. Jorge Roeder and Dave King
                    <br>
                    <v-icon dark small>mdi-map-marker</v-icon>
                    The Mod Club in Toronto, Canada
                  </v-card-text>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </swiper-slide>

          <swiper-slide>
            <v-img src="@/assets/photo4.jpg">
              <v-fade-transition>
                <v-overlay absolute v-if="hover" color="#e09180">
                  <v-card-text>
                    Ethan's cat Cooper a.k.a Coop
                  </v-card-text>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </swiper-slide>

          <swiper-slide>
            <v-img src="@/assets/photo5.jpg">
              <v-fade-transition>
                <v-overlay absolute v-if="hover" color="#e09180">
                  <v-card-text>
                    <v-icon dark small>mdi-map-marker</v-icon>
                    Koerner Hall in Toronto, Canada
                  </v-card-text>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </swiper-slide>

          <swiper-slide>
            <v-img src="@/assets/photo6.jpg">
              <v-fade-transition>
                <v-overlay absolute v-if="hover" color="#e09180">
                  <v-card-text>
                    JPEGMAFIA Live at the Opera House
                  </v-card-text>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data: () => ({
      photos: [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg'
      ],
      swiperOption: {
        slidesPerView: 1,
        autoHeight: true,
        centeredSlides: true,
        spaceBetween: 30,
        slidesPerGroup: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
      }
    }),
}
</script>

<style scoped>
.swiper-pagination >>> .swiper-pagination-bullet {
  opacity: 0.4;
  background-color: white;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background-color: white;
}
</style>