const Boxes = ({ stylesArr }) => {
    return (
        <>
            {stylesArr.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            width: item.width,
                            height: item.height,
                            backgroundColor: item.backgroundColor,
                            margin: item.margin,
                        }}></div>
                );
            })}
        </>
    );
};

export default Boxes;
