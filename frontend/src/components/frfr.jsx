// // import OfferTile from "./OfferTile.js";

// // export default function OfferListing() {
// //     // Use console.log() for debugging
// //     const client = new AppolloClient ({
// //         uri : " my Uri here",
// //         cache :new InMemoryCache(),
// //     });
// //     const GET_LATEST_OFFERS = gql`
// //     query GetLatestOffers{
// //         offers(orderBy:{DATE_ADDED: DESC}, first:10){
// //             id
// //             name
// //             visitedCount
// //             price{
// //                 value
// //                 currency
// //             }
// //             imageUrl
// //             description
// //             dateAdded
// //         }
// //     }
    
// //     `;
// //     const MARK_VISITED = gql`
// //     mutation MarkVisited($id: ID!){
// //         markVisited(id:$id)
// //         visitedCount
// //     }
// //     `;

// //     function OfferListing(){
// //         const {loading, error , data }= useQuery(GET_LATEST_OFFERS);
// //         const [markVisited]= useMutation(MARK_VISITED);
// //         if (loading){
// //             return <div>loading offers</div>;
// //         }if (error){
// //             return<div>failed to load offers</div>
// //         }
// //         const handleOfferClick = (id)=>{
// //             markVisited({
// //                 variables:{id},
// //                 update (cache, {data:{markVisited}}){
// //                     // TODO:update the cache
// //                 },
// //             })
// //         }
// //     }
    

// //     return (
// //         <ul>
// //             {data.offers.map((offer)=>(
// //                 <li key={offer.id}>
// //                 <OfferTile
// //                 name ={offer.name}
// //                 visitedCount={offer.visitedCount}
// //                 price{`${offer.price.value`} ${offer.price.currency}`}
// //                 imageUrl = {offer.imageUrl}
// //                 description ={offer.description}||""}
// //                 clickHandler={()=> handleOfferClick(offer.id)}
// //                 />
// //                 </li>
// //             ))}

// //         </ul>

// //     );
// // }

// // solve the errors form the above code

// // Path: frontend/src/components/frfr.jsx

// import OfferTile from "./OfferTile.js";

// export default function OfferListing() {
//     // Use console.log() for debugging
//     const client = new AppolloClient ({
//         uri : " my Uri here",
//         cache :new InMemoryCache(),
//     });
//     const GET_LATEST_OFFERS = gql`
//     query GetLatestOffers{
//         offers(orderBy:{DATE_ADDED: DESC}, first:10){
//             id
//             name
//             visitedCount
//             price{
//                 value
//                 currency
//             }
//             imageUrl
//             description
//             dateAdded
//         }
//     }

//     `;
//     const MARK_VISITED = gql`
//     mutation MarkVisited($id: ID!){
//         markVisited(id:$id)
//         visitedCount
//     }
//     `;
//     function OfferListing(){
//         const {loading, error , data }= useQuery(GET_LATEST_OFFERS);
//         const [markVisited]= useMutation(MARK_VISITED);
//         if (loading){
//             return <div>loading offers</div>;
//         }if (error){
//             return<div>failed to load offers</div>
//         }
//         const handleOfferClick = (id)=>{
//             markVisited({
//                 variables:{id},
//                 update (cache, {data:{markVisited}}){

//                 },
//             })
//         }
//     }

//     return (
//         <ul>
//             {data.offers.map((offer)=>(
//                 <li key={offer.id}>
//                 <OfferTile
//                 name ={offer.name}
//                 visitedCount={offer.visitedCount}
//                 price{`${offer.price.value`} ${offer.price.currency}`}
//                 imageUrl = {offer.imageUrl}
//                 description ={offer.description}||""}
//                 clickHandler={()=> handleOfferClick(offer.id)}
//                 />
//                 </li>
//             ))}
//         </ul>
//     );
// }

// // solve the errors form the above code