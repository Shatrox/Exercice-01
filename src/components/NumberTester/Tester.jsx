

export default function Tester({nb}){

    if(isNaN (nb)){
        return(
        
            <p>The number is invalid!</p>

        )
    }

    return(

        <p>The number {nb} is {nb % 2 === 0 ? 'even' : 'odd'}</p>
    )
        
    

}