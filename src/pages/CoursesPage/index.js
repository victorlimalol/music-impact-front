import './styles.css';
import photoPrincipal from '../../images/Foto principal.png';
import guitar from '../../images/foto do violão.jpg';
import eletricGuitar from '../../images/eletric-guitar.png'
import voice from '../../images/voice.png'
import whatsapp from '../../images/logos_whatsapp-icon (1).png';
import instagram from '../../images/skill-icons_instagram.png';
import facebook from '../../images/Vector (1).png';
import youtube from '../../images/logos_youtube-icon.png';

function CoursesPage() {
  return (
    <div>
      <header>
        <div>
          <img src=".//images/logo-music-impact 1.png" alt="" />
          <p> music.impact </p>
        </div>
        <nav>
          <a href="#">Eventos</a>
          <a href="#">Aulas</a>
          <a href="#">Planos</a>
          <a href="#">Área de Admin</a>
        </nav>
      </header>
      <main>
        <section class="banner.jpg">
          <figure>
            <img src={photoPrincipal} alt="" />
            <h1>Aulas que transformam. <br />Descubra seu potencial <br />musical.</h1>
          </figure>
        </section>
        <section class="aulas">
          <h2>Aulas</h2>
          <div class="aulas-grid">
            <div class="aula">
              <img src={guitar} alt="" />
            </div>
            <div class="aula">
              <img src={eletricGuitar} alt="" />
            </div>
            <div class="aula">
              <img src={voice} alt="" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <a href="#contact">Siga-nos nas redes sociais</a>
          <div>
            <img src={whatsapp} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
        <div>
          <h3>feito por Agda e Victor</h3>
        </div>
      </footer>
    </div>
  );
}

export default CoursesPage;
