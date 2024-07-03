import { Link } from "react-router-dom";
import { TBook } from "./HomePage"

type Props = { book: TBook };

const Book = (props: Props) => {

    function getImageUrl(name: string) {
        return new URL(`${import.meta.env.BASE_URL}${name}`, import.meta.url).href
    }

    return (
        <div className={"w-auto m-8"}>
            <h3 className="text-600">{props.book.title}</h3>
            <Link to={props.book.link} target="_blank">
                <img className={"w-auto h-[300px] m-auto"} src={getImageUrl(props.book.imageLink)} alt="image du livre" />
                More details
            </Link>
        </div>
    )
}

export default Book