import MainNav from "./MainNav"
import MainComponentTitle from "./MainComponentTitle"
import MainComponentHeader from "./MainComponentHeader"
import MainImg from "./MainImg"
import EmailActions from './EmailActions'

function Main() {

    return (
        <main className="email-view">

            <MainNav />

            <article className="email-content">

                <MainComponentTitle />

                <MainComponentHeader />
                
                <MainImg />

                <EmailActions />

            </article>

        </main>
    )

}

export default Main