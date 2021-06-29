import Flight from "./Flight";
import AccommodationCheckIn from "./AccommodationCheckIn";
import Restaurant from "./Restaurant";

export default function Itinerary({itinerary}) {
    return (
        <>
            <div className="itinerary">
                {itinerary.flights.map(flight => (
                    <Flight
                        departureTime={flight.departureTime}
                        arrivalTime={flight.arrivalTime}
                        date={flight.date}
                        origin={flight.origin}
                        destination={flight.destination}
                        key={flight.confirmation}
                    />
                ))}

                {itinerary.accommodation.map(place => (
                    <AccommodationCheckIn
                        startDate={place.startDate}
                        checkInTime={place.checkInTime}
                        name={place.name}
                        address={place.address}
                    />
                ))}

                {itinerary.restaurants.map(restaurant => (
                    <Restaurant
                        time={restaurant.time}
                        date={restaurant.date}
                        name={restaurant.name}
                        address={restaurant.address}
                    />
                ))}
            </div>
            <style jsx>{`
                .itinerary {
                    display: flex;
                    flex-direction: column;
                    grid-gap: 18px;
                    padding: 18px 0;
                    width: 50%;
                }
            `}</style>
        </>
    )
}
