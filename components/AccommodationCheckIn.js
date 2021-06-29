import InformationContainer from "./InformationContainer";

export default function AccommodationCheckIn({startDate, checkInTime, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🏨"
                upperDescription={`Check In: ${startDate} ${checkInTime}`}
                lowerDescription={`${name}, ${address}`}
            />
        </>
    )
}
