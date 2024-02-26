import dividerDesktop from '../assets/img/pattern-divider-desktop.svg'
import iconDice from '../assets/img/icon-dice.svg'
import useAdvice from '../hooks/useAdvice'
import Spinner from './Spinner';

const Card = () => {
    const { getData, data, loading } = useAdvice();

    return (
        <div className="m-auto relative flex items-center w-11/12 sm:w-auto">
            <div className="bg-dark-grayish-blue w-96 min-h-60 p-7 flex flex-col gap-4 items-center justify-center text-center rounded-xl">
                <p className="text-[8.7px] uppercase text-neon-green font-bold tracking-[3px]">Advice # 117</p>

                {
                    loading ?
                        <Spinner />
                        :
                        <h2 className="text-light-cyan text-xl font-bold"> &ldquo;{data.advice}&rdquo;</h2>
                }

                <div className="flex items-center justify-between py-2">
                    <div className="flex-grow border-t border-light-cyan"></div>
                    <img src={dividerDesktop} alt="Divider desktop" />
                    <div className="flex-grow border-t border-light-cyan"></div>
                </div>
            </div>
            <button
                className="absolute -bottom-5 left-0 right-0 m-auto rounded-full bg-neon-green p-3 hover:shadow-[0px_0px_20px_0px_#00FF7F] w-fit"
                onClick={() => getData()}
            >
                <img src={iconDice} alt="Button Advice" className="w-4" />
            </button>
        </div>
    )


}

export default Card