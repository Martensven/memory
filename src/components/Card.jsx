import "./Card.css";
import colors from "./Colors";
import ShuffleArray from "./ShuffleArray";



const Card = () => {

    <ShuffleArray />
    const shuffledColors = ShuffleArray(colors);

    return (
        <>
            <article className="card-container">
                {shuffledColors.map((color, index) => (
                    <section
                        key={index}
                        className="card"
                        style={{ backgroundColor: color.name.toLowerCase() }}
                    >
                        {color.name}
                    </section>
                ))}
            </article>
        </>
    );
};

export default Card;