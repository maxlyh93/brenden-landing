<template>
  <div class="container-fluid m-0 p-0">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="section-title text-center pb-15">
          <h2>Beverage</h2>
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

    <div id="about" class="p-4">
      <div class="row">
        <div class="col-lg">
          <img
            v-bind:src="'https://mall.etrenz.com/attachment/' + logo"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">
            {{merchanttitle}}
          </h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 100px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4"></h6>
          <button type="button" class="btn">
            <a v-bind:href="urllink">Order Now !</a>
          </button>
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
          <h6 class="ml-md-4 mr-md-4"></h6>
          <button type="button" class="btn">
            &nbsp; &nbsp;&nbsp;Collaborate !&nbsp; &nbsp;&nbsp;
          </button>
        </div>
      </div>
    </div>

    <!-- <div id="contact" class="bg-info p-4"></div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      store: {},
      merchanttitle:null,
      urllink:null,
      logo:null,
      listarry:null,
      title: "Digitalize Your Business And Make It Fast And Easy",
      mainurl: "https://mall.etrenz.com/attachment/",
    };
  },
  created() {
    axios
      .get("https://api.etrenz.com/etrenz/api/user/merchant/store/list")
      .then((response) => {
        let filterdata = response.data.data.list.filter((el) => {
          return el.id === 4;
        });

        // this.listarray = filterdata;
        this.merchanttitle = filterdata[0].title
        this.urllink = filterdata[0].shortenUrl
        this.logo = filterdata[0].logo
        console.log("get data list");
        console.log(filterdata);
        console.log(this.urllink)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:hover {
  text-decoration: none;
  color: black;
}
a:link {
  text-decoration: none;
  color: white;
}
a:visited {
  text-decoration: none;
  color: white;
}
hr {
  background-color: #f16500;
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

body {
  overflow-x: hidden;
}
h1 {
  color: #f16500;
}
.footer-copyright p {
  text-align: center;
  margin-bottom: 0px;
}
#about {
  min-height: 100vh;
}
button {
  background-color: #f16500;
  color: white;
}
@media screen and (max-width: 759px) {
  .col-lg {
    padding-top: 40px;
  }
}
</style>
