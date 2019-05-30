import React, { Component, Fragment } from 'react';
import '../../styles/dashboard.css';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createParty, getParty } from '../../actions';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';
import ToastMessage from '../common/ToastMessage';
import PartyCard from '../common/partiesCard';
import apcLogo from '../../images/apclogo.jpg';


class PartiesAdmin extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount () {
        const { listParties } = this.props;
        listParties();
    }
    componentDidUpdate (prevProps) {
        const { createPartyError, status, errorMessage } = this.props;
        if (prevProps.createPartyError !== createPartyError) {
            if (status >= 400) {
                toast(<ToastMessage message={errorMessage} />, {
                    type: 'error',
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 5000
                });
            }
            if (!createPartyError) {
                toast(<ToastMessage message="Party successfully created" />, {
                    type: 'success',
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 0
                });
            }
        }
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit (e) {
        e.preventDefault();
        const { createNewParty } = this.props;
        const partyData = {
            name: this.state.partyname,
            alias: this.state.alias,
            hqAddress: this.state.partyaddress,
            logoUrl: this.state.partyLogo
        };

        createNewParty(partyData);
    }
    render () {
        const { parties, isAdmin } = this.props;
        return (
            <div>
                <Header />
                <SideBar />
                <div className="main-content">
                    <div className="title">
                        parties /
                    </div>

                    {isAdmin && (
                        <div className="main">


                            <div className="widget widget_table" style={{ overflow: 'auto' }}>
                                <div className="title heado">Create New Political Party</div>
                                <div className="widget_stat widget_stat_table">
                                    <div style={{ overflow: 'auto' }}>
                                        <form onSubmit={this.onSubmit}>

                                            <div className="input-group">

                                                <label>Party Name</label>
                                                <input
                                                    type="text"
                                                    name="partyname"
                                                    placeholder="Party Name"
                                                    id="partyName"
                                                    onChange={this.onChange}
                                                    value={this.state.partyname}
                                                />

                                            </div>
                                            <div className="input-group">

                                                <label>Abbreviation</label>
                                                <input
                                                    type="text"
                                                    name="alias"
                                                    placeholder="Party Initials (APC,PDP)"
                                                    id="partyAbbreviation"
                                                    onChange={this.onChange}
                                                    value={this.state.alias}
                                                />

                                            </div>
                                            <div className="input-group">

                                                <label>HQ Address</label>
                                                <input
                                                    type="text"
                                                    name="partyaddress"
                                                    placeholder="Head Quarters Address"
                                                    id="hqAddress"
                                                    onChange={this.onChange}
                                                    value={this.state.partyaddress}
                                                />

                                            </div>
                                            <div className="input-group">
                                                <label>Party Logo</label>
                                                <input
                                                    type="text"
                                                    name="partyLogo"
                                                    placeholder="https://imagelogourl.com/image.jpg"
                                                    accept="image/gif, image/png, image/jpeg"
                                                    id="partyLogo"
                                                    onChange={this.onChange}
                                                    value={this.state.partyLogo}
                                                />
                                            </div>


                                            <div className="input-group">
                                                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    className="btn"
                                                    id="createPartyBtn"
                                                >Create Party</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <main className="cards">
                        {parties && parties.map((party) => {
                            return (
                                <Fragment key={party.id}>
                                    <PartyCard image={party.logourl ? party.logourl : apcLogo} name={party.name} alias={party.alias} address={party.hqaddress} />
                                </Fragment>
                            );
                        })}

                    </main>
                </div>
                <Footer />
            </div>

        );
    }
}

const mapDispatchToProps = {
    listParties: getParty,
    createNewParty: createParty
};

const mapStateToProps = (state) => ({
    parties: state.party.party,
    createPartyError: state.party.createPartyError,
    status: state.party.status,
    errorMessage: state.party.error
});
export default connect(mapStateToProps, mapDispatchToProps)(PartiesAdmin);

