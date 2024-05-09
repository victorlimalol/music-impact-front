import './styles.scss';
import Header from '../../Components/Header';
import PlanItem from '../../Components/PlanItem';

function PlansPage() {
    return (
        <div>
            <Header />
            <main>
                <section class="banner-plans-container">
                    <div class="banner-content">
                        <h1>Descubra seu compasso.<br /> Conheça nossos planos.</h1>
                    </div>
                </section>

                <section class="plans-section">
                    <div>
                        <h2>PLANOS</h2>
                        <div class="plans-grid">
                            <PlanItem planName="starter" planPrice="R$100,00" />
                            <PlanItem planName="prime" planPrice="R$160,00" prime />
                            <PlanItem planName="absolute" planPrice="R$190,00" />
                        </div>
                    </div>
                </section>
            </main>
            <footer />
        </div>
    );
}

export default PlansPage;
