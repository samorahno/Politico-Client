import React, { Component } from 'react';
import '../../styles/dashboard.css';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createOffice, getOffice } from '../../actions';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';
import ToastMessage from '../common/ToastMessage';
import ListOffices from '../../components/common/ListOffices';


class OfficeAdmin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            officename: '',
            type: ''
        };
        this.modal = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount () {
        const { listOffices } = this.props;
        listOffices();
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit (e) {
        e.preventDefault();
        const { createNewOffice, createOfficeError, status, errorMessage } = this.props;
        const officeData = {
            name: this.state.officename,
            type: this.state.type
        };

        createNewOffice(officeData);
        if (createOfficeError && status >= 400) {
            toast(<ToastMessage message={errorMessage} />, {
                type: 'error',
                closeButton: false,
                hideProgressBar: true,
                autoClose: 5000
            });
        }

        if (!createOfficeError && status === 200) {
            toast(<ToastMessage message="Office successfully created" />, {
                type: 'success',
                closeButton: false,
                hideProgressBar: true,
                autoClose: 0
            });
        }
    }

    render () {
        const { isAdmin, offices } = this.props;
        return (
            <div>
                <Header />
                <SideBar />
                <div className="main-content">
                    <div className="title">
                        office /
                    </div>

                    {isAdmin && (
                        <div className="main">
                            <div className="widget widget_table" style={{ overflow: 'auto' }}>
                                <div className="title heado">Create New Political Office</div>
                                <div className="widget_stat widget_stat_table">
                                    <div className = "success-msg" id = "success-msg" />
                                    <div className = "warning-msg" id = "warning-msg" />
                                    <div className = "error-msg" id = "error-msg" />
                                    <div className = "info-msg" id = "info-msg" />
                                    <div style={{ overflow: 'auto' }}>
                                        <form action="#" method="GET" onSubmit={this.onSubmit}>

                                            <div className="input-group">

                                                <label>Office Name</label>
                                                <input
                                                    type="text"
                                                    name="officename"
                                                    placeholder="Office Name"
                                                    id="officeName"
                                                    onChange={this.onChange}
                                                    value={this.state.officename}
                                                />
                                            </div>
                                            <div className="input-group">
                                                <label>Office Type</label>
                                                <select id="officeType" name="type" onChange={this.onChange} value={this.state.value}>
                                                    <option value="">Select office type</option>
                                                    <option value="federal">Federal Government</option>
                                                    <option value="legislative">Legislative Government</option>
                                                    <option value="state">State Government</option>
                                                </select>
                                            </div>

                                            <div className="input-group">
                                                <label>&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;</label>
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    className="btn"
                                                    id="officeBtn"
                                                >Create Office</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="main">
                        <ListOffices offices={offices}/>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

const mapDispatchToProps = {
    createNewOffice: createOffice,
    listOffices: getOffice
};

const mapStateToProps = (state) => ({
    offices: state.office.office,
    createOfficeError: state.office.createOfficeError,
    status: state.office.status,
    errorMessage: state.office.error
});
export default connect(mapStateToProps, mapDispatchToProps)(OfficeAdmin);
