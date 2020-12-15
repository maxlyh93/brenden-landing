<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height p-4">
      <div class="container pt-3">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center pb-15">
              <h2>About Us</h2>
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

        <div class="row">
          <div class="col-lg-6">
            <div class="about-content mt-30">
              <h3>
                <span>Welcome To</span>
                EtrenZ.
              </h3>
              <p>
                Latest formulation for ecommerce whereby your premium online to
                offline (O2O) solutions partner for retails and hospitalities
                business.<br /><br />
                We providing Ecommerce system to each and every retails,
                merchants and manufacture companies to manage their online sales
                and marketing, maximise reaching to the online target audience,
                simplify their communication within one another to gain cost
                effectively.<br /><br />
                Digitalization is a trend and common tool for business in
                today’s Information Age. The products and services are not
                limited in local market only, it allows to get recognised easily
                and selling into international market. Etrenz is the main key to
                transform and digitalize all different business industries which
                they are most doing business traditionally and manually target
                to a narrow market. The merchants enabled to own their Eshop
                within Etrenz, allows them to place all kinds of products and
                services in their online, individual, independent virtual store,
                with lower cost to set up and higher profit earnings whereby
                their reaching are maximise to all potential customers in all
                regions. It can be used as both way, website and ecommerce
                system with all payment gateway.<br /><br />
                Also, the partnerships with Etrenz, strengthening the merchants
                to form a greater bond and maximise value within one another,
                where it added competitive advantage due to varieties, binding
                customers and give them the best and unique offer which they
                feel worth for buying and convenience.<br /><br />
                Etrenz are not just an ecommerce platform or system provider,
                but it builds with all kind of services and latest technology to
                help all merchants to grow in online market. These are includes:
                logistics solutions, digital marketing, business connection,
                business consultancy, payment system, live streamers, brand
                targeting, entertainment technology and others.
              </p>
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <div class="about-image">
              <!-- <img src="../assets/etrenz-2-min.png" alt="about" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "the title",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.about-content h3 {
  font-size: 30px;
  padding-bottom: 10px;
}
.about-content h3 span {
  font-weight: 400;
  color: #2c2d3e;
}
p {
  text-align: left;
}
.about-image img {
  width: 100%;
}
img {
  vertical-align: middle;
  border-style: none;
}
.footer-copyright p{
  text-align: center;
  margin-bottom: 0px;
}
ul.list-unstyled li {
    font-size: 10px !important;
}
@media screen and (max-width: 414px) {
  .about-content h3[data-v-4fd998ea] {
    font-size: 25px;
    padding-bottom: 10px;
}
p{
    text-align: left;
    margin-left: 20px;
    font-size: 14px;
}
.about-image img[data-v-4fd998ea] {
    width: 100%;
    display: none;
}
}
</style>
