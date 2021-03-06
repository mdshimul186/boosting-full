import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../components/Layouts/HeaderThree';
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
// import PageTitle from '../components/pricing/PageTitle'
import PricingPlan from '../components/home-one/Pricing'
import Dashboard from '../components/dashboard/Dashboard'
import withAuth from '../utils/withAuth'

class Pricing extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <HeaderThree />
                {/* <PageTitle /> */}
                <Dashboard />
                {/* <Footer /> */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default withAuth(Pricing)