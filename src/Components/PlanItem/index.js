import './styles.scss';

function PlanItem(props) {
    return (
        <div class="plan">
            <h2>{props.planName}</h2>
            <ul>
                <li>1 Instrumento</li>
                <li>1 Aula Imersiva</li>
                <li>Aula em grupo</li>
            </ul>
            <div>
                <h2>{props.planPrice}</h2>
            </div>
        </div>
    );
}

export default PlanItem;
