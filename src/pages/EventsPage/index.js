import './styles.css';

function EventsPage() {
  return (
    <div>
      <header class="header-container">
        <div class="header-content">
          <h1 class="logo">music.impact</h1>
          <nav class="menu-items">
            <a class="menu-item">Eventos</a>
            <a class="menu-item">Aulas</a>
            <a class="menu-item">Planos</a>
            <a class="menu-item">Area de Admin</a>
          </nav>
        </div>
      </header>

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
              <div class="event-item">
                <h3 class="event-title">Shopping Tatuapé</h3>
                <p>AV. Rui Barbosa, 1245, Radial leste.
                  18:00h ás 20hrs</p>
              </div>
            </div>
          </div>

          <div class="events-category">
            <h2>Eventos passados</h2>
            <div class="event-items">
              <div class="event-item">
                <h3 class="event-title">Shopping Tatuapé</h3>
                <p>AV. Rui Barbosa, 1245, Radial leste.
                  18:00h ás 20hrs</p>
              </div>
              <div class="event-item">
                <h3 class="event-title">Shopping Tatuapé</h3>
                <p>AV. Rui Barbosa, 1245, Radial leste.
                  18:00h ás 20hrs</p>
              </div>
              <div class="event-item">
                <h3 class="event-title">Shopping Tatuapé</h3>
                <p>AV. Rui Barbosa, 1245, Radial leste.
                  18:00h ás 20hrs</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EventsPage;
