<template>
    <footer class="page-footer bg-dark pt-5">

      <div class="container text-center text-md-left mt-0">
        <div class="row pb-5">
          <div class="col-md-3 mx-auto mb-2">
            <img
              src="../assets/etrenz-2.png"
              height="180px"
              width="70%"
              class="m-4"
              alt=""
            />
          </div>

          <div class="col-md-4 mx-auto bm-4 mt-4">
            <div class="goleft">
            <h6 class="text-uppercase font-weight-bold mb-0">Get In Touch</h6>
            
            <hr
              class="mb-2 mt-0 d-inline-block"
              style="width: 115px; height: 2px;"
            />
            </div>

            <ul class="list-unstyled">
              <li class="my-2">
                <i class="fas fa-home mr-3"></i>
                Country Network Marketing Sdn
                Bhd
              </li>
              <li class="my-2">
                <i class="fas fa-envelope mr-3"></i><span class="emailspace">Branden@etrenz.com</span>
              </li>
              <li class="my-2">
                <i class="fas fa-phone mr-3"></i>+60 13-777 7216
              </li>
              <li class="my-2">
                <i class="fas fa-map-marker-alt mr-4"></i>No. 46-3, Jalan Tiara
                2D/KU1,<br> <span class="desc">Pusat Perniagaan Bandar Baru Klang,</span><br> 
               <span class="desc">41150 Klang, Selangor Darul</span>
                 Eshan, Malaysia.
              </li>
            </ul>


          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-1 pb-0">
        <p>
          &copy; All Rights Reserved 
          <a href="#">eTrenz</a>
          2020.
        </p>
      </div>
    </footer>
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
span.emailspace {
    padding-left: 6px;
}
span.desc {
    padding-left: 34px;
}
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
.full-height {
  min-height: 100vh;
}
button{
    background-color: #F16500;
    color: white;
}
ul.list-unstyled li {
    font-size: 14px !important;
}

@media screen and (max-width: 800px) {
 ul.list-unstyled li {
    text-align: left;
}
.col-md-3.mx-auto.mb-4 img {
    height: 171px;
}
.col-md-3.mx-auto.mb-2 {
    text-align: center;
}
span.mobiledesc {
    padding-left: 34px;
}
span.emailspace {
    padding-left: 6px;
}
.goleft {
    text-align: left;
}
.col-md-4.mx-auto.bm-4.mt-4 {
    padding-left: 15px;
}
footer.page-footer.bg-dark.pt-5 {
    padding-top: 0px !important;
}
.col-md-3.mx-auto.mb-2 {
    display: none;
}
}
</style>
