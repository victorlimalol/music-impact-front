import './styles.css';
import notebook from '../../images/notebook.svg'
import inCourse from '../../images/teacher-and-student-in-course.png'
import Header from '../../Components/Header';
import TestemonialsCard from '../../Components/TestemonialsCards'

function HomePage() {
    return (
        <div>
            <Header />
            <main>
                <div className='welcome-section'>
                    <div className='welcome-section-content'>
                        <h1>Descubra seu ritmo.<br></br> Explore na <span>música.</span></h1>
                        <div className='welcome-section-inputs'>
                            <button className='button-soft'>Ver aulas</button>
                            <button className='button-light'>Nossa historia</button>
                        </div>
                    </div>
                </div>

                <img className="image-notebook" src={notebook} alt="Notebook study music" />

                <section className='our-history-section'>
                    <div className='our-history-section-content'>
                        <div>
                            <h3>Nossa história</h3>
                            <p>Em uma cidade animada pelo ritmo da música, nasceu a Music Impact, uma escola de música que se tornou um verdadeiro ponto de encontro para os amantes da arte sonora. Fundada por dois apaixonados por música, a escola rapidamente se destacou por sua abordagem inovadora e inspiradora.</p>
                        </div>
                        <img src={inCourse} alt="Teacher and Student" />
                    </div>
                </section>

                <section className='testemunials-section'>
                    <div className='testemunials-section-content'>
                        <h3>Depoimentos</h3>
                        <div className='testemunials-cards'>
                            <TestemonialsCard text="Estudar na escola de música foi uma experiência incrível. Os professores são muito atenciosos e as aulas são divertidas e envolventes. Estou aprendendo muito e me sinto cada vez mais apaixonado pela música. Recomendo!" />
                            <TestemonialsCard text="A escola de música foi uma descoberta maravilhosa para mim. Os professores são super dedicados e as aulas são muito dinâmicas." />
                            <TestemonialsCard text="Estou evoluindo muito rápido e me sinto cada vez mais confiante na minha habilidade musical. Estou realmente feliz por estar aqui." />
                        </div>
                    </div>
                </section>
            </main>

            <footer></footer>
        </div>
    );
}

export default HomePage;
