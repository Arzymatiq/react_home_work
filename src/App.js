import Input from "./conponents/input";
import Boxes from "./conponents/Boxes";
import Card from "./conponents/Card";
import Avatar from "./conponents/Avatar";
import Counter from "./conponents/Counter";
const App = () => {
    let stylesArr = [
        {
            width: "300px",
            height: "150px",
            backgroundColor: "green",
            margin: "15px",
        },
    ];
    let cardObj = {
        src: "data:image/jpeg;base64,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",
        alt: "",
    };
    return (
        <>
            <Input />
            <Boxes stylesArr={stylesArr} />
            <Card cardObj={cardObj}>{/* <Avatar /> */}</Card>
            <Counter />
        </>
    );
};

export default App;