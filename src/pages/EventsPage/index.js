import './styles.css';
import Header from '../../Components/Header';
import EventsItem from '../../Components/EventItem';

function EventsPage() {
  return (
    <div>
      <Header />
      <main>
        <section class="banner-container">
          <div class="banner-content">
            <h1>Emoção em cada acorde.<br /> Descubra nossos eventos<br /> musicais.</h1>
          </div>
        </section>

        <section class="events-container">
          <div class="events-category">
            <h2>Eventos proximos</h2>
            <div class="event-items">
              <EventsItem title="Shopping Tatuapé" address="AV. Rui Barbosa, 1245, Radial leste. 18:00h ás 20hrs" />
            </div>
          </div>

          <div class="events-category">
            <h2>Eventos passados</h2>
            <div class="event-items">
              <EventsItem title="Shopping Tatuapé" address="AV. Rui Barbosa, 1245, Radial leste. 18:00h ás 20hrs" />
              <EventsItem title="Shopping Tatuapé" address="AV. Rui Barbosa, 1245, Radial leste. 18:00h ás 20hrs" />
              <EventsItem title="Shopping Tatuapé" address="AV. Rui Barbosa, 1245, Radial leste. 18:00h ás 20hrs" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EventsPage;
