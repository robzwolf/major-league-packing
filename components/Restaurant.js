import InformationContainer from "./InformationContainer";

export default function Restaurant({time, date, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🍴"
                upperDescription={`${date} ${time}`}
                lowerDescription={`${name}, ${address}`}
            />
        </>
    )
}
