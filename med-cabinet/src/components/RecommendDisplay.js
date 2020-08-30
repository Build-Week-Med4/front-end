import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteRecommend } from '../actions/actions'

const RecommendDisplay = (props) => {
    console.log(props.recommendSuccess)
    const [data, setData] = useState([])
    // const { push } = useHistory()
    
    useEffect(() => {
        if(props.recommendSuccess.length > 0){
            return setData(props.recommendSuccess)
        }
        return setData([])
    }, [props.recommendSuccess])
    
    // const { description, effect, flavor, rating, strain, type } = props.recommendSuccess[0]
    return (
        <>
        {props.recommendRetrieve ? <p style={{color: 'red'}}>Retrieving Recommendations...</p> : null}
        {data.length > 0 ? 
        <div>
            <h1>Your List of Recommendations : {console.log(data[0])}</h1>
            <h3>Strain: {data[0].strain}</h3>
            <h3>{data[0].type}</h3>
            <p>description: {data[0].description}</p>
            <p>{data[0].flavor}</p>
            <p>effects: {data[0].effect}</p>
            <p>rating: {data[0].rating}</p>
            <button 
                onClick={() => {
                    props.deleteRecommend(data[0].id)}
                }>
                Delete Recommendation ?
            </button>            
        </div> :
        <p style={{color: 'red'}}>Recommendation Deleted ! </p>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        recommendRetrieve: state.recommendRetrieve,
        recommendSuccess: state.recommendSuccess
    }
}

export default connect(mapStateToProps, { deleteRecommend })(RecommendDisplay)