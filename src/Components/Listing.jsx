import IndividualListing from "./IndividualListing";
import { postings } from "../postings";


function Listing() {
    console.log(postings)

    let postList = postings.map((data, i) => <IndividualListing data= {data} key={i}/>)
    return (
        <div>
        <h1>Listing</h1>
        {postList}
        </div>

    )
}

export default Listing