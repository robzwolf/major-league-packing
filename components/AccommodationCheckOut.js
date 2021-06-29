import InformationContainer from "./InformationContainer";

export default function AccommodationCheckOut({endDate, checkOutTime, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🏨"
                upperDescription={`${endDate} ${checkOutTime}`}
                lowerDescription={`${name}, ${address}`}
            />
        </>
    )
}
