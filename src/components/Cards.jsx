function Cards({ card, onClick, isFlipped }) {
  return (
    <div
      style={{
        width: "100px",
        height: "150px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isFlipped ? "#FFF" : "#0096FF",
        color: isFlipped ? "#000" : "#FFF",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {isFlipped ? card : ""}
    </div>
  );
}

export default Cards;
