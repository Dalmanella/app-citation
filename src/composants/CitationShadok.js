import React from "react";





const CitationShadok = (props) => {
    const {texte, auteur, img, id} = props.citShadok;

    return(
        <div >
            <hr />
            <li className="citation">
                <p className="citation-txt" >{texte}</p>
                <p className="citation-auteur"> {auteur}</p>
            </li>
        </div>
    )

}
export default CitationShadok;