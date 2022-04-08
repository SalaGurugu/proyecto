<script setup>
import { onMounted } from "vue";
import Navbar from "../components/Navbar.vue"
import BaseTarjeta from "../components/BaseTarjeta.vue";
import { almacen } from '../stores/archivo.js'

const store = almacen()



onMounted(() => {
  store.obtenerDatos();
});
</script>

<template>
  <main>
    <Navbar />
    <!-- Masthead-->
    <header class="masthead" id="inicio">
      <div class="container">
        <div class="masthead-subheading">¡O teu teatro de barrio!</div>
        <div class="masthead-heading text-uppercase">Sala Gurugú</div>
        <a class="btn btn-info btn-xl text-uppercase" href="#programa"
          >Programación</a
        >
      </div>
    </header>
    <!-- Programación -->
    <section class="page-section bg-light" id="programa">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Programación</h2>
          <h3 class="section-subheading text-muted">Artes Éscenicas.</h3>
          <div class="row justify-content-center">
            <BaseTarjeta
              class="col-4 m-2"
              v-for="obra in store.obras"
              :key="obra.id"
              :obra="obra"
            />
          </div>
        </div>
          <div class="text-center">
            <v-pagination
              v-model="store.page"
              :length="store.paginas"
              @click="store.siguiente"
            ></v-pagination>
          </div>
      </div>
    </section>
    <!-- Compañia -->
      <!-- Programación -->
    <section class="page-section bg-light" id="danthea">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Danthea</h2>
          <h3 class="section-subheading text-muted">Compañia de teatro.</h3>
    <div class="center">
    <div class="card" style="width: 18rem">
      <img src="../assets/img/cincenta.jpg" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title text-uppercase text-center">Danthea</h5>
      <p
        class="card-text text-uppercase text-center"
        style="font-family: 'Courier New'"
      >Cincenta</p>
      <p class="text-center">Maiores de 4 anos</p>
      <div class="text-center"></div>
    </div>
  </div>
        </div>
      </div>
      </div>
    </section>
    <!-- Escola -->
    <section class="page-section" id="escola">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Escola de teatro</h2>
          <h3 class="section-subheading text-muted">Motaxe de espetáculos.</h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-info"></i>
              <i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Infantil</h4>
            <p class="text-muted">Grupos reducidos de 8 a 12 anos.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-info"></i>
              <i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Xuvenil</h4>
            <p class="text-muted">Grupos reducidos de 12 a 18 anos.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-info"></i>
              <i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Adultos</h4>
            <p class="text-muted">Maiores de 18 años.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Team-->
    <section class="page-section bg-light" id="equipo">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">O noso equipo</h2>
          <h3 class="section-subheading text-muted">
            Forma parte da nosa familia.
          </h3>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src="../assets/img/team/1.jpg"
                alt="..."
              />
              <h4>Carlos Clemente</h4>
              <p class="text-muted">Director</p>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Parveen Anand Twitter Profile"
                ><i class="fab fa-twitter"></i
              ></a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Parveen Anand Facebook Profile"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Parveen Anand LinkedIn Profile"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src="../assets/img/team/2.jpg"
                alt="..."
              />
              <h4>Carlos Miranda</h4>
              <p class="text-muted">Audiovisuais</p>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Diana Petersen Twitter Profile"
                ><i class="fab fa-twitter"></i
              ></a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Diana Petersen Facebook Profile"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Diana Petersen LinkedIn Profile"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src="../assets/img/team/3.jpg"
                alt="..."
              />
              <h4>Maria López</h4>
              <p class="text-muted">Escenografía / Iluminación</p>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Larry Parker Twitter Profile"
                ><i class="fab fa-twitter"></i
              ></a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Larry Parker Facebook Profile"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Larry Parker LinkedIn Profile"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">
              Colabora con nós e disfruta da paixón das artes.
            </p>
          </div>
        </div>
      </div>
    </section>
     <!-- Team-->
    <section class="page-section bg-light" id="mapa">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Onde estamos</h2>
          <h3 class="section-subheading text-muted">
            Rúa Agra do Orzán, 3, 15010 A Coruña
          </h3>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.6452877107786!2d-8.420194585289988!3d43.363529779132705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c8b2994e30b%3A0x4975dc047bc16b9a!2sC.%20Agra%20del%20Orzan%2C%203%2C%2015010%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1649268505895!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact-->
    <section class="page-section" id="contact">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Contactanós</h2>
          <h3 class="section-subheading text-muted">
            Consultanós calquera dúbida.
          </h3>
        </div>
       <div class="container">

  <form id="contactForm" target="_blank" action="https://formsubmit.co/444cuatro@gmail.com" method="POST">
    <div class="row align-items-stretch mb-5">
      <div class="col-md-6">
        <div class="form-group">
          <input type="text" name="name" class="form-control" placeholder="O teu nome" required>
        </div>
       <div class="form-group">
          <input type="email" name="email" class="form-control" placeholder="O teu correo" required>
        </div>
         <div class="form-group mb-md-0">
         <input type="text" name="phone" class="form-control" placeholder="O teu teléfono" required>
        </div>
      </div>
    <div class="col-md-6">
      <div class="form-group form-group-textarea mb-md-0">
      <textarea placeholder="A tua mensaxe" class="form-control" name="message" rows="10" required></textarea>
    </div>
    </div>
    </div>
    <div class="text-center mb-3">
    <button type="submit" class="btn btn-lg btn-info text-white btn-block">Enviar</button>
    </div>  
    </form>
    </div>
    </div>
    </section>
    <!-- Footer-->
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">
            Copyright &copy; Your Website 2022
          </div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Twitter"
              ><i class="fab fa-twitter"></i
            ></a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Facebook"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="LinkedIn"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="#!"
              >Privacy Policy</a
            >
            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
