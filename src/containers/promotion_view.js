import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions';

class Promotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course_name: "",
            beacon_name: "",
            beacon_uuid: "",
            beacon_id: "",
            student_fornames: "",
            student_name: "",
            student_email: "",
            student_mobile: "",
        };
    }

    componentWillMount() {
        this.props.getPromotionAPI(this.props.params.id);
        this.props.getBeaconsAPI();
    }

    handlePostStudent() {
        if (this.state.student_fornames && this.state.student_name &&
            this.state.student_email && this.state.student_mobile) {
            const forenames = this.state.student_fornames;
            const lastname = this.state.student_name;
            const email = this.state.student_email;
            const phoneMobile = this.state.student_mobile;
            const promotion = this.props.promotions.selected.id;
            this.props.postStudentAPI({forenames, lastname, email, phoneMobile, promotion});
            this.setState({
                student_fornames: "",
                student_name: "",
                student_email: "",
                student_mobile: "",
            });
        }
    }

    handlePostCourse() {
        if (this.state.course_name) {
            const name = this.state.course_name;
            const promotion = this.props.promotions.selected.id;
            this.props.postCourseAPI({name, promotion});
            this.setState({course_name: ""});
        }
    }

    handlePatchPromotionBeacon() {
        if (this.state.beacon_id) {
            const promotion = this.props.promotions.selected.id;
            const beacon = this.state.beacon_id
            this.props.patchBeaconInPromotionAPI(promotion, beacon);
            this.setState({beacon_id: ""});
        }
    }

    handlePostBeacon(){
        if (this.state.beacon_name && this.state.beacon_uuid) {
            const name = this.state.beacon_name;
            const secureUuid = this.state.beacon_uuid;
            this.props.postBeaconAPI({name, secureUuid});
            this.setState({beacon_name: "", beacon_uuid: ""});
        }
    }

    render() {
        if (!this.props.promotions.selected) return <div>chargement ...</div>;

        return (
            <div>
                <h1>{this.props.promotions.selected.name}</h1>
                <h4>Statistiques ?</h4>
                <hr/>
                <h4>Étudiants</h4>
                <ul>
                    {this.props.promotions.selected.students.map(student => {
                        return (
                            <li key={student.id}>
                                <Link to={"/students/" + student.id}>{student.fullname}</Link> - <i>{student.status}</i>
                            </li>
                        );
                    })}
                    <li>
                        <input
                            placeholder="prénoms"
                            value={this.state.student_fornames}
                            onChange={evt => this.setState({student_fornames: evt.target.value})}/>
                        <br/>
                        <input
                            placeholder="nom de famille"
                            value={this.state.student_name}
                            onChange={evt => this.setState({student_name: evt.target.value})}/>
                        <br/>
                        <input
                            placeholder="email"
                            value={this.state.student_email}
                            onChange={evt => this.setState({student_email: evt.target.value})}/>
                        <br/>
                        <input
                            placeholder="téléphone mobile"
                            value={this.state.student_mobile}
                            onChange={evt => this.setState({student_mobile: evt.target.value})}/>
                        <br/>
                        <button onClick={this.handlePostStudent.bind(this)}>ajouter un étudiant</button>
                    </li>
                </ul>
                <hr/>
                <h4>Matières</h4>
                <ul>
                    {this.props.promotions.selected.courses.map(course => {
                        return (
                            <li key={course.id}>
                                {course.name}
                            </li>
                        );
                    })}
                    <li>
                        <input
                            placeholder="name"
                            value={this.state.course_name}
                            onChange={evt => this.setState({course_name: evt.target.value})}/>
                        <br/>
                        <button onClick={this.handlePostCourse.bind(this)}>ajouter une matière</button>
                    </li>
                </ul>
                <hr/>
                <h4>Beacons</h4>
                <ul>
                    {this.props.promotions.selected.beacons.map(beacon => {
                        return (
                            <li key={beacon.id}>
                                {beacon.name}
                            </li>
                        );
                    })}
                    <li>
                        <select onChange={evt => this.setState({beacon_id: evt.target.value})}>
                            <option value="">-</option>
                            {this.props.beacons.all.filter(beacon => {
                                const beacons = this.props.promotions.selected.beacons;
                                let exists = false;

                                beacons.forEach(_beacon => {
                                    if (_beacon.id == beacon.id) exists = true;
                                });

                                return !exists;
                            }).map(beacon => {
                                return (
                                    <option key={beacon.id} value={beacon.id}>{beacon.name}</option>
                                );
                            })}
                        </select>
                        <br/>
                        <button onClick={this.handlePatchPromotionBeacon.bind(this)}>ajouter un beacon existant</button>
                        <br/>
                        <input
                            placeholder="name"
                            value={this.state.beacon_name}
                            onChange={evt => this.setState({beacon_name: evt.target.value})}/>
                        <br/>
                        <input
                            placeholder="secure UUID"
                            value={this.state.beacon_uuid}
                            onChange={evt => this.setState({beacon_uuid: evt.target.value})}/>
                        <br/>
                        <button onClick={this.handlePostBeacon.bind(this)}>ajouter un nouveau beacon</button>
                    </li>
                </ul>
                <hr/>
                <h4>Années ?</h4>
            </div>
        );
    }
}

function mapStateToProps({promotions, beacons}) {
    return {promotions, beacons};
}

export default connect(mapStateToProps, actions)(Promotion);
