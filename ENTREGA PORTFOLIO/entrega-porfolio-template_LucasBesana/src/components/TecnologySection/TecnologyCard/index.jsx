export const TecnologyCard = ({ image, title }) => {
    return (
        <>
            <img src={image} alt={title}/>
            <p className="tecnology__title">{title}</p>
        </>
    )
}