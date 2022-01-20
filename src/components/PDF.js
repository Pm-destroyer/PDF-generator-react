import React from 'react'
import Pdf from 'react-to-pdf'

const ref = React.createRef();

const PDF = (props) => {
    return (
        <>
            <div className='post' ref={ref} >
                <h1>{props.title}</h1>
                <img src={props.image} alt={props.title} />
                <p>{props.content}</p>
            </div>
            <Pdf targetRef={ref} filename="post.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </Pdf>
        </>
    )
}

export default PDF;



