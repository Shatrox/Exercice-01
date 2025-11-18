import style from './Welcome.module.css';


export default function Welcome({Name, Age = 18}){

    return(
        <>
            <div className={style['exercise-01']}>
                <p>Bienvenue {Name} sur l'application React!</p>
                <p>Vous avez {Age} ans!</p>
            </div>
        </>
    );
} 