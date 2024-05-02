import './styles.css';
import Header from '../../Components/Header';
import './styles.css';
import guitar from '../../images/foto do violão.jpg';
import eletricGuitar from '../../images/eletric-guitar.png'
import voice from '../../images/voice.png'

function CoursesPage() {
  return (
    <div>
      <Header />
      <main>
        <section class="banner-courses-container">
          <div class="banner-content">
            <h1>Aulas que transformam.<br /> Descubra seu potencial <br />musical.</h1>
          </div>
        </section>

        <section class="courses-section">
          <div>
            <h2>Aulas</h2>
            <div class="courses-grid">
              <div class="course">
                <img src={guitar} alt="" />
              </div>
              <div class="course">
                <img src={eletricGuitar} alt="" />
              </div>
              <div class="course">
                <img src={voice} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer />
    </div>
  );
}

export default CoursesPage;
