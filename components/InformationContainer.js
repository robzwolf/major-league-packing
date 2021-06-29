export default function InformationContainer({icon, upperDescription, lowerDescription}) {
    return (
        <>
            <div>
                <p>{icon}</p>
                <p>{upperDescription}</p>
                <p>{lowerDescription}</p>
            </div>
        </>
    )
}
