<template>
  <div class="container-fluid m-0 p-0">

<div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center pb-15">
              <h2>Merchants</h2>
              <ul class="p-0">
                <li style="width: 10px; height: 2px"></li>
                <li style="width: 20px; height: 3px"></li>
                <li style="width: 30px; height: 4px"></li>
                <li style="width: 20px; height: 3px"></li>
                <li style="width: 10px; height: 2px"></li>
              </ul>
            </div>
          </div>
        </div>
    <div id="about" class="p-4 pb-5 pt-5">
      <div class="row">
        <div class="col-lg">
          <img
            src="../assets/icons/bubble-tea (1).svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">Beverage</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 100px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent.
          </h6>
          <router-link to="/beverage">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>

        <div class="col-lg">
          <img
            src="../assets/icons/decoration.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">FOOD</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 100px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent.
          </h6>
          <router-link to="/food">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>

        <div class="col-lg">
          <img
            src="../assets/icons/building.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">HOSPITALITY</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 110px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent.
          </h6>
          <router-link to="/hospitality">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-lg">
          <img
            src="../assets/icons/workout.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">SPORTS</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 100px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent.
          </h6>
          <router-link to="/sports">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>

        <div class="col-lg">
          <img
            src="../assets/icons/device.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">ELECTRONIC</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 120px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent.
          </h6>
          <router-link to="/electronic">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>

        <div class="col-lg">
          <img
            src="../assets/icons/map-pin.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">Coming Soon</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 120px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            We are looking forward to expand worldwide! Contact us for
            collaboration.
          </h6>
          <button type="button" class="btn">
            &nbsp; &nbsp;&nbsp;I Am Merchant!&nbsp; &nbsp;&nbsp;
          </button>
        </div>
      </div>
    </div>

    <!-- <div id="contact" class="bg-info p-4"></div> -->

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Digitalize Your Business And Make It Fast And Easy",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr{
  background-color: #F16500;
}
#home-page {
  background-color: #92d2f2;
  background: url("../assets/light-1282314_1920.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.section-title ul li {
  display: inline-block;
  background-color: #f16500;
}
h2,
h3 {
  font-family: sans-serif;
  font-weight: 700;
  color: #f16500;
  margin: 0px;
}

#footer {
  background-color: #252223;
}

.container-fluid.m-0.p-0 {
    overflow-x: hidden;
}

.background {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

body{
  overflow-x: hidden;
}
h1 {
  color: #F16500;
}
.footer-copyright p{
  text-align: center;
  margin-bottom: 0px;
}
#about {
  min-height: 100vh;
}
button{
    background-color: #F16500;
    color: white;
}

</style>
