import InformationContainer from "./InformationContainer";

export default function Flight({departureTime, arrivalTime, date, origin, destination}) {
    return (
        <>
            <InformationContainer
                icon="flight"
                upperDescription={`${date} ${departureTime} ${origin}`}
                lowerDescription={`${date} ${arrivalTime} ${destination}`}
            />
        </>
    )
}
