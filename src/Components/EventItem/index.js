import './styles.css';

function EventsItem(props) {
    return (
        <div class="event-item">
            <h3 class="event-title">{props.title}</h3>
            <p>{props.address}</p>
        </div>
    );
}

export default EventsItem;
