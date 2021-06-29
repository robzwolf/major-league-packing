export default function InformationContainer({icon, upperDescription, lowerDescription}) {
    return (
        <>
            <div className="information-container">
                <span className="icon">{icon}</span>
                <span className="upper">{upperDescription}</span>
                <span className="lower">{lowerDescription}</span>
            </div>
            <style jsx>{`
                .information-container {
                    display: grid;
                    grid-template-areas: "icon upper"
                                         "icon lower";
                    grid-gap: 7px;
                    background: #f2f8fb;
                    border-radius: 8px;
                    padding: 10px;
                    grid-template-columns: 40px auto;
                }

                .icon {
                    grid-area: icon;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .upper {
                    grid-area: upper;
                }

                .lower {
                    grid-area: lower;
                }
            `}</style>
        </>
    )
}
